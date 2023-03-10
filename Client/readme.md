Non Stem School Education Project

## HomePage
The home page works by checking using `loginCheck.js` 
- if the user is logged in and place their name and profile picture in the page.
- otherwise the user is redirected to the `login.html` page.
  
The json objects necessary are then fetched using `dataFetch.js`
- Stats : containing the user's statistics regarding their games and studies
- Messages : contains user's assessment feedback and general messages
- Schedule : contains classes for the logged in user for the next 3 days.
- Due: contains user's assessment due this week.

## Lecture Page
The lecture page works by fetching the specified lecture given it's `ID`
The parsed json object can contain:
- data that will be displayed on the page
- images
- games, a game can be played if specified

`lectureHandler.js` parses the given json file, once a slide that contains a game it is being injected in the current page giving the possibility to add as many games as a client desires to this platform.

## Exam Page
The exam page works in a similar fashion to the lecture page with the only difference that the user is sent the questions and once the user clicks the answer their answer is sent back to the server.


## Instalation
To install the project, follow these steps:

1. Clone the repository: `git clone `
2. Install the dependencies: `npm install`
3. Run the project: `npm start`

## Usage

To use the project, you can do something like this:

```javascript
const project = require("project");
project.doSomething();
```
## Features

The project has the following features:

- Feature 1: A brief explanation of what this feature does
- Feature 2: A brief explanation of what this feature does
- Feature 3: A brief explanation of what this feature does

## Screenshots

Here are some screenshots of the project:

![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)
![Screenshot 3](screenshot3.png)