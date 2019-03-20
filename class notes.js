const words = ['equable', 'cannon', 'books', 'utopian', 'pear', 'deserted', 'instinctive', 'sharp',]

words.forEach((word, index, arr) => {
    console.log(`${index}: ${word}`)
    console.log(arr)
})

words.map(word => {
    console.log()
})

// map: take everything in this array and change what the data looks like
const newWords = words.map((word, index) => {
    return {
        id: index,
        name: word,
        isWord: true,
        sayWord() {
            console.log(this.name)
        }
    }
})

// filter: method that weeds out elements of the array that don't meet out a condition. give you a brand new array

const fltArr = words.filter(word => {
    return word.length > 3
})

console.log(fltArr)

// this would take words that are greater than 3 letters, it meets the conditions and displays them 

// reduce: going to give you something specific back, lets you grab the same items but allow you to reduce the value of an array. has more application
// with numerical arrays rather than with strings/words


const longstring = words.reduce((total, word, index, arr) => {
    return total + word
})

console.log(longstring)

// forEach doesn't return anything

// sorting 

let total = numArr.reduce((total, number) => {
    return total + number
})

console.log(total)

// setTimeout function wants two pieces of info: what function you want to run/ how much time in milliseconds you want this to count down from

setTimeout(_ => alert('hello'), 5000)

// partner function is setInterval. goes in a loop of every 5000 ms. runs repeatedly in time intervals

// letCount 

// when doing randomizers, you can use ~~ to get rid of decimals. instead of Math.floor(Math.random) you can use ~~Math.random instead jk this didn't work lol

//syntax for timeouts. what you want it to do, and the amount of time you want at the end i.e. 5 sec v

let myTimeout = (() => {
    console.log('Hello')
}, 5000)

let myInterval = setInterval(() => {
    console.log('What')
}, 3000)

// in order to stop it you have to run the function to end it

clearTimeout(myTimeout)

clearInterval(myInterval)

// put them in variable names when you need to stop them 

// you can use a set timer/interval for ending a game 

//  back slash and an n "\n" will help you to create a new line

// .repeat() will repeat the amount of whatever number you put inside. i.e. hello.repeat(5) = hellohellohellohellohello


// staircase activity code:

const staircase = n => {
    let str = ''
    for (let i = 1; i <= n; i++) {
        str += ''.repeat(i) + '#'.repeat(n - i) + '\n'
    }
    return str
}

console.log(staircase(5))
console.log(staircase(7))

//   3/14 class: concepts and descriptions

//  3/16 AJAX/API's
//  REST : representational transfer
//  API kets grants you access to a certain API
// console.error(), console.warning(), console.info()
// .catch(e => console.error(e))

// if there's a search button and the button has an onclick, the preventDefault stops it from refreshing the page everytime since it's a form
const searchMovie = _ => {
    event.preventDefault();
    console.log('Hello');
}
const movie= document.querySelector('#movie').value 

fetch('http://www.omdbapi.com/?apikey=[yourkey]&')
    .then(r => r.json())
    //   insert whatever variables you want, like Actor, Awards, Director, Genre, etc.
    .then(({ Actor, Awards, Director, Genre }) => {
        // don't forget to create a div in your HTML for movieDiv
    document.querySelector('#movieDiv').innerHTML = 
    // insert title or whatever other information you want displayed on the page
    `
    <h1>${Goodfellas}</h1>
    <h5>Released: ${Released}</h5>

    `

    document.querySelector('#movie').value


})
  .catch (e => console.error(e)) 

//   changing the name of something; Actors: ______. the _____ is now the name for the object


// question objects

// [{ question Id, isCorrect}
// ]

// how to make choices on your questions
// you need a runction to render it first

// create question tag (What is something?)

//render choices

// whenever we click on choice: set clicked one to look different, set all others to go back to default

// create an array of data
// go up to array and modify question object to have value for whether they answered right or wrong
// whenever finish game button is clicked
// iterate over questions, count up isCorrect




