require 'rest-client'
require 'json'

module IngredientImage
  class GetImage
    def initialize name
      @name = name
      @url = "https://api.qwant.com/api/search/images?count=1&q=" + @name + "+food&t=images&safesearch=1&locale=en_US&uiv=4"
    end

    def call
      res = JSON.parse(RestClient.get @url)
      if res['status'] == 'success'
        return res['data']['result']['items'][0]['media']
      else
        return 'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      end
    end
  end
end
  