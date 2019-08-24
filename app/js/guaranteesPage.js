$(document).ready(function() {
  $(window).on('load', function() {
    $('.navbar__a3').attr('href', '#')
    $('.navbar__a').attr('href', '/_pug_pages/contacts.html')
    $('.navbar__a2').attr('href', '/_pug_pages/about.html')
    // $('.navBar ul li').triggerHandler('click')  })
})
})

var addActiveClass = function() {
  
    $('.navBar ul li').removeClass('navBar__active-li');
    $('.navBar ul li').eq(2).addClass('navBar__active-li');
  }
  $(window).on('load', function() { 
    addActiveClass()
  })


$(document).ready(function() { 
  $('.navBar ul li').on('click', addActiveClass );
});