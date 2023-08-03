setInterval(setClock,1000)
setInterval(myTime,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock()
{
    const currentDate = new Date();
    const secondsratio = currentDate.getSeconds() / 60;
    const minsratio = (secondsratio + currentDate.getMinutes()) / 60;
    const hourratio = (minsratio + currentDate.getHours()) / 12;

setRotation(secHand,secondsratio)
setRotation(minHand,minsratio)
setRotation(hourHand,hourratio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);

}

function myTime()
{
    var myDate = new Date();
    var hr,min = (myDate.getMinutes() < 10)? "0"+ myDate.getMinutes() : myDate.getMinutes(),
        sec = (myDate.getSeconds() < 10) ? "0"+ myDate.getSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() <= 12) ? "AM" : "PM";

    if(myDate.getHours() == 0)
    {
        hr = 12;
    }
    else if(myDate.getHours() >12)
    {
        hr = myDate.getHours() - 12;
    }
    else
        hr = myDate.getHours();

    var currentTime = hr + ":" + min + ":" + sec;
    document.getElementsByClassName("H")[0].innerHTML = currentTime;
    document.getElementsByClassName("M")[0].innerHTML = M;

    var myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var myMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    day = myDate.getDate();

    var currentDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + " " + day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;

}
setClock()
myTime()