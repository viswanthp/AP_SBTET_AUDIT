define(['app'], function (app) {
    app.controller("LoginController", function ($scope, $crypto, AdminService, SystemUserService, AppSettings, $http, $localStorage, $state) {

        sessionStorage.loggedIn = "no";
        $scope.Login = {
            UserName: "",
            UserPassword: ""
        }

        $scope.UserNamemessage = "";
        $scope.UserPasswordmessage = "";
        $scope.message = "";

        var eKey = SystemUserService.GetEKey();
        eKey.then(function (res) {
            $scope.LoginEKey = res;
            sessionStorage.Ekey = res;

        });

        var sessioneKey = SystemUserService.GetSessionEKey();
        sessioneKey.then(function (res) {
            $scope.LoginSessionEKey = res;
            sessionStorage.SessionEkey = res;

        });
        $scope.SessionCaptcha = sessionStorage.getItem('SessionCaptcha')

        var captcha = AdminService.GetCaptchaString($scope.SessionCaptcha);
        captcha.then(function (response) {
            try {
                var res = JSON.parse(response);
                $scope.GetCatcha = res[0].Text;
                $scope.CaptchaImage = res[0].Image;

            } catch (err) {
                $scope.GetCatcha = ''
            }
        }, function (error) {
            $scope.GetCatcha = ''
           // alert('Unable to load Captcha')
        });

        $scope.GetCaptchaData = function () {
            var captcha = AdminService.GetCaptchaString($scope.SessionCaptcha);
            captcha.then(function (response) {
                try {
                    var res = JSON.parse(response);
                    $scope.GetCatcha = res[0].Text;
                    $scope.CaptchaImage = res[0].Image;

                } catch (err) {
                    $scope.GetCatcha = ''
                }
            }, function (error) {
                $scope.GetCatcha = ''
                alert('Unable to load Captcha')
            });
        }



        $scope.ValidateCaptcha = function () {
            var captcha = AdminService.ValidateCaptcha($scope.SessionCaptcha, $scope.CaptchaText);
            captcha.then(function (res) {
                var response = JSON.parse(res)
                if (response[0].ResponceCode == '200') {
                    alert(response[0].ResponceDescription)
                    $scope.CaptchaText = "";
                    $scope.GetCatcha = response[0].Captcha
                    var captcha = JSON.parse(response[0].Captcha)
                    $scope.CaptchaImage = captcha[0].Image;
                } else {
                    alert(response[0].ResponceDescription)
                    $scope.CaptchaText = "";
                    $scope.GetCatcha = response[0].Captcha
                    var captcha = JSON.parse(response[0].Captcha)
                    $scope.CaptchaImage = captcha[0].Image;
                }

            }, function (error) {
                $scope.GetCatcha = ''
                alert('Unable to load Captcha')
            });
        }

        $scope.keyLogin = function ($event) {
            if ($event.keyCode == 13) {
                $scope.Login();
            }
        }

        //$scope.LoadImg = false;
        $scope.LoginToken = "";
        $scope.LoginEKey = "";
        $scope.LoginSessionEkey = "";

        $scope.Login = function () {
            //alert()
            if ($scope.UserName == undefined) {
                $scope.UserName = ""
            };
            if ($scope.Password == undefined) {
                $scope.Password = ""
            };

            if ($scope.UserName == "" && $scope.Password == "") {
                $scope.UserNamemessage = "* Enter user name";
                $scope.UserPasswordmessage = "* Enter password";
                alert("Enter Username And Password");
                return;
            }
            if ($scope.UserName == "") {
                $scope.UserNamemessage = "* Enter user name";
                alert("Enter Username");
                return;
            }
            else if ($scope.Password == "") {
                $scope.UserPasswordmessage = "* Enter password";
                alert("Enter Password");
                return;
            }
            else {

                if ($scope.Password !== null && $scope.UserName !== null) {
                    var Type = "student";
                    var data = $crypto.encrypt($crypto.encrypt($scope.Password, 'HBSBP9214EDU00TS'), $scope.LoginEKey) + "$$@@$$" + $crypto.encrypt($scope.UserName, $scope.LoginEKey) + "$$@@$$" + $scope.LoginEKey + "$$@@$$" + $scope.LoginSessionEKey + "$$@@$$" + Type;
                    $http.post(AppSettings.WebApiUrl + 'api/SystemUser/GetUserLogin', data, {}).then(function (response) {

                        //$scope.LoadImg = true;
                        var UserRights = [];
                        sessionStorage.loggedIn = "yes";
                        $localStorage.authToken = response.data.token + "$$@@$$" + $scope.LoginEKey;
                        var status = response.data.data.UserAuth[0].ResponceCode;
                        if (status != "200") {
                            alert(response.data.data.UserAuth[0].RespoceDescription);
                            return;
                        } else {

                            $localStorage.SessionID = $scope.LoginSessionEKey;
                            if (response.data.data.SystemUser[0].UserTypeID == 0) {
                                //try {
                                $localStorage.authorizationData = {
                                    token: $localStorage.authToken,
                                    SessionID: $scope.LoginSessionEkey,
                                    UserTypeID: response.data.data.SystemUser[0].UserTypeID,
                                    UserName: response.data.data.SystemUser[0].UserName.toUpperCase(),
                                    UserID: response.data.data.SystemUser[0].UserID
                                };
                                $state.go('Dashboard');
                            } else {
                                response.data = response.data.data.SystemUser[0];

                                // try {
                                $localStorage.authorizationData = {
                                    token: $localStorage.authToken,
                                    SessionID: $scope.LoginSessionEkey,
                                    UserID: response.data.UserID,
                                    UserName: response.data.UserName.toUpperCase(),
                                    UserTypeID: response.data.UserTypeID,
                                };

                                //} catch (err) {

                                //}
                                $state.go('Dashboard');
                            }
                            //$state.go('Dashboard');
                        }



                    });
                };
            }

        }
        $scope.ForgetPasswordChange = function () {
            $state.go('ForgetPassword');
        }


        $("#username").focus();
        $scope.ClearErrorText = function ($event) {
            $scope.UserNamemessage = "";
            $scope.UserPasswordmessage = "";
            $scope.message = "";
        };
        $scope.$on('onUnload', function (e) {
            delete $localStorage.authorizationData;
            sessionStorage.loggedIn = "no";
        });
        $scope.LoginbocLogin = function () {
            $state.go('Login');
        }


    })
})