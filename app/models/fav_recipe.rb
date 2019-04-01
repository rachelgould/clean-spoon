class FavRecipe < ApplicationRecord
 
  belongs_to :user
  belongs_to :recipe
  has_many :list_ingredients
  
  validates :user, presence: true
  validates :recipe, presence: true

end
