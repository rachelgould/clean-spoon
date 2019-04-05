class Fridge < ApplicationRecord
 
  belongs_to :user
  has_many :fridge_ingredients
  has_many :ingredients, :through => :fridge_ingredients

  validates :user, presence: true
end
