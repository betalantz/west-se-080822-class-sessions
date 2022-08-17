// Globals
const URL = "http://localhost:3000/current-exhibits"

// DOM Selectors
const title = document.querySelector('#exhibit-title')
const tixBtn = document.querySelector('#buy-tickets-button')
const tixBought = document.querySelector('#tickets-bought')
const description = document.querySelector('#exhibit-description')
const container = document.querySelector('#comments-section')
const form = document.querySelector('#comment-form')
console.log('form: ', form);
const image = document.querySelector('#exhibit-image')

// Listeners
form.addEventListener('submit', handleSubmit)

// Fetches
function getAllExhibits(url){
    return fetch(url)
        .then(res => res.json())
}

// Render Functions

function displayExhibit(exhibitObj){
    
    title.textContent = exhibitObj.title
    description.textContent = exhibitObj.description
    image.src = exhibitObj.image
    
    exhibitObj.comments.forEach(comment => addComment(comment))
}

// Event handlers
function addComment(commentStr){
    const newComment = document.createElement('p')
    newComment.textContent = commentStr
    container.append(newComment)
}

function handleSubmit(e){
    e.preventDefault()
    console.dir(e.target)
    console.log(e.target["commentInput"].value)
    const commentTxt = e.target.commentInput.value
    // const newComment = document.createElement('p')
    // newComment.textContent = commentTxt
    // container.append(newComment)
    addComment(commentTxt)
    form.reset()
}


// Initializers
getAllExhibits(URL).then(exArr => displayExhibit(exArr[0]))