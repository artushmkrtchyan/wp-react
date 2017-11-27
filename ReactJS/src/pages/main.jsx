import React, { Component } from 'react';
import {Button, Col, Row, Modal } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import {AllNews} from './allnews.jsx';
import Sport from './sport.jsx';
import Wpajax from './wpajax.jsx';

import {ListItem, NewItem} from './childComponent.jsx';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show:false,
            showModal:false
        }

        this.onButtonClick = this.onButtonClick.bind(this);
        this.open          = this.open.bind(this);
        this.close         = this.close.bind(this);
    }

    onButtonClick(event) {
    	if(this.state.show){
        	this.setState({show:false});
        }else {
        	this.setState({show:true});
        }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        let show = this.state.show;

        return (

            <div className="main-container home-page">
                <div className="header container">
                  <Header></Header>
                </div>

                <div className="container content">
                  <AllNews></AllNews>
                  <Sport></Sport>
                  <Wpajax></Wpajax>
                </div>

                <div className="container-fluid footer">
                  <Footer></Footer>
                </div>

                <div className="container">
                <Row>
                    <Col md={6}>
                        <ul>
                            <ListItem quantity="1" name="Bread" />
                            <ListItem quantity="6" name="Eggs" />
                            <ListItem quantity="2" name="Milk" />
                            <NewItem marka="bmw" year="2000" />
                            <NewItem marka="opel" year="1998" />
                        </ul>
                    </Col>

                    <Col md={6}>
                        <div className="bootstrap-test">
                            <Button bsStyle="danger" bsSize="small" type="button" onClick={this.onButtonClick} >Something</Button>
                        </div>
                        {
                            show ? "asdasdasdasdasd" : "chka"
                        }
                    </Col>
                </Row>
              </div>
            </div>
        );
    }
}
