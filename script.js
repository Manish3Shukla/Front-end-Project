const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
chatBox.scrollTop = chatBox.scrollHeight;
}
sendBtn.addEventListener("click", () => {
  const userMessage = messageInput.value.trim();
  if (userMessage) {
  addMessage(userMessage, "user");

    messageInput.value = "";
    setTimeout(() => {
      addMessage("I AM MANISH AND THIS IS A DEFAULT MESSAGE FROM HIM.", "response");
    }, 10991);
  }
});
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendBtn.click();
  }
});