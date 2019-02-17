$(document).ready(function () {

  var imageArray = ["assets/images/pinkCrystal.jpg", "assets/images/purpleCrystal.jpg", "assets/images/whiteCrystal.jpg", "assets/images/blueCrystal.jpg"];

  var crystalImage = {
// function to give the crystal values random #
// can also use to generate the goal score-- will have to change the parameters. 
    generateRandomNumber: function (min, max) {
      // will create a random number which includes the min and max
      var randomNumber = Math.floor(Math.random() * ((max - min) + 1)) + min;
      console.log(randomNumber);
      return randomNumber;
    }



  }
  // var targetNumber=0;
  // var scoreCard

  $("#crystalOne").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalTwo").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalThree").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalFour").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));


  $("#crystalOne").attr("src", imageArray[0]);
  $("#crystalTwo").attr("src", imageArray[1]);
  $("#crystalThree").attr("src", imageArray[2]);
  $("#crystalFour").attr("src", imageArray[3]);

  $("#crystalOne").attr("height", "200px");
  $("#crystalTwo").attr("height", "200px");
  $("#crystalThree").attr("height", "200px");
  $("#crystalFour").attr("height", "200px");

  $("#crystalImages").css("background-color","black");
  $("#goalNumber").css("background-color", "orange");
  $("#scoreBoard").css("background-color", "red");
  

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  // $("#crystals").append(imageCrystal);

})
//end generateRandomNumber() fct

/*

   




 var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0; --> 

 < !-- // Now for the hard part. Creating multiple crystals each with their own unique number value.

 // We begin by expanding our array to include four options.
 var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg
http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg
    ");

   // Each imageCrystal will be given a data attribute called data-crystalValue.
   // This data attribute will be set equal to the array value.
   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

}); -->








  initialization function
//  what happens when user wins/loses
// New targetNumber
// All images must have a new number assignmed 1-12





// called at the end of the document, assigns random number plus image value. In that function, display the target number to the user as well
/ Function to call when document loads or when player wins/losses
function initFunction() {
  targetNumber = getRandomNumber(19, 120);
  imageArray.crystalOne.imgValue = getRandomNumber(1, 12);
  imageArray.crystalTwo.imgValue = getRandomNumber(1, 12);
  imageArray.crystalThree.imgValue = getRandomNumber(1, 12);
  imageArray.crystalFour.imgValue = getRandomNumber(1, 12);
}
// Given a min and max value, return a whole number in that range.
// Assumes minValue and maxValue cannot be the same number.
function getRandomNumber(minValue, maxValue) {
  return (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}
    };

*/