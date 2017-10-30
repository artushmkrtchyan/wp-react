import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export class TopMenu extends Component {
  render() {
    return (
      <ul className="social-menu">
        <li className="facebook"><a href="#"><FontAwesome name="facebook"/></a></li>
        <li className="linkedin"><a href="#"><FontAwesome name="linkedin"/></a></li>
        <li className="twitter"><a href="#"><FontAwesome name="twitter"/></a></li>
        <li className="google-plus"><a href="#"><FontAwesome name="google-plus"/></a></li>
      </ul>
    );
  }
}
