const currentUser = { id: 1, name: '你', picture: 'https://via.placeholder.com/40' };
let chatHistory = [];

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const message = {
            sender: currentUser,
            text: messageText,
            timestamp: new Date()
        };
        chatHistory.push(message);
        messageInput.value = '';
        updateChatHistory();
    }
}

function updateChatHistory() {
    const chatHistoryDiv = document.getElementById('chatHistory');
    chatHistoryDiv.innerHTML = '';
    chatHistory.forEach(message => {
        const div = document.createElement('div');
        div.classList.add('message');
        if (message.sender.id === currentUser.id) {
            div.classList.add('sent');
        }
        div.innerText = `${message.sender.name}: ${message.text}`;
        chatHistoryDiv.appendChild(div);
    });
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
}

// 初始化加载
updateChatHistory();