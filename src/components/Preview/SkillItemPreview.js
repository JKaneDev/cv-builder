import React, { Component } from 'react';
import styled from 'styled-components';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { skill } = this.props;
		return (
			<StyledItemPreview>
				<p>&bull; {skill}</p>
			</StyledItemPreview>
		);
	}
}

const StyledItemPreview = styled.li`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.25ch;
	letter-spacing: 0.05rem;
	margin-top: 0.5rem;
	color: #808080;
	line-height: 1rem;
`;

export default SkillItem;
