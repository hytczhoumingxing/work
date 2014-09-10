$(function(){

  $("#search").hover(function(){

     $(this).find(".menu").css({
      "background-color":"#fff",
      "border":"2px solid #66666"});
     $(this).find(".menu").show();

    },
    function(){ 

     $(this).find(".menu").css({"background-color":"","border":"0px"});
     $(this).find(".menu").hide();

 });

  $(".la").hover(function(){

     $(this).css({"background-color":"#e5e5e5"});
    
    },function(){

     $(this).css({"background-color":""});
    
 });
 $(function(){
    $(".news").mouseover(function(){
   
    $(".news").toggleClass("activeTd");

    });

 });
 $(function(){
    $(".lm7Title ").mouseover(function(){
   
    $(".lm7Title ").toggleClass("Speciallm7Title");

    });

 });
  $(function(){
    $(".news1").mouseover(function(){
   
    $(".news1").toggleClass("activeTd");

    });

 });
  $(function(){

       $(".RightLi21a").hover(function(){

        //$(this).css({"background-color":"#f00"});
            
       $(this).parent().parent().find(".RightMore").show();

       },function(){



       });

  });

   $(function(){

    $(".RightTitle").hover(function(){


     $(this).parent().parent().find(".RightMore").show();

        $("").removeClass(".RightMore");
    },function(){}) ;



   });
 });
 