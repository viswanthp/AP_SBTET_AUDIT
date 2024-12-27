define(['app'], function (app) {
    app.controller("AntiRaggingController", function ($scope, $state, AdminService, $filter) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
})