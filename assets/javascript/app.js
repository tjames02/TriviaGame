$(document).ready(function(){//I need jQuery to run!

    
        startClock();
        setTimeout(stopClock, 20000);
    
        
    var intervalId;
    var clockRunning = false;
    var time = 20;
    

    function startClock() {
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true; 
        }
    }
    function stopClock(){
        clearInterval(intervalId);
        clockRunning = false; 
        alert("Time's up!");
        gradePage();
    }
    
    function count() {
        time--;
        var converted = timeConverter(time);
        $("#display").text(converted);
        if (time === 0){
            clockRunning = false;
        }
    }



    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
         }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }


	var questions = [
	{
		question:"What is the most popular breed of dog in the US?",
		a:"Golden Retriever",
		b:"Poodle",
		c:"Beagle",
		d:"Labrador Retriever",
		name:"q1",
        correct:"d",
        answer: "Answer: Labrador Retriever"
    },
    {
		question:"What is the largest breed of dog?",
		a:"Great Dane",
		b:"St. Bernard",
		c:"Irish Wolfhound",
		d:"Great Pyrenees",
		name:"q2",
        correct:"c",
        answer: "Answer: Irish Wolfhound"
    },
    {
		question:"What is the fastest breed of dog?",
		a:"Greyhound",
		b:"Border Collie",
		c:"Vizsla",
		d:"Jack Russell Terrier",
		name:"q3",
        correct:"a",
        answer: "Answer: Greyhound"
    },
    {
		question:"What is the smartest breed of dog?",
		a:"Poodle",
		b:"German Shepherd",
		c:"Border Collie",
		d:"Golden Retriever",
		name:"q4",
        correct:"c",
        answer: "Answer: Border Collie"
    }



	];

	


    var generateQuestion = function(obj){
    
        //We want to get here:
        // <form>
        // <h2>Question 1:</h2>
        // <div><input type="radio" name="gender" value="male" checked>Answer 1</div> 
        // <input type="radio" name="gender" value="female">Answer 2
        // <input type="radio" name="gender" value="other">Answer 3
        // </form> 
    
        var form = $("<form>");
        var question = $('<h2>').text(obj.question);
        var aDiv = $('<div>');
        var bDiv = $('<div>');
        var cDiv = $('<div>');
        var dDiv = $('<div>');
        var a = $('<input type="radio">').attr('name', obj.name);
        aDiv.append(a);
        aDiv.append(obj.a);
        var b = $('<input type="radio">').attr('name', obj.name);
        bDiv.append(b);
        bDiv.append(obj.b);
        var c = $('<input type="radio">').attr('name', obj.name);
        cDiv.append(c);
        cDiv.append(obj.c);
        var d = $('<input type="radio">').attr('name', obj.name);
        dDiv.append(d);
        dDiv.append(obj.d);
    
        if(obj.correct === "a"){
            a.attr('correct', "true");
        }else if(obj.correct === "b"){
            b.attr('correct', "true");
        }else if(obj.correct === "c"){
            c.attr('correct', "true");
        }else if(obj.correct === "d"){
            d.attr('correct', "true");
        }
    
        form.append(question);
        form.append(aDiv, bDiv, cDiv, dDiv);
    
        $('.questions').append(form);
    }







	var gradeQuestion = function(obj){
		//check if there are any radios that have been clicked
		//if it has been checked
		//find checked radio, check for correct="true" attr
		console.log("gradeQuestion()", obj);
		var output = 0;
		obj.find('input').each(function(){
		 	if($(this).is(':checked')) {
		 		console.log("FOUND CHECKED");
		  		if($(this).attr('correct') === "true"){
		  			console.log('adding 1');
                      output +=  1;//you did it!
                      
		  		} else{
		  			console.log('wrong');
		  			output += 0;//WRONG
		  		}
		  	}	
		});
		return output;
    }
   

	var gradePage = function(){
		console.log("gradePage");
		var score = 0;
		$('form').each(function(){
			console.log("adding ",parseInt(gradeQuestion($(this))), " to score");
			score += parseInt(gradeQuestion($(this)));
        })
        
        console.log(score);
        alert("You got "+score+"/4!");
        return score;
	}

    for(var i=0; i<questions.length; i++){
        generateQuestion(questions[i]);
    }
    
    


});