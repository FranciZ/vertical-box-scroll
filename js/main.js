
function initialState(){

    var boxes = $('.scroll-content-box');

    $.each(boxes, function(i, elem){

        var $box = $(elem);

        var scrollTop = $('body').scrollTop();
        var top = $box.offset().top - scrollTop;

        $box.attr('top', top);
        $box.find('.scroll-parallax-box').attr('top', top);

    });

}

initialState();

function onFrame(){

    var scrollTop = $('body').scrollTop();
    var boxes = $('.scroll-parallax-box');
    var contentBoxes = $('.scroll-content-box');

    $('.content-container').css({
        transform:'translate3d(0px,-'+scrollTop+'px,0px)'
    });

    $.each(contentBoxes, function(i, elem){

        var $contentBox = $(elem);

        var boxTop = $contentBox.attr('top');
        var factor = $contentBox.attr('factor');
        var scrollTop = $('body').scrollTop();

        var centerOffset = boxTop - scrollTop - $(window).height()/2+$contentBox.outerHeight()/2;

        var centerRatio = centerOffset/$(window).height()*2;



        var scale = (1-centerRatio/4);

        $contentBox.css({
            transform:'translate3d(0px,'+centerRatio*factor+'px,0px)'
        });


        if(scale > 0){

            $contentBox.css({

                //scale:scale

            });

        }

    });

    $.each(boxes, function(i, elem){

        var $box = $(elem);

        var boxTop = $box.attr('top');
        var factor = $box.attr('factor');
        var scrollTop = $('body').scrollTop();

        var centerOffset = boxTop - scrollTop - $(window).height()/2+$box.outerHeight()/2;

        var centerRatio = centerOffset/$(window).height()*2;

        $box.css({
            transform:'translate3d(0px,'+centerRatio*factor+'px,0px)'
        });

    });

    requestAnimationFrame(onFrame);

}

onFrame();