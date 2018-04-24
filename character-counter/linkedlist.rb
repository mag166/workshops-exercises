class LinkedList
    def initialize(data)
        @head = Node.new(data, nil)
        @size = 1
    end

    def add(element)
        
        current = head
        while(current.next != nil)
            current = current.next
        end
        current.next = Node.new(element, nil)
        size = size + 1
    end
    
    def show()
        current = head
        str = ""
        while(current.next != nil)
            str += current.data + " "
            current = current.next
        end
        return str
    end

    def remove(index)
        if(index == 0)
            head = head.next
        else
            current = head
            i = 0
            while(i < index-1)
                current = current.next
            end
            current.next = current.next.next
            size = size - 1
        end
    end

    def insert(element, index){
        if index = 0
            head = Node.new(element,head)
        
        else
            current = head
            for(int i = 0; i < index-1;i++)
                current = current.next
            end
            current.next = Node.new(element, current.next.next) 
        end 
    end
end

class Node
    attr_accessor :data :next

    def initialize(data, next)
        @data = data
        @next = next
    end
end


l = LinkedList.new(1)
l.add(2)
l.add(3)
l.show