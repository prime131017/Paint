let canvas = document.getElementById("canvas"), 
    context = canvas.getContext("2d"),
    w = canvas.width,
    h=canvas.height;
                 
let mouse = { x:0, y:0};
let draw = false;



function color1() {
context.strokeStyle = "#0000f5";
} 
function color2() {
    context.strokeStyle = "#469df8";
} 
function color3() {
    context.strokeStyle = "#76fbfd";
} 
function color4() {
    context.strokeStyle = "#ccfdfe";
} 
function color5() {
    context.strokeStyle = "#000000";
} 
function color6() {
    context.strokeStyle = "#333333";
} 
function color7() {
    context.strokeStyle = "#666666";
} 
function color8() {
    context.strokeStyle = "#999999";
} 
function color9() {
    context.strokeStyle = "#f7ce76";
} 
function color10() {
    context.strokeStyle = "#f7ce46";
} 
function color11() {
    context.strokeStyle = "#ffff54";
} 
function color12() {
    context.strokeStyle = "#ffffa6";
} 
function color13() {
    context.strokeStyle = "#123208";
} 
function color14() {
    context.strokeStyle = "#545015";
} 
function color15() {
    context.strokeStyle = "#75fb4c";
} 
function color16() {
    context.strokeStyle = "#b1fca3";
} 
function color17() {
    context.strokeStyle = "#dc2f21";
} 
function color18() {
    context.strokeStyle = "#ed702d";
} 
function color19() {
    context.strokeStyle = "#f19e4b";
} 
function color20() {
    context.strokeStyle = "#f1dfb8";
} 
function color21() {
    context.strokeStyle = "#2e0402";
} 
function color22() {
    context.strokeStyle = "#5f360f";
} 
function color23() {
    context.strokeStyle = "#bf6b27";
} 
function color24() {
    context.strokeStyle = "#d8b98d";
} 
function color25() {
    context.strokeStyle = "#9c24f6";
} 
function color26() {
    context.strokeStyle = "#bf6bc7";
} 
function color27() {
    context.strokeStyle = "#ed70f8";
} 
function color28() {
    context.strokeStyle = "#f19ef9";
} 
function color29() {
    context.strokeStyle = "#e2c5e5";
} 
function color30() {
    context.strokeStyle = "#ffffff";
} 

function tassel1(){
    context.lineWidth = 2;
}
function tassel2(){
    context.lineWidth = 4;
}
function tassel3(){
    context.lineWidth = 6;
}
function tassel4(){
    context.lineWidth = 7;
}
function tassel5(){
    context.lineWidth = 8;
}

function Clear(){
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}


function Save(){
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
}




canvas.addEventListener("mousedown", function(e){
        
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
});


canvas.addEventListener("mousemove", function(e){
        
    if(draw==true){
        
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);

        context.stroke();
    }
});


canvas.addEventListener("mouseup", function(e){
        
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
    draw = false;
});