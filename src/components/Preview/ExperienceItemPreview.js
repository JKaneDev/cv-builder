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
					<p id='desc'>{desc}</p>
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

	#desc {
		letter-spacing: 0.05rem;
		text-align: left;
		font-size: 1.25ch;
		line-height: 1rem;
	}

	@media (min-width: 768px) and (max-width: 991px) {
		#desc {
			font-size: 1.5ch;
			line-height: 1.25rem;
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		div:nth-of-type(1) {
			display: flex;
			flex-direction: column;
			gap: 0rem;
		}
		#desc {
			font-size: 1.6ch;
			line-height: 1.25rem;
		}
	}

	@media (min-width: 1200px) {
		div:nth-of-type(1) {
			display: flex;
			flex-direction: column;
			gap: 0rem;
		}
		#desc {
			font-size: 1.6ch;
			line-height: 1.25rem;
		}
	}
`;

export default ExperienceItem;
