# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

action = 0

until action == 7

  # Menu
  puts "Select a number for the action you wish to perform:
  1) Add
  2) Divide
  3) Subtract
  4) Multiply
  5) Power
  6) Square root
  7) Mortgage calculator
  8) BMI calculator
  9) Trip calculator
  10) Quit"
  action = gets.to_i

  # Quit button
  if action == 10
    exit
  end

  if action.between?(1, 6)

    puts "Enter your first number"
    first = gets.to_i

    if action != 6
      puts "Enter your second number"
      second = gets.to_i
    end

    if action == 6
      answer = Math.sqrt(first)
      op = "rooted by"
      second = "the square"
    end

    if action == 5
      answer = first ** second
      op = "to the power of"
    end

    if action == 4
      answer = first * second
      op = "multiplied by"
    end

    if action == 3
      answer = first - second
      op = "minus"
    end

    if action == 2
      answer = first / second
      op = "divided by"
    end

    if action == 1
      answer = first + second
      op = "plus"
    end

    puts "#{ first } #{ op } #{ second } equals #{ answer }"

  elsif action == 7

    puts "What is the principle?"
    principle = gets.to_i
    puts "What is the interest rate as a decimal?"
    rate = gets.to_f
    puts "How many payments need to be made?"
    pays = gets.to_i

    numerator = rate * (( 1 + rate ) ** pays )
    denominator = (( 1 + rate ) ** pays ) - 1

    monthly = (numerator/denominator) * principle

    puts "Your monthly repayments are $#{ monthly }"

  elsif action == 8

    puts "Metric or imperial?"
    sys = gets.chomp.downcase

    puts "Enter your weight"
    weight = gets.to_f

    puts "Enter your height"
    height = gets.to_f

      if sys == "metric"
        bmi =  weight / ( height ** 2 )
      elsif sys == "imperial"
        bmi = (weight / ( height ** 2 )) * 703
      end

    puts "Your BMI is #{ bmi }"

  elsif action == 9
    puts "How far are you going?"
    distance = gets.to_i

    puts "What kinda MPG you gettin there buddy?"
    mpg = gets.to_i

    puts "Whats the price per gallon in this crazy world we live in?"
    price = gets.to_f

    puts "How fast you travellin there, friend?"
    speed = gets.to_f

    time = distance / speed

    cost = ((distance / 100) * mpg) * price

    puts "The total trip will cost $#{ cost } and take #{ time } hours."

  end #menu (if)

end #until
