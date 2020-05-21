
(function () {


    angular.module('kayanUser', ['ngCookies'])
        .filter('cmdate', [
            '$filter', function ($filter) {
                return function (input, format) {
                    return $filter('date')(new Date(input), format);
                };
            }
        ])

        .controller("SignUpCtrl", function ($scope, $http, $rootScope, $cookieStore, $window) {
            // var newArr = [
            //     "Here1",
            //     "Here2",
            //     "Here3",
            //     "Here4",
            //     "Here5",
            //     "Here6",
            //     "Here7",
            //     "Here8",
            //     "Here9",
            //     "Here10",
            // ]
            // var page = 2;
            // var limit = 2;
            // var slinceIndex = (limit * page) - limit;
            // console.log(page)
            // console.log(limit)
            // console.log(slinceIndex)
            // var lastArr = newArr.slice(slinceIndex, limit);
            
            // console.log(lastArr);
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');


            if ($rootScope.kayanUserID && $rootScope.kayanUserID.length > 0) {
                $window.open("http://134.209.178.237/kayanWebsite/html/kayanUser.html", "_self");
            }
            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");
                } else {
                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
            }
            $rootScope.changeLang = function (lang) {
                $cookieStore.put('kayanLang', lang);
                $rootScope.kayanLang = $cookieStore.get('kayanLang');
                if ($rootScope.kayanLang == 'ar') {
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

            $scope.user = {
                personalImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                licenseImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                nationalIdImg : "http://134.209.178.237/kayanWebsite/images/Capture.png",
                uploadCount : 0
            }
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
                                    console.log($scope.user.personalImg);
                                       
                                        $scope.user.uploadCount +=1;
                                        $scope.img1_wait = false;
                                        console.log($scope.user.uploadCount);
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
                                    console.log($scope.user.licenseImg);
                                    $scope.user.uploadCount +=1;
                                    $scope.img2_wait = false;
                                    console.log($scope.user.uploadCount);
                                   
                                    
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
                                    console.log($scope.user.nationalIdImg);
                                    $scope.user.uploadCount +=1;
                                    $scope.img3_wait = false;
                                    console.log($scope.user.uploadCount);

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




            $http.get("http://134.209.178.237/api/user/country")
                .then(function (response) {
                    $scope.countryID = response.data;
                    console.log("Countries")
                }, function (response) {
                    alert("Error !!");
                })
            $scope.citiesFunFrom = function () {
                $scope.countryid = $('#countryid').val();
                $http.get("http://134.209.178.237/api/user/city?id=" + $scope.countryid)
                    .then(function (response) {
                        $scope.cityID = response.data;
                        }
                        , function (response) {
                            alert("Error !!");
                        })
            }



            $scope.createNewUser = function (){
                var signupObj = {
                    fullname: $("#fullnameid").val(),
                    mobile: $("#mobileid").val(),
                    nationalID: $("#nationalid").val(),
                    countryID: $("#countryid").val(),
                    cityID: $("#cityid").val(),
                    email: $("#emailid").val(),
                    password: $("#passwordid").val(),
                    birthday: $("#birthdayid").val(),
                    personalImg: $scope.user.personalImg,
                    licenseImg: $scope.user.licenseImg,
                    nationalIdImg: $scope.user.nationalIdImg,
                    gender: $('input[name=gender]:checked').val(),
                    confirmPassword: $("#confirmPasswordid").val()
            }
            console.log(signupObj);

            if(signupObj.password !== signupObj.confirmPassword ){
                $rootScope.alertMessageLang(
                    "يرجى التأكد من مطابقة الرقم السرى   !  " ,
                    "Please confirm that passowrd is identical  !" ,
                    $rootScope.kayanLang
                )
                return;

            }
            if(signupObj.gender != "0"  ){
                if(signupObj.gender != "1"  ){

                    $rootScope.alertMessageLang(
                        "يرجى اختيار الجنس   !  " ,
                        "Kindly choose gender  !" ,
                        $rootScope.kayanLang
                    )
                    return;

                }                                 

            }
            if(signupObj.gender != "1"  ){
                if(signupObj.gender != "0"  ){

                    $rootScope.alertMessageLang(
                        "يرجى اختيار الجنس   !  " ,
                        "Kindly choose gender  !" ,
                        $rootScope.kayanLang
                    )
                    return;

                }


            }
            var today = new Date();
            var birthday = new Date(signupObj.birthday);

            var diff = today.getMonth() - birthday.getMonth() + 
            (12 * (today.getFullYear() - birthday.getFullYear()))
            console.log(diff);
            if(diff < 216){
                $rootScope.alertMessageLang(
                    "يجب ان يكون السن أكبر من 18  ",
                    "Age must be greater than 18 ",
                    $rootScope.kayanLang
                )
                return;
            }
            if($scope.user.uploadCount <3 ){
                $rootScope.alertMessageLang(
                    "تأكد من تحميل الصور المطلوبة   ",
                    "Make sure you upload required pictures ",
                    $rootScope.kayanLang
                )
                return;
            }
           
                $http.post("http://134.209.178.237/api/user/register", signupObj)
                .then(function (response) {
                    $rootScope.alertMessageLang(
                        "تم انشاء حساب جديد لك بنجاح !  " ,
                        "Your account has been successfully created !" ,
                        $rootScope.kayanLang
                    )
                    $window.open("http://134.209.178.237/kayanWebsite/html/index.html", "_self");


                }, function (response) {
                    if(response.data.error.includes("mobile")){
                        $rootScope.alertMessageLang(
                            "رقم الهاتف مسجل من قبل !  " ,
                            "Mobile already exist !" ,
                            $rootScope.kayanLang
                        )

                    }
                    if(response.data.error.includes("email_1")){
                        $rootScope.alertMessageLang(
                            "الايميل  مسجل من قبل !  " ,
                            "Email already exist !" ,
                            $rootScope.kayanLang
                        )


                    }
                    if(response.data.error.includes("nationalID_1")){
                        $rootScope.alertMessageLang(
                            "الرقم القومى  مسجل من قبل !  " ,
                            "nationalID already exist !" ,
                            $rootScope.kayanLang
                        )


                    }

                })                    

                                                   
            }
            
        })

        .controller("SignInCtrl", function ($scope, $http, $rootScope, $window, $rootScope, $cookieStore) {
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


            if ($rootScope.kayanUserID && $rootScope.kayanUserID.length > 0) {
                $window.open("http://134.209.178.237/kayanWebsite/html/kayanUser.html", "_self");
                // $window.open("/Website/html/KayanUser.html", "_self");
            }


            $rootScope.changeLang = function (lang) {
                $cookieStore.put('kayanLang', lang);
                $rootScope.kayanLang = $cookieStore.get('kayanLang');
                if ($rootScope.kayanLang == 'ar') {
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
                $http.get("http://134.209.178.237/api/user/login?val=" + mail + "&password=" + pass)
                    .then(function (response) {
                        $rootScope.user = response.data;
                        $cookieStore.put('kayanUser', $rootScope.user);
                        $cookieStore.put('kayanUserID', $rootScope.user._id);

                        if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                            if ($rootScope.kayanLang == 'ar') {
                                $('body').css("direction", "rtl");
                            }
                            if ($rootScope.kayanLang == 'en') {
                                $('body').css("direction", "ltr");
                            }
                            if ($rootScope.kayanLang != 'en' && $rootScope.kayanLang != 'ar') {
                                $cookieStore.put('kayanLang', 'en');
                                $rootScope.kayanLang = $cookieStore.get('kayanLang')
                                $('body').css("direction", "ltr");
                            }

                        }
                        $rootScope.alertMessageLang(
                            "مرحبا " + " " + $rootScope.user.fullname,
                            "Welcome " + " " + $rootScope.user.fullname,
                            $rootScope.kayanLang
                        )
                        $window.open("http://134.209.178.237/kayanWebsite/html/kayanUser.html", "_self");
                        //$window.open("/Website/html/KayanUser.html", "_self");

                    },
                        function (response) {
                            if (response.data.message.includes("Authentication failed")) {
                                $rootScope.alertMessageLang(
                                    "ايميل أو كلمة مرور خطـــأ !!  ",
                                    "Wrong email or password !!  ",
                                    $rootScope.kayanLang
                                )
                                return;
                            }
                            $rootScope.alertMessageLang(
                                "حدث خطأ ما !!  ",
                                "SomSomething went wrong !!  ",
                                $rootScope.kayanLang
                            )
                        }
                    )
            }

        })
        .controller("HomeCtrl", function ($scope, $http, $cookieStore, $rootScope, $location, $window) {
            $rootScope.kayanUser = $cookieStore.get('kayanUser');
            $rootScope.kayanUserID = $cookieStore.get('kayanUserID');
            // console.log($rootScope.kayanUser);
            // console.log($rootScope.kayanUserID);
            //$rootScope.kayanUserHomeView = $cookieStore.get('kayanUserHomeView');

            //console.log($rootScope.kayanUserHomeView);
            // if($rootScope.kayanUserHomeView == undefined ){

            //     $rootScope.kayanUserHomeView = 1;
            //     $cookieStore.put('kayanUserHomeView' , $rootScope.kayanUserHomeView);

            // }

            if ($rootScope.kayanLang = $cookieStore.get('kayanLang')) {
                if ($rootScope.kayanLang == 'ar') {
                    $('body').css("direction", "rtl");

                } else {

                    $cookieStore.put('kayanLang', 'en')
                    $rootScope.kayanLang = $cookieStore.get('kayanLang');
                    $('body').css("direction", "ltr");

                }
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
                            console.log($scope.categories);
                            //     console.log($scope.categoriesCount);
                            // console.log( $scope.categories);
                        }, 1000);
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCategories();
            $scope.getCars = function () {
                $http.get("http://134.209.178.237/api/admin/allCars")
                    .then(function (response) {
                        $scope.cars = response.data;
                    }, function (response) {
                        alert("Error !!");
                    })
            }

            $scope.getCarsByCategory = function (categoryID) {
                $rootScope.selectedCategoryID = categoryID;
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
                                $rootScope.kayanUserHomeView = 2;
                            }
                        });

                    }, function (response) {
                        alert("Error !!");
                    })



            }

            $scope.getSubCategory = function (categoryID) {
                //$scope.categoryid = $('#categoryid').val();
                $http.get("http://134.209.178.237/api/user/subcategory?id=" + categoryID)
                    .then(function (response) {
                        $scope.subCategory = response.data;
                    }
                        , function (response) {
                            alert("Error !!");
                        })
            }

            $scope.getCarTypes = function () {
                $http.get("http://134.209.178.237/api/user/carType")
                    .then(function (response) {
                        $scope.carTypes = response.data;
                        // console.log($scope.Type)
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCarTypes();
            $scope.getCarYears = function () {
                $http.get("http://134.209.178.237/api/user/carYear")
                    .then(function (response) {
                        $scope.carYears = response.data;
                    }, function (response) {
                        alert("Error !!");
                    })
            }
            $scope.getCarYears()
            $scope.getCarModels = function () {
                $http.get("http://134.209.178.237/api/user/carModel")
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

                $http.get("http://134.209.178.237/api/user/getCarByID?id=" + $rootScope.currentCarId)
                    .then(function (response) {
                        $scope.carDetails = response.data;
                        $rootScope.kayanUserHomeView = 3;
                        console.log($scope.carDetails);

                        var today = new Date();
                        $scope.startDateDefault = new Date();
                        $scope.endDateDefault = new Date($scope.carDetails.endDate);




                    }, function (response) {
                        if ($scope.carDetails.allowDriver == 2) {
                            ("نعم")
                        }
                        else if ($scope.carDetails.allowDriver == 2) {
                            ("نعم")
                        }
                        alert("Error !!");
                    });
            }
            $rootScope.signuphome = function () {
                $window.open("../Website/html/SignUpHome.html", "_self");
            }








            $scope.bookCar = function () {

                $rootScope.kayanUser = $cookieStore.get('kayanUser');
                $rootScope.kayanUserID = $cookieStore.get('kayanUserID');


                console.log($rootScope.kayanUser)
                console.log($rootScope.kayanUserID)
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


                    console.log("choosen start date ")
                    console.log(startDateDefaultYear)
                    console.log(startDateDefaultMonth)
                    console.log(startDateDefaultDate)


                    console.log("choosen end date ")
                    console.log(endDateDefaultYear)
                    console.log(endDateDefaultMonth)
                    console.log(endDateDefaultDate)

                    console.log("car start date ")
                    console.log(startDateCarYear)
                    console.log(startDateCarMonth)
                    console.log(startDateCarDate)

                    console.log("car  end date ")

                    console.log(endDateCarYear)
                    console.log(endDateCarMonth)
                    console.log(endDateCarDate)


                    console.log("today date ")
                    console.log(todayYear)
                    console.log(todayMonth)
                    console.log(todayDate)

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
                    console.log(requestInfo);




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
                                        alert("Error !");
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
                    $window.open("/Website/html/login.html", "_self");
                    return;
                }




                // $scope.kayanUser = $cookieStore.get('kayanUserID');
                // console.log($scope.kayanUser );
                // if($scope.kayanUser == undefined) {
                //     $window.open("/Website/html/login.html", "_self");
                //     alert("يجب تسجيل الدخول اولا ");
                //     return;
                // }

            }

            

        })


})
    ();