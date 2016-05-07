
setTimeout(function() {

    $('.message .close')
        .on('click', function() {
            $(this)
                .closest('.message')
                .transition('fade')
            ;
        });

    $('.ui.dropdown')
        .dropdown();

    $('.ui.initialize.accordion')
        .accordion();

    $('.hasPopup')
        .popup()
    ;
    
}, 100);