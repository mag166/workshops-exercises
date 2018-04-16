class Calculator
    def self.add(num1,num2)
        num1+num2
    end

    def self.subtract(num1,num2)
        num1-num2
    end

    def self.multiply(num1,num2)
        num1*num2
    end

    def self.divide(num1,num2)
        num1/num2
    end
end

puts Calculator.add(2,3)
puts Calculator.subtract(10,5)
puts Calculator.multiply(2.5,2)
puts Calculator.divide(10,2)