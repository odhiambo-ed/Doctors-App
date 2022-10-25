class CreatePhysicians < ActiveRecord::Migration[7.0]
  def change
    create_table :physicians do |t|
      t.string :name
      t.text :bio
      t.string :photo
      t.string :specialization
      t.integer :consultation_fee
      t.string :city

      t.timestamps
    end
  end
end
