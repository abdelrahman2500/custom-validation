var userName = document.getElementById("username")
var select = document.getElementById("country")
var zip = document.getElementById("zip")
var options = document.querySelectorAll("option")
var email = document.getElementById("email")
var hoppies = document.querySelectorAll("[type='checkbox']")
var submitBtn = document.querySelector("[type='submit']")
var resetBtn = document.querySelector("[type='reset']")

var userNameSpan = document.getElementById("usernamespan")
var zipSpan = document.getElementById("zipspan")
var emailSpan = document.getElementById("emailspan")
var hoppySpan = document.getElementById("hoppyspan")


userName.focus()

userName.addEventListener("blur", function(e){
    if(!usernamevalid()){
        e.target.className = "error";
        userNameSpan.style.visibility = "visible";
        userName.focus();
        userName.select();
    } else {
        userNameSpan.style.visibility = "hidden";
        e.target.className = "ok";
    }
})
console.log(options)

select.addEventListener("click",function(){
    switch (select.value) {
        case "egypt":
            zip.value = 1111            
            break;
        case "spain":
            zip.value = 1234            
            break;
        case "uae":
            zip.value = 5555            
            break;
        default:
            break;
    }
})

select.addEventListener("blur", function(){
    if(!zipvalid()){
        zipSpan.className = "error";
        zipSpan.style.visibility = "visible";
        select.focus();
        // zip.select();
    } else {
        zipSpan.style.visibility = "hidden";
        zipSpan.className = "ok";
    }
})
email.addEventListener("blur", function(e){
    if(!emailvalid()){
        e.target.className = "error";
        emailSpan.style.visibility = "visible";
        email.focus();
        email.select();
    } else {
        emailSpan.style.visibility = "hidden";
        e.target.className = "ok";
    }
})


document.forms[0].addEventListener('submit', function (e) {
    if (!(usernamevalid() && zipvalid() && emailvalid() && hoppiesValid())) {
        //prevnet default
        e.preventDefault();
    }
    if (!usernamevalid()){
        userName.className = "error";
        userNameSpan.style.visibility = "visible";
        userName.focus();
        userName.select();
    }
    if (!zipvalid()) {
        zip.className = "error";
        zipSpan.style.visibility = "visible";
        select.focus();
    }
    if (!emailvalid()) {
        email.className = "error";
        emailSpan.style.visibility = "visible";
        email.focus();
        email.select();
    }
    if(!hoppiesValid()){
        hoppySpan.style.visibility = "visible";
    }
});

document.forms[0].addEventListener('reset', function (e) {

    if (!confirm('Are You Sure To Clear Your Form ?')) {
        // prevent Degault
        e.preventDefault();
    }
});
// validation
// userName
function usernamevalid(){
    var usernamepttr = /^[A-Za-z]{4,10}$/
    return userName.value.trim().match(usernamepttr)
}

function zipvalid(){
    var zippttr = /^[0-9]{4}$/
    return zip.value.trim().match(zippttr)
}

function emailvalid(){
    var emailpttr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return email.value.trim().match(emailpttr)
}

function hoppiesValid(){
    for(i=0;i<hoppies.length;i++){
        if(hoppies[i].checked){
            hoppySpan.style.visibility = "hidden"; 
            return (hoppies[i].checked) 
        } else {
            hoppySpan.style.visibility = "visible";
        }
    }
}
console.log(hoppiesValid())