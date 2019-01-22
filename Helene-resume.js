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
let initOnClick = function() {
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

// =============================== projects section on click ================================= //  

let projectsOnClick = function() {
  $('.project__button').click(function(e) {
    let projectDescription = $(this).next('.project__description')
    if (projectDescription.hasClass('show')) {
      projectDescription.removeClass('show')
      $('.project__mask').removeClass('show')
      $('.project__button').removeClass('z-index-up')
      $('.project__button--title').removeClass('hide')
    }
    else if ($(window).width() >= 768) {
      projectDescription.addClass('show')
      $('.project__mask').addClass('show')
      $(this).addClass('z-index-up')
      $('.project__button--title').addClass('hide')
    }
  })

  $('.project__description--close').click(function(e) {
    $('.project__description').removeClass('show')
    $('.project__mask').removeClass('show')
    $('.project__button').removeClass('z-index-up')
    $('.project__button--title').removeClass('hide')
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
      formErrors += validateField(fields[i]) ? 0 : 1 
    })
    // If no error, send form via ajax.
    if (!formErrors) {
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: form.serialize(), 
        success: function(data) {
          data = JSON.parse(data)

          if (!data.error) {
            $(fields)
              .removeClass('correct-field')
              .val('')

            $('.contact__success-message').addClass('show')
            setTimeout(function() {$('.contact__success-message').removeClass('show')}, 3000);
          }
        },  
        error: function() {
          $('.contact__failed-message').addClass('show')
          setTimeout(function() {$('.contact__failed-message').removeClass('show')}, 4000);
        }  
      })
      e.preventDefault()
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
  fieldWrapper = $(field).parent()
  let fieldValue = $.trim($(field).val())


  if (!fieldValue) {
    fieldWrapper
      .addClass('invalid-field')
      .removeClass('correct-field invalid-email')
    return false 
  }

  // If field is email.
  else if (field.id === 'email' && !/^.+@.+\.[a-zA-Z]{2,}$/.test(fieldValue)) {
    fieldWrapper
      .removeClass('invalid-field correct-field')
      .addClass('invalid-email')
    return false 
  }
  
  else {
    fieldWrapper
      .removeClass('invalid-field invalid-email')
      .addClass('correct-field')
    return true 
  }
}
// =========================================================================================== //


$(document).ready(function() {
  initOnClick()
  initFormValidation()
  projectsOnClick()
})

$(window).scroll(onScroll)