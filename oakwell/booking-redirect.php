<?php
/**
 * Plugin Name: Custom Admin Redirect for booking page
 * Description: A simple plugin to toggle redirect from /book-now/ to /waitlit-crs/
 * Version: 1.0
 * Author: AlexDev al@conversionrate.store
 */

// Create the options page for redirects
function car_add_admin_page() {
    add_menu_page('Booking Redirect', 'Booking Redirect', 'manage_options', 'custom_redirects', 'booking_redirect_page', 'dashicons-randomize', 110);
}
add_action('admin_menu', 'car_add_admin_page');

// Display the settings page
function booking_redirect_page() {
    ?>
    <div class="wrap">
        <h1>Booking Redirect Toggle</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('booking_redirect_group');
            do_settings_sections('simple_redirect');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

// Register the setting and define the checkbox field
function booking_register_settings() {
    register_setting('booking_redirect_group', 'booking_redirect_enabled');

    add_settings_section('booking_redirect_section', 'Enable/Disable redirect from CRS booking pages to /book-now/', null, 'simple_redirect');

    add_settings_field('booking_redirect_field', 'Activate booking redirect?', 'booking_redirect_field_callback', 'simple_redirect', 'booking_redirect_section');
}
add_action('admin_init', 'booking_register_settings');

// Callback function to display the checkbox
function booking_redirect_field_callback() {
    $redirect_enabled = get_option('booking_redirect_enabled', false);
    echo '<input type="checkbox" name="booking_redirect_enabled" value="1" ' . checked(1, $redirect_enabled, false) . '/>';
}

// Perform the redirect if the checkbox is enabled
function booking_handle_redirect() {
    if (!is_admin()) {
        $redirect_enabled = get_option('booking_redirect_enabled', false);

        // If the checkbox is enabled, redirect /waitlist-crs/ or /booking-crs/ to /book-now/
        if ($redirect_enabled) {
            if ($_SERVER['REQUEST_URI'] === '/waitlist-crs/' || $_SERVER['REQUEST_URI'] === '/booking-crs/') {
                wp_redirect(home_url('/book-now/'), 301);
                exit;
            }
        } 
        // If the checkbox is disabled, redirect /book-now/ to /waitlist-crs/
        else {
            if ($_SERVER['REQUEST_URI'] === '/book-now/') {
                wp_redirect(home_url('/waitlist-crs/'), 301);
                exit;
            }
        }
    }
}
add_action('template_redirect', 'booking_handle_redirect');

// Clear cache after checkbox update
function booking_clear_cache($old_value, $new_value) {
    if (function_exists('rocket_clean_domain')) {
        rocket_clean_domain(); // Clear the entire site cache
    }
}
add_action('update_option_booking_redirect_enabled', 'booking_clear_cache', 10, 2);