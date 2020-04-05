$(document).ready(function (){
	$(window).scroll(function (){
		if($(this).scrollTop()>900){
			$(".separar-mensaje>div").removeClass("invisible");
			$(".separar-mensaje>div").addClass("animated slideInUp");
		}
		if($(this).scrollTop()>1000){
			$(".follow>div").removeClass("invisible");
			$(".follow>div").addClass("animated slideInUp");
		}
		if($(this).scrollTop()>1750){
			$(".personaje").removeClass("invisible");
			$(".personaje").addClass("animated slideInLeft");
		}
	});


});

function bajar(){
	$("html,body").animate({
		scrollTop:1000
	},500);
}