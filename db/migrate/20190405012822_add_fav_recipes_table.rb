class AddFavRecipesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :fav_recipes do |t|
      t.references :user, index: true, foreign_key: true
      t.string :yummly_id
      t.timestamps null: false
    end
  end
end
