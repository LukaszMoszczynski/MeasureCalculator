var answer = document.getElementById('answer');
var field = document.getElementById('field');
var btn = document.getElementById('btn');
var options = document.getElementById('options');





function calculate() {
	var opt = this.options[this.selectedIndex].value;
	var fieldValue = parseFloat(field.value);
	if (!isNaN(fieldValue)) {
///temps
		if (opt == "celcius") {
			answer.innerHTML =  fieldValue + "&deg Celsjusza = " + ((fieldValue*1.8)+32).toFixed(2) + "&deg Fahrenheita" + "<br/>" +
								fieldValue + "&deg Celsjusza = " + (fieldValue+273.15).toFixed(2) + "&deg Kelvina";
		}

		if (opt == "kelvin") {
			answer.innerHTML =  fieldValue + "&deg Kelvina = " + (fieldValue-273.15).toFixed(2) + "&deg Celsjusza" + "<br/>" +
								fieldValue + "&deg Kelvina = " + ((fieldValue*1.8)-459.67).toFixed(2) + "&deg Fahrenheita";
		}

		if (opt == "fahrenheit") {
			answer.innerHTML =  fieldValue + "&deg Fahrenheita = " + ((fieldValue-32)/1.8).toFixed(2) + "&deg Celsjusza" + "<br/>" +
								fieldValue + "&deg Fahrenheita = " + ((fieldValue+459.67)*5/9).toFixed(2) + "&deg Kelvina";
		}

	//length
		if (opt == "meter") {
			answer.innerHTML =  fieldValue + "m = " + (fieldValue*39.37).toFixed(4) + "\"" + "<br/>" +
								fieldValue + "m = " + (fieldValue*3.28).toFixed(4) + "ft" + "<br/>" +
								fieldValue + "m = " + (fieldValue*1.094).toFixed(4) + "yd" + "<br/>" +
								fieldValue + "m = " + (fieldValue*0.0006214).toFixed(6) + "mi" + "<br/>" +
								fieldValue + "m = " + (fieldValue*0.0005399).toFixed(6) + "nmi";
		}

		if (opt == "inch") {
			answer.innerHTML =  fieldValue + "\" = " + (fieldValue/39.37).toFixed(4) + "m " + "<br/>" +
								fieldValue + "\" = " + (fieldValue*0.0833).toFixed(4) + "ft" + "<br/>" +
								fieldValue + "\" = " + (fieldValue*0.0277).toFixed(4) + "yd" + "<br/>" +
								fieldValue + "\" = " + (fieldValue*0.00001578).toFixed(6) + "mi" + "<br/>" +
								fieldValue + "\" = " + (fieldValue*0.00001371).toFixed(6) + "nmi";
		}

		if (opt == "foot") {
			answer.innerHTML =  fieldValue + "ft = " + (fieldValue/3.2808).toFixed(4) + "m " + "<br/>" +
								fieldValue + "ft = " + (fieldValue*12).toFixed(4) + "\"" + "<br/>" +
								fieldValue + "ft = " + (fieldValue*0.33).toFixed(4) + "yd" + "<br/>" +
								fieldValue + "ft = " + (fieldValue*0.0001894).toFixed(6) + "mi" + "<br/>" +
								fieldValue + "ft = " + (fieldValue*0.0001646).toFixed(6) + "nmi";
		}

		if (opt == "yard") {
			answer.innerHTML =  fieldValue + "yd = " + (fieldValue/1.0936).toFixed(4) + "m " + "<br/>" +
								fieldValue + "yd = " + (fieldValue*36).toFixed(4) + "\"" + "<br/>" +
								fieldValue + "yd = " + (fieldValue*3).toFixed(4) + "ft" + "<br/>" +
								fieldValue + "yd = " + (fieldValue*0.0005682).toFixed(6) + "mi" + "<br/>" +
								fieldValue + "yd = " + (fieldValue*0.0004937).toFixed(6) + "nmi";
		}

		if (opt == "landMile") {
			answer.innerHTML =  fieldValue + "mi = " + (fieldValue*1609.3).toFixed(6) + "m " + "<br/>" +
								fieldValue + "mi = " + (fieldValue*63358.26).toFixed(6) + "\"" + "<br/>" +
								fieldValue + "mi = " + (fieldValue* 5279.85).toFixed(6) + "ft" + "<br/>" +
								fieldValue + "mi = " + (fieldValue*1759.95).toFixed(6) + "yd" + "<br/>" +
								fieldValue + "mi = " + (fieldValue*0.86895).toFixed(6) + "nmi";
		}

		if (opt == "nauticalMile") {
			answer.innerHTML =  fieldValue + "nmi = " + (fieldValue*1852).toFixed(6) + "m " + "<br/>" +
								fieldValue + "nmi = " + (fieldValue*72913.38).toFixed(6) + "\"" + "<br/>" +
								fieldValue + "nmi = " + (fieldValue*6076.12).toFixed(6) + "ft" + "<br/>" +
								fieldValue + "nmi = " + (fieldValue*2025.37).toFixed(6) + "yd" + "<br/>" +
								fieldValue + "nmi = " + (fieldValue*1.15).toFixed(6) + "mi";
		}

	//weight
		if (opt == "gram") {
			answer.innerHTML =  fieldValue + "g = " + (fieldValue*0.001).toFixed(6) + "kg" + "<br/>" +
								fieldValue + "g = " + (fieldValue*0.000001).toFixed(9) + "ton" + "<br/>" +
								fieldValue + "g = " + (fieldValue*0.035273).toFixed(6) + "oz" + "<br/>" +
								fieldValue + "g = " + (fieldValue*0.0022046).toFixed(6) + "Ib";
		}

		if (opt == "kilogram") {
			answer.innerHTML =  fieldValue + "kg = " + (fieldValue*1000).toFixed(4) + "g " + "<br/>" +
								fieldValue + "kg = " + (fieldValue*0.001).toFixed(6) + "ton" + "<br/>" +
								fieldValue + "kg = " + (fieldValue*35.27).toFixed(4) + "oz" + "<br/>" +
								fieldValue + "kg = " + (fieldValue*2.204).toFixed(6) + "Ib";
		}

		if (opt == "ton") {
			answer.innerHTML =  fieldValue + "ton = " + (fieldValue*1000000).toFixed(2) + "g " + "<br/>" +
								fieldValue + "ton = " + (fieldValue*1000).toFixed(4) + "kg" + "<br/>" +
								fieldValue + "ton = " + (fieldValue*35273.39).toFixed(2) + "oz" + "<br/>" +
								fieldValue + "ton = " + (fieldValue*2204.59).toFixed(4) + "Ib";
		}

		if (opt == "ounce") {
			answer.innerHTML =  fieldValue + "oz = " + (fieldValue*28.35).toFixed(4) + "g " + "<br/>" +
								fieldValue + "oz = " + (fieldValue*0.02835).toFixed(6) + "kg" + "<br/>" +
								fieldValue + "oz = " + (fieldValue*0.00002835).toFixed(9) + "ton" + "<br/>" +
								fieldValue + "oz = " + (fieldValue*0.0625).toFixed(6) + "Ib";
		}

		if (opt == "pound") {
			answer.innerHTML =  fieldValue + "Ib = " + (fieldValue*453.6).toFixed(4) + "g " + "<br/>" +
								fieldValue + "Ib = " + (fieldValue*0.4536).toFixed(6) + "kg" + "<br/>" +
								fieldValue + "Ib = " + (fieldValue*0.0004536).toFixed(9) + "ton" + "<br/>" +
								fieldValue + "Ib = " + (fieldValue*16).toFixed(6) + "oz";
		}
	} else {
		answer.innerHTML = "Wprowadź liczbę w formacie:" + "<br/>" + "00,00 lub" + "<br/>" + "00.00";
	}
}

field.addEventListener('keypress',(function (e) {
 	if (e.keyCode == 43 || e.keyCode == 45) {
    	e.preventDefault();    	
    }

    if (e.keyCode == 44 || e.keyCode == 46) { 	
    	var fieldValue = field.value;
    	if ((fieldValue.indexOf('.') != -1) || (fieldValue.indexOf(',') != -1)) {
    		e.preventDefault();
    		answer.innerHTML = "Można wprowadzić tylko jeden separator dziesiętny";
    	} else {
    		return;
    	} 
    	
    }


    if (e.keyCode == 13) {
		e.preventDefault();
		options.click();
	}
}), false);

function count() {
	options.click();
}

options.addEventListener('change', calculate, false);
options.addEventListener('click', calculate, false);
btn.addEventListener('click', count, false);

