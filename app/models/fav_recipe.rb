class Fav_recipe < ApplicationRecord
 
  belongs_to :user
  belongs_to :recipe
  has_many :list_ingredients

end
