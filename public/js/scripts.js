/* globals $ */

$(document).ready(function() {
    $('.nav-link').each(function() {
        if ('.nav-link' === window.location.href) {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(document).ready(function() {
    /* This is basic - uses default settings */
    $('a#single_image').fancybox();

    /* Using custom settings */
    $('a#inline').fancybox({
        'hideOnContentClick': true,
    });

    /* Apply fancybox to multiple items */
    $('a.group').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
    });
});

// $(document).ready(function() {
//     $('.fdi-Carousel .item').each(function() {
//         let next = $(this).next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }
//         next.children(':first-child').clone().appendTo($(this));

//         if (next.next().length > 0) {
//             next.next().children(':first-child').clone().appendTo($(this));
//         }
//         else {
//             $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//         }
//     });
// });