def divide(number1, number2)
    number1/number2
end

# puts divide(4,2)

# def divide_and_display(number1,number2)
#      "The result of dividing #{number1} by #{number2} is #{divide(number1,number2)}"
# end

def divide_and_display(number1,number2)
    if number2 >= 1
        return "The result of dividing #{number1} by #{number2} is #{divide(number1,number2)}"
    else
        return "The second number must be bigger than 0"
    end
end


puts(divide_and_display(4,0))