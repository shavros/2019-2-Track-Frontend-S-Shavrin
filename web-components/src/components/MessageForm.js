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
            border: 1px solid #AAA;
            border-radius: 5px;
            margin: 10px;
            justify-content: flex-end;
            align-items: flex-end;
            align-self: flex-end;
            background-color: #8E24AA55;
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
        }
        
        .messages {
        height: calc(100vh - 220px);
        background-color: #a9a9a9;
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
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$messages = this._shadowRoot.querySelector('.messages');
        this.my_render();

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        if(this.$input.value === '') {
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

    _onKeyPress (event) {
        if (event.keyCode === 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }

    addMessage(messageObj) {
      let divFormatMessageContainer = document.createElement('div');
      let divFormatMessageText = document.createElement('div');
      let divFormatMessageTime = document.createElement('div');

      if (messageObj.messageAuthor === 'Me') {
        divFormatMessageContainer.className = 'my_message';
      }
      else {
        divFormatMessageContainer.className = 'contact_message';
      }

      divFormatMessageText.className = 'message-text';
      divFormatMessageText.innerText = messageObj.messageText;
      divFormatMessageTime.className = 'message-time';
      let date = new Date(messageObj.sendingTime);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      hours = (hours < 10) ? ('0' + hours) : hours;
      minutes = (minutes < 10) ? ('0' + minutes) : minutes;
      divFormatMessageTime.innerText = hours + ':' + minutes;

      divFormatMessageContainer.appendChild(divFormatMessageText);
      divFormatMessageContainer.appendChild(divFormatMessageTime);
      this.$messages.appendChild(divFormatMessageContainer);
      this.$messages.scrollTop = 9999;
    }

  messageToLocal(messageObj) {
    let storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (storageMessageArray === null) {
      storageMessageArray = [];
    }
    storageMessageArray.push(messageObj);
    localStorage.setItem(messagesArrayKey, JSON.stringify(storageMessageArray));
  }


  my_render() {
    let storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    if (storageMessageArray === null) {
      return;
    }

    for (let i = 0; i < storageMessageArray.length; i += 1) {
      this.addMessage(storageMessageArray[i]);
    }
    }
}

customElements.define('message-form', MessageForm);
