initPlans();

//disable click event on bootstrap buttons



function initPlans() {

    function inithover() {

        $('[data-hover]').hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    }

    $('[data-hover]').click(function () {

        if ($(this).hasClass('selected')) {
            $('[data-hover]').off('hover').removeClass('selected');
            inithover();
        } else {
            $('[data-hover]').removeClass('selected');
            $(this).removeClass('hover').addClass('selected').off('hover');
        }
        
    });


    inithover();
}

