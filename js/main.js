$(function () {
    var hamburgerBtn = $('.js-hamburger-btn');
    var sidebar = $('.drawer-one');
    hamburgerBtn.on('click', function (e) {
        e.stopPropagation();
        sidebar.toggleClass('open');
    });
    if(window.matchMedia('(max-width: 559px)').matches) {
        sidebar.click(function(e){
            e.stopPropagation();
        });
        $('body,html').click(function(e){
           sidebar.removeClass('open');
        });
    }
});