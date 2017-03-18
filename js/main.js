$(function () {
    //fullpage.js setup
    $('#fullpage').fullpage({
        anchors:['page1','page2','page3','page4','page5'],
        navigation:true,
        autoScrolling:true,
        afterLoad: function (link, index) {
            switch (index) {
                case 1:
                    move('.face').set('opacity','1').end();
                    move('.text-container .my-name').ease('in-out').delay('0.1s').set('opacity','1').end();
                    move('.text-container .name').ease('in-out').delay('0.3s').set('opacity','1').end();
                    move('.text-container .en-name').ease('in-out').delay('0.5s').set('opacity','1').end();
                    move('.text-container hr').ease('in-out').delay('0.7s').set('opacity','1').end();
                    move('.text-container .intro').ease('in-out').delay('0.9s').set('opacity','1').end();
                    break;
                case 2:
                    move('.sec2-h').set('opacity','1').end();
                    $('.normal .panel-body').eq(0).animate({
                        left:0
                    });
                    $('.inverted .panel-body').eq(0).animate({
                        right:0
                    },500);
                    $('.normal .panel-body').eq(1).animate({
                        left:0
                    },1000);
                    $('.inverted .panel-body').eq(1).animate({
                        right:0
                    },1500);
                    $('#timeline,.group2014,.group2015,.group2016,.badge-txt').animate({
                       opacity:1
                    },500);
                    break;
                case 3:
                    setTimeout(function(){
                        var myCircle = Circles.create({
                            id: 'circles-1',
                            radius: 60,
                            value: 85,
                            maxValue: 100,
                            width: 13,
                            text: function (value) {
                                return value + '%';
                            },
                            colors: ['#FCE6A4', '#EFB917'],
                            duration: 400,
                            textClass:'circles-text'
                        });
                        var myCircle = Circles.create({
                            id: 'circles-2',
                            radius: 60,
                            value: 75,
                            maxValue: 100,
                            width: 13,
                            text: function (value) {
                                return value + '%';
                            },
                            colors: ['#BEE3F7', '#45AEEA'],
                            duration: 400
                        });
                        var myCircle = Circles.create({
                            id: 'circles-3',
                            radius: 60,
                            value: 65,
                            maxValue: 100,
                            width: 13,
                            text: function (value) {
                                return value + '%';
                            },
                            colors: ['#F8F9B6', '#D2D558'],
                            duration: 400
                        });
                        var myCircle = Circles.create({
                            id: 'circles-4',
                            radius: 60,
                            value: 70,
                            maxValue: 100,
                            width: 13,
                            text: function (value) {
                                return value + '%';
                            },
                            colors: ['#F4BCBF', '#D43A43'],
                            duration: 400
                        });
                    },800);
                    move('.sec3-h').set('opacity','1').end();
                    move('.box-1').delay(600).set('left','0').end();
                    move('.box-2').delay(400).set('left','0').end();
                    move('.box-3').delay(200).set('left','0').end();
                    move('.box-4').set('left','0').end();
                    move('.box-1 .skill-text').delay(600).set('opacity','1').end();
                    move('.box-2 .skill-text').delay(400).set('opacity','1').end();
                    move('.box-3 .skill-text').delay(200).set('opacity','1').end();
                    move('.box-4 .skill-text').set('opacity','1').end();
                    $('.skill-text').fadeIn();
                    break;
                case 4:
                    move('.sec4-h').set('opacity','1').end();
                    move('.projects').scale(1).end();
                    break;
                case 5:
                    move('.sec5-h').set('opacity','1').end();
                    move('.github').rotate(360).end();
                    move('.linkedin').delay(100).rotate(360).end();
                    move('.mail').delay(200).rotate(360).end();
                    move('.facebook').delay(300).rotate(360).end();
                    break;
            }
        },
        onLeave: function (index){
            switch (index){
                case 1:
                    move('.face').set('opacity','0').end();
                    move('.text-container .my-name').set('opacity','0').end();
                    move('.text-container .name').set('opacity','0').end();
                    move('.text-container .en-name').set('opacity','0').end();
                    move('.text-container hr').set('opacity','0').end();
                    move('.text-container .intro').set('opacity','0').end();
                    break;
                case 2:
                    var width = $(window).width();
                    $('.normal .panel-body').animate({
                        left:- width
                    });
                    $('.inverted .panel-body').animate({
                        right:- width
                    });
                    $('#timeline').animate({
                        opacity:0
                    });
                    move('.sec2-h').set('opacity','0').end();
                    break;
                case 3:
                    move('.sec3-h').set('opacity','0').end();
                    move('.box-1').set('left','-200%').end();
                    move('.box-2').set('left','-200%').end();
                    move('.box-3').set('left','-200%').end();
                    move('.box-4').set('left','-200%').end();
                    move('.box-1 .skill-text').set('opacity','0').end();
                    move('.box-2 .skill-text').set('opacity','0').end();
                    move('.box-3 .skill-text').set('opacity','0').end();
                    move('.box-4 .skill-text').set('opacity','0').end();
                    $('.skill-text').fadeOut();
                    break;
                case 4:
                    move('.sec4-h').set('opacity','0').end();
                    move('.projects').scale(0).end();
                    break;
                case 5:
                    move('.sec5-h').set('opacity','0').end();
                    move('.github').rotate(-360).end();
                    move('.linkedin').rotate(-360).end();
                    move('.mail').rotate(-360).end();
                    move('.facebook').rotate(-360).end();
                    break;
            }
        }
    });
    //PFold setup
    var $container = $( '#uc-container' ),
        pfold = $container.pfold({
            easing : 'ease-in-out',
            folds : 3,
            folddirection : ['left','bottom','right'],
            centered:true
        });

    $container.find( 'span.clickme' ).on( 'click', function() {

        pfold.unfold();

    } ).end().find( 'span.close' ).on( 'click', function() {

        pfold.fold();

    } );
});