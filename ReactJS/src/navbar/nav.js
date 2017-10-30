import React, { Component } from 'react';
import {Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export class MainMenu extends Component {
  render() {
    return (
      <Nav bsStyle="tabs">
        <NavItem eventKey="1" href="/">Main</NavItem>
        <NavItem eventKey="2" href="#">NavItem 2</NavItem>
        <NavItem eventKey="3" href="#">NavItem 3</NavItem>
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
