class Queue
    attr_accessor :items

    def initialize
        @items = []
    end

    def enqueue(element)
        items.push(element)
    end


    def dequeue()
        items.shift
    end

    def front
        items[0]
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

q = Queue.new
q.enqueue("First In")
q.enqueue("Second In")
q.enqueue("Third In")
puts q.show

puts q.dequeue()
puts q.show()