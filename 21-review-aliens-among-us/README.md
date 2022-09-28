# Practice Code Challenge - Aliens Among Us

## Learning Goals

- Write Active Record Migrations
- Connect between tables using Active Record Associations
- Write class and instance methods using Active Record
- Use Active Record to query the database

## Introduction

Aliens are among us! And they're here in order to visit their human friends on the planet Earth. Build out the rest of this super secret app for the MIB so they can track different visitations by aliens and their human friends.

## Getting started

run `bundle install`

## Migrations

Create your migrations.

- `Aliens` should have a `name`, a `earth_disguise_name`, a `home_planet`, and a `light_years_to_home_planet`

- `Earthlings`should have a `first_name`, a `last_name` and a `job`

- `Visitations` should have a `date`, an `alien_id` and an `earthling_id`

#### `aliens` Table

| Column | Type |
| --- | --- |
| name | string |
| earth_disguise_name | string |
| home_planet | string |
| light_years_to_home_planet | integer |

#### `earthlings` Table

| Column | Type |
| --- | --- |
| first_name | string |
| last_name | string |
| job | string |

#### `visitations` Table

| Column | Type |
| --- | --- |
| date | string OR datetime |
| alien_id | integer |
| earthling_id | integer |

## Relationship

- What associations will this need?
- (i.e. `has_many`, `has_many through`, and `belongs_to`)

## Earthling

- `Earthling#visitations` returns all the visitations for an earthling
- `Earthling#aliens` returns every alien that has visited that earthling
- `Earthling#full_name` returns the combination of the human's first name and last name
- `Earthling.filter_by_job(job)` takes in a job as a string and returns all earthlings with the specified job

## Alien

- `Alien#visitations` returns all the visitations that alien has been involved in
- `Alien#earthlings` returns every earthling the alien has visited
- `Alien#visit(earthling)` takes in an instance of an earthling and creates a visitation linking that earthling and alien for today's date
- `Alien#total_light_years_traveled` returns the light years from the alien's home planet multiplied by the number of visitations for that alien ... times two (because they have to travel both ways right?)
- `Alien.most_frequent_visitor` returns the alien with the most visitations
- `Alien.average_light_years_to_home_planet` returns the average distance for all aliens to their home planets

## Visitation

- `Visitation#alien` returns the alien involved in the visitation
- `Visitation#earthling` returns the earthling involved in the visitation
