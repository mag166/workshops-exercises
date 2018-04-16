class Animal
    attr_accessor :name
    attr_reader :height, :species
    

    def initialize(name, height, species)
        @name = name
        @height = height
        @species = species
    end

    def walk
        "I am walking very slowly"
    end

    def run
        "I am running very quickly"
    end
end


class Giraffe < Animal
    def initialize(name, height)
        super(name, height,"giraffe")
    end
end

class Lizard < Animal
    def initialize(name, height)
        super(name, height,"lizard")
    end
end

lizard = Lizard.new("Minhal", 30)
puts lizard.walk
puts lizard.name
puts lizard.species


