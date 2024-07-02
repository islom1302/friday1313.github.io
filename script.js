document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let telegramUsername = document.getElementById("telegramUsername").value;
    let comments = document.getElementById("comments").value;

    // Validate form data
    if (!firstName || !lastName || !age || !gender || !telegramUsername) {
        alert("Please fill out all required fields.");
        return;
    }

    // Display confirmation message
    let userInfo = `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Telegram Username:</strong> @${telegramUsername}</p>
    `;
    document.getElementById("userInfo").innerHTML = userInfo;

    let userComments = comments ? `<p><strong>Comments:</strong> ${comments}</p>` : "<p>No comments provided.</p>";
    document.getElementById("userComments").innerHTML = userComments;

    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("userForm").style.display = "none";
});
