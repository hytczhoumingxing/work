$(function(){

 
  $(".flashli").click(function(){
  	 flashimage();
  });
   setInterval("flashimage()",1500);
});
var index=1;
 function flashimage()
 {
 	 $(".flash").css("background-image",'url("css/images/'+ index +'.jpg")');

 	 $(".flashli").removeClass("same");
 	 $("#currspan"+index).addClass("same");
 	 index++;
 	 if(index>=5){
 	 	index=1;
 	 }
 }