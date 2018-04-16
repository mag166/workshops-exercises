class LinkedList
    def initialize(data)
        @head = Node.new(data, nil)
        @size = 1
    end

    def add(element){
        current = head
        while(current.next != nil)
            current = current.next
        end
        current.next = Node.new(element, nil)
        size = size + 1
    }

end

class Node
    attr_accessor :data :next

    def initialize(data, next)
        @data = data
        @next = next
    end
end