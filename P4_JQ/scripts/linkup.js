$("h1").css("color", "red");

$("h2 span").css({
	"color" : "blue",
	"font-family" : "Georgia"
});

$("div span").css({
	"font-size": "20px",
	"color": "cyan"
});

$("div").addClass("callout");

$(".list").show();

$("#list dt").show();

$(".list dd").css({
	"margin-left": "50px",
	"margin-top": "10px",
	"color": "purple"
});

$("#foo").css({
	 "color": "green"
});

$("dt:nth-of-type(2)")
	.html("<span>Life is Great</span> Its  Awesome!");