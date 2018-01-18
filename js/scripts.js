$(document).ready(function(){

var good = [];
var bad = [];
var neutral = [];
var winner = "";

var goodCount = neutralCount = badCount = 0;


function tellFortune(wins){
  x = Math.floor(Math.random() * 5)+1;
  switch(x) {
  case 1:
    if (wins === "good") {
      return ("Love with all your heart");
    } else if (wins === "neutral") {
      return ("Achieving peace of mind is most worthwhile goal");
    } else {
      return ("It's not as bad as it seems");
    }
    break;
  case 2:
    if (wins === "good") {
      return ("You are heading for a land of sunshine and relaxation");
    } else if (wins === "neutral") {
      return ("Your path may be difficult but will be rewarding");
    } else {
      return ("When in doubt, duck");
    }
    break;
  case 3:
    if (wins === "good") {
      return ("Hidden treasures will be found when least expected");
    } else if (wins === "neutral") {
      return ("When in doubt be yourself");
    } else {
      return ("You really turned a corner this time");
    }
    break;
  case 4:
    if (wins === "good") {
      return ("The social scene can be fun today");
    } else if (wins === "neutral") {
      return ("Your road to glory will be rocky");
    } else {
      return ("At the bottom you can only go up");
    }
    break;
  default:
    if (wins === "good") {
      return ("You will enjoy good health and financial independence");
    } else if (wins === "neutral") {
      return ("All your hard work will soon pay off");
    } else {
      return ("If all else fails, reboot");
    }
  }
}

 function alerts(){
   console.log("good = " + good);
   console.log("neutral = " + neutral);
   console.log("bad = " + bad);
 }

function calculateFortune() {
  count1 = good.length;
  count2 = neutral.length;
  count3 = bad.length;
  if ((count1 >= count2) && (count1 >= count3)) {
    winner = "good";
  } else if ((count2 >= count1) && (count2 >= count3)) {
    winner = "neutral";
  }
  else {
    winner = "bad";
  }
}


  $("form#luck_survey").submit(function(event) {
    event.preventDefault();


    // $("#results").hide();
    $("input:checkbox[name=good]:checked").each(function(){
      good.push($(this).val());
      // $('#work-responses').append(workTransportationMode + "<br>");
    });

    $("input:checkbox[name=neutral]:checked").each(function(){
      neutral.push($(this).val());
    // $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("input:checkbox[name=bad]:checked").each(function(){
      bad.push($(this).val());
  // $('#work-responses').append(workTransportationMode + "<br>");
    });

    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    $('#luck_survey').hide();
    // alerts();
    console.log(tellFortune(calculateFortune()));
    $("#results").append(tellFortune(calculateFortune()));
    $("#results").show();

  }); // end FORM


}); // end READY
