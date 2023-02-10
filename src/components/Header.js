import React, { Component } from 'react';
import Button from './UIElements/Button';
import save from '../assets/save.svg';
import autofill from '../assets/autofill.svg';
import { FaGithub } from 'react-icons/fa';
import styled, { css, ThemeContext } from 'styled-components';
import Theme from '../styles/Theme';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
			education: this.props.education,
			workExperience: this.props.workExperience,
			skills: this.props.skills,
		};
	}

	render() {
		const { onSave, onAutofill } = this.props;
		return (
			<StyledHeader>
				<div>
					<p>CV Builder</p>
				</div>
				<div>
					<Button img={save} text='Save' onClick={onSave} />
					<Button img={autofill} text='Autofill' onClick={onAutofill} />
				</div>
			</StyledHeader>
		);
	}
}

const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.subBackground};
	padding: 2rem;
	border-radius: 12px;
	display: flex;
	gap: 3rem;

	div:nth-of-type(1) {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	div p {
		letter-spacing: 0.3rem;
		font-size: 2.5ch;
	}

	div:nth-of-type(2) {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	div:nth-of-type(2) > * {
		border-radius: 8px;
		font-size: 1.25ch;
		letter-spacing: 0.1rem;
		transition: 0.15s all ease-in-out;
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		align-items: center;
		padding: 0.5rem 1rem;
	}

	div:nth-of-type(2) img {
		filter: ${({ theme }) => theme.filters.hoverFilter};
		transition: all 0.1s ease-in-out;
	}

	div:nth-of-type(2) > *:hover {
		transform: translateY(-2.5%);
		color: ${({ theme }) => theme.colors.elemBorderColor};
	}

	div:nth-of-type(2) > *:hover img {
		filter: ${({ theme }) => theme.filters.hoverFilterAlt};
	}
`;

export default Header;
