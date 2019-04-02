class ListIngredient < ApplicationRecord
 
  belongs_to :fav_recipe
  belongs_to :ingredient

  validates :ingredient, presence: true
  validates :fav_recipe, presence: true

end
