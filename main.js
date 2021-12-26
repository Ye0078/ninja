// Set the date we're counting down to
var countDownDate = new Date(" 10,  24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy Birthdayပါ🙆🙆";
  }
}, 1000);

// clac days
var firstDay = new Date("2021-11-16");
var now = new Date();
var toFirst = firstDay.getTime();
var toNow = now.getTime();
var clacLoveDay = (toNow - toFirst) / (1000 * 60 * 60 * 24);
var loveDay = Math.floor(clacLoveDay) + 1;

document.querySelector("#accent").innerHTML = loveDay + " days";

// calc anniversary : days
function calcDays(days) {
    var dayms = toFirst + days * (1000 * 60 * 60 * 24);
    var DAY = new Date(dayms);
    var year = DAY.getFullYear();
    var month = DAY.getMonth() + 1;
    var date = DAY.getDate() - 1;

    document.querySelector(`#date${days}`).innerHTML = `${year}. ${month}. ${date}`;
}

// calc anniversary : years
function calcYearDays(yearDays) {
    var dayms = toFirst + yearDays * (1000 * 60 * 60 * 24);
    var DAY = new Date(dayms);
    var year = DAY.getFullYear();
    var month = DAY.getMonth() + 1;
    var date = DAY.getDate();

    document.querySelector(`#date${yearDays}`).innerHTML = `${year}. ${month}. ${date}`;
}


// execute function
calcDays(100);
calcDays(200);
calcDays(300);
calcDays(400);
calcDays(500);

calcYearDays(365);

