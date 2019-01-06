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
  $('.contact-form__wrapper').submit(function(e) {
    if ($.trim($('.contact-form__field').val()) === '') {
      fieldsVlidation()  
      return false
    }
    else if ($.trim($('.contact-form__field').val()) !== '') {
      $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: $('.contact-form__wrapper').serialize(), 
        success: function(data) {
          alert(data)
        }
      })
      e.preventDefault()
    }          
  })  
  
  $('.contact-form__field').keyup(function() {
    fieldsVlidation()
  })

  let fieldsVlidation = function() {
    let fields = $('.contact-form__field')
    let formErrors = 0
    // let nameRegex = '/^[a-z0-9_-]{3,16}$/'
    if ($.trim($('#name').val()) === '' || $.trim($('#email').val()) === '' || $.trim($('#subject').val()) === '' || $.trim($('#message').val()) === '') {
      fields.each(function(i) {
          $(fields[i]).next('.contact-form__error-message')[$(fields[i]).val().length ? 'removeClass' : 'addClass']('show-error-message');
          $(fields[i])[$(fields[i]).val().length ? 'removeClass' : 'addClass']('empty-field');
          $(fields[i])[$(fields[i]).val().length ? 'addClass' : 'removeClass']('correct-field');
          formErrors += $(fields[i]).val().length ? 0 : 1    
      })
      return !formErrors 
    }
    else if ($.trim($('.contact-form__field').val()) !== '') {
      $(fields).removeClass('empty-field')
      $(fields).addClass('correct-field')
      $('.contact-form__error-message').removeClass('show-error-message')
    }
  }
}
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