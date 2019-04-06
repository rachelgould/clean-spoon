class TestController < ApplicationController
  def show
    # user = User.find(1)
    # searchParameters = {
    #   extraAllergies: ["dairy", "eggs"]
    # }
    # searchResults = yummly_search(searchParameters, user)
    # json_response(searchResults)
    #-----------------------------------------------------------
    #json_response(searchResults)
    json_response(AllowedItems.instance.allowed_allergies)
  end
end

# searchParameters: {
#   extraAllergies: [string],
#   diet: {vegetarian: boolean, vegan: boolean},
#   excludedCourses: [string],
#   excludeAllHolidays: boolean,
#   maxResult: number,
#   start: number
# }