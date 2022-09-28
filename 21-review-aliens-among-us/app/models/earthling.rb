class Earthling < ActiveRecord::Base

    def self.filter_by_job(job)
        # Earthling.all.where(job: job)
        # self.find_by(job: job) NOT A SOLUTION b/c only return first matching object
        self.where(job: job) # good solution b/c return array of matches
    end

    has_many :visitations
    has_many :aliens, through: :visitations

    def full_name
        "#{self.first_name} #{self.last_name}"
    end
    

end
