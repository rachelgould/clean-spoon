class AddFridgeIngredientsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :fridge_ingredients do |t|
      t.references :ingredient, index: true, foreign_key: true
      t.references :fridge, index: true, foreign_key: true
      t.date :expiry_date
      t.timestamps null: false
    end
  end
end
