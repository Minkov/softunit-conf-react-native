window.setupLiAnimations = function () {
    $('.reveal ul li')
        .addClass('fragment fade-in');

    $('.reveal .compare .line:not(.header)')
        .addClass('fragment fade-in');
    $('.reveal .compare .line:not(.header)>*:nth-child(2)')
        .addClass('fragment fade-in');
};