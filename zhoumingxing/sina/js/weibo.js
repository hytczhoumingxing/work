$(function(){
    $(".pt").click(function(){
      $(".flag").hide();
      $(this).parent().next().show();
	});
	 $(".ewm").click(function(){
     $(".flag").hide();
     $(this).parent().next().next().show();

	});
     $(".dx").click(function(){
     $(".flag").hide();
     $(this).parent().next().next().next().show();

    });
      $(".otheras").click(function(){
      $(this).parent().next().show();
      return false;

    });
     $(document).click(function(){
        $(".otheras").parent().next().hide();
     });
});

