/**
 * Created by hxsd on 2017/1/18.
 */
myapp.controller('detailCtrl',function($scope,$ionicHistory,$stateParams){

    $scope.goBack = function() {
        $ionicHistory.goBack();
    };

    $('#content .tabItem').eq(0).show();
    $('#content').find('li').each(function(index){
        $(this).on('click',function(){
            $('#content').find('li').removeClass('ac').eq(index).addClass('ac');
            $('#content .tabItem').hide().eq(index).show();
        })
    });


});