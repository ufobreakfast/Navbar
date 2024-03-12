// Initialize the dropdown toggle
$('.dropdown-toggle').dropdown();

// Add animation on show/hide events
$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
