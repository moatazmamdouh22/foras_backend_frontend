

    
(function () {
    angular.module('moaqebAdmin', ['ngCookies'])
        .filter('cmdate', [
            '$filter', function ($filter) {
                return function (input, format) {
                    return $filter('date')(new Date(input), format);
                };
            }
        ])

 

        .controller("SignInCtrl", function ($scope, $http, $rootScope, $window, $rootScope, $cookieStore) {
            $rootScope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
            $rootScope.moaqebAdminID = $cookieStore.get('moaqebAdminID');



            if ($rootScope.moaqebLang = $cookieStore.get('moaqebLang')) {
                if ($rootScope.moaqebLang == 'en') {
                    $('body').css("direction", "ltr");
                } else {
                    $cookieStore.put('moaqebLang', 'ar')
                    $rootScope.moaqebLang = $cookieStore.get('moaqebLang');
                    $('body').css("direction", "rtl");

                }
            }


            if ($rootScope.moaqebAdminID && $rootScope.moaqebAdminID.length > 0) {
                $window.open("http://165.22.127.119/MoaqebAdmin/html/moaqebAdmin.html", "_self");
                // $window.open("/Website/html/moaqebAdmin.html", "_self");
            }


            $rootScope.changeLang = function (lang) {
                $cookieStore.put('moaqebLang', lang);
                $rootScope.moaqebLang = $cookieStore.get('moaqebLang');
                if ($rootScope.moaqebLang == 'ar') {
                    $('body').css("direction", "rtl");
                } else {
                    $('body').css("direction", "ltr");

                }
            }
            $rootScope.alertMessageLang = function (msgAr, msgEn, lang) {
                if (lang == 'ar') {
                    alert(msgAr);
                } else {
                    alert(msgEn);
                }

            }

            $scope.loginFun = function () {
                var mail = $('#emailid').val();
                var pass = $('#passwordid').val();
                $http.get("/api/admin/login?val=" + mail + "&password=" + pass)
                    .then(function (response) {
                        $rootScope.moaqebAdmin = response.data;
                        $cookieStore.put('moaqebAdmin', $rootScope.moaqebAdmin);
                        $cookieStore.put('moaqebAdminID', $rootScope.moaqebAdmin._id);

                        if ($rootScope.moaqebLang = $cookieStore.get('moaqebLang')) {
                            if ($rootScope.moaqebLang == 'ar') {
                                $('body').css("direction", "rtl");
                            }
                            if ($rootScope.moaqebLang == 'en') {
                                $('body').css("direction", "ltr");
                            }
                            if ($rootScope.moaqebLang != 'en' && $rootScope.moaqebLang != 'ar') {
                                $cookieStore.put('moaqebLang', 'ar');
                                $rootScope.moaqebLang = $cookieStore.get('moaqebLang')
                                $('body').css("direction", "rtl");
                            }

                        }
                        $rootScope.alertMessageLang(
                            "مرحبا " + " " + $rootScope.moaqebAdmin.fullname,
                            "Welcome " + " " + $rootScope.moaqebAdmin.fullname,
                            $rootScope.moaqebLang
                        )
                        $window.open("http://165.22.127.119/MoaqebAdmin/html/moaqebAdmin.html", "_self");
                        //$window.open("/Website/html/moaqebAdmin.html", "_self");

                    },
                        function (response) {
                            if (response.data.message.includes("Authentication failed")) {
                                $rootScope.alertMessageLang(
                                    "ايميل أو كلمة مرور خطـــأ !!  ",
                                    "Wrong email or password !!  ",
                                    $rootScope.moaqebLang
                                )
                                return;
                            }
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما !!  ",
                                "SomSomething went wrong !!  ",
                                $rootScope.moaqebLang
                            )
                        }
                    )
            }

        })
      


})
    ();