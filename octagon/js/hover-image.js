$(function(){$(".fancybox").append("<span></span>");$(".fancybox").hover(function(){$(this).find("img").stop().animate({opacity:0.5},"normal")},function(){$(this).find("img").stop().animate({opacity:1},"normal")})});