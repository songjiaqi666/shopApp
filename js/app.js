/**
 * Created by hxsd on 2017/1/18.
 */
var myapp=angular.module('myapp',['ionic']);
//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
        //通过状态查找

        //选项卡  一级路由
        .state('tabs',{
            url:'/tabs',
            abstract:true,
            templateUrl:'templates/tabs/tabs.html',
            controller:'tabsCtrl',
        })

        ////一级路由
        .state('tabs.home',{
            url:'/home',
            views:{'tabs-home':{
                templateUrl:'templates/home/home.html',
                controller:'homeCtrl'
            }}
        })

        //分类  二级路由
        .state('tabs.classify',{
            url:'/classify',
            views:{'tabs-classify':{
                templateUrl:'templates/classify/classify.html',
                controller:'classifyCtrl'
            }}
        })

        .state('tabs.list',{
            url:'/list',
            views:{'tabs-classify':{
                templateUrl:'templates/list/list.html',
                controller:'listCtrl'
            }}
        })

        .state('tabs.content',{
            url:'/content?id',
            views:{'tabs-classify':{
                templateUrl:'templates/content/content.html',
                controller:'contentCtrl'
            }}
        })

        //心愿  二级路由
        .state('tabs.wish',{
            url:'/wish',
            views:{'tabs-wish':{
                templateUrl:'templates/wish/wish.html',
                controller:'wishCtrl',
            }}
        })

        .state('tabs.detail',{
            url:'/detail?id',
            views:{'tabs-wish':{
                templateUrl:'templates/detail/detail.html',
                controller:'detailCtrl'
            }}
        })

        //个人中心  二级路由
        .state('tabs.user',{
            url:'/user',
            views:{'tabs-user':{
                templateUrl:'templates/user/user.html',
                controller:'userCtrl',
            }}
        })

        //购物车
        .state("tabs.cart",{
            url:"/cart",
            views:{"tab-cart":{
                templateUrl:"templates/cart/cart.html",
                controller:"cartCtrl"
            }}
        });


    //通过链接查找
    $urlRouterProvider.otherwise('/tabs/home');

});