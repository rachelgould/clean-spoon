class AddUsersTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      #t.string :password_digest # Users do not need login security during development
      #preferences:
      t.boolean :vegan
      t.boolean :vegetarian
      t.timestamps null: false
    end
  end
end
