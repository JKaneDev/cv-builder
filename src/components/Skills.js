import react, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skills,
		};
	}

	skillItems = this.state.skills.map((skill) => (
		<SkillItem
			id={skill.id}
			onSkillChange={this.handleSkillsChange}
			onSkillDelete={this.handleSkillsDelete}
		/>
	));

	render() {
		const { handleSkillsAdd } = this.props;

		return (
			<section>
				<div>
					<img src='' alt='skills-img' id='skills-img'></img>
					<h2>Skills & Technologies</h2>
				</div>
				<div>{this.skillItems}</div>
				<Button text='&plus; New' onClick={handleSkillsAdd} />
			</section>
		);
	}
}
