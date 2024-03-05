const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");

//Date:
const dateCompare = new Date("Apr 20, 2024 00:00:00").getTime();

//const dateCompare = new Date("Mar 4, 2024 21:44:00").getTime();
//console.log(dateCompare);

function compareTime(){
    datePresent = new Date().getTime();
    difference = dateCompare - datePresent;

    if (difference<=0){
        clearInterval(execute);
        console.log("El evento ha iniciado");
    } else {
        var d=Math.floor(difference/(1000*60*60*24));
        var h=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
        var m=Math.floor((difference%(1000*60*60))/(1000*60));
        var s=Math.floor((difference%(1000*60))/1000);
        //console.log(d,h,m,s);

        days.innerHTML = ("0"+d).slice(-2);
        hours.innerHTML = ("0"+h).slice(-2);
        minutes.innerHTML = ("0"+m).slice(-2);
        seconds.innerHTML = ("0"+s).slice(-2);
    }
}

execute = setInterval(compareTime,1000);