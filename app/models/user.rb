class User < ApplicationRecord
 
  has_many :fav_recipes
  has_many :fridge_ingredients, :through => :fridge
  has_many :list_ingredients
  has_one :fridge
  has_many :user_allergies
  has_many :allergies, :through => :user_allergies

  validates :name, presence: true
  validates :email, presence: true

end
