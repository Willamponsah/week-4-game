var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },

    yellow: {
        name: "Yellow",
        value: 0
    },

    green: {
        name: "Green",
        value: 0
    },
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

var startGame = function () {
 currentScore = 0;

    targetScore = getRandom(19,120);

    crystal.blue.value = getRandom(1,15);
    crystal.red.value = getRandom(1,15);
    crystal.yellow.value = getRandom(1,15);
    crystal.green.value = getRandom (1,15);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    console.log("--------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + "| Red: " + crystal.red.value + "| Yellow: " + crystal.yellow.value + "|Green: " + crystal.green.value); 
    console.log("--------------------")

   
}

var addValues = function (crystal) {

    currentScore = currentScore + crystal.value; 

    $("#yourScore").html(currentScore);

    checkWin();

    console.log("Your Score: " + currentScore);
    
}

var checkWin = function() {
    
    
    if(currentScore > targetScore) {
        alert("OHHHHH, You LOST!!");
        console.log("You Lost");

        lossCount++;

        $("#lossCount").html(lossCount);

        startGame();

    }
    
      else if (currentScore == targetScore) {
    alert("OHHHHHHH You WON!!!!!!!");
    console.log("You won");

    winCount++;

    $("#winCount").html(winCount);

    startGame();
}
}

startGame();

$("#blue").click(function() {
   
    addValues(crystal.blue);
});

$("#red").click(function () {
    
    addValues(crystal.red);
});

$("#yellow").click(function () {
   addValues(crystal.yellow);
});

$("#green").click(function () {
    addValues(crystal.green);
});

