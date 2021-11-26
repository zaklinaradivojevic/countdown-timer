var deadline = new Date("dec 31, 2021 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("daysNum").innerHTML = days;
    document.getElementById("hoursNum").innerHTML = hours;
    document.getElementById("minutesNum").innerHTML = minutes;
    document.getElementById("secondsNum").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("title").textContent = "TIME UP";
        document.getElementById("daysText").textContent = '0 days';
        document.getElementById("hoursText").textContent = '0 hours';
        document.getElementById("minutesText").textContent = '0 minutes';
        document.getElementById("secondsText").textContent = '0 seconds';
        document.getElementById("daysNum").textContent = '0';
        document.getElementById("hoursNum").textContent = '0';
        document.getElementById("minutesNum").textContent = '0';
        document.getElementById("secondsNum").textContent = '0';

    }
}, 1000);