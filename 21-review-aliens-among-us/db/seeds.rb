puts "Creating seeds..."

Alien.destroy_all
Earthling.destroy_all
Visitation.destroy_all

5.times {
    Alien.create(name: Faker::Movies::StarWars.character, earth_disguise_name: Faker::Name.name, home_planet: Faker::Books::Dune.planet,  light_years_to_home_planet: Faker::Number.within(range: 5..500))
}

12.times {
    Earthling.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, job: Faker::Job.title)
}

20.times {
    Visitation.create(date: Date.new, alien_id: Alien.ids.sample, earthling: Earthling.all.sample)
}

puts "Seeding completed successfully..."