class ListIngredient < ApplicationRecord
 
  belongs_to :user
  belongs_to :ingredient

  validates :ingredient, presence: true
  validates :user, presence: true
end
