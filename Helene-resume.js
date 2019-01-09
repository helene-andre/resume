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
// =========================================================================================== //

// ===================================== form validation ===================================== //
let initFormValidation = function() {
  let fields = $('.contact-form__field')
  let form = $('.contact-form__wrapper')

  form.submit(function(e) {
    let formErrors = 0
    
    fields.each(function(i) {
      validateField(fields[i])
      formErrors += $(fields[i]).val().length ? 0 : 1 
    })
    
    // If no error, send form via ajax.
    if (!formErrors) {
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: form.serialize(), 
        success: function(data) {
          $('.contact__success-message').addClass('show')
          setTimeout( function () {
            $('.contact__success-message').removeClass('show')
          }, 2000)
        }
      })
      e.preventDefault()
      $(fields).removeClass('correct-field')
      $(fields).val('') 
    } 
    return false
  })  
  
  // Validate fields on keyup.
  fields.on('keyup', function() {
    validateField(this)
  })
}

// ================================== validate form fields =================================== //
function validateField (field) {
  if ($.trim($(field).val()) === '') {
    $(field).next('.contact-form__error-message').addClass('show')
    $(field).addClass('empty-field')
    $(field).removeClass('correct-field')
  }
  else if ($.trim($(field).val()) !== '') {
    $(field).removeClass('empty-field')
    $(field).addClass('correct-field')
    $(field).next('.contact-form__error-message').removeClass('show')
  }
  return false
}
// =========================================================================================== //


$(document).ready(function() {
  onScroll()
  onClick()
  initFormValidation()
})

$(window).scroll(onScroll)