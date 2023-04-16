<?php

define( 'DB_NAME',     getenv( 'DB_NAME' ) );
define( 'DB_USER',     getenv( 'DB_USER' ) );
define( 'DB_PASSWORD', getenv( 'DB_PASS' ) );
define( 'DB_HOST',     getenv( 'DB_HOST' ) );
define( 'TABLE_PREFIX',getenv( 'TABLE_PREFIX' ) );
define( 'SSL_ENABLE',  getenv( 'SSL_ENABLE' ) );
define( 'DB_CHARSET',  'utf8' );
define( 'DB_COLLATE',  'utf8_general_ci' );
define( 'DOMAIN_URL', (SSL_ENABLE === "true" ? 'https://' : 'http://') . getenv( 'DOMAIN' ) );
define( 'WP_CONTENT_DIRECTORY', getenv( 'WP_CONTENT_DIR_NAME' ) );

// SPECIFIC ENVIRONMENT CONFIGURATION

define( 'WP_HOME',                 DOMAIN_URL);
define( 'WP_SITEURL',              WP_HOME);
define( 'GA',                      '' );
define( 'WP_MEMORY_LIMIT',         '2048M' );
define( 'WP_MAX_MEMORY_LIMIT',     '2048M' );
define( 'WPLANG',                  'pt_BR' );
define( 'WP_CACHE',                false);
define( 'DISABLE_WP_CRON',         false);
define( 'DISALLOW_FILE_MODS',      false);
define( 'WP_HTTP_BLOCK_EXTERNAL',  false );
define( 'DEBUG_MODE',              false);
define( 'WP_DEBUG',                (DEBUG_MODE === "true"));
define( 'WP_DEBUG_DISPLAY',        (DEBUG_MODE === "true"));
define( 'SCRIPT_DEBUG',            (DEBUG_MODE === "true") );
if((DEBUG_MODE === "true")) @ini_set( 'display_errors', 1 );
define( 'WP_ACCESSIBLE_HOSTS',     '' );
define( 'WP_POST_REVISIONS',       false);
define( 'WP_CONTENT_URL', WP_HOME . '/' . WP_CONTENT_DIRECTORY);
define( 'WP_CONTENT_DIR', ABSPATH . '/' . WP_CONTENT_DIRECTORY);
define( 'FORCE_SSL_LOGIN', (SSL_ENABLE === "true") );
define( 'FORCE_SSL_ADMIN', (SSL_ENABLE === "true") );
define( 'DISALLOW_FILE_EDIT', true );
define( 'FS_METHOD', 'direct' );
define( 'WP_SENTRY_DSN', '' );
define( 'WP_SENTRY_ENV', 'development' );

// Generate custom keys for each environment at https://api.wordpress.org/secret-key/1.1/salt/

define('AUTH_KEY',         'XLH^|YjRq+Cp2[`-ZI-Lr?6Iq|-g!a%4MLj&YUhHr+#OxC:310&^fyQA^!GU7s[c');
define('SECURE_AUTH_KEY',  'zTW2i}~&fI$2]OgPz%ld4CqD_K`I~7#c/:V;M@~G- i{y_i@v:>lq8GcS$+w@()H');
define('LOGGED_IN_KEY',    'u9]cxvHT-oc`)fl`5V~+@[F*)wpHc$r~--%pX U!NN&?2{3:&mhKvSJGgm3hjx<]');
define('NONCE_KEY',        ')iX+ G@LADBzZRt:pE%f:Ojfx/pq~Xln)!i|cRJ&qrixOkto+zkew7z24T{MVq{!');
define('AUTH_SALT',        '-alD5g|;,sRHPLH]a ~wJYHV!dDU(o!a35+Vx+PA+!+e94zw[z;Y6aTOGcYF,8,-');
define('SECURE_AUTH_SALT', 'AT!k8>03|&=BXCS)@?ROhfDv8X|X[EFg#veoY|#5v;4 E VwPut1,qE=uwS~mz)M');
define('LOGGED_IN_SALT',   ';kh zOsWNC,lqe|`e]{{b`M)A2Iw(xv)XdL:oN2|+LxtSdGknc[DU?M]Njei[1L|');
define('NONCE_SALT',       '#qw)d-LjMu(,l_Mb}lrcA#t?j(Mcm7YY%NeH|H[mK{i.(lU&N-V~m^LWnK#q1Fi-');

$table_prefix  = TABLE_PREFIX;
$_SERVER['HTTPS'] = SSL_ENABLE === "true" ? 'on' : 'off';
