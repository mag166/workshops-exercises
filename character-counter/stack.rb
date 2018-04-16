class Stack
    attr_accessor :items

    def initialize
        @items = []
    end

    def push(item)
        items.unshift(item)
    end

    def peek
        return items[0]
    end

    def pop
        items.shift
    end

    def empty?
        return items.length == 0
    end

    def show
        str = ""
        for item in items do
            str += item + " "
        end
        return str
    end
end

b = Stack.new
b.push("First In")
b.push("Second In")

# b.pop
puts b.show
# b.pop
# puts b.empty?