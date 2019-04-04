require 'rest-client'

module IngredientImage
  class GetImage
    def initialize name
      @name = name
    end

    def call
      RestClient.get 'https://api.qwant.com/api/search/images', {
        count: 1,
        q: '#{name} food',
        t: 'images',
        safesearch: 1,
        locale: 'en_US',
        uiv: 4
      }
    end
  end
end
  