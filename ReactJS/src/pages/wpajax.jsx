import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';
import conf from '../../config';
let clickCount=1;
export default class Wpajax extends Component {
  constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }
    wordpress () {

        $.ajax({
          url: conf.wp_api_url + "/posts/?per_page=4&offset=" + clickCount*4,
          dataType: 'json',
          success: data => {
            for (var i in data ) {
              this.state.data.push(data[i]);
              this.setState(this.state);
              var url = data[i]._links['wp:featuredmedia'][0].href;
              (j => $.ajax({
                url: url,
                dataType: 'json',
                success: media => {
                  this.state.data[j].media = media.guid.rendered
                  this.setState(this.state);
                }
              }))(this.state.data.length - 1)
            }
    			}
        });

        clickCount++;
    }

  render() {
		return (
      <div className="wp-ajax-section">
          <Row>
              {
               this.state.data.map( (post, key) => (
                 <Col key={key}  xs={3}>
                      <div id={"post_"+post.id} className="post-item">
                        <Link to={"/asinkey/wppost/"+post.id}>
                          <div className="post-title"><span dangerouslySetInnerHTML={{__html: post.title.rendered}}></span></div>
                          <div className="post-img"><img src={post.media} alt="" /></div>
                          <div className="post-excerpt"><span dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></span> </div>
                        </Link>
                      </div>
                  </Col>
               ))
              }
          </Row>
          <Col xs={12} className="wp-ajax-button">
            <Button onClick={this.wordpress.bind(this)} className="wp-ajax-btn" bsStyle="primary" bsSize="large">More</Button>
          </Col>
      </div>
    );
  }
}
