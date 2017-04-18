$(function(){
		$(".printcasebox ul").find(".remarktext").hover(function(){
			
			$(this).find("span").show().stop().animate({"opacity":"1"},500);
		},function(){
			
			$(this).find("span").stop().animate({"opacity":"0"},500,function(){
				
				$(this).hide();
			});
			
		})
	
	
})
