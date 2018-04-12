def instanceCounter(str)
    str.delete!(' ')
    array = str.split('')
    array.uniq!

    highestCount = 0;
    highestLetter = ""
    for letter in array do
        if str.count(letter) > highestCount
            highestCount = str.count(letter)
            highestLetter = letter
        end
    end
    return highestLetter
end

puts instanceCounter("Bob is a very nice gardener")