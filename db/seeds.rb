# This file will seed all data needed


# Helper Functions


# Delete all memory
puts "Dropping all table data"
#-----------------------------------
ListIngredient.destroy_all
FridgeIngredient.destroy_all
FavRecipe.destroy_all
Ingredient.destroy_all
Recipe.destroy_all
User.destroy_all
Ingredient.destroy_all


puts "Seeding recipes"
#-----------------------------------
# Shopping list -> when an item does not belong to a recipe but is still in list ingredients
cart = Recipe.create!({
  yummily_id: "nil",
  name: "cart",
  instructions: "nil",
  preparations: "nil"
})

puts "Seeding users"
#-----------------------------------

tristan = User.create!({
  name: "tristan",
  email: "tristan@gmail.com",
  vegan: false,
  vegetarian: false,
  gf: false,
  allergies: ["olives"]
})

puts "Seeding fav_recipes"
#-----------------------------------

tristan_cart = tristan.fav_recipes.create!({
  recipe_id: cart.id,
})

puts "Seeding ingredients"
#-----------------------------------

mustard = Ingredient.create!(
  name: "mustard",
)

ketchup = Ingredient.create!(
  name: "ketchup",
)

relish = Ingredient.create!(
  name: "relish",
)

puts "Seeding list ingredients"
#-----------------------------------

tristan_cart.list_ingredients.create!(
  ingredient_id: mustard.id
)

tristan_cart.list_ingredients.create!(
  ingredient_id: ketchup.id
)

tristan_cart.list_ingredients.create!(
  ingredient_id: relish.id
)

puts "Seeding items into fridge"
#-----------------------------------
tristan.fridge_ingredients.create!(
  ingredient_id: mustard.id
)

tristan.fridge_ingredients.create!(
  ingredient_id: ketchup.id
)

tristan.fridge_ingredients.create!(
  ingredient_id: relish.id
)