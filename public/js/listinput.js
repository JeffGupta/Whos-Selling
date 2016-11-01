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
	
	var ListForm = React.createClass({
	  
	  //create reusable UI with type validation
	  propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired,
	  },
	  
	  //whenever user inputs into fields, the react elements will reflect the input given
	  onItemNameChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {itemname: e.target.value}));
	  },
	  
	  onConditionChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {condition: e.target.value}));
	  },
	  
	  onDescriptionChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
	  },
	  
	  //prevent default onsubmit to prevent refreshing page. We implement our own submit process
	  onSubmit: function(e) {
		e.preventDefault();
		this.props.onSubmit();
	  },

	  render: function() {
		return (
		    React.createElement('form', {onSubmit: this.onSubmit, className: 'listform', noValidate: true},
				React.createElement('h2', {
				  className: ''},
				  'List an Item'),
				React.createElement('input', {
				  className: 'radius',
				  type: 'text',
				  placeholder: 'Item Name',
				  value: this.props.value.itemname,
				  onChange: this.onItemNameChange,
				}),
				React.createElement('input', {
				  className: 'radius',
				  type: 'text',
				  placeholder: 'Condition',
				  value: this.props.value.condition,
				  onChange: this.onConditionChange,
				}),
				React.createElement('textarea', {
				  className: 'radius',
				  placeholder: 'Description',
				  value: this.props.value.description,
				  onChange: this.onDescriptionChange,
				}),
				React.createElement('button', {
				  type: 'submit'},
				  'Preview Listing')
			)
		);
	  },
	});
	
	//class encapsulates a single item in the list
	var ListItem = React.createClass({
	  propTypes: {
		itemname: React.PropTypes.string.isRequired,
		condition: React.PropTypes.string.isRequired,
		description: React.PropTypes.string,
	  },

	  render: function() {
		return (
			React.createElement('li', {className: 'listitem'},
			React.createElement('p', {className: ''},
				"Item Name: "+this.props.itemname),
			React.createElement('p', {className: ''},
				"Condition: "+this.props.condition),
			React.createElement('p', {className: ''},
				"Description: "+this.props.description)
		  )
		);
	  },
	});

	//class for a list created to hold all items
	var ListView = React.createClass({
	  propTypes: {
		lists: React.PropTypes.array.isRequired,
		newlist: React.PropTypes.object.isRequired,
		onnewlistChange: React.PropTypes.func.isRequired,
		onnewlistSubmit: React.PropTypes.func.isRequired,
	  },
		
	  render: function() {
		var listItemElements = this.props.lists
			.filter(function(list) {
				return list.condition; })
			.map(function(list) {
				return React.createElement(ListItem, list); });

		return (
			React.createElement('div', {
				className: ''},
			React.createElement('ul', {
				className: ''},
				listItemElements),
			React.createElement(ListForm, {
				value: this.props.newlist,
				onChange: this.props.onnewlistChange, //on input, alter text field
				onSubmit: this.props.onnewlistSubmit, //on submit, process new item
			})
		  )
		);
	  },
	});

	//used to hold all item objects
	var LIST_TEMPLATE = {itemname: "", condition: "", description: "", errors: null};

	function updatenewlist(list) {
	  setState({ newlist: list });
	}


	function submitnewlist() {
	  var list = Object.assign({}, state.newlist, {key: state.lists.length + 1, errors: {}});
	  
	  if (list.itemname && list.condition) {
		setState(
		  Object.keys(list.errors).length === 0
		  ? {
			  newlist: Object.assign({}, LIST_TEMPLATE),
			  lists: state.lists.slice(0).concat(list),
			}
		  : { newlist: list }
		);
	  }
	}
	
	//used to keep track of states
	var state = {};

	//change state depending on input from user
	function setState(changes) {
	  Object.assign(state, changes);
	  
	  ReactDOM.render(
		React.createElement(ListView, Object.assign({}, state, {
		  onnewlistChange: updatenewlist,
		  onnewlistSubmit: submitnewlist,
		})),
		document.getElementById('reactlistinput')
	  );
	}

	//initialize the list on load with empty by calling setState
	setState({
	  lists: [],
	  newlist: Object.assign({}, LIST_TEMPLATE),
	});
});


