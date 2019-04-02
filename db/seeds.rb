# This file will seed all data needed


# Helper Functions

# Images will be stored in the seed_images folder
# Which can then be seeded by using> image: get_image('profile.jpg')
def get_image file_name
  File.open(Rails.root.join('db', 'seed_images', file_name))
end


# Delete all memory
puts "Dropping all table data"
#-----------------------------------
ListIngredient.destroy_all
FridgeIngredient.destroy_all
FavRecipe.destroy_all
Ingredient.destroy_all
Recipe.destroy_all
User.destroy_all


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
  image: get_image("mustard.jpg")
)

puts "Seeding list ingredients"
#-----------------------------------

tristan_cart.list_ingredients.create!(
  ingredient_id: mustard.id
)