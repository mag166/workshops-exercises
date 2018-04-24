class Array
    def bubble_sort
        swapped = true
        while swapped do
            swapped = false
            (self.length-1).times do |i|
                if self[i] > self[i + 1]
                    self[i], self[i + 1] = self[i + 1], self[i]
                    swapped = true
                end
            end
        end
        return self 
    end

    def insertion_sort
        self.each_with_index do |element, index|
            j = index - 1
            while(j>=0 && self[j]>element)
                self[j+1] = self[j]
                j = j - 1
            end
            self[j+1] = element
        end
    end

    def linear_search(number)
        self.sort!
        self.each_with_index do |element, index|
            if element == number
                return index
            end
        end
    end

    def binary_search(number)
        self.sort!
        mid = self.length / 2
        first = 0
        last = self.length - 1

        while first < last
            if(self[mid] == number)
                return mid
            elsif(self[mid] < number)
                first = mid + 1
                mid = first + last / 2
            else
                last = mid - 1
                mid = first + last / 2
            end
        end
    end
end
 
array = [9001, 25, 5, 12, -46,23,-3,43,24,78,32]
puts array.binary_search(23)
# puts array.insertion_sort # [-46, 5, 12, 25, 9001]
