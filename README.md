# Designing our application

## 1 - Requirements Gathering / Design Phase

Usually this phase of the project is led by Business Analysts / Service Designers / etc.

Business requirements: what is the problem we are trying to solve, why, etc.
Functional requirements: what are the functionalities that our software needs to implement, to solve the problem.

Goal of this phase: understand what you need to build & why, but also prioritize
and define a clear scope -> what are the features that we are building now, in this first release.
What are the things that are not the current focus (nice to have features, for future improvements).

### Requirements / User stories / Features

- As a user, I want to visualize the days of the current month, so that I can plan my monthly activities
- As a user, I want to add appoinments on a specific day and time, so that I can plan schedule for my days
- As a user, I want to see what are the appointments that I have on each day, so that I can see what I have to do

### Nice to have (future releases)

- As a user, I want to add reminders on a certain day and time, so that I don't forget things to do
- As a user, I want to create full-day appointments, to block an entire day

## Design

After this phase usually, the design team designs a UX/UI (User Experience, User Interface), for
the application - in the form of wireframes, mockups, interactive prototypes, etc.

## 2 - Sfotware design phase

This is what we need to build. How do we do it?
Define the techicalities: frameworks, libraries, architecture of the software.

This is usually led by Software Architects.

In this case, for example, we could add some details on how to implement the various features
in terms of HTML, CSS, JS.

### Main HTML elements

- Calendar container (a div) that contains the days
- The days (cells of a table, or just divs)
- The inputs (time, button to save)
- The appointments for the day (a list)

### Main CSS styles

- Day (border, etc.)
- Selected day (it must be highlighted in some way)
- Style for the list items that represent the appointments
- Style for the various sections of the app: how wide is the calendar, ho tall is the inputs area, etc.

### Main JS functionalities

- Click on a day --> the day gets selected and the appointments for the day are visualized
- Click on save meeting
    --> collect the values of the inputs (time and name) and save a meeting for the day
    --> "refresh" the list of meetings for the day to show it immediately
