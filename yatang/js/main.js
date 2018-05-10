var i=0;
function a() {
    i = i == 4 ? 0 : i;
    document.getElementById("imageul").style.cssText = "margin-left:" + (-1920 * i) + "px;";
    i++;
    console.log(i);
    
    if(i==1){
		yi.style.cssText=hong
		er.style.cssText=bai
		san.style.cssText=bai
        si.style.cssText=bai
	
	}else if(i==2){
		yi.style.cssText=bai
		er.style.cssText=hong
		san.style.cssText=bai
        si.style.cssText=bai
	
	}else if(i==3){
		yi.style.cssText=bai
		er.style.cssText=bai
		san.style.cssText=hong
        si.style.cssText=bai

	}else if(i==4){
		yi.style.cssText=bai
		er.style.cssText=bai
		san.style.cssText=bai
        si.style.cssText=hong
	
	}
}
    setInterval(a, 2000);


var yi=document.getElementById("yi")
	var er=document.getElementById("er")
	var san=document.getElementById("san")
    var si=document.getElementById("si")
	var hong="background:yellow;";
	var bai="background:#fff;";


	yi.onclick=function(){
		i=0;
		document.getElementById("imageul").style.cssText="margin-left:"+(-1920*i)+"px;";
	}
	er.onclick=function(){
		i=1;
		document.getElementById("imageul").style.cssText="margin-left:"+(-1920*i)+"px;";
	}
	san.onclick=function(){
		i=2;
		document.getElementById("imageul").style.cssText="margin-left:"+(-1920*i)+"px;";
	}
    si.onclick=function(){
		i=3;
		document.getElementById("imageul").style.cssText="margin-left:"+(-1920*i)+"px;";
	}

    