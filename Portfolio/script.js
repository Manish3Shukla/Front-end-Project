document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded!");

    document.querySelector("#contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message Sent Successfully!");
    });
});
