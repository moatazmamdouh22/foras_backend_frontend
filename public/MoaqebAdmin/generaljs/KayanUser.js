
(function () {


    angular.module('kayanUser', ['ngCookies', 'ngRoute'])
        .filter('cmdate', [
            '$filter', function ($filter) {
                return function (input, format) {
                    return $filter('date')(new Date(input), format);
                };
            }
        ])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/HomeDefault", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/home.html",
                    controller: "HomeCtrl"
                })
                .when("/Home", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/home.html",
                    controller: "HomeCtrl"
                })

                .when("/profile", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/profile.html",
                    controller: "profileCtrl"
                })

                .when("/myCars", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/myCars.html",
                    controller: "myCarsCtrl"
                })
                .when("/myRequests", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/myRequests.html",
                    controller: "myRequestsCtrl"
                })

                .when("/myCarsRequests", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/myCarsRequests.html",
                    controller: "myCarsRequestsCtrl"
                    
                })
                .when("/invoicesDue", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/invoicesDue.html",
                    controller: "invoicesDueCtrl"
                })
                .when("/addCar", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/addCar.html",
                    controller: "addCarCtrl"
                })

                .when("/contactUs", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/contactUs.html",
                    controller: "contactUsCtrl"
                })
                .when("/carDetails", {
                    templateUrl: "http://134.209.178.237/kayanWebsite/html/carDetails.html",
                    controller: "carDetailsCtrl"
                })
                
                // .when("/about", {
                //     templateUrl: "Website/html/about.html",
                //     controller: "aboutCtrl"
                // })
                
                // .when("/editmycar", {
                //     templateUrl: "Website/html/editmycar.html",
                //     controller: "editmycarCtrl"
                // })
                // .when("/contactUs", {
                //     templateUrl: "Website/html/contactUs.html",
                //     controller: "contactUsCtrl"
                // })
                // .when("/sms", {
                //     templateUrl: "Website/html/sms.html",
                //     controller: "smsCtrl"
                // })
                // .when("/contactUsHistory/:chatID", {
                //     templateUrl: "Website/html/contactUsHistory.html",
                //     controller: "contactUsHistoryCtrl"
                // })

                


                // .when("/MyOrder", {
                //     templateUrl: "Website/html/MyOrder.html",
                //     controller: "MyOrderCtrl"
                // })
                // .when("/pendingOrder", {
                //     templateUrl: "Website/html/pendingOrder.html",
                //     controller: "pendingOrderCtrl"
                // })
                
                .otherwise({ redirectTo: 'HomeDefault' });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

        })
        .controller("HomeCtrl", function ($scope, $http, $cookieStore, $rootScope, $location, $window) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');

            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                alert('قم بالتسجيل أولا !!');
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }


            $rootScope.kayanUserHomeView = 1;


            $rootScope.changeLang = function (lang) {
                $cookieStore.put('kayanLang', lang);
                $rootScope.kayanLang = $cookieStore.get('kayanLang');
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");
                    $rootScope.changeCoverItems()
                } else {
                    $('body').css("direction", "ltr");
                    $rootScope.changeCoverItems()

                }
                $rootScope.slideNavActiveLink($rootScope.slideNavId)
            }


            $rootScope.changeCoverItems = function (item, lang) {
                if (item == "sidebarCollapsear") {
                    $('#sidebarar').toggleClass('activeSidebarar');
                }
                if (item == "sidebarCollapseen") {
                    $('#sidebar').toggleClass('activeSidebaren');
                }

                // Get Login Form EN & AR
                if (item == "loginCollapseOuten") {
                    $('.loginCollapseen').toggleClass('activeLoginen');
                }
                if (item == "loginCollapseOutar") {
                    $('.loginCollapsear').toggleClass('activeLoginar');
                }


            }
            $rootScope.changeCoverItems()
            $rootScope.alertMessageLang = function (msgAr, msgEn, lang) {
                if (lang == 'ar') {
                    alert(msgAr);
                } else {
                    alert(msgEn);
                }

            }
           




            $scope.getNumber = function (num) {
                return new Array(num);
            }
            $scope.getCategories = function () {
                $http.get("http://134.209.178.237/api/user/category")
                    .then(function (response) {
                        $scope.categories = [];
                        $scope.allcategories = response.data;
                        $scope.categoriesCount = $scope.allcategories.length % 3;
                        if (($scope.allcategories.length / 3) > $scope.categoriesCount) {
                            $scope.categoriesCount += 1;
                        }
                        if ($scope.categoriesCount > 1) {
                            var index = 0;
                            for (let i = 0; i < $scope.categoriesCount; i++) {
                                $scope.categories[i] = [];

                                if ($scope.allcategories[index] && $scope.allcategories[index]._id) {
                                    $scope.categories[i].push($scope.allcategories[index]);
                                }

                                if ($scope.allcategories[index + 1] && $scope.allcategories[index + 1]._id) {
                                    $scope.categories[i].push($scope.allcategories[index + 1]);
                                }
                                if ($scope.allcategories[index + 2] && $scope.allcategories[index + 2]._id) {
                                    $scope.categories[i].push($scope.allcategories[index + 2]);
                                }

                                index = index + 3;
                            }
                        }
                        setTimeout(() => {
                            //console.log($scope.categories);
                            //     console.log($scope.categoriesCount);
                            // console.log( $scope.categories);
                        }, 1000);
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCategories();
            $scope.getCars = function () {
                $http.get("http://134.209.178.237/api/admin/allCars")
                    .then(function (response) {
                        $scope.cars = response.data;
                    }, function (response) {
                       // alert("Error !!");
                    })
            }

            $rootScope.getCarsByCategory = function (categoryID) {
                //console.log(categoryID);
                $rootScope.selectedCategoryID = categoryID;
                $http.get("http://134.209.178.237/api/admin/getCategoryByID?id=" + categoryID)
                    .then(function (response) {
                        $scope.categoryDetails = response.data;
                        $http.get("http://134.209.178.237/api/user/carbyCategory?id=" + categoryID)
                            .then(function (response) {
                                var cars = [];
                                $scope.cars = [];
                                // $scope.cars = response.data;
                                // console.log($scope.cars);
                                if (response.data.length == 0) {
                                    $rootScope.alertMessageLang(
                                        "لا توجد سيارات  فى هذه الفئة   ",
                                        "no cars in this category  ",
                                        $rootScope.kayanLang
                                    )
                                    return;
                                }
                                response.data.forEach((car, c) => {
                                    var today = new Date()
                                    var todayYear = today.getFullYear();;
                                    var todayMonth = today.getMonth();
                                    var todayDate = today.getDate();

                                    var startDateDefault = new Date(car.startDate);
                                    var startDateDefaultYear = startDateDefault.getFullYear();
                                    var startDateDefaultMonth = startDateDefault.getMonth();
                                    var startDateDefaultDate = startDateDefault.getDate();

                                    var endDateDefault = new Date(car.endDate);
                                    var endDateDefaultYear = endDateDefault.getFullYear();;
                                    var endDateDefaultMonth = endDateDefault.getMonth();
                                    var endDateDefaultDate = endDateDefault.getDate();
                                    if (car.status == 2) {
                                        if (endDateDefaultYear > todayYear || (endDateDefaultYear == todayYear && endDateDefaultMonth > todayMonth) || (endDateDefaultYear == todayYear && endDateDefaultMonth == todayMonth && endDateDefaultDate >= todayDate)) {
                                            if ($rootScope.kayanUser && $rootScope.kayanUser._id && car.userID._id != $rootScope.kayanUser._id) {
                                                cars.push(car)
                                            }
                                            if ($rootScope.kayanUser == undefined) {
                                                cars.push(car)
                                            }
                                        }
                                    }
                                    if (c == response.data.length - 1) {
                                        if (cars.length == 0) {
                                            $rootScope.alertMessageLang(
                                                "لا توجد سيارات  متاحة فى هذه الفئة   ",
                                                "no  available cars in this category  ",
                                                $rootScope.kayanLang
                                            )
                                            return;
                                        }

                                        $scope.cars = cars;
                                        var imageUrl = "http://134.209.178.237/kayanWebsite/images/Picture2.JPG";
                                        $(".cover").css("background-image", "url(" + imageUrl + ")");
                                        $rootScope.kayanUserHomeView = 2;
                                    }
                                });

                            }, function (response) {
                                //alert("Error !!");
                            })

                    }, function (response) {
                        //alert("Error !!");
                    })



            }

            $scope.getSubCategory = function (categoryID) {
                //$scope.categoryid = $('#categoryid').val();
                $http.get("http://134.209.178.237/api/user/subcategory?id=" + categoryID)
                    .then(function (response) {
                        $scope.subCategory = response.data;
                    }
                        , function (response) {
                            //alert("Error !!");
                        })
            }

            $scope.getCarTypes = function () {
                $http.get("http://134.209.178.237/api/user/carType")
                    .then(function (response) {
                        $scope.carTypes = response.data;
                        // console.log($scope.Type)
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCarTypes();
            $scope.getCarYears = function () {
                $http.get("http://134.209.178.237/api/user/carYear")
                    .then(function (response) {
                        $scope.carYears = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCarYears()
            $scope.getCarModels = function () {
                $http.get("http://134.209.178.237/api/user/carModel")
                    .then(function (response) {
                        $scope.carModels = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCarModels();
            $scope.getCarDetails = function (carId) {
                $rootScope.currentCarId = carId;
                $rootScope.selectedCar = carId;

                $http.get("http://134.209.178.237/api/user/getCarByID?id=" + $rootScope.currentCarId)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        $rootScope.kayanUserHomeView = 3;
                        //console.log($scope.carDetails);

                        var today = new Date();
                        $scope.startDateDefault = new Date();
                        $scope.endDateDefault = new Date($scope.carDetails.endDate);




                    }, function (response) {

                        //alert("Error !!");
                    });
            }







            $scope.bookCar = function () {

                $rootScope.kayanUser = $cookieStore.get('kayanUser');
                $rootScope.kayanUserID = $cookieStore.get('kayanUserID');


                // console.log($rootScope.kayanUser)
                // console.log($rootScope.kayanUserID)
                if ($rootScope.kayanUser && $rootScope.kayanUser._id && $rootScope.kayanUser._id.length > 0) {
                    var today = new Date()
                    var todayYear = today.getFullYear();;
                    var todayMonth = today.getMonth();
                    var todayDate = today.getDate();

                    var startDateDefault = new Date($("#startDateid").val());
                    var startDateDefaultYear = startDateDefault.getFullYear();;
                    var startDateDefaultMonth = startDateDefault.getMonth();
                    var startDateDefaultDate = startDateDefault.getDate();

                    var endDateDefault = new Date($("#endDateid").val());
                    var endDateDefaultYear = endDateDefault.getFullYear();;
                    var endDateDefaultMonth = endDateDefault.getMonth();
                    var endDateDefaultDate = endDateDefault.getDate();



                    var startDateCar = new Date($scope.carDetails.startDate);
                    var startDateCarYear = startDateCar.getFullYear();;
                    var startDateCarMonth = startDateCar.getMonth();
                    var startDateCarDate = startDateCar.getDate();

                    var endDateCar = new Date($scope.carDetails.endDate);
                    var endDateCarYear = endDateCar.getFullYear();;
                    var endDateCarMonth = endDateCar.getMonth();
                    var endDateCarDate = endDateCar.getDate();


                    // console.log("choosen start date ")
                    // console.log(startDateDefaultYear)
                    // console.log(startDateDefaultMonth)
                    // console.log(startDateDefaultDate)


                    // console.log("choosen end date ")
                    // console.log(endDateDefaultYear)
                    // console.log(endDateDefaultMonth)
                    // console.log(endDateDefaultDate)

                    // console.log("car start date ")
                    // console.log(startDateCarYear)
                    // console.log(startDateCarMonth)
                    // console.log(startDateCarDate)

                    // console.log("car  end date ")

                    // console.log(endDateCarYear)
                    // console.log(endDateCarMonth)
                    // console.log(endDateCarDate)


                    // console.log("today date ")
                    // console.log(todayYear)
                    // console.log(todayMonth)
                    // console.log(todayDate)

                    // Compare choosen choosen start date   with today 
                    if (startDateDefaultYear < todayYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == todayYear && startDateDefaultMonth < todayMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == todayYear && startDateDefaultMonth == todayMonth && startDateDefaultDate < todayDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }

                    // Compare choosen car start date with car start date  
                    if (startDateDefaultYear < startDateCarYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == startDateCarYear && startDateDefaultMonth < startDateCarMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == startDateCarYear && startDateDefaultMonth == startDateCarMonth && startDateDefaultDate < startDateCarDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }





                    // Compare choosen end date with choosen start date  
                    if (startDateDefaultYear > endDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth > endDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth == endDateDefaultMonth && startDateDefaultDate > endDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }





                    // Compare choosen start date  with car end date  
                    if (startDateDefaultYear > endDateCarYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateCarYear && startDateDefaultMonth > endDateCarMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateCarYear && startDateDefaultMonth == endDateCarMonth && startDateDefaultDate > endDateCarDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }




                    // Compare  car end date with choosen end date  
                    if (endDateDefaultYear > endDateCarYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == endDateCarYear && endDateDefaultMonth > endDateCarMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == endDateCarYear && endDateDefaultMonth == endDateCarMonth && endDateDefaultDate > endDateCarDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }


                    // Compare  car start date with choosen end date  
                    if (endDateDefaultYear < startDateCarYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateCarYear && endDateDefaultMonth < startDateCarMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateCarYear && endDateDefaultMonth == startDateCarMonth && endDateDefaultDate < startDateCarDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }




                    // Compare  today end date with choosen end date  

                    if (endDateDefaultYear < todayYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth < todayMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth == todayMonth && endDateDefaultDate < todayDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }


                    // Compare  today end date with choosen end date  
                    if (endDateDefaultYear < startDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth < startDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth == startDateDefaultMonth && endDateDefaultDate < startDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "تأكد من تاريخ الحجز بشكل جيد  ",
                            "confirm that booking date is correct",
                            $rootScope.kayanLang
                        )
                        return;
                    }





                    if ($scope.carDetails.rentType == 1) {
                        if (startDateDefaultYear != endDateDefaultYear || startDateDefaultMonth != endDateDefaultMonth || startDateDefaultDate != endDateDefaultDate) {
                            $rootScope.alertMessageLang(
                                "حجز هذه السيارة يكون خلال نفس اليوم لانها بالساعة  !",
                                "booking this car must be within same day  ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if ($scope.carDetails.rentType == 2) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (Difference_In_Days * -1 > 30) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون أقل من 30 يوم   !",
                                "Booking days must be less than 30   ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if ($scope.carDetails.rentType == 3) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (Difference_In_Days * -1 < 30) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون أكبر من 30 يوم   !",
                                "Booking days must be greater than 30    ",
                                $rootScope.kayanLang
                            )
                            return;

                        }
                    }


                    var requestInfo = {
                        carID: $rootScope.currentCarId,
                        userID: $rootScope.kayanUser._id,
                        price: $scope.carDetails.rentPrice,
                        notes: $scope.carDetails.description,
                        startDate: new Date($("#startDateid").val()),
                        endDate: new Date($("#endDateid").val()),
                        ownerID: $scope.carDetails.userID._id
                    }
                    //console.log(requestInfo);




                    $http.get("http://134.209.178.237/api/user/getCarByID?id=" + requestInfo.carID)
                        .then(function (response) {
                            $scope.carDetailsLast = response.data;
                            if ($scope.carDetailsLast.status && $scope.carDetailsLast.status == 3) {
                                $rootScope.alertMessageLang(
                                    "نأسف تم حجز السيارة ! سيتم توجيهك  لاختيار سيارة اخرى   ",
                                    "Sorry , this car is already booked , we will redirect you to choose another ",
                                    $rootScope.kayanLang
                                )
                                $rootScope.kayanUserHomeView = 2;
                            }
                            if ($scope.carDetailsLast.status && $scope.carDetailsLast.status == 4) {
                                $rootScope.alertMessageLang(
                                    "نأسف تم قام صاحب السيارة بالغاء تفعيلها    ",
                                    "Sorry , car owner has canceled it is activation  ",
                                    $rootScope.kayanLang
                                )
                                $rootScope.kayanUserHomeView = 2;
                            }
                            if ($scope.carDetailsLast.status && $scope.carDetailsLast.status == 5) {
                                $rootScope.alertMessageLang(
                                    "نأسف تم حظر السيارة من السيستم ",
                                    "Sorry , car blocked !  ",
                                    $rootScope.kayanLang
                                )
                                $rootScope.kayanUserHomeView = 2;
                            }

                            if ($scope.carDetailsLast.status && $scope.carDetailsLast.status == 2) {


                                $http.post("http://134.209.178.237/api/user/request", requestInfo)
                                    .then(function (response) {
                                        $rootScope.alertMessageLang(
                                            "تم حجز السياره بنجاح ",
                                            "car has been booked successfully   ",
                                            $rootScope.kayanLang
                                        )
                                        $scope.getCarsByCategory($scope.carDetailsLast.categoryID._id)

                                    }, function (response) {
                                        if(response.data.message == "sorry is car exsist"){
                                            $rootScope.alertMessageLang(
                                                "لا يمكن تكرار حجزالسيارة فى وجود طلب سابق معلق  ",
                                                "you can not re request  a car while a request is already exist   ",
                                                $rootScope.kayanLang
                                            )
                                        }
                                        //alert("Error !");
                                    })


                            }




                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما      ",
                                "Ops , something wrong   ",
                                $rootScope.kayanLang
                            )
                        });


                } else {
                    $rootScope.alertMessageLang(
                        "يجب تسجيل الدخول اولا",
                        " you should login to continue ",
                        $rootScope.kayanLang
                    )
                   
                    $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
                    return;
                }




            }

          


            $rootScope.logOut = function () {
                $cookieStore.remove('kayanUser');
                $cookieStore.remove('kayanUserID');
                $rootScope.alertMessageLang(
                    " ! تم تسجيل الخروج بنجاح  ",
                    " you has been loged out ! ",
                    $rootScope.kayanLang
                )

                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
                //$window.open("/Website/html/home.html", "_self");
            }
            $rootScope.slideNavActiveLink = function (slideNavId) {
                //console.log(slideNavId);
                $rootScope.slideNavId = slideNavId;
                setTimeout(() => {
                    $('.slideNav li').removeClass('active');
                    $('#' + slideNavId).addClass('active');
                }, 500);
            }
            $rootScope.slideNavActiveLink('Home');

        })

       
        .controller("profileCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('profile');
            $scope.user = {
                personalImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                licenseImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                nationalIdImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                uploadCount : 0
            }

            $scope.getAllCountries = function () {
                $http.get("http://134.209.178.237/api/user/country")
                    .then(function (response) {
                        $scope.countries = response.data;
                        $scope.getCurrentUser();
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getAllCountries()
            $scope.getCurrentUser = function () {
                $http.get("http://134.209.178.237/api/admin/getuserByID?id=" + $rootScope.kayanUserID)
                    .then(function (response) {
                        $scope.user = response.data;
                        $scope.user.personalImg = response.data.personalImg;
                        $scope.user.licenseImg = response.data.licenseImg;
                        $scope.user.nationalIdImg = response.data.nationalIdImg;
                        //$('#genderid' + response.data.gender  ).prop('checked',true);
                       // $('input:radio[name="gender"]').filter('[value='+response.data.gender+']').attr('checked', true);

                        if ($scope.user.countryID._id &&$scope.user.cityID._id) {
                            $scope.countryid = response.data.countryID._id;
                            $scope.getCityByCountryID($scope.countryid);

                        }
                    }, function (response) {
                        //alert("حدث خطا ما !! ");
                        }
                    )
            }
            $scope.getAllCountries()
            

            $scope.changePic = function (num) {
                if (num == 1) {
                        $scope.img1_wait = true;
                        if ($('#img1').val() != null) {
                            var formData = new FormData();
                            var fileimg1 = $('#img1')[0];
                            formData.append('file', fileimg1.files[0]);
                           
                                $http({
                                    url: "http://165.22.127.119/api/user/uploadFile",
                                    method: "POST",
                                    data: formData,
                                    headers: { 'Content-Type': undefined },
                                    processData: false,
                                }).then(function (response) {
                                    //alert("done")
                                    $scope.user.personalImg = response.data;
                                    //console.log($scope.user.personalImg);
                                       
                                        $scope.user.uploadCount +=1;
                                        $scope.img1_wait = false;
                                        //console.log($scope.user.uploadCount);
                                    // here
                                }, function (response) {
                                    $rootScope.alertMessageLang(
                                        "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                        "something wrong happened while uploading pic !!",
                                        $rootScope.kayanLang
                                    )
                                    $scope.img1_wait = false;
                                   
                                })
                           
                           
                        }
                    
                }
                if (num == 2) {
                    $scope.img2_wait = true;
                        if ($('#img2').val() != null) {
                            var formData = new FormData();
                            var fileimg2 = $('#img2')[0];
                            formData.append('file', fileimg2.files[0]);
                           
                                $http({
                                    url: "http://165.22.127.119/api/user/uploadFile",
                                    method: "POST",
                                    data: formData,
                                    headers: { 'Content-Type': undefined },
                                    processData: false,
                                }).then(function (response) {
                                    //alert("done")
                                    $scope.user.licenseImg = response.data;
                                    //console.log($scope.user.licenseImg);
                                    $scope.user.uploadCount +=1;
                                    $scope.img2_wait = false;
                                    //console.log($scope.user.uploadCount);
                                   
                                    
                                    // here
                                }, function (response) {
                                    $rootScope.alertMessageLang(
                                        "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                        "something wrong happened while uploading pic !!",
                                        $rootScope.kayanLang
                                    )
                                    $scope.img2_wait = false;
                                })
                           
                           
                        }
                    
                }
                if (num == 3) {
                    $scope.img3_wait = true;
                        if ($('#img3').val() != null) {
                            var formData = new FormData();
                            var fileimg3 = $('#img3')[0];
                            formData.append('file', fileimg3.files[0]);
                           
                                $http({
                                    url: "http://165.22.127.119/api/user/uploadFile",
                                    method: "POST",
                                    data: formData,
                                    headers: { 'Content-Type': undefined },
                                    processData: false,
                                }).then(function (response) {
                                    //alert("done")
                                    $scope.user.nationalIdImg = response.data;
                                    //console.log($scope.user.nationalIdImg);
                                    $scope.user.uploadCount +=1;
                                    $scope.img3_wait = false;
                                    //console.log($scope.user.uploadCount);

                                }, function (response) {
                                    $rootScope.alertMessageLang(
                                        "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                        "something wrong happened while uploading pic !!",
                                        $rootScope.kayanLang
                                    )
                                    $scope.img3_wait = false;
                                })
                           
                           
                        }
                    
                }
               

            }


            $scope.getCityByCountryID = function (countryID) {

                $http.get("http://134.209.178.237/api/user/city?id=" + countryID)
                    .then(function (response) {
                        $scope.cityID = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }



           


            $scope.updateUserInfo = function () {
                var userInfo = {
                    fullname: $("#fullnameid").val(),
                    mobile: $("#mobileid").val(),

                    countryID: $("#countryid").val(),
                    cityID: $("#cityid").val(),
                    email: $("#emailid").val(),

                    birthday: $("#birthdayid").val(),
                    personalImg: $scope.user.personalImg,
                    licenseImg: $scope.user.licenseImg,
                    nationalIdImg: $scope.user.nationalIdImg,
                    gender: $('input[name=gender]:checked').val()
                }

                if (userInfo.gender != "0") {
                    if (userInfo.gender != "1") {

                        $rootScope.alertMessageLang(
                            "يرجى اختيار الجنس   !  ",
                            "Kindly choose gender  !",
                            $rootScope.kayanLang
                        )
                        return;

                    }

                }
                if (userInfo.gender != "1") {
                    if (userInfo.gender != "0") {

                        $rootScope.alertMessageLang(
                            "يرجى اختيار الجنس   !  ",
                            "Kindly choose gender  !",
                            $rootScope.kayanLang
                        )
                        return;

                    }
                }

                var today = new Date();
                var birthday = new Date(userInfo.birthday);

                var diff = today.getMonth() - birthday.getMonth() +
                    (12 * (today.getFullYear() - birthday.getFullYear()))
                //console.log(diff);
                if (diff < 216) {
                    $rootScope.alertMessageLang(
                        "يجب ان يكون السن أكبر من 18  ",
                        "Age must be greater than 18 ",
                        $rootScope.kayanLang
                    )
                    return;
                }



                $http.put("http://134.209.178.237/api/admin/user/" + $rootScope.kayanUserID, userInfo)
                    .then(function (response) {
                        $rootScope.alertMessageLang(
                            "تم تعديل الملف الشخصى بنجاح ",
                            "your file has been updated successfully",
                            $rootScope.kayanLang
                        )
                        $scope.getCurrentUser();
                        //$location.path("/profile/", "_self");
                    }, function (response) {
                        //alert("Error !");
                    })
            }


            $scope.editPass = function () {

                var changePassObj = {
                    oldPass: $("#oldPass").val(),
                    password: $("#passwordid").val(),
                    confirmPassword: $("#confirmPasswordid").val()
                }
                //console.log(changePassObj);
                if (changePassObj.oldPass != $scope.user.password) {
                    $rootScope.alertMessageLang(
                        "الباسورد القديم غير متوافق !  ",
                        "Wrong old password",
                        $rootScope.kayanLang
                    )
                    return;
                }
                if (changePassObj.password.length < 6) {
                    $rootScope.alertMessageLang(
                        "الباسورد يجب ان يكون 6 حروف/ أرقام  !  ",
                        "password must be at least 6 characters / numbers ",
                        $rootScope.kayanLang
                    )
                    return;
                }
                if (changePassObj.password != changePassObj.confirmPassword) {
                    $rootScope.alertMessageLang(
                        "الباسورد غير متوافق  !  ",
                        "New Password not compatible",
                        $rootScope.kayanLang
                    )
                    return;
                }
                $http.put("http://134.209.178.237/api/admin/user/" + $rootScope.kayanUserID, changePassObj)
                    .then(function (response) {
                        $rootScope.alertMessageLang(
                            "تم تعديل الملف الشخصى بنجاح ",
                            "your file has been updated successfully",
                            $rootScope.kayanLang
                        )
                      
                        // $('#exampleModalLongTitle').click()
                        $('#exampleModalCenter').modal('hide')
                        
                        $scope.getCurrentUser();
                    }, function (response) {
                        alert("Error !");
                    })

            }



        })
        .controller("myCarsCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('myCars');
           
           
            $scope.geAlltMyCars = function (userID) {
                $scope.view = 1;
                $scope.userCars = [];
                $http.get("http://134.209.178.237/api/user/userAllCars?id=" + userID)
                    .then(function (response) {
                        $scope.userCars = response.data;
                        
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                    }
                    )
            }
            $scope.geAlltMyCars($rootScope.kayanUserID);
            $scope.getMyInRentCars = function (userID , activeClass , actaiveId)  {
               
                $('.'+ activeClass).css('background-color' , "#fff");
                $('.'+ activeClass).css('color' , "#000");
                $('#'+ activeClass+actaiveId).css('background-color' , "#C8972C");
                $('#'+ activeClass+actaiveId).css('color' , "#fff");
               // console.log(activeClass)
          
                $scope.userCars = [];
                $http.get("http://134.209.178.237/api/user/userInRentCar?id=" + userID)
                    .then(function (response) {
                        $scope.userCars = response.data;
                        // $('#rentCars').addClass("active");
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                    }
                    )
            }
           
            $scope.getMyActiveCars = function (userID , activeClass , actaiveId) {
                 
                  
                $('.'+ activeClass).css('background-color' , "#fff");
                $('.'+ activeClass).css('color' , "#000");
                $('#'+ activeClass+actaiveId).css('background-color' , "#C8972C");
                $('#'+ activeClass+actaiveId).css('color' , "#fff");
                //console.log(activeClass)
                //$scope.view = 2;

                $scope.userCars = [];
                $http.get("http://134.209.178.237/api/user/userActiveCar?id=" + userID)
                    .then(function (response) {
                        $scope.userCars = response.data;
                        $('#activeCars').addClass("active");
                    }, function (response) {
                        //alert("حدث خطا ما !! ");
                    }
                    )
            }
            $scope.getMyDeactiveCars = function (userID , activeClass , actaiveId) { 
                 
                $('.'+ activeClass).css('background-color' , "#fff");
                $('.'+ activeClass).css('color' , "#000");
                $('#'+ activeClass+actaiveId).css('background-color' , "#C8972C");
                $('#'+ activeClass+actaiveId).css('color' , "#fff");
                console.log(activeClass)
               // $scope.view = 2;

                $scope.userCars = [];
                $http.get("http://134.209.178.237/api/user/userDeactiveCar?id=" + userID)
                    .then(function (response) {
                        $scope.userCars = response.data;
                        $('#deactiveCars').addClass("active");
                    }, function (response) {
                        alert("حدث خطا ما !! ");
                    }
                    )
            }
            $scope.changeCarStatus = function (car ) {
                console.log(car )
               
               
                return;
                $http.put("http://134.209.178.237/api/user/car/" + carObj._id, newCarObj)
                    .then(function (response) {
                        $('.'+ activeClass).css('background-color' , "#fff");
                        $('.'+ activeClass).css('color' , "#000");
                        $scope.geAlltMyCars($rootScope.kayanUserID);
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                        }
                    )
            }
            $scope.getCarDetails = function (carId) {
                
                $http.get("http://134.209.178.237/api/user/getCarByID?id=" + carId)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        $scope.carObj = {};
                        $scope.categoryID = $scope.carDetails.categoryID._id;
                        $scope.getSubCategory($scope.categoryID);
                        $scope.subCategoryID = $scope.carDetails.subCategoryID._id;
                        $scope.carModelID = $scope.carDetails.carModelID._id;
                        $scope.carTypeID = $scope.carDetails.carTypeID._id;
                        $scope.carYearID = $scope.carDetails.carYearID._id;
                        if($scope.carDetails.allowDriver == 1){
                            $scope.carObj.allowDriver = true
                        }
                        if($scope.carDetails.allowDriver == 2){
                            $scope.carObj.allowDriver = false
                        }
                        if($scope.carDetails.automatic == 1){
                         
                            $scope.carObj.automatic = true
                        }
                        if(!$scope.carDetails.automatic || $scope.carDetails.automatic != 1){
                            $scope.carObj.automatic = false
                        }
                        $scope.carObj.startDateDefault =$scope.carDetails.startDate;
                        $scope.carObj.endDateDefault =$scope.carDetails.endtDate;
                        $scope.carObj.rentType  = $scope.carDetails.rentType;
                        if($scope.carDetails.logo){
                            $scope.carObj.logo = $scope.carDetails.logo;
                        }
                        if(!$scope.carDetails.logo){
                            $scope.carObj.logo = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        if($scope.carDetails.img1){
                            $scope.carObj.img1 = $scope.carDetails.img1;
                        }
                        if(!$scope.carDetails.img1){
                            $scope.carObj.img1 = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        if($scope.carDetails.img2){
                            $scope.carObj.img2 = $scope.carDetails.img2;
                        }
                        if(!$scope.carDetails.img2){
                            $scope.carObj.img2 = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        if($scope.carDetails.img3){
                            $scope.carObj.img3 = $scope.carDetails.img3;
                        }
                        if(!$scope.carDetails.img3){
                            $scope.carObj.img3 = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        if($scope.carDetails.img4){
                            $scope.carObj.img4 = $scope.carDetails.img4;
                        }
                        if(!$scope.carDetails.img4){
                            $scope.carObj.img4 = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        if($scope.carDetails.img5){
                            $scope.carObj.img5 = $scope.carDetails.img5;
                        }
                        if(!$scope.carDetails.img5){
                            $scope.carObj.img5 = "http://134.209.178.237/kayanWebsite/images/Capture.png";
                        }
                        $scope.startDateDefault = new Date($scope.carDetails.startDate);
                        $scope.endDateDefault =  new Date($scope.carDetails.endDate);
                        $('input[name=rentType]:checked').val(parseInt($scope.carDetails.rentType))
                        $scope.view = 2;
                    });
            }

            $scope.changeView = function(view){
                $scope.view = view;
            }






            
            
         

            $scope.getCategories = function () {
                $http.get("http://134.209.178.237/api/user/category")
                    .then(function (response) {
                        $scope.categories = [];
                        $scope.categories = response.data;

                    }, function (response) {
                        //alert("Error !!");
                    })
            }

            $scope.getSubCategory = function (categoryID) {

                $http.get("http://134.209.178.237/api/user/subcategory?id=" + categoryID)
                    .then(function (response) {
                        $scope.subcategory = [];
                        $scope.subcategory = response.data;
                    }
                        , function (response) {
                            // alert("Error !!");
                        })
            }
            $scope.getCarTypes = function () {
                $http.get("http://134.209.178.237/api/user/carType")
                    .then(function (response) {
                        $scope.carTypes = [];
                        $scope.carTypes = response.data;
                        // console.log($scope.Type)
                    }, function (response) {
                        //alert("Error !!");
                    })
            }

            $scope.getCarYears = function () {
                $http.get("http://134.209.178.237/api/user/carYear")
                    .then(function (response) {
                        $scope.carYears = [];
                        $scope.carYears = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCarModels = function () {
                $http.get("http://134.209.178.237/api/user/carModel")
                    .then(function (response) {
                        $scope.carModels = [];
                        $scope.carModels = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.changePic = function (num) {
                if (num == 1) {
                    $scope.logo_wait = true;

                    if ($('#logo').val() != null) {
                        var formData = new FormData();
                        var fileLogo = $('#logo')[0];
                        formData.append('file', fileLogo.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.logo = response.data;
                            console.log($scope.carObj.logo);

                            $scope.logo_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.logo_wait = false;
                        })


                    }

                }
                if (num == 2) {
                    $scope.img1_wait = true;
                    if ($('#img1').val() != null) {
                        var formData = new FormData();
                        var fileimg1 = $('#img1')[0];
                        formData.append('file', fileimg1.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img1 = response.data;
                            console.log($scope.carObj.img1);

                            $scope.img1_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img1_wait = false;
                        })


                    }

                }
                if (num == 3) {
                    $scope.img2_wait = true;
                    if ($('#img2').val() != null) {
                        var formData = new FormData();
                        var fileimg2 = $('#img2')[0];
                        formData.append('file', fileimg2.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img2 = response.data;
                            console.log($scope.carObj.img2);

                            $scope.img2_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img2_wait = false;
                        })


                    }

                }
                if (num == 4) {
                    $scope.img3_wait = true;
                    if ($('#img3').val() != null) {
                        var formData = new FormData();
                        var fileimg3 = $('#img3')[0];
                        formData.append('file', fileimg3.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img3 = response.data;
                            console.log($scope.carObj.img3);

                            $scope.img3_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img3_wait = false;
                        })


                    }

                }
                if (num == 5) {
                    $scope.img4_wait = true;
                    if ($('#img4').val() != null) {
                        var formData = new FormData();
                        var fileimg4 = $('#img4')[0];
                        formData.append('file', fileimg4.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img4 = response.data;
                            console.log($scope.carObj.img4);

                            $scope.img4_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img4_wait = false;
                        })


                    }

                }
                if (num == 6) {
                    $scope.img5_wait = true;
                    if ($('#img5').val() != null) {
                        var formData = new FormData();
                        var fileimg5 = $('#img5')[0];
                        formData.append('file', fileimg5.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img5 = response.data;
                            console.log($scope.carObj.img5);

                            $scope.img5_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img5_wait = false;
                        })


                    }

                }

            }
            $scope.editCar = function () {
                var today = new Date();
                var startDateDefault = new Date();
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);

                $rootScope.kayanUser = $cookieStore.get('kayanUser');
                $rootScope.kayanUserID = $cookieStore.get('kayanUserID');


                console.log($rootScope.kayanUser)
                console.log($rootScope.kayanUserID)
                var carObj = {
                    logo: $scope.carObj.logo,
                    img1: $scope.carObj.img1,
                    img2: $scope.carObj.img2,
                    img3: $scope.carObj.img3,
                    img4: $scope.carObj.img4,
                    img5: $scope.carObj.img5,
                    categoryID: $("#categoryID").val(),
                    subCategoryID: $("#subCategoryID").val(),
                    carModelID: $("#carModelID").val(),
                    carTypeID: $("#carTypeID").val(),
                    carYearID: $("#carYearID").val(),
                    carNum: $("#carNum").val(),
                    rentType: parseInt($('input[name=rentType]:checked').val()),
                    rentPrice: $("#rentPrice").val(),
                    userID: $rootScope.kayanUserID,
                    description: $("#description").val(),
                    startDate: $("#startDate").val(),
                    endDate: $("#endDate").val(),
                    rentLenght: parseInt($('input[name=rentType]:checked').val()),
                    membershipPrice: $("#rentPrice").val(),
                    allowDriver: $scope.carObj.allowDriver,
                    automatic: $scope.carObj.automatic


                }

                console.log("carObj");
                console.log(carObj);
                if ($rootScope.kayanUser && $rootScope.kayanUser._id && $rootScope.kayanUser._id.length > 0) {
                    var today = new Date()
                    var todayYear = today.getFullYear();;
                    var todayMonth = today.getMonth();
                    var todayDate = today.getDate();

                    var startDateDefault = new Date($("#startDate").val());
                    var startDateDefaultYear = startDateDefault.getFullYear();;
                    var startDateDefaultMonth = startDateDefault.getMonth();
                    var startDateDefaultDate = startDateDefault.getDate();

                    var endDateDefault = new Date($("#endDate").val());
                    var endDateDefaultYear = endDateDefault.getFullYear();
                    var endDateDefaultMonth = endDateDefault.getMonth();
                    var endDateDefaultDate = endDateDefault.getDate();

                    console.log("choosen start date ")
                    console.log(startDateDefaultYear)
                    console.log(startDateDefaultMonth)
                    console.log(startDateDefaultDate)


                    console.log("choosen end date ")
                    console.log(endDateDefaultYear)
                    console.log(endDateDefaultMonth)
                    console.log(endDateDefaultDate)




                    console.log("today date ")
                    console.log(todayYear)
                    console.log(todayMonth)
                    console.log(todayDate)

                    // Compare choosen choosen start date   with today 
                    // if (startDateDefaultYear < todayYear) {
                    //     $rootScope.alertMessageLang(
                    //         "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                    //         "From Date : Can't be less than today ",
                    //         $rootScope.kayanLang
                    //     )
                    //     return;
                    // }
                    // if (startDateDefaultYear == todayYear && startDateDefaultMonth < todayMonth) {
                    //     $rootScope.alertMessageLang(
                    //         "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                    //         "From Date : Can't be less than today ",
                    //         $rootScope.kayanLang
                    //     )
                    //     return;
                    // }
                    // if (startDateDefaultYear == todayYear && startDateDefaultMonth == todayMonth && startDateDefaultDate < todayDate) {
                    //     $rootScope.alertMessageLang(
                    //         "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                    //         "From Date : Can't be less than today ",
                    //         $rootScope.kayanLang
                    //     )
                    //     return;
                    // }

                    if (startDateDefaultYear > endDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth > endDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth == endDateDefaultMonth && startDateDefaultDate > endDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }



                    if (endDateDefaultYear < todayYear) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth < todayMonth) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth == todayMonth && endDateDefaultDate < todayDate) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }


                    // Compare  today end date with choosen end date  
                    if (endDateDefaultYear < startDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth < startDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth == startDateDefaultMonth && endDateDefaultDate < startDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }





                    if (carObj.rentType == 1) {
                        if (startDateDefaultYear != endDateDefaultYear || startDateDefaultMonth != endDateDefaultMonth || startDateDefaultDate != endDateDefaultDate) {
                            $rootScope.alertMessageLang(
                                "حجز هذه السيارة يكون خلال نفس اليوم لانها بالساعة  !",
                                "booking this car must be within same day  ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if (carObj.rentType == 2) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (Difference_In_Days * -1 > 30) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون أقل من 30 يوم   !",
                                "Booking days must be less than 30   ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if (carObj.rentType == 3) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (((Difference_In_Days * -1) % 30) != 0) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون بالشهر    !",
                                "Booking days must be greater than 30    ",
                                $rootScope.kayanLang
                            )
                            return;

                        }
                    }

                    if(carObj.automatic == true){
                        carObj.automatic = 1; 
                    }
                    if(carObj.automatic == false){
                        carObj.automatic = 2; 
                    }
                    if(carObj.allowDriver == true){
                        carObj.allowDriver = 1; 
                    }
                    if(carObj.allowDriver == false){
                        carObj.allowDriver = 2; 
                    }

                    console.log(carObj);

                    $http.get("http://134.209.178.237/api/user/getCarByID?id=" + $scope.carDetails._id)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        if($scope.carDetails.status == 3){
                            $rootScope.alertMessageLang(
                                "    لا يمكن التعديل على السيارة أثناء حجزها  ",
                                " Sorry , you can't update car info while in reservation",
                                $rootScope.kayanLang
                            ) 
                            $scope.getCarDetails($scope.carDetails._id);
                            $scope.view = 2;
                            return;
                        }
                        if($scope.carDetails.status == 5){
                            $rootScope.alertMessageLang(
                                "    لا يمكن التعديل على السيارة لانها محظورة من النظام   ",
                                " Sorry , you can't update car info cause it is blocked from admin",
                                $rootScope.kayanLang
                            ) 
                            $scope.getCarDetails($scope.carDetails._id);
                            $scope.view = 2;
                            return;
                        }
                        $http.put("http://134.209.178.237/api/user/car/" + $scope.carDetails._id, carObj)
                        .then(function (response) {
                            $rootScope.alertMessageLang(
                                "    تم تعديل  السيارة بنجاح ",
                                " your car has been Updated successfully     ",
                                $rootScope.kayanLang
                            )
                            $http.get("http://134.209.178.237/api/user/getCarByID?id=" + $scope.carDetails._id)
                                .then(function (response) {
                                    $scope.carDetails = response.data;
                                    $scope.view = 2;
                                
                                });


                        }), function (response) {
                            //alert(' Error while Uploading Image !');
                        }
                    });
                    
                    
                } else {
                    $rootScope.alertMessageLang(
                        "يجب تسجيل الدخول اولا",
                        " you should login to continue ",
                        $rootScope.kayanLang
                    )
                    $window.open("http://134.209.178.237/kayanwebsite/html/login.html", "_self");
                    return;
                }
                
               
            }


            $scope.getCategories();
            $scope.getCarTypes();
            $scope.getCarYears();
            $scope.getCarModels();
           
        })

        .controller("carDetailsCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            var carId = $rootScope.carId;
            console.log("carId");
            console.log(carId);
            $rootScope.slideNavActiveLink('carDetails');
            $scope.getCarDetails = function (carId) {
                
                $http.get("http://134.209.178.237/api/user/getCarByID?id=" + carId)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        
                    });
            }
            $scope.getCarDetails($rootScope.currentCarID);
  
        })

        .controller("myRequestsCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('myRequests');
            
              
            $scope.geAllUserRequests = function (userID) {
                $scope.userRequests = [];
                $http.get("http://134.209.178.237/api/user/userRequests?id=" + userID)
                    .then(function (response) {
                        $scope.userRequests = response.data;
                    }, function (response) {
                        alert("حدث خطا ما !! ");
                    }
                    )
            }
            $scope.geAllUserRequests($rootScope.kayanUserID);
            $scope.getRequestDetails = function(requestID){
                $http.get("http://134.209.178.237/api/user/getRequestByID?id=" + requestID)
                .then(function (response) {
                    $scope.requestDetails = response.data;
                    $scope.view = 1;
                   
                }, function (response) {
                   // alert("حدث خطا ما !! ");
                })
            }
            
        })
        .controller("myCarsRequestsCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('myCarsRequests');
            
            $scope.geAlltCarsPendeingRequests = function (userID) {
                $scope.pendingRequests = [];
                $http.get("http://134.209.178.237/api/user/pendingRequests?id=" + userID)
                    .then(function (response) {
                        $scope.pendingRequests = response.data;
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                    })
                    
            }
            $scope.geAlltCarsPendeingRequests($rootScope.kayanUserID);
            $scope.getRequestDetails = function(requestID){
                $http.get("http://134.209.178.237/api/user/getRequestByID?id=" + requestID)
                .then(function (response) {
                    $scope.requestDetails = response.data;
                    $scope.view = 1;
                    
                }, function (response) {
                   // alert("حدث خطا ما !! ");
                })
            }
            $scope.selectRequestOption = function(status){
                $('.modal-content span').removeClass('selectRequestOptionSelected');
                $('#selectRequestOption'+status).addClass('selectRequestOptionSelected');
                if(status == 2){
                    $scope.currentRequestStatus = 2;
                }
                if(status == 10){
                    $scope.currentRequestStatus = 10;
                }
                $scope.currentRequestStatus = status;
            }
            $scope.updateRequest = function(currentStatus){
                console.log(currentStatus);
                if(!currentStatus){
                    $rootScope.alertMessageLang(
                        'يرجى اختيار حالة الطلب   !!',
                        'please choose request status ',
                        $rootScope.kayanLang
                        
                        );
                        return;
                }
                $http.get("http://134.209.178.237/api/user/getRequestByID?id=" + $scope.requestDetails._id)
                .then(function (response) {
                    $scope.requestDetails = response.data;
                    if($scope.requestDetails.status == 2){
                        $rootScope.alertMessageLang(
                            'نأسف ، لا يمكن تغير حالة الطلب بعد رفضه من قبل     !!',
                            'you cant change request after it has been rejected before ',
                            $rootScope.kayanLang
                            
                            );
                            return;
                    }
                    if($scope.requestDetails.status == 5){
                        $rootScope.alertMessageLang(
                            'نأسف ، لا يمكن تغير حالة الطلب بعد اكتماله  من قبل     !!',
                            'you cant change request after it has been finished before ',
                            $rootScope.kayanLang
                            
                            );
                            return;
                    }
                    if($scope.requestDetails.status == 5 && currentStatus == 5){
                        $rootScope.alertMessageLang(
                            ' الطلب منتهى بالفعل     ',
                            'request already finished ',
                            $rootScope.kayanLang
                            
                            );
                            return;
                    }
                    if($scope.requestDetails.status == 4 && currentStatus == 4){
                        $rootScope.alertMessageLang(
                            ' السيارة فى الايجار بالفعل      ',
                            'Car already in rent  ',
                            $rootScope.kayanLang
                            
                            );
                            return;
                    }
                    if($scope.requestDetails.status ==6 && currentStatus == 6){
                        $rootScope.alertMessageLang(
                            ' تم تجهيز السيارة من قبل       ',
                            'car is ready   ',
                            $rootScope.kayanLang
                            
                            );
                            return;
                    }

                    
                    var requestObj = {
                        status : currentStatus
                    }
                    //console.log(requestObj);
                    
                    $http.put("http://134.209.178.237/api/user/request/" + $scope.requestDetails._id ,requestObj )
                    .then(function (response) {
                        $('#exampleModalCenter').modal('hide');
                        if(currentStatus != 4 && currentStatus != 5 ){
                            $rootScope.alertMessageLang(
                                'تم تعديل حالة الطلب بنجاح  !!',
                                'request status has been updated successfully !!',
                                $rootScope.kayanLang
                                
                                );
                                $scope.view = "";
                        }
                        if(currentStatus == 4 || currentStatus == 5 ){
                            if (currentStatus == 4){
                                var newCarObj = {
                                    status : 3
                                    }
                                }
                                if (currentStatus ==5){
                                    var newCarObj = {
                                        status : 2
                                        }
                                    }
                                $http.put("http://134.209.178.237/api/user/car/" + $scope.requestDetails.carID._id, newCarObj)
                                    .then(function (response) {
                                        if(currentStatus == 4){
                                            $rootScope.alertMessageLang(
                                                'تم تعديل حالة الطلب بنجاح و بدء حجز السيارة   !!',
                                                'request status has been updated successfully and car start being in rent !!',
                                                $rootScope.kayanLang
                                                
                                                );
                                        }
                                        if(currentStatus == 5){
                                            $rootScope.alertMessageLang(
                                                'تم تعديل حالة الطلب بنجاح و انهاء حجز السيارة   !!',
                                                'request status has been updated successfully and car start being in rent !!',
                                                $rootScope.kayanLang
                                                
                                                );
                                            }
                                        
                                            $scope.view = "";
                                        }, function (response) {
                                       // alert("حدث خطا ما !! ");
                                        }
                                    )
                           
                        }
                        
                        
                        
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                    })



                }, function (response) {
                    // alert("حدث خطا ما !! ");
                })
                
            }

            $scope.changeCarStatus = function (car , status ) {
               
                var newCarObj = {
                    status : status
                }
               
                $http.put("http://134.209.178.237/api/user/car/" + car._id, newCarObj)
                    .then(function (response) {
                      
                        $scope.geAlltMyCars($rootScope.kayanUserID);
                    }, function (response) {
                       // alert("حدث خطا ما !! ");
                        }
                    )
            }

            
        })

        .controller("invoicesDueCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('invoicesDue');
            $scope.totalInvoices = 0;
            $scope.geAlltCarsInvoicesDue = function (userID) {
                $scope.InvoicesDue = [];

                $http.get("http://134.209.178.237/api/user/getReceiptByUser?id=" + userID)
                    .then(function (response) {
                        $scope.InvoicesDue = response.data;
                        $scope.InvoicesDue.forEach(invoice => {
                            $scope.totalInvoices += invoice.price;
                        });


                        console.log($scope.InvoicesDue);
                    }, function (response) {
                           // alert("حدث خطا ما !! ");
                     }
                    )
            }

           


            $scope.geAlltCarsInvoicesDue($rootScope.kayanUserID);
        })

       
       
        .controller("aboutCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanUser._id = '') {
                alert('قم بالتسجيل أولا !!');
                $window.open("Website/html/login.html", "_self");
            }
            $scope.getAbout = function () {
            }
            //$scope.getAbout();
        })
        .controller("contactUsCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('contactUs');
            $scope.view = 1;
            $scope.currentMessages = [];
            $scope.getUserMesages = function (userID) {
                $http.get("http://134.209.178.237/api/user/contactUsByUsers?id=" + userID)
                    .then(function (response) {
                        $scope.userMessages = response.data;
                        // console.log("aaaaaa");

                    }, function (response) {
                        //alert("Error !!");
                    })
            }

            $scope.getUserMesages($rootScope.kayanUserID);

            $scope.getMessageById = function (messageID) {
                $http.get("http://134.209.178.237/api/user/contactUsMsgById?id=" + messageID)
                    .then(function (response) {
                        //$scope.msg = response.data;
                        $scope.currentMessages = response.data;
                        // console.log($scope.msg)
                        console.log($scope.currentMessages)
                        $scope.message = "";
                    }, function (response) {
                        alert("Error !!");
                    })

            }

            $scope.sendNewMessage = function (userID, message) {
                var userObj = {
                    userID: userID
                }

                $http.post("http://134.209.178.237/api/user/contactUs", userObj)
                    .then(function (response) {
                        if (response.data && response.data._id) {
                            $scope.messageID = response.data._id;
                        }
                        var messageObj = {
                            contactUsID: $scope.messageID,
                            from: 1,
                            msg: message
                        }


                        $http.post("http://134.209.178.237/api/user/contactUsMsg", messageObj)
                            .then(function (response) {
                                $location.path("contactUs/" ,"_self");

                                //$scope.getMessageById($scope.messageID);

                            }, function (response) {
                                //alert("Error !");
                            })
                    }, function (response) {
                        //alert("Error !");
                    })


            }

            $scope.getChatHistory = function (chatID) {

                $http.get("http://134.209.178.237/api/user/contactUsMsgById?id=" + chatID)
                    .then(function (response) {

                        $scope.chat = response.data;
                        //console.log($scope.chat);
                        $scope.view = 2

                    }, function (response) {
                        //alert("Error !!");
                    })

            }


            $scope.updateMessage = function (messageID, message) {

                var messageObj = {
                    contactUsID: messageID,
                    from: 1,
                    msg: message
                }


                $http.post("http://134.209.178.237/api/user/contactUsMsg", messageObj)
                    .then(function (response) {
                        $scope.message = "";
                        $scope.getChatHistory(messageID);
                        //$scope.getMessageById($scope.messageID);

                    }, function (response) {
                        //alert("Error !");
                    })
            }


        })


        .controller("editmycarCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanUser._id = '') {
                alert('قم بالتسجيل أولا !!');
                $window.open("Website/html/login.html", "_self");
            }
            var today = new Date();
            var startDateDefault = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            $scope.carObj = {
                startDateDefault: new Date(startDateDefault),
                startDate: new Date(today),
                endDate: new Date(tomorrow),
                allowDriver: true,
                automatic: true,

            }

            $scope.getCategories = function () {
                $http.get("/api/user/category")
                    .then(function (response) {
                        $scope.categories = [];
                        $scope.categories = response.data;

                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCategories();
            //$scope.getAbout();
            $scope.getSubCategory = function (categoryID) {

                $http.get("/api/user/subcategory?id=" + categoryID)
                    .then(function (response) {
                        $scope.subcategory = response.data;
                    }
                        , function (response) {
                            alert("Error !!");
                        })
            }
            $scope.getCarTypes = function () {
                $http.get("/api/user/carType")
                    .then(function (response) {
                        $scope.carTypes = response.data;
                        // console.log($scope.Type)
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCarTypes();
            $scope.getCarYears = function () {
                $http.get("/api/user/carYear")
                    .then(function (response) {
                        $scope.carYears = response.data;
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCarYears()
            $scope.getCarModels = function () {
                $http.get("/api/user/carModel")
                    .then(function (response) {
                        $scope.carModels = response.data;
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCarModels();

            $scope.getCarDetails = function (carId) {
                $rootScope.currentCarId = carId;
                $rootScope.selectedCar = carId;
                //$window.open("AdTitle.html" , "_self");
                $http.get("/api/user/getCarByID?id=" + $rootScope.currentCarId)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        $rootScope.currentView = 3;
                        console.log($scope.carDetails);

                        var today = new Date();
                        $scope.startDateDefault = new Date();
                        $scope.endDateDefault = new Date($scope.carDetails.endDate);
                    });
            }
            $scope.getCarDetails($rootScope.currentCarID);


            $scope.editcar = function () {
                if ($('#carLogo').val() != null) {
                    var formData = new FormData();
                    var fileLogo = $('#carLogo')[0];
                    formData.append('file', fileLogo.files[0]);
                    $http({
                        url: "http://165.22.127.119/api/user/uploadFile",
                        method: "POST",
                        data: formData,
                        headers: { 'Content-Type': undefined },
                        processData: false,
                    }).then(function (response) {
                        $scope.carLogopath = response.data;
                        if ($('#img1').val() != null) {
                            var formData = new FormData();
                            var fileLogo = $('#img1')[0];
                            formData.append('file', fileLogo.files[0]);
                            $http({
                                url: "http://165.22.127.119/api/user/uploadFile",
                                method: "POST",
                                data: formData,
                                headers: { 'Content-Type': undefined },
                                processData: false,
                            }).then(function (response) {
                                $scope.img1path = response.data;
                                if ($('#img2').val() != null) {
                                    var formData = new FormData();
                                    var fileLogo = $('#img2')[0];
                                    formData.append('file', fileLogo.files[0]);
                                    $http({
                                        url: "http://165.22.127.119/api/user/uploadFile",
                                        method: "POST",
                                        data: formData,
                                        headers: { 'Content-Type': undefined },
                                        processData: false,
                                    }).then(function (response) {
                                        $scope.img2path = response.data;
                                        if ($('#img3').val() != null) {
                                            var formData = new FormData();
                                            var fileLogo = $('#img3')[0];
                                            formData.append('file', fileLogo.files[0]);
                                            $http({
                                                url: "http://165.22.127.119/api/user/uploadFile",
                                                method: "POST",
                                                data: formData,
                                                headers: { 'Content-Type': undefined },
                                                processData: false,
                                            }).then(function (response) {
                                                $scope.img3path = response.data;
                                                if ($('#img4').val() != null) {
                                                    var formData = new FormData();
                                                    var fileLogo = $('#img4')[0];
                                                    formData.append('file', fileLogo.files[0]);
                                                    $http({
                                                        url: "http://165.22.127.119/api/user/uploadFile",
                                                        method: "POST",
                                                        data: formData,
                                                        headers: { 'Content-Type': undefined },
                                                        processData: false,
                                                    }).then(function (response) {
                                                        $scope.img4path = response.data;
                                                        if ($('#img5').val() != null) {
                                                            var formData = new FormData();
                                                            var fileLogo = $('#img5')[0];
                                                            formData.append('file', fileLogo.files[0]);
                                                            $http({
                                                                url: "http://165.22.127.119/api/user/uploadFile",
                                                                method: "POST",
                                                                data: formData,
                                                                headers: { 'Content-Type': undefined },
                                                                processData: false,
                                                            }).then(function (response) {
                                                                $scope.img5path = response.data;
                                                                if ($('#img6').val() != null) {
                                                                    var formData = new FormData();
                                                                    var fileLogo = $('#img6')[0];
                                                                    formData.append('file', fileLogo.files[0]);
                                                                    $http({
                                                                        url: "http://165.22.127.119/api/user/uploadFile",
                                                                        method: "POST",
                                                                        data: formData,
                                                                        headers: { 'Content-Type': undefined },
                                                                        processData: false,
                                                                    }).then(function (response) {
                                                                        $scope.img6path = response.data;


                                                                        var Info = {
                                                                            logo: $scope.carLogopath,
                                                                            img1: $scope.img1path,
                                                                            img2: $scope.img2path,
                                                                            img3: $scope.img3path,
                                                                            img4: $scope.img4path,
                                                                            img5: $scope.img5path,
                                                                            img6: $scope.img6path,
                                                                            carNum: $("#carNum").val(),
                                                                            categoryID: $("#category").val(),
                                                                            userID: $rootScope.kayanUserID,
                                                                            subCategoryID: $("#subcategory").val(),
                                                                            carModelID: $("#model").val(),
                                                                            carTypeID: $("#type").val(),
                                                                            carYearID: $("#year").val(),
                                                                            rentType: parseInt($scope.carObj.rentType),
                                                                            rentPrice: $("#RentPrice").val(),
                                                                            description: $("#description").val(),
                                                                            startDate: $("#startDate").val(),
                                                                            endDate: $("#endDate").val(),
                                                                            rentLenght: $("#RentLenght").val(),
                                                                            membershipPrice: 250,
                                                                        }
                                                                        if ($scope.carObj && $scope.carObj.allowDriver && $scope.carObj.allowDriver == true) {
                                                                            Info.allowDriver = 2
                                                                        } else {
                                                                            Info.allowDriver = 1
                                                                        }
                                                                        if ($scope.carObj && $scope.carObj.automatic && $scope.carObj.automatic == true) {
                                                                            Info.automatic = 2
                                                                        } else {
                                                                            Info.automatic = 1
                                                                        }

                                                                        console.log(Info)

                                                                        $http.put("http://134.209.178.237/api/user/car/" + $rootScope.currentCarId, Info)
                                                                            .then(function (response) {
                                                                                alert("Terms & Condition Added Successfully");
                                                                                $location.path("/Carcategorypage/", "_self");


                                                                            }, function (response) {
                                                                                alert("Error !");
                                                                            }), function (response) {
                                                                                alert(' Error while Uploading Image !');
                                                                            }
                                                                    }, function (response) {
                                                                        alert(' Error while Uploading Image !');
                                                                    })
                                                                }
                                                            }, function (response) {
                                                                alert(' Error while Uploading Image !');
                                                            })
                                                        }
                                                    }, function (response) {
                                                        alert(' Error while Uploading Image !');
                                                    })
                                                }
                                            }, function (response) {
                                                alert(' Error while Uploading Image !');
                                            })
                                        }
                                    }, function (response) {
                                        alert(' Error while Uploading Image !');
                                    })
                                }

                            }, function (response) {
                                alert(' Error while Uploading Image !');
                            })
                        }

                    }, function (response) {
                        alert(' Error while Uploading Image !');
                    })
                }
            }



            $scope.getVal = function () {

                console.log(parseInt($scope.carObj.rentType));

            }

        })


        .controller("addCarCtrl", function ($rootScope, $scope, $http, $cookieStore, $rootScope, $window, $location) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            if ($rootScope.kayanUserID == undefined) {
                $rootScope.alertMessageLang(
                    'قم بالتسجيل أولا !!',
                    'please sign In first !!',
                    $rootScope.kayanLang
                    
                    );
                $window.open("http://134.209.178.237/kayanwebsite/html/index.html", "_self");
            }
            $rootScope.slideNavActiveLink('addCar');


            var today = new Date();
            var startDateDefault = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            $scope.startDateDefault = new Date();
            $scope.endDateDefault = new Date($scope.startDateDefault);

            $scope.carObj = {
                startDateDefault: new Date(startDateDefault),
                startDate: new Date(today),
                endDate: new Date(tomorrow),
                allowDriver: true,
                automatic: false,
                logo: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img1: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img2: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img3: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img4: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img5: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                img6: "http://134.209.178.237/kayanWebsite/images/Capture.png",
                rentType: 2

            }

            $scope.getCategories = function () {
                $http.get("http://134.209.178.237/api/user/category")
                    .then(function (response) {
                        $scope.categories = [];
                        $scope.categories = response.data;

                    }, function (response) {
                        //alert("Error !!");
                    })
            }

            $scope.getSubCategory = function (categoryID) {

                $http.get("http://134.209.178.237/api/user/subcategory?id=" + categoryID)
                    .then(function (response) {
                        $scope.subcategory = [];
                        $scope.subcategory = response.data;
                    }
                        , function (response) {
                            // alert("Error !!");
                        })
            }
            $scope.getCarTypes = function () {
                $http.get("http://134.209.178.237/api/user/carType")
                    .then(function (response) {
                        $scope.carTypes = [];
                        $scope.carTypes = response.data;
                        // console.log($scope.Type)
                    }, function (response) {
                        //alert("Error !!");
                    })
            }

            $scope.getCarYears = function () {
                $http.get("http://134.209.178.237/api/user/carYear")
                    .then(function (response) {
                        $scope.carYears = [];
                        $scope.carYears = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCarModels = function () {
                $http.get("http://134.209.178.237/api/user/carModel")
                    .then(function (response) {
                        $scope.carModels = [];
                        $scope.carModels = response.data;
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.changePic = function (num) {
                if (num == 1) {
                    $scope.logo_wait = true;

                    if ($('#logo').val() != null) {
                        var formData = new FormData();
                        var fileLogo = $('#logo')[0];
                        formData.append('file', fileLogo.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.logo = response.data;
                            console.log($scope.carObj.logo);

                            $scope.logo_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.logo_wait = false;
                        })


                    }

                }
                if (num == 2) {
                    $scope.img1_wait = true;
                    if ($('#img1').val() != null) {
                        var formData = new FormData();
                        var fileimg1 = $('#img1')[0];
                        formData.append('file', fileimg1.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img1 = response.data;
                            console.log($scope.carObj.img1);

                            $scope.img1_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img1_wait = false;
                        })


                    }

                }
                if (num == 3) {
                    $scope.img2_wait = true;
                    if ($('#img2').val() != null) {
                        var formData = new FormData();
                        var fileimg2 = $('#img2')[0];
                        formData.append('file', fileimg2.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img2 = response.data;
                            console.log($scope.carObj.img2);

                            $scope.img2_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img2_wait = false;
                        })


                    }

                }
                if (num == 4) {
                    $scope.img3_wait = true;
                    if ($('#img3').val() != null) {
                        var formData = new FormData();
                        var fileimg3 = $('#img3')[0];
                        formData.append('file', fileimg3.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img3 = response.data;
                            console.log($scope.carObj.img3);

                            $scope.img3_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img3_wait = false;
                        })


                    }

                }
                if (num == 5) {
                    $scope.img4_wait = true;
                    if ($('#img4').val() != null) {
                        var formData = new FormData();
                        var fileimg4 = $('#img4')[0];
                        formData.append('file', fileimg4.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img4 = response.data;
                            console.log($scope.carObj.img4);

                            $scope.img4_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img4_wait = false;
                        })


                    }

                }
                if (num == 6) {
                    $scope.img5_wait = true;
                    if ($('#img5').val() != null) {
                        var formData = new FormData();
                        var fileimg5 = $('#img5')[0];
                        formData.append('file', fileimg5.files[0]);

                        $http({
                            url: "http://165.22.127.119/api/user/uploadFile",
                            method: "POST",
                            data: formData,
                            headers: { 'Content-Type': undefined },
                            processData: false,
                        }).then(function (response) {
                            //alert("done")
                            $scope.carObj.img5 = response.data;
                            console.log($scope.carObj.img5);

                            $scope.img5_wait = false;


                            // here
                        }, function (response) {
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما أثناء تحميل الصورة  !!  ",
                                "something wrong happened while uploading pic !!",
                                $rootScope.kayanLang
                            )
                            $scope.img5_wait = false;
                        })


                    }

                }

            }
            $scope.addCar = function () {


                $rootScope.kayanUser = $cookieStore.get('kayanUser');
                $rootScope.kayanUserID = $cookieStore.get('kayanUserID');


                console.log($rootScope.kayanUser)
                console.log($rootScope.kayanUserID)
                var carObj = {
                    logo: $scope.carObj.logo,
                    img1: $scope.carObj.img1,
                    img2: $scope.carObj.img2,
                    img3: $scope.carObj.img3,
                    img4: $scope.carObj.img4,
                    img5: $scope.carObj.img5,
                    categoryID: $("#categoryID").val(),
                    subCategoryID: $("#subCategoryID").val(),
                    carModelID: $("#carModelID").val(),
                    carTypeID: $("#carTypeID").val(),
                    carYearID: $("#carYearID").val(),
                    carNum: $("#carNum").val(),
                    rentType: parseInt($('input[name=rentType]:checked').val()),
                    rentPrice: $("#rentPrice").val(),
                    userID: $rootScope.kayanUserID,
                    description: $("#description").val(),
                    startDate: $("#startDate").val(),
                    endDate: $("#endDate").val(),
                    rentLenght: parseInt($('input[name=rentType]:checked').val()),
                    membershipPrice: $("#rentPrice").val(),
                    allowDriver: $scope.carObj.allowDriver,
                    automatic: $scope.carObj.automatic


                }

                console.log("carObj");
                console.log(carObj);
                if ($rootScope.kayanUser && $rootScope.kayanUser._id && $rootScope.kayanUser._id.length > 0) {
                    var today = new Date()
                    var todayYear = today.getFullYear();;
                    var todayMonth = today.getMonth();
                    var todayDate = today.getDate();

                    var startDateDefault = new Date($("#startDate").val());
                    var startDateDefaultYear = startDateDefault.getFullYear();;
                    var startDateDefaultMonth = startDateDefault.getMonth();
                    var startDateDefaultDate = startDateDefault.getDate();

                    var endDateDefault = new Date($("#endDate").val());
                    var endDateDefaultYear = endDateDefault.getFullYear();
                    var endDateDefaultMonth = endDateDefault.getMonth();
                    var endDateDefaultDate = endDateDefault.getDate();

                    console.log("choosen start date ")
                    console.log(startDateDefaultYear)
                    console.log(startDateDefaultMonth)
                    console.log(startDateDefaultDate)


                    console.log("choosen end date ")
                    console.log(endDateDefaultYear)
                    console.log(endDateDefaultMonth)
                    console.log(endDateDefaultDate)




                    console.log("today date ")
                    console.log(todayYear)
                    console.log(todayMonth)
                    console.log(todayDate)

                    // Compare choosen choosen start date   with today 
                    if (startDateDefaultYear < todayYear) {
                        $rootScope.alertMessageLang(
                            "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == todayYear && startDateDefaultMonth < todayMonth) {
                        $rootScope.alertMessageLang(
                            "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == todayYear && startDateDefaultMonth == todayMonth && startDateDefaultDate < todayDate) {
                        $rootScope.alertMessageLang(
                            "من تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }

                    if (startDateDefaultYear > endDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth > endDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (startDateDefaultYear == endDateDefaultYear && startDateDefaultMonth == endDateDefaultMonth && startDateDefaultDate > endDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "تاريخ الانتهاء : لا يمكن أن يكون أقل من تاريخ البداية   ",
                            "To Date Can't be less than from date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }



                    if (endDateDefaultYear < todayYear) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth < todayMonth) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == todayYear && endDateDefaultMonth == todayMonth && endDateDefaultDate < todayDate) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ اليوم   ",
                            "From Date : Can't be less than today ",
                            $rootScope.kayanLang
                        )
                        return;
                    }


                    // Compare  today end date with choosen end date  
                    if (endDateDefaultYear < startDateDefaultYear) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth < startDateDefaultMonth) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }
                    if (endDateDefaultYear == startDateDefaultYear && endDateDefaultMonth == startDateDefaultMonth && endDateDefaultDate < startDateDefaultDate) {
                        $rootScope.alertMessageLang(
                            "الى  تاريخ : لا يمكن أن يكون أقل من تاريخ البداية    ",
                            "To Date : Can't be less than start date ",
                            $rootScope.kayanLang
                        )
                        return;
                    }





                    if (carObj.rentType == 1) {
                        if (startDateDefaultYear != endDateDefaultYear || startDateDefaultMonth != endDateDefaultMonth || startDateDefaultDate != endDateDefaultDate) {
                            $rootScope.alertMessageLang(
                                "حجز هذه السيارة يكون خلال نفس اليوم لانها بالساعة  !",
                                "booking this car must be within same day  ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if (carObj.rentType == 2) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (Difference_In_Days * -1 > 30) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون أقل من 30 يوم   !",
                                "Booking days must be less than 30   ",
                                $rootScope.kayanLang
                            )
                            return;
                        }
                    }
                    if (carObj.rentType == 3) {
                        var Difference_In_Days = Math.floor((Date.UTC(startDateDefaultYear, startDateDefaultMonth, startDateDefaultDate) - Date.UTC(endDateDefaultYear, endDateDefaultMonth, endDateDefaultDate)) / (1000 * 60 * 60 * 24));
                        if (((Difference_In_Days * -1) % 30) != 0) {
                            $rootScope.alertMessageLang(
                                "عدد ايام الحجز يجب ان يكون بالشهر    !",
                                "Booking days must be greater than 30    ",
                                $rootScope.kayanLang
                            )
                            return;

                        }
                    }


                    $http.post("http://134.209.178.237/api/user/car", carObj)
                        .then(function (response) {
                            $rootScope.alertMessageLang(
                                "    تم اضافة السيارة بنجاح ",
                                " your car has been added successfully     ",
                                $rootScope.kayanLang
                            )
                            $location.path("http://localhost:1337/html/index.html", "_self");



                        }), function (response) {
                            alert(' Error while Uploading Image !');
                        }
                } else {
                    $rootScope.alertMessageLang(
                        "يجب تسجيل الدخول اولا",
                        " you should login to continue ",
                        $rootScope.kayanLang
                    )
                    $window.open("http://134.209.178.237/kayanwebsite/html/login.html", "_self");
                    return;
                }
                console.log("carObj22");
                console.log(carObj);
                // carObj.rentType
                // console.log("$('#categoryID').val()");
                // console.log($('#categoryID').val());
                // console.log($scope.categoryID);
            }


            $scope.getCategories();
            $scope.getCarTypes();
            $scope.getCarYears();
            $scope.getCarModels();

        })


})
    ();