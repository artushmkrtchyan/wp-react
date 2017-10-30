import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Search from '../pages/search.jsx';
import Main from '../pages/main.jsx';
import Post from '../pages/post.jsx';
import Category from '../pages/category.jsx';
import WpPost from '../pages/wppost.jsx';

export default (<Route path="/asinkey/">
	<IndexRedirect to="/asinkey/main"/>
	<Route path="/asinkey/main" component={Main} />
	<Route path="/asinkey/search" component={Search} />
	<Route path="/asinkey/post/:id" component={Post} />
	<Route path="/asinkey/category/:id" component={Category} />
	<Route path="/asinkey/WpPost/:id" component={WpPost} />
</Route>)
