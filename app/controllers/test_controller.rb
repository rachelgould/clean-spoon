class TestController < ApplicationController
  def show
    user = User.find(1)
    ingredient = Ingredient.find_or_create_by(name: "pancakes")
    fridge = user.fridge
    fridge_ingredient = ingredient.fridge_ingredients.create!(
      fridge_id: fridge.id
    )

    json_response(user.fridge_ingredients)
  end
end