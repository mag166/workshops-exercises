def linearSearch(arr, key)
    arr.each_with_index do |element, index|
        if element == key
            return index
        end
    end
end

arr = [0,1,2,3]
key = 3
puts linearSearch(arr, key)