

    
(function () {
    angular.module('qalamAdmin', ['ngCookies'])
        .filter('cmdate', [
            '$filter', function ($filter) {
                return function (input, format) {
                    return $filter('date')(new Date(input), format);
                };
            }
        ])

 

        .controller("ForasCtrl", function ($scope, $http, $rootScope, $window, $rootScope, $cookieStore) {

            $('input[type="file"]').change(function(e){
                console.log("Here");
                var     fileName = e.target.files[0].name;
                setTimeout(() => {
                    $rootScope.fileName1 = fileName;
                    console.log($rootScope.fileName1);


                }, 300);

                if ($('#personalImage').val()) {
                    var formData = new FormData();
                    var fileLogo = $('#personalImage')[0];
                    $rootScope.fileLogo =fileLogo;
                    console.log($rootScope.fileLogo);
                }
                // alert('The file "' + fileName +  '" has been selected.');
            });
            $scope.tab = 1;
            $scope.changeCTab= function(tab){
                    $('#v-pills-tab .nav-link').removeClass('active');
                    console.log(tab);
                    console.log($scope.tab);
                    setTimeout(() => {
                        
                        
                            $scope.tab = tab;
                    }, 300);
                }
            // $scope.changeCTab= function(tab){
            //     $('#v-pills-tab .nav-link').removeClass('active');
            //     console.log(tab);
            //     console.log($scope.tab);
            //     setTimeout(() => {
                    
                    
            //             $scope.tab = tab;
            //     }, 300);
            // }
            // $scope.changeCTab2= function(tab){
            //     console.log(tab);
            //     console.log($scope.tab);
            //     // $('#v-pills-tab .nav-link').removeClass('active');
            //     setTimeout(() => {
                    
                    
            //             $scope.tab = tab;
            //     }, 300);
            // }
            // $scope.nextTab = function(tab){
            //     console.log(tab);
            //     console.log($scope.tab);
            //      $('#v-pills-tab .nav-link').removeClass('active');
            //     setTimeout(() => {
                    
                    
            //         $scope.tab = tab;
            // }, 300);
            // }

            // $scope.changeTab = function(tab){
                
            //     $('.nav-link').removeClass('active');
            //     setTimeout(() => {
            //         $('#nav-link' + tab).addClass('active');
            //     }, 500);
             
            // }
            $http.get("/api/adminApi/getAllNationality")
            .then(function (response) {
                $scope.nationality = response.data;
                var j = 0;
                $scope.nationality.forEach((element , i) => {
                    if(element.status != 3 && element.status != 2){
                        j++;
                        element.index = j;
                        element.exist = true;
                    }
            
                    })
                }, function (response) {
                    
                })

                $http.get("/api/adminApi/getAllcities")
                .then(function (response) {
                    $scope.cities = response.data;
                    var j = 0;
                    $scope.cities.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;

                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })


                $http.get("/api/adminApi/getAllScientificSps")
                .then(function (response) {
                    $scope.scientificSps = response.data;
                    var j = 0;
                    $scope.scientificSps.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })


                $http.get("/api/adminApi/getAllGraduationUniversity")
                .then(function (response) {
                    $scope.graduationUniversity = response.data;
                    var j = 0;
                    $scope.graduationUniversity.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })


                $http.get("/api/adminApi/getAllexperience")
                .then(function (response) {
                    $scope.experience = response.data;
                    var j = 0;
                    $scope.experience.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })
            


                $http.get("/api/adminApi/getAllyearsExperience")
                .then(function (response) {
                    $scope.yearsExperience = response.data;
                    var j = 0;
                    $scope.yearsExperience.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })

                $http.get("/api/adminApi/getAlllanguage")
                .then(function (response) {
                    $scope.userLangs = [];
                    $scope.languages = response.data;
                    var j = 0;
                    $scope.languages.forEach((element , i) => {
                        if(element.status == 1){
                            j++;
                            element.index = j;
                            element.exist = true;
                            element.level = 1;
                            element.show = false;
                            if(i == 0 ){
                                element.show = true
                            }
                            $scope.userLangs.push(element);
                            
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })
         

                $http.get("/api/adminApi/specializedCertificates")
            .then(function (response) {
                $scope.specializedCertificates = response.data;
                var j = 0;
                $scope.specializedCertificates.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })

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


            $scope.change1 = function(scientificSpecializationID){
               
                if($scope.scientificSpecializationID == 1){
                    $scope.scientificSpecializationIDOther = true;
                }
                
            }
            $scope.change2 = function(scientificSpecializationID){
               
                if($scope.graduationUniversityID == 1){
                    $scope.graduationUniversityIDOther = true;
                }
                
            }
            $scope.change3 = function(scientificSpecializationID){
               
                if($scope.specializedCertificatesID == 1){
                    $scope.specializedCertificatesIDOther = true;
                }
                
            }
            $scope.change4 = function(scientificSpecializationID){
               
                if($scope.experienceID == 1){
                    $scope.experienceIDOther = true;
                }
                
            }
            $scope.change5 = function(scientificSpecializationID){
               
                if($scope.mostExperienceID == 1){
                    $scope.mostExperienceIDOther = true;
                }
                
            }


            $scope.changeLangDegree = function(obj , degree){
                obj.level = degree;
                obj.selected = degree;

            }
            $scope.addLangDegree = function(lang){
                $scope.langExist = false;
                $scope.userLangs = $scope.userLangs || [];
                $scope.userLangs.forEach((element , e) => {
                    if(element._id == lang._id  && element.show == true) {
                        $scope.langExist = true;
                    }
                    if(e == $scope.userLangs.length - 1 && $scope.langExist == false ){
                      
                        element.show = true;
                    }
                    if(e == $scope.userLangs.length - 1 && $scope.langExist == true ){
                        alert("اللغة مضافة بالفعل ");
                        return;

                    }
                });
            }

            $scope.error = {
                firstName : {ar: 'يوجد خطأ في الاسم الاول ' , en : 'Error in first name' },
                lastName: {ar: 'يوجد خطأ في الاسم الاخير ' , en : 'Error in lastName' },
                birthday: {ar: 'يوجد خطأ في تاريخ الميلاد ' , en : 'Error in birthday' },
                socialStatus: {ar: 'يوجد خطأ في الحالة الاجتماعية ' , en : 'Error in socialStatus' },
                phoneNumber: {ar: 'يوجد خطأ في الهاتف ' , en : 'Error in phoneNumber' },
                email: {ar: 'يوجد خطأ في البريد الإلكتروني' , en : 'Error in email' },
                nationalityID: {ar: 'يوجد خطأ في الجنسية ' , en : 'Error in nationality ' },
                IDNumber:{ar: 'يوجد خطأ في رقم الهوية ' , en : 'Error in ID Number' },
                cityID: {ar: 'يوجد خطأ في المدينة ' , en : 'Error in city' },
                neighborhood: {ar: 'يوجد خطأ في المنطقة السكنية ' , en : 'Error in neighborhood ' },
                gender  : {ar: 'يوجد خطأ في الجنس ' , en : 'Error in gender' },
                specialNeeds: {ar: 'يوجد خطأ في الاحتياجات الخاصة ' , en : 'Error in special Needs' },
                scientificDegree: {ar: 'يوجد خطأ في الدرجة العلمية ' , en : 'Error in scientific Degree' },
                scientificSpecializationID: {ar: 'يوجد خطأ في التخصص العلمى ' , en : 'Error in scientific Specialization' },
                graduationUniversityID: {ar: 'يوجد خطأ في الجامعة ' , en : 'Error in graduation UniversityID' },
                specializedCertificates: {ar: 'يوجد خطأ في الشهادة الخاصة ' , en : 'Error in specialized experience ' },
                experienceID: {ar: 'يوجد خطأ في الخبرة ' , en : 'Error in  Experience' },
                mostExperienceID: {ar: 'يوجد خطأ في  الاكثر خبرة ' , en : 'Error in most Experience' },
                yearsExperienceID: {ar: 'يوجد خطأ في سنوات الخبرة ' , en : 'Error in yearsExperienceID' },
                languageID: {ar: 'يوجد خطأ في اللغة ' , en : 'Error in language ' },
                cv: {ar: 'يوجد خطأ في السى فى ' , en : 'Error in cv' },
                otherInformation: {ar: 'يوجد خطأ في المعلومات الاخرى ' , en : 'Error in other Information' },
                description: {ar: 'يوجد خطأ في الوصف ' , en : 'Error in description' },
                degree : {ar: 'يوجد خطأ في الدرجة ' , en : 'Error in degree' },

            }

            $scope.changeScientificDegree  = function(scientificDegree ){
                $scope.scientificDegree  = scientificDegree ;
                $scope.scientificDegreeSelected = scientificDegree;
            }


            $scope.addData1 = function(){
                console.log($('#scientificSpecializationIDNew').val());
                var dataObj = {
                    titleAr :  $('#scientificSpecializationIDNew').val(),
                    titleEN : $('#scientificSpecializationIDNew').val()
                    
                }
                $http.post("/api/adminApi/addScientificSp" , dataObj)
                .then(function (response) {
                    var addScientificSp = response.data;
                    $http.get("/api/adminApi/getAllScientificSps")
                    .then(function (response) {
                        $scope.scientificSps = response.data;
                        var j = 0;
                        $scope.scientificSps.forEach((element , i) => {
                            if(element.status == 1){
                                j++;
                                element.index = j;
                                element.exist = true;
                            }
                            if(element._id == addScientificSp._id){
                                // $('#scientificSpecializationID').val(element._id);
                                $scope.scientificSpecializationID= element._id;
                                $scope.scientificSpecializationIDOther = false;
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                }, function (response) {
                    //alert("Error !");
                })
            }


            $scope.addData2 = function(){
                var dataObj = {
                    titleAr :  $('#graduationUniversityIDNew').val(),
                    titleEN : $('#graduationUniversityIDNew').val(),
                    
                }
                $http.post("/api/adminApi/addGraduationUniversity" , dataObj)
                .then(function (response) {
                    var addGraduationUniversity = response.data;
                    $http.get("/api/adminApi/getAllGraduationUniversity")
                    .then(function (response) {
                        $scope.graduationUniversity = response.data;
                        var j = 0;
                        $scope.graduationUniversity.forEach((element , i) => {
                            if(element.status == 1){
                                j++;
                                element.index = j;
                                element.exist = true;
                            }
                            if(element._id == addGraduationUniversity._id){
                                // $('#scientificSpecializationID').val(element._id);
                                $scope.graduationUniversityID= element._id;
                                $scope.graduationUniversityIDOther = false;
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                }, function (response) {
                    //alert("Error !");
                })
            }


            $scope.addData3 = function(){
                var dataObj = {
                    titleAr :  $('#experienceIDNew').val(),
                    titleEN : $('#experienceIDNew').val(),
                    
                }
                $http.post("/api/adminApi/experience" , dataObj)
                .then(function (response) {
                    var experience = response.data;
                    $http.get("/api/adminApi/getAllexperience")
                    .then(function (response) {
                        $scope.experience = response.data;
                        var j = 0;
                        $scope.experience.forEach((element , i) => {
                            if(element.status == 1){
                                j++;
                                element.index = j;
                                element.exist = true;
                            }
                            if(element._id == experience._id){
                                // $('#scientificSpecializationID').val(element._id);
                                $scope.experienceID= element._id;
                                $scope.experienceIDOther = false;
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                }, function (response) {
                    //alert("Error !");
                })
            }





            $scope.addData4 = function(){
                var dataObj = {
                    titleAr :  $('#mostExperienceIDNew').val(),
                    titleEN : $('#mostExperienceIDNew').val(),
                    
                }
                $http.post("/api/adminApi/experience" , dataObj)
                .then(function (response) {
                    var experience = response.data;
                    $http.get("/api/adminApi/getAllexperience")
                    .then(function (response) {
                        $scope.experience = response.data;
                        var j = 0;
                        $scope.experience.forEach((element , i) => {
                            if(element.status == 1){
                                j++;
                                element.index = j;
                                element.exist = true;
                            }
                            if(element._id == experience._id){
                                // $('#scientificSpecializationID').val(element._id);
                                $scope.mostExperienceID= element._id;
                                $scope.mostExperienceIDOther = false;
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                }, function (response) {
                    //alert("Error !");
                })
            }


            $scope.addData5 = function(){
                var dataObj = {
                    titleAr :  $('#specializedCertificatesIDNew').val(),
                    titleEN : $('#specializedCertificatesIDNew').val(),
                    
                }
                $http.post("/api/adminApi/specializedCertificates" , dataObj)
                .then(function (response) {
                    var specializedCertificates = response.data;
                    $http.get("/api/adminApi/specializedCertificates")
                    .then(function (response) {
                        $scope.specializedCertificates = response.data;
                        var j = 0;
                        $scope.specializedCertificates.forEach((element , i) => {
                            if(element.status == 1){
                                j++;
                                element.index = j;
                                element.exist = true;
                            }
                            if(element._id == specializedCertificates._id){
                                // $('#scientificSpecializationID').val(element._id);
                                $scope.specializedCertificatesID= element._id;
                                $scope.specializedCertificatesIDOther = false;
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                }, function (response) {
                    //alert("Error !");
                })
            }









            
            $scope.postCV = function(){







                if ($('#personalImage').val()) {
                    var formData = new FormData();
                    var fileLogo = $('#personalImage')[0];
                    formData.append('file', fileLogo.files[0]);
                    $http({
                        url: "http://157.230.25.241/api/user/uploadFile",
                        method: "POST",
                        data: formData,
                        headers: {
                            'Content-Type': undefined
                        },
                        processData: false,
                    }).then(function (response) {
                        $scope.personalImagepath = response.data;
                        var dataObj = {
                            firstName : $('#firstName').val(),
                            lastName: $('#lastName').val(),
                            birthday: $('#birthday').val(),
                            socialStatus: $('#socialStatus').val(),
                            phoneNumber: $('#phoneNumber').val(),
                            email: $('#email').val(),
                            nationalityID: $('#nationalityID').val(),
                            IDNumber: $('#IDNumber').val(),
                            cityID: $('#cityID').val(),
                            neighborhood: $('#neighborhood').val(),
                            gender:$scope.gender,
                            specialNeeds: $scope.specialNeeds,
                            scientificDegree: $scope.scientificDegree,
                            scientificSpecializationID: $('#scientificSpecializationID').val(),
                            graduationUniversityID: $('#graduationUniversityID').val(),
                            specializedCertificatesID: $('#specializedCertificatesID').val(),
                            experienceID: $('#experienceID').val(),
                            mostExperienceID: $('#mostExperienceID').val(),
                            yearsExperienceID: $('#yearsExperienceID').val(),
                            languageID: $('#languageID').val(),
                            cv: $scope.personalImagepath,
                            otherInformation: $('#otherInformation').val() || 2,
                            // description: $('#description').val(),
                            degree :  $('#degree').val(),


                            isWorked :  $('#isWorked').val(),
                            lastJob :  $('#lastJob').val(),
                            graduationYear :  $('#graduationYear').val(),
                            graduationPoint :  $('#graduationPoint').val(),
                          
                            
                        }
                        console.log(dataObj);
        
                        if( !$('#firstName').val()){
                            $scope.current_error_ar = $scope.error.firstName.ar;
                            $scope.current_error_en = $scope.error.firstName.en;
                            return;
                        }
                        if( !$('#lastName').val()){
                            $scope.current_error_ar = $scope.error.lastName.ar;
                            $scope.current_error_en = $scope.error.lastName.en;
                            return;
                        }
                        if( !$('#phoneNumber').val()){
                            $scope.current_error_ar = $scope.error.phoneNumber.ar;
                            $scope.current_error_en = $scope.error.phoneNumber.en;
                            return;
                        }
                        if( !$('#email').val()){
                            $scope.current_error_ar = $scope.error.email.ar;
                            $scope.current_error_en = $scope.error.email.en;
                            return;
                        }
                        if( !$('#nationalityID').val()){
                            $scope.current_error_ar = $scope.error.nationalityID.ar;
                            $scope.current_error_en = $scope.error.nationalityID.en;
                            return;
                        }
                        if( !$('#nationalityID').val()){
                            $scope.current_error_ar = $scope.error.nationalityID.ar;
                            $scope.current_error_en = $scope.error.nationalityID.en;
                            return;
                        }
                        if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                            $scope.current_error_ar = $scope.error.scientificDegree.ar;
                            $scope.current_error_en = $scope.error.scientificDegree.en;
                            return;
                        }
        
                        if( !$('#scientificSpecializationID').val()){
                            $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                            $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                            return;
                        }
                        if( !$('#experienceID').val()){
                            $scope.current_error_ar = $scope.error.experienceID.ar;
                            $scope.current_error_en = $scope.error.experienceID.en;
                            return;
                        }
                        
                        if( !$('#mostExperienceID').val()){
                            $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                            $scope.current_error_en = $scope.error.mostExperienceID.en;
                            return;
                        }
                        if( !$('#yearsExperienceID').val()){
                            $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                            $scope.current_error_en = $scope.error.yearsExperienceID.en;
                            return;
                        }
                        if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                            if(!$('#description').val()  ){
                                $scope.current_error_ar = $scope.error.description.ar;
                                $scope.current_error_en = $scope.error.description.en;
                                return;
                            }
                        }
                        if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                            dataObj.description = $('#description').val();
                        }
        
        
                        console.log(dataObj);
        
                        console.log($scope.userLangs);
        
                        
                        $http.post("/api/adminApi/generalData" , dataObj)
                        .then(function (response) {
                            var generalDataID = response.data._id
        
                            if($scope.userLangs.length > 0){
        
                           
                            $scope.userLangs.forEach((lang , l) => {
                                    var obj = {
                                        generalDataID : generalDataID,
                                        languageID : lang._id,
                                        level : lang.level
                                    }
        
                                    $http.post("/api/adminApi/langLevel" , obj)
                                    .then(function (response) {
                                      
                                        if(l == $scope.userLangs.length -1 ){
                                            alert("تم اضافة السى فى بنجاح  ");
                                            $window.open("http://64.227.35.49/indexAR.html", "_self");
                                        }
                                       
                                    }, function (response) {
                                        //alert("Error !");
                                    })
                                });
                            }else{
                                alert("تم اضافة السى فى بنجاح  ");
                                $window.open("http://64.227.35.49/indexAR.html", "_self");
                            }
                           
                        }, function (response) {
                            //alert("Error !");
                        })
                             
        
                    }, function (response) {
                        alert(' Error while Uploading Image !');
                    })
                }



                if (!$('#personalImage').val()) {
                    var dataObj = {
                        firstName : $('#firstName').val(),
                        lastName: $('#lastName').val(),
                        birthday: $('#birthday').val(),
                        socialStatus: $('#socialStatus').val(),
                        phoneNumber: $('#phoneNumber').val(),
                        email: $('#email').val(),
                        nationalityID: $('#nationalityID').val(),
                        IDNumber: $('#IDNumber').val(),
                        cityID: $('#cityID').val(),
                        neighborhood: $('#neighborhood').val(),
                        gender:$scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificatesID: $('#specializedCertificatesID').val(),
                        experienceID: $('#experienceID').val(),
                        mostExperienceID: $('#mostExperienceID').val(),
                        yearsExperienceID: $('#yearsExperienceID').val(),
                        languageID: $('#languageID').val(),
                        cv: $scope.personalImagepath,
                        otherInformation: $('#otherInformation').val() || 2,
                        // description: $('#description').val(),
                        degree :  $('#degree').val()
                        
                    }
                    console.log(dataObj);
    
                    if( !$('#firstName').val()){
                        $scope.current_error_ar = $scope.error.firstName.ar;
                        $scope.current_error_en = $scope.error.firstName.en;
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        return;
                    }
    
                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            return;
                        }
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        dataObj.description = $('#description').val();
                    }
    
    
                  
    
                    
                    $http.post("/api/adminApi/generalData" , dataObj)
                    .then(function (response) {
                        var generalDataID = response.data._id
    
                        if($scope.userLangs.length > 0){
    
                       
                        $scope.userLangs.forEach((lang , l) => {
                                var obj = {
                                    generalDataID : generalDataID,
                                    languageID : lang._id,
                                    level : lang.level
                                }
    
                                $http.post("/api/adminApi/langLevel" , obj)
                                .then(function (response) {
                                  
                                    if(l == $scope.userLangs.length -1 ){
                                        alert("تم اضافة السى فى بنجاح  ");
                                        $window.open("http://64.227.35.49/indexAR.html", "_self");
                                    }
                                   
                                }, function (response) {
                                    //alert("Error !");
                                })
                            });
                        }else{
                            alert("تم اضافة السى فى بنجاح  ");
                            $window.open("http://64.227.35.49/indexAR.html", "_self");
                        }
                       
                    }, function (response) {
                        //alert("Error !");
                    })
                }


                
              
            }

            $http.get("/api/adminApi/websiteSettings")
            .then(function (response) {
                $scope.settings = response.data;
                console.log($scope.settings);
                
                $scope.initialApplications = $scope.settings[33].value;
                $scope.initialCompanies = $scope.settings[34].value;
                $http.get("/api/adminApi/totalcity")
                .then(function (response) {
                    $rootScope.totalcity = response.data.message;
                }, function (response) {
                    //alert("Error !");
                })
            $http.get("/api/adminApi/totalnationality")
                .then(function (response) {
                    $rootScope.totalnationality = response.data.message;
                }, function (response) {
                    //alert("Error !");
                })
            $http.get("/api/adminApi/totalemployee")
                .then(function (response) {
                    $rootScope.totalemployee = response.data.message;
                }, function (response) {
                    //alert("Error !");
                })
            $http.get("/api/adminApi/totalCvs")
                .then(function (response) {
                    $rootScope.totalCvs = parseInt(response.data.message) + parseInt($scope.initialApplications);
                }, function (response) {
                    //alert("Error !");
                })
                $http.get("/api/adminApi/totalCompanies")
                .then(function (response) {
                    $rootScope.totalCompanies = parseInt(response.data.message)  + parseInt($scope.initialCompanies) ;
                }, function (response) {
                    //alert("Error !");
                })

                var j = 0;
                $scope.settings.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
            
            
    
            $scope.addContactUs = function(){
                var dataObject = {
                    fullname : $('#fullname').val(),
                    mobile : $('#mobile').val(),
                    email : $('#email').val(),
                    notes : $('#notes').val(),
                    mapLink : $('#mapLink').val() || ""
                }
                console.log(dataObject);

                $http.post("/api/adminApi/contactUs" , dataObject)
                    .then(function (response) {
                        alert("تم اضافة بيانات التواصل  بنجاح  ");
                        $window.open("http://64.227.35.49/indexAR.html", "_self");
                        
                    }, function (response) {
                        //alert("Error !");
                    })
            }

            // $scope.getAllClients = function(){
            //     $http.get("/api/adminApi/clients")
            //     .then(function (response) {
            //         $scope.clients = response.data;
            //         var arrNumber = $scope.clients.length / 6;
            //         var arrNumber2 = $scope.clients.length / 3;


            //         $scope.quotient = Math.floor($scope.clients.length/6);
            //         $scope.remainder = $scope.clients.length % 6;
            //         if($scope.remainder > 0 ){
            //             $scope.quotient+=1;
            //         }

            //         $scope.quotient2 = Math.floor($scope.clients.length/3);
            //         $scope.remainder2 = $scope.clients.length % 3;
            //         if( $scope.remainder2 > 0 ){
            //             $scope.quotient2 += 1;
            //         }
            //         $scope.arrClients1 = [];
            //         $scope.arrClients2 = [];
            //         var count1 = 0;
            //         for (let i = 0; i < $scope.quotient; i++) {
            //             $scope.clients.forEach(client => {
                            
            //             });
                        
            //         }

            //         console.log($scope.quotient2);
            //         console.log($scope.remainder2);
            //         $scope.view = 1;
            //         var j = 0;
            //         $scope.clients.forEach((element , i) => {
            //             if(element.status != 3){
            //                 j++;
            //                 element.index = j;
            //             }
                        
            //         });

            //     }, function (response) {
            //         //alert("Error !");
            //     })
            // }
            // $scope.getAllClients();


            $scope.getCategories = function () {
                $http.get("/api/adminApi/clients")
                    .then(function (response) {
                        $scope.categories = [];
                        $scope.allcategories = response.data;
                        $scope.categoriesCount = $scope.allcategories.length % 3;
                        if (($scope.allcategories.length / 6) > $scope.categoriesCount) {
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
                                if ($scope.allcategories[index + 2] && $scope.allcategories[index + 3]._id) {
                                    $scope.categories[i].push($scope.allcategories[index + 3]);
                                }
                                if ($scope.allcategories[index + 2] && $scope.allcategories[index + 4]._id) {
                                    $scope.categories[i].push($scope.allcategories[index + 4]);
                                }
                                if ($scope.allcategories[index + 2] && $scope.allcategories[index + 5]._id) {
                                    $scope.categories[i].push($scope.allcategories[index + 5]);
                                }

                                index = index + 6;
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




            $scope.getCategories2 = function () {
                $http.get("/api/adminApi/clients")
                    .then(function (response) {
                        $scope.categories2 = [];
                        $scope.allcategories2 = response.data;
                        $scope.categories2Count = $scope.allcategories2.length % 3;
                        if (($scope.allcategories2.length / 3) > $scope.categories2Count) {
                            $scope.categories2Count += 1;
                        }
                        if ($scope.categories2Count > 1) {
                            var index = 0;
                            for (let i = 0; i < $scope.categories2Count; i++) {
                                $scope.categories2[i] = [];

                                if ($scope.allcategories2[index] && $scope.allcategories2[index]._id) {
                                    $scope.categories2[i].push($scope.allcategories2[index]);
                                }

                                if ($scope.allcategories2[index + 1] && $scope.allcategories2[index + 1]._id) {
                                    $scope.categories2[i].push($scope.allcategories2[index + 1]);
                                }
                                if ($scope.allcategories2[index + 2] && $scope.allcategories2[index + 2]._id) {
                                    $scope.categories2[i].push($scope.allcategories2[index + 2]);
                                }
                                // if ($scope.allcategories2[index + 2] && $scope.allcategories2[index + 3]._id) {
                                //     $scope.categories2[i].push($scope.allcategories2[index + 3]);
                                // }
                                // if ($scope.allcategories2[index + 2] && $scope.allcategories2[index + 4]._id) {
                                //     $scope.categories2[i].push($scope.allcategories2[index + 4]);
                                // }
                                // if ($scope.allcategories2[index + 2] && $scope.allcategories2[index + 5]._id) {
                                //     $scope.categories2[i].push($scope.allcategories2[index + 5]);
                                //}

                                index = index + 3;
                            }
                        }
                        
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCategories2();








            $scope.getCategories3 = function () {
                $http.get("/api/adminApi/clients")
                    .then(function (response) {
                        $scope.categories3 = response.data;
                        
                        
                    }, function (response) {
                        //alert("Error !!");
                    })
            }
            $scope.getCategories3();

        })

       
      


        


})
    ();