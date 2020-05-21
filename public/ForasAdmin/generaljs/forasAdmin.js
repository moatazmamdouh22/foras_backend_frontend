
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
                templateUrl: "http://foras-sa.com/ForasAdmin/html/users.html",
                controller: "usersCtrl"
            })
            .when("/usersHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/usersHistory.html",
                controller: "usersHistoryCtrl"
            })
            .when("/userDetails/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/userDetails.html",
                controller: "userDetailsCtrl"
            })
            .when("/addUser", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addUser.html",
                controller: "addUserCtrl"
            })
            .when("/editUser/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editUser.html",
                controller: "editUserCtrl"
            })
            .when("/categories", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/categories.html",
                controller: "categoriesCtrl"
            })
            .when("/addCategory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addCategory.html",
                controller: "addCategoryCtrl"
            })
            .when("/editCategory/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editCategory.html",
                controller: "editCategoryCtrl"
            })
            .when("/contactUs", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/contactUs.html",
                controller: "contactUsCtrl"
            })
            .when("/copyWrite", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/copyWrite.html",
                controller: "copyWriteCtrl"
            })
            .when("/copyWriteHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/copyWriteHistory.html",
                controller: "copyWriteHistoryCtrl"
            })
            .when("/important", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/important.html",
                controller: "importantCtrl"
            })
            .when("/importantHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/importantHistory.html",
                controller: "importantHistoryCtrl"
            })
            .when("/addImportant", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addImportant.html",
                controller: "addImportantCtrl"
            })
            .when("/editImportant/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editImportant.html",
                controller: "editImportantCtrl"
            })
            .when("/addCopyWrites", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addCopyWrites.html",
                controller: "addCopyWritesCtrl"
            })
            .when("/editCopyWrites/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editCopyWrites.html",
                controller: "editCopyWritesCtrl"
            })
            .when("/childAge", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/childAge.html",
                controller: "childAgeCtrl"
            })
            .when("/childAgeHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/childAgeHistory.html",
                controller: "childAgeHistoryCtrl"
            })
            .when("/addChildAge", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addChildAge.html",
                controller: "addChildAgeCtrl"
            })
            .when("/editChildAge/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editChildAge.html",
                controller: "editChildAgeCtrl"
            })
            .when("/materials", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/materials.html",
                controller: "materialsCtrl"
            })
            .when("/materialsHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/materialsHistory.html",
                controller: "materialsHistoryCtrl"
            })
            .when("/addMaterials", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addMaterials.html",
                controller: "addMaterialsCtrl"
            })
            .when("/editMaterials/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editMaterials.html",
                controller: "editMaterialsCtrl"
            })

            .when("/subMaterials/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/subMaterials.html",
                controller: "subMaterialsCtrl"
            })
            .when("/subMaterialsHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/subMaterialsHistory.html",
                controller: "subMaterialsHistoryCtrl"
            })
            .when("/addSubMaterials/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addSubMaterials.html",
                controller: "addSubMaterialsCtrl"
            })
            .when("/editSubMaterials/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editSubMaterials.html",
                controller: "editSubMaterialsCtrl"
            })

            .when("/educationalLevel", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/educationalLevel.html",
                controller: "educationalLevelCtrl"
            })
            .when("/educationalLevelHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/educationalLevelHistory.html",
                controller: "educationalLevelHistoryCtrl"
            })
            .when("/addEducationalLevel", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addEducationalLevel.html",
                controller: "addEducationalLevelCtrl"
            })
            .when("/editEducationalLevel/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editEducationalLevel.html",
                controller: "editEducationalLevelCtrl"
            })
            .when("/childByParent/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/childByParent.html",
                controller: "childByParentCtrl"
            })
            .when("/childreen", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/childreen.html",
                controller: "childreenCtrl"
            })
            .when("/childByParentHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/childByParentHistory.html",
                controller: "childByParentHistoryCtrl"
            })
            
            .when("/addChild/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addChild.html",
                controller: "addChildCtrl"
            })
            .when("/addChildP", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addChildP.html",
                controller: "addChildPCtrl"
            })
            
            .when("/editChild/:id/:type", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editChild.html",
                controller: "editChildCtrl"
            })
            .when("/exercises", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/exercises.html",
                controller: "exercisesCtrl"
            })
            .when("/getExerciseByMaterial/:id/:id2", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/getExerciseByMaterial.html",
                controller: "getExerciseByMaterialCtrl"
            })

            
            .when("/exercisesHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/exercisesHistory.html",
                controller: "exercisesHistoryCtrl"
            })
            .when("/addExercises", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addExercises.html",
                controller: "addExercisesCtrl"
            })
            .when("/addExerciseByEducational/:id/:id2", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addExerciseByEducational.html",
                controller: "addExerciseByEducationalCtrl"
            })
            
            .when("/editExercises/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editExercises.html",
                controller: "editExercisesCtrl"
            })
            .when("/editExerciseByEducational/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editExercises.html",
                controller: "editExerciseByEducationalCtrl"
            })
            
            .when("/educationalMaterials/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/educationalMaterials.html",
                controller: "educationalMaterialsCtrl"
            })
            .when("/materialExercises/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/materialExercises.html",
                controller: "materialExercisesCtrl"
            })
            .when("/setting", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/setting.html",
                controller: "settingCtrl"
            })
            .when("/settingHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/settingHistory.html",
                controller: "settingHistoryCtrl"
            })
            .when("/editSetting/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editSetting.html",
                controller: "editSettingCtrl"
            })
            .when("/Defualt", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/Defualt.html",
                controller: "DefualtCtrl"
            })
            .when("/employees", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/employees.html",
                controller: "employeesCtrl"
            })
            .when("/employeesHistory", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/employeesHistory.html",
                controller: "employeesHistoryCtrl"
            })
            .when("/addEmployee", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addEmployee.html",
                controller: "addEmployeeCtrl"
            })
            .when("/editEmployee/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editEmployee.html",
                controller: "editEmployeeCtrl"
            })
            .when("/employeePermissions/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/employeePermissions.html",
                controller: "employeePermissionsCtrl"
            })
            .when("/editAdmin", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editAdmin.html",
                controller: "editAdminCtrl"
            })
            .when("/permissions", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/permissions.html",
                controller: "permissionsCtrl"
            })

            .when("/testFormEn", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/testFormEn.html",
                controller: "testFormEnCtrl"
            })
            .when("/addForm", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addForm.html",
                controller: "addFormCtrl"
            })
            .when("/addForm3", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addForm3.html",
                controller: "addForm3Ctrl"
            })
            .when("/addForm2", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addForm2.html",
                controller: "addForm2Ctrl"
            })

            .when("/graduationUniversity", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/graduationUniversity.html",
                controller: "graduationUniversityCtrl"
            })

            .when("/graduationUniversity", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/graduationUniversity.html",
                controller: "graduationUniversityCtrl"
            })
            .when("/addGraduationUniversity", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addGraduationUniversity.html",
                controller: "addGraduationUniversityCtrl"
            })
            .when("/editGraduationUniversity/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editGraduationUniversity.html",
                controller: "editGraduationUniversityCtrl"
            })



            .when("/nationality", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/nationality.html",
                controller: "nationalityCtrl"
            })
            .when("/addNationality", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addNationality.html",
                controller: "addNationalityCtrl"
            })
            .when("/editNationality/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editNationality.html",
                controller: "editNationalityCtrl"
            })


            .when("/scientificSp", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/scientificSp.html",
                controller: "scientificSpCtrl"
            })
            .when("/addScientificSp", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addScientificSp.html",
                controller: "addScientificSpCtrl"
            })
            .when("/editScientificSp/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editScientificSp.html",
                controller: "editScientificSpCtrl"
            })


            .when("/city", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/city.html",
                controller: "cityCtrl"
            })
            .when("/addCity", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addCity.html",
                controller: "addCityCtrl"
            })
            .when("/editCity/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editCity.html",
                controller: "editCityCtrl"
            })


            .when("/experienceField", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/experienceField.html",
                controller: "experienceFieldCtrl"
            })

            

            .when("/specializedCertificates", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/specializedCertificates.html",
                controller: "specializedCertificatesCtrl"
            })

            
            .when("/addExperienceField", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addExperienceField.html",
                controller: "addExperienceFieldCtrl"
            })
            .when("/addSpecializedCertificates", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addSpecializedCertificates.html",
                controller: "addSpecializedCertificatesCtrl"
            })
            .when("/editExperienceField/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editExperienceField.html",
                controller: "editExperienceFieldCtrl"
            })
            .when("/editSpecializedCertificates/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editSpecializedCertificates.html",
                controller: "editSpecializedCertificatesCtrl"
            })


            .when("/experienceYears", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/experienceYears.html",
                controller: "experienceYearsCtrl"
            })
            .when("/addExperienceYears", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addExperienceYears.html",
                controller: "addExperienceYearsCtrl"
            })
            .when("/editExperienceYears/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editExperienceYears.html",
                controller: "editExperienceYearsCtrl"
            })

            .when("/language", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/language.html",
                controller: "languageCtrl"
            })
            .when("/addLanguage", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addLanguage.html",
                controller: "addLanguageCtrl"
            })
            .when("/editLanguage/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editLanguage.html",
                controller: "editLanguageCtrl"
            })
            .when("/recruitments", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/recruitments.html",
                controller: "recruitmentsCtrl"
            })
            .when("/langLevelByData/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/langLevelByData.html",
                controller: "langLevelByDataCtrl"
            })
            .when("/addCandidate", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addCandidate.html",
                controller: "addCandidateCtrl"
            })
            .when("/addCandidateExcel", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addCandidateExcel.html",
                controller: "addCandidateExcelCtrl"
            })

            .when("/editCandidate/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editCandidate.html",
                controller: "editCandidateCtrl"
            })


            .when("/websiteSettings", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/websiteSettings.html",
                controller: "websiteSettingsCtrl"
            })
            .when("/editwebsiteSettings/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editwebsiteSettings.html",
                controller: "editwebsiteSettingsCtrl"
            })

            .when("/clients", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/clients.html",
                controller: "clientsCtrl"
            })
            .when("/editClients/:id", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/editClients.html",
                controller: "editClientsCtrl"
            })
            .when("/addClient", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/addClient.html",
                controller: "addClientCtrl"
            })

            .when("/importExcel", {
                templateUrl: "http://foras-sa.com/ForasAdmin/html/importExcel.html",
                controller: "importExcelCtrl"
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



  
.controller("usersCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/users")
    .then(function (response) {
        $scope.users = response.data;
        var j = 0;
        $scope.users.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
                
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })
    $scope.getAllData = function(){
        $http.get("/api/admin/users")
        .then(function (response) {
            $scope.users = response.data;
            var j = 0;
            $scope.users.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }

    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/user/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم حذف  المستخدم بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.searchObj = {};
    $scope.findData = function () {
        $http.post("/api/admin/findUsers", $scope.searchObj)
            .then(function (response) {
             
                $scope.users = response.data;
                $(".bd-example-modal-lg .btn-danger").click();
                var j = 0;
                $scope.users.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
                console.log($scope.users);
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})
.controller("usersHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/userHistory")
    .then(function (response) {
        $scope.users = response.data;
    }, function (response) {
        //alert("Error !");
    })
})


.controller("userDetailsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;

    $http.get("/api/admin/userByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;

        }, function (response) {
            //alert("Error !");
        })
})

.controller("editUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/userByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;

        
        }, function (response) {
            //alert("Error !");
        })
    


    $scope.editData = function (index) {
        if (!$('#personalImage').val()) {
            var dataObj = {
                fullname: $('#fullname').val(),
                email: $('#email').val(),
                mobile: $('#mobile').val(),
                subscripeType: $('#subscripeType').val(),
                gender: $('#gender').val(),
                password: $('#password').val(),
                status: $('#status').val(),
                updateBy : $scope.forasAdmin._id,
                historyType : 2

            }

            $http.put("/api/admin/user/" + id, dataObj)
                .then(function (response) {
                    // $scope.users[index] = response.data;
                    alert("تم تعديل المستخدم بنجاح ");
                   // $location.path('/users', "_self");

                }, function (response) {

                    //alert("Error !");
                })

        }

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
                    fullname: $('#fullname').val(),
                    email: $('#email').val(),
                    mobile: $('#mobile').val(),
                    birthday: $('#birthday').val(),
                    categoryID: $('#categoryID').val(),
                    password: $('#password').val(),
                    status: $('#status').val(),

                    personalImg: $scope.personalImagepath,
                    updateBy : $scope.forasAdmin._id,
                    historyType : 2

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

.controller("employeesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');


    $http.get("/api/adminApi/getAllEmployee")
        .then(function (response) {
            $scope.employees = response.data;
            var j = 0;
            $scope.employees.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
           
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/adminApi/getAllEmployee")
            .then(function (response) {
                $scope.employees = response.data;
                var j = 0;
                $scope.employees.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
        }
    
        
        $scope.changeStatus = function(ID, dataObj , status){
            var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
                if (result == true) {
                  
                   
                    dataObj.status = status;
                   
                    
        
                    $http.put("/api/adminApi/employee/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم التعديل  ");
                            $scope.getAllData();    
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.type = 2;
                    dataObj.status = 3;
                    dataObj.updateBy = $scope.forasAdmin._id,
                    dataObj.historyType = 3;
                    
        
                    $http.put("/api/admin/employee/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح ");
                            $scope.getAllData();    
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }

        $scope.searchObj = {};
        $scope.findData = function () {
            $scope.searchObj.type = 2;
            $http.post("/api/admin/findgetsubAdminsEmployee", $scope.searchObj)
                .then(function (response) {
                 
                    
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.employees = response.data;
                    var j = 0;
                    $scope.employees.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
})
.controller("employeesHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');


    $http.get("/api/admin/getsubAdminsEmployeeHistory")
        .then(function (response) {
            $scope.employees = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
})

.controller("addEmployeeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    // $scope.addPermissionToEmployee = function(employee ){
    //     var empIndex = 0;
    //     let permissions =  new Array();
    //     let permissions2 = [];
    //     permissions.users = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المستخدميين"  ,  nameEN : "users"  , key : "users" , value: false };
    //     permissions2.push(permissions.users);
    //     permissions.childAge = {employeeID : employee._id, index : empIndex++ ,  nameAR : "الفئات العمرية "  ,  nameEN : "child Ages"  , key : "childAge" , value: false };
    //     permissions2.push(permissions.childAge);
    //     permissions.educationalLevel = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المراحل التعليمية "  ,  nameEN : "educational Level"  , key : "educationalLevel" , value: false };
    //     permissions2.push(permissions.educationalLevel);
    //     permissions.materials = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المواد التعليمية "  ,  nameEN : "materials"  , key : "materials" , value: false };
    //     permissions2.push(permissions.materials);
    //     permissions.exercises ={employeeID : employee._id, index : empIndex++ ,  nameAR : "التمارين "  ,  nameEN : "exercises"  , key : "exercises" , value: false };
    //     permissions2.push(permissions.exercises);
    //     permissions.contactUs ={employeeID : employee._id, index : empIndex++ ,  nameAR : "تواصل معنا  "  ,  nameEN : "contactUs"  , key : "contactUs" , value: false };
    //     permissions2.push(permissions.contactUs);
    //     permissions.copyWrite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "حقوق الملكية  "  ,  nameEN : "copyWrite"  , key : "copyWrite" , value: false };
    //     permissions2.push(permissions.copyWrite);
    //     permissions.important   ={employeeID : employee._id, index : empIndex++ ,  nameAR : "هام ، عنا "  ,  nameEN : "important "  , key : "important" , value: false } ;
    //     permissions2.push(permissions.important);
    //     permissions.settingWebsite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "اعدادات الموقع "  ,  nameEN : "settingWebsite"  , key : "settingWebsite" , value: false };
    //     permissions2.push(permissions.settingWebsite);
    //     permissions.employees={employeeID : employee._id, index : empIndex++ ,  nameAR : "الموظفيين "  ,  nameEN : "employees"  , key : "employees" , value: false };
    //     permissions2.push(permissions.employees);
    //     permissions.permissions={employeeID : employee._id, index : empIndex++ ,  nameAR : "الصلاحيات "  ,  nameEN : "permissions"  , key : "permissions" , value: false };
    //     permissions2.push(permissions.permissions);
    //     permissions.childByParent={employeeID : employee._id, index : empIndex++ ,  nameAR : "الاطفال  "  ,  nameEN : "childreen"  , key : "childByParent" , value: false };
    //     permissions2.push(permissions.childByParent);
    
    //     permissions.addUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مستخدم   "  ,  nameEN : "add User"  , key : "addUser" , value: false };
    //     permissions2.push(permissions.addUser);
    //     permissions.editUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مستخدم   "  ,  nameEN : "edit User"  , key : "editUser" , value: false };
    //     permissions2.push(permissions.editUser);
    //     permissions.deleteUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف مستخدم   "  ,  nameEN : "delete User"  , key : "deleteUser" , value: false };
    //     permissions2.push(permissions.deleteUser);
    //     permissions.userDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل مستخدم   "  ,  nameEN : "user Details"  , key : "userDetails" , value: false };
    //     permissions2.push(permissions.userDetails);
        
    //     permissions.addChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة طفل    "  ,  nameEN : "add Child"  , key : "addChild" , value: false };
    //     permissions2.push(permissions.addChild);
    //     permissions.editChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل طفل    "  ,  nameEN : "edit Child"  , key : "editChild" , value: false };
    //     permissions2.push(permissions.editChild);
    //     permissions.deleteChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  طفل    "  ,  nameEN : "delete Child"  , key : "deleteChild" , value: false };
    //     permissions2.push(permissions.deleteChild);
    //     permissions.childDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  طفل    "  ,  nameEN : "child Details"  , key : "childDetails" , value: false };
    //     permissions2.push(permissions.childDetails);
        
    //     permissions.addChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة عمرية    "  ,  nameEN : "add ChildAge"  , key : "addChildAge" , value: false };
    //     permissions2.push(permissions.addChildAge);
    //     permissions.editChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة عمرية    "  ,  nameEN : "edit ChildAge"  , key : "editChildAge" , value: false };
    //     permissions2.push(permissions.editChildAge);
    //     permissions.deleteChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة عمرية    "  ,  nameEN : "delete ChildAge"  , key : "deleteChildAge" , value: false };
    //     permissions2.push(permissions.deleteChildAge);
    //     permissions.childAgeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة عمرية     "  ,  nameEN : "childAge Details"  , key : "childAgeDetails" , value: false };
    //     permissions2.push(permissions.childAgeDetails);
        
    //     permissions.addEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة تعليمية    "  ,  nameEN : "add EducationalLevel"  , key : "addEducationalLevel" , value: false };
    //     permissions2.push(permissions.addEducationalLevel);
    //     permissions.editEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة تعليمية    "  ,  nameEN : "edit EducationalLevel"  , key : "editEducationalLevel" , value: false };
    //     permissions2.push(permissions.editEducationalLevel);
    //     permissions.deleteEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة تعليمية    "  ,  nameEN : "delete EducationalLevel"  , key : "deleteEducationalLevel" , value: false };
    //     permissions2.push(permissions.deleteEducationalLevel);
    //     permissions.educationalLevelDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة تعليمية     "  ,  nameEN : "EducationalLevel Details"  , key : "educationalLevelDetails" , value: false };
    //     permissions2.push(permissions.educationalLevelDetails);
    
    //     permissions.addMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مادة تعليمية    "  ,  nameEN : "add Materials"  , key : "addMaterials" , value: false };
    //     permissions2.push(permissions.addMaterials);
    //     permissions.editMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مادة تعليمية    "  ,  nameEN : "edit Materials"  , key : "editMaterials" , value: false };
    //     permissions2.push(permissions.editMaterials);
    //     permissions.deleteMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مادة تعليمية    "  ,  nameEN : "delete Materials"  , key : "deleteMaterials" , value: false };
    //     permissions2.push(permissions.deleteMaterials);
    //     permissions.materialsDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مادة تعليمية     "  ,  nameEN : "materials Details"  , key : "materialsDetails" , value: false };
    //     permissions2.push(permissions.materialsDetails);
    
    //     permissions.addExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة تمرين      "  ,  nameEN : "add Exercises"  , key : "addExercises" , value: false };
    //     permissions2.push(permissions.addExercises);
    //     permissions.editExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل تمرين      "  ,  nameEN : "edit Exercises"  , key : "editExercises" , value: false };
    //     permissions2.push(permissions.editExercises);
    //     permissions.deleteExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  تمرين      "  ,  nameEN : "delete Exercises"  , key : "deleteExercises" , value: false };
    //     permissions2.push(permissions.deleteExercises);
    //     permissions.exercisesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  تمرين       "  ,  nameEN : "Exercises Details"  , key : "exercisesDetails" , value: false };
    //     permissions2.push(permissions.exercisesDetails);
    //     permissions.addCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة الحقوق        "  ,  nameEN : "add CopyWrites"  , key : "addCopyWrites" , value: false };
    //     permissions2.push(permissions.addCopyWrites);
    //     permissions.editCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الحقوق        "  ,  nameEN : "edit CopyWrites"  , key : "editCopyWrites" , value: false };
    //     permissions2.push(permissions.editCopyWrites);
    //     permissions.deleteCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  الحقوق        "  ,  nameEN : "delete CopyWrites"  , key : "deleteCopyWrites" , value: false };
    //     permissions2.push(permissions.deleteCopyWrites);
    //     permissions.copyWritesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  الحقوق         "  ,  nameEN : "copyWrites Details"  , key : "copyWritesDetails" , value: false };
    //     permissions2.push(permissions.copyWritesDetails);
        
    //     permissions.addImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة عنا          "  ,  nameEN : "add Important"  , key : "addImportant" , value: false };
    //     permissions2.push(permissions.addImportant);
    //     permissions.editImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل عنا          "  ,  nameEN : "edit Important"  , key : "editImportant" , value: false };
    //     permissions2.push(permissions.editImportant);
    //     permissions.deleteImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  عنا          "  ,  nameEN : "delete Important"  , key : "deleteImportant" , value: false };
    //     permissions2.push(permissions.deleteImportant);
    //     permissions.importantDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  عنا           "  ,  nameEN : "important Details"  , key : "importantDetails" , value: false };
    //     permissions2.push(permissions.importantDetails);
        
    //     permissions.editSetting={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الموقع           "  ,  nameEN : "edit website Setting"  , key : "editSetting" , value: false };
    //     permissions2.push(permissions.editSetting);
    //     permissions.addEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة موظف           "  ,  nameEN : "add Employee"  , key : "addEmployee" , value: false };
    //     permissions2.push(permissions.addEmployee);
    //     permissions.editEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل موظف           "  ,  nameEN : "edit Employee"  , key : "editEmployee" , value: false };
    //     permissions2.push(permissions.editEmployee);
    //     permissions.deleteEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  موظف           "  ,  nameEN : "delete Employee"  , key : "deleteEmployee" , value: false };
    //     permissions2.push(permissions.deleteEmployee);
    //     permissions.employeeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  موظف            "  ,  nameEN : "employee Details"  , key : "employeeDetails" , value: false };
    //     permissions2.push(permissions.employeeDetails);
    
    //     permissions.addPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة صلاحية            "  ,  nameEN : "add Permission"  , key : "addPermission" , value: false };
    //     permissions2.push(permissions.addPermission);
    //     permissions.editPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل صلاحية            "  ,  nameEN : "edit Permission"  , key : "editPermission" , value: false };
    //     permissions2.push(permissions.editPermission);
    //     permissions.deletePermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  صلاحية            "  ,  nameEN : "delete Permission"  , key : "deletePermission" , value: false };
    //     permissions2.push(permissions.deletePermission);
    //     permissions.permissionDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  صلاحية             "  ,  nameEN : "permission Details"  , key : "permissionDetails" , value: false };
    //     permissions2.push(permissions.permissionDetails);
       
    //           var dataObj = {
    //               type : 2,
    //               employeeID : employee._id,
    //               permissions : permissions2,
    //               createBy : $scope.forasAdmin._id,
    //               historyType : 1

    //           }
    //           $http.post("/api/admin/addPermissions" ,  dataObj)
    //           .then(function (response) {
    //               alert("تم اضافة الصلاحيات بنجاح ")
    //           }, function (response) {
    //               //alert("Error !");
    //           })
   
        
      
        
       
    // }
    $scope.addData = function () {
        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            type : 2,
            createBy : $scope.forasAdmin._id
        }
        $http.post("/api/adminApi/employee/", dataObj)
            .then(function (response) {
                alert("تم اضافة الموظف   بنجاح ");
                // $scope.addPermissionToEmployee(response.data);
                $location.path('/employees', "_self");
            }, function (response) {
                console.log(response);
                if(response.data.error.includes("email_1 dup key")){
                    $rootScope.alertMessageLang("الايميل موجود من قبل  ! ","Email already Exist !" , $rootScope.qalamLang );

                }
                if(response.data.error.includes("mobile_1 dup key")){
                    $rootScope.alertMessageLang(" الهاتف  موجود من قبل !  ","Mobile Already Exist !" , $rootScope.qalamLang );

                }
                //alert("Error !");
            })
    }
})

.controller("editAdminCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    $scope.user = $scope.forasAdmin;

    $scope.editData = function () {

        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            updateBy : $scope.forasAdmin._id,
            historyType : 2


        }

        $http.put("/api/admin/employee/" + $scope.forasAdmin._id, dataObj)
            .then(function (response) {
                alert("تم تعديل الادمن بنجاح ");
                $scope.forasAdmin = response.data;
                $cookieStore.put('forasAdmin', $scope.forasAdmin);
                $cookieStore.put('forasAdminID', $scope.forasAdmin._id);
                $window.open("http://foras-sa.com/ForasAdmin/html/login.html", "_self");
                //$location.path('/Default' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("editEmployeeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/employeeByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;

        
        }, function (response) {
            //alert("Error !");
        })
    
    

    $scope.editData = function () {

        var dataObj = {
            type : $scope.user.type,
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
    
        


        }

        $http.put("/api/adminApi/employee/" +id, dataObj)
            .then(function (response) {
                alert("تم تعديل الموظف  بنجاح ");
               
                 $location.path('/employees' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})

.controller("employeePermissionsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    var id = $routeParams.id;
    $http.get("/api/admin/employeeByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;
            $http.get("/api/admin/employeePermissionbyID?employeeID=" + id)
            .then(function (response) {
                // if(!response.data){
                //     console.log("No Permissions");
                //     $scope.addPermissionToEmployee($scope.user);
                // }
                $rootScope.employeePermissionsAll = [];
                $rootScope.employeePermissions = [];
                
                $rootScope.employeePermissionsAll = response.data.permissions;
                $scope.permissionID = response.data._id;
                console.log("$scope.employeePermissionsAll");
                console.log($rootScope.employeePermissionsAll);
                response.data.permissions.forEach((permission , p) => {
                    $scope.employeePermissions[permission.key] = permission;
                   
                   
                });
                
            }, function (response) {
                //alert("Error !");
            })
        
        }, function (response) {
            //alert("Error !");
        })
      


        // $scope.addPermissionToEmployee = function(employee ){
        //     var empIndex = 0;
        //     let permissions =  new Array();
        //     let permissions2 = [];
        //     permissions.users = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المستخدميين"  ,  nameEN : "users"  , key : "users" , value: false };
        //     permissions2.push(permissions.users);
        //     permissions.childAge = {employeeID : employee._id, index : empIndex++ ,  nameAR : "الفئات العمرية "  ,  nameEN : "child Ages"  , key : "childAge" , value: false };
        //     permissions2.push(permissions.childAge);
        //     permissions.educationalLevel = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المراحل التعليمية "  ,  nameEN : "educational Level"  , key : "educationalLevel" , value: false };
        //     permissions2.push(permissions.educationalLevel);
        //     permissions.materials = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المواد التعليمية "  ,  nameEN : "materials"  , key : "materials" , value: false };
        //     permissions2.push(permissions.materials);
        //     permissions.exercises ={employeeID : employee._id, index : empIndex++ ,  nameAR : "التمارين "  ,  nameEN : "exercises"  , key : "exercises" , value: false };
        //     permissions2.push(permissions.exercises);
        //     permissions.contactUs ={employeeID : employee._id, index : empIndex++ ,  nameAR : "تواصل معنا  "  ,  nameEN : "contactUs"  , key : "contactUs" , value: false };
        //     permissions2.push(permissions.contactUs);
        //     permissions.copyWrite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "حقوق الملكية  "  ,  nameEN : "copyWrite"  , key : "copyWrite" , value: false };
        //     permissions2.push(permissions.copyWrite);
        //     permissions.important   ={employeeID : employee._id, index : empIndex++ ,  nameAR : "هام ، عنا "  ,  nameEN : "important "  , key : "important" , value: false } ;
        //     permissions2.push(permissions.important);
        //     permissions.settingWebsite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "اعدادات الموقع "  ,  nameEN : "settingWebsite"  , key : "settingWebsite" , value: false };
        //     permissions2.push(permissions.settingWebsite);
        //     permissions.employees={employeeID : employee._id, index : empIndex++ ,  nameAR : "الموظفيين "  ,  nameEN : "employees"  , key : "employees" , value: false };
        //     permissions2.push(permissions.employees);
        //     permissions.permissions={employeeID : employee._id, index : empIndex++ ,  nameAR : "الصلاحيات "  ,  nameEN : "permissions"  , key : "permissions" , value: false };
        //     permissions2.push(permissions.permissions);
        //     permissions.childByParent={employeeID : employee._id, index : empIndex++ ,  nameAR : "الاطفال  "  ,  nameEN : "childreen"  , key : "childByParent" , value: false };
        //     permissions2.push(permissions.childByParent);
        
        //     permissions.addUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مستخدم   "  ,  nameEN : "add User"  , key : "addUser" , value: false };
        //     permissions2.push(permissions.addUser);
        //     permissions.editUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مستخدم   "  ,  nameEN : "edit User"  , key : "editUser" , value: false };
        //     permissions2.push(permissions.editUser);
        //     permissions.deleteUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف مستخدم   "  ,  nameEN : "delete User"  , key : "deleteUser" , value: false };
        //     permissions2.push(permissions.deleteUser);
        //     permissions.userDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل مستخدم   "  ,  nameEN : "user Details"  , key : "userDetails" , value: false };
        //     permissions2.push(permissions.userDetails);
            
        //     permissions.addChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة طفل    "  ,  nameEN : "add Child"  , key : "addChild" , value: false };
        //     permissions2.push(permissions.addChild);
        //     permissions.editChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل طفل    "  ,  nameEN : "edit Child"  , key : "editChild" , value: false };
        //     permissions2.push(permissions.editChild);
        //     permissions.deleteChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  طفل    "  ,  nameEN : "delete Child"  , key : "deleteChild" , value: false };
        //     permissions2.push(permissions.deleteChild);
        //     permissions.childDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  طفل    "  ,  nameEN : "child Details"  , key : "childDetails" , value: false };
        //     permissions2.push(permissions.childDetails);
            
        //     permissions.addChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة عمرية    "  ,  nameEN : "add ChildAge"  , key : "addChildAge" , value: false };
        //     permissions2.push(permissions.addChildAge);
        //     permissions.editChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة عمرية    "  ,  nameEN : "edit ChildAge"  , key : "editChildAge" , value: false };
        //     permissions2.push(permissions.editChildAge);
        //     permissions.deleteChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة عمرية    "  ,  nameEN : "delete ChildAge"  , key : "deleteChildAge" , value: false };
        //     permissions2.push(permissions.deleteChildAge);
        //     permissions.childAgeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة عمرية     "  ,  nameEN : "childAge Details"  , key : "childAgeDetails" , value: false };
        //     permissions2.push(permissions.childAgeDetails);
            
        //     permissions.addEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة تعليمية    "  ,  nameEN : "add EducationalLevel"  , key : "addEducationalLevel" , value: false };
        //     permissions2.push(permissions.addEducationalLevel);
        //     permissions.editEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة تعليمية    "  ,  nameEN : "edit EducationalLevel"  , key : "editEducationalLevel" , value: false };
        //     permissions2.push(permissions.editEducationalLevel);
        //     permissions.deleteEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة تعليمية    "  ,  nameEN : "delete EducationalLevel"  , key : "deleteEducationalLevel" , value: false };
        //     permissions2.push(permissions.deleteEducationalLevel);
        //     permissions.educationalLevelDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة تعليمية     "  ,  nameEN : "EducationalLevel Details"  , key : "educationalLevelDetails" , value: false };
        //     permissions2.push(permissions.educationalLevelDetails);
        
        //     permissions.addMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مادة تعليمية    "  ,  nameEN : "add Materials"  , key : "addMaterials" , value: false };
        //     permissions2.push(permissions.addMaterials);
        //     permissions.editMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مادة تعليمية    "  ,  nameEN : "edit Materials"  , key : "editMaterials" , value: false };
        //     permissions2.push(permissions.editMaterials);
        //     permissions.deleteMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مادة تعليمية    "  ,  nameEN : "delete Materials"  , key : "deleteMaterials" , value: false };
        //     permissions2.push(permissions.deleteMaterials);
        //     permissions.materialsDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مادة تعليمية     "  ,  nameEN : "materials Details"  , key : "materialsDetails" , value: false };
        //     permissions2.push(permissions.materialsDetails);
        
        //     permissions.addExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة تمرين      "  ,  nameEN : "add Exercises"  , key : "addExercises" , value: false };
        //     permissions2.push(permissions.addExercises);
        //     permissions.editExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل تمرين      "  ,  nameEN : "edit Exercises"  , key : "editExercises" , value: false };
        //     permissions2.push(permissions.editExercises);
        //     permissions.deleteExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  تمرين      "  ,  nameEN : "delete Exercises"  , key : "deleteExercises" , value: false };
        //     permissions2.push(permissions.deleteExercises);
        //     permissions.exercisesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  تمرين       "  ,  nameEN : "Exercises Details"  , key : "exercisesDetails" , value: false };
        //     permissions2.push(permissions.exercisesDetails);
            
        //     permissions.addCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة الحقوق        "  ,  nameEN : "add CopyWrites"  , key : "addCopyWrites" , value: false };
        //     permissions2.push(permissions.addCopyWrites);
        //     permissions.editCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الحقوق        "  ,  nameEN : "edit CopyWrites"  , key : "editCopyWrites" , value: false };
        //     permissions2.push(permissions.editCopyWrites);
        //     permissions.deleteCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  الحقوق        "  ,  nameEN : "delete CopyWrites"  , key : "deleteCopyWrites" , value: false };
        //     permissions2.push(permissions.deleteCopyWrites);
        //     permissions.copyWritesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  الحقوق         "  ,  nameEN : "copyWrites Details"  , key : "copyWritesDetails" , value: false };
        //     permissions2.push(permissions.copyWritesDetails);
            
        //     permissions.addImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة عنا          "  ,  nameEN : "add Important"  , key : "addImportant" , value: false };
        //     permissions2.push(permissions.addImportant);
        //     permissions.editImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل عنا          "  ,  nameEN : "edit Important"  , key : "editImportant" , value: false };
        //     permissions2.push(permissions.editImportant);
        //     permissions.deleteImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  عنا          "  ,  nameEN : "delete Important"  , key : "deleteImportant" , value: false };
        //     permissions2.push(permissions.deleteImportant);
        //     permissions.importantDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  عنا           "  ,  nameEN : "important Details"  , key : "importantDetails" , value: false };
        //     permissions2.push(permissions.importantDetails);
            
        //     permissions.editSetting={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الموقع           "  ,  nameEN : "edit website Setting"  , key : "editSetting" , value: false };
        //     permissions2.push(permissions.editSetting);
        //     permissions.addEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة موظف           "  ,  nameEN : "add Employee"  , key : "addEmployee" , value: false };
        //     permissions2.push(permissions.addEmployee);
        //     permissions.editEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل موظف           "  ,  nameEN : "edit Employee"  , key : "editEmployee" , value: false };
        //     permissions2.push(permissions.editEmployee);
        //     permissions.deleteEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  موظف           "  ,  nameEN : "delete Employee"  , key : "deleteEmployee" , value: false };
        //     permissions2.push(permissions.deleteEmployee);
        //     permissions.employeeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  موظف            "  ,  nameEN : "employee Details"  , key : "employeeDetails" , value: false };
        //     permissions2.push(permissions.employeeDetails);
        
        //     permissions.addPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة صلاحية            "  ,  nameEN : "add Permission"  , key : "addPermission" , value: false };
        //     permissions2.push(permissions.addPermission);
        //     permissions.editPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل صلاحية            "  ,  nameEN : "edit Permission"  , key : "editPermission" , value: false };
        //     permissions2.push(permissions.editPermission);
        //     permissions.deletePermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  صلاحية            "  ,  nameEN : "delete Permission"  , key : "deletePermission" , value: false };
        //     permissions2.push(permissions.deletePermission);
        //     permissions.permissionDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  صلاحية             "  ,  nameEN : "permission Details"  , key : "permissionDetails" , value: false };
        //     permissions2.push(permissions.permissionDetails);
           
        //           var dataObj = {
        //               employeeID : employee._id,
        //               permissions : permissions2
        //           }
        //           $http.post("/api/admin/addPermissions" ,  dataObj)
        //           .then(function (response) {
        //               alert("تم اضافة الصلاحيات بنجاح ")
        //           }, function (response) {
        //               //alert("Error !");
        //           })
       
            
          
            
           
        // }
        $scope.editData = function(){
            var dataObj = {
                permissions :  $scope.employeePermissionsAll,
                updateBy : $scope.forasAdmin._id,
                historyType : 2

            }
            $http.put("/api/admin/employeePermission/" + $scope.permissionID , dataObj)
            .then(function (response) {
                console.log("تم تعديل الصلاحية بنجاح ")
               alert("تم تعديل الصلاحية بنجاح ");
               $location.path("/employees" , "_self");
            }, function (response) {
                //alert("Error !");
            })
        }
    


   
})
.controller("addUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');



    $scope.addData = function () {
        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            gender : $('#gender').val(),
            subscripeType : $('#subscripeType').val(),
            status: 1,
            createBy : $scope.forasAdmin._id,
            historyType : 1

        }

        $http.post("/api/admin/user", dataObj)
            .then(function (response) {
                alert("تم اضافة  المستخدم بنجاح ");
                $location.path('/users', "_self");

            }, function (response) {
                //alert("Error !");
            })
    }
})




.controller("contactUsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/contactUS")
        .then(function (response) {
            $scope.allData = response.data;
        }, function (response) {
            //alert("Error !");
        })
})

.controller("settingCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/setting")
        .then(function (response) {
            $scope.settings = response.data;
        }, function (response) {
            //alert("Error !");
        })
        
})
.controller("settingHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/settingHistory")
        .then(function (response) {
            $scope.settings = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("editSettingCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/settingByID?id=" + id)
        .then(function (response) {
            $scope.setting = response.data;

        
        }, function (response) {
            //alert("Error !");
        })
    


    $scope.editData = function () {
        
            var dataObj = {
                valueAR: $('#valueAR').val(),
                valueEN: $('#valueEN').val(),
                updateBy : $scope.forasAdmin._id,
                historyType : 2


            }

            $http.put("/api/admin/setting/" + id, dataObj)
                .then(function (response) {

                    alert("تم تعديل الاعداد  بنجاح ");
                    $location.path('/setting', "_self");

                }, function (response) {

                    //alert("Error !");
                })

    }
})



.controller("homeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $rootScope.cforasAdmin = $cookieStore.get('forasAdmin');
    console.log($rootScope.cforasAdmin);
    $rootScope.qalamLang = $cookieStore.get('qalamLang');
   

    if ($rootScope.qalamLang == 'en') {
        $('body').css("direction", "ltr");
        $('body table').css("direction", "ltr");

    } else {

        $cookieStore.put('qalamLang', 'ar')
        $rootScope.qalamLang = $cookieStore.get('qalamLang');
        $('body').css("direction", "rtl");

    }

    $rootScope.changeLang = function (lang) {
        $cookieStore.put('qalamLang', lang);
        $rootScope.qalamLang = $cookieStore.get('qalamLang');
        if ($rootScope.qalamLang == 'en') {
            $('body').css("direction", "ltr");
            // $('#ngView').css("direction", "ltr");
            // $('table').css("direction", "ltr");
            setTimeout(() => {
                var Sidemenu = function() {
                    this.$menuItem = $('#sidebar-menu a');
                };
                
                function init() {
                    var $this = Sidemenu;
                    $('#sidebar-menu a').on('click', function(e) {
                        if($(this).parent().hasClass('submenu')) {
                            e.preventDefault();
                        }
                        if(!$(this).hasClass('subdrop')) {
                            $('ul', $(this).parents('ul:first')).slideUp(350);
                            $('a', $(this).parents('ul:first')).removeClass('subdrop');
                            $(this).next('ul').slideDown(350);
                            $(this).addClass('subdrop');
                        } else if($(this).hasClass('subdrop')) {
                            $(this).removeClass('subdrop');
                            $(this).next('ul').slideUp(350);
                        }
                    });
                    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
                }
                
                // Sidebar Initiate
                init();
            }, 500);
            
        } else {
            $('body').css("direction", "rtl");
            setTimeout(() => {
                var Sidemenu = function() {
                    this.$menuItem = $('#sidebar-menu a');
                };
                
                function init() {
                    var $this = Sidemenu;
                    $('#sidebar-menu a').on('click', function(e) {
                        if($(this).parent().hasClass('submenu')) {
                            e.preventDefault();
                        }
                        if(!$(this).hasClass('subdrop')) {
                            $('ul', $(this).parents('ul:first')).slideUp(350);
                            $('a', $(this).parents('ul:first')).removeClass('subdrop');
                            $(this).next('ul').slideDown(350);
                            $(this).addClass('subdrop');
                        } else if($(this).hasClass('subdrop')) {
                            $(this).removeClass('subdrop');
                            $(this).next('ul').slideUp(350);
                        }
                    });
                    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
                }
                
                // Sidebar Initiate
                init();
            }, 500);

        }
    }

   
   

    $rootScope.cuser = $cookieStore.get('forasAdmin')
    $scope.userId = $cookieStore.get('id');


    $rootScope.alertMessageLang = function (msgAr, msgEn, lang) {
        if (lang == 'ar') {
            alert(msgAr);
        } else {
            alert(msgEn);
        }

    }
    
    $rootScope.logOutFun = function () {
        if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {

            $cookieStore.remove('forasAdmin');
            $cookieStore.remove('forasAdminID');
            alert('تم تسجيل الخروج !!');
            $window.open("http://foras-sa.com/ForasAdmin/html/login.html", "_self");
        }
    }
    // $rootScope.deletObj = function(apiPut , id  , apiGet){
    //     var result = confirm("هل انت متأكد من الحذف ؟ ");
    //     if (result == true) {
        
    //     } else {
    //     txt = "You pressed Cancel!";
    //     }
    // }

})




