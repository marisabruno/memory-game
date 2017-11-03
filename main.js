


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


MemoryGame.prototype.shuffleCards=function(){
  console.log(this.cards);
  console.log("shuffling cards");
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
};




// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){


  var memoryGame;
  var html = '';


// !!!****************// MAKE A NEW GAME!!!************************

  function makeNewGame(){
    memoryGame = new MemoryGame();
    render();
    // Make sure the click function is on all new games
    $('.card').click(clickCard);
  }

makeNewGame();

// !!!****************// Create HTML !!!************************

  function createHTML() {
    memoryGame.shuffleCards();
    document.getElementById('game-board').innerHTML = html;
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

  }

// !!!****************// Hide Modal !!!************************

function hideModal(){
  //hide modal//
  $("#my-modal").hide();
}

// !!!****************// render the HTML onto the page !!!************************

function render(){
  hideModal();
  // Create the HTML of the page
  createHTML();
  document.getElementById('game-board').innerHTML = html;
  //hide front of cards
  $(".front").hide();
}



//Function that abstracts the selecting of the cards for use with the click fucntion --- DS

function clickCard()
  {
      var audio = $(".card-click")[0];
      audio.play();

      $(this).children(".back").addClass("flipped");
      $(this).children(".front").addClass("flipped");
      $(this).children(".back").hide();
      $(this).children(".front").show();

      // *************// Check how many cards have been clicked********

        if (memoryGame.selectedCards.length===0){
          memoryGame.selectedCards.push($(this).children(".back").attr("name"));
          console.log (memoryGame.selectedCards);
        }
        else if (memoryGame.selectedCards.length===1){
          memoryGame.selectedCards.push($(this).children(".back").attr("name"));
          console.log (memoryGame.selectedCards);
          checkForMatch();

        }

      checkForWin();

}


// *************// check for a match********

function checkForMatch(){
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
  setTimeout(flipBack, 500);
  memoryGame.selectedCards=[];

}
}

// *************// flip cards over after wrong match********


function flipBack()
{
    $(".flipped.back").show();
    $(".flipped.front").hide();
    $(".flipped").removeClass("flipped");
}




// *************// Check to see if you've won********

function checkForWin(){
if (memoryGame.correctPairs===12){
  $(".modal-body").html("<p>Congratulations!! You won the game!</p>");
  $('#my-modal').show();
  clearInterval(timeCounter);
}
}

// *************//Play a new game!********

$(".btn-primary").click(function(){
    makeNewGame();
    $("#timer").html("60 s");
});

// *************//Timer!!********

$(".start-pause-button").click(function(){
  console.log("clicked!");
  var time = 60;
  var timeCounter;

  timeCounter = setInterval(function(){
    time -= 1;
    console.log(time);
    $("#timer").html(time+" s");

    if(time <= 0){
      clearInterval(timeCounter);
      $(".modal-body").html("<p>Oh no!  You ran out of time! Better luck next time!</p>");
      $("#my-modal").show();
      return;
    }

  },1000);

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

// sound effect for the homepage!

$(".homepage-button").click(function(){
  var audio = $(".card-click")[0];
  audio.play();
  console.log("clicked");
});

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
