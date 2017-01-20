/**
 * Created by cody.good on 1/19/2017.
 */

function helloFunction(event) {
    console.log("Hello");
}

var formButton1 = $('#button1');
formButton1.on("click", helloFunction);



function addFunction(event) {
	var number1 = $('#field1').val();
	var number2 = $('#field2').val();
	var addNumbers = (Number(number1) + Number(number2));
	$('#field3').val(addNumbers);
}

var formButton2 = $('#button2');
formButton2.on("click", addFunction);



function hideFunction(event) {
	if ($('#paragraphToHide').is(":visible")) {
		$('#paragraphToHide').hide();
	} else {
		$('#paragraphToHide').show();
	}
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);




function validatePhone(event) {
	var validateNumber = $('#phoneField').val();
	var regularExpression = /^\d{3}-\d{3}-\d{4}$/

	if (regularExpression.test(validateNumber)) {
        console.log("Ok");
    } else {
    	var badNumber = $('#phoneField').val();
        console.log("Bad " + badNumber);
    }
}


var formButton4 = $('#button4');
formButton4.on("click", validatePhone);





function jsonFunction(event) {

    var formObject1 = {};
    var formObject2 = {};
    var formObject3 = {};

    formObject1.firstName = $('#firstName').val();
    formObject2.lastName = $('#lastName').val();
    formObject3.email = $('#email').val();

    var jsonString1 = JSON.stringify(formObject1);
    var jsonString2 = JSON.stringify(formObject2);
    var jsonString3 = JSON.stringify(formObject3);

    console.log(jsonString1 + "," + jsonString2 + "," + jsonString3)
}


var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);