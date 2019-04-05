class FridgeIngredient < ApplicationRecord
 
  belongs_to :fridge
  belongs_to :ingredient
  belongs_to :user

  validates :fridge, presence: true
  validates :ingredient, presence: true

end
