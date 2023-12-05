// add an event listener to the dog picture that listens for a "click" and gives an alert
document.querySelector("#dog-picture").addEventListener("click", event => {
  console.log("Nav bar has been clicked");
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color

const listItems = document.querySelectorAll("#class-schedule-list li");
console.log(listItems);
for (let item of listItems) {
  item.addEventListener("mouseover", event => {
    event.target.classList.toggle("bgred");
    // event.target.innerText += "z";
  });
  item.addEventListener(
    "mouseout",
    event => (event.target.style.backgroundColor = "inherit")
  );
}

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keyup", event => {
  console.log(event.target);
  switch (event.key) {
    case "a":
      console.log(`Move left`);
      break;
    case "d":
      console.log(`Move right`);
      break;
  }
});
