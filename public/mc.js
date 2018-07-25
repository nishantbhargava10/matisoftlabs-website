
// function tempnoti() {
//     window.alert("THANK YOU for trying to reach to us.This service will be available very soon.");
// }


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mynavbar").style.top = "0";
    }
    else {
        document.getElementById("mynavbar").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;
}
function myFunction() {

        var x = document.getElementById("mynavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }

}
function openmail() {
    document.getElementById("mailOverlay").style.display = "block";
}

function closemail() {
    document.getElementById("mailOverlay").style.display = "none";
}


var a1=0, a2=0,a3=0,a4=0,a5=0,a6=0,a7=0;
function load() {
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");

}
function linka1() {
    localStorage.setItem("a1", "1");
    // localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka2() {
    localStorage.setItem("a2", "1");
    localStorage.setItem("a1", "0");
    // localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka3() {
    localStorage.setItem("a3", "1");
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    // localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka4() {
    localStorage.setItem("a4", "1");
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    // localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka5() {
    localStorage.setItem("a5", "1");
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    // localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka6() {
    localStorage.setItem("a6", "1");
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    // localStorage.setItem("a6", "0");
    localStorage.setItem("a7", "0");
}
function linka7() {
    localStorage.setItem("a7", "1");
    localStorage.setItem("a1", "0");
    localStorage.setItem("a2", "0");
    localStorage.setItem("a3", "0");
    localStorage.setItem("a4", "0");
    localStorage.setItem("a5", "0");
    localStorage.setItem("a6", "0");
    // localStorage.setItem("a7", "0");
}



// var slideIndexhome = 0;
// showSlidesh();
//
// function showSlidesh() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides-home");
//     var dots = document.getElementsByClassName("dot-h");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndexhome++;
//     if (slideIndexhome > slides.length) {slideIndexhome = 1}
//     for (i = 0; i < dots.length; i++) {
//         // dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndexhome-1].style.display = "block";
//     // dots[slideIndexhome-1].className += " active";
//
//     setTimeout(showSlidesh, 11000); // Change image every 2 seconds
// }
// var slideIndex_c = 1;
// showSlidesc(slideIndex_c);
//
// function plusSlidesc(n) {
//     showSlidesc(slideIndex_c += n);
// }
//
// function showSlidesc(n) {
//     var i;
//     var slides = document.getElementsByClassName("myslidec");
//     if (n > slides.length) {slideIndex_c = 1}
//     if (n < 1) {slideIndex_c = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex_c-1].style.display = "block";
// }
// var slideIndex_c1 = 1;
// showSlidesc1(slideIndex_c1);
//
// function plusSlidesc1(n) {
//     showSlidesc1(slideIndex_c1 += n);
// }
//
// function showSlidesc1(n) {
//     var i;
//     var slides = document.getElementsByClassName("myslidec1");
//     if (n > slides.length) {slideIndex_c1 = 1}
//     if (n < 1) {slideIndex_c1 = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex_c1-1].style.display = "block";
// }

//     setTimeout(animatetext, 5000);
//     setTimeout(cleartext, 10000);
//
// function animatetext() {
//
//     var i = 0;
//     var txt = 'We constantly work on our technology to make your PC safe';
//     typeWriter();
//     function typeWriter() {
//         if (i < txt.length) {
//             document.getElementById("mid-bar1").innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(typeWriter, 50);
//         }
//     }
//
// }
// function cleartext() {
//     document.getElementById("mid-bar1").innerHTML ="";
// }
// Get the modal
// var modal = document.getElementById('myModal-d');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn-d");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close-d")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
