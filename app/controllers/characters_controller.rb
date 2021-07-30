class CharactersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def show
    @character = Character.find(params[:id])
    render :show
  end

  # index page select character from image
  def create
    if params[:name] == "kara"
      name = "Kara Danvers"
    else
      name = "Lena Luthor"
    end

    @character = Character.new(name: name)
    name = @character.name.partition(" ").first.downcase
    @character.head = name + "_head_hands_2.png"
    @character.body = name + "_body.png"
    @character.legs = name + "_body_legs.png"
    @character.save
    
    redirect = { url: "/characters/#{@character.id}" }
    render json: redirect
  end

  # select a character from the drop down
  def select
    if params[:character].empty?
      puts "hello"
      flash[:alert] = "You must select a character to continue"
      redirect_to root_path
      return
    end

    @character = Character.new(name: params[:character])
    name = @character.name.partition(" ").first.downcase
    @character.head = name + "_head_hands_2.png"
    @character.body = name + "_body.png"
    @character.legs = name + "_body_legs.png"
    @character.save
    redirect_to @character
  end

  # private
  #   def character_params
  #     params.require(:character).permit(:id, :name)
  #   end
end