.controller("DefualtCtrl", function ($rootScope, $scope, $http, $window, $cookieStore) {

    $scope.forasAdmin = $cookieStore.get('forasAdmin');


    $http.get("/api/admin/employeePermissionbyID?employeeID=" + $scope.forasAdmin._id)
        .then(function (response) {
            if(!response.data){
                // console.log("No Permissions");
                // $scope.addPermissionToEmployee($scope.forasAdmin);
            }
            $rootScope.currentEmployeePermissions = [];
        
            $rootScope.currentEmployeePermissionsAll = response.data.permissions || [];
            console.log($rootScope.currentEmployeePermissionsAll);
            response.data.permissions.forEach((permission , p) => {
                $rootScope.currentEmployeePermissions[permission.key] = permission;
                //  console.log($rootScope.currentEmployeePermissionsAll);
                if(p == response.data.permissions.length -1 ){
                    console.log($rootScope.currentEmployeePermissions);

                }
               
            });
            
        }, function (response) {
            //alert("Error !");
        })
   // $scope.addPermissionToEmployee($scope.forasAdmin);
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
            $rootScope.totalCvs = response.data.message;
        }, function (response) {
            //alert("Error !");
        })
        $http.get("/api/adminApi/totalCompanies")
        .then(function (response) {
            $rootScope.totalCompanies = response.data.message;
        }, function (response) {
            //alert("Error !");
        })










        $scope.today = new Date();
        $scope.today2 = new Date();
            $scope.getUserReport = function (reportDay) {
    
                var reportDayFrom = new Date(reportDay);
                var reportDayTo = new Date(reportDay);
                reportDayTo.setDate(reportDay.getDate() + 1);
    
                var yaerFrom = reportDayFrom.getFullYear();
                var monthFrom = reportDayFrom.getMonth();
                var dateFrom = reportDayFrom.getDate();
                var reportDayFromLast = yaerFrom.toString() + "-" + (monthFrom + 1).toString() + "-" + dateFrom.toString();
    
    
                var yaerTo = reportDayTo.getFullYear();
                var monthTo = reportDayTo.getMonth();
                var dateTo = reportDayTo.getDate();
                var reportDayToLast = yaerTo.toString() + "-" + (monthTo + 1).toString() + "-" + dateTo.toString();
    
    
                var values = [];
                var labels = [];
                var series = [];
                var days = 7;
    
                $scope.days = [];
                $scope.users = [];
                for (let i = 0; i < days; i++) {
    
                    $scope.days[i] = reportDay;
    
    
                    labels[i] = reportDay.getDate();
    
                    $http.get("/api/adminApi/getCVsByDate?dateFrom=" + reportDayFromLast + "&dateTo=" + reportDayToLast)
                        .then(function (response) {
                            response.data.forEach(usr => {
                                $scope.users.push(usr)
                            });
    
                            values.push(response.data.length);
                            series.push({
                                values: [response.data.length],
                                text: labels[i],
                                backgroundColor: "#FA6E6E #FA9494"
                            })
    
                        }, function (response) {
                            //alert("Error !!");
                        })
    
    
                    var nextDay = new Date(reportDay);
                    nextDay.setDate(reportDay.getDate() - 1);
                    reportDay = nextDay;
    
    
                    var reportDayFrom = new Date(reportDay);
                    var reportDayTo = new Date(reportDay);
                    reportDayTo.setDate(reportDay.getDate() + 1);
    
                    var yaerFrom = reportDayFrom.getFullYear();
                    var monthFrom = reportDayFrom.getMonth();
                    var dateFrom = reportDayFrom.getDate();
                    var reportDayFromLast = yaerFrom.toString() + "-" + (monthFrom + 1).toString() + "-" + dateFrom.toString();
    
    
                    var yaerTo = reportDayTo.getFullYear();
                    var monthTo = reportDayTo.getMonth();
                    var dateTo = reportDayTo.getDate();
                    var reportDayToLast = yaerTo.toString() + "-" + (monthTo + 1).toString() + "-" + dateTo.toString();
    
                   
                }

                if(!$scope.qalamLang || $scope.qalamLang == 'ar'){
                    setTimeout(() => {

                   
                        var myConfig = {
                            "type": "bar",
                            title: {
                                text: '',
                                fontSize: 24,
                            },
                            legend: {
                                draggable: true,
                            },
                            scaleX: {
                                // set scale label
                                label: { text: 'الايام ' },
                                // convert text on scale indices59
                                labels: labels
                            },
                            scaleY: {
                                // scale label with unicode character
                                label: { text: 'عدد السير الذاتية ' }
                            },
        
                            "plot": {
                                "styles": ["#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "red", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue"],
                                animation: {
                                    effect: 'ANIMATION_EXPAND_BOTTOM',
                                    method: 'ANIMATION_STRONG_EASE_OUT',
                                    sequence: 'ANIMATION_BY_NODE',
                                    speed: 275,
                                }
                            },
                            // "plot":{
                            //     "background-color":"red"
                            // },
                            "scale-x": {
                                "labels": labels
                            },
                            "scale-y": {
                                "labels": labels
                            },
        
                            "series": [
                                { "values": values }
                            ]
                        };
        
                        zingchart.render({
                            id: 'myChart',
                            data: myConfig,
                            height: "100%",
                            width: "100%"
                        });
        
        
                        $scope.myJson = {
                            type: "pie",
                            title: {
                                textAlign: 'center',
                                text: ""
                            },
                            plot: {
                                slice: 1 //to make a donut
                            },
                            series: series
                        };
        
                    }, 1000);
                }
    
                if($scope.qalamLang == 'en'){
                    setTimeout(() => {

                   
                        var myConfig = {
                            "type": "bar",
                            title: {
                                text: '',
                                fontSize: 24,
                            },
                            legend: {
                                draggable: true,
                            },
                            scaleX: {
                                // set scale label
                                label: { text: 'Days' },
                                // convert text on scale indices59
                                labels: labels
                            },
                            scaleY: {
                                // scale label with unicode character
                                label: { text: 'Count of CVs' }
                            },
        
                            "plot": {
                                "styles": ["#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "red", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue"],
                                animation: {
                                    effect: 'ANIMATION_EXPAND_BOTTOM',
                                    method: 'ANIMATION_STRONG_EASE_OUT',
                                    sequence: 'ANIMATION_BY_NODE',
                                    speed: 275,
                                }
                            },
                            // "plot":{
                            //     "background-color":"red"
                            // },
                            "scale-x": {
                                "labels": labels
                            },
                            "scale-y": {
                                "labels": labels
                            },
        
                            "series": [
                                { "values": values }
                            ]
                        };
        
                        zingchart.render({
                            id: 'myChart',
                            data: myConfig,
                            height: "100%",
                            width: "100%"
                        });
        
        
                        $scope.myJson = {
                            type: "pie",
                            title: {
                                textAlign: 'center',
                                text: ""
                            },
                            plot: {
                                slice: 1 //to make a donut
                            },
                            series: series
                        };
        
                    }, 1000);
                }
                }
                
            $scope.getUserReport($scope.today2);




            $scope.getServiceSalesReport = function (reportDay) {

                var reportDayFrom = new Date(reportDay);
                var reportDayTo = new Date(reportDay);
                reportDayTo.setDate(reportDay.getDate() + 1);
    
                var yaerFrom = reportDayFrom.getFullYear();
                var monthFrom = reportDayFrom.getMonth();
                var dateFrom = reportDayFrom.getDate();
                var reportDayFromLast = yaerFrom.toString() + "-" + (monthFrom + 1).toString() + "-" + dateFrom.toString();
    
    
                var yaerTo = reportDayTo.getFullYear();
                var monthTo = reportDayTo.getMonth();
                var dateTo = reportDayTo.getDate();
                var reportDayToLast = yaerTo.toString() + "-" + (monthTo + 1).toString() + "-" + dateTo.toString();
    
    
                var values2 = [];
                var labels2 = [];
                var series2 = [];
                var days = 7;
    
                $scope.dayss = [];
                $scope.users2 = [];
                for (let i = 0; i < days; i++) {
    
                    $scope.dayss[i] = reportDay;
    
    
                    labels2[i] = reportDay.getDate();
    
                    $http.get("/api/adminApi/getContactUSByDate?dateFrom=" + reportDayFromLast + "&dateTo=" + reportDayToLast)
                        .then(function (response) {
                            response.data.forEach(usr => {
                                $scope.users2.push(usr)
                            });
    
                            values2.push(response.data.length);
                            series.push({
                                values2: [response.data.length],
                                text: labels2[i],
                                backgroundColor: "#FA6E6E #FA9494"
                            })
    
                        }, function (response) {
                            //alert("Error !!");
                        })
    
    
                    var nextDay = new Date(reportDay);
                    nextDay.setDate(reportDay.getDate() - 1);
                    reportDay = nextDay;
    
    
                    var reportDayFrom = new Date(reportDay);
                    var reportDayTo = new Date(reportDay);
                    reportDayTo.setDate(reportDay.getDate() + 1);
    
                    var yaerFrom = reportDayFrom.getFullYear();
                    var monthFrom = reportDayFrom.getMonth();
                    var dateFrom = reportDayFrom.getDate();
                    var reportDayFromLast = yaerFrom.toString() + "-" + (monthFrom + 1).toString() + "-" + dateFrom.toString();
    
    
                    var yaerTo = reportDayTo.getFullYear();
                    var monthTo = reportDayTo.getMonth();
                    var dateTo = reportDayTo.getDate();
                    var reportDayToLast = yaerTo.toString() + "-" + (monthTo + 1).toString() + "-" + dateTo.toString();
    
                   
                }

                if($scope.qalamLang == 'en'){
                    setTimeout(() => {
                        var myConfig = {
                            "type": "bar",
                            title: {
                                text: '',
                                fontSize: 24,
                            },
                            legend: {
                                draggable: true,
                            },
                            scaleX: {
                                // set scale label
                                label: { text: 'Days' },
                                // convert text on scale indices59
                                labels: labels2
                            },
                            scaleY: {
                                // scale label with unicode character
                                label: { text: 'Count of Contacts' }
                            },
        
                            "plot": {
                                "styles": ["#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue"],
                                animation: {
                                    effect: 'ANIMATION_EXPAND_BOTTOM',
                                    method: 'ANIMATION_STRONG_EASE_OUT',
                                    sequence: 'ANIMATION_BY_NODE',
                                    speed: 275,
                                }
                            },
                            // "plot":{
                            //     "background-color":"#667eea"
                            // },
                            "scale-x": {
                                "labels": labels2
                            },
                            "scale-y": {
                                "labels": labels2
                            },
        
                            "series": [
                                { "values": values2 }
                            ]
                        };
        
                        zingchart.render({
                            id: 'myChart1',
                            data: myConfig,
                            height: "100%",
                            width: "100%"
                        });
        
        
                        $scope.myJson = {
                            type: "pie",
                            title: {
                                textAlign: 'center',
                                text: ""
                            },
                            plot: {
                                slice: 1 //to make a donut
                            },
                            series: series2
                        };
        
                    }, 1000);
                }
                if (!$scope.qalamLang || $scope.qalamLang == 'ar'){
                    setTimeout(() => {
                        var myConfig = {
                            "type": "bar",
                            title: {
                                text: '',
                                fontSize: 24,
                            },
                            legend: {
                                draggable: true,
                            },
                            scaleX: {
                                // set scale label
                                label: { text: 'الأيام ' },
                                // convert text on scale indices59
                                labels: labels2
                            },
                            scaleY: {
                                // scale label with unicode character
                                label: { text: 'عدد الشركات ' }
                            },
        
                            "plot": {
                                "styles": ["#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue", "#667eea", "#6610f2", "#007bff", "#007bff", "#17a2b8", "blue"],
                                animation: {
                                    effect: 'ANIMATION_EXPAND_BOTTOM',
                                    method: 'ANIMATION_STRONG_EASE_OUT',
                                    sequence: 'ANIMATION_BY_NODE',
                                    speed: 275,
                                }
                            },
                            // "plot":{
                            //     "background-color":"#667eea"
                            // },
                            "scale-x": {
                                "labels": labels2
                            },
                            "scale-y": {
                                "labels": labels2
                            },
        
                            "series": [
                                { "values": values2 }
                            ]
                        };
        
                        zingchart.render({
                            id: 'myChart1',
                            data: myConfig,
                            height: "100%",
                            width: "100%"
                        });
        
        
                        $scope.myJson = {
                            type: "pie",
                            title: {
                                textAlign: 'center',
                                text: ""
                            },
                            plot: {
                                slice: 1 //to make a donut
                            },
                            series: series2
                        };
        
                    }, 1000);
                }
                
            }
            $scope.getServiceSalesReport($scope.today);

            $scope.changeDateNow = function(date){
                $scope.getServiceSalesReport(date)
             
            }
            $scope.changeDateNow2 = function(date){
                $scope.getUserReport(date);
             
            }
           



})

