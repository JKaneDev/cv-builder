import React, { Component } from 'react';
import Button from './UIElements/Button';
import save from '../assets/save.svg';
import autofill from '../assets/autofill.svg';
import { FaGithub } from 'react-icons/fa';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
			education: this.props.education,
			workExperience: this.props.workExperience,
			skills: this.props.skills,
		};
	}

	render() {
		const { onSave, onAutofill } = this.props;
		return (
			<header>
				<div>
					<h1>CV Builder</h1>
					<Button img={save} text='Save' onClick={onSave} />
					<Button img={autofill} text='Autofill' onClick={onAutofill} />
				</div>
				<div>
					<h3>Source Code:</h3>
					<a href='https://github.com/JKaneDev/cv-builder' target='_blank'>
						<FaGithub style={{ color: 'black', height: 32, width: 32 }} />
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
