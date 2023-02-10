import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { firstName, surname, role } = this.props;
		return (
			<StyledHeader>
				<div className='name'>
					<p>{firstName}</p>
					<p>{surname}</p>
				</div>
				<div className='role'>{role}</div>
			</StyledHeader>
		);
	}
}

const StyledHeader = styled.div`
	display: grid;
	grid-template-rows: 1fr 30px;
	height: 100%;

	.name {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		font-size: 5ch;
		color: ${({ theme }) => theme.colors.mainBackground};
	}

	.name nth-child(1) {
		font-weight: bolder;
	}

	.name nth-child(2) {
		font-weight: bold;
	}

	div:nth-of-type(2) {
		height: 30px;
		background-color: lightgrey;
		border-top: 0.5px solid grey;
		border-bottom: 0.5px solid grey;
		grid-row: 2 / -1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #111;
		letter-spacing: 0.3rem;
		font-size: 1.5ch;
	}
`;

export default Header;
