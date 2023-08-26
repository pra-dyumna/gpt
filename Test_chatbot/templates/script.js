const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        return;
    }

    appendMessage("user", userMessage);
    userInput.value = "";

    // Simulate bot response (replace with API call to your backend)
    const botMessage = "Hi there! I'm a chatbot. How can I assist you?";
    setTimeout(() => {
        appendMessage("bot", botMessage);
    }, 500);
}

function appendMessage(role, message) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `chat-message ${role}-message`;
    messageContainer.textContent = message;

    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
}
