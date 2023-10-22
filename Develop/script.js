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