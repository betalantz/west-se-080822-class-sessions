class Alien < ActiveRecord::Base

    has_many :visitations
    has_many :earthlings, through: :visitations

end
