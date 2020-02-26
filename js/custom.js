/*global $, console,alert*/
$(function () {

    'use strict';
    //nice Scroll
    $("html").niceScroll();
    
    $('.carousal').carousel({
        interval: 6000
    });
    
    
    
   
    
    
    
    
    //Jquery Practice


/*
   // calcult body padding depend on navbar height

    $('body').css('paddingTop',$('.navbar').innerHeight());

    //smothy scroll to element

  
    //add class active and remove from siblings

    $('.navbar li a').click(function(){

        //$('.navbar a').removeClass('active');

        //$(this).addClass('active');

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });



    $(window).scroll(function(){
      //syn navbar with scroll section

      $('.block').each(function(){

        if($(window).scrollTop() > $(this).offset().top){


          var blockID = $(this).attr('id');

          $('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active').parent().siblings().find('a').removeClass('active');

        }

      });

      //Scroll To Top
      var scrollToTop = $('.scroll-to-top')

      if($(window).scrollTop() >= 1000){

        scrollToTop.slideDown(600);

      }else{

        scrollToTop.slideUp(600);
      }

    });

    //Click The Button To Go Up

    $('.scroll-to-top').click(function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop: 0

      }, 2000)


    });

    //Poupup

    $('.show-poupup').click(function (e) {

      e.preventDefault();

      $('.poupup').slideDown();

    });

    $('.poupup').click(function () {

      $(this).slideUp();

    });

    $('.poupup .inner').click(function (e) {

      e.stopPropagation();
    });


    $(document).keydown(function (e) {

      if(e.keyCode == 27){

        $('.poupup').slideUp();
      }
    });

    //Buttons effects

    $('.from-left').hover(function () {

      $(this).find('span').eq(0).animate({

        width:'100%'

      }, 300)

    }, function () {

      $(this).find('span').eq(0).animate({

        width:0

    }, 300);

  });

  $('.from-top').hover(function () {

    $(this).find('span').eq(0).animate({

      height:'100%'

    }, 300)

  }, function () {

    $(this).find('span').eq(0).animate({

      height:0

  }, 300);

});

  //Animated Progress

  $('.animated-progress span').each(function () {

    $(this).animate({

      width: $(this).attr('data-progress') + '%'

    }, 1000);


  });*/


});
