<?php

// NOTE: REWRITE WP-JSON to API WORDPRESS JSON API URL PREFIX
add_filter('rest_url_prefix', 'tenup_rewrite_rest_url_prefix');
function tenup_rewrite_rest_url_prefix() { return 'api'; };
