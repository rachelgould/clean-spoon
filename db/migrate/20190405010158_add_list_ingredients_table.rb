class AddListIngredientsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :list_ingredients do |t|
      t.string :recipe_name
      t.string :list_tagline
      t.references :ingredient, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
