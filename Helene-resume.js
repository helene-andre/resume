// =================================== side menu animation =================================== //
$(document).ready(function() {
  $('.side-menu__element--circle').click(function () {
      $(this).addClass('active')
      $('.side-menu__element--circle').not(this).removeClass('active')
  })
})
// =========================================================================================== //

// ======================================== scroll down ====================================== //
let onScroll = function() {
  let sections = $('section')

  sections.each(function(i, section) {
    var prevSection = $(sections[i - 1])
    var prevSectionTop = prevSection.length ? prevSection.offset().top : 0
    var scroll = $(document).scrollTop()

    if (scroll > $(section).offset().top - $(window).height() + 200) {
      console.log(scroll, $(section).offset().top + 100)

      $(section).children('.sub-section').addClass('scroll')
    }
    else {
      $(section).children('.sub-section').removeClass('scroll')
    }
  })
}
// =========================================================================================== //

// ====================================== scroll to on click ================================= //  

let onClick = function() {
  $('.home__button').click(function(e)  {
    e.preventDefault()
    
    console.log($(this).attr('href'))
    var position = $($(this).attr('href')).offset().top

    $('html').animate(
      { scrollTop: position },
      500,
      function () {
        $('.sub-section').addClass('move-up')
      }
    )
  })  

  $('.side-menu__element--circle').click(function(e)  {
    e.preventDefault()
    
    console.log($(this).attr('href'))
    var position = $($(this).attr('href')).offset().top

    $('html').animate(
      { scrollTop: position },
      500,
      function () {
        $('.sub-section').addClass('move-up')
      }
    )
  }) 
}



// =========================================================================================== //

$(document).ready(function(){
  onScroll()
  onClick()
})
$(window).scroll(onScroll)