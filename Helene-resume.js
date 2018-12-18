// ======================================== scroll down ====================================== //
let onScroll = function() {
  let sections = $('section')

  sections.each(function(i, section) {
    let scroll = $(document).scrollTop()

    if (scroll > $(section).offset().top - $(window).height()) {  
      $(section).children('.section-wrapper').addClass('scroll')
    }
    else {
      $(section).children('.section-wrapper').removeClass('scroll')
    }
  
    $('section').each(function(i) {
      if (($(this).offset().top - $(window).height() + 200) <= scroll) {
        console.log('test')
          $('.side-menu a.active').removeClass('active')
          $('.side-menu a').eq(i).addClass('active')
      }
    })  
  })
}
// =========================================================================================== //
  
// ====================================== scroll to on click ================================= //  
let onClick = function() {
  $('.home__button').click(function(e)  {      
    let position = $($(this).attr('href')).offset().top
    $('html').animate(
      { scrollTop: position },
      500,
    )
  })  

  $('.side-menu__circle').click(function(e)  {      
    let position = $($(this).attr('href')).offset().top
    $('html').animate(
      { scrollTop: position },
      500,
    )
  }) 
}
// =========================================================================================== //
  
$(document).ready(function(){
  onScroll()
  onClick()
  onClickSideMenu()
})

$(window).scroll(onScroll)