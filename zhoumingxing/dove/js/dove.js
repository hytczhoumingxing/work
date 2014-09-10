$(function(){
     $(".menuli3").hover(function(){
          $(this).find(".xiaul").show();
          $(this).css("background-image","url('css/images/main.png')");

     },function(){
     	$(this).find(".xiaul").hide();
     	$(this).css("background-image","");
     });
     
      $(".menuli4").hover(function(){
          $(this).find(".xiaul1").show();
          $(this).css("background-image","url('css/images/main.png')");

     },function(){
     	$(this).find(".xiaul1").hide();
     	$(this).css("background-image","");
     });
       $(".menuli5").hover(function(){
          $(this).find(".xiaul2").show();
          $(this).css("background-image","url('css/images/main.png')");

     },function(){
     	$(this).find(".xiaul2").hide();
     	$(this).css("background-image","");
     });

     $(".xiali").hover(function(){
          $(this).find(".xialia").css({"background-color":"#eedebb",
                       "color":"#666"});
     },function(){
          $(this).find(".xialia").css({"background-color":"",
                       "color":""});
     });
       $(".ff").click(function(){
           
           flashimages();
       });
         
         time=setInterval("flashimages()",1000);
        $(".flashin").hover(function(){ 
             clearInterval(time);

        },function(){
            time=setInterval("flashimages()",1000);
        });



      $(".sub2").hover(function(){
      	 $(this).css("background-position","top");

      },function(){
      	$(this).css("background-position","");
      });
      $(".sub1").hover(function(){
      	 $(this).css("background-position","top");

      },function(){
      	$(this).css("background-position","");
      });
      $(".sub3").hover(function(){
      	 $(this).css("background-position","top");

      },function(){
      	$(this).css("background-position","");
      });
      $(".sub4").hover(function(){
      	 $(this).css("background-position","top");

      },function(){
      	$(this).css("background-position","");
      });
});
     var index=1;
     var time;
     function flashimages()
     {
     	$(".flashin").css("background-image",'url("css/images/'+ index +'.jpg")');
     	$(".f1").removeClass("m");
     	$("#cspan"+index).addClass("m");

     	 index++;
     	if(index>=5)
     	{
     		index=1;
     	}
     }
       