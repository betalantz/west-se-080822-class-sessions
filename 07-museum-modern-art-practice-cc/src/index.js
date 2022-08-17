// Globals
const URL = "http://localhost:3000/current-exhibits"

// DOM Selectors
const title = document.querySelector('#exhibit-title')
const tixBtn = document.querySelector('#buy-tickets-button')
const tixBought = document.querySelector('#tickets-bought')
const description = document.querySelector('#exhibit-description')
const container = document.querySelector('#comments-section')
console.log('container: ', container);
const form = document.querySelector('#comment-form')
const image = document.querySelector('#exhibit-image')

// Listeners

// Fetches
function getAllExhibits(url){
    return fetch(url)
        .then(res => res.json())
}

// Render Functions

function displayExhibit(exhibitObj){
    console.log('exhibitObj: ', exhibitObj);
    title.textContent = exhibitObj.title
    description.textContent = exhibitObj.description
    image.src = exhibitObj.image
    console.log(exhibitObj.comments)
    exhibitObj.comments.forEach(comment => addComment(comment))
}

// Event handlers
function addComment(commentStr){
    console.log('commentStr: ', commentStr);
    const newComment = document.createElement('p')
    newComment.textContent = commentStr
    console.log('newComment: ', newComment);
    container.append(newComment)
}


// Initializers
getAllExhibits(URL).then(exArr => displayExhibit(exArr[0]))