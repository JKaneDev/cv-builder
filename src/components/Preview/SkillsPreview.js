import React, { Component } from 'react';
import SkillItem from './SkillItemPreview';
import styled from 'styled-components';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<StyledSkillsPreview>
				<p className='sectionHeader'>SKILLS</p>
				<div>
					{this.props.skills.map((skill) => (
						<SkillItem id={skill.id} skill={skill.skill} key={skill.id} />
					))}
				</div>
			</StyledSkillsPreview>
		);
	}
}

const StyledSkillsPreview = styled.aside`
	background-color: #111;
	padding: 2rem 0.5rem 1rem 1.5rem;
	display: flex;
	flex-direction: column;

	.sectionHeader {
		letter-spacing: 0.1rem;
		font-size: 1.6ch;
		margin-bottom: 0.5rem;
	}
`;

export default Skills;
