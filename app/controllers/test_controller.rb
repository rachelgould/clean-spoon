class TestController < ApplicationController
  def show

    json_response AllowedItems.instance.allowed_ingredients
    #-----------------------------------------------------------
    #-----------------------------------------------------------
    # recipeID = "Hot-Dogs-with-Krautslaw-894904";
    # url = yummly_get(recipeID)
    # info = Net::HTTP.get(URI.parse(url))
    # json_response(info)

  end
end

# searchParameters: {
#   extraAllergies: [string],
#   diet: {vegetarian: boolean, vegan: boolean},
#   excludedCourses: [string], NOT DONE YET
#   excludeAllHolidays: boolean, NOT DONE YET
#   maxResult: number,
#   start: number
# }