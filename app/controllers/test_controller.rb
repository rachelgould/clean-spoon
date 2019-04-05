class TestController < ApplicationController
  def show
    user = User.find(1)
    searchParameters = {
      extraAllergies: ["dairy", "eggs"]
    }
    url = yummly_search(searchParameters, user)
    searchResults = Net::HTTP.get(URI.parse(url))
    response = 
    json_response(searchResults)
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