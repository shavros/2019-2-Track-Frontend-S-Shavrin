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
        display: flex;
        justify-content: center;
        align-items: center;
        }
    </style>
    <input type="text">
    <div class="attach_button">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="80px" height="90px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><g><g>
\t<g id="attachment">
\t\t<path d="M140.25,395.25C63.75,395.25,0,331.5,0,255s63.75-140.25,140.25-140.25H408c56.1,0,102,45.9,102,102    c0,56.1-45.9,102-102,102H191.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75H382.5v38.25H191.25    c-15.3,0-25.5,10.2-25.5,25.5s10.2,25.5,25.5,25.5H408c35.7,0,63.75-28.05,63.75-63.75S443.7,153,408,153H140.25    c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102H382.5v38.25H140.25z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#9F9F9F"/>
\t</g>
</g></g> </svg>
</div>
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
