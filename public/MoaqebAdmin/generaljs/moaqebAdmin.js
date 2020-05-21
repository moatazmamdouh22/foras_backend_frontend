
var RequestModule = angular.module("RequestModule", ['ngCookies', 'ngRoute', 'angularUtils.directives.dirPagination'])
    .directive('backButton', function () {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {
                element.bind('click', goBack);

                function goBack() {
                    history.back();
                    scope.$apply();
                }
            }
        }
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/users", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/users.html",
                controller: "usersCtrl"
            })
            .when("/userDetails/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/userDetails.html",
                controller: "userDetailsCtrl"
            })
            .when("/addUser", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addUser.html",
                controller: "addUserCtrl"
            })
            .when("/editUser/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editUser.html",
                controller: "editUserCtrl"
            })
            .when("/moaqebs", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/expeditors.html",
                controller: "moaqebsCtrl"
            })
            .when("/moaqebDetails/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/moaqebDetails.html",
                controller: "userDetailsCtrl"
            })
            .when("/addMoaqeb", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addMoaqeb.html",
                controller: "addMoaqebCtrl"
            })
            .when("/editMoaqeb/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editMoaqeb.html",
                controller: "editMoaqebCtrl"
            })
            .when("/cities", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/cities.html",
                controller: "citiesCtrl"
            })
            .when("/addCity", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addCity.html",
                controller: "addCityCtrl"
            })
            .when("/editCity/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editCity.html",
                controller: "editCityCtrl"
            })

            .when("/editTerms/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editTerms.html",
                controller: "editTermsCtrl"
            })

            .when("/cityZones/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/zones.html",
                controller: "zonesCtrl"
            })
            .when("/addZone/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addZone.html",
                controller: "addZoneCtrl"
            })
            .when("/editZone/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editZone.html",
                controller: "editZoneCtrl"
            })
            .when("/editAbout/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editAbout.html",
                controller: "editAboutCtrl"
            })
            .when("/addExpeditor", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addExpeditor.html",
                controller: "addExpeditorCtrl"
            })
            .when("/categories", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/categories.html",
                controller: "categoriesCtrl"
            })
            .when("/addCategory", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addCategory.html",
                controller: "addCategoryCtrl"
            })
            .when("/editCategory/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editCategory.html",
                controller: "editCategoryCtrl"
            })
            .when("/subCategoriesCategory/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/subCategories.html",
                controller: "subCategoriesCtrl"
            })
            .when("/addSubCategory/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addSubCategory.html",
                controller: "addSubCategoryCtrl"
            })
            .when("/editSubCategory/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/editSubCategory.html",
                controller: "editSubCategoryCtrl"
            })
            .when("/getRateByVendor/:id", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/getRateByVendor.html",
                controller: "getRateByVendorCtrl"
            })
            .when("/contactUs", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/contactUs.html",
                controller: "contactUsCtrl"
            })
            .when("/terms", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/terms.html",
                controller: "termsCtrl"
            })
            .when("/about", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/about.html",
                controller: "aboutCtrl"
            })
            .when("/addTerms", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addTerms.html",
                controller: "addTermsCtrl"
            })
            .when("/addAbout", {
                templateUrl: "http://165.22.127.119/MoaqebAdmin/html/addAbout.html",
                controller: "addAboutCtrl"
            })



            .when("/Defualt", {
                templateUrl: "MoaqebAdmin/html/Defualt.html",
                controller: "DefualtCtrl"
            })

            .otherwise({
                redirectTo: 'Defualt'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .filter('cmdate', [
        '$filter',
        function ($filter) {
            return function (input, format) {
                return $filter('date')(new Date(input), format);
            };
        }
    ])
    
    .controller("addExpeditorCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $scope.getCities = function () {
            $http.get("/api/admin/allCity")
                .then(function (response) {
                    $scope.cities = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.getCities()
        $scope.getZonesByCityID = function (cityID) {
            $http.get("/api/admin/allZones?id=" + cityID)
                .then(function (response) {
                    $scope.zones = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.addData = function () {

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "/api/admin/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var dataObj = {
                        fullname: $('#fullname').val(),
                        mobile: $('#mobile').val(),
                        zoneID: $('#zoneID').val(),
                        cityID: $('#cityID').val(),
                        email: $('#email').val(),
                        password: $('#password').val(),
                        birthday: $('#birthday').val(),
                        phone: $('#phone').val(),
                        gender: $('#gender').val(),
                        totalClick: $('#totalClick').val(),
                        totalWatch: $('#totalWatch').val(),
                        totalFollowers: $('#totalFollowers').val(),
                        totalFav: $('#totalFav').val(),
                        address: $('#address').val(),
                        website: $('#website').val(),
                        description: $('#description').val(),
                        type: 2,
                        personalImg: $scope.personalImagepath
                        }

                    $http.post("/api/admin/user", dataObj)
                        .then(function (response) {
                            alert("تم اضافة  المستخدم بنجاح ");
                            $location.path('/moaqebs', "_self");

                        }, function (response) {
                            //alert("Error !");
                        })

                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }
        }

    })

    .controller("editMoaqebCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;


        $http.get("/api/admin/getUserByID?id=" + id)
            .then(function (response) {
                $scope.user = response.data;
                $scope.Imagepath4 = $scope.user.personalImg;
                $('#cityID').val($scope.user.cityID._id);
                $scope.getZonesByCityID($scope.user.cityID._id)
                $('#zoneID').val($scope.user.zoneID._id);
                $('#personalImage').val($scope.user.personalImg)
            }, function (response) {
                //alert("Error !");
            })
        $scope.getCities = function () {
            $http.get("/api/admin/allCity")
                .then(function (response) {
                    $scope.cities = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.getCities()
        $scope.getZonesByCityID = function (cityID) {
            $http.get("/api/admin/allZones?id=" + cityID)
                .then(function (response) {
                    $scope.zones = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.imgPathFun = function () {
            if ($('#img').val()) {


                var formData = new FormData();
                var fileLogo = $('#img')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "/api/admin/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.Imagepath4 = response.data;
                    var dataObj = {
                        personalImg: $scope.Imagepath4,
                    }
                    $http.put("/api/admin/user/" + id, dataObj)
                        .then(function (response) {
                            if (response.data.message) {
                                alert(response.data.message);
                            } else {
                                alert("تم تعديل  صورة  بنجاح");
                            }
                        }, function (response) {
                            alert("حدث خطا ما !!");
                        })
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })


            }
        }


        $scope.editData = function () {
            var editSeller = {
                fullname: $('#fullname').val(),
                mobile: $('#mobile').val(),
                zoneID: $('#zoneID').val(),
                cityID: $('#cityID').val(),
                email: $('#email').val(),
                password: $('#password').val(),
                status: $('#status').val(),
                birthday: $('#birthday').val(),
                phone: $('#phone').val(),
                gender: $('#gender').val(),
                totalClick: $('#totalClick').val(),
                totalWatch: $('#totalWatch').val(),
                totalFollowers: $('#totalFollowers').val(),
                totalFav: $('#totalFav').val(),
                address: $('#address').val(),
                website: $('#website').val(),
                description: $('#description').val(),
                type: 2,
                personalImg: $scope.Imagepath4
            }
            $http.put("/api/admin/user/" + $routeParams.id, editSeller)
                .then(function (response) {
                    if (response.data.message) {
                        alert(response.data.message);
                    } else {
                        alert("تم تعديل بيانات  بنجاح");
                        $location.path("/moaqebs/" , "_self");
                    }
                }, function (response) {
                    alert("حدث خطا ما !!");
                })
        }
    })

    .controller("editZoneCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        // var id2 = $routeParams.id2;
        $http.get("/api/admin/getZoneByID?id=" + id)
            .then(function (response) {
                $scope.zone = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $scope.editData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: $('#status').val()
            }
            $http.put("/api/admin/zone/" + $scope.zone.cityID, dataObj)
                .then(function (response) {
                    alert("تم تعديل الحى   بنجاح ");
                    $location.path('/cityZones/' + $scope.zone.cityID, "_self");

                }, function (response) {
                    //alert("Error !");
                })
        }
    })

    .controller("usersCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/users")
            .then(function (response) {
                $scope.users = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("userDetailsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getUserByID?id=" + id)
            .then(function (response) {
                $scope.user = response.data;

            }, function (response) {
                //alert("Error !");
            })
    })

    .controller("editUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getUserByID?id=" + id)
            .then(function (response) {
                $scope.user = response.data;
                $('#cityID').val($scope.user.cityID._id);
                $scope.getZonesByCityID($scope.user.cityID._id)
                $('#zoneID').val($scope.user.zoneID._id);
                $('#personalImage').val($scope.user.personalImg)
            }, function (response) {
                //alert("Error !");
            })
        $scope.getCities = function () {
            $http.get("/api/admin/allCity")
                .then(function (response) {
                    $scope.cities = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.getCities()
        $scope.getZonesByCityID = function (cityID) {
            $http.get("/api/admin/allZones?id=" + cityID)
                .then(function (response) {
                    $scope.zones = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }

        $scope.editData = function () {
            console.log($('#personalImage').val());
            if (!$('#personalImage').val()) {
                var dataObj = {
                    fullname: $('#fullname').val(),
                    email: $('#email').val(),
                    mobile: $('#mobile').val(),
                    birthday: $('#birthday').val(),
                    phone: $('#phone').val(),
                    cityID: $('#cityID').val(),
                    zoneID: $('#zoneID').val(),
                    password: $('#password').val(),
                    gender: $('#gender').val()

                }

                $http.put("/api/admin/user/" + id, dataObj)
                    .then(function (response) {
                        alert("تم تعديل المستخدم بنجاح ");
                        $location.path('/users', "_self");

                    }, function (response) {
                        //alert("Error !");
                    })

            }

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://165.22.127.119/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var dataObj = {
                        fullname: $('#fullname').val(),
                        email: $('#email').val(),
                        mobile: $('#mobile').val(),
                        birthday: $('#birthday').val(),
                        phone: $('#phone').val(),
                        cityID: $('#cityID').val(),
                        zoneID: $('#zoneID').val(),
                        password: $('#password').val(),
                        gender: $('#gender').val(),

                        personalImg: $scope.personalImagepath
                    }

                    $http.put("/api/admin/user/" + id, dataObj)
                        .then(function (response) {
                            alert("تم تعديل المستخدم بنجاح ");
                            $location.path('/users', "_self");

                        }, function (response) {
                            //alert("Error !");
                        })

                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }


        }
    })
    .controller("addUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getUserByID?id=" + id)
            .then(function (response) {
                $scope.user = response.data;
                $('#cityID').val($scope.user.cityID._id);
                $scope.getZonesByCityID($scope.user.cityID._id)
                $('#zoneID').val($scope.user.zoneID._id);
            }, function (response) {
                //alert("Error !");
            })
        $scope.getCities = function () {
            $http.get("/api/admin/allCity")
                .then(function (response) {
                    $scope.cities = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.getCities()
        $scope.getZonesByCityID = function (cityID) {
            $http.get("/api/admin/allZones?id=" + cityID)
                .then(function (response) {
                    $scope.zones = response.data;

                }, function (response) {
                    //alert("Error !");
                })
        }
        $scope.getZoneByCityID = function () {
            if ($('#cityID').val()) {
                $http.get("/api/admin/allZones?id=" + $('#cityID').val())
                    .then(function (response) {
                        $scope.zones = response.data;

                    }, function (response) {
                        //alert("Error !");
                    })
            }

        }

        $scope.addData = function () {

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://165.22.127.119/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var dataObj = {
                        fullname: $('#fullname').val(),
                        email: $('#email').val(),
                        mobile: $('#mobile').val(),
                        birthday: $('#birthday').val(),
                        phone: $('#phone').val(),
                        cityID: $('#cityID').val(),
                        zoneID: $('#zoneID').val(),
                        password: $('#password').val(),
                        gender: $('#gender').val(),

                        personalImg: $scope.personalImagepath
                    }

                    $http.post("/api/admin/user", dataObj)
                        .then(function (response) {
                            alert("تم اضافة  المستخدم بنجاح ");
                            $location.path('/users', "_self");

                        }, function (response) {
                            //alert("Error !");
                        })

                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }
            // else{
            //     var dataObj = {
            //         fullname :  $('#fullname').val(),
            //         email : $('#email').val(),
            //         mobile : $('#mobile').val(),
            //         birthday : $('#birthday').val(),
            //         phone : $('#phone').val(),
            //         cityID : $('#cityID').val(),
            //         zoneID : $('#zoneID').val(),
            //         password : $('#password').val(),
            //         gender : $('#gender').val()

            //     }

            //     $http.put("/api/admin/user/" + id ,  dataObj)
            //     .then(function (response) {
            //         alert("تم تعديل المستخدم بنجاح ");
            //         $location.path('/users' , "_self");

            //     }, function (response) {
            //         //alert("Error !");
            //     })

            //  }

        }
    })
    .controller("moaqebsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/expeditor")
            .then(function (response) {
                $scope.expeditors = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("citiesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/allCity")
            .then(function (response) {
                $scope.cities = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("addCityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');

        $scope.addData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: 1
            }
            $http.post("/api/admin/city/", dataObj)
                .then(function (response) {
                    alert("تم اضافة المدينة  بنجاح ");
                    $location.path('/cities', "_self");
                }, function (response) {
                    //alert("Error !");
                })
        }
    })

    .controller("editCityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getCityByID?id=" + id)
            .then(function (response) {
                $scope.city = response.data;

            }, function (response) {
                //alert("Error !");
            })


        $scope.editData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: $('#status').val()
            }

            $http.put("/api/admin/city/" + id, dataObj)
                .then(function (response) {
                    alert("تم تعديل المدينة  بنجاح ");
                    $location.path('/cities', "_self");
                }, function (response) {
                    //alert("Error !");
                })

        }
    })
    .controller("zonesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $scope.cityID = $routeParams.id;
        $http.get("/api/admin/allZones?id=" + $routeParams.id)
            .then(function (response) {
                $scope.zones = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("addZoneCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $scope.addData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: 1,
                cityID: id

            }
            $http.post("/api/admin/zone/", dataObj)
                .then(function (response) {
                    alert("تم اضافة الحى   بنجاح ");
                    $location.path('/cityZones/' + id, "_self");
                }, function (response) {
                    //alert("Error !");
                })


        }
    })



    .controller("categoriesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/category")
            .then(function (response) {
                $scope.categories = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("addCategoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');

        $scope.addData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: 1
            }
            $http.post("/api/admin/category/", dataObj)
                .then(function (response) {
                    alert("تم اضافة الفئة  بنجاح ");
                    $location.path('/categories', "_self");
                }, function (response) {
                    //alert("Error !");
                })
        }
    })

    .controller("editCategoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getCAtegoryByID?id=" + id)
            .then(function (response) {
                $scope.category = response.data;

            }, function (response) {
                //alert("Error !");
            })


        $scope.editData = function () {

            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: $('#status').val()


            }

            $http.put("/api/admin/category/" + id, dataObj)
                .then(function (response) {
                    alert("تم تعديل الفئة  بنجاح ");
                    $location.path('/categories', "_self");

                }, function (response) {
                    //alert("Error !");
                })

        }
    })
    .controller("subCategoriesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $scope.categoryID = $routeParams.id;
        $http.get("/api/admin/subcategories?id=" + $routeParams.id)
            .then(function (response) {
                $scope.subCategories = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("addSubCategoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $scope.addData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: 1,
                categoryID: id

            }
            $http.post("/api/admin/subCategory/", dataObj)
                .then(function (response) {
                    alert("تم اضافة الفئة الفرعية بنجاح ");
                    $location.path('/subCategoriesCategory/' + id, "_self");
                }, function (response) {
                    //alert("Error !");
                })


        }
    })
    .controller("editSubCategoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;

        $http.get("/api/admin/getSubCategoryByID?id=" + id)
            .then(function (response) {
                $scope.subCategory = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $scope.editData = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                status: $('#status').val()
            }
            $http.put("/api/admin/subCategory/" + id, dataObj)
                .then(function (response) {
                    alert("تم تعديل الفئة الفرعية  بنجاح ");
                    $location.path('/subCategoriesCategory/' + $scope.subCategory.categoryID, "_self");

                }, function (response) {
                    //alert("Error !");
                })
        }
    })
    .controller("getRateByVendorCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        var id = $routeParams.id;
        $http.get("/api/admin/getRateByVendor?userVID=" + $routeParams.id)
            .then(function (response) {
                $scope.subCategories = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("contactUsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/contactUsAll")
            .then(function (response) {
                $scope.contactUs = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("termsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/getTerms")
            .then(function (response) {
                $scope.terms = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("aboutCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');
        $http.get("/api/admin/getAboutApp")
            .then(function (response) {
                $scope.about = response.data;
            }, function (response) {
                //alert("Error !");
            })
    })
    .controller("editAboutCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $http({
            url: "http://165.22.127.119/api/admin/getTermsByID",
            params: {
                id: $routeParams.id
            },
            method: "get"
        })
            .then(function (response) {
                $rootScope.termsDetalis = response.data;
            }, function (response) {
                //alert("Error !");
            })

        $scope.addNew = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                type: 2,
                status: $('#status').val(),
            }

            $http.put("/api/admin/terms/" + $routeParams.id, dataObj)
                .then(function (response) {
                    alert("تم تعديل عن المعقب بنجاح ");
                    $location.path('/about', "_self");

                }, function (response) {
                    //alert("Error !");
                })
        }
    })

    .controller("editTermsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $http({
            url: "http://165.22.127.119/api/admin/getTermsByID",
            params: {
                id: $routeParams.id
            },
            method: "get"
        })
            .then(function (response) {
                $rootScope.termsDetalis = response.data;
            }, function (response) {
                //alert("Error !");
            })

        $scope.addNew = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                type: 1,
                status: $('#status').val(),
            }

            $http.put("/api/admin/terms/" + $routeParams.id, dataObj)
                .then(function (response) {
                    alert("تم تعديل الشرط بنجاح ");
                    $location.path('/terms', "_self");

                }, function (response) {
                    //alert("Error !");
                })
        }
    })

    .controller("addTermsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {

        $scope.addNew = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                type: 1
            }

            $http.post("/api/admin/terms", dataObj)
                .then(function (response) {
                    alert("تم اضافة الشرط بنجاح ");
                    $location.path('/terms', "_self");

                }, function (response) {
                    //alert("Error !");
                })
        }
    })
    .controller("addAboutCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin');

        $scope.addNew = function () {
            var dataObj = {
                titleAr: $('#titleAr').val(),
                titleEN: $('#titleEN').val(),
                type: 2
            }

            $http.post("/api/admin/terms", dataObj)
                .then(function (response) {
                    alert("تم اضافة عنا  بنجاح ");
                    $location.path('/about', "_self")
                }, function (response) {
                    //alert("Error !");
                })
        }

    })











    .controller("homeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
        $scope.moaqebAdmin = $cookieStore.get('moaqebAdmin')
        $rootScope.cuser = $cookieStore.get('moaqebAdmin')
        $scope.userId = $cookieStore.get('id');
        // $('#allusers').hide();
        // $('#employees').hide();
        // $('#empType').hide();
        // $('#AllCountries').hide();
        // $('#category').hide();
        // $('#carModel').hide();
        // $('#carYear').hide();
        // $('#carType').hide();
        // $('#allRequests').hide();
        // $('#allReceipt').hide();
        // $('#allCars').hide();
        // $('#permissions').hide();
        // $http.get("/api/admin/employeePermission?id=" + $rootScope.cuser.employeeTypeID)
        //     .then(function (response) {
        //         $scope.employeeTypePermissions = response.data;

        //         $scope.employeeTypePermissions.forEach(empPer => {
        //             if (empPer.permissionID && empPer.permissionID.value) {
        //                 $('#' + empPer.permissionID.value).show();
        //             }
        //         });
        //         // console.log($scope.employeeTypePermissions);
        //     }, function (response) {
        //         //alert("Error !");
        //     })


        $rootScope.logOutFun = function () {
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {

                $cookieStore.remove('moaqebAdmin');
                $cookieStore.remove('moaqebAdminID');
                alert('تم تسجيل الخروج !!');
                $window.open("http://165.22.127.119/MoaqebAdmin/html/login.html", "_self");
            }
        }

    })




    .controller("DefualtCtrl", function ($rootScope, $scope, $http, $window, $cookieStore) {
        $http.get("/api/admin/totalSubCategories")
            .then(function (response) {
                $scope.totalSubCategories = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $http.get("/api/admin/totalUsers")
            .then(function (response) {
                $scope.totalUsers = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $http.get("/api/admin/totalVendors")
            .then(function (response) {
                $scope.totalVendors = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $http.get("/api/admin/totalCategories")
            .then(function (response) {
                $scope.totalCategories = response.data;
            }, function (response) {
                //alert("Error !");
            })



    })

    // .controller("AddNewUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    //     $http.get("/api/user/country")
    //         .then(function (response) {
    //             $scope.Countries = response.data;
    //         }, function (response) {
    //             //alert("Error !");
    //         })
    //     $scope.citiesFunFrom = function () {
    //         $scope.counid = $('#SelectCoun').val();
    //         $http.get("/api/user/city?id=" + $scope.counid)
    //             .then(function (response) {
    //                 $scope.cities = response.data;
    //             }, function (response) {
    //                 //alert("Error !");
    //             })
    //     }

    //     $scope.updateDocsOutGoing = function () {
    //         if ($('#password').val().length < 6) {

    //             alert(' Password should be more than 6 charachters !');
    //             return;
    //         }
    //         if ($('#nationalID').val().length != 14) {

    //             alert(' national number should be 14 number !');
    //             return;
    //         }

    //         if ($('#personalImage').val() != null) {
    //             var formData = new FormData();
    //             var fileLogo = $('#personalImage')[0];
    //             formData.append('file', fileLogo.files[0]);
    //             $http({
    //                 url: "/api/admin/uploadFile",
    //                 method: "POST",
    //                 data: formData,
    //                 headers: {
    //                     'Content-Type': undefined
    //                 },
    //                 processData: false,
    //             }).then(function (response) {
    //                 $scope.personalImagepath = response.data;
    //                 if ($('#licenseImg').val() != null) {
    //                     var formData = new FormData();
    //                     var fileLogo = $('#licenseImg')[0];
    //                     formData.append('file', fileLogo.files[0]);
    //                     $http({
    //                         url: "/api/admin/uploadFile",
    //                         method: "POST",
    //                         data: formData,
    //                         headers: {
    //                             'Content-Type': undefined
    //                         },
    //                         processData: false,
    //                     }).then(function (response) {
    //                         $scope.licenseImgpath = response.data;
    //                         if ($('#nationalIdImg').val() != null) {
    //                             var formData = new FormData();
    //                             var fileLogo = $('#nationalIdImg')[0];
    //                             formData.append('file', fileLogo.files[0]);
    //                             $http({
    //                                 url: "/api/admin/uploadFile",
    //                                 method: "POST",
    //                                 data: formData,
    //                                 headers: {
    //                                     'Content-Type': undefined
    //                                 },
    //                                 processData: false,
    //                             }).then(function (response) {
    //                                 $scope.nationalIdImgpath = response.data;
    //                                 var UserInfo = {
    //                                     fullname: $('#fullname').val(),
    //                                     countryID: $('#SelectCoun').val(),
    //                                     cityID: $('#cityID').val(),
    //                                     mobile: $('#mobile').val(),
    //                                     email: $('#email').val(),
    //                                     password: $('#password').val(),
    //                                     gender: $('#genderID').val(),
    //                                     nationalID: $('#nationalID').val(),
    //                                     gender: $('#genderID').val(),
    //                                     birthday: $('#birthday').val(),
    //                                     personalImg: $scope.personalImagepath,
    //                                     licenseImg: $scope.licenseImgpath,
    //                                     nationalIdImg: $scope.nationalIdImgpath,
    //                                 }
    //                                 $http.post("/api/admin/user", UserInfo)
    //                                     .then(function (response) {
    //                                         alert("User Added Successfully");
    //                                         $location.path("/allusers/", "_self");
    //                                     }, function (response) {
    //                                         alert("Email or password exists Plz login");
    //                                     })
    //                             }, function (response) {
    //                                 alert(' Error while Uploading Image !');
    //                             })
    //                         }
    //                     }, function (response) {
    //                         alert(' Error while Uploading Image !');
    //                     })
    //                 }
    //             }, function (response) {
    //                 alert(' Error while Uploading Image !');
    //             })
    //         }
    //     }
    // })
    .controller("EditAdminAccountCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
        $http({
            url: "api/admin/employeeByID",
            params: {
                id: $routeParams.id
            },
            method: "get"
        })
            .then(function (response) {
                $rootScope.userDetail = response.data;
            }, function (response) {
                //alert("Error !");
            })
        $scope.EditUser = function () {
            var Info = {
                fullname: $('#fullname').val(),
                mobile: $('#mobileID').val(),
                email: $('#EmailID').val(),
                password: $('#PassWord').val(),
            }
            if ($rootScope.userDetail.email != $('#EmailID').val()) {
                if ($rootScope.userDetail.mobile != $('#mobileID').val()) {
                    Info = {
                        fullname: $('#fullname').val(),
                        mobile: $('#mobileID').val(),
                        email: $('#EmailID').val(),
                        password: $('#PassWord').val(),

                    }
                } else {
                    Info = {
                        fullname: $('#fullname').val(),
                        email: $('#EmailID').val(),
                        password: $('#PassWord').val(),

                    }
                }
            } else {
                if ($rootScope.userDetail.mobile != $('#mobileID').val()) {
                    Info = {
                        fullname: $('#fullname').val(),
                        mobile: $('#mobileID').val(),
                        password: $('#PassWord').val(),

                    }
                } else {
                    Info = {
                        fullname: $('#fullname').val(),
                        password: $('#PassWord').val(),

                    }
                }
            }
            $http.put("/api/admin/employee/" + $routeParams.id, Info)
                .then(function (response) {
                    alert("Account Updated Successfully");
                    $http({
                        url: "api/admin/employeeByID/?id=" + $rootScope.userId,
                        method: "get"
                    })
                        .then(function (response) {
                            $rootScope.adminData = response.data;
                            $location.path("/Default/", "_self");
                        }, function (response) {
                            $location.path("/Default/", "_self");
                        })

                }, function (response) {
                    //alert("Error !");
                })
        }
    })

