const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
    let isValid = true;

    [nameInput, emailInput, messageInput].forEach(input => {
        if (!input.value.trim()) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    });

    if (!isValid) {
        e.preventDefault(); 
        alert("Please fill in all fields.");
    }
});

<p>&copy; <span id="year"></span> CookingwithDr. All rights reserved.</p>
