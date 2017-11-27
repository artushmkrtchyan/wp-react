import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import {Header} from './header.jsx';
import {Footer} from './footer.jsx';
import { Link } from 'react-router';
import Pagination from 'react-js-pagination';
import conf from '../../config';
import $ from 'jquery';

export default class Category extends Component {
  constructor(props) {
			super(props);

			this.state = {
				posts_data: {
          post_count: 5,
          offset: 0,
					cat_id: this.props.params.id
        },
        activePage: 1,
        data: []
			}

      this.getCategory = this.getCategory.bind(this)
      this.handlePageChange = this.handlePageChange.bind(this)
		}

  componentWillReceiveProps (nextProps) {
    this.state.posts_data.cat_id = nextProps.params.id;
    this.state.activePage = 1;
    this.state.posts_data.offset = 0;
    this.setState(this.state);
    this.getCategory()
  }

	componentWillMount() {
    this.getCategory()
	}

  getCategory() {
    $.ajax({
      url: conf.wp_ajax_path + 'category.php',
      dataType: 'json',
      type: 'post',
      data: this.state.posts_data,
      success: data => {
        this.setState({data})
      }
    });
  }

  handlePageChange(pageNumber) {
    this.state.activePage = pageNumber;
    this.state.posts_data.offset = pageNumber ? pageNumber - 1 : 0;
    this.setState(this.state);
    this.getCategory();
  }

  render() {
    let itemsCountPerPage = this.state.posts_data.post_count ? this.state.posts_data.post_count : 10;
    let totalItemsCount = this.state.data[this.state.data.length - 1];
		return (

        <div className="main-container category-page">
          <div className="container header">
            <Header></Header>
          </div>

          <div className="container post-content">
            <Row>
                   <Col xs={9}>
                     <div>
                     {
         					   this.state.data.map( (post, key) => (
                       post.id ?
                        <div key={key} className={"cat-post-item post_"+post.id}>
                          <Link to={"post/"+post.id}>
                            <div className="post-title"><span dangerouslySetInnerHTML={{__html: post.title}}></span> </div>
                          </Link>
                            <div className="post-date"> {post.create_date} </div>
                          <Link to={"post/"+post.id}>
                            <div className="post-img"><img src={post.thumbnail} alt="" /></div>
  													<div className="post-excerpt"><span dangerouslySetInnerHTML={{__html: post.content}}></span> </div>
                          </Link>
                        </div> :
                        ''
                      ))
                    }
                    {  totalItemsCount > itemsCountPerPage ?
                      <div className="page-nav">
                        <Pagination className="sfhgjkdfgjkdfb"
                          hideDisabled
                          activePage={this.state.activePage}
                          itemsCountPerPage={itemsCountPerPage}
                          totalItemsCount={totalItemsCount}
                          onChange={this.handlePageChange}
                        />
                      </div> : ''
                    }
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
