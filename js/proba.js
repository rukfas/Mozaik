$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#dva'
		
	})
	.setClassToggle('.sidebar51, .sidebar50, .sidebar3, .ispoddva', 'fade-in')
	.addTo (controller);
	
	var arrowUp = new ScrollMagic.Scene({
		triggerElement: '#dva'
		
		})
		.setClassToggle('.anchor', 'faruk')
		.addTo (controller);	
	

	
	
	
	
	var dva = new ScrollMagic.Scene({
		triggerElement: '#cetiri'

	})
	.setClassToggle('.sidebar4, .sidebar5, .sidebar6, .ispodcetiri', 'fade-in')
	.addTo (controller);
	
	var tri = new ScrollMagic.Scene({
		triggerElement: '#sedam'

	})
	.setClassToggle('.sidebar7, .sidebar8, .sidebar9, .ispodsedam', 'fade-in')
	.addTo (controller);
	
	var cetiri = new ScrollMagic.Scene({
		triggerElement: '#deset'

	})
	.setClassToggle('.sidebar10, .sidebar11, .sidebar12, .ispoddeset', 'fade-in')
	.addTo (controller);
	
	var pet = new ScrollMagic.Scene({
		triggerElement: '#trinaest'

	})
	.setClassToggle('.sidebar13, .sidebar14, .sidebar15, .ispodtrinaest', 'fade-in')
	.addTo (controller);
	
	var sest = new ScrollMagic.Scene({
		triggerElement: '#sesnaest'

	})
	.setClassToggle('.sidebar16, .sidebar17, .sidebar18, .ispodsesnaest', 'fade-in')
	.addTo (controller);
});

//
//ovo je kod da se zatvara meni kad se klikne
//
//$(".navbar-nav li a").click(function(event) {
//	if (!$(this).parent().hasClass('dropdown'))
//		$(".navbar-collapse").collapse('hide');
//});



