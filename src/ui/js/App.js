import React, {Component} from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "Yaswanth"
		}
	}

	componentDidMount() {
		fetch('/api/username')
		.then(res => res.json())
		.then((data) => {
			this.setState({
				username: data.username
			});
		});
	}

	render() {
		return (
				<div>
					Hey this is {this.state.username}!!
				</div>
			);
	}
}