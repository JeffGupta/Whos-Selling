$(document).ready(function()
{
	// Initialize Firebase
	"use strict";
	var config = {
		apiKey: "AIzaSyCowZvhT-bUUoBd0xZv1OTW9Q1tNxZxRGk",
		authDomain: "whos-selling.firebaseapp.com",
		databaseURL: "https://whos-selling.firebaseio.com",
		storageBucket: "",
		messagingSenderId: "512922207100"
	};
	firebase.initializeApp(config);
	
	/*
	 * Components
	 */


	class LikeButton extends React.Component {
		constructor() {
			super();
			this.state = { liked: false };
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			this.setState({liked: !this.state.liked});
		}

		render() {
			const text = this.state.liked ? 'liked' : 'haven\'t liked';
			return (
				<div>
					hjw
				</div>
			);
		}
	}

	ReactDOM.render(<LikeButton />, document.getElementById('preview'));

});