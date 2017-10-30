// //******************************************************************
// THE CARD GAME LOGIC**************************
// //******************************************************************

var MemoryGame= function (){
  this.cards=[
    {name:"umbrella",image:"images/icons/umbrella.png"},
    {name:"camera",image:"images/icons/camera.png"},
    {name:"orange",image:"images/icons/orange.png"},
    {name:"cocktail",image:"images/icons/cocktail.png"},
    {name:"skateboard",image:"images/icons/skateboard.png"},
    {name:"sunglasses",image:"images/icons/sunglasses.png"},
    {name:"sangria",image:"images/icons/sangria.png"},
    {name:"icecream",image:"images/icons/ice-cream.png"},
    {name:"ship",image:"images/icons/ship.png"},
    {name:"bikini",image:"images/icons/bikini.png"},
    {name:"sunset",image:"images/icons/sunset.png"},
    {name:"sailboat",image:"images/icons/sailboat.png"},
    {name:"umbrella",image:"images/icons/umbrella.png"},
    {name:"camera",image:"images/icons/camera.png"},
    {name:"orange",image:"images/icons/orange.png"},
    {name:"cocktail",image:"images/icons/cocktail.png"},
    {name:"skateboard",image:"images/icons/skateboard.png"},
    {name:"sunglasses",image:"images/icons/sunglasses.png"},
    {name:"sangria",image:"images/icons/sangria.png"},
    {name:"icecream",image:"images/icons/ice-cream.png"},
    {name:"ship",image:"images/icons/ship.png"},
    {name:"bikini",image:"images/icons/bikini.png"},
    {name:"sunset",image:"images/icons/sunset.png"},
    {name:"sailboat",image:"images/icons/sailboat.png"}
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};



MemoryGame.prototype.shuffleCards = function() {
  {
  var m = this.cards.length;
  var t;
  var i;

  // While there remain elements to shuffle…
  while (m>0) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return this.cards;
}


};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(tile, index) {
    var sanitizedName = tile.name.split(' ').join('_');

    html += '<div class= "tile" name="tile_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + tile.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(' + tile.image + '") no-repeat"';
    html += '    name="'       + tile.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('game-board').innerHTML = html;
});




// ******************************************************
// Alternating Flicker Functions For the Light Border!
// ******************************************************

$(document).ready(function() {
  $(".light").addClass("animated pulse infinite");
  $(".light-vertical").addClass("animated pulse infinite");
  $(".sign").addClass("animated bounceIn");


  $(".light:nth-child(odd)").addClass("odd-light");
  $(".light:nth-child(even)").addClass("even-light");

  var interval = 300;

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
    setTimeout(flickerEven,300);

  }

  delayedFlicker();



  // fitText


    $("h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '60px' });
    $("h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '48px' });
    $("h3").fitText(1.2, { minFontSize: '14px', maxFontSize: '36px' });




// _____FIT TEXT __ FONT RESIZER**********************

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
