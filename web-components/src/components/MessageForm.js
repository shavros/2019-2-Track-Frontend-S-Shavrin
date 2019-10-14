const messagesArrayKey = 'messagesArray';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
            height: 110px;
            box-sizing: border-box;
            border: 0;
            display: flex;
        }

        .my_message {
            width: auto;
            max-width: 70%;
            min-width: 20%;
            display: inline-flex;
            flex-direction: column;
            border-radius: 5px;
            margin: 10px;
            justify-content: flex-end;
            align-items: flex-end;
            align-self: flex-end;
            background-color: #f3e5f5;
            position: relative;
        }
        
        .my_message::after {
        content: '';
        border: 10px solid transparent; 
        border-bottom: 10px solid #f3e5f5; 
        border-left: 10px solid #f3e5f5;
        position: absolute;
        right: -20px;
        
        }
        
        .message-text {
            color: black;
            font-size: 16px;
            word-wrap: break-word;
            word-break: break-word;
            padding: 5px 10px;
            display: flex;
            align-self: flex-start;
            align-items: center;
        }

        .message-time {
            color: black;
            font-size: 12px;
            align-self: flex-end;
            line-height: 2.5;
            margin-right: 20px;
        }
        
        .messages {
        height: calc(100vh - 220px);
        display: flex;
        flex-direction: column;
        background-color: #F0F0F0;
        overflow-y: scroll;
        padding: 0 30px 0 30px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="messages">
            
        </div>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$messages = this.shadowRoot.querySelector('.messages');
    this.myRender();

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value === '') {
      return;
    }
    this.messageObj = {};
    this.messageObj.messageText = this.$input.value;
    this.messageObj.messageAuthor = 'Me';
    this.messageObj.sendingTime = new Date();
    this.addMessage(this.messageObj);
    this.$input.value = '';
    this.messageToLocal(this.messageObj);
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  addMessage(messageObj) {
    const divFormatMessageContainer = document.createElement('div');
    const divFormatMessageText = document.createElement('div');
    const divFormatMessageTime = document.createElement('div');

    if (messageObj.messageAuthor === 'Me') {
      divFormatMessageContainer.className = 'my_message';
    } else {
      divFormatMessageContainer.className = 'contact_message';
    }

    divFormatMessageText.className = 'message-text';
    divFormatMessageText.innerText = messageObj.messageText;
    divFormatMessageTime.className = 'message-time';
    const date = new Date(messageObj.sendingTime);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = (hours < 10) ? (`0${hours}`) : hours;
    minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
    divFormatMessageTime.innerText = `${hours}:${minutes}`;

    divFormatMessageContainer.appendChild(divFormatMessageText);
    divFormatMessageContainer.appendChild(divFormatMessageTime);
    this.$messages.appendChild(divFormatMessageContainer);
    this.$messages.scrollTop = 9999;
  }

  /* eslint class-methods-use-this:0 */
  messageToLocal(messageObj) {
    let storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (storageMessageArray === null) {
      storageMessageArray = [];
    }
    storageMessageArray.push(messageObj);
    localStorage.setItem(messagesArrayKey, JSON.stringify(storageMessageArray));
  }


  myRender() {
    const storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (storageMessageArray === null) {
      return;
    }

    for (let i = 0; i < storageMessageArray.length; i += 1) {
      this.addMessage(storageMessageArray[i]);
    }
  }
}

customElements.define('message-form', MessageForm);
