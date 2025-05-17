let x = 0;
let y = 1;
function changeColor(){
    const color = ["rgb(255,255,255)","rgb(50,50,60)"];
    const emoji = ["🌒", "🌞"]
    x+=1
    y+=1
    if (x > 1){
        x = 0; 
    }
    if (y > 1){
        y = 0; 
    }
    document.getElementById("body-color").style.background = color[x];
    document.getElementById("button").innerHTML = emoji[x];
    document.getElementById("body-color").style.color = color[y]
    
}