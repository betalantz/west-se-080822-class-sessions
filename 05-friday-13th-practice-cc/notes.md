## Core Deliverables
As a user, I can:
1. View all movies in nav element
  - [x] Fetch all movie data
  - [x] Select the nav element
  - [x] Iterate/map over movies arr
  - [x] Create <img> for each movie
  - [x] Append each <img> to nav
2. View the 1st movie details on page load
3. Click a movie in the nav and see it's details in the detail section
4. Click a "watched" button which toggles and persists only in the DOM
5. Enter a number of drops for each movie and have it persist in the DOM

## Data shape
```javascript
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```

MANTRA
1. Get data
2. Create new elements
3. Add data to new elements
4. Select anchor elements in DOM
5. Append new elements to anchor elements 