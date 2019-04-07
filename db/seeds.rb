# This file will seed all data needed


# Helper Functions


# Delete all memory
puts "Dropping all table data"
#-----------------------------------
ListIngredient.destroy_all
FridgeIngredient.destroy_all
FavRecipe.destroy_all
UserAllergy.destroy_all
Fridge.destroy_all
Allergy.destroy_all
Ingredient.destroy_all
User.destroy_all

puts "Seeding users"
#-----------------------------------

tristan = User.create!({
  name: "tristan",
  email: "tristan@gmail.com",
  vegan: false,
  vegetarian: false
})

puts "Seeding Fridges"
Fridge.create!({
  user_id: tristan.id
})

puts "Seeding fav_recipes"
#-----------------------------------
tristan.fav_recipes.create!({
  yummly_id: '_Smokin-Jumbo-Hot-Dogs-with-Onions_-759174'
})

tristan.fav_recipes.create!({
  yummly_id: 'Vegan-Carrot-Hot-Dogs-1685612'
})

tristan.fav_recipes.create!({
  yummly_id: 'Pizza-Hot-Dogs-1708017'
})

tristan.fav_recipes.create!({
  yummly_id: 'Bacon-Wrapped-Hot-Dogs-with-Cheese-Sauce-2564245'
})

tristan.fav_recipes.create!({
  yummly_id: 'Hot-Dog-Roll-Ups-680595'
})

puts "Seeding ingredients"
#-----------------------------------

hotMustard = Ingredient.create!(
  name: "mustard"
)

ketchup = Ingredient.create!(
  name: "ketchup"
)

sauerkraut = Ingredient.create!(
  name: "apples"
)



puts "Seeding list ingredients"
#-----------------------------------

tristan.list_ingredients.create!(
  ingredient_id: hotMustard.id,
  recipe_name: "Hot Dogs with Krautslaw",
  list_tagline: "German mustard"
)

tristan.list_ingredients.create!(
  ingredient_id: ketchup.id,
  list_tagline: "Ketchup",
  recipe_name: "Hot Dogs with Krautslaw"
)

tristan.list_ingredients.create!(
  ingredient_id: sauerkraut.id,
  list_tagline: "1 Cup Sauerkraut, drained",
  recipe_name: "Hot Dogs with Krautslaw"
)

puts "Seeding items into fridge"
#-----------------------------------
tristan.fridge.fridge_ingredients.create!(
  ingredient_id: hotMustard.id,

)

tristan.fridge.fridge_ingredients.create!(
  ingredient_id: ketchup.id
)

tristan.fridge.fridge_ingredients.create!(
  ingredient_id: sauerkraut.id
)

puts "Seeding allergies"
#-----------------------------------
dairyAllergy = Allergy.create!(
  name: "dairy",
  is_ingredient: false
)

bananasAllergy = Allergy.create!(
  name: "bananas",
  is_ingredient: true
)

puts "Seeding user allergies"
#-----------------------------------
tristan.user_allergies.create!(
  allergy_id: dairyAllergy.id
)

tristan.user_allergies.create!(
  allergy_id: bananasAllergy.id
)