class AddInitialTables < ActiveRecord::Migration[5.0]

  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      #t.string :password_digest # Users do not need login security during development

      t.timestamps null: false
    end

    create_table :recipes do |t|
      t.string :yummily_id
      t.string :name
      t.text :instructions
      t.text :preparations
      t.string :ingredients, array: true
    end

    create_table :fav_recipes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :recipe, index: true, foreign_key: true

      t.timestamps null: false
    end

    create_table :preferences do |t|
      t.boolean :vegan
      t.boolean :vegetarian
      t.boolean :gf
      t.string :allergies, array: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end

    create_table :fridge_ingredients do |t|
      t.string :name
      t.references :user, index: true, foreign_key: true
      t.date :expiry_date

      t.timestamps null: false
    end

    create_table :list_ingredients do |t|
      t.string :name
      t.references :fav_recipe, index: true, foreign_key: true #optional

      t.timestamps null: false
    end
  end
end