.controller("copyWriteCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/getAllCopyWrite")
        .then(function (response) {
            $scope.copyWrites = response.data;
                var j = 0;
                $scope.copyWrites.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/admin/getAllCopyWrite")
            .then(function (response) {
                $scope.copyWrites = response.data;
                    var j = 0;
                    $scope.copyWrites.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
            }, function (response) {
                //alert("Error !");
            })
        }
    
        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/copyWrite/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح ");
                            $scope.getAllData();    
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }

        $scope.findData = function () {
            $http.post("/api/admin/findCopyWrite", $scope.searchObj)
                .then(function (response) {
                 
                    $scope.copyWrites = response.data;
                    $(".bd-example-modal-lg .btn-danger").click();
                    var j = 0;
                    $scope.copyWrites.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
})
.controller("copyWriteHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/getAllCopyWriteHistory")
        .then(function (response) {
            $scope.copyWrites = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("permissionsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.getValue = function(arr){
       console.log(arr);
    }
})
.controller("addCopyWritesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            createBy : $scope.forasAdmin._id,
            historyType : 1
        }

        $http.post("/api/admin/copyWrite" , dataObj)
        .then(function (response) {
            alert("تم اضافة الحقوق بنجاح ");
            $location.path('/copyWrite' , "_self");

        }, function (response) {
            //alert("Error !");
        })
    }
})
.controller("editCopyWritesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getcopyWritebyID?id=" + id)
        .then(function (response) {
            $scope.copyWrite = response.data;
           
        }, function (response) {
            //alert("Error !");
        })

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val(),
                status : $('#status').val(),
                updateBy : $scope.forasAdmin._id,
                historyType : 2

               
            }

            $http.put("/api/admin/copyWrite/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل الخقوق  بنجاح ");
                $location.path('/copyWrite' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("importantCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/getAllImportant")
    .then(function (response) {
        $scope.important = response.data;
        var j = 0;
        $scope.important.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/admin/getAllImportant")
        .then(function (response) {
            $scope.important = response.data;
            var j = 0;
            $scope.important.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }

    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})
.controller("importantHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/getAllImportantHistory")
    .then(function (response) {
        $scope.important = response.data;
    }, function (response) {
        //alert("Error !");
    })
})
.controller("addImportantCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            createBy : $scope.forasAdmin._id,
            historyType : 1
        }
        $http.post("/api/admin/important" , dataObj)
        .then(function (response) {
            alert("تم اضافة عنا  بنجاح ");
            $location.path('/important' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})
.controller("editImportantCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getimportantbyID?id=" + id)
        .then(function (response) {
            $scope.important = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val(),
                status : $('#status').val(),
                updateBy : $scope.forasAdmin._id,
                historyType : 2

               
               
            }

            $http.put("/api/admin/important/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل عنا  بنجاح ");
                $location.path('/important' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("childAgeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/childAge")
        .then(function (response) {
            $scope.childAge = response.data;
            var j = 0;
            $scope.childAge.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/admin/childAge")
            .then(function (response) {
                $scope.childAge = response.data;
                var j = 0;
                $scope.childAge.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
                });
            }, function (response) {
                //alert("Error !");
            })                 
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/childAge/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم حذف  المرحلة العمرية بنجاح ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {};
        $scope.findData = function () {
            $http.post("/api/admin/findChildAge", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.childAge = response.data;
                    var j = 0;
                    $scope.childAge.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
})
.controller("childAgeHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/childAgeHistory")
        .then(function (response) {
            $scope.childAge = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addChildAgeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    $scope.addData = function () {
        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: 1,
            createBy : $scope.forasAdmin._id,
            historyType : 1
        }
        $http.post("/api/admin/childAge/", dataObj)
            .then(function (response) {
                alert("تم اضافة الفئة العمرية  بنجاح ");
                $location.path('/childAge', "_self");
            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("editChildAgeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getchildAgebyID?id=" + id)
        .then(function (response) {
            $scope.childAge = response.data;

        }, function (response) {
            //alert("Error !");
        })


    $scope.editData = function () {

        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: $('#status').val(),
            updateBy : $scope.forasAdmin._id,
            historyType : 2


        }

        $http.put("/api/admin/childAge/" + id, dataObj)
            .then(function (response) {
                alert("تم تعديل الفئة العمرية بنجاح ");
                $location.path('/childAge', "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("materialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/Materials")
        .then(function (response) {
            $scope.materials = response.data;
            var j = 0;
            $scope.materials.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })

        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
        $scope.getAllData = function(){
            $http.get("/api/admin/Materials")
            .then(function (response) {
                $scope.materials = response.data;
                var j = 0;
                $scope.materials.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })

        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 4;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/Materials/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح  ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {};
        $scope.findData = function () {
            $http.post("/api/admin/findMaterials", $scope.searchObj)
                .then(function (response) {
                 
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.materials = response.data;
                    var j = 0;
                    $scope.materials.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevel = response.data;
        
            
        }, function (response) {
            //alert("Error !");
        })
        
})
.controller("materialsHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/MaterialsHistory")
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();
    
   
    $scope.addData = function () {
        

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    titleAr: $('#titleAr').val(),
                    titleEN: $('#titleEN').val(),
                    imgPath : $scope.personalImagepath,
                    createBy : $scope.forasAdmin._id,
                    status: 1,
                    historyType : 1,
                    isParent : 1
                    
                  
                }
                $http.post("/api/admin/Materials/", dataObj)
                    .then(function (response) {
                        alert("تم اضافة المادة   بنجاح ");
                        $location.path('/materials', "_self");
                    }, function (response) {
                        //alert("Error !");
                    })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
      
        }
    }
})
.controller("editMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getMaterialslbyID?id=" + id)
        .then(function (response) {
            $scope.material = response.data;
            if($scope.material.imgPath){
                $scope.personalImagepath = $scope.material.imgPath;
            }
            
        }, function (response) {
            //alert("Error !");
        })

        $scope.getEducationalLevels = function(){
            $http.get("/api/admin/educationalLevel")
            .then(function (response) {
                $scope.educationalLevels = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getEducationalLevels();
        $scope.editData = function(){

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://foras-sa.com/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var dataObj = {
                        titleAr: $('#titleAr').val(),
                        titleEN: $('#titleEN').val(),
                        educationalLevelID : $('#educationalLevelID').val(),
                        imgPath : $scope.personalImagepath,
                        status: $('#status').val(),
                        updateBy : $scope.forasAdmin._id,
                        historyType : 2,
                        isParent : 1,
                        hasChildreen : $scope.material.hasChildreen
                       
            
            
                    }
            
                    $http.put("/api/admin/Materials/" + id, dataObj)
                        .then(function (response) {
                            alert("تم تعديل المادة  بنجاح ");
                            $location.path('/materials', "_self");
            
                        }, function (response) {
                            //alert("Error !");
                        })
                    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }else{
                var dataObj = {
                    titleAr: $('#titleAr').val(),
                    titleEN: $('#titleEN').val(),
                    educationalLevelID : $('#educationalLevelID').val(),
                    imgPath : $scope.personalImagepath,
                    status: $('#status').val(),
                    updateBy : $scope.forasAdmin._id,
                    historyType : 2,
                    isParent : 1,
                    hasChildreen : $scope.material.hasChildreen
               
                    
        
        
                }
        
                $http.put("/api/admin/Materials/" + id, dataObj)
                    .then(function (response) {
                        alert("تم تعديل المادة  بنجاح ");
                        $location.path('/materials', "_self");
        
                    }, function (response) {
                        //alert("Error !");
                    })
            }
           
            
        }

})
.controller("subMaterialsHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/MaterialsHistory")
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("subMaterialsCtrl", function ($scope, $http, $routeParams, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $scope.parentID = id;
    $http.get("/api/admin/getsubMaterialByMaterial?parentID=" + id)
    .then(function (response) {
        $scope.materials = response.data;
        var j = 0;
        $scope.materials.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })


        $scope.getAllData = function(){
            $http.get("/api/admin/getsubMaterialByMaterial?parentID=" + id)
            .then(function (response) {
                $scope.materials = response.data;
                var j = 0;
                $scope.materials.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })

        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 4;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/Materials/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح  ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {};
        $scope.findData = function () {
            $http.post("/api/admin/findMaterials", $scope.searchObj)
                .then(function (response) {
                 
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.materials = response.data;
                    var j = 0;
                    $scope.materials.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        
            
        }, function (response) {
            //alert("Error !");
        })
       
        
})
.controller("addSubMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
   
    var id = $routeParams.id;
   
    $scope.addData = function () {
        

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    titleAr: $('#titleAr').val(),
                    titleEN: $('#titleEN').val(),
                    imgPath : $scope.personalImagepath,
                    createBy : $scope.forasAdmin._id,
                    parentID :id,
                    status: 1,
                    historyType : 1,
                    isParent : 2,
                    hasChildreen : 2
                    
                  
                }
                $http.post("/api/admin/Materials/", dataObj)
                    .then(function (response) {
                        alert("تم اضافة المادة الفرعية   بنجاح ");
                        $location.path('/subMaterials/' + id, "_self");
                    }, function (response) {
                        //alert("Error !");
                    })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
      
        }
    }
})
.controller("editSubMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getMaterialslbyID?id=" + id)
        .then(function (response) {
            $scope.material = response.data;
            if($scope.material.imgPath){
                $scope.personalImagepath = $scope.material.imgPath;
            }
            
        }, function (response) {
            //alert("Error !");
        })

        $scope.getEducationalLevels = function(){
            $http.get("/api/admin/educationalLevel")
            .then(function (response) {
                $scope.educationalLevels = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getEducationalLevels();
        $scope.editData = function(){

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://foras-sa.com/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var dataObj = {
                        titleAr: $('#titleAr').val(),
                        titleEN: $('#titleEN').val(),
                        educationalLevelID : $('#educationalLevelID').val(),
                        imgPath : $scope.personalImagepath,
                        status: $('#status').val(),
                        updateBy : $scope.forasAdmin._id,
                        historyType : 2,
                        hasChildreen : $scope.material.hasChildreen,
                        parentID : $scope.material.parentID,
                        isParent : 2
                        
                       
            
            
                    }
            
                    $http.put("/api/admin/Materials/" + id, dataObj)
                        .then(function (response) {
                            alert("تم تعديل المادة  بنجاح ");
                            $location.path('/subMaterials/'+ $scope.material.parentID, "_self");
            
                        }, function (response) {
                            //alert("Error !");
                        })
                    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }else{
                var dataObj = {
                    titleAr: $('#titleAr').val(),
                    titleEN: $('#titleEN').val(),
                    educationalLevelID : $('#educationalLevelID').val(),
                    imgPath : $scope.personalImagepath,
                    status: $('#status').val(),
                    updateBy : $scope.forasAdmin._id,
                    hasChildreen : $scope.material.hasChildreen,
                    historyType : 2,
                    isParent : 2,
                    parentID : $scope.material.parentID
                    
        
        
                }
        
                $http.put("/api/admin/Materials/" + id, dataObj)
                    .then(function (response) {
                        alert("تم تعديل المادة  بنجاح ");
                        $location.path('/subMaterials/' + $scope.material.parentID, "_self");
        
                    }, function (response) {
                        //alert("Error !");
                    })
            }
           
            
        }

  
})



.controller("educationalLevelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevel = response.data;
            var j = 0;
            $scope.educationalLevel.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/admin/educationalLevel")
            .then(function (response) {
                $scope.educationalLevel = response.data;
                var j = 0;
                $scope.educationalLevel.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/educationalLevel/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح  ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {};
        $scope.findData = function () {
            $http.post("/api/admin/findEducationalLevel", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.educationalLevel = response.data;
                    var j = 0;
                    $scope.educationalLevel.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }
        
})
.controller("educationalLevelHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/educationalLevelHistory")
        .then(function (response) {
            $scope.educationalLevel = response.data;
            
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addEducationalLevelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    $scope.addData = function () {
        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: 1,
            createBy : $scope.forasAdmin._id,
            historyType : 1
        }
        $http.post("/api/admin/educationalLevel/", dataObj)
            .then(function (response) {
                alert("تم اضافة المرحلة التعليمية  بنجاح ");
                $location.path('/educationalLevel', "_self");
            }, function (response) {
                //alert("Error !");
            })
    }
})
.controller("editEducationalLevelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/geteducationalLevelbyID?id=" + id)
        .then(function (response) {
            $scope.educationalLevel = response.data;

        }, function (response) {
            //alert("Error !");
        })


    $scope.editData = function () {

        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: $('#status').val(),
            updateBy : $scope.forasAdmin._id,
            historyType : 2
            

        }

        $http.put("/api/admin/educationalLevel/" + id, dataObj)
            .then(function (response) {
                alert("تم تعديل المرحلة التعليمية  بنجاح ");
                $location.path('/educationalLevel', "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})

.controller("childByParentCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $scope.parentID = id;
    $http.get("/api/admin/childByParent?userID=" + id)
        .then(function (response) {
            $scope.children = response.data;
                var j = 0;
                $scope.children.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(parentID){
            $http.get("/api/admin/childByParent?userID=" + parentID)
            .then(function (response) {
                $scope.children = response.data;
                var j = 0;
                $scope.children.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })

           
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/childByParent/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم حذف  الطفل بنجاح ");
                            $scope.getAllData($scope.parentID);
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {};
        $scope.findData = function () {
            $scope.searchObj.userID = $scope.parentID;
            $http.post("/api/admin/findChildByParent", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.children = response.data;
                    var j = 0;
                    $scope.children.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }

        

    $http.get("/api/admin/childAge")
    .then(function (response) {
        $scope.childAges = response.data;
        
    }, function (response) {
        //alert("Error !");
    })


$http.get("/api/admin/educationalLevel")
    .then(function (response) {
        $scope.educationalLevels = response.data;
        
    }, function (response) {
        //alert("Error !");
    })


})
.controller("childreenCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    
    
    $scope.searchObj = {};
        $scope.getAllData = function(){
            $http.post("/api/admin/findChildByParent", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.children = response.data;
                    var j = 0;
                    $scope.children.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })

           
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/childByParent/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم حذف  الطفل بنجاح ");
                            $scope.searchObj = {};
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
       
        $scope.findData = function () {
            $http.post("/api/admin/findChildByParent", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.children = response.data;
                    var j = 0;
                    $scope.children.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                  
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }

        $scope.findData();

    $http.get("/api/admin/childAge")
    .then(function (response) {
        $scope.childAges = response.data;
        
    }, function (response) {
        //alert("Error !");
    })


$http.get("/api/admin/educationalLevel")
    .then(function (response) {
        $scope.educationalLevels = response.data;
        
    }, function (response) {
        //alert("Error !");
    })


})
.controller("childByParentHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
  
    $http.get("/api/admin/userChildreenHistory")
        .then(function (response) {
            $scope.children = response.data;
        }, function (response) {
            //alert("Error !");
        })

    $http.get("/api/admin/childAge")
        .then(function (response) {
            $scope.childAge = response.data;
            
        }, function (response) {
            //alert("Error !");
        })


        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevel = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
       

})
.controller("addChildPCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.mazadAdmin = $cookieStore.get('mazadAdmin');
    var id = $routeParams.id;
    
    $http.get("/api/admin/users")
        .then(function (response) {
            $scope.users = response.data;
        }, function (response) {
            //alert("Error !");
        })
    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();

    $scope.getChildAges = function(){
        $http.get("/api/admin/childAge")
        .then(function (response) {
            $scope.childAges = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getChildAges();
    
   

    $scope.addData = function(){

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    firstname :  $('#firstname').val(),
                    surname : $('#surname').val(),
                    childAgeID : $('#childAgeID').val(),
                    educationalLevelID : $('#educationalLevelID').val(),
                    gender : $('#gender').val(),
                    status : 1,
                    userID : $('#userID').val(),
                    rate : $('#rate').val(),
                    imgPath : $scope.personalImagepath,
                    createBy : $scope.forasAdmin._id,
                    historyType : 1
                }
    
                $http.post("/api/admin/addChildren" , dataObj)
                .then(function (response) {
                    alert("تم اضافة  الطفل  بنجاح ");
                    $location.path('/childByParent/' + id , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }else{
            var dataObj = {
                firstname :  $('#firstname').val(),
                surname : $('#surname').val(),
                childAgeID : $('#childAgeID').val(),
                educationalLevelID : $('#educationalLevelID').val(),
                gender : $('#gender').val(),
                status : 1,
                userID : $('#userID').val(),
                rate : $('#rate').val(),
                createBy : $scope.forasAdmin._id,
                historyType : 1
            }

            $http.post("/api/admin/addChildren" , dataObj)
            .then(function (response) {
                alert("تم اضافة  الطفل  بنجاح ");
                $location.path('/childreen' , "_self");

            }, function (response) {
                //alert("Error !");
            })
        }
       
        
    }
})
.controller("addChildCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.mazadAdmin = $cookieStore.get('mazadAdmin');
    var id = $routeParams.id;
    
    $http.get("/api/admin/users")
        .then(function (response) {
            $scope.users = response.data;
        }, function (response) {
            //alert("Error !");
        })
    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();

    $scope.getChildAges = function(){
        $http.get("/api/admin/childAge")
        .then(function (response) {
            $scope.childAges = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getChildAges();
    
   

    $scope.addData = function(){

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    firstname :  $('#firstname').val(),
                    surname : $('#surname').val(),
                    childAgeID : $('#childAgeID').val(),
                    educationalLevelID : $('#educationalLevelID').val(),
                    gender : $('#gender').val(),
                    status : 1,
                    userID : id,
                    rate : $('#rate').val(),
                    imgPath : $scope.personalImagepath,
                    createBy : $scope.forasAdmin._id,
                    historyType : 1
                }
    
                $http.post("/api/admin/addChildren" , dataObj)
                .then(function (response) {
                    alert("تم اضافة  الطفل  بنجاح ");
                    $location.path('/childByParent/' + id , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }else{
            var dataObj = {
                firstname :  $('#firstname').val(),
                surname : $('#surname').val(),
                childAgeID : $('#childAgeID').val(),
                educationalLevelID : $('#educationalLevelID').val(),
                gender : $('#gender').val(),
                status : 1,
                userID : id,
                rate : $('#rate').val(),
                createBy : $scope.forasAdmin._id,
                historyType : 1
            }

            $http.post("/api/admin/addChildren" , dataObj)
            .then(function (response) {
                alert("تم اضافة  الطفل  بنجاح ");
                $location.path('/childByParent/' + id , "_self");

            }, function (response) {
                //alert("Error !");
            })
        }
       
        
    }
})
.controller("editChildCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.mazadAdmin = $cookieStore.get('mazadAdmin');
    var id = $routeParams.id;
    var type =  $routeParams.type;

    $http.get("/api/admin/userChildreen?id=" + id)
        .then(function (response) {
            $scope.child = response.data;
        }, function (response) {
            //alert("Error !");
        })
    
    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();

    $scope.getChildAges = function(){
        $http.get("/api/admin/childAge")
        .then(function (response) {
            $scope.childAges = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getChildAges();
    
   
  
    $scope.editData = function(){

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    firstname :  $('#firstname').val(),
                    surname : $('#surname').val(),
                    childAgeID : $('#childAgeID').val(),
                    educationalLevelID : $('#educationalLevelID').val(),
                    gender : $('#gender').val(),
                    status : $('#status').val(),
                    rate : $('#rate').val(),
                    imgPath : $scope.personalImagepath,
                    updateBy : $scope.forasAdmin._id,
                    historyType : 2
                }
    
                $http.put("/api/admin/childByParent/" + id , dataObj)
                .then(function (response) {
                    alert("تم تعديل  الطفل  بنجاح ");
                    if(type == 1){
                        $location.path('/childByParent/' + $scope.child.userID , "_self");

                    }
                    if(type == 2){
                        $location.path('/childreen/' , "_self");
                    }
    
                }, function (response) {
                    //alert("Error !");
                })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }else{
            var dataObj = {
                firstname :  $('#firstname').val(),
                surname : $('#surname').val(),
                childAgeID : $('#childAgeID').val(),
                educationalLevelID : $('#educationalLevelID').val(),
                gender : $('#gender').val(),
                status : $('#status').val(),
                rate : $('#rate').val(),
                updateBy : $scope.forasAdmin._id,
                historyType : 2
            }

            $http.put("/api/admin/childByParent/" + id , dataObj)
            .then(function (response) {
                alert("تم تعديل  الطفل  بنجاح ");
                if(type == 1){
                    $location.path('/childByParent/' + $scope.child.userID , "_self");

                }
                if(type == 2){
                    $location.path('/childreen/' , "_self");
                }

            }, function (response) {
                //alert("Error !");
            })
        }
       
        
    }
})

.controller("educationalMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.mazadAdmin = $cookieStore.get('mazadAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getMaterialbyEducational?educationalLevelID=" + id)
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("materialExercisesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.mazadAdmin = $cookieStore.get('mazadAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/materialExercises?id=" + id)
        .then(function (response) {
            $scope.exercises = response.data;
        }, function (response) {
            //alert("Error !");
        })
    

})


.controller("getExerciseByMaterialCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {

    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    var id2 = $routeParams.id2;
    $scope.id1  =id;
    $scope.id2 = id2;
    $http.get("/api/admin/getExerciseByMaterial?materialsID=" + id + "&educationalLevelID=" + id2)
        .then(function (response) {
            $scope.exercises = response.data;
            $scope.view = 3;
            var j = 0;
            $scope.exercises.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                    element.canPaste = false;
                    element.canShift = false;

                }
                
            });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/admin/getExerciseByMaterial?materialsID=" + id + "&educationalLevelID=" + id2)
            .then(function (response) {
                $scope.exercises = response.data;
                $scope.view = 3;
                var j = 0;
                $scope.exercises.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                        element.canPaste = false;
                        element.canShift = false;

                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/Exercise/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح  ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {}
        $scope.findData = function () {
            $scope.searchObj.materialsID = id;
            $scope.searchObj.educationalLevelID = id2;
            $http.post("/api/admin/findGetAllExercises", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.exercises = response.data;
                    var j = 0;
                    $scope.exercises.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                            element.canPaste = false;
                            element.canShift = false;
                        }
                        
                    });
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }

        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
        $http.get("/api/admin/getMaterialslChild")
        .then(function (response) {
            $scope.materials = response.data;
           
            
        }, function (response) {
            //alert("Error !");
        })
        $scope.editExercisesOrder = function(){
            $scope.view = 2;
        }
        $scope.replaceExercise = function(exercise){
            exercise.clicked = true;
            $scope.clicked2 = false;
            $scope.clicked = true;
            $scope.exercise1 = exercise;
        
            $scope.exercises.forEach((element , i) => {
                if(element.status != 3){
              
                    if(exercise._id !=  element._id){
                        element.canPaste = true;
                        
                    }
                    
                }
                
            });
            
        }
        $scope.pasteExercise = function(exercise){
           $scope.exercise2 = exercise;
            var tempID1 = $scope.exercise1.exerciseNumber;
            var tempID2 = $scope.exercise2.exerciseNumber;
            $scope.exercise1.exerciseNumber = tempID2;
            $scope.exercise2.exerciseNumber = tempID1;
            return;
            $scope.exercises.forEach((element , i) => {
                if(element.status != 3){
               
                   
                    if(exercise._id ==  element._id){
                        element = exercise;
                        console.log(element);
                        
                    }
                    // if(temp._id ==  element._id){
                    //     element = temp;
                        
                    // }
                    
                }
                
            });
        }
        // $scope.shiftExercise = function(exercise , index){
        //     console.log(exercisesLength);
        //     console.log(index);
        //     var exercisesLength = $scope.exercises.length -1 ;
        //     if(index  < exercisesLength){
        //         console.log(exercisesLength);
        //         console.log(index);
        //         $scope.exercises.forEach((element , i) => {
        //             if(i == index){
        //                 element.exerciseNumber = 
        //             }
        //         });
        //     }
        

        // }
        $scope.array_moveTest = function(oldIndex, exercise){
            $scope.clicked2 = true;
            $scope.clicked = false;
            exercise.clicked2 = true;
          
            $scope.oldIndex = oldIndex;
            $scope.exercises.forEach((element , i) => {
                if(element.status != 3){
              
                    if(exercise._id !=  element._id){
                        element.canShift = true;
                    }
                    
                }
                
            });
        }
        $scope.array_move = function(arr, old_index, new_index) {
            while (old_index < 0) {
                old_index += arr.length;
            }
            while (new_index < 0) {
                new_index += arr.length;
            }
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            console.log(arr); // for testing purposes
        };
            
        // returns [1, 3, 2]
        // console.log(array_move([1, 2, 3], -1, -2));
        $scope.saveNewArr = function(exercises){
           
            console.log(exercises);
            if($scope.clicked2 == true ){
                $scope.j = 0;
                $scope.exercises.forEach((element , i) => {
                    $scope.j ++;
                    // element.exerciseNumber = i;
                    var dataObj = {
                        exerciseNumber  : $scope.j
                    }
                   
                    $http.put("/api/admin/ExerciseSort/" + element._id ,dataObj )
                    .then(function (response) {
                        if($scope.exercises.length - 1 == i){
                            alert("تم التعديل بنجاح ");
                            // $location.path("/getExerciseByMaterial/" + id + "/" + id2 , "_self");
                            $scope.view  = 1;
                            $scope.getAllData();
                        }
                    
                        
                    }, function (response) {
                        //alert("Error !");
                    })
                });
            }
            if($scope.clicked == true ){
                $scope.j = 0;
                $scope.exercises.forEach((element , i) => {
                    $scope.j ++;
                    // element.exerciseNumber = i;
                    var dataObj = {
                        exerciseNumber  : element.exerciseNumber
                    }
                   
                    $http.put("/api/admin/ExerciseSort/" + element._id ,dataObj )
                    .then(function (response) {
                        if($scope.exercises.length - 1 == i){
                            alert("تم التعديل بنجاح ");
                            // $location.path("/getExerciseByMaterial/" + id + "/" + id2 , "_self");
                            $scope.view  = 1;
                            $scope.getAllData();
                        }
                    
                        
                    }, function (response) {
                        //alert("Error !");
                    })
                });
            }
           
        }
})
.controller("exercisesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/getAllExercises")
        .then(function (response) {
            $scope.exercises = response.data;
            var j = 0;
            $scope.exercises.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })

        $scope.getAllData = function(){
            $http.get("/api/admin/getAllExercises")
            .then(function (response) {
                $scope.exercises = response.data;
                var j = 0;
                $scope.exercises.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
        }

        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.status = 3;
                    dataObj.updateBy =  $scope.forasAdmin._id;
                    dataObj.historyType = 3;
        
                    $http.put("/api/admin/Exercise/" + ID, dataObj)
                        .then(function (response) {
        
                            alert("تم الحذف بنجاح  ");
                            $scope.getAllData();
        
                        }, function (response) {
        
                            //alert("Error !");
                        })
                } 
        }
        $scope.searchObj = {}
        $scope.findData = function () {
            $http.post("/api/admin/findGetAllExercises", $scope.searchObj)
                .then(function (response) {
                    $(".bd-example-modal-lg .btn-danger").click();
                    $scope.exercises = response.data;
                    var j = 0;
                    $scope.exercises.forEach((element , i) => {
                        if(element.status != 3){
                            j++;
                            element.index = j;
                        }
                        
                    });
                    $scope.searchObj = {};
                }, function (response) {
                    //alert("Error !");
                })
        }

        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
        $http.get("/api/admin/getMaterialslChild")
        .then(function (response) {
            $scope.materials = response.data;
           
            
        }, function (response) {
            //alert("Error !");
        })
})
.controller("exercisesHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/admin/exerciseHistory")
        .then(function (response) {
            $scope.exercises = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addExercisesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();

    $scope.getMaterialsByEducationalLevelID = function(){
        $http.get("/api/admin/getMaterialslChild" )
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    // $scope.getMatrials();
    $scope.getMaterialsByEducationalLevelID ()
   

    $scope.addData = function(){

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    materialsID :  $('#materialsID').val(),
                    educationalLevelID :  $('#educationalLevelID').val(),
                    descriptionAR : $('#descriptionAR').val().trim(),
                    descriptionEN : $('#descriptionEN').val().trim(),
                    targetAR : $('#targetAR').val().trim(),
                    targetEN : $('#targetEN').val().trim(),
                    pdfFile : $scope.personalImagepath,
                    status : 1,
                    createBy : $scope.forasAdmin._id,
                    historyType : 1
                }
    
                $http.post("/api/admin/addExercise" , dataObj)
                .then(function (response) {
                    alert("تم اضافة  التمرين  بنجاح ");
                    $location.path('/exercises/' , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }
       
        
    }
})

.controller("addExerciseByEducationalCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    var id2 = $routeParams.id2;
    $scope.getEducationalLevels = function(){
        $http.get("/api/admin/educationalLevel")
        .then(function (response) {
            $scope.educationalLevels = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.getEducationalLevels();

    $scope.getMaterialsByEducationalLevelID = function(){
        $http.get("/api/admin/getMaterialslChild" )
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
    }
    // $scope.getMatrials();
    $scope.getMaterialsByEducationalLevelID ()
   

    $scope.addData = function(){

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://foras-sa.com/api/user/uploadFile",
                method: "POST",
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                processData: false,
            }).then(function (response) {
                $scope.personalImagepath = response.data;
                var dataObj = {
                    materialsID : id,
                    educationalLevelID :  id2,
                    descriptionAR : $('#descriptionAR').val().trim(),
                    descriptionEN : $('#descriptionEN').val().trim(),
                    targetAR : $('#targetAR').val().trim(),
                    targetEN : $('#targetEN').val().trim(),
                    pdfFile : $scope.personalImagepath,
                    status : 1,
                    createBy : $scope.forasAdmin._id,
                    historyType : 1
                }
    
                $http.post("/api/admin/addExercise" , dataObj)
                .then(function (response) {
                    alert("تم اضافة  التمرين  بنجاح ");
                    $location.path('/getExerciseByMaterial/' + id +'/' + id2 , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
                
            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }
       
        
    }
})
.controller("editExercisesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getExerciseByID?id=" + id)
        .then(function (response) {
            $scope.exercise = response.data;
            if($scope.exercise.pdfFile){
                $scope.personalImagepath = $scope.exercise.pdfFile;

            }
            

        }, function (response) {
            //alert("Error !");
        })


        $('textarea').each(function(){
                $(this).val($(this).val().trim());
             }
        );
        $scope.getEducationalLevels = function(){
            $http.get("/api/admin/educationalLevel")
            .then(function (response) {
                $scope.educationalLevels = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getEducationalLevels();
    
        $scope.getMatrials = function(){
            $http.get("/api/admin/Materials")
            .then(function (response) {
                $scope.materials = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getMatrials();

        $scope.editData = function(){

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://foras-sa.com/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var descriptionAR = $('#descriptionAR').val().trim();
                    var descriptionEN = $('#descriptionEN').val().trim();
                    var targetAR = $('#targetAR').val().trim();
                    var targetEN = $('#targetEN').val().trim();
                    var dataObj = {
                        materialsID :  $scope.exercise.materialsID,
                        educationalLevelID :  $scope.exercise.educationalLevelID,
                        descriptionAR : descriptionAR,
                        descriptionEN : descriptionEN,
                        targetAR : targetAR ,
                        targetEN :targetEN,
                        pdfFile : $scope.personalImagepath,
                        status :   1,
                        updateBy : $scope.forasAdmin._id,
                        historyType : 2
                    }
        
                    $http.put("/api/admin/Exercise/" + id , dataObj)
                    .then(function (response) {
                        alert("تم تعديل  التمرين  بنجاح ");
                        $location.path('/exercises/' , "_self");
        
                    }, function (response) {
                        //alert("Error !");
                    })
                    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }else{
                var descriptionAR = $('#descriptionAR').val().trim();
                var descriptionEN = $('#descriptionEN').val().trim();
                var targetAR = $('#targetAR').val().trim();
                var targetEN = $('#targetEN').val().trim();
                var dataObj = {
                    materialsID :  $scope.exercise.materialsID,
                    educationalLevelID :  $scope.exercise.educationalLevelID,
                    descriptionAR : descriptionAR,
                    descriptionEN : descriptionEN,
                    targetAR : targetAR,
                    targetEN : targetEN,
                    status : 1,
                    pdfFile : $scope.personalImagepath,
                    updateBy : $scope.forasAdmin._id,
                    historyType : 2
                }
    
                $http.put("/api/admin/Exercise/" + id , dataObj)
                .then(function (response) {
                    alert("تم تعديل  التمرين  بنجاح ");
                    $location.path('/exercises/' , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
            }
           
            
        }
})

.controller("editExerciseByEducationalCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/admin/getExerciseByID?id=" + id)
        .then(function (response) {
            $scope.exercise = response.data;
            if($scope.exercise.pdfFile){
                $scope.personalImagepath = $scope.exercise.pdfFile;

            }
            

        }, function (response) {
            //alert("Error !");
        })


        $('textarea').each(function(){
                $(this).val($(this).val().trim());
             }
        );
        $scope.getEducationalLevels = function(){
            $http.get("/api/admin/educationalLevel")
            .then(function (response) {
                $scope.educationalLevels = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getEducationalLevels();
    
        $scope.getMatrials = function(){
            $http.get("/api/admin/Materials")
            .then(function (response) {
                $scope.materials = response.data;
            }, function (response) {
                //alert("Error !");
            })
        }
        $scope.getMatrials();

        $scope.editData = function(){

            if ($('#personalImage').val()) {
                var formData = new FormData();
                var fileLogo = $('#personalImage')[0];
                formData.append('file', fileLogo.files[0]);
                $http({
                    url: "http://foras-sa.com/api/user/uploadFile",
                    method: "POST",
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    },
                    processData: false,
                }).then(function (response) {
                    $scope.personalImagepath = response.data;
                    var descriptionAR = $('#descriptionAR').val().trim();
                    var descriptionEN = $('#descriptionEN').val().trim();
                    var targetAR = $('#targetAR').val().trim();
                    var targetEN = $('#targetEN').val().trim();
                    var dataObj = {
                        materialsID :  $scope.exercise.materialsID,
                        educationalLevelID :  $scope.exercise.educationalLevelID,
                        descriptionAR : descriptionAR,
                        descriptionEN : descriptionEN,
                        targetAR : targetAR ,
                        targetEN :targetEN,
                        pdfFile : $scope.personalImagepath,
                        status : 1,
                        updateBy : $scope.forasAdmin._id,
                        historyType : 2
                    }
        
                    $http.put("/api/admin/Exercise/" + id , dataObj)
                    .then(function (response) {
                        alert("تم تعديل  التمرين  بنجاح ");
                        $location.path('/getExerciseByMaterial/' +$scope.exercise.materialsID +'/' + $scope.exercise.educationalLevelID , "_self");
        
                    }, function (response) {
                        //alert("Error !");
                    })
                    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }else{
                var descriptionAR = $('#descriptionAR').val().trim();
                var descriptionEN = $('#descriptionEN').val().trim();
                var targetAR = $('#targetAR').val().trim();
                var targetEN = $('#targetEN').val().trim();
                var dataObj = {
                    materialsID :  $scope.exercise.materialsID,
                    educationalLevelID :  $scope.exercise.educationalLevelID,
                    descriptionAR : descriptionAR,
                    descriptionEN : descriptionEN,
                    targetAR : targetAR,
                    targetEN : targetEN,
                    pdfFile : $scope.personalImagepath,
                    status : 1,
                    updateBy : $scope.forasAdmin._id,
                    historyType : 2
                }
    
                $http.put("/api/admin/Exercise/" + id , dataObj)
                .then(function (response) {
                    alert("تم تعديل  التمرين  بنجاح ");
                    $location.path('/getExerciseByMaterial/' +$scope.exercise.materialsID +'/' + $scope.exercise.educationalLevelID , "_self");
    
                }, function (response) {
                    //alert("Error !");
                })
            }
           
            
        }
})





.controller("addFormCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    
})
.controller("addForm2Ctrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    
})

.controller("addForm3Ctrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    
})


.controller("graduationUniversityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllGraduationUniversity")
    .then(function (response) {
        $scope.graduationUniversity = response.data;
        var j = 0;
        $scope.graduationUniversity.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/admin/getAllGraduationUniversity")
        .then(function (response) {
            $scope.graduationUniversity = response.data;
            var j = 0;
            $scope.graduationUniversity.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/employee/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addGraduationUniversityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/addGraduationUniversity" , dataObj)
        .then(function (response) {
            alert("تم اضافة الجامعة   بنجاح ");
            $location.path('/graduationUniversity' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editGraduationUniversityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/graduationUniversitybyID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/graduationUniversity/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل الجامعة  بنجاح ");
                $location.path('/graduationUniversity' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})







.controller("nationalityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllNationality")
    .then(function (response) {
        $scope.nationality = response.data;
        var j = 0;
        $scope.nationality.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })





    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllNationality")
        .then(function (response) {
            $scope.nationality = response.data;
            var j = 0;
            $scope.nationality.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/nationality/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addNationalityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/addNationality" , dataObj)
        .then(function (response) {
            alert("تم اضافة الجنسية   بنجاح ");
            $location.path('/nationality' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editNationalityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/nationalityByID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/nationality/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل الجنسية  بنجاح ");
                $location.path('/nationality' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})






.controller("scientificSpCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllScientificSps")
    .then(function (response) {
        $scope.nationality = response.data;
        var j = 0;
        $scope.nationality.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllScientificSps")
        .then(function (response) {
            $scope.nationality = response.data;
            var j = 0;
            $scope.nationality.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/ScientificSp/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addScientificSpCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/addScientificSp" , dataObj)
        .then(function (response) {
            alert("تم اضافة التخصص العلمى   بنجاح ");
            $location.path('/scientificSp' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editScientificSpCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/scientificSpByID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/ScientificSp/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل التخصص العلمى  بنجاح ");
                $location.path('/scientificSp' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})





.controller("cityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllcities")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllcities")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/city/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addCityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/city" , dataObj)
        .then(function (response) {
            alert("تم اضافة المدينة   بنجاح ");
            $location.path('/city' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editCityCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/citybyID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/city/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل المدينة  بنجاح ");
                $location.path('/city' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})



.controller("experienceFieldCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllexperience")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllexperience")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/experience/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addExperienceFieldCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/experience" , dataObj)
        .then(function (response) {
            alert("تم اضافة قطاع الخبرة   بنجاح ");
            $location.path('/experienceField' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})



.controller("specializedCertificatesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/specializedCertificates")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/specializedCertificates")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/specializedCertificates/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/specializedCertificates/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addSpecializedCertificatesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/specializedCertificates" , dataObj)
        .then(function (response) {
            alert("تم اضافة الشهادة المتخصصة بنجاح ");
            $location.path('/specializedCertificates' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editSpecializedCertificatesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/specializedCertificatesByID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/specializedCertificates/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل الشهادة المتخصصة  بنجاح ");
                $location.path('/specializedCertificates' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})

.controller("editExperienceFieldCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/experiencebyID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/experience/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل قطاع الخبرة  بنجاح ");
                $location.path('/experienceField' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})




.controller("experienceYearsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllyearsExperience")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllyearsExperience")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/yearsExperience/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addExperienceYearsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/yearsExperience" , dataObj)
        .then(function (response) {
            alert("تم اضافة قطاع الخبرة   بنجاح ");
            $location.path('/experienceYears' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editExperienceYearsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/yearsExperiencebyID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/yearsExperience/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل قطاع الخبرة  بنجاح ");
                $location.path('/experienceYears' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})







.controller("languageCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAlllanguage")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAlllanguage")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }


    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/language/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("addLanguageCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            
        }
        $http.post("/api/adminApi/language" , dataObj)
        .then(function (response) {
            alert("تم اضافة اللغة   بنجاح ");
            $location.path('/language' , "_self")
        }, function (response) {
            //alert("Error !");
        })
    }
})

.controller("editLanguageCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/languageByID?id=" + id)
        .then(function (response) {
            $scope.dataObj = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
   

    $scope.editData = function(){
       
            var dataObj = {
                titleAr :  $('#titleAr').val(),
                titleEN : $('#titleEN').val()

            }

            $http.put("/api/adminApi/language/" + id ,  dataObj)
            .then(function (response) {
                alert("تم تعديل اللغة   بنجاح ");
                $location.path('/language' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})





.controller("recruitmentsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/getAllgeneralData")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            if(element.gender == 1){
                element.gendera = "Male"
            }
            if(element.gender == 2){
                element.gendera = "Female"
            }

            if(element.socialStatus == 1){
                element.socialStatusa = "Married"
            }
            if(element.socialStatus == 2){
                element.socialStatusa = "Single"
            }
            if(element.specialNeeds == 1){
                element.specialNeedsa = "Yes"
            }
            if(element.specialNeeds == 2){
                element.specialNeedsa = "No"
            }

            if(element.scientificDegree == 1){
                element.scientificDegreea = "diploma"
            }
            if(element.scientificDegree == 2){
                element.scientificDegreea = "secondary"
            }
            if(element.scientificDegree == 3){
                element.scientificDegreea = "Primary"
            }
            if(element.scientificDegree == 4){
                element.scientificDegreea = "middle"
            }
            if(element.scientificDegree == 5){
                element.scientificDegreea = "University"
            }
            if(element.scientificDegree == 6){
                element.scientificDegreea = "M.A."
            }
            if(element.scientificDegree == 7){
                element.scientificDegreea = "Ph.D "
            }
           

            if(element.degree == 1){
                element.degreea = "Pass"
            }
            if(element.degree == 2){
                element.degreea = "Good"
            }
            if(element.degree == 3){
                element.degreea = "Very Good"
            }
            if(element.degree == 4){
                element.degreea = "Excellent"
            }
            

            if(element.isWorked == 1){
                element.isWorkeda = "Yes"
            }
            if(element.isWorked == 2){
                element.isWorkeda = "No"
            }
            
            $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + element._id)
            .then(function (response) {
                $scope.lagss = response.data;
                // if($scope.lagss.length == 0){
                //     element.english = 1;
                // }
                $scope.lagss.forEach((elemento) => {
                    if(elemento.status == 1){
                        if(elemento.languageID._id == '5e722ff48b043b64ad7a77d5'){
                            element.english = elemento.level;
                            
                        }
                    }
                    
                });
            }, function (response) {
                //alert("Error !");
            })
            
            
        });
    }, function (response) {
        //alert("Error !");
    })
    setTimeout(() => {
        console.log($scope.allData);
    }, 600);

    $scope.getAllData = function(){
        $http.get("/api/adminApi/getAllgeneralData")
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {


                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                if(element.gender == 1){
                    element.gendera = "Male"
                }
                if(element.gender == 2){
                    element.gendera = "Female"
                }
    
                if(element.socialStatus == 1){
                    element.socialStatusa = "Married"
                }
                if(element.socialStatus == 2){
                    element.socialStatusa = "Single"
                }
                if(element.specialNeeds == 1){
                    element.specialNeedsa = "Yes"
                }
                if(element.specialNeeds == 2){
                    element.specialNeedsa = "No"
                }
    
                if(element.scientificDegree == 1){
                    element.scientificDegreea = "diploma"
                }
                if(element.scientificDegree == 2){
                    element.scientificDegreea = "secondary"
                }
                if(element.scientificDegree == 3){
                    element.scientificDegreea = "Primary"
                }
                if(element.scientificDegree == 4){
                    element.scientificDegreea = "middle"
                }
                if(element.scientificDegree == 5){
                    element.scientificDegreea = "University"
                }
                if(element.scientificDegree == 6){
                    element.scientificDegreea = "M.A."
                }
                if(element.scientificDegree == 7){
                    element.scientificDegreea = "Ph.D "
                }
               
    
                if(element.degree == 1){
                    element.degreea = "Pass"
                }
                if(element.degree == 2){
                    element.degreea = "Good"
                }
                if(element.degree == 3){
                    element.degreea = "Very Good"
                }
                if(element.degree == 4){
                    element.degreea = "Excellent"
                }
                if(element.isWorked == 1){
                    element.isWorkeda = "Yes"
                }
                if(element.isWorked == 2){
                    element.isWorkeda = "No"
                }
                $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + element._id)
                .then(function (response) {
                     $scope.lagss = response.data;
                    // if($scope.lagss.length == 0){
                    //     element.english = 1;
                    // }
                    $scope.lagss.forEach((elemento) => {
                        if(elemento.status == 1){
                            if(elemento.languageID._id == '5e722ff48b043b64ad7a77d5'){
                                element.english = elemento.level;
                                
                            }
                        }
                        
                    });
                }, function (response) {
                    //alert("Error !");
                })


                
            });
        }, function (response) {
            //alert("Error !");
        })
    }

    



    $scope.exportExcel = function () {
        

        alasql('SELECT * INTO XLSX("Order.xlsx",{headers:true}) \
       FROM HTML("#requestdiv",{headers:true})');




    }
    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
              
               
                dataObj.status = status;
               
                
    
                $http.put("/api/adminApi/generalData/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.searchObj = {};
    $scope.findData = function () {
        $http.post("/api/adminApi/findData", $scope.searchObj)
            .then(function (response) {
             
              
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.allData = response.data;
                var j = 0;
                $scope.allData.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    if(element.gender == 1){
                        element.gendera = "Male"
                    }
                    if(element.gender == 2){
                        element.gendera = "Female"
                    }
        
                    if(element.socialStatus == 1){
                        element.socialStatusa = "Married"
                    }
                    if(element.socialStatus == 2){
                        element.socialStatusa = "Single"
                    }
                    if(element.specialNeeds == 1){
                        element.specialNeedsa = "Yes"
                    }
                    if(element.specialNeeds == 2){
                        element.specialNeedsa = "No"
                    }
        
                    if(element.scientificDegree == 1){
                        element.scientificDegreea = "diploma"
                    }
                    if(element.scientificDegree == 2){
                        element.scientificDegreea = "secondary"
                    }
                    if(element.scientificDegree == 3){
                        element.scientificDegreea = "Primary"
                    }
                    if(element.scientificDegree == 4){
                        element.scientificDegreea = "middle"
                    }
                    if(element.scientificDegree == 5){
                        element.scientificDegreea = "University"
                    }
                    if(element.scientificDegree == 6){
                        element.scientificDegreea = "M.A."
                    }
                    if(element.scientificDegree == 7){
                        element.scientificDegreea = "Ph.D "
                    }
                   
        
                    if(element.degree == 1){
                        element.degreea = "Pass"
                    }
                    if(element.degree == 2){
                        element.degreea = "Good"
                    }
                    if(element.degree == 3){
                        element.degreea = "Very Good"
                    }
                    if(element.degree == 4){
                        element.degreea = "Excellent"
                    }
                    
                    if(element.isWorked == 1){
                        element.isWorkeda = "Yes"
                    }
                    if(element.isWorked == 2){
                        element.isWorkeda = "No"
                    }
                    $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + element._id)
                    .then(function (response) {
                         $scope.lagss = response.data;
                        // if($scope.lagss.length == 0){
                        //     element.english = 1;
                        // }
                        $scope.lagss.forEach((elemento) => {
                            if(elemento.status == 1){
                                if(elemento.languageID._id == '5e722ff48b043b64ad7a77d5'){
                                    element.english = elemento.level;
                                    
                                }
                            }
                            
                        });
                    }, function (response) {
                        //alert("Error !");
                    })
                    

                });
                // $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }










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
            if(element.status == 1){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })




        

        $scope.changeLangDegree = function(obj , degree){
            obj.level = degree;
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
                    $rootScope.alertMessageLang("اللغة مضافة بالفعل ","language already added" , $rootScope.qalamLang );

                   
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
            mostExperienceID: {ar: 'يوجد خطأ في  الاكثؤ خبرة ' , en : 'Error in most Experience' },
            yearsExperienceID: {ar: 'يوجد خطأ في سنوات الخبرة ' , en : 'Error in yearsExperienceID' },
            languageID: {ar: 'يوجد خطأ في اللغة ' , en : 'Error in language ' },
            cv: {ar: 'يوجد خطأ في السى فى ' , en : 'Error in cv' },
            otherInformation: {ar: 'يوجد خطأ في المعلومات الاخرى ' , en : 'Error in other Information' },
            description: {ar: 'يوجد خطأ في الوصف ' , en : 'Error in description' },
            degree : {ar: 'يوجد خطأ في الدرجة ' , en : 'Error in degree' },

        }
})


.controller("langLevelByDataCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;
    $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + id)
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })


    
    $scope.getAllData = function(){
        $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + id)
        .then(function (response) {
            $scope.allData = response.data;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.changeLangDegree = function(obj){
        
        var objnew = {
            level : obj.level
        }
        $http.put("/api/adminApi/idLevel/" + obj._id ,objnew )
        .then(function (response) {
            $scope.getAllData();
           
                
            });

    }

    

    $scope.exportExcel = function () {
        alasql('SELECT * INTO XLSX("exportToExcel.xlsx",{headers:true}) \
       FROM HTML("#requestdiv",{headers:true})');

    }
    
})


.controller("addCandidateCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    

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
                if(element.status == 1){
                    j++;
                    element.index = j;
                    element.exist = true;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })




        

        $scope.changeLangDegree = function(obj , degree){
            obj.level = degree;
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
                    $rootScope.alertMessageLang("اللغة مضافة بالفعل ","language already added" , $rootScope.qalamLang );

                   
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
            mostExperienceID: {ar: 'يوجد خطأ في  الاكثؤ خبرة ' , en : 'Error in most Experience' },
            yearsExperienceID: {ar: 'يوجد خطأ في سنوات الخبرة ' , en : 'Error in yearsExperienceID' },
            languageID: {ar: 'يوجد خطأ في اللغة ' , en : 'Error in language ' },
            cv: {ar: 'يوجد خطأ في السى فى ' , en : 'Error in cv' },
            otherInformation: {ar: 'يوجد خطأ في المعلومات الاخرى ' , en : 'Error in other Information' },
            description: {ar: 'يوجد خطأ في الوصف ' , en : 'Error in description' },
            degree : {ar: 'يوجد خطأ في الدرجة ' , en : 'Error in degree' },

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
                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      
        
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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val() || "",
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
        
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
        
                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
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
                                        $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
                                        $location.path("/recruitments" , "_self");
                                    }
                                   
                                }, function (response) {
                                    //alert("Error !");
                                })
                            });
                        }else{
                            $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                            $location.path("/recruitments" , "_self");
                        }
                       
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }

            if (!$('#personalImage').val()) {

                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      
        
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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val() || "",
                        specializedCertificatesID: $('#specializedCertificatesID').val(),
                        experienceID: $('#experienceID').val(),
                        mostExperienceID: $('#mostExperienceID').val(),
                        yearsExperienceID: $('#yearsExperienceID').val(),
                        languageID: $('#languageID').val(),
                       
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
        
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
        
                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
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
                                        $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
                                        $location.path("/recruitments" , "_self");
                                    }
                                   
                                }, function (response) {
                                    //alert("Error !");
                                })
                            });
                        }else{
                            $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                            $location.path("/recruitments" , "_self");
                        }
                       
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
               
            }

            
          
        }
 


    
    
})


.controller("addCandidateExcelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    

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




        

        $scope.changeLangDegree = function(obj , degree){
            obj.level = degree;
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
                    $rootScope.alertMessageLang("اللغة مضافة بالفعل ","language already added" , $rootScope.qalamLang );

                   
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
            mostExperienceID: {ar: 'يوجد خطأ في  الاكثؤ خبرة ' , en : 'Error in most Experience' },
            yearsExperienceID: {ar: 'يوجد خطأ في سنوات الخبرة ' , en : 'Error in yearsExperienceID' },
            languageID: {ar: 'يوجد خطأ في اللغة ' , en : 'Error in language ' },
            cv: {ar: 'يوجد خطأ في السى فى ' , en : 'Error in cv' },
            otherInformation: {ar: 'يوجد خطأ في المعلومات الاخرى ' , en : 'Error in other Information' },
            description: {ar: 'يوجد خطأ في الوصف ' , en : 'Error in description' },
            degree : {ar: 'يوجد خطأ في الدرجة ' , en : 'Error in degree' },

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
                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      
        
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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val(),
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
        
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
        
                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
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
                                        $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
                                        $location.path("/recruitments" , "_self");
                                    }
                                   
                                }, function (response) {
                                    //alert("Error !");
                                })
                            });
                        }else{
                            $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                            $location.path("/recruitments" , "_self");
                        }
                       
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }

            if (!$('#personalImage').val()) {

                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      
        
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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val(),
                        experienceID: $('#experienceID').val(),
                        mostExperienceID: $('#mostExperienceID').val(),
                        yearsExperienceID: $('#yearsExperienceID').val(),
                        languageID: $('#languageID').val(),
                       
                        otherInformation: $('#otherInformation').val() || 2,
                        // description: $('#description').val(),
                        degree :  $('#degree').val()
                        
                    }
                    console.log(dataObj);
        
                    if( !$('#firstName').val()){
                        $scope.current_error_ar = $scope.error.firstName.ar;
                        $scope.current_error_en = $scope.error.firstName.en;
        
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
        
                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
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
                                        $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
                                        $location.path("/recruitments" , "_self");
                                    }
                                   
                                }, function (response) {
                                    //alert("Error !");
                                })
                            });
                        }else{
                            $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                            $location.path("/recruitments" , "_self");
                        }
                       
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
               
            }

            
          
        }
 


    
    
})


