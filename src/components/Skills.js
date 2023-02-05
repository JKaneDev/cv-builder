import react, { Component } from 'react';

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
			onSkillChange={this.props.onSkillsChange}
			onSkillDelete={this.props.onSkillDelete}
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

export default Skills;
