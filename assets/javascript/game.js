$(document).ready(function() {
    var myValues = values();
    var win = myValues[1];
    var loss = myValues[2];
    var counter = myValues[0];
    var crystals = myValues[3];
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
    }

    function setNumber(){
        number = randomNumber(18,120);
        var numberDiv = $("<div>");
        numberDiv.attr("id", "numberToMatch");
        numberDiv.html("Number to match:" + "<br>" + number);
        $(".numberToMatch").append(numberDiv);
        return number;
    }
    
    function values(){
        counter = 0;
        win = 0
        loss = 0
        crystals = [];
        $("#score").append(counter);
        $("#winCount").append(win);
        $("#lossCount").append(loss);
        return [counter, win, loss, crystals];
    }

    function reset(){
        counter = 0;
        crystals = [];
        $("#score").text(0);
        for (var i = 0; i < 4; i++){
            crystalNumber= randomNumber(1,12);
            crystals.push(crystalNumber);
        }
        $(".numberToMatch").empty();
        number = setNumber();
        console.log(crystals);
        return [counter, crystals, number];
    }


    $(".crystal-image").on("click", function(){

        $("#result").empty();

        var crystalValue = ($(this).attr("id"));
        console.log(crystalValue);
        // crystalValue = parseInt(crystalValue);
        // counter += crystalValue;
        // alert("New score: " + counter);
        if (crystalValue == "red"){
            var redCrystal = crystals[0];
            console.log("red crystal is: " + redCrystal + typeof(redCrystal));
            counter = counter + redCrystal;
            $("#score").text(counter);
            console.log(counter);
        }

        else if (crystalValue == "cyan"){
            var cyanCrystal = crystals[1];
            counter = counter + cyanCrystal;
            $("#score").text(counter);
            console.log(counter);
        }

        else if (crystalValue == "purple"){
            var purpleCrystal = crystals[2];
            counter = counter + purpleCrystal;
            $("#score").text(counter);
            console.log(counter);
        }

        else if (crystalValue == "blue"){
            var blueCrystal = crystals[3];
            counter = counter + blueCrystal;
            $("#score").text(counter);
            console.log(counter);
        }

        if (counter == number){
            var myReset = reset();
            counter = myReset[0];
            crystals = myReset[1];
            number = myReset[2];
            $("#result").text("Eyyy you won!!");
            win++
            $("#winCount").text(win);
        }

        else if (counter > number){
            var myReset = reset();
            counter = myReset[0];
            crystals = myReset[1];
            $("#result").text("You lost!! More math next time!");
            loss++
            $("#lossCount").text(loss);
        }
    });


});