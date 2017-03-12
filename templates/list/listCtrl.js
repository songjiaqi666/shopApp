/**
 * Created by hxsd on 2017/1/18.
 */
myapp.controller('listCtrl',function($scope,$http,$ionicHistory){

    $scope.goBack = function() {
        $ionicHistory.goBack();
    };

    // 准备商品数据
    $http.get('data/products.json').success(function(data){
        $scope.products=data;
    });


});