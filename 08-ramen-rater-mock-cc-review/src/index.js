// Globals
const baseURL = "http://localhost:3000"

// DOM Selectors
const menu = document.querySelector('#ramen-menu')
console.log('menu: ', menu);


// Event Listeners


// Fetches
function getAllRamens(url){
    return fetch(url + `/ramens`)
       .then(res => res.json())
       .then(ramensArr => renderAllRamens(ramensArr))
}

// Render Functions
function renderAllRamens(ramensArr){
    console.log('ramensArr: ', ramensArr);
    // ramsensArr.forEach(ramen => renderRamenMenu(ramen)) 
    ramensArr.forEach(renderRamenMenu) // same as above
}

function renderRamenMenu(ramenObj){
    console.log('ramenObj: ', ramenObj);
    const img = document.createElement('img')
    img.src = ramenObj.image
    menu.append(img)
}

// Event Handlers


// Initializers
getAllRamens(baseURL)