window.onload=function(){    
    let bgm=new Audio("前奏曲-第7番.mp3");
    bgm.loop=true;
    document.getElementById("start").onclick=function(){
        console.log("click start");
        bgm.play();
    }
    document.getElementById("stop").onclick=function(){
        console.log("click stop");
        bgm.pause();
        // audioElement.pause();
    }
}

// start_button.onclick(()=>function(){
//     window.alert("click start");
//     console.log("click stars");
// });

// stop_button.onclick(()=>function(){
//     window.alert("ckick stop");
//     console.log("click stop");
// })