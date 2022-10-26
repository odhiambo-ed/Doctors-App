class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :physician

  validates :date, presence: true
  validates :time, presence: true
  validates :reason, presence: true
  validates :physician_id, presence: true
  validates :user_id, presence: true
end
