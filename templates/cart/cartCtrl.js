/**
 * Created by hxsd on 2017/1/18.
 */
myapp.controller("cartCtrl",function($scope,shopCart){

    $scope.cart = shopCart.findAll();

    // 求总金额
    $scope.money = function(){
        var total = 0;
        // 遍历统计
        angular.forEach($scope.cart,function(item){
            total += item.number * item.product.price;   // 累加金额
        });
        return total;
    };

    // 响应加入购物车代码
    $scope.remove = function(title){
        shopCart.remove(title);
    };
});