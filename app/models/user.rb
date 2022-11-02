class User < ApplicationRecord
  has_secure_password

  has_many :appointments
  has_many :physicians, through: :appointments
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }
  validates :email, presence: true, length: { maximum: 60 }
  validates :password,
            confirmation: true,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
  validates :password_confirmation, presence: true
end
