$(function(){
     setInterval("showFlash()",2000);
     $(".showhide").hover(function(){
  
     	$(this).find(".bb").show();
  
   },function(){
   		$(this).find(".bb").hide();

   });
     $(".ne").hover(function(){
  
     	$(this).find(".newsp").show();
   
   },function(){
   		$(this).find(".newsp").hide();

   }); 
      $(".hd1").hover(function(){
  
     	$(this).find(".hdp").show();
   
   },function(){
   		$(this).find(".hdp").hide();

   });
    $(".next").click(function(){

           var m=currindex+1;
           showFlash(m);
    });
    $(".left").click(function(){

           var m=currindex+1;
           showFlash(m);
    });
});

 var currindex=1;
 function showFlash(){
      $(".image").css("background-image",'url("css/images/'+currindex+'.jpg")');
         currindex++;
      if(currindex>=4)
      {
          currindex=1;
      }
}