const timeALL=1500;
const interval_timeALL=300;

var time=1500;
var interval_time=300;
var bool_stop=true;

let root = document.documentElement;

function now(){
    if(!bool_stop){
        if(time>0){//タスク実行状態
            time--;
            root.style.setProperty('--cir-size',(time*100/timeALL).toFixed(2)+"%");
            var timeS=time%60;
            var timeM=Math.floor(time/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;

            //BGM
            document.getElementById('BGM1').play();
            document.getElementById('BGM1_back').pause();
            if(time>300){
                document.getElementById('BGM1').playbackRate = 0.75;//???????????????????????
            }else{
                document.getElementById('BGM1').playbackRate = 3.0;
            }
        }else if(interval_time>=0){//インターバル状態
            if(interval_time!=0)interval_time--;
            root.style.setProperty('--cir-size',Math.floor((interval_timeALL-interval_time)*100/interval_timeALL)+"%");

            var timeS=interval_time%60;
            var timeM=Math.floor(interval_time/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;

            //BGM
            document.getElementById('BGM1_back').play();
            document.getElementById('BGM1').pause();
            document.getElementById('BGM1_back').playbackRate = 0.75;
        }else{
            time=0;
            interval_time=0;
        }

        if(time==1){
            document.getElementById('finSE').play();
        }else if(time==interval_timeALL+1){
            document.getElementById('speedupSE').play();
        }else if(time%interval_timeALL-1==0){
            document.getElementById('startSE').play();
        }

        if(interval_time==0)document.getElementById('startSE').play();
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 10);//1000???
    }
    // const style = getComputedStyle(document.getElementById('circle::after'));
    // document.documentElement.style.setProperty('--test', 0.6);
}

function start(){
    // console.log(bool_stop);
    if(bool_stop){
        bool_stop=false;
        now();
    }
    if(interval_time<=300){
        time=timeALL;
        interval_time=interval_timeALL;
    }
}

function stop(){
    bool_stop=true;
    document.getElementById('BGM1').pause();
    document.getElementById('stopSE').play();
    now();
}

function reset(){
    if(time<timeALL){
        time=0;
        interval_time=interval_timeALL;
        bool_stop=false;
    }
    document.getElementById('stopSE').play();

    document.getElementById('BGM1').pause();
}



/*
25分間の動作 : --cir-size -> 0-100%
5分間の動作 : --cir-size -> 100-0%
*/