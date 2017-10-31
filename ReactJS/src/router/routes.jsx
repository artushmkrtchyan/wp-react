import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Search from '../pages/search.jsx';
import Main from '../pages/main.jsx';
import Post from '../pages/post.jsx';
import Category from '../pages/category.jsx';
import WpPost from '../pages/wppost.jsx';

export default (<Route path="/">
	<IndexRedirect to="main"/>
	<Route path="main" component={Main} />
	<Route path="search" component={Search} />
	<Route path="post/:id" component={Post} />
	<Route path="category/:id" component={Category} />
	<Route path="WpPost/:id" component={WpPost} />
</Route>)
