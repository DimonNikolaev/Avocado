function openAndCloseModal(elemCLickOpen, eleOpenAndClose, eleClickClose = $('.close-button'), ){

    elemCLickOpen.click(()=>{
        eleOpenAndClose.addClass('active-modal')
    })

    eleClickClose.click(()=>{
        eleOpenAndClose.removeClass('active-modal')
    })

    $('.form-wrapper-all').on('click', ()=>{
       this.removeClass('active-modal')
    })
}

openAndCloseModal($('.header-min__link'), $('.form-wrapper-all-call'));
openAndCloseModal($('.main__btn'), $('.form-wrapper-all-prob'));


$('.header-max__wrapper').css('top') == '0' ? $('.header-max__wrapper').css('box-shadow', '0px 3px 6px -4px rgba(34, 60, 80, 0.33)') : ''