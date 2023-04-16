<?php

if(! defined('THEME_PATH') )           define('THEME_PATH', get_template_directory());
if(! defined('THEME_URL') )            define('THEME_URL', get_template_directory_uri());

// API Setup
if(! defined('API_URL') )              define('API_URL', WP_SITEURL . '/wp-json/v2/');
if(! defined('API_PATH') )             define('API_PATH', THEME_PATH . '/api');
if(! defined('CURRENT_API_PATH') )     define('CURRENT_API_PATH', THEME_PATH . '/api/v1');
