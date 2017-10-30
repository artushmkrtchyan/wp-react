import React, { Component } from 'react';


var CONTACTS = [
	{
		id: 1,
		name: 'Darth Vader',
		phoneNumber: '+250966666666',
		image: 'http://img.freepik.com/free-icon/home-icon-silhouette_318-85097.jpg?size=338c&ext=jpg'
	}, {
		id: 2,
		name: 'Princess Leia',
		phoneNumber: '+250966344466',
		image: 'http://silhouettesfree.com/human/family/home-silhouette-image.png'
	}, {
		id: 3,
		name: 'Luke Skywalker',
		phoneNumber: '+250976654433',
		image: 'http://static.wixstatic.com/media/5e5b5e_7d8323baf24743f397d42e41cecf1aca~mv2.png'
	}, {
		id: 4,
		name: 'Chewbacca',
		phoneNumber: '+250456784935',
		image: 'http://img.freepik.com/free-icon/home-interface-symbol-with-a-window-of-squares_318-60365.jpg?size=338&ext=jpg'
	}
];

export default class Search extends Component {
	constructor(props) {
        super(props);

		this.state = {displayedContacts: CONTACTS};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		var searchQuery = event.target.value.toLowerCase();

		var displayedContacts = CONTACTS.filter( el => {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({displayedContacts: displayedContacts})
	}

	render() {
		return (
			<div className="contacts">
				<a href="/append" className="link_to_append"><button className="my-btn">ADD NEW DATA</button></a>
				<a href="/main" className="link_to_main"><button className="my-btn">Main</button></a>
				<input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
				<ul className="contacts-list">
					{
					   this.state.displayedContacts.map( (el, key) => (
							<li key={key} className="contact">
								<div className="contact-info">
									<div className="contact-name"> {el.name} </div>
									<div className="contact-number"> {el.phoneNumber} </div>
								</div>
							</li>
					   ))
					}
				</ul>
			</div>

		);
	}
}
