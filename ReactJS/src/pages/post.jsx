import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import MostRead from '../components/mostRead.jsx';
import conf from '../../config';
import $ from 'jquery';
import YoutubePlayer from 'react-youtube-player';

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

  this.getPost = this.getPost.bind(this)
  this.handlePageChange = this.handlePageChange.bind(this)
}

componentWillReceiveProps (nextProps) {
this.state.post_data.post_id = nextProps.params.id;
this.setState(this.state);
this.getPost()
}

componentWillMount() {
this.getPost()
}

getPost() {
$.ajax({
  url: conf.wp_ajax_path + 'post.php',
  dataType: 'json',
  type: 'post',
  data: this.state.post_data,
  success: data => {
    this.setState({data})
  }
});
}

handlePageChange() {
this.setState(this.state);
this.getPost();
}


  render() {
		return (

        <div className="main-container post-page">
          <div className="container header">
            <Header></Header>
          </div>

          <div className="container post-content">
            <Row>
                  <Col xs={8}>
                        <div className={"post-item post_"+this.state.data.ID}>
                            <div className="post-title"> {this.state.data.post_title} </div>
                            <div className="post-meta">
                              <span className="post-view"> Views:  {this.state.data.PostView} </span>
  														<span className="post-date"> {this.state.data.post_date} </span>
                            </div>
                            {this.state.data.youtube_id ?
                              <div className="videoWrapper">
                                <YoutubePlayer
                                  videoId={this.state.data.youtube_id}
                                  playbackState='unstarted'
                                  configuration={
                                      {
                                          showinfo: 0,
                                          controls: 1
                                      }
                                  }
                                />
                              </div>
                               :
                              <div className="post-img"><img src={this.state.data.thumbnail} alt="" /></div>
                            }
                            <div className="post-content"> {this.state.data.post_content} </div>
                        </div>
                </Col>
                <Col xs={4}>
                  <MostRead></MostRead>
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
