class RpsController < ApplicationController

  def play

    @throw = params["throw"]

    @rand = (1 + rand(3))

    if @rand == 1
      @compans = "scissor"
    elsif @rand == 2
      @compans = "paper"
    else
      @compans = "rock"
    end

    if @compans == "scissor" && @throw == "paper" || @compans == "paper" && @throw == "rock" || @compans == "rock" && @throw == "scissor"
      @ans = "YOU LOSE!"
    elsif @compans == "scissor" && @throw == "rock" || @compans == "paper" && @throw == "scissor" || @compans == "rock" && @throw == "paper"
      @ans = "YOU ARE VICTORIOUS!"
    elsif @compans == @throw
      @ans = "DRAW!"
    end

  end
end
