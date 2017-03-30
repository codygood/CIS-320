/**
 * Created by cody.good on 3/23/2017.
 */
<!-- AJAX Post -->


function getLogin() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log(dataFromServer);
        dataFromServer = dataFromServer.trim()

        if (dataFromServer == 'null') {
            $('#hideLogout').hide();
            $('#getLoginResult').html("Insert User Id to Login.")
        }
        else {
            $('#hideLogout').show();
            $('#getLoginResult').html("Logged in as: " + dataFromServer)
        }
    });

}

getLogin();

function login() {

    var url = "api/login_servlet";

    var loginId = $("#loginId").val();

    var dataToServer = {loginId : loginId};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log(dataFromServer);
        $("#loginId").val("");
        getLogin();
    });



}

function logout() {

    var url = "api/logout_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log(dataFromServer);
        getLogin()
    });


}


button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", login);

button = $('#logout');
button.on("click", logout);


