import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import RandomNumber from './components/RandomNumber';

class App extends React.Component {
	constructor(props) {
		super(props);

		console.log('constructor');

		this.state = {
			value: Math.round(Math.random() * 100)
		};

		this.updateValue = this.updateValue.bind(this);
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
		//  setTimeout, setInterval 및 AJAX 처리 등을 넣는다.
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
		return true;

		//  prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다. 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
	}

	componentWillUpdate() {
		console.log('componentWillUpdate');
		// 컴포넌트가 업데이트 되기 전에 실행된다. 이 메소드 안에서는 this.setState() 를 사용하지 마라. 무한루프에 빠져든다.
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
		// 컴포넌트가 리렌더링을 마친 후 실행됩니다.
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		// 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.
	}

	updateValue(randomValue) {
		this.setState({
			value: randomValue
		})
	}

	render() {
		console.log('render');
		return(
			<div>
				<Header title={ this.props.headerTitle } />
				<Content title={ this.props.contentTitle }
				         body={ this.props.contentBody } />
				<RandomNumber number={this.state.value}
				              onUpdate={this.updateValue} />
			</div>
		);
	}
}

App.defaultProps = {
	headerTitle: 'Default header',
	contentTitle: 'Default contentTitle',
	contentBody: 'Default contentBody'
};

export default App;