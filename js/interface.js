// Скрипты для фиксирования шапки

let scrollTopHeaderMax = $('.header-max__wrapper')

$(window).scroll(function() {
    scrollTopHeaderMax.toggleClass('scroll', $(this).scrollTop() > 50);
});

$('.main__btn').click(()=>{
    // Открытие модального окна
    $('.form-wrapper-all').css({
        display: "block",
        opacity: 1
    })
})

// Закрытие модального окна
$('.close-button').click(()=>{
    $('.form-wrapper-all').css({
        display: "none",
        opacity: 0
    })
})