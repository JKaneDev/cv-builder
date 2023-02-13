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

	@media (min-width: 768px) and (max-width: 991px) {
		p {
			font-size: 1.75ch;
			line-height: 1.1rem;
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		p {
			font-size: 1.8ch;
			line-height: 1.2rem;
		}
	}

	@media (min-width: 1200px) {
		p {
			font-size: 1.85ch;
			line-height: 1.3rem;
		}
	}
`;

export default SkillItem;