.controller("importExcelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $scope.qalamLang = $cookieStore.get('qalamLang');

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
                if(element.status == 1){
                    j++;
                    element.index = j;
                    element.exist = true;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })


    
    console.log($scope.forasAdmin);
    $(function () {
        $("#input").on("change", function () {
            var excelFile,
                fileReader = new FileReader();

            $("#result").hide();

            fileReader.onload = function (e) {
                var buffer = new Uint8Array(fileReader.result);

                $.ig.excel.Workbook.load(buffer, function (workbook) {
                    var column, row, newRow, cellValue, columnIndex, i,
                        worksheet = workbook.worksheets(0),
                        columnsNumber = 0,
                        gridColumns = [],
                        data = [],
                        worksheetRowsCount;

                    // Both the columns and rows in the worksheet are lazily created and because of this most of the time worksheet.columns().count() will return 0
                    // So to get the number of columns we read the values in the first row and count. When value is null we stop counting columns:
                    while (worksheet.rows(0).getCellValue(columnsNumber)) {
                        columnsNumber++;
                    }

                    // Iterating through cells in first row and use the cell text as key and header text for the grid columns
                    for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                        column = worksheet.rows(0).getCellText(columnIndex);
                        gridColumns.push({ headerText: column, key: column });
                    }

                    // We start iterating from 1, because we already read the first row to build the gridColumns array above
                    // We use each cell value and add it to json array, which will be used as dataSource for the grid
                    $scope.excelSheetArr = [];
                    $scope.excelErrors = [];
                    for (i = 1, worksheetRowsCount = worksheet.rows().count() ; i < worksheetRowsCount; i++) {
                        var dataObj = {};
                        row = worksheet.rows(i);
                        var newRow = {};
                        for (columnIndex = 0; columnIndex < columnsNumber; columnIndex++) {
                            cellValue = row.getCellText(columnIndex);
                            if(columnIndex  == 6 ){
                                $scope.cellValue6Exist = false;
                                $scope.nationality.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue6Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.nationality.length - 1 == j && $scope.cellValue6Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }


                            if(columnIndex  == 8 ){
                                $scope.cellValue8Exist = false;
                                $scope.cities.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue8Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.cities.length - 1 == j && $scope.cellValue8Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            if(columnIndex  == 12 ){
                                $scope.cellValue12Exist = false;
                                $scope.scientificSps.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue12Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.scientificSps.length - 1 == j && $scope.cellValue12Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }
                            if(columnIndex  == 13 ){
                                $scope.cellValue13Exist = false;
                                $scope.graduationUniversity.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue13Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.graduationUniversity.length - 1 == j && $scope.cellValue13Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            if(columnIndex  == 15 ){
                                $scope.cellValue15Exist = false;
                                $scope.experience.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue15Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.experience.length - 1 == j && $scope.cellValue15Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }
                            if(columnIndex  == 16 ){
                                $scope.cellValue16Exist = false;
                                $scope.experience.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue16Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.experience.length - 1 == j && $scope.cellValue16Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            if(columnIndex  == 17 ){
                                $scope.cellValue17Exist = false;
                                $scope.yearsExperience.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue17Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.yearsExperience.length - 1 == j && $scope.cellValue17Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            if(columnIndex  == 21 ){
                                $scope.cellValue21Exist = false;
                                $scope.languages.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue21Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.languages.length - 1 == j && $scope.cellValue21Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            if(columnIndex  == 22 ){
                                $scope.cellValue22Exist = false;
                                $scope.specializedCertificates.forEach((element , j) => {
                                    
                                        if(element.titleAr == cellValue || element.titleEN == cellValue){
                                            $scope.cellValue22Exist = true;
                                            cellValue = element._id;

                                        }
                                        if($scope.specializedCertificates.length - 1 == j && $scope.cellValue22Exist == false){
                                            $scope.excelErrors.push({row : i , column : columnIndex });
                                            console.log( "$scope.excelErrors");
                                            console.log( $scope.excelErrors);
                                        }
                            
                                    })
                            }

                            console.log(cellValue);
                           
                            newRow[gridColumns[columnIndex].key] = cellValue;
                        }

                        data.push(newRow);
                        $scope.allData = data;
                        console.log(data);
                    }

                    // we can also skip passing the gridColumns use autoGenerateColumns = true, or modify the gridColumns array
                    createGrid(data, gridColumns);
                }, function (error) {
                    $("#result").text("The excel file is corrupted.");
                    $("#result").show(1000);
                });
            }

            if (this.files.length > 0) {
                excelFile = this.files[0];
                if (excelFile.type === "application/vnd.ms-excel" || excelFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || (excelFile.type === "" && (excelFile.name.endsWith("xls") || excelFile.name.endsWith("xlsx")))) {
                    fileReader.readAsArrayBuffer(excelFile);
                } else {
                    $("#result").text("The format of the file you have selected is not supported. Please select a valid Excel file ('.xls, *.xlsx').");
                    $("#result").show(1000);
                }
            }

        })
    });

    function createGrid(data, gridColumns) {
        if ($("#grid1").data("igGrid") !== undefined) {
            $("#grid1").igGrid("destroy");
        }

        $("#grid1").igGrid({
            columns: gridColumns,
            autoGenerateColumns: true,
            dataSource: data,
            width: "100%"
        });
    }

        
        $scope.postCV = function(allData){
                $scope.successedCount = 0;
                if($scope.excelErrors.length > 0 ){
                    var err = '';
                    $scope.excelErrors.forEach((element , e) => {
                        err += "يوجد خطأ فى السطر رقم " + element.row + "و العمود " + element.column + "\n";
                        if(e == $scope.excelErrors.length - 1){
                            alert(err);
                        }
                    });
                    
                    return;
                }
                $scope.failedCount = 0;
                allData.forEach((dataObj , d) => {
                    dataObj.birthday = new Date(dataObj.birthday);
                    dataObj.otherInformation = 1;
                    $http.post("/api/adminApi/generalData" , dataObj)
                    .then(function (response) {
                        $scope.successedCount +=1;
                        console.log(response.data);
                        if( d == allData.length - 1){
                            // if($scope.failedCount ==  0  && $scope.successedCount > 0){
                                alert("تم رفع عدد " + $scope.successedCount + "\n" +"تم فشل رفع  عدد " + $scope.failedCount  )
                            // }
                            // if($scope.failedCount >  0  && $scope.successedCount > 0){
                            //     alert("تم رفع عدد " + $scope.successedCount + "\n" +"تم فشل رفع  عدد " + $scope.failedCount  )
                            // }
                            // if($scope.failedCount >  0  && $scope.successedCount == 0){
                            //     alert("تم رفع عدد " + $scope.successedCount + "\n" +"تم فشل رفع  عدد " + $scope.failedCount  )
                            // }
                            // if($scope.failedCount ==  0  && $scope.successedCount > 0){
                            //     alert("تم رفع عدد " + $scope.successedCount + "\n" +"تم فشل رفع  عدد " + $scope.failedCount  )
                            // }
                        }
                       
                    }, function (response) {
                        $scope.failedCount +=1;
                        
                        //alert("Error !");
                    })


                   
                });
               
       




            // if ($('#personalImage').val()) {
            //     var formData = new FormData();
            //     var fileLogo = $('#personalImage')[0];
            //     formData.append('file', fileLogo.files[0]);
            //     $http({
            //         url: "http://157.230.25.241/api/user/uploadFile",
            //         method: "POST",
            //         data: formData,
            //         headers: {
            //             'Content-Type': undefined
            //         },
            //         processData: false,
            //     }).then(function (response) {
            //         $scope.personalImagepath = response.data;
            //         $scope.gender = $("input[name='gender']:checked").val();
            //         $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
            //         $scope.scientificDegree = $('#scientificDegree').val();      
        
            //         var dataObj = {
            //             firstName : $('#firstName').val(),
            //             lastName: $('#lastName').val(),
            //             birthday: $('#birthday').val(),
            //             socialStatus: $('#socialStatus').val(),
            //             phoneNumber: $('#phoneNumber').val(),
            //             email: $('#email').val(),
            //             nationalityID: $('#nationalityID').val(),
            //             IDNumber: $('#IDNumber').val(),
            //             cityID: $('#cityID').val(),
            //             neighborhood: $('#neighborhood').val(),
            //             gender:     $scope.gender,
            //             specialNeeds: $scope.specialNeeds,
            //             scientificDegree: $scope.scientificDegree,
            //             scientificSpecializationID: $('#scientificSpecializationID').val(),
            //             graduationUniversityID: $('#graduationUniversityID').val(),
            //             specializedCertificates: $('#specializedCertificates').val(),
            //             experienceID: $('#experienceID').val(),
            //             mostExperienceID: $('#mostExperienceID').val(),
            //             yearsExperienceID: $('#yearsExperienceID').val(),
            //             languageID: $('#languageID').val(),
            //             cv: $scope.personalImagepath,
            //             otherInformation: $('#otherInformation').val() || 2,
            //             // description: $('#description').val(),
            //             degree :  $('#degree').val()
                        
            //         }
            //         console.log(dataObj);
        
            //         if( !$('#firstName').val()){
            //             $scope.current_error_ar = $scope.error.firstName.ar;
            //             $scope.current_error_en = $scope.error.firstName.en;
        
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
            //             return;
            //         }
            //         if( !$('#lastName').val()){
            //             $scope.current_error_ar = $scope.error.lastName.ar;
            //             $scope.current_error_en = $scope.error.lastName.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#phoneNumber').val()){
            //             $scope.current_error_ar = $scope.error.phoneNumber.ar;
            //             $scope.current_error_en = $scope.error.phoneNumber.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#email').val()){
            //             $scope.current_error_ar = $scope.error.email.ar;
            //             $scope.current_error_en = $scope.error.email.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#nationalityID').val()){
            //             $scope.current_error_ar = $scope.error.nationalityID.ar;
            //             $scope.current_error_en = $scope.error.nationalityID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#nationalityID').val()){
            //             $scope.current_error_ar = $scope.error.nationalityID.ar;
            //             $scope.current_error_en = $scope.error.nationalityID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
            //             $scope.current_error_ar = $scope.error.scientificDegree.ar;
            //             $scope.current_error_en = $scope.error.scientificDegree.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
        
            //         if( !$('#scientificSpecializationID').val()){
            //             $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
            //             $scope.current_error_en = $scope.error.scientificSpecializationID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#experienceID').val()){
            //             $scope.current_error_ar = $scope.error.experienceID.ar;
            //             $scope.current_error_en = $scope.error.experienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
                    
            //         if( !$('#mostExperienceID').val()){
            //             $scope.current_error_ar = $scope.error.mostExperienceID.ar;
            //             $scope.current_error_en = $scope.error.mostExperienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#yearsExperienceID').val()){
            //             $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
            //             $scope.current_error_en = $scope.error.yearsExperienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
            //             if(!$('#description').val()  ){
            //                 $scope.current_error_ar = $scope.error.description.ar;
            //                 $scope.current_error_en = $scope.error.description.en;
            //                 $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //                 return;
            //             }
            //         }
            //         if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
            //             dataObj.description = $('#description').val();
            //         }
        
        
            //         console.log(dataObj);
        
            //         console.log($scope.userLangs);
        
                    
            //         $http.post("/api/adminApi/generalData" , dataObj)
            //         .then(function (response) {
            //             var generalDataID = response.data._id
        
            //             if($scope.userLangs.length > 0){
        
                       
            //             $scope.userLangs.forEach((lang , l) => {
            //                     var obj = {
            //                         generalDataID : generalDataID,
            //                         languageID : lang._id,
            //                         level : lang.level
            //                     }
        
            //                     $http.post("/api/adminApi/langLevel" , obj)
            //                     .then(function (response) {
                                  
            //                         if(l == $scope.userLangs.length -1 ){
            //                             $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
            //                             $location.path("/recruitments" , "_self");
            //                         }
                                   
            //                     }, function (response) {
            //                         //alert("Error !");
            //                     })
            //                 });
            //             }else{
            //                 $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
            //                 $location.path("/recruitments" , "_self");
            //             }
                       
            //         }, function (response) {
            //             //alert("Error !");
            //         })
                         
    
            //     }, function (response) {
            //         alert(' Error while Uploading Image !');
            //     })
            // }

            // if (!$('#personalImage').val()) {

            //         $scope.gender = $("input[name='gender']:checked").val();
            //         $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
            //         $scope.scientificDegree = $('#scientificDegree').val();      
        
            //         var dataObj = {
            //             firstName : $('#firstName').val(),
            //             lastName: $('#lastName').val(),
            //             birthday: $('#birthday').val(),
            //             socialStatus: $('#socialStatus').val(),
            //             phoneNumber: $('#phoneNumber').val(),
            //             email: $('#email').val(),
            //             nationalityID: $('#nationalityID').val(),
            //             IDNumber: $('#IDNumber').val(),
            //             cityID: $('#cityID').val(),
            //             neighborhood: $('#neighborhood').val(),
            //             gender:     $scope.gender,
            //             specialNeeds: $scope.specialNeeds,
            //             scientificDegree: $scope.scientificDegree,
            //             scientificSpecializationID: $('#scientificSpecializationID').val(),
            //             graduationUniversityID: $('#graduationUniversityID').val(),
            //             specializedCertificates: $('#specializedCertificates').val(),
            //             experienceID: $('#experienceID').val(),
            //             mostExperienceID: $('#mostExperienceID').val(),
            //             yearsExperienceID: $('#yearsExperienceID').val(),
            //             languageID: $('#languageID').val(),
                       
            //             otherInformation: $('#otherInformation').val() || 2,
            //             // description: $('#description').val(),
            //             degree :  $('#degree').val()
                        
            //         }
            //         console.log(dataObj);
        
            //         if( !$('#firstName').val()){
            //             $scope.current_error_ar = $scope.error.firstName.ar;
            //             $scope.current_error_en = $scope.error.firstName.en;
        
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                       
                    
            //             return;
            //         }
            //         if( !$('#lastName').val()){
            //             $scope.current_error_ar = $scope.error.lastName.ar;
            //             $scope.current_error_en = $scope.error.lastName.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#phoneNumber').val()){
            //             $scope.current_error_ar = $scope.error.phoneNumber.ar;
            //             $scope.current_error_en = $scope.error.phoneNumber.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#email').val()){
            //             $scope.current_error_ar = $scope.error.email.ar;
            //             $scope.current_error_en = $scope.error.email.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#nationalityID').val()){
            //             $scope.current_error_ar = $scope.error.nationalityID.ar;
            //             $scope.current_error_en = $scope.error.nationalityID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#nationalityID').val()){
            //             $scope.current_error_ar = $scope.error.nationalityID.ar;
            //             $scope.current_error_en = $scope.error.nationalityID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
            //             $scope.current_error_ar = $scope.error.scientificDegree.ar;
            //             $scope.current_error_en = $scope.error.scientificDegree.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
        
            //         if( !$('#scientificSpecializationID').val()){
            //             $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
            //             $scope.current_error_en = $scope.error.scientificSpecializationID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#experienceID').val()){
            //             $scope.current_error_ar = $scope.error.experienceID.ar;
            //             $scope.current_error_en = $scope.error.experienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
                    
            //         if( !$('#mostExperienceID').val()){
            //             $scope.current_error_ar = $scope.error.mostExperienceID.ar;
            //             $scope.current_error_en = $scope.error.mostExperienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if( !$('#yearsExperienceID').val()){
            //             $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
            //             $scope.current_error_en = $scope.error.yearsExperienceID.en;
            //             $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //             return;
            //         }
            //         if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
            //             if(!$('#description').val()  ){
            //                 $scope.current_error_ar = $scope.error.description.ar;
            //                 $scope.current_error_en = $scope.error.description.en;
            //                 $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
            //                 return;
            //             }
            //         }
            //         if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
            //             dataObj.description = $('#description').val();
            //         }
        
        
            //         console.log(dataObj);
        
            //         console.log($scope.userLangs);
        
                    
            //         $http.post("/api/adminApi/generalData" , dataObj)
            //         .then(function (response) {
            //             var generalDataID = response.data._id
        
            //             if($scope.userLangs.length > 0){
        
                       
            //             $scope.userLangs.forEach((lang , l) => {
            //                     var obj = {
            //                         generalDataID : generalDataID,
            //                         languageID : lang._id,
            //                         level : lang.level
            //                     }
        
            //                     $http.post("/api/adminApi/langLevel" , obj)
            //                     .then(function (response) {
                                  
            //                         if(l == $scope.userLangs.length -1 ){
            //                             $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
                                       
            //                             $location.path("/recruitments" , "_self");
            //                         }
                                   
            //                     }, function (response) {
            //                         //alert("Error !");
            //                     })
            //                 });
            //             }else{
            //                 $rootScope.alertMessageLang("تم اضافة السى فى بنجاح  ","CV has been added successfully  " , $rootScope.qalamLang );
            //                 $location.path("/recruitments" , "_self");
            //             }
                       
            //         }, function (response) {
            //             //alert("Error !");
            //         })
                         
    
               
            // }

            
          
        }
 


    
    
})

















.controller("editCandidateCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    var id = $routeParams.id;

    $http.get("/api/adminApi/generalDataByID?id=" + id)
    .then(function (response) {
        $scope.data = response.data;
        $http.get("/api/adminApi/getLangLevelByData?generalDataID=" + $scope.data._id)
    .then(function (response) {
        $scope.currentUserLangs = response.data;
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
                    if($scope.currentUserLangs.length > 0){
                        $scope.currentUserLangs.forEach((ulang , u) => {
                            if(ulang.languageID._id == element._id){
                                element.show = true;
                                element.old = true;  
                                element.oldID =  ulang._id;
                                element.level = ulang.level
    
                            }
                            if (u == $scope.currentUserLangs.length - 1){
                                $scope.userLangs.push(element);
                            }
                        });
                    }
                    if($scope.currentUserLangs.length == 0){
                        if(i == 0 ){
                        element.show = true;
                        }
                        $scope.userLangs.push(element);

                      
                    }

                    
                    
                    
                    
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }, function (response) {
        //alert("Error !");
    })

       

        if($scope.data.gender == 1){
            $('#gender1').attr('checked', 'checked');
        }
        if($scope.data.gender == 2){
            $('#gender2').attr('checked', 'checked');
        }

        if($scope.data.specialNeeds == 1){
            $('#specialNeeds1').attr('checked', 'checked');
        }
        if($scope.data.specialNeeds == 2){
            $('#specialNeeds2').attr('checked', 'checked');
        }
            
        }, function (response) {
            
        })


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
                
            });
        }, function (response) {
            //alert("Error !");
        })


        

        $scope.changeLangDegree = function(obj , degree){
            obj.level = degree;
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
                    element.new = true;

                }
                if(e == $scope.userLangs.length - 1 && $scope.langExist == true ){
                    $rootScope.alertMessageLang("اللغة مضافة بالفعل ","language already added" , $rootScope.qalamLang );

                   
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
            mostExperienceID: {ar: 'يوجد خطأ في  الاكثؤ خبرة ' , en : 'Error in most Experience' },
            yearsExperienceID: {ar: 'يوجد خطأ في سنوات الخبرة ' , en : 'Error in yearsExperienceID' },
            languageID: {ar: 'يوجد خطأ في اللغة ' , en : 'Error in language ' },
            cv: {ar: 'يوجد خطأ في السى فى ' , en : 'Error in cv' },
            otherInformation: {ar: 'يوجد خطأ في المعلومات الاخرى ' , en : 'Error in other Information' },
            description: {ar: 'يوجد خطأ في الوصف ' , en : 'Error in description' },
            degree : {ar: 'يوجد خطأ في الدرجة ' , en : 'Error in degree' },

        }
        
        $scope.editCV = function(){




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
                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      

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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val() || "",
                        specializedCertificatesID: $('#specializedCertificatesID').val(),

                        experienceID: $('#experienceID').val(),
                        mostExperienceID: $('#mostExperienceID').val(),
                        yearsExperienceID: $('#yearsExperienceID').val()  ,
                        languageID: $('#languageID').val(),
                        cv: $scope.personalImagepath || $scope.data.cv,
                        otherInformation: $('#otherInformation').val() || 2,
                        // description: $('#description').val(),
                        degree :  $('#degree').val() || $scope.data.degree,

                        isWorked :  $('#isWorked').val(),
                            lastJob :  $('#lastJob').val(),
                            graduationYear :  $('#graduationYear').val(),
                            graduationPoint :  $('#graduationPoint').val(),
                        
                    }
                    console.log(dataObj);

                    if( !$('#firstName').val()){
                        $scope.current_error_ar = $scope.error.firstName.ar;
                        $scope.current_error_en = $scope.error.firstName.en;

                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                    
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }

                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                            return;
                        }
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        dataObj.description = $('#description').val();
                    }



                
                    $http.put("/api/adminApi/generalData/" + id , dataObj)
                    .then(function (response) {
                        var generalDataID = response.data._id
                        if($scope.userLangs.length > 0){
        
                       
                            $scope.userLangs.forEach((lang , l) => {
                                    if(lang.old == true){
                                        var obj = {
                                           
                                            level : lang.level
                                        }
                                        $http.put("/api/adminApi/idLevel/" + lang.oldID , obj)
                                        .then(function (response) {
                                            
                                            
                                           
                                        }, function (response) {
                                            //alert("Error !");
                                        })
                                    }else{
                                        var obj = {
                                            generalDataID : generalDataID,
                                            languageID : lang._id,
                                            level : lang.level
                                        }
                
                                        $http.post("/api/adminApi/langLevel" , obj)
                                        .then(function (response) {
                                          
                                            
                                           
                                        }, function (response) {
                                            //alert("Error !");
                                        })
                                    }
                                    if(l == $scope.userLangs.length -1 ){
                                        $rootScope.alertMessageLang("تم تعديل السى فى بنجاح  ","CV has been edited successfully  " , $rootScope.qalamLang );
                                        $location.path("/recruitments" , "_self");
                                    
                                    }
                                   
                                });
                            }else{
                                $rootScope.alertMessageLang("تم تعديل السى فى بنجاح  ","CV has been edited successfully  " , $rootScope.qalamLang );
                                 $location.path("/recruitments" , "_self");
                    
                            }
                         
                    
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
                }, function (response) {
                    alert(' Error while Uploading Image !');
                })
            }




            if (!$('#personalImage').val()) {
               
                    $scope.gender = $("input[name='gender']:checked").val();
                    $scope.specialNeeds = $("input[name='specialNeeds']:checked").val();
                    $scope.scientificDegree = $('#scientificDegree').val();      
                    if($scope.data && $scope.data.cv  && $scope.data.cv.length > 0){
                        $scope.cv = $scope.data.cv;
                    }
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
                        gender:     $scope.gender,
                        specialNeeds: $scope.specialNeeds,
                        scientificDegree: $scope.scientificDegree,
                        scientificSpecializationID: $('#scientificSpecializationID').val(),
                        graduationUniversityID: $('#graduationUniversityID').val(),
                        specializedCertificates: $('#specializedCertificates').val() || "",
                        specializedCertificatesID: $('#specializedCertificatesID').val(),

                        experienceID: $('#experienceID').val(),
                        mostExperienceID: $('#mostExperienceID').val(),
                        yearsExperienceID: $('#yearsExperienceID').val()  ,
                        languageID: $('#languageID').val(),
                        cv: $scope.cv,
                        otherInformation: $('#otherInformation').val() || 2,
                        // description: $('#description').val(),
                        degree :  $('#degree').val() || $scope.data.degree,


                        isWorked :  $('#isWorked').val(),
                        lastJob :  $('#lastJob').val(),
                        graduationYear :  $('#graduationYear').val(),
                        graduationPoint :  $('#graduationPoint').val(),
                        
                    }
                    console.log(dataObj);

                    if( !$('#firstName').val()){
                        $scope.current_error_ar = $scope.error.firstName.ar;
                        $scope.current_error_en = $scope.error.firstName.en;

                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                    
                    
                        return;
                    }
                    if( !$('#lastName').val()){
                        $scope.current_error_ar = $scope.error.lastName.ar;
                        $scope.current_error_en = $scope.error.lastName.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#phoneNumber').val()){
                        $scope.current_error_ar = $scope.error.phoneNumber.ar;
                        $scope.current_error_en = $scope.error.phoneNumber.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#email').val()){
                        $scope.current_error_ar = $scope.error.email.ar;
                        $scope.current_error_en = $scope.error.email.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#nationalityID').val()){
                        $scope.current_error_ar = $scope.error.nationalityID.ar;
                        $scope.current_error_en = $scope.error.nationalityID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( $scope.scientificDegree != 1 &&  $scope.scientificDegree != 2 && $scope.scientificDegree != 3  &&  $scope.scientificDegree != 4  &&  $scope.scientificDegree != 5  &&  $scope.scientificDegree != 6 && $scope.scientificDegree != 7){
                        $scope.current_error_ar = $scope.error.scientificDegree.ar;
                        $scope.current_error_en = $scope.error.scientificDegree.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }

                    if( !$('#scientificSpecializationID').val()){
                        $scope.current_error_ar = $scope.error.scientificSpecializationID.ar;
                        $scope.current_error_en = $scope.error.scientificSpecializationID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#experienceID').val()){
                        $scope.current_error_ar = $scope.error.experienceID.ar;
                        $scope.current_error_en = $scope.error.experienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    
                    if( !$('#mostExperienceID').val()){
                        $scope.current_error_ar = $scope.error.mostExperienceID.ar;
                        $scope.current_error_en = $scope.error.mostExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if( !$('#yearsExperienceID').val()){
                        $scope.current_error_ar = $scope.error.yearsExperienceID.ar;
                        $scope.current_error_en = $scope.error.yearsExperienceID.en;
                        $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                        return;
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        if(!$('#description').val()  ){
                            $scope.current_error_ar = $scope.error.description.ar;
                            $scope.current_error_en = $scope.error.description.en;
                            $rootScope.alertMessageLang($scope.current_error_ar,$scope.current_error_en, $rootScope.qalamLang );
                            return;
                        }
                    }
                    if($('#otherInformation').val() &&  $('#otherInformation').val() == 1 ){
                        dataObj.description = $('#description').val();
                    }



                
                    $http.put("/api/adminApi/generalData/" + id , dataObj)
                    .then(function (response) {
                        var generalDataID = response.data._id
                           
                            if($scope.userLangs.length > 0){
        
                       
                                $scope.userLangs.forEach((lang , l) => {
                                        if(lang.old == true){
                                            var obj = {
                                               
                                                level : lang.level
                                            }
                                            $http.put("/api/adminApi/idLevel/" + lang.oldID , obj)
                                            .then(function (response) {
                                                
                                                
                                               
                                            }, function (response) {
                                                //alert("Error !");
                                            })
                                        }else{
                                            var obj = {
                                                generalDataID : generalDataID,
                                                languageID : lang._id,
                                                level : lang.level
                                            }
                    
                                            $http.post("/api/adminApi/langLevel" , obj)
                                            .then(function (response) {
                                              
                                                
                                               
                                            }, function (response) {
                                                //alert("Error !");
                                            })
                                        }
                                        if(l == $scope.userLangs.length -1 ){
                                            $rootScope.alertMessageLang("تم تعديل السى فى بنجاح  ","CV has been edited successfully  " , $rootScope.qalamLang );
                                            $location.path("/recruitments" , "_self");
                                        
                                        }
                                       
                                    });
                                }else{
                                    $rootScope.alertMessageLang("تم تعديل السى فى بنجاح  ","CV has been edited successfully  " , $rootScope.qalamLang );
                                     $location.path("/recruitments" , "_self");
                        
                                }
                    }, function (response) {
                        //alert("Error !");
                    })
                         
    
                
            }


            
          
        }
 
    
})


