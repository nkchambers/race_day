//CODECADEMY JAVASCRIPT PRACTICE - Race Day Project 

// STARTING CODEBASE
let raceNumber = Math.floor(Math.random() * 1000);


// Task 1 - Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.
// Check off this task after reading that line. - Check!


// Task 2 - Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
let earlyRegister = true;


// Task 3 - Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions.
let runnerAge = 32;
console.log(`Age is ${runnerAge}.`);


// Task 4 -  Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true.
if (earlyRegister && runnerAge > 18) {
    raceNumber += 1000;
    console.log(`Race #: ${raceNumber}`);
} else {
    console.log(`Race #: ${raceNumber}`);
}


// Task 5 - Create a separate control flow statement below the first (starting with if again). 
// This statement will check age and registration time to determine race time.
// For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. 
// Include their raceNumber.
if (runnerAge > 18 && earlyRegister) {
    console.log(`Message: Your race number is ${raceNumber} and you will race at 9:30 AM!`);
} else if (runnerAge > 18 && !earlyRegister) {
    console.log(`Message: Your race number is ${raceNumber} and you will race at 11:00 AM!`);
} else if (runnerAge < 18) {
    console.log(`Message: Your race number is ${raceNumber} and you will race at 12:30 PM!`);
} else {
    console.log(`Message: Your race number is ${raceNumber}. Please see registration desk for information on your race time.`);
}


// Task 6 - “Late adults run at 11:00 am”
// Since we already checked for early adults we can write a statement like this: 
// else if runner is over 18 AND did not register early they will race at 11:00am
// Write the corresponding else if statement.
// Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.


// Task 7 - “Youth registrants run at 12:30 pm (regardless of registration)”
// For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.


// Task 8 - Enter different combinations of values for the two variables you created and run your code several times. 
// Verify that the correct statements are printing to the console!


// Task 9 - Don’t forget about runners exactly 18 years old!
// Add an else statement that logs a statement to the console telling the runner to see the registration desk.



