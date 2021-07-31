class Api::ClothingsController < ApplicationController

  def index
    @clothing = Clothing.where(category: params[:type])
    render json: @clothing
  end

  def select
    @character = Character.find(params[:char_id])
    @clothing = Clothing.find(params[:id])

    # delete old clothing option for selected type e.g. delete old top if new top picked
    if @character.clothings.exists?(category: @clothing.category)
      @character.clothings.delete(@character.clothings.where(category: @clothing.category))
    end

    if @clothing.category == "dress"
      @character.clothings.delete(@character.clothings.where(category: :top))
      @character.clothings.delete(@character.clothings.where(category: :bottom))
    elsif @clothing.category == "top" || @clothing.category == "bottom"
      @character.clothings.delete(@character.clothings.where(category: :dress))
    end

    @character.clothings << @clothing 
    @characters = Character.all

    json = { characters: @characters, character: @character}
    render json: json

    # redirect = { url: "/characters/#{@character.id}" }
    # render json: redirect
  end
end
