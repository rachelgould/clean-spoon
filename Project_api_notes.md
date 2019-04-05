Yummly API
========
---
#### Querying
- Api end point (where resources can be accessed) is at http://api.yummly.com/v1
- response is json
#####Crediting
- Must use the contents of the html field in a visable place near the other fields to credit yummly
- alternative is displaying the text, logo and a link to the url

##### Key Use
- X-Yummly-App-ID: app-id, X-Yummly-App-Key:app-key
OR
- _app_id=app-id&_app_key=app-key in the url
---
## Api Calls
---
### Search Recipes
---
**Crediting**
- elements of the `matches` array (matching recipes) contain a `sourceDisplayName` which must be shown
---
**How to Use**
- Get http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&(your_search_parameters)
- Some of the parameters support passing multiple values; in these cases, we follow the AJAX convention: param[]=value1&param[]=value2&…
- Don’t forget to URL-encode parameter names and values (i.e., [ and ] become %5B and %5D)
- Here is a response sample https://developer.yummly.com/documentation/search-recipes-response-sample

**Metadata Dictionaries:**
- API may return a redirect HTTP status code to follow which will return http caching headers, you should use the If-Modified-Since and If-None-Match headers in your request
- these APIs are JSONP. 
```
bq. set_metadata('course', [{"id":"course-Appetizers","description":"Appetizers","searchValue":"course^course-Appetizers"}, …]);
```
- You can parse to JSON by removing the ``"bq. set_metadata('course', "`` and trailing `);`
- An example of finding appetizers in your search: `&allowedCourse[]=course^course-Appetizers`
- Remember to URL-encode

**TLDR parameters**
- Search phrase: q
- Search by ingredient, allergy, diet, cuisine, course, holiday, time to make, nutrition, flavor
- get specific number of results, see how many matching ingredients (facet)

**Parameters**
- q, the search phrase: &q=onion+soup 
`http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup`
- &requirePictures=true
- &allowedIngredient[], excludedIngredient[]
- To access the metadata dictionary for allowedIngredient[] searchValues, use the following end point: 
`http://api.yummly.com/v1/api/metadata/ingredient?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY`
- excludedIngredient[]
- allowedAllergy[] -> supported allergies: 
`Dairy, Egg, Gluten, Peanut, Seafood, Sesame, Soy, Sulfite, Tree Nut, Wheat`
- allowedDiet[] -> supported diets: 
`Lacto vegetarian, Ovo vegetarian, Pescetarian, Vegan, Vegetarian`
- allowedCuisine[], excludedCuisine[] -> supported cuisines:
`American, Italian, Asian, Mexican, Southern & Soul Food, French, Southwestern, Barbecue, Indian, Chinese, Cajun & Creole, English, Mediterranean, Greek, Spanish, German, Thai, Moroccan, Irish, Japanese, Cuban, Hawaiin, Swedish, Hungarian, Portugese`
- allowedCourse[], excludedCourse[]:
`Main Dishes, Desserts, Side Dishes, Lunch and Snacks, Appetizers, Salads, Breads, Breakfast and Brunch, Soups, Beverages, Condiments and Sauces, Cocktails`
- allowedHoliday[], excl...
`Christmas, Summer, Thanksgiving, New Year, Super Bowl / Game Day, Halloween, Hanukkah, 4th of July`
- maxTotalTimeInSeconds[] -> in seconds
- nutrition.ATTR_NAME.{min|max}: (all is measured in grams except calories)
no carbs: `&nutrition.CHOCDF.min=0&nutrition.CHOCDF.max=0`
high protein: `&nutrition.PROCNT.min=20&nutrition.PROCNT.max=50`
K:Potassium | NA:Sodium | CHOLE:Choleserol | FATRN:Fatty acids, Trans | FASAT: Fatty acids, Saturated
CHOCDF:Carbs by difference | FIBTG:Fiber,total dietary | PROCNT:Protein | VITC:VitaminC | CA:Calcium
FE:Iron | SUGAR | FAT | ENERC_KCAL:Energy measured in kcal (1 kcal = 1000 calories)
- &maxResult=10&start=10 will be the second page of viewing 10 recipes
- flavor.{sweet|meaty|sour|bitter|salty|piquant}.{min|max}
sweet, not very spicy: `&flavor.sweet.min=0.8&flavor.sweet.max=1&flavor.piquant.min=0
&flavor.piquant.max=0.2 `
- facetField[] `&facetField[]=ingredient` or `&facetField[]=diet`

**Object Returns**
- `attribution` (crediting details)
- `totalMatchCount`
- `facetCounts`
- `matches` (the recipes)
- `criteria` (query parameters)

**Match object**
- `attributes`: `course`, `cuisine`, `holiday`
- `flavors` each on a range from 0 to 1: `salty`, `sour`, `sweet`, `bitter`, `meaty` (savory), `piquant` (spicy)
- `rating`
- `id` for get recipe
- `smallImageUrls` array of thumbnail images for the recipe
- `sourceDisplayName` site for recipe
- `totalTimeInSeconds`
- `ingredients` array of ingredients
- `recipeName`
---
### Get Recipe
---
**Crediting**
- returns source attribution subobject which contains:
```
sourceRecipeUrl
sourceSiteUrl
sourceDisplayName
```
- must display sourceDisplayName and link the url to either the site or the recipe
**How to use**
- `http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY`
- Sample object returned: https://developer.yummly.com/documentation/get-recipe-response-sample
**Object Returns**
- `attribution` (crediting details)
- `ingredientLines`
- `flavors` each on a range from 0 to 1: `salty`, `sour`, `sweet`, `bitter`, `meaty` (savory), `piquant` (spicy)
- `nutritionEstimates` The nutritional composition of the recipe, in the form of a list of nutrients and their amounts, per serving. We will return nutrition estimates only for those recipes where we are reasonably confident in their accuracy. These are only estimates and you should be clear about that in what you tell your users.
- `images`
  - `hostedLargeUrl` (med, small)

- `name`
- `yield` (servings)
- `totalTime` Either a number in seconds or a human readable string
- `attributes`: holiday, course, cuisine
- `totalTimeInSeconds`
- `rating` can be null
- `numberOfServings`
- `source`
  -`sourceRecipeUrl`
  -`sourceSiteUrl`
  - `sourceDisplayName`
  - `id` the id used in the request