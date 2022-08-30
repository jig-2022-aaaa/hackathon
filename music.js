window.onload=function(){
    window.AudioContext=window.AudioContext||window.webkitAudioContext;
    const audioElement=document.querySelector("audio");
    
    document.getElementById("start").onclick=function(){
        const ctx=new AudioContext();    
        const track=ctx.createMediaElementSource(audioElement);
        console.log("click start");
        if(ctx.state==="suspended") ctx.resume();
        track.connect(ctx.destination);
        audioElement.play();
    }
    document.getElementById("stop").onclick=function(){
        console.log("click stop");
        audioElement.pause();
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