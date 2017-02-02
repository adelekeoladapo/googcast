var app = angular.module("jedupa", ['ui.router', 'datatables']);



/** Factory **/
app.factory('Factory', function(){
    
    var data = {};
    
    var app_data = {};
    
    return data;
    
});


/*
 * App Services
 */
app.service('Service', function($http){
    
    this.loadAppData = function(school_id){
//        return $http.get(base_url+"api/init-app", {
//            params : {'filter-field': 'school_id', 'filter-value': school_id}
//        });
    }
    
    
});




/*
 * App Config
 */
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/dashboard");
    
    $stateProvider
    
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "assets/app/views/dashboard.html"
        })
        
        .state('students', {
            url: "/students",
            templateUrl: "assets/app/views/students.html",
            controller: "StudentsCtrl",
            resolve: {
                students: function(Service, Factory){
                    return Service.getStudents(Factory.getSchoolID());
                }
            }
        });
    
});


/*
 * App Controller
 */
app.controller('mainCtrl', function($rootScope, Factory, Service){
    
    /** Init App Data **/
//    Service.loadAppData(Factory.getSchoolID()).then(function(response){
//        //Factory.setAppData(response.data);
//    }, function(error){
//        console.log(error);
//    });
    
    
    
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
        show_loading_overlay();
    });
    
    
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
        hide_loading_overlay();
        toast('No Internet Access');
    });
    
    
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
        hide_loading_overlay();
    });
    
});
