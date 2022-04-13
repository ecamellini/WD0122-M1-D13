
/* ASSUMPTION
For this first release, let's just always display 30 days.
We don't care about the current month and its real number of days.
Manipulating dates is very comples, expecially in JS, so we don't do it today.
*/
const numberOfDays = 30 // Const values are not variable i.e., they don't change, constant

function displayDays() {
  // We want to display N tags like this one, inside the days container.
  // <div class="day">N</div>

  let daysContainer = document.getElementById('days-container')

  for (let dayNumber = 1; dayNumber <= numberOfDays; dayNumber++) {
    // 1) We create the div element
    let dayNode = document.createElement('div')

    // 2) We customize it (adding a class, text, etc.)
    dayNode.innerText = dayNumber
    dayNode.classList.add('day')
    dayNode.onclick = selectDay
    // ^^ We do not need to call the function, it will be called automatically with the event data passed down
    // dayNode.addEventListener('click', selectDay) // Another way to do the same thing

    // 3) We need to add them to the days container i.e., we manipulate the days container
    // 3.1) We need to select the days container - already done before the loop
    // See this line above: let daysContainer = document.getElementById('days-container')
    // 3.2) We manipulate it -> we attach a child to it
    daysContainer.appendChild(dayNode)
  }
}

function selectDay(eventData) {
  // Before making the clicked day selected...
  // We need to unselect the one that is currently selected
  let currentlySelectedNode = document.querySelector('.selected-day')
  // ^ The same as doing document.getElementsByClassName('selected-day')[0]
  if (currentlySelectedNode !== null) {
    currentlySelectedNode.classList.remove('selected-day')
  }

  // We want to add the selected-day class to the day tag we clicked on
  // 1) Select the day we clicked on
  let clickedDay = eventData.target // Event target is the tag where the event happened, it works with every event
  // ^ in this case, we MUST do this, otherwise how to we select the right day?

  // 2) Manipulate it: add the class
  clickedDay.classList.add('selected-day')
}

function executeOnLoad() {
  // Here we do all the things that we want to happen right after page load.
  displayDays()
}
// This is how you tell your browser to execute something right after page load.
window.onload = executeOnLoad // We don't need to call it. Window will call it for us, onload.
