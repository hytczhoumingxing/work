$(function(){
$(".item").hover(function(){
 
    $(this).stop().animate({

    	"width":"130%",
    	"height":"130%",
    	"margin-left":"-20px",
    	"margin-top":"-20px",
    },500);
    },function(){
      $(this).animate({

    	"width":"100%",
    	"height":"100%",
    	"margin-left":"0px",
    	"margin-top":"0px",
    },500);
});
   $(".chose").click(function(){
            $(this).next().show();
            return false;
   });
   $(document).click(function(){
            $(".chosexia").hide();
   }); 
   $(".chosli").click(function(){ 

          var sex=$(this).find(".same").html();
          $(".man").html(sex);
          //var m=$().attr(sex);
         //$(".man").addClass(sex);
        
   }); 
    $(".chose1").click(function(){
            $(this).next().show();
            return false;
   });
   $(document).click(function(){
            $(".chosexia1").hide();
   }); 
    $(".chos1li").click(function(){ 

          var sui=$(this).find(".year").html();
          $(".age").html(sui);
          //var m=$().attr(sex);
         //$(".man").addClass(sex);
        
   });  

    $(".lovecaseR1").mouseover(function(){
        $(this).find(".yiny").animate({bottom:"0px"},300);
    });
    $(".lovecaseR1").mouseleave(function(){
        $(this).find(".yiny").animate({bottom:"-46px"},200);
    });
});