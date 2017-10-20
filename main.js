$(document).ready(function() {
  $(".light").addClass("animated pulse infinite");
  $(".light-vertical").addClass("animated pulse infinite");
  $(".sign").addClass("animated bounceIn");
  $("h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
  $("h2").fitText(1.2, { minFontSize: '14px', maxFontSize: '60px' });

  // var interval = 1000;
  //
  //
  //
  //     function flicker()
  //     {
  //         $("#box").toggleClass('on');
  //         setTimeout(flicker, interval);
  //     }
  //
  //     flicker();

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
