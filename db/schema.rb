# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190405012822) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "allergies", force: :cascade do |t|
    t.string  "name"
    t.boolean "is_ingredient"
  end

  create_table "fav_recipes", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "yummly_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fav_recipes_on_user_id", using: :btree
  end

  create_table "fridge_ingredients", force: :cascade do |t|
    t.integer  "ingredient_id"
    t.integer  "fridge_id"
    t.date     "expiry_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["fridge_id"], name: "index_fridge_ingredients_on_fridge_id", using: :btree
    t.index ["ingredient_id"], name: "index_fridge_ingredients_on_ingredient_id", using: :btree
  end

  create_table "fridges", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fridges_on_user_id", using: :btree
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.string "image"
  end

  create_table "list_ingredients", force: :cascade do |t|
    t.string   "recipe_name"
    t.string   "list_tagline"
    t.integer  "ingredient_id"
    t.integer  "user_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["ingredient_id"], name: "index_list_ingredients_on_ingredient_id", using: :btree
    t.index ["user_id"], name: "index_list_ingredients_on_user_id", using: :btree
  end

  create_table "user_allergies", force: :cascade do |t|
    t.integer  "allergy_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["allergy_id"], name: "index_user_allergies_on_allergy_id", using: :btree
    t.index ["user_id"], name: "index_user_allergies_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.boolean  "vegan"
    t.boolean  "vegetarian"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "fav_recipes", "users"
  add_foreign_key "fridge_ingredients", "fridges"
  add_foreign_key "fridge_ingredients", "ingredients"
  add_foreign_key "fridges", "users"
  add_foreign_key "list_ingredients", "ingredients"
  add_foreign_key "list_ingredients", "users"
  add_foreign_key "user_allergies", "allergies"
  add_foreign_key "user_allergies", "users"
end
