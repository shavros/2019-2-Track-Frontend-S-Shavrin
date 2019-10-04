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
            color: #1f1d1f;
            background-color: #f3e5f5;
            padding: 30px;
            max-width: 70%;
            display: inline-block;
            word-wrap: break-word;
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
            <div class="my_message"></div>
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
        this.$message = this._shadowRoot.querySelector('.my_message');
        this.$messages = this._shadowRoot.querySelector('.messages');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        //

        this.$message.innerText = this.$input.value;
        this.$messages.innerHTML = this.$message;

    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
