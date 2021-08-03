
$(function(){
    $('header').load('menu_inc.html header > div',function(){   });
    $('footer').load('menu_inc.html footer> fieldset');

    // function div(){
    //     $('header li').on('mo')
    // }

    $('.top').on('click',function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop : 0
        })

    })
});

