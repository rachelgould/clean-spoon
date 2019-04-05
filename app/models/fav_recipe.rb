class FavRecipe < ApplicationRecord
 
  belongs_to :user
  
  validates :user, presence: true
  validates :yummly_id, presence: true

end
