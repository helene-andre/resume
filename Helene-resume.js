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
          $('.side-menu a.active').removeClass('active')
          $('.side-menu a').eq(i).addClass('active')
      }
    })  
  })
}
// =========================================================================================== //
  
// ====================================== scroll to on click ================================= //  
let onClick = function() {
  $('.home__button').click(function(e) {      
    let position = $($(this).attr('href')).offset().top
    $('html').animate(
      { scrollTop: position },
      500,
    )
  })  

  $('.side-menu__circle').click(function(e) {      
    let position = $($(this).attr('href')).offset().top
    $('html').animate(
      { scrollTop: position },
      500,
    )
  }) 
}

// ===================================== form validation ===================================== //

let formValidation = function() {
  $.ajax({
    type: 'POST',
    url: 'contact.php',
    success: function() {
      $('.contact-form__wrapper').submit(function(e) {
    
        let fields = $('.contact-form__field')
        let formErrors = 0
        
        fields.each(function(i) {
          $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val().length ? 'removeClass' : 'addClass']('show-error-message');
          formErrors += $(fields[i]).val().length ? 0 : 1    
        })
    
        return !formErrors
      })  
    }
  })
  return false



  // $('.contact-form__wrapper').submit(function(e) {
    
  //   let fields = $('.contact-form__field')
  //   let formErrors = 0
    
  //   fields.each(function(i) {
  //     $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val().length ? 'removeClass' : 'addClass']('show-error-message');
  //     formErrors += $(fields[i]).val().length ? 0 : 1    
  //   })

  //   return !formErrors
  // })  
}

// =========================================================================================== //
  
$(document).ready(function() {
  onScroll()
  onClick()
  formValidation()
})

$(window).scroll(onScroll)