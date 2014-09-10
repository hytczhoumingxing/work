$(function(){
     setInterval("showFlashImage()",1000);
    $(".controls").click(function(){
      showFlashImages();
   	});
     time=setInterval("showFlashImages()",1000);
     $(".media").hover(function(){
        
         clearInterval(time);

           },function(){

          time=setInterval("showFlashImages()",1000);
       });
          
 });
var currindex=1;
function showFlashImage(){
	$(".duomi_activity").css("background-image",'url("css/images/'+currindex+'.jpg")');
	currindex++;
	if(currindex>=5)
	{
		currindex=1;
	}
}
var time;
var currindexl=5;
function showFlashImages(){
	$(".focus").css("background-image",'url("css/images/'+currindexl+'.jpg")');
	$(".controls").removeClass("currentspan");
	$("#controlspan"+currindexl).addClass("currentspan");

	   currindexl++;
	if(currindexl>=8)
	{
		currindexl=5;
	}
}

 /*$(".footli").hover(function(){

       $(this).css({"background-color":"#e5e5e5"});

 },function(){

 	   $(this).css({"background-color":""});
 });
 
*/     
