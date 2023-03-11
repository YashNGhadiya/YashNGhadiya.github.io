import * as $ from 'jquery';




class User {
    displayName: string;
    emailAddress: string;
    username: string;

    constructor(displayName = '', emailAddress = '', username = '') {
        this.displayName = displayName;
        this.emailAddress = emailAddress;
        this.username = username;
    }

    serialize() {
        return JSON.stringify({
            displayName: this.displayName,
            emailAddress: this.emailAddress,
            username: this.username
        });
    }
}

function DisplayLoginPage() {
    const messageArea = $('#messageArea');
    messageArea.hide();
    $('#loginButton').on('click', () => {
        let success = false;
        const user = new User();

        const users = [
            {username: 'user1', password: 'pass1', displayName: 'User One', emailAddress: 'user1@example.com'},
            {username: 'user2', password: 'pass2', displayName: 'User Two', emailAddress: 'user2@example.com'}
        ];

        for (const userData of users) {
            if (userData.username === $('#username').val() && userData.password === $('#password').val()) {
                success = true;
                user.displayName = userData.displayName;
                user.emailAddress = userData.emailAddress;
                user.username = userData.username;
                break;
            }
        }

        if (success) {
            sessionStorage.setItem('user', user.serialize());
            messageArea.removeClass('alert-danger');
            messageArea.hide();
            window.location.replace('contact-list.html');
        } else {
            $('#username').focus().select();
            messageArea.addClass('alert alert-danger');
            messageArea.text('Login failed. Please check your username and password.');
            messageArea.show();
        }
    });

    $('#cancelButton').on('click', () => {
        $('#loginForm')[0].reset();
        window.location.replace('index.html');
    });
}