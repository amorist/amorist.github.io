$(function(){
			// function init(){
			// 	var x=$(".laba").width();
			// $(".laba,.map_open").height(x*1.4);
			// }
			// init();
			$(".map_open").click(function(){
				$(".layer_map").fadeIn();
			});
			$(".layer_map").click(function(){
				$(this).fadeOut();
			})
			$(".pedal_to_sit").click(function(){
				window.location.href="hanchao.html";
			})
			$(".transition_pd").click(function(){
				window.location.href="wjin.html";
			})
			$(".chuizu_to_sit").click(function(){
				window.location.href="song.html";
			})
			$(".golden_age").click(function(){
				window.location.href="mqing.html";
			})
			// $(window).resize(function(){
			// 	init();
			// })
		})
