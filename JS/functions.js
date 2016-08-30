$(document).ready(function() {
    // Menu Slide Trigger Function
    var body = $('body');
    $('.menu-toggle').click(function() {
        body.toggleClass('menu-open');
        return false
    });

});