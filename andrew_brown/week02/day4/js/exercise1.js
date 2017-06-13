// # Exercises: Animation
//
// ## The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// ```
//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
//
// ## [Here is some inspiration](https://gist.github.com/ga-wolf/ae7d0e1df214e45213c5)


// var cat = document.getElementById("cat");
//
// var maxWidth = 200;
//
// cat.style.position = 'absolute';
// cat.style.left = '0px';
//
// var walking = function() {
//   var oldLeft = parseInt(cat.style.left);
//   var newLeft = oldLeft + 1;
//   cat.style.left = newLeft + 'px';
//
// if ( parseInt (cat.style.left) >= maxWidth)
//   cat.style.transform = "scaleX(-1)";
//   //window.FunctionName=function(){return false;};
//
//   }
// window.setInterval(walking, 9);
//
// var jackson = document.getElementById("jackson");
//
// var maxWidth = 200;
//
// jackson.style.position = 'absolute';
// jackson.style.left = '0px';
//
// var walking = function() {
//   var oldLeft = parseInt(jackson.style.left);
//   var newLeft = oldLeft + 1;
//   jackson.style.left = newLeft + 'px';
//
// if ( parseInt (jackson.style.left) >= maxWidth)
//   jackson.style.transform = "scaleX(-1)";
//   //window.FunctionName=function(){return false;};
//
//   }
//
// window.setInterval(walking, 9);

var $cat = '#cat';

$(document).ready(function() {
  $($cat).mouseover(function() {
    $(this).animate({
      //height: '-10px',
      right: '0px'
    });
  });
});

$($cat).click(function() {
  $(this).animate({
    height: '-10px',
  });
});
