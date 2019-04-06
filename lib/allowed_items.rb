class AllowedItems

  attr_accessor :allowed_ingredients, :allowed_allergies

  def initialize
    @allowed_ingredients = self.formatIngredients
  end

  def metaSearch type
    #Make the url
    url = "#{ENV["META_URL"]}#{type}?#{ENV["YUMMLY_KEY"]}"
    searchResults = Net::HTTP.get(URI.parse(url))
    searchResults.slice!(-2..-1)
    searchResults.slice!(0..(16 + type.length))

    if (type == "allergy")

    end

    return searchResults
  end

  def formatIngredients
    data = metaSearch "ingredient"
    data = JSON.parse(data)
    result = {}
    data.each do |item|
      result[item["searchValue"]] = true
    end
    return result
  end

  def self.instance
    @instance ||= AllowedItems.new
  end
end