<?php

function tenup_api_register_routes() {
  /** GET ALL POSTS */
  register_rest_route('/v1', '/posts',
    array(
      'methods'  => 'GET',
      'callback' => 'tenup_api_get_posts'
    )
  );

  /** GET SINGLE POST */
  register_rest_route('/v1', '/posts/(?P<id>[\d]+)',
    array(
      'methods'  => 'GET',
      'callback' => 'tenup_api_get_post'
    )
  );
}

add_action('rest_api_init', 'tenup_api_register_routes');

/**
 * ENDPOINT /v1/posts
 * @params void
 * return all posts
 *
 */
function tenup_api_get_posts() {
  $args = array(
    'post_type'     => 'post',
    'post_per_page' => -1,
    'post_status'   => 'publish'
  );

  $loop     = new WP_Query($args);
  $response = tenup_api_query_content($loop);

  if($response) {
    return rest_ensure_response( array( 'status' => 200, 'data' => $response ) );
  } else {
    return rest_ensure_response( array( 'status' => 404, 'message' => 'Not found' ) );
  };
}

/**
 * ENDPOINT /v1/post/:id
 * @params void
 * return a post by id
 *
 */
function tenup_api_get_post($request) {
  $p    = (int) $request->get_param('id');

  $args = array(
    'p'             => $p,
    'post_type'     => 'post',
    'post_per_page' => 1,
    'post_status'   => 'publish',
  );

  $loop     = new WP_Query($args);
  $response = tenup_api_query_content($loop);

  if($response) {
    return rest_ensure_response( array( 'status' => 200, 'data' => $response ) );
  } else {
    return rest_ensure_response( array( 'status' => 404, 'message' => 'Not found' ) );
  }
}

/**
 * Query Content
 */
function tenup_api_query_content($loop) {
  $response = array();

  if($loop->have_posts()) {
    while($loop->have_posts()) {
      $loop->the_post();

      $id     = get_the_ID();
      $url    = get_permalink($id);
      $content = wp_strip_all_tags(get_the_content()); // NOTE: Removing all <!-- wp:* --> from content

      array_push($response, array(
        'id'      => $id,
        'url'     => $url,
        'content' => $content
      ));
    }
    return $response;
  } else { return false; }
}
