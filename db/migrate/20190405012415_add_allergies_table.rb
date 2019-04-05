class AddAllergiesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :allergies do |t|
      t.string :name
      t.boolean :is_ingredient
    end
  end
end
