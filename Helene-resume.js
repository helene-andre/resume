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

// ================================= projects slideshow animation ============================= //  
// let slides = []
// let currentSlideIndex = 0

// function initSlideRotation () {
// 	slides = $('.projects__slides-wrapper').children()
// 	currentSlideIndex = slides.length - 1
// 	slides[currentSlideIndex].className = 'active'
// }

// function changeSlide () {
// 	console.log(slides, currentSlideIndex)
// 	let currentSlide = $(slides[currentSlideIndex])
	
// 	currentSlide.addClass('active fade-out')

// 	currentSlideIndex = (slides.length + (currentSlideIndex - 1)) % slides.length
// 	currentSlide.addClass('active')
	
// 	setTimeout(function(){
// 		currentSlide.removeClass('active fade-out')
// 	}, 3000)
// }
// =========================================================================================== //

// ===================================== form validation ===================================== //
let initFormValidation = function() {
  let fields = $('.contact-form__field')
  let formErrors = 0

  $('.contact-form__wrapper').submit(function(e) {
    if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#subject').val()) === '' || $.trim($('#message').val()) === '') {
      fields.each(function(i) {
        $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val().length ? 'removeClass' : 'addClass']('show');
        $(fields[i])[$(fields[i]).val().length ? 'removeClass' : 'addClass']('empty-field');
        $(fields[i])[$(fields[i]).val().length ? 'addClass' : 'removeClass']('correct-field');
        formErrors += $(fields[i]).val().length ? 0 : 1    
      return formErrors
      })
      return false
    }
    else if ($.trim($('.contact-form__field').val()) !== '') {
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: $('.contact-form__wrapper').serialize(), 
        success: function(data) {
          $('.contact__success-message').addClass('show')
          setTimeout( function () {
            $('.contact__success-message').removeClass('show')
          }, 2000)
        }

      })
      e.preventDefault()
      $(fields).removeClass('empty-field')
      $(fields).addClass('correct-field')
      $('.contact-form__error-message').removeClass('show')
    }          
  })  
 

$('#name').keyup(function() {
  if ($.trim($('#name').val()) === '') {
    $('#name').next('.contact-form__error-message').addClass('show')
    $('#name').addClass('empty-field')
    $('#name').removeClass('correct-field')
  }
  else if ($.trim($('#name').val()) !== '') {
    $('#name').removeClass('empty-field')
    $('#name').addClass('correct-field')
    $('#message').next('.contact-form__error-message').removeClass('show')
  }
})

$('#email').keyup(function() {
  if ($.trim($('#email').val()) === '') {
    $('#email').next('.contact-form__error-message').addClass('show')
    $('#email').addClass('empty-field')
    $('#email').removeClass('correct-field')
  }
  else if ($.trim($('#email').val()) !== '') {
    $('#email').removeClass('empty-field')
    $('#email').addClass('correct-field')
    $('#message').next('.contact-form__error-message').removeClass('show')
  }
})

$('#subject').keyup(function() {
  if ($.trim($('#subject').val()) === '') {
    $('#subject').next('.contact-form__error-message').addClass('show')
    $('#subject').addClass('empty-field')
    $('#subject').removeClass('correct-field')
  }
  else if ($.trim($('#subject').val()) !== '') {
    $('#subject').removeClass('empty-field')
    $('#subject').addClass('correct-field')
    $('#message').next('.contact-form__error-message').removeClass('show')
  }
})

$('#message').keyup(function() {
  if ($.trim($('#message').val()) === '') {
    $('#message').next('.contact-form__error-message').addClass('show')
    $('#message').addClass('empty-field')
    $('#message').removeClass('correct-field')
  }
  else if ($.trim($('#message').val()) !== '') {
    $('#message').removeClass('empty-field')
    $('#message').addClass('correct-field')
    $('#message').next('.contact-form__error-message').removeClass('show')
  }
})
  

//   let fieldsValidation = function() {
//     // let nameRegex = '/^[a-z0-9_-]{3,16}$/'
    
//     fields.each(function(i) {
      // if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#subject').val()) === '' || $.trim($('#message').val()) === '') {
      //       $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val() ? 'removeClass' : 'addClass']('show');
      //       $(fields[i])[$(fields[i]).val() ? 'removeClass' : 'addClass']('empty-field');
      //       $(fields[i])[$(fields[i]).val() ? 'addClass' : 'removeClass']('correct-field');
      // }
//       else if ($.trim($(fields).val()) !== '') {
//         $(fields).removeClass('empty-field')
//         $(fields).addClass('correct-field')
//         $('.contact-form__error-message').removeClass('show')
//       }
//     })
//   }
}

// let initFormValidation = function() {
//   $('.contact-form__wrapper').submit(function(e) {
//     if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#subject').val()) === '' || $.trim($('#message').val()) === '') {
//       fieldsValidation()  
//       return false
//     }
//     else if ($.trim($('.contact-form__field').val()) !== '') {
//       $.ajax({
//         type: 'POST',
//         url: 'contact.php',
//         data: $('.contact-form__wrapper').serialize(), 
//         success: function(data) {
//           $('.contact__success-message').addClass('show')
//           setTimeout( function () {
//             $('.contact__success-message').removeClass('show')
//           }, 2000)
//         }

//       })
//       e.preventDefault()
//     }          
//   })  
  
//   $('.contact-form__field').keyup(function() {
//     fieldsValidation()
//   })

//   let fieldsValidation = function() {
//     let fields = $('.contact-form__field')
//     let formErrors = 0
//     // let nameRegex = '/^[a-z0-9_-]{3,16}$/'
//     if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#subject').val()) === '' || $.trim($('#message').val()) === '') {
//       fields.each(function(i) {
//           $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val().length ? 'removeClass' : 'addClass']('show');
//           $(fields[i])[$(fields[i]).val().length ? 'removeClass' : 'addClass']('empty-field');
//           $(fields[i])[$(fields[i]).val().length ? 'addClass' : 'removeClass']('correct-field');
      //     formErrors += $(fields[i]).val().length ? 0 : 1    
      // })
      // return !formErrors 
//     }
//     else if ($.trim($('.contact-form__field').val()) !== '') {
//       $(fields).removeClass('empty-field')
//       $(fields).addClass('correct-field')
//       $('.contact-form__error-message').removeClass('show')
//     }
//   }
// }
// =========================================================================================== //





$(document).ready(function() {
  onScroll()
  onClick()
  initFormValidation()
})

window.onload = function () {
	// initSlideRotation()
	// setInterval(changeSlide, 3000)
}

$(window).scroll(onScroll)