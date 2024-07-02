const password = "friend123"; // Set the password for your friend
const chatHistoryElement = document.getElementById("chat-history");

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === password) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("chat-section").style.display = "block";
        loadChatHistory();
    } else {
        alert("Incorrect password!");
    }
}

function sendMessage() {
    const message = document.getElementById("message").value;
    if (message.trim() === "") return;

    const chatHistory = getChatHistory();
    const newMessage = { text: message, time: new Date().toLocaleString() };

    chatHistory.push(newMessage);
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));

    appendMessage(newMessage);
    document.getElementById("message").value = "";
}

function getChatHistory() {
    const chatHistory = localStorage.getItem("chatHistory");
    return chatHistory ? JSON.parse(chatHistory) : [];
}

function loadChatHistory() {
    const chatHistory = getChatHistory();
    chatHistory.forEach(appendMessage);
}

function appendMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${message.time}: ${message.text}`;
    chatHistoryElement.appendChild(messageElement);
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
}
