/**
 * Created by hxsd on 2017/1/18.
 */
$(function(){

    $('#Wish .tabItem').eq(0).show();
    $('#Wish').find('li').each(function(index){
        $(this).on('click',function(){
            $('#Wish').find('li').removeClass('ac').eq(index).addClass('ac');
            $('#Wish .tabItem').hide().eq(index).show();
        })
    });
})