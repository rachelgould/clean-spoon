class FridgeIngredientsController < ApplicationController

  def index #Expiry dates not added yet
    @user = User.find(params[:userId])
    @fridge_ingredients = @user.fridge_ingredients
    @ingredients = []
    @fridge_ingredients.each do |i|
      @ingredients << {
        name: i.ingredient[:name],
        image: i.ingredient[:image],
      }
    end
    json_response(@ingredients)
  end

  def create
    
  end

  def destroy

  end

end