# Fitness Tracker

## About

![fitness tracker demo](/public/fitness-demo.gif)

This application tracks workout data, including the type and time; as well as weight, sets, and reps for strength training and distance for cardio. Users can add a workout and enter relevant information. The dashboard page allows the user to view the cumulative weights of multiple workouts and the total duration of time for past workouts. The front end uses JavaScript to display graphs on the dashboard. 

## Development

This application uses MongoDB on the back end to store information about workouts. The application takes in user input and stores information in a database created by MongoDB and Mongoose. CRUD routes are created using Express, allowing the user to add and modify workouts. 

## How to Use

In order to use this application, you can clone this repository to your local machine. Install dependencies using `npm i` and then use `node server.js` to initialize the application. 

The application is also deployed to Heroku, and can be accessed [here](https://shrouded-peak-90861.herokuapp.com/?id=60be35ad08ebfa0015d9a024).
