$(function(){
   
    $(".topzy").hover(function(){
      
           $(this).find(".toptbs").show();
           },
           function(){
           $(this).find(".toptbs").hide();

    });
    $(".texta").click(function(){
    	  $(this).next().show();
    	  return false;
      });
    $(document).click(function(){
    	  $(".texta").next().hide();
    });
    $(".bendi1ai1").hover(function(){
        $(this).css("background-position","-640px -125px");
    },function(){
        $(this).css("background-position","-640px -100px");
    });
    $(".bendi1ai").hover(function(){
        $(this).css("background-position","-640px -75px");
    },function(){
        $(this).css("background-position","-640px -50px");
    });
    $(".hide").hover(function(){
        $(this).find(".bendi").show();
    },function(){
         $(this).find(".bendi").hide();
    });
    $(".biaoq1a1").hover(function(){
        $(this).css("background-position","-465px -125px");
    },function(){
        $(this).css("background-position","-465px -100px");
    });
     $(".pl").click(function(){
          $(".combox1").hide();
          $(".combox").show();
          return false;
    });
    $(document).click(function(){
          $(".combox").hide();
          $(".combox1").show();
          return false;
      }); 
     $(".combox").click(function(){
            $(".combox").show();
            return false;
     });
      $(".zz").hover(function(){
           $(this).find(".weixiao").show();
     },function(){
           $(this).find(".weixiao").hide();
   
     });
      
      $(".combox1").click(function(){
           
           $(".combox").show();
           $(".combox1").hide();
           return false;
      });
      $(".fabiao").click(function(){
        var html="";
        var w=$(".comboxin").val();
        html+='<div class="yipl">';
        html+='  <div class="ui-avatar">';
        html+='     <img class="juest" src="css/images/30.png">';
        html+='  </div>';
        html+='  <div class="comments-content">';
        html+='     <a class="coma" href="">juest:</a>';
        html+="     "+w+"";
        html+='  </div>';
        html+='</div>';
        $(this).parent().parent().parent().find(".yomm").append(html);
      });
      $(".butt").click(function(){
         var liuyan="";
         var p=$(".texta").val();
         liuyan+='<li class="lt1">';
         liuyan+='<a class="lt1a" href="#">死相伴:</a>';
         liuyan+="<span>"+p+"</span>";
         liuyan+="</li>";
         $(this).parent().parent().next().append(liuyan);
      });
  });
         

