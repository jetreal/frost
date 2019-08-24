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
    $('.navbar__a3').attr('href','/_pug_pages/guarantees.html')
    // $('.navBar ul li').triggerHandler('click')
  })
})

var addActiveClass = function() {
  
  $('.navBar ul li').removeClass('navBar__active-li');
  $('.navBar ul li').eq(0).addClass('navBar__active-li');
}
$(window).on('load', function() { 
  addActiveClass()
})

$(document).ready(function() { 
$('.navBar ul li').on('click', addActiveClass );
});