class Earthling < ActiveRecord::Base

    has_many :visitations
    has_many :aliens, through: :visitations

end
