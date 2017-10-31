<?php
add_action('add_meta_boxes', 'cd_meta_box_add');

function cd_meta_box_add() {
    add_meta_box('post-meta-box-id', 'Post Attributes', 'cd_meta_box_cb', 'post', 'normal', 'high');
}

function cd_meta_box_cb() {
    global $wpdb;
    $youtube_video_id = get_post_meta(get_the_ID(), 'YoutubeID', true);
    wp_nonce_field('my_meta_box_nonce', 'meta_box_nonce');
    ?>

    <p><label for="YoutubeID">YouTube ID:</label>
        <input type="text"  name="YoutubeID" value="<?php echo $youtube_video_id; ?>" id="youtube_id" />
    </p>

    <?php
}

add_action('save_post', 'cd_meta_box_save');

function cd_meta_box_save($post_id) {
    // Bail if we're doing an auto save
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;

    // if our nonce isn't there, or we can't verify it, bail
    if (!isset($_POST['meta_box_nonce']) || !wp_verify_nonce($_POST['meta_box_nonce'], 'my_meta_box_nonce'))
        return;

    if (wp_is_post_revision($post_id))
        return;


    // Make sure your data is set before trying to save it
    if (isset($_POST['YoutubeID']) && $_POST['YoutubeID'] != ''){
        update_post_meta($post_id, 'YoutubeID', $_POST['YoutubeID']);
    }
    if (isset($_POST['YoutubeID']) && $_POST['YoutubeID'] == ''){
        delete_post_meta($post_id, 'YoutubeID');
    }
}
