var timeALL=1500;
var bool_stop=true;

function now(){
    if(!bool_stop){
        timeALL--;
        var timeS=timeALL%60;
        var timeM=Math.floor(timeALL/60);

        var str_timeS=String(str_timeS);
        var str_timeM=String(str_timeM);
        if(timeS<10)str_timeS="0"+str_timeS;
        if(timeM<10)str_timeS="0"+str_timeM;
 
        document.getElementById("time").innerHTML=timeM+":"+timeS;
        if(bool_stop==false)window.setTimeout(now, 100);
    }
}
window.onload=function(){
    document.getElementById("start").onclick=function(){
        console.log(bool_stop);
        if(bool_stop){
            bool_stop=false;
            now();
        }
    }
    document.getElementById("stop").onclick=function(){
        bool_stop=true;
        now();
    }
}

    

function reset(){
    // リセット機能を追加
}

