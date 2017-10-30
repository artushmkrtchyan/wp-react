import React, { Component } from 'react';
import {Button, Col, Row, Modal } from 'react-bootstrap';
import {SignIn, SignUp} from './FormData.jsx';

export class Account extends Component {

  constructor(props) {
      super(props);
      this.state = {
          showModalUp:false,
          showModalIn:false
      }
      this.openUp          = this.openUp.bind(this);
      this.closeUp         = this.closeUp.bind(this);

      this.openIn          = this.openIn.bind(this);
      this.closeIn         = this.closeIn.bind(this);
  }
  closeUp() {
      this.setState({ showModalUp: false });
  }
  openUp() {
      this.setState({ showModalUp: true });
  }

  closeIn() {
      this.setState({ showModalIn: false });
  }
  openIn() {
      this.setState({ showModalIn: true });
  }

  render() {
    return (
      <div className="account-buttons">
        <Row>
            <div className="main-modal">
                <Button bsStyle="primary" className="sign-up" bsSize="large" onClick={this.openUp}>Sign Up</Button>
                <Button bsStyle="danger" className="sign-in" bsSize="large" onClick={this.openIn}>Sign In</Button>

                <Modal show={this.state.showModalUp} onHide={this.closeUp}>
                  <Modal.Header closeButton>
                    <Modal.Title>Create account</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <SignUp hideModalSignUp={this.closeUp}></SignUp>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.closeUp}>Close</Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalIn} onHide={this.closeIn}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login form</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <SignIn hideModalSignIn={this.closeIn}></SignIn>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.closeIn}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        </Row>
      </div>
    );
  }
}
