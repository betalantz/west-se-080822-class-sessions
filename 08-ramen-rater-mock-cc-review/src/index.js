// Globals
const baseURL = "http://localhost:3000"
let selectedRamen

// DOM Selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const edit = document.querySelector('#edit-ramen')
console.log('form: ', edit);


// Event Listeners
form.addEventListener('submit', e => handleSubmit(e))
edit.addEventListener('submit', handleEditRating)

// Fetches
function getAllRamens(url){
    return fetch(url + `/ramens`)
       .then(res => res.json())
    //    .then(ramensArr => renderAllRamens(ramensArr))
}

// function getOneRamen(baseURL){
//     // ...fetch one ramen by id
//     // call renderRamenDetail and pass it as arg
// }

// Render Functions
function renderAllRamens(ramensArr){
    // ramsensArr.forEach(ramen => renderRamenMenu(ramen)) 
    ramensArr.forEach(renderRamenMenu) // same as above
}

function renderRamenMenu(ramenObj){
    const div = document.createElement("div");
    const img = document.createElement('img')
    const btn = document.createElement('button')
    img.src = ramenObj.image
    btn.textContent = "x"
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
    img.addEventListener('click', () => renderRamenDetail(ramenObj))
    btn.addEventListener('click', () => div.remove())
    div.append(img, btn)
    menu.append(div)
}

function renderRamenDetail(ramenObj){
    selectedRamen = ramenObj
    detail.innerHTML = `
        <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name}"/>
        <h2 class="name">${ramenObj.name}</h2>
        <h3 class="restaurant">${ramenObj.restaurant}</h3>
    `
    rating.textContent = ramenObj.rating
    comment.textContent = ramenObj.comment
}

// Event Handlers
function handleSubmit(e){
    e.preventDefault()
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamen = {
        name,
        image,
        restaurant,
        rating,
        comment
    }
    renderRamenMenu(newRamen)
}

function handleEditRating(e){
    e.preventDefault()
    selectedRamen.rating = e.target.rating.value
    selectedRamen.comment = e.target["new-comment"].value
    renderRamenDetail(selectedRamen)
    edit.reset()
}


// Initializers
getAllRamens(baseURL).then(ramenArr => {
    renderAllRamens(ramenArr)
    renderRamenDetail(ramenArr[0])
})