
// -----------------------------------------------------------  Declare Variable  section  ----------------------------------------------------------- 
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


var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("email")
var password = document.getElementById("password");
var setButton = document.getElementById("buttonTrial");


// -------------------------------------------------------------------function section------------------------------------------------------------------------------ 


function validateInfo(s) {
    var rgx = /^.+$/;
    return s.match(rgx)
}



// ------------------------------------------------------------------opertion section ------------------------------------------------------------------------

setButton.addEventListener("click", function () {
    if (!validateInfo(firstName.value)) {
        firstName.classList.add("error");
        firstName.removeAttribute("placeholder");
        document.getElementById("img1").classList.remove("sucess")
        document.getElementById("text1").classList.remove("sucess")
    } else {
        firstName.classList.remove("error");
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
    } else {
        lastName.classList.remove("error");
        document.getElementById("img2").classList.add("sucess")
        document.getElementById("text2").classList.add("sucess")
    }
});

email.addEventListener("input", function () {
    document.getElementById("text3Error").innerHTML = "";
})
setButton.addEventListener("click", function () {
    if (!validateInfo(email.value)) {
        email.classList.add("error")
        email.removeAttribute("placeholder");
        document.getElementById("text3Error").classList.remove("sucess");
        document.getElementById("img3").classList.remove("sucess");
        document.getElementById("text3").classList.remove("sucess");
    } else {
        email.classList.remove("error");
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
    } else {
        password.classList.remove("error");
        document.getElementById("img4").classList.add("sucess")
        document.getElementById("text4").classList.add("sucess")
    }
});









