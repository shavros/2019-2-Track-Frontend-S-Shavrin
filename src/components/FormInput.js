import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.css';

// import { ReactComponent as AttachSvg } from '../images/forminput_buttons/attach_button.svg';
import { ReactComponent as SubmitSvg } from '../images/forminput_buttons/submit_button.svg';
import { ReactComponent as StartSvg } from '../images/forminput_buttons/audiorecordstart_button.svg';
import { ReactComponent as StopSvg } from '../images/forminput_buttons/audiorecordstop_button.svg';
import { ReactComponent as GeoSvg } from '../images/forminput_buttons/geolocation_button.svg';
import { ReactComponent as ImgSvg } from '../images/forminput_buttons/imgupload_button.svg';

export default function FormInput(props) {
	const imgInput = React.createRef();

	return (
		<div className={styles.form_input}>
			<input
				id="input"
				className={styles.input}
				type="text"
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
			<button
				type="submit"
				className={styles.submit_button}
				style={{ display: props.submitButtonDisplayStyle }}
			>
				<SubmitSvg className={styles.submit_button_img} />
			</button>
		</div>
	);
}

FormInput.propTypes = {
	submitButtonDisplayStyle: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
