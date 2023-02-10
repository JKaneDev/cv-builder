import React, { Component } from 'react';
import styled from 'styled-components';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { company, role, desc, start, end } = this.props;
		return (
			<StyledExperiencePreview>
				<div>
					<p className='title'>{role}</p>
					<p className='dates'>
						{company} | {start} - {end}
					</p>
				</div>
				<div>
					<p className='desc'>{desc}</p>
				</div>
			</StyledExperiencePreview>
		);
	}
}

const StyledExperiencePreview = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	div:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	div:nth-of-type(2) {
		padding-bottom: 1rem;
	}

	.title {
		font-size: 1.5ch;
		font-weight: bold;
		letter-spacing: 0.15rem;
	}

	.dates {
		margin-bottom: 0.25rem;
		letter-spacing: 0.15rem;
	}

	.desc {
		letter-spacing: 0.05rem;
		text-align: left;
		font-size: 1.25ch;
		line-height: 1rem;
	}
`;

export default ExperienceItem;
