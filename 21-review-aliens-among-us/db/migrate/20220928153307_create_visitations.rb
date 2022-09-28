class CreateVisitations < ActiveRecord::Migration[5.2]
  def change
    create_table :visitations do |t|
      t.datetime :date
      t.references :alien
      t.references :earthling
    end
  end
end
