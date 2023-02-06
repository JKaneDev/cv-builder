import React, { Component } from 'react';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { company, role, desc, start, end } = this.props;
		return (
			<div>
				<h4>{role}</h4>
				<div>
					<p>
						{company} | {start} - {end}
					</p>
					<p>{desc}</p>
				</div>
			</div>
		);
	}
}

export default ExperienceItem;
