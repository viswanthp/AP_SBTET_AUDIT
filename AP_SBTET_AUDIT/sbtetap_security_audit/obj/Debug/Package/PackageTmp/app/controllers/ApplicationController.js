define(['app'], function (app) {
    app.controller("ApplicationController", function ($scope, StudentRegistrationService) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
})