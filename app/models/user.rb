class User < ApplicationRecord
 
  has_many :fav_recipes
  has_many :recipes, :through => :fav_recipes
  has_many :fridge_ingredients
  has_many :list_ingredients, :through => :fav_recipes

end
