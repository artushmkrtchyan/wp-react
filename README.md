# installation
$ npm install

# build project
$ npm start

# add index.php
require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
if( is_plugin_active( 'wp-react/wp-react.php' ) ){
	include_wp_react();
}
