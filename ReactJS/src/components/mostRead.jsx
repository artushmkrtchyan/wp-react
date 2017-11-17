import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import conf from '../../config';
import $ from 'jquery';

export default class MostRead extends Component {

	constructor(props) {
			super(props);

			this.state = {
				post_data: {
          post_count: 5
        },
        data: []
			}
		}

	componentWillMount() {
		$.ajax({
			url: conf.wp_ajax_path + 'mostread.php',
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

        <div className="most-read-section">
           <div className="most-read-title">Most Read</div>
            <ul className="post-block-list">
    					{
  					   this.state.data.map( (post, key) => (
  								<li key={key} id={"post_"+post.id} className="post-item item clearfix">
                    <Link to={"post/"+post.id}>
                      <div className="most-read-post-img"><img src={post.thumbnail} alt="" /></div>
    									<div className="most-read-post-title"> {post.title} </div>
                    </Link>
  								</li>
  					   ))
    					}
            </ul>
        </div>
    );
  }
}
