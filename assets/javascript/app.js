$(document).ready(function () {
    //event listeners
    $(".timer").hide();
    $(".done-container").hide();
    $(".btn-start").on('click', startGame);
    $(document).on('click', trivia.guessChecker);
});
 //created variable for trivia
let trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 10,
}
let answers = {
    q1: "Beauty and the Beast",
    q2: "Tiger",
    q3: "Mike Wazowski",
    q4: "The East Australian Current"

}
//function to start the game and timer
function startGame() {
    $(".timer").show();
    $(".start").hide();
    setInterval(function () {
        trivia.timer = trivia.timer - 1;
        $(".app-timer span").text(trivia.timer);
        if (trivia.timer === 0) {
             
            $(".main-container").hide();
            $(".done-container").show();

        }
    }, 1000);
} //Console logging the answer selected by the user. 
$(".btn-done").on('click', function() {
    console.log($(".q1 input:checked").val());
    console.log($(".q2 input:checked").val());
    console.log($(".q3 input:checked").val());
    console.log($(".q4 input:checked").val());
});

