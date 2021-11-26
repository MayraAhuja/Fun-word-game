var player1_name= localStorage.getItem("player1_name");
var player2_name= localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
var questionPlayer= "player1";
var answerPlayer= "player2";
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer: "+player2_name;

function Ask() {
    var word= document.getElementById("word").value;
    var LCword= word.toLowerCase();

    var letter_1= LCword.charAt(0);
    var letter_2= LCword.charAt(1);
    var getLL= LCword.length-1;
    var letter_Last= LCword.charAt(getLL);
    
    var removed1= LCword.replace(letter_1,"_");
    var removed2= removed1.replace(letter_2," _");
    var removed3= removed2.replace(letter_Last,"_");
    localStorage.setItem("question",removed3+"    Mayra");







var wordDisplay= '<h4 id="wordDisplay">'+removed3+'</h4>';
var answerInput= '<br> <input type="text" id="answerInput">'
var checkButton= '<br> <br> <button class="btn btn-info" onclick="check()">check</button>';
var divElements= wordDisplay+answerInput+checkButton;
document.getElementById("output").innerHTML=divElements;
document.getElementById("word").innerHTML="";
}

function check(){
    var answer= document.getElementById("answerInput").value;
    var LCanswer= answer.toLowerCase();
    

    if (LCanswer=LCword) {

        if (answerPlayer=="player1") {
            player1_score=player1_score+10;
            document.getElementById("player1_score").innerHTML=player1_score;
        }

        else{
            player2_score=player2_score+10;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

        
    }





    if (questionPlayer=="player1") {
        questionPlayer="player2";
        document.getElementById("player_question").innerHTML="Question: "+player2_name;
    } 
    
    else {
        questionPlayer="player1";
        document.getElementById("player_question").innerHTML="Question: "+player1_name;
    }

    if (answerPlayer=="player1") {
        answerPlayer="player2";
        document.getElementById("player_answer").innerHTML="Answer: "+player2_name;
    } 
    else {
        answerPlayer="player1";
        document.getElementById("player_answer").innerHTML="Answer: "+player1_name;

    }
}