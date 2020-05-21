
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
                templateUrl: "http://165.22.83.141/QalamAdmin/html/users.html",
                controller: "usersCtrl"
            })
            .when("/usersHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/usersHistory.html",
                controller: "usersHistoryCtrl"
            })
            .when("/userDetails/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/userDetails.html",
                controller: "userDetailsCtrl"
            })
            .when("/addUser", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addUser.html",
                controller: "addUserCtrl"
            })
            .when("/editUser/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editUser.html",
                controller: "editUserCtrl"
            })
            .when("/categories", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/categories.html",
                controller: "categoriesCtrl"
            })
            .when("/addCategory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addCategory.html",
                controller: "addCategoryCtrl"
            })
            .when("/editCategory/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editCategory.html",
                controller: "editCategoryCtrl"
            })
            .when("/contactUs", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/contactUs.html",
                controller: "contactUsCtrl"
            })
            .when("/copyWrite", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/copyWrite.html",
                controller: "copyWriteCtrl"
            })
            .when("/copyWriteHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/copyWriteHistory.html",
                controller: "copyWriteHistoryCtrl"
            })
            .when("/important", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/important.html",
                controller: "importantCtrl"
            })
            .when("/importantHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/importantHistory.html",
                controller: "importantHistoryCtrl"
            })
            .when("/addImportant", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addImportant.html",
                controller: "addImportantCtrl"
            })
            .when("/editImportant/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editImportant.html",
                controller: "editImportantCtrl"
            })
            .when("/addCopyWrites", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addCopyWrites.html",
                controller: "addCopyWritesCtrl"
            })
            .when("/editCopyWrites/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editCopyWrites.html",
                controller: "editCopyWritesCtrl"
            })
            .when("/childAge", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/childAge.html",
                controller: "childAgeCtrl"
            })
            .when("/childAgeHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/childAgeHistory.html",
                controller: "childAgeHistoryCtrl"
            })
            .when("/addChildAge", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addChildAge.html",
                controller: "addChildAgeCtrl"
            })
            .when("/editChildAge/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editChildAge.html",
                controller: "editChildAgeCtrl"
            })
            .when("/materials", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/materials.html",
                controller: "materialsCtrl"
            })
            .when("/materialsHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/materialsHistory.html",
                controller: "materialsHistoryCtrl"
            })
            .when("/addMaterials", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addMaterials.html",
                controller: "addMaterialsCtrl"
            })
            .when("/editMaterials/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editMaterials.html",
                controller: "editMaterialsCtrl"
            })

            .when("/subMaterials/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/subMaterials.html",
                controller: "subMaterialsCtrl"
            })
            .when("/subMaterialsHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/subMaterialsHistory.html",
                controller: "subMaterialsHistoryCtrl"
            })
            .when("/addSubMaterials/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addSubMaterials.html",
                controller: "addSubMaterialsCtrl"
            })
            .when("/editSubMaterials/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editSubMaterials.html",
                controller: "editSubMaterialsCtrl"
            })

            .when("/educationalLevel", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/educationalLevel.html",
                controller: "educationalLevelCtrl"
            })
            .when("/educationalLevelHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/educationalLevelHistory.html",
                controller: "educationalLevelHistoryCtrl"
            })
            .when("/addEducationalLevel", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addEducationalLevel.html",
                controller: "addEducationalLevelCtrl"
            })
            .when("/editEducationalLevel/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editEducationalLevel.html",
                controller: "editEducationalLevelCtrl"
            })
            .when("/childByParent/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/childByParent.html",
                controller: "childByParentCtrl"
            })
            .when("/childreen", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/childreen.html",
                controller: "childreenCtrl"
            })
            .when("/childByParentHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/childByParentHistory.html",
                controller: "childByParentHistoryCtrl"
            })
            
            .when("/addChild/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addChild.html",
                controller: "addChildCtrl"
            })
            .when("/addChildP", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addChildP.html",
                controller: "addChildPCtrl"
            })
            
            .when("/editChild/:id/:type", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editChild.html",
                controller: "editChildCtrl"
            })
            .when("/exercises", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/exercises.html",
                controller: "exercisesCtrl"
            })
            .when("/getExerciseByMaterial/:id/:id2", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/getExerciseByMaterial.html",
                controller: "getExerciseByMaterialCtrl"
            })

            
            .when("/exercisesHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/exercisesHistory.html",
                controller: "exercisesHistoryCtrl"
            })
            .when("/addExercises", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addExercises.html",
                controller: "addExercisesCtrl"
            })
            .when("/addExerciseByEducational/:id/:id2", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addExerciseByEducational.html",
                controller: "addExerciseByEducationalCtrl"
            })
            
            .when("/editExercises/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editExercises.html",
                controller: "editExercisesCtrl"
            })
            .when("/editExerciseByEducational/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editExercises.html",
                controller: "editExerciseByEducationalCtrl"
            })
            
            .when("/educationalMaterials/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/educationalMaterials.html",
                controller: "educationalMaterialsCtrl"
            })
            .when("/materialExercises/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/materialExercises.html",
                controller: "materialExercisesCtrl"
            })
            .when("/setting", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/setting.html",
                controller: "settingCtrl"
            })
            .when("/settingHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/settingHistory.html",
                controller: "settingHistoryCtrl"
            })
            .when("/editSetting/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editSetting.html",
                controller: "editSettingCtrl"
            })
            .when("/Defualt", {
                templateUrl: "QalamAdmin/html/Defualt.html",
                controller: "DefualtCtrl"
            })
            .when("/employees", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/employees.html",
                controller: "employeesCtrl"
            })
            .when("/employeesHistory", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/employeesHistory.html",
                controller: "employeesHistoryCtrl"
            })
            .when("/addEmployee", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/addEmployee.html",
                controller: "addEmployeeCtrl"
            })
            .when("/editEmployee/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editEmployee.html",
                controller: "editEmployeeCtrl"
            })
            .when("/employeePermissions/:id", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/employeePermissions.html",
                controller: "employeePermissionsCtrl"
            })
            .when("/editAdmin", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/editAdmin.html",
                controller: "editAdminCtrl"
            })
            .when("/permissions", {
                templateUrl: "http://165.22.83.141/QalamAdmin/html/permissions.html",
                controller: "permissionsCtrl"
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/userHistory")
    .then(function (response) {
        $scope.users = response.data;
    }, function (response) {
        //alert("Error !");
    })
})


