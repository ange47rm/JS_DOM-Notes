// app.js is included in the script tag of the HTML document (usually placed in the HEAD but it doesn't have to be there)

// document is representng our HTML as a JS object
console.log('The app has loaded', document);

// listen for DOMContentLoaded EVENT being triggered by the browser (AUTOMATICALLY triggered once browser generates teh DOM)
// once it loads, run the arrow callback function.
document.addEventListener( 'DOMContentLoaded', () => {          // VERY IMPORTANT (listen to an event and execute function)


// the query selector will return the first h1 tag found in the html document.
// this is now an object we can manipulate, which is what we did with textContent
const title = document.querySelector('h1');                      // get the (only) 'h1' item (GRABS THE ITEM)
title.textContent = "Javascript says hello world";               // change its text (MANIPULATE THE ITEM)

const pTag = document.querySelector("#welcome-paragraph");
pTag.textContent = 'Something else';

// target the red class inside the <li>

const redElement = document.querySelector('li.red');             // get all the red class elements inside the li
redElement.textContent = "RED!!!";
redElement.classList.add('bold');                       // red element should refer to our 'bold' class defined in CSS (we add CSS to our document using JS)
redElement.classList.remove ('bold');                   // now we've just undone the above. MANIPULATE CSS WITH JS.


const allLiElements = document.querySelectorAll('li');  // get ALL of the li elements in the document

console.dir(allLiElements);                             // console.dir gives us more details on our objects in the browser's console
console.dir (pTag);

// 1. CREATE A DOM ELEMENT
const newListItem = document.createElement('li');       // item is created, not attached to the DOM

// 2. MODIFY THE DOM ELEMENT
newListItem.textContent = 'Purple';                     // add text to element
newListItem.classList.add('purple');                    // link to purple CSS class

// 3. APPEND NEW DOM ELEMENT IN THE UNORDERED LIST
const list = document.querySelector('ul');              // (assuming it's the first UL in the page, as we're just specifying using the ul tag, not so specific)
list.appendChild(newListItem);                          // places DOM element in our document so it will show.
})

// QUERY SELECTOR NOTES:

// querySelector can manipulate individual items:

// An ID selector is prefixed with a # - querySelector('#my-id')                    (it will find the first element with id of "my-id")
// A class selector is prefixed with a . - querySelector('.my-class')
// A tag selector has no prefix - querySelector('p')

// querySelectorAll can manipulate multiple items:

// document.getElementById
// document.getElementByClassName
// document.getElementByByTagName
