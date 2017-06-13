var atm = {

    checking: 0,

    savings: 0,

    overdraft: 0,

    movement: function(account, amount) {
      this[ account ] += amount;
      this.overdraft += amount;
      return;
    },

    transaction: function( account, type, amount ) {

    //For checking deposits
    if ( type === "deposit" && account === "checking" ) {
        this.movement(account, amount);

    //For savings deposits
      } else if ( type === "deposit" && account === "savings" ) {
        this.movement(account, amount);
      }

    // For withdrawals
      else if ( type === "withdraw" ) {

    // Do not go through with transaction if the amount exceeds the overdraft limit
    if ( amount > this.overdraft ) {
    alert( "Insufficient funds" );
    return;
    }

    //Regular withdrawal
    if ( account === "checking" ) {
      if (amount < this[ account ]) {
        this.movement(account, -amount);

        //Withdraw from other account if amount exceeds the overdraft
      } else {
        this.savings += this[ account ] - amount;
        this[ account ] = 0;
        this.overdraft -=amount;
        return;
      }

    //Regular withdrawal
    } else if ( account === "savings" ) {
      if (amount < this[ account ]) {
        this.movement(account, -amount);

        //Withdraw from other account if amount exceeds the overdraft
      } else {
        this.checking += this[ account ] - amount;
        this[ account ] = 0;
        this.overdraft -= amount;
        return;
        }
      }
    }
  }
}

$(document).ready(function(){

var valCheck = function() {
  if(amount <= 0 || isNaN(amount)) {
    alert('Please enter a non-negative integer');
    return;
  }
}


var bgrndCheck = function() {
  var boxC = $("#checking-balance");
  var boxS = $("#savings-balance");


  if (parseInt(atm.checking) == 0){
    boxC.css('background-color', 'red');
  } else {
    boxC.css('background-color', '#E3E3E3');
  }

 if (parseInt(atm.savings) == 0){
    boxS.css('background-color', 'red');
  } else {
    boxS.css('background-color', '#E3E3E3');
  }
}

  $("#checking-deposit").on('click', function() {
    var amount = $('#checking-amount').val();
    var amount = parseInt(amount);
    valCheck();
    atm.transaction("checking", "deposit", amount);
    bgrndCheck();
    $("#checking-balance").text("$" + atm.checking);
    $("#savings-balance").text("$" + atm.savings);
  });

  $("#checking-withdraw").on('click', function() {
    var amount = $('#checking-amount').val();
    var amount = parseInt(amount);
    valCheck();
    atm.transaction("checking", "withdraw", amount);
    bgrndCheck();
    $("#checking-balance").text("$" + atm.checking);
    $("#savings-balance").text("$" + atm.savings);
  });

  $("#savings-deposit").on('click', function() {
    var amount = $('#savings-amount').val();
    var amount = parseInt(amount);
    valCheck();
    atm.transaction("savings", "deposit", amount);
    bgrndCheck();
    $("#checking-balance").text("$" + atm.checking);
    $("#savings-balance").text("$" + atm.savings);
  });

  $("#savings-withdraw").on('click', function() {
    var amount = $('#savings-amount').val();
    var amount = parseInt(amount);
    valCheck();
    atm.transaction("savings", "withdraw", amount);
    bgrndCheck();
    $("#checking-balance").text("$" + atm.checking);
    $("#savings-balance").text("$" + atm.savings);
  });

});
