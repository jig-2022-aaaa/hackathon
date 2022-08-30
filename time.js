var timeALL=1500;
var interval_timeALL=300;
var bool_stop=true;

function now(){
    if(!bool_stop){
        if(timeALL>0){//通常時間
            timeALL--;
            var timeS=timeALL%60;
            var timeM=Math.floor(timeALL/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;
        }else if(interval_timeALL>0){//インターバル時間
            interval_timeALL--;
            var timeS=interval_timeALL%60;
            var timeM=Math.floor(interval_timeALL/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;
        }else{
            timeALL=1500;
            interval_timeALL=300;
        }
        
        //効果音
        if(timeALL==0)document.getElementById('finSE').play();
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 5);
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
    document.getElementById("time").innerHTML="____";
}

