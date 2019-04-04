class Ingredient < ApplicationRecord
  include IngredientImage

  before_save :get_image

  has_many :list_ingredients
  has_many :fridge_ingredients

  validates :name, presence: true

  def get_image
    self.image = IngredientImage::GetImage.new(name).call
  end
end
