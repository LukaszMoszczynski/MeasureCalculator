var answer = document.getElementById('answer');
var field = document.getElementById('field');
var btn = document.getElementById('btn');
var options = document.getElementById('options');


function celcius(fieldValue) {
	answer.innerHTML =  fieldValue + "&deg Celsjusza = " + ((fieldValue*1.8)+32).toFixed(2) + "&deg Fahrenheita" + "<br/>" +
						fieldValue + "&deg Celsjusza = " + (fieldValue+273.15).toFixed(2) + "&deg Kelvina";
}

function kelvin(fieldValue) {
	answer.innerHTML =  fieldValue + "&deg Kelvina = " + (fieldValue-273.15).toFixed(2) + "&deg Celsjusza" + "<br/>" +
						fieldValue + "&deg Kelvina = " + ((fieldValue*1.8)-459.67).toFixed(2) + "&deg Fahrenheita";
}

function fahrenheit(fieldValue) {
	answer.innerHTML =  fieldValue + "&deg Fahrenheita = " + ((fieldValue-32)/1.8).toFixed(2) + "&deg Celsjusza" + "<br/>" +
						fieldValue + "&deg Fahrenheita = " + ((fieldValue+459.67)*5/9).toFixed(2) + "&deg Kelvina";
}

function meter(fieldValue) {
	answer.innerHTML =  fieldValue + "m = " + (fieldValue*39.37).toFixed(4) + "\"" + "<br/>" +
						fieldValue + "m = " + (fieldValue*3.28).toFixed(4) + "ft" + "<br/>" +
						fieldValue + "m = " + (fieldValue*1.094).toFixed(4) + "yd" + "<br/>" +
						fieldValue + "m = " + (fieldValue*0.0006214).toFixed(6) + "mi" + "<br/>" +
						fieldValue + "m = " + (fieldValue*0.0005399).toFixed(6) + "nmi";
}

function inch(fieldValue) {
	answer.innerHTML =  fieldValue + "\" = " + (fieldValue/39.37).toFixed(4) + "m " + "<br/>" +
						fieldValue + "\" = " + (fieldValue*0.0833).toFixed(4) + "ft" + "<br/>" +
						fieldValue + "\" = " + (fieldValue*0.0277).toFixed(4) + "yd" + "<br/>" +
						fieldValue + "\" = " + (fieldValue*0.00001578).toFixed(6) + "mi" + "<br/>" +
						fieldValue + "\" = " + (fieldValue*0.00001371).toFixed(6) + "nmi";
}

function foot(fieldValue) {
	answer.innerHTML =  fieldValue + "ft = " + (fieldValue/3.2808).toFixed(4) + "m " + "<br/>" +
						fieldValue + "ft = " + (fieldValue*12).toFixed(4) + "\"" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.33).toFixed(4) + "yd" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.0001894).toFixed(6) + "mi" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.0001646).toFixed(6) + "nmi";
}

function foot(fieldValue) {
	answer.innerHTML =  fieldValue + "ft = " + (fieldValue/3.2808).toFixed(4) + "m " + "<br/>" +
						fieldValue + "ft = " + (fieldValue*12).toFixed(4) + "\"" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.33).toFixed(4) + "yd" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.0001894).toFixed(6) + "mi" + "<br/>" +
						fieldValue + "ft = " + (fieldValue*0.0001646).toFixed(6) + "nmi";
}

function yard(fieldValue) {
	answer.innerHTML =  fieldValue + "yd = " + (fieldValue/1.0936).toFixed(4) + "m " + "<br/>" +
						fieldValue + "yd = " + (fieldValue*36).toFixed(4) + "\"" + "<br/>" +
						fieldValue + "yd = " + (fieldValue*3).toFixed(4) + "ft" + "<br/>" +
						fieldValue + "yd = " + (fieldValue*0.0005682).toFixed(6) + "mi" + "<br/>" +
						fieldValue + "yd = " + (fieldValue*0.0004937).toFixed(6) + "nmi";
}

function landMile(fieldValue) {
	answer.innerHTML =  fieldValue + "mi = " + (fieldValue*1609.3).toFixed(6) + "m " + "<br/>" +
						fieldValue + "mi = " + (fieldValue*63358.26).toFixed(6) + "\"" + "<br/>" +
						fieldValue + "mi = " + (fieldValue* 5279.85).toFixed(6) + "ft" + "<br/>" +
						fieldValue + "mi = " + (fieldValue*1759.95).toFixed(6) + "yd" + "<br/>" +
						fieldValue + "mi = " + (fieldValue*0.86895).toFixed(6) + "nmi";
}

function nauticalMile(fieldValue) {
	answer.innerHTML =  fieldValue + "nmi = " + (fieldValue*1852).toFixed(6) + "m " + "<br/>" +
						fieldValue + "nmi = " + (fieldValue*72913.38).toFixed(6) + "\"" + "<br/>" +
						fieldValue + "nmi = " + (fieldValue*6076.12).toFixed(6) + "ft" + "<br/>" +
						fieldValue + "nmi = " + (fieldValue*2025.37).toFixed(6) + "yd" + "<br/>" +
						fieldValue + "nmi = " + (fieldValue*1.15).toFixed(6) + "mi";
}

