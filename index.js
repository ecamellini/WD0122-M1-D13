/* DATA MODEL AND DATA STRUCTURE

What is an appointment:
- A day: number -- e.g., 24 (in the future, it will be a Date...)
- A time: string -- e.g., "9:00"
- A title: string  -- e.g., "Meeting with Tom"

What is a day, knowing that it can have a list of appointments:
it will be represented as a list of Appointment objects

A month is just a list of days: an array of days.
*/

let day1 = [
  { time: "9:00", title: "EPICODE Class"},
  { time: "12:00", title: "Lunch"}
]

let day2 = [
  { time: "10:00", title: "Coffee with jack"},
  { time: "12:00", title: "Lunch"},
  { time: "20:00", title: "Soccer"}
]

let monthlyCalendar = [
  day1,
  day2,
  [],
  [],
  // ........... we need to have 30 lists of appointments inside this list
]

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
    dayNode.addEventListener('click', selectDay)
    dayNode.addEventListener('click', displayMeetingsForTheDay)
    // ^^ We do not need to call the function, it will be called automatically with the event data passed down
    // dayNode.onclick = selectDay // Another way to do the same thing, but only one listener can be set this way

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

function displayMeetingsForTheDay() {
  // We can find out what the selected day is by getting the one with the 'selected-day' class
  let selectedDayNode = document.querySelector('.selected-day')
  let dayNumber = parseInt(selectedDayNode.innerText) // String --> number, but probably it works anyways
  let appointmentsForTheDay = monthlyCalendar[dayNumber - 1] // Days start from 1, arrays starts from 0

  let ulNode = document.getElementById('appointments-list-ul')
  ulNode.replaceChildren([]) // We are emptying the children...

  for (let appointment of appointmentsForTheDay) {
    // 1) Create the li
    let liNode = document.createElement('li')

    // 2) We customize it: we write something inside it in this case (appointment time - title)
    liNode.innerText = `${appointment.time} -- ${appointment.title}`
    // Another way to do it: appointment.time + " -- " + appointment.title

    // 3) We attach it somewhere to the DOM: in this case, the ul of appointments
    ulNode.appendChild(liNode)
  }
}

function saveAppointment() {
  // 1) We get the inputs value
  let timeInputValue = document.getElementById("appointment-time").value
  let titleInputValue = document.getElementById("appointment-title").value

  // 2) We create an appointment object for the new appointment
  let appointment = {
    time: timeInputValue,
    title: titleInputValue
  }

  // 3) We get the selected day number
  let dayNumber = document.querySelector(".selected-day").innerText

  // 3) We get the list of appointment objects for the selected day,
  //      and we append the new appointment to it
  let appointmentsForTheDay = monthlyCalendar[dayNumber - 1]
  appointmentsForTheDay.push(appointment)

  // We refresh the list so that we display also the newly added meeting
  displayMeetingsForTheDay()
}

function executeOnLoad() {
  // Here we do all the things that we want to happen right after page load.
  displayDays()
}
// This is how you tell your browser to execute something right after page load.
window.onload = executeOnLoad // We don't need to call it. Window will call it for us, onload.
