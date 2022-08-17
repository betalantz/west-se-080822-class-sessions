// Globals
const baseURL = "http://localhost:3000"

// DOM Selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')

// Event Listeners


// Fetches
function getAllRamens(url){
    return fetch(url + `/ramens`)
       .then(res => res.json())
       .then(ramensArr => renderAllRamens(ramensArr))
}

// Render Functions
function renderAllRamens(ramensArr){
    // ramsensArr.forEach(ramen => renderRamenMenu(ramen)) 
    ramensArr.forEach(renderRamenMenu) // same as above
}

function renderRamenMenu(ramenObj){
    const img = document.createElement('img')
    img.src = ramenObj.image
    img.addEventListener('click', () => renderRamenDetail(ramenObj))
    menu.append(img)
}

function renderRamenDetail(ramenObj){
    detail.innerHTML = `
        <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name}"/>
        <h2 class="name">${ramenObj.name}</h2>
        <h3 class="restaurant">${ramenObj.restaurant}</h3>
    `
    rating.textContent = ramenObj.rating
    comment.textContent = ramenObj.comment
}

// Event Handlers


// Initializers
getAllRamens(baseURL)