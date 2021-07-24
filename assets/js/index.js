/** @format */

/** @format */
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.getElementById('desc');
  textArea.addEventListener('input', handleInput);
  const messageArr = [];

  function getMessages() {
    fetch('/messages/getMessages')
      .then((res) => res.json())
      .then((data) => {
        console.log('data from getMessages', data);
        messageArr.push(data);

        showMessages(data);

        // for (let i = 0; i < data.messages.length; i++) {
        //   const message = document.createElement('li');
        //   const deleteButton = document.createElement('button');
        //   deleteButton.innerHTML = 'Delete';
        //   message.setAttribute('id', data.messages[i]._id);
        //   message.innerHTML = data.messages[i].message;
        //   message.appendChild(deleteButton);
        //   const messageList = document.getElementById('message-list');
        //   messageList.appendChild(message);
        //   deleteButton.addEventListener('click', deleteMessage);
        // }
      });
  }

  function showMessages(msg) {
    console.log('msg', msg);
    for (let i = 0; i < msg.messages.length; i++) {
      const message = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      message.setAttribute('id', msg.messages[i]._id);
      message.innerHTML = msg.messages[i].message;
      message.appendChild(deleteButton);
      const messageList = document.getElementById('message-list');
      messageList.appendChild(message);
      deleteButton.addEventListener('click', deleteMessage);
    }
  }

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
        data.messages = [data.messages];
        console.log('data in post message', data);
        showMessages(data);
      })
      // .then(() => setCookie(password))
      .catch((err) => console.log(err));
  }

  function deleteMessage(e) {
    console.log('e', e.target.parentNode.id);
    const deleteId = e.target.parentNode.id;
    fetch('/messages/deleteMessage', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: deleteId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data in delete', data.deleted._id);
        const deletedId = data.deleted._id;
        const deletedNode = document.getElementById(`${deletedId}`);
        const list = document.getElementById('message-list');
        list.removeChild(deletedNode);
      });
  }

  // function setCookie(pass) {
  //   fetch('/auth/setCookie', {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ password: pass }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log('cookie', data));
  // }

  const saveButton = document.getElementById('save');

  saveButton.addEventListener('click', postMessage);

  getMessages();
});
