$(document).ready(function() {
  $(window).on('load', function() {
    $('.navbar__a2').attr('href', '#')
    $('.navbar__a').attr('href', '/_pug_pages/contacts.html')
    $('.navBar ul li').triggerHandler('click')  })
})


$(document).ready(function() {
  $('.navBar ul li').on('click', function(е) {
    $('.navBar ul li').removeClass('navBar__active-li')
    $('.navBar ul li').eq(1).addClass('navBar__active-li')
  })
})