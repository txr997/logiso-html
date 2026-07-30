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

	const loader = document.querySelector(".lg-preloader-1");

	const runAfterLoad = () => {
		afterPreloader();
		afterPageLoad();
	};

	if (loader) {
		const center = loader.querySelector(".lg-preloader-1-center");
		const progress = loader.querySelector(".lg-preloader-1-progress");
		const road = loader.querySelector(".lg-preloader-1-road");
		const truck = loader.querySelector(".lg-preloader-1-truck");
		const truckDistance = road && truck ? road.offsetWidth - truck.offsetWidth : 0;

		if (window.gsap) {
			gsap.timeline({ onComplete: () => loader.remove() })
				.to(progress, { scaleX: 1, duration: 1.3, ease: "haul" })
				.to(truck, { x: truckDistance, duration: 1.3, ease: "haul" }, "<")
				.to(center, { autoAlpha: 0, y: -20, duration: .2, ease: "power1.in" })
				.add(runAfterLoad)
				.to(loader, { autoAlpha: 0, duration: .3, ease: "power1.inOut" }, "<");
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


		// title-split-animation
		function lg_title_split_1() {

			var lg_titles = document.querySelectorAll(".lg_title_split_1");
			if (lg_titles.length === 0) return;

			gsap.registerPlugin(SplitText, ScrollTrigger);

			lg_titles.forEach(function (lg_title) {

				var lg_split = new SplitText(lg_title, {
					type: "lines, words, chars",
					lineThreshold: 0.5,
					linesClass: "split-line",
				});

				gsap.set(lg_title, { perspective: 400 });

				gsap.from(lg_split.chars, {
					scrollTrigger: {
						trigger: lg_title,
						start: "top 86%",
						toggleActions: "play none none none",
						once: true,
					},
					opacity: 0,
					y: 40,
					rotateX: 30,
					duration: 0.45,
					stagger: 0.015,
					ease: "expo.out",
				});

			});
		}
		lg_title_split_1();


		// title-line-reveal, reuses the .lg-hero-2-title line-up motion
		function lg_title_reveal_2() {

			var lg_titles = document.querySelectorAll(".lg_title_reveal_2");
			if (lg_titles.length === 0) return;

			gsap.registerPlugin(SplitText, ScrollTrigger);

			// same curve as $lg-hero-2-ease
			var lg_line_ease = CustomEase.create("lgTitleReveal2", "0.16, 1, 0.3, 1");

			lg_titles.forEach(function (lg_title) {

				var lg_split = new SplitText(lg_title, {
					type: "lines",
					linesClass: "lg-line",
				});

				// SplitText 3.12.5 has no mask option, so each line gets its own
				// inner span to slide up behind the overflow-hidden line
				var lg_inners = lg_split.lines.map(function (lg_line) {
					var lg_inner = document.createElement("span");
					lg_inner.className = "lg-line-in";
					while (lg_line.firstChild) {
						lg_inner.appendChild(lg_line.firstChild);
					}
					lg_line.appendChild(lg_inner);
					return lg_inner;
				});

				gsap.from(lg_inners, {
					scrollTrigger: {
						trigger: lg_title,
						start: "top 86%",
						toggleActions: "play none none none",
						once: true,
					},
					opacity: 0,
					yPercent: 110,
					rotate: 3,
					duration: 1.15,
					stagger: 0.14,
					ease: lg_line_ease,
				});

			});
		}
		lg_title_reveal_2();


		// image-reveal-animation
		function lg_img_reveal_1() {

			var lg_wraps = document.querySelectorAll(".lg_img_reveal_1");
			if (lg_wraps.length === 0) return;

			gsap.registerPlugin(ScrollTrigger);

			lg_wraps.forEach(function (lg_wrap) {

				var lg_img = lg_wrap.querySelector("img");

				var lg_tl = gsap.timeline({
					scrollTrigger: {
						trigger: lg_wrap,
						start: "top 80%",
						once: true,
					},
				});

				// wrapper wipes open from the bottom up
				lg_tl.from(lg_wrap, {
					clipPath: "inset(0 0 100% 0)",
					duration: 1.1,
					ease: "expo.out",
				});

				// image settles back from a slight zoom at the same time
				if (lg_img) {
					lg_tl.from(lg_img, {
						scale: 1.25,
						duration: 1.4,
						ease: "expo.out",
					}, "<");
				}

			});
		}
		lg_img_reveal_1();


		// faqs-2-video-reveal
		function lg_faqs_2_video_reveal() {

			var lg_video = document.querySelector(".lg-faqs-2-video");
			if (!lg_video) return;

			gsap.registerPlugin(ScrollTrigger);

			var lg_frame = lg_video.querySelector(".video-img");
			var lg_img = lg_video.querySelector(".video-img img");
			var lg_btn = lg_video.querySelector(".video-content .video-btn");
			var lg_texts = lg_video.querySelectorAll(".video-content .title, .video-content .disc");
			var lg_bar = lg_video.querySelector(".video-trusted");
			var lg_authors = lg_video.querySelectorAll(".video-trusted .single");
			var lg_bar_text = lg_video.querySelector(".video-trusted .text");

			// the button carries `transition: all`, which would fight every
			// frame gsap writes, so park it until the intro is done
			if (lg_btn) {
				gsap.set(lg_btn, { transition: "none" });
			}

			var lg_tl = gsap.timeline({
				scrollTrigger: {
					trigger: lg_video,
					start: "top 80%",
					once: true,
				},
				onComplete: function () {
					if (lg_btn) {
						gsap.set(lg_btn, { clearProps: "transition" });
					}
				},
			});

			// frame wipes open from the bottom up, the radius rides along in the
			// inset so the corners are not squared off mid-wipe
			lg_tl.fromTo(lg_frame,
				{ clipPath: "inset(0% 0% 100% 0% round 12px)" },
				{
					clipPath: "inset(0% 0% 0% 0% round 12px)",
					duration: 1.2,
					ease: "expo.out",
				}
			);

			// still settles back from a zoom as the frame opens
			if (lg_img) {
				lg_tl.from(lg_img, {
					scale: 1.3,
					duration: 1.5,
					ease: "expo.out",
				}, "<");
			}

			lg_tl.from(lg_btn, {
				opacity: 0,
				scale: .4,
				duration: .8,
				ease: "cargo",
			}, "-=.75");

			lg_tl.from(lg_texts, {
				opacity: 0,
				y: 28,
				duration: .7,
				stagger: .1,
				ease: "expo.out",
			}, "-=.55");

			// red bar rises into its hanging position under the frame
			lg_tl.from(lg_bar, {
				opacity: 0,
				yPercent: 45,
				duration: .9,
				ease: "expo.out",
			}, "-=.5");

			lg_tl.from(lg_authors, {
				opacity: 0,
				scale: .5,
				duration: .6,
				stagger: .1,
				ease: "cargo",
			}, "-=.6");

			lg_tl.from(lg_bar_text, {
				opacity: 0,
				x: 20,
				duration: .6,
				ease: "expo.out",
			}, "<");

		}
		lg_faqs_2_video_reveal();


		// footer-2-reveal, kept light - the footer is tall, so each band
		// gets its own trigger instead of firing everything at the top
		function lg_footer_2_reveal() {

			var lg_footer = document.querySelector(".lg-footer-2-area");
			if (!lg_footer) return;

			gsap.registerPlugin(ScrollTrigger);

			var lg_top = lg_footer.querySelector(".lg-footer-2-top");
			var lg_bg_img = lg_footer.querySelector(".lg-footer-2-bg-img img");
			var lg_bg_shape = lg_footer.querySelector(".lg-footer-2-bg-shape");
			var lg_cols = lg_footer.querySelectorAll(".lg-footer-2-col");
			var lg_info_wrap = lg_footer.querySelector(".lg-footer-2-info-wrap");
			var lg_info = lg_footer.querySelector(".lg-footer-2-info");
			var lg_info_items = lg_footer.querySelectorAll(".lg-footer-2-info .info-item");
			var lg_bottom = lg_footer.querySelector(".lg-footer-2-bottom");
			var lg_bottom_items = lg_footer.querySelectorAll(".lg-footer-2-bottom .copyright, .lg-footer-2-bottom .bottom-links");

			var lg_top_tl = gsap.timeline({
				scrollTrigger: {
					trigger: lg_top,
					start: "top 85%",
					once: true,
				},
			});

			// ambient: the backdrop drifts back to rest, the footer clips it
			if (lg_bg_img) {
				lg_top_tl.from(lg_bg_img, {
					scale: 1.12,
					duration: 1.8,
					ease: "expo.out",
				});
			}

			if (lg_bg_shape) {
				lg_top_tl.from(lg_bg_shape, {
					opacity: 0,
					x: -45,
					duration: 1,
					ease: "expo.out",
				}, "<");
			}

			lg_top_tl.from(lg_cols, {
				opacity: 0,
				y: 26,
				duration: .75,
				stagger: .12,
				ease: "expo.out",
			}, "<.15");

			var lg_info_tl = gsap.timeline({
				scrollTrigger: {
					trigger: lg_info_wrap,
					start: "top 92%",
					once: true,
				},
			});

			lg_info_tl.from(lg_info, {
				opacity: 0,
				y: 24,
				duration: .8,
				ease: "expo.out",
			});

			lg_info_tl.from(lg_info_items, {
				opacity: 0,
				y: 14,
				duration: .6,
				stagger: .1,
				ease: "expo.out",
			}, "-=.5");

			gsap.from(lg_bottom_items, {
				scrollTrigger: {
					trigger: lg_bottom,
					start: "top 97%",
					once: true,
				},
				opacity: 0,
				y: 14,
				duration: .6,
				stagger: .1,
				ease: "expo.out",
			});

		}
		lg_footer_2_reveal();


		// button-text-hover-animation
		function lg_btn_text_hover() {

			var lg_btns = document.querySelectorAll(".lg-pr-btn-1");
			if (lg_btns.length === 0) return;

			gsap.registerPlugin(SplitText);

			lg_btns.forEach(function (lg_btn) {

				var lg_text = lg_btn.querySelector(".text");
				if (!lg_text) return;

				var lg_split = new SplitText(lg_text, { type: "chars" });
				var lg_chars = lg_split.chars;

				var lg_dur = 0.28;
				var lg_stagger = 0.02;

				// each char runs its own out -> in cycle, so it comes
				// straight back instead of waiting for the whole word
				var lg_tl = gsap.timeline({ paused: true });

				lg_chars.forEach(function (lg_char, i) {
					var lg_at = i * lg_stagger;

					lg_tl.to(lg_char, {
						yPercent: -100,
						opacity: 0,
						duration: lg_dur,
						ease: "haul",
					}, lg_at)
						.set(lg_char, { yPercent: 100 }, lg_at + lg_dur)
						.to(lg_char, {
							yPercent: 0,
							opacity: 1,
							duration: lg_dur,
							ease: "haul",
						}, lg_at + lg_dur);
				});

				lg_btn.addEventListener("mouseenter", function () {
					lg_tl.play(0);
				});

			});
		}
		lg_btn_text_hover();

	}

	// hero-1-animation
	const lg_hero_1_animation = gsap.timeline();
	lg_hero_1_animation.from(".lg-hero-1-bg-img img", { 
		scale: 1.3,
		duration: 1,
	})
	lg_hero_1_animation.from(".lg-hero-1-right", { 
		rotate: -90,
		duration: 1,
		autoAlpha: 0
	})
	lg_hero_1_animation.from(".lg-hero-1-right .features-img", {
		duration: .4,
		autoAlpha: 0
	})

	/*
		hero-2-slider
		the slide entrance is css-driven (.swiper-slide-active keyframes), so it
		re-runs on every slide change; here we only wire up swiper + the
		autoplay progress bar
	*/
	if ($('.lg_hero2_slider').length) {

		// the rail is labelled with the first/last slide number, counted before
		// swiper clones anything for the loop
		const lg_hero2_count = $('.lg_hero2_slider .swiper-slide').length;
		$('.lg-hero-2-slider-dots .num-last').text(('0' + lg_hero2_count).slice(-2));

		const lg_hero2_slider = new Swiper('.lg_hero2_slider', {
			loop: true,
			speed: 1400,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.lg_hero2_pagination',
				clickable: true,
			},
		});
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
		about-bigtext-parallax
		the title is filled with an image via background-clip, so the
		parallax rides on background-position rather than a transform
	*/
	function lg_bigtext_parallax() {

		var lg_bigtext = document.querySelector(".lg-about-1-bigtext");
		if (!lg_bigtext) return;

		var lg_title = lg_bigtext.querySelector(".title");
		if (!lg_title) return;

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(lg_title,
			{ backgroundPosition: "center 0%" },
			{
				backgroundPosition: "center 100%",
				ease: "none",
				scrollTrigger: {
					trigger: lg_bigtext,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			}
		);
	}
	lg_bigtext_parallax();


	/*
		services-tab-panel-image
		on tab change the new panel's bg-img wipes in from the left
	*/
	function lg_services_tab_slice() {

		var lg_tabs = document.querySelectorAll('.lg-services-1-tab [data-bs-toggle="tab"]');
		if (lg_tabs.length === 0) return;

		lg_tabs.forEach(function (lg_tab) {

			lg_tab.addEventListener("shown.bs.tab", function (e) {

				var lg_pane = document.querySelector(e.target.getAttribute("data-bs-target"));
				if (!lg_pane) return;

				var lg_bg = lg_pane.querySelector(".lg-services-1-panel .bg-img");
				if (!lg_bg) return;

				// the wrapper uncovers left to right
				gsap.fromTo(lg_bg,
					{ clipPath: "inset(0 100% 0 0)" },
					{ clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "haul" }
				);

				// image drifts in behind the wipe so it doesn't look flat
				var lg_img = lg_bg.querySelector("img");
				if (lg_img) {
					gsap.fromTo(lg_img,
						{ scale: 1.2, xPercent: -8 },
						{ scale: 1, xPercent: 0, duration: 1.2, ease: "expo.out" }
					);
				}

			});
		});
	}
	lg_services_tab_slice();


	/*
		progress-circle
		put lg_progress_circle_1 + data-progress="98" on the <svg>,
		the ring length is worked out from the circle's own r
	*/
	function lg_progress_circle_1() {

		var lg_rings = document.querySelectorAll(".lg_progress_circle_1");
		if (lg_rings.length === 0) return;

		gsap.registerPlugin(ScrollTrigger);

		lg_rings.forEach(function (lg_ring) {

			var lg_bar = lg_ring.querySelector(".bar");
			if (!lg_bar) return;

			var lg_r = parseFloat(lg_bar.getAttribute("r")) || 0;
			var lg_length = 2 * Math.PI * lg_r;
			var lg_percent = parseFloat(lg_ring.getAttribute("data-progress")) || 0;

			// start empty, then draw up to the requested percentage
			gsap.set(lg_bar, {
				strokeDasharray: lg_length,
				strokeDashoffset: lg_length,
			});

			gsap.to(lg_bar, {
				scrollTrigger: {
					trigger: lg_ring,
					start: "top 85%",
					once: true,
				},
				strokeDashoffset: lg_length * (1 - lg_percent / 100),
				duration: 1.6,
				ease: "power2.out",
			});

		});
	}
	lg_progress_circle_1();


	/*
		hanging-load
		gsap drops the wrapper in, then the css swing takes over
	*/
	function lg_hang_swing_1() {

		var lg_hangs = document.querySelectorAll(".lg_hang_swing_1");
		if (lg_hangs.length === 0) return;

		gsap.registerPlugin(ScrollTrigger);

		lg_hangs.forEach(function (lg_hang) {

			// trigger off the section, not the wrapper - the wrapper starts
			// shifted 320px up, which would throw its own start position off
			var lg_trigger = lg_hang.closest("section") || lg_hang;

			gsap.from(lg_hang, {
				scrollTrigger: {
					trigger: lg_trigger,
					start: "top 80%",
					once: true,
				},
				y: -320,
				opacity: 0,
				duration: 1.2,
				ease: "cargo",
				onComplete: function () {
					lg_hang.classList.add("is-hanging");
				},
			});

		});
	}
	lg_hang_swing_1();




		

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
		autoplay: { delay: 4000 },
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
		autoplay: { 
			delay: 3000 
		},
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

// clients-2-slider
if ($('.lg_clients2_slider').length) {
	const lg_clients2_slider = new Swiper('.lg_clients2_slider', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		autoplay: {
			delay: 3000
		},
		slidesPerView: 1,
		breakpoints: {
			320: {
				slidesPerView: 2,
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

// about-2-slider
if ($('.lg_about2_slider').length) {
	const lg_about2_slider = new Swiper('.lg_about2_slider', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		slidesPerView: 1,
		autoplay: { delay: 4000 },
        pagination: {
			el: '.lg_about2_slider_pagination',
			type: 'progressbar',
		},
	});
}

// percel-request-2-tabs
if ($('.lg_percel_request2_tab').length) {
	$('.lg_percel_request2_tab').on('click', '.tab-btn', function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
	});
}

// testimonial-2-slider
if ($('.lg_testimonial2_slider').length) {
	const lg_testimonial2_slider = new Swiper('.lg_testimonial2_slider', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		slidesPerView: 1,
		autoplay: { delay: 4000 },
		breakpoints: {
			992: {
				slidesPerView: 2,
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
