<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'abogadoscca_wordpresscca' );

/** Database username */
define( 'DB_USER', 'abogadoscca_wordpressuser' );

/** Database password */
define( 'DB_PASSWORD', '[FE{CcZ-9(Sg' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '[D>V^v@wY4Gw$dE#L>C?aS MKr.:k9P(-Q:[( fhCDI,8FN|x?pkj8uUtTkA!+KV' );
define( 'SECURE_AUTH_KEY',  'yV[!2*1Gm?Ux.]Cq1W[k]vW}~3`zJho5*d&J5aP5[D*.z>0j; UnqHcuJH:?%iSt' );
define( 'LOGGED_IN_KEY',    'dI:}=vp7yy?L~.qV#mzxLevBSTvFX`.lc9Wr>|0x^c3 ltVw*Fc9@!YowhW3}<;r' );
define( 'NONCE_KEY',        'MUg=K24mNE0mczvIJ0DFxpDYaT`VD`U ^V?<_#sLm1tzO~a@(y#=@MT`z`$CXsM1' );
define( 'AUTH_SALT',        'nqM&Xr}1nIoT*NFUb(%W%WsV9?DLh!vh$e14dAC;aJTTCzFK2Wpo93}>6`jA*)jz' );
define( 'SECURE_AUTH_SALT', '*H}T<C1r|Qqjec |5S=sq)U(VdbW..y!IecMID6Ba$g,{)iTain<3xok]jM+|Vn`' );
define( 'LOGGED_IN_SALT',   'vX$Jes{<QZhuG;}d8fH>JM{={G+-suE< d7>fPZ*N$zIc4z$C34Uk}]K@|.$y[3(' );
define( 'NONCE_SALT',       '(4gLcy #%|<g=:j0}m-yS&eQK{os3=EGTUm}1Ub4L1e@w-Ll;x#j7|[-Y8;C]`6s' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
