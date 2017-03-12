/**
 * Created by hxsd on 2017/1/18.
 */
myapp.controller('homeCtrl',function($scope,$http){

    // 准备商品数据
    $http.get('data/wish.json').success(function(data){
        $scope.wishs=data;
    });
});