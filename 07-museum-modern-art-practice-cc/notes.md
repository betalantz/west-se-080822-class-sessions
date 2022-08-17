## Core Deliverables
As a user, I can:
1. View the first exhibit from db in detail area on page load, including comments.
  - [x] do a GET fetch to get array of all exhibits
  - [x] select elements from DOM that will need new data
  - [x] add data from fetch to those elements
  - [x] to show comments array, iterate it and create <p> and append
2. add a new comment to comment section by submitting form
  - [x] select form
  - [x] add listener to form
  - [x] preventDefault form on event
  - [x] create new <p> and give it text from form
  - [x] append <p> to 
3. click a button to buy a ticket, and see the total number of tickets bought
  - [] select the buy-ticket button
  - [] add listener to button
  - [] increment the total ticket amount
  - [] update a DOM element with new ticket amount

## Bonus Deliverables
1. when I click button to buy an exhibit ticket, it perisists for that exhibit
  - [] make a PATCH request which updates the right exhibitObj with new value for `tickets_bought`
  - [] ? make ticket bought display dependent on data
2. when I add a new comment, it persists for that exhibit
  - [] make a PATCH request which updates the correct exhibitObj and adds the new comment to the existing comment array

## Data Shape
```javascript
{
    "id": 1,
    "title": "The Giraffe Wall",
    "image":"./assets/current-exhibit.jpg",
    "artist_name": "Evans",
    "description": "A modern interpretation of our contemporary independence from expressionism as told through a surrealist dialogue between abstract cubism and rococo fauvism. The great artist Evans believed only the majestic Giraffe could help tell a story like this. Tickets start at $9.99 (free for children below 21).",
    "tickets_bought": 0,
    "comments": [
        "I don't know what this is...",
        "What in the heckin' heck?",
        "I like giraffes...",
        "This is a great museum and I was not paid to write this comment...",
        "OMG A COMMENT SECTION!",
        "Have you seen giraffe tongues? Like, ew.",
        "Did you know giraffe's are the tallest mammals on earth?",
        "A giraffe's horns are called ossicones",
        "I still like giraffes..."
        ]
}
```