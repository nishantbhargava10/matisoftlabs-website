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
function read1() {
    document.getElementById("ref1").click();
}
function read2() {
    document.getElementById("ref2").click();
}
function read3() {
    document.getElementById("ref3").click();
}
function read4() {
    document.getElementById("ref4").click();
}
function read5() {
    document.getElementById("ref5").click();
}
function read6() {
    document.getElementById("ref6").click();
}
function read7() {
    document.getElementById("ref7").click();
}

var a1=localStorage.getItem("a1")
var a2=localStorage.getItem("a2")
var a3=localStorage.getItem("a3")
var a4=localStorage.getItem("a4")
var a5=localStorage.getItem("a5")
var a6=localStorage.getItem("a6")
var a7=localStorage.getItem("a7")


if(a1==1){
    setTimeout(read1,200);
location.href="#ref4";
}
else if(a2==1){
    // document.getElementById("ref2").click();
    location.href="#ref4";
    setTimeout(read2,200);
    // console.log("what")
}
else if(a3==1){
    // document.getElementById("ref3").click();
    location.href="#ref4";
    // console.log("the")
    setTimeout(read3,200);
}
else if(a4==1){
    // document.getElementById("ref4").click();
    location.href="#";
    setTimeout(read4,200);
}
else if(a5==1){
    // document.getElementById("ref5").click();
    location.href="#ref4";
    setTimeout(read5,200);
}
else if(a6==1){
    // document.getElementById("ref6").click();
    location.href="#ref4";
    setTimeout(read6,200);
}
else if(a7==1){
    // document.getElementById("ref7").click();
    location.href="#ref4";
    setTimeout(read7,200);
}
