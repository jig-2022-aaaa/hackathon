var timeALL=1500;
var interval_timeALL=300;
var bool_stop=true;

function now(){
    if(!bool_stop){
        if(timeALL>0){//�ʏ펞��
            timeALL--;
            var timeS=timeALL%60;
            var timeM=Math.floor(timeALL/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;

            //BGM
            document.getElementById('BGM1').play();
            if(timeALL>300){
                document.getElementById('BGM1').playbackRate = 0.75;
            }else{
                document.getElementById('BGM1').playbackRate = 3.0;
            }
        }else if(interval_timeALL>0){//�C���^�[�o������
            interval_timeALL--;
            var timeS=interval_timeALL%60;
            var timeM=Math.floor(interval_timeALL/60);
            if(timeS<10)timeS='0'+timeS;
            if(timeM<10)timeM='0'+timeM;

            //BGM
            document.getElementById('BGM1').pause();
        }else{
            timeALL=1500;
            interval_timeALL=300;
        }
        
        //���ʉ�
        if(timeALL==300){
            document.getElementById('speedupSE').play();
        }
        if(timeALL==0){
            document.getElementById('finSE').play();
        }
        if(interval_timeALL==0)document.getElementById('finSE').play();
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 20);
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
    document.getElementById('BGM1').pause();
    now();
}

function reset(){
    timeALL=1500;
    bool_stop=true;
    document.getElementById("time").innerHTML="____";
    document.getElementById('BGM1').pause();
    document.getElementById('stopSE').play();
}

