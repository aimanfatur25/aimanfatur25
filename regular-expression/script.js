let regexInputSat = document.querySelector("#regexInputSat");
let validationTextsat = document.querySelector("#validation-text-sat");

const REGULAR_EXPRESSION_1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

regexInputSat.addEventListener("input", function() {
    validationTextsat.textContent = REGULAR_EXPRESSION_1.test(regexInputSat.value) 
    ? "Valid" : "Invalid, format email.";
});

// regex 2
let regexInputSat2 = document.querySelector("#regexInputSat2");
let validationTextSat2 = document.querySelector("#validation-text-Sat2");

const REGULAR_EXPRESSION_2 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

regexInputSat2.addEventListener("input", function() {
    validationTextSat2.textContent = REGULAR_EXPRESSION_2.test(regexInputSat2.value) 
    ? "Valid" : "Invalid, wrong date format";
});

// regex 3
let regexInputSat3 = document.querySelector("#regexInputSat3");
let validationTextSat3 = document.querySelector("#validation-text-Sat3");

const REGULAR_EXPRESSION_3 = /^(?:\+?62|0)(?:\d{9,15})$/;

regexInputSat3.addEventListener("input", function() {
    validationTextSat3.textContent = REGULAR_EXPRESSION_3.test(regexInputSat3.value) 
    ? "Valid" : "Invalid, minimum 9 characters and maximum 15 characters allowed with only numbers.";
});

// regex 4
let regexInputSat4 = document.querySelector("#regexInputSat4");
let validationTextSat4 = document.querySelector("#validation-text-Sat4");

const REGULAR_EXPRESSION_4 = /^[A-Z]+$/;

regexInputSat4.addEventListener("input", function() {
    validationTextSat4.textContent = REGULAR_EXPRESSION_4.test(regexInputSat4.value) 
    ? "Valid" : "Invalid character required uppercase.";
});

// regex 5
let regexInputSat5 = document.querySelector("#regexInputSat5");
let validationTextSat5 = document.querySelector("#validation-text-Sat5");

const REGULAR_EXPRESSION_5 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6}$/;

regexInputSat5.addEventListener("input", function() {
    validationTextSat5.textContent = REGULAR_EXPRESSION_5.test(regexInputSat5.value) 
    ? "Valid" : "Invalid, The verification code consists of 6 characters, and it must have at least one digit, one lowercase letter, and one uppercase letter.";
});

///^[^\d]{10,}$/
//minimum 10 characters required

//^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
//Invalid, minimum 8 characters required with at least one uppercase, one lowercase, and one digit//