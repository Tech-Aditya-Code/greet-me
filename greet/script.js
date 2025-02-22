function greetme() {
    let username = document.getElementById('greet').value;
    // username empty return false
    if (username == "") {
        alert('name cannot be empty!');
        return false
    } 
    // username length less than 3 return false
    else if (username.length < 3) {
        alert('name must contain atleast 3 characters!');
        return false
    }
    // numbers not allowed
    else if (Number(username)) {
        alert('numbers not allowed!');
        return false
    }
    else { 
        alert('Hello'+' '+ username);
        return true
    }
}

// clears the input field
function clr() {
    document.getElementById('greet').value = "";
}