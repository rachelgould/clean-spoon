class FridgeIngredient < ApplicationRecord
 
  belongs_to :user
  belongs_to :ingredient

  validates :user, presence: true
  validates :ingredient, presence: true

end
