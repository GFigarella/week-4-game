$(document).ready(function() {
    var win = 0;
    var loss = 0;
    var crystals = [];
    var number = setNumber();

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (i = 0; i < 4; i++){
        crystals[i]= randomNumber(1,12);
    }
    console.log(crystals + " ..... " + number);

    function setNumber(){
        number = randomNumber(18,120);
        var numberDiv = $("<div>");
        numberDiv.attr("id", "numberToMatch");
        numberDiv.html("Number to match:" + "<br>" + number);
        $(".numberToMatch").append(numberDiv);
        return number;
    }
    
    $(".crystalImg").on("click", function(){
        alert("Clicked the " + this.id + " crystal");

    })
});