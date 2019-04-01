# This file will seed all data needed


# Helper Functions

# Images will be stored in the seed_images folder
# Which can then be seeded by using> image: get_image('profile.jpg')
def get_image file_name
  File.open(Rails.root.join('db', 'seed_images', file_name))
end


# Delete all memory
puts "Dropping all tables"
#-----------------------------------
ListIngredient.destroy_all
FridgeIngredient.destroy_all
FavRecipe.destroy_all
Recipe.destroy_all
User.destroy_all

# SHOPPING LIST (NOT ON RECIPE)
puts "Seeding recipes"
#-----------------------------------

cart = Recipe.create!({
  yummily_id: "nil",
  name: "cart",
  instructions: "nil",
  preparations: "nil"
})

# USERS
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

# FAV RECIPES
puts "Seeding fav_recipes"
#-----------------------------------

tristan_cart = tristan.fav_recipes.create!({
  recipe_id: cart.id,
})

# List Ingredients
puts "Seeding list ingredients"
#-----------------------------------

tristan_cart.list_ingredients.create!(
  name: "mustard"
)