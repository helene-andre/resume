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
      let scroll = $(document).scrollTop()
  
      if (scroll > $(section).offset().top - $(window).height() + 200) {  
        $(section).children('.section-wrapper').addClass('scroll')
      }
      else {
        $(section).children('.section-wrapper').removeClass('scroll')
      }
    })
  }

  // let onScrollActiveState = function() {
  //   let sideMenuCircle = $('.side-menu__element--circle')

  //   sideMenuCircle.each(function(i,sideMenuCircle) {
  //     if ($('section').hasclass('scroll')) {
  //       sideMenuCircle[i].addClass('active')
  //     }

  //     else { 
  //       sideMenuCircle[i].removeClass('active')
  //     }

  //   })
  // }

  function onScrollActiveState(event) {
    var scrollPos = $(document).scrollTop();
    $('.side-menu__element--circle').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.side-menu__element--circle')[i].removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
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
    onScrollActiveState()
  })
  $(window).scroll(onScroll)