class Classmate
    attr_accessor :name, :super_power
    
    def initialize(name,super_power)
        @name = name
        @super_power = super_power
    end

    def i_have_the_power!
        "My name is #{name} and I have the power of #{super_power}"
    end
end