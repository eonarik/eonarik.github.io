(function () {
	$(".owl-carousel").each(function(){
		var t = $(this),
			items = t.attr("data-items") ? parseInt(t.attr("data-items")) : 4,
			params = {
				items: items,
				margin: 5,
				navText: [
					"<i class=\"fa fa-angle-left visible-md visible-lg\" aria-hidden=\"true\"></i>",
					"<i class=\"fa fa-angle-right visible-md visible-lg\" aria-hidden=\"true\"></i>"
				],
				responsive : {
					0 : {
						items: items-4 > 0 ? items-4 : 1
					},
					480 : {
						items: items-3 > 0 ? items-3 : 1
					},
					768 : {
						items: items-2 > 0 ? items-2 : 1
					},
					920 : {
						items: items
					}
				}
			};
		if(typeof t.attr("data-dots") !== "undefined") {
			params.dots = true;
		}
		if(typeof t.attr("data-loop") !== "undefined") {
			params.loop = true;
		}
		if(typeof t.attr("data-nav") !== "undefined") {
			params.nav = true;
		}
		if(t.attr("data-autoplay")) {
			params.autoplay = t.attr("data-autoplay");
		}
		t.owlCarousel(params);
		
		if( t.find(".owl-item").length <= 1 ) {
			t.find(".owl-controls").remove();
		}
	});
})();