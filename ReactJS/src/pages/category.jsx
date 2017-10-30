import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import { Link } from 'react-router';
import conf from '../../config';
import $ from 'jquery';

export default class Category extends Component {
  constructor(props) {
			super(props);

			this.state = {
				posts_data: {
          post_count: 5,
					cat_id: this.props.params.id
        },
        data: []
			}
		}

	componentWillMount() {
		$.ajax({
			url: conf.wp_ajax_path + 'category.php',
			dataType: 'json',
			type: 'post',
			data: this.state.posts_data,
			success: data => {
				console.log(data);
				this.setState({data})
			}
		});
	}

  render() {
		return (

        <div className="main-container category-page">
          <div className="container header">
            <Header></Header>
          </div>

          <div className="container post-content">
            <Row>
                   <Col xs={9}>
                     {
         					   this.state.data.map( (post, key) => (
                      <div key={key} className={"cat-post-item post_"+post.id}>
                        <Link to={"/asinkey/post/"+post.id}>
                          <div className="post-title"> {post.title} </div>
                        </Link>
                          <div className="post-date"> {post.create_date} </div>
                        <Link to={"/asinkey/post/"+post.id}>
                          <div className="post-img"><img src={post.thumbnail} alt="" /></div>
													<div className="post-excerpt"> {post.content} </div>
                        </Link>
                      </div>
                      ))
                    }
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
