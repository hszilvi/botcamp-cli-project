var readlineSync = require('readline-sync');
const chalk = require('chalk');

const { WELCOME_MESSAGE, WHICH_MOVIE_QUESTION } = require('./copy');
const { message, alertMessage } = require('./formatting');
const { movies, prices, listOfSeats } = require('./database');

// ********************************************************************************************
// ----Select a movie and time from the list section ------------------------------------------

function getChooseMovie() {
  let movieIndex = -1;
  while (movieIndex < 0) {
    movieIndex = readlineSync.keyInSelect(
    movies.map((movie) => movie.title), (WHICH_MOVIE_QUESTION)
    );
  }
  selectedMovie = movies[movieIndex].title;
  return movieIndex;
};

function getChooseTime(movieIndex) {
  let timeIndex = -1;
  while (timeIndex < 0) {
    timeIndex = readlineSync.keyInSelect(movies[movieIndex].times, 'Select time!');
  }
  return movies[movieIndex].times[timeIndex];
};
// counter to define sum of needed seats
function counter() {
  let retVal= [];
  Object.keys(listOfSeats).forEach(function(key) {
    return retVal.push(listOfSeats[key].length);
  });
  return retVal.reduce((acc, cur) => acc + cur, 0);
};

function getHowManyTickets(counter, ticketType, prevTickets) {
  let tickets = -1;
  while (tickets < 0) {
    const howManyTickets = readlineSync.question(`How many ${ticketType} would you like? `);
    const howManyTicketsInt = parseInt(howManyTickets);
    if (!Number.isInteger(howManyTicketsInt) || howManyTicketsInt < 0) {
      console.log(alertMessage('Please give a valid number!'));
    } else if (counter - prevTickets < howManyTicketsInt) {
      console.log(alertMessage(`Sorry we don't have so many tickets.`));
    } else {
      tickets = howManyTicketsInt;
    }
  }
  return tickets;
};

function getSelectAllTickets() {
  let count = counter();
  let allTickets = [];
  allTickets.push(getHowManyTickets(count, 'adult', 0));
  allTickets.push(getHowManyTickets(count, 'child', allTickets[0]));
  return allTickets;
};
// --- Select seats
function getSelectRow() {
  let selectedRow = -1;
  while (selectedRow < 0) {
    selectedRow = readlineSync.keyInSelect(
      Object.keys(listOfSeats, message('Select a row! '))
    );
  }
  selectedRow = Object.keys(listOfSeats)[selectedRow];
  console.log(selectedRow);
  return selectedRow;
};

function getSelectSeats(selectedRow, allTickets) {
  let selectedSeats = [];
  let seatList = listOfSeats[selectedRow];
  for (i = 0; i < allTickets; i++) {
    if (allTickets <= seatList.length) {
    selectVar = readlineSync.keyInSelect(seatList, message('Select your seats! '));
    selectInt = parseInt(selectVar);      
    selectedSeats.push(seatList.splice(selectInt, 1));
    } else {
      return getSelectRow();
    }
  }
  return selectedSeats;
};
// --- support to defince prices
function totalVisitors(allTickets)
{
  let ticketTypes = 0;
  for (let i = 0; i < allTickets.length; ++i) {
    ticketTypes += allTickets[i];
  }
  return ticketTypes;
}

function getPrice(allTickets) {
  total = allTickets[0] * prices.adult + allTickets[1] * prices.child;
  return total;
}

function mainMenu() {
  console.log(message(WELCOME_MESSAGE))
  let index = 0;
  let movieIndex = -1;
  let timeIndex = -1;
  let allTickets = -1;
  let selectedRow = -1;
  let selectInt = -1;
  let total = -1;
  const menu = ['Choose a movie!'];
  index = readlineSync.keyInSelect(menu, 'Welcome to the cinema, please select!');
  if (index == 0) {
    movieIndex = getChooseMovie();
    timeIndex = getChooseTime(movieIndex);
    allTickets = getSelectAllTickets();
    selectedRow = getSelectRow(); 
    selectInt = getSelectSeats(selectedRow, totalVisitors(allTickets));  
    total = getPrice(allTickets);
    console.log(`Movie: ${selectedMovie}`);
    console.log(`Your movie starts at ${timeIndex}`);
    console.log(`You have ${allTickets} tickets.`);
    console.log(`Your selected row is: ${selectedRow}`);
    console.log(`Your seats are ${selectInt}.`);
    console.log(`Pay £${total}.`);
  }
};
mainMenu();