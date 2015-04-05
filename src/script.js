$(document).ready(
	function()
	{
		$("#header").parallax();$("#about").parallax();$("html").niceScroll
		({
			cursorcolor:"#d1103f",cursorwidth:"10px",cursorborder:"1px solid #d1103f",cursoropacitymax:.9,scrollspeed:120,autohidemode:false,horizrailenabled:false,cursorborderradius:2,zindex:1060
		});
		$(".navbar-nav li a, .menus").on("click",function(e)
		{
		var t=$(this);
		$("html, body").stop().animate
		({
			scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo");
			e.preventDefault()
		});
		$("body").scrollspy
		({
		target:".navbar-fixed-top"}
		);
		$(".navbar-collapse ul li a").click(function(){
		$(".navbar-toggle:visible").click()
	});
		$("#map").gmap3
		({
		map:{
		options:{
		center:[-7.866315,110.389574],zoom:12,scrollwheel:false}
		}
		,marker:{
		latLng:[-7.866315,110.389574],options:{
		icon:new google.maps.MarkerImage("https://dl.dropboxusercontent.com/u/29545616/Preview/location.png",new google.maps.Size(48,48,"px","px"))}
		}
		});
		$(".chart").easyPieChart
		({
			animate:2e3,
			barColor:"#d1103f",
			trackColor:"#f7f7f7",
			size:130,
			lineWidth:4,easing:"easeInOutCirc",
			onStep:function(e,t,n)
			{
				var str="";
				if (Math.round(n) < 50) 
				{
					str="Basique"
				}
				else if (Math.round(n) < 65) 
				{
					str="Intermédiaire"
				}
				else if (Math.round(n) < 80) 
				{
					str="Bon"
				}
				else
				{
					str="Excellent"
				};
				$(this.el).find(".percent").text(str)
			}
		})
	}
)