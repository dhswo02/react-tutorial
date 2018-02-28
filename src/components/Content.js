import React from 'react';

class Content extends React.Component {
	render() {
		let pStyle = {
			color: 'aqua',
			backgroundColor: 'black'
		};

		return (
			<div>
				<h2>{this.props.title}</h2>
				<p style={pStyle}>{this.props.body}</p>
			</div>
		);
	}
}

Content.propType = {
	contentTitle: React.PropTypes.string.isRequired,
	contentBody: React.PropTypes.string.isRequired
}

// .isRequired 를 추가하여 필수 props 로 설정

export default Content;