class Physician < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :users, through: :appointments

  validates :name, presence: true, allow_blank: false, length: { maximum: 250 }
  validates :bio, presence: true
  validates :photo, presence: true
  validates :specialization, presence: true
  validates :consultation_fee, presence: true,
                               numericality: {
                                 only_integer: true,
                                 greater_than: 0,
                                 message: 'Quantity must be greater than 0'
                               }
  validates :city, presence: true
end
