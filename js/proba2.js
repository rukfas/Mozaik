$(document).ready(function(){
	$(".sidebar51").click(function(){
		$("#jedan").show();
		$(".ispodjedan").show();
		$("#dva").hide();
		$("#tri").hide();
		$("#ispodtri").hide();
		$("#ispoddva").hide();
		$(".sidebar51").css('height','20vw');
		$(".sidebar50").css('height','16vw');
		$(".sidebar3").css('height','16vw');
		$(".sidebar51").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar50").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar3").css('backgroundColor','rgba(89,130,52,0.7)');
		
		
		$(".sidebar3").css('-webkit-filter','grayscale(90%)');
		$(".sidebar51").css('-webkit-filter','grayscale(0%)');
		$(".sidebar50").css('-webkit-filter','grayscale(90%)');
	
	});
	$(".sidebar50").click(function(){
		$("#dva").show();
		$("#jedan").hide();
		$("#tri").hide();
		$(".ispodjedan").hide();
		$("#ispodtri").hide();
		$("#ispoddva").show();
		$(".sidebar51").css('height','16vw');
		$(".sidebar50").css('height','20vw');
		$(".sidebar3").css('height','16vw');
		$(".sidebar51").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar50").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar3").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar3").css('-webkit-filter','grayscale(90%)');
		$(".sidebar50").css('-webkit-filter','grayscale(0%)');
		$(".sidebar51").css('-webkit-filter','grayscale(90%)');

		
	});
	
	$(".sidebar3").click(function(){
		$("#tri").show();
		$("#jedan").hide();
		$("#dva").hide();
		$(".ispodjedan").hide();
		$("#ispodtri").show();
		$("#ispoddva").hide();
		$(".sidebar51").css('height','16vw');
		$(".sidebar50").css('height','16vw');
		$(".sidebar3").css('height','20vw');
		$(".sidebar51").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar50").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar3").css('backgroundColor','rgba(89,130,52,1)');
		
		$(".sidebar3").css('-webkit-filter','grayscale(0%)');
		$(".sidebar51").css('-webkit-filter','grayscale(90%)');
		$(".sidebar50").css('-webkit-filter','grayscale(90%)');
	
		
	});
	$(".sidebar4").click(function(){
		$("#cetiri").show();
		$("#pet").hide();
		$("#sest").hide();
		$("#ispodpet").hide();
		$(".ispodcetiri").show();
		$("#ispodsest").hide();
		$(".sidebar4").css('height','20vw');
		$(".sidebar5").css('height','16vw');
		$(".sidebar6").css('height','16vw');
		$(".sidebar4").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar5").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar6").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar4").css('-webkit-filter','grayscale(0%)');
		$(".sidebar5").css('-webkit-filter','grayscale(90%)');
		$(".sidebar6").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar5").click(function(){
		$("#pet").show();
		$("#cetiri").hide();
		$("#sest").hide();
		$(".ispodcetiri").hide();
		$("#ispodpet").show();
		$("#ispodsest").hide();
		$(".sidebar5").css('height','20vw');
		$(".sidebar4").css('height','16vw');
		$(".sidebar6").css('height','16vw');
		$(".sidebar5").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar4").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar6").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar4").css('-webkit-filter','grayscale(90%)');
		$(".sidebar5").css('-webkit-filter','grayscale(0%)');
		$(".sidebar6").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar6").click(function(){
		$("#sest").show();
		$("#pet").hide();
		$("#cetiri").hide();
		$("#ispodpet").hide();
		$("#ispodsest").show();
		$(".ispodcetiri").hide();
		$(".sidebar6").css('height','20vw');
		$(".sidebar5").css('height','16vw');
		$(".sidebar4").css('height','16vw');
		$(".sidebar6").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar5").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar4").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar4").css('-webkit-filter','grayscale(90%)');
		$(".sidebar5").css('-webkit-filter','grayscale(90%)');
		$(".sidebar6").css('-webkit-filter','grayscale(0%)');

	});
	$(".sidebar7").click(function(){
		$(".sedam").show();
		$("#osam").hide();
		$("#devet").hide();
		$("#ispodosam").hide();
		$(".ispodsedam").show();
		$("#ispoddevet").hide();
		$(".sidebar7").css('height','20vw');
		$(".sidebar8").css('height','16vw');
		$(".sidebar9").css('height','16vw');
		$(".sidebar7").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar8").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar9").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar7").css('-webkit-filter','grayscale(0%)');
		$(".sidebar8").css('-webkit-filter','grayscale(90%)');
		$(".sidebar9").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar8").click(function(){
		$("#osam").show();
		$(".sedam").hide();
		$("#devet").hide();
		$(".ispodsedam").hide();
		$("#ispodosam").show();
		$("#ispoddevet").hide();
		$(".sidebar8").css('height','20vw');
		$(".sidebar7").css('height','16vw');
		$(".sidebar9").css('height','16vw');
		$(".sidebar8").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar7").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar9").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar7").css('-webkit-filter','grayscale(90%)');
		$(".sidebar8").css('-webkit-filter','grayscale(0%)');
		$(".sidebar9").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar9").click(function(){
		$("#devet").show();
		$(".sedam").hide();
		$("#osam").hide();
		$(".ispodsedam").hide();
		$("#ispoddevet").show();
		$("#ispodosam").hide();
		$(".sidebar9").css('height','20vw');
		$(".sidebar7").css('height','16vw');
		$(".sidebar8").css('height','16vw');
		$(".sidebar9").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar7").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar8").css('backgroundColor','rgba(89,130,52,0.7)');

		$(".sidebar7").css('-webkit-filter','grayscale(90%)');
		$(".sidebar8").css('-webkit-filter','grayscale(90%)');
		$(".sidebar9").css('-webkit-filter','grayscale(0%)');
	});
	$(".sidebar10").click(function(){
		$("#deset").show();
		$("#jedanaest").hide();
		$("#dvanaest").hide();
		
		$(".ispoddeset").show();
		$("#ispodjedanaest").hide();
		$("#ispoddvanaest").hide();
		$(".sidebar10").css('height','20vw');
		$(".sidebar11").css('height','16vw');
		$(".sidebar12").css('height','16vw');
		$(".sidebar10").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar11").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar12").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar10").css('-webkit-filter','grayscale(0%)');
		$(".sidebar11").css('-webkit-filter','grayscale(90%)');
		$(".sidebar12").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar11").click(function(){
		$("#jedanaest").show();
		$("#dvanaest").hide();
		$("#deset").hide();
		
		$("#ispodjedanaest").show();
		$("#ispoddvanaest").hide();
		$(".ispoddeset").hide();
		$(".sidebar11").css('height','20vw');
		$(".sidebar10").css('height','16vw');
		$(".sidebar12").css('height','16vw');
		$(".sidebar11").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar10").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar12").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar10").css('-webkit-filter','grayscale(90%)');
		$(".sidebar11").css('-webkit-filter','grayscale(0%)');
		$(".sidebar12").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar12").click(function(){
		$("#dvanaest").show();
		$("#jedanaest").hide();
		$("#deset").hide();
		
		$("#ispoddvanaest").show();
		$("#ispodjedanaest").hide();
		$(".ispoddeset").hide();
		$(".sidebar12").css('height','20vw');
		$(".sidebar11").css('height','16vw');
		$(".sidebar10").css('height','16vw');
		$(".sidebar12").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar11").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar10").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar10").css('-webkit-filter','grayscale(90%)');
		$(".sidebar11").css('-webkit-filter','grayscale(90%)');
		$(".sidebar12").css('-webkit-filter','grayscale(0%)');

	});
	$(".sidebar13").click(function(){
		$("#trinaest").show();
		$("#cetrnaest").hide();
		$("#petnaest").hide();

		$(".ispodtrinaest").show();
		$("#ispodcetrnaest").hide();
		$("#ispodpetnaest").hide();
		$(".sidebar13").css('height','20vw');
		$(".sidebar14").css('height','16vw');
		$(".sidebar15").css('height','16vw');
		$(".sidebar13").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar14").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar15").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar13").css('-webkit-filter','grayscale(0%)');
		$(".sidebar14").css('-webkit-filter','grayscale(90%)');
		$(".sidebar15").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar14").click(function(){
		$("#cetrnaest").show();
		$("#trinaest").hide();
		$("#petnaest").hide();

		$("#ispodcetrnaest").show();
		$(".ispodtrinaest").hide();
		$("#ispodpetnaest").hide();
		$(".sidebar14").css('height','20vw');
		$(".sidebar13").css('height','16vw');
		$(".sidebar15").css('height','16vw');
		$(".sidebar14").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar13").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar15").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar13").css('-webkit-filter','grayscale(90%)');
		$(".sidebar14").css('-webkit-filter','grayscale(0%)');
		$(".sidebar15").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar15").click(function(){
		$("#petnaest").show();
		$("#trinaest").hide();
		$("#cetrnaest").hide();

		$("#ispodpetnaest").show();
		$("#ispodcetrnaest").hide();
		$(".ispodtrinaest").hide();
		$(".sidebar15").css('height','20vw');
		$(".sidebar14").css('height','16vw');
		$(".sidebar13").css('height','16vw');
		$(".sidebar15").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar14").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar13").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar13").css('-webkit-filter','grayscale(90%)');
		$(".sidebar14").css('-webkit-filter','grayscale(90%)');
		$(".sidebar15").css('-webkit-filter','grayscale(0%)');

	});
	$(".sidebar16").click(function(){
		$("#sesnaest").show();
		$("#sedamnaest").hide();
		$("#osamnaest").hide();

		$(".ispodsesnaest").show();
		$("#ispodsedamnaest").hide();
		$("#ispodosamnaest").hide();
		$(".sidebar16").css('height','20vw');
		$(".sidebar17").css('height','16vw');
		$(".sidebar18").css('height','16vw');
		$(".sidebar16").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar17").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar18").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar16").css('-webkit-filter','grayscale(0%)');
		$(".sidebar17").css('-webkit-filter','grayscale(90%)');
		$(".sidebar18").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar17").click(function(){
		$("#sedamnaest").show();
		$("#sesnaest").hide();
		$("#osamnaest").hide();

		$("#ispodsedamnaest").show();
		$(".ispodsesnaest").hide();
		$("#ispodosamnaest").hide();
		$(".sidebar17").css('height','20vw');
		$(".sidebar16").css('height','16vw');
		$(".sidebar18").css('height','16vw');
		$(".sidebar17").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar16").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar18").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar16").css('-webkit-filter','grayscale(90%)');
		$(".sidebar17").css('-webkit-filter','grayscale(0%)');
		$(".sidebar18").css('-webkit-filter','grayscale(90%)');

	});
	$(".sidebar18").click(function(){
		$("#osamnaest").show();
		$("#sedamnaest").hide();
		$("#sesnaest").hide();

		$("#ispodosamnaest").show();
		$("#ispodsedamnaest").hide();
		$(".ispodsesnaest").hide();
		$(".sidebar18").css('height','20vw');
		$(".sidebar17").css('height','16vw');
		$(".sidebar16").css('height','16vw');
		$(".sidebar18").css('backgroundColor','rgba(89,130,52,1)');
		$(".sidebar17").css('backgroundColor','rgba(89,130,52,0.7)');
		$(".sidebar16").css('backgroundColor','rgba(89,130,52,0.7)');
		
		$(".sidebar16").css('-webkit-filter','grayscale(90%)');
		$(".sidebar17").css('-webkit-filter','grayscale(90%)');
		$(".sidebar18").css('-webkit-filter','grayscale(0%)');
		
		

	});
	
});

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});


