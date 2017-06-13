class MagicController < ApplicationController

  def front
  end

  def play

    @x = params["x"]

    @ans = ["Yes", "Ask again", "It is certain", "No", "Of course", "Mabs, lol", "Probs not", "Nah yeah"].sample

  end
end
