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

// ================================= projects slide animation =============================== //  
let slides = []
let currentSlideIndex = 0

function initSlideRotation () {
	slides = $('.projects__slides-wrapper').children()
	currentSlideIndex = slides.length - 1
	slides[currentSlideIndex].className = 'active'
}

function changeSlide () {
	console.log(slides, currentSlideIndex)
	let currentSlide = $(slides[currentSlideIndex])
	
	currentSlide.addClass('active fade-out')

	currentSlideIndex = (slides.length + (currentSlideIndex - 1)) % slides.length
	currentSlide.addClass('active')
	
	setTimeout(function(){
		currentSlide.removeClass('active fade-out')
	}, 2000)
}
// =========================================================================================== //

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
}

// =========================================================================================== //





$(document).ready(function() {
  onScroll()
  onClick()
  formValidation()
})

window.onload = function () {
	initSlideRotation()
	setInterval(changeSlide, 2000)
}

$(window).scroll(onScroll)