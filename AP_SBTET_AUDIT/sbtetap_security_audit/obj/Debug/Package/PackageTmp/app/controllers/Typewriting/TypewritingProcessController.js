define(['app'], function (app) {
    app.controller("TypewritingProcessController", function ($scope, $state, AdminService, $filter) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
})