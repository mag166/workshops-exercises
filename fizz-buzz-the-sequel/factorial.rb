def factorialRecursive(num)
    if num == 0
        return 1
    elsif num == 1
        return num
    end

    return num * factorial(num-1)
end

def factorial(num)
    total = 1
    1.upto num do |i|
        total *= i
    end
    return total
end

puts factorial(4)
puts factorialRecursive(4)
