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
        
        .back_button {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .contact_info {
            height: 100%;
            display: flex;
        }

        .contact_logo {
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: 35px;
        }

        .contact_info_more {
            height: 100%;
            padding-top: 25px;
            padding-bottom: 25px;
        }

        .contact_name {
            line-height: 35px;
            font-size: 35px;
            color: white;
            margin-top: 0;
            margin-bottom: 10px;
        }

        .contact_status {
            margin: 0;
            font-size: 15px;
            color: #d1a7dd;
        }

        .search_button {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .settings_button {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .dialog_header {
            height: 110px;
            width: 100%;
            background-color: #8e24aa;
            display: flex;
            justify-content: space-between;
            padding-left: 30px;
            padding-right: 30px;
            box-sizing: border-box;
}
    </style>
    <div class="dialog_header">
      <div class="back_button">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="60px" height="60px"  viewBox="0 0 400.004 400.004" fill="white"
             xml:space="preserve">
<g>
\t<path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
\t\tc-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
\t\tc6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
\t\tC400.004,190.438,392.251,182.686,382.688,182.686z"/>
</g>
</svg>
      </div>
      <div class="contact_info">
        <div class="contact_logo">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 55 55" width="80px" height="80px" fill="white" xml:space="preserve">
<path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
\tc0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
\tc0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
\tc0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
\tc0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
\tc0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
\tc0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
\tc0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
\tc0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
\tl-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
\tc0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
\tc0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
\tc0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
\ts-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
\tc0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
\tc-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"/>

</svg>
        </div>
        <div class="contact_info_more">
          <h1 class="contact_name">Дженнифер</h1>
          <p class="contact_status">была 2 часа назад</p>
        </div>
      </div>
      <div class="search_button">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 56.966 56.966" width="40px" height="40px" fill="white" xml:space="preserve">
<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
\ts10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
\tc0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
\ts-17-7.626-17-17S14.61,6,23.984,6z"/>
</svg>
      </div>
      <div class="settings_button">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 60 60" fill="white" height="40px" xml:space="preserve">
<g>
\t<path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
  <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
  <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
</g>
      </svg>
      </div>
    </div>
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
