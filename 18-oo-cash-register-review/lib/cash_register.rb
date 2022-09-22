require 'pry'

class CashRegister

    attr_reader :discount
    attr_accessor :total, :items, :last_tx

    def initialize(discount = 0)
        @discount = discount
        @total = 0
        @items = []
    end

    def add_item(title, price, quantity = 1)
        self.last_tx = price * quantity
        self.total += self.last_tx
        quantity.times { self.items << title }
        # @total = @total + (price * quantity)
    end

    def apply_discount
        if self.discount != 0
            discount_as_percent = (100.0 - self.discount.to_f) / 100
            self.total = (self.total * discount_as_percent).to_i
            "After the discount, the total comes to $#{self.total}."
        else
            "There is no discount to apply."
        end
    end

    def void_last_transaction
        self.total -= self.last_tx
    end

end

# binding.pry
0
