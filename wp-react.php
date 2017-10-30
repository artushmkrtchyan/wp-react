<?php
/*
Plugin Name: Wp-React
Description: Plugin integrat react js.
Version:     0.0.1
Author:      Artush Mkrtchyan
*/

function include_wp_react() {
  echo '<div id="root"></div>';
}

function include_react_files() {
    wp_enqueue_style( 'style.css', plugins_url('css\style.css', __FILE__) );
    wp_enqueue_style( 'bootstrap-theme.min.css', plugins_url('css\bootstrap-theme.min.css', __FILE__) );
    wp_enqueue_style( 'bootstrap.min.css', plugins_url('css\bootstrap.min.css', __FILE__) );
    wp_enqueue_style( 'font-awesome.min.css', plugins_url('css\font-awesome.min.css', __FILE__) );

    wp_enqueue_script( 'plugin-scripts', plugins_url('js/app.js', __FILE__),array(),  '0.0.1', true );
}

add_action( 'wp_enqueue_scripts', 'include_react_files' );
