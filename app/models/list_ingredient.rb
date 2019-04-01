class List_ingredient < ApplicationRecord
 
  belongs_to :fav_recipe

  validates :name, presence: true
  validates :fav_recipe, presence: true

end
