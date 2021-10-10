
var imgs = document.querySelectorAll("img");
imgs.forEach(function (pic) {
    console.log(pic)
    pic.classList.add("sucess")
});


var texts = document.querySelectorAll("p.textError");

texts.forEach(function (element) {
    console.log(element)
    element.classList.add("sucess")
});


// var inputs = document.querySelectorAll("input")
// inputs.forEach(function(element){
//     element.classList.
// })


var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("email")
var password = document.getElementById("password");
var setButton = document.getElementById("buttonTrial");



console.log(firstName)


setButton.addEventListener("click", function () {  
    if (!validateInfo(firstName.value)) {
        firstName.classList.add("error");
        firstName.removeAttribute("placeholder");
        document.getElementById("img1").classList.remove("sucess")
        document.getElementById("text1").classList.remove("sucess")
    }else{
        document.getElementById("img1").classList.add("sucess")
        document.getElementById("text1").classList.add("sucess")
    }

});


setButton.addEventListener("click", function () {
    if (!validateInfo(lastName.value)) {
        lastName.classList.add("error")
        lastName.removeAttribute("placeholder");
        document.getElementById("img2").classList.remove("sucess")
        document.getElementById("text2").classList.remove("sucess")
    }else{
        document.getElementById("img2").classList.add("sucess")
        document.getElementById("text2").classList.add("sucess")
    }
});


setButton.addEventListener("click", function () {
    if (!validateInfo(email.value)) {
        email.classList.add("error")
        email.removeAttribute("placeholder");
        document.getElementById("text3Error").classList.remove("sucess");
        document.getElementById("img3").classList.remove("sucess");
        document.getElementById("text3").classList.remove("sucess");
    }else{
        document.getElementById("text3Error").classList.add("sucess");
        document.getElementById("img3").classList.add("sucess")
        document.getElementById("text3").classList.add("sucess")
    }
});

setButton.addEventListener("click", function () {
    if (!validateInfo(password.value)) {
        password.classList.add("error")
        password.removeAttribute("placeholder");
        document.getElementById("img4").classList.remove("sucess")
        document.getElementById("text4").classList.remove("sucess")
    }else{
        document.getElementById("img4").classList.add("sucess")
        document.getElementById("text4").classList.add("sucess")
    }
});


function validateInfo(s) {
    var rgx = /^.+$/;
    return s.match(rgx)
}





// function valudateEmail(s){
//     var rgx = /^.[8,12]
// }