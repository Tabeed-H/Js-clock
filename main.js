let seconds = document.querySelector('.seconds-hand');
let minutes = document.querySelector('.minute-hand');
let hours = document.querySelector('.hour-hand');


function changeTime(){
    let currentTime = new Date();

    let second = currentTime.getSeconds();
    let moveSeconds = ((second/ 60) * 360) + 90;
    seconds.style.transform = `rotate(${moveSeconds}deg)`

    let minute = currentTime.getMinutes();
    let moveMinutes = ((minute/ 60) * 360) + ((second/60)*6) + 90;
    minutes.style.transform = `rotate(${moveMinutes}deg)`

    let hour = currentTime.getHours();
    let moveHours = ((hour/ 12) * 360)+ ((minute/60)*30) + 90;
    hours.style.transform = `rotate(${moveHours}deg)`

    let digital = document.querySelector(".text");
    digital.innerHTML = `${hour} : ${minute} : ${second}`
}

setInterval( changeTime, 1000)