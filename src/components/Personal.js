import React, { Component } from 'react';
import Input from './UIElements/InputField';
import styled from 'styled-components';
import TextArea from './UIElements/TextArea';

class Personal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
		};
	}

	render() {
		const { onPersonalChange, personal } = this.props;
		return (
			<StyledPersonal>
				<p>Personal Information</p>
				<div>
					<Input
						type='text'
						value={personal.firstName}
						placeholder='E.g. Joe'
						onChange={(event) => onPersonalChange('firstName', event)}
					/>
					<Input
						type='text'
						value={personal.surname}
						placeholder='E.g. Doeman'
						onChange={(event) => onPersonalChange('surname', event)}
					/>
				</div>
				<Input
					type='text'
					value={personal.address}
					placeholder='E.g. Texas, United States'
					onChange={(event) => onPersonalChange('address', event)}
				/>
				<Input
					type='text'
					value={personal.website}
					placeholder='E.g. https://mypersonalwebsite.com'
					onChange={(event) => onPersonalChange('website', event)}
				/>
				<div>
					<Input
						type='text'
						value={personal.email}
						placeholder='E.g. address@email.com'
						onChange={(event) => onPersonalChange('email', event)}
					/>
					<Input
						type='number'
						value={personal.number}
						placeholder='E.g. 555-555-5555'
						onChange={(event) => onPersonalChange('number', event)}
					/>
				</div>
				<TextArea
					type='text'
					value={personal.bio}
					placeholder='Provide some information about yourself, your personality traits, qualities, hobbies etc.'
					onChange={(event) => onPersonalChange('bio', event)}
				/>
			</StyledPersonal>
		);
	}
}

const StyledPersonal = styled.div`
	background-color: ${({ theme }) => theme.colors.subBackground};
	padding: 2rem;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div:nth-of-type(1),
	div:nth-of-type(2) {
		display: flex;
		gap: 2rem;
	}

	div:nth-of-type(1) > *,
	div:nth-of-type(2) > * {
		width: 50%;
	}

	p {
		font-size: 3ch;
		letter-spacing: 0.3rem;
		font-weight: bold;
		padding-bottom: 1rem;
	}

	input {
		background-color: ${({ theme }) => theme.colors.inputFields};
		color: ${({ theme }) => theme.colors.fontColor};
		height: 4ch;
		padding: 0.35rem 1rem;
		border-radius: 8px;
		letter-spacing: 0.1rem;
	}

	input:hover,
	textarea:hover {
		background-color: #2d2d2d;
	}

	textarea {
		background-color: ${({ theme }) => theme.colors.inputFields};
		color: ${({ theme }) => theme.colors.fontColor};
		height: 6rem;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		letter-spacing: 0.1rem;
	}

	input::placeholder,
	textarea::placeholder {
		color: #111;
	}
`;

export default Personal;
