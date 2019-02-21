

var goalScore = Math.floor(Math.random()*55);
  var score = 0;
  var wins = 0;
    // $("#wins").text(wins);
  var loss = 0;
    // $("#loss").text(loss);

  //  var scoreReset = function(){
  //       score = 0;
        
        // updater()
  
  $(document).ready(function () {
   
 
 
   $("#currentScore").css("border","solid","white");
  $("#scoreBox").css("border","solid","white");
  $("#instructions").css("border","solid","black");
  $(".crystalDecor").css("border","solid", "black");
  $(".col-Lg-6").css("border","solid","black");
  $(".jumbotron").css("border","solid","black");
  $(".col-Lg-8").css("border","solid","black");
  $("#wins").css("border","solid","black");

  var imageArray = ["assets/images/pinkCrystal.jpg", "assets/images/purpleCrystal.jpg", "assets/images/whiteCrystal.jpg", "assets/images/blueCrystal.jpg"];

  var crystalImage = {
    generateRandomNumber: function (min, max) {
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
  // updater();
  // wins()


function updater () {
    $('#currentScore').html("");
    $('#currentScore').html("score: ").append(score);
  };


 $(document).on("click", '.crystalClick', function(){
  console.log($(this).attr("dataCrystal")); 
  score = score + parseInt($(this).attr("dataCrystal"));
  
checker();
updater();
 })

var checker = function(){
  if (score===goalScore){
    win();
    updater()
  } else if (score > goalScore){
    lose();
    updater();
  }
}

var win = function(){
alert("You Win yay!");
wins ++;

function updater() {
  // $('#wins').html("score: ").append(wins);
}
updater();
};

var lose = function(){
alert("You Lose");
// lose ++;


}
// updater();
// document.location.reload()




}
);


























//   var goalScore = Math.floor(Math.random()*55);
//   var score = 0;
//   var totalWins = 0;
//   var totalLoss =0;
//   var scoreReset = function(){
//     score = 0;
//     updater()
//   }


 
  
//   var goal= function(){
//     goalScore = Math.floor(Math.random()*55);
//     $('#goalScore').append(goalScore);
//   }

 
  
//   $(document).ready(function () {

//   // $("#goalScore").css("border", "solid","white");
//   $("#currentScore").css("border","solid","white");
//   $("#scoreBox").css("border","solid","white");
//   $("#instructions").css("border","solid","black");
//   $(".crystalDecor").css("border","solid", "black");
//   $(".col-Lg-6").css("border","solid","black");
//   $(".jumbotron").css("border","solid","black");
//   $(".col-Lg-8").css("border","solid","black");
//   $("#scoreboard").html(totalWins + " " + totalLoss);

  

//   var imageArray = ["assets/images/pinkCrystal.jpg", "assets/images/purpleCrystal.jpg", "assets/images/whiteCrystal.jpg", "assets/images/blueCrystal.jpg"];
  
 

 
//   $("#crystalOne").attr("src", imageArray[0]);
//   $("#crystalTwo").attr("src", imageArray[1]);
//   $("#crystalThree").attr("src", imageArray[2]);
//   $("#crystalFour").attr("src", imageArray[3]);
//    crystalWorth();
//     goal();

//     var crystalImage = {             
//       generateRandomNumber: function (min, max) {
//         var randomNumber = Math.floor(Math.random() * ((max - min) + 1)) + min;
//         console.log(randomNumber);
//         return randomNumber;
//       }
//     }

 
// });

// var crystalWorth = function(){
//   $("#crystalOne").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
//   $("#crystalTwo").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
//   $("#crystalThree").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
//   $("#crystalFour").attr("dataCrystal", crystalImage.generateRandomNumber(1, 12));
// }

// function updater () {
//     $('#currentScore').html("");
//     $('#currentScore').html("score: ").append(score);
//      updater();
    

//   };
//  $(document).on("click", '.crystalClick', function(){
//   console.log($(this).attr("dataCrystal")); 
//   score = score + parseInt($(this).attr("dataCrystal"));
//   updater();
//   checker();
  
//  })

// var checker = function(){
//   if (score===goalScore){
//     win();
//   } else if (score > goalScore){
//     lose();
//   }
// }

// var win = function(){
//   alert("You Win yay!");
//   totalWins+=1;
//   scoreReset();
//   updater()

// };

// var lose = function(){
//   alert("You Lose");
//   totalLoss+=1;
//   scoreReset();
//   updater()

// };




