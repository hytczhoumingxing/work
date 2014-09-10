$(function(){
	$(".navli2").hover(function(){
		$(this).find(".jcc").show();

	},function(){
		$(this).find(".jcc").hide();
});
	$(".navli3").hover(function(){
		$(this).find(".zhcp").show();

	},function(){
		$(this).find(".zhcp").hide();
});
	$(".navli4").hover(function(){
		$(this).find(".xc").show();

	},function(){
		$(this).find(".xc").hide();
});
	$(".navli5").hover(function(){
		$(this).find(".rqss").show();

	},function(){
		$(this).find(".rqss").hide();
});
	$(".navli7").hover(function(){
		$(this).find(".sc").show();

	},function(){
		$(this).find(".sc").hide();
});
	time=setInterval("show()",2000);
	
	$(".mida").hover(function(){
		show();
	},function(){
    
	});
	
	$(".cxli2").mouseover(function(){
		 lr();
	});
	
}); var time;
    var index=1;
      function show(){
		var le=4+100*(index-1);
		$(".mainmidcontent").css("background",'url("css/images/'+index+'.jpg")');
		$(".flow").css("left",""+le+"px");
		$(".mida").removeClass("current");
		$("#controlspan"+index).addClass("current");
		index++;
		if(index>=4)
		{
 			index=1;
		}
	} 
	function lr(){
		$(".cxmainul li").removeClass("cxtitle1");
		$(".cxli2").addClass("cxtitle1");
	}   