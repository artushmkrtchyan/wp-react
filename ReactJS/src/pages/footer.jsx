import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export class Footer extends Component {
  render() {
    return (
      <Row>
        <footer className="container footer-section">
          <Row>
            <Col  xs={6}>
              <div className="footer-logo">
                <a href="/asinkey/#/">
                  <img src="/img/logo.jpg" alt="logo" title="footer-logo" />
                </a>
              </div>
            </Col>
            <Col xs={6}>
              <div className="social-follow-buttons clearfix">
                    <a target="_blank" className="facebook omniture-track" href="#">
                        <div className="button-container facebook-container">
                            <FontAwesome name="facebook"/>
                        </div>
                    </a>
                    <a target="_blank" className="twitter omniture-track" href="#">
                        <div className="button-container twitter-container">
                            <FontAwesome name="twitter"/>
                        </div>
                    </a>
                    <a target="_blank" className="google omniture-track" href="#">
                        <div className="button-container google-container">
                            <FontAwesome name="google-plus"/>
                        </div>
                    </a>
                    <a target="_blank" className="instagram omniture-track" href="#">
                        <div className="button-container instagram-container">
                            <FontAwesome name="instagram"/>
                        </div>
                    </a>
                    <a target="_blank" className="rss omniture-track" href="/feed">
                        <div className="button-container rss-container">
                            <FontAwesome name="rss"/>
                        </div>
                    </a>
                </div>
            </Col>
          </Row>
        </footer>
      </Row>
    );
  }
}
