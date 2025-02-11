function validateEmail(email) {
    let response = email.includes('@') && email.includes('.');
    console.log(response);
}

function greet() {
    alert("Hello from JavaScript");
}

console.log("Hello from JavaScript.");