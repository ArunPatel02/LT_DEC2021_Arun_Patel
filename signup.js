const input_field = document.querySelector(".input_field");
const button = document.querySelector(".button");
const email = document.getElementById("email");
const Name = document.getElementById("Name");
const password = document.getElementById("password");
const name_err = document.querySelector(".name_err");
const email_err = document.querySelector(".email_err");
const password_err = document.querySelector(".password_err");
let email_validate , Name_validate , password_validate;

function validateEmail(email) {
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(String(email).toLowerCase());
}

email.addEventListener("change" , (e)=>{
    console.log(validateEmail(email.value))
    if (!validateEmail(email.value)) {
        email_err.classList.remove("green");
        email_err.classList.add("red");
        email_err.innerHTML = "Invalid Email";
        email_validate = false;
    }
    else{
        email_err.classList.remove("red");
        email_err.classList.add("green");
        email_err.innerHTML = "Valid Email";
        email_validate = true;
    }
})

Name.addEventListener("change" , (e)=>{
    if (Name.value.length<6) {
        name_err.classList.remove("green");
        name_err.classList.add("red");
        name_err.innerHTML = "Name must be of minimun 6 character";
        Name_validate = false;
    }
    else{
        name_err.classList.remove("red");
        name_err.classList.add("green");
        name_err.innerHTML = "Valid Name";
        Name_validate = true;
    }
})

password.addEventListener("change" , (e)=>{
    const password_regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!password_regx.test(password.value)) {
        password_err.classList.remove("green");
        password_err.classList.add("red");
        password_err.innerHTML = "Invalid Password"
        password_validate=false;
    }
    else{
        password_err.classList.remove("red");
        password_err.classList.add("green");
        password_err.innerHTML = "Valid Password";
        password_validate=true;
    }
})

button.addEventListener("click" , (e)=>{
    e.preventDefault();
    if (email.value==="") {
        email_err.classList.remove("green");
        email_err.classList.add("red");
        email_err.innerHTML = "Fill the field"
        email_validate=false;
    }
    if (Name.value==="") {
        name_err.classList.remove("green");
        name_err.classList.add("red");
        name_err.innerHTML = "Fill the field"
        Name_validate=false;
    }
    if (password.value==="") {
        password_err.classList.remove("green");
        password_err.classList.add("red");
        password_err.innerHTML = "Fill the field"
        password_validate=false;
    }
    if (Name_validate && email_validate && password_validate) {
        input_field.submit();
    }

})