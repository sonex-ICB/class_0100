function generatepassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789!@#$%^&*";
    let password = "",

    for(let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    return password;
}

// Test it
console.log("Random Password: " + generatepassword(6));
console.log("Random Password: " + generatepassword(15));