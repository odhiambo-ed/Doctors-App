class Physician < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments

  validates :name, presence: true
  validates :bio, presence: true
  validates :photo, presence: true
  validates :specialization, presence: true
  validates :consultation_fee, presence: true
  validates :city, presence: true
end
