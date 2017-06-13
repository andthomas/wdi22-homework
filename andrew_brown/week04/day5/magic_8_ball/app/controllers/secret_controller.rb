class SecretController < ApplicationController

  def front
  end

  def play

    @rand = (1 + rand(10))

    @guess = params["guess"].to_f

    # while @rand != @guess

    if @rand == @guess
      @ans = "You correctly guessed #{ @rand }"
    else
      @ans = "Guess again!"
    end

  end
end
