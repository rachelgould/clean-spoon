class FridgeIngredientsController < ApplicationController

  def index #Expiry dates not added yet
    user = User.find(params[:userId])
    fridge_ingredients = user.fridge_ingredients
    ingredients = []
    fridge_ingredients.each do |i|
      ingredients << {
        name: i.ingredient[:name],
        image: i.ingredient[:image],
        id: i[:ingredient_id]
      }
    end
    json_response(ingredients)
  end

  def create
    user = User.find(params[:userId])
    if (AllowedItems.instance.allowed_ingredients[params[:name]])
      ingredient = Ingredient.find_or_create_by(name: params[:name])
      fridge_ingredient = ingredient.fridge_ingredients.create!(fridge_id: user.fridge.id)
      json_response("Success": "Ingredient added to fridge")
    else
      json_response("Failure": "Not a valid ingredient")
    end
  end

  def destroy
    FridgeIngredient.destroy(params[:fridgeIngredientId])
    json_response("Success": "Ingredient removed from fridge")
  end

end