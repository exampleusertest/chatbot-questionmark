const chatWindow = document.getElementById('chat-window');

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput) return;

  // Display user's message
  displayMessage('User', userInput);
  document.getElementById('user-input').value = '';

  try {
    // Send message to backend API
    const response = await fetch('https://your-backend-url/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();

    // Display chatbot's response
    displayMessage('Bot', data.response);
  } catch (error) {
    displayMessage('Bot', 'There was an error processing your request.');
  }
}

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
