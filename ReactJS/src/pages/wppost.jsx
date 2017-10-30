import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import $ from 'jquery';
import conf from '../../config';

export default class WpPost extends Component {
  constructor(props) {
      super(props);
      this.state = {
          postID:this.props.params.id,
          showModal:false,
          data: {
            title: {},
            content: {}
          }
      }
  }

	componentWillMount() {
		$.ajax({
			url: conf.wp_api_url + '/posts/' + this.state.postID,
			dataType: 'json',
			success: data => {
        $.ajax({
          url: data._links['wp:featuredmedia'][0].href,
          dataType: 'json',
          success: media => {
            data.media = media.guid.rendered
            this.setState({data})

          }
        })
			}
		});
	}

  render() {
console.log(this.state.data);

		return (

        <div className="main-container post-page">
          <div className="container header">
            <Header></Header>
          </div>
          <div className="container post-content">
            <Row>
                   <Col xs={9}>
                        <div className={"post-item post_"+this.state.data.id}>
                            <div className="post-title"> <span dangerouslySetInnerHTML={{__html: this.state.data.title.rendered}}></span> </div>
														<div className="post-date"> {this.state.data.date} </div>
                            <div className="post-img"><img src={this.state.data.media} alt="" /></div>
                            <div className="post-content"> <span dangerouslySetInnerHTML={{__html: this.state.data.content.rendered}}></span> </div>
                            <div className="post-link-to"><a target="_blank" href={this.state.data.link}>Link to original site</a></div>
                        </div>
                    </Col>
                <Col xs={3}>
                </Col>
            </Row>
          </div>

          <div className="container-fluid footer">
            <Footer></Footer>
          </div>
        </div>
    );
  }
}
