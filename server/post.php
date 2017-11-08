<?php
require_once("../../../../wp-load.php");
$result = [];
if($_POST['post_id'] && $_POST['post_id'] != '' && $_POST['key'] = 'abnf1235ghuirj'){
  global $wpdb;
  $PostView = get_post_meta($_POST['post_id'], 'PostView', true);
  $PostView = $PostView ? $PostView + 1 : 1;
  update_post_meta($_POST['post_id'], 'PostView', $PostView);

  $result = $wpdb->get_row('SELECT * FROM ' . $wpdb->prefix . 'posts WHERE ID='.$_POST['post_id'].' AND post_status="publish"');
  $result->thumbnail = get_the_post_thumbnail_url($_POST['post_id']);
  $result->youtube_id = get_post_meta($_POST['post_id'], 'YoutubeID', true);
  $result->PostView = get_post_meta($_POST['post_id'], 'PostView', true);
  echo json_encode($result);
}

?>
