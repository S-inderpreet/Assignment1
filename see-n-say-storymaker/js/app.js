// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */


		// Create a new speechSynthesis object
		var synth = window.speechSynthesis;
	// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

	// holding the button through their ID using getElementByID();
	var speakButton = document.getElementById('button');
	var textToSpeak = 'This is the text string that you will generate with your script';
	var NounButton = document.getElementById('btn1');
	var verbButton = document.getElementById('btn2');
	var AbjectiveButton = document.getElementById('btn3');
	var noun2Button = document.getElementById('btn4');
	var noun3Button = document.getElementById('btn5');
	var sentenceButton = document.getElementById('button1');
	var repeatButton = document.getElementById('button2');
	var resetButton = document.getElementById('button3');



	/* Functions
	-------------------------------------------------- */
	function speakNow(string) {
		// Create a new speech object, attaching the string of text to speak
		var utterThis = new SpeechSynthesisUtterance(string);
		// Actually speak the text
		synth.speak(utterThis);
	}

	/* Event Listeners
	-------------------------------------------------- */
	// Onclick handler for the button that speaks the text contained in the above var textToSpeak
	speakButton.onclick = function() {
		var textToSpeak = 'This is the text string that you will generate with your script';
		speakNow(textToSpeak);
	}
	// storing the array to a  variable which will pick the random elements from this array and the passsing that element to the speaknow()..... 
	var nounArr = ['the turkey','mom','dad','My teacher','the elephant','the cat'];
	NounButton.onclick = function(){
		var randomIndexForNounArr = Math.floor(Math.random()*nounArr.length);
		var randomNoun = nounArr[randomIndexForNounArr];
		textToSpeak = randomNoun;
		speakNow(textToSpeak);
	}
	//storing the array to a  variable which will pick the random elements from this array and the passsing that element to the speaknow().....
	var verbArr  = ['sat on','ate','dance with','saw',"doesn't like",'kissed'];
	verbButton.onclick = function(){
		var randomIndexForVerbArr = Math.floor(Math.random()*verbArr.length);
		var randomVerb = verbArr[randomIndexForVerbArr];
		textToSpeak = randomVerb;
		speakNow(textToSpeak);
	}
	//storing the array to a  variable which will pick the random elements from this array and the passsing that element to the speaknow().....
	var adjectiveArr = ['a funnny','a scary','a goofy','a smilly','a barking','a fatty'];
	AbjectiveButton.onclick= function(){
		var randomIndexForadjectiveArr = Math.floor(Math.random()*adjectiveArr.length);
		var randomadjective = adjectiveArr[randomIndexForadjectiveArr];
		textToSpeak = randomadjective;
		speakNow(textToSpeak);	
	}
	//storing the array to a  variable which will pick the random elements from this array and the passsing that element to the speaknow().....
	var secNounArr = ['goat','monkey','cow','fish','frog','bug'];
	noun2Button.onclick = function(){
		var randomIndexForsecNounArr = Math.floor(Math.random()*secNounArr.length);
		var randomsecNoun = secNounArr[randomIndexForsecNounArr];
		textToSpeak = randomsecNoun;
		speakNow(textToSpeak);
	}
	//storing the array to a  variable which will pick the random elements from this array and the passsing that element to the speaknow().....
	var thirdNounArr = ['on the moon','on the chair','in my speghetti','on the grass','in my soup','in my shoes'];
	noun3Button.onclick = function(){
		var randomIndexForthirdNounArr = Math.floor(Math.random()*thirdNounArr.length);
		var randomthirdNoun = thirdNounArr[randomIndexForthirdNounArr];
		textToSpeak = randomthirdNoun;
		speakNow(textToSpeak);
	}

	//calculating the indexes for forming the sentences
	var randomIndexForNounArr = Math.floor(Math.random()*nounArr.length);
	
	var randomIndexForVerbArr = Math.floor(Math.random()*verbArr.length);
	var randomIndexForadjectiveArr = Math.floor(Math.random()*adjectiveArr.length);
	var randomIndexForsecNounArr = Math.floor(Math.random()*secNounArr.length);
	var randomIndexForthirdNounArr = Math.floor(Math.random()*thirdNounArr.length);
	// created a reset button onclick function that will reset the sentences formed
	resetButton.onclick = function(){
		randomIndexForNounArr = Math.floor(Math.random()*nounArr.length);
		randomIndexForVerbArr = Math.floor(Math.random()*verbArr.length);
	    randomIndexForadjectiveArr = Math.floor(Math.random()*adjectiveArr.length);
	    randomIndexForsecNounArr = Math.floor(Math.random()*secNounArr.length);
		randomIndexForthirdNounArr = Math.floor(Math.random()*thirdNounArr.length);
		textToSpeak = "This button will reset the sentences";
		speakNow(textToSpeak);
	}
	// created a repeat button onclick function that will repeat the same sentence formed earlier when from the sentence is pressed
	repeatButton.onclick = function(){
		var randomNoun = nounArr[randomIndexForNounArr];
		var randomVerb = verbArr[randomIndexForVerbArr];
		var randomadjective = adjectiveArr[randomIndexForadjectiveArr];
		var randomsecNoun = secNounArr[randomIndexForsecNounArr];
		var randomthirdNoun = thirdNounArr[randomIndexForthirdNounArr];
		textToSpeak =  randomNoun + randomVerb + randomadjective + randomsecNoun+ randomthirdNoun;
		speakNow(textToSpeak);
	}
	// created a sentence forming onclick function that will generate a sentence by picking random elements from each array
	sentenceButton.onclick = function(){
		var randomNoun = nounArr[randomIndexForNounArr];
		var randomVerb = verbArr[randomIndexForVerbArr];
		var randomadjective = adjectiveArr[randomIndexForadjectiveArr];
		var randomsecNoun = secNounArr[randomIndexForsecNounArr];
		var randomthirdNoun = thirdNounArr[randomIndexForthirdNounArr];
		textToSpeak =  randomNoun + randomVerb + randomadjective + randomsecNoun+ randomthirdNoun;
		speakNow(textToSpeak);
	}
	
	
	


