function DisplayLoginPage() {

    var messageArea = $('#messageArea');
    messageArea.hide();


    $('#loginButton').on('click', function() {

        var success = false;


        var user = new Core.User();


        $.get('/data/users.json', function(users) {
            // Check if the username and password match
            users.forEach(function(userData) {
                if (userData.username === $('#username').val() && userData.password === $('#password').val()) {
                    success = true;
                    user.displayName = userData.displayName;
                    user.emailAddress = userData.emailAddress;
                    user.username = userData.username;
                }
            });


            if (success) {
                sessionStorage.setItem('user', user.serialize());
                messageArea.removeAttr('class');
                messageArea.hide();
                window.location.replace('contact-list.html');
            } else {

                $('#username').focus().select();
                messageArea.attr('class', 'alert alert-danger');
                messageArea.text('Login failed. Please check your username and password.');
                messageArea.show();
            }
        });
    });


    $('#cancelButton').on('click', function() {
        // Reset the login form and return to index.html
        $('#loginForm')[0].reset();
        window.location.replace('index.html');
    });
}