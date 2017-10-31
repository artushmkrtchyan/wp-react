import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {MainMenu} from '../navbar/nav.js';
import {TopMenu} from '../navbar/topNav.js';
import {Account} from '../navbar/Account.jsx';

export class Header extends Component {
  render() {
    return (
      <Row>
        <div className="top-section">
          <Row>
            <Col  xs={9}>
              <div className="logo">
                <a href="/asinkey/#/">
                  <img src="/img/logo.jpg" alt="logo" title="logo" />
                </a>
              </div>
            </Col>
            <Col xs={3}>
              <Account className="account"></Account>
              <TopMenu id='social_link'></TopMenu>
            </Col>
          </Row>
            <MainMenu id="navbar"></MainMenu>
        </div>
      </Row>
    );
  }
}
