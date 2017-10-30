import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import conf from '../../config';
import $ from 'jquery';

export default class Post extends Component {
  constructor(props) {
      super(props);
			this.state = {
				post_data: {
					post_id: this.props.params.id,
					key: 'abnf1235ghuirj'
				},
				data: []
			}
  }

	componentWillMount() {
		$.ajax({
			url: conf.wp_ajax_path + 'post.php',
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

        <div className="main-container post-page">
          <div className="container header">
            <Header></Header>
          </div>

          <div className="container post-content">
            <Row>
                   <Col xs={9}>
                        <div className={"post-item post_"+this.state.data.ID}>
                            <div className="post-title"> {this.state.data.post_title} </div>
														<div className="post-date"> {this.state.data.post_date} </div>
                            <div className="post-img"><img src={this.state.data.thumbnail} alt="" /></div>
                            <div className="post-excerpt"> {this.state.data.post_content} </div>
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
