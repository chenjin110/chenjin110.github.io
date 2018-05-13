// //var i=0;
// //
// //function a(){
// //		i=i==3?0:i;
// //
// //        document.getElementById("box").style.cssText="margin-left:"+(-1170*i)+"px;";
// //
// //		i++;
// //		console.log(i);
// //}
// //
// //setInterval(a,3000);
// //
// //
// //
//
// var aa=document.getElementById("aa");
// //var d=document.getElementById("d");
// //var c=document.getElementById("c");
// //var b=document.getElementById("b");
// //
// //
// var aa1=document.getElementById("aa1");
// //var d1=document.getElementById("d1");
// //var c1=document.getElementById("c1");
// //var b1=document.getElementById("b1");
// //
//
// aa.onclick=function(){
//     aa1.style.display="block"
// }
//

        $(function () {
            $('.slide .icon li').not('.up,.down').mouseenter(function () {
                $('.slide .info').addClass('hover');
                $('.slide .info li').hide();
                $('.slide .info li.' + $(this).attr('class')).show(); //.slide .info li.qq
            });
            $('.slide').mouseleave(function () {
                $('.slide .info').removeClass('hover');
            });
            $('#btn').click(function () {
                $('.slide').toggle();
                if ($(this).hasClass('index_cy')) {
                    $(this).removeClass('index_cy');
                    $(this).addClass('index_cy2');
                }
                else {
                    $(this).removeClass('index_cy2');
                    $(this).addClass('index_cy');
                }
            });
        });


var img = document.getElementsByTagName("img");
var t = document.getElementsByClassName("t");
for (var i = 0; i < t.length; i++) {
    t[i].style.height = img[4].clientHeight + "px";
    t[i].style.width = img[4].clientWidth + "px";
}
$(".t").mouseover(function () {
    $(this).css("background", "rgba(0,0,0,.1)")
}).mouseout(function () {
    $(this).css("background", "rgba(0,0,0,.6)")
});

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"1","bdPos":"left","bdTop":"100"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];