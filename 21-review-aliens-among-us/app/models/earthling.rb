class Earthling < ActiveRecord::Base

    def self.filter_by_job(job)
        # Earthling.all.where(job: job)
        self.where(job: job)
    end

    has_many :visitations
    has_many :aliens, through: :visitations

    def full_name
        "#{self.first_name} #{self.last_name}"
    end
    

end
