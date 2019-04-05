class UserAllergy < ApplicationRecord
 
  belongs_to :user
  belongs_to :allergy

  validates :allergy, presence: true
  validates :user, presence: true
end
