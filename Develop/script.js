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

  //Assign saveBtn click listener for user input and time stamp??
  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
})

//load any saved data from LocalStorage - do this for each hour created.
$("#12am .description").val(localStorage.getItem("12am"));
$("#1am .description").val(localStorage.getItem("1am"));
$("#2am .description").val(localStorage.getItem("2am"));
$("#3am .description").val(localStorage.getItem("3am"));
$("#4am .description").val(localStorage.getItem("4am"));
$("#5am .description").val(localStorage.getItem("5am"));
$("#6am .description").val(localStorage.getItem("6am"));
$("#7am .description").val(localStorage.getItem("7am"));
$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
$("#6pm .description").val(localStorage.getItem("6pm"));
$("#7pm .description").val(localStorage.getItem("7pm"));
$("#8pm .description").val(localStorage.getItem("8pm"));
$("#9pm .description").val(localStorage.getItem("9pm"));
$("#10pm .description").val(localStorage.getItem("10pm"));
$("#11pm .description").val(localStorage.getItem("11pm"));


function changetimeblock() {
    //get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr('id').split("hour")[0][0]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour > currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
changetimeblock();