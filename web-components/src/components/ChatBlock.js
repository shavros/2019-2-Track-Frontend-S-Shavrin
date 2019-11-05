const messagesArrayKey = 'messagesArray';

const template = document.createElement('template');
template.innerHTML = `
  <style>
  .chat_logo {
  width: 145px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  .chat_info {
  box-sizing: border-box;
  height: 100%;
  width: calc(100% - 145px);
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  }
  
  .text_info {
  width: calc(100% - 125px)
  }
  
  .dialog_name {
  font-size: 30px;
  margin-bottom: 25px;
  }
  
  .last_message {
  font-size: 20px;
  }
  
  .other_info {
    width: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .last_time {
  font-size: 20px;
  margin-bottom: 15px;
  }
  
  .message_status {
    width: 40px;
  }
</style>
  <div class="chat_logo">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 55 55" style="enable-background:new 0 0 55 55;" xml:space="preserve" width="110px" height="110px">
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
  <div class="chat_info">
    <div class="text_info">
        <div class="dialog_name">Дженнифер Эшли</div>
        <div class="last_message">Ты куда пропал?</div>
</div>
    <div class="other_info">
        <div class="last_time">15:52</div>
        <div class="message_status">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 511.999 511.999" width="40px" height="25px" fill="#8e24aa" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
\t<g>
\t\t<path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
\t\t\tc-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
\t\t\tC513.921,95.666,513.921,83.198,506.231,75.508z"/>
\t</g>
</g>
</svg>
</div>
</div>
</div>
`;

class ChatBlock extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.getInfo();
  }

  getInfo() {
    const storageMessageArray = JSON.parse(localStorage.getItem(messagesArrayKey));
    this.shadowRoot.querySelector('.last_message').innerText = storageMessageArray[storageMessageArray.length - 1].messageText;
    this.shadowRoot.querySelector('.last_time').innerText = storageMessageArray[storageMessageArray.length - 1].sendingTime;
  }
}

customElements.define('chat-block', ChatBlock);
