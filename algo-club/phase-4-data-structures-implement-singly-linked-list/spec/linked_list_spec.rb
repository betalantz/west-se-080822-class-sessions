describe LinkedList do
  let(:linked_list) { LinkedList.new }

  describe ".new" do
    it "intializes a new singly linked list" do
      expect(linked_list.head).to eq(nil)
    end
  end

  describe "#prepend" do
    context "when there are no elements in the list" do
      it "adds a node to the beginning of the list" do
        linked_list.prepend(Node.new(1))
        expect(linked_list.head.data).to eq(1)
      end
    end

    context "when there are multiple elements in the list" do
      it "adds a node to the beginning of the list" do
        linked_list.prepend(Node.new(1))
        linked_list.prepend(Node.new(2))
        # 2 -> 1
        expect(linked_list.head.data).to eq(2)
        expect(linked_list.head.next_node.data).to eq(1)
      end
    end
  end

  describe "#append" do
    context "when there are no elements in the list" do
      it "adds a node to the end of the list" do
        linked_list.append(Node.new(1))
        expect(linked_list.head.data).to eq(1)
      end
    end

    context "when there are elements in the list" do
      it "adds a node to the end of the list" do
        linked_list.append(Node.new(1))
        linked_list.append(Node.new(2))
        expect(linked_list.head.data).to eq(1)
        expect(linked_list.head.next_node.data).to eq(2)
      end
    end
  end

  describe "#delete_head" do
    context "when there are no elements in the list" do
      it "does not delete any elements" do
        linked_list.delete_head
        expect(linked_list.head).to eq(nil)
      end
    end

    context "when there is one element in the list" do
      it "removes the node at the beginning of the list" do
        linked_list.append(Node.new(1))
        linked_list.delete_head
        expect(linked_list.head).to eq(nil)
      end
    end

    context "when there are multiple element in the list" do
      it "removes the node at the beginning of the list" do
        linked_list.append(Node.new(1))
        linked_list.append(Node.new(2))
        # 1 -> 2
        linked_list.delete_head
        # 2
        expect(linked_list.head.data).to eq(2)
      end
    end
  end

  describe "#delete_tail" do
    context "when there are no elements in the list" do
      it "does not delete any elements" do
        linked_list.delete_tail
        expect(linked_list.head).to eq(nil)
      end
    end

    context "when there is one element in the list" do
      it "removes the node at the end of the list" do
        linked_list.append(Node.new(1))
        # 1
        linked_list.delete_tail
        expect(linked_list.head).to eq(nil)
      end
    end

    context "when there are multiple elements in the list" do
      it "removes the node at the end of the list" do
        linked_list.append(Node.new(1))
        linked_list.append(Node.new(2))
        linked_list.append(Node.new(3))
        # 1 -> 2 -> 3
        linked_list.delete_tail
        # 1 -> 2
        expect(linked_list.head.data).to eq(1)      
        expect(linked_list.head.next_node.data).to eq(2)  
        expect(linked_list.head.next_node.next_node).to eq(nil)  
      end
    end
  end

  describe "#add_after" do
    context "with an index in the middle of the list" do
      it "adds a node in the middle of the linked list" do
        linked_list.append(Node.new(1))
        linked_list.append(Node.new(2))
        linked_list.append(Node.new(3))
        # 1 -> 2 -> 3
        linked_list.add_after(1, Node.new(2.5))
        # 1 -> 2 -> 2.5 -> 3   
        expect(linked_list.head.next_node.next_node.data).to eq(2.5)  
      end
    end
    
    context "with an index at the end of the list" do
      it "adds a node to the end of the linked list" do
        linked_list.append(Node.new(1))
        linked_list.append(Node.new(2))
        # 1 -> 2
        linked_list.add_after(2, Node.new(3))
        # 1 -> 2 -> 3
        expect(linked_list.head.next_node.next_node.data).to eq(3)  
      end
    end
  end

  describe "#search" do
    it "finds a node within the list" do
      linked_list.append(Node.new(1))
      linked_list.append(Node.new(2))
      linked_list.append(Node.new(3))
      # 1 -> 2 -> 3
      node = linked_list.search(2)
      expect(node.data).to eq(2)
    end
  end
end