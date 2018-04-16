def instanceCounter(str)
    str.downcase!
    str.delete!(' ')
    array = str.split('')
    array.uniq!
    ans = {}

    for letter in array do
        ans[letter] = str.count(letter)
    end
    
    return ans
end

puts instanceCounter("Bob is a very nice gardener")