// create a new unordered list (ul) element
const newUL = document.createElement("ul");

// remove the paragraph element in the nav-bar
const remove = document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUL);

// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li");
const li2 = document.createElement("li");
// add the li elements to the ul in the nav-bar