.controller("websiteSettingsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/websiteSettings")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.view = 1;
    $scope.getAllData = function(){
        $http.get("/api/adminApi/websiteSettings")
        .then(function (response) {
            $scope.allData = response.data;
            $scope.view = 1;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }

    $scope.getCurrentData = function(dataObj){
        $scope.data = dataObj;
        $scope.view = 2;
    }

    $scope.editData = function(){

        var obj = {
            valueAr : $('#valueAr').val(),
            value : $('#value').val()
        }
        $http.put("/api/adminApi/websiteSettings/" + $scope.data._id , obj )
        .then(function (response) {
            $scope.getAllData();
                
           
        }, function (response) {
            //alert("Error !");
        })
    }
    $scope.editData2 = function(){
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
                var obj = {
                    valueAr :$scope.personalImagepath,
                    value : $scope.personalImagepath
                }
                $http.put("/api/adminApi/websiteSettings/" + $scope.data._id , obj )
                .then(function (response) {
                    $scope.getAllData();
                        
                   
                }, function (response) {
                    //alert("Error !");
                })
   

            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }
       
    }

    // $scope.backNow = function(){
        
    // }

    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
                dataObj.status = status;
                $http.put("/api/adminApi/employee/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})


.controller("clientsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');
    $http.get("/api/adminApi/clients")
    .then(function (response) {
        $scope.allData = response.data;
        var j = 0;
        $scope.allData.forEach((element , i) => {
            if(element.status != 3){
                j++;
                element.index = j;
            }
            
        });
    }, function (response) {
        //alert("Error !");
    })

    $scope.view = 1;
    $scope.getAllData = function(){
        $http.get("/api/adminApi/clients")
        .then(function (response) {
            $scope.allData = response.data;
            $scope.view = 1;
            var j = 0;
            $scope.allData.forEach((element , i) => {
                if(element.status != 3){
                    j++;
                    element.index = j;
                }
                
            });
        }, function (response) {
            //alert("Error !");
        })
    }

    $scope.getCurrentData = function(dataObj){
        $scope.data = dataObj;
        $scope.view = 2;
    }

  
    $scope.editData = function(){
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
                var obj = {
                    nameAR : $('#nameAR').val(),
                    nameEN : $('#nameEN').val(),
                    img : $scope.personalImagepath
                }
                $http.put("/api/adminApi/clients/" + $scope.data._id , obj )
                .then(function (response) {
                    $scope.getAllData();
                        
                   
                }, function (response) {
                    //alert("Error !");
                })
   

            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }

        if (!$('#personalImage').val()) {
            var obj = {
                nameAR : $('#nameAR').val(),
                nameEN : $('#nameEN').val(),
            }
            $http.put("/api/adminApi/clients/" + $scope.data._id , obj )
            .then(function (response) {
                $scope.getAllData();
               
            }, function (response) {
                //alert("Error !");
            })
        }
       
    }

    // $scope.backNow = function(){
        
    // }

    $scope.changeStatus = function(ID, dataObj , status){
        var result = confirm("هل انت متأكد من تعديل الحالة ؟ ");
            if (result == true) {
                dataObj.status = status;
                $http.put("/api/adminApi/clients/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم التعديل  ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }
    $scope.deletData = function( ID, dataObj){
        var result = confirm("هل انت متأكد من الحذف ؟ ");
            if (result == true) {
              
                dataObj.status = 3;
                dataObj.updateBy =  $scope.forasAdmin._id;
                dataObj.historyType = 3;
    
                $http.put("/api/admin/important/" + ID, dataObj)
                    .then(function (response) {
    
                        alert("تم الحذف بنجاح ");
                        $scope.getAllData();    
                    }, function (response) {
    
                        //alert("Error !");
                    })
            } 
    }

    $scope.findData = function () {
        $http.post("/api/admin/findImportant", $scope.searchObj)
            .then(function (response) {
             
                
                $(".bd-example-modal-lg .btn-danger").click();
                $scope.important = response.data;
                var j = 0;
                $scope.important.forEach((element , i) => {
                    if(element.status != 3){
                        j++;
                        element.index = j;
                    }
                    
                });
              
                $scope.searchObj = {};
            }, function (response) {
                //alert("Error !");
            })
    }
})



.controller("addClientCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.forasAdmin = $cookieStore.get('forasAdmin');

    $scope.addData = function(){
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
                    nameAR : $('#nameAR').val(),
                    nameEN: $('#nameEN').val(),
                    img: $scope.personalImagepath
                }
                $http.post("/api/adminApi/clients" , dataObj)
                .then(function (response) {
                    $location.path("/clients" , "_self");
                }, function (response) {
                    //alert("Error !");
                })
                        

            }, function (response) {
                alert(' Error while Uploading Image !');
            })
        }

        
    }
 


    
    
})









