import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import conf from '../../config';
import $ from 'jquery';

export class Technology extends Component {

	constructor(props) {
			super(props);

			this.state = {
				post_data: {
          post_count: 4,
					cat_id: 2
        },
        data: []
			}
		}

	componentWillMount() {
		$.ajax({
			url: conf.wp_ajax_path + 'posts.php',
			dataType: 'json',
			type: 'post',
			data: this.state.post_data,
			success: data => {
				console.log(data);
				this.setState({data})
			}
		});
	}

  render() {
		return (

        <div className="post-section">
          <Row>
    					{
  					   this.state.data.map( (post, key) => (
                 <Col key={key}  xs={3}>
      								<div id={"post_"+post.id} className="post-item">
                        <Link to={"post/"+post.id}>
        									<div className="post-title"> {post.title} </div>
        									<div className="post-img"><img src={post.thumbnail} alt="" /></div>
                          <div className="post-excerpt"> {post.content} </div>
                        </Link>
      								</div>
                  </Col>
  					   ))
    					}
          </Row>
        </div>
    );
  }
}
