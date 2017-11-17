<?php
 require_once("../../../../wp-load.php");
 if($_POST['post_count'] && $_POST['post_count'] != ''){
 		$args = array(
 		    'posts_per_page' => $_POST['post_count'],
 		    'offset' => 0,
 		    'orderby' => 'meta_value',
 		    'order' => 'DESC',
 		    'post_type' => 'post',
 		    'post_status' => 'publish',
        'meta_key'    => 'PostView'
 		);
     $posts_array = get_posts($args);
     $result = [];
     $arr = [];
     if ($posts_array) {

         foreach ($posts_array as $post_item) {
         	$arr['id'] = $post_item->ID;
         	$arr['title'] = get_the_title($post_item->ID);
         	$arr['content'] = $post_item->post_content;
         	$arr['thumbnail'] = get_the_post_thumbnail_url($post_item->ID, 'large');
         	$arr['create_date'] = get_the_date('d.m.Y | h:i', $post_item->ID);
         	array_push($result, $arr);
         }
         echo json_encode($result);
     }
 }
