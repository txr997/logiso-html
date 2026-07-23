/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	windows-load-function
*/


window.addEventListener('load', function(){

	const loader = document.querySelector(".ap-preloader-1");

	const runAfterLoad = () => {
		afterPreloader();
		afterPageLoad();
	};

	if (loader) {
		const panelL = loader.querySelector(".ap-preloader-1-panel-l");
		const panelR = loader.querySelector(".ap-preloader-1-panel-r");
		const center = loader.querySelector(".ap-preloader-1-center");
		const line = loader.querySelector(".ap-preloader-1-line");
		const countEl = loader.querySelector(".ap-preloader-1-count-num");
		const counter = { val: 0 };

		if (window.gsap) {
			gsap.timeline({ onComplete: () => loader.remove() })
				.to(counter, {
					val: 100,
					duration: 1.3,
					ease: "power2.out",
					onUpdate: () => { countEl.textContent = Math.round(counter.val); },
				})
				.to(line, { scaleX: 1, duration: 1.3, ease: "power2.out" }, "<")
				.to(center, { autoAlpha: 0, y: -20, duration: .35, ease: "power1.in" })
				.add(runAfterLoad)
				.to(panelL, { xPercent: -100, duration: .9, ease: "ease1" }, "<")
				.to(panelR, { xPercent: 100, duration: .9, ease: "ease1" }, "<");
		} else {
			loader.remove();
			runAfterLoad();
		}

	} else {
		runAfterLoad();
	}

})



/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

		// title-animation
		function wa_split_text() {

			var wa_st = $(".wa-split-text");
			if (wa_st.length === 0) return;
		
			gsap.registerPlugin(SplitText, ScrollTrigger);
		
			wa_st.each(function (index, wa_el) {
		
				var wa_els = wa_el;
		
				const wa_split = new SplitText(wa_els, {
					type: "lines, words, chars",
					lineThreshold: 0.5,
					linesClass: "split-line",
				});
		
				var split_type_set = wa_split.chars;
		
				gsap.set(wa_els, { perspective: 400 });
		
				var settings = {
					scrollTrigger: {
						trigger: wa_els,
						toggleActions: "play none none none",
						start: "top 86%",
						once: true,
					},
					duration: 0.35,
					stagger: 0.02,
					ease: "expo.out",
				};
		
				if ($(wa_el).hasClass("split-in-fade")) {
					settings.opacity = 0;
				}
				if ($(wa_el).hasClass("split-in-right")) {
					settings.opacity = 0;
					settings.x = 50;
				}
				if ($(wa_el).hasClass("split-in-left")) {
					settings.opacity = 0;
					settings.x = -50;
				}
				if ($(wa_el).hasClass("split-in-up")) {
					settings.opacity = 0;
					settings.y = 80;
				}
				if ($(wa_el).hasClass("split-in-down")) {
					settings.opacity = 0;
					settings.y = -80;
				}
				if ($(wa_el).hasClass("split-in-rotate")) {
					settings.opacity = 0;
					settings.rotateX = 50;
				}
				if ($(wa_el).hasClass("split-in-scale")) {
					settings.opacity = 0;
					settings.scale = 0.5;
				}
		
				if ($(wa_el).hasClass("split-up")) {
		
					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;
		
					$(split_type_set).each(function (i, elw) {
						gsap.from(elw, {
							opacity: 0,
							duration: 0.65,
							y: 40,
							rotate: 10,
							transformOrigin: "bottom right",
							filter: "blur(5px)",
							delay: 0.25 + i * 0.065,
							ease: "expo.out",
							scrollTrigger: {
								trigger: wa_el,
								start: "top 86%",
								toggleActions: "play none none none",
							},
						});
					});
		
				}
				else if ($(wa_el).hasClass("split-words-scale")) {
					let atDelay = parseFloat(wa_el.getAttribute("data-delay")) || 0;

					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;
		
					gsap.set(split_type_set, {
						opacity: 0,
						scale: (i) => (i % 2 === 0 ? 0 : 2),
						force3D: true,
					});
		
					gsap.to(split_type_set, {
						scrollTrigger: {
							trigger: wa_el,
							toggleActions: "play none none reverse",
							start: "top 86%",
						},
						rotateX: 0,
						scale: 1,
						opacity: 1,
						stagger: 0.03,
						delay: atDelay,
						ease: "ease1",
					});
		
				}
				else {
					var wa_anim = gsap.from(split_type_set, settings);
		
					if ($(wa_el).hasClass("hover-split-text")) {
						$(wa_el).on("mouseenter", function () {
							wa_anim.restart();
						});
					}
				}
		
			});
		}
		wa_split_text();

	}	

/* 
	after-preloader-end
*/
}



/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       100,
			mobile:       true,
			live:         true
		});
		wow.init();
	};




		

/* 
	after-page-load-start
*/
}

// solution-1-testimonial-slider
if ($('.lg_solution1_testimonial_slider').length) {
	const lg_solution1_testimonial_slider = new Swiper('.lg_solution1_testimonial_slider', {
		direction: 'vertical',
		loop: true,
		speed: 800,
		spaceBetween: 30,
		slidesPerView: 1,
		autoplay: { delay: 5000 },
		pagination: {
			el: '.lg-solution-1-testimonial-pagination',
			clickable: true,
		},
	});
}

// shipping-1-calculator-nice-select
if ($('.lg_select_1').length) {
	$('.lg_select_1').niceSelect();
}

// clients-1-slider
if ($('.lg_clients1_slider').length) {
	const lg_clients1_slider = new Swiper('.lg_clients1_slider', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		autoplay: { delay: 4000 },
		slidesPerView: 1,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	});
}

















































// about-2-img
if (window.matchMedia("(min-width: 1400px)").matches) {
	const funfact2 = gsap.timeline({
		scrollTrigger: {
		  trigger: ".ap-funfact-2-img", 
		  start: "top 50%", 
		  toggleActions: "play none none none", 
		  markers: false 
		}
	});

	funfact2.from(".ap-funfact-2-img .bg-shape circle", { 
		yPercent: 50,
	})
	funfact2.from(".ap-funfact-2-img img", { 
		yPercent: 50,
	},"<50%")

}







// services-2-hover-image-follow
if ($('.ap-services-2-item-single').length) {
	gsap.utils.toArray('.ap-services-2-item-single').forEach((mbS2Item) => {

		const mbS2Img = mbS2Item.querySelector('.img-elm');
		if (!mbS2Img) return;

		gsap.set(mbS2Img, { rotate: 12, scale: .8 });

		const mbS2X = gsap.quickTo(mbS2Img, "x", { duration: .6, ease: "power3.out" });
		const mbS2Y = gsap.quickTo(mbS2Img, "y", { duration: .6, ease: "power3.out" });

		function mbS2Move(e, instant) {
			const mbS2Rect = mbS2Item.getBoundingClientRect();
			mbS2X(e.clientX - mbS2Rect.left, instant);
			mbS2Y(e.clientY - mbS2Rect.top, instant);
		}

		mbS2Item.addEventListener('mouseenter', (e) => {
			mbS2Move(e, true);

			gsap.to(mbS2Img, {
				opacity: 1,
				scale: 1,
				duration: .5,
				ease: "power3.out",
				overwrite: "auto",
			});
		});

		mbS2Item.addEventListener('mousemove', (e) => mbS2Move(e));

		mbS2Item.addEventListener('mouseleave', () => {
			gsap.to(mbS2Img, {
				opacity: 0,
				scale: .8,
				duration: .4,
				ease: "power3.out",
				overwrite: "auto",
			});
		});

	});
}


})(jQuery);
