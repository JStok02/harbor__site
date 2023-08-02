$(document).ready(function(){
    // плавная прокрутка
    $('.header nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        if ($(this).parent().hasClass('.header__item')) {
            $('nav a[href^="#"]').parent().removeClass('active');
            $(this).parent().addClass('active');
            $('.menu-mobile .menu__list').toggle(500);
            $('.menu__burger').toggleClass('close');
        }
        return false;
    });
    // бургер
    $('.menu__burger').click(function(){
        $('.menu-mobile .header__list').toggle(500);
        $(this).toggleClass('close');
    });
});