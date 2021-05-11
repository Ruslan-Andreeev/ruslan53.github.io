$(document).ready(function(){

    /**burger */
  
    
    $( '.burger' ).click( function() {
        $( '.header__nav' ).slideToggle(100);
        $('.header__link').slideToggle(100);
        $(this).toggleClass('burger-active');
    });
    


    /**burger */



    /**скрол при моб версии фикс шапку */
   

    
    var header = $('.header__bot');
    $(window).scroll(function() {
   if($(this).scrollTop() > 40) {
    header.addClass('header-fixed');
    

   } 
   else{
       header.removeClass('header-fixed');
    
    
   }
   
   
 });


    /**скрол при моб версии фикс шапку */




    /**click modal */
    $('.hero__btn').click(function(){
        $('.modal').show(500);
        $('.overlay').fadeIn();
    });
    $('.modal-close').click(function(){
        $('.modal').hide(500);
        $('.overlay').fadeOut();
    });

    /**click modal */
    


   



    /**tab     */
  
     
    
    $('.m-count').on('input',function () {
      $('.calc-count').empty().append($(this).val()); 
      calc();  /*для ренджа изменение текста */
    });


    /**для увелечения табов  popup*/
    $('.gallery__wrap-item').click(function(){
        var imgSrc = $(this).children().attr("src");
        $('.popup img').attr({src: imgSrc});
        $('.popup img').fadeIn(500);
        $('.overlay').fadeIn();
        $('.overlay').click(function(){
            $(this).hide();
            $('.popup img').fadeOut(100);
        });
        $('.popup img').click(function(){
            $('.overlay').fadeOut();
            $(this).fadeOut(100);
        });
    });
     /** the end tab */  

     /**наведение на виды потлков */
    
        $('.slide-menu').hover(function(){
            $('.menu').fadeIn(50);

        },function(){
            $('.menu').fadeOut(100);

        });

    
        

    /**the end */

    

    


    var lightings = $('.lightings'),      //светильники
        price = $('#price'),         //сколко рублей
        mCount = $('.m-count'),   //метры квадратные
        finalPrice = 24800,
        inputRadio = 400,
        lighting = 350,
        radioVal = 400,
        corner = 0;
        


    $('.lightings').on('change', function() {
        calc();
    });

    $('.m-count').on('input',function() {
        calc();
    });

    $('input[name="ceiling"]').on('click', function() {
        if ($(this).val() == 1) {
            radioVal = 400;
        } else {
            radioVal = 900;
        }    
           calc();
    });
    

    $('.corners').on('change', function() {
        calc();      
    });

    var calc = function () { 
        if ($('.corners').val() <= 4) {
            corner = 0;          
        } else
        {   
            corner = $('.corners').val() * 200 - 800;
        }

        finalPrice = (+$('.m-count').val() * +radioVal) + (+$('.lightings').val() * +lighting) + (+corner); /* плюс угол */

        price.text(finalPrice);
        console.log();
     };

    $(document).on('click', '.minus', function() {
        var minus = $(this).next();
        if (minus.val() > 1) {
            minus.val(+minus.val() - 1);
            
        }
        $(this).next().trigger('change');

    });
    $(document).on('click', '.plus', function() {
        var plus = $(this).prev();
        

        plus.val(+plus.val() + 1);

        $(this).prev().trigger('change');
        
    });                               
    });
// угол 200 более 4ырех
//  светильник 350 
//  ткань 900 //  остальные 400
$(document).ready(function(){
	
    var loadBtn = $('.gallery-btn');
    
	$('.gallery__cats-item').click(function(e){
        
		e.preventDefault();
		$('.gallery__cats-item').removeClass('gallery__cats-item--active');
		$('.gallery__wrap').removeClass('gallery__wrap-item--active');
        $(this).addClass('gallery__cats-item--active');
        $($(this).attr('href')).addClass('gallery__wrap-item--active'); 
        loadBtn.show();
      
        
            $('.gallery__wrap').removeClass('active-gallery');
       
           
        
        $('.gallery__cats-item').click(function(){
           
        });
        
	});
    
    
    $('.gallery__cats-item:first').click();
    
        loadBtn.click(function() {
            $('.wrapper').parent('.gallery__wrap').addClass('active-gallery');


            
            /**для глянца */
            $('.wrapper').parent('.gallery__wrap-views').addClass('active-gallery')/**для глянца */; 
            
            

        
            loadBtn.hide();
        });           
     
        });
$(document).ready(function(){
 var playerOne;
        $('.video__play-one').on('click', function onYouTubeIframeAPIReady(){
            playerOne = new YT.Player('player-one', {
            height: '210px',
            width: '100%',
            videoId: 'dINaRUR98AA',
            events: {
                'onReady': videoPlay
                
    }
        });
    });
     function videoPlayOne() {
            playerOne.videoPlayOne();
        }
    
        var playertwo;
        $('.video__play-two').on('click', function onYouTubeIframeAPIReady(){
            playerTwo = new YT.Player('player-two', {
            height: '210px',
            width: '100%',
            videoId: 'dINaRUR98AA',
            events: {
                'onReady': videoPlay
                
    }
        });
    });
     function videoPlayTwo() {
            playerTwo.videoPlayTwo();
        }
        var playerThree;
        $('.video__play-three').on('click', function onYouTubeIframeAPIReady(){
            playerThree = new YT.Player('player-three', {
            height: '210px',
            width: '100%',
            videoId: 'dINaRUR98AA',
            events: {
                'onReady': videoPlay
                
    }
        });
    });
     function videoPlay() {
            playerThree.videoPlay();
        }




        /***плавные якоря */
  
     
     $('a[href^="#"]').click(function(){ // #1
    var anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
    scrollTop:  $(anchor).offset().top  // #4
    }, 300);                            // #5
});



});      
        
        

            
   

