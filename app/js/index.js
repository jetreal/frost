// var scrolled;
window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scroll').innerHTML = scrolled + 'px';
}
$(window).on('load resize', function(){
	var width = $('html').outerWidth();
	var height = $(window).height();
	$('#width').html(width + 'px');
    $('#height').html(height + 'px');
});




$('#review-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:1
      },
      1170:{
          items:2
      }
  }
})

$('#gallery-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1170:{
            items:3
        }
    }
  })

  $('#certified-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1170:{
            items:5
        }
    }
  })

$(document).ready(function() {
    $(window).on('load resize', function() {
        if ($('.header').css('grid-template-columns').length < 27) {
            $(".header__input").insertAfter($('.header-phone'))
        } else {
            $(".header__input").insertAfter($('.header__logo'))
        }

    })
})


$(document).ready(function() {
    $('.navBar__toggle').on('click', function() {
        $('.navBar').toggle('height')
    })
})

$(document).ready(function() {
    $('.navBar ul li').on('click', function() {
        if ($('.navBar ul').css('grid-template-columns').length < 28) {
            $('.navBar__toggle').triggerHandler('click')
        }
        $('.navBar ul li').removeClass('navBar__active-li')
        $(this).addClass('navBar__active-li')


    })
})

$(document).ready(function() {
    $(window).on('resize', function() {
        switch(true) {
            case($('.navBar ul').css('grid-template-columns').length > 18): {
                $('.navBar').css('display', 'grid')
       
            }
                break;
            case($('.navBar ul').css('grid-template-columns').length < 18): {
                $('.navBar').css('display', 'none')
            }
                break;
        }
       
    })
})

let showHiddenMenu = function() {
    $('.navBar2__hidden-menu').slideToggle()
    $('.navBar2__hidden-menu p')
}


$(document).ready(function() {
    $('#navBar2-id1, .navBar2__hidden-menu p').on('click', showHiddenMenu)
})


var showLinkMenu = function() {
    $('.navBar2__arrow').eq(this.id.slice(-1)-1).css('transform', 'rotateZ(90deg)')
}

var hideLinkMenu = function() {
    $('.navBar2__arrow').css('transform', 'rotateZ(0deg)')
}

$(document).ready(function() {
    $('.navBar2-row').hover( showLinkMenu, hideLinkMenu)
})
