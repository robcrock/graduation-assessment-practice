/** @format */
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.getElementById('desc');
  textArea.addEventListener('input', handleInput);

  function getMessages() {
    fetch('/messages/getMessages')
      .then((res) => res.json())
      .then((data) => {
        console.log('data from getMessages', data);
        for (let i = 0; i < data.messages.length; i++) {
          const message = document.createElement('li');
          message.setAttribute('id', data.messages[i]._id);
          message.innerHTML = data.messages[i].message;
          const messageList = document.getElementById('message-list');
          messageList.appendChild(message);
        }
      });
  }

  getMessages();

  function handleInput(e) {
    // console.log('e', e);
    let string = '';
    string += e.target.value;
    console.log('string', string);
    return string;
  }

  function postMessage(input) {
    const message = document.getElementById('desc').value;
    const password = document.getElementById('pass').value;

    fetch('/messages/postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function deleteMessage() {}
  const saveButton = document.getElementById('save');

  saveButton.addEventListener('click', postMessage);
});
