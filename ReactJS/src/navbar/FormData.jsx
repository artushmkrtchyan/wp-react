import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Checkbox, Col, Row, Modal, ListGroup, ListGroupItem} from 'react-bootstrap';
import conf from '../../config';
import $ from 'jquery';

export class SignUp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        form_data: {
          SignUp: 'signUp',
          FirstName: '',
          LastName: '',
          SignUpLogin: '',
          Email: '',
          SignUpPassword: '',
          ConfirmPassword: '',
        },
        data: ''
      }

      this.changeHandle = this.changeHandle.bind(this);
    }

    signup () {
        $.ajax({
          url: conf.wp_ajax_path + 'user.php',
          type: 'post',
          data: this.state.form_data,
          success: data => {
            this.setState({data})
            if(data == 'success'){
                this.props.hideModalSignUp()
            }
          }
        });
    }


    changeHandle(e) {
        let input_name = e.target.getAttribute('name');
        let input_value = e.target.value;
        this.state.form_data[input_name] = input_value;

        this.setState(this.state);
    }

  render() {
		return (
        <FormGroup>
            <FormControl name="SignUp" type="hidden" value="signUp" />
            <ControlLabel>First Name:</ControlLabel>
            <FormControl name="FirstName" type="input" onChange={this.changeHandle} />
            <ControlLabel>Last Name:</ControlLabel>
            <FormControl name="LastName" type="input" onChange={this.changeHandle} />
            <ControlLabel>Login:</ControlLabel>
            <FormControl name="SignUpLogin" type="input" onChange={this.changeHandle} />
            <ControlLabel>Email:</ControlLabel>
            <FormControl name="Email" type="email" onChange={this.changeHandle} />
            <ControlLabel>Password:</ControlLabel>
            <FormControl name="SignUpPassword" type="password" onChange={this.changeHandle} />
            <ControlLabel>Confirm Password:</ControlLabel>
            <FormControl name="ConfirmPassword" type="password" onChange={this.changeHandle} />
            {this.state.data ?
              <ListGroup className="error-mesage">
                <ListGroupItem bsStyle="danger"><span dangerouslySetInnerHTML={{__html: this.state.data}}></span></ListGroupItem>
              </ListGroup> : ''
             }
            <Button onClick={this.signup.bind(this)} className="create_account submit-form" name="create_account" bsStyle="danger" bsSize="large">Submit</Button>
        </FormGroup>
    )
  }
}

export class SignIn extends Component {
  constructor(props) {
      super(props);

      this.state = {
        login_data: {
          SignIn: 'signin',
          login: '',
          password: '',
          remember: ''
        },
        data: ''
      }

      this.changeHandle = this.changeHandle.bind(this);
    }

    signin () {
        $.ajax({
          url: conf.wp_ajax_path + 'user.php',
          type: 'post',
          data: this.state.login_data,
          success: data => {
            this.setState({data})
            if(data == 'success'){
                this.props.hideModalSignIn()
            }
          }
        });
    }

    changeHandle(e) {
        let inputName = e.target.getAttribute('name');
        let inputValue = e.target.value;
        this.state.login_data[inputName] = inputValue;

        this.setState(this.state);
    }

  render() {
		return (
        <FormGroup>
          <FormControl name="SignIn" type="hidden" value="signin" />
            <ControlLabel>Login:</ControlLabel>
            <FormControl name="login" type="input" onChange={this.changeHandle} />
            <ControlLabel>Password:</ControlLabel>
            <FormControl name="password" type="password" onChange={this.changeHandle} />
            <Checkbox inline name='remember' className="remember-me" onChange={this.changeHandle}>Remember me</Checkbox>
            {this.state.data ?
              <ListGroup className="error-mesage">
                <ListGroupItem bsStyle="danger"><span dangerouslySetInnerHTML={{__html: this.state.data}}></span></ListGroupItem>
              </ListGroup> : ''
             }
            <Button onClick={this.signin.bind(this)} className="login submit-form" name="login" bsStyle="danger" bsSize="large">Login</Button>
        </FormGroup>
    );
  }
}
