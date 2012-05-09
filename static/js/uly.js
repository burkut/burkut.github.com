/*
copyright ©2012 Rehmetjan Tursun
*/

function getLatin(){
	var lIn = document.getElementById('lquery').value;
	
	var leOut = lIn;
	var lOut = lIn.
	replace(/ئا/g, 'a').
	replace(/ا/g, 'a').
	replace(/ئە/g, 'E').
	replace(/ئه/g, 'E').
	replace(/ه/g, 'e').
	replace(/ە/g, 'e').
	replace(/ب/g, 'b').
	replace(/پ/g, 'p').
	replace(/ت/g, 't').
	replace(/ج/g, 'j').
	replace(/چ/g, 'ch').
	replace(/خ/g, 'x').
	replace(/د/g, 'd').
	replace(/ر/g, 'r').
	replace(/ز/g, 'z').
	replace(/ژ/g, 'zh').
	replace(/س/g, 's').
	replace(/ش/g, 'sh').
	replace(/غ/g, 'gh').
	replace(/ف/g, 'f').
	replace(/ق/g, 'q').
	replace(/ك/g, 'k').
	replace(/ک/g, 'k').
	replace(/گ/g, 'g').
	replace(/ڭ/g, 'ng').
	replace(/ل/g, 'l').
	replace(/م/g, 'm').
	replace(/ن/g, 'n').
	replace(/ھ/g, 'h').
	replace(/ئو/g, 'O').
	replace(/و/g, 'o').
	replace(/ئۇ/g, 'U').
	replace(/ۇ/g, 'u').
	replace(/ئۆ/g, 'Ö').
	replace(/ۆ/g, 'ö').
	replace(/ئۈ/g, 'Ü').
	replace(/ۈ/g, 'ü').
	replace(/ۋ/g, 'w').
	replace(/ئې/g, 'É').
	replace(/ې/g, 'é').
	replace(/ئى/g, 'I').
	replace(/ى/g, 'i').
	replace(/ي/g, 'y').
	replace(/؟/g, '?'). //new added
	replace(/؛/g, ';'). //new added
	replace(/،/g, ',');	//new adder

	document.getElementById('letext_out').innerHTML = leOut;
	document.getElementById('ltext_out').innerHTML = lOut;

	}