<?php
require_once("../../../../wp-load.php");
$result = [];
if($_POST['post_id'] && $_POST['post_id'] != '' && $_POST['key'] = 'abnf1235ghuirj'){
  global $wpdb;
  $result = $wpdb->get_row('SELECT * FROM ' . $wpdb->prefix . 'posts WHERE ID='.$_POST['post_id']);
  $result->thumbnail = get_the_post_thumbnail_url($_POST['post_id']);
  $result->youtube_id = get_post_meta($_POST['post_id'], 'YoutubeID', true);
  echo json_encode($result);
}

?>
