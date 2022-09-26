class Role < ActiveRecord::Base

    has_many :auditions

    def actors
        self.auditions.pluck(:actor) # all AR methods
        # self.auditions.map {|a| a.actor} # vanilla Ruby
        # self.auditions.map(&:actor) # same as above with proc syntax
    end

    def locations
        self.auditions.pluck(:location) # see #actors above
        # auditions.pluck(:location) # Ruby will supply implicit self

    end

    def lead
        #  lead = self.auditions.find{|audition| audition.hired } # AR method + Ruby method
        lead = self.auditions.find_by(hired: true)
        if lead
            lead
        else
            'no actor has been hired for this role'
        end
    end

    def understudy
        # hireds = self.auditions.filter{|aud| aud.hired} # Ruby's .filter will return a new array of select elements
        # hireds = Audition.where(hired: true, role: self) # AR's .where also returns and array and can match multiple conditions
        # hired = hireds[1] # just grabbing the second element of the filtered array
        hired = self.auditions.where(hired: true).second # uses all AR methods
        hired ? hired : 'no actor has been hired for understudy for this role'
    end

end