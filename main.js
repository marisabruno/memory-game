


// //******************************************************************
// THE CARD GAME LOGIC**************************
// //******************************************************************


var MemoryGame= function (){
  this.cards= [
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


function shuffleCards() {

  console.log(memoryGame.cards);

  console.log("shuffling cards");

  var m = memoryGame.cards.length;
  var t;
  var i;

  // While there remain elements to shuffle…
  while (m>0) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = memoryGame.cards[m];
    memoryGame.cards[m] = memoryGame.cards[i];
    memoryGame.cards[i] = t;
  }

  console.log(memoryGame.cards);


  return memoryGame.cards;

}





// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){

  memoryGame = new MemoryGame();



var html = '';

  function render() {
    shuffleCards();
    html='';
    memoryGame.cards.forEach(function(card, index) {
      var sanitizedName =   card.name.split(' ').join('_');
      html += '<div class= "card" name="card_' + sanitizedName + '">';
      html += '<div class="back"';
      html += '    name="' + card.name + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background-image: url(' + card.image + ')"';
      html += '    name="'       + card.name +  '">';
      html += '</div>';
      html += '</div>';
    });

    console.log(html);

  }


  //hide modal//
  // $("#my-modal").hide();

// Render Board 1

  render();



// Add all the divs to the HTML
document.getElementById('game-board').innerHTML = html;

//hide front of cards
$(".front").hide();

// flip cards over after wrong match



function flipBack()
{
    $(".flipped.back").show();
    $(".flipped.front").hide();
    $(".flipped").removeClass("flipped");
}



// Select cards!!***********

  $('.card').click(function(e){

      $(this).children(".back").addClass("flipped");
      $(this).children(".front").addClass("flipped");
      $(this).children(".back").hide();
      $(this).children(".front").show();


      if (memoryGame.selectedCards.length===0){
        memoryGame.selectedCards.push($(this).children(".back").attr("name"));
        console.log (memoryGame.selectedCards);
      }
      else if (memoryGame.selectedCards.length===1){
        memoryGame.selectedCards.push($(this).children(".back").attr("name"));
        console.log (memoryGame.selectedCards);
        if (memoryGame.selectedCards[0]===memoryGame.selectedCards[1]){
          console.log("it's a match!");
          memoryGame.pairsClicked++;
          memoryGame.correctPairs++;
          memoryGame.selectedCards=[];
          $(".flipped").addClass("matched");
          $(".flipped").removeClass("flipped");


        }
        else if (memoryGame.selectedCards[0]!==memoryGame.selectedCards[1]){
          console.log("not a match :( )");
          memoryGame.pairsClicked++;
          setTimeout(flipBack, 1000);
          memoryGame.selectedCards=[];

        }
      }
console.log(memoryGame.correctPairs);

  if (memoryGame.correctPairs===12){
    $('#my-modal').show();
  }

});





$(".btn-primary").click(function(){
    memoryGame.selectedCards = [];
    memoryGame.pairsClicked = 0;
    memoryGame.correctPairs = 0;
    $(".card").children(".back").show();
    $(".card").children(".front").hide();
    $(".flipped").removeClass("flipped");
    $(".matched").removeClass("matched");
    $('#my-modal').hide();
    render();
});

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

  var interval = 200;

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
    setTimeout(flickerEven,200);

  }

  delayedFlicker();



  // fitText


    $("h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '60px' });
    $("h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '48px' });
    $("h3").fitText(1.2, { minFontSize: '14px', maxFontSize: '36px' });
    $("h5").fitText(1.2, { minFontSize: '24px', maxFontSize: '36px' });




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
