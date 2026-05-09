/*
    Name:Nathan Bui
    Date created: 09/15/2024
    Dated Modified: 09/15/2024
    Purpose:Homework 1 Java script
*/

// dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
const todayElem = document.getElementById("today");
if (todayElem) {
    todayElem.innerHTML = text;
}

// range slider js code
const slider = document.getElementById("Range");
const output = document.getElementById("range_slider");
if (slider && output) {
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    };
}
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == ""){
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    }else if (fname != ""){
        if (!fname.match(namePattern)){
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }else if (fname.length <2 ){
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    }else if (fname.length > 30){
         document.getElementById("fname-error").innerHTML ="First name cannot be more than 30 characters.";
         return false;
    } else{
         document.getElementById("fname-error").innerHTML = "";
         return true;   
    }  
}
}

function validateMname() {
    let mname= document.getElementById("mname").value;
    const namePattern = /^{A-Z}$/;

    mname= mname.toUpperCase();
     document.getElementById("mname").value = mname;
     if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Middle name must be a single uppercase letter.";
        return false;
     }else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
     }
}

function validateLname() {
    lname= document.getElementById.apply("lname").value.trim();
    var namePattern = /^{a-zA-Z'-]+$/;
    
    if (lname == "")
        function validateMname() {
    let mname= document.getElementById("lname-error").innerHTML="Last name field cannot be empty.";
    return false;
    }else if (fname != ""){
        if (!fname.match(namePattern)){
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }else if (fname.length <2 ){
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    }else if (fname.length > 30){
         document.getElementById("lname-error").innerHTML ="Last name cannot be more than 30 characters.";
         return false;
    } else{
         document.getElementById("lname-error").innerHTML = "";
         return true;   
    } 
}
}

function validateDob() {
    const dobElem = document.getElementById("dob");
    if (!dobElem) return true;

    const date = new Date(dobElem.value);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);
    const now = new Date();

    if (isNaN(date.getTime())) {
        document.getElementById("dob_error").innerHTML = "Invalid date.";
        dobElem.value = "";
        return false;
    }
    if (date > now) {
        document.getElementById("dob_error").innerHTML = "Date of Birth cannot be in the future.";
        dobElem.value = "";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob_error").innerHTML = "Date of Birth cannot be more than 120 years ago.";
        dobElem.value = "";
        return false;
    } else {
        document.getElementById("dob_error").innerHTML = "";
        return true;
    }
}

function validateSsn() {
    const ssnElem = document.getElementById("ssn");
    if (!ssnElem) return true;
    const ssn = ssnElem.value.trim();
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Invalid SSN format.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1() {
    const ad1Elem = document.getElementById("address1");
    if (!ad1Elem) return true;
    const ad1 = ad1Elem.value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Address must be at least 2 characters long.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

function validateCity(){
    city= document.getElementById("city").value.trim();
    
    if(!city){
        document.getElementById("City-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
       document.getElementById("City-error").innerHTML = "";
       return true;
    }
}

function validateZcode() {
    const zipInput = document.getElementById("zcode");
    if (!zipInput) return true;
    let zip = zipInput.value.replace(/[^\d]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip code is required.";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0, 5);
    }
    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validateEmail() {
    const emailElem = document.getElementById("email");
    if (!emailElem) return true;
    const email = emailElem.value.trim();
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        return false;
    } else if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Invalid email format.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    if (!phoneInput) return true;
    let phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Phone number must be 10 digits.";
        return false;
    }

    const formattedPhone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

function validateUname() {
    const unameElem = document.getElementById("uname");
    if (!unameElem) return true;
    let uname = (unameElem.value || "").toLowerCase();

    unameElem.value = uname;

    if (uname.length === 0) {
        document.getElementById("uname-error").innerHTML = "Username is required.";
        return false;
    }
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot start with a number.";
        return false;
    }

    const regex = /^[a-z0-9]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = "Username can only contain letters and numbers.";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters long.";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

function validatePword() {
    const pwordElem = document.getElementById("pword");
    const unameElem = document.getElementById("uname");
    if (!pwordElem) return true;
    const pword = pwordElem.value || "";
    const uname = unameElem ? (unameElem.value || "") : "";

    const errorMessage = [];

    if (!/[A-Z]/.test(pword)) {
        errorMessage.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(pword)) {
        errorMessage.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(pword)) {
        errorMessage.push("Password must contain at least one digit.");
    }
    if (!/[!@#$%^&*()\-+]/.test(pword)) {
        errorMessage.push("Password must contain at least one special character.");
    }
    if (uname && (pword === uname || pword.includes(uname))) {
        errorMessage.push("Password cannot contain username.");
    }

    const errorContainer = document.querySelector(".pword-message");
    if (errorContainer) {
        errorContainer.innerHTML = errorMessage.map((message) => `<span>${message}</span><br/>`).join("");
    }
    return errorMessage.length === 0;
}

function confirmPword() {
    const pword1 = document.getElementById("pword") ? document.getElementById("pword").value : "";
    const pword2 = document.getElementById("con_pword") ? document.getElementById("con_pword").value : "";

    if (pword1 !== pword2) {
        document.getElementById("con_pword-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("con_pword-error").innerHTML = "Passwords match.";
        return true;
    }
}

// re display back to user
function reviewInput() {
    const form = document.getElementById("signup-form");
    if (!form) return;
    const elements = form.elements;
    let formoutput = "<table class='output'><tr><th colspan='2'>Your information</th></tr>";

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (!el || !el.type || !el.name) continue;
        const datatype = el.type;
        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + el.name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;
            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + el.name + "</td>";
                    formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
                }
                break;
            case "button":
            case "submit":
            case "reset":
                break;
            default:
                formoutput += "<tr><td align='right'>" + el.name + "</td>";
                formoutput += "<td class='outputdata'>" + (el.value || "") + "</td></tr>";
        }
    }

    formoutput += "</table>";
    if (formoutput.length > 0) {
        const out = document.getElementById("showInput");
        if (out) out.innerHTML = formoutput;
    }
}

function removeReview() {
    const out = document.getElementById("showInput");
    if (out) out.innerHTML = "";
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function(){
        alertBox.style.display ="none";
    };
}

function validateEverything() {
    let validate = true;

    if(!validateFname()){
        valid = false;
    }
    if(!validatemname()){
        valid = false;
    }
    if(!validateLname()){
        valid = false;
    }
    if(!validateDob()){
        valid = false;
    }
    if(!validateSsn()){
        valid = false;
    }
    if(!validateAddress1()){
        valid = false;
    }
    if(!validateCity()){
        valid = false;
    }
    if(!validateZcode()){
        valid = false;
    }
    if(!validateEmail()){
        valid = false;
    }
    if(!validatePhonenum()){
        valid = false;
    }
    if(!validateUsername()){
        valid = false;
    }
    if(!validatePass()){
        valid = false;
    }
    if(!confirmPass()){
        valid = false;
    }
    if(valid()){
        document.getElementById("submit").disable =false;
    } else {
        showAlert();
    }
}

function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mname", cookieName:"middleInital"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"ssn", cookieName: "ssn"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"zcode", cookieName: "zcode"},
    {id:"email", cookieName: "email"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});
        

