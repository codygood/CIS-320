// Main Javascript File

var url = "api/name_list_get";


$.getJSON(url, null, function(json_result) {

        for (var i = 0; i < json_result.length; i++) {
            console.log(json_result[i].first);
            var mystring = json_result[i].phone;
            var phone = mystring.substring(0,3) + "-" + mystring.substring(3,6) + "-" + mystring.substring(6,10);
            $("#datatable tbody").append("<tr><td>" + json_result[i].id + "</td><td>" + json_result[i].first + "</td><td>" + json_result[i].last + "</td><td>" + json_result[i].email + "</td><td>" + phone + "</td><td>" + json_result[i].birthday + "</td></tr>");
        }
        console.log("Done");
    }
);


function showDialogAdd() {

    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');
}

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);



function saveFormChanges() {
    console.log("Saving changes to form");

    var valFirstName = $('#firstName').val();
    var regFirstName = /^[a-z ,.'-]+$/;

    if (regFirstName.test(valFirstName)) {
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");
        $('firstNameStatus').val("(success)");
        console.log("Ok");
    } else {
        $('#firstNameDiv').addClass("has-error");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameGlyph').addClass("glyphicon-remove");
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('firstNameStatus').val("(success)");
        var badFirstName = $('#firstName').val();
        console.log("Bad " + badFirstName);
    }

    var valLastName = $('#lastName').val();
    var regLastName = /^[a-z ,.'-]+$/;

    if (regLastName.test(valLastName)) {
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('lastNameStatus').val("(success)");
        console.log("Ok");
    } else {
        $('#lastNameDiv').addClass("has-error");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameGlyph').addClass("glyphicon-remove");
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('lastNameStatus').val("(success)");
        var badLastName = $('#lastName').val();
        console.log("Bad " + badLastName);
    }

    var valEmail = $('#email').val();
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEmail.test(valEmail)) {
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");
        $('emailStatus').val("(success)");
        console.log("Ok");
    } else {
        $('#emailDiv').addClass("has-error");
        $('#emailDiv').removeClass("has-success");
        $('#emailGlyph').addClass("glyphicon-remove");
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('emailStatus').val("(success)");
        var badEmail = $('#email').val();
        console.log("Bad " + badEmail);
    }

    var valPhone = $('#phone').val();
    var regPhone = /^\d{3}-\d{3}-\d{4}$/;

    if (regPhone.test(valPhone)) {
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");
        $('phoneStatus').val("(success)");
        console.log("Ok");
    } else {
        $('#phoneDiv').addClass("has-error");
        $('#phoneDiv').removeClass("has-success");
        $('#phoneGlyph').addClass("glyphicon-remove");
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('phoneStatus').val("(success)");
        var badPhone = $('#phone').val();
        console.log("Bad " + badPhone);
    }

    var valBirthday = $('#birthday').val();
    var regBirthday = /^\d{4}-\d{2}-\d{2}$/;

    if (regBirthday.test(valBirthday)) {
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");
        $('birthdayStatus').val("(success)");
        console.log("Ok");
    } else {
        $('#birthdayDiv').addClass("has-error");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayGlyph').addClass("glyphicon-remove");
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('birthdayStatus').val("(success)");
        var badBirthday = $('#phone').val();
        console.log("Bad " + badBirthday);
    }

}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveFormChanges);


