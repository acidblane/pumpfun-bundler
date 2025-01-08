
$(document).ready(function () {
	
  // array with texts to type in typewriter
  var dataText = [ "Devoted to the design of experiences with code."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
    document.getElementById("one").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);

//lOGIC:

  //Part1: add two lights to "portfolio" button that operates based on status of animation - running or paused states
    //part A: glowing green light flashes/blinks as long as slideshow is running, but glow and blinking goes off when slideshow is paused
    //part B: red light glows when slideshow animation is paused from mouseover
  //Part 2: make glowing red light flash rapidly when user mouseovers content of "Portfolio" button drop-down menu

//showcase is the div you click and figure is the element whose webkit-animation-play-state is getting changed:
	
//part A (of Part 1)
  
 var showcase = document.querySelector("figure"); 
  showcase.addEventListener("mouseover", function(){ 
  $(".red").addClass("glow-red"); //red light glows
  $(".green").removeClass("glow-green"); //green light stops glowing
    $('.red-light-two').addClass('glow-red');
    $('.green-light-two').removeClass('glow-green');
  }); 
  showcase.addEventListener("mouseout", function(){ 
  $(".red").removeClass("glow-red"); //red light no longer glows
  $(".green").addClass("glow-green"); // green light returns to glowing
    $('.red-light-two').removeClass('glow-red');
    $('.green-light-two').addClass('glow-green');
  });


$(".green").addClass("animate-flicker");
$('.green-light-two').addClass("animate-flicker"); 
  
//part B (of Part 1)  

var showcase = document.querySelector("figure");
showcase.addEventListener("mouseover", function() {
  $(".red").addClass("glow-red");
  $(".green").removeClass("glow-green").removeClass('animate-flicker');
  $('.green-light-two').removeClass("glow-green").removeClass("animate-flicker");
});
showcase.addEventListener("mouseout", function() {
  $(".red").removeClass("glow-red");
  $(".green").addClass("glow-green").addClass('animate-flicker');
  $('.green-light-two').addClass("glow-green").addClass("animate-flicker");
});

//Part 2
  
var dropdown = document.querySelector('.dropdown-content');
dropdown.addEventListener('mouseenter', blinking);
dropdown.addEventListener('mouseleave', stopBlinking);

let isBlinking = false;
var element = $(".red");

function blinking() {
  if (!isBlinking) {
    isBlinking = true;
    var shown = true;
    var element = $(".red").addClass("glow-red"); 
    interval = setInterval(toggle, 100);

    function toggle() {
      if (shown) {
        element.hide();
        shown = false;
      } else {
        element.show();
        shown = true;
      }
    }
  }
}


function stopBlinking() {
  var element = $(".red").removeClass("glow-red"); 
  clearInterval(interval)
  isBlinking = false;
  element.show();
}
  
  /*............................make robot hand blink................ */


//hand-pointing image (add more innovation later)
var element = $(".robot");
var shown = true;
setInterval(toggle, 800);

function toggle() {
    if(shown) {
        element.css('opacity', 0);
        shown = false;
    } else {
        element.css('opacity', 1);
        shown = true;
    }
}
  
//.......when "Portfolio" button is pressed, page scrolls to center image and light-box appears/..................

 $("#tell-state").click(function(){
        alert("Here's something new.");
   $(".drop-light").show();
    });

  //.......hides light-box after scrolling up from its display area

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
  
}

var winheight, docheight, trackLength, throttlescroll;

function getmeasurements(){
	winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
	docheight = getDocHeight();
	trackLength = docheight - winheight;
}

function amountscrolled(){
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
	var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	/*output.innerHTML = pctScrolled + '% scrolled'*/
  
 /* after drop-light becomes visible via pressing the "Portfolio button", now when you scroll up from there, it disappears, leaving only the blinking lights on the "Portfolio" button*/
  if(pctScrolled <= 35){
    $(".drop-light").hide();
  }else{
    console.log('The drop-down showed');
  }
}

getmeasurements();

window.addEventListener("resize", function(){
	getmeasurements();
}, false);

window.addEventListener("scroll", function(){
	clearTimeout(throttlescroll);
		throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
		amountscrolled();
	}, 50);
}, false)


});

// Highlight features on hover
$('.feature').hover(
    function () { $(this).css('color', '#ff9900'); },
    function () { $(this).css('color', ''); }
);
