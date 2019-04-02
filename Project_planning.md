# FINAL PROJECT PLANNING

# Description

CleanSpoon: An app where users can input the items in their fridge, browse recipes that use ingredients they have, and generate grocery lists.

# User Stories

I want to _add_ **ingredients** to my **fridge**, and optionally enter the **expiry date**.

I use the search bar to find the ingredients I have.

---

I want to _remove_ **ingredients** from my **fridge**.

When viewing everything in my fridge, I can click the delete button next to an ingredient I don't have anymore.

---

I want to _set_ my **dietary preferences** and **allergies** so I don't get recipes I can't eat.

From my profile I can set dietary restrictions, which can also be modified when I'm searching for recipes.

---

I want to _search_ for **recipes** based on what's in my **fridge**, and see what other ingredients are required.

From the homepage I can search for the recipes.

--- 

When _searching_ for **recipes**, I want **ingredients** I don't have to be added to my **shopping list**.

From the recipes list, I can see which recipes require ingredients I don't have, and add them to my list.

--- 

I want to be able to see my **shopping list** and _send_ it to a **mobile phone**.

From the shopping list, I can browse ingredients and send the whole list to a phone number. 

--- 

When _browsing_ **recipes**, I want to _filter_ the results by **calories**, number of **ingredients** I don't have, (meal).

I can easily filter the results using the UI.

---

When _browsing_ **recipes**, I want to _save_ specific **recipes** to my profile to come back to them later.

From the recipes screen, I can thumbs up recipes to save them.

---

I want to be able to _view_ my **expired ingredients**, but have them disappear from my main fridge after they're expired.

From the fridge view, I can see expired ingredients separately.

---

When something is **expired**, I want the option to _add_ it to my next **shopping list**.

From the fridge view, I see a notification when something becomes expired and have the option to add it to my next shopping list. 

---

When browsing my **shopping list**, I want to easily _add_ all the items to my **fridge** after I'm done shopping.

From the shopping list, I can click "add all to fridge" to add every item, or add individual items separately.

---

**STRETCH:**

When I go shopping, I want to be able to scan my receipt and have those items go automatically into my fridge.

---
---

# Database Planning

https://www.canva.com/design/DADVp7huS0Q/jeaC_KruWQI6th9qoDgFfQ/

---
---

# Tech Stack

Backend: Rails API + Postgres

Frontend: React App (Webpack) + Axios

Use Yummly API

# Routes

* Homepage: `GET /`
* Show user profile: `GET /users/user[:id]`
* Edit user profile: `POST /users/user[:id]`
* Create account: `POST /users/`

(Login and logout routes are not MVP)

Recipes:
* Browse saved recipes: `GET /recipes`
* Get recipes based on fridge items: `GET /recipes/search`
  * It gets the user's ingredients from cookie and then sends them to the api
* Add a saved recipe: `POST /recipes`
* Delete a saved recipe: `DELETE /recipes/recipe[:id]`

Fridge:
* Browse what's in your fridge: `GET /fridges/`
* Add to your fridge: `POST /fridges/`
* Delete from your fridge: `PUT /fridges/`
  * Must check if it's in the shopping list, and not delete the ingredient from DB if so

Shopping List:
* Browse what's in your shopping list: `GET /lists/`
* Add to your shopping list: `POST /lists/`
* Delete from your shopping list: `PUT /lists/`
  * Must check if it's in the fridge, and not delete the ingredient from DB if so

Allergies:
* Create a new allergy: `POST /allergies/`
* Delete from your allergies: `DELETE /allergies/allergy[:id]/`
---
---

# API Routes

Users:
* Get user details: `GET /api/users/user[:id]`
* Edit user profile: `POST /api/users/user[:id]`
* Create account: `POST /api/users/`

(Login and logout routes are not MVP)

Recipes:
* Get user's saved recipes: `GET /api/fav_recipes/user[:id]`
* Get recipes based on fridge items: `GET /api/recipes/user[:id]`
* Add a saved recipe: `POST /api/users/user[:id]/recipes/recipe[:id]`
* Delete a saved recipe: `DELETE /api/fav_recipes/fav_recipe[:id]`

Fridge:
* Browse what's in your fridge: `GET /api/fridges/user[:id]`
* Add to your fridge: `POST /api/fridges/user[:id]`
* Delete from your fridge: `DELETE /api/fridges/fridge_ingredient[:id]`

Shopping List:
* Browse what's in your shopping list: `GET /api/lists/user[:id]`
* Add to your shopping list: `POST /api/lists/user[:id]`
* Delete from your shopping list: `DELETE /api/lists/user[:id]`

Allergies:
* Create a new allergy: `POST /api/allergies/user[:id]`
* Delete from your allergies: `DELETE /api/allergies/allergy[:name]/`

---
---

# Workflow

* Same repo, add collaborators
* Code review before merging to master

---
---

# Wireframes

https://www.canva.com/design/DADVjFdd_9s/Fj1T39Og42aMGse9t0CE4w/view?utm_content=DADVjFdd_9s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

### Notes

* Add all recipes returned by the API to a DB "cache" so that they can be referenced later, and then favorite recipes can look in our recipes table for Yummly ID. 

* Ingredients belong to recipes (show the recipes that you're buying an ingredient for)

**Tech Stack Alt Ideas:**
* React Router
* _NO:_ Redux –> Lots of state happening everywhere (nightmare boilerplate)
  * Move "global state" into a Redux store 
  * You can subscribe to changes in the global store
  * Certain components can dispatch changes to the store
* React Hooks: Gives functional components the ability to create state on 1 variable at a time 