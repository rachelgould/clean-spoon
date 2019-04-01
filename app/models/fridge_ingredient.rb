class Fridge_ingredient < ApplicationRecord
 
  belongs_to :user

  validates :user, presence: true
  validates :name, presence: true

end
