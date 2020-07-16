$('.select').each(function(){
    // Variables
    let currentPriceTab = $('.nutrition-program__content_bottom_current-price')
    currentPriceTab.text('0')
    let oldPriceTab = $('.nutrition-program__content_bottom_old-price')
    oldPriceTab.text('')
    var $this = $(this),
        selectOption = $this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        dur = 500;

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>',{
        class: 'select__gap',
        text: 'Выбрать'
    }).insertAfter($this);

    var selectGap = $this.next('.select__gap'),
        caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>',{
        class: 'select__list'
    }).insertAfter(selectGap);

    var selectList = selectGap.next('.select__list');
    //let dataValuePriceTagArr = []
    //let dataValuePriceTag;
    // Add li - option items
    for(var i = 0; i < selectOptionLength; i++){
        $('<li>',{
            class: 'select__item',
            html: $('<span>',{
                text: selectOption.eq(i).html()
            })
        })
            .attr('data', selectOption.eq(i).val())
            .attr('data-value-price', $('option[data-value-price]')[i].getAttribute('data-value-price'))
            .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');
    selectList.slideUp(0);
    selectGap.on('click', function(){

        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            selectList.slideDown(dur);

            selectItem.on('click', function(){
                var chooseItem = $(this).data('data-value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectGap.text($(this).find('span').text());
                selectGap.attr('data-value-price', $(this).attr('data-value-price'))

                currentPriceTab.text(selectGap.attr('data-value-price') - 0).append('₽');

                oldPriceTab.text(selectGap.attr('data-value-price') - 500 ).append('₽');

                selectList.slideUp(dur);
                selectGap.removeClass('on');

                $(this).closest('.select__list').find('li').each(function () {
                    $(this).removeClass('active');
                })

                $(this).addClass('active');

            });


        } else {
            $(this).removeClass('on');
            selectList.slideUp(dur);
        }

    });
    $('.tab').on('click', ()=>{
        currentPriceTab.text(''), oldPriceTab.text(''), $('.select__gap').text('Выбрать')
    })
});


