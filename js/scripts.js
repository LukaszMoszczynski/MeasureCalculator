
var answer = document.getElementById('answer');
var field = document.getElementById('field');
var btn = document.getElementById('btn');
var options = document.getElementById('options');


function calculate() {
	var opt = this.options[this.selectedIndex].value;
	var fieldValue = parseFloat(field.value);
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
		answer.innerHTML =  fieldValue + "m = " + (fieldValue*39.370).toFixed(4) + "\"" + "<br/>" +
							fieldValue + "m = " + (fieldValue*3.2808).toFixed(4) + "ft" + "<br/>" +
							fieldValue + "m = " + (fieldValue*1.0936).toFixed(4) + "yd" + "<br/>" +
							fieldValue + "m = " + (fieldValue*0.00062137).toFixed(6) + "mi" + "<br/>" +
							fieldValue + "m = " + (fieldValue*0.00053996).toFixed(6) + "nmi";
	}
	if (opt == "inch") {
		answer.innerHTML =  fieldValue + "\" = " + (fieldValue/39.370).toFixed(4) + "m " + "<br/>" +
							fieldValue + "\" = " + (fieldValue*0.083333).toFixed(4) + "ft" + "<br/>" +
							fieldValue + "\" = " + (fieldValue*0.027778).toFixed(4) + "yd" + "<br/>" +
							fieldValue + "\" = " + (fieldValue*0.000015783).toFixed(6) + "mi" + "<br/>" +
							fieldValue + "\" = " + (fieldValue*0.000013715).toFixed(6) + "nmi";
	}
	if (opt == "foot") {
		answer.innerHTML =  fieldValue + "ft = " + (fieldValue/3.2808).toFixed(4) + "m " + "<br/>" +
							fieldValue + "ft = " + (fieldValue*12).toFixed(4) + "\"" + "<br/>" +
							fieldValue + "ft = " + (fieldValue*0.33333).toFixed(4) + "yd" + "<br/>" +
							fieldValue + "ft = " + (fieldValue*0.00018939).toFixed(6) + "mi" + "<br/>" +
							fieldValue + "ft = " + (fieldValue*0.00016458).toFixed(6) + "nmi";
	}
	if (opt == "yard") {
		answer.innerHTML =  fieldValue + "yd = " + (fieldValue/1.0936).toFixed(4) + "m " + "<br/>" +
							fieldValue + "yd = " + (fieldValue*36).toFixed(4) + "\"" + "<br/>" +
							fieldValue + "yd = " + (fieldValue*3).toFixed(4) + "ft" + "<br/>" +
							fieldValue + "yd = " + (fieldValue*0.00056818).toFixed(6) + "mi" + "<br/>" +
							fieldValue + "yd = " + (fieldValue*0.00049374).toFixed(6) + "nmi";
	}
	if (opt == "landMile") {
		answer.innerHTML =  fieldValue + "mi = " + (fieldValue*1609.3).toFixed(6) + "m " + "<br/>" +
							fieldValue + "mi = " + (fieldValue*63358.26771).toFixed(6) + "\"" + "<br/>" +
							fieldValue + "mi = " + (fieldValue* 5279.85564).toFixed(6) + "ft" + "<br/>" +
							fieldValue + "mi = " + (fieldValue*1759.951881).toFixed(6) + "yd" + "<br/>" +
							fieldValue + "mi = " + (fieldValue* 0.86895248).toFixed(6) + "nmi";
	}
	if (opt == "nauticalMile") {
		answer.innerHTML =  fieldValue + "nmi = " + (fieldValue*1852).toFixed(6) + "m " + "<br/>" +
							fieldValue + "nmi = " + (fieldValue*72913.3858).toFixed(6) + "\"" + "<br/>" +
							fieldValue + "nmi = " + (fieldValue*6076.11548).toFixed(6) + "ft" + "<br/>" +
							fieldValue + "nmi = " + (fieldValue*2025.37183).toFixed(6) + "yd" + "<br/>" +
							fieldValue + "nmi = " + (fieldValue*1.15081091).toFixed(6) + "mi";
	}

}

function count() {
	options.click();
}

field.addEventListener('keypress',(function(e) {
	if (e.keyCode == 13) {
	e.preventDefault();
	options.click();
	}
}),false);

options.addEventListener('change', calculate, false);
options.addEventListener('click', calculate, false);
btn.addEventListener('click', count, false);

