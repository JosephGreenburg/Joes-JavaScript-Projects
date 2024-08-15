/**
 * First Exercise
 * 
 * Using basic display: 'flex' , create an index.html page with a <form> input that submits to itself.
 * - Use a <style> tag for all of your CSS
 * - Use a  <script> tag for all of your JavaScript (in either the <head>, end of </body>, or both
 * The <form> should include the following inputs:
 * - first name (text)
 * - last name
 * - submit button
 * Add an array that contains the following string values:
 * - Sally Chambers
 * - Toby Rogerson
 * Create a script that takes the <form> submission for First Name and Last Name,
 * then make sure that both have the following properties:
 * - First letter capitalized
 * - Rest of the name in lowercase
 * - adds it to the array of existing names
 */

//Create array of objects with first and last names

const userNames = [{first: "Sally", last: "Chambers"}, {first: "Toby", last: "Rogerson"}]
//Create constants for all element IDs for future use
const form = document.getElementById('form');
const first = document.getElementById('firstName');
const last = document.getElementById('lastName');
const submitButton = document.getElementById('submit');

//Found on FreeCode Camp - https://forum.freecodecamp.org/t/is-an-event-listener-an-expression/457285
submitButton.addEventListener("click", (event) =>  {

    //Prevents the index.html from refreshing
    event.preventDefault();

    //Capture values from the first and last constant
    const firstValue = first.value;
    const lastValue = last.value;

    //push the first and last name object to the end of the userNames array
    userNames.push({first: firstValue, last: lastValue});

    //Show the updated array in the console
    console.log(userNames);
    });

//Arrow function I was trying to incorporate - From Traversy Tutorial
//const addNames = (a, b) => userNames.push({first: a, last: b});

//addEventListener I was attempting to incorporate - Found on MDN - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//form.addEventListener("submit", addNames);



