define(['app'], function (app) {
    app.controller("StaffDutiesController", function ($scope, $state, AdminService, $filter, $localStorage) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
})