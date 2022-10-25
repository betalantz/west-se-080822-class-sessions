require_relative './node'

class LinkedList

    attr_accessor :head

    def initialize(head = nil)
        @head = head
    end

    def prepend(node)
        node.next_node = head
        self.head = node
    end

end
