import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormInput from './FormInput';
import MessageElement from './MessageElement';
import styles from '../styles/messageFormStyles.module.css';

const chatsArrayKey = 'chatsArray';

export default function MessageForm(props) {
	const { chatId } = useParams();

	const [submitButtonDisplayStyle, letSubmitButtonShow] = useState('none');
	const [inputValue, setInputValue] = useState('');
	const [messages, setMessages] = useState(messagesInit);

/* eslint indent:0 */
/* eslint no-tabs:0 */


	function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
		if (value !== '') {
			letSubmitButtonShow('inline-block');
		} else {
			letSubmitButtonShow('none');
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		letSubmitButtonShow('none');

		if (inputValue === '') {
			return;
		}

		const messageObj = createMessageObj(inputValue);
		setInputValue('');
		addMessage(messageObj);
		messageToLocal(messageObj);
	}

  function messagesInit() {
    const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey));
    const chatObj = storageChatArray[chatId];
    const messagesInitArray = [];

    for (let i = 0; i < chatObj.messages.length; i += 1) {
      messagesInitArray.push(chatObj.messages[i]);
    }

    return messagesInitArray;
  }

	function createMessageObj(messageContent, contentType = 'text') {
		const messageObj = {
			contentType,
			messageContent,
			messageAuthor: 'Me',
			messageTime: new Date(),
		};
		return messageObj;
	}

	function buildMessage(messageObj, key) {
		let position = 'right_messages';
		if (messageObj.messageAuthor !== 'Me') {
			position = 'left_messages';
		}

		const indicator = 1;

		const messageTime = new Date(messageObj.messageTime).toTimeString().slice(0, 5);

		const resultMessage = (
			<MessageElement
				key={key}
				indicator={indicator}
				contentType={messageObj.contentType}
				messageContent={messageObj.messageContent}
				messageTime={messageTime}
				position={position}
			/>
		);

		return resultMessage;
	}

	function messagesReact() {
		const messagesR = [];
		for (let i = 0; i < messages.length; i += 1) {
			messagesR.push(buildMessage(messages[i], i));
		}

		return messagesR;
	}

	function addMessage(messageObj) {
		setMessages(messages.concat(messageObj));
	}

	function messageToLocal(messageObj) {
		const storageChatArray = JSON.parse(localStorage.getItem(chatsArrayKey));
		if (storageChatArray[chatId].messages.length === 0) {
			storageChatArray[chatId].messages = [];
		}
		storageChatArray[chatId].messages.push(messageObj);
		localStorage.setItem(chatsArrayKey, JSON.stringify(storageChatArray));
	}

	return (
		<div className={styles.message_form}>
			<form className={styles.form_chat} onSubmit={handleSubmit}>
				<div
					className={styles.chat_container}
				>
          {messagesReact()}
				</div>
				<FormInput
					placeholder="Сообщение"
					value={inputValue}
					onChange={handleChange}
					submitButtonDisplayStyle={submitButtonDisplayStyle}
				/>
			</form>
		</div>
	);
}
