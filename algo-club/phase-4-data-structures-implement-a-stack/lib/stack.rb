class Stack

    attr_reader :stack, :limit

    def initialize(limit = nil)
        @stack = []
        @limit = limit
    end

    def push(value)
        if full?
            raise "Stack Overflow"
        else
            @stack.push(value)
        end
    end

    def pop
        @stack.pop
    end

    def peek
        @stack.last
    end

    def full?
        self.limit ? self.stack.length >= self.limit : false
    end

    def size
        self.stack.length
    end

    def empty?
        self.size <= 0
    end

    def search(value)
        target = self.stack.rindex(value)
        target ? (self.size - 1) - target : -1
    end

end