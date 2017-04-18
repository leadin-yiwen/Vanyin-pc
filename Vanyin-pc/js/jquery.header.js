$(function() {

	$(".printmenu li.pmli").hover(function() {
		ShowPrintCase();
	})

	

	$(".printmenubox .printmenutitle").hover(function() {

		$(".printmenubox .printmenu").stop().animate({
			"height": "450px"
		}, 500);

	})

})

var ShowPrintCase = function() {

	$(".printcasebody").show().stop().animate({
		"opacity": "1"
	}, 300, function() {

		$(".printcasebody .printcaselist").stop().animate({
			"opacity": "1"
		}, 500);

	});

}

var ClosePrintMenu = function(type) {

	$(".printcasebody").show().stop().animate({
		"opacity": "0"
	}, 500, function() {
		$(".printcasebody .printcaselist").css("opacity", "0");
		$(".printcasebody").hide();
		if(type != "index") {
			$(".printmenubox .printmenu").stop().animate({
				"height": "0px"
			}, 300)
		}
	});

}