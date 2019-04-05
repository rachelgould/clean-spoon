class FridgeIngredientsController < ApplicationController

  def index #Expiry dates not added yet
    @user = User.find(params[:userId])
    @fridge_ingredients = @user.fridge_ingredients
    @ingredients = []
    @fridge_ingredients.each do |i|
      @ingredients << {
        name: i.ingredient[:name],
        image: i.ingredient[:image],
        id: i[:ingredient_id]
      }
    end
    json_response(@ingredients)
  end

  def create
    @ingredient_name = params[:name]
    @matching_ingredient = Ingredient.find_or_create_by(name: @ingredient_name)
    @fridge_ingredient = @matching_ingredient.fridge_ingredient.create!(user_id: params[:userId])
    json_response("Success": "Ingredient added to fridge")
  end

  def destroy
    FridgeIngredient.destroy(params[:fridgeIngredientId])
    json_response("Success": "Ingredient removed from fridge")
  end

end