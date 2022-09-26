class Role < ActiveRecord::Base

    has_many :auditions

    def actors
        self.auditions.pluck(:actor) # all AR methods
        # self.auditions.map {|a| a.actor} # vanilla Ruby
    end

    def locations
        self.auditions.pluck(:location) # see #actors above
    end

    def lead
        lead = self.auditions.find_by(hired: true)
        if lead
            lead
        else
            'no actor has been hired for this role'
        end
    end

    def understudy
        hired = self.auditions.where(hired: true).second # uses all AR methods
        hired ? hired : 'no actor has been hired for understudy for this role'
    end

end