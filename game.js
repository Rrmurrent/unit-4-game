  var goalScore = Math.floor(Math.random()*55);
  var score = 0;
  $("img").addClass("animated bounce");
  
  $(document).ready(function () {

  // $("#goalScore").css("border", "solid","white");
  $("#currentScore").css("border","solid","white");
  $("#scoreBox").css("border","solid","white");
  $("#instructions").css("border","solid","black");
  $(".crystalDecor").css("border","solid", "black");
  $(".col-Lg-6").css("border","solid","black");
  $(".jumbotron").css("border","solid","black");
  $(".col-Lg-8").css("border","solid","black");
  

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

  $("#crystalOne").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalTwo").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalThree").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
  $("#crystalFour").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));


  $("#crystalOne").attr("src", imageArray[0]);
  $("#crystalTwo").attr("src", imageArray[1]);
  $("#crystalThree").attr("src", imageArray[2]);
  $("#crystalFour").attr("src", imageArray[3]);

  
 

  var goal= function(){
  $('#goalScore').append(goalScore);
  }

  goal();
  updater();
});

function updater () {
    $('#currentScore').html("");
    $('#currentScore').html("score: ").append(score);
    
    
  };
 $(document).on("click", '.crystalClick', function(){
  console.log($(this).attr("dataCrystal")); 
  score = score + parseInt($(this).attr("dataCrystal"));
  updater();
  checker();
   //add datacrystal to score
   //call score function( updater() )
 })

var checker = function(){
  if (score===goalScore){
    win();
  } else if (score > goalScore){
    lose();
  }
}

var win = function(){
alert("You Win yay!");
document.location.reload()
};

var lose = function(){
alert("You Lose");
document.location.reload()
};




