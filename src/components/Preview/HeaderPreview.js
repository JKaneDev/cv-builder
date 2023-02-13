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
					<p className='firstName'>{firstName}</p>
					<p className='surname'>{surname}</p>
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
		gap: 2rem;
		font-size: 5ch;
		color: ${({ theme }) => theme.colors.mainBackground};
		letter-spacing: 0.25rem;
	}

	.firstName {
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

	@media (min-width: 768px) and (max-width: 991px) {
		p,
		div {
			font-size: 2ch;
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		p,
		div {
			font-size: 2.25ch;
		}
	}

	@media (min-width: 1200px) {
		p,
		div {
			font-size: 2.5ch;
		}
	}
`;

export default Header;
