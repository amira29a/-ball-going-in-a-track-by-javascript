jQuery(function () {
        var moved = false;
        var movedPosition1 = false;
        var movedPosition2 = false;
        var movedPosition3 = false;
    jQuery(window).scroll(function () {
        var scroll_position = jQuery(window).scrollTop();
        if (scroll_position < 1620 && moved == true){
            moved = false;
            movedPosition1 = false;
            movedPosition2 = false ;
            movedPosition3 = false;
            jQuery('#ball-container').animate({
                left: '23%',
                top: '34.6%'
            }, 'slow')
            jQuery("#ball-container, #ball-container *").css({ width: '80px'});
        }
        console.log("TOP", scroll_position);
        if (scroll_position > 1620 && scroll_position < 2000 && movedPosition1 == false){
            moved = true;
            movedPosition1 = true;
            movedPosition2 = false;
            movedPosition3 = false;
            jQuery('#ball-container').animate({
                left: '50%',
                top: '45.6%'
            }, 'slow')
            jQuery("#ball-container, #ball-container *").css({ width:'115px'});
        }
        if (scroll_position > 2000 && scroll_position < 2900 && movedPosition2 == false){
            moved = true;
            movedPosition1 = false;
            movedPosition2 = true;
            movedPosition3 = false;
            jQuery('#ball-container').animate({
                left: '72%',
                top: '56.5%'
            }, 'slow')
            jQuery("#ball-container, #ball-container *").css({ width:'180px'});
        }
        if (scroll_position > 2900 && movedPosition3 == false){
            moved = true;
            movedPosition1 = false;
            movedPosition2 = false;
            movedPosition3 = true;
            jQuery('#ball-container').parent().css({overflow: 'hidden'});
            jQuery('#ball-container').animate({
                left: '90%',
                top: '71%'
            }, 'slow')
            jQuery("#ball-container, #ball-container *").css({ width:'300px'});
        }
    })
});
 
