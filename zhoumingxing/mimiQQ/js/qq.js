$(function(){

	
  $("#qq").draggable();
	$(".friendA").click(function(){
		var friendID = $(this).attr("friendID");
		var chatDivID = "chat" + friendID;
    // alert( chatDivID);
      $(".qqChat").css("z-index","15");
      $("#" + chatDivID).css("z-index","16");
		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			return;
		}
		$(this).attr("isOpen","true");
		
		var friendName = $(this).attr("friendName");
		var html ="";
		html += '		<div class="qqChat qqwindow" id="' + chatDivID + '" >';
		html += '			<div class="chatTitle">';
		html += '				<div class="chatMenu" friendAID="friendA'+friendID+'" chatDivID="'+chatDivID+'" smallid="'+friendID+'">最小化</div>';
		html += '				<div class="chatFriendName">' + friendName +'</div>';
		html += '				<div friendAID = "friendA'+friendID+'" chatDivID="' + chatDivID + '" class="chatClose" closebtnid="'+friendID+'"">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory" hisid='+chatDivID+'>';
   
    html += '      </div>';
		html += '			<div class="chatControl">';
    html += '                <div class="biaoqing">';
    html += '                    <span class="bqspan"></span> ';          
    html += '                 </div>';
    html += '                <div class="wenben"><input class="inparea" shuruid='+chatDivID+'></input></div>';
    html += '                <div class="fasong" btnid='+chatDivID+'>';
    html += '                            <span>发送</span> '; 
    html += '                         </div>';
		html += '           </div>';
		html += '      <div class="talkboxfaceimg">';
    html += '            <div class="talkboxfaceimg1"></div>';
    html += '      </div>';
    html += '		</div>';
  
		  $("body").append(html);
      $(".qqwindow").draggable();
		//置顶
		$(".qqChat").click(function(){
			$(".qqChat").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatClose").click(function(){
			var curCloseDivID = $(this).attr("closebtnid");
      var curCloseDivID1 =$(this).attr("chatDivID");
      // alert(curCloseDivID);
			$("#" + curCloseDivID1).remove();
      $(".friendA[friendID="+curCloseDivID+"]").attr("isOpen","false");
		});
    $(".chatMenu").click(function(){
          var cursmallDivID=$(this).attr("smallid");
          var cursmallDivID1=$(this).attr("chatDivID");
           $("#" + cursmallDivID1).remove();
           $(".friendA[friendID="+cursmallDivID+"]").attr("isopen","false");
    });

		var divTop = Math.random()*100+10;
		var divLeft = Math.random()*240+320;

		$("#" + chatDivID).css({
			"top": divTop + "px",
			"left": divLeft + "px"
		});
	});
     $(".clo").click(function(){
           $(this).parent().parent().parent().css("background-color","#ff1");
        });   
     $(".clo1").click(function(){
           $(this).parent().parent().parent().css("background-color","#f00");
        }); 
      $(".clo2").click(function(){
           $(this).parent().parent().parent().css("background-color","#ddd");
        }); 
       $(".clo3").click(function(){
           $(this).parent().parent().parent().css("background-color","#fff");
        }); 
        $(".myli").click(function(){
        	var list=$(this).attr("dowm");
        	var img=$(this).find(".myf");
        	if(list=="true"){
               $(".haoyouul").show();
               $(this).attr("dowm","false");
               img.css("background-image","url('css/images/openx.png')");
        	}
        	else{
        		$(".haoyouul").hide();
        		$(this).attr("dowm","true");
        		 img.css("background-image","");
        	}
           
        });            
        $(".myli1").click(function(){
        	var list=$(this).attr("dowm");
        	var img=$(this).find(".fs");
        	if(list=="true"){
               $(".friendul").show();
               $(this).attr("dowm","false");
               img.css("background-image","url('css/images/openx.png')");
        	}
        	else{
        		$(".friendul").hide();
        		$(this).attr("dowm","true");
        		 img.css("background-image","");
        	}
           
        }); 
        $(".myli2").click(function(){
        	var list=$(this).attr("dowm");
        	var img=$(this).find(".stu");
        	if(list=="true"){
               $(".txul").show();
               $(this).attr("dowm","false");
               img.css("background-image","url('css/images/openx.png')");
        	}
        	else{
        		$(".txul").hide();
        		$(this).attr("dowm","true");
        		 img.css("background-image","");
        	}
           
        });                       
         $(".qun").click(function(){
           $(".nomals").css({"color":"#666" ,"border-bottom":"2px solid #ccc"});
           $(".same").hide();
           $(this).parent().parent().next().next().show();
           $(this).css({"color":"#0aa7ff" ,"border-bottom":"2px solid #0aa7ff"});
        }); 
        $(".hy").click(function(){
           $(".nomals").css({"color":"" ,"border-bottom":""});
           $(".same").hide();
           $(this).parent().parent().next().show();
        });
         $(".setting3").click(function(){
         	var zhan=$(this).attr("zhankai");
         	var dowmimg=$(this).find(".setting3s2");
         	if (zhan=="no"){
                 $(".about").show(); 
                 $(this).attr("zhankai","yes"); 
                 dowmimg.css("background-image","url('css/images/openx.png')");
         	}
            else{
            	 $(".about").hide();
            	 $(this).attr("zhankai","no");
            	 dowmimg.css("background-image","");  
            }
        });
         $(".set1state").click(function(){

             var xiala=$(this).attr("isopen");
             if (xiala=="false"){
                 $(".zhuangtai").show();
                 $(this).attr("isopen","true");
             }
             else{

             	 $(".zhuangtai").hide();
                 $(this).attr("isopen","false");
             }
         });

       $(".people").click(function(){
           
           // alert($(".bottallS").css("background"));
           // alert($(".chat .bottulli").css("background"));
           $(".equ").hide();
           $(this).parent().parent().prev().prev().prev().show();
           $(".bottall").css("background","");
           $(".bottallS").css({"background-image":"url('css/images/tab1b.png')","background-size":"34px 34px"});
           $(this).find(".bottulli1").css({"background":"url('css/images/tab2b.png')","background-size":"34px 34px"});
           
       });
        $(".chat").click(function(){

           $(".equ").hide();
           $(".bottall").css("background","");
           $(this).parent().parent().prev().prev().prev().prev().show();
           $(this).find(".bottulli1").css({"background":"url('css/images/tab1.png')","background-size":"34px 34px"});

        });
         $(".find").click(function(){

           $(".equ").hide();
           $(this).parent().parent().prev().prev().show();
           $(".bottall").css("background","");
           $(".bottallS").css({"background-image":"url('css/images/tab1b.png')","background-size":"34px 34px"});
           $(this).find(".bottulli2").css({"background":"url('css/images/tab3b.png')","background-size":"34px 34px"});
        });
        $(".set").click(function(){

           $(".equ").hide();
           $(this).parent().parent().prev().show();
           $(".bottall").css("background","");
           $(".bottallS").css({"background-image":"url('css/images/tab1b.png')","background-size":"34px 34px"});
           $(this).find(".bottulli3").css({"background":"url('css/images/tab4b.png')","background-size":"34px 34px"});
        });  

        $(document).on("click",".fasong",function(){
          $(sentmessage(this));
        });
        $(".huad").click(function(){
             var c=$(this).attr("turn");
             if(c=="right"){
                  $(this).find(".ball").css("left","1.9em");
                  $(this).attr("turn","left");
             }
             else{
                 $(this).find(".ball").css("left","");
                 $(this).attr("turn","right");
             }
        }); 
        $(".setting2").click(function(){
             $(".setkuang").show();
        });
        $(".settitleL").click(function(){
             $(".setkuang").hide();
        }); 
        $(".zhuangtai li").click(function(){
               var ztai=$(this).find("i");
               var classname=ztai.attr("class");
               $(".statemore1").removeClass("ztai1");
               $(".statemore1").removeClass("ztai2");
               $(".statemore1").removeClass("ztai3");
               $(".statemore1").removeClass("ztai4");
               $(".statemore1").removeClass("ztai5");
               $(".statemore1").removeClass("ztai6");
               $(".statemore1").removeClass("ztai7");
               $(".statemore1").addClass(classname);
        });                                                                                                                                                                                                                                                                      
});

function sentmessage(ele){
    var messageid=$(ele).attr("btnid");
    var message=$(".inparea[shuruid="+messageid+"]").val();
    var html="";
    html += '         <div class="content">';
    html += '             <div class="talktime"><span></span></div>';
    html += '             <a  class="talkimg" href=""><img src="css/images/pig.png"></a>';
    html += '             <div class="talkleft">';
    html += '                   <span>你的益达</span>';
    html += '                    <p>'+message+'</P>';
    html += '             </div>';
    html += '          </div>';
    $(".chatHistory[hisid="+messageid+"]").append(html);
    // alert(message);
}