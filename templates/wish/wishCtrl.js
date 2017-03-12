/**
 * Created by hxsd on 2017/1/18.
 */
myapp.controller('wishCtrl',function($scope,$http){

    $('#wish .tabItem').eq(0).show();
    $('#wish').find('li').each(function(index){
        $(this).on('click',function(){
            $('#wish').find('li').removeClass('ac').eq(index).addClass('ac');
            $('#wish .tabItem').hide().eq(index).show();
        })
    });


    // 准备商品数据
    $http.get('data/wish.json').success(function(data){
        $scope.wishs=data;
    });




});