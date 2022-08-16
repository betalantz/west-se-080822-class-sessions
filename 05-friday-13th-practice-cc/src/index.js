// Globals
const URL = "http://localhost:3000/movies"
let selectedMovie;

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
form.addEventListener('submit', addBlood)

// Fetchers
function getAllMovies(url){
    return fetch(url)
        .then(res => res.json())
        .then(movies => {
            iterateMovies(movies)
            renderDetail(movies[0])
        })
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
    let watchVal
    movObj.watched ? watchVal = "Watched" : watchVal = "Unwatched"
    watchedBtn.textContent = watchVal

}

// Event handlers
function toggleWatched(){
    console.log(selectedMovie)
    selectedMovie.watched = !selectedMovie.watched
    if (selectedMovie.watched) {
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