.controller("userDetailsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    var id = $routeParams.id;

    $http.get("/api/admin/userByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;

        }, function (response) {
            //alert("Error !");
        })
})

.controller("editUserCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                updateBy : $scope.qalamAdmin._id,
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
                    updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');


    $http.get("/api/admin/getsubAdminsEmployee")
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
            $http.get("/api/admin/getsubAdminsEmployee")
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
    
        
        $scope.deletData = function( ID, dataObj){
            var result = confirm("هل انت متأكد من الحذف ؟ ");
                if (result == true) {
                  
                    dataObj.type = 2;
                    dataObj.status = 3;
                    dataObj.updateBy = $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');


    $http.get("/api/admin/getsubAdminsEmployeeHistory")
        .then(function (response) {
            $scope.employees = response.data;
           
        }, function (response) {
            //alert("Error !");
        })
})

.controller("addEmployeeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $scope.addPermissionToEmployee = function(employee ){
        var empIndex = 0;
        let permissions =  new Array();
        let permissions2 = [];
        permissions.users = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المستخدميين"  ,  nameEN : "users"  , key : "users" , value: false };
        permissions2.push(permissions.users);
        permissions.childAge = {employeeID : employee._id, index : empIndex++ ,  nameAR : "الفئات العمرية "  ,  nameEN : "child Ages"  , key : "childAge" , value: false };
        permissions2.push(permissions.childAge);
        permissions.educationalLevel = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المراحل التعليمية "  ,  nameEN : "educational Level"  , key : "educationalLevel" , value: false };
        permissions2.push(permissions.educationalLevel);
        permissions.materials = {employeeID : employee._id, index : empIndex++ ,  nameAR : "المواد التعليمية "  ,  nameEN : "materials"  , key : "materials" , value: false };
        permissions2.push(permissions.materials);
        permissions.exercises ={employeeID : employee._id, index : empIndex++ ,  nameAR : "التمارين "  ,  nameEN : "exercises"  , key : "exercises" , value: false };
        permissions2.push(permissions.exercises);
        permissions.contactUs ={employeeID : employee._id, index : empIndex++ ,  nameAR : "تواصل معنا  "  ,  nameEN : "contactUs"  , key : "contactUs" , value: false };
        permissions2.push(permissions.contactUs);
        permissions.copyWrite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "حقوق الملكية  "  ,  nameEN : "copyWrite"  , key : "copyWrite" , value: false };
        permissions2.push(permissions.copyWrite);
        permissions.important   ={employeeID : employee._id, index : empIndex++ ,  nameAR : "هام ، عنا "  ,  nameEN : "important "  , key : "important" , value: false } ;
        permissions2.push(permissions.important);
        permissions.settingWebsite = {employeeID : employee._id, index : empIndex++ ,  nameAR : "اعدادات الموقع "  ,  nameEN : "settingWebsite"  , key : "settingWebsite" , value: false };
        permissions2.push(permissions.settingWebsite);
        permissions.employees={employeeID : employee._id, index : empIndex++ ,  nameAR : "الموظفيين "  ,  nameEN : "employees"  , key : "employees" , value: false };
        permissions2.push(permissions.employees);
        permissions.permissions={employeeID : employee._id, index : empIndex++ ,  nameAR : "الصلاحيات "  ,  nameEN : "permissions"  , key : "permissions" , value: false };
        permissions2.push(permissions.permissions);
        permissions.childByParent={employeeID : employee._id, index : empIndex++ ,  nameAR : "الاطفال  "  ,  nameEN : "childreen"  , key : "childByParent" , value: false };
        permissions2.push(permissions.childByParent);
    
        permissions.addUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مستخدم   "  ,  nameEN : "add User"  , key : "addUser" , value: false };
        permissions2.push(permissions.addUser);
        permissions.editUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مستخدم   "  ,  nameEN : "edit User"  , key : "editUser" , value: false };
        permissions2.push(permissions.editUser);
        permissions.deleteUser={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف مستخدم   "  ,  nameEN : "delete User"  , key : "deleteUser" , value: false };
        permissions2.push(permissions.deleteUser);
        permissions.userDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل مستخدم   "  ,  nameEN : "user Details"  , key : "userDetails" , value: false };
        permissions2.push(permissions.userDetails);
        
        permissions.addChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة طفل    "  ,  nameEN : "add Child"  , key : "addChild" , value: false };
        permissions2.push(permissions.addChild);
        permissions.editChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل طفل    "  ,  nameEN : "edit Child"  , key : "editChild" , value: false };
        permissions2.push(permissions.editChild);
        permissions.deleteChild={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  طفل    "  ,  nameEN : "delete Child"  , key : "deleteChild" , value: false };
        permissions2.push(permissions.deleteChild);
        permissions.childDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  طفل    "  ,  nameEN : "child Details"  , key : "childDetails" , value: false };
        permissions2.push(permissions.childDetails);
        
        permissions.addChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة عمرية    "  ,  nameEN : "add ChildAge"  , key : "addChildAge" , value: false };
        permissions2.push(permissions.addChildAge);
        permissions.editChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة عمرية    "  ,  nameEN : "edit ChildAge"  , key : "editChildAge" , value: false };
        permissions2.push(permissions.editChildAge);
        permissions.deleteChildAge={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة عمرية    "  ,  nameEN : "delete ChildAge"  , key : "deleteChildAge" , value: false };
        permissions2.push(permissions.deleteChildAge);
        permissions.childAgeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة عمرية     "  ,  nameEN : "childAge Details"  , key : "childAgeDetails" , value: false };
        permissions2.push(permissions.childAgeDetails);
        
        permissions.addEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مرحلة تعليمية    "  ,  nameEN : "add EducationalLevel"  , key : "addEducationalLevel" , value: false };
        permissions2.push(permissions.addEducationalLevel);
        permissions.editEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مرحلة تعليمية    "  ,  nameEN : "edit EducationalLevel"  , key : "editEducationalLevel" , value: false };
        permissions2.push(permissions.editEducationalLevel);
        permissions.deleteEducationalLevel={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مرحلة تعليمية    "  ,  nameEN : "delete EducationalLevel"  , key : "deleteEducationalLevel" , value: false };
        permissions2.push(permissions.deleteEducationalLevel);
        permissions.educationalLevelDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مرحلة تعليمية     "  ,  nameEN : "EducationalLevel Details"  , key : "educationalLevelDetails" , value: false };
        permissions2.push(permissions.educationalLevelDetails);
    
        permissions.addMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة مادة تعليمية    "  ,  nameEN : "add Materials"  , key : "addMaterials" , value: false };
        permissions2.push(permissions.addMaterials);
        permissions.editMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل مادة تعليمية    "  ,  nameEN : "edit Materials"  , key : "editMaterials" , value: false };
        permissions2.push(permissions.editMaterials);
        permissions.deleteMaterials={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  مادة تعليمية    "  ,  nameEN : "delete Materials"  , key : "deleteMaterials" , value: false };
        permissions2.push(permissions.deleteMaterials);
        permissions.materialsDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  مادة تعليمية     "  ,  nameEN : "materials Details"  , key : "materialsDetails" , value: false };
        permissions2.push(permissions.materialsDetails);
    
        permissions.addExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة تمرين      "  ,  nameEN : "add Exercises"  , key : "addExercises" , value: false };
        permissions2.push(permissions.addExercises);
        permissions.editExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل تمرين      "  ,  nameEN : "edit Exercises"  , key : "editExercises" , value: false };
        permissions2.push(permissions.editExercises);
        permissions.deleteExercises={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  تمرين      "  ,  nameEN : "delete Exercises"  , key : "deleteExercises" , value: false };
        permissions2.push(permissions.deleteExercises);
        permissions.exercisesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  تمرين       "  ,  nameEN : "Exercises Details"  , key : "exercisesDetails" , value: false };
        permissions2.push(permissions.exercisesDetails);
        permissions.addCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة الحقوق        "  ,  nameEN : "add CopyWrites"  , key : "addCopyWrites" , value: false };
        permissions2.push(permissions.addCopyWrites);
        permissions.editCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الحقوق        "  ,  nameEN : "edit CopyWrites"  , key : "editCopyWrites" , value: false };
        permissions2.push(permissions.editCopyWrites);
        permissions.deleteCopyWrites={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  الحقوق        "  ,  nameEN : "delete CopyWrites"  , key : "deleteCopyWrites" , value: false };
        permissions2.push(permissions.deleteCopyWrites);
        permissions.copyWritesDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  الحقوق         "  ,  nameEN : "copyWrites Details"  , key : "copyWritesDetails" , value: false };
        permissions2.push(permissions.copyWritesDetails);
        
        permissions.addImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة عنا          "  ,  nameEN : "add Important"  , key : "addImportant" , value: false };
        permissions2.push(permissions.addImportant);
        permissions.editImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل عنا          "  ,  nameEN : "edit Important"  , key : "editImportant" , value: false };
        permissions2.push(permissions.editImportant);
        permissions.deleteImportant={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  عنا          "  ,  nameEN : "delete Important"  , key : "deleteImportant" , value: false };
        permissions2.push(permissions.deleteImportant);
        permissions.importantDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  عنا           "  ,  nameEN : "important Details"  , key : "importantDetails" , value: false };
        permissions2.push(permissions.importantDetails);
        
        permissions.editSetting={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل الموقع           "  ,  nameEN : "edit website Setting"  , key : "editSetting" , value: false };
        permissions2.push(permissions.editSetting);
        permissions.addEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة موظف           "  ,  nameEN : "add Employee"  , key : "addEmployee" , value: false };
        permissions2.push(permissions.addEmployee);
        permissions.editEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل موظف           "  ,  nameEN : "edit Employee"  , key : "editEmployee" , value: false };
        permissions2.push(permissions.editEmployee);
        permissions.deleteEmployee={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  موظف           "  ,  nameEN : "delete Employee"  , key : "deleteEmployee" , value: false };
        permissions2.push(permissions.deleteEmployee);
        permissions.employeeDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  موظف            "  ,  nameEN : "employee Details"  , key : "employeeDetails" , value: false };
        permissions2.push(permissions.employeeDetails);
    
        permissions.addPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "اضافة صلاحية            "  ,  nameEN : "add Permission"  , key : "addPermission" , value: false };
        permissions2.push(permissions.addPermission);
        permissions.editPermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "تعديل صلاحية            "  ,  nameEN : "edit Permission"  , key : "editPermission" , value: false };
        permissions2.push(permissions.editPermission);
        permissions.deletePermission={employeeID : employee._id, index : empIndex++ ,  nameAR : "حذف  صلاحية            "  ,  nameEN : "delete Permission"  , key : "deletePermission" , value: false };
        permissions2.push(permissions.deletePermission);
        permissions.permissionDetails={employeeID : employee._id, index : empIndex++ ,  nameAR : "تفاصيل  صلاحية             "  ,  nameEN : "permission Details"  , key : "permissionDetails" , value: false };
        permissions2.push(permissions.permissionDetails);
       
              var dataObj = {
                  type : 2,
                  employeeID : employee._id,
                  permissions : permissions2,
                  createBy : $scope.qalamAdmin._id,
                  historyType : 1

              }
              $http.post("/api/admin/addPermissions" ,  dataObj)
              .then(function (response) {
                  alert("تم اضافة الصلاحيات بنجاح ")
              }, function (response) {
                  //alert("Error !");
              })
   
        
      
        
       
    }
    $scope.addData = function () {
        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            type : 2,
            createBy : $scope.qalamAdmin._id,
            historyType : 1
        }
        $http.post("/api/admin/employee/", dataObj)
            .then(function (response) {
                alert("تم اضافة الموظف   بنجاح ");
                $scope.addPermissionToEmployee(response.data);
                $location.path('/employees', "_self");
            }, function (response) {
                //alert("Error !");
            })
    }
})

.controller("editAdminCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');

    $scope.user = $scope.qalamAdmin;

    $scope.editData = function () {

        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            updateBy : $scope.qalamAdmin._id,
            historyType : 2


        }

        $http.put("/api/admin/employee/" + $scope.qalamAdmin._id, dataObj)
            .then(function (response) {
                alert("تم تعديل الادمن بنجاح ");
                $scope.qalamAdmin = response.data;
                $cookieStore.put('qalamAdmin', $scope.qalamAdmin);
                $cookieStore.put('qalamAdminID', $scope.qalamAdmin._id);
                $window.open("http://165.22.83.141/QalamAdmin/html/login.html", "_self");
                //$location.path('/Default' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})
.controller("editEmployeeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');


    var id = $routeParams.id;
    $http.get("/api/admin/employeeByID?id=" + id)
        .then(function (response) {
            $scope.user = response.data;

        
        }, function (response) {
            //alert("Error !");
        })
    
    

    $scope.editData = function () {

        var dataObj = {
            type : 2,
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            status : $('#status').val(),
            updateBy : $scope.qalamAdmin._id,
            historyType : 2


        }

        $http.put("/api/admin/employee/" +id, dataObj)
            .then(function (response) {
                alert("تم تعديل الموظف  بنجاح ");
               
                 $location.path('/employees' , "_self");

            }, function (response) {
                //alert("Error !");
            })

    }
})

.controller("employeePermissionsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');

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
                updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');



    $scope.addData = function () {
        var dataObj = {
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            gender : $('#gender').val(),
            subscripeType : $('#subscripeType').val(),
            status: 1,
            createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/contactUS")
        .then(function (response) {
            $scope.contactUs = response.data;
        }, function (response) {
            //alert("Error !");
        })
})

.controller("settingCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/setting")
        .then(function (response) {
            $scope.settings = response.data;
        }, function (response) {
            //alert("Error !");
        })
        
})
.controller("settingHistoryCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/settingHistory")
        .then(function (response) {
            $scope.settings = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("editSettingCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $rootScope.qalamLang = $cookieStore.get('qalamLang');
   

    if ($rootScope.qalamLang == 'en') {
        $('body').css("direction", "ltr");
        // $('body table').css("direction", "ltr");

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
            
        } else {
            $('body').css("direction", "rtl");

        }
    }
   

    $rootScope.cuser = $cookieStore.get('qalamAdmin')
    $scope.userId = $cookieStore.get('id');
    
    $rootScope.logOutFun = function () {
        if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {

            $cookieStore.remove('qalamAdmin');
            $cookieStore.remove('qalamAdminID');
            alert('تم تسجيل الخروج !!');
            $window.open("http://165.22.83.141/QalamAdmin/html/login.html", "_self");
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

    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');


    
    

    $http.get("/api/admin/employeePermissionbyID?employeeID=" + $scope.qalamAdmin._id)
        .then(function (response) {
            if(!response.data){
                // console.log("No Permissions");
                // $scope.addPermissionToEmployee($scope.qalamAdmin);
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
   // $scope.addPermissionToEmployee($scope.qalamAdmin);
    $http.get("/api/admin/totalEducation")
        .then(function (response) {
            $scope.totalEducation = response.data.message;
        }, function (response) {
            //alert("Error !");
        })
    $http.get("/api/admin/totalMaterials")
        .then(function (response) {
            $scope.totalMaterials = response.data.message;
        }, function (response) {
            //alert("Error !");
        })
    $http.get("/api/admin/totalexercises")
        .then(function (response) {
            $scope.totalexercises = response.data.message;
        }, function (response) {
            //alert("Error !");
        })
    $http.get("/api/admin/totalChildreen")
        .then(function (response) {
            $scope.totalChildreen = response.data.message;
        }, function (response) {
            //alert("Error !");
        })



})

.controller("copyWriteCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/getAllCopyWriteHistory")
        .then(function (response) {
            $scope.copyWrites = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("permissionsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $scope.getValue = function(arr){
       console.log(arr);
    }
})
.controller("addCopyWritesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/getAllImportantHistory")
    .then(function (response) {
        $scope.important = response.data;
    }, function (response) {
        //alert("Error !");
    })
})
.controller("addImportantCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location , $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $scope.addData = function(){
        var dataObj = {
            titleAr :  $('#titleAr').val(),
            titleEN : $('#titleEN').val(),
            createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/childAgeHistory")
        .then(function (response) {
            $scope.childAge = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addChildAgeCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');

    $scope.addData = function () {
        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: 1,
            createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
            updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/MaterialsHistory")
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addMaterialsCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    url: "http://165.22.83.141/api/user/uploadFile",
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
                        updateBy : $scope.qalamAdmin._id,
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
                    updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/MaterialsHistory")
        .then(function (response) {
            $scope.materials = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("subMaterialsCtrl", function ($scope, $http, $routeParams, $rootScope, $window, $cookieStore, $location) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
   
    var id = $routeParams.id;
   
    $scope.addData = function () {
        

        if ($('#personalImage').val()) {
            var formData = new FormData();
            var fileLogo = $('#personalImage')[0];
            formData.append('file', fileLogo.files[0]);
            $http({
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    url: "http://165.22.83.141/api/user/uploadFile",
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
                        updateBy : $scope.qalamAdmin._id,
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
                    updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/educationalLevelHistory")
        .then(function (response) {
            $scope.educationalLevel = response.data;
            
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addEducationalLevelCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');

    $scope.addData = function () {
        var dataObj = {
            titleAr: $('#titleAr').val(),
            titleEN: $('#titleEN').val(),
            status: 1,
            createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
            updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    
    
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
  
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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
                createBy : $scope.qalamAdmin._id,
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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
                createBy : $scope.qalamAdmin._id,
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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    updateBy : $scope.qalamAdmin._id,
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
                updateBy : $scope.qalamAdmin._id,
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

    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    dataObj.updateBy =  $scope.qalamAdmin._id;
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
    $http.get("/api/admin/exerciseHistory")
        .then(function (response) {
            $scope.exercises = response.data;
        }, function (response) {
            //alert("Error !");
        })
})
.controller("addExercisesCtrl", function ($scope, $http, $rootScope, $window, $cookieStore, $location, $routeParams) {
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');

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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                url: "http://165.22.83.141/api/user/uploadFile",
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
                    createBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    url: "http://165.22.83.141/api/user/uploadFile",
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
                        updateBy : $scope.qalamAdmin._id,
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
                    updateBy : $scope.qalamAdmin._id,
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
    $scope.qalamAdmin = $cookieStore.get('qalamAdmin');
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
                    url: "http://165.22.83.141/api/user/uploadFile",
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
                        updateBy : $scope.qalamAdmin._id,
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
                    updateBy : $scope.qalamAdmin._id,
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


