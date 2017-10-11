import $ from 'jquery';

const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

$(document).ready(function() {
    $('.nav-link').each(function() {
        if ('.nav-link' === window.location.href) {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
});
