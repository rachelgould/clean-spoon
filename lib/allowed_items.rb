class AllowedItems

  attr_accessor :allowed_ingredients, :allowed_allergies

  def initialize
    @allowed_ingredients = self.formatIngredients
    @allowed_allergies = self.formatAllergies
  end

  def metaSearch type
    #Make the url
    url = "#{ENV["META_URL"]}#{type}?#{ENV["YUMMLY_KEY"]}"
    searchResults = Net::HTTP.get(URI.parse(url))
    searchResults.slice!(-2..-1)
    searchResults.slice!(0..(16 + type.length))

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

  def formatAllergies
    {
      gluten: "393^Gluten-Free",
      peanut: "394^Peanut-Free",
      peanuts: "394^Peanut-Free",
      seafood: "398^Seafood-Free",
      sesame: "399^Sesame-Free",
      soy: "400^Soy-Free",
      dairy: "396^Dairy-Free",
      lactose: "396^Dairy-Free",
      egg: "397^Egg-Free",
      eggs: "397^Egg-Free",
      sulfite: "401^Sulfite-Free",
      nuts: "395^Tree Nut-Free",
      nut: "395^Tree Nut-Free",
      treenuts: "395^Tree Nut-Free",
      treenut: "395^Tree Nut-Free",
      wheat: "392^Wheat-Free"
    }
  end

  def self.instance
    @instance ||= AllowedItems.new
  end
end