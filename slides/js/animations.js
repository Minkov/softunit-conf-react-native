window.setupLiAnimations = function () {
    $('.reveal *:not(.not-animated) ul li')
        .addClass('fragment fade-in');

    $('.reveal .compare .line:not(.header)')
        .addClass('fragment fade-in');
    $('.reveal *:not(.not-animated) .compare .line:not(.header)>*:nth-child(2)')
        .addClass('fragment fade-in');

    $('.reveal .who-am-i ul li')
        .removeClass('fragment fade-in');

    $('.reveal .who-am-i .compare .line:not(.header)')
        .removeClass('fragment fade-in');
    $('.reveal .who-am-i .compare .line:not(.header)>*:nth-child(2)')
        .removeClass('fragment fade-in');
};