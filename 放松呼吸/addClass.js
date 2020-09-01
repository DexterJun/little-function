const con=document.getElementById("con");
const text=document.getElementById("text");
const totalTime=7500;
const breatheTime=(totalTime/5)*2;
const holdTime=totalTime/5;
breathAnimation();
function breathAnimation(){
    text.innerText="Breathe In";
    con.className="container grow";
    setTimeout(function(){
        text.innerText="Hold";
        setTimeout(function(){
            text.innerText="Breathe Out";
            con.className="container shrink";
        },holdTime);
    },breatheTime);
}
setInterval(breathAnimation,totalTime);