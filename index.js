
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

    // 3) We need to add them to the days container i.e., we manipulate the days container
    // 3.1) We need to select the days container - already done before the loop
    // 3.2) We manipulate it -> we attach a child to it
    daysContainer.appendChild(dayNode)
  }
}

function executeOnLoad() {
  // Here we do all the things that we want to happen right after page load.
  displayDays()
}
// This is how you tell your browser to execute something right after page load.
window.onload = executeOnLoad // We don't need to call it. Window will call it for us, onload.
