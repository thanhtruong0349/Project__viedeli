$(document).ready(function(){
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
            name: "Vui lòng nhập tên",
            email: {
            required: "Vui lòng nhập email",
            email: "Địa chỉ email không hợp lệ"
            },
            phone:{
                required:"Vui lòng nhập số điện thoại" ,
                tel:"Số điện thoại không hợp lệ"
            }
        },
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
          
            alert('Validate thành công');
         
        }
    });
});