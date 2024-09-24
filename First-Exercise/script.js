/**
 * Test Format Name
 */
// const rawFirstName = 'jOE';
// const rawLastName = 'gREENBURG';

// function formatName(name, name2) {
//     const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase() + ' ' + name2[0].toUpperCase() + name2.slice(1).toLowerCase();
//     return formattedName;
// }

// console.log(formatName(rawFirstName, rawLastName));

/**
 * - You have that form project, so set it to use .map instead of using .push, and doesn't affect the original array.
 * - Add the names as elements on the page that use flex, and include a delete button that removes them from the array.  Sort them alphabetically this time with .sort
 * - build another that stores them in localStorage, and make sure they stay in your browser (non-incognito) when you revisit the page, and make div cards out of them that allow you to delete the DOM element and remove from localStorage
 * - try making one that doesn't have a <form> and only uses this for HTML: 
 *      <div id="whatever"></div>
 *      <button id="whatever">Add Name</button>
 * - then append the names inside of a card in the #whatever div.  Add an edit and a delete button - for that one you could use objects. 
 */

//Old Array
const userNames = ["Sally Chambers", "Toby Rogerson"];
        
//Format names given function
function formatName(name, name2) {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase() + ' ' + name2[0].toUpperCase() + name2.slice(1).toLowerCase();
    return formattedName;
}
//Setting the new name to a variable to use with the .map below
const newName = formatName('Joe', 'Greenburg');

// Declaring newPeople as a new Array, using the spread operator and selecting an element, and mapping a new array with the new element.

const newPeople = userNames.map(userName => userName);
const updatedPeople = [...newPeople, newName];
updatedPeople.sort();

console.log(updatedPeople);