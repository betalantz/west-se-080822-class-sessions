require 'pry'

class CashRegister

    attr_reader :discount
    attr_accessor :total, :items, :transactions

    def initialize(discount = 0)
        @discount = discount
        @total = 0
        @items = []
        @transactions = []
    end

    def add_item(title, price, quantity = 1)
        transaction = price * quantity
        self.total += transaction
        quantity.times { self.items << title }
        self.transactions << transaction
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
        self.total -= self.transactions.pop
    end

end

# binding.pry
0
