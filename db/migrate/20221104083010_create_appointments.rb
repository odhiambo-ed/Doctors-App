class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.text :reason
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :physician, null: false, foreign_key: true

      t.timestamps
    end
  end
end