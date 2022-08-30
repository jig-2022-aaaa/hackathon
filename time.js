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

            //BGM
            document.getElementById('BGM1').play();
            document.getElementById('BGM1_back').pause();
            if(timeALL>300){
                document.getElementById('BGM1').playbackRate = 0.75;
            }else{
                document.getElementById('BGM1').playbackRate = 3.0;
            }
        }else if(interval_timeALL>=0){//インターバル時間
            if(interval_timeALL!=0)interval_timeALL--;
            var timeS=interval_timeALL%60;
            var timeM=Math.floor(interval_timeALL/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;

            //BGM
            document.getElementById('BGM1_back').play();
            document.getElementById('BGM1').pause();
            document.getElementById('BGM1_back').playbackRate = 0.75;
        }else{
            timeALL=0;
            interval_timeALL=0;
        }
        
        //効果音

        if(timeALL==1){
            document.getElementById('finSE').play();
        }else if(timeALL==301){
            document.getElementById('speedupSE').play();
        }else if(timeALL%300-1==0){
            document.getElementById('startSE').play();
        }

        if(interval_timeALL==0)document.getElementById('startSE').play();
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 10);//1000で一秒
    }
    const style = getComputedStyle(document.getElementById('circle::after'));
    document.documentElement.style.setProperty('--test', 0.6);
}

function start(){
    // console.log(bool_stop);
    if(bool_stop){
        bool_stop=false;
        now();
    }
    if(interval_timeALL<=300){
        timeALL=1500;
        interval_timeALL=300;
    }
}

function stop(){
    bool_stop=true;
    document.getElementById('BGM1').pause();
    document.getElementById('stopSE').play();
    now();
}

function reset(){
    if(timeALL<1500){
        timeALL=0;
        interval_timeALL=300;
        bool_stop=false;
    }
    document.getElementById('stopSE').play();

    document.getElementById('BGM1').pause();
}

