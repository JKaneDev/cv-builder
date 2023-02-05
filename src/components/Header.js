import React from 'react';
import save from '../../assets/save.svg';
import autofill from '../../assets/autofill.svg';

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

	goToGithub = () => {
		window.location.href = 'https://github.com/JKaneDev/cv-builder';
	};

	render() {
		const { generatePDF } = this.props;
		return (
			<header>
				<div>
					<h1>CV Builder</h1>
					<Button img={save} text='Save' onClick={generatePDF} />
					<Button img={autofill} text='Autofill' onClick={autofill} />
				</div>
				<div>
					<h3>Source Code:</h3>
					<Button img={github} text='JKaneDev' onClick={goToGithub} />
				</div>
			</header>
		);
	}
}

export default Header;
