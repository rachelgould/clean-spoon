class TestController < ApplicationController
  def show
    user = User.find(1)
    searchParameters = {
      extraAllergies: ["dairy", "eggs"],
      diet: { vegan: false, vegetarian: true},
      maxResult: 10,
      start: 0
    }
    searchResults = yummly_search(searchParameters, user)
    json_response(searchResults)
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