/**
 * Created by hxsd on 2017/1/19.
 */
//创建控制器
myapp.controller("tabsCtrl",function($scope,shopCart){
    var cart = shopCart.findAll();

    $scope.total = function(){
        var sum = 0;
        angular.forEach(cart,function(item){
            sum += item.number;
        });
        return sum;
    };
});