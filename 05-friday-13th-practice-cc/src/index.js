// Globals
const URL = "http://localhost:3000/movies"
let selectedMovie; // I'm declaring this in global scope because I want more than one function to have access to it, but I have no value to assign it yet, so I have to use 'let'

// DOM Selectors
const nav = document.querySelector('#movie-list')
const detailImg = document.querySelector('#detail-image')
const title = document.querySelector('#title')
const year = document.querySelector('#year-released')
const description = document.querySelector('#description')
const drops = document.querySelector('#amount')
const watchedBtn = document.querySelector('#watched')
const form = document.querySelector('#blood-form')
// console.log('form: ', form);
const bloodInput = document.querySelector('#blood-amount')

// Event listeners
watchedBtn.addEventListener('click', toggleWatched)
form.addEventListener('submit', addBlood) // if you just reference the callback function without calling it, addEventListener will call it when it is triggered
        // and automatically pass to the function the event that triggered it

// Fetchers
function getAllMovies(url){
    return fetch(url)
        .then(res => res.json())
        .then(movies => { // on a refactor, I would move this .then()
            iterateMovies(movies) // and these 2 functions down and 
            renderDetail(movies[0]) // chain them on the call to getAllMovies()
        })                          // in Intializers (line 82)
}

// Render functions

function iterateMovies(movieArr){
    // console.log('movieArr: ', movieArr);
    movieArr.forEach(movieObj => renderInNav(movieObj));
}

function renderInNav(movObj){
    // console.log('movObj: ', movObj);
    const navImage = document.createElement('img')
    navImage.src = movObj.image
    navImage.addEventListener('click', () => renderDetail(movObj))
    nav.appendChild(navImage)
}

function renderDetail(movObj){
    selectedMovie = movObj
    detailImg.src = movObj.image
    title.textContent = movObj.title
    year.textContent = movObj.release_year
    description.textContent = movObj.description
    drops.textContent = movObj.blood_amount
    // let watchVal
    // movObj.watched ? watchVal = "Watched" : watchVal = "Unwatched"
    let watchVal = movObj.watched ? "Watched" : "Unwatched"
    watchedBtn.textContent = watchVal

}

// Event handlers
function toggleWatched(){
    selectedMovie.watched = !selectedMovie.watched // since .watched is a bool, this line just flips true to false or false to true
    // this if-block does the same as lines 56-7 which use a ternary
    if (selectedMovie.watched) { // again, since .watched is already bool, don't need more in condition
        watchedBtn.textContent = "Watched"
    } else {
        watchedBtn.textContent = "Unwatched"
    }
}

function addBlood(e){
    e.preventDefault()
    console.dir(e.target);
    console.log('bloodInput: ', bloodInput.value, typeof bloodInput.value)
    // const newBlood = parseInt(bloodInput.value)
    const newBlood = Number(bloodInput.value)
    selectedMovie.blood_amount += newBlood
    renderDetail(selectedMovie)
    form.reset()
}

// Initializer(s)
getAllMovies(URL)
