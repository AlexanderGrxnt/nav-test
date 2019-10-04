jQuery(document).ready(function () {
    // Go through a sentence, wrap its characters with spans
    function setUpCharacters() {
        var $sentences = $('.sentence');

        // Run for each sentence
        $sentences.each(function () {
            var $sentence = $(this);
            var newContent = '';

            // Go through all characters of the sentence
            for (i = 0; i < $sentence.text().length; i++) {
                var substring = $sentence.text().substr(i, 1);

                // If we have a character, wrap it
                if (substring != " ") {
                    newContent += '<span>' + substring + '</span>';
                } else {
                    newContent += substring;
                }
            }

            // Replace content
            $sentence.html(newContent);
        });
    }

    setUpCharacters();

    // Go through a sentence and trigger activate state
function triggerCharacters() {
    var sentenceCounter = 0;
    var sentenceDelay = 600;
  
    $('.sentence').each(function() {
      var $sentence = $(this);
  
      // Trigger for each sentence
      setTimeout(function() {
        var $spans = $sentence.find('span');
        var spanCounter = 0;
        var spanDelay = 75;
  
        // Loop through all spans and activate
        $spans.each(function() {
          var $span = $(this);
  
          // Trigger a timeout so each span is offset
          setTimeout(function() {
            $span.toggleClass('active');
          }, (spanCounter * spanDelay));
  
          spanCounter++; 
        });
      }, (sentenceCounter * sentenceDelay));
  
      sentenceCounter++;
    });
  }
  
  // For our example, trigger character animations on button click
  $('.button').on('click', function() {
    triggerCharacters();
    $( "#wolf" ).fadeOut( 2000, function() {
      // Animation complete
    });
  });
   //triggerCharacters();

   //initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["up to no good"],
	 action:function() {
    triggerCharacters();
	 }
 }, {
	 indexes:["mischief managed"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"en-GB",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();

});



// function closeWolf(){
// const wolf = document.getElementById("wolf");

// }

// var fade = jQuery(function(){

//   // Fade Out
//   $("#wolf").fadeOut(2000);

// });

function openHTMLNav(){
  if(window.screen.width < 768)
      document.getElementById("overlayNav-HTML").style.width ="200px";
  else
      document.getElementById("overlayNav-HTML").style.width ="180px";
  document.getElementById("blankPanel").style.width ="100%";
  
}

function closeNav(){
  document.getElementById("overlayNav-HTML").style.width ="0%";
    
  document.getElementById("blankPanel").style.width ="0%";
}
