var timeALL=1500;
var bool_stop=true;

function now(){
    if(!bool_stop){
        timeALL--;
        let timeS=timeALL%60;
        let timeM=Math.floor(timeALL/60);
        if(timeS<10)timeS='0'+timeS;
        if(timeM<10)timeS='0'+timeM;
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 1000);
    }
}

function start(){
    // console.log(bool_stop);
    if(bool_stop){
        bool_stop=false;
        now();
    }
}

function stop(){
    bool_stop=true;
    now();
}

function reset(){
    timeALL=1500;
    bool_stop=true;
}

