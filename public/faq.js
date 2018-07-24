function link1() {
    document.getElementById("link1").click();
}
function link2() {
    document.getElementById("reference").click();
}
function link3() {
    document.getElementById("link3").click();
}
function link4() {
    document.getElementById("link4").click();
}
function link5() {
    document.getElementById("link5").click();
}
function que1() {
    document.getElementById("reference").click();

}

var a1=localStorage.getItem("a1")
var a2=localStorage.getItem("a2")
var a3=localStorage.getItem("a3")
var a4=localStorage.getItem("a4")
var a5=localStorage.getItem("a5")
var a6=localStorage.getItem("a6")
var a7=localStorage.getItem("a7")


if(a1==1){
document.getElementById("ref1").click();
location.href="#ref1";
}
else if(a2==1){
    document.getElementById("ref2").click();
    location.href="#ref2";
    console.log("what")
}
else if(a3==1){
    document.getElementById("ref3").click();
    location.href="#ref3";
    console.log("the")
}
else if(a4==1){
    document.getElementById("ref4").click();
    location.href="#ref4";
}
else if(a5==1){
    document.getElementById("ref5").click();
    location.href="#ref5";
}
else if(a6==1){
    document.getElementById("ref6").click();
    location.href="#ref6";
}
else if(a7==1){
    document.getElementById("ref7").click();
    location.href="#ref7";
}
