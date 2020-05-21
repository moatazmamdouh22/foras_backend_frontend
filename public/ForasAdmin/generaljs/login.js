

    
(function () {
    angular.module('forasAdmin', ['ngCookies'])
        .filter('cmdate', [
            '$filter', function ($filter) {
                return function (input, format) {
                    return $filter('date')(new Date(input), format);
                };
            }
        ])

 

        .controller("SignInCtrl", function ($scope, $http, $rootScope, $window, $rootScope, $cookieStore) {
            $rootScope.forasAdmin = $cookieStore.get('forasAdmin');
            $rootScope.forasAdminID = $cookieStore.get('forasAdminID');



            if ($rootScope.qalamLang = $cookieStore.get('qalamLang')) {
                if ($rootScope.qalamLang == 'en') {
                    $('body').css("direction", "ltr");
                } else {
                    $cookieStore.put('qalamLang', 'ar')
                    $rootScope.qalamLang = $cookieStore.get('qalamLang');
                    $('body').css("direction", "rtl");

                }
            }


            if ($rootScope.forasAdminID && $rootScope.forasAdminID.length > 0) {
                $window.open("http://foras-sa.com/ForasAdmin/html/forasAdmin.html", "_self");
                // $window.open("/Website/html/forasAdmin.html", "_self");
            }


            $rootScope.changeLang = function (lang) {
                $cookieStore.put('qalamLang', lang);
                $rootScope.qalamLang = $cookieStore.get('qalamLang');
                if ($rootScope.qalamLang == 'ar') {
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
                $http.get("/api/adminApi/login?val=" + mail + "&password=" + pass)
                    .then(function (response) {
                        $rootScope.forasAdmin = response.data;
                        $cookieStore.put('forasAdmin', $rootScope.forasAdmin);
                        $cookieStore.put('forasAdminID', $rootScope.forasAdmin._id);

                        if ($rootScope.qalamLang = $cookieStore.get('qalamLang')) {
                            if ($rootScope.qalamLang == 'ar') {
                                $('body').css("direction", "rtl");
                            }
                            if ($rootScope.qalamLang == 'en') {
                                $('body').css("direction", "ltr");
                            }
                            if ($rootScope.qalamLang != 'en' && $rootScope.qalamLang != 'ar') {
                                $cookieStore.put('qalamLang', 'ar');
                                $rootScope.qalamLang = $cookieStore.get('qalamLang')
                                $('body').css("direction", "rtl");
                            }

                        }
                        $rootScope.alertMessageLang(
                            "مرحبا " + " " + $rootScope.forasAdmin.fullname,
                            "Welcome " + " " + $rootScope.forasAdmin.fullname,
                            $rootScope.qalamLang
                        )
                        $window.open("http://foras-sa.com/ForasAdmin/html/forasAdmin.html", "_self");
                        //$window.open("/Website/html/forasAdmin.html", "_self");

                    },
                        function (response) {
                            if (response.data.message.includes("Authentication failed")) {
                                $rootScope.alertMessageLang(
                                    "ايميل أو كلمة مرور خطـــأ !!  ",
                                    "Wrong email or password !!  ",
                                    $rootScope.qalamLang
                                )
                                return;
                            }
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما !!  ",
                                "SomSomething went wrong !!  ",
                                $rootScope.qalamLang
                            )
                        }
                    )
            }

        })
      


})
    ();