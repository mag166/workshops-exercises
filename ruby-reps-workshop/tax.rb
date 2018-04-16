def salesTax(number)
    if(number.is_a? String)
        puts "The input must be a number"
        return nil
    else
        return 1.088*number
    end
end

puts(salesTax(15.04))
puts salesTax("I am a String")