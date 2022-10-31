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

    def append(node)
        return prepend(node) if self.head.nil?
        current = self.head
        while !current.next_node.nil?
            current = current.next_node
        end
        current.next_node = node
    end

    def delete_head
        return unless self.head
        self.head = self.head.next_node
    end

    def delete_tail
        return unless self.head
        return delete_head if self.head.next_node.nil?
        curr = head
        prev = nil
        while curr.next_node
            prev = curr
            curr = curr.next_node
        end
        prev.next_node = nil
    end

    def add_after(index, node)
        curr_index = 0
        curr = head
        while curr_index < index
            curr = curr.next_node
            curr_index += 1
        end
        if curr
            node.next_node = curr.next_node
            curr.next_node = node
        else
            append(node)
        end
    end

    def search(value)
        curr = head
        while curr
            return curr if curr.data == value
            curr = curr.next_node
        end
        nil
    end

end
