let hour=document.querySelector("#hour");
let minute=document.querySelector("#minute");
let seconds=document.querySelector("#seconds");

setInterval(()=>{
    d=new Date();//used for current date
    let htime=d.getHours();    
    let mtime=d.getMinutes();
    let stime=d.getSeconds();

    //rotation of every hand at any time-->
    let hrotation = 30*htime + mtime/2 + stime/60;
    let mrotation = 6*mtime + stime/10;
    let srotation = 6*stime;
    seconds.style.transform=`rotate(${srotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    hour.style.transform=`rotate(${hrotation}deg)`;
    // seconds.style.rotate=`y ${srotation}deg`;
},1000);//do task every interval, setTimeout()-->only once
