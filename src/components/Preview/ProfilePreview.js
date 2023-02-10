import React, { Component } from 'react';
import styled from 'styled-components';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { bio } = this.props;
		return (
			<StyledProfilePreview>
				<p className='title'>PROFILE</p>
				<span className='partial-underline'>_______________</span>
				<p>{bio}</p>
			</StyledProfilePreview>
		);
	}
}

const StyledProfilePreview = styled.section`
	padding: 2rem 1rem 0 2rem;

	.title {
		font-size: 1.75ch;
	}

	p {
		color: ${({ theme }) => theme.colors.mainBackground};
		letter-spacing: 0.3rem;
		font-size: 1.25ch;
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

	p:nth-of-type(2) {
		letter-spacing: 0.05rem;
		text-align: left;
		line-height: 1rem;
		margin-top: 0.5rem;
	}
`;

export default Profile;
