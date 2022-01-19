

// clac days
var firstDay = new Date("2021-9-7");
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

