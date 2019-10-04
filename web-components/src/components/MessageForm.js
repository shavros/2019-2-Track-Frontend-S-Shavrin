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

        .result {
            color: red;
        }
        
        .messages {
        height: calc(100vh - 220px);
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="messages">
            <div class="result"></div>
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
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        this.$message.innerText = this.$input.value;
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
