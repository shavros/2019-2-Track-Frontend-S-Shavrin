const template = document.createElement('template');
template.innerHTML = `
  <style>
    list-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 110px;
        width: 100%;
        background-color: #8e24aa;
    }
    
    .new_message_button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        background-color: #ffd54f;
        width: 110px;
        height: 110px;
        border-radius: 55px;
        right: 50px;
        bottom: 50px; 
    }
    
    .chats_container {
        height: calc(100vh - 110px);
        overflow-y: scroll;
    }
    
    chat-block {
        width: 100%;
        height: 145px;
        display: flex;
    }
</style>
  <list-header></list-header>
  <div class="chats_container">
    <chat-block></chat-block>
</div>
  <div class="new_message_button">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t width="50px" height="50px" fill="#7c6622" viewBox="0 0 528.899 528.899"
\t xml:space="preserve">
<g>
\t<path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
\t\tc-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
\t\tC532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
\t\tL27.473,390.597L0.3,512.69z"/>
</g>
</svg>
</div>
`;

class ListOfChats extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$chat = this.shadowRoot.querySelector('chat-block');

    this.$chat.addEventListener('click', this.onChatClick.bind(this));
  }

  onChatClick() {
    document.querySelector('message-form').classList.remove('unwatch');
    document.querySelector('list-of-chats').classList.add('unwatch');
  }
}

customElements.define('list-of-chats', ListOfChats);