function gram(fieldValue) {
	answer.innerHTML =  fieldValue + "g = " + (fieldValue*0.001).toFixed(6) + "kg" + "<br/>" +
						fieldValue + "g = " + (fieldValue*0.000001).toFixed(9) + "ton" + "<br/>" +
						fieldValue + "g = " + (fieldValue*0.035273).toFixed(6) + "oz" + "<br/>" +
						fieldValue + "g = " + (fieldValue*0.0022046).toFixed(6) + "Ib";
}

function kilogram(fieldValue) {
	answer.innerHTML =  fieldValue + "kg = " + (fieldValue*1000).toFixed(4) + "g " + "<br/>" +
						fieldValue + "kg = " + (fieldValue*0.001).toFixed(6) + "ton" + "<br/>" +
						fieldValue + "kg = " + (fieldValue*35.27).toFixed(4) + "oz" + "<br/>" +
						fieldValue + "kg = " + (fieldValue*2.204).toFixed(6) + "Ib";
}

function ton(fieldValue) {
	answer.innerHTML =  fieldValue + "ton = " + (fieldValue*1000000).toFixed(2) + "g " + "<br/>" +
						fieldValue + "ton = " + (fieldValue*1000).toFixed(4) + "kg" + "<br/>" +
						fieldValue + "ton = " + (fieldValue*35273.39).toFixed(2) + "oz" + "<br/>" +
						fieldValue + "ton = " + (fieldValue*2204.59).toFixed(4) + "Ib";
}

function ounce(fieldValue) {
	answer.innerHTML =  fieldValue + "oz = " + (fieldValue*28.35).toFixed(4) + "g " + "<br/>" +
						fieldValue + "oz = " + (fieldValue*0.02835).toFixed(6) + "kg" + "<br/>" +
						fieldValue + "oz = " + (fieldValue*0.00002835).toFixed(9) + "ton" + "<br/>" +
						fieldValue + "oz = " + (fieldValue*0.0625).toFixed(6) + "Ib";
}

function pound(fieldValue) {
	answer.innerHTML =  fieldValue + "Ib = " + (fieldValue*453.6).toFixed(4) + "g " + "<br/>" +
						fieldValue + "Ib = " + (fieldValue*0.4536).toFixed(6) + "kg" + "<br/>" +
						fieldValue + "Ib = " + (fieldValue*0.0004536).toFixed(9) + "ton" + "<br/>" +
						fieldValue + "Ib = " + (fieldValue*16).toFixed(6) + "oz";
}




function calculate() {

	var opt = this.options[this.selectedIndex].value;
	fieldReplace = field.value.replace(/,/g, '.');
	var fieldValue = parseFloat(fieldReplace);

	if (!isNaN(fieldValue)) {
///temps
		if (opt == "celcius") {
			celcius(fieldValue);
		}

		if (opt == "kelvin") {
			kelvin(fieldValue);
		}

		if (opt == "fahrenheit") {
			fahrenheit(fieldValue);
		}

	//length
		if (opt == "meter") {
			meter(fieldValue);
		}

		if (opt == "inch") {
			inch(fieldValue);
		}

		if (opt == "foot") {
			foot(fieldValue);
		}

		if (opt == "yard") {
			yard(fieldValue);
		}

		if (opt == "landMile") {
			landMile(fieldValue);
		}

		if (opt == "nauticalMile") {
			nauticalMile(fieldValue);
		}

	//weight
		if (opt == "gram") {
			gram(fieldValue);
		}

		if (opt == "kilogram") {
			kilogram(fieldValue);
		}

		if (opt == "ton") {
			ton(fieldValue);
		}

		if (opt == "ounce") {
			ounce(fieldValue);
		}

		if (opt == "pound") {
			pound(fieldValue);
		}
	} else {
		answer.innerHTML = "Wprowadź liczbę w formacie:" + "<br/>" + "00,00 lub" + "<br/>" + "00.00";
	}
}

field.addEventListener('keypress',(function (e) {

	this.value = this.value.replace(/[`]/g, '');
	var fieldValue = field.value;

	if (e.keyCode == 45 && (fieldValue.indexOf('-') != -1)) {
		e.preventDefault();
		answer.innerHTML = "Można wprowadzić tylko jeden znak minus";
	}

    if ((e.keyCode == 44 || e.keyCode == 46) && ((fieldValue.indexOf('.') != -1) || (fieldValue.indexOf(',') != -1))) { 
    	e.preventDefault();
    	answer.innerHTML = "Można wprowadzić tylko jeden separator dziesiętny";
    } 

	if (e.keyCode == 13) {
			e.preventDefault();
			options.click();
	} 

	if (!((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode < 44 || e.keyCode > 46))) {
            return;
    }

	else {
		e.preventDefault();
    }   	

}), false);

function count() {
	options.click();
}


options.addEventListener('change', calculate, false);
options.addEventListener('click', calculate, false);
btn.addEventListener('click', count, false);


