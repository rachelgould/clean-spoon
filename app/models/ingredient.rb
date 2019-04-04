class Ingredient < ApplicationRecord
  before_save :get_image

  has_many :list_ingredients
  has_many :fridge_ingredients

  validates :name, presence: true

  private
    def get_image
      if image.nil?
        puts "Finding picture for #{name}"
        
      end
    end
end
