import React, { Component } from 'react';
import ExperienceItem from './ExperienceItemPreview';
import styled from 'styled-components';

class ExperiencePreview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<StyledExperiencePreview>
				<p className='title'>WORK EXPERIENCE</p>
				<span className='partial-underline'>_______________</span>
				{this.props.experience.map((experience) => (
					<ExperienceItem
						id={experience.id}
						key={experience.id}
						company={experience.company}
						role={experience.role}
						desc={experience.desc}
						start={experience.start}
						end={experience.end}
					/>
				))}
			</StyledExperiencePreview>
		);
	}
}

const StyledExperiencePreview = styled.section`
	padding: 2rem 1rem 0 2rem;

	.title {
		font-size: 1.75ch;
	}
	p {
		color: ${({ theme }) => theme.colors.mainBackground};
		letter-spacing: 0.3rem;
		font-size: 1.5ch;
	}

	.partial-underline {
		position: relative;
	}

	.partial-underline:before {
		content: '';
		display: block;
		width: 50%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.mainBackground};
		position: absolute;
		bottom: 8px;
		left: 0;
	}
`;

export default ExperiencePreview;
