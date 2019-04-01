# This file will seed all data needed


# Helper Functions

# Images will be stored in the seed_images folder
# Which can then be seeded by using> image: get_image('profile.jpg')
def get_image file_name
  File.open(Rails.root.join('db', 'seed_images', file_name))
end

# SHOPPING LIST (NOT ON RECIPE)

Recipe.destroy_all

cart = Recipe.create!({
  yummily_id: "nil",
  name: "cart",
  instructions: "nil",
  preparations: "nil"
})

# USERS

User.destroy_all

tristan = User.create!({
  name: "tristan",
  email: "tristan@gmail.com",
  vegan: false,
  vegetarian: false,
  gf: false,
  allergies: ["olives"]
})

# FAV RECIPES
Fav_recipe.destroy_all

tristan_cart = tristan.fav_recipes.create!({
  recipe_id: cart.id,
})

# List Ingredients

List_ingredient.destroy_all

tristan_cart.list_ingredients.create!(
  name: "mustard"
)