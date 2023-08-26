const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");

userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        appendMessage("user", userMessage);
        userInput.value = "";

        // Simulate bot response (replace with API call to your backend)
        const botMessage = "Hi there! I'm a chatbot. How can I assist you?";
        setTimeout(() => {
            appendMessage("bot", botMessage);
        }, 500);
    }
});

function appendMessage(role, message) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `chat-message ${role}-message`;
    messageContainer.textContent = message;

    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
}
