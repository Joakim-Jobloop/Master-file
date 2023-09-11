// European clock that is displayed in the html using date object

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // let ampm = "AM";
    // if (hours > 12) {
    //     hours -= 12;
    //     ampm = "PM";
    // }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let clockDiv = document.getElementById("clock");
    clockDiv.textContent = hours + ":" + minutes + ":" + seconds + " ";
    setTimeout(clock, 1000);
}
clock();


