class Ingredient < ApplicationRecord

  has_many :list_ingredients
  has_many :fridge_ingredients

  validates :name, presence: true

end
