import React, { Component } from 'react';
import styled from 'styled-components';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bio: this.props.bio,
		};
	}

	render() {
		return (
			<StyledProfilePreview>
				<p>PROFILE</p>
				<span className='partial-underline'>_______________</span>
				<p>{this.state.bio}</p>
			</StyledProfilePreview>
		);
	}
}

const StyledProfilePreview = styled.section`
	padding: 2rem 0 0 1.25rem;

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

export default Profile;
