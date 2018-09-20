(function() {

  // Static addon
  $('#search').remove();
  // remove login
  $('.navright li:nth-child(2)').remove();
  $('.navright li:nth-child(2)').remove();
  // remove | 
  var $cont = $('.navright li:nth-child(1)');
  var html = $('.navright li:nth-child(1)').html().replace('｜', '');
  $cont.html(html);

  var mobileMenuOutsideClick = function() {

    $(document).click(function(e) {
      var container = $("#offcanvas, .js-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ($('body').hasClass('offcanvas')) {

          $('body').removeClass('offcanvas');
          $('.js-nav-toggle').removeClass('active');

        }
      }
    });
  };

  var offcanvasMenu = function() {

    $('#page').prepend('<div id="offcanvas" />');
    $('#page').prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>');
    var clone1 = $('.menu-1 > ul').clone();
    $('#offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#offcanvas').append(clone2);

    $('#offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#offcanvas')
      .find('li')
      .removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function() {
      var $this = $(this);

      $this
        .addClass('active')
        .find('ul')
        .slideDown(500, 'easeOutExpo');
    }).mouseleave(function() {

      var $this = $(this);
      $this
        .removeClass('active')
        .find('ul')
        .slideUp(500, 'easeOutExpo');
    });


    $(window).resize(function() {

      if ($('body').hasClass('offcanvas')) {

        $('body').removeClass('offcanvas');
        $('.js-nav-toggle').removeClass('active');

      }
    });
  };


  var burgerMenu = function() {

    $('body').on('click', '.js-nav-toggle', function(event) {
      var $this = $(this);


      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();

    });
  };



  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function() {

          $('body .animate-box.item-animate').each(function(k) {
            var el = $(this);
            setTimeout(function() {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }

              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });

        }, 100);

      }

    }, {
      offset: '85%'
    });
  };

  var dropdown = function() {

    $('.has-dropdown').mouseenter(function() {

      var $this = $(this);
      $this
        .find('.dropdown')
        .css('display', 'block')
        .addClass('animated-fast fadeInUpMenu');

    }).mouseleave(function() {
      var $this = $(this);

      $this
        .find('.dropdown')
        .css('display', 'none')
        .removeClass('animated-fast fadeInUpMenu');
    });

  };


  var goToTop = function() {

    $('.js-gotop').on('click', function(event) {

      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });

    $(window).scroll(function() {

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  };

  // Loading page
  var loaderPage = function() {
    $(".loader").fadeOut("slow");
  };

  /*var counter = function() {
    $('.js-counter').countTo({
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function() {
    if ($('#counter').length > 0) {
      $('#counter').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400);
          $(this.element).addClass('animated');
        }
      }, {
        offset: '90%'
      });
    }
  };*/

  $(function() {
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    goToTop();
    //counterWayPoint();
  });

  // store the slider in a local variable
  var $window = $(window),
    flexslider = {
      vars: {}
    };

  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
      (window.innerWidth < 900) ? 3 : 4;
  }

  $(function() {
    //SyntaxHighlighter.all();
  });

  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
    loaderPage();
  });

  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });

  $(window).on('load', function() {
    //$('#usertype').selectpicker({
    //	'selectedText': 'cat'
    //});
  });
}());
