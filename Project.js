
var questions = [
    {
        question: "Who is the player that took the golden ball in 2020",
        answers: [
            "Cristiano Ronaldo",
            "Lionel Messi",                              //question[0]
            "Neymar da Silva",
            "Mohamed Salah"
        ],
        correctanswer: "Lionel Messi"
    },
    {
        question: "Who is the coach of bayern munich now",
        answers: [
            "Jurgen Klopp.",
            "Hansi Flick",
            "Ronald Koeman",
            "Carlo Ancelotti"
        ],
        correctanswer: "Hansi Flick"
    },
    {
        question: "Who won the last champions league",
        answers: [
            "FC Barcelone",
            "FC Bayern Munich",
            "Liverpool",
            "Real Madrid"
        ],
        correctanswer: "FC Bayern Munich"
    },
    {
        question: "Who won the champions league in 2018",
        answers: [
            "Man City",
            "Real Madrid",
            "Athletico Madrid",
            "FC Barcelone"
        ],
        correctanswer: "Real Madrid"
    },
    {
        question: "Score of last match between bayern and barcelona",
        answers: [
            "Bayern(2),Barcelone(0)",
            "Bayern(8),Barcelone(2)",
            "Bayern(0),Barcelone(0)",
            "Bayern(3),Barcelone(0)"
        ],
        correctanswer: "Bayern(8),Barcelone(2)"
    },
    {
        question: "Where did mbappe play",
        answers: [
            "Juventus",
            "PSG",
            "Totenham",
            "FC Barcelone"
        ],
        correctanswer: "PSG"
    },
    {
        question: "How many trophies does real madrid won",
        answers: [
            "29 trophies",
            "26 trophies",
            "42 trophies",
            "33 trophies"
        ],
        correctanswer: "26 trophies"
    },
    {
        question: "Where did harry kane play now.",
        answers: [
            "Everton",
            "Tottenham",
            "Man City",
            "Man united"
        ],
        correctanswer: "Tottenham"
    },
    {
        question: "Where did Tonny kroos play now.",
        answers: [
            "Galatasaray",
            "Real Madrid",
            "Borussia Dortmund",
            "Olympiacos"
        ],
        correctanswer: "Real Madrid"
    },
    {
        question: "What is the nationality of Diego Armando Maradona",
        answers: [
            "Portugal",
            "Argentine",
            "Brezilian",
            "French"
        ],
        correctanswer: "Argentine"
    },


]

var currentPosition=0
var result=0 ;

function createAnswers(answers){

	console.log(answers)
var container = document.getElementById('container');//<container>
for(var i=0; i<answers.length; i++){
var radiobox = document.createElement('input');//<input>
  radiobox.type = 'radio'; //<input type='redio'>
  radiobox.id = answers[i];//<input type='redio' id='1a here'>
  radiobox.value = answers[i];//<input type='redio' id='"1a here" value='1a here'>
  radiobox.name='answer'//<input type='redio' id='"1a here" value='1a here' name:'answer'>
  var label = document.createElement('label')//<label>
  var description = document.createTextNode(answers[i]);//display text for radio button

  label.htmlFor = answers[i];//autorize loop button radio,creation many buttons radio with same name
  container.appendChild(radiobox) //<input type='redio' id='"1a here" value='1a here' name:'answer'> in container
  container.appendChild(description)
  container.appendChild(label) 
var newline = document.createElement('br');

container.appendChild(newline)
}
}

function startQuiz(){

var firstQuestion=questions[0]
document.getElementById("Qst").innerHTML =firstQuestion.question
var answers=firstQuestion.answers ;
createAnswers(answers)  //create answers
console.log(questions) ;
}







$(document).ready(function() {
    $("#next").click(function(){
        if(currentPosition<questions.length){
        	if(document.getElementById(questions[currentPosition].correctanswer).checked === true){
        		result=result+1
        		console.log(result)
        	}
        	else{
        		result=result ;
        	}
        	if(currentPosition===questions.length-1){
        		alert('the Quiz is finished this is your score : ' +result)
        	}
        	else{
        	document.getElementById('Qst').innerHTML=questions[currentPosition+1].question
        	currentPosition++
        	document.getElementById('container').innerHTML = "";
        	createAnswers(questions[currentPosition].answers)
        	}

        }
    }); 
});



$('document').ready(function(){
	$('#result').click(function(){
		alert('your score is '+ result+'/10')
	})
})





//  var myArray=document.getElementsByClassName('chois')
// $('#fct').on('click', function(){
//  var counter=0
// 	for(var i=0; i<myArray.length; i++){
// 		if(myArray[i].checked === true && myArray[i].id === "true"){
// 			counter++
// 		}
// 	}

// console.log(counter) ;
// })

























