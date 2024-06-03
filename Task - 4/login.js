let Register = document.getElementById("Register");
let Login= document.getElementById("Login");
let nameField = document.getElementById("nameField");
let Heading = document.getElementById("Heading");

Login.onclick = function(){
    nameField.style.maxHeight="0";
    Heading.innerHTML="Login";
    Register.classList.add("disable");
    Login.classList.remove("disable");
}

Register.onclick = function(){
    nameField.style.maxHeight="60px";
    Heading.innerHTML="Register";
    Register.classList.remove("disable");
    Login.classList.add("disable");
}