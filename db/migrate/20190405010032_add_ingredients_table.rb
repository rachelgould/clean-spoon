class AddIngredientsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :image
    end
  end
end
