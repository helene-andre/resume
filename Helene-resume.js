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
      let prevSection = $(sections[i - 1])
      let prevSectionTop = prevSection.length ? prevSection.offset().top : 0
      let scroll = $(document).scrollTop()
  
      if (scroll > $(section).offset().top - $(window).height() + 200) {  
        $(section).children('.section-wrapper').addClass('scroll')
      }
      else {
        $(section).children('.section-wrapper').removeClass('scroll')
      }
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
  
    $('.side-menu__element--circle').click(function(e)  {      
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
  })
  $(window).scroll(onScroll)