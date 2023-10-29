// Get the current date and time

const time = document.getElementById('time');
const date = document.getElementById('currentDay');


function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    time.innerHTML = h + ':' + m + ':' + s;
    date.innerHTML = now.toDateString();
    setTimeout(updateClock, 1000);
}

updateClock();

//change the time  slot  to the current time

const past = document.getElementsByClassName('past');
const present = document.getElementsByClassName('present');
const future = document.getElementsByClassName('future');
const timeblock = document.getElementsByClassName('time-block');

arrT = [past, present, future];


function changetimeblock() {

   
}

console.log(arrT);