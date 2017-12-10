$(document).ready(function() {
    var win = 0;
    var loss = 0;
    var counter = 0;
    var crystals = [];
    var number = setNumber();

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (var i = 0; i < 4; i++){
        crystalNumber= randomNumber(1,12);
        crystals.push(crystalNumber);
    }
    console.log(crystals + " ..... " + number);

    for (var i = 0; i<crystals.length; i++){
        $(".crystal-image").attr("data-crystalvalue", crystals[i]);
        console.log(crystals[i]);
    }

    function setNumber(){
        number = randomNumber(18,120);
        var numberDiv = $("<div>");
        numberDiv.attr("id", "numberToMatch");
        numberDiv.html("Number to match:" + "<br>" + number);
        $(".numberToMatch").append(numberDiv);
        return number;
    }
    
    $(".crystal-image").on("click", function(){
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        alert("New score: " + counter);
    });
});