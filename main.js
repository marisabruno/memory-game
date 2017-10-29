$(document).ready(function() {
  $(".light").addClass("animated pulse infinite");
  $(".light-vertical").addClass("animated pulse infinite");
  $(".sign").addClass("animated bounceIn");

// fitText
  $("h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '60px' });
  $("h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '48px' });
  $("h3").fitText(1.2, { minFontSize: '14px', maxFontSize: '36px' });



// Alternating Flicker Functions!
  $(".light:nth-child(odd)").addClass("odd-light");
  $(".light:nth-child(even)").addClass("even-light");

  var interval = 500;

  function flickerOdd()
  {
      $(".odd-light").toggleClass('light-off');
      setTimeout(flickerOdd, interval);
  }

  flickerOdd();

  function flickerEven()
  {
      $(".even-light").toggleClass('light-off');
      setTimeout(flickerEven, interval);
  }

  function delayedFlicker(){
    setTimeout(flickerEven,500);

  }

  delayedFlicker();



});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
