$(function(){
	$(".maina").click(function(){

		$(this).parent().stop(true,false).animate(
		{
			"top":"-845px",
		}
			,1000);
		$(this).parent().next().stop(true,false).animate(
		{
			"top":"-845px",
		}
			,1000);
		
		$(this).parent().next().find(".same").css({
			"transform":"scale(1.03)"
		});
		
	});
	$(".up").click(function(){

		$(this).parent().stop(true,false).animate(
		{
			"top":"0px",
		}
			,1000);
		$(this).parent().prev().stop(true,false).animate(
		{
			"top":"0px",
		}
			,1000);
	});
	$(".m2lia").hover(function(){
         $(this).find(".same").attr("src","css/images/b2.png");
	},function(){
		$(this).find(".same").attr("src","css/images/b1.png");
	});
	$(".m2li1a").hover(function(){
         $(this).find(".same").attr("src","css/images/c2.png");
	},function(){
		$(this).find(".same").attr("src","css/images/c1.png");
	});
	$(".m2li2a").hover(function(){
         $(this).find(".same").attr("src","css/images/d2.png");
	},function(){
		$(this).find(".same").attr("src","css/images/d1.png");
	});

	// $(window).scroll(function(){
	// 	var scrolls = $(this).scrollTop();
	// 	alert(scrolls);
	// });
	
	// 绑定方式 
    $('.main2').bind('mousewheel', function(event, delta) {  
	    if(delta>0)
	    {
	    	
	    	$(".up").trigger("click"); 
	    }
	});  
	$('.main1').bind('mousewheel', function(event, delta) {  
	     if(delta<0)
	    {
	    	$(".maina").trigger("click"); 
	    	
	    } 
	}); 
	  
	// // 事件函数方式  
	// $('.main2').mousewheel(function(event, delta) {  
	//     alert(delta);
	// });  


});


















