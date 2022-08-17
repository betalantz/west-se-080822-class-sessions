## Core Deliverables
As a user I can
- See all ramens images in menu
  - [x] GET fetch all ramens
  - [x] iterate the array
  - [x] create <img> for each ramen
  - [x] append to menu
- Click on a menu img to see the details of a ramen displayed in detail section
  - [x] attach event listeners
  - [x] handle click events
  - [x] select correct elements
  - [x] update their attributes with selected ramen data
- Submit a form to create a new ramen in the menu (no persistence!)
 - [x] select the form
 - [x] attach a listener
 - [x] handle the event
 - [x] preventDefault()
 - [x] access the user data from form
 - [x] use the data to create a new ramen
 - [x] add ramen to menu

## Advanced Deliverables
- see details of first ramen on page load
- Change the rating and comment with an edit form (no persistence)
- Delete a ramen from menu (no persistence)

## Extra Deliverables
- add persistence to above where possible

## Data shape
```javascript
{
    "id": 1,
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
}
```

## Endpoints
base: http://localhost:3000
GET /ramens
GET /ramens/:id