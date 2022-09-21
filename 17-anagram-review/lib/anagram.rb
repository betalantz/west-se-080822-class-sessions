require 'pry'

class Anagram

    attr_reader :target

    def initialize(word)
        @target = word
    end

    def match(str_arr)
        # get each word in array with .filter
        str_arr.filter {|word|
            # call .chars on word and target
            # sort word and target
            # compare word and target
            word.chars.sort == self.target.chars.sort
        }

    end

end

# binding.pry
0