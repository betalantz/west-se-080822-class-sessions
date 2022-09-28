class Alien < ActiveRecord::Base

    def self.most_frequent_visitor
        # compare all of the numbers of visitations, return the alien with the highest number
        self.all.max_by {|alien| alien.visitations.length}
    end

    def self.average_light_years_to_home_planet
        # add all of the light_years_to_home_planet and divde the sum by # of aliens
        # self.all.sum{|alien| alien.light_years_to_home_planet} / self.all.length.to_f # using vanilla Ruby
        self.sum(:light_years_to_home_planet) / self.all.length.to_f # using AR .sum
    end

    has_many :visitations
    has_many :earthlings, through: :visitations

    def visit(earthling)
        # Visitation.create(date: Date.today, earthling: earthling, alien: self)
        self.visitations.create(date: Date.today, earthling: earthling)
    end

    def total_light_years_traveled
        self.light_years_to_home_planet * self.visitations.length * 2
    end

end
