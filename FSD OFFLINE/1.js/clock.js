var time = 6000;
setInterval(function(){
    time = time - 1;
    console.log(parseInt(time/3600),':',(time/60),':',time%60);
    document.getElementsByClassName('hours')[0].innerText = parseInt(time/3600);
    document.getElementsByClassName('minutes')[0].innerText = parseInt(time/600);
    document.getElementsByClassName('seconds')[0].innerText = parseInt(time%60);  
},1000)