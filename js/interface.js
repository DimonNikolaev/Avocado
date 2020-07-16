function openAndCloseModal(elemCLickOpen, eleOpenAndClose, eleClickClose = $('.close-button'), ){

    elemCLickOpen.click(()=>{
        eleOpenAndClose.addClass('active-modal')
    })

    eleClickClose.click(()=>{
        eleOpenAndClose.removeClass('active-modal')
    })
}

openAndCloseModal($('.header-min__link'), $('.form-wrapper-all-call'));
openAndCloseModal($('.main__btn'), $('.form-wrapper-all-prob'));
