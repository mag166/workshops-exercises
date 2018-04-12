def salesTax(number)
    if(number.class == String)
        puts "The input must be a number"
        return nil
    else
        return 1.088*number
    end
end

puts(salesTax(1))
puts salesTax("I am a String")