// $(document).ready(function() {
//   $(window).on('load resize', reduceMap)
// })

// var reduceMap = function() {
//   if ($(window).outerWidth() < 720) {
    
//   }
// }


$(document).ready(function() {
  $(window).on('load', function() {
    $('.navbar__a').attr('href','#')
    $('.navbar__a2').attr('href','/_pug_pages/about.html')
    $('.navBar ul li').triggerHandler('click')
  })
})

$(document).ready(function() {
  $('.navBar ul li').on('click', function(е) {
    $('.navBar ul li').removeClass('navBar__active-li')
    $(this).addClass('navBar__active-li')
  })
})