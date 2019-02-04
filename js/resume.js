// ======================================== scroll down ====================================== //
let onScroll = function() {
  let windowTopPosition = ($(window).scrollTop())
  let windowHeight = $(window).height()
  let windowBottomPosition = (windowTopPosition + windowHeight)
  
  // Animation sections on scroll.
  let sections = $('section')
  sections.each(function(i) {
    let element = $(this)
    let elementTopPosition = element.offset().top 
    let elementHeight = element.height()
    let elementBottomPosition = element.offset().top + elementHeight 
    if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= (windowBottomPosition)  )) {
      element.addClass('scroll')
    }
    else {
      element.removeClass('scroll')
    }
  })

  // Animation active state top menu.
  sections.each(function(i) {
    if ((windowTopPosition + 300) >= $(this).offset().top) {
      $('.top-menu a.active').removeClass('active')
      $('.top-menu a').eq(i).addClass('active')
    }
  })

  // Animate progress circles.
  let skillDescriptionManagement = $('.skill__management').children('.skill__description')
  let progressCircles = $('.skill__circle--progress')
  if ($('.section--skills').hasClass('scroll')) {
    skillDescriptionManagement.addClass('animate-description')
    progressCircles.addClass('animate-circle')
  }
  else {
    skillDescriptionManagement.removeClass('animate-description')
    progressCircles.removeClass('animate-circle')
  }
}

// Animation top-menu on scroll. s
let lastScrollTop = 0;
$(window).scroll(function(event){
    let windowScrollTop = $(this).scrollTop()
  //  Scroll to top.
    if (windowScrollTop < lastScrollTop) {
      $('.top-menu').addClass('show-menu')
    } 

  // Scroll to bottom.
    else {
      $('.top-menu').removeClass('show-menu')
    }
    lastScrollTop = windowScrollTop;
})
// =========================================================================================== //

// ====================================== scroll to on click ================================= //  
let initOnClick = function() {
  $('.top-menu__button').click(function(e) {      
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
      formErrors += validateField(fields[i]) ? 0 : 1 
    })
    // If no error, send form via ajax.
    if (!formErrors) {
      // $.ajax({
      //   type: 'POST',
      //   url: 'https://formspree.io/helene.andre.06@gmail.com',
      //   data: form.serialize(), 
      //   success: function(data) {
      //     data = JSON.parse(data)

      //     if (!data.error) {
      //       $(fields)
      //         .removeClass('correct-field')
      //         .val('')

      //       $('.contact__success-message').addClass('show')
      //       setTimeout(function() {$('.contact__success-message').removeClass('show')}, 3000);
      //     }
      //   },  
      //   error: function() {
      //     $('.contact__failed-message').addClass('show')
      //     setTimeout(function() {$('.contact__failed-message').removeClass('show')}, 4000);
      //   }  
      // })
      // e.preventDefault()
      return true;
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

// =============================== slide show projects ======================================= //
$(document).ready(function(){
  $('.projects-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  })
})
// =========================================================================================== //




$(document).ready(function() {
  initOnClick()
  initFormValidation()
})

$(window).scroll(onScroll)