<?php

function tenup_api_register_routes()
{
  /** GET Page by post_name */
  register_rest_route(
    '/v1',
    '/pages/(?P<post_name>[a-zA-Z0-9-]+)',
    array(
      'methods'  => 'GET',
      'callback' => 'tenup_api_get_page_by_post_name'
    )
  );
}

add_action('rest_api_init', 'tenup_api_register_routes');

function tenup_api_get_page_by_post_name($request)
{
  $postName    = $request->get_param('post_name');

  $args = array(
    'post_name'     => $postName,
    'post_type'     => 'page',
    'post_per_page' => 1,
    'post_status'   => 'publish',
  );

  $loop     = new WP_Query($args);
  $response = tenup_query_content($loop);

  if ($response) {
    return rest_ensure_response(array('status' => 200, 'data' => $response[0]));
  } else {
    return rest_ensure_response(array('status' => 404, 'message' => 'Not found'));
  }
}

function tenup_query_content($loop)
{
  $response = array();

  if ($loop->have_posts()) {
    while ($loop->have_posts()) {
      $loop->the_post();

      $id     = get_the_ID();
      $url    = get_permalink($id);
      $fields = get_fields();

      array_push($response, array(
        'id'     => $id,
        'url'    => $url,
        'fields' => $fields,
      ));
    }
    return $response;
  } else {
    return false;
  }
}
