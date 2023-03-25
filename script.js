const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")


const countDown = function(){
    const now = new Date().getTime();
    const future = new Date("March 26 2023 15:32:00").getTime();
    const diff = future - now;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    let timeDays = Math.floor(diff/ d);
    let timeHours = Math.floor((diff % d) / h) 
    let timeMinutes = Math.floor((diff % h) / m) 
    let timeSeconds = Math.floor((diff % m) / s);

   
    days.textContent = timeDays;  
    if(days.textContent < 10) days.textContent = `0${timeDays}`;

    hours.textContent = timeHours;
    if(hours.textContent < 10) hours.textContent = `0${timeHours}`;
    
    minutes.textContent = timeMinutes
    if(minutes.textContent < 10) minutes.textContent = `0${timeMinutes}`;
    
    seconds.textContent = timeSeconds;
    if(seconds.textContent < 10) seconds.textContent = `0${timeSeconds}`;

    if(
        days.textContent === "00" &&
        hours.textContent === "00" &&
        minutes.textContent === "00" &&
        seconds.textContent === "00"
    ) {
        stopSetInterval();
    }
}

const myInterval = setInterval(countDown, 1000)

const stopSetInterval = function(){
    clearInterval(myInterval);
}