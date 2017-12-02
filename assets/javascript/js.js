

// this is a Landoni pseudo code
// The game needs to have a timer on it.
// game needs to have ten questions in list format
// the HTML has radio buttons that I can use to check which button home boys have clicked on
// I need to make a if else then loop for questions that get answered right, wrong, and then not at all
// I need to make the game time out
// I need to have a second bit of html that it links too showing what they got right or wrong



//var limit = 60*1000;


// Countdown also starts at 60 seconds (same at the limit of the page timer)
var countdownNumber = 60;


// Count of Right, Wrong, and unanswered Qustions
var correct = 0;
var wrong = 0;
var noanswer = 0;

$("#endgame").hide();
//so that when you start the game its not going



$(document).ready(function(){

    $("#start_button").on("click", function(){
        //this just starts the game
        //console.log(this)
        //so home boy clicks start game

        startCountdown();
        // countdown()
        return;
            // Show the countdown, increment is 1 second
    function startCountdown(){

        setInterval(countdown, 1000);

    }
    });




    function countdown(){

        console.log('countdown', countdownNumber)
        countdownNumber--;
        //subtracts time

        // lets peps know about the time going down
        $('#timer_number').html(countdownNumber + " Seconds");



        // ----------- Handle Cases for Time ar 0 Seconds -----------
            // User finishes before time is up and clicks done
            $("#done_button").on("click", function(){
            countdownNumber = 0


            });


            // Finish the game after the timer reaches 0
            if(countdownNumber == -1){

                timeUp();

            }


    }





    // Function to be run after the timer is up
    function timeUp(){
//var correct = 0;
// var wrong = 0;
// var noanswer = 0;

        // Checked values of Radio Buttons
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();



        if(Q1 == undefined){
            noanswer++;
        }
        else if(Q1 == "AndrewJohnson"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q2 == undefined){
            noanswer++;
        }
        else if(Q2 == "Grover"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q3 == undefined){
            noanswer++;
        }
        else if(Q3 == "Warren"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q4 == undefined){
            noanswer++;
        }
        else if(Q4 == "Nixon"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q5 == undefined){
            noanswer++;
        }
        else if(Q5 == "Bill"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q6 == undefined){
            noanswer++;
        }
        else if(Q6 == "Harding"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q7 == undefined){
            noanswer++;
        }
        else if(Q7 == "Hardy"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q8 == undefined){
            noanswer++;
        }
        else if(Q8 == "wardy"){
            correct++;
        }
        else{
            wrong++;
        }


        if(Q9 == undefined){
            noanswer++;
        }
        else if(Q9 == "Madison"){
            correct++;
        }
        else{
            wrong++;
        }



        if(Q10 == undefined){
            noanswer++;
        }
        else if(Q10 == "Jackson"){
            correct++;
        }
        else{
            wrong++;
        }




        //show the answers
        $('#correct_answers').html(correct);
        $('#wrong_answers').html(wrong);
        $('#unanswered').html(noanswer);


        $("#endgame").show();



    }

});