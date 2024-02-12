
let play = () => {
    let hour = 0, min = 0, sec = 0, msec = 0;
    let interval = setInterval(() => {
        msec++;
        if (msec === 100) {
            sec++;
            msec = 0;
        }
        else if (sec === 60) {
            min++;
            sec = 0;
        }
        else if (min === 60) {
            hour++;
            min = 0;
        }
        document.getElementById('hour').innerText = hour < 10 ? "0" + hour + " : " : hour + " : ";
        document.getElementById('min').innerText = min < 10 ? "0" + min + " : " : min + " : ";
        document.getElementById('sec').innerText = sec < 10 ? "0" + sec + " : " : sec + " : ";
        document.getElementById('msec').innerText = msec < 10 ? "0" + msec : msec;
    }, 10);
    clearInter = () => {
        clearInterval(interval);
    }
};

let reset = () => {
    document.getElementById('hour').innerText = "00 :";
    document.getElementById('min').innerText = " 00 :";
    document.getElementById('sec').innerText = " 00 :";
    document.getElementById('msec').innerText = " 00";
    document.getElementsByClassName('laps')[0].innerHTML = null;
    document.getElementsByClassName('laps')[0].style.visibility = "hidden";
    document.getElementById('btnclear').style.visibility = "hidden";

}

let laponpause = () => {
    let li = document.createElement("li");
    let hour = document.getElementById('hour').innerText;
    let min = document.getElementById('min').innerText;
    let sec = document.getElementById('sec').innerText;
    let msec = document.getElementById('msec').innerText;
    li.innerText = `${hour}${min}${sec}${msec}`;
    document.getElementsByClassName('laps')[0].appendChild(li);

    document.getElementsByClassName('laps')[0].style.visibility = "visible";
    document.getElementById('btnclear').style.visibility = "visible";

}
let clearlist = () => {
    
    document.getElementsByClassName('laps')[0].innerHTML = null;
    document.getElementsByClassName('laps')[0].style.visibility = "hidden";
    document.getElementById('btnclear').style.visibility = "hidden";

}