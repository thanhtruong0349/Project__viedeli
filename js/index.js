$(document).ready(function(){
    
    $("#search-icon").click(function(){
        if($("#search").hasClass("show")){
            $("#search").hide();
        }else{
            $("#search").addClass("show");
            $("#search").show();
        }
    });
       
    $('#main-slide').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
//        items: 1,
        dots: true,
        center: true,
  //      startPosition: 1,
  //      URLhashListener: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:1,
                nav: true
            },
            1000:{
                items:1,
                nav: true
            }
        }
    });

    $('#partnerSlider').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],

        dots: true,
        center: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
                nav: true
            },
            600:{
                items:4,
                nav: true
            },
            1000:{
                items:4,
                nav: true
            }
        }
        
    });
    $('.partner-box').on('drag.owl.carousel', function(){
    });

    //validate form

    $("#commentForm").validate({

        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            // compound rule
            email: {
            required: true,
            email: true
            },
            phone:{
                required: true,
                tel:true
            }
           
        },
        messages: {
            name: "Vui l??ng nh???p t??n",
            email: {
            required: "Vui l??ng nh???p email",
            email: "?????a ch??? email kh??ng h???p l???"
            },
            phone:{
                required:"Vui l??ng nh???p s??? ??i???n tho???i" ,
                tel:"S??? ??i???n tho???i kh??ng h???p l???"
            }
        },
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
          
            alert('Validate th??nh c??ng');
         
        }
        
    });

  
});