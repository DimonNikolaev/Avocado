$('.select').each(function(){
    // Variables
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
        text: '7 дней - 621р./день'
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


        console.log( $('option[data-value-price]')[i].getAttribute('data-value-price'))
        //dataValuePriceTag = $(selectOption).eq(i)['0'].getAttribute('data-value-price')

        //dataValuePriceTagArr.push(dataValuePriceTag)

        //let selectOptionText = selectOption.eq(i).find('span').text();

        //selectOptionText = dataValuePriceTagArr[i]

        //document.querySelectorAll('.nutrition-program__content_bottom_current-price').forEach((item)=>{
           // item.textContent   = dataValuePriceTagArr[i]
        //})

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

                $('.nutrition-program__content_bottom_current-price').text($(this).html())

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

});


// let selectItem = document.querySelectorAll('.select__item');
// let selectGapText = $('.selectGap').html();
//
// selectItem.forEach(item=>{
//     $(item).removeClass('active');
//     $(item).addClass('active');
//
// })