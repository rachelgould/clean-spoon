class AddUserAllergiesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :user_allergies do |t|
      t.references :allergy, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
