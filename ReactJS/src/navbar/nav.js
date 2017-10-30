import React, { Component } from 'react';
import {Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {browserHistory} from 'react-router';

export class MainMenu extends Component {
  render() {
    return (
      <Nav bsStyle="tabs">
        <NavItem eventKey="1" href="/asinkey/">Main</NavItem>
        <NavItem eventKey="2" href="#"><span onClick={() => { browserHistory.push('/asinkey/category/2') }}>Technology</span></NavItem>
        <NavItem eventKey="3" href="#"><span onClick={() => { browserHistory.push('/asinkey/category/3') }}>Sport</span></NavItem>
        <NavDropdown eventKey="4" href="#" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1" href="#">Action</MenuItem>
          <MenuItem eventKey="4.2" href="#">Another action</MenuItem>
          <MenuItem eventKey="4.3" href="#">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4" href="#">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}
