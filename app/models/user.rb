class User < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }
  # validates :email, presence: true, length: { maximum: 60 }
end
