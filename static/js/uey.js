/*
copyright ©2012 Rehmetjan Tursun
*/

function getEreb(){
	var eIn = document.getElementById('equery').value;
	
	var elOut = eIn;
	var eOut = eIn.
	
	replace(/ng/g, 'ڭ').
	replace(/Gh/g, 'غ').replace(/gh/g, 'غ').
	replace(/Ch/g, 'چ').replace(/ch/g, 'چ').
	replace(/Sh/g, 'ش').replace(/sh/g, 'ش').
	replace(/j/g, 'ج').replace(/j/g, 'ج').
	replace(/A/g, 'ئا').replace(/a/g, 'ا').
	replace(/E/g, 'ئە').replace(/e/g, 'ە').
	replace(/B/g, 'ب').replace(/b/g, 'ب').
	replace(/P/g, 'پ').replace(/p/g, 'پ').
	replace(/T/g, 'ت').replace(/t/g, 'ت').
	replace(/X/g, 'خ').replace(/x/g, 'خ').
	replace(/K/g, 'ك').replace(/k/g, 'ك').
	replace(/D/g, 'د').replace(/d/g, 'د').
	replace(/R/g, 'ر').replace(/r/g, 'ر').
	replace(/Z/g, 'ز').replace(/z/g, 'ز').
	replace(/Zh/g, 'ژ').replace(/zh/g, 'ژ').
	replace(/S/g, 'س').replace(/s/g, 'س').
	replace(/F/g, 'ف').replace(/f/g, 'ف').
	replace(/Q/g, 'ق').replace(/q/g, 'ق').
	replace(/G/g, 'گ').replace(/g/g, 'گ').
	replace(/L/g, 'ل').replace(/l/g, 'ل').
	replace(/M/g, 'م').replace(/m/g, 'م').
	replace(/N/g, 'ن').replace(/n/g, 'ن').
	replace(/H/g, 'ھ').replace(/h/g, 'ھ').
	replace(/O/g, 'ئو').replace(/o/g, 'و').
	replace(/U/g, 'ئۇ').replace(/u/g, 'ۇ').
	replace(/Ö/g, 'ئۆ').replace(/ö/g, 'ۆ').
	replace(/Ü/g, 'ئۈ').replace(/ü/g, 'ۈ').
	replace(/W/g, 'ۋ').replace(/w/g, 'ۋ').
	replace(/É/g, 'ئې').replace(/é/g, 'ې').
	replace(/I/g, 'ئى').replace(/i/g, 'ى').
	replace(/Y/g, 'ي').replace(/y/g, 'ي').
	replace(/'?'/g, '؟').replace(/','/g, '،'); //
	//replace(/;/g, '؛').replace(/;/g, '؛'). //
	//replace(/,/g, '،').replace(/,/g, '،');	//

	document.getElementById('eltext_out').innerHTML = elOut;
	document.getElementById('etext_out').innerHTML = eOut;

	}