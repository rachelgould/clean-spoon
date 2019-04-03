class User < ApplicationRecord
 
  has_many :fav_recipes
  has_many :recipes, :through => :fav_recipes
  has_many :fridge_ingredients
  has_many :list_ingredients, :through => :fav_recipes

  validates :name, presence: true
  validates :email, presence: true

  def authenticate
    self # this authentication method is replaced by has_secure_password for the non-demo app
  end

  def self.from_token_request request
    # Returns a valid user, `nil` or raise `Knock.not_found_exception_class_name`
    id = request.params["auth"] && request.params["auth"]["id"]
    self.find_by id: id
  end

end
