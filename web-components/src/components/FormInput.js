const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 95px);
            display: flex;
            align-items: center;
            font-size: 25px;
            height: 100%;
            padding-left: 35px;
            padding-right: 35px;
            color: black;
            box-sizing: border-box;
        }
        input::-webkit-input-placeholder,
         input::-moz-placeholder{
        color: #9e9e9e;
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        
        .attach_button {
        width: 95px;
        height: 100%;
        }
    </style>
    <input type="text">
    <div class="attach_button"><i class="fas fa-paperclip"></i></div>
`;

class FormInput extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        return this.$input.value;
    }
}

customElements.define('form-input', FormInput);
