$( document ).ready(function() {

  $('.navHeader .navspan').click(function(){

		$('.navHeader .navspan').removeClass('activenav');
		$(this).addClass('activenav');

		var activeSlide = $(this).attr('id');
		var newSlide = '.'+activeSlide;

    if ($(this).attr('id') === 'slide1') {
      $('header section').removeClass('active');
  		$(newSlide).addClass('active').show();
    } else {
      $(newSlide).addClass('active').show();
    }

	});

  var previousScroll = 0;

  $(window).scroll( function() {

    var scroll = $(this).scrollTop()

    if (scroll > previousScroll) {

      var count = 0;

      for (var i = 0; i < $('header').children().length; i++) {

        var sectionCount = $('header').children()[i]

        if ($(sectionCount).hasClass('active')) {
          count++;

          if (count === 1) {
            console.log(count);
            var nextSection = $('header section')[count]
            var previousNavspan = $('.navHeader .navspan')[count]
            var lastNavspan = $('.navHeader .navspan')[count - 1]

            $(nextSection).addClass('active');
            $(lastNavspan).removeClass('activenav');
          	$(previousNavspan).addClass('activenav');
          }
        }

      }

    } else {

      var count = 0;

      for (var i = 0; i < $('header').children().length; i++) {

        var sectionCount = $('header').children()[i]

        if ($(sectionCount).hasClass('active')) {
          count++;

          if (count > 1) {
            var countNew = count - 1
            var lastSection = $('header section')[countNew]
            var lastNavspan = $('.navHeader .navspan')[countNew]
            var previousNavspan = $('.navHeader .navspan')[countNew - 1]

            $(lastSection).removeClass('active');
            $(lastNavspan).removeClass('activenav');
          	$(previousNavspan).addClass('activenav');
          }
        }

      }

    }

    previousScroll = scroll;



  })






});
