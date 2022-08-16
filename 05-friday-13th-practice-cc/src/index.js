// Globals
const URL = "http://localhost:3000/movies"

// DOM Selectors
const nav = document.querySelector('#movie-list')
console.log('nav: ', nav);

// Event listeners


// Fetchers
function getAllMovies(url){
    return fetch(url)
        .then(res => res.json())
        .then(iterateMovies)
}

// Render functions

function iterateMovies(movieArr){
    console.log('movieArr: ', movieArr);
    movieArr.forEach(movieObj => renderInNav(movieObj));
}

function renderInNav(movObj){
    console.log('movObj: ', movObj);
    const navImage = document.createElement('img')
    navImage.src = movObj.image
    nav.appendChild(navImage)
}

// Event handlers


// Initializer(s)
getAllMovies(URL)
