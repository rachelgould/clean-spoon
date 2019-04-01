class Recipe < ApplicationRecord
 
  has_many :fav_recipes

  validates :yummily_id, presence: true
  validates :name, presence: true
  validates :instructions, presence: true
  validates :preparations, presence: true
  #validates :ingredients, presence: true

end
