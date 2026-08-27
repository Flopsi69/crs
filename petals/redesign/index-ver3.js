(function() {


//#region node_modules/.pnpm/crsdevtool@1.1.0_@types+node@26.1.1/node_modules/crsdevtool/internal/index.js
	var pushData = (name, desc, type, loc = "") => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "event-to-ga4",
			event_name: name,
			event_desc: desc,
			event_type: type,
			event_loc: loc
		});
		log(`Event: ${name} | ${desc} | ${type} | ${loc}`, "success");
	};
	var waitEl = (selector) => {
		return new Promise((resolve) => {
			const element = document.querySelector(selector);
			if (element) {
				resolve(element);
				return;
			}
			const observer = new MutationObserver(() => {
				const element2 = document.querySelector(selector);
				if (element2) {
					resolve(element2);
					observer.disconnect();
				}
			});
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
		});
	};
	var startLog = ({ name, dev }) => {
		console.log(`%c EXP: ${name} (DEV: ${dev})`, `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`);
	};
	var clarityInterval = (name) => {
		let int = setInterval(function() {
			if (typeof window.clarity == "function") {
				clearInterval(int);
				window.clarity("set", name, "variant_1");
			}
		}, 1e3);
	};
	var visibilityOfTime = (selector, eventName, visiblePlace, description, time = 1e3, threshold = .5) => {
		let observer;
		let timer;
		observer = new IntersectionObserver(function(entries) {
			if (entries[0].isIntersecting === true) timer = setTimeout(() => {
				pushData(eventName, entries[0].target.dataset.visible || description || "", "view", visiblePlace);
				observer.disconnect();
			}, time);
			else {
				log("Element is not fully visible", "warn");
				clearTimeout(timer);
			}
		}, { threshold: [threshold] });
		if (typeof selector === "string") {
			const element = document.querySelector(selector);
			if (element) observer.observe(element);
		} else observer.observe(selector);
	};
	var log = (text, style = "info") => {
		let color;
		switch (style) {
			case "info":
				color = "color: #3498db;";
				break;
			case "warn":
				color = "color: #f39c12;";
				break;
			case "error":
				color = "color: #e74c3c;";
				break;
			case "success":
				color = "color: #2ecc71;";
				break;
		}
		console.log(`%c>>> ${text}`, `${color} font-size: 16px; font-weight: 600`);
	};

//#endregion
//#region src/globals.css?inline
	var globals_default = ".crs-pdp{--crs-accent:#a72561;--crs-accent-text:#a33f6e;--crs-accent-soft:#a725610d;--crs-accent-tint:#fdf1f6;--crs-line:#dbdbdb;--crs-ink:#121212;--crs-muted:#191919bf;--crs-head:\"Forum\", Georgia, serif;--crs-body:\"Jost\", \"Assistant\", sans-serif;--crs-num:\"Overlock\", Georgia, serif}@media screen and (width>=990px){.crs-product .page-width{max-width:137.7rem}.crs-product .product.product--large{gap:3.14%}.crs-product .product.product--large .product__media-wrapper{flex:0 0 56%;width:56%;max-width:56%}.crs-product .product.product--large .product__info-wrapper{flex:0 0 40.86%;width:40.86%;max-width:40.86%;padding-left:0}}.crs-pdp section.crs-info.product__info-container{font-family:var(--crs-body);flex-direction:column;gap:0;display:flex}.crs-pdp .crs-info>*,.crs-pdp .crs-info product-form{margin-top:0;margin-bottom:0}.crs-pdp .crs-info>.product__title{flex-direction:column;gap:6px;margin:0;display:flex}.crs-pdp .crs-info>.product__title>h1{order:1}.crs-pdp .crs-info>.product__title>.fera-storeReviewsSummary{order:0;margin:0!important}.crs-pdp .crs-info>[id^=price-]{margin-top:16px}.crs-pdp .crs-info>.crs-options{border-top:1px solid var(--crs-line);margin-top:24px;padding-top:24px}.crs-pdp .crs-info>div:has(>product-form){margin-top:16px}.crs-pdp .crs-info>.crs-gift,.crs-pdp .crs-info>.crs-trust{margin-top:16px}.crs-pdp .crs-info>.crs-help{border-top:1px solid var(--crs-line);margin-top:12px;padding-top:12px}.crs-pdp .crs-info>.crs-details{margin-top:12px}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto,.crs-pdp .crs-info>.crs-bottom{margin-top:24px}.crs-product .product-form .atc_steps,.crs-product .product-form .custom.dwa{display:none}.crs-info variant-selects{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.crs-info .product__title h1{font-family:var(--crs-head);color:var(--crs-ink);margin:0;font-size:40px;line-height:52px}.crs-pdp .crs-utility{--color-background:159, 101, 128;background:#9f6580;border-bottom:1px solid #fdfdfd14}.crs-pdp .crs-utility .utility-bar__grid{justify-content:center}.crs-pdp .crs-utility .announcement-bar__message{font-family:var(--crs-body);letter-spacing:2px;text-transform:uppercase;color:#fdfdfd;flex-wrap:wrap;justify-content:center;align-items:center;gap:4px 16px;padding:10px 0;font-size:13px;font-weight:400;line-height:16.9px;display:flex}.crs-pdp .crs-utility .announcement-bar__message>span{white-space:nowrap}@media screen and (width<=900px){.crs-pdp .crs-utility__sep,.crs-pdp .crs-utility__warranty{display:none}}.crs-info .fera-storeReviewsSummary{font-family:var(--crs-body);margin:0;font-size:14px;line-height:16px}.crs-info .fera-storeReviewsSummary-content{align-items:center;gap:12px;display:flex}.crs-info .fera-storeReviewsSummary-avgRatingWrapper,.crs-info .fera-storeReviewsSummary-wrapper{padding:0}.crs-info .fera-storeReviewsSummary-block{align-items:center;display:flex}.crs-info .fera-storeReviewsSummary-avgRating{color:var(--crs-ink);letter-spacing:.6px;font-size:14px;line-height:16px}.crs-info .fera-storeReviewsSummary-stars,.crs-info .fera-storeReviewsSummary-stars-rating,.crs-info .fera-storeReviewsSummary-stars-bg{letter-spacing:3px;font-size:18px}.crs-info .fera-storeReviewsSummary-stars{margin-right:-3px}.crs-info .fera-storeReviewsSummary-verifiedBadgeWrapper,.crs-info .fera-storeReviewsSummary-verifiedBadge,.crs-info .fera-storeReviewsSummary-verifiedBadge-preTextNumber{font-size:14px}.crs-product .price{font-family:var(--crs-body);align-items:center;gap:12px;display:flex}.crs-product .price--on-sale .price__sale{align-items:center;gap:11px;display:flex}.crs-product .price--on-sale .price__sale .price-item--sale{order:-1}.crs-product .price .price-item--sale,.crs-product .price .price-item--regular{color:var(--crs-accent-text);font-size:20px;font-weight:500}.crs-product .price__sale s.price-item--regular{color:var(--crs-muted);font-size:16px;font-weight:400}.crs-product .price__badge-sale{color:var(--crs-accent-text);font-family:var(--crs-body);letter-spacing:1px;background:#a725611a;border:1px solid #ffffff1a;border-radius:111px;padding:6px 8px;font-size:14px}.crs-options{flex-direction:column;gap:28px;display:flex}.crs-opt{flex-direction:column;gap:16px;display:flex}.crs-opt-head{justify-content:space-between;align-items:center;gap:12px;display:flex}.crs-opt-head__label{letter-spacing:.84px;text-transform:uppercase;color:var(--crs-muted);font-size:14px;font-weight:500}.crs-opt-head__value{color:var(--crs-accent-text);text-transform:none;letter-spacing:.28px}.crs-guide-link{cursor:pointer;font-family:var(--crs-body);letter-spacing:.28px;color:var(--crs-muted);background:0 0;border:0;padding:0;font-size:14px;text-decoration:underline}.crs-guide-link:hover{color:var(--crs-accent)}.crs-opt__list--swatches{grid-template-columns:repeat(6,1fr);gap:10px;display:grid}.crs-opt__list--sizes{flex-wrap:wrap;gap:10px;display:flex}.crs-swatch,.crs-size{cursor:pointer;border:1px solid var(--crs-line);font-family:var(--crs-body);color:var(--crs-ink);background:#fff;border-radius:6px;transition:border-color .15s,background-color .15s,box-shadow .15s}.crs-swatch{flex-direction:column;justify-content:flex-start;align-items:center;gap:8px;padding:12px 4px;display:flex}.crs-swatch__dot{border-radius:50%;width:32px;height:32px}.crs-swatch__label{letter-spacing:.28px;text-align:center;font-size:14px;line-height:20px}.crs-size{box-sizing:border-box;letter-spacing:.28px;flex:0 0 46px;justify-content:center;align-items:center;width:46px;min-width:46px;max-width:46px;height:46px;min-height:46px;padding:0;font-size:14px;display:flex}.crs-swatch:hover,.crs-size:hover{border-color:var(--crs-accent)}.crs-swatch.is-selected,.crs-size.is-selected{border-color:var(--crs-accent);box-shadow:inset 0 0 0 1px var(--crs-accent);background:var(--crs-accent-soft)}.crs-size.is-unavailable{color:#12121259;background:repeating-linear-gradient(-45deg,#fff,#fff 5px,#f4f4f4 5px 6px)}.crs-product .product-form__buttons quantity-input{display:none}.crs-product .product-form__buttons{width:100%;max-width:none;margin:0;display:block}.crs-product .product-form__submit{background:var(--crs-accent);color:#fff;width:100%;min-height:56px;font-family:var(--crs-body);letter-spacing:1.08px;text-transform:uppercase;box-shadow:none;border:0;border-radius:6px;justify-content:center;align-items:center;margin:0;padding:15px 16px;font-size:18px;font-weight:400;line-height:18px;display:flex}.crs-product .product-form__submit:hover:not([disabled]){background:#8e1e53}.crs-product .product-form__submit:after,.crs-product .product-form__submit:before,.crs-atc-price{display:none}.crs-product .crs-atc-price{margin-left:6px;display:inline}.crs-gift{background:#faf4f7;border:1px solid #eddee5;border-radius:8px;align-items:center;gap:14px;padding:15px 22px 15px 14px;display:flex;position:relative;overflow:hidden}.crs-gift[hidden]{display:none}.crs-gift__ribbon{text-align:center;text-transform:uppercase;color:#fff;letter-spacing:.8px;background:#a72561;width:92px;padding:4px 0;font-family:Jost;font-size:10px;font-style:normal;font-weight:500;line-height:9px;position:absolute;top:14px;left:-21px;transform:rotate(-37deg)}.crs-gift__image{object-fit:cover;background:#fff;border-radius:6px;flex:none;width:76px;height:76px}.crs-gift__body{flex:1;min-width:0}.crs-gift__label{color:#8a1538;letter-spacing:1.4px;text-transform:uppercase;font-family:Jost;font-size:12px;font-style:normal;font-weight:500;line-height:20px}.crs-gift__title{color:#1c1b1a;letter-spacing:-.4px;margin-top:2px;font-family:Forum;font-size:20px;font-style:normal;font-weight:400;line-height:26px}.crs-gift__desc{color:#6e6a67;margin-top:4px;font-family:Jost;font-size:12.5px;font-style:normal;font-weight:400;line-height:20px}.crs-gift__price{flex-direction:column;flex:none;align-items:flex-end;gap:3px;display:flex}.crs-gift__free{color:#289160;text-align:right;font-family:Jost;font-size:18px;font-style:normal;font-weight:400;line-height:24px}.crs-gift__was{color:#9a9693;text-align:right;font-family:Jost;font-size:16px;font-style:normal;font-weight:400;line-height:22px;text-decoration-line:line-through}.crs-trust{letter-spacing:.24px;color:var(--crs-ink);justify-content:center;align-items:flex-start;gap:16px;font-size:12px;line-height:30px;display:flex}.crs-trust__item{align-items:center;gap:10px;display:flex}.crs-trust__icon{object-fit:cover;flex:none;width:28px;height:28px;display:block}.crs-trust__icon--svg{width:20px;height:20px}.crs-trust__icon--svg svg{width:100%;height:100%;display:block}.crs-help{text-align:center;color:var(--crs-ink);font-size:15px;line-height:28.8px}.crs-help a{color:inherit;text-decoration:none}.crs-accord__item{border-top:1px solid var(--crs-line)}.crs-accord__item:last-child{border-bottom:1px solid var(--crs-line)}.crs-accord__head{cursor:pointer;width:100%;font-family:var(--crs-head);text-align:left;color:var(--crs-ink);background:0 0;border:0;justify-content:space-between;align-items:center;gap:16px;padding:22px 0;font-size:18px;display:flex}.crs-accord__sign{flex:none;width:14px;height:14px;position:relative}.crs-accord__sign:before,.crs-accord__sign:after{content:\"\";background:var(--crs-ink);height:1.5px;transition:transform .2s;position:absolute;top:50%;left:0;right:0}.crs-accord__sign:after{transform:rotate(90deg)}.crs-accord__sign svg{display:none}.crs-accord__head[aria-expanded=true] .crs-accord__sign:after{transform:rotate(0)}.crs-accord__panel{padding-bottom:24px}.crs-details__list{margin:0;padding:0 0 0 18px;list-style:none}.crs-details__list li{color:var(--crs-muted);font-size:15px;line-height:24px;position:relative}.crs-details__list li:before{content:\"·\";position:absolute;left:-14px}.crs-details__toggle{cursor:pointer;font-family:var(--crs-body);color:var(--crs-accent-text);background:0 0;border:0;margin-top:8px;padding:0;font-size:15px;text-decoration:underline}body.crs-pdp .crs-reels{display:none}.crs-pdp-reels{background:var(--crs-accent-soft);border-radius:8px;flex-direction:column;align-items:center;gap:20px;padding:24px 0;display:flex;overflow:hidden}.crs-pdp-reels__head{flex-direction:column;align-items:center;gap:14px;padding:0 32px;display:flex}.crs-pdp-reels__title{max-width:389px;font-family:var(--crs-head);color:var(--crs-accent);text-align:center;margin:0;font-size:30px;font-weight:400;line-height:34px}.crs-pdp-reels__subtitle{letter-spacing:.32px;max-width:374px;color:var(--crs-ink);text-align:center;margin:0;font-size:16px;line-height:24px}.crs-pdp-reels .swiper{z-index:1;margin-inline:auto;padding:0;list-style:none;display:block;position:relative;overflow:hidden}.crs-pdp-reels .swiper-wrapper{box-sizing:content-box;width:100%;height:100%;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);z-index:1;display:flex;position:relative}.crs-pdp-reels .swiper-slide{flex-shrink:0;transition-property:transform;display:block;position:relative}.crs-pdp-reels__strip{width:100%}.crs-pdp-reels__list{overflow:visible}.crs-pdp-reels .crs-reel{background:#a7256114;border-radius:4px;flex:none;width:155px;height:276px;position:relative;overflow:hidden}.crs-reel__poster,.crs-reel video{object-fit:cover;width:100%;height:100%;display:block}.crs-reel__poster{cursor:pointer}.crs-reel__poster img{object-fit:cover;width:100%;height:100%;display:block}.crs-reel video{display:none}.crs-reel.is-playing video{display:block}.crs-reel.is-playing .crs-reel__poster,.crs-reel.is-playing .crs-reel__play{display:none}.crs-reel video::-webkit-media-controls-panel{overflow:hidden}.crs-reel__play{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);cursor:pointer;background:#fff;border:0;border-radius:50%;width:44px;height:44px;padding:0;line-height:0;transition:transform .2s,opacity .2s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.crs-reel__play svg{width:44px;height:44px;display:block}.crs-reel__play svg path{fill:#191919}@media (hover:hover){.crs-reel__play:hover{opacity:.85;transform:translate(-50%,-50%)scale(1.08)}}.crs-reel__expand{color:#191919;cursor:pointer;z-index:2;background:#fff6;border:0;border-radius:4px;justify-content:center;align-items:center;width:32px;height:32px;padding:0;transition:background-color .2s,opacity .2s;display:flex;position:absolute;top:8px;right:8px}.crs-reel:not(.is-playing) .crs-reel__expand{opacity:0;pointer-events:none}.crs-reel__expand svg{width:100%;height:100%;display:block}.crs-reel__expand svg path{fill:none;stroke:currentColor}@media (hover:hover){.crs-reel__expand:hover{background:#fff}}.crs-pdp-reels__nav{justify-content:center;align-items:center;gap:10px;display:flex}.crs-pdp-reels__arrow{cursor:pointer;background:0 0;border:0;width:24px;height:24px;padding:0;line-height:0;transition:opacity .2s}.crs-pdp-reels__arrow svg{width:24px;height:24px;display:block}.crs-pdp-reels__arrow svg path{fill:none;stroke:#191919}.crs-pdp-reels__arrow--next svg{transform:scaleX(-1)}@media (hover:hover){.crs-pdp-reels__arrow:hover{opacity:.7}}.crs-pdp-reels__dots{align-items:center;gap:10px;display:flex}.crs-pdp-reels__dot{cursor:pointer;background:0 0;border:1px solid #191919;border-radius:50%;width:10px;height:10px;padding:0;transition:background-color .2s}.crs-pdp-reels__dot.is-active{background:#191919}.crs-lightbox{z-index:2147483646;opacity:0;pointer-events:none;justify-content:center;align-items:center;gap:64px;padding:15px;transition:opacity .35s;display:flex;position:fixed;inset:0}.crs-lightbox--open{opacity:1;pointer-events:auto}.crs-lightbox .crs-lightbox__overlay{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background:#0009;display:block;position:absolute;inset:0}.crs-lightbox__stage{line-height:0;position:relative}.crs-lightbox video{border-radius:4px;width:auto;max-width:100%;max-height:90vh;display:block}.crs-lightbox__spinner{z-index:10;border:4px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:60px;height:60px;display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.crs-lightbox__spinner.is-active{animation:.8s linear infinite crs-spin;display:block}@keyframes crs-spin{to{transform:translate(-50%,-50%)rotate(360deg)}}.crs-lightbox__arrow,.crs-lightbox__close{color:#fff;cursor:pointer;background:0 0;border:0;padding:0;line-height:0;transition:opacity .2s;position:relative}.crs-lightbox__arrow{flex:none;width:28px;height:49px}.crs-lightbox__arrow svg{width:28px;height:49px;display:block}.crs-lightbox__arrow--next svg{transform:scaleX(-1)}.crs-lightbox__close{z-index:2;width:24px;height:24px;position:absolute;top:-44px;right:0}.crs-lightbox__close svg{width:24px;height:24px;display:block}.crs-lightbox__arrow svg path,.crs-lightbox__close svg path{fill:none;stroke:currentColor}@media (hover:hover){.crs-lightbox__arrow:hover,.crs-lightbox__close:hover{opacity:.6}}@media screen and (width<=749px){.crs-gift__desc span{display:none}.installment.caption-large{margin-bottom:16px}shopify-payment-terms{text-align:center}.crs-lightbox{gap:0;padding:0}.crs-lightbox__stage{width:100%;height:100%}.crs-lightbox video{object-fit:contain;border-radius:0;width:100%;max-width:none;height:100%;max-height:none}.crs-lightbox__arrow{z-index:2;position:absolute;top:50%;transform:translateY(-50%)}.crs-lightbox__arrow--prev{left:8px}.crs-lightbox__arrow--next{right:8px}.crs-lightbox__close{top:8px;right:8px}}.crs-howto{background:var(--crs-accent-soft);border-radius:6px;padding:24px 32px}.crs-howto__title{font-family:var(--crs-head);color:var(--crs-accent-text);margin:0 0 24px;font-size:24px;line-height:32px}.crs-howto__title--made{border-top:1px solid #a7256126;margin-top:24px;padding-top:24px}.crs-howto p{color:var(--crs-muted);font-size:15px;line-height:24px}.crs-steps{margin:0;padding:0;list-style:none}.crs-step{align-items:center;gap:16px;padding:4px 0;display:flex}.crs-step+.crs-step{margin-top:16px;position:relative}.crs-step__arrow{width:7px;height:16px;position:absolute;top:-16px;left:16px}.crs-step__arrow svg{display:block}.crs-step__num{width:40px;height:40px;font-family:var(--crs-num);letter-spacing:.6px;color:var(--crs-accent-text);background:#a725611a;border-radius:50%;flex:none;justify-content:center;align-items:center;font-size:24px;line-height:24px;display:flex}.crs-step__icon{flex:none;width:40px;height:40px;margin-left:16px}.crs-step__icon svg{width:100%;height:100%}.crs-step__text{color:var(--crs-ink);font-size:15px;line-height:24px}.crs-inline-link{cursor:pointer;font:inherit;color:var(--crs-accent-text);background:0 0;border:0;padding:0;text-decoration:underline}.crs-thumbs{scrollbar-width:none;gap:10px;margin-top:12px;display:none;overflow-x:auto}.crs-created-slot{list-style:none}.crs-gallery__hint{z-index:1;font-family:var(--crs-body);color:#6e4e57;pointer-events:none;background:#faf4f7;border-radius:999px;padding:4px 10px;font-size:12px;display:none;position:absolute;top:12px;right:12px}.crs-gallery__arrow{z-index:3;cursor:pointer;background:0 0;border:0;justify-content:center;align-items:center;width:36px;height:44px;padding:0;line-height:0;transition:opacity .2s;display:none;position:absolute;top:50%;transform:translateY(-50%)}.crs-gallery__arrow--prev{left:0}.crs-gallery__arrow--next{right:0}.crs-gallery__arrow svg{width:14px;height:26px;display:block}.crs-gallery__arrow--next svg{transform:scaleX(-1)}.crs-gallery__arrow:disabled{opacity:.4;cursor:default}@media (hover:hover){.crs-gallery__arrow:not(:disabled):hover{opacity:.7}}@media screen and (width>=990px){.crs-product .product__media-list{gap:10px}.crs-product .product__media-list>li:first-child{flex:0 0 580px;max-width:580px;margin-inline:auto}.crs-product .product__media-list>.crs-created-slot{flex:0 0 520px;max-width:520px;margin-inline:auto}.crs-product .product__media-list>.product__media-item:not(:first-child){max-width:calc(50% - 5px)}}.crs-thumbs::-webkit-scrollbar{display:none}.crs-thumb{border:1px solid var(--crs-line);cursor:pointer;background:#fff;border-radius:6px;flex:none;width:72px;height:72px;padding:0;overflow:hidden}.crs-thumb.is-selected{border:2px solid var(--crs-accent)}.crs-thumb img{object-fit:cover;width:100%;height:100%;display:block}.crs-created{border-radius:6px;flex-direction:column;align-items:center;gap:24px;margin:0;padding:24px 32px;display:flex}.crs-created h3{width:100%;font-family:var(--crs-head);color:var(--crs-accent);text-align:center;margin:0;font-size:24px;line-height:32px}.crs-created .icons_box{justify-content:space-between;gap:0;width:100%;display:flex}.crs-created .cpi_icons{text-align:center;flex-direction:column;align-items:center;gap:4px;display:flex}.crs-created .cpi_icons img{box-sizing:border-box;background:var(--crs-accent-soft);border-radius:50%;width:48px;height:48px;padding:12px}.crs-created .cpi_icons p{font-family:var(--crs-body);color:#191919;white-space:nowrap;margin:0;font-size:14px;line-height:20px}.crs-created__caption{border-top:1px solid var(--crs-line);width:100%;font-family:var(--crs-body);letter-spacing:.84px;text-align:center;text-transform:uppercase;color:#191919;margin:0;padding-top:24px;font-size:14px;line-height:19.5px}body.crs-drawer-open{overflow:hidden}.crs-drawer{z-index:2147483646;font-family:var(--crs-body);position:fixed;inset:0}.crs-drawer .crs-drawer__overlay{background:#00000091;display:block;position:absolute;inset:0}.crs-drawer__dialog{background:#fff;flex-direction:column;gap:16px;width:420px;max-width:100%;height:100%;padding:20px;transition:transform .5s;display:flex;position:absolute;top:0;right:0;overflow-y:auto;transform:translate(100%)}.crs-drawer--open .crs-drawer__dialog{transform:translate(0)}.crs-drawer__head{flex-direction:row-reverse;flex:none;justify-content:space-between;align-items:flex-start;gap:16px;display:flex}.crs-drawer__title{font-family:var(--crs-body);color:var(--crs-ink);margin:15px 0 0;font-size:22px;font-weight:500;line-height:28px}.crs-drawer__close{cursor:pointer;width:25px;height:25px;color:var(--crs-ink);background:0 0;border:0;border-radius:50%;flex:none;justify-content:center;align-items:center;padding:0;display:flex}.crs-drawer__close svg{width:16px;height:16px;display:block}.crs-drawer__close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}.crs-drawer__body,.crs-drawer__body>.crs-rte,.crs-drawer__body>.crs-remote,.crs-drawer__body>.crs-remote>.crs-rte{flex-direction:column;gap:16px;display:flex}.crs-drawer__body>*,.crs-drawer__body>.crs-rte>*,.crs-drawer__body>.crs-remote>*,.crs-drawer__body>.crs-remote>.crs-rte>*{margin:0}.crs-drawer__intro{flex-direction:column;gap:12px;display:flex}.crs-drawer__intro p{color:#121212bf;margin:0;font-size:15px;line-height:24px}.crs-note{background:var(--crs-accent-tint);color:var(--crs-accent-text);border-radius:8px;margin-bottom:20px;padding:16px;font-size:15px;font-style:italic;line-height:22px}.crs-rte h3,.crs-rte__h{font-family:var(--crs-head);color:var(--crs-ink);margin:20px 0 6px;font-size:20px}.crs-rte p,.crs-rte li{color:var(--crs-muted);font-size:15px;line-height:24px}.crs-rte a{color:var(--crs-accent-text)}.crs-drawer .crs-note{color:#a72561;background:#a725610d;margin:0;padding:8px 12px;font-size:14px;line-height:18px}.crs-drawer .crs-rte h3,.crs-drawer .crs-rte__h{font-family:var(--crs-body);color:#000;margin:0;font-size:16px;font-weight:500;line-height:20.8px}.crs-drawer .crs-rte p,.crs-drawer .crs-rte li,.crs-drawer .crs-accord__panel p,.crs-drawer .crs-accord__panel li{color:#121212bf;font-size:15px;line-height:24px}.crs-drawer .crs-accord__item{border-top:1px solid #c2bfbf}.crs-drawer .crs-accord__item:last-child{border-bottom:0}.crs-drawer .crs-accord__sign{color:#000;width:20px;height:20px}.crs-drawer .crs-accord__sign:before,.crs-drawer .crs-accord__sign:after{display:none}.crs-drawer .crs-accord__sign svg{width:20px;height:20px;transition:transform .2s;display:block}.crs-drawer .crs-accord__sign svg path{fill:none;stroke:currentColor}.crs-drawer .crs-accord__head[aria-expanded=true] .crs-accord__sign svg{transform:rotate(180deg)}.crs-drawer .crs-accord__head{font-family:var(--crs-body);color:#000;gap:10px;padding:15px 0;font-size:16px;font-weight:500;line-height:20.8px}body.crs-pdp .section-header.cust_noti{z-index:100}body.crs-pdp:has(.section-header.cust_noti){overflow:hidden}body.crs-pdp #custom_notifications{font-family:var(--crs-body)}body.crs-pdp #custom_notifications .modal-header-amor h3{font-family:var(--crs-body);color:var(--crs-ink);margin:15px 0 16px;font-size:22px;font-weight:500;line-height:28px}body.crs-pdp #custom_notifications .modal-header-amor button.close{width:25px;height:25px;color:var(--crs-ink);background:0 0;border:0;border-radius:50%;justify-content:center;align-items:center;padding:0;display:flex}body.crs-pdp #custom_notifications .modal-header-amor button.close svg{width:16px;height:16px;display:block}body.crs-pdp #custom_notifications .modal-header-amor button.close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}body.crs-pdp #custom_notifications .header-description,body.crs-pdp #custom_notifications .panel-body p.fs14{color:#121212bf;font-size:15px;line-height:24px}body.crs-pdp #custom_notifications .accord{margin-top:16px}body.crs-pdp #custom_notifications .accord-heading{font-family:var(--crs-body);color:#000;font-size:16px;font-weight:500;line-height:20.8px}@media screen and (width<=749px){product-info{padding-top:0!important}.crs-pdp section.crs-info.product__info-container{padding-top:22px}.crs-info .fera-storeReviewsSummary-verifiedBadge-preTextNumber{margin-left:2px}.crs-pdp .crs-info>.product__title{text-align:center;gap:7px}.crs-product .price{justify-content:center;gap:12px}.crs-info .fera-storeReviewsSummary-content{justify-content:center}.crs-info .product__title h1{letter-spacing:normal;font-size:28px;line-height:38px}.crs-pdp .crs-info>[id^=price-]{margin-top:9px;margin-bottom:-5px}.crs-product .price .price-item--sale,.crs-product .price .price-item--regular{letter-spacing:normal;margin-right:0;font-size:18px;line-height:24px}.crs-product .price__sale s.price-item--regular{letter-spacing:normal;font-size:15px;line-height:20px}.crs-product .price__badge-sale{color:#289160;text-align:center;letter-spacing:1px;background:#25a7451a;border:1px solid #ffffff1a;border-radius:111px;font-family:Jost;font-size:12px;font-style:normal;font-weight:400;line-height:13px}.crs-media{flex-direction:column;display:flex}.crs-created{background:var(--crs-accent-tint);background:#ff99c90d;border-top:1px solid #a725611f;border-bottom:1px solid #a725611f;border-radius:0;order:4;gap:12px;padding:14px 16px;margin:0 -1.5rem!important}.crs-created__caption{color:#a72561;letter-spacing:.6px;text-transform:uppercase;border:none;padding-top:0;font-size:10px;font-weight:400;line-height:18px}.crs-created h3{color:#191919;letter-spacing:.72px;text-transform:uppercase;font-family:Jost;font-size:12px;font-weight:400;line-height:19.5px}.crs-created .icons_box{justify-content:space-between;gap:0;padding:0}.crs-created .cpi_icons img{width:42px;height:42px;padding:10px}.crs-created .cpi_icons p{white-space:nowrap;font-size:12px}.crs-media .product__media-list.slider--mobile{padding-inline:0;scroll-padding-left:0}.crs-media .product__media-list.slider--mobile>.product__media-item{width:100%;max-width:100%}.crs-media .product__media-list.slider--mobile .product-media-container.constrain-height{width:100%}.crs-media slider-component{position:relative}.crs-gallery__hint{display:block}.crs-gallery__arrow{display:flex}.crs-thumbs{gap:8px;margin-top:8px;display:flex}.crs-thumb{width:48px;height:48px}.crs-pdp .crs-info>.crs-options{border:none;margin-top:24px;padding-top:0}.crs-options{gap:32px}.crs-opt-head__label{line-height:19.5px}.crs-opt-head__value{letter-spacing:.24px;color:var(--crs-accent);font-size:12px;line-height:20px}.crs-guide-link{letter-spacing:.26px;font-size:13px;line-height:14px}.crs-opt__list--swatches{scrollbar-width:none;gap:8px;margin:0 -1.5rem;padding:2px 1.5rem;display:flex;overflow-x:auto}.crs-opt__list--sizes{scrollbar-width:none;flex-wrap:nowrap;gap:8px;margin:0 -1.5rem;padding:2px 1.5rem;overflow-x:auto}.crs-opt__list--swatches::-webkit-scrollbar{display:none}.crs-opt__list--sizes::-webkit-scrollbar{display:none}.crs-swatch{flex:none;width:78px;padding:12px 4px}.crs-swatch__label{letter-spacing:.24px;font-size:12px;line-height:18px}.crs-accord__item{border-top:0}.crs-gift{padding:15px 14px}.crs-pdp .crs-info>.crs-trust{margin-top:16px}.crs-trust{gap:16px}.crs-trust__icon{width:26px;height:26px}.crs-pdp .crs-info>.crs-help{margin:16px -1.5rem 0;padding:16px 1.5rem 0}.crs-help{color:var(--crs-muted);font-size:14px}.crs-help a{color:#575757}.crs-pdp .crs-info>.crs-details{margin-top:16px}.crs-accord__head{font-family:var(--crs-body);letter-spacing:.3px;padding:18px 0;font-size:15px}.crs-accord__panel{padding-bottom:18px}.crs-details__list li{letter-spacing:normal;color:#6b5f64;font-size:14px;line-height:23.8px}.crs-details__toggle{color:var(--crs-accent);font-size:14px;font-weight:500}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto{margin-inline:-1.5rem}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto,.crs-pdp .crs-info>.crs-bottom{margin-top:16px}.crs-pdp-reels,.crs-howto{border-radius:0}.crs-pdp-reels__head{gap:8px;padding:0 1.5rem}.crs-pdp-reels__title{letter-spacing:normal;max-width:none;font-size:24px;line-height:30px}.crs-pdp-reels__subtitle{letter-spacing:.28px;max-width:289px;font-size:14px}.crs-howto{padding:24px 1.5rem}.crs-howto__title{margin-bottom:20px}.crs-howto__title--made{margin-top:20px;padding-top:20px}.crs-howto p,.crs-step__text{letter-spacing:.28px;font-size:14px}.crs-step__icon{margin-left:8px}body.crs-pdp #custom_notifications{width:100%!important}}#satcb_bar{display:none!important}body:has(.crs-sticky.is-visible:not(.is-suspended)) :is(#chat-button,#mount-floating-engagement-widget){bottom:100px!important}body:has(.crs-sticky.has-popover) :is(#chat-button,#mount-floating-engagement-widget){visibility:hidden!important}@media (width<=768px){body:has(.crs-sticky.is-visible:not(.is-suspended)) :is(#chat-button,#mount-floating-engagement-widget){bottom:90px!important}}@media (width<=380px){.customProductImage .cpi_icons{max-height:initial!important}}.crs-sticky{z-index:2147483620;background:#fff;border-top:1px solid #0000001a;transition:bottom .25s;position:fixed;bottom:-81px;left:0;right:0}.crs-sticky.is-visible{bottom:0}.crs-sticky.is-visible.is-suspended{bottom:-81px}.crs-sticky .crs-sticky__backdrop{display:none;position:fixed;inset:0 0 81px}.crs-sticky.has-popover .crs-sticky__backdrop{display:block}.crs-sticky__inner{align-items:center;gap:12px;max-width:1277px;margin:0 auto;padding:12px 16px;display:flex}.crs-sticky__thumb{object-fit:cover;border-radius:6px;flex:none;width:60px;height:60px}.crs-sticky__title{white-space:nowrap;text-overflow:ellipsis;min-width:0;font-family:var(--crs-head);color:var(--crs-ink);flex:1 0 0;font-size:28px;overflow:hidden}.crs-sticky__controls{flex:2;justify-content:flex-end;align-items:center;gap:12px;display:flex}.crs-sticky__pickers{align-items:center;gap:12px;display:flex}.crs-sticky__picker{position:relative}.crs-sticky__trigger{box-sizing:border-box;border:1px solid var(--crs-line);cursor:pointer;height:56px;font-family:var(--crs-body);letter-spacing:.28px;color:var(--crs-ink);background:#fff;border-radius:6px;justify-content:center;align-items:center;gap:12px;padding:0 12px;font-size:14px;line-height:18px;transition:border-color .15s;display:flex}.crs-sticky__trigger:hover{border-color:var(--crs-accent)}.crs-sticky__trigger.is-open{border-color:var(--crs-accent);box-shadow:inset 0 0 0 1px var(--crs-accent)}.crs-sticky__trigger--swatch{text-align:left;justify-content:flex-start;min-width:120px}.crs-sticky__trigger--size{width:56px;min-width:56px;padding:0}.crs-sticky__dot{border-radius:50%;flex:none;width:32px;height:32px}.crs-sticky__trigger-label{text-overflow:ellipsis;overflow:hidden}.crs-sticky__popover{background:#fff;border:1px solid #0000001a;width:max-content;max-width:min(560px,100vw - 32px);max-height:70vh;padding:16px;position:absolute;bottom:calc(100% + 14px);right:0;box-shadow:0 -8px 24px #0000001f}.crs-sticky__close{display:none}.crs-sticky__cta{background:var(--crs-accent);color:#fff;cursor:pointer;min-width:220px;max-width:470px;height:56px;font-family:var(--crs-body);letter-spacing:1.08px;text-transform:uppercase;white-space:nowrap;border:0;border-radius:6px;flex:1 0 0;justify-content:center;align-items:center;gap:5px;padding:0 24px;font-size:18px;display:flex;overflow:hidden}.crs-sticky__cta:hover:not([disabled]){background:#8e1e53}.crs-sticky__cta[disabled]{opacity:.5;cursor:not-allowed}@media screen and (width<=749px){.crs-sticky__thumb,.crs-sticky__title{display:none}.crs-sticky__inner,.crs-sticky__controls,.crs-sticky__pickers{gap:8px}.crs-sticky__controls{width:100%}.crs-sticky__trigger--swatch{justify-content:center;width:110px;min-width:110px;padding:0 8px}.crs-sticky__dot{width:28px;height:28px}.crs-sticky__cta{letter-spacing:.84px;flex-direction:column;gap:0;min-width:0;padding:0 12px;font-size:14px;line-height:22px}.crs-sticky__cta-sep{display:none}.crs-sticky__popover{border-left:0;border-right:0;border-radius:0;width:100%;max-width:100%;max-height:60vh;padding:8px 1.5rem 20px;position:fixed;bottom:81px;left:0;right:0}.crs-sticky__close{z-index:1;cursor:pointer;color:#fff;background:0 0;border:0;justify-content:center;align-items:center;width:32px;height:32px;margin:0 -8px 0 auto;padding:0;display:flex;position:absolute;bottom:calc(100% + 8px);right:16px}.crs-sticky__close svg{width:14px;height:14px;display:block}.crs-sticky__close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}.crs-sticky .crs-sticky__backdrop{background:#00000091}body.crs-pdp:has(.crs-sticky.has-popover){overflow:hidden}}.installment.caption-large{margin-top:16px}.crs-pdp .crs-recs .fera-reviews-header,.crs-recs .related-products__heading{border-bottom:1px solid #ddd;margin:0 0 32px;padding:0 0 32px}.crs-pdp .crs-recs .fera-reviews-header-title,.crs-recs .related-products__heading{font-family:var(--crs-head);letter-spacing:normal;color:#000;text-align:center;font-size:36px;font-weight:400;line-height:50.4px}.crs-pdp .crs-recs .fera-reviews-header-row2{margin-top:12px}.crs-pdp .crs-recs .fera-reviews-header-row2 .fera-row,.crs-pdp .crs-recs .fera-reviews-header-summary{justify-content:center;align-items:center;display:flex}.crs-pdp .crs-recs .fera-reviews-header-summary{gap:5px}.crs-pdp .crs-recs .fera-reviews-header-summary-rating-container{gap:12px}.crs-pdp .crs-recs .fera-reviews-header .fera-reviews-avgRating-number{font-family:var(--crs-body);letter-spacing:.6px;color:#191919;margin:0;font-size:20px;font-weight:400;line-height:28px}.crs-pdp .crs-recs .fera-reviews-header .fera-stars,.crs-pdp .crs-recs .fera-reviews-header .fera-stars-rating,.crs-pdp .crs-recs .fera-reviews-header .fera-stars-bg{letter-spacing:2.7px;font-size:18px;line-height:18px}.crs-pdp .crs-recs .fera-reviews-header .fera-stars{margin-right:-2.7px}.crs-pdp .crs-recs .fera-reviews-header .fera-reviews-count-str{font-family:var(--crs-body);letter-spacing:.6px;color:#00000080;margin:0;font-size:20px;line-height:16px}.crs-pdp .crs-recs .fera-review-date-val,.crs-pdp .crs-recs .fera-review-heading,.crs-pdp .crs-recs .fera-review-body,.crs-pdp .crs-recs .fera-review-customer-name,.crs-pdp .crs-recs .fera-review-product-link,.crs-pdp .crs-recs .fera-review-product-name,.crs-pdp .crs-recs .fera-reviews-showMore-btn{font-family:var(--crs-body)}.crs-pdp .crs-recs .fera-review-heading{color:#191919;font-size:18px;font-weight:500;line-height:25.2px}.crs-pdp .crs-recs .fera-review-body{color:#6b5f64}.crs-pdp .crs-recs .fera-review-customer-name,.crs-pdp .crs-recs .fera-review-product-text-container .fera-review-product-link{font-weight:500}.crs-pdp .crs-recs .fera-review-product-text-container .fera-review-product-link{line-height:22.4px}.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:minmax(0,1fr);gap:18px;display:grid;height:auto!important}.crs-pdp .crs-recs .fera-masonry-items>.fera-review{flex-direction:column;display:flex;position:static;width:auto!important;transform:none!important}.crs-pdp .crs-recs .fera-review-media{flex:none}.crs-pdp .crs-recs .fera-review-product{margin-top:auto}.crs-pdp .crs-recs .fera-review.crs-recs-overflow{display:none}@media screen and (width>=750px){.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (width>=990px){.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:repeat(4,minmax(0,1fr))}}@media screen and (width>=750px){.crs-pdp .crs-recs .fera-reviews-footer{margin-top:32px}}.crs-pdp .crs-recs .card__inner{border-radius:12px 12px 0 0;overflow:hidden}.crs-recs .card__inner .card__content{padding:9px}.crs-recs .card__inner .card__badge{grid-row:1;place-self:start end}.crs-recs .badge{color:#fff;font-family:var(--crs-body);letter-spacing:1px;text-transform:uppercase;background:#cb4583c9;border:1px solid #ffffff1a;border-radius:111px;padding:6px 12px;font-size:13px;line-height:13px}.crs-recs .card>.card__content{padding:17px 0 0}.crs-recs .card>.card__content .card__information{padding:0}.crs-recs .card>.card__content .card__heading>a{font-family:var(--crs-head);letter-spacing:.6px;color:var(--crs-ink);font-size:20px;line-height:24px}.crs-recs .price{font-family:var(--crs-body)}.crs-pdp .crs-recs .card-information>.price{margin-top:9px!important}.crs-pdp .crs-recs .price--on-sale .price__sale{align-items:baseline;gap:8px;display:flex}.crs-recs .price__sale>span:has(>s){order:1}.crs-recs .price-item{letter-spacing:normal;color:var(--crs-ink);font-size:16px;line-height:24px}.crs-recs .price__sale s.price-item--regular{color:#121212bf;font-size:13px;line-height:19.5px}@media screen and (width<=749px){.crs-pdp .crs-recs .fera-reviews-header,.crs-recs .related-products__heading{margin-bottom:24px;padding-bottom:24px}.crs-pdp .crs-recs .fera-reviews-header-title,.crs-recs .related-products__heading{font-size:28px;line-height:38px}.crs-recs .card>.card__content .card__heading>a{font-size:18px;line-height:22px}}";

//#endregion
//#region src/content/material-guide.html?raw
	var material_guide_default = "<div class=\"crs-note\">\n  We know how precious your inclusions are. Choosing the right metal ensures your keepsake fits\n  your lifestyle and lasts as long as your memories.\n</div>\n\n<h3 class=\"crs-rte__h\">Sterling Silver</h3>\n<p>\n  A beautiful, timeless, and accessible choice for your meaningful piece. Solid sterling silver is\n  durable enough for everyday wear, though it naturally tarnishes over time depending on your skin's\n  chemistry. It will require occasional, gentle polishing with a soft cloth to maintain its bright,\n  silver finish.\n</p>\n\n<h3 class=\"crs-rte__h\">Gold Filled</h3>\n<p>\n  A wonderful balance of quality and affordability. This features a thick layer of real gold\n  permanently bonded to a jeweler's brass core. While significantly more durable than standard gold\n  plating, the gold layer can eventually wear down over time with heavy daily use or exposure to\n  water and chemicals. We recommend this option for pieces you plan to wear gently or occasionally,\n  rather than 24/7.\n</p>\n\n<h3 class=\"crs-rte__h\">14K Gold</h3>\n<p>\n  The ultimate standard for a forever keepsake. Solid 14k gold is a single, continuous alloy that\n  will never rub off, flake, or fade. If you work with your hands, want to wear your piece 24/7 with\n  complete peace of mind, and desire a true heirloom to pass down through generations, this is the\n  safest and most durable investment for your precious memories.\n</p>\n";

//#endregion
//#region src/money.ts
	var NUMBER = /\d[\d.,   ]*\d|\d/;
	var readFormat = (text) => {
		const match = text.match(NUMBER);
		if (!match) return null;
		const raw = match[0];
		const cut = Math.max(raw.lastIndexOf("."), raw.lastIndexOf(","));
		const hasDecimals = cut > -1 && /^[.,]\d{1,2}$/.test(raw.slice(cut));
		const intPart = hasDecimals ? raw.slice(0, cut) : raw;
		return {
			raw,
			decimalSep: hasDecimals ? raw[cut] : "",
			groupSep: intPart.match(/[.,   ]/)?.[0] ?? "",
			decimals: hasDecimals ? raw.length - cut - 1 : 0
		};
	};
	var parseMoney = (text) => {
		const format = readFormat(text);
		if (!format) return NaN;
		const { raw, decimalSep } = format;
		const cut = decimalSep ? Math.max(raw.lastIndexOf("."), raw.lastIndexOf(",")) : -1;
		const digits = (cut > -1 ? raw.slice(0, cut) : raw).replace(/\D/g, "");
		const frac = cut > -1 ? raw.slice(cut + 1) : "";
		return Number(`${digits}.${frac || 0}`);
	};
	var stripCurrencyCode = (text) => {
		const trimmed = text.trim();
		const match = trimmed.match(/^(.*\S)\s+[A-Z]{3}$/);
		if (!match) return trimmed;
		const [, withoutCode] = match;
		return /[^\d\s.,]/.test(withoutCode) ? withoutCode : trimmed;
	};
	var formatLike = (template, value) => {
		const format = readFormat(template);
		if (!format) return String(value);
		const [int, frac] = value.toFixed(format.decimals).split(".");
		const grouped = format.groupSep ? int.replace(/\B(?=(\d{3})+(?!\d))/g, format.groupSep) : int;
		return template.replace(format.raw, frac ? grouped + format.decimalSep + frac : grouped);
	};

//#endregion
//#region src/product.ts
	var fetchProduct = () => fetch(`${location.pathname}.js`).then((r) => r.json());
	var basePriceCents = (cents) => {
		const rate = Number(window.Shopify?.currency?.rate);
		return rate > 0 ? cents / rate : cents;
	};
	var fetchGift = async (handle) => {
		const html = await fetch(`/products/${handle}`).then((r) => r.text());
		const doc = new DOMParser().parseFromString(html, "text/html");
		const title = doc.querySelector("h1").textContent.trim();
		const price = doc.querySelector("[id^=\"price-\"][id$=\"__main\"]");
		const was = price.querySelector(price.querySelector(".price--on-sale") ? "s.price-item--regular" : ".price__regular .price-item--regular").textContent.trim();
		const { variants } = await fetch(`/products/${handle}.js`).then((r) => r.json());
		return {
			title,
			price: stripCurrencyCode(was),
			variantId: variants[0].id
		};
	};
	var getSelect = (option) => document.querySelector(`select[name="options[${option}]"]`);
	var setOption = (option, value) => {
		const select = getSelect(option);
		if (!select || select.value === value) return;
		select.value = value;
		select.dispatchEvent(new Event("change", { bubbles: true }));
	};
	var selectedValues = (product) => product.options.map((o) => getSelect(o.name)?.value ?? "");
	var selectedVariant = (product) => {
		const selected = selectedValues(product);
		return product.variants.find((v) => v.options.every((o, i) => o === selected[i]));
	};
	var isRealOption = (option) => !(option.values.length === 1 && option.values[0] === "Default Title");
	var imageOptionIndex = (product) => {
		for (let i = 0; i < product.options.length; i++) {
			const byValue = /* @__PURE__ */ new Map();
			product.variants.forEach((v) => {
				if (!v.featured_image) return;
				const value = v.options[i];
				if (!byValue.has(value)) byValue.set(value, /* @__PURE__ */ new Set());
				byValue.get(value).add(v.featured_image.src);
			});
			const images = new Set([...byValue.values()].flatMap((s) => [...s]));
			if (byValue.size > 1 && images.size > 1 && [...byValue.values()].every((s) => s.size === 1)) return i;
		}
		return 0;
	};
	var optionImages = (product, index) => {
		const map = {};
		product.variants.forEach((v) => {
			const value = v.options[index];
			if (v.featured_image && !map[value]) map[value] = v.featured_image.src;
		});
		return map;
	};
	var isAvailable = (product, index, value) => {
		const selected = selectedValues(product);
		return product.variants.some((v) => v.available && v.options[index] === value && v.options.every((o, i) => i === index || o === selected[i]));
	};

//#endregion
//#region src/description.ts
	var lineText = (html) => {
		const el = document.createElement("div");
		el.innerHTML = html;
		return el.textContent.replace(/ /g, " ").trim();
	};
	var parseDescription = (description) => {
		const productName = document.querySelector(".product__title h1")?.textContent?.trim();
		const specs = [];
		const prose = [];
		description.querySelectorAll(":scope > p").forEach((p) => {
			const bullets = p.innerHTML.split(/<br[^>]*>/gi).map(lineText).filter(Boolean).filter((line) => line.startsWith("-"));
			if (bullets.length >= 2) {
				specs.push(...bullets.map((line) => line.replace(/^-\s*/, "")));
				return;
			}
			if (productName && lineText(p.innerHTML).replace(/\s*\(#\d+\)$/, "") === productName) return;
			if (p.textContent.trim()) prose.push(p.cloneNode(true));
		});
		return {
			specs,
			prose
		};
	};
	var inclusionCaption = (specs) => specs.find((line) => /fused/i.test(line)) ?? specs.find((line) => /inclusion/i.test(line));

//#endregion
//#region src/icons/flag-usa.png?inline
	var flag_usa_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABYTSURBVGhD7Zl5WM5p3/+/w4wZslRaLK2o7MmWJUuT294QIlxKCKmkGIRRIjuNEdmSbGmhdCdtKllCq0q7pKt937O/fseVmfu+x/ya3++P53mO5w+v4ziP6ziu7Xu9v+d5vj/vz3kJwle+8pWvfOUrX/nKV/4Leezj0zna8aBS2PZfRoXb7/rp7iaHxcEbt4mCrDabB1nbLwmy3jwryHbL+KCN21Sio6O//fLz/2uIOHi2x4NdB7Tv73RaHr31l4P3N++8FmW3PTZq49a8SEv72qi1tjywsCXWfAP3TdcTLVpL5PI1hC63IFhkQaBoTV3gyvUZd9bbBoZYbdkSbLl5VMLZs999eZ3/EUJOnOgevWPfiAcOjstit+06EmPvEBFr5/D6gfXPPN+4ncz1m8lYsYH0hStJnWFM0sTZxI+eRpyOPo+G6RE7eDzRA3WJHDCKsH46hEqG5lgixxgQO2sxj0XrCFm6Ct9/zI9yGzy465fXb0PTaOfM0aaHTszc6GZw6EJgty9f///B19e3o6tngPSGw74jRE6Xl69xDTzis21feJztz5/F2Gwj08KOTBMLMmctIWPqPLKnzufl3OXkL7GgYI0dBdv3UnDYjQLP67wKCiH3n3fJCg7lxZ1QUm74k3D2Ik+P/sZDux3ELjbn4TQjHuvoE6k5Fg/14dWnVYbJfPm72uimY7FqutVvrHL0YP7mU6+X7Tgbbmh/6oRo53lLSxfP+Wv2Xv5x4XYPXdv9l3U3HfKeZLLz4o8iR08T68Pe2y32XT29ZJfX3VV7ryebO18r3XDE7+Nuj0iMjkTyz9U7KPiHERlT538WYyhCvNqOsn2u1NwIoDEpldbqGt4Cb4AWoAGoAco/vKOoqZGC6ipyS4rJLi8ls6aKjPoa0htqyWyoJae8lJfPEnh26FcuTP9J7KiqKv2lts8ozBdNXrEH60PXUTX5jYlWHhy+HMbKfT78tO0SK5yusH7/NYx3eLJ452Vsjt3ExvU2Cxz9MXG5zc3o5yw9EMxwy+v8fO4+HqFpKFne4palC417DlHjH0RjQgpv6ht4D3z8fbwDWotLaUzNoDr0HqVnvChwOkz2qo2kzjYh8cf5PB0/i0cjfyR23Azu6xtyf6YxDyw28vSwK2mBwRQUidvE+kZFil1dXdsRONREJGivR5jkhNaKU/RedAL7E0Ho2XjSefZxDB1ucCk4jn5m51FY7M7RGw/Y7B6JvMkFhlh6Y+seg679LQyd76Jl6YeahS89l13lbnYtEv4lRlxMQ/Qjqs94UbZpF0XzV/J6/Bzyh00lt/9YMvtqkyY/iBTpATyTUiHu+z48+FaRaKEnEYI0oUJ37grdCBG6E/qNHNE91Hmqo89DcysuO+wSe3p6tiNwkIlISm8jHcbtYqdbEIt/8UYY4URPo5PsOBNKnyVnkJ53ih+3+iI6GEy3Refovug8v95KYI5jMIK+GxO3BuL3IAelVTdQXeOD3Bp/gi6G0nruEmXWDhTNM+O17ixeDZ5Efr+x5KuOIl91NK/Ux/JywDjyBk8iR8eAbD1Dsn4SkWlqRdpKK1LMrUlcZc0T45U8mL6AmHHTieyvQ4R0P6K7KPOwiwrh0v04pdBP7Kiq3Y7AnoYiw3UuWLpc5Qf9/XQ3PM4gkTtKxqew+TUY+YWnEaYew3D3LWzdIvjO0B3ZJR4s3h+Kto0vC/eHMsTKH+mlV1jhGoNHeBZd1gbhM34Z1UpDfxczivz+uhQMm4J40jxKl66nctcB6j1v0BAURmN8Mo0vC6gvr6C2uYmqd28oa22mqLmRgoY68ioryJEsx/yXpCUlkRoaTvql66Rt2U3M5LmcVh4odu3R3h4cZCzqpmeLysIjCBP3IUzaz5mb9xm7wRNBZy/jba7idjOOjrPcEH48gfPVR9icjkbQP0kf0yvciMliuM1NuizyYuLWYGY5RyBjGYzfJFPqJ86kdPkGqpyOUH/Zj9b4ZN6XVfCpbfH+mz+WscRo6oHqlmbK6uoQV1TwqriIvOIickqLyS4rJUsitraaVy1NlLxp4UVWFtd/cxO7mpm1I1B7uUjQtkQY4cC6g/7M2XIFqelHkZl/Es0V51BdcYHp2/2RX3KeXssuMs7Oj8GW3hjsuM1Yu1t0XujJaPtArkVno7rGF6kl11Aw9yf4VhyfKv4q5g8+ffjI+/JK3qRn0hjziCrvAIoPnCDfxoFM41Wkzl1KksECnurNJs7AiMdzl/LIxJwnW3aSdOYiWRHRiIuKyCovxS8i/G/2YN/5olGLf0F/3SmmbvBgiu0lhLEuyMw7yfWweJSXnUcYc5AVh0Jwv52IYOCGMPsM50PSWOASxvcLPBlmc4uVJ2KZuP0Oa089Rna5N3fzm/4spqiE1rgE6i96U+3gQtmiNRRPnk+hzjTyNcaRo6xDhsJgUmU0SOymxrPOSjz+rjex38gTJcgSIcgQLjEYoQfhHRWIldMkUW82TzY5cG3vfrFnwN8IHLlwF8t3X0bQcUKY4ILjhTBGr7tED8OTqJt6MGfHTZREnqiaeTFjx23mOgbTyciD3qbX8H2Qi+6WIIQZ51l8JBq3O5l0W+lP8OVI3p3zotLekVIjc4r1DCkcOoXCAeMoVB/zefTTpaC/bpvAvGFTyB0zg2yDBWQuNCd90SpSjFeRaGzOkxnGPBg3g5jhE4nsNZAIqb7EfN+HOCkVImUH4N5LU+zarslom4qEYZYII3fw0/Zr6Kw6x4IdNxi6+iId9I8xfN1lTgU8o8s8d4RpJ9l87j5rTkShuOIymut9mbs3jHE/B7HragLqa/2RFnmjYBvGTb0V1Ktq81ptNIVqYyjsr4t4yGSKx8+hzMicantH6k950hQQQlPUA5rSMmgsKaWutpaa1hbKm5soaajndU01+WWl5LwuIDM7i7RHcTz3DyDtxBlSV28kZuSPnJYI7NGjHYHqxqIBc7czwOgw5nt8Mdp5A2HoHqTnu3Hlbjx9l55HmHQMkwN3cLkehzDrNILhWa5FZbL4YATCtDOM2RzE8cA0hm68zZRdYcjZhHJzkhlNY6dRvmQd1VudabjoTWv0o7al+um9pOT/mQ+SWgk0StLMh/dUtLZQUl9HQUUF+VWV5FVXklNVQXZNFbn1tRRITKaliRcpz7l24IjY1WxeOwIVDEUGZs5YH/JBGLUHYcohzFxuMdDsAmMtL6O8/AJqphfRsfZmukMgWhbeDLf2Q3OdDwPW+nDILxkdu9sIszww/+0h3g9eIbXclzt+j6C45Esdf+JjbR3vCsQ0P02i9vZdys5e5rXDPrLNrHlhYkHKfFPiZy7mqdEKnqxYyxOLTcTvO8LzG/7kPHlGcVUV2VUV+EeGiz0DAtoRKHHRkVYIek5orHBHacFJdrjfZbSlF4KOC6Otr+EdmULHOacR9H7lgPdTNl94iDD7LErm3uy+moCOXSBz90Uy3DYIjQ0ByK3wIayg+c9iqmp4k/CcJr8gapyOUmFqQ4nBIsRjZ/JqyCRyVEeR2WsoabKaJHZV5en3fYn7thexghzRggyREnMRehAmyBDRuS8P+g4nedYS4p0OcP34r38jcJCJqOskO37Qc8LqSADWx24jjHCm89zfcPKMQmOlJ3ILzzDBzpcNblHImngitegiR/2TEB2LRjA4w/CNAQTEvUJrQwAqFjeRtwjkju8D3l3zo2bHfspN1lMyxYgibX0KNcZ/NhjJ3uw3lgJJshmgS67meHKGTyVr4hwyphuTOmMxyTMWEz/DmMd6s4gdpke0+kgiZNSI+E6RmG97/W4yGrgrDRS7ak9pR6DCfNEUU2e2/+ZPh6kHkZp1nGGrPei12J01R4JRWe6BMO0EU7b4s+VcLF0WXEDWxAtD51BG2gVgfDCSkfa3kV5+nXn7o7j5uABZ61D89EypVxvxWYjqZzHigRMpHjOD0tnLqLLaTt3hU9Rf8qEhLJqGp4nUZ+dRW1lJdX095XV1FNdUU1BZzkuxmOzsbDKSU0iNuEfyBS9S9hwixdic6EHjOS3fr/0k84Omsaij9nq6Tt+PMPUQwuRDHPWOYfZ2HwTdgwxa48WF4AR6LDqHYHCSbR4P2Xv9KcLsc8ivuIbnvWwmbA+hi8l1tDYGMW57KIJpID66y2kcrU/Z/JVUSRzTzYOWiPu8y37JpxaJnfwbSRj4T5Op5RMV79+2mcjruhpe1VaTV1NFTnUV2bXV5NTVUNDcSElDHemP4ri600nsOq8dk3FxdhE5Ov/KEquTaBkdpbP+AYTJBxD0jyJMOUbHOW6Mtr5BB0N3hFnuqK2+jrL5NQTD83QxuoiUkQcqoqvorPNh9rZANhyN5GJgMiX3E/j0upBP7/7qmH/wqfUN70vKac3Kpf7+Yyqu+lN4+CS5tjvIXGtHqpkViUtWE2+2gWfWW3nm4ETi6XOkhUWQl5FJSWMD2dWV+EuSTHuF/tfzZ0R3IkLIy0olJy2V2Kg4rnhH4OQagPVeX1bu8GbORi+Mt3oj+sWPZbv8sT4YjNuVWHxDkrj/KJNXecXUVNbCW0nr+n/nY2097zJyaL4dSt3xM1Su3UzZXBFFEw0p0NYnd4Du55ZJVpOkvyQZScskSTLShHWQI1JanUdaujxfakHiiTPcOHu+fZNxMTYRXT10lGdJSeRWVSCur6KyoYq6unKa6ytoqSunpbacN/VVfGiu5dPbRvgk6cP/mjIlz0iC8/vKKt4kpdLk909q9x6nwnwTpdOMKRo5DbHWhH8nGfUxFKiN4aX66DaB2VoTyBihT7reXFL05pAwYXZb0/tw+GRi1HS411uL8M59CevQk5iOisR1USZSXosz6sPFrlPaMZltgpTo5Pfy3Bk+gThLe5JPnycjLILctHQKxGLElZWUNtRT0dxE9ZsWalpaqKuro7a0jNqsXGpi46gJDKHK/RLlW50pWbKWokk/UShxzN9jWVuakQjSnIB4hAHFBsaUm22kes8xat0vUXcjkLqoB9SmvqA6v4DKikpKy8sRl5TwSiwmNyeHzOQU0uPiSPYLIOHoCZJstpE0bQFRajqc7qnWvsk4dOsl+q2DLLeEroQJ0kR0VCBGtj+PNcfybOw/SDRYwPMFZqQbryZz0SqyjFaS9Y9FZI2dQdbQyWT3H9sWlHOVRpDXV5uXfUfwSm00BVoTEI+eQemc5VSs30rtUfe2WPYmNYMPNZ+7/T/4z3bp87nMJ8rfv6W4pZmC+lpe1tWQW1fTZjBZkkQjaZfqaxGXlfP8bjheVvZix/Zm8LCzi8hr527CF5sRPXAs96TVudepNzEd5HnQQYGHknrTqQ9Pf1AioYsKSV3VSOnej1RZTV4oDiFTRYccrQnkj51J4exllNrsoMb1LE1h0bzNyuNj658d8z/5+PED7+vqacl5Sd2TBMqDwih08yB3pwsZ9rtItd5KkoUtCTZbid+1l/gDx0m86k3aw0fk5edT3NxEVlUFfuFh7bdLx86fF/ndiyQhL4cXqWmkhYaTeu4SyQ57SF5rR8rydaQYmZJmZErGkjVkiSx5udGBwn2ulHrdoCosmvr4ZJrFxbxtbW2z+7/uTvjQ3MKb7DyawmOoPelBxaZfKDEyp9BgES9HTiNbcxzpStqkyA0kvpsacT/0bbu5Md/IcU+QbUswoZLRqReRigN5NEqf5+s3k+h5lRuXL7dvMs4mJqIrBw/zNCGh7W7kNtSR39zIq6YGXjfWU9RQR0ldLWUN9VS2NFP97g11v9crSRiTzI/EciRLTFIQJONdVTWt6Vk0BoRQc9SdsjX2FM1exuvR0ykYOJF89TH/OpfJUx1FjspIstRG82KALmlD9EgZ+SMJOvo8HTGFR9qTiNEYTWTvwYT3UOfud4qECrJEdZDnYRdlInoNwn3gKLFje3VQYjInvpcjeOg4Hq3bROKps7wICSM3PZ1Xr19TWF5GcX0tZU2NbUZTJRFZX0d1UTHV2blUPX5GZUAIFReuUrrzAOJl63k91YhX2vrka4wnX230ZzGSxwG6FAyfSuGknyheup7yn/dQeew0lVf8qAwOp0KyTPNeUlpRSVFlJa8rynlZVkJWbi7pz+JJiYzi2aUrxO1w5qloHU91ZxDedwhuMipix78zmRMdZbkpSHFXEma/VSBKuj8PNMYQN2Ya8QZGpBiZkWq8qq0JfbFwJRkzjHkxZjovhkwiQ3LkJ5mBvtpk9xlOTh9t8lRG8lJzHAU6BohnLKHUfBOV+1yp8w6gKTmNtzW1/1rKkvGv85jWVsrFRYgTksl/+JicqBgy7kaQHnWftGfxpKWnkV5cRFZzI/kf3rbdgCT/QC6aWYhdtdtpeA8fOCDy2r2HMBNz7g3SJaJnPyI79SHqG3miv1HgfkdFHn7bm7hOfXnaWZl4KVUSu/UjWUaDVIXBvFDWIVMSlEcakD/ThKK1myk/7k5dUGibebx786bNJf8QI1nCLcVl1EU/pOLidcTOR8mxcSB18WqeTDYkasgEQpSHcVtRi5s9++HbQwUfGXV8emngrz6Uf47R597y1TxzPkx21H1evC7ALzZK7NreHjzg6Cy6cSeYxIoyMl7l8/xeFMnnL5HosIeEtXYkLFtL4jwRyfNEn2dx6VqyrLaS73KcwvNXKL0bQXVyKvWvxbR8+tgmQDI7kvHu3TuaMnKoDg6j6LAbuZY/81zSHehMJVJ9BMFKQ/DvM5BrvTS52EtT0plzXHEABxXU2SunipOMErt79GF31944dlbA+Xs5DnSQ5rjQnXMde+Ivr0Gg3izOLF0p9mzvZHvLDz1FrgNHELLBloRbt0l/8YKcmiry37+h4OM7xHyg6NM7Sj99oAKo/P3/A4nRSI74JHWrobWVuuISqp8lUXrVj1eOB8kQrSdxyk/EDp5AqMowbvUZzHWlwXioDsWt3zD2qw9lt9qgBgdlrfyf+w54ate7X5CNgtqpDXLKO9bJ9l69WrqXaFV3RZOVXWWNzbrIrTX9oee2lZ1lD5t3kQ2wkJJ/Yd2jd4ujvCpH5dVxllGubLfQb+oit8bxOxkOCVJc6KyAj+owQibNIMZ0PU9+/oWk/cdIO3ORjAuXyTrvRfbZS2QeOUn6lt2kmFkRP2cpj/XmcF97MmFqI7jdeyA+vTS5rDSIc2pDce03DCf1wexUHSjeqqIVu0VZ45St8gBLWyWNySv79FcWKSpKffmb/l8MFoROou8V1VfL9Fli30vt2q6+Gs9O9hnY88v3tWHfTU7TSkrOa52UXKGdlAKOXRQ42Kknrh1lcO8oy4Xv5PHq3JurXftyrasSV7spcbmbMpe6q+Ahq85ZhQGc6q3Fr0qD2K8yiF0qWi0OygOztihpBNkrDdhvp6RhsqGPxgiz9u7wfwGO8oO7OgpT/v5fX2MZmR6iLjIzzbrK7VzdVf762m6KKVY9ehXayPSptpPt+8a+p/LbLXLKrZvlVZvt5dUq7BTUs2wV1KJsFdWublRUP2KjqG61sVe/2ZYKKv2mqKr+8OX3/2/kG4lok849+yztJqexolsfTVF3+QGm3eX7r1ZQUBwsDO705Qe+8pWvfOUrX/nKV/7b+T9/s/B6gUtWOwAAAABJRU5ErkJggg==";

//#endregion
//#region src/icons/warranty.svg?raw
	var warranty_default = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"20\" height=\"20\" fill=\"#F5F5F5\"/>\n<g id=\"PDP update\">\n<path d=\"M-3899.5 -1034.5C-3899.5 -1035.6 -3898.6 -1036.5 -3897.5 -1036.5H3021.5C3022.6 -1036.5 3023.5 -1035.6 3023.5 -1034.5V4505.5C3023.5 4506.6 3022.6 4507.5 3021.5 4507.5H-3897.5C-3898.6 4507.5 -3899.5 4506.6 -3899.5 4505.5V-1034.5Z\" fill=\"#F0D6D6\"/>\n<path d=\"M-3897.5 -1036.5V-1035.5H3021.5V-1036.5V-1037.5H-3897.5V-1036.5ZM3023.5 -1034.5H3022.5V4505.5H3023.5H3024.5V-1034.5H3023.5ZM3021.5 4507.5V4506.5H-3897.5V4507.5V4508.5H3021.5V4507.5ZM-3899.5 4505.5H-3898.5V-1034.5H-3899.5H-3900.5V4505.5H-3899.5ZM-3897.5 4507.5V4506.5C-3898.05 4506.5 -3898.5 4506.05 -3898.5 4505.5H-3899.5H-3900.5C-3900.5 4507.16 -3899.16 4508.5 -3897.5 4508.5V4507.5ZM3023.5 4505.5H3022.5C3022.5 4506.05 3022.05 4506.5 3021.5 4506.5V4507.5V4508.5C3023.16 4508.5 3024.5 4507.16 3024.5 4505.5H3023.5ZM3021.5 -1036.5V-1035.5C3022.05 -1035.5 3022.5 -1035.05 3022.5 -1034.5H3023.5H3024.5C3024.5 -1036.16 3023.16 -1037.5 3021.5 -1037.5V-1036.5ZM-3897.5 -1036.5V-1037.5C-3899.16 -1037.5 -3900.5 -1036.16 -3900.5 -1034.5H-3899.5H-3898.5C-3898.5 -1035.05 -3898.05 -1035.5 -3897.5 -1035.5V-1036.5Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n<g id=\"alt\" clip-path=\"url(#clip0_3369_82)\">\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-1115.5 -725.5)\" fill=\"white\"/>\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-1115.5 -725.5)\" fill=\"white\"/>\n<g id=\"Frame 1321314117\">\n<g id=\"Frame 1321314117_2\">\n<g id=\"Frame 1321314117_3\">\n<g id=\"Frame 1321314106\">\n<g id=\"product-form &#226;&#134;&#146; Form\">\n<g id=\"Frame 1321314117_4\">\n<g id=\"Frame 1321314117_5\">\n<g id=\"Frame 1321314117_6\">\n<g id=\"Frame 1321314119\">\n<g id=\"Frame 1321314162\">\n<g id=\"Frame 1321314117_7\">\n<g id=\"Frame 1321314119_2\">\n<g id=\"infinity-svgrepo-com 1\">\n<rect width=\"20\" height=\"20\" rx=\"3\" fill=\"url(#paint0_linear_3369_82)\"/>\n<g id=\"Frame\" clip-path=\"url(#clip1_3369_82)\">\n<path id=\"Vector\" d=\"M9.73037 14.423C8.22501 13.9564 6.9637 12.9162 6.21897 11.5272C5.47425 10.1383 5.30592 8.51205 5.75037 7C7.30813 7.07128 8.83245 6.53329 10.0004 5.5C11.1683 6.53329 12.6926 7.07128 14.2504 7C14.5897 8.15455 14.574 9.38447 14.2054 10.53\" stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path id=\"Vector_2\" d=\"M11.5 13.5L12.5 14.5L14.5 12.5\" stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<linearGradient id=\"paint0_linear_3369_82\" x1=\"10\" y1=\"0\" x2=\"10\" y2=\"20\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#CCA7DE\"/>\n<stop offset=\"1\" stop-color=\"#A72561\"/>\n</linearGradient>\n<clipPath id=\"clip0_3369_82\">\n<rect width=\"1440\" height=\"2419.3\" fill=\"white\" transform=\"translate(-1115.5 -725.5)\"/>\n</clipPath>\n<clipPath id=\"clip1_3369_82\">\n<rect width=\"12\" height=\"12\" fill=\"white\" transform=\"translate(4 4)\"/>\n</clipPath>\n</defs>\n</svg>\n";

//#endregion
//#region src/svg.ts
	var counter = 0;
	var inlineSvg = (svg) => {
		const ns = `crs${counter++}`;
		return svg.replace(/id="([^"]+)"/g, (_, id) => `id="${ns}-${id}"`).replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${ns}-${id})`).replace(/href="#([^"]+)"/g, (_, id) => `href="#${ns}-${id}"`);
	};

//#endregion
//#region node_modules/.pnpm/crsdevtool@1.1.0_@types+node@26.1.1/node_modules/crsdevtool/internal/jsx-runtime.js
	function appendChildren(parent, child) {
		if (child == null || typeof child === "boolean") return;
		if (Array.isArray(child)) {
			for (const c of child) appendChildren(parent, c);
			return;
		}
		parent.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
	}
	function jsx(type, props, _key) {
		if (typeof type === "function") return type(props ?? {});
		const { children, ...attributes } = props ?? {};
		const el = document.createElement(type);
		for (const [key, value] of Object.entries(attributes)) if (key.startsWith("on") && typeof value === "function") el.addEventListener(key.slice(2).toLowerCase(), value);
		else if (value === true) el.setAttribute(key, "");
		else if (value !== false && value != null) el.setAttribute(key, String(value));
		appendChildren(el, children);
		return el;
	}
	var jsxs = jsx;

//#endregion
//#region src/components/buybox.tsx
	var SWATCHES = [
		[/rose|pink|copper/i, "linear-gradient(205deg, #e8c2bd 11%, #fff 31%, #e1b7b2 50%)"],
		[/white|silver|platinum|steel/i, "linear-gradient(205deg, #dedede 11%, #fff 31%, #d8d8d8 50%)"],
		[/gold|brass|vermeil/i, "linear-gradient(205deg, #edce9b 11%, #fff 31%, #eac995 50%)"]
	];
	var swatchFor = (value) => SWATCHES.find(([re]) => re.test(value))?.[1] ?? SWATCHES[1][1];
	var isSwatchOption = (name) => /material|metal|colou?r|finish/i.test(name);
	var PDP_ANALYTICS = {
		prefix: "exp_pdp",
		loc: "PDP"
	};
	var GuideLink = (label, onClick) => /* @__PURE__ */ jsx("button", {
		class: "crs-guide-link",
		type: "button",
		onClick,
		children: label
	});
	var sizeGuideTrigger = () => document.querySelector("#guide_desc");
	var buildGuide = (option, onMaterialGuide, onSizeGuide, analytics = PDP_ANALYTICS) => {
		if (isSwatchOption(option.name)) return GuideLink("Material Guide", () => onMaterialGuide(analytics));
		const sizeGuide = /size/i.test(option.name) ? sizeGuideTrigger() : null;
		return sizeGuide ? GuideLink(sizeGuide.textContent.trim() || "Size Guide", () => onSizeGuide(analytics)) : null;
	};
	var OptionBlock = (product, option, index, guide, analytics = PDP_ANALYTICS) => {
		const swatches = isSwatchOption(option.name);
		const value = /* @__PURE__ */ jsx("span", { class: "crs-opt-head__value" });
		const button = (optionValue) => /* @__PURE__ */ jsx("button", {
			class: swatches ? "crs-swatch" : "crs-size",
			type: "button",
			"data-value": optionValue,
			onClick: () => {
				setOption(option.name, optionValue);
				pushData(swatches ? `${analytics.prefix}_material_select` : `${analytics.prefix}_size_select`, optionValue, "click", analytics.loc);
			},
			children: swatches ? [/* @__PURE__ */ jsx("span", {
				class: "crs-swatch__dot",
				style: `background-image:${swatchFor(optionValue)}`,
				"aria-hidden": "true"
			}), /* @__PURE__ */ jsx("span", {
				class: "crs-swatch__label",
				children: optionValue
			})] : document.createTextNode(optionValue)
		});
		const list = /* @__PURE__ */ jsx("div", {
			class: `crs-opt__list ${swatches ? "crs-opt__list--swatches" : "crs-opt__list--sizes"}`,
			children: option.values.map(button)
		});
		const root = /* @__PURE__ */ jsxs("div", {
			class: "crs-opt",
			children: [/* @__PURE__ */ jsxs("div", {
				class: "crs-opt-head",
				children: [/* @__PURE__ */ jsxs("span", {
					class: "crs-opt-head__label",
					children: [
						option.name,
						":",
						value
					]
				}), guide ?? document.createTextNode("")]
			}), list]
		});
		if (swatches) list.style.setProperty("--crs-swatch-count", String(option.values.length));
		const sync = () => {
			const current = getSelect(option.name)?.value;
			value.textContent = current ? ` ${current}` : "";
			list.querySelectorAll("[data-value]").forEach((el) => {
				el.classList.toggle("is-selected", el.dataset.value === current);
				el.classList.toggle("is-unavailable", !isAvailable(product, index, el.dataset.value));
			});
		};
		return {
			root,
			sync
		};
	};
	var Options = (product, onMaterialGuide, onSizeGuide) => {
		const root = document.createElement("div");
		root.className = "crs-options";
		const syncs = [];
		product.options.forEach((option, index) => {
			if (!isRealOption(option)) return;
			const guide = buildGuide(option, onMaterialGuide, onSizeGuide);
			const block = OptionBlock(product, option, index, guide);
			syncs.push(block.sync);
			root.append(block.root);
		});
		return {
			root,
			sync: () => syncs.forEach((fn) => fn())
		};
	};

//#endregion
//#region src/icons/accord-chevron.svg?raw
	var accord_chevron_default = "<svg viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n<path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";

//#endregion
//#region src/components/modal.tsx
	var SLIDE_MS = 500;
	var CLOSE_ICON$1 = "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M1 1 13 13M13 1 1 13\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" /></svg>";
	var singleOpenSizeGuide = () => {
		document.addEventListener("click", (e) => {
			const panel = e.target.closest("#custom_notifications .accord-heading")?.nextElementSibling;
			if (!panel?.classList.contains("revealed")) return;
			document.querySelectorAll("#custom_notifications .accord-panel.revealed").forEach((other) => {
				if (other !== panel) other.classList.replace("revealed", "concealed");
			});
		});
	};
	var closeSizeGuideOnBackdrop = () => {
		document.addEventListener("click", (e) => {
			if (!e.target.matches?.(".section-header.cust_noti")) return;
			document.querySelector("#custom_notifications button.close")?.click();
		});
	};
	var openModal = (name, title, body, loc, desc = title, from = PDP_ANALYTICS) => {
		const close = () => {
			root.classList.remove("crs-drawer--open");
			document.body.classList.remove("crs-drawer-open");
			document.removeEventListener("keydown", onKey);
			setTimeout(() => root.remove(), SLIDE_MS);
		};
		const closeWith = (event, desc) => {
			close();
			pushData(event, desc, "click", loc);
		};
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		const closeBtn = /* @__PURE__ */ jsx("button", {
			class: "crs-drawer__close",
			type: "button",
			"aria-label": "Close",
			onClick: () => closeWith(`exp_pdp_${name}_close`, "Close")
		});
		closeBtn.innerHTML = CLOSE_ICON$1;
		const root = /* @__PURE__ */ jsxs("div", {
			class: "crs-drawer",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			children: [/* @__PURE__ */ jsx("div", {
				class: "crs-drawer__overlay",
				onClick: () => closeWith(`exp_pdp_${name}_backdrop`, "Backdrop")
			}), /* @__PURE__ */ jsxs("div", {
				class: "crs-drawer__dialog",
				children: [/* @__PURE__ */ jsxs("div", {
					class: "crs-drawer__head",
					children: [closeBtn, /* @__PURE__ */ jsx("h3", {
						class: "crs-drawer__title",
						children: title
					})]
				}), /* @__PURE__ */ jsx("div", {
					class: "crs-drawer__body",
					children: body
				})]
			})]
		});
		document.addEventListener("keydown", onKey);
		document.body.appendChild(root);
		document.body.classList.add("crs-drawer-open");
		requestAnimationFrame(() => root.classList.add("crs-drawer--open"));
		root.querySelector(".crs-drawer__close").focus();
		pushData(`${from.prefix}_${name}_open`, desc, "click", from.loc);
	};
	var Accordion = (items, loc, event) => {
		let open = null;
		return /* @__PURE__ */ jsx("div", {
			class: "crs-accord",
			children: items.map((item) => {
				const marker = /* @__PURE__ */ jsx("span", {
					class: "crs-accord__sign",
					"aria-hidden": "true"
				});
				marker.innerHTML = accord_chevron_default;
				if (item.open) return /* @__PURE__ */ jsx("div", {
					class: "crs-accord__item",
					children: /* @__PURE__ */ jsxs("button", {
						class: "crs-accord__head",
						type: "button",
						onClick: item.open,
						children: [/* @__PURE__ */ jsx("span", { children: item.title }), marker]
					})
				});
				const panel = /* @__PURE__ */ jsx("div", {
					class: "crs-accord__panel",
					hidden: true,
					children: item.body
				});
				const head = /* @__PURE__ */ jsxs("button", {
					class: "crs-accord__head",
					type: "button",
					"aria-expanded": "false",
					onClick: () => {
						const wasOpen = head.getAttribute("aria-expanded") === "true";
						if (open && open.head !== head) {
							open.head.setAttribute("aria-expanded", "false");
							open.panel.hidden = true;
						}
						head.setAttribute("aria-expanded", String(!wasOpen));
						panel.hidden = wasOpen;
						open = wasOpen ? null : {
							head,
							panel
						};
						if (!wasOpen) {
							pushData(event, item.title, "click", loc);
							head.scrollIntoView({
								block: "nearest",
								behavior: "smooth"
							});
						}
					},
					children: [/* @__PURE__ */ jsx("span", { children: item.title }), marker]
				});
				return /* @__PURE__ */ jsxs("div", {
					class: "crs-accord__item",
					children: [head, panel]
				});
			})
		});
	};

//#endregion
//#region src/components/details.tsx
	var VISIBLE = 5;
	var Details = (specs, prose) => {
		const visible = specs.slice(0, VISIBLE);
		const rest = specs.slice(VISIBLE);
		const openProse = specs.length ? [] : prose.slice(0, 1);
		const hiddenProse = specs.length ? prose : prose.slice(1);
		const hidden = /* @__PURE__ */ jsxs("div", {
			class: "crs-details__more",
			hidden: true,
			children: [/* @__PURE__ */ jsx("ul", {
				class: "crs-details__list",
				children: rest.map((line) => /* @__PURE__ */ jsx("li", { children: line }))
			}), /* @__PURE__ */ jsx("div", {
				class: "crs-rte",
				children: hiddenProse
			})]
		});
		const showMore = /* @__PURE__ */ jsx("button", {
			class: "crs-details__toggle",
			type: "button",
			onClick: () => {
				const open = !hidden.hidden;
				hidden.hidden = open;
				showMore.textContent = open ? "Show more" : "Show less";
				if (!open) pushData("exp_pdp_details_more", "Show more", "click", "PDP");
			},
			children: "Show more"
		});
		if (!rest.length && !hiddenProse.length) showMore.hidden = true;
		const panel = /* @__PURE__ */ jsxs("div", {
			class: "crs-accord__panel",
			children: [
				/* @__PURE__ */ jsx("ul", {
					class: "crs-details__list",
					children: visible.map((line) => /* @__PURE__ */ jsx("li", { children: line }))
				}),
				/* @__PURE__ */ jsx("div", {
					class: "crs-rte",
					children: openProse
				}),
				hidden,
				showMore
			]
		});
		const head = /* @__PURE__ */ jsxs("button", {
			class: "crs-accord__head",
			type: "button",
			"aria-expanded": "true",
			onClick: () => {
				const open = head.getAttribute("aria-expanded") === "true";
				head.setAttribute("aria-expanded", String(!open));
				panel.hidden = open;
				if (!open) pushData("exp_pdp_accordion_open", "Product details", "click", "PDP");
			},
			children: [/* @__PURE__ */ jsx("span", { children: "Product details" }), /* @__PURE__ */ jsx("span", {
				class: "crs-accord__sign",
				"aria-hidden": "true"
			})]
		});
		return /* @__PURE__ */ jsx("div", {
			class: "crs-details crs-accord",
			children: /* @__PURE__ */ jsxs("div", {
				class: "crs-accord__item",
				children: [head, panel]
			})
		});
	};

//#endregion
//#region src/icons/small-neckless.png?inline
	var small_neckless_default = "data:image/png;base64,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";

//#endregion
//#region src/components/gift.tsx
	var Gift = ({ title, price }, qualifies) => {
		const root = /* @__PURE__ */ jsxs("div", {
			class: "crs-gift",
			children: [
				/* @__PURE__ */ jsx("span", {
					class: "crs-gift__ribbon",
					children: "Gift"
				}),
				/* @__PURE__ */ jsx("img", {
					class: "crs-gift__image",
					src: small_neckless_default,
					alt: title,
					width: "72",
					height: "72",
					loading: "lazy"
				}),
				/* @__PURE__ */ jsxs("div", {
					class: "crs-gift__body",
					children: [
						/* @__PURE__ */ jsx("div", {
							class: "crs-gift__label",
							children: "Your Gift"
						}),
						/* @__PURE__ */ jsx("div", {
							class: "crs-gift__title",
							children: title
						}),
						/* @__PURE__ */ jsxs("div", {
							class: "crs-gift__desc",
							children: [
								"Get this jewelry ",
								/* @__PURE__ */ jsxs("span", { children: ["worth ", price] }),
								" for FREE with this item"
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					class: "crs-gift__price",
					children: [/* @__PURE__ */ jsx("span", {
						class: "crs-gift__free",
						children: "Free"
					}), /* @__PURE__ */ jsx("s", {
						class: "crs-gift__was",
						children: price
					})]
				})
			]
		});
		const sync = () => {
			root.hidden = !qualifies();
		};
		return {
			root,
			sync
		};
	};

//#endregion
//#region src/components/gallery.tsx
	var file = (src) => src.split("/").pop().split("?")[0];
	var CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
  <path d="M13.0605 0.530273L1.06055 12.5303L13.0605 24.5303" stroke="black" stroke-opacity="0.17" stroke-width="1.5"/>
</svg>`;
	var Gallery = (currentSrc, created) => {
		const strip = document.createElement("div");
		strip.className = "crs-thumbs";
		const createdSlot = document.createElement("li");
		createdSlot.className = "crs-created-slot";
		if (created) createdSlot.append(created);
		const hint = /* @__PURE__ */ jsx("span", {
			class: "crs-gallery__hint",
			"aria-hidden": "true",
			children: "Swipe →"
		});
		const list = () => document.querySelector(".product__media-list");
		const slides = () => Array.from(list()?.children ?? []).filter((el) => !el.classList.contains("crs-created-slot"));
		let current = 0;
		const arrow = (dir) => {
			const btn = /* @__PURE__ */ jsx("button", {
				class: `crs-gallery__arrow crs-gallery__arrow--${dir < 0 ? "prev" : "next"}`,
				type: "button",
				"aria-label": dir < 0 ? "Previous image" : "Next image",
				onClick: () => {
					const index = current + dir;
					if (index < 0 || index >= slides().length) return;
					select(index);
					pushData("exp_pdp_gallery_arrow", dir < 0 ? "Prev" : "Next", "click", "PDP");
				}
			});
			btn.innerHTML = CHEVRON;
			return btn;
		};
		const prev = arrow(-1);
		const next = arrow(1);
		const mark = (index) => {
			current = index;
			strip.querySelectorAll(".crs-thumb").forEach((el, i) => el.classList.toggle("is-selected", i === index));
			prev.disabled = index <= 0;
			next.disabled = index >= slides().length - 1;
		};
		const nearest = (ul) => {
			const offsets = slides().map((li) => Math.abs(li.offsetLeft - ul.scrollLeft));
			return offsets.indexOf(Math.min(...offsets));
		};
		let programmatic = false;
		let progTimer = 0;
		let reported = 0;
		const select = (index) => {
			const target = slides()[index];
			if (!target) return;
			slides().forEach((li) => li.classList.remove("is-active"));
			target.classList.add("is-active");
			programmatic = true;
			reported = index;
			clearTimeout(progTimer);
			progTimer = window.setTimeout(() => programmatic = false, 600);
			list()?.scrollTo({
				left: target.offsetLeft,
				behavior: "smooth"
			});
			mark(index);
		};
		const buildThumbs = () => {
			strip.textContent = "";
			slides().forEach((li, i) => {
				const img = li.querySelector("img");
				if (!img) return;
				strip.append(/* @__PURE__ */ jsx("button", {
					class: "crs-thumb",
					type: "button",
					"aria-label": `Show image ${i + 1}`,
					onClick: () => {
						select(i);
						pushData("exp_pdp_gallery_thumb", `Image ${i + 1}`, "click", "PDP");
					},
					children: /* @__PURE__ */ jsx("img", {
						src: img.currentSrc || img.src,
						alt: "",
						loading: "lazy"
					})
				}));
			});
		};
		const hoist = () => {
			const src = currentSrc();
			const ul = list();
			if (!src || !ul) return;
			const target = slides().find((li) => {
				const img = li.querySelector("img");
				return img ? file(img.src).includes(file(src)) : false;
			});
			if (target && target !== ul.firstElementChild) ul.prepend(target);
		};
		const placeCreated = () => {
			const ul = list();
			if (!created || !ul) return;
			if (window.matchMedia("(min-width: 750px)").matches) {
				if (created.parentElement !== createdSlot) createdSlot.append(created);
				const first = slides()[0];
				if (first && first.nextElementSibling !== createdSlot) first.after(createdSlot);
			} else {
				const priceEl = document.querySelector(".crs-pdp .crs-info>[id^=price-]");
				if (!priceEl || priceEl.nextElementSibling === created) return;
				createdSlot.remove();
				priceEl.insertAdjacentElement("afterend", created);
			}
		};
		const watchList = (ul) => {
			let queued = false;
			let settle = 0;
			ul.addEventListener("scroll", () => {
				if (!queued && !programmatic) {
					queued = true;
					requestAnimationFrame(() => {
						queued = false;
						mark(nearest(ul));
					});
				}
				clearTimeout(settle);
				settle = window.setTimeout(() => {
					const index = nearest(ul);
					if (index < 0) return;
					mark(index);
					if (programmatic || index === reported) return;
					reported = index;
					pushData("exp_pdp_gallery_swipe", `Image ${index + 1}`, "other", "PDP");
				}, 160);
			});
			ul.addEventListener("click", (e) => {
				const target = e.target;
				if (!target.closest(".product__modal-opener") || target.closest(".crs-created-slot")) return;
				const item = target.closest(".product__media-item");
				pushData("exp_pdp_image_open", `Image ${(item ? slides().indexOf(item) : -1) + 1}`, "click", "PDP");
			});
		};
		let lastList = null;
		let lastSrc;
		const sync = () => {
			const ul = list();
			if (!ul) return;
			placeCreated();
			const src = currentSrc();
			if (ul === lastList && src === lastSrc) return;
			const rebuilt = ul !== lastList;
			lastList = ul;
			lastSrc = src;
			hoist();
			buildThumbs();
			select(0);
			if (!hint.isConnected) ul.parentElement?.append(hint, prev, next);
			if (!strip.isConnected) ul.parentElement?.after(strip);
			if (rebuilt) watchList(ul);
		};
		window.addEventListener("resize", placeCreated);
		return { sync };
	};

//#endregion
//#region src/icons/step-ring.svg?raw
	var step_ring_default = "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"34\" height=\"34\" fill=\"#F5F5F5\"/>\n<g id=\"PDP update\">\n<path d=\"M-3728 -1988.3C-3728 -1989.4 -3727.1 -1990.3 -3726 -1990.3H3193C3194.1 -1990.3 3195 -1989.4 3195 -1988.3V3551.7C3195 3552.8 3194.1 3553.7 3193 3553.7H-3726C-3727.1 3553.7 -3728 3552.8 -3728 3551.7V-1988.3Z\" fill=\"#F0D6D6\"/>\n<path d=\"M-3726 -1990.3V-1989.3H3193V-1990.3V-1991.3H-3726V-1990.3ZM3195 -1988.3H3194V3551.7H3195H3196V-1988.3H3195ZM3193 3553.7V3552.7H-3726V3553.7V3554.7H3193V3553.7ZM-3728 3551.7H-3727V-1988.3H-3728H-3729V3551.7H-3728ZM-3726 3553.7V3552.7C-3726.55 3552.7 -3727 3552.25 -3727 3551.7H-3728H-3729C-3729 3553.36 -3727.66 3554.7 -3726 3554.7V3553.7ZM3195 3551.7H3194C3194 3552.25 3193.55 3552.7 3193 3552.7V3553.7V3554.7C3194.66 3554.7 3196 3553.36 3196 3551.7H3195ZM3193 -1990.3V-1989.3C3193.55 -1989.3 3194 -1988.85 3194 -1988.3H3195H3196C3196 -1989.96 3194.66 -1991.3 3193 -1991.3V-1990.3ZM-3726 -1990.3V-1991.3C-3727.66 -1991.3 -3729 -1989.96 -3729 -1988.3H-3728H-3727C-3727 -1988.85 -3726.55 -1989.3 -3726 -1989.3V-1990.3Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n<g id=\"alt\" clip-path=\"url(#clip0_3369_82)\">\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-944 -1679.3)\" fill=\"white\"/>\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-944 -1679.3)\" fill=\"white\"/>\n<g id=\"Frame 1321314117\">\n<g id=\"Frame 1321314117_2\">\n<g id=\"Frame 1321314117_3\">\n<g id=\"Frame 1321314106\">\n<g id=\"product-form &#226;&#134;&#146; Form\">\n<g id=\"Frame 1321314117_4\">\n<g id=\"Frame 1321314117_5\">\n<g id=\"Frame 1321314118\">\n<rect x=\"-107\" y=\"-79\" width=\"520\" height=\"568\" rx=\"6\" fill=\"#A72561\" fill-opacity=\"0.05\"/>\n<g id=\"Frame 1321314118_2\">\n<g id=\"Frame 1321314119\">\n<g id=\"Frame 1321314117_6\">\n<g id=\"Frame 1321314117_7\">\n<g id=\"Frame 1321314118_3\">\n<g id=\"diamond-ring.svg\" clip-path=\"url(#clip1_3369_82)\">\n<path id=\"Vector\" d=\"M5.26758 4.88597H6.31501C6.59006 4.88597 6.81302 4.66304 6.81302 4.38792C6.81302 4.1128 6.59006 3.88988 6.31501 3.88988H5.26758C4.99252 3.88988 4.76953 4.1128 4.76953 4.38792C4.76953 4.66304 4.99252 4.88597 5.26758 4.88597Z\" fill=\"black\"/>\n<path id=\"Vector_2\" d=\"M6.77817 6.00046L6.03748 6.74109C5.84298 6.93559 5.84298 7.25097 6.03748 7.44538C6.1347 7.54269 6.2622 7.59131 6.38963 7.59131C6.51707 7.59131 6.64457 7.54269 6.74179 7.44545L7.48246 6.70483C7.677 6.51032 7.677 6.19496 7.48246 6.00052C7.28804 5.80602 6.97266 5.80609 6.77817 6.00046Z\" fill=\"black\"/>\n<path id=\"Vector_3\" d=\"M6.77524 2.774C6.87245 2.87122 6.99995 2.91982 7.12738 2.91982C7.25481 2.91982 7.38231 2.87122 7.47955 2.77393C7.67403 2.57942 7.67403 2.26406 7.47955 2.06963L6.73886 1.329C6.54435 1.13456 6.22899 1.13449 6.03455 1.32906C5.84005 1.52357 5.84005 1.83893 6.03455 2.03337L6.77524 2.774Z\" fill=\"black\"/>\n<path id=\"Vector_4\" d=\"M27.1875 4.38794C27.1875 4.66306 27.4104 4.88598 27.6855 4.88598H28.733C29.0081 4.88598 29.231 4.66306 29.231 4.38794C29.231 4.11282 29.0081 3.88989 28.733 3.88989H27.6855C27.4104 3.88989 27.1875 4.11288 27.1875 4.38794Z\" fill=\"black\"/>\n<path id=\"Vector_5\" d=\"M27.2575 7.44551C27.3548 7.54275 27.4823 7.59131 27.6098 7.59131C27.7372 7.59131 27.8647 7.54275 27.962 7.44551C28.1565 7.25097 28.1565 6.93565 27.962 6.74114L27.2214 6.00044C27.0267 5.80601 26.7115 5.80601 26.517 6.00044C26.3225 6.19501 26.3225 6.51031 26.517 6.70481L27.2575 7.44551Z\" fill=\"black\"/>\n<path id=\"Vector_6\" d=\"M26.873 2.91988C27.0005 2.91988 27.128 2.87127 27.2251 2.77405L27.9659 2.03342C28.1604 1.83892 28.1604 1.52355 27.9659 1.32911C27.7714 1.13467 27.4561 1.13455 27.2616 1.32905L26.5209 2.06967C26.3264 2.26418 26.3264 2.57955 26.5209 2.77398C26.6181 2.8712 26.7455 2.91988 26.873 2.91988Z\" fill=\"black\"/>\n<path id=\"Vector_7\" d=\"M16.9995 11.0825C11.4653 11.0825 6.96289 15.5849 6.96289 21.119C6.96289 24.1403 8.30575 26.9722 10.6472 28.8886C10.8601 29.0627 11.1739 29.0315 11.3481 28.8186C11.5222 28.6058 11.4909 28.292 11.2781 28.1178C9.16881 26.3913 7.95902 23.8403 7.95902 21.1189C7.95902 16.134 12.0145 12.0785 16.9995 12.0785C21.9844 12.0785 26.0399 16.134 26.0399 21.1189C26.0399 26.1039 21.9844 30.1595 16.9995 30.1595C15.555 30.1595 14.1731 29.8275 12.8923 29.1729C12.6475 29.0479 12.3474 29.1448 12.2221 29.3898C12.097 29.6347 12.1941 29.9347 12.439 30.06C13.8615 30.787 15.3958 31.1556 16.9995 31.1556C22.5336 31.1556 27.036 26.6532 27.036 21.119C27.036 15.5849 22.5337 11.0825 16.9995 11.0825Z\" fill=\"black\"/>\n<path id=\"Vector_8\" d=\"M20.703 8.78118L24.4534 4.7254C24.455 4.72361 24.4562 4.72155 24.4578 4.71969C24.6092 4.55115 24.624 4.3099 24.5119 4.12728C24.5108 4.12542 24.5101 4.12343 24.5089 4.12157L23.7686 2.94791C23.6218 2.71508 23.3142 2.64562 23.0817 2.79232C22.849 2.93908 22.7793 3.24667 22.9261 3.47929L23.1846 3.88921H20.3567L19.5911 0.996091H21.3595L21.8513 1.77557C21.998 2.00819 22.3057 2.07779 22.5382 1.93103C22.7708 1.78427 22.8405 1.47674 22.6937 1.24405L22.0554 0.232289C21.9642 0.0876561 21.805 0 21.6342 0H18.9441H15.0564H12.3664C12.1953 0 12.0363 0.0876561 11.9451 0.232289L9.4916 4.12151C9.37294 4.30977 9.39245 4.55786 9.54722 4.7254L13.2975 8.78118C7.99403 10.3758 4.11914 15.303 4.11914 21.119C4.11921 28.2215 9.89763 34 17.0002 34C24.1028 34 29.8813 28.2215 29.8813 21.1189C29.8813 15.303 26.0064 10.3758 20.703 8.78118ZM18.9563 8.38617L20.3142 4.88538H22.9487L19.604 8.50252C19.39 8.45838 19.174 8.41942 18.9563 8.38617ZM16.068 8.27125L14.7547 4.88538H19.2459L17.9325 8.27125C17.3191 8.22725 16.6821 8.22718 16.068 8.27125ZM18.5607 0.996091L19.3263 3.88921H14.6743L15.4398 0.996091H18.5607ZM12.641 0.996091H14.4094L13.6439 3.88921H10.8159L12.641 0.996091ZM11.0517 4.88531H13.6862L15.0441 8.3861C14.8264 8.41942 14.6104 8.45832 14.3964 8.50238L11.0517 4.88531ZM17.0002 33.0039C10.4468 33.0039 5.11523 27.6723 5.11523 21.1189C5.11523 14.8369 10.0145 9.67858 16.1927 9.26194C23.1396 8.79832 28.8851 14.3303 28.8851 21.1189C28.8851 27.6723 23.5536 33.0039 17.0002 33.0039Z\" fill=\"black\"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_3369_82\">\n<rect width=\"1440\" height=\"2419.3\" fill=\"white\" transform=\"translate(-944 -1679.3)\"/>\n</clipPath>\n<clipPath id=\"clip1_3369_82\">\n<rect width=\"34\" height=\"34\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n";

//#endregion
//#region src/icons/step-mail.svg?raw
	var step_mail_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"40\" height=\"40\" fill=\"#F5F5F5\"/>\n<g id=\"PDP update\">\n<path d=\"M-3725 -2049.3C-3725 -2050.4 -3724.1 -2051.3 -3723 -2051.3H3196C3197.1 -2051.3 3198 -2050.4 3198 -2049.3V3490.7C3198 3491.8 3197.1 3492.7 3196 3492.7H-3723C-3724.1 3492.7 -3725 3491.8 -3725 3490.7V-2049.3Z\" fill=\"#F0D6D6\"/>\n<path d=\"M-3723 -2051.3V-2050.3H3196V-2051.3V-2052.3H-3723V-2051.3ZM3198 -2049.3H3197V3490.7H3198H3199V-2049.3H3198ZM3196 3492.7V3491.7H-3723V3492.7V3493.7H3196V3492.7ZM-3725 3490.7H-3724V-2049.3H-3725H-3726V3490.7H-3725ZM-3723 3492.7V3491.7C-3723.55 3491.7 -3724 3491.25 -3724 3490.7H-3725H-3726C-3726 3492.36 -3724.66 3493.7 -3723 3493.7V3492.7ZM3198 3490.7H3197C3197 3491.25 3196.55 3491.7 3196 3491.7V3492.7V3493.7C3197.66 3493.7 3199 3492.36 3199 3490.7H3198ZM3196 -2051.3V-2050.3C3196.55 -2050.3 3197 -2049.85 3197 -2049.3H3198H3199C3199 -2050.96 3197.66 -2052.3 3196 -2052.3V-2051.3ZM-3723 -2051.3V-2052.3C-3724.66 -2052.3 -3726 -2050.96 -3726 -2049.3H-3725H-3724C-3724 -2049.85 -3723.55 -2050.3 -3723 -2050.3V-2051.3Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n<g id=\"alt\" clip-path=\"url(#clip0_3369_82)\">\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1740.3)\" fill=\"white\"/>\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1740.3)\" fill=\"white\"/>\n<g id=\"Frame 1321314117\">\n<g id=\"Frame 1321314117_2\">\n<g id=\"Frame 1321314117_3\">\n<g id=\"Frame 1321314106\">\n<g id=\"product-form &#226;&#134;&#146; Form\">\n<g id=\"Frame 1321314117_4\">\n<g id=\"Frame 1321314117_5\">\n<g id=\"Frame 1321314118\">\n<rect x=\"-104\" y=\"-140\" width=\"520\" height=\"568\" rx=\"6\" fill=\"#A72561\" fill-opacity=\"0.05\"/>\n<g id=\"Frame 1321314118_2\">\n<g id=\"Frame 1321314119\">\n<g id=\"Frame 1321314117_6\">\n<g id=\"Frame 1321314117_7\">\n<g id=\"mail\" clip-path=\"url(#clip1_3369_82)\">\n<g id=\"email.svg fill\" clip-path=\"url(#clip2_3369_82)\">\n<g id=\"email.svg fill_2\" clip-path=\"url(#clip3_3369_82)\">\n<g id=\"email.svg\">\n<g id=\"Clip path group\">\n<path id=\"Vector\" d=\"M32.166 11.8224H8.83466C7.84078 11.8224 7.03223 12.6309 7.03223 13.6247V28.3603C7.03223 29.3542 7.84085 30.1627 8.83466 30.1627H32.166C33.1598 30.1627 33.9683 29.3541 33.9683 28.3603V13.6249C33.9683 12.6309 33.1597 11.8224 32.166 11.8224ZM8.83466 12.9713H32.166C32.4398 12.9713 32.6744 13.1407 32.7714 13.3801L22.6947 21.1815C21.4027 22.1818 19.5977 22.1818 18.3057 21.1815L8.22909 13.3802C8.32611 13.1408 8.56085 12.9713 8.83466 12.9713ZM32.8194 27.1891L26.3778 22.202C26.1269 22.0078 25.7661 22.0537 25.5718 22.3045C25.3776 22.5554 25.4236 22.9162 25.6744 23.1105L32.7714 28.6049C32.6743 28.8443 32.4398 29.0138 32.166 29.0138H8.83466C8.56085 29.0138 8.32611 28.8444 8.22909 28.605L15.3261 23.1105C15.5769 22.9163 15.6229 22.5555 15.4286 22.3046C15.2344 22.0538 14.8736 22.0078 14.6227 22.2021L8.18109 27.1891V14.7961L17.6023 22.09C18.4554 22.7505 19.4778 23.0807 20.5001 23.0807C21.5225 23.0807 22.5449 22.7505 23.398 22.09L32.8194 14.7961V27.1891Z\" fill=\"#191919\"/>\n</g>\n</g>\n<path id=\"Vector_2\" d=\"M4.5 5.5L5.40741 8.09259L8 9L5.40741 9.90741L4.5 12.5L3.59259 9.90741L1 9L3.59259 8.09259L4.5 5.5Z\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_3369_82\">\n<rect width=\"1440\" height=\"2419.3\" fill=\"white\" transform=\"translate(-941 -1740.3)\"/>\n</clipPath>\n<clipPath id=\"clip1_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip2_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip3_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\" transform=\"translate(0 0.5)\"/>\n</clipPath>\n</defs>\n</svg>\n";

//#endregion
//#region src/icons/step-hands.svg?raw
	var step_hands_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"40\" height=\"40\" fill=\"#F5F5F5\"/>\n<g id=\"PDP update\">\n<path d=\"M-3725 -2113.3C-3725 -2114.4 -3724.1 -2115.3 -3723 -2115.3H3196C3197.1 -2115.3 3198 -2114.4 3198 -2113.3V3426.7C3198 3427.8 3197.1 3428.7 3196 3428.7H-3723C-3724.1 3428.7 -3725 3427.8 -3725 3426.7V-2113.3Z\" fill=\"#F0D6D6\"/>\n<path d=\"M-3723 -2115.3V-2114.3H3196V-2115.3V-2116.3H-3723V-2115.3ZM3198 -2113.3H3197V3426.7H3198H3199V-2113.3H3198ZM3196 3428.7V3427.7H-3723V3428.7V3429.7H3196V3428.7ZM-3725 3426.7H-3724V-2113.3H-3725H-3726V3426.7H-3725ZM-3723 3428.7V3427.7C-3723.55 3427.7 -3724 3427.25 -3724 3426.7H-3725H-3726C-3726 3428.36 -3724.66 3429.7 -3723 3429.7V3428.7ZM3198 3426.7H3197C3197 3427.25 3196.55 3427.7 3196 3427.7V3428.7V3429.7C3197.66 3429.7 3199 3428.36 3199 3426.7H3198ZM3196 -2115.3V-2114.3C3196.55 -2114.3 3197 -2113.85 3197 -2113.3H3198H3199C3199 -2114.96 3197.66 -2116.3 3196 -2116.3V-2115.3ZM-3723 -2115.3V-2116.3C-3724.66 -2116.3 -3726 -2114.96 -3726 -2113.3H-3725H-3724C-3724 -2113.85 -3723.55 -2114.3 -3723 -2114.3V-2115.3Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n<g id=\"alt\" clip-path=\"url(#clip0_3369_82)\">\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1804.3)\" fill=\"white\"/>\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1804.3)\" fill=\"white\"/>\n<g id=\"Frame 1321314117\">\n<g id=\"Frame 1321314117_2\">\n<g id=\"Frame 1321314117_3\">\n<g id=\"Frame 1321314106\">\n<g id=\"product-form &#226;&#134;&#146; Form\">\n<g id=\"Frame 1321314117_4\">\n<g id=\"Frame 1321314117_5\">\n<g id=\"Frame 1321314118\">\n<rect x=\"-104\" y=\"-204\" width=\"520\" height=\"568\" rx=\"6\" fill=\"#A72561\" fill-opacity=\"0.05\"/>\n<g id=\"Frame 1321314118_2\">\n<g id=\"Frame 1321314119\">\n<g id=\"Frame 1321314117_6\">\n<g id=\"Frame 1321314117_7\">\n<g id=\"diamond-on-hand\" clip-path=\"url(#clip1_3369_82)\">\n<g id=\"diamond_on_hand.svg fill\" clip-path=\"url(#clip2_3369_82)\">\n<g id=\"diamond_on_hand.svg\" clip-path=\"url(#clip3_3369_82)\">\n<g id=\"Clip path group\">\n<mask id=\"mask0_3369_82\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"40\">\n<g id=\"a\">\n<path id=\"Vector\" d=\"M39.4331 0.425781H0.28418V39.5747H39.4331V0.425781Z\" fill=\"white\"/>\n</g>\n</mask>\n<g mask=\"url(#mask0_3369_82)\">\n<g id=\"Group\">\n<path id=\"Vector_2\" d=\"M30.4344 6.11736L27.028 1.04803C26.7661 0.658378 26.3297 0.425781 25.8603 0.425781H13.8558C13.3865 0.425781 12.95 0.658378 12.6882 1.04795L11.6576 2.58162C11.4809 2.84457 11.5508 3.20088 11.8136 3.37744C12.0767 3.55421 12.433 3.48418 12.6095 3.22138L13.5072 1.88544L18.3817 6.34537H10.5104L11.2157 5.29571C11.3923 5.03283 11.3223 4.67652 11.0594 4.49989C10.7967 4.32334 10.4403 4.39322 10.2636 4.6561L9.28188 6.11721C8.94843 6.61321 8.96545 7.2678 9.32401 7.74577L18.7325 20.2936C19.0008 20.6514 19.411 20.8565 19.8581 20.8565C20.3053 20.8565 20.7155 20.6513 20.9837 20.2936L30.3921 7.74592C30.7507 7.26788 30.7677 6.61337 30.4344 6.11736ZM29.1487 7.49237L23.0925 15.5693L25.0244 7.49237H29.1487ZM24.8517 1.57278L19.8581 6.1416L14.8644 1.57278H24.8517ZM26.2089 1.88544L29.2058 6.34537H21.3344L26.2089 1.88544ZM14.6918 7.49237L16.6237 15.5694L10.5675 7.49237H14.6918ZM20.066 19.6057C19.9981 19.6962 19.9066 19.7097 19.858 19.7097C19.8095 19.7097 19.718 19.6962 19.6501 19.6057L18.3305 17.8458C18.3305 17.8014 18.326 17.7567 18.3152 17.7117L15.871 7.49237H23.8452L21.3946 17.7381C21.3852 17.7771 21.3802 17.816 21.379 17.8545L20.066 19.6057Z\" fill=\"#191919\"/>\n<path id=\"Vector_3\" d=\"M16.9412 27.339L10.9873 23.6253C10.9418 23.5968 10.8952 23.5707 10.8485 23.5457L7.6116 14.6238C7.16047 13.3805 5.82407 12.7341 4.56965 13.1525C3.31032 13.5723 2.6214 14.9404 3.03391 16.2021C3.04721 16.2427 3.06481 16.2805 3.08567 16.3157C2.78885 16.4848 2.5389 16.7281 2.35784 17.0303C2.07424 17.5038 1.99724 18.0581 2.14107 18.591L3.34098 23.0364C3.42356 23.3422 3.73858 23.523 4.04405 23.4407C4.34982 23.358 4.53081 23.0433 4.4483 22.7376L3.24839 18.2921C3.18638 18.0625 3.21956 17.8236 3.34175 17.6196C3.46401 17.4156 3.65891 17.2736 3.89067 17.2198C4.31831 17.1205 4.75384 17.3573 4.90325 17.7702L7.43949 24.7774C7.27264 25.187 7.22119 25.6359 7.29466 26.0851C7.40209 26.7413 7.76192 27.3118 8.30794 27.6915L12.5737 30.6573C12.8335 30.838 13.191 30.7738 13.3718 30.5138C13.5526 30.2539 13.4884 29.8964 13.2283 29.7156L8.96262 26.7498C8.67377 26.5489 8.48334 26.247 8.42653 25.8999C8.36972 25.5527 8.4539 25.2058 8.66381 24.9235C9.061 24.3886 9.81496 24.2459 10.3802 24.5984L16.3339 28.3122C16.8019 28.6041 17.0812 29.1075 17.0812 29.659V38.1367C17.0812 38.2972 16.9507 38.4276 16.7903 38.4276H11.9507C11.7903 38.4276 11.6599 38.2972 11.6599 38.1367V34.8721C11.6599 34.0801 11.3169 33.3278 10.719 32.8083L6.44327 29.0931C6.20432 28.8855 6.03442 28.6143 5.95192 28.3087L5.08967 25.1139C5.00701 24.8081 4.69198 24.627 4.38659 24.7097C4.08082 24.7922 3.89984 25.107 3.98235 25.4127L4.8446 28.6076C4.98675 29.134 5.27951 29.6013 5.69104 29.9589L9.9667 33.6741C10.3139 33.9756 10.5129 34.4123 10.5129 34.8721V38.1367C10.5129 38.9295 11.1579 39.5745 11.9507 39.5745H16.7903C17.583 39.5745 18.2281 38.9295 18.2281 38.1367V29.6589C18.2282 28.7089 17.747 27.8417 16.9412 27.339ZM8.27567 23.7176L5.98174 17.3799C5.69555 16.5893 4.95838 16.0779 4.15125 16.0519C4.15461 15.9839 4.14643 15.9142 4.12402 15.8456C3.90687 15.1815 4.26945 14.4615 4.93223 14.2406C5.59278 14.0204 6.29592 14.3607 6.53333 15.015L9.5273 23.2674C9.08075 23.2999 8.64543 23.4534 8.27567 23.7176Z\" fill=\"#191919\"/>\n<path id=\"Vector_4\" d=\"M36.6443 16.3222L36.6836 16.2017C37.0962 14.94 36.4072 13.572 35.1479 13.1521C33.8931 12.7341 32.557 13.3801 32.1059 14.6235L28.8692 23.5453C28.8224 23.5703 28.7759 23.5965 28.7304 23.6249L22.7766 27.3386C21.9706 27.8413 21.4894 28.7085 21.4894 29.6585V31.7218C21.4894 32.0386 21.7461 32.2953 22.0629 32.2953C22.3796 32.2953 22.6363 32.0386 22.6363 31.7218V29.6585C22.6363 29.107 22.9156 28.6036 23.3836 28.3118L29.3373 24.598C29.9024 24.2455 30.6564 24.3881 31.0537 24.9229C31.2636 25.2054 31.3478 25.5522 31.291 25.8994C31.2342 26.2466 31.0438 26.5485 30.7549 26.7492L26.4892 29.7151C26.2291 29.8959 26.1649 30.2533 26.3457 30.5133C26.5264 30.7735 26.8839 30.8376 27.1438 30.6568L31.4096 27.6909C31.9556 27.3113 32.3154 26.7409 32.4229 26.0845C32.4963 25.6355 32.4447 25.1868 32.2779 24.7771L34.8143 17.7697C34.9636 17.3569 35.3991 17.1199 35.8268 17.2193C36.0585 17.273 36.2535 17.4151 36.3757 17.6192C36.4979 17.8232 36.531 18.062 36.4691 18.2917L33.7654 28.3081C33.683 28.6138 33.513 28.885 33.2741 29.0926L28.9984 32.8078C28.4005 33.3273 28.0575 34.0796 28.0575 34.8717V38.1364C28.0575 38.2968 27.927 38.4273 27.7666 38.4273H22.927C22.7666 38.4273 22.6362 38.2968 22.6362 38.1364V34.2211C22.6362 33.9044 22.3795 33.6476 22.0627 33.6476C21.7459 33.6476 21.4893 33.9044 21.4893 34.2211V38.1364C21.4893 38.9291 22.1342 39.5742 22.927 39.5742H27.7666C28.5594 39.5742 29.2044 38.9291 29.2044 38.1364V34.8719C29.2044 34.412 29.4036 33.9753 29.7506 33.6737L34.0263 29.9586C34.4379 29.601 34.7306 29.1337 34.8727 28.6071L37.5764 18.5907C37.7202 18.0577 37.6433 17.5035 37.3596 17.03C37.1812 16.7319 36.9357 16.4911 36.6443 16.3222ZM33.7359 17.3795L31.442 23.7171C31.0722 23.453 30.6369 23.2994 30.1904 23.2669L33.1842 15.0146C33.4216 14.3602 34.1252 14.0199 34.7852 14.2402C35.4481 14.4611 35.8106 15.1812 35.5935 15.8452L35.5256 16.0529C34.7348 16.0946 34.0172 16.6024 33.7359 17.3795Z\" fill=\"#191919\"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_3369_82\">\n<rect width=\"1440\" height=\"2419.3\" fill=\"white\" transform=\"translate(-941 -1804.3)\"/>\n</clipPath>\n<clipPath id=\"clip1_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip2_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip3_3369_82\">\n<rect width=\"40\" height=\"39.1489\" fill=\"white\" transform=\"translate(0 0.425781)\"/>\n</clipPath>\n</defs>\n</svg>\n";

//#endregion
//#region src/icons/step-box.svg?raw
	var step_box_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"40\" height=\"40\" fill=\"#F5F5F5\"/>\n<g id=\"PDP update\">\n<path d=\"M-3725 -2177.3C-3725 -2178.4 -3724.1 -2179.3 -3723 -2179.3H3196C3197.1 -2179.3 3198 -2178.4 3198 -2177.3V3362.7C3198 3363.8 3197.1 3364.7 3196 3364.7H-3723C-3724.1 3364.7 -3725 3363.8 -3725 3362.7V-2177.3Z\" fill=\"#F0D6D6\"/>\n<path d=\"M-3723 -2179.3V-2178.3H3196V-2179.3V-2180.3H-3723V-2179.3ZM3198 -2177.3H3197V3362.7H3198H3199V-2177.3H3198ZM3196 3364.7V3363.7H-3723V3364.7V3365.7H3196V3364.7ZM-3725 3362.7H-3724V-2177.3H-3725H-3726V3362.7H-3725ZM-3723 3364.7V3363.7C-3723.55 3363.7 -3724 3363.25 -3724 3362.7H-3725H-3726C-3726 3364.36 -3724.66 3365.7 -3723 3365.7V3364.7ZM3198 3362.7H3197C3197 3363.25 3196.55 3363.7 3196 3363.7V3364.7V3365.7C3197.66 3365.7 3199 3364.36 3199 3362.7H3198ZM3196 -2179.3V-2178.3C3196.55 -2178.3 3197 -2177.85 3197 -2177.3H3198H3199C3199 -2178.96 3197.66 -2180.3 3196 -2180.3V-2179.3ZM-3723 -2179.3V-2180.3C-3724.66 -2180.3 -3726 -2178.96 -3726 -2177.3H-3725H-3724C-3724 -2177.85 -3723.55 -2178.3 -3723 -2178.3V-2179.3Z\" fill=\"black\" fill-opacity=\"0.1\"/>\n<g id=\"alt\" clip-path=\"url(#clip0_3369_82)\">\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1868.3)\" fill=\"white\"/>\n<rect width=\"1440\" height=\"2419.3\" transform=\"translate(-941 -1868.3)\" fill=\"white\"/>\n<g id=\"Frame 1321314117\">\n<g id=\"Frame 1321314117_2\">\n<g id=\"Frame 1321314117_3\">\n<g id=\"Frame 1321314106\">\n<g id=\"product-form &#226;&#134;&#146; Form\">\n<g id=\"Frame 1321314117_4\">\n<g id=\"Frame 1321314117_5\">\n<g id=\"Frame 1321314118\">\n<rect x=\"-104\" y=\"-268\" width=\"520\" height=\"568\" rx=\"6\" fill=\"#A72561\" fill-opacity=\"0.05\"/>\n<g id=\"Frame 1321314118_2\">\n<g id=\"Frame 1321314119\">\n<g id=\"Frame 1321314117_6\">\n<g id=\"Frame 1321314117_7\">\n<g id=\"diamond-ring-on-box\" clip-path=\"url(#clip1_3369_82)\">\n<g id=\"diamond_ring_on_box.svg fill\" clip-path=\"url(#clip2_3369_82)\">\n<g id=\"diamond_ring_on_box.svg\" clip-path=\"url(#clip3_3369_82)\">\n<path id=\"Vector\" d=\"M36.2313 28.8647C36.2299 28.7781 36.2071 28.6927 36.1693 28.615L31.5006 19.3471L35.4283 7.30157C35.4476 7.24304 35.4559 7.18125 35.4573 7.11953V2.7393C35.4572 1.22883 34.2283 0 32.7179 0H7.28262C5.77222 0 4.54332 1.22883 4.54332 2.7393V7.11961C4.54456 7.18125 4.55285 7.2432 4.57222 7.30164L8.49988 19.3471L3.83129 28.615C3.79082 28.697 3.76925 28.7876 3.76855 28.879V37.2607C3.76855 38.7711 4.99738 40 6.50785 40H26.578C26.9023 40 27.1651 39.7372 27.1651 39.4129C27.1651 39.0886 26.9023 38.8257 26.578 38.8257H6.50785C5.6448 38.8257 4.94269 38.1237 4.94269 37.2606V29.466H10.5038C10.828 29.466 11.0909 29.2032 11.0909 28.8789C11.0909 28.5547 10.828 28.2918 10.5038 28.2918H5.30871L9.49464 19.9821H13.2153C12.1233 21.2517 11.4106 22.7986 11.1586 24.4574H10.3625C10.0382 24.4574 9.77534 24.7203 9.77534 25.0445C9.77534 25.3689 10.0382 25.6317 10.3625 25.6317H29.6381C29.9624 25.6317 30.2252 25.3688 30.2252 25.0445C30.2252 24.7203 29.9624 24.4574 29.6381 24.4574H28.8419C28.5899 22.7986 27.8773 21.2517 26.7852 19.9821H30.5059L34.6919 28.2918H12.8521C12.5279 28.2918 12.2651 28.5547 12.2651 28.8789C12.2651 29.2031 12.5279 29.466 12.8521 29.466H35.0579V37.2606C35.0579 38.1237 34.3558 38.8257 33.4927 38.8257H28.9264C28.602 38.8257 28.3393 39.0887 28.3393 39.4129C28.3393 39.7371 28.602 40 28.9264 40H33.4927C35.0033 40 36.232 38.7711 36.232 37.2607C36.232 37.2607 36.2313 28.8696 36.2313 28.8647ZM26.578 6.5325H5.71746V2.7393C5.71746 1.87633 6.41956 1.17414 7.28262 1.17414H32.7179C33.5808 1.17414 34.2829 1.87625 34.2829 2.7393V6.5325H28.9262C28.6019 6.5325 28.3391 6.79539 28.3391 7.11961C28.3391 7.44383 28.6019 7.70672 28.9262 7.70672H34.0611L30.4412 18.8081H25.5655C24.9132 18.2889 24.1971 17.8671 23.4376 17.551L25.6304 14.1835C25.7507 13.9985 25.7573 13.7617 25.6473 13.5703L23.9401 10.6019C23.8353 10.4197 23.6412 10.3075 23.4312 10.3075H16.5689C16.3589 10.3075 16.1647 10.4197 16.06 10.6019L14.3531 13.5703C14.2429 13.7619 14.2497 13.999 14.3705 14.184L16.5673 17.549C15.8061 17.8654 15.0884 18.2878 14.4349 18.8081H9.55916L5.93933 7.70664H26.578C26.9023 7.70664 27.1651 7.44375 27.1651 7.11953C27.1651 6.79531 26.9022 6.5325 26.578 6.5325ZM17.7162 17.1611L15.9464 14.4502H24.0557L22.2895 17.1626C21.5493 16.9671 20.7807 16.8659 20.0002 16.8659C19.2215 16.8659 18.4547 16.9665 17.7162 17.1611ZM15.8768 13.2759L16.9087 11.4817H23.0917L24.1236 13.2759H15.8768ZM15.0886 24.4575C15.6872 22.283 17.6909 20.715 20.0003 20.715C22.3097 20.715 24.3135 22.283 24.9119 24.4575H15.0886ZM26.1218 24.4575C25.4966 21.621 22.9507 19.5409 20.0003 19.5409C17.0497 19.5409 14.504 21.621 13.8788 24.4575H12.3478C12.6419 22.7829 13.4797 21.2489 14.7472 20.085C16.1834 18.7663 18.049 18.0401 20.0003 18.0401C21.9515 18.0401 23.8172 18.7663 25.2534 20.085C26.521 21.2489 27.3587 22.7829 27.6527 24.4575H26.1218Z\" fill=\"#191919\"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_3369_82\">\n<rect width=\"1440\" height=\"2419.3\" fill=\"white\" transform=\"translate(-941 -1868.3)\"/>\n</clipPath>\n<clipPath id=\"clip1_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip2_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n<clipPath id=\"clip3_3369_82\">\n<rect width=\"40\" height=\"40\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n";

//#endregion
//#region src/icons/step-arrow.svg?raw
	var step_arrow_default = "<!-- Exported from Figma node 3516:3962. The export wraps this path in the entire\n     artboard — an opaque #F5F5F5 rect, the page background, the buy-box panel — which\n     would paint a block over the steps, so only the path is kept, in the export's own\n     7x16 viewBox. The arrowhead sits at y≈31–35 and is clipped away by that viewBox,\n     exactly as the design clips it: the connector is the tapering tail alone. -->\n<svg width=\"7\" height=\"16\" viewBox=\"0 0 7 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M2.23228 35.2291C2.35881 35.435 2.62826 35.4993 2.8341 35.3727L6.18853 33.3107C6.39438 33.1842 6.45868 32.9148 6.33214 32.7089C6.20561 32.5031 5.93616 32.4388 5.73032 32.5653L2.7486 34.3982L0.915745 31.4164C0.789213 31.2106 0.519768 31.1463 0.313923 31.2728C0.108079 31.3994 0.0437834 31.6689 0.170316 31.8747L2.23228 35.2291ZM2.21297 0.680771C1.63102 1.85536 1.35911 3.45963 1.26726 5.20233C1.17489 6.95508 1.2629 8.89359 1.43082 10.765C1.76643 14.5056 2.42693 18.0304 2.63027 19.3182L3.49456 19.1817C3.28645 17.8637 2.63446 14.3886 2.30232 10.6868C2.13636 8.83715 2.05169 6.94394 2.14105 5.24838C2.23094 3.54276 2.49517 2.08214 2.99702 1.06922L2.21297 0.680771ZM2.63027 19.3182C3.93012 27.5507 2.59074 33.1748 2.17945 34.8984L3.03055 35.1016C3.45443 33.3252 4.8197 27.5743 3.49456 19.1817L2.63027 19.3182Z\" fill=\"#A72561\" fill-opacity=\"0.3\"/>\n</svg>\n";

//#endregion
//#region src/components/howToOrder.tsx
	var Icon$1 = (svg) => {
		const el = document.createElement("span");
		el.className = "crs-step__icon";
		el.setAttribute("aria-hidden", "true");
		el.innerHTML = inlineSvg(svg);
		return el;
	};
	var Step = (n, icon, body) => /* @__PURE__ */ jsxs("li", {
		class: "crs-step",
		children: [
			/* @__PURE__ */ jsx("span", {
				class: "crs-step__num",
				"aria-hidden": "true",
				children: String(n)
			}),
			Icon$1(icon),
			/* @__PURE__ */ jsx("span", {
				class: "crs-step__text",
				children: body
			})
		]
	});
	var Arrow = () => {
		const el = document.createElement("span");
		el.className = "crs-step__arrow";
		el.setAttribute("aria-hidden", "true");
		el.innerHTML = inlineSvg(step_arrow_default);
		return el;
	};
	var HowToOrder = (onMailing) => {
		const mailingLink = /* @__PURE__ */ jsx("button", {
			class: "crs-inline-link",
			type: "button",
			onClick: onMailing,
			children: "mailing instructions"
		});
		const step2 = document.createDocumentFragment();
		step2.append("Mail your inclusions according to ", mailingLink);
		const steps = [
			Step(1, step_ring_default, document.createTextNode("Pick your jewelry & place an order")),
			Step(2, step_mail_default, step2),
			Step(3, step_hands_default, document.createTextNode("We handcraft your jewelry with your inclusions")),
			Step(4, step_box_default, document.createTextNode("Receive your jewelry that lasts a lifetime"))
		];
		steps.slice(1).forEach((li) => li.prepend(Arrow()));
		const list = /* @__PURE__ */ jsx("ol", { class: "crs-steps" });
		list.append(...steps);
		return /* @__PURE__ */ jsxs("section", {
			class: "crs-howto",
			children: [
				/* @__PURE__ */ jsx("h2", {
					class: "crs-howto__title",
					children: "How to order your piece with inclusion"
				}),
				list,
				/* @__PURE__ */ jsxs("div", {
					class: "crs-howto__made",
					children: [
						/* @__PURE__ */ jsx("h2", {
							class: "crs-howto__title crs-howto__title--made",
							children: "How your piece is made"
						}),
						/* @__PURE__ */ jsx("p", { children: "Your keepsake is crafted by one artisan from start to finish, and tracked every step of the way. Any unused inclusions are returned to you with your finished piece — and every item passes a 4-stage quality inspection." }),
						/* @__PURE__ */ jsx("p", { children: "Turnaround time is approximately 6–8 weeks after we receive your inclusions — a memory made by hand, to order." })
					]
				})
			]
		});
	};

//#endregion
//#region src/components/content.tsx
	var MAILING_LOC = "Mailing Instructions Popup";
	var FAQ_LOC = "FAQ Popup";
	var MAILING_ACCORD = "exp_pdp_mailing_accordion_open";
	var FAQ_ACCORD = "exp_pdp_faq_accordion_open";
	var remote = (path, parse) => {
		const host = /* @__PURE__ */ jsx("div", {
			class: "crs-remote",
			children: "Loading…"
		});
		const url = (window.Shopify?.routes?.root ?? "/").replace(/\/$/, "") + path;
		const load = () => fetch(url, { cache: "no-store" }).then((r) => {
			if (!r.ok) throw new Error(`${url} → HTTP ${r.status}`);
			return r.text();
		}).then((html) => {
			const rte = new DOMParser().parseFromString(html, "text/html").querySelector(".rte");
			if (!rte) throw new Error(`${url} → no .rte (${html.length} bytes)`);
			return parse(rte);
		});
		load().catch((first) => {
			log(`PDP redesign: ${first.message} — retrying`, "warn");
			return load();
		}).then((content) => {
			host.textContent = "";
			host.append(content);
		}).catch((e) => {
			log(`PDP redesign: ${e.message}`, "error");
			host.textContent = "";
			host.append(/* @__PURE__ */ jsxs("p", { children: [
				"This content couldn't be loaded. ",
				/* @__PURE__ */ jsx("a", {
					href: url,
					children: "Open it in a new page"
				}),
				"."
			] }));
		});
		return host;
	};
	var clean = (el) => {
		el.querySelectorAll("meta, style, script").forEach((n) => n.remove());
		return el;
	};
	var isBlank = (el) => !el.textContent.replace(/\s| /g, "");
	var MAILING_SECTIONS = {
		Cremations: "Cremations",
		"Clothing/Fabric": "Clothing/Fabric",
		"Flowers/Petals": "Flowers/Petals",
		Hair: "Hair/Fur",
		"Breast Milk": "Breast Milk"
	};
	var parseMailing = (rte) => {
		const items = [];
		const footer = document.createElement("div");
		footer.className = "crs-rte";
		let current = null;
		Array.from(rte.children).forEach((child) => {
			const text = child.textContent.trim().replace(/:$/, "");
			const label = MAILING_SECTIONS[text];
			if (label) {
				current = document.createElement("div");
				current.className = "crs-rte";
				items.push({
					title: label,
					body: current
				});
				return;
			}
			if (isBlank(child)) return;
			if (/^Other Inclusions:|^Mailing more than one inclusion:/i.test(text)) {
				current = null;
				footer.append(clean(child.cloneNode(true)));
				return;
			}
			current?.append(clean(child.cloneNode(true)));
		});
		const frag = document.createDocumentFragment();
		frag.append(/* @__PURE__ */ jsxs("div", {
			class: "crs-drawer__intro",
			children: [/* @__PURE__ */ jsx("p", { children: "Send us a tiny amount of your keepsake, and we'll create a memorial jewelry piece to last a lifetime." }), /* @__PURE__ */ jsx("p", { children: "Learn more in the tabs below." })]
		}), Accordion(items, MAILING_LOC, MAILING_ACCORD), footer);
		return frag;
	};
	var mailingInstructions = () => remote("/pages/sending-your-petals-cremations-breastmilk", parseMailing);
	var parseFaq = (rte) => {
		const intro = document.createElement("div");
		intro.className = "crs-rte";
		const items = [];
		let current = null;
		Array.from(rte.children).forEach((child) => {
			if (child.tagName === "H3") {
				current = document.createElement("div");
				current.className = "crs-rte";
				items.push({
					title: child.textContent.trim(),
					body: current
				});
				return;
			}
			if (child.tagName === "H2") return;
			if (isBlank(child)) return;
			(current ?? intro).append(clean(child.cloneNode(true)));
		});
		const waterproof = items.find((i) => /waterproof/i.test(i.title));
		const cost = items.find((i) => /how much does/i.test(i.title));
		if (waterproof && cost) {
			const tmp = waterproof.body;
			waterproof.body = cost.body;
			cost.body = tmp;
		}
		const frag = document.createDocumentFragment();
		frag.append(intro, Accordion(items, FAQ_LOC, FAQ_ACCORD));
		return frag;
	};
	var faqContent = () => remote("/pages/faq", parseFaq);
	var openMailingModal = () => openModal("mailing", "How To Send Your Inclusions", mailingInstructions(), MAILING_LOC, "Mailing Instructions");
	var openFaqModal = () => openModal("faq", "How to Order Memorial Jewelry & FAQs", faqContent(), FAQ_LOC);
	var bottomAccordions = (native) => {
		const items = [
			{
				title: "From Order to Keepsake",
				body: native.find((n) => /from order to keepsake/i.test(n.title))?.body ?? document.createTextNode("")
			},
			{
				title: "How to send your inclusions",
				open: openMailingModal
			},
			{
				title: "How to Order Memorial Jewelry & FAQs",
				open: openFaqModal
			}
		];
		const el = document.createElement("div");
		el.className = "crs-bottom";
		el.append(Accordion(items, "PDP", "exp_pdp_accordion_open"));
		return el;
	};

//#endregion
//#region node_modules/.pnpm/swiper@11.2.10/node_modules/swiper/shared/ssr-window.esm.mjs
	function isObject$1(obj) {
		return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
	}
	function extend$1(target, src) {
		if (target === void 0) target = {};
		if (src === void 0) src = {};
		const noExtend = [
			"__proto__",
			"constructor",
			"prototype"
		];
		Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
			if (typeof target[key] === "undefined") target[key] = src[key];
			else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) extend$1(target[key], src[key]);
		});
	}
	var ssrDocument = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: {
			blur() {},
			nodeName: ""
		},
		querySelector() {
			return null;
		},
		querySelectorAll() {
			return [];
		},
		getElementById() {
			return null;
		},
		createEvent() {
			return { initEvent() {} };
		},
		createElement() {
			return {
				children: [],
				childNodes: [],
				style: {},
				setAttribute() {},
				getElementsByTagName() {
					return [];
				}
			};
		},
		createElementNS() {
			return {};
		},
		importNode() {
			return null;
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		}
	};
	function getDocument() {
		const doc = typeof document !== "undefined" ? document : {};
		extend$1(doc, ssrDocument);
		return doc;
	}
	var ssrWindow = {
		document: ssrDocument,
		navigator: { userAgent: "" },
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState() {},
			pushState() {},
			go() {},
			back() {}
		},
		CustomEvent: function CustomEvent() {
			return this;
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle() {
			return { getPropertyValue() {
				return "";
			} };
		},
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia() {
			return {};
		},
		requestAnimationFrame(callback) {
			if (typeof setTimeout === "undefined") {
				callback();
				return null;
			}
			return setTimeout(callback, 0);
		},
		cancelAnimationFrame(id) {
			if (typeof setTimeout === "undefined") return;
			clearTimeout(id);
		}
	};
	function getWindow() {
		const win = typeof window !== "undefined" ? window : {};
		extend$1(win, ssrWindow);
		return win;
	}

//#endregion
//#region node_modules/.pnpm/swiper@11.2.10/node_modules/swiper/shared/utils.mjs
	function classesToTokens(classes) {
		if (classes === void 0) classes = "";
		return classes.trim().split(" ").filter((c) => !!c.trim());
	}
	function deleteProps(obj) {
		const object = obj;
		Object.keys(object).forEach((key) => {
			try {
				object[key] = null;
			} catch (e) {}
			try {
				delete object[key];
			} catch (e) {}
		});
	}
	function nextTick(callback, delay) {
		if (delay === void 0) delay = 0;
		return setTimeout(callback, delay);
	}
	function now() {
		return Date.now();
	}
	function getComputedStyle$1(el) {
		const window = getWindow();
		let style;
		if (window.getComputedStyle) style = window.getComputedStyle(el, null);
		if (!style && el.currentStyle) style = el.currentStyle;
		if (!style) style = el.style;
		return style;
	}
	function getTranslate(el, axis) {
		if (axis === void 0) axis = "x";
		const window = getWindow();
		let matrix;
		let curTransform;
		let transformMatrix;
		const curStyle = getComputedStyle$1(el);
		if (window.WebKitCSSMatrix) {
			curTransform = curStyle.transform || curStyle.webkitTransform;
			if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
			transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
		} else {
			transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
			matrix = transformMatrix.toString().split(",");
		}
		if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
		else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
		else curTransform = parseFloat(matrix[4]);
		if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
		else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
		else curTransform = parseFloat(matrix[5]);
		return curTransform || 0;
	}
	function isObject(o) {
		return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
	}
	function isNode(node) {
		if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
		return node && (node.nodeType === 1 || node.nodeType === 11);
	}
	function extend() {
		const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
		const noExtend = [
			"__proto__",
			"constructor",
			"prototype"
		];
		for (let i = 1; i < arguments.length; i += 1) {
			const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
			if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
				const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
				for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
					const nextKey = keysArray[nextIndex];
					const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
					if (desc !== void 0 && desc.enumerable) if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
					else extend(to[nextKey], nextSource[nextKey]);
					else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
						to[nextKey] = {};
						if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
						else extend(to[nextKey], nextSource[nextKey]);
					} else to[nextKey] = nextSource[nextKey];
				}
			}
		}
		return to;
	}
	function setCSSProperty(el, varName, varValue) {
		el.style.setProperty(varName, varValue);
	}
	function animateCSSModeScroll(_ref) {
		let { swiper, targetPosition, side } = _ref;
		const window = getWindow();
		const startPosition = -swiper.translate;
		let startTime = null;
		let time;
		const duration = swiper.params.speed;
		swiper.wrapperEl.style.scrollSnapType = "none";
		window.cancelAnimationFrame(swiper.cssModeFrameID);
		const dir = targetPosition > startPosition ? "next" : "prev";
		const isOutOfBound = (current, target) => {
			return dir === "next" && current >= target || dir === "prev" && current <= target;
		};
		const animate = () => {
			time = (/* @__PURE__ */ new Date()).getTime();
			if (startTime === null) startTime = time;
			const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
			const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
			let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
			if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
			swiper.wrapperEl.scrollTo({ [side]: currentPosition });
			if (isOutOfBound(currentPosition, targetPosition)) {
				swiper.wrapperEl.style.overflow = "hidden";
				swiper.wrapperEl.style.scrollSnapType = "";
				setTimeout(() => {
					swiper.wrapperEl.style.overflow = "";
					swiper.wrapperEl.scrollTo({ [side]: currentPosition });
				});
				window.cancelAnimationFrame(swiper.cssModeFrameID);
				return;
			}
			swiper.cssModeFrameID = window.requestAnimationFrame(animate);
		};
		animate();
	}
	function elementChildren(element, selector) {
		if (selector === void 0) selector = "";
		const window = getWindow();
		const children = [...element.children];
		if (window.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
		if (!selector) return children;
		return children.filter((el) => el.matches(selector));
	}
	function elementIsChildOfSlot(el, slot) {
		const elementsQueue = [slot];
		while (elementsQueue.length > 0) {
			const elementToCheck = elementsQueue.shift();
			if (el === elementToCheck) return true;
			elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
		}
	}
	function elementIsChildOf(el, parent) {
		const window = getWindow();
		let isChild = parent.contains(el);
		if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
			isChild = [...parent.assignedElements()].includes(el);
			if (!isChild) isChild = elementIsChildOfSlot(el, parent);
		}
		return isChild;
	}
	function showWarning(text) {
		try {
			console.warn(text);
			return;
		} catch (err) {}
	}
	function createElement(tag, classes) {
		if (classes === void 0) classes = [];
		const el = document.createElement(tag);
		el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
		return el;
	}
	function elementPrevAll(el, selector) {
		const prevEls = [];
		while (el.previousElementSibling) {
			const prev = el.previousElementSibling;
			if (selector) {
				if (prev.matches(selector)) prevEls.push(prev);
			} else prevEls.push(prev);
			el = prev;
		}
		return prevEls;
	}
	function elementNextAll(el, selector) {
		const nextEls = [];
		while (el.nextElementSibling) {
			const next = el.nextElementSibling;
			if (selector) {
				if (next.matches(selector)) nextEls.push(next);
			} else nextEls.push(next);
			el = next;
		}
		return nextEls;
	}
	function elementStyle(el, prop) {
		return getWindow().getComputedStyle(el, null).getPropertyValue(prop);
	}
	function elementIndex(el) {
		let child = el;
		let i;
		if (child) {
			i = 0;
			while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
			return i;
		}
	}
	function elementParents(el, selector) {
		const parents = [];
		let parent = el.parentElement;
		while (parent) {
			if (selector) {
				if (parent.matches(selector)) parents.push(parent);
			} else parents.push(parent);
			parent = parent.parentElement;
		}
		return parents;
	}
	function elementOuterSize(el, size, includeMargins) {
		const window = getWindow();
		if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
		return el.offsetWidth;
	}

//#endregion
//#region node_modules/.pnpm/swiper@11.2.10/node_modules/swiper/shared/swiper-core.mjs
	var support;
	function calcSupport() {
		const window = getWindow();
		const document = getDocument();
		return {
			smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
			touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
		};
	}
	function getSupport() {
		if (!support) support = calcSupport();
		return support;
	}
	var deviceCached;
	function calcDevice(_temp) {
		let { userAgent } = _temp === void 0 ? {} : _temp;
		const support = getSupport();
		const window = getWindow();
		const platform = window.navigator.platform;
		const ua = userAgent || window.navigator.userAgent;
		const device = {
			ios: false,
			android: false
		};
		const screenWidth = window.screen.width;
		const screenHeight = window.screen.height;
		const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
		let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
		const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
		const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
		const windows = platform === "Win32";
		let macos = platform === "MacIntel";
		if (!ipad && macos && support.touch && [
			"1024x1366",
			"1366x1024",
			"834x1194",
			"1194x834",
			"834x1112",
			"1112x834",
			"768x1024",
			"1024x768",
			"820x1180",
			"1180x820",
			"810x1080",
			"1080x810"
		].indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
			ipad = ua.match(/(Version)\/([\d.]+)/);
			if (!ipad) ipad = [
				0,
				1,
				"13_0_0"
			];
			macos = false;
		}
		if (android && !windows) {
			device.os = "android";
			device.android = true;
		}
		if (ipad || iphone || ipod) {
			device.os = "ios";
			device.ios = true;
		}
		return device;
	}
	function getDevice(overrides) {
		if (overrides === void 0) overrides = {};
		if (!deviceCached) deviceCached = calcDevice(overrides);
		return deviceCached;
	}
	var browser;
	function calcBrowser() {
		const window = getWindow();
		const device = getDevice();
		let needPerspectiveFix = false;
		function isSafari() {
			const ua = window.navigator.userAgent.toLowerCase();
			return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
		}
		if (isSafari()) {
			const ua = String(window.navigator.userAgent);
			if (ua.includes("Version/")) {
				const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
				needPerspectiveFix = major < 16 || major === 16 && minor < 2;
			}
		}
		const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
		const isSafariBrowser = isSafari();
		return {
			isSafari: needPerspectiveFix || isSafariBrowser,
			needPerspectiveFix,
			need3dFix: isSafariBrowser || isWebView && device.ios,
			isWebView
		};
	}
	function getBrowser() {
		if (!browser) browser = calcBrowser();
		return browser;
	}
	function Resize(_ref) {
		let { swiper, on, emit } = _ref;
		const window = getWindow();
		let observer = null;
		let animationFrame = null;
		const resizeHandler = () => {
			if (!swiper || swiper.destroyed || !swiper.initialized) return;
			emit("beforeResize");
			emit("resize");
		};
		const createObserver = () => {
			if (!swiper || swiper.destroyed || !swiper.initialized) return;
			observer = new ResizeObserver((entries) => {
				animationFrame = window.requestAnimationFrame(() => {
					const { width, height } = swiper;
					let newWidth = width;
					let newHeight = height;
					entries.forEach((_ref2) => {
						let { contentBoxSize, contentRect, target } = _ref2;
						if (target && target !== swiper.el) return;
						newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
						newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
					});
					if (newWidth !== width || newHeight !== height) resizeHandler();
				});
			});
			observer.observe(swiper.el);
		};
		const removeObserver = () => {
			if (animationFrame) window.cancelAnimationFrame(animationFrame);
			if (observer && observer.unobserve && swiper.el) {
				observer.unobserve(swiper.el);
				observer = null;
			}
		};
		const orientationChangeHandler = () => {
			if (!swiper || swiper.destroyed || !swiper.initialized) return;
			emit("orientationchange");
		};
		on("init", () => {
			if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
				createObserver();
				return;
			}
			window.addEventListener("resize", resizeHandler);
			window.addEventListener("orientationchange", orientationChangeHandler);
		});
		on("destroy", () => {
			removeObserver();
			window.removeEventListener("resize", resizeHandler);
			window.removeEventListener("orientationchange", orientationChangeHandler);
		});
	}
	function Observer(_ref) {
		let { swiper, extendParams, on, emit } = _ref;
		const observers = [];
		const window = getWindow();
		const attach = function(target, options) {
			if (options === void 0) options = {};
			const observer = new (window.MutationObserver || window.WebkitMutationObserver)((mutations) => {
				if (swiper.__preventObserver__) return;
				if (mutations.length === 1) {
					emit("observerUpdate", mutations[0]);
					return;
				}
				const observerUpdate = function observerUpdate() {
					emit("observerUpdate", mutations[0]);
				};
				if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
				else window.setTimeout(observerUpdate, 0);
			});
			observer.observe(target, {
				attributes: typeof options.attributes === "undefined" ? true : options.attributes,
				childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
				characterData: typeof options.characterData === "undefined" ? true : options.characterData
			});
			observers.push(observer);
		};
		const init = () => {
			if (!swiper.params.observer) return;
			if (swiper.params.observeParents) {
				const containerParents = elementParents(swiper.hostEl);
				for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
			}
			attach(swiper.hostEl, { childList: swiper.params.observeSlideChildren });
			attach(swiper.wrapperEl, { attributes: false });
		};
		const destroy = () => {
			observers.forEach((observer) => {
				observer.disconnect();
			});
			observers.splice(0, observers.length);
		};
		extendParams({
			observer: false,
			observeParents: false,
			observeSlideChildren: false
		});
		on("init", init);
		on("destroy", destroy);
	}
	var eventsEmitter = {
		on(events, handler, priority) {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (typeof handler !== "function") return self;
			const method = priority ? "unshift" : "push";
			events.split(" ").forEach((event) => {
				if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
				self.eventsListeners[event][method](handler);
			});
			return self;
		},
		once(events, handler, priority) {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (typeof handler !== "function") return self;
			function onceHandler() {
				self.off(events, onceHandler);
				if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				handler.apply(self, args);
			}
			onceHandler.__emitterProxy = handler;
			return self.on(events, onceHandler, priority);
		},
		onAny(handler, priority) {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (typeof handler !== "function") return self;
			const method = priority ? "unshift" : "push";
			if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
			return self;
		},
		offAny(handler) {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (!self.eventsAnyListeners) return self;
			const index = self.eventsAnyListeners.indexOf(handler);
			if (index >= 0) self.eventsAnyListeners.splice(index, 1);
			return self;
		},
		off(events, handler) {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (!self.eventsListeners) return self;
			events.split(" ").forEach((event) => {
				if (typeof handler === "undefined") self.eventsListeners[event] = [];
				else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index) => {
					if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
				});
			});
			return self;
		},
		emit() {
			const self = this;
			if (!self.eventsListeners || self.destroyed) return self;
			if (!self.eventsListeners) return self;
			let events;
			let data;
			let context;
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			if (typeof args[0] === "string" || Array.isArray(args[0])) {
				events = args[0];
				data = args.slice(1, args.length);
				context = self;
			} else {
				events = args[0].events;
				data = args[0].data;
				context = args[0].context || self;
			}
			data.unshift(context);
			(Array.isArray(events) ? events : events.split(" ")).forEach((event) => {
				if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler) => {
					eventHandler.apply(context, [event, ...data]);
				});
				if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler) => {
					eventHandler.apply(context, data);
				});
			});
			return self;
		}
	};
	function updateSize() {
		const swiper = this;
		let width;
		let height;
		const el = swiper.el;
		if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
		else width = el.clientWidth;
		if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
		else height = el.clientHeight;
		if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
		width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
		height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
		if (Number.isNaN(width)) width = 0;
		if (Number.isNaN(height)) height = 0;
		Object.assign(swiper, {
			width,
			height,
			size: swiper.isHorizontal() ? width : height
		});
	}
	function updateSlides() {
		const swiper = this;
		function getDirectionPropertyValue(node, label) {
			return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
		}
		const params = swiper.params;
		const { wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
		const isVirtual = swiper.virtual && params.virtual.enabled;
		const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
		const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
		const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
		let snapGrid = [];
		const slidesGrid = [];
		const slidesSizesGrid = [];
		let offsetBefore = params.slidesOffsetBefore;
		if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
		let offsetAfter = params.slidesOffsetAfter;
		if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
		const previousSnapGridLength = swiper.snapGrid.length;
		const previousSlidesGridLength = swiper.slidesGrid.length;
		let spaceBetween = params.spaceBetween;
		let slidePosition = -offsetBefore;
		let prevSlideSize = 0;
		let index = 0;
		if (typeof swiperSize === "undefined") return;
		if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
		else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
		swiper.virtualSize = -spaceBetween;
		slides.forEach((slideEl) => {
			if (rtl) slideEl.style.marginLeft = "";
			else slideEl.style.marginRight = "";
			slideEl.style.marginBottom = "";
			slideEl.style.marginTop = "";
		});
		if (params.centeredSlides && params.cssMode) {
			setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
			setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
		}
		const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
		if (gridEnabled) swiper.grid.initSlides(slides);
		else if (swiper.grid) swiper.grid.unsetSlides();
		let slideSize;
		const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
			return typeof params.breakpoints[key].slidesPerView !== "undefined";
		}).length > 0;
		for (let i = 0; i < slidesLength; i += 1) {
			slideSize = 0;
			let slide;
			if (slides[i]) slide = slides[i];
			if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
			if (slides[i] && elementStyle(slide, "display") === "none") continue;
			if (params.slidesPerView === "auto") {
				if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
				const slideStyles = getComputedStyle(slide);
				const currentTransform = slide.style.transform;
				const currentWebKitTransform = slide.style.webkitTransform;
				if (currentTransform) slide.style.transform = "none";
				if (currentWebKitTransform) slide.style.webkitTransform = "none";
				if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true);
				else {
					const width = getDirectionPropertyValue(slideStyles, "width");
					const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
					const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
					const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
					const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
					const boxSizing = slideStyles.getPropertyValue("box-sizing");
					if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
					else {
						const { clientWidth, offsetWidth } = slide;
						slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
					}
				}
				if (currentTransform) slide.style.transform = currentTransform;
				if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
				if (params.roundLengths) slideSize = Math.floor(slideSize);
			} else {
				slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
				if (params.roundLengths) slideSize = Math.floor(slideSize);
				if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
			}
			if (slides[i]) slides[i].swiperSlideSize = slideSize;
			slidesSizesGrid.push(slideSize);
			if (params.centeredSlides) {
				slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
				if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
				if (params.roundLengths) slidePosition = Math.floor(slidePosition);
				if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
			} else {
				if (params.roundLengths) slidePosition = Math.floor(slidePosition);
				if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
				slidePosition = slidePosition + slideSize + spaceBetween;
			}
			swiper.virtualSize += slideSize + spaceBetween;
			prevSlideSize = slideSize;
			index += 1;
		}
		swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
		if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
		if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
		if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
		if (!params.centeredSlides) {
			const newSlidesGrid = [];
			for (let i = 0; i < snapGrid.length; i += 1) {
				let slidesGridItem = snapGrid[i];
				if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
				if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
			}
			snapGrid = newSlidesGrid;
			if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
		}
		if (isVirtual && params.loop) {
			const size = slidesSizesGrid[0] + spaceBetween;
			if (params.slidesPerGroup > 1) {
				const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
				const groupSize = size * params.slidesPerGroup;
				for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
			}
			for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
				if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
				slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
				swiper.virtualSize += size;
			}
		}
		if (snapGrid.length === 0) snapGrid = [0];
		if (spaceBetween !== 0) {
			const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
			slides.filter((_, slideIndex) => {
				if (!params.cssMode || params.loop) return true;
				if (slideIndex === slides.length - 1) return false;
				return true;
			}).forEach((slideEl) => {
				slideEl.style[key] = `${spaceBetween}px`;
			});
		}
		if (params.centeredSlides && params.centeredSlidesBounds) {
			let allSlidesSize = 0;
			slidesSizesGrid.forEach((slideSizeValue) => {
				allSlidesSize += slideSizeValue + (spaceBetween || 0);
			});
			allSlidesSize -= spaceBetween;
			const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
			snapGrid = snapGrid.map((snap) => {
				if (snap <= 0) return -offsetBefore;
				if (snap > maxSnap) return maxSnap + offsetAfter;
				return snap;
			});
		}
		if (params.centerInsufficientSlides) {
			let allSlidesSize = 0;
			slidesSizesGrid.forEach((slideSizeValue) => {
				allSlidesSize += slideSizeValue + (spaceBetween || 0);
			});
			allSlidesSize -= spaceBetween;
			const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
			if (allSlidesSize + offsetSize < swiperSize) {
				const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
				snapGrid.forEach((snap, snapIndex) => {
					snapGrid[snapIndex] = snap - allSlidesOffset;
				});
				slidesGrid.forEach((snap, snapIndex) => {
					slidesGrid[snapIndex] = snap + allSlidesOffset;
				});
			}
		}
		Object.assign(swiper, {
			slides,
			snapGrid,
			slidesGrid,
			slidesSizesGrid
		});
		if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
			setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
			setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
			const addToSnapGrid = -swiper.snapGrid[0];
			const addToSlidesGrid = -swiper.slidesGrid[0];
			swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
			swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
		}
		if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
		if (snapGrid.length !== previousSnapGridLength) {
			if (swiper.params.watchOverflow) swiper.checkOverflow();
			swiper.emit("snapGridLengthChange");
		}
		if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
		if (params.watchSlidesProgress) swiper.updateSlidesOffset();
		swiper.emit("slidesUpdated");
		if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
			const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
			const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
			if (slidesLength <= params.maxBackfaceHiddenSlides) {
				if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
			} else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
		}
	}
	function updateAutoHeight(speed) {
		const swiper = this;
		const activeSlides = [];
		const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
		let newHeight = 0;
		let i;
		if (typeof speed === "number") swiper.setTransition(speed);
		else if (speed === true) swiper.setTransition(swiper.params.speed);
		const getSlideByIndex = (index) => {
			if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
			return swiper.slides[index];
		};
		if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide) => {
			activeSlides.push(slide);
		});
		else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
			const index = swiper.activeIndex + i;
			if (index > swiper.slides.length && !isVirtual) break;
			activeSlides.push(getSlideByIndex(index));
		}
		else activeSlides.push(getSlideByIndex(swiper.activeIndex));
		for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
			const height = activeSlides[i].offsetHeight;
			newHeight = height > newHeight ? height : newHeight;
		}
		if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
	}
	function updateSlidesOffset() {
		const swiper = this;
		const slides = swiper.slides;
		const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
		for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
	}
	var toggleSlideClasses$1 = (slideEl, condition, className) => {
		if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
		else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
	};
	function updateSlidesProgress(translate) {
		if (translate === void 0) translate = this && this.translate || 0;
		const swiper = this;
		const params = swiper.params;
		const { slides, rtlTranslate: rtl, snapGrid } = swiper;
		if (slides.length === 0) return;
		if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
		let offsetCenter = -translate;
		if (rtl) offsetCenter = translate;
		swiper.visibleSlidesIndexes = [];
		swiper.visibleSlides = [];
		let spaceBetween = params.spaceBetween;
		if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
		else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
		for (let i = 0; i < slides.length; i += 1) {
			const slide = slides[i];
			let slideOffset = slide.swiperSlideOffset;
			if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
			const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
			const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
			const slideBefore = -(offsetCenter - slideOffset);
			const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
			const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
			const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
			if (isVisible) {
				swiper.visibleSlides.push(slide);
				swiper.visibleSlidesIndexes.push(i);
			}
			toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
			toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
			slide.progress = rtl ? -slideProgress : slideProgress;
			slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
		}
	}
	function updateProgress(translate) {
		const swiper = this;
		if (typeof translate === "undefined") translate = swiper && swiper.translate && swiper.translate * (swiper.rtlTranslate ? -1 : 1) || 0;
		const params = swiper.params;
		const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
		let { progress, isBeginning, isEnd, progressLoop } = swiper;
		const wasBeginning = isBeginning;
		const wasEnd = isEnd;
		if (translatesDiff === 0) {
			progress = 0;
			isBeginning = true;
			isEnd = true;
		} else {
			progress = (translate - swiper.minTranslate()) / translatesDiff;
			const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
			const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
			isBeginning = isBeginningRounded || progress <= 0;
			isEnd = isEndRounded || progress >= 1;
			if (isBeginningRounded) progress = 0;
			if (isEndRounded) progress = 1;
		}
		if (params.loop) {
			const firstSlideIndex = swiper.getSlideIndexByData(0);
			const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
			const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
			const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
			const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
			const translateAbs = Math.abs(translate);
			if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
			else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
			if (progressLoop > 1) progressLoop -= 1;
		}
		Object.assign(swiper, {
			progress,
			progressLoop,
			isBeginning,
			isEnd
		});
		if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
		if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
		if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
		if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
		swiper.emit("progress", progress);
	}
	var toggleSlideClasses = (slideEl, condition, className) => {
		if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
		else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
	};
	function updateSlidesClasses() {
		const swiper = this;
		const { slides, params, slidesEl, activeIndex } = swiper;
		const isVirtual = swiper.virtual && params.virtual.enabled;
		const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
		const getFilteredSlide = (selector) => {
			return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
		};
		let activeSlide;
		let prevSlide;
		let nextSlide;
		if (isVirtual) if (params.loop) {
			let slideIndex = activeIndex - swiper.virtual.slidesBefore;
			if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
			if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
			activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
		} else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
		else if (gridEnabled) {
			activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
			nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
			prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
		} else activeSlide = slides[activeIndex];
		if (activeSlide) {
			if (!gridEnabled) {
				nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
				if (params.loop && !nextSlide) nextSlide = slides[0];
				prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
			}
		}
		slides.forEach((slideEl) => {
			toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
			toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
			toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
		});
		swiper.emitSlidesClasses();
	}
	var processLazyPreloader = (swiper, imageEl) => {
		if (!swiper || swiper.destroyed || !swiper.params) return;
		const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
		const slideEl = imageEl.closest(slideSelector());
		if (slideEl) {
			let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
			if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
			else requestAnimationFrame(() => {
				if (slideEl.shadowRoot) {
					lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
					if (lazyEl) lazyEl.remove();
				}
			});
			if (lazyEl) lazyEl.remove();
		}
	};
	var unlazy = (swiper, index) => {
		if (!swiper.slides[index]) return;
		const imageEl = swiper.slides[index].querySelector("[loading=\"lazy\"]");
		if (imageEl) imageEl.removeAttribute("loading");
	};
	var preload = (swiper) => {
		if (!swiper || swiper.destroyed || !swiper.params) return;
		let amount = swiper.params.lazyPreloadPrevNext;
		const len = swiper.slides.length;
		if (!len || !amount || amount < 0) return;
		amount = Math.min(amount, len);
		const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
		const activeIndex = swiper.activeIndex;
		if (swiper.params.grid && swiper.params.grid.rows > 1) {
			const activeColumn = activeIndex;
			const preloadColumns = [activeColumn - amount];
			preloadColumns.push(...Array.from({ length: amount }).map((_, i) => {
				return activeColumn + slidesPerView + i;
			}));
			swiper.slides.forEach((slideEl, i) => {
				if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
			});
			return;
		}
		const slideIndexLastInView = activeIndex + slidesPerView - 1;
		if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
			const realIndex = (i % len + len) % len;
			if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
		}
		else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
	};
	function getActiveIndexByTranslate(swiper) {
		const { slidesGrid, params } = swiper;
		const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
		let activeIndex;
		for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
			if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
			else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
		} else if (translate >= slidesGrid[i]) activeIndex = i;
		if (params.normalizeSlideIndex) {
			if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
		}
		return activeIndex;
	}
	function updateActiveIndex(newActiveIndex) {
		const swiper = this;
		const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
		const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
		let activeIndex = newActiveIndex;
		let snapIndex;
		const getVirtualRealIndex = (aIndex) => {
			let realIndex = aIndex - swiper.virtual.slidesBefore;
			if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
			if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
			return realIndex;
		};
		if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
		if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
		else {
			const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
			snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
		}
		if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
		if (activeIndex === previousIndex && !swiper.params.loop) {
			if (snapIndex !== previousSnapIndex) {
				swiper.snapIndex = snapIndex;
				swiper.emit("snapIndexChange");
			}
			return;
		}
		if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
			swiper.realIndex = getVirtualRealIndex(activeIndex);
			return;
		}
		const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
		let realIndex;
		if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
		else if (gridEnabled) {
			const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
			let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
			if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
			realIndex = Math.floor(activeSlideIndex / params.grid.rows);
		} else if (swiper.slides[activeIndex]) {
			const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
			if (slideIndex) realIndex = parseInt(slideIndex, 10);
			else realIndex = activeIndex;
		} else realIndex = activeIndex;
		Object.assign(swiper, {
			previousSnapIndex,
			snapIndex,
			previousRealIndex,
			realIndex,
			previousIndex,
			activeIndex
		});
		if (swiper.initialized) preload(swiper);
		swiper.emit("activeIndexChange");
		swiper.emit("snapIndexChange");
		if (swiper.initialized || swiper.params.runCallbacksOnInit) {
			if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
			swiper.emit("slideChange");
		}
	}
	function updateClickedSlide(el, path) {
		const swiper = this;
		const params = swiper.params;
		let slide = el.closest(`.${params.slideClass}, swiper-slide`);
		if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
			if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
		});
		let slideFound = false;
		let slideIndex;
		if (slide) {
			for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
				slideFound = true;
				slideIndex = i;
				break;
			}
		}
		if (slide && slideFound) {
			swiper.clickedSlide = slide;
			if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
			else swiper.clickedIndex = slideIndex;
		} else {
			swiper.clickedSlide = void 0;
			swiper.clickedIndex = void 0;
			return;
		}
		if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
	}
	var update = {
		updateSize,
		updateSlides,
		updateAutoHeight,
		updateSlidesOffset,
		updateSlidesProgress,
		updateProgress,
		updateSlidesClasses,
		updateActiveIndex,
		updateClickedSlide
	};
	function getSwiperTranslate(axis) {
		if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
		const swiper = this;
		const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
		if (params.virtualTranslate) return rtl ? -translate : translate;
		if (params.cssMode) return translate;
		let currentTranslate = getTranslate(wrapperEl, axis);
		currentTranslate += swiper.cssOverflowAdjustment();
		if (rtl) currentTranslate = -currentTranslate;
		return currentTranslate || 0;
	}
	function setTranslate(translate, byController) {
		const swiper = this;
		const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
		let x = 0;
		let y = 0;
		const z = 0;
		if (swiper.isHorizontal()) x = rtl ? -translate : translate;
		else y = translate;
		if (params.roundLengths) {
			x = Math.floor(x);
			y = Math.floor(y);
		}
		swiper.previousTranslate = swiper.translate;
		swiper.translate = swiper.isHorizontal() ? x : y;
		if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
		else if (!params.virtualTranslate) {
			if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
			else y -= swiper.cssOverflowAdjustment();
			wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
		}
		let newProgress;
		const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
		if (translatesDiff === 0) newProgress = 0;
		else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
		if (newProgress !== progress) swiper.updateProgress(translate);
		swiper.emit("setTranslate", swiper.translate, byController);
	}
	function minTranslate() {
		return -this.snapGrid[0];
	}
	function maxTranslate() {
		return -this.snapGrid[this.snapGrid.length - 1];
	}
	function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
		if (translate === void 0) translate = 0;
		if (speed === void 0) speed = this.params.speed;
		if (runCallbacks === void 0) runCallbacks = true;
		if (translateBounds === void 0) translateBounds = true;
		const swiper = this;
		const { params, wrapperEl } = swiper;
		if (swiper.animating && params.preventInteractionOnTransition) return false;
		const minTranslate = swiper.minTranslate();
		const maxTranslate = swiper.maxTranslate();
		let newTranslate;
		if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
		else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
		else newTranslate = translate;
		swiper.updateProgress(newTranslate);
		if (params.cssMode) {
			const isH = swiper.isHorizontal();
			if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
			else {
				if (!swiper.support.smoothScroll) {
					animateCSSModeScroll({
						swiper,
						targetPosition: -newTranslate,
						side: isH ? "left" : "top"
					});
					return true;
				}
				wrapperEl.scrollTo({
					[isH ? "left" : "top"]: -newTranslate,
					behavior: "smooth"
				});
			}
			return true;
		}
		if (speed === 0) {
			swiper.setTransition(0);
			swiper.setTranslate(newTranslate);
			if (runCallbacks) {
				swiper.emit("beforeTransitionStart", speed, internal);
				swiper.emit("transitionEnd");
			}
		} else {
			swiper.setTransition(speed);
			swiper.setTranslate(newTranslate);
			if (runCallbacks) {
				swiper.emit("beforeTransitionStart", speed, internal);
				swiper.emit("transitionStart");
			}
			if (!swiper.animating) {
				swiper.animating = true;
				if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
					if (!swiper || swiper.destroyed) return;
					if (e.target !== this) return;
					swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
					swiper.onTranslateToWrapperTransitionEnd = null;
					delete swiper.onTranslateToWrapperTransitionEnd;
					swiper.animating = false;
					if (runCallbacks) swiper.emit("transitionEnd");
				};
				swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
			}
		}
		return true;
	}
	var translate = {
		getTranslate: getSwiperTranslate,
		setTranslate,
		minTranslate,
		maxTranslate,
		translateTo
	};
	function setTransition(duration, byController) {
		const swiper = this;
		if (!swiper.params.cssMode) {
			swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
			swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
		}
		swiper.emit("setTransition", duration, byController);
	}
	function transitionEmit(_ref) {
		let { swiper, runCallbacks, direction, step } = _ref;
		const { activeIndex, previousIndex } = swiper;
		let dir = direction;
		if (!dir) if (activeIndex > previousIndex) dir = "next";
		else if (activeIndex < previousIndex) dir = "prev";
		else dir = "reset";
		swiper.emit(`transition${step}`);
		if (runCallbacks && dir === "reset") swiper.emit(`slideResetTransition${step}`);
		else if (runCallbacks && activeIndex !== previousIndex) {
			swiper.emit(`slideChangeTransition${step}`);
			if (dir === "next") swiper.emit(`slideNextTransition${step}`);
			else swiper.emit(`slidePrevTransition${step}`);
		}
	}
	function transitionStart(runCallbacks, direction) {
		if (runCallbacks === void 0) runCallbacks = true;
		const swiper = this;
		const { params } = swiper;
		if (params.cssMode) return;
		if (params.autoHeight) swiper.updateAutoHeight();
		transitionEmit({
			swiper,
			runCallbacks,
			direction,
			step: "Start"
		});
	}
	function transitionEnd(runCallbacks, direction) {
		if (runCallbacks === void 0) runCallbacks = true;
		const swiper = this;
		const { params } = swiper;
		swiper.animating = false;
		if (params.cssMode) return;
		swiper.setTransition(0);
		transitionEmit({
			swiper,
			runCallbacks,
			direction,
			step: "End"
		});
	}
	var transition = {
		setTransition,
		transitionStart,
		transitionEnd
	};
	function slideTo(index, speed, runCallbacks, internal, initial) {
		if (index === void 0) index = 0;
		if (runCallbacks === void 0) runCallbacks = true;
		if (typeof index === "string") index = parseInt(index, 10);
		const swiper = this;
		let slideIndex = index;
		if (slideIndex < 0) slideIndex = 0;
		const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
		if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
		let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
		if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
		const translate = -snapGrid[snapIndex];
		if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
			const normalizedTranslate = -Math.floor(translate * 100);
			const normalizedGrid = Math.floor(slidesGrid[i] * 100);
			const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
			if (typeof slidesGrid[i + 1] !== "undefined") {
				if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
				else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
			} else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
		}
		if (swiper.initialized && slideIndex !== activeIndex) {
			if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
			if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
				if ((activeIndex || 0) !== slideIndex) return false;
			}
		}
		if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
		swiper.updateProgress(translate);
		let direction;
		if (slideIndex > activeIndex) direction = "next";
		else if (slideIndex < activeIndex) direction = "prev";
		else direction = "reset";
		const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
		if (!(isVirtual && initial) && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
			swiper.updateActiveIndex(slideIndex);
			if (params.autoHeight) swiper.updateAutoHeight();
			swiper.updateSlidesClasses();
			if (params.effect !== "slide") swiper.setTranslate(translate);
			if (direction !== "reset") {
				swiper.transitionStart(runCallbacks, direction);
				swiper.transitionEnd(runCallbacks, direction);
			}
			return false;
		}
		if (params.cssMode) {
			const isH = swiper.isHorizontal();
			const t = rtl ? translate : -translate;
			if (speed === 0) {
				if (isVirtual) {
					swiper.wrapperEl.style.scrollSnapType = "none";
					swiper._immediateVirtual = true;
				}
				if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
					swiper._cssModeVirtualInitialSet = true;
					requestAnimationFrame(() => {
						wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
					});
				} else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
				if (isVirtual) requestAnimationFrame(() => {
					swiper.wrapperEl.style.scrollSnapType = "";
					swiper._immediateVirtual = false;
				});
			} else {
				if (!swiper.support.smoothScroll) {
					animateCSSModeScroll({
						swiper,
						targetPosition: t,
						side: isH ? "left" : "top"
					});
					return true;
				}
				wrapperEl.scrollTo({
					[isH ? "left" : "top"]: t,
					behavior: "smooth"
				});
			}
			return true;
		}
		const isSafari = getBrowser().isSafari;
		if (isVirtual && !initial && isSafari && swiper.isElement) swiper.virtual.update(false, false, slideIndex);
		swiper.setTransition(speed);
		swiper.setTranslate(translate);
		swiper.updateActiveIndex(slideIndex);
		swiper.updateSlidesClasses();
		swiper.emit("beforeTransitionStart", speed, internal);
		swiper.transitionStart(runCallbacks, direction);
		if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
		else if (!swiper.animating) {
			swiper.animating = true;
			if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
				if (!swiper || swiper.destroyed) return;
				if (e.target !== this) return;
				swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
				swiper.onSlideToWrapperTransitionEnd = null;
				delete swiper.onSlideToWrapperTransitionEnd;
				swiper.transitionEnd(runCallbacks, direction);
			};
			swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
		}
		return true;
	}
	function slideToLoop(index, speed, runCallbacks, internal) {
		if (index === void 0) index = 0;
		if (runCallbacks === void 0) runCallbacks = true;
		if (typeof index === "string") index = parseInt(index, 10);
		const swiper = this;
		if (swiper.destroyed) return;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
		let newIndex = index;
		if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex = newIndex + swiper.virtual.slidesBefore;
		else {
			let targetSlideIndex;
			if (gridEnabled) {
				const slideIndex = newIndex * swiper.params.grid.rows;
				targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
			} else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
			const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
			const { centeredSlides } = swiper.params;
			let slidesPerView = swiper.params.slidesPerView;
			if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
			else {
				slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
				if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
			}
			let needLoopFix = cols - targetSlideIndex < slidesPerView;
			if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
			if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
			if (needLoopFix) {
				const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
				swiper.loopFix({
					direction,
					slideTo: true,
					activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
					slideRealIndex: direction === "next" ? swiper.realIndex : void 0
				});
			}
			if (gridEnabled) {
				const slideIndex = newIndex * swiper.params.grid.rows;
				newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
			} else newIndex = swiper.getSlideIndexByData(newIndex);
		}
		requestAnimationFrame(() => {
			swiper.slideTo(newIndex, speed, runCallbacks, internal);
		});
		return swiper;
	}
	function slideNext(speed, runCallbacks, internal) {
		if (runCallbacks === void 0) runCallbacks = true;
		const swiper = this;
		const { enabled, params, animating } = swiper;
		if (!enabled || swiper.destroyed) return swiper;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		let perGroup = params.slidesPerGroup;
		if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
		const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
		const isVirtual = swiper.virtual && params.virtual.enabled;
		if (params.loop) {
			if (animating && !isVirtual && params.loopPreventsSliding) return false;
			swiper.loopFix({ direction: "next" });
			swiper._clientLeft = swiper.wrapperEl.clientLeft;
			if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
				requestAnimationFrame(() => {
					swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
				});
				return true;
			}
		}
		if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
		return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
	}
	function slidePrev(speed, runCallbacks, internal) {
		if (runCallbacks === void 0) runCallbacks = true;
		const swiper = this;
		const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
		if (!enabled || swiper.destroyed) return swiper;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		const isVirtual = swiper.virtual && params.virtual.enabled;
		if (params.loop) {
			if (animating && !isVirtual && params.loopPreventsSliding) return false;
			swiper.loopFix({ direction: "prev" });
			swiper._clientLeft = swiper.wrapperEl.clientLeft;
		}
		const translate = rtlTranslate ? swiper.translate : -swiper.translate;
		function normalize(val) {
			if (val < 0) return -Math.floor(Math.abs(val));
			return Math.floor(val);
		}
		const normalizedTranslate = normalize(translate);
		const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
		const isFreeMode = params.freeMode && params.freeMode.enabled;
		let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
		if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
			let prevSnapIndex;
			snapGrid.forEach((snap, snapIndex) => {
				if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
			});
			if (typeof prevSnapIndex !== "undefined") prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
		}
		let prevIndex = 0;
		if (typeof prevSnap !== "undefined") {
			prevIndex = slidesGrid.indexOf(prevSnap);
			if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
			if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
				prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
				prevIndex = Math.max(prevIndex, 0);
			}
		}
		if (params.rewind && swiper.isBeginning) {
			const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
			return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
		} else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
			requestAnimationFrame(() => {
				swiper.slideTo(prevIndex, speed, runCallbacks, internal);
			});
			return true;
		}
		return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	}
	function slideReset(speed, runCallbacks, internal) {
		if (runCallbacks === void 0) runCallbacks = true;
		const swiper = this;
		if (swiper.destroyed) return;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	}
	function slideToClosest(speed, runCallbacks, internal, threshold) {
		if (runCallbacks === void 0) runCallbacks = true;
		if (threshold === void 0) threshold = .5;
		const swiper = this;
		if (swiper.destroyed) return;
		if (typeof speed === "undefined") speed = swiper.params.speed;
		let index = swiper.activeIndex;
		const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
		const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
		const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
		if (translate >= swiper.snapGrid[snapIndex]) {
			const currentSnap = swiper.snapGrid[snapIndex];
			const nextSnap = swiper.snapGrid[snapIndex + 1];
			if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
		} else {
			const prevSnap = swiper.snapGrid[snapIndex - 1];
			const currentSnap = swiper.snapGrid[snapIndex];
			if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
		}
		index = Math.max(index, 0);
		index = Math.min(index, swiper.slidesGrid.length - 1);
		return swiper.slideTo(index, speed, runCallbacks, internal);
	}
	function slideToClickedSlide() {
		const swiper = this;
		if (swiper.destroyed) return;
		const { params, slidesEl } = swiper;
		const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
		let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
		let realIndex;
		const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
		const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
		if (params.loop) {
			if (swiper.animating) return;
			realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
			if (params.centeredSlides) swiper.slideToLoop(realIndex);
			else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
				swiper.loopFix();
				slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
				nextTick(() => {
					swiper.slideTo(slideToIndex);
				});
			} else swiper.slideTo(slideToIndex);
		} else swiper.slideTo(slideToIndex);
	}
	var slide = {
		slideTo,
		slideToLoop,
		slideNext,
		slidePrev,
		slideReset,
		slideToClosest,
		slideToClickedSlide
	};
	function loopCreate(slideRealIndex, initial) {
		const swiper = this;
		const { params, slidesEl } = swiper;
		if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
		const initSlides = () => {
			elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`).forEach((el, index) => {
				el.setAttribute("data-swiper-slide-index", index);
			});
		};
		const clearBlankSlides = () => {
			const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
			slides.forEach((el) => {
				el.remove();
			});
			if (slides.length > 0) {
				swiper.recalcSlides();
				swiper.updateSlides();
			}
		};
		const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
		if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) clearBlankSlides();
		const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
		const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
		const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
		const addBlankSlides = (amountOfSlides) => {
			for (let i = 0; i < amountOfSlides; i += 1) {
				const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
				swiper.slidesEl.append(slideEl);
			}
		};
		if (shouldFillGroup) {
			if (params.loopAddBlankSlides) {
				addBlankSlides(slidesPerGroup - swiper.slides.length % slidesPerGroup);
				swiper.recalcSlides();
				swiper.updateSlides();
			} else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
			initSlides();
		} else if (shouldFillGrid) {
			if (params.loopAddBlankSlides) {
				addBlankSlides(params.grid.rows - swiper.slides.length % params.grid.rows);
				swiper.recalcSlides();
				swiper.updateSlides();
			} else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
			initSlides();
		} else initSlides();
		swiper.loopFix({
			slideRealIndex,
			direction: params.centeredSlides ? void 0 : "next",
			initial
		});
	}
	function loopFix(_temp) {
		let { slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, initial, byController, byMousewheel } = _temp === void 0 ? {} : _temp;
		const swiper = this;
		if (!swiper.params.loop) return;
		swiper.emit("beforeLoopFix");
		const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
		const { centeredSlides, initialSlide } = params;
		swiper.allowSlidePrev = true;
		swiper.allowSlideNext = true;
		if (swiper.virtual && params.virtual.enabled) {
			if (slideTo) {
				if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
				else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
				else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
			}
			swiper.allowSlidePrev = allowSlidePrev;
			swiper.allowSlideNext = allowSlideNext;
			swiper.emit("loopFix");
			return;
		}
		let slidesPerView = params.slidesPerView;
		if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
		else {
			slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
			if (centeredSlides && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
		}
		const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
		let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
		if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
		loopedSlides += params.loopAdditionalSlides;
		swiper.loopedSlides = loopedSlides;
		const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
		if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
		else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
		const prependSlidesIndexes = [];
		const appendSlidesIndexes = [];
		const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
		const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
		let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
		if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
		else activeIndex = activeSlideIndex;
		const isNext = direction === "next" || !direction;
		const isPrev = direction === "prev" || !direction;
		let slidesPrepended = 0;
		let slidesAppended = 0;
		const activeColIndexWithShift = (gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex) + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
		if (activeColIndexWithShift < loopedSlides) {
			slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
			for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
				const index = i - Math.floor(i / cols) * cols;
				if (gridEnabled) {
					const colIndexToPrepend = cols - index - 1;
					for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
				} else prependSlidesIndexes.push(cols - index - 1);
			}
		} else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
			slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
			if (isInitialOverflow) slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
			for (let i = 0; i < slidesAppended; i += 1) {
				const index = i - Math.floor(i / cols) * cols;
				if (gridEnabled) slides.forEach((slide, slideIndex) => {
					if (slide.column === index) appendSlidesIndexes.push(slideIndex);
				});
				else appendSlidesIndexes.push(index);
			}
		}
		swiper.__preventObserver__ = true;
		requestAnimationFrame(() => {
			swiper.__preventObserver__ = false;
		});
		if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
			if (appendSlidesIndexes.includes(activeSlideIndex)) appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
			if (prependSlidesIndexes.includes(activeSlideIndex)) prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
		}
		if (isPrev) prependSlidesIndexes.forEach((index) => {
			slides[index].swiperLoopMoveDOM = true;
			slidesEl.prepend(slides[index]);
			slides[index].swiperLoopMoveDOM = false;
		});
		if (isNext) appendSlidesIndexes.forEach((index) => {
			slides[index].swiperLoopMoveDOM = true;
			slidesEl.append(slides[index]);
			slides[index].swiperLoopMoveDOM = false;
		});
		swiper.recalcSlides();
		if (params.slidesPerView === "auto") swiper.updateSlides();
		else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach((slide, slideIndex) => {
			swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
		});
		if (params.watchSlidesProgress) swiper.updateSlidesOffset();
		if (slideTo) {
			if (prependSlidesIndexes.length > 0 && isPrev) {
				if (typeof slideRealIndex === "undefined") {
					const currentSlideTranslate = swiper.slidesGrid[activeIndex];
					const diff = swiper.slidesGrid[activeIndex + slidesPrepended] - currentSlideTranslate;
					if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
					else {
						swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
						if (setTranslate) {
							swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
							swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
						}
					}
				} else if (setTranslate) {
					const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
					swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
					swiper.touchEventsData.currentTranslate = swiper.translate;
				}
			} else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
				const currentSlideTranslate = swiper.slidesGrid[activeIndex];
				const diff = swiper.slidesGrid[activeIndex - slidesAppended] - currentSlideTranslate;
				if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
				else {
					swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
					if (setTranslate) {
						swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
						swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
					}
				}
			} else {
				const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
				swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
			}
		}
		swiper.allowSlidePrev = allowSlidePrev;
		swiper.allowSlideNext = allowSlideNext;
		if (swiper.controller && swiper.controller.control && !byController) {
			const loopParams = {
				slideRealIndex,
				direction,
				setTranslate,
				activeSlideIndex,
				byController: true
			};
			if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c) => {
				if (!c.destroyed && c.params.loop) c.loopFix({
					...loopParams,
					slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
				});
			});
			else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
				...loopParams,
				slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
			});
		}
		swiper.emit("loopFix");
	}
	function loopDestroy() {
		const swiper = this;
		const { params, slidesEl } = swiper;
		if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
		swiper.recalcSlides();
		const newSlidesOrder = [];
		swiper.slides.forEach((slideEl) => {
			const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
			newSlidesOrder[index] = slideEl;
		});
		swiper.slides.forEach((slideEl) => {
			slideEl.removeAttribute("data-swiper-slide-index");
		});
		newSlidesOrder.forEach((slideEl) => {
			slidesEl.append(slideEl);
		});
		swiper.recalcSlides();
		swiper.slideTo(swiper.realIndex, 0);
	}
	var loop = {
		loopCreate,
		loopFix,
		loopDestroy
	};
	function setGrabCursor(moving) {
		const swiper = this;
		if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
		const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
		if (swiper.isElement) swiper.__preventObserver__ = true;
		el.style.cursor = "move";
		el.style.cursor = moving ? "grabbing" : "grab";
		if (swiper.isElement) requestAnimationFrame(() => {
			swiper.__preventObserver__ = false;
		});
	}
	function unsetGrabCursor() {
		const swiper = this;
		if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
		if (swiper.isElement) swiper.__preventObserver__ = true;
		swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
		if (swiper.isElement) requestAnimationFrame(() => {
			swiper.__preventObserver__ = false;
		});
	}
	var grabCursor = {
		setGrabCursor,
		unsetGrabCursor
	};
	function closestElement(selector, base) {
		if (base === void 0) base = this;
		function __closestFrom(el) {
			if (!el || el === getDocument() || el === getWindow()) return null;
			if (el.assignedSlot) el = el.assignedSlot;
			const found = el.closest(selector);
			if (!found && !el.getRootNode) return null;
			return found || __closestFrom(el.getRootNode().host);
		}
		return __closestFrom(base);
	}
	function preventEdgeSwipe(swiper, event, startX) {
		const window = getWindow();
		const { params } = swiper;
		const edgeSwipeDetection = params.edgeSwipeDetection;
		const edgeSwipeThreshold = params.edgeSwipeThreshold;
		if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
			if (edgeSwipeDetection === "prevent") {
				event.preventDefault();
				return true;
			}
			return false;
		}
		return true;
	}
	function onTouchStart(event) {
		const swiper = this;
		const document = getDocument();
		let e = event;
		if (e.originalEvent) e = e.originalEvent;
		const data = swiper.touchEventsData;
		if (e.type === "pointerdown") {
			if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
			data.pointerId = e.pointerId;
		} else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
		if (e.type === "touchstart") {
			preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
			return;
		}
		const { params, touches, enabled } = swiper;
		if (!enabled) return;
		if (!params.simulateTouch && e.pointerType === "mouse") return;
		if (swiper.animating && params.preventInteractionOnTransition) return;
		if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
		let targetEl = e.target;
		if (params.touchEventsTarget === "wrapper") {
			if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
		}
		if ("which" in e && e.which === 3) return;
		if ("button" in e && e.button > 0) return;
		if (data.isTouched && data.isMoved) return;
		const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
		const eventPath = e.composedPath ? e.composedPath() : e.path;
		if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
		const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
		if (params.noSwiping && (!!(e.target && e.target.shadowRoot) ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
			swiper.allowClick = true;
			return;
		}
		if (params.swipeHandler) {
			if (!targetEl.closest(params.swipeHandler)) return;
		}
		touches.currentX = e.pageX;
		touches.currentY = e.pageY;
		const startX = touches.currentX;
		const startY = touches.currentY;
		if (!preventEdgeSwipe(swiper, e, startX)) return;
		Object.assign(data, {
			isTouched: true,
			isMoved: false,
			allowTouchCallbacks: true,
			isScrolling: void 0,
			startMoving: void 0
		});
		touches.startX = startX;
		touches.startY = startY;
		data.touchStartTime = now();
		swiper.allowClick = true;
		swiper.updateSize();
		swiper.swipeDirection = void 0;
		if (params.threshold > 0) data.allowThresholdMove = false;
		let preventDefault = true;
		if (targetEl.matches(data.focusableElements)) {
			preventDefault = false;
			if (targetEl.nodeName === "SELECT") data.isTouched = false;
		}
		if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
		if ((params.touchStartForcePreventDefault || preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
		if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
		swiper.emit("touchStart", e);
	}
	function onTouchMove(event) {
		const document = getDocument();
		const swiper = this;
		const data = swiper.touchEventsData;
		const { params, touches, rtlTranslate: rtl, enabled } = swiper;
		if (!enabled) return;
		if (!params.simulateTouch && event.pointerType === "mouse") return;
		let e = event;
		if (e.originalEvent) e = e.originalEvent;
		if (e.type === "pointermove") {
			if (data.touchId !== null) return;
			if (e.pointerId !== data.pointerId) return;
		}
		let targetTouch;
		if (e.type === "touchmove") {
			targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
			if (!targetTouch || targetTouch.identifier !== data.touchId) return;
		} else targetTouch = e;
		if (!data.isTouched) {
			if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
			return;
		}
		const pageX = targetTouch.pageX;
		const pageY = targetTouch.pageY;
		if (e.preventedByNestedSwiper) {
			touches.startX = pageX;
			touches.startY = pageY;
			return;
		}
		if (!swiper.allowTouchMove) {
			if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
			if (data.isTouched) {
				Object.assign(touches, {
					startX: pageX,
					startY: pageY,
					currentX: pageX,
					currentY: pageY
				});
				data.touchStartTime = now();
			}
			return;
		}
		if (params.touchReleaseOnEdges && !params.loop) {
			if (swiper.isVertical()) {
				if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
					data.isTouched = false;
					data.isMoved = false;
					return;
				}
			} else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) return;
			else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) return;
		}
		if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
		if (document.activeElement) {
			if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
				data.isMoved = true;
				swiper.allowClick = false;
				return;
			}
		}
		if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
		touches.previousX = touches.currentX;
		touches.previousY = touches.currentY;
		touches.currentX = pageX;
		touches.currentY = pageY;
		const diffX = touches.currentX - touches.startX;
		const diffY = touches.currentY - touches.startY;
		if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
		if (typeof data.isScrolling === "undefined") {
			let touchAngle;
			if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
			else if (diffX * diffX + diffY * diffY >= 25) {
				touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
				data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
			}
		}
		if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
		if (typeof data.startMoving === "undefined") {
			if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
		}
		if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
			data.isTouched = false;
			return;
		}
		if (!data.startMoving) return;
		swiper.allowClick = false;
		if (!params.cssMode && e.cancelable) e.preventDefault();
		if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
		let diff = swiper.isHorizontal() ? diffX : diffY;
		let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
		if (params.oneWayMovement) {
			diff = Math.abs(diff) * (rtl ? 1 : -1);
			touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
		}
		touches.diff = diff;
		diff *= params.touchRatio;
		if (rtl) {
			diff = -diff;
			touchesDiff = -touchesDiff;
		}
		const prevTouchesDirection = swiper.touchesDirection;
		swiper.swipeDirection = diff > 0 ? "prev" : "next";
		swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
		const isLoop = swiper.params.loop && !params.cssMode;
		const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
		if (!data.isMoved) {
			if (isLoop && allowLoopFix) swiper.loopFix({ direction: swiper.swipeDirection });
			data.startTranslate = swiper.getTranslate();
			swiper.setTransition(0);
			if (swiper.animating) {
				const evt = new window.CustomEvent("transitionend", {
					bubbles: true,
					cancelable: true,
					detail: { bySwiperTouchMove: true }
				});
				swiper.wrapperEl.dispatchEvent(evt);
			}
			data.allowMomentumBounce = false;
			if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
			swiper.emit("sliderFirstMove", e);
		}
		(/* @__PURE__ */ new Date()).getTime();
		if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
			Object.assign(touches, {
				startX: pageX,
				startY: pageY,
				currentX: pageX,
				currentY: pageY,
				startTranslate: data.currentTranslate
			});
			data.loopSwapReset = true;
			data.startTranslate = data.currentTranslate;
			return;
		}
		swiper.emit("sliderMove", e);
		data.isMoved = true;
		data.currentTranslate = diff + data.startTranslate;
		let disableParentSwiper = true;
		let resistanceRatio = params.resistanceRatio;
		if (params.touchReleaseOnEdges) resistanceRatio = 0;
		if (diff > 0) {
			if (isLoop && allowLoopFix && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
				direction: "prev",
				setTranslate: true,
				activeSlideIndex: 0
			});
			if (data.currentTranslate > swiper.minTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
			}
		} else if (diff < 0) {
			if (isLoop && allowLoopFix && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
				direction: "next",
				setTranslate: true,
				activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
			});
			if (data.currentTranslate < swiper.maxTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
			}
		}
		if (disableParentSwiper) e.preventedByNestedSwiper = true;
		if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
		if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
		if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
		if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
			if (!data.allowThresholdMove) {
				data.allowThresholdMove = true;
				touches.startX = touches.currentX;
				touches.startY = touches.currentY;
				data.currentTranslate = data.startTranslate;
				touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
				return;
			}
		} else {
			data.currentTranslate = data.startTranslate;
			return;
		}
		if (!params.followFinger || params.cssMode) return;
		if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}
		if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
		swiper.updateProgress(data.currentTranslate);
		swiper.setTranslate(data.currentTranslate);
	}
	function onTouchEnd(event) {
		const swiper = this;
		const data = swiper.touchEventsData;
		let e = event;
		if (e.originalEvent) e = e.originalEvent;
		let targetTouch;
		if (!(e.type === "touchend" || e.type === "touchcancel")) {
			if (data.touchId !== null) return;
			if (e.pointerId !== data.pointerId) return;
			targetTouch = e;
		} else {
			targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
			if (!targetTouch || targetTouch.identifier !== data.touchId) return;
		}
		if ([
			"pointercancel",
			"pointerout",
			"pointerleave",
			"contextmenu"
		].includes(e.type)) {
			if (!(["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView))) return;
		}
		data.pointerId = null;
		data.touchId = null;
		const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
		if (!enabled) return;
		if (!params.simulateTouch && e.pointerType === "mouse") return;
		if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
		data.allowTouchCallbacks = false;
		if (!data.isTouched) {
			if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
			data.isMoved = false;
			data.startMoving = false;
			return;
		}
		if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
		const touchEndTime = now();
		const timeDiff = touchEndTime - data.touchStartTime;
		if (swiper.allowClick) {
			const pathTree = e.path || e.composedPath && e.composedPath();
			swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
			swiper.emit("tap click", e);
			if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
		}
		data.lastClickTime = now();
		nextTick(() => {
			if (!swiper.destroyed) swiper.allowClick = true;
		});
		if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
			data.isTouched = false;
			data.isMoved = false;
			data.startMoving = false;
			return;
		}
		data.isTouched = false;
		data.isMoved = false;
		data.startMoving = false;
		let currentPos;
		if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
		else currentPos = -data.currentTranslate;
		if (params.cssMode) return;
		if (params.freeMode && params.freeMode.enabled) {
			swiper.freeMode.onTouchEnd({ currentPos });
			return;
		}
		const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
		let stopIndex = 0;
		let groupSize = swiper.slidesSizesGrid[0];
		for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
			const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
			if (typeof slidesGrid[i + increment] !== "undefined") {
				if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
					stopIndex = i;
					groupSize = slidesGrid[i + increment] - slidesGrid[i];
				}
			} else if (swipeToLast || currentPos >= slidesGrid[i]) {
				stopIndex = i;
				groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
			}
		}
		let rewindFirstIndex = null;
		let rewindLastIndex = null;
		if (params.rewind) {
			if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
			else if (swiper.isEnd) rewindFirstIndex = 0;
		}
		const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
		const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
		if (timeDiff > params.longSwipesMs) {
			if (!params.longSwipes) {
				swiper.slideTo(swiper.activeIndex);
				return;
			}
			if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
			else swiper.slideTo(stopIndex);
			if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
			else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
			else swiper.slideTo(stopIndex);
		} else {
			if (!params.shortSwipes) {
				swiper.slideTo(swiper.activeIndex);
				return;
			}
			if (!(swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl))) {
				if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
				if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
			} else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
			else swiper.slideTo(stopIndex);
		}
	}
	function onResize() {
		const swiper = this;
		const { params, el } = swiper;
		if (el && el.offsetWidth === 0) return;
		if (params.breakpoints) swiper.setBreakpoint();
		const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
		const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
		swiper.allowSlideNext = true;
		swiper.allowSlidePrev = true;
		swiper.updateSize();
		swiper.updateSlides();
		swiper.updateSlidesClasses();
		if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !(isVirtual && params.loop)) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
		else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
		else swiper.slideTo(swiper.activeIndex, 0, false, true);
		if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
			clearTimeout(swiper.autoplay.resizeTimeout);
			swiper.autoplay.resizeTimeout = setTimeout(() => {
				if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
			}, 500);
		}
		swiper.allowSlidePrev = allowSlidePrev;
		swiper.allowSlideNext = allowSlideNext;
		if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
	}
	function onClick(e) {
		const swiper = this;
		if (!swiper.enabled) return;
		if (!swiper.allowClick) {
			if (swiper.params.preventClicks) e.preventDefault();
			if (swiper.params.preventClicksPropagation && swiper.animating) {
				e.stopPropagation();
				e.stopImmediatePropagation();
			}
		}
	}
	function onScroll() {
		const swiper = this;
		const { wrapperEl, rtlTranslate, enabled } = swiper;
		if (!enabled) return;
		swiper.previousTranslate = swiper.translate;
		if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
		else swiper.translate = -wrapperEl.scrollTop;
		if (swiper.translate === 0) swiper.translate = 0;
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
		let newProgress;
		const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
		if (translatesDiff === 0) newProgress = 0;
		else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
		if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
		swiper.emit("setTranslate", swiper.translate, false);
	}
	function onLoad(e) {
		const swiper = this;
		processLazyPreloader(swiper, e.target);
		if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
		swiper.update();
	}
	function onDocumentTouchStart() {
		const swiper = this;
		if (swiper.documentTouchHandlerProceeded) return;
		swiper.documentTouchHandlerProceeded = true;
		if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
	}
	var events = (swiper, method) => {
		const document = getDocument();
		const { params, el, wrapperEl, device } = swiper;
		const capture = !!params.nested;
		const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
		const swiperMethod = method;
		if (!el || typeof el === "string") return;
		document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
			passive: false,
			capture
		});
		el[domMethod]("touchstart", swiper.onTouchStart, { passive: false });
		el[domMethod]("pointerdown", swiper.onTouchStart, { passive: false });
		document[domMethod]("touchmove", swiper.onTouchMove, {
			passive: false,
			capture
		});
		document[domMethod]("pointermove", swiper.onTouchMove, {
			passive: false,
			capture
		});
		document[domMethod]("touchend", swiper.onTouchEnd, { passive: true });
		document[domMethod]("pointerup", swiper.onTouchEnd, { passive: true });
		document[domMethod]("pointercancel", swiper.onTouchEnd, { passive: true });
		document[domMethod]("touchcancel", swiper.onTouchEnd, { passive: true });
		document[domMethod]("pointerout", swiper.onTouchEnd, { passive: true });
		document[domMethod]("pointerleave", swiper.onTouchEnd, { passive: true });
		document[domMethod]("contextmenu", swiper.onTouchEnd, { passive: true });
		if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
		if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
		if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
		else swiper[swiperMethod]("observerUpdate", onResize, true);
		el[domMethod]("load", swiper.onLoad, { capture: true });
	};
	function attachEvents() {
		const swiper = this;
		const { params } = swiper;
		swiper.onTouchStart = onTouchStart.bind(swiper);
		swiper.onTouchMove = onTouchMove.bind(swiper);
		swiper.onTouchEnd = onTouchEnd.bind(swiper);
		swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
		if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
		swiper.onClick = onClick.bind(swiper);
		swiper.onLoad = onLoad.bind(swiper);
		events(swiper, "on");
	}
	function detachEvents() {
		const swiper = this;
		events(swiper, "off");
	}
	var events$1 = {
		attachEvents,
		detachEvents
	};
	var isGridEnabled = (swiper, params) => {
		return swiper.grid && params.grid && params.grid.rows > 1;
	};
	function setBreakpoint() {
		const swiper = this;
		const { realIndex, initialized, params, el } = swiper;
		const breakpoints = params.breakpoints;
		if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
		const document = getDocument();
		const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
		const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
		const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
		if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
		const breakpointParams = (breakpoint in breakpoints ? breakpoints[breakpoint] : void 0) || swiper.originalParams;
		const wasMultiRow = isGridEnabled(swiper, params);
		const isMultiRow = isGridEnabled(swiper, breakpointParams);
		const wasGrabCursor = swiper.params.grabCursor;
		const isGrabCursor = breakpointParams.grabCursor;
		const wasEnabled = params.enabled;
		if (wasMultiRow && !isMultiRow) {
			el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
			swiper.emitContainerClasses();
		} else if (!wasMultiRow && isMultiRow) {
			el.classList.add(`${params.containerModifierClass}grid`);
			if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
			swiper.emitContainerClasses();
		}
		if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor();
		else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
		[
			"navigation",
			"pagination",
			"scrollbar"
		].forEach((prop) => {
			if (typeof breakpointParams[prop] === "undefined") return;
			const wasModuleEnabled = params[prop] && params[prop].enabled;
			const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
			if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
			if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
		});
		const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
		const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
		const wasLoop = params.loop;
		if (directionChanged && initialized) swiper.changeDirection();
		extend(swiper.params, breakpointParams);
		const isEnabled = swiper.params.enabled;
		const hasLoop = swiper.params.loop;
		Object.assign(swiper, {
			allowTouchMove: swiper.params.allowTouchMove,
			allowSlideNext: swiper.params.allowSlideNext,
			allowSlidePrev: swiper.params.allowSlidePrev
		});
		if (wasEnabled && !isEnabled) swiper.disable();
		else if (!wasEnabled && isEnabled) swiper.enable();
		swiper.currentBreakpoint = breakpoint;
		swiper.emit("_beforeBreakpoint", breakpointParams);
		if (initialized) {
			if (needsReLoop) {
				swiper.loopDestroy();
				swiper.loopCreate(realIndex);
				swiper.updateSlides();
			} else if (!wasLoop && hasLoop) {
				swiper.loopCreate(realIndex);
				swiper.updateSlides();
			} else if (wasLoop && !hasLoop) swiper.loopDestroy();
		}
		swiper.emit("breakpoint", breakpointParams);
	}
	function getBreakpoint(breakpoints, base, containerEl) {
		if (base === void 0) base = "window";
		if (!breakpoints || base === "container" && !containerEl) return void 0;
		let breakpoint = false;
		const window = getWindow();
		const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
		const points = Object.keys(breakpoints).map((point) => {
			if (typeof point === "string" && point.indexOf("@") === 0) {
				const minRatio = parseFloat(point.substr(1));
				return {
					value: currentHeight * minRatio,
					point
				};
			}
			return {
				value: point,
				point
			};
		});
		points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
		for (let i = 0; i < points.length; i += 1) {
			const { point, value } = points[i];
			if (base === "window") {
				if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
			} else if (value <= containerEl.clientWidth) breakpoint = point;
		}
		return breakpoint || "max";
	}
	var breakpoints = {
		setBreakpoint,
		getBreakpoint
	};
	function prepareClasses(entries, prefix) {
		const resultClasses = [];
		entries.forEach((item) => {
			if (typeof item === "object") Object.keys(item).forEach((classNames) => {
				if (item[classNames]) resultClasses.push(prefix + classNames);
			});
			else if (typeof item === "string") resultClasses.push(prefix + item);
		});
		return resultClasses;
	}
	function addClasses() {
		const swiper = this;
		const { classNames, params, rtl, el, device } = swiper;
		const suffixes = prepareClasses([
			"initialized",
			params.direction,
			{ "free-mode": swiper.params.freeMode && params.freeMode.enabled },
			{ "autoheight": params.autoHeight },
			{ "rtl": rtl },
			{ "grid": params.grid && params.grid.rows > 1 },
			{ "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column" },
			{ "android": device.android },
			{ "ios": device.ios },
			{ "css-mode": params.cssMode },
			{ "centered": params.cssMode && params.centeredSlides },
			{ "watch-progress": params.watchSlidesProgress }
		], params.containerModifierClass);
		classNames.push(...suffixes);
		el.classList.add(...classNames);
		swiper.emitContainerClasses();
	}
	function removeClasses() {
		const swiper = this;
		const { el, classNames } = swiper;
		if (!el || typeof el === "string") return;
		el.classList.remove(...classNames);
		swiper.emitContainerClasses();
	}
	var classes = {
		addClasses,
		removeClasses
	};
	function checkOverflow() {
		const swiper = this;
		const { isLocked: wasLocked, params } = swiper;
		const { slidesOffsetBefore } = params;
		if (slidesOffsetBefore) {
			const lastSlideIndex = swiper.slides.length - 1;
			const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
			swiper.isLocked = swiper.size > lastSlideRightEdge;
		} else swiper.isLocked = swiper.snapGrid.length === 1;
		if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
		if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
		if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
		if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
	}
	var checkOverflow$1 = { checkOverflow };
	var defaults = {
		init: true,
		direction: "horizontal",
		oneWayMovement: false,
		swiperElementNodeName: "SWIPER-CONTAINER",
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: false,
		updateOnWindowResize: true,
		resizeObserver: true,
		nested: false,
		createElements: false,
		eventsPrefix: "swiper",
		enabled: true,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: false,
		userAgent: null,
		url: null,
		edgeSwipeDetection: false,
		edgeSwipeThreshold: 20,
		autoHeight: false,
		setWrapperSize: false,
		virtualTranslate: false,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: false,
		centeredSlides: false,
		centeredSlidesBounds: false,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: true,
		centerInsufficientSlides: false,
		watchOverflow: true,
		roundLengths: false,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: true,
		shortSwipes: true,
		longSwipes: true,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: true,
		allowTouchMove: true,
		threshold: 5,
		touchMoveStopPropagation: false,
		touchStartPreventDefault: true,
		touchStartForcePreventDefault: false,
		touchReleaseOnEdges: false,
		uniqueNavElements: true,
		resistance: true,
		resistanceRatio: .85,
		watchSlidesProgress: false,
		grabCursor: false,
		preventClicks: true,
		preventClicksPropagation: true,
		slideToClickedSlide: false,
		loop: false,
		loopAddBlankSlides: true,
		loopAdditionalSlides: 0,
		loopPreventsSliding: true,
		rewind: false,
		allowSlidePrev: true,
		allowSlideNext: true,
		swipeHandler: null,
		noSwiping: true,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: true,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: true,
		_emitClasses: false
	};
	function moduleExtendParams(params, allModulesParams) {
		return function extendParams(obj) {
			if (obj === void 0) obj = {};
			const moduleParamName = Object.keys(obj)[0];
			const moduleParams = obj[moduleParamName];
			if (typeof moduleParams !== "object" || moduleParams === null) {
				extend(allModulesParams, obj);
				return;
			}
			if (params[moduleParamName] === true) params[moduleParamName] = { enabled: true };
			if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
			if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
			if (!(moduleParamName in params && "enabled" in moduleParams)) {
				extend(allModulesParams, obj);
				return;
			}
			if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
			if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
			extend(allModulesParams, obj);
		};
	}
	var prototypes = {
		eventsEmitter,
		update,
		translate,
		transition,
		slide,
		loop,
		grabCursor,
		events: events$1,
		breakpoints,
		checkOverflow: checkOverflow$1,
		classes
	};
	var extendedDefaults = {};
	var Swiper = class Swiper {
		constructor() {
			let el;
			let params;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
			else [el, params] = args;
			if (!params) params = {};
			params = extend({}, params);
			if (el && !params.el) params.el = el;
			const document = getDocument();
			if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
				const swipers = [];
				document.querySelectorAll(params.el).forEach((containerEl) => {
					const newParams = extend({}, params, { el: containerEl });
					swipers.push(new Swiper(newParams));
				});
				return swipers;
			}
			const swiper = this;
			swiper.__swiper__ = true;
			swiper.support = getSupport();
			swiper.device = getDevice({ userAgent: params.userAgent });
			swiper.browser = getBrowser();
			swiper.eventsListeners = {};
			swiper.eventsAnyListeners = [];
			swiper.modules = [...swiper.__modules__];
			if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
			const allModulesParams = {};
			swiper.modules.forEach((mod) => {
				mod({
					params,
					swiper,
					extendParams: moduleExtendParams(params, allModulesParams),
					on: swiper.on.bind(swiper),
					once: swiper.once.bind(swiper),
					off: swiper.off.bind(swiper),
					emit: swiper.emit.bind(swiper)
				});
			});
			swiper.params = extend({}, extend({}, defaults, allModulesParams), extendedDefaults, params);
			swiper.originalParams = extend({}, swiper.params);
			swiper.passedParams = extend({}, params);
			if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName) => {
				swiper.on(eventName, swiper.params.on[eventName]);
			});
			if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
			Object.assign(swiper, {
				enabled: swiper.params.enabled,
				el,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return swiper.params.direction === "horizontal";
				},
				isVertical() {
					return swiper.params.direction === "vertical";
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: true,
				isEnd: false,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: false,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
				},
				allowSlideNext: swiper.params.allowSlideNext,
				allowSlidePrev: swiper.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: swiper.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null
				},
				allowClick: true,
				allowTouchMove: swiper.params.allowTouchMove,
				touches: {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				},
				imagesToLoad: [],
				imagesLoaded: 0
			});
			swiper.emit("_swiper");
			if (swiper.params.init) swiper.init();
			return swiper;
		}
		getDirectionLabel(property) {
			if (this.isHorizontal()) return property;
			return {
				"width": "height",
				"margin-top": "margin-left",
				"margin-bottom ": "margin-right",
				"margin-left": "margin-top",
				"margin-right": "margin-bottom",
				"padding-left": "padding-top",
				"padding-right": "padding-bottom",
				"marginRight": "marginBottom"
			}[property];
		}
		getSlideIndex(slideEl) {
			const { slidesEl, params } = this;
			const firstSlideIndex = elementIndex(elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`)[0]);
			return elementIndex(slideEl) - firstSlideIndex;
		}
		getSlideIndexByData(index) {
			return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
		}
		getSlideIndexWhenGrid(index) {
			if (this.grid && this.params.grid && this.params.grid.rows > 1) {
				if (this.params.grid.fill === "column") index = Math.floor(index / this.params.grid.rows);
				else if (this.params.grid.fill === "row") index = index % Math.ceil(this.slides.length / this.params.grid.rows);
			}
			return index;
		}
		recalcSlides() {
			const swiper = this;
			const { slidesEl, params } = swiper;
			swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
		}
		enable() {
			const swiper = this;
			if (swiper.enabled) return;
			swiper.enabled = true;
			if (swiper.params.grabCursor) swiper.setGrabCursor();
			swiper.emit("enable");
		}
		disable() {
			const swiper = this;
			if (!swiper.enabled) return;
			swiper.enabled = false;
			if (swiper.params.grabCursor) swiper.unsetGrabCursor();
			swiper.emit("disable");
		}
		setProgress(progress, speed) {
			const swiper = this;
			progress = Math.min(Math.max(progress, 0), 1);
			const min = swiper.minTranslate();
			const current = (swiper.maxTranslate() - min) * progress + min;
			swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}
		emitContainerClasses() {
			const swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			const cls = swiper.el.className.split(" ").filter((className) => {
				return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
			});
			swiper.emit("_containerClasses", cls.join(" "));
		}
		getSlideClasses(slideEl) {
			const swiper = this;
			if (swiper.destroyed) return "";
			return slideEl.className.split(" ").filter((className) => {
				return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
			}).join(" ");
		}
		emitSlidesClasses() {
			const swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			const updates = [];
			swiper.slides.forEach((slideEl) => {
				const classNames = swiper.getSlideClasses(slideEl);
				updates.push({
					slideEl,
					classNames
				});
				swiper.emit("_slideClass", slideEl, classNames);
			});
			swiper.emit("_slideClasses", updates);
		}
		slidesPerViewDynamic(view, exact) {
			if (view === void 0) view = "current";
			if (exact === void 0) exact = false;
			const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = this;
			let spv = 1;
			if (typeof params.slidesPerView === "number") return params.slidesPerView;
			if (params.centeredSlides) {
				let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
				let breakLoop;
				for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
					slideSize += Math.ceil(slides[i].swiperSlideSize);
					spv += 1;
					if (slideSize > swiperSize) breakLoop = true;
				}
				for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
					slideSize += slides[i].swiperSlideSize;
					spv += 1;
					if (slideSize > swiperSize) breakLoop = true;
				}
			} else if (view === "current") {
				for (let i = activeIndex + 1; i < slides.length; i += 1) if (exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) spv += 1;
			} else for (let i = activeIndex - 1; i >= 0; i -= 1) if (slidesGrid[activeIndex] - slidesGrid[i] < swiperSize) spv += 1;
			return spv;
		}
		update() {
			const swiper = this;
			if (!swiper || swiper.destroyed) return;
			const { snapGrid, params } = swiper;
			if (params.breakpoints) swiper.setBreakpoint();
			[...swiper.el.querySelectorAll("[loading=\"lazy\"]")].forEach((imageEl) => {
				if (imageEl.complete) processLazyPreloader(swiper, imageEl);
			});
			swiper.updateSize();
			swiper.updateSlides();
			swiper.updateProgress();
			swiper.updateSlidesClasses();
			function setTranslate() {
				const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
				const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
				swiper.setTranslate(newTranslate);
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			}
			let translated;
			if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
				setTranslate();
				if (params.autoHeight) swiper.updateAutoHeight();
			} else {
				if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) translated = swiper.slideTo((swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides).length - 1, 0, false, true);
				else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
				if (!translated) setTranslate();
			}
			if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
			swiper.emit("update");
		}
		changeDirection(newDirection, needUpdate) {
			if (needUpdate === void 0) needUpdate = true;
			const swiper = this;
			const currentDirection = swiper.params.direction;
			if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
			if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
			swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
			swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
			swiper.emitContainerClasses();
			swiper.params.direction = newDirection;
			swiper.slides.forEach((slideEl) => {
				if (newDirection === "vertical") slideEl.style.width = "";
				else slideEl.style.height = "";
			});
			swiper.emit("changeDirection");
			if (needUpdate) swiper.update();
			return swiper;
		}
		changeLanguageDirection(direction) {
			const swiper = this;
			if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
			swiper.rtl = direction === "rtl";
			swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
			if (swiper.rtl) {
				swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
				swiper.el.dir = "rtl";
			} else {
				swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
				swiper.el.dir = "ltr";
			}
			swiper.update();
		}
		mount(element) {
			const swiper = this;
			if (swiper.mounted) return true;
			let el = element || swiper.params.el;
			if (typeof el === "string") el = document.querySelector(el);
			if (!el) return false;
			el.swiper = swiper;
			if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
			const getWrapperSelector = () => {
				return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
			};
			const getWrapper = () => {
				if (el && el.shadowRoot && el.shadowRoot.querySelector) return el.shadowRoot.querySelector(getWrapperSelector());
				return elementChildren(el, getWrapperSelector())[0];
			};
			let wrapperEl = getWrapper();
			if (!wrapperEl && swiper.params.createElements) {
				wrapperEl = createElement("div", swiper.params.wrapperClass);
				el.append(wrapperEl);
				elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
					wrapperEl.append(slideEl);
				});
			}
			Object.assign(swiper, {
				el,
				wrapperEl,
				slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
				hostEl: swiper.isElement ? el.parentNode.host : el,
				mounted: true,
				rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
				rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
				wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
			});
			return true;
		}
		init(el) {
			const swiper = this;
			if (swiper.initialized) return swiper;
			if (swiper.mount(el) === false) return swiper;
			swiper.emit("beforeInit");
			if (swiper.params.breakpoints) swiper.setBreakpoint();
			swiper.addClasses();
			swiper.updateSize();
			swiper.updateSlides();
			if (swiper.params.watchOverflow) swiper.checkOverflow();
			if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
			if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
			else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
			if (swiper.params.loop) swiper.loopCreate(void 0, true);
			swiper.attachEvents();
			const lazyElements = [...swiper.el.querySelectorAll("[loading=\"lazy\"]")];
			if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll("[loading=\"lazy\"]"));
			lazyElements.forEach((imageEl) => {
				if (imageEl.complete) processLazyPreloader(swiper, imageEl);
				else imageEl.addEventListener("load", (e) => {
					processLazyPreloader(swiper, e.target);
				});
			});
			preload(swiper);
			swiper.initialized = true;
			preload(swiper);
			swiper.emit("init");
			swiper.emit("afterInit");
			return swiper;
		}
		destroy(deleteInstance, cleanStyles) {
			if (deleteInstance === void 0) deleteInstance = true;
			if (cleanStyles === void 0) cleanStyles = true;
			const swiper = this;
			const { params, el, wrapperEl, slides } = swiper;
			if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
			swiper.emit("beforeDestroy");
			swiper.initialized = false;
			swiper.detachEvents();
			if (params.loop) swiper.loopDestroy();
			if (cleanStyles) {
				swiper.removeClasses();
				if (el && typeof el !== "string") el.removeAttribute("style");
				if (wrapperEl) wrapperEl.removeAttribute("style");
				if (slides && slides.length) slides.forEach((slideEl) => {
					slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
					slideEl.removeAttribute("style");
					slideEl.removeAttribute("data-swiper-slide-index");
				});
			}
			swiper.emit("destroy");
			Object.keys(swiper.eventsListeners).forEach((eventName) => {
				swiper.off(eventName);
			});
			if (deleteInstance !== false) {
				if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
				deleteProps(swiper);
			}
			swiper.destroyed = true;
			return null;
		}
		static extendDefaults(newDefaults) {
			extend(extendedDefaults, newDefaults);
		}
		static get extendedDefaults() {
			return extendedDefaults;
		}
		static get defaults() {
			return defaults;
		}
		static installModule(mod) {
			if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
			const modules = Swiper.prototype.__modules__;
			if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
		}
		static use(module) {
			if (Array.isArray(module)) {
				module.forEach((m) => Swiper.installModule(m));
				return Swiper;
			}
			Swiper.installModule(module);
			return Swiper;
		}
	};
	Object.keys(prototypes).forEach((prototypeGroup) => {
		Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
			Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
		});
	});
	Swiper.use([Resize, Observer]);

//#endregion
//#region src/icons/reels-play.svg?raw
	var reels_play_default = "<svg viewBox=\"0 0 44 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M29.3666 23.7687L19.7082 29.4179C18.3749 30.1977 16.6985 29.2361 16.6985 27.6915V16.3286C16.6985 14.7796 18.3836 13.8186 19.7168 14.6073L29.3752 20.3209C30.6879 21.0975 30.6832 22.9986 29.3666 23.7687Z\" fill=\"#191919\"/>\n</svg>\n";

//#endregion
//#region src/icons/reels-arrow.svg?raw
	var reels_arrow_default = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 12H19\" stroke=\"#191919\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M5 12L9 16\" stroke=\"#191919\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M5 12L9 8\" stroke=\"#191919\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n";

//#endregion
//#region src/components/reels.tsx
	var DIR = "https://conversionrate-store.github.io/a-b_images/petalsandkeepsakes/reels_v2";
	var ORDER = [
		1,
		2,
		3,
		4
	];
	if (window.innerWidth > 768) ORDER = [
		2,
		3,
		4,
		1
	];
	var COUNT = ORDER.length;
	var SLIDES = Math.max(COUNT, Math.ceil(9 / COUNT) * COUNT);
	var EXPAND_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 4H4v5M20 9V4h-5M15 20h5v-5M4 15v5h5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /></svg>";
	var CLOSE_ICON = "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M1 1 13 13M13 1 1 13\" stroke=\"currentColor\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" /></svg>";
	var CHEVRON_ICON = "<svg viewBox=\"0 0 28 49\" fill=\"none\" aria-hidden=\"true\"><path d=\"M25.83 1.41 2.83 24.41l23 23\" stroke=\"currentColor\" stroke-width=\"4\" fill=\"none\" /></svg>";
	var Icon = (svg, cls, namespace = false) => {
		const el = document.createElement("span");
		el.className = cls;
		el.setAttribute("aria-hidden", "true");
		el.innerHTML = namespace ? inlineSvg(svg) : svg;
		return el;
	};
	var programmatic = /* @__PURE__ */ new WeakSet();
	var startVideo = (el) => {
		programmatic.add(el);
		el.play().catch(() => {}).finally(() => programmatic.delete(el));
	};
	var stopVideo = (el) => {
		if (el.paused) return;
		programmatic.add(el);
		el.pause();
	};
	var reset = (slide) => {
		const el = slide.querySelector("video");
		stopVideo(el);
		el.currentTime = 0;
		el.removeAttribute("controls");
		slide.classList.remove("is-playing");
	};
	var playing = (root) => Array.from(root.querySelectorAll(".crs-reel.is-playing"));
	var Reels = () => {
		const Slide = (id, position) => {
			const slide = /* @__PURE__ */ jsxs("div", {
				class: "swiper-slide crs-reel",
				"data-index": String(id),
				"data-position": String(position),
				children: [
					/* @__PURE__ */ jsxs("picture", {
						class: "crs-reel__poster",
						children: [/* @__PURE__ */ jsx("source", {
							srcset: `${DIR}/preview_${id}.avif`,
							type: "image/avif"
						}), /* @__PURE__ */ jsx("img", {
							src: `${DIR}/preview_${id}.gif`,
							alt: "",
							loading: "lazy"
						})]
					}),
					/* @__PURE__ */ jsx("video", {
						preload: "metadata",
						playsinline: true,
						controlsList: `nodownload noremoteplayback noplaybackrate${window.innerWidth > 767 ? " nofullscreen" : ""}`,
						disablePictureInPicture: true,
						children: /* @__PURE__ */ jsx("source", {
							src: `${DIR}/video_${id}.mp4`,
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						class: "crs-reel__play",
						type: "button",
						"aria-label": `Play reel ${position}`
					}),
					/* @__PURE__ */ jsx("button", {
						class: "crs-reel__expand",
						type: "button",
						"aria-label": `Watch reel ${position} full size`
					})
				]
			});
			slide.querySelector(".crs-reel__play").append(Icon(reels_play_default, "crs-reel__play-icon", true));
			slide.querySelector(".crs-reel__expand").innerHTML = EXPAND_ICON;
			const el = slide.querySelector("video");
			el.addEventListener("play", () => {
				if (programmatic.has(el)) return;
				pushData("exp_reels_play", `Play Video - ${position}`, "click", "reels section");
			});
			el.addEventListener("pause", () => {
				if (programmatic.has(el)) {
					programmatic.delete(el);
					return;
				}
				if (el.ended) return;
				pushData("exp_reels_pause", `Pause Video - ${position}`, "click", "reels section");
			});
			return slide;
		};
		const list = /* @__PURE__ */ jsx("div", { class: "swiper-wrapper crs-pdp-reels__list" });
		for (let i = 0; i < SLIDES; i++) {
			const at = i % COUNT;
			list.append(Slide(ORDER[at], at + 1));
		}
		const strip = /* @__PURE__ */ jsx("div", {
			class: "swiper crs-pdp-reels__strip",
			role: "group",
			"aria-label": "Customer reels",
			children: list
		});
		const dots = /* @__PURE__ */ jsx("div", { class: "crs-pdp-reels__dots" });
		const prev = /* @__PURE__ */ jsx("button", {
			class: "crs-pdp-reels__arrow crs-pdp-reels__arrow--prev",
			type: "button",
			"aria-label": "Previous reel"
		});
		const next = /* @__PURE__ */ jsx("button", {
			class: "crs-pdp-reels__arrow crs-pdp-reels__arrow--next",
			type: "button",
			"aria-label": "Next reel"
		});
		prev.append(Icon(reels_arrow_default, "crs-pdp-reels__arrow-icon", true));
		next.append(Icon(reels_arrow_default, "crs-pdp-reels__arrow-icon", true));
		const root = /* @__PURE__ */ jsxs("section", {
			class: "crs-pdp-reels",
			children: [
				/* @__PURE__ */ jsxs("div", {
					class: "crs-pdp-reels__head",
					children: [/* @__PURE__ */ jsx("h2", {
						class: "crs-pdp-reels__title",
						children: "Trusted by 25,000+ families to keep their loved ones close"
					}), /* @__PURE__ */ jsx("p", {
						class: "crs-pdp-reels__subtitle",
						children: "Real stories from people who carry someone they love — every single day"
					})]
				}),
				strip,
				/* @__PURE__ */ jsxs("div", {
					class: "crs-pdp-reels__nav",
					children: [
						prev,
						dots,
						next
					]
				})
			]
		});
		const stopAll = () => playing(list).forEach(reset);
		const activePosition = () => list.querySelector(".crs-reel.swiper-slide-active")?.dataset.position ?? "";
		waitEl(".crs-pdp-reels__strip .crs-reel__poster").then(() => {
			visibilityOfTime(".crs-pdp-reels", "exp_reels_visibility", "reels section", "Reels", 3e3, .3);
			const swiper = new Swiper(strip, {
				loop: true,
				slidesPerView: "auto",
				spaceBetween: 8,
				centeredSlides: true,
				initialSlide: 0,
				watchSlidesProgress: true,
				longSwipesRatio: .1,
				freeMode: false,
				shortSwipes: true
			});
			const handOff = () => list.querySelectorAll(".crs-reel.is-playing:not(.swiper-slide-visible)").forEach((slide) => {
				const el = slide.querySelector("video");
				const at = el.currentTime;
				const wasPaused = el.paused;
				const twin = list.querySelector(`.crs-reel[data-index="${slide.dataset.index}"].swiper-slide-visible`);
				if (twin) {
					const heir = twin.querySelector("video");
					twin.classList.add("is-playing");
					if (window.innerWidth > 767) heir.setAttribute("controls", "controls");
					heir.currentTime = at;
					if (!wasPaused) startVideo(heir);
				}
				reset(slide);
			});
			ORDER.forEach((_, i) => {
				const dot = /* @__PURE__ */ jsx("button", {
					class: "crs-pdp-reels__dot",
					type: "button",
					"aria-label": `Go to reel ${i + 1}`
				});
				if (i === 0) dot.classList.add("is-active");
				dot.addEventListener("click", () => {
					swiper.slideToLoop(i);
					requestAnimationFrame(() => pushData("exp_reels_pagination", `Pagination - ${activePosition()}`, "click", "reels section"));
				});
				dots.append(dot);
			});
			swiper.on("sliderMove", handOff);
			swiper.on("slideChangeTransitionEnd", handOff);
			swiper.on("slideChange", () => {
				const at = swiper.realIndex % COUNT;
				dots.querySelectorAll(".crs-pdp-reels__dot").forEach((el, i) => el.classList.toggle("is-active", i === at));
				stopAll();
			});
			prev.addEventListener("click", () => {
				swiper.slidePrev();
				requestAnimationFrame(() => pushData("exp_reels_nav_arrow", `Arrow Left - ${activePosition()}`, "click", "reels section"));
			});
			next.addEventListener("click", () => {
				swiper.slideNext();
				requestAnimationFrame(() => pushData("exp_reels_nav_arrow", `Arrow Right - ${activePosition()}`, "click", "reels section"));
			});
			let from = null;
			swiper.on("touchStart", () => from = swiper.realIndex);
			swiper.on("touchEnd", () => {
				if (from === null) return;
				const was = from;
				from = null;
				requestAnimationFrame(() => {
					const now = swiper.realIndex;
					if (now === was) return;
					pushData("exp_reels_swipe", `Swipe - ${activePosition()}`, "other", "reels section");
					if (window.innerWidth > 767) return;
					const total = list.children.length;
					let delta = ((now - was) % total + total) % total;
					if (delta > total / 2) delta -= total;
					if (Math.abs(delta) <= 1) return;
					swiper.slideToLoop(((was + Math.sign(delta)) % total + total) % total);
				});
			});
		});
		list.addEventListener("click", (e) => {
			const target = e.target;
			const expand = target.closest(".crs-reel__expand");
			if (expand) {
				const slide = expand.closest(".crs-reel");
				const el = slide.querySelector("video");
				pushData("exp_reels_fullscreen", "Fullscreen", "click", "reels section");
				openLightbox(Number(slide.dataset.index), el.currentTime);
				return;
			}
			const video = target.closest("video");
			if (video) {
				if (video.paused) return;
				const slide = video.closest(".crs-reel");
				pushData("exp_reels_pause", `Pause Video - ${slide.dataset.position}`, "click", "reels section");
				reset(slide);
				return;
			}
			if (!target.closest(".crs-reel__poster") && !target.closest(".crs-reel__play")) return;
			const slide = target.closest(".crs-reel");
			const el = slide.querySelector("video");
			playing(list).forEach((other) => other !== slide && reset(other));
			if (el.paused) el.currentTime = 0;
			pushData("exp_reels_play", `Play Video - ${slide.dataset.position}`, "click", "reels section");
			slide.classList.add("is-playing");
			if (window.innerWidth > 767) el.setAttribute("controls", "controls");
			startVideo(el);
		});
		list.addEventListener("ended", (e) => {
			const el = e.target;
			if (el.tagName === "VIDEO") reset(el.closest(".crs-reel"));
		}, true);
		new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting || stopAll()), { threshold: 0 }).observe(strip);
		waitEl("cart-drawer").then((drawer) => {
			let open = drawer.classList.contains("active");
			new MutationObserver(() => {
				const now = drawer.classList.contains("active");
				if (now && !open) stopAll();
				open = now;
			}).observe(drawer, {
				attributes: true,
				attributeFilter: ["class"]
			});
		});
		return root;
	};
	var lightbox = null;
	var buildLightbox = () => {
		let id = ORDER[0];
		const el = /* @__PURE__ */ jsx("video", {
			controls: true,
			playsinline: true,
			preload: "metadata",
			controlsList: "nodownload noremoteplayback noplaybackrate nofullscreen",
			disablePictureInPicture: true
		});
		const spinner = /* @__PURE__ */ jsx("div", {
			class: "crs-lightbox__spinner",
			"aria-hidden": "true"
		});
		el.addEventListener("loadstart", () => spinner.classList.add("is-active"));
		el.addEventListener("waiting", () => spinner.classList.add("is-active"));
		el.addEventListener("canplay", () => spinner.classList.remove("is-active"));
		el.addEventListener("loadeddata", () => spinner.classList.remove("is-active"));
		const close = () => {
			stopVideo(el);
			el.currentTime = 0;
			document.body.classList.remove("crs-drawer-open");
			document.removeEventListener("keydown", onKey);
			root.classList.remove("crs-lightbox--open");
		};
		const closeWith = (event, desc) => {
			close();
			pushData(event, desc, "click", "reels modal");
		};
		const step = (by) => {
			const at = id + by;
			open(at < 1 ? COUNT : at > COUNT ? 1 : at, 0);
			pushData("exp_reels_arrow", by > 0 ? "Arrow Right" : "Arrow Left", "click", "reels modal");
		};
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowLeft") step(-1);
			if (e.key === "ArrowRight") step(1);
		};
		const prev = /* @__PURE__ */ jsx("button", {
			class: "crs-lightbox__arrow crs-lightbox__arrow--prev",
			type: "button",
			"aria-label": "Previous reel",
			onClick: () => step(-1)
		});
		const next = /* @__PURE__ */ jsx("button", {
			class: "crs-lightbox__arrow crs-lightbox__arrow--next",
			type: "button",
			"aria-label": "Next reel",
			onClick: () => step(1)
		});
		const closeBtn = /* @__PURE__ */ jsx("button", {
			class: "crs-lightbox__close",
			type: "button",
			"aria-label": "Close",
			onClick: () => closeWith("exp_reels_modal_fullscreen", "Fullscreen Close")
		});
		prev.innerHTML = CHEVRON_ICON;
		next.innerHTML = CHEVRON_ICON;
		closeBtn.innerHTML = CLOSE_ICON;
		const root = /* @__PURE__ */ jsxs("div", {
			class: "crs-lightbox",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Customer reel",
			children: [
				/* @__PURE__ */ jsx("div", {
					class: "crs-lightbox__overlay",
					onClick: () => closeWith("exp_reels_overlay", "Overlay close")
				}),
				prev,
				/* @__PURE__ */ jsxs("div", {
					class: "crs-lightbox__stage",
					children: [
						closeBtn,
						spinner,
						el
					]
				}),
				next
			]
		});
		const open = (next, time) => {
			if (next !== id || !el.src) {
				id = next;
				el.src = `${DIR}/video_${id}.mp4`;
			}
			el.currentTime = time;
			if (!root.classList.contains("crs-lightbox--open")) {
				document.addEventListener("keydown", onKey);
				document.body.classList.add("crs-drawer-open");
				requestAnimationFrame(() => root.classList.add("crs-lightbox--open"));
			}
			startVideo(el);
		};
		document.body.append(root);
		return {
			root,
			video: el,
			open
		};
	};
	var openLightbox = (id, time) => {
		document.querySelectorAll(".crs-reel.is-playing").forEach(reset);
		lightbox ??= buildLightbox();
		lightbox.open(id, time);
	};

//#endregion
//#region src/components/stickyBar.tsx
	var STICKY_ANALYTICS = {
		prefix: "exp_pdp_sticky",
		loc: "Sticky Bar"
	};
	var restoreDawnScroll;
	var scrollSuppressTimer;
	var suppressDawnScrollJump = () => {
		if (!restoreDawnScroll) {
			const originalScrollTo = window.scrollTo.bind(window);
			const originalFocus = HTMLElement.prototype.focus;
			window.scrollTo = (() => {});
			HTMLElement.prototype.focus = function(opts) {
				originalFocus.call(this, {
					...opts,
					preventScroll: true
				});
			};
			restoreDawnScroll = () => {
				window.scrollTo = originalScrollTo;
				HTMLElement.prototype.focus = originalFocus;
				restoreDawnScroll = void 0;
			};
		}
		window.clearTimeout(scrollSuppressTimer);
		scrollSuppressTimer = window.setTimeout(() => restoreDawnScroll?.(), 2e3);
	};
	var materialGuideIsOpen = () => document.body.classList.contains("crs-drawer-open");
	var sizeGuideIsOpen = () => !!document.querySelector(".section-header.cust_noti");
	var cartDrawerIsOpen = () => !!document.querySelector("cart-drawer.active");
	var onGuideClosed = (isOpen, done) => {
		let opened = false;
		let timer;
		const finish = () => {
			observer.disconnect();
			window.clearTimeout(timer);
			done();
		};
		const observer = new MutationObserver(() => {
			if (isOpen()) {
				opened = true;
				window.clearTimeout(timer);
			} else if (opened) finish();
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
			subtree: true
		});
		timer = window.setTimeout(() => opened || finish(), 1e3);
	};
	var StickyBar = (product, getImage, onMaterialGuide, onSizeGuide, target) => {
		const title = document.querySelector(".crs-info .product__title h1")?.textContent?.trim() ?? "";
		const thumb = /* @__PURE__ */ jsx("img", {
			class: "crs-sticky__thumb",
			alt: ""
		});
		const setThumb = () => {
			const gallery = document.querySelector(".product__media-item img");
			const src = getImage() ?? (gallery ? gallery.currentSrc || gallery.src : void 0);
			if (src) thumb.src = src;
		};
		setThumb();
		const syncs = [];
		let openPicker = null;
		const closePicker = (report = false) => {
			if (!openPicker) return;
			openPicker.trigger.classList.remove("is-open");
			openPicker.trigger.setAttribute("aria-expanded", "false");
			openPicker.popover.hidden = true;
			if (report) pushData(`${STICKY_ANALYTICS.prefix}_picker_close`, openPicker.name, "click", STICKY_ANALYTICS.loc);
			openPicker = null;
			root.classList.remove("has-popover");
		};
		const showPicker = (picker) => {
			picker.trigger.classList.add("is-open");
			picker.trigger.setAttribute("aria-expanded", "true");
			picker.popover.hidden = false;
			openPicker = picker;
			root.classList.add("has-popover");
		};
		let suspenders = 0;
		const suspend = () => {
			suspenders += 1;
			root.classList.add("is-suspended");
		};
		const resume = () => {
			suspenders = Math.max(0, suspenders - 1);
			if (suspenders) return;
			root.classList.remove("is-suspended");
			observer.unobserve(target);
			observer.observe(target);
		};
		const stepAsideForGuide = (isOpen) => {
			const reopen = openPicker;
			closePicker();
			suspend();
			onGuideClosed(isOpen, () => {
				window.setTimeout(() => {
					if (reopen) showPicker(reopen);
					resume();
				});
			});
		};
		const pickers = product.options.flatMap((option, index) => {
			if (!isRealOption(option)) return [];
			const swatches = isSwatchOption(option.name);
			const block = OptionBlock(product, option, index, buildGuide(option, (from) => {
				stepAsideForGuide(materialGuideIsOpen);
				onMaterialGuide(from);
			}, (from) => {
				stepAsideForGuide(sizeGuideIsOpen);
				onSizeGuide(from);
			}, STICKY_ANALYTICS), STICKY_ANALYTICS);
			syncs.push(block.sync);
			const closeBtn = /* @__PURE__ */ jsx("button", {
				class: "crs-sticky__close",
				type: "button",
				"aria-label": "Close",
				onClick: () => closePicker(true)
			});
			closeBtn.innerHTML = CLOSE_ICON$1;
			const popover = /* @__PURE__ */ jsxs("div", {
				class: "crs-sticky__popover",
				hidden: true,
				children: [closeBtn, block.root]
			});
			popover.addEventListener("click", (e) => {
				if (e.target.closest("[data-value]")) suppressDawnScrollJump();
			}, { capture: true });
			popover.addEventListener("click", (e) => {
				if (e.target.closest("[data-value]")) closePicker();
			});
			const dot = swatches ? /* @__PURE__ */ jsx("span", {
				class: "crs-sticky__dot",
				"aria-hidden": "true"
			}) : null;
			const label = /* @__PURE__ */ jsx("span", { class: "crs-sticky__trigger-label" });
			const trigger = /* @__PURE__ */ jsxs("button", {
				class: `crs-sticky__trigger ${swatches ? "crs-sticky__trigger--swatch" : "crs-sticky__trigger--size"}`,
				type: "button",
				"aria-haspopup": "true",
				"aria-expanded": "false",
				onClick: () => {
					const wasOpen = openPicker?.trigger === trigger;
					closePicker(wasOpen);
					if (wasOpen) return;
					showPicker({
						trigger,
						popover,
						name: swatches ? "Material" : "Size"
					});
					pushData(`${STICKY_ANALYTICS.prefix}_picker`, swatches ? "Material" : "Size", "click", STICKY_ANALYTICS.loc);
				},
				children: [dot ?? document.createTextNode(""), label]
			});
			syncs.push(() => {
				const current = getSelect(option.name)?.value ?? "";
				label.textContent = current;
				if (dot) dot.style.setProperty("background-image", swatchFor(current));
			});
			return /* @__PURE__ */ jsxs("div", {
				class: "crs-sticky__picker",
				children: [trigger, popover]
			});
		});
		document.addEventListener("click", (e) => {
			if (!openPicker || e.target.closest(".crs-sticky__picker")) return;
			closePicker(true);
		});
		const cta = /* @__PURE__ */ jsx("button", {
			class: "crs-sticky__cta",
			type: "button",
			onClick: () => {
				pushData(`${STICKY_ANALYTICS.prefix}_add_to_cart`, "Add to cart", "click", STICKY_ANALYTICS.loc);
				document.querySelector(".crs-product .product-form__submit")?.click();
			},
			children: "Add to cart"
		});
		const root = /* @__PURE__ */ jsxs("div", {
			class: "crs-sticky",
			children: [/* @__PURE__ */ jsx("div", {
				class: "crs-sticky__backdrop",
				"aria-hidden": "true"
			}), /* @__PURE__ */ jsxs("div", {
				class: "crs-sticky__inner",
				children: [
					thumb,
					/* @__PURE__ */ jsx("div", {
						class: "crs-sticky__title",
						children: title
					}),
					/* @__PURE__ */ jsxs("div", {
						class: "crs-sticky__controls",
						children: [/* @__PURE__ */ jsx("div", {
							class: "crs-sticky__pickers",
							children: pickers
						}), cta]
					})
				]
			})]
		});
		const observer = new IntersectionObserver(([entry]) => {
			if (root.classList.contains("is-suspended")) return;
			const visible = !entry.isIntersecting && entry.boundingClientRect.top < 0;
			root.classList.toggle("is-visible", visible);
			if (!visible) closePicker();
		});
		observer.observe(target);
		let cartOpen = false;
		new MutationObserver((records) => {
			if (!records.some((record) => record.target.tagName === "CART-DRAWER")) return;
			const open = cartDrawerIsOpen();
			if (open === cartOpen) return;
			cartOpen = open;
			if (!open) return resume();
			closePicker();
			suspend();
		}).observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
			subtree: true
		});
		const sync = () => {
			setThumb();
			const button = document.querySelector(".crs-product .product-form__submit");
			cta.disabled = button?.disabled ?? false;
			syncs.forEach((fn) => fn());
		};
		return {
			root,
			sync
		};
	};

//#endregion
//#region src/components/recommendations.ts
	var dressRecommendations = async () => {
		(await waitEl("product-recommendations")).classList.add("crs-recs");
		dressGrid();
		dressReviewsHeader();
		squareOffReviews();
	};
	var dressGrid = async () => {
		(await waitEl(".crs-recs .product-grid")).querySelectorAll(".price-item").forEach((el) => el.textContent = stripCurrencyCode(el.textContent));
	};
	var dressReviewsHeader = async () => {
		const count = await waitEl(".crs-recs .fera-reviews-count [data-fera-rating-count]");
		const total = Number(count.dataset.value);
		const label = total >= 1e3 ? `${(total / 1e3).toFixed(1)}K` : String(total);
		count.closest(".fera-reviews-count").querySelectorAll(".fera-reviews-count-str").forEach((el) => el.textContent = label);
	};
	var squareOffReviews = async () => {
		const items = await waitEl(".crs-recs .fera-masonry-items");
		const square = () => {
			const columns = getComputedStyle(items).gridTemplateColumns.split(" ").length;
			const cards = Array.from(items.children);
			const keep = Math.floor(cards.length / columns) * columns;
			cards.forEach((card, i) => card.classList.toggle("crs-recs-overflow", i >= keep));
		};
		square();
		new MutationObserver(square).observe(items, { childList: true });
		window.addEventListener("resize", square);
	};

//#endregion
//#region src/cart.ts
	var cartElement = () => document.querySelector("cart-notification") ?? document.querySelector("cart-drawer");
	var cartHasVariant = async (variantId) => {
		return (await fetch("/cart.js").then((r) => r.json())).items.some((item) => item.variant_id === variantId);
	};
	var addToCart = async (variantId) => {
		const body = new FormData();
		body.append("id", String(variantId));
		body.append("quantity", "1");
		await fetch("/cart/add.js", {
			method: "POST",
			headers: { "X-Requested-With": "XMLHttpRequest" },
			body
		});
	};
	var applyDiscountAndRefresh = async (code) => {
		const codes = [...((await fetch("/cart.js").then((r) => r.json())).discount_codes ?? []).filter((d) => d.applicable && d.code !== code).map((d) => d.code), code].join(",");
		const cart = cartElement();
		const body = new FormData();
		body.append("discount", codes);
		if (cart) {
			body.append("sections", cart.getSectionsToRender().map((s) => s.id).join(","));
			body.append("sections_url", location.pathname);
		}
		const response = await fetch("/cart/update.js", {
			method: "POST",
			headers: { "X-Requested-With": "XMLHttpRequest" },
			body
		}).then((r) => r.json());
		cart?.renderContents(response);
	};
	var CART_UPDATE_EVENT = "cart-update";
	var subscribeCartUpdate = (handler) => {
		window.subscribe?.(CART_UPDATE_EVENT, handler);
	};

//#endregion
//#region src/index.ts
	startLog({
		name: "PDP update",
		dev: "OS"
	});
	clarityInterval("exp_pdp_free_gift");
	var GIFT_HANDLE = "small-oval-necklace";
	var GIFT_MIN_PRICE_CENTS = 5e4;
	var GIFT_DISCOUNT_CODE = "PDP-EXP-GIFT500";
	var PdpRedesign = class {
		constructor() {
			this.sid = "";
			this.imageIndex = 0;
			this.images = {};
			this.sync = [];
		}
		async init() {
			if (document.body.classList.contains("crs-pdp")) return;
			this.addStyles();
			this.addFonts();
			const info = await waitEl("product-info");
			this.sid = info.dataset.section;
			info.classList.add("crs-product");
			this.product = await fetchProduct();
			this.imageIndex = imageOptionIndex(this.product);
			this.images = optionImages(this.product, this.imageIndex);
			document.body.classList.add("crs-pdp");
			this.buildUtilityBar();
			this.buildInfoColumn();
			this.buildMediaColumn();
			dressRecommendations();
			this.apply();
			singleOpenSizeGuide();
			closeSizeGuideOnBackdrop();
			const observer = new MutationObserver(() => {
				observer.disconnect();
				this.apply();
				observer.observe(info, {
					childList: true,
					subtree: true
				});
			});
			observer.observe(info, {
				childList: true,
				subtree: true
			});
			log("PDP redesign applied", "success");
		}
		addStyles() {
			const el = document.createElement("style");
			el.textContent = globals_default;
			document.head.appendChild(el);
		}
		addFonts() {
			const href = "https://fonts.googleapis.com/css2?family=Forum&family=Jost:wght@400;500&family=Overlock&display=swap";
			if (document.querySelector(`link[href="${href}"]`)) return;
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = href;
			document.head.appendChild(link);
		}
		apply() {
			this.sync.forEach((fn) => fn());
			this.stripCurrencyCodes();
			this.priceInButton();
			this.saveBadge();
		}
		stripCurrencyCodes() {
			document.querySelectorAll(`#price-${this.sid} .price-item`).forEach((el) => el.textContent = stripCurrencyCode(el.textContent));
		}
		saveBadge() {
			const price = document.querySelector(`#price-${this.sid}`);
			const badge = price?.querySelector(".price__badge-sale");
			if (!price || !badge || !price.querySelector(".price--on-sale")) return;
			const was = price.querySelector(".price__sale s.price-item--regular")?.textContent;
			const now = price.querySelector(".price__sale .price-item--sale")?.textContent;
			if (!was || !now) return;
			const saved = parseMoney(was) - parseMoney(now);
			if (!(saved > 0)) return;
			badge.textContent = `Save ${formatLike(now.trim(), saved)}`;
		}
		priceInButton() {
			const root = document.querySelector("product-info");
			const price = root.querySelector(`#price-${this.sid}`);
			const button = root.querySelector(".product-form__submit");
			if (!price || !button) return;
			const source = price.querySelector(price.querySelector(".price--on-sale") ? ".price__sale .price-item--sale" : ".price__regular .price-item--regular");
			if (!source) return;
			let slot = button.querySelector(".crs-atc-price");
			if (!slot) {
				slot = document.createElement("span");
				slot.className = "crs-atc-price";
				button.querySelector("span")?.after(slot);
			}
			slot.textContent = `· ${source.textContent.trim()}`;
			document.querySelectorAll(".crs-atc-price").forEach((el) => root.contains(el) ? void 0 : el.remove());
			const sticky = document.querySelector(".crs-sticky__cta");
			if (sticky) {
				const span = (className, text) => Object.assign(document.createElement("span"), {
					className,
					textContent: text
				});
				sticky.replaceChildren(span("crs-sticky__cta-label", button.querySelector("span:not(.crs-atc-price)").textContent.trim()), span("crs-sticky__cta-sep", "·"), span("crs-sticky__cta-price", source.textContent.trim()));
			}
		}
		async buildUtilityBar() {
			const message = await waitEl(".utility-bar .announcement-bar__message");
			message.closest(".utility-bar").classList.add("crs-utility");
			if (message.querySelector(".crs-utility__warranty")) return;
			const separator = document.createElement("span");
			separator.className = "crs-utility__sep";
			separator.setAttribute("aria-hidden", "true");
			separator.textContent = "·";
			const warranty = document.createElement("span");
			warranty.className = "crs-utility__warranty";
			warranty.textContent = "Lifetime Warranty";
			message.append(separator, warranty);
		}
		order(el, order) {
			if (el instanceof HTMLElement) el.style.order = String(order);
		}
		buildInfoColumn() {
			const root = document.querySelector(`#ProductInfo-${this.sid}`);
			root.classList.add("crs-info");
			const onMaterialGuide = (from = PDP_ANALYTICS) => openModal("material", "Material Guide", this.rte(material_guide_default), "Material Guide Popup", "Material Guide", from);
			const onSizeGuide = (from = PDP_ANALYTICS) => {
				const trigger = sizeGuideTrigger();
				if (!trigger) return;
				trigger.click();
				this.dressGuideClose();
				pushData(`${from.prefix}_size_open`, "Ring Sizing Guide", "click", from.loc);
			};
			const options = Options(this.product, onMaterialGuide, onSizeGuide);
			this.sync.push(options.sync);
			const hasOptions = options.root.children.length > 0;
			const native = Array.from(root.querySelectorAll(".product__accordion")).map((el) => ({
				title: el.querySelector(".accordion__title").textContent.trim(),
				body: el.querySelector(".accordion__content").cloneNode(true)
			}));
			const description = document.querySelector(".product__description");
			this.description = parseDescription(description);
			description.hidden = true;
			const trust = this.trustRow();
			const help = this.helpRow();
			const details = Details(this.description.specs, this.description.prose);
			const howto = HowToOrder(openMailingModal);
			const accords = bottomAccordions(native);
			const reels = Reels();
			this.order(root.querySelector(".product__title"), 1);
			this.order(root.querySelector(`#price-${this.sid}`), 2);
			this.order(root.querySelector("[id^=\"product-form-installment\"]")?.parentElement, 3);
			this.order(options.root, 4);
			this.order(root.querySelector("variant-selects"), 5);
			this.order(root.querySelector("product-form")?.parentElement, 6);
			this.order(trust, 8);
			this.order(help, 9);
			this.order(root.querySelector(`#Quantity-Form-${this.sid}`), 10);
			this.order(details, 11);
			this.order(reels, 12);
			this.order(howto, 13);
			this.order(accords, 14);
			this.order(root.querySelector(".product__view-details"), 20);
			root.querySelectorAll(".product__accordion").forEach((el) => el.remove());
			root.append(...hasOptions ? [options.root] : [], trust, help, details, reels, howto, accords);
			this.buildGiftRow(root);
			visibilityOfTime(".crs-details", "exp_pdp_details_view", "PDP", "Product details", 1e3, .3);
			visibilityOfTime(".crs-steps", "exp_pdp_howto_view", "PDP", "How to order", 1e3, .3);
			visibilityOfTime(".crs-howto__made", "exp_pdp_made_view", "PDP", "How your piece is made", 1e3, .3);
			const stickyTarget = hasOptions ? options.root : root.querySelector("product-form")?.parentElement ?? root;
			const sticky = StickyBar(this.product, () => this.images[selectedValues(this.product)[this.imageIndex]], onMaterialGuide, onSizeGuide, stickyTarget);
			this.sync.push(sticky.sync);
			document.body.append(sticky.root);
			visibilityOfTime(".crs-sticky", "exp_pdp_sticky_view", "PDP", "Sticky Bar");
		}
		async buildGiftRow(root) {
			const gift = await fetchGift(GIFT_HANDLE);
			let giftInCart = await cartHasVariant(gift.variantId);
			const shown = () => this.qualifiesForGift() && !giftInCart;
			const { root: el, sync } = Gift(gift, shown);
			const trackQualified = this.trackGiftQualified();
			const trackView = this.trackGiftView(shown);
			const syncAll = () => {
				sync();
				trackQualified();
				trackView();
			};
			this.order(el, 7);
			root.append(el);
			this.sync.push(syncAll);
			syncAll();
			subscribeCartUpdate(async (event) => {
				if (event.source === "product-form" && this.qualifiesForGift() && !giftInCart) {
					await addToCart(gift.variantId);
					await applyDiscountAndRefresh(GIFT_DISCOUNT_CODE);
				}
				giftInCart = await cartHasVariant(gift.variantId);
				syncAll();
			});
		}
		qualifiesForGift() {
			const variant = selectedVariant(this.product);
			return !!variant && basePriceCents(variant.price) >= GIFT_MIN_PRICE_CENTS;
		}
		selectedMaterial() {
			const option = this.product.options.find((o) => isSwatchOption(o.name));
			return option && getSelect(option.name)?.value || "";
		}
		trackGiftQualified() {
			let lastVariantId = this.qualifiesForGift() ? selectedVariant(this.product)?.id : void 0;
			return () => {
				if (!this.qualifiesForGift()) {
					lastVariantId = void 0;
					return;
				}
				const variant = selectedVariant(this.product);
				if (variant && variant.id !== lastVariantId) {
					pushData("exp_pdp_free_gift_qualified", "Qualified for Free Gift", "other", this.selectedMaterial());
					lastVariantId = variant.id;
				}
			};
		}
		trackGiftView(shown) {
			let wasShown = false;
			return () => {
				const isShown = shown();
				if (isShown && !wasShown) pushData("exp_pdp_free_gift_view", "Free Gift", "view", this.selectedMaterial());
				wasShown = isShown;
			};
		}
		buildMediaColumn() {
			document.querySelector(".product__media-wrapper").classList.add("crs-media");
			const created = document.querySelector(".customProductImage");
			created?.classList.add("crs-created");
			const caption = inclusionCaption(this.description.specs);
			if (created && caption) {
				const el = document.createElement("p");
				el.className = "crs-created__caption";
				el.textContent = caption;
				created.append(el);
			}
			const gallery = Gallery(() => this.images[selectedValues(this.product)[this.imageIndex]], created);
			this.sync.push(gallery.sync);
		}
		async dressGuideClose() {
			const btn = await waitEl("#custom_notifications button.close");
			if (!btn.querySelector("svg")) btn.innerHTML = CLOSE_ICON$1;
		}
		rte(html) {
			const el = document.createElement("div");
			el.className = "crs-rte";
			el.innerHTML = html;
			return el;
		}
		trustRow() {
			const el = document.createElement("div");
			el.className = "crs-trust";
			el.innerHTML = `<span class="crs-trust__item"><img class="crs-trust__icon" src="${flag_usa_default}" alt="" width="28" height="28">Handcrafted in USA</span><span class="crs-trust__item"><span class="crs-trust__icon crs-trust__icon--svg" aria-hidden="true">${inlineSvg(warranty_default)}</span>Lifetime Warranty</span>`;
			return el;
		}
		helpRow() {
			const el = document.createElement("div");
			el.className = "crs-help";
			el.innerHTML = "Need Help? Call/Text <a href=\"tel:6626691586\">662-669-1586</a> ❤️";
			return el;
		}
	};
	new PdpRedesign().init();

//#endregion
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJpc09iamVjdCIsImV4dGVuZCIsImdldENvbXB1dGVkU3R5bGUiXSwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvLnBucG0vY3JzZGV2dG9vbEAxLjEuMF9AdHlwZXMrbm9kZUAyNi4xLjEvbm9kZV9tb2R1bGVzL2Nyc2RldnRvb2wvaW50ZXJuYWwvaW5kZXguanMiLCIuLi9zcmMvZ2xvYmFscy5jc3M/aW5saW5lIiwiLi4vc3JjL21vbmV5LnRzIiwiLi4vc3JjL3Byb2R1Y3QudHMiLCIuLi9zcmMvZGVzY3JpcHRpb24udHMiLCIuLi9zcmMvaWNvbnMvZmxhZy11c2EucG5nP2lubGluZSIsIi4uL3NyYy9zdmcudHMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vY3JzZGV2dG9vbEAxLjEuMF9AdHlwZXMrbm9kZUAyNi4xLjEvbm9kZV9tb2R1bGVzL2Nyc2RldnRvb2wvaW50ZXJuYWwvanN4LXJ1bnRpbWUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9idXlib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvZGV0YWlscy50c3giLCIuLi9zcmMvaWNvbnMvc21hbGwtbmVja2xlc3MucG5nP2lubGluZSIsIi4uL3NyYy9jb21wb25lbnRzL2dpZnQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9ob3dUb09yZGVyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3aXBlckAxMS4yLjEwL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zd2lwZXJAMTEuMi4xMC9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3dpcGVyQDExLjIuMTAvbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3dpcGVyLWNvcmUubWpzIiwiLi4vc3JjL2NvbXBvbmVudHMvcmVlbHMudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvc3RpY2t5QmFyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL3JlY29tbWVuZGF0aW9ucy50cyIsIi4uL3NyYy9jYXJ0LnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHB1c2hEYXRhID0gKG5hbWUsIGRlc2MsIHR5cGUsIGxvYyA9IFwiXCIpID0+IHtcbiAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gICAgZXZlbnQ6IFwiZXZlbnQtdG8tZ2E0XCIsXG4gICAgZXZlbnRfbmFtZTogbmFtZSxcbiAgICBldmVudF9kZXNjOiBkZXNjLFxuICAgIGV2ZW50X3R5cGU6IHR5cGUsXG4gICAgZXZlbnRfbG9jOiBsb2NcbiAgfSk7XG4gIGxvZyhgRXZlbnQ6ICR7bmFtZX0gfCAke2Rlc2N9IHwgJHt0eXBlfSB8ICR7bG9jfWAsIFwic3VjY2Vzc1wiKTtcbn07XG5jb25zdCB3YWl0RWwgPSAoc2VsZWN0b3IpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAoZWxlbWVudDIpIHtcbiAgICAgICAgcmVzb2x2ZShlbGVtZW50Mik7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBzdGFydExvZyA9ICh7IG5hbWUsIGRldiB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIGAlYyBFWFA6ICR7bmFtZX0gKERFVjogJHtkZXZ9KWAsXG4gICAgYGJhY2tncm91bmQ6ICMzNDk4ZWI7IGNvbG9yOiAjZmNjZjNhOyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO2BcbiAgKTtcbn07XG5jbGFzcyBOYXRpdmVRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5hdGl2ZVF1ZXJ5ID8gZWxlbWVudC5lbGVtZW50cyA6IHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiID8gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpKSA6IGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ID8gW2VsZW1lbnRdIDogQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBBcnJheS5mcm9tKGVsZW1lbnQpO1xuICB9XG4gIG9uKGV2ZW50cywgZGVsZWdhdGVTZWxlY3RvciwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgZGVsZWdhdGVTZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBoYW5kbGVyID0gZGVsZWdhdGVTZWxlY3RvcjtcbiAgICAgIGRlbGVnYXRlU2VsZWN0b3IgPSBcIlwiO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZVNlbGVjdG9yICE9PSBcIlwiKSB7XG4gICAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ/LmNsb3Nlc3QoXG4gICAgICAgICAgICBkZWxlZ2F0ZVNlbGVjdG9yXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICAgICAgaGFuZGxlcj8uY2FsbCh0YXJnZXRFbGVtZW50LCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZXI/LmNhbGwoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBlYWNoKGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiB0aGlzLmVsZW1lbnRzKSB7XG4gICAgICBjYWxsYmFjayhuZXcgTmF0aXZlUXVlcnkoZWxlbWVudCksIHRoaXMuZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0eWxlKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmaW5kKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBOYXRpdmVRdWVyeShlbGVtZW50cy5mbGF0KCkpO1xuICB9XG4gIGF0dHIoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdPy5nZXRBdHRyaWJ1dGUoa2V5KSA/PyBudWxsO1xuICAgIH1cbiAgfVxuICB0ZXh0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdPy50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgIH1cbiAgfVxuICBodG1sKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50c1swXT8uaW5uZXJIVE1MIHx8IFwiXCI7XG4gICAgfVxuICB9XG59XG5jb25zdCAkZWwgPSAoZWxlbWVudCkgPT4ge1xuICByZXR1cm4gbmV3IE5hdGl2ZVF1ZXJ5KGVsZW1lbnQpO1xufTtcbmNvbnN0IGxvYWRTY3JpcHRzT3JTdHlsZXMgPSBhc3luYyAodXJscykgPT4ge1xuICBjb25zdCBsb2FkU2NyaXB0T3JTdHlsZSA9ICh1cmwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IHVybC5zcGxpdChcIi5cIikucG9wKCk7XG4gICAgICBpZiAodHlwZSA9PT0gXCJqc1wiKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnNjcmlwdHMpLm1hcChcbiAgICAgICAgICAoc2NyaXB0MikgPT4gc2NyaXB0Mi5zcmMudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgICBpZiAobG9hZGVkU2NyaXB0cy5pbmNsdWRlcyh1cmwudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBsb2coYFNjcmlwdCAke3VybH0gYWxyZWFkeSBkb3dubG9hZGVkIWAsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjc3NcIikge1xuICAgICAgICBjb25zdCBsb2FkZWRTdHlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5tYXAoXG4gICAgICAgICAgKHN0eWxlMikgPT4gc3R5bGUyLmhyZWY/LnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxvYWRlZFN0eWxlcy5pbmNsdWRlcyh1cmwudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBsb2coYFN0eWxlICR7dXJsfSBhbHJlYWR5IGRvd25sb2FkZWQhYCwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIHN0eWxlLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBzdHlsZS5ocmVmID0gdXJsO1xuICAgICAgICBzdHlsZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzdHlsZS5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgIGxvZyh1cmwpO1xuICAgIGF3YWl0IGxvYWRTY3JpcHRPclN0eWxlKHVybCk7XG4gICAgbG9nKGBMb2FkZWQgbGlicmFyeSAke3VybH1gKTtcbiAgfVxuICBsb2coXCJBbGwgbGlicmFyaWVzIGxvYWRlZCFcIiwgXCJzdWNjZXNzXCIpO1xufTtcbmNvbnN0IGNsYXJpdHlJbnRlcnZhbCA9IChuYW1lKSA9PiB7XG4gIGxldCBpbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5jbGFyaXR5ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnQpO1xuICAgICAgd2luZG93LmNsYXJpdHkoXCJzZXRcIiwgbmFtZSwgXCJ2YXJpYW50XzFcIik7XG4gICAgfVxuICB9LCAxZTMpO1xufTtcbmNvbnN0IHZpc2liaWxpdHlPZlRpbWUgPSAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgdmlzaWJsZVBsYWNlLCBkZXNjcmlwdGlvbiwgdGltZSA9IDFlMywgdGhyZXNob2xkID0gMC41KSA9PiB7XG4gIGxldCBvYnNlcnZlcjtcbiAgbGV0IHRpbWVyO1xuICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBpZiAoZW50cmllc1swXS5pc0ludGVyc2VjdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHB1c2hEYXRhKFxuICAgICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgICAgZW50cmllc1swXS50YXJnZXQuZGF0YXNldC52aXNpYmxlIHx8IGRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHZpc2libGVQbGFjZVxuICAgICAgICAgICk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhcIkVsZW1lbnQgaXMgbm90IGZ1bGx5IHZpc2libGVcIiwgXCJ3YXJuXCIpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgeyB0aHJlc2hvbGQ6IFt0aHJlc2hvbGRdIH1cbiAgKTtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWxlY3Rvcik7XG4gIH1cbn07XG5jb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoc2VsZWN0b3IsIG9mZnNldCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSAob2Zmc2V0IHx8IDEwMCk7XG4gIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn07XG5jb25zdCBjaGVja1Njcm9sbFNwZWVkID0gKHNlbGVjdG9yLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBibG9jayA9IHNlbGVjdG9yID09PSB3aW5kb3cgPyB3aW5kb3cgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKCFibG9jaykgcmV0dXJuO1xuICBsZXQgbGFzdFBvcywgbmV3UG9zLCB0aW1lciwgZGVsdGEsIGRpcmVjdGlvbjtcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgbGFzdFBvcyA9IG51bGw7XG4gICAgZGVsdGEgPSAwO1xuICB9XG4gIGNsZWFyKCk7XG4gIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cpIHtcbiAgICAgIG5ld1BvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQb3MgPSBibG9jay5zY3JvbGxUb3A7XG4gICAgfVxuICAgIGlmICghbGFzdFBvcykgcmV0dXJuO1xuICAgIGRpcmVjdGlvbiA9IG5ld1BvcyA+IGxhc3RQb3MgPyBcImRvd25cIiA6IFwidXBcIjtcbiAgICBpZiAobGFzdFBvcyAhPSBudWxsKSB7XG4gICAgICBkZWx0YSA9IG5ld1BvcyAtIGxhc3RQb3M7XG4gICAgfVxuICAgIGxhc3RQb3MgPSBuZXdQb3M7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoY2xlYXIsIDUwKTtcbiAgICBjYWxsYmFjayhNYXRoLmFicyhkZWx0YSksIGRpcmVjdGlvbik7XG4gIH0pO1xufTtcbmNvbnN0IGdldENvb2tpZXMgPSAobmFtZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gIGlmICh2YWx1ZS5pbmNsdWRlcyhgOyAke25hbWV9PWApKSB7XG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xuICAgIHJldHVybiBwYXJ0cy5wb3AoKT8uc3BsaXQoXCI7XCIpLnNoaWZ0KCk7XG4gIH0gZWxzZSB7XG4gICAgbG9nKFwiTm8gY29va2llXCIsIFwid2FyblwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbmNvbnN0IGxvZyA9ICh0ZXh0LCBzdHlsZSA9IFwiaW5mb1wiKSA9PiB7XG4gIGxldCBjb2xvcjtcbiAgc3dpdGNoIChzdHlsZSkge1xuICAgIGNhc2UgXCJpbmZvXCI6XG4gICAgICBjb2xvciA9IFwiY29sb3I6ICMzNDk4ZGI7XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwid2FyblwiOlxuICAgICAgY29sb3IgPSBcImNvbG9yOiAjZjM5YzEyO1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImVycm9yXCI6XG4gICAgICBjb2xvciA9IFwiY29sb3I6ICNlNzRjM2M7XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgY29sb3IgPSBcImNvbG9yOiAjMmVjYzcxO1wiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc29sZS5sb2coYCVjPj4+ICR7dGV4dH1gLCBgJHtjb2xvcn0gZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwYCk7XG59O1xuY29uc3Qgc2xpZGV1cCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aW1lID0gZHVyYXRpb24gfHwgNTAwO1xuICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7dGltZX1tc2A7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LCB0aW1lKTtcbn07XG5jb25zdCBzbGlkZWRvd24gPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGltZSA9IGR1cmF0aW9uIHx8IDUwMDtcbiAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAke3RpbWV9bXNgO1xuICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gIH0sIDApO1xufTtcbmV4cG9ydCB7XG4gICRlbCxcbiAgTmF0aXZlUXVlcnksXG4gIGNoZWNrU2Nyb2xsU3BlZWQsXG4gIGNsYXJpdHlJbnRlcnZhbCxcbiAgZ2V0Q29va2llcyxcbiAgbG9hZFNjcmlwdHNPclN0eWxlcyxcbiAgbG9nLFxuICBwdXNoRGF0YSxcbiAgc2Nyb2xsVG9FbGVtZW50LFxuICBzbGlkZWRvd24sXG4gIHNsaWRldXAsXG4gIHN0YXJ0TG9nLFxuICB2aXNpYmlsaXR5T2ZUaW1lLFxuICB3YWl0RWxcbn07XG4iLCIuY3JzLXBkcCB7XG4gIC0tY3JzLWFjY2VudDogI2E3MjU2MTtcbiAgLS1jcnMtYWNjZW50LXRleHQ6ICNhMzNmNmU7XG4gIC0tY3JzLWFjY2VudC1zb2Z0OiByZ2JhKDE2NywgMzcsIDk3LCAwLjA1KTtcbiAgLS1jcnMtYWNjZW50LXRpbnQ6ICNmZGYxZjY7XG4gIC0tY3JzLWxpbmU6ICNkYmRiZGI7XG4gIC0tY3JzLWluazogIzEyMTIxMjtcbiAgLS1jcnMtbXV0ZWQ6IHJnYmEoMjUsIDI1LCAyNSwgMC43NSk7XG5cbiAgLS1jcnMtaGVhZDogJ0ZvcnVtJywgR2VvcmdpYSwgc2VyaWY7XG4gIC0tY3JzLWJvZHk6ICdKb3N0JywgJ0Fzc2lzdGFudCcsIHNhbnMtc2VyaWY7XG5cbiAgLS1jcnMtbnVtOiAnT3ZlcmxvY2snLCBHZW9yZ2lhLCBzZXJpZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgLmNycy1wcm9kdWN0IC5wYWdlLXdpZHRoIHtcbiAgICBtYXgtd2lkdGg6IDEzNy43cmVtO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0LnByb2R1Y3QtLWxhcmdlIHtcbiAgICBnYXA6IDMuMTQlO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0LnByb2R1Y3QtLWxhcmdlIC5wcm9kdWN0X19tZWRpYS13cmFwcGVyIHtcbiAgICBmbGV4OiAwIDAgNTYlO1xuICAgIG1heC13aWR0aDogNTYlO1xuICAgIHdpZHRoOiA1NiU7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3QucHJvZHVjdC0tbGFyZ2UgLnByb2R1Y3RfX2luZm8td3JhcHBlciB7XG4gICAgZmxleDogMCAwIDQwLjg2JTtcbiAgICBtYXgtd2lkdGg6IDQwLjg2JTtcbiAgICB3aWR0aDogNDAuODYlO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuXG4uY3JzLXBkcCBzZWN0aW9uLmNycy1pbmZvLnByb2R1Y3RfX2luZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+Kixcbi5jcnMtcGRwIC5jcnMtaW5mbyBwcm9kdWN0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LnByb2R1Y3RfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5wcm9kdWN0X190aXRsZT5oMSB7XG4gIG9yZGVyOiAxO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LnByb2R1Y3RfX3RpdGxlPi5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnkge1xuICBvcmRlcjogMDtcblxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPltpZF49J3ByaWNlLSddIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtb3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY3JzLWxpbmUpO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+ZGl2Omhhcyg+IHByb2R1Y3QtZm9ybSkge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1naWZ0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtdHJ1c3Qge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1oZWxwIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jcnMtbGluZSk7XG59XG5cbi5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1wZHAtcmVlbHMsXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1ob3d0byxcbi5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtIC5hdGNfc3RlcHMsXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybSAuY3VzdG9tLmR3YSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtaW5mbyB2YXJpYW50LXNlbGVjdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY3JzLWluZm8gLnByb2R1Y3RfX3RpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xuICBtYXJnaW46IDA7XG59XG5cbi5jcnMtcGRwIC5jcnMtdXRpbGl0eSB7XG4gIC0tY29sb3ItYmFja2dyb3VuZDogMTU5LCAxMDEsIDEyODtcbiAgYmFja2dyb3VuZDogIzlmNjU4MDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wOCk7XG59XG5cbi5jcnMtcGRwIC5jcnMtdXRpbGl0eSAudXRpbGl0eS1iYXJfX2dyaWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNycy1wZHAgLmNycy11dGlsaXR5IC5hbm5vdW5jZW1lbnQtYmFyX19tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cHggMTZweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNi45cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuXG4uY3JzLXBkcCAuY3JzLXV0aWxpdHkgLmFubm91bmNlbWVudC1iYXJfX21lc3NhZ2U+c3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgLmNycy1wZHAgLmNycy11dGlsaXR5X19zZXAsXG4gIC5jcnMtcGRwIC5jcnMtdXRpbGl0eV9fd2FycmFudHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LWF2Z1JhdGluZ1dyYXBwZXIsXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS13cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1hdmdSYXRpbmcge1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1zdGFycyxcbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LXN0YXJzLXJhdGluZyxcbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LXN0YXJzLWJnIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1zdGFycyB7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktdmVyaWZpZWRCYWRnZVdyYXBwZXIsXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS12ZXJpZmllZEJhZGdlLFxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktdmVyaWZpZWRCYWRnZS1wcmVUZXh0TnVtYmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlLS1vbi1zYWxlIC5wcmljZV9fc2FsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTFweDtcbn1cblxuLmNycy1wcm9kdWN0IC5wcmljZS0tb24tc2FsZSAucHJpY2VfX3NhbGUgLnByaWNlLWl0ZW0tLXNhbGUge1xuICBvcmRlcjogLTE7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJpY2UgLnByaWNlLWl0ZW0tLXNhbGUsXG4uY3JzLXByb2R1Y3QgLnByaWNlIC5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY3JzLWFjY2VudC10ZXh0KTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcmljZV9fc2FsZSBzLnByaWNlLWl0ZW0tLXJlZ3VsYXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1jcnMtbXV0ZWQpO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlX19iYWRnZS1zYWxlIHtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTExcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDM3LCA5NywgMC4xKTtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmNycy1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4uY3JzLW9wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmNycy1vcHQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY3JzLW9wdC1oZWFkX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWNycy1tdXRlZCk7XG59XG5cbi5jcnMtb3B0LWhlYWRfX3ZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xufVxuXG4uY3JzLWd1aWRlLWxpbmsge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jcnMtZ3VpZGUtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbn1cblxuLmNycy1vcHRfX2xpc3QtLXN3YXRjaGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY3JzLW9wdF9fbGlzdC0tc2l6ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLmNycy1zd2F0Y2gsXG4uY3JzLXNpemUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cywgYmFja2dyb3VuZC1jb2xvciAwLjE1cywgYm94LXNoYWRvdyAwLjE1cztcbn1cblxuLmNycy1zd2F0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDRweDtcbn1cblxuLmNycy1zd2F0Y2hfX2RvdCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNycy1zd2F0Y2hfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JzLXNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleDogMCAwIDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtaW4td2lkdGg6IDQ2cHg7XG4gIG1heC13aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG59XG5cbi5jcnMtc3dhdGNoOmhvdmVyLFxuLmNycy1zaXplOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbn1cblxuLmNycy1zd2F0Y2guaXMtc2VsZWN0ZWQsXG4uY3JzLXNpemUuaXMtc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tY3JzLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtc29mdCk7XG59XG5cbi5jcnMtc2l6ZS5pcy11bmF2YWlsYWJsZSB7XG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZmZiwgI2ZmZiA1cHgsICNmNGY0ZjQgNXB4LCAjZjRmNGY0IDZweCk7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19idXR0b25zIHF1YW50aXR5LWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcm9kdWN0LWZvcm1fX2J1dHRvbnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWFjY2VudCk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcm9kdWN0LWZvcm1fX3N1Ym1pdDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiAjOGUxZTUzO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0OjphZnRlcixcbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19zdWJtaXQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtYXRjLXByaWNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5jcnMtYXRjLXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY3JzLWdpZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTVweCAyMnB4IDE1cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRURERUU1O1xuICBiYWNrZ3JvdW5kOiAjRkFGNEY3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBgZGlzcGxheTogZmxleGAgYWJvdmUgd291bGQgb3RoZXJ3aXNlIG91dHJhbmsgdGhlIFVBIFtoaWRkZW5dIHJ1bGUuICovXG4uY3JzLWdpZnRbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtZ2lmdF9fcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IC0yMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzdkZWcpO1xuICB3aWR0aDogOTJweDtcbiAgYmFja2dyb3VuZDogI0E3MjU2MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA0cHggMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuXG4uY3JzLWdpZnRfX2ltYWdlIHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNzZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNycy1naWZ0X19ib2R5IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uY3JzLWdpZnRfX2xhYmVsIHtcbiAgY29sb3I6ICM4QTE1Mzg7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNycy1naWZ0X190aXRsZSB7XG4gIGNvbG9yOiAjMUMxQjFBO1xuICBmb250LWZhbWlseTogRm9ydW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY3JzLWdpZnRfX2Rlc2Mge1xuICBjb2xvcjogIzZFNkE2NztcbiAgZm9udC1mYW1pbHk6IEpvc3Q7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5jcnMtZ2lmdF9fcHJpY2Uge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogM3B4O1xufVxuXG4uY3JzLWdpZnRfX2ZyZWUge1xuICBjb2xvcjogIzI4OTE2MDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jcnMtZ2lmdF9fd2FzIHtcbiAgY29sb3I6ICM5QTk2OTM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogSm9zdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufVxuXG4uY3JzLXRydXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbn1cblxuLmNycy10cnVzdF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmNycy10cnVzdF9faWNvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNycy10cnVzdF9faWNvbi0tc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNycy10cnVzdF9faWNvbi0tc3ZnIHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3JzLWhlbHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI4LjhweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLWhlbHAgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jcnMtYWNjb3JkX19pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbn1cblxuLmNycy1hY2NvcmRfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jcnMtbGluZSk7XG59XG5cbi5jcnMtYWNjb3JkX19oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMnB4IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWhlYWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbn1cblxuLmNycy1hY2NvcmRfX3NpZ24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5jcnMtYWNjb3JkX19zaWduOjpiZWZvcmUsXG4uY3JzLWFjY29yZF9fc2lnbjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMS41cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1pbmspO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmNycy1hY2NvcmRfX3NpZ246OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY3JzLWFjY29yZF9fc2lnbiBzdmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JzLWFjY29yZF9faGVhZFthcmlhLWV4cGFuZGVkPSd0cnVlJ10gLmNycy1hY2NvcmRfX3NpZ246OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5jcnMtYWNjb3JkX19wYW5lbCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG4uY3JzLWRldGFpbHNfX2xpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDE4cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jcnMtZGV0YWlsc19fbGlzdCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLWNycy1tdXRlZCk7XG59XG5cbi5jcnMtZGV0YWlsc19fbGlzdCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ8K3JztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTRweDtcbn1cblxuLmNycy1kZXRhaWxzX190b2dnbGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50LXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYm9keS5jcnMtcGRwIC5jcnMtcmVlbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JzLXBkcC1yZWVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMjRweCAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtc29mdCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcnMtcGRwLXJlZWxzX19oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5cbi5jcnMtcGRwLXJlZWxzX190aXRsZSB7XG4gIG1heC13aWR0aDogMzg5cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcnMtcGRwLXJlZWxzX19zdWJ0aXRsZSB7XG4gIG1heC13aWR0aDogMzc0cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzJweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcnMtcGRwLXJlZWxzIC5zd2lwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY3JzLXBkcC1yZWVscyAuc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zd2lwZXItd3JhcHBlci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiwgaW5pdGlhbCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jcnMtcGRwLXJlZWxzIC5zd2lwZXItc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4uY3JzLXBkcC1yZWVsc19fc3RyaXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNycy1wZHAtcmVlbHNfX2xpc3Qge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNycy1wZHAtcmVlbHMgLmNycy1yZWVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogMTU1cHg7XG4gIGhlaWdodDogMjc2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDM3LCA5NywgMC4wOCk7XG59XG5cbi5jcnMtcmVlbF9fcG9zdGVyLFxuLmNycy1yZWVsIHZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLXJlZWxfX3Bvc3RlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNycy1yZWVsX19wb3N0ZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLXJlZWwgdmlkZW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JzLXJlZWwuaXMtcGxheWluZyB2aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3JzLXJlZWwuaXMtcGxheWluZyAuY3JzLXJlZWxfX3Bvc3Rlcixcbi5jcnMtcmVlbC5pcy1wbGF5aW5nIC5jcnMtcmVlbF9fcGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtcmVlbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcnMtcmVlbF9fcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4ycztcbn1cblxuLmNycy1yZWVsX19wbGF5IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4uY3JzLXJlZWxfX3BsYXkgc3ZnIHBhdGgge1xuICBmaWxsOiAjMTkxOTE5O1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAuY3JzLXJlZWxfX3BsYXk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMDgpO1xuICAgIG9wYWNpdHk6IDAuODU7XG4gIH1cbn1cblxuLmNycy1yZWVsX19leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBjb2xvcjogIzE5MTkxOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgei1pbmRleDogMjtcbn1cblxuLmNycy1yZWVsOm5vdCguaXMtcGxheWluZykgLmNycy1yZWVsX19leHBhbmQge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNycy1yZWVsX19leHBhbmQgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcnMtcmVlbF9fZXhwYW5kIHN2ZyBwYXRoIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIC5jcnMtcmVlbF9fZXhwYW5kOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG59XG5cbi5jcnMtcGRwLXJlZWxzX19uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY3JzLXBkcC1yZWVsc19fYXJyb3cge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLmNycy1wZHAtcmVlbHNfX2Fycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uY3JzLXBkcC1yZWVsc19fYXJyb3cgc3ZnIHBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMxOTE5MTk7XG59XG5cbi5jcnMtcGRwLXJlZWxzX19hcnJvdy0tbmV4dCBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIC5jcnMtcGRwLXJlZWxzX19hcnJvdzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbi5jcnMtcGRwLXJlZWxzX19kb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY3JzLXBkcC1yZWVsc19fZG90IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmNycy1wZHAtcmVlbHNfX2RvdC5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xufVxuXG4uY3JzLWxpZ2h0Ym94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMjE0NzQ4MzY0NjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNjRweDtcbiAgcGFkZGluZzogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG59XG5cbi5jcnMtbGlnaHRib3gtLW9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmNycy1saWdodGJveCAuY3JzLWxpZ2h0Ym94X19vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG59XG5cbi5jcnMtbGlnaHRib3hfX3N0YWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmNycy1saWdodGJveCB2aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jcnMtbGlnaHRib3hfX3NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jcnMtbGlnaHRib3hfX3NwaW5uZXIuaXMtYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogY3JzLXNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY3JzLXNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmNycy1saWdodGJveF9fYXJyb3csXG4uY3JzLWxpZ2h0Ym94X19jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uY3JzLWxpZ2h0Ym94X19hcnJvdyB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG5cbi5jcnMtbGlnaHRib3hfX2Fycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiA0OXB4O1xufVxuXG4uY3JzLWxpZ2h0Ym94X19hcnJvdy0tbmV4dCBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5jcnMtbGlnaHRib3hfX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00NHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgei1pbmRleDogMjtcbn1cblxuLmNycy1saWdodGJveF9fY2xvc2Ugc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5jcnMtbGlnaHRib3hfX2Fycm93IHN2ZyBwYXRoLFxuLmNycy1saWdodGJveF9fY2xvc2Ugc3ZnIHBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcblxuICAuY3JzLWxpZ2h0Ym94X19hcnJvdzpob3ZlcixcbiAgLmNycy1saWdodGJveF9fY2xvc2U6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDlweCkge1xuICAuY3JzLWdpZnRfX2Rlc2Mgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW5zdGFsbG1lbnQuY2FwdGlvbi1sYXJnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIHNob3BpZnktcGF5bWVudC10ZXJtcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNycy1saWdodGJveCB7XG4gICAgZ2FwOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94X19zdGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNycy1saWdodGJveCB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5jcnMtbGlnaHRib3hfX2Fycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94X19hcnJvdy0tcHJldiB7XG4gICAgbGVmdDogOHB4O1xuICB9XG5cbiAgLmNycy1saWdodGJveF9fYXJyb3ctLW5leHQge1xuICAgIHJpZ2h0OiA4cHg7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94X19jbG9zZSB7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxufVxuXG4uY3JzLWhvd3RvIHtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtc29mdCk7XG59XG5cbi5jcnMtaG93dG9fX3RpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMtaG93dG9fX3RpdGxlLS1tYWRlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2NywgMzcsIDk3LCAwLjE1KTtcbn1cblxuLmNycy1ob3d0byBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLWNycy1tdXRlZCk7XG59XG5cbi5jcnMtc3RlcHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jcnMtc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbi5jcnMtc3RlcCsuY3JzLXN0ZXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jcnMtc3RlcF9fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHRvcDogLTE2cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmNycy1zdGVwX19hcnJvdyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNycy1zdGVwX19udW0ge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMzcsIDk3LCAwLjEpO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLW51bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMtc3RlcF9faWNvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY3JzLXN0ZXBfX2ljb24gc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNycy1zdGVwX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLWlubGluZS1saW5rIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50LXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNycy10aHVtYnMge1xuICBkaXNwbGF5OiBub25lO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuLmNycy1jcmVhdGVkLXNsb3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY3JzLWdhbGxlcnlfX2hpbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2ZhZjRmNztcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZlNGU1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qXG4gKiBUaGUgdGhlbWUncyB6b29tIHRyaWdnZXIgY292ZXJzIHRoZSB3aG9sZSBtZWRpYSB3aXRoIGEgdHJhbnNwYXJlbnQgb3ZlcmxheSB0aGF0XG4gKiBwYWludHMgYWJvdmUgei1pbmRleCAxIOKAlCBhbiBhcnJvdyBhdCAxIGlzIHZpc2libGUgYnV0IG5ldmVyIHJlY2VpdmVzIHRoZSB0YXAuXG4gKi9cbi5jcnMtZ2FsbGVyeV9fYXJyb3cge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLmNycy1nYWxsZXJ5X19hcnJvdy0tcHJldiB7XG4gIGxlZnQ6IDA7XG59XG5cbi5jcnMtZ2FsbGVyeV9fYXJyb3ctLW5leHQge1xuICByaWdodDogMDtcbn1cblxuLmNycy1nYWxsZXJ5X19hcnJvdyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMjZweDtcbn1cblxuLyogVGhlIGV4cG9ydGVkIGNoZXZyb24gcG9pbnRzIHJpZ2h0LCBzbyBvbmx5IHRoZSBiYWNrIGFycm93IGlzIG1pcnJvcmVkLiAqL1xuLmNycy1nYWxsZXJ5X19hcnJvdy0tbmV4dCBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5jcnMtZ2FsbGVyeV9fYXJyb3c6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLmNycy1nYWxsZXJ5X19hcnJvdzpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MHB4KSB7XG4gIC5jcnMtcHJvZHVjdCAucHJvZHVjdF9fbWVkaWEtbGlzdCB7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0X19tZWRpYS1saXN0PmxpOmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4OiAwIDAgNTgwcHg7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0X19tZWRpYS1saXN0Pi5jcnMtY3JlYXRlZC1zbG90IHtcbiAgICBmbGV4OiAwIDAgNTIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0X19tZWRpYS1saXN0Pi5wcm9kdWN0X19tZWRpYS1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbiAgfVxufVxuXG4uY3JzLXRodW1iczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JzLXRodW1iIHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNzJweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3JzLWxpbmUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNycy10aHVtYi5pcy1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNycy1hY2NlbnQpO1xufVxuXG4uY3JzLXRodW1iIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNycy1jcmVhdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY3JzLWNyZWF0ZWQgaDMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWhlYWQpO1xuICBmb250LXNpemU6IDI0cHg7XG5cbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JzLWNyZWF0ZWQgLmljb25zX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMDtcbn1cblxuLmNycy1jcmVhdGVkIC5jcGlfaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JzLWNyZWF0ZWQgLmNwaV9pY29ucyBpbWcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtc29mdCk7XG59XG5cbi5jcnMtY3JlYXRlZCAuY3BpX2ljb25zIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMTkxOTE5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY3JzLWNyZWF0ZWRfX2NhcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTkuNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC44NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuXG5ib2R5LmNycy1kcmF3ZXItb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcnMtZHJhd2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMjE0NzQ4MzY0NjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1kcmF3ZXJfX292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTcpO1xufVxuXG4uY3JzLWRyYXdlcl9fZGlhbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG5cbi5jcnMtZHJhd2VyLS1vcGVuIC5jcnMtZHJhd2VyX19kaWFsb2cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5jcnMtZHJhd2VyX19oZWFkIHtcbiAgZmxleDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbn1cblxuLmNycy1kcmF3ZXJfX3RpdGxlIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLWRyYXdlcl9fY2xvc2Uge1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLWRyYXdlcl9fY2xvc2Ugc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5jcnMtZHJhd2VyX19jbG9zZSBzdmcgcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xuICBzdHJva2Utd2lkdGg6IDEuNjtcbn1cblxuLmNycy1kcmF3ZXJfX2JvZHksXG4uY3JzLWRyYXdlcl9fYm9keT4uY3JzLXJ0ZSxcbi5jcnMtZHJhd2VyX19ib2R5Pi5jcnMtcmVtb3RlLFxuLmNycy1kcmF3ZXJfX2JvZHk+LmNycy1yZW1vdGU+LmNycy1ydGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5jcnMtZHJhd2VyX19ib2R5PiosXG4uY3JzLWRyYXdlcl9fYm9keT4uY3JzLXJ0ZT4qLFxuLmNycy1kcmF3ZXJfX2JvZHk+LmNycy1yZW1vdGU+Kixcbi5jcnMtZHJhd2VyX19ib2R5Pi5jcnMtcmVtb3RlPi5jcnMtcnRlPioge1xuICBtYXJnaW46IDA7XG59XG5cbi5jcnMtZHJhd2VyX19pbnRybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmNycy1kcmF3ZXJfX2ludHJvIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDAuNzUpO1xufVxuXG4uY3JzLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtdGludCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMtcnRlIGgzLFxuLmNycy1ydGVfX2gge1xuICBtYXJnaW46IDIwcHggMCA2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLXJ0ZSBwLFxuLmNycy1ydGUgbGkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLW11dGVkKTtcbn1cblxuLmNycy1ydGUgYSB7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50LXRleHQpO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLW5vdGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMzcsIDk3LCAwLjA1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNhNzI1NjE7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtcnRlIGgzLFxuLmNycy1kcmF3ZXIgLmNycy1ydGVfX2gge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwLjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtcnRlIHAsXG4uY3JzLWRyYXdlciAuY3JzLXJ0ZSBsaSxcbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19wYW5lbCBwLFxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX3BhbmVsIGxpIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43NSk7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMmJmYmY7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fc2lnbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fc2lnbjo6YmVmb3JlLFxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX3NpZ246OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX3NpZ24gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fc2lnbiBzdmcgcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9faGVhZFthcmlhLWV4cGFuZGVkPSd0cnVlJ10gLmNycy1hY2NvcmRfX3NpZ24gc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX2hlYWQge1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjAuOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuYm9keS5jcnMtcGRwIC5zZWN0aW9uLWhlYWRlci5jdXN0X25vdGkge1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmJvZHkuY3JzLXBkcDpoYXMoLnNlY3Rpb24taGVhZGVyLmN1c3Rfbm90aSkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbn1cblxuYm9keS5jcnMtcGRwICNjdXN0b21fbm90aWZpY2F0aW9ucyAubW9kYWwtaGVhZGVyLWFtb3IgaDMge1xuXG4gIG1hcmdpbjogMTVweCAwIDE2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbn1cblxuYm9keS5jcnMtcGRwICNjdXN0b21fbm90aWZpY2F0aW9ucyAubW9kYWwtaGVhZGVyLWFtb3IgYnV0dG9uLmNsb3NlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMgLm1vZGFsLWhlYWRlci1hbW9yIGJ1dHRvbi5jbG9zZSBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuYm9keS5jcnMtcGRwICNjdXN0b21fbm90aWZpY2F0aW9ucyAubW9kYWwtaGVhZGVyLWFtb3IgYnV0dG9uLmNsb3NlIHN2ZyBwYXRoIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gIHN0cm9rZS13aWR0aDogMS42O1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5oZWFkZXItZGVzY3JpcHRpb24sXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5wYW5lbC1ib2R5IHAuZnMxNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDAuNzUpO1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5hY2NvcmQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5hY2NvcmQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwLjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0OXB4KSB7XG4gIHByb2R1Y3QtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jcnMtcGRwIHNlY3Rpb24uY3JzLWluZm8ucHJvZHVjdF9faW5mby1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICB9XG5cbiAgLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktdmVyaWZpZWRCYWRnZS1wcmVUZXh0TnVtYmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5wcm9kdWN0X190aXRsZSB7XG4gICAgZ2FwOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcmljZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY3JzLWluZm8gLnByb2R1Y3RfX3RpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz5baWRePSdwcmljZS0nXSB7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByaWNlIC5wcmljZS1pdGVtLS1zYWxlLFxuICAuY3JzLXByb2R1Y3QgLnByaWNlIC5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByaWNlX19zYWxlIHMucHJpY2UtaXRlbS0tcmVndWxhciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByaWNlX19iYWRnZS1zYWxlIHtcbiAgICBjb2xvcjogIzI4OTE2MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEpvc3Q7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTExcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCAxNjcsIDY5LCAwLjEwKTtcbiAgfVxuXG4gIC5jcnMtbWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jcnMtY3JlYXRlZCB7XG4gICAgb3JkZXI6IDQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbjogMCAtMS41cmVtIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jcnMtYWNjZW50LXRpbnQpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2NywgMzcsIDk3LCAwLjEyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjcsIDM3LCA5NywgMC4xMik7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MywgMjAxLCAwLjA1KTtcbiAgfVxuXG4gIC5jcnMtY3JlYXRlZF9fY2FwdGlvbiB7XG4gICAgY29sb3I6ICNBNzI1NjE7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmNycy1jcmVhdGVkIGgzIHtcbiAgICBjb2xvcjogIzE5MTkxOTtcbiAgICBmb250LWZhbWlseTogSm9zdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTkuNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjcycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC5jcnMtY3JlYXRlZCAuaWNvbnNfYm94IHtcbiAgICBnYXA6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3JzLWNyZWF0ZWQgLmNwaV9pY29ucyBpbWcge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmNycy1jcmVhdGVkIC5jcGlfaWNvbnMgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY3JzLW1lZGlhIC5wcm9kdWN0X19tZWRpYS1saXN0LnNsaWRlci0tbW9iaWxlIHtcbiAgICBwYWRkaW5nLWlubGluZTogMDtcbiAgICBzY3JvbGwtcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLmNycy1tZWRpYSAucHJvZHVjdF9fbWVkaWEtbGlzdC5zbGlkZXItLW1vYmlsZT4ucHJvZHVjdF9fbWVkaWEtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNycy1tZWRpYSAucHJvZHVjdF9fbWVkaWEtbGlzdC5zbGlkZXItLW1vYmlsZSAucHJvZHVjdC1tZWRpYS1jb250YWluZXIuY29uc3RyYWluLWhlaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY3JzLW1lZGlhIHNsaWRlci1jb21wb25lbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jcnMtZ2FsbGVyeV9faGludCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY3JzLWdhbGxlcnlfX2Fycm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNycy10aHVtYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLmNycy10aHVtYiB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtb3B0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuY3JzLW9wdGlvbnMge1xuICAgIGdhcDogMzJweDtcbiAgfVxuXG4gIC5jcnMtb3B0LWhlYWRfX2xhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTkuNXB4O1xuICB9XG5cbiAgLmNycy1vcHQtaGVhZF9fdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbiAgfVxuXG4gIC5jcnMtZ3VpZGUtbGluayB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI2cHg7XG4gIH1cblxuICAuY3JzLW9wdF9fbGlzdC0tc3dhdGNoZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luOiAwIC0xLjVyZW07XG4gICAgcGFkZGluZzogMnB4IDEuNXJlbTtcbiAgfVxuXG4gIC5jcnMtb3B0X19saXN0LS1zaXplcyB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luOiAwIC0xLjVyZW07XG4gICAgcGFkZGluZzogMnB4IDEuNXJlbTtcbiAgfVxuXG4gIC5jcnMtb3B0X19saXN0LS1zd2F0Y2hlczo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gIC5jcnMtb3B0X19saXN0LS1zaXplczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY3JzLXN3YXRjaCB7XG4gICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNzhweDtcbiAgICBwYWRkaW5nOiAxMnB4IDRweDtcbiAgfVxuXG4gIC5jcnMtc3dhdGNoX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG4gIH1cblxuICAuY3JzLWFjY29yZF9faXRlbSB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWdpZnQge1xuICAgIC8qIG9yZGVyOiA5IWltcG9ydGFudDsgKi9cbiAgfVxuXG4gIC5jcnMtZ2lmdCB7XG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtdHJ1c3Qge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuY3JzLXRydXN0IHtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICAuY3JzLXRydXN0X19pY29uIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gIH1cblxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy1oZWxwIHtcbiAgICBtYXJnaW46IDE2cHggLTEuNXJlbSAwO1xuICAgIHBhZGRpbmc6IDE2cHggMS41cmVtIDA7XG4gIH1cblxuICAuY3JzLWhlbHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY3JzLW11dGVkKTtcbiAgfVxuXG4gIC5jcnMtaGVscCBhIHtcbiAgICBjb2xvcjogIzU3NTc1NztcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAuY3JzLWFjY29yZF9faGVhZCB7XG4gICAgcGFkZGluZzogMThweCAwO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgfVxuXG4gIC5jcnMtYWNjb3JkX19wYW5lbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIH1cblxuICAuY3JzLWRldGFpbHNfX2xpc3QgbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjMuOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICM2YjVmNjQ7XG4gIH1cblxuICAuY3JzLWRldGFpbHNfX3RvZ2dsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtcGRwLXJlZWxzLFxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy1ob3d0byB7XG4gICAgbWFyZ2luLWlubGluZTogLTEuNXJlbTtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLXBkcC1yZWVscyxcbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtaG93dG8sXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jcnMtcGRwLXJlZWxzLFxuICAuY3JzLWhvd3RvIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmNycy1wZHAtcmVlbHNfX2hlYWQge1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG5cbiAgLmNycy1wZHAtcmVlbHNfX3RpdGxlIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIH1cblxuICAuY3JzLXBkcC1yZWVsc19fc3VidGl0bGUge1xuICAgIG1heC13aWR0aDogMjg5cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG4gIH1cblxuICAuY3JzLWhvd3RvIHtcbiAgICBwYWRkaW5nOiAyNHB4IDEuNXJlbTtcbiAgfVxuXG4gIC5jcnMtaG93dG9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmNycy1ob3d0b19fdGl0bGUtLW1hZGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAuY3JzLWhvd3RvIHAsXG4gIC5jcnMtc3RlcF9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG4gIH1cblxuICAuY3JzLXN0ZXBfX2ljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICBib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbiNzYXRjYl9iYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHk6aGFzKC5jcnMtc3RpY2t5LmlzLXZpc2libGU6bm90KC5pcy1zdXNwZW5kZWQpKSA6aXMoI2NoYXQtYnV0dG9uLCAjbW91bnQtZmxvYXRpbmctZW5nYWdlbWVudC13aWRnZXQpIHtcbiAgYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5OmhhcyguY3JzLXN0aWNreS5oYXMtcG9wb3ZlcikgOmlzKCNjaGF0LWJ1dHRvbiwgI21vdW50LWZsb2F0aW5nLWVuZ2FnZW1lbnQtd2lkZ2V0KSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keTpoYXMoLmNycy1zdGlja3kuaXMtdmlzaWJsZTpub3QoLmlzLXN1c3BlbmRlZCkpIDppcygjY2hhdC1idXR0b24sICNtb3VudC1mbG9hdGluZy1lbmdhZ2VtZW50LXdpZGdldCkge1xuICAgIGJvdHRvbTogOTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAuY3VzdG9tUHJvZHVjdEltYWdlIC5jcGlfaWNvbnMge1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWwhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jcnMtc3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtODFweDtcbiAgei1pbmRleDogMjE0NzQ4MzYyMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMjVzIGVhc2U7XG59XG5cbi5jcnMtc3RpY2t5LmlzLXZpc2libGUge1xuICBib3R0b206IDA7XG59XG5cbi5jcnMtc3RpY2t5LmlzLXZpc2libGUuaXMtc3VzcGVuZGVkIHtcbiAgYm90dG9tOiAtODFweDtcbn1cblxuLmNycy1zdGlja3kgLmNycy1zdGlja3lfX2JhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDgxcHg7XG59XG5cbi5jcnMtc3RpY2t5Lmhhcy1wb3BvdmVyIC5jcnMtc3RpY2t5X19iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3JzLXN0aWNreV9faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1heC13aWR0aDogMTI3N3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufVxuXG4uY3JzLXN0aWNreV9fdGh1bWIge1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLXN0aWNreV9fdGl0bGUge1xuICBmbGV4OiAxIDAgMDtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtc3RpY2t5X19jb250cm9scyB7XG4gIGZsZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmNycy1zdGlja3lfX3BpY2tlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5jcnMtc3RpY2t5X19waWNrZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzO1xufVxuXG4uY3JzLXN0aWNreV9fdHJpZ2dlcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY3JzLWFjY2VudCk7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLmlzLW9wZW4ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tY3JzLWFjY2VudCk7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLS1zd2F0Y2gge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLS1zaXplIHtcbiAgd2lkdGg6IDU2cHg7XG4gIG1pbi13aWR0aDogNTZweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNycy1zdGlja3lfX2RvdCB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNycy1zdGlja3lfX3RyaWdnZXItbGFiZWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNycy1zdGlja3lfX3BvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGNhbGMoMTAwJSArIDE0cHgpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogbWluKDU2MHB4LCBjYWxjKDEwMHZ3IC0gMzJweCkpO1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAvKiBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47ICovXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAtOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNycy1zdGlja3lfX2Nsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1zdGlja3lfX2N0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZmxleDogMSAwIDA7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jcnMtYWNjZW50KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNycy1zdGlja3lfX2N0YTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiAjOGUxZTUzO1xufVxuXG4uY3JzLXN0aWNreV9fY3RhW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcblxuICAuY3JzLXN0aWNreV9fdGh1bWIsXG4gIC5jcnMtc3RpY2t5X190aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19pbm5lcixcbiAgLmNycy1zdGlja3lfX2NvbnRyb2xzLFxuICAuY3JzLXN0aWNreV9fcGlja2VycyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNycy1zdGlja3lfX3RyaWdnZXItLXN3YXRjaCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fZG90IHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fY3RhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjg0cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG5cbiAgLmNycy1zdGlja3lfX2N0YS1zZXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fcG9wb3ZlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiA4MXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDhweCAxLjVyZW0gMjBweDtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwIC04cHggMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSBzdmcgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgICBzdHJva2Utd2lkdGg6IDEuNjtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5IC5jcnMtc3RpY2t5X19iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU3KTtcbiAgfVxuXG4gIGJvZHkuY3JzLXBkcDpoYXMoLmNycy1zdGlja3kuaGFzLXBvcG92ZXIpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5cbi5pbnN0YWxsbWVudC5jYXB0aW9uLWxhcmdlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLyogQm90dG9tIG9mIHRoZSBwYWdlIOKAlCB0aGUgRmVyYSByZXZpZXdzIHdpZGdldCBhbmQgdGhlIHRoZW1lJ3MgXCJZb3UgbWF5IGFsc28gbGlrZVwiXG4gICBncmlkLCBib3RoIGluc2lkZSA8cHJvZHVjdC1yZWNvbW1lbmRhdGlvbnM+LiBFdmVyeXRoaW5nIGhlcmUgcmVzdHlsZXMgaG9zdCBtYXJrdXAsXG4gICBzbyBpdCBoYW5ncyBvZmYgLmNycy1yZWNzOiAucHJpY2UsIC5iYWRnZSBhbmQgLmNhcmRfX2NvbnRlbnQgYXJlIGFsc28gdGhlIGJ1eSBib3gnc1xuICAgYW5kIHRoZSB0aGVtZSdzIG93biBjbGFzc2VzIGVsc2V3aGVyZSBvbiB0aGUgc2l0ZS4gKi9cblxuLyogRmVyYSB3cml0ZXMgaXRzIG93biBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgYWZ0ZXIgb3VycywgYW5kIHN0eWxlcyB0aGVzZSBlbGVtZW50c1xuICAgd2l0aCBvbmUgY2xhc3Mgb2YgaXRzIG93biAoYC5mZXJhLXJldmlld3MtbWFzb25yeSAuZmVyYS1yZXZpZXctaGVhZGluZ2ApIOKAlCB0aGUgc2FtZVxuICAgc3BlY2lmaWNpdHkgb3VyIGAuY3JzLXJlY3Mg4oCmYCB3b3VsZCBoYXZlLCBzbyBldmVyeSB0aWUgd2VudCB0byBGZXJhLiBgLmNycy1wZHBgIG9uXG4gICA8Ym9keT4gYnJlYWtzIHRoZSB0aWUgZm9yIHRoZSB3aG9sZSB3aWRnZXQgd2l0aG91dCBhbiAhaW1wb3J0YW50LiAqL1xuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXIsXG4uY3JzLXJlY3MgLnJlbGF0ZWQtcHJvZHVjdHNfX2hlYWRpbmcge1xuICBtYXJnaW46IDAgMCAzMnB4O1xuICBwYWRkaW5nOiAwIDAgMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlci10aXRsZSxcbi5jcnMtcmVjcyAucmVsYXRlZC1wcm9kdWN0c19faGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDUwLjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyLXJvdzIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItcm93MiAuZmVyYS1yb3csXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeSB7XG4gIGdhcDogNXB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeS1yYXRpbmctY29udGFpbmVyIHtcbiAgZ2FwOiAxMnB4O1xufVxuXG4vKiBUd28gbW9yZSBsaW5rcyBpbiB0aGUgY2hhaW4gdGhhbiBlbHNld2hlcmUgaW4gdGhpcyBibG9jazogZm9yIHRoZSByYXRpbmcgcm93IEZlcmFcbiAgIHF1YWxpZmllcyB3aXRoIGAuZmVyYS1yZXZpZXdzLW1hc29ucnkgLmZlcmEtcmV2aWV3cy1oZWFkZXIgLuKApmAg4oCUIHRocmVlIGNsYXNzZXMsIHNvXG4gICBgLmNycy1wZHAgLmNycy1yZWNzIC7igKZgIG9ubHkgdGllZC4gSXRzIGVtLWJhc2VkIG1hcmdpbnMgYXJlIHplcm9lZCBhcyB3ZWxsLCBvciB0aGV5XG4gICB3b3VsZCBzdGFjayBvbiB0b3Agb2YgdGhlIGdhcHMgdGhlIGRlc2lnbiBzZXRzLiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXJldmlld3MtYXZnUmF0aW5nLW51bWJlciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuLyogVGhlIHN0YXJzIGFyZSDimIUgZ2x5cGhzIOKAlCB0aGVpciBzaXplIGlzIGEgZm9udCBzaXplLCBhbmQgdGhlaXIgc3BhY2luZyBhIGxldHRlclxuICAgc3BhY2luZywgd2hpY2ggYWxzbyBsZWF2ZXMgYSB0cmFpbGluZyBnYXAgYWZ0ZXIgdGhlIGxhc3Qgc3RhciB0byBwdWxsIGJhY2suIEZlcmEgc2l6ZXNcbiAgIHRoZSBnb2xkIG92ZXJsYXkgdGhhdCBjbGlwcyB0aGVtIGluIHBpeGVscywgYnV0IGl0IG1lYXN1cmVzIHRoZSByb3cgYWZ0ZXIgdGhpcyBydWxlXG4gICBsYW5kcywgc28gcGFydGlhbCByYXRpbmdzIHN0YXkgaG9uZXN0LiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzLXJhdGluZyxcbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlciAuZmVyYS1zdGFycy1iZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjdweDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMi43cHg7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlciAuZmVyYS1yZXZpZXdzLWNvdW50LXN0ciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LWRhdGUtdmFsLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1oZWFkaW5nLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1ib2R5LFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1jdXN0b21lci1uYW1lLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1wcm9kdWN0LWxpbmssXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3QtbmFtZSxcbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLXNob3dNb3JlLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI1LjJweDtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctYm9keSB7XG4gIGNvbG9yOiAjNmI1ZjY0O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LWN1c3RvbWVyLW5hbWUsXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3QtdGV4dC1jb250YWluZXIgLmZlcmEtcmV2aWV3LXByb2R1Y3QtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctcHJvZHVjdC10ZXh0LWNvbnRhaW5lciAuZmVyYS1yZXZpZXctcHJvZHVjdC1saW5rIHtcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcbn1cblxuLyogVGhlIGRlc2lnbiBsYXlzIHRoZSByZXZpZXdzIG91dCBhcyBhIHBsYWluIGdyaWQgb2YgZXF1YWwgY2FyZHMsIG5vdCBGZXJhJ3MgbWFzb25yeS5cbiAgIEZlcmEgcG9zaXRpb25zIHRoZSBjYXJkcyBpdHNlbGY6IGBwb3NpdGlvbjogYWJzb2x1dGVgIGNvbWVzIGZyb20gaXRzIHN0eWxlc2hlZXQsIGJ1dFxuICAgdGhlIHBlci1jYXJkIHdpZHRoIGFuZCB0cmFuc2Zvcm0sIGFuZCB0aGUgY29udGFpbmVyJ3MgaGVpZ2h0LCBhcmUgaW5saW5lIHN0eWxlcyBpdFxuICAgcmVjb21wdXRlcyBvbiBldmVyeSByZWxheW91dCDigJQgdGhvc2UgYXJlIHRoZSB0aHJlZSBkZWNsYXJhdGlvbnMgdGhhdCBuZWVkICFpbXBvcnRhbnRcbiAgIHRvIGhvbGQuIEl0cyBjbGFzc2VzIGFyZSBsZWZ0IGFsb25lOiB0aGUgY2FyZCdzIGZyYW1lIGFuZCBzaGFkb3cgaGFuZyBvZmZcbiAgIGAuZmVyYS1yZXZpZXdzLW1hc29ucnlgLiAqL1xuLyogYG1pbm1heCgwLCDigKYpYCwgbm90IGEgYmFyZSBgMWZyYDogdGhlIGZvb3RlciByb3cgaW5zaWRlIGEgY2FyZCBpcyBhIGZsZXggcm93IHdpdGggYVxuICAgNDBweCB0aHVtYm5haWwgYW5kIGEgcHJvZHVjdCBuYW1lLCBhbmQgaXRzIG1pbi1jb250ZW50IHdpZHRoIHdvdWxkIG90aGVyd2lzZSBob2xkIHRoZVxuICAgdHJhY2sgb3BlbiBhbmQgcHVzaCB0aGUgcGFnZSBpbnRvIGEgaG9yaXpvbnRhbCBzY3JvbGwgb24gYSBwaG9uZS4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1tYXNvbnJ5LWl0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgZ2FwOiAxOHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLW1hc29ucnktaXRlbXM+LmZlcmEtcmV2aWV3IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIFJvd3Mgc3RyZXRjaCBldmVyeSBjYXJkIHRvIHRoZSB0YWxsZXN0IGluIHRoZSByb3csIHNvIHRoZSBmb290ZXIgaXMgcHVzaGVkIGRvd24gdG9cbiAgIGtlZXAgdGhlIGJvcmRlcmVkIFwiVmlldyBwcm9kdWN0XCIgc3RyaXAgb24gdGhlIGJvdHRvbSBlZGdlIHdoZXJlIHRoZSBkZXNpZ24gaGFzIGl0LiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1tZWRpYSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3Qge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4vKiBGZXJhJ3MgcGFnZSBzaXplIGlzIDksIHdoaWNoIG5ldmVyIGZpbGxzIGEgcm93IOKAlCB0aGUgcmVtYWluZGVyIGlzIGhpZGRlbiBzbyB0aGUgZ3JpZFxuICAgZW5kcyBzcXVhcmUuIERlc2t0b3Agb3BlbnMgb24gZXhhY3RseSB0aGUgOCBjYXJkcyBvZiB0aGUgZGVzaWduLiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy5jcnMtcmVjcy1vdmVyZmxvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9uZSBjYXJkIGFjcm9zcyBvbiBwaG9uZXMsIGFzIEZlcmEgaXRzZWxmIHJlbmRlcnMgdGhlcmU7IGZvdXIgb24gZGVza3RvcCwgcGVyIHRoZVxuICAgZGVzaWduLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLW1hc29ucnktaXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAuY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtbWFzb25yeS1pdGVtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbi8qIFJldmlld3MgZ3JpZCDihpIgXCJTaG93IE1vcmVcIi4gRGVza3RvcCBvbmx5OyBvbiBwaG9uZXMgRmVyYSdzIG93biAyNHB4IHN0YW5kcywgd2hpY2ggaXNcbiAgIHRoZSBzYW1lIHNwbGl0IHRoZSByZXN0IG9mIHRoaXMgc2VjdGlvbiB1c2VzLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG59XG5cbi8qIFRoZSB0aGVtZSdzIGNhcmQgc3R5bGVzaGVldHMgYXJlIDxsaW5rPmVkIGluc2lkZSB0aGUgc2VjdGlvbiwgc28gdGhleSBjb21lIGFmdGVyIG91clxuICAgaW5qZWN0ZWQgPHN0eWxlPiDigJQgdGhlIHJ1bGVzIGJlbG93IG1hdGNoIHRoZWlycyBjbGFzcyBmb3IgY2xhc3MgYW5kIHdvdWxkIGxvc2UgdGhlIHRpZS5cbiAgIGAuY3JzLXBkcGAgb24gPGJvZHk+IG91dHdlaWdocyB0aGVtIHdpdGhvdXQgYW4gIWltcG9ydGFudC4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuY2FyZF9faW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAvKiBUaGUgaW1hZ2UgaXRzZWxmIGNhbid0IGNhcnJ5IHRoZSByYWRpdXM6IHRoZSB0aW50ZWQgLmNhcmRfX2lubmVyIGJlaGluZCBpdCB3b3VsZFxuICAgICBzaG93IHRocm91Z2ggdGhlIGN1dCBjb3JuZXJzLiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBUaGUgZGVzaWduIG1vdmVzIHRoZSBTYWxlIHBpbGwgb3V0IG9mIHRoZSB0aGVtZSdzIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiB0aGUgcGhvdG9cbiAgIHRvIHRoZSB0b3AgcmlnaHQuIFRoZSBvdmVybGF5IGlzIHRoZSB0aGVtZSdzIG93biB0aHJlZS1yb3cgZ3JpZCwgc28gdGhlIHBpbGwgaXNcbiAgIG1vdmVkIGJ5IHJlLXBsYWNpbmcgaXQgaW4gdGhhdCBncmlkIHJhdGhlciB0aGFuIGJ5IHRha2luZyBpdCBvdXQgb2YgZmxvdy4gKi9cbi5jcnMtcmVjcyAuY2FyZF9faW5uZXIgLmNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5jcnMtcmVjcyAuY2FyZF9faW5uZXIgLmNhcmRfX2JhZGdlIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmNycy1yZWNzIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDExMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMywgNjksIDEzMSwgMC43OSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY3JzLXJlY3MgLmNhcmQ+LmNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxN3B4IDAgMDtcbn1cblxuLmNycy1yZWNzIC5jYXJkPi5jYXJkX19jb250ZW50IC5jYXJkX19pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jcnMtcmVjcyAuY2FyZD4uY2FyZF9fY29udGVudCAuY2FyZF9faGVhZGluZz5hIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtcmVjcyAucHJpY2Uge1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4vKiBUaXRsZSDihpIgcHJpY2UuIFRoZSB0aGVtZSBzcGFjZXMgdGhlIGNhcmQncyByb3dzIHdpdGggYSBgOm5vdCgpYCBjaGFpbiBtb3JlIHNwZWNpZmljXG4gICB0aGFuIGFueSBzYW5lIHNlbGVjdG9yIG9mIG91cnMsIGFuZCBpdCBpcyBsaW5rZWQgYWZ0ZXIgb3VyIHN0eWxlIOKAlCB0aGUgb25lIHJ1bGUgaW5cbiAgIHRoaXMgc2VjdGlvbiB0aGF0IHNwZWNpZmljaXR5IGFsb25lIGNhbid0IHdpbi4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuY2FyZC1pbmZvcm1hdGlvbj4ucHJpY2Uge1xuICBtYXJnaW4tdG9wOiA5cHggIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5wcmljZS0tb24tc2FsZSAucHJpY2VfX3NhbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xufVxuXG4vKiBUaGUgZGVzaWduIGxlYWRzIHdpdGggdGhlIHNhbGUgcHJpY2UgYW5kIHRyYWlscyB0aGUgY3Jvc3NlZC1vdXQgb25lOyB0aGUgdGhlbWVcbiAgIHJlbmRlcnMgdGhlIHBhaXIgdGhlIG90aGVyIHdheSByb3VuZC4gKi9cbi5jcnMtcmVjcyAucHJpY2VfX3NhbGU+c3BhbjpoYXMoPiBzKSB7XG4gIG9yZGVyOiAxO1xufVxuXG4uY3JzLXJlY3MgLnByaWNlLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtcmVjcyAucHJpY2VfX3NhbGUgcy5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTkuNXB4O1xuICBjb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAwLjc1KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcblxuICAuY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXIsXG4gIC5jcnMtcmVjcyAucmVsYXRlZC1wcm9kdWN0c19faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlci10aXRsZSxcbiAgLmNycy1yZWNzIC5yZWxhdGVkLXByb2R1Y3RzX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICAuY3JzLXJlY3MgLmNhcmQ+LmNhcmRfX2NvbnRlbnQgLmNhcmRfX2hlYWRpbmc+YSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG59XG4iLCIvKipcbiAqIFRoZSBzdG9yZSBydW5zIFNob3BpZnkgTWFya2V0cywgc28gdGhlIHJlbmRlcmVkIHByaWNlIGlzIHRoZSBvbmx5IHJlbGlhYmxlIHNvdXJjZSBvZlxuICogYm90aCB0aGUgYW1vdW50IGFuZCB0aGUgZm9ybWF0IOKAlCBgcHJvZHVjdC5qc2AgcmVwb3J0cyBjZW50cyBpbiB0aGUgc2hvcCBjdXJyZW5jeSwgd2hpY2hcbiAqIGlzIG5vdCB3aGF0IHRoZSBzaG9wcGVyIHNlZXMuIFRoZXNlIGhlbHBlcnMgcmVhZCB0aGUgdGhlbWUncyBvd24gcmVuZGVyZWQgc3RyaW5ncyBhbmRcbiAqIHdyaXRlIGEgbmV3IGFtb3VudCBiYWNrIGluIGV4YWN0bHkgdGhlIHNhbWUgZm9ybWF0IChcIuKCtDgsNzgwLjAwIFVBSFwiLCBcIiQyNzYuMDBcIiwgXCIxLjIzNCw1MCDigqxcIikuXG4gKi9cblxuY29uc3QgTlVNQkVSID0gL1xcZFtcXGQuLMKg4oCvIF0qXFxkfFxcZC87XG5cbnR5cGUgRm9ybWF0ID0ge1xuICByYXc6IHN0cmluZztcbiAgZGVjaW1hbFNlcDogc3RyaW5nO1xuICBncm91cFNlcDogc3RyaW5nO1xuICBkZWNpbWFsczogbnVtYmVyO1xufTtcblxuY29uc3QgcmVhZEZvcm1hdCA9ICh0ZXh0OiBzdHJpbmcpOiBGb3JtYXQgfCBudWxsID0+IHtcbiAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKE5VTUJFUik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBjb25zdCByYXcgPSBtYXRjaFswXTtcblxuICAvLyBUaGUgZGVjaW1hbCBzZXBhcmF0b3IgaXMgdGhlIGxhc3QgXCIuXCIgb3IgXCIsXCIgdGhhdCBpcyBmb2xsb3dlZCBieSAxLTIgZGlnaXRzLlxuICBjb25zdCBjdXQgPSBNYXRoLm1heChyYXcubGFzdEluZGV4T2YoJy4nKSwgcmF3Lmxhc3RJbmRleE9mKCcsJykpO1xuICBjb25zdCBoYXNEZWNpbWFscyA9IGN1dCA+IC0xICYmIC9eWy4sXVxcZHsxLDJ9JC8udGVzdChyYXcuc2xpY2UoY3V0KSk7XG4gIGNvbnN0IGludFBhcnQgPSBoYXNEZWNpbWFscyA/IHJhdy5zbGljZSgwLCBjdXQpIDogcmF3O1xuXG4gIHJldHVybiB7XG4gICAgcmF3LFxuICAgIGRlY2ltYWxTZXA6IGhhc0RlY2ltYWxzID8gcmF3W2N1dF0gOiAnJyxcbiAgICBncm91cFNlcDogaW50UGFydC5tYXRjaCgvWy4swqDigK8gXS8pPy5bMF0gPz8gJycsXG4gICAgZGVjaW1hbHM6IGhhc0RlY2ltYWxzID8gcmF3Lmxlbmd0aCAtIGN1dCAtIDEgOiAwLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlTW9uZXkgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGZvcm1hdCA9IHJlYWRGb3JtYXQodGV4dCk7XG4gIGlmICghZm9ybWF0KSByZXR1cm4gTmFOO1xuICBjb25zdCB7IHJhdywgZGVjaW1hbFNlcCB9ID0gZm9ybWF0O1xuICBjb25zdCBjdXQgPSBkZWNpbWFsU2VwID8gTWF0aC5tYXgocmF3Lmxhc3RJbmRleE9mKCcuJyksIHJhdy5sYXN0SW5kZXhPZignLCcpKSA6IC0xO1xuICBjb25zdCBkaWdpdHMgPSAoY3V0ID4gLTEgPyByYXcuc2xpY2UoMCwgY3V0KSA6IHJhdykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgY29uc3QgZnJhYyA9IGN1dCA+IC0xID8gcmF3LnNsaWNlKGN1dCArIDEpIDogJyc7XG4gIHJldHVybiBOdW1iZXIoYCR7ZGlnaXRzfS4ke2ZyYWMgfHwgMH1gKTtcbn07XG5cbi8qKlxuICogXCLigrQ4LDc4OC4wMCBVQUhcIiDihpIgXCLigrQ4LDc4OC4wMFwiLiBNYXJrZXRzIHJlbmRlcnMgdGhlIGNvZGUgaW50byB0aGUgcHJpY2U7IHRoZSBkZXNpZ25cbiAqIHNob3dzIHRoZSBhbW91bnQgYWxvbmUuIEJ1dCBzb21lIGN1cnJlbmNpZXMgTWFya2V0cyBzdXBwb3J0cyBoYXZlIG5vIHN5bWJvbCBhdCBhbGxcbiAqIChcIjEsMjM0LjAwIFNFS1wiKSwgc28gdGhlIGNvZGUgaXMgdGhlIG9ubHkgdGhpbmcgdGVsbGluZyB0aGUgc2hvcHBlciB3aGF0IGN1cnJlbmN5XG4gKiB0aGlzIGlzIOKAlCBzdHJpcHBpbmcgaXQgdGhlcmUgd291bGQgbGVhdmUgYSBiYXJlLCBhbWJpZ3VvdXMgbnVtYmVyLiBPbmx5IHN0cmlwIHRoZVxuICogY29kZSB3aGVuIGEgc3ltYm9sIHN1cnZpdmVzIHdpdGhvdXQgaXQ7IGZvcm1hdHMgd2l0aG91dCBhIHRyYWlsaW5nIGNvZGVcbiAqIChcIiQyNzYuMDBcIiwgXCIxLjIzNCw1MCDigqxcIikgY29tZSBiYWNrIHVudG91Y2hlZCBlaXRoZXIgd2F5LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaXBDdXJyZW5jeUNvZGUgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRyaW1tZWQgPSB0ZXh0LnRyaW0oKTtcbiAgY29uc3QgbWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9eKC4qXFxTKVxccytbQS1aXXszfSQvKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIHRyaW1tZWQ7XG4gIGNvbnN0IFssIHdpdGhvdXRDb2RlXSA9IG1hdGNoO1xuICBjb25zdCBoYXNTeW1ib2wgPSAvW15cXGRcXHMuLF0vLnRlc3Qod2l0aG91dENvZGUpO1xuICByZXR1cm4gaGFzU3ltYm9sID8gd2l0aG91dENvZGUgOiB0cmltbWVkO1xufTtcblxuLyoqIFJlbmRlciBgdmFsdWVgIHVzaW5nIHRoZSBjdXJyZW5jeSBzeW1ib2wsIHNlcGFyYXRvcnMgYW5kIHByZWNpc2lvbiBvZiBgdGVtcGxhdGVgLiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdExpa2UgPSAodGVtcGxhdGU6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICBjb25zdCBmb3JtYXQgPSByZWFkRm9ybWF0KHRlbXBsYXRlKTtcbiAgaWYgKCFmb3JtYXQpIHJldHVybiBTdHJpbmcodmFsdWUpO1xuXG4gIGNvbnN0IFtpbnQsIGZyYWNdID0gdmFsdWUudG9GaXhlZChmb3JtYXQuZGVjaW1hbHMpLnNwbGl0KCcuJyk7XG4gIGNvbnN0IGdyb3VwZWQgPSBmb3JtYXQuZ3JvdXBTZXBcbiAgICA/IGludC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBmb3JtYXQuZ3JvdXBTZXApXG4gICAgOiBpbnQ7XG5cbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoZm9ybWF0LnJhdywgZnJhYyA/IGdyb3VwZWQgKyBmb3JtYXQuZGVjaW1hbFNlcCArIGZyYWMgOiBncm91cGVkKTtcbn07XG4iLCJpbXBvcnQgeyBzdHJpcEN1cnJlbmN5Q29kZSB9IGZyb20gJy4vbW9uZXknO1xuXG5leHBvcnQgdHlwZSBWYXJpYW50ID0ge1xuICBpZDogbnVtYmVyO1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xuICBwcmljZTogbnVtYmVyO1xuICBmZWF0dXJlZF9pbWFnZTogeyBzcmM6IHN0cmluZyB9IHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB7XG4gIG9wdGlvbnM6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZXM6IHN0cmluZ1tdIH1bXTtcbiAgdmFyaWFudHM6IFZhcmlhbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3QgPSAoKTogUHJvbWlzZTxQcm9kdWN0PiA9PlxuICBmZXRjaChgJHtsb2NhdGlvbi5wYXRobmFtZX0uanNgKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG5cbi8qKlxuICogTWFya2V0cyBvbiB0aGlzIHN0b3JlIHJlc29sdmVzIGJ5IHZpc2l0b3IgSVAsIG5vdCBhIGNvb2tpZSDigJQgYHZhcmlhbnQucHJpY2VgIGluXG4gKiBgLmpzYCBhbHJlYWR5IGNvbWVzIGJhY2sgY29udmVydGVkIHRvIHRoZSBzaG9wcGVyJ3MgYWN0aXZlIGN1cnJlbmN5IChjb25maXJtZWQgbGl2ZTpcbiAqIGEgVk5EIHZpc2l0b3IgZ2V0cyBWTkQgY2VudHMpLiBgU2hvcGlmeS5jdXJyZW5jeS5yYXRlYCwgd2hpY2ggRGF3biBpbmplY3RzIG9uIGV2ZXJ5XG4gKiBwYWdlLCBpcyB0aGF0IHNhbWUgY29udmVyc2lvbiBmYWN0b3IgYmFjayB0byB0aGUgc2hvcCdzIG93biBiYXNlIGN1cnJlbmN5LCBzbyBpdCdzXG4gKiB3aGF0IGxldHMgYSBmaXhlZCB0aHJlc2hvbGQgbGlrZSBgR0lGVF9NSU5fUFJJQ0VfQ0VOVFNgIGhvbGQgYWNyb3NzIGV2ZXJ5IG1hcmtldC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2VQcmljZUNlbnRzID0gKGNlbnRzOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmF0ZSA9IE51bWJlcigod2luZG93IGFzIHVua25vd24gYXMgeyBTaG9waWZ5PzogeyBjdXJyZW5jeT86IHsgcmF0ZT86IHN0cmluZyB9IH0gfSkuU2hvcGlmeT8uY3VycmVuY3k/LnJhdGUpO1xuICByZXR1cm4gcmF0ZSA+IDAgPyBjZW50cyAvIHJhdGUgOiBjZW50cztcbn07XG5cbmV4cG9ydCB0eXBlIEdpZnQgPSB7IHRpdGxlOiBzdHJpbmc7IHByaWNlOiBzdHJpbmc7IHZhcmlhbnRJZDogbnVtYmVyIH07XG5cbi8qKlxuICogUmVhZHMgdGhlIGdpZnQgcHJvZHVjdCdzIHRpdGxlIGFuZCBwcmljZSBvZmYgaXRzIG93biBsaXZlIHBhZ2UgcmF0aGVyIHRoYW5cbiAqIGAvcHJvZHVjdHMvPGhhbmRsZT4uanNgLCBzbyB0aGUgZm9ybWF0IChzeW1ib2wsIHNlcGFyYXRvcnMpIG1hdGNoZXMgdGhlIHByaWNlXG4gKiBlbHNld2hlcmUgb24gdGhlIHBhZ2UgZXhhY3RseSwgdGhlIHNhbWUgd2F5IG1vbmV5LnRzIHJlYWRzIHRoZSBjdXJyZW50IHByb2R1Y3QncyBvd25cbiAqIHByaWNlIG9mZiB0aGUgcmVuZGVyZWQgRE9NLiAoVGhlIGltYWdlIGlzIGEgYnVuZGxlZCBhc3NldCwgbm90IHJlYWQgb2ZmIHRoZSBwYWdlIOKAlFxuICogc2VlIGdpZnQudHN4LikgVGhlIHZhcmlhbnQgaWQgaXMgY3VycmVuY3ktYWdub3N0aWMsIHNvIHRoYXQgb25lIHBpZWNlIGNvbWVzIGZyb20gdGhlXG4gKiBwbGFpbiBgLmpzYCBlbmRwb2ludCDigJQgdGhlIHByb2R1Y3QncyBmaXJzdC9kZWZhdWx0IHZhcmlhbnQsIG1hdGNoaW5nIHdoYXQgdGhlIHByaWNlXG4gKiBhYm92ZSBhbmQgdGhlIGNhcmQgaW4gZ2lmdC50c3ggYm90aCBzaG93LlxuICovXG5leHBvcnQgY29uc3QgZmV0Y2hHaWZ0ID0gYXN5bmMgKGhhbmRsZTogc3RyaW5nKTogUHJvbWlzZTxHaWZ0PiA9PiB7XG4gIGNvbnN0IGh0bWwgPSBhd2FpdCBmZXRjaChgL3Byb2R1Y3RzLyR7aGFuZGxlfWApLnRoZW4oKHIpID0+IHIudGV4dCgpKTtcbiAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcignaDEnKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcblxuICBjb25zdCBwcmljZSA9IGRvYy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2lkXj1cInByaWNlLVwiXVtpZCQ9XCJfX21haW5cIl0nKSE7XG4gIGNvbnN0IHdhcyA9IHByaWNlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgIHByaWNlLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS0tb24tc2FsZScpID8gJ3MucHJpY2UtaXRlbS0tcmVndWxhcicgOiAnLnByaWNlX19yZWd1bGFyIC5wcmljZS1pdGVtLS1yZWd1bGFyJyxcbiAgKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcblxuICBjb25zdCB7IHZhcmlhbnRzIH0gPSBhd2FpdCBmZXRjaChgL3Byb2R1Y3RzLyR7aGFuZGxlfS5qc2ApLnRoZW4oKHIpID0+IHIuanNvbigpKTtcblxuICByZXR1cm4geyB0aXRsZSwgcHJpY2U6IHN0cmlwQ3VycmVuY3lDb2RlKHdhcyksIHZhcmlhbnRJZDogdmFyaWFudHNbMF0uaWQgfTtcbn07XG5cbi8qKlxuICogVGhlIHRoZW1lIGNvbnZlcnRzIGVhY2ggPHNlbGVjdD4gaW50byBhIGpRdWVyeSBncmlkUGlja2VyIDx1bD4uIFRoZSA8c2VsZWN0PlxuICogc3RheXMgdGhlIHNvdXJjZSBvZiB0cnV0aCwgc28gd2UgYWx3YXlzIHJlYWQgYW5kIGRyaXZlIGl0IOKAlCBuZXZlciB0aGUgPHVsPi5cbiAqIEl0IGlzIHJlLWNyZWF0ZWQgYnkgRGF3biBvbiBldmVyeSB2YXJpYW50IGNoYW5nZSwgaGVuY2UgdGhlIGZyZXNoIHF1ZXJ5LlxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ID0gKG9wdGlvbjogc3RyaW5nKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50Pihgc2VsZWN0W25hbWU9XCJvcHRpb25zWyR7b3B0aW9ufV1cIl1gKTtcblxuZXhwb3J0IGNvbnN0IHNldE9wdGlvbiA9IChvcHRpb246IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBnZXRTZWxlY3Qob3B0aW9uKTtcbiAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xuICBzZWxlY3QudmFsdWUgPSB2YWx1ZTtcbiAgc2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+XG4gIHByb2R1Y3Qub3B0aW9ucy5tYXAoKG8pID0+IGdldFNlbGVjdChvLm5hbWUpPy52YWx1ZSA/PyAnJyk7XG5cbi8qKlxuICogVGhlIHZhcmlhbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdHMnIGN1cnJlbnQgc3RhdGUuIGAuanNgIHZhcmlhbnQgcHJpY2VzIGFyZSBhbHdheXMgaW5cbiAqIHRoZSBzaG9wJ3Mgb3duIGJhc2UgY3VycmVuY3kgKHNlZSBgZmV0Y2hHaWZ0YCBhYm92ZSksIG5vdCB0aGUgc2hvcHBlcidzIGxvY2FsaXplZFxuICogb25lIOKAlCB3aGljaCBpcyBleGFjdGx5IHdoYXQgbWFrZXMgdGhpcyBzYWZlIHRvIGNvbXBhcmUgYWdhaW5zdCBhIGZpeGVkICQgdGhyZXNob2xkXG4gKiByZWdhcmRsZXNzIG9mIHdoaWNoIE1hcmtldCB0aGUgcGFnZSBpcyByZW5kZXJpbmcgaW4uXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFZhcmlhbnQgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkVmFsdWVzKHByb2R1Y3QpO1xuICByZXR1cm4gcHJvZHVjdC52YXJpYW50cy5maW5kKCh2KSA9PiB2Lm9wdGlvbnMuZXZlcnkoKG8sIGkpID0+IG8gPT09IHNlbGVjdGVkW2ldKSk7XG59O1xuXG4vKipcbiAqIEEgcHJvZHVjdCB3aXRoIG5vIG9wdGlvbnMgc3RpbGwgY29tZXMgYmFjayBmcm9tIGAuanNgIGNhcnJ5aW5nIG9uZSDigJQgU2hvcGlmeSdzXG4gKiBzeW50aGV0aWMgYFRpdGxlIC8gRGVmYXVsdCBUaXRsZWAsIHdoaWNoIHRoZSB0aGVtZSBpdHNlbGYgbmV2ZXIgcmVuZGVycyBhIDxzZWxlY3Q+XG4gKiBmb3IuIFRoZXJlIGlzIG5vdGhpbmcgdG8gcGljaywgc28gaXQgbXVzdCBub3QgYmVjb21lIGEgY2FyZCBvciBhIHN0aWNreS1iYXIgcGlja2VyLlxuICpcbiAqIEZpbHRlcmVkIGF0IHRoZSByZW5kZXIgc2l0ZXMgcmF0aGVyIHRoYW4gb3V0IG9mIGBwcm9kdWN0Lm9wdGlvbnNgOiBldmVyeSBpbmRleCBpblxuICogaGVyZSAoYGltYWdlT3B0aW9uSW5kZXhgLCBgb3B0aW9uSW1hZ2VzYCwgYGlzQXZhaWxhYmxlYCwgYHNlbGVjdGVkVmFsdWVzYCkgaW5kZXhlc1xuICogaW50byBgdmFyaWFudC5vcHRpb25zYCwgd2hpY2gga2VlcHMgdGhlIHN5bnRoZXRpYyBlbnRyeSByZWdhcmRsZXNzLlxuICovXG5leHBvcnQgY29uc3QgaXNSZWFsT3B0aW9uID0gKG9wdGlvbjogeyBuYW1lOiBzdHJpbmc7IHZhbHVlczogc3RyaW5nW10gfSkgPT5cbiAgIShvcHRpb24udmFsdWVzLmxlbmd0aCA9PT0gMSAmJiBvcHRpb24udmFsdWVzWzBdID09PSAnRGVmYXVsdCBUaXRsZScpO1xuXG4vKipcbiAqIFdoaWNoIG9wdGlvbiBkcml2ZXMgdGhlIGdhbGxlcnkgaW1hZ2Ug4oCUIE1hdGVyaWFsIGhlcmUsIGJ1dCBkZXJpdmVkIHJhdGhlciB0aGFuXG4gKiBhc3N1bWVkIHNvIHRoZSBleHBlcmltZW50IGhvbGRzIG9uIGFueSBQRFAuIFdlIGxvb2sgZm9yIHRoZSBvcHRpb24gd2hlcmUgZXZlcnlcbiAqIHZhbHVlIG1hcHMgdG8gZXhhY3RseSBvbmUgaW1hZ2UgYW5kIHRoZSBpbWFnZXMgYWN0dWFsbHkgZGlmZmVyIGJldHdlZW4gdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3QgaW1hZ2VPcHRpb25JbmRleCA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnlWYWx1ZSA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcbiAgICBwcm9kdWN0LnZhcmlhbnRzLmZvckVhY2goKHYpID0+IHtcbiAgICAgIGlmICghdi5mZWF0dXJlZF9pbWFnZSkgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsdWUgPSB2Lm9wdGlvbnNbaV07XG4gICAgICBpZiAoIWJ5VmFsdWUuaGFzKHZhbHVlKSkgYnlWYWx1ZS5zZXQodmFsdWUsIG5ldyBTZXQoKSk7XG4gICAgICBieVZhbHVlLmdldCh2YWx1ZSkhLmFkZCh2LmZlYXR1cmVkX2ltYWdlLnNyYyk7XG4gICAgfSk7XG4gICAgY29uc3QgaW1hZ2VzID0gbmV3IFNldChbLi4uYnlWYWx1ZS52YWx1ZXMoKV0uZmxhdE1hcCgocykgPT4gWy4uLnNdKSk7XG4gICAgaWYgKGJ5VmFsdWUuc2l6ZSA+IDEgJiYgaW1hZ2VzLnNpemUgPiAxICYmIFsuLi5ieVZhbHVlLnZhbHVlcygpXS5ldmVyeSgocykgPT4gcy5zaXplID09PSAxKSkgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG4vKipcbiAqIHZhbHVlIC0+IGltYWdlIGZvciB0aGUgZ2l2ZW4gb3B0aW9uLCByZWFkIGZyb20gdGhlIGxpdmUgcHJvZHVjdC5cbiAqIFZhbHVlcyB3aG9zZSB2YXJpYW50cyBjYXJyeSBubyBmZWF0dXJlZF9pbWFnZSBzaW1wbHkgZG8gbm90IGFwcGVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbkltYWdlcyA9IChwcm9kdWN0OiBQcm9kdWN0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBwcm9kdWN0LnZhcmlhbnRzLmZvckVhY2goKHYpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHYub3B0aW9uc1tpbmRleF07XG4gICAgaWYgKHYuZmVhdHVyZWRfaW1hZ2UgJiYgIW1hcFt2YWx1ZV0pIG1hcFt2YWx1ZV0gPSB2LmZlYXR1cmVkX2ltYWdlLnNyYztcbiAgfSk7XG4gIHJldHVybiBtYXA7XG59O1xuXG4vKiogSXMgYHZhbHVlYCBmb3Igb3B0aW9uIGBpbmRleGAgb3JkZXJhYmxlIGdpdmVuIGV2ZXJ5dGhpbmcgZWxzZSBjdXJyZW50bHkgc2VsZWN0ZWQ/ICovXG5leHBvcnQgY29uc3QgaXNBdmFpbGFibGUgPSAocHJvZHVjdDogUHJvZHVjdCwgaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkVmFsdWVzKHByb2R1Y3QpO1xuICByZXR1cm4gcHJvZHVjdC52YXJpYW50cy5zb21lKFxuICAgICh2KSA9PlxuICAgICAgdi5hdmFpbGFibGUgJiZcbiAgICAgIHYub3B0aW9uc1tpbmRleF0gPT09IHZhbHVlICYmXG4gICAgICB2Lm9wdGlvbnMuZXZlcnkoKG8sIGkpID0+IGkgPT09IGluZGV4IHx8IG8gPT09IHNlbGVjdGVkW2ldKSxcbiAgKTtcbn07XG4iLCJjb25zdCBsaW5lVGV4dCA9IChodG1sOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIGVsLnRleHRDb250ZW50IS5yZXBsYWNlKC8gL2csICcgJykudHJpbSgpO1xufTtcblxuLyoqXG4gKiBUaGUgaG9zdCBkZXNjcmlwdGlvbiBpcyBvbmUgVGlueU1DRSBibG9iIHdob3NlIHNoYXBlIHZhcmllcyBwZXIgcHJvZHVjdDogdGhlXG4gKiBcIi1cIiBwcmVmaXhlZCBzcGVjIGxpbmVzIG1heSBzaXQgaW4gdGhlaXIgb3duIDxwPiwgb3Igc2hhcmUgYSA8cD4gd2l0aCB0aGUgcHJvZHVjdFxuICogbmFtZS4gUGFyc2VkIGxpbmUtYnktbGluZSBzbyBpdCBob2xkcyBvbiBhbnkgUERQLCBhbmQgc28gdGhlIHNhbWUgc3BlYyBsaW5lcyBjYW5cbiAqIGZlZWQgYm90aCB0aGUgZGV0YWlscyBhY2NvcmRpb24gYW5kIHRoZSBnYWxsZXJ5IGNhcHRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZURlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZSBoMScpPy50ZXh0Q29udGVudD8udHJpbSgpO1xuICBjb25zdCBzcGVjczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcHJvc2U6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBkZXNjcmlwdGlvbi5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignOnNjb3BlID4gcCcpLmZvckVhY2goKHApID0+IHtcbiAgICAvLyBUaW55TUNFIGVtaXRzIDxiciBkYXRhLW1jZS1mcmFnbWVudD1cIjFcIj4gYXMgd2VsbCBhcyBiYXJlIDxicj4uXG4gICAgY29uc3QgbGluZXMgPSBwLmlubmVySFRNTC5zcGxpdCgvPGJyW14+XSo+L2dpKS5tYXAobGluZVRleHQpLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCBidWxsZXRzID0gbGluZXMuZmlsdGVyKChsaW5lKSA9PiBsaW5lLnN0YXJ0c1dpdGgoJy0nKSk7XG5cbiAgICBpZiAoYnVsbGV0cy5sZW5ndGggPj0gMikge1xuICAgICAgc3BlY3MucHVzaCguLi5idWxsZXRzLm1hcCgobGluZSkgPT4gbGluZS5yZXBsYWNlKC9eLVxccyovLCAnJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQSBwYXJhZ3JhcGggdGhhdCBvbmx5IHJlcGVhdHMgdGhlIHByb2R1Y3QgbmFtZSBkdXBsaWNhdGVzIHRoZSA8aDE+LlxuICAgIGlmIChwcm9kdWN0TmFtZSAmJiBsaW5lVGV4dChwLmlubmVySFRNTCkucmVwbGFjZSgvXFxzKlxcKCNcXGQrXFwpJC8sICcnKSA9PT0gcHJvZHVjdE5hbWUpIHJldHVybjtcbiAgICBpZiAocC50ZXh0Q29udGVudCEudHJpbSgpKSBwcm9zZS5wdXNoKHAuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3BlY3MsIHByb3NlIH07XG59O1xuXG4vKipcbiAqIFRoZSBjYXB0aW9uIHVuZGVyIHRoZSBpbmNsdXNpb24gaWNvbnMgaW4gdGhlIGRlc2lnbiByZWFkcyBcIlRoZSBpbmNsdXNpb25zIGFyZSBmdXNlZFxuICogd2l0aGluIHRoZSBzdG9uZVwiIOKAlCB3aGljaCBpcyBvbmUgb2YgdGhpcyBwcm9kdWN0J3Mgb3duIHNwZWMgbGluZXMsIHNvIGl0IGlzIHRha2VuXG4gKiBmcm9tIHRoZSBkZXNjcmlwdGlvbiByYXRoZXIgdGhhbiBoYXJkY29kZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpbmNsdXNpb25DYXB0aW9uID0gKHNwZWNzOiBzdHJpbmdbXSkgPT5cbiAgc3BlY3MuZmluZCgobGluZSkgPT4gL2Z1c2VkL2kudGVzdChsaW5lKSkgPz8gc3BlY3MuZmluZCgobGluZSkgPT4gL2luY2x1c2lvbi9pLnRlc3QobGluZSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURnQUFBQTRDQVlBQUFDb2hqc2VBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFCWVRTVVJCVkdoRDdabDVXTTVwMy8rL3c0d1pzbFJhTEsybzdNbVdKVXVUMjk0UUlseEtDS21rR0lSUklqdU5FZG1TYkdtaGRDZHRLbGxDcTBxN3BLdDkzN08vZnNlVm1mdSt4L3lhMysrUDUzbU81dyt2NHppUDZ6aXU3WHU5ditkNXZqL3Z6M2tKd2xlKzhwV3ZmT1VyWC9uS1YvNExlZXpqMHpuYThhQlMyUFpmUm9YYjcvcnA3aWFIeGNFYnQ0bUNyRGFiQjFuYkx3bXkzandyeUhiTCtLQ04yMVNpbzZPLy9mTHovMnVJT0hpMng0TmRCN1R2NzNSYUhyMzFsNFAzTisrOEZtVzNQVFpxNDlhOFNFdjcycWkxdGp5d3NDWFdmQVAzVGRjVExWcEw1UEkxaEM2M0lGaGtRYUJvVFYzZ3l2VVpkOWJiQm9aWWJka1NiTGw1Vk1MWnM5OTllWjMvRVVKT25PZ2V2V1BmaUFjT2pzdGl0KzA2RW1QdkVCRnI1L0Q2Z2ZYUFBOKzRuY3oxbThsWXNZSDBoU3RKbldGTTBzVFp4SStlUnB5T1BvK0c2UkU3ZUR6UkEzV0pIRENLc0g0NmhFcUc1bGdpeHhnUU8yc3hqMFhyQ0ZtNkN0OS96STl5R3p5NDY1ZlhiMFBUYU9mTTBhYUhUc3pjNkdadzZFSmd0eTlmLy8vQjE5ZTNvNnRuZ1BTR3c3NGpSRTZYbDY5eERUemlzMjFmZUp6dHo1L0YyR3dqMDhLT1RCTUxNbWN0SVdQcVBMS256dWZsM09Ya0w3R2dZSTBkQmR2M1VuRFlqUUxQNjd3S0NpSDNuM2ZKQ2c3bHhaMVFVbTc0azNEMklrK1Avc1pEdXgzRUxqYm40VFFqSHV2b0U2azVGZy8xNGRXblZZYkpmUG03MnVpbVk3RnF1dFZ2ckhMMFlQN21VNitYN1RnYmJtaC82b1JvNTNsTFN4ZlArV3YyWHY1eDRYWVBYZHY5bDNVM0hmS2VaTEx6NG84aVIwOFQ2OFBlMnkzMlhUMjlaSmZYM1ZWN3J5ZWJPMThyM1hERTcrTnVqMGlNamtUeXo5VTdLUGlIRVJsVDUzOFdZeWhDdk5xT3NuMnUxTndJb0RFcGxkYnFHdDRDYjRBV29BR29BY28vdktPb3FaR0M2aXB5UzRySkxpOGxzNmFLalBvYTBodHF5V3lvSmFlOGxKZlBFbmgyNkZjdVRQOUo3S2lxS3YybHRzOG96QmROWHJFSDYwUFhVVFg1allsV0hoeStITWJLZlQ3OHRPMFNLNXl1c0g3L05ZeDNlTEo0NTJWc2p0M0V4dlUyQ3h6OU1YRzV6YzNvNXl3OUVNeHd5K3Y4Zk80K0hxRnBLRm5lNHBhbEM0MTdEbEhqSDBSalFncHY2aHQ0RDN6OGZid0RXb3RMYVV6Tm9EcjBIcVZudkNod09rejJxbzJrempZaDhjZjVQQjAvaTBjamZ5UjIzQXp1Nnh0eWY2WXhEeXcyOHZTd0sybUJ3UlFVaWR2RStrWkZpbDFkWGRzUk9OUkVKR2l2UjVqa2hOYUtVL1JlZEFMN0UwSG8yWGpTZWZaeERCMXVjQ2s0am41bTUxRlk3TTdSR3cvWTdCNkp2TWtGaGxoNlkrc2VnNjc5TFF5ZDc2Smw2WWVhaFM4OWwxM2xibll0RXY0bFJseE1RL1FqcXM5NFViWnBGMFh6Vi9KNi9CenloMDBsdC85WU12dHFreVkvaUJUcEFUeVRVaUh1K3o0OCtGYVJhS0VuRVlJMG9VSjM3Z3JkQ0JHNkUvcU5ITkU5MUhtcW84OURjeXN1Tyt3U2UzcDZ0aU53a0lsSVNtOGpIY2J0WXFkYkVJdC84VVlZNFVSUG81UHNPQk5LbnlWbmtKNTNpaCszK2lJNkdFeTNSZWZvdnVnOHY5NUtZSTVqTUlLK0d4TzNCdUwzSUFlbFZUZFFYZU9EM0JwL2dpNkcwbnJ1RW1YV0RoVE5NK08xN2l4ZURaNUVmcit4NUt1T0lsOTFOSy9VeC9KeXdEanlCazhpUjhlQWJEMURzbjRTa1dscVJkcEtLMUxNclVsY1pjMFQ0NVU4bUw2QW1ISFRpZXl2UTRSMFA2SzdLUE93aXdyaDB2MDRwZEJQN0tpcTNZN0Fub1lpdzNVdVdMcGM1UWY5L1hRM1BNNGdrVHRLeHFldytUVVkrWVduRWFZZXczRDNMV3pkSXZqTzBCM1pKUjRzM2grS3RvMHZDL2VITXNUS0grbWxWMWpoR29OSGVCWmQxZ2JoTTM0WjFVcERmeGN6aXZ6K3VoUU1tNEo0MGp4S2w2Nm5jdGNCNmoxdjBCQVVSbU44TW8wdkM2Z3ZyNkMydVltcWQyOG9hMjJtcUxtUmdvWTY4aW9yeUpFc3gveVhwQ1Vsa1JvYVR2cWw2NlJ0MlUzTTVMbWNWaDRvZHUzUjNoNGNaQ3pxcG1lTHlzSWpDQlAzSVV6YXo1bWI5eG03d1JOQlp5L2piYTdpZGpPT2pyUGNFSDQ4Z2ZQVlI5aWNqa2JRUDBrZjB5dmNpTWxpdU0xTnVpenlZdUxXWUdZNVJ5QmpHWXpmSkZQcUo4NmtkUGtHcXB5T1VIL1pqOWI0Wk42WFZmQ3BiZkgrbXorV3NjUm82b0hxbG1iSzZ1b1FWMVR3cXJpSXZPSWlja3FMeVM0ckpVc2l0cmFhVnkxTmxMeHA0VVZXRnRkL2N4TzdtcG0xSTFCN3VValF0a1FZNGNDNmcvN00yWElGcWVsSGtabC9FczBWNTFCZGNZSHAyLzJSWDNLZVhzc3VNczdPajhHVzNoanN1TTFZdTF0MFh1akphUHRBcmtWbm83ckdGNmtsMTFBdzl5ZjRWaHlmS3Y0cTVnOCtmZmpJKy9KSzNxUm4waGp6aUNydkFJb1BuQ0RmeG9GTTQxV2t6bDFLa3NFQ251ck5KczdBaU1kemwvTEl4SnduVzNhU2RPWWlXUkhSaUl1S3lDb3Z4UzhpL0cvMllOLzVvbEdMZjBGLzNTbW1idkJnaXUwbGhMRXV5TXc3eWZXd2VKU1huVWNZYzVBVmgwSnd2NTJJWU9DR01Qc001MFBTV09BU3h2Y0xQQmxtYzR1VkoyS1p1UDBPYTA4OVJuYTVOM2Z6bS80c3BxaUUxcmdFNmk5NlUrM2dRdG1pTlJSUG5rK2h6alR5TmNhUm82eERoc0pnVW1VMFNPeW14clBPU2p6K3JqZXgzOGdUSmNnU0ljZ1FMakVZb1FmaEhSV0lsZE1rVVc4MlR6WTVjRzN2ZnJGbndOOElITGx3Rjh0M1gwYlFjVUtZNElMamhUQkdyN3RFRDhPVHFKdDZNR2ZIVFpSRW5xaWFlVEZqeDIzbU9nYlR5Y2lEM3FiWDhIMlFpKzZXSUlRWjUxbDhKQnEzTzVsMFcrbFA4T1ZJM3Azem90TGVrVklqYzRyMURDa2NPb1hDQWVNb1ZCL3plZlRUcGFDL2JwdkF2R0ZUeUIwemcyeURCV1F1TkNkOTBTcFNqRmVSYUd6T2t4bkdQQmczZzVqaEU0bnNOWkFJcWI3RWZOK0hPQ2tWSW1VSDRONUxVK3phcnNsb200cUVZWllJSTNmdzAvWnI2S3c2eDRJZE54aTYraUlkOUk4eGZOMWxUZ1U4bzhzOGQ0UnBKOWw4N2o1clRrU2h1T0l5bXV0OW1iczNqSEUvQjdIcmFnTHFhLzJSRm5tallCdkdUYjBWMUt0cTgxcHROSVZxWXlqc3I0dDR5R1NLeDgraHpNaWNhbnRINms5NTBoUVFRbFBVQTVyU01tZ3NLYVd1dHBhYTFoYkttNXNvYWFqbmRVMDErV1dsNUx3dUlETTdpN1JIY1R6M0R5RHR4QmxTVjI4a1p1U1BuSllJN05HakhZSHF4cUlCYzdjendPZ3c1bnQ4TWRwNUEySG9IcVRudTNIbGJqeDlsNTVIbUhRTWt3TjNjTGtlaHpEck5JTGhXYTVGWmJMNFlBVEN0RE9NMlJ6RThjQTBobTY4elpSZFljalpoSEp6a2hsTlk2ZFJ2bVFkMVZ1ZGFiam9UV3YwbzdhbCt1bTlwT1QvbVErU1dnazBTdExNaC9kVXRMWlFVbDlIUVVVRitWV1Y1RlZYa2xOVlFYWk5GYm4xdFJSSVRLYWxpUmNwejdsMjRJalkxV3hlT3dJVkRFVUdaczVZSC9KQkdMVUhZY29oekZ4dU1kRHNBbU10TDZPOC9BSnFwaGZSc2ZabXVrTWdXaGJlRExmMlEzT2REd1BXK25ESUx4a2R1OXNJc3p3dy8rMGgzZzllSWJYY2x6dCtqNkM0NUVzZGYrSmpiUjN2Q3NRMFAwMmk5dlpkeXM1ZTVyWERQckxOckhsaFlrSEtmRlBpWnk3bXFkRUtucXhZeXhPTFRjVHZPOEx6Ry83a1BIbEdjVlVWMlZVVitFZUdpejBEQXRvUktISFJrVllJZWs1b3JIQkhhY0ZKZHJqZlpiU2xGNEtPQzZPdHIrRWRtVUxIT2FjUjlIN2xnUGRUTmw5NGlERDdMRXJtM3V5K21vQ09YU0J6OTBVeTNEWUlqUTBCeUszd0lheWcrYzlpcW1wNGsvQ2NKcjhnYXB5T1VtRnFRNG5CSXNSalovSnF5Q1J5VkVlUjJXc29hYkthSkhaVjVlbjNmWW43dGhleGdoelJnZ3lSRW5NUmVoQW15QkRSdVM4UCtnNG5lZFlTNHAwT2NQMzRyMzhqY0pDSnFPc2tPMzdRYzhMcVNBRFd4MjRqakhDbTg5emZjUEtNUW1PbEozSUx6ekRCenBjTmJsSEltbmdpdGVnaVIvMlRFQjJMUmpBNHcvQ05BUVRFdlVKclF3QXFGamVSdHdqa2p1OEQzbDN6bzJiSGZzcE4xbE15eFlnaWJYMEtOY1ovTmhqSjN1dzNsZ0pKc2htZ1M2N21lSEtHVHlWcjRod3lwaHVUT21NeHlUTVdFei9EbU1kNnM0Z2Rwa2UwK2tnaVpOU0krRTZSbUc5Ny9XNHlHcmdyRFJTN2FrOXBSNkRDZk5FVVUyZTIvK1pQaDZrSGtacDFuR0dyUGVpMTJKMDFSNEpSV2U2Qk1PMEVVN2I0cytWY0xGMFdYRURXeEF0RDUxQkcyZ1ZnZkRDU2tmYTNrVjUrblhuN283ajV1QUJaNjFEODlFeXBWeHZ4V1lqcVp6SGlnUk1wSGpPRDB0bkxxTExhVHQzaFU5UmY4cUVoTEpxR3A0blVaK2RSVzFsSmRYMDk1WFYxRk5kVVUxQlp6a3V4bU96c2JES1NVMGlOdUVmeUJTOVM5aHdpeGRpYzZFSGpPUzNmci8wazg0T21zYWlqOW5xNlR0K1BNUFVRd3VSREhQV09ZZloySHdUZGd3eGE0OFdGNEFSNkxEcUhZSENTYlI0UDJYdjlLY0xzYzhpdnVJYm52V3dtYkEraGk4bDF0RFlHTVc1N0tJSnBJRDY2eTJrY3JVL1ovSlZVU1J6VHpZT1dpUHU4eTM3SnB4YUpuZndiU1JqNFQ1T3A1Uk1WNzkrMm1janJ1aHBlMVZhVFYxTkZUblVWMmJYVjVOVFZVTkRjU0VsREhlbVA0cmk2MDBuc09xOGRrM0Z4ZGhFNU92L0tFcXVUYUJrZHBiUCtBWVRKQnhEMGp5Sk1PVWJIT1c2TXRyNUJCME4zaEZudXFLMitqckw1TlFURDgzUXh1b2lVa1FjcW9xdm9yUE5oOXJaQU5oeU41R0pnTWlYM0UvajB1cEJQNy83cW1IL3dxZlVONzB2S2FjM0twZjcrWXlxdStsTjQrQ1M1dGp2SVhHdEhxcGtWaVV0V0UyKzJnV2ZXVzNubTRFVGk2WE9raFVXUWw1RkpTV01EMmRXVitFdVNUSHVGL3RmelowUjNJa0xJeTBvbEp5MlYyS2c0cm5oSDRPUWFnUFZlWDFidThHYk9SaStNdDNvaitzV1BaYnY4c1Q0WWpOdVZXSHhEa3JqL0tKTlhlY1hVVk5iQ1cwbnIrbi9uWTIwOTd6SnlhTDRkU3QzeE0xU3UzVXpaWEJGRkV3MHAwTlluZDREdTU1WkpWcE9rdnlRWlNjc2tTVExTaEhXUUkxSmFuVWRhdWp4ZmFrSGlpVFBjT0h1K2ZaTnhNVFlSWFQxMGxHZEpTZVJXVlNDdXI2S3lvWXE2dW5LYTZ5dG9xU3VucGJhY04vVlZmR2l1NWRQYlJ2Z2s2Y1AvbWpJbHowaUM4L3ZLS3Q0a3BkTGs5MDlxOXg2bndud1RwZE9NS1JvNURiSFdoSDhuR2ZVeEZLaU40YVg2NkRhQjJWb1R5QmloVDdyZVhGTDA1cEF3WVhaYjAvdHcrR1JpMUhTNDExdUw4TTU5Q2V2UWs1aU9pc1IxVVNaU1hvc3o2c1BGcmxQYU1abHRncFRvNVBmeTNCaytnVGhMZTVKUG55Y2pMSUxjdEhRS3hHTEVsWldVTnRSVDBkeEU5WnNXYWxwYXFLdXJvN2Ewak5xc1hHcGk0NmdKREtISy9STGxXNTBwV2JLV29ray9VU2h4ek45aldWdWFrUWpTbklCNGhBSEZCc2FVbTIya2VzOHhhdDB2VVhjamtMcW9COVNtdnFBNnY0REtpa3BLeThzUmw1VHdTaXdtTnllSHpPUVUwdVBpU1BZTElPSG9DWkpzdHBFMGJRRlJhanFjN3FuV3ZzazRkT3NsK3EyRExMZUVyb1FKMGtSMFZDQkd0aitQTmNmeWJPdy9TRFJZd1BNRlpxUWJyeVp6MFNxeWpGYVM5WTlGWkkyZFFkYlF5V1QzSDlzV2xIT1ZScERYVjV1WGZVZndTbTAwQlZvVEVJK2VRZW1jNVZTczMwcnRVZmUyV1BZbU5ZTVBOWis3L1QvNHozYnA4N25NSjhyZnY2VzRwWm1DK2xwZTF0V1FXMWZUWmpCWmtrUWphWmZxYXhHWGxmUDhiamhlVnZaaXgvWm04TEN6aThocjUyN0NGNXNSUFhBczk2VFZ1ZGVwTnpFZDVIblFRWUdIa25yVHFROVBmMUFpb1lzS1NWM1ZTT25lajFSWlRWNG9EaUZUUlljY3JRbmtqNTFKNGV4bGxOcnNvTWIxTEUxaDBiek55dU5qNjU4ZDh6LzUrUEVENyt2cWFjbDVTZDJUQk1xRHdpaDA4eUIzcHdzWjlydEl0ZDVLa29VdENUWmJpZCsxbC9nRHgwbTg2azNhdzBmazVlZFQzTnhFVmxVRmZ1Rmg3YmRMeDg2ZkYvbmRpeVFoTDRjWHFXbWtoWWFUZXU0U3lRNTdTRjVyUjhyeWRhUVltWkptWkVyR2tqVmtpU3g1dWRHQnduMnVsSHJkb0Nvc212cjRaSnJGeGJ4dGJXMnorNy91VHZqUTNNS2I3RHlhd21Pb1BlbEJ4YVpmS0RFeXA5QmdFUzlIVGlOYmN4enBTdHFreUEwa3Zwc2FjVC8wYmJ1NU1kL0ljVStRYlVzd29aTFJxUmVSaWdONU5FcWY1K3MzaytoNWxSdVhMN2R2TXM0bUpxSXJCdy96TkNHaDdXN2tOdFNSMzl6SXE2WUdYamZXVTlSUVIwbGRMV1VOOVZTMk5GUDk3ZzExdjljclNSaVR6SS9FY2lSTFRGSVFKT05kVlRXdDZWazBCb1JRYzlTZHNqWDJGTTFleHV2UjB5a1lPSkY4OVRIL09wZkpVeDFGanNwSXN0Ukc4MktBTG1sRDlFZ1orU01KT3ZvOEhUR0ZSOXFUaU5FWVRXVHZ3WVQzVU9mdWQ0cUVDckpFZFpEbllSZGxJbm9Od24zZ0tMRmplM1ZRWWpJbnZwY2plT2c0SHEzYlJPS3BzN3dJQ1NNM1BaMVhyMTlUV0Y1R2NYMHRaVTJOYlVaVEpSRlpYMGQxVVRIVjJibFVQWDVHWlVBSUZSZXVVcnJ6QU9KbDYzazkxWWhYMnZya2E0d25YMjMwWnpHU3h3RzZGQXlmU3VHa255aGV1cDd5bi9kUWVldzBsVmY4cUF3T3AwS3lUUE5lVWxwUlNWRmxKYThyeW5sWlZrSldiaTdweitKSmlZemkyYVVyeE8xdzVxbG9IVTkxWnhEZWR3aHVNaXBpeDc4em1STWRaYmtwU0hGWEVtYS9WU0JLdWo4UE5NWVFOMllhOFFaR3BCaVprV3E4cXEwSmZiRndKUmt6akhreFpqb3Zoa3dpUTNMa0o1bUJ2dHBrOXhsT1RoOXQ4bFJHOGxKekhBVTZCb2huTEtIVWZCT1YrMXlwOHc2Z0tUbU50elcxLzFyS2t2R3Y4NWpXVnNyRlJZZ1Rrc2wvK0ppY3FCZ3k3a2FRSG5XZnRHZnhwS1dua1Y1Y1JGWnpJL2tmM3JiZGdDVC9RQzZhV1loZHRkdHBlQThmT0NEeTJyMkhNQk56N2czU0phSm5QeUk3OVNIcUczbWl2MUhnZmtkRkhuN2JtN2hPZlhuYVdabDRLVlVTdS9ValdVYURWSVhCdkZEV0lWTVNsRWNha0QvVGhLSzFteWsvN2s1ZFVHaWJlYng3ODZiTkpmOFFJMW5DTGNWbDFFVS9wT0xpZGNUT1I4bXhjU0IxOFdxZVREWWthc2dFUXBTSGNWdFJpNXM5KytIYlF3VWZHWFY4ZW1uZ3J6NlVmNDdSNTk3eTFUeHpQa3gyMUgxZXZDN0FMelpLN05yZUhqemc2Q3k2Y1NlWXhJb3lNbDdsOC94ZUZNbm5MNUhvc0llRXRYWWtMRnRMNGp3UnlmTkVuMmR4NlZxeXJMYVM3M0tjd3ZOWEtMMGJRWFZ5S3ZXdnhiUjgrdGdtUURJN2t2SHUzVHVhTW5Lb0RnNmo2TEFidVpZLzgxelNIZWhNSlZKOUJNRktRL0R2TTVCcnZUUzUyRXRUMHBselhIRUFCeFhVMlN1bmlwT01FcnQ3OUdGMzE5NDRkbGJBK1hzNURuU1E1cmpRblhNZGUrSXZyMEdnM2l6T0xGMHA5bXp2Wkh2TER6MUZyZ05IRUxMQmxvUmJ0MGwvOFlLY21pcnkzNytoNE9NN3hIeWc2Tk03U2o5OW9BS28vUDMvQTRuUlNJNzRKSFdyb2JXVnV1SVNxcDhsVVhyVmoxZU9COGtRclNkeHlrL0VEcDVBcU1vd2J2VVp6SFdsd1hpb0RzV3QzekQycXc5bHQ5cWdCZ2RscmZ5Zit3NTRhdGU3WDVDTmd0cXBEWExLTzliSjlsNjlXcnFYYUZWM1JaT1ZYV1dOemJySXJUWDlvZWUybFoxbEQ1dDNrUTJ3a0pKL1lkMmpkNHVqdkNwSDVkVnhsbEd1YkxmUWIrb2l0OGJ4T3hrT0NWSmM2S3lBaitvd1FpYk5JTVowUFU5Ky9vV2svY2RJTzNPUmpBdVh5VHJ2UmZiWlMyUWVPVW42bHQya21Ga1JQMmNwai9YbWNGOTdNbUZxSTdqZGV5QSt2VFM1ckRTSWMycERjZTAzRENmMXdleFVIU2plcXFJVnUwVlo0NVN0OGdCTFd5V055U3Y3OUZjV0tTcEtmZm1iL2w4TUZvUk9vdThWMVZmTDlGbGkzMHZ0MnE2K0dzOU85aG5ZODh2M3RXSGZUVTdUU2tyT2E1MlVYS0dkbEFLT1hSUTQyS2tucmgxbGNPOG95NFh2NVBIcTNKdXJYZnR5cmFzU1Y3c3BjYm1iTXBlNnErQWhxODVaaFFHYzZxM0ZyMHFEMks4eWlGMHFXaTBPeWdPenRpaHBCTmtyRGRodnA2UmhzcUdQeGdpejl1N3dmd0dPOG9PN09ncFQvdjVmWDJNWm1SNmlMakl6emJySzdWemRWZjc2Mm02S0tWWTllaFhheVBTcHRwUHQrOGErcC9MYkxYTEtyWnZsVlp2dDVkVXE3QlRVczJ3VjFLSnNGZFd1YmxSVVAyS2pxRzYxc1ZlLzJaWUtLdjJtcUtyKzhPWDMvMi9rRzRsb2s4NDkreXp0SnFleG9sc2ZUVkYzK1FHbTNlWDdyMVpRVUJ3c0RPNzA1UWUrOHBXdmZPVXJYL25LVi83YitUOS9zL0I2Z1V0V093QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogRmlnbWEgZXhwb3J0cyBldmVyeSBpY29uIHdpdGggdGhlIHNhbWUgaW50ZXJuYWwgaWRzIChgY2xpcDBfMzM2OV84MmAsIGBtYXNrMF/igKZgKS5cbiAqIElubGluaW5nIG1vcmUgdGhhbiBvbmUgaW50byBhIHNpbmdsZSBkb2N1bWVudCBtYWtlcyB0aGVpciBjbGlwLXBhdGgvbWFzay9maWxsXG4gKiByZWZlcmVuY2VzIHJlc29sdmUgdG8gd2hpY2hldmVyIGljb24gY2FtZSBmaXJzdCwgc2lsZW50bHkgbWFuZ2xpbmcgdGhlIHJlc3QuXG4gKiBOYW1lc3BhY2luZyBlYWNoIGluc3RhbmNlIGtlZXBzIHRoZW0gaW5kZXBlbmRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBpbmxpbmVTdmcgPSAoc3ZnOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbnMgPSBgY3JzJHtjb3VudGVyKyt9YDtcbiAgcmV0dXJuIHN2Z1xuICAgIC5yZXBsYWNlKC9pZD1cIihbXlwiXSspXCIvZywgKF8sIGlkKSA9PiBgaWQ9XCIke25zfS0ke2lkfVwiYClcbiAgICAucmVwbGFjZSgvdXJsXFwoIyhbXildKylcXCkvZywgKF8sIGlkKSA9PiBgdXJsKCMke25zfS0ke2lkfSlgKVxuICAgIC5yZXBsYWNlKC9ocmVmPVwiIyhbXlwiXSspXCIvZywgKF8sIGlkKSA9PiBgaHJlZj1cIiMke25zfS0ke2lkfVwiYCk7XG59O1xuIiwiZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZCkge1xuICBpZiAoY2hpbGQgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGQgPT09IFwiYm9vbGVhblwiKSByZXR1cm47XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgIGZvciAoY29uc3QgYyBvZiBjaGlsZCkgYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkIGluc3RhbmNlb2YgTm9kZSA/IGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGNoaWxkKSkpO1xufVxuZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzLCBfa2V5KSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHlwZShwcm9wcyA/PyB7fSk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmF0dHJpYnV0ZXMgfSA9IHByb3BzID8/IHt9O1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFwib25cIikgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBcIlwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBTdHJpbmcodmFsdWUpKTtcbiAgICB9XG4gIH1cbiAgYXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKTtcbiAgcmV0dXJuIGVsO1xufVxuY29uc3QganN4cyA9IGpzeDtcbmNvbnN0IGpzeERFViA9IGpzeDtcbmZ1bmN0aW9uIEZyYWdtZW50KHByb3BzKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBhcHBlbmRDaGlsZHJlbihmcmFnbWVudCwgcHJvcHM/LmNoaWxkcmVuKTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuZXhwb3J0IHtcbiAgRnJhZ21lbnQsXG4gIGpzeCxcbiAganN4REVWLFxuICBqc3hzXG59O1xuIiwiaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICdjcnNkZXZ0b29sJztcbmltcG9ydCB7IGdldFNlbGVjdCwgaXNBdmFpbGFibGUsIGlzUmVhbE9wdGlvbiwgc2V0T3B0aW9uLCB0eXBlIFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0JztcblxuLyoqXG4gKiBTd2F0Y2ggZmlsbHMgZnJvbSB0aGUgZGVzaWduLCBtYXRjaGVkIG9uIHRoZSBtZXRhbCBuYW1lZCBpbiB0aGUgb3B0aW9uIHZhbHVlIHNvXG4gKiB0aGF0IG1hdGVyaWFscyB0aGlzIHByb2R1Y3QgZG9lcyBub3QgY2FycnkgKHZlcm1laWwsIHBsYXRpbnVtLCDigKYpIHN0aWxsIHJlbmRlci5cbiAqIE9yZGVyIG1hdHRlcnM6IFwiUm9zZSBHb2xkIEZpbGxlZFwiIG11c3QgbWF0Y2ggcm9zZSBiZWZvcmUgZ29sZC5cbiAqL1xuY29uc3QgU1dBVENIRVM6IFtSZWdFeHAsIHN0cmluZ11bXSA9IFtcbiAgWy9yb3NlfHBpbmt8Y29wcGVyL2ksICdsaW5lYXItZ3JhZGllbnQoMjA1ZGVnLCAjZThjMmJkIDExJSwgI2ZmZiAzMSUsICNlMWI3YjIgNTAlKSddLFxuICBbL3doaXRlfHNpbHZlcnxwbGF0aW51bXxzdGVlbC9pLCAnbGluZWFyLWdyYWRpZW50KDIwNWRlZywgI2RlZGVkZSAxMSUsICNmZmYgMzElLCAjZDhkOGQ4IDUwJSknXSxcbiAgWy9nb2xkfGJyYXNzfHZlcm1laWwvaSwgJ2xpbmVhci1ncmFkaWVudCgyMDVkZWcsICNlZGNlOWIgMTElLCAjZmZmIDMxJSwgI2VhYzk5NSA1MCUpJ10sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3dhdGNoRm9yID0gKHZhbHVlOiBzdHJpbmcpID0+XG4gIFNXQVRDSEVTLmZpbmQoKFtyZV0pID0+IHJlLnRlc3QodmFsdWUpKT8uWzFdID8/IFNXQVRDSEVTWzFdWzFdO1xuXG4vKiogT3B0aW9ucyB3aG9zZSB2YWx1ZXMgYXJlIG1ldGFscyBnZXQgc3dhdGNoIGNhcmRzOyBldmVyeXRoaW5nIGVsc2UgZ2V0cyBjaGlwcy4gKi9cbmV4cG9ydCBjb25zdCBpc1N3YXRjaE9wdGlvbiA9IChuYW1lOiBzdHJpbmcpID0+IC9tYXRlcmlhbHxtZXRhbHxjb2xvdT9yfGZpbmlzaC9pLnRlc3QobmFtZSk7XG5cbi8qKlxuICogV2hpY2ggc3VyZmFjZSBhbiBpbnRlcmFjdGlvbiBpcyByZXBvcnRlZCBmcm9tLiBUaGUgc2FtZSBjb250cm9scyByZW5kZXIgaW4gdGhlIGJ1eVxuICogYm94IGFuZCBpbiB0aGUgc3RpY2t5IGJhciwgc28gZXZlcnkgZXZlbnQgdGhleSByYWlzZSBjYXJyaWVzIHRoZSBzdXJmYWNlJ3Mgb3duXG4gKiBwcmVmaXggYW5kIGxvY2F0aW9uIGFuZCB0aGUgdHdvIG5ldmVyIG1lcmdlIGluIEdBNC5cbiAqL1xuZXhwb3J0IHR5cGUgQW5hbHl0aWNzID0geyBwcmVmaXg6IHN0cmluZzsgbG9jOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IFBEUF9BTkFMWVRJQ1M6IEFuYWx5dGljcyA9IHsgcHJlZml4OiAnZXhwX3BkcCcsIGxvYzogJ1BEUCcgfTtcblxuY29uc3QgR3VpZGVMaW5rID0gKGxhYmVsOiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQpID0+XG4gIChcbiAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLWd1aWRlLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbi8qKlxuICogVGhlIHRoZW1lJ3Mgb3duIFJpbmcgU2l6ZSBHdWlkZSB0cmlnZ2VyLiBMb29rZWQgdXAgb24gZXZlcnkgdXNlIHJhdGhlciB0aGFuIGhlbGQ6XG4gKiBpdCBsaXZlcyBpbnNpZGUgYHZhcmlhbnQtc2VsZWN0c2AsIHdoaWNoIERhd24gcmVwbGFjZXMgd2hvbGVzYWxlIG9uIGV2ZXJ5IHZhcmlhbnRcbiAqIGNoYW5nZSwgYW5kIHRoZSB0aGVtZSBvcGVucyB0aGUgZHJhd2VyIGZyb20gYSBoYW5kbGVyIGRlbGVnYXRlZCBvbiBgZG9jdW1lbnRgIOKAlCBzbyBhXG4gKiBub2RlIGNhcHR1cmVkIGF0IGJ1aWxkIHRpbWUgaXMgZGV0YWNoZWQsIGl0cyBjbGljayBuZXZlciBidWJibGVzIGFueXdoZXJlLCBhbmQgdGhlXG4gKiBndWlkZSBzaWxlbnRseSBzdG9wcyBvcGVuaW5nIGFmdGVyIHRoZSBmaXJzdCBtYXRlcmlhbC9zaXplIGNoYW5nZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNpemVHdWlkZVRyaWdnZXIgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI2d1aWRlX2Rlc2MnKTtcblxuLyoqXG4gKiBUaGUgR3VpZGUgbGluayBhIGdpdmVuIG9wdGlvbiBjYXJyaWVzLCBpZiBhbnkg4oCUIHNoYXJlZCBieSB0aGUgYnV5IGJveCBhbmQgdGhlXG4gKiBzdGlja3kgYmFyIHNvIGJvdGggb3BlbiB0aGUgZXhhY3Qgc2FtZSBkcmF3ZXIuIGBhbmFseXRpY3NgIGlzIHRoZSBzdXJmYWNlIHRoZSBsaW5rXG4gKiBpdHNlbGYgc2l0cyBvbiwgYW5kIGl0IGlzIHdoYXQgc2VwYXJhdGVzIGEgZ3VpZGUgb3BlbmVkIGZyb20gdGhlIHN0aWNreSBiYXInc1xuICogcG9wb3ZlciBmcm9tIHRoZSBzYW1lIGd1aWRlIG9wZW5lZCBpbiB0aGUgYnV5IGJveC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkR3VpZGUgPSAoXG4gIG9wdGlvbjogeyBuYW1lOiBzdHJpbmcgfSxcbiAgb25NYXRlcmlhbEd1aWRlOiAoZnJvbTogQW5hbHl0aWNzKSA9PiB2b2lkLFxuICBvblNpemVHdWlkZTogKGZyb206IEFuYWx5dGljcykgPT4gdm9pZCxcbiAgYW5hbHl0aWNzOiBBbmFseXRpY3MgPSBQRFBfQU5BTFlUSUNTLFxuKSA9PiB7XG4gIGlmIChpc1N3YXRjaE9wdGlvbihvcHRpb24ubmFtZSkpIHJldHVybiBHdWlkZUxpbmsoJ01hdGVyaWFsIEd1aWRlJywgKCkgPT4gb25NYXRlcmlhbEd1aWRlKGFuYWx5dGljcykpO1xuXG4gIC8vIFRoZSB0aGVtZSBzaGlwcyBpdHMgb3duIHNpemUtZ3VpZGUgZHJhd2VyOyByZXVzZSBpdCByYXRoZXIgdGhhbiByZWJ1aWxkaW5nIGl0LlxuICAvLyBPbmx5IGl0cyBsYWJlbCBpcyByZWFkIGhlcmUg4oCUIHRoZSB0cmlnZ2VyIGl0c2VsZiBpcyByZXNvbHZlZCBhdCBjbGljayB0aW1lLlxuICBjb25zdCBzaXplR3VpZGUgPSAvc2l6ZS9pLnRlc3Qob3B0aW9uLm5hbWUpID8gc2l6ZUd1aWRlVHJpZ2dlcigpIDogbnVsbDtcbiAgcmV0dXJuIHNpemVHdWlkZVxuICAgID8gR3VpZGVMaW5rKHNpemVHdWlkZS50ZXh0Q29udGVudCEudHJpbSgpIHx8ICdTaXplIEd1aWRlJywgKCkgPT4gb25TaXplR3VpZGUoYW5hbHl0aWNzKSlcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIE9uZSBvcHRpb24ncyBoZWFkZXIgKyB2YWx1ZSBsaXN0LiBVc2VkIGZvciBldmVyeSBvcHRpb24gaW4gdGhlIGJ1eSBib3gsIGFuZCByZXVzZWRcbiAqIHVuY2hhbmdlZCBpbnNpZGUgdGhlIHN0aWNreSBiYXIncyBwb3BvdmVycyBzbyBib3RoIHN0YXkgdmlzdWFsbHkgYW5kIGJlaGF2aW91cmFsbHlcbiAqIGlkZW50aWNhbCDigJQgc2FtZSBjYXJkcywgc2FtZSBzZWxlY3RlZC91bmF2YWlsYWJsZSBzdGF0ZSwgc2FtZSBjbGljay10by1zZWxlY3QuXG4gKlxuICogYGFuYWx5dGljc2AgbGV0cyBhIHNlY29uZCBtb3VudGluZyBvZiB0aGUgc2FtZSBvcHRpb24gKHRoZSBzdGlja3kgYmFyKSByZXBvcnQgdW5kZXJcbiAqIGl0cyBvd24gZXZlbnQgbmFtZXMvbG9jYXRpb24gaW5zdGVhZCBvZiBjb2xsaWRpbmcgd2l0aCB0aGUgYnV5IGJveCdzLlxuICovXG5leHBvcnQgY29uc3QgT3B0aW9uQmxvY2sgPSAoXG4gIHByb2R1Y3Q6IFByb2R1Y3QsXG4gIG9wdGlvbjogeyBuYW1lOiBzdHJpbmc7IHZhbHVlczogc3RyaW5nW10gfSxcbiAgaW5kZXg6IG51bWJlcixcbiAgZ3VpZGU6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgYW5hbHl0aWNzOiBBbmFseXRpY3MgPSBQRFBfQU5BTFlUSUNTLFxuKSA9PiB7XG4gIGNvbnN0IHN3YXRjaGVzID0gaXNTd2F0Y2hPcHRpb24ob3B0aW9uLm5hbWUpO1xuICBjb25zdCB2YWx1ZSA9ICg8c3BhbiBjbGFzcz1cImNycy1vcHQtaGVhZF9fdmFsdWVcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3QgYnV0dG9uID0gKG9wdGlvblZhbHVlOiBzdHJpbmcpID0+XG4gICAgKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz17c3dhdGNoZXMgPyAnY3JzLXN3YXRjaCcgOiAnY3JzLXNpemUnfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS12YWx1ZT17b3B0aW9uVmFsdWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRPcHRpb24ob3B0aW9uLm5hbWUsIG9wdGlvblZhbHVlKTtcbiAgICAgICAgICBwdXNoRGF0YShcbiAgICAgICAgICAgIHN3YXRjaGVzID8gYCR7YW5hbHl0aWNzLnByZWZpeH1fbWF0ZXJpYWxfc2VsZWN0YCA6IGAke2FuYWx5dGljcy5wcmVmaXh9X3NpemVfc2VsZWN0YCxcbiAgICAgICAgICAgIG9wdGlvblZhbHVlLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGFuYWx5dGljcy5sb2MsXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3N3YXRjaGVzXG4gICAgICAgICAgPyAoW1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3JzLXN3YXRjaF9fZG90XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtgYmFja2dyb3VuZC1pbWFnZToke3N3YXRjaEZvcihvcHRpb25WYWx1ZSl9YH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgKDxzcGFuIGNsYXNzPVwiY3JzLXN3YXRjaF9fbGFiZWxcIj57b3B0aW9uVmFsdWV9PC9zcGFuPikgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICBdIGFzIHVua25vd24gYXMgTm9kZSlcbiAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9wdGlvblZhbHVlKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3QgbGlzdCA9IChcbiAgICA8ZGl2IGNsYXNzPXtgY3JzLW9wdF9fbGlzdCAke3N3YXRjaGVzID8gJ2Nycy1vcHRfX2xpc3QtLXN3YXRjaGVzJyA6ICdjcnMtb3B0X19saXN0LS1zaXplcyd9YH0+XG4gICAgICB7b3B0aW9uLnZhbHVlcy5tYXAoYnV0dG9uKX1cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCByb290ID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtb3B0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLW9wdC1oZWFkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3JzLW9wdC1oZWFkX19sYWJlbFwiPlxuICAgICAgICAgIHtvcHRpb24ubmFtZX06e3ZhbHVlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtndWlkZSA/PyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmIChzd2F0Y2hlcykgbGlzdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jcnMtc3dhdGNoLWNvdW50JywgU3RyaW5nKG9wdGlvbi52YWx1ZXMubGVuZ3RoKSk7XG5cbiAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0U2VsZWN0KG9wdGlvbi5uYW1lKT8udmFsdWU7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSBjdXJyZW50ID8gYCAke2N1cnJlbnR9YCA6ICcnO1xuICAgIGxpc3QucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ1tkYXRhLXZhbHVlXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zZWxlY3RlZCcsIGVsLmRhdGFzZXQudmFsdWUgPT09IGN1cnJlbnQpO1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdW5hdmFpbGFibGUnLCAhaXNBdmFpbGFibGUocHJvZHVjdCwgaW5kZXgsIGVsLmRhdGFzZXQudmFsdWUhKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcm9vdCwgc3luYyB9O1xufTtcblxuLyoqXG4gKiBBIG1pcnJvciBvZiB0aGUgaG9zdCdzIG5hdGl2ZSA8c2VsZWN0PnMsIHdoaWNoIHN0YXkgaW4gdGhlIERPTSBhcyB0aGUgc291cmNlIG9mXG4gKiB0cnV0aCDigJQgY2xpY2tpbmcgYSBjYXJkIGRyaXZlcyB0aGUgc2VsZWN0IHNvIERhd24gcmUtcmVuZGVycyBwcmljZSwgbWVkaWEgYW5kXG4gKiB2YXJpYW50IGlkLiBFdmVyeXRoaW5nIGlzIHJlYWQgZnJvbSB0aGUgbGl2ZSBwcm9kdWN0LCBzbyB0aGlzIGhvbGRzIG9uIGFueSBQRFAuXG4gKi9cbmV4cG9ydCBjb25zdCBPcHRpb25zID0gKFxuICBwcm9kdWN0OiBQcm9kdWN0LFxuICBvbk1hdGVyaWFsR3VpZGU6IChmcm9tOiBBbmFseXRpY3MpID0+IHZvaWQsXG4gIG9uU2l6ZUd1aWRlOiAoZnJvbTogQW5hbHl0aWNzKSA9PiB2b2lkLFxuKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm9vdC5jbGFzc05hbWUgPSAnY3JzLW9wdGlvbnMnO1xuXG4gIGNvbnN0IHN5bmNzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHByb2R1Y3Qub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKCFpc1JlYWxPcHRpb24ob3B0aW9uKSkgcmV0dXJuO1xuICAgIGNvbnN0IGd1aWRlID0gYnVpbGRHdWlkZShvcHRpb24sIG9uTWF0ZXJpYWxHdWlkZSwgb25TaXplR3VpZGUpO1xuICAgIGNvbnN0IGJsb2NrID0gT3B0aW9uQmxvY2socHJvZHVjdCwgb3B0aW9uLCBpbmRleCwgZ3VpZGUpO1xuICAgIHN5bmNzLnB1c2goYmxvY2suc3luYyk7XG4gICAgcm9vdC5hcHBlbmQoYmxvY2sucm9vdCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHJvb3QsIHN5bmM6ICgpID0+IHN5bmNzLmZvckVhY2goKGZuKSA9PiBmbigpKSB9O1xufTtcbiIsImltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5pbXBvcnQgeyBQRFBfQU5BTFlUSUNTLCB0eXBlIEFuYWx5dGljcyB9IGZyb20gJy4vYnV5Ym94JztcbmltcG9ydCBjaGV2cm9uIGZyb20gJy4uL2ljb25zL2FjY29yZC1jaGV2cm9uLnN2Zz9yYXcnO1xuXG4vKiogTWF0Y2hlcyB0aGUgdHJhbnNpdGlvbiBvbiB0aGUgdGhlbWUncyBvd24gI2N1c3RvbV9ub3RpZmljYXRpb25zIGRyYXdlci4gKi9cbmNvbnN0IFNMSURFX01TID0gNTAwO1xuXG4vKipcbiAqIFRoZSBKU1ggZmFjdG9yeSBjYWxscyBjcmVhdGVFbGVtZW50LCB3aGljaCBjYW5ub3QgYnVpbGQgbmFtZXNwYWNlZCBTVkcg4oCUIHBhcnNlIGl0IGluc3RlYWQuXG4gKiBFeHBvcnRlZCBzbyB0aGUgdGhlbWUncyBvd24gUmluZyBTaXplIEd1aWRlIGRyYXdlciBjYW4gd2VhciB0aGUgc2FtZSBnbHlwaC5cbiAqL1xuZXhwb3J0IGNvbnN0IENMT1NFX0lDT04gPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyArXG4gICc8cGF0aCBkPVwiTTEgMSAxMyAxM00xMyAxIDEgMTNcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPicgK1xuICAnPC9zdmc+JztcblxuLyoqXG4gKiBUaGUgdGhlbWUncyBvd24gUmluZyBTaXplIEd1aWRlIGRyYXdlciAoI2N1c3RvbV9ub3RpZmljYXRpb25zKSBsZXRzIGV2ZXJ5IHJvdyBvcGVuXG4gKiBhdCBvbmNlIOKAlCBpdHMgY2xpY2sgaGFuZGxlciBvbmx5IHRvZ2dsZXMgYC5hY2NvcmQtcGFuZWxgIGJldHdlZW4gYHJldmVhbGVkYCBhbmRcbiAqIGBjb25jZWFsZWRgLCBub3RoaW5nIG1vcmUgKGNvbmZpcm1lZCBsaXZlOiBgLmNvbmNlYWxlZGAgY2FycmllcyBgaGVpZ2h0OiAwICFpbXBvcnRhbnRgLFxuICogc28gZmxpcHBpbmcgdGhlIGNsYXNzIGFsb25lIGlzIGVub3VnaCB0byBjbG9zZSBhIHJvdywgbm8gaW5saW5lIGhlaWdodCB0byByZXN0b3JlKS5cbiAqIE9uZSBkZWxlZ2F0ZWQgbGlzdGVuZXIsIGJvdW5kIG9uY2UsIGNsb3NlcyBldmVyeSBvdGhlciByZXZlYWxlZCByb3cgYWZ0ZXIgdGhlIHRoZW1lJ3NcbiAqIG93biBoYW5kbGVyIG9wZW5zIG9uZSDigJQgZGVsZWdhdGlvbiBtZWFucyBpdCBrZWVwcyB3b3JraW5nIGV2ZW4gdGhvdWdoIHRoZSB0aGVtZVxuICogcmVidWlsZHMgdGhlIGRyYXdlcidzIG1hcmt1cCBvbiBldmVyeSBvcGVuLlxuICovXG5leHBvcnQgY29uc3Qgc2luZ2xlT3BlblNpemVHdWlkZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGhlYWRpbmcgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJyNjdXN0b21fbm90aWZpY2F0aW9ucyAuYWNjb3JkLWhlYWRpbmcnKTtcbiAgICBjb25zdCBwYW5lbCA9IGhlYWRpbmc/Lm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoIXBhbmVsPy5jbGFzc0xpc3QuY29udGFpbnMoJ3JldmVhbGVkJykpIHJldHVybjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjdXN0b21fbm90aWZpY2F0aW9ucyAuYWNjb3JkLXBhbmVsLnJldmVhbGVkJykuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgIGlmIChvdGhlciAhPT0gcGFuZWwpIG90aGVyLmNsYXNzTGlzdC5yZXBsYWNlKCdyZXZlYWxlZCcsICdjb25jZWFsZWQnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRoZSB0aGVtZSdzIG93biBSaW5nIFNpemUgR3VpZGUgYWxyZWFkeSBkaW1zIHRoZSBwYWdlIHdoaWxlIGl0IGlzIHVwIOKAlCB0aGUgc2NyaW0gaXMgYVxuICogYDo6YmVmb3JlYCBvbiBgLnNlY3Rpb24taGVhZGVyLmN1c3Rfbm90aWAsIGZpeGVkIG92ZXIgdGhlIHZpZXdwb3J0LCBpbiB0aGUgc2FtZVxuICogcmdiYSgwLDAsMCwwLjU3KSBvdXIgb3duIGRyYXdlcnMgdXNlIOKAlCBidXQgbm90aGluZyBsaXN0ZW5zIG9uIGl0LCBzbyBpdHMgY2xvc2UgYnV0dG9uXG4gKiBpcyB0aGUgb25seSB3YXkgb3V0LiBPdXIgZHJhd2VycyBkaXNtaXNzIG9uIHRoZWlyIGJhY2tkcm9wOyB0aGlzIGdpdmVzIHRoZSBob3N0J3MgdGhlXG4gKiBzYW1lLCB3aXRob3V0IGFkZGluZyBhIHNlY29uZCBzY3JpbSBvdmVyIHRoZSBvbmUgYWxyZWFkeSB0aGVyZS5cbiAqXG4gKiBBIHBzZXVkby1lbGVtZW50IHRha2VzIG5vIGxpc3RlbmVyIG9mIGl0cyBvd246IGEgY2xpY2sgb24gaXQgbGFuZHMgb24gdGhlIHNlY3Rpb24sIHNvXG4gKiB0aGUgdGFyZ2V0IGlzIGNvbXBhcmVkIHRvIHRoZSBzZWN0aW9uIHJhdGhlciB0aGFuIG1hdGNoZWQgd2l0aCBgY2xvc2VzdGAuIEV2ZXJ5dGhpbmdcbiAqIHRoZSBoZWFkZXIgYWN0dWFsbHkgcmVuZGVycyBzaXRzIGluc2lkZSBgPHN0aWNreS1oZWFkZXI+YCwgc28gYSBjbGljayByZWFkaW5nIGFzIHRoZVxuICogc2VjdGlvbiBpdHNlbGYgaXMgdGhlIHNjcmltLlxuICpcbiAqIFByZXNzaW5nIHRoZSB0aGVtZSdzIG93biBjbG9zZSBidXR0b24gcmF0aGVyIHRoYW4gaGlkaW5nIHRoZSBkcmF3ZXIgYnkgaGFuZCBrZWVwcyB0aGVcbiAqIHRoZW1lJ3MgY2xvc2UgcGF0aCB0aGUgb25seSBvbmUgdGhlcmUgaXMg4oCUIHRoZSBmbGFnIGRyb3BzLCBhbmQgd2l0aCBpdCB0aGUgc2Nyb2xsIGxvY2tcbiAqIGFuZCB0aGUgc3RpY2t5IGJhcidzIGd1aWRlIHdhdGNoZXIsIG9uIGV4YWN0bHkgdGhlIHRpbWluZyB0aGV5IGFsd2F5cyBoYWQuXG4gKlxuICogRGVsZWdhdGVkIG9uIGBkb2N1bWVudGAgYW5kIGJvdW5kIG9uY2UsIGxpa2UgYHNpbmdsZU9wZW5TaXplR3VpZGVgOiB0aGUgdGhlbWVcbiAqIHJlLXJlbmRlcnMgaXRzIGhlYWRlciBzZWN0aW9uLCBhbmQgdGhpcyBjb3ZlcnMgZXZlcnkgd2F5IGludG8gdGhlIGRyYXdlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGNsb3NlU2l6ZUd1aWRlT25CYWNrZHJvcCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5tYXRjaGVzPy4oJy5zZWN0aW9uLWhlYWRlci5jdXN0X25vdGknKSkgcmV0dXJuO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcjY3VzdG9tX25vdGlmaWNhdGlvbnMgYnV0dG9uLmNsb3NlJyk/LmNsaWNrKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBPbmUgZHJhd2VyIHVzZWQgYnkgTWF0ZXJpYWwgR3VpZGUgLyBNYWlsaW5nIEluc3RydWN0aW9ucyAvIEZBUS5cbiAqIFJlYnVpbGRzIHRoZSBob3N0J3MgUmluZyBTaXppbmcgR3VpZGUgcGFuZWwgKCNjdXN0b21fbm90aWZpY2F0aW9ucykg4oCUIHJpZ2h0LWhhbmRcbiAqIHNsaWRlLWluLCBzYW1lIGhlYWRlciBhbmQgY2xvc2UgYnV0dG9uIOKAlCBidXQgZnVsbHkgbmFtZXNwYWNlZC5cbiAqXG4gKiBgbG9jYCBpcyB0aGUgZHJhd2VyJ3MgbmFtZSBhcyBpdCBzaG91bGQgcmVhZCBpbiBHQTQgKCdNYXRlcmlhbCBHdWlkZSBQb3B1cCcpLiBJdFxuICogY292ZXJzIGV2ZXJ5dGhpbmcgaW5zaWRlIHRoZSBkcmF3ZXIg4oCUIHRoZSBjbG9zZSBjb250cm9scyBoZXJlLCB0aGUgYWNjb3JkaW9uIHJvd3NcbiAqIGluIGBib2R5YC4gVGhlIG9wZW4gZXZlbnQgYmVsb25ncyB0byB0aGUgc3VyZmFjZSB0aGF0IHdhcyBjbGlja2VkIGluc3RlYWQsIHdoaWNoIGlzXG4gKiB3aGF0IGBmcm9tYCBjYXJyaWVzOiB0aGUgYnV5IGJveCByZXBvcnRzICdQRFAnLCB0aGUgc3RpY2t5IGJhciBpdHMgb3duIHByZWZpeCBhbmRcbiAqIGxvY2F0aW9uLCBzbyBvbmUgZHJhd2VyIG9wZW5lZCBmcm9tIHR3byBwbGFjZXMgc3RheXMgc2VwYXJhYmxlIGluIEdBNC5cbiAqXG4gKiBgZGVzY2AgaXMgdGhlIG9wZW4gZXZlbnQncyBgZXZlbnRfZGVzY2AuIEl0IGRlZmF1bHRzIHRvIGB0aXRsZWAsIGFuZCBpcyBwYXNzZWRcbiAqIHNlcGFyYXRlbHkgb25seSB3aGVyZSB0aGUgaGVhZGluZyBpcyB0b28gbG9uZyB0byByZWFkIGFzIGEgR0E0IGxhYmVsLlxuICovXG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsID0gKFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGJvZHk6IE5vZGUsXG4gIGxvYzogc3RyaW5nLFxuICBkZXNjID0gdGl0bGUsXG4gIGZyb206IEFuYWx5dGljcyA9IFBEUF9BTkFMWVRJQ1MsXG4pID0+IHtcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdjcnMtZHJhd2VyLS1vcGVuJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjcnMtZHJhd2VyLW9wZW4nKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcm9vdC5yZW1vdmUoKSwgU0xJREVfTVMpO1xuICB9O1xuXG4gIC8qKiBFc2NhcGUgaXMgbm90IGEgY2xpY2ssIHNvIGl0IGNhcnJpZXMgbm8gZXZlbnQgb2YgaXRzIG93bi4gKi9cbiAgY29uc3QgY2xvc2VXaXRoID0gKGV2ZW50OiBzdHJpbmcsIGRlc2M6IHN0cmluZykgPT4ge1xuICAgIGNsb3NlKCk7XG4gICAgcHVzaERhdGEoZXZlbnQsIGRlc2MsICdjbGljaycsIGxvYyk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VCdG4gPSAoICBcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1kcmF3ZXJfX2Nsb3NlXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlV2l0aChgZXhwX3BkcF8ke25hbWV9X2Nsb3NlYCwgJ0Nsb3NlJyl9XG4gICAgLz5cbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gQ0xPU0VfSUNPTjtcblxuICBjb25zdCByb290ID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtZHJhd2VyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbD17dGl0bGV9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNycy1kcmF3ZXJfX292ZXJsYXlcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZVdpdGgoYGV4cF9wZHBfJHtuYW1lfV9iYWNrZHJvcGAsICdCYWNrZHJvcCcpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZHJhd2VyX19kaWFsb2dcIj5cbiAgICAgICAgey8qIFJldmVyc2VkIHJvdzogdGhlIGJ1dHRvbiBzaXRzIGZpcnN0IGluIHRoZSBET00gYW5kIHJlbmRlcnMgb24gdGhlIHJpZ2h0LiAqL31cbiAgICAgICAgPGRpdiBjbGFzcz1cImNycy1kcmF3ZXJfX2hlYWRcIj5cbiAgICAgICAgICB7Y2xvc2VCdG59XG4gICAgICAgICAgPGgzIGNsYXNzPVwiY3JzLWRyYXdlcl9fdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZHJhd2VyX19ib2R5XCI+e2JvZHl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Nycy1kcmF3ZXItb3BlbicpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcm9vdC5jbGFzc0xpc3QuYWRkKCdjcnMtZHJhd2VyLS1vcGVuJykpO1xuICAocm9vdC5xdWVyeVNlbGVjdG9yKCcuY3JzLWRyYXdlcl9fY2xvc2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcbiAgcHVzaERhdGEoYCR7ZnJvbS5wcmVmaXh9XyR7bmFtZX1fb3BlbmAsIGRlc2MsICdjbGljaycsIGZyb20ubG9jKTtcbn07XG5cbi8qKlxuICogQSByb3cgZWl0aGVyIGV4cGFuZHMgaXRzIG93biBgYm9keWAgaW4gcGxhY2UsIG9yIOKAlCBnaXZlbiBgb3BlbmAgaW5zdGVhZCDigJRcbiAqIGFjdHMgYXMgYSBidXR0b24gdGhhdCBoYW5kcyBvZmYgdG8gYSBkcmF3ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEFjY29yZEl0ZW0gPVxuICB8IHsgdGl0bGU6IHN0cmluZzsgYm9keTogTm9kZTsgb3Blbj86IG5ldmVyIH1cbiAgfCB7IHRpdGxlOiBzdHJpbmc7IG9wZW46ICgpID0+IHZvaWQ7IGJvZHk/OiBuZXZlciB9O1xuXG4vKipcbiAqIENvbGxhcHNpYmxlIHJvd3MgdXNlZCBpbnNpZGUgdGhlIE1haWxpbmcgSW5zdHJ1Y3Rpb25zIGFuZCBGQVEgbW9kYWxzLFxuICogYW5kIGZvciB0aGUgYWNjb3JkaW9ucyBhdCB0aGUgZm9vdCBvZiB0aGUgYnV5IGJveC4gRXZlcnkgcm93IHN0YXJ0cyBjbG9zZWQuXG4gKiBUaGUgbWFya2VyIGNhcnJpZXMgYm90aCBmb3JtcyDigJQgQ1NTIHNob3dzIHRoZSBjaGV2cm9uIGluIGEgZHJhd2VyIGFuZCB0aGVcbiAqICsvLSBldmVyeXdoZXJlIGVsc2UsIHNpbmNlIHRoZSBzYW1lIHJvd3MgcmVuZGVyIGluIGJvdGggcGxhY2VzLlxuICpcbiAqIGBsb2NgIGlzIHRoZSBzdXJmYWNlIHRoZSByb3dzIHJlbmRlciBvbiwgYXMgaXQgc2hvdWxkIHJlYWQgaW4gR0E0IOKAlCAnUERQJyBmb3IgdGhlXG4gKiBidXkgYm94LCB0aGUgcG9wdXAncyBvd24gbmFtZSBmb3Igcm93cyBpbnNpZGUgYSBkcmF3ZXIuIGBldmVudGAgaXMgdGhhdCBzdXJmYWNlJ3NcbiAqIG93biBleHBhbmQgZXZlbnQsIHNvIGJ1eS1ib3ggcm93cyBhbmQgZWFjaCBkcmF3ZXIncyByb3dzIHN0YXkgc2VwYXJhYmxlIGluIEdBNFxuICogd2l0aG91dCBzbGljaW5nIGJ5IGBldmVudF9sb2NgLlxuICovXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gKGl0ZW1zOiBBY2NvcmRJdGVtW10sIGxvYzogc3RyaW5nLCBldmVudDogc3RyaW5nKSA9PiB7XG4gIC8qKiBPbmx5IG9uZSBwYW5lbCBvcGVuIGF0IGEgdGltZSB3aXRoaW4gdGhpcyBhY2NvcmRpb24gaW5zdGFuY2UuICovXG4gIGxldCBvcGVuOiB7IGhlYWQ6IEhUTUxFbGVtZW50OyBwYW5lbDogSFRNTEVsZW1lbnQgfSB8IG51bGwgPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1hY2NvcmRcIj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gKDxzcGFuIGNsYXNzPVwiY3JzLWFjY29yZF9fc2lnblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+KSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgbWFya2VyLmlubmVySFRNTCA9IGNoZXZyb247XG5cbiAgICAgICAgaWYgKGl0ZW0ub3Blbikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWFjY29yZF9faXRlbVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLWFjY29yZF9faGVhZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtpdGVtLm9wZW59PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7bWFya2VyfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYW5lbCA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWFjY29yZF9fcGFuZWxcIiBoaWRkZW4+XG4gICAgICAgICAgICB7aXRlbS5ib2R5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IGhlYWQgPSAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJjcnMtYWNjb3JkX19oZWFkXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgd2FzT3BlbiA9IGhlYWQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgaWYgKG9wZW4gJiYgb3Blbi5oZWFkICE9PSBoZWFkKSB7XG4gICAgICAgICAgICAgICAgb3Blbi5oZWFkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIG9wZW4ucGFuZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoZWFkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIFN0cmluZyghd2FzT3BlbikpO1xuICAgICAgICAgICAgICBwYW5lbC5oaWRkZW4gPSB3YXNPcGVuO1xuICAgICAgICAgICAgICBvcGVuID0gd2FzT3BlbiA/IG51bGwgOiB7IGhlYWQsIHBhbmVsIH07XG4gICAgICAgICAgICAgIGlmICghd2FzT3Blbikge1xuICAgICAgICAgICAgICAgIHB1c2hEYXRhKGV2ZW50LCBpdGVtLnRpdGxlLCAnY2xpY2snLCBsb2MpO1xuICAgICAgICAgICAgICAgIC8vIENvbGxhcHNpbmcgYSB0YWxsIHBhbmVsIGFib3ZlIHRoaXMgb25lIHNoaWZ0cyB0aGUgd2hvbGUgbGlzdCB1cCwgd2hpY2ggY2FuXG4gICAgICAgICAgICAgICAgLy8gY2FycnkgdGhpcyByb3cncyBoZWFkIG9mZiB0aGUgdG9wIG9mIHRoZSBkcmF3ZXIuIGBuZWFyZXN0YCBvbmx5IHN0ZXBzIGluXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGF0IGhhcHBlbnMg4oCUIGEgcm93IGFscmVhZHkgaW4gdmlldyBpcyBsZWZ0IGV4YWN0bHkgd2hlcmUgaXQgaXMuXG4gICAgICAgICAgICAgICAgaGVhZC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICB7bWFya2VyfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNycy1hY2NvcmRfX2l0ZW1cIj5cbiAgICAgICAgICAgIHtoZWFkfVxuICAgICAgICAgICAge3BhbmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG59O1xuIiwiaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICdjcnNkZXZ0b29sJztcblxuY29uc3QgVklTSUJMRSA9IDU7XG5cbi8qKlxuICogXCJQcm9kdWN0IGRldGFpbHNcIiDigJQgdGhlIGZpcnN0IGZldyBzcGVjcyBvcGVuIGJ5IGRlZmF1bHQsIGV2ZXJ5dGhpbmcgZWxzZSBiZWhpbmRcbiAqIFwiU2hvdyBtb3JlXCIsIHBlciB0aGUgZGVzaWduLiBDb250ZW50IGNvbWVzIGZyb20gdGhlIHBhcnNlZCBsaXZlIGRlc2NyaXB0aW9uLlxuICovXG5leHBvcnQgY29uc3QgRGV0YWlscyA9IChzcGVjczogc3RyaW5nW10sIHByb3NlOiBIVE1MRWxlbWVudFtdKSA9PiB7XG4gIGNvbnN0IHZpc2libGUgPSBzcGVjcy5zbGljZSgwLCBWSVNJQkxFKTtcbiAgY29uc3QgcmVzdCA9IHNwZWNzLnNsaWNlKFZJU0lCTEUpO1xuXG4gIC8vIFByb2R1Y3RzIHdpdGhvdXQgYSBzcGVjIGxpc3Qgc3RpbGwgbmVlZCBhIHNlbnNpYmxlIHNwbGl0LlxuICBjb25zdCBvcGVuUHJvc2UgPSBzcGVjcy5sZW5ndGggPyBbXSA6IHByb3NlLnNsaWNlKDAsIDEpO1xuICBjb25zdCBoaWRkZW5Qcm9zZSA9IHNwZWNzLmxlbmd0aCA/IHByb3NlIDogcHJvc2Uuc2xpY2UoMSk7XG5cbiAgY29uc3QgaGlkZGVuID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtZGV0YWlsc19fbW9yZVwiIGhpZGRlbj5cbiAgICAgIDx1bCBjbGFzcz1cImNycy1kZXRhaWxzX19saXN0XCI+e3Jlc3QubWFwKChsaW5lKSA9PiAoPGxpPntsaW5lfTwvbGk+KSBhcyBIVE1MRWxlbWVudCl9PC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtcnRlXCI+e2hpZGRlblByb3NlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHNob3dNb3JlID0gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY3JzLWRldGFpbHNfX3RvZ2dsZVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbiA9ICFoaWRkZW4uaGlkZGVuO1xuICAgICAgICBoaWRkZW4uaGlkZGVuID0gb3BlbjtcbiAgICAgICAgc2hvd01vcmUudGV4dENvbnRlbnQgPSBvcGVuID8gJ1Nob3cgbW9yZScgOiAnU2hvdyBsZXNzJztcbiAgICAgICAgaWYgKCFvcGVuKSBwdXNoRGF0YSgnZXhwX3BkcF9kZXRhaWxzX21vcmUnLCAnU2hvdyBtb3JlJywgJ2NsaWNrJywgJ1BEUCcpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICBTaG93IG1vcmVcbiAgICA8L2J1dHRvbj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoIXJlc3QubGVuZ3RoICYmICFoaWRkZW5Qcm9zZS5sZW5ndGgpIHNob3dNb3JlLmhpZGRlbiA9IHRydWU7XG5cbiAgY29uc3QgcGFuZWwgPSAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1hY2NvcmRfX3BhbmVsXCI+XG4gICAgICA8dWwgY2xhc3M9XCJjcnMtZGV0YWlsc19fbGlzdFwiPnt2aXNpYmxlLm1hcCgobGluZSkgPT4gKDxsaT57bGluZX08L2xpPikgYXMgSFRNTEVsZW1lbnQpfTwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXJ0ZVwiPntvcGVuUHJvc2V9PC9kaXY+XG4gICAgICB7aGlkZGVufVxuICAgICAge3Nob3dNb3JlfVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IGhlYWQgPSAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJjcnMtYWNjb3JkX19oZWFkXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuID0gaGVhZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICBoZWFkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIFN0cmluZyghb3BlbikpO1xuICAgICAgICBwYW5lbC5oaWRkZW4gPSBvcGVuO1xuICAgICAgICAvLyBUaGlzIHJvdyByZXBsYWNlcyBvbmUgb2YgdGhlIHRoZW1lJ3Mgb3duIC5wcm9kdWN0X19hY2NvcmRpb24gaGVhZGVycywgc28gaXRcbiAgICAgICAgLy8gY2FycmllcyB0aGUgc2FtZSBldmVudCB0aGUgb3RoZXIgcm93cyBkbyByYXRoZXIgdGhhbiBnb2luZyB1bnRyYWNrZWQuXG4gICAgICAgIGlmICghb3BlbikgcHVzaERhdGEoJ2V4cF9wZHBfYWNjb3JkaW9uX29wZW4nLCAnUHJvZHVjdCBkZXRhaWxzJywgJ2NsaWNrJywgJ1BEUCcpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3Bhbj5Qcm9kdWN0IGRldGFpbHM8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImNycy1hY2NvcmRfX3NpZ25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDwvYnV0dG9uPlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1kZXRhaWxzIGNycy1hY2NvcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtYWNjb3JkX19pdGVtXCI+XG4gICAgICAgIHtoZWFkfVxuICAgICAgICB7cGFuZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSmdBQUFDWUNBWUFBQUFZd2lBaEFBQUFDWEJJV1hNQUFCWWxBQUFXSlFGSlVpVHdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBT2RFVllkRk52Wm5SM1lYSmxBRVpwWjIxaG5yR1dZd0FBSWlKSlJFRlVlQUh0ZlZtWFcrZDE1YjRYRnhmeldNV2FSSmFyS0pJU0taS2lCc3V5TEN1eDQrVWtUdHRPbk5YRFczZi9naVMvd05Kck93OSs2N1c2SCt5SGRxOSs4T3EyVmlkdjNZNWx4N1pzaVlOSWlvTW96cXdKTmFFdzQwN0lQZ2NvaHFKSVNwWllFb0Y3TnhkWUdDNVFCZHlOTSt4enZ2TVplQUN1WHIxYXpHYXpmOVByOWY2WWx6bmVOWWZQRVphVlFLTzZoSFRhUkdWbGxiZGpHSjk2RXA3dllOUmhtY0QxSytlUlNzZVF6eGNCTXdzN21VTVErUGlzWVJoR2xUOU84ZWZybnVmOWJIcDYrdHA5ajczWG5VdExTM094V094SFFpdzhZb2pGTERUclN5Z1hKM0hod25ITXpUMkZ3RXFDbnpSR0ZmRllFamR2bkVBbVZjVFlXQjV0TjBEQ0xzSjdSTjR6aWZaajMvZGZ1eGZSekx2dnFGUXFmME55blh3VXlTWHcrYUZhZGhxblQvME9oNTU4bXUvQWdUbTYzSUxZQU5kdFlYSmlpcGZkT0g3aUJBbVhodnNJdldkeTVUK1pwbmx5ZVhuNWIrOSs3QU1XYkdWbDVmdjg4U29lY1ZpV2hlcmFEU3hjdjR6aTJCaW1wMmNRbUdXK214NGY3V0YwWUNKT0U5QnNMV0N0c2dhTDc4MU01akU5c3crT0YvRGtQWHJmTEJMdDFWMjdkcjEyKy9iMkZiRmNHQUp5Q1FKeXlQRWNHUEVrcHFiM29sWnJ3aksyN3VQd2h4aUdnM3J0Sm56WFFpS2V3SEtsZ3RrOVQvSzllNDhrdVFSQkVMeDZweVZUZ2tuTWhTRWhsOEEwVEpKcUE0L3Rub05oWlpGalBMYTRlSVAzanhERFRCT2UyMEduMFVhMlBJblovYzhnblMralZ0L0VvLzQyR1pOOWY4Q3BQc0VZYzMyZmZyU0lJWUhIekdsODdERnNyVmRnTWVpM2t3bTAyeTRKTmpydTBhU05hdFNyQ0F5NW5rU24zV1dRbnlUdmh1SkxWSlFrVWE2WXdqUUowakJNSU1HSzVjZFVybkJhdDNEK25kOGlrOHdpSnJuOGlQaEp1aHFVQ3J1d3RycU0ydFoxZEp0TC9ETEZrS1EwTVF4aHBpU0pJblBScXhoL2lTR0U1L3NvVHh4Q3ArdGg5K3dzV3QwRzJnMjZqK0g0aG44MDZBZjlub3NlclhJeUJxeFgxckZuOTJHNC92Qlk2WFE2L2JjTStzM3ZZaWpSUXhBellJbmxvcHVjblR1QWExZmZZOWFWd0NqQVp2cDQ2ZHhaUEgzc2p5U213ZFRjVVhRQ0VnNGVoZ1g4dS85SWZNb3hEQ3NDRCtsVURtZE9uK0VKU2VEQWdRUG9kcmJvSkUwTU0wd3pqbmFyaXFlZk9ZYVZ4ZXZZcUhXb3dBd1UrOTVucjl4L1VrajF4NkQyTmRTUnNXU09qZm9HVnBjdncrMjRtTnMvUzlKTnd3bW9HaGtCaGkvdTV4L2Nhek43M01EbVZwM2ZvUjdtOXgxR1Y2V0o0ZnZpRFBkWEhhS0o5VEJXbnNCV280YXB4L1l3L3M5Uk8xcmlJeTdKTld6eG1FRjNIOEJ0MWVCVFZsMVpYa0tDR1hKZ21FTnJsWWVlWUlKdXQ0MWtLbzJKeDU1QXRqaUJ6ZW9XWEtlRFIxNHd1Z3VtR2FQMHNzRGczcUsyTjQvblh2ZzZsaGNYWWNac0RDdEdnbUF4Rm9PTGhUeTY3WWFLc0hZaUFZOUsvN0FSTE1ZTWVITjlFOW44T045SGdPcm1Nb3JGSXEzeThBVDJkMk1rQ0NaaGI0RnFmcU8raUdidEdtN2R2SXBVTW9WaHEwdjIrQytYTCtMV2pYZmh0RmZoMHdyUDdINmNpcjZMWWNWSUVDeVFiREl6eFdzWkRlcHptVHhxMVhYV0o0Y3NCcVBWY3B3V09oMGhsS2Y5WGpabG1HRXU0SThFd1FTKzd5SmJHT2Vwc1BIMDAxK21BazRMNERaNTBvYmpMVXJKYS9uVys4eDhiUng1Nm5uSXFjbVd4bGdXRzE3M0tCZ1pnZ244WGdEUGlPSDAyYmZ3MUZQSG1HRTZRMUlBTitnR1dmNHFKREcvOXlCT252dzEvL1lrK3MycXczMktMSXdTV0wvTFpjcG81TXU0Y1BGdFpOTTVqRS9LV1NwcGR3SWV5UllYRVNBWWZmV3FkT3N0TkdybllLZHNsbG55MnBJMDdCZ3BDeWJ3Z2g1U2lUaXFXelYxbWMxV0Y1WlZ3Nk1LVTRYVk9oT1VKdU12QjVldlhzYUIvUzlRV0IyTmRRWWpSekRXVm5WQnlMNjlSNURPemlLVktxS3l1SXpZSStvcUEvNWQxNjVlUXFIOEJldzk5QUoyVFV4aWEyc2RSbXcwaXZZalI3Q0F0YnJTK0NUTExNc1VLSDJrNkdxMjZnMmVzRWUwaGtkTGxVallNRzBiRHEydDFGUmp0TUFZbnBMakF6RmFNUmlrVmN4SGVYeWFHaExWL0dZRjF4ZXVJSk5PMGJJbCtXZ2JqMXEvbUN5OXF6Y2JhTmNxc0MwUCtWeVdNVmdPZ1R2YzJlTTJSczZDQ1FLK3JmTEVFMmlUWk5sQ2thV2tEcHhPbGR5SzRaR0NJUkZZZ0ZhampYWjlEZXRyVmVRSzh5eHdqd2E1QkNObndRUTlacE9tRmFjbHlOTjZ4WmlSamVQcWxmTTRjUENMY0IraDlWNTJMSVl6cDM2SEYxNTRoWjZTbWwyTXVwZmhQNXJKN2lmRVNGb3dnYWo3cVVRQjc1dzZnVUt1akxtNVBXaTM2bytNOEdxYUZycWRHcDQ2OURRMk5qZXd6QnBrSUFaMnhCWVFEMzAvMklNZzNRblZ6UVUwTjFmZ2V3RjI3NTZCa1JTMW4wSDA1Mm9tU0hLL3hUaXJobmJiUVdWOURRY09ISVBETXlHTGlJZXV5K2dCR0ZrTEpwQzVEUk9UWDhEbXhpYmlMSDYzdlRqOHppcnYvencxSmhNeDA2TnlYMFd6NmVETStaTVlLNWZSbzBXVE9tb3dZbWRrcEFrbTZMUmJMQml6QlBQazh5aU9UYUZTMlVCUGhxV1luODliai9IWE5paWhlSTZOMG1QNzhmTEwzOEtORzFlWlFmYlhFb3pReWp2RnlCTk0zR1EybDBPM1ZZVVIyRWlrazNDZDl1Y21Wc2k2eHZXTk5XUUtMRjk1UGJyd1RaYTBDbkNDNFczSmVSQkdubUFTMUl2bDZ0UlhVS3RkWVRaNUdlbFVoclcveitldDkyUVpiVHlGamZYcjhEb2JjTG9Oek00L0FkZnJZaFF4OGdTVEJhelozQlRhTkJESlJBTEZZb0ZFVzllTzBjOGE0djJrdTk2Z3VMcXlzQURQYnlBZU4wbjRrdHlMVWNUb1d6RElJbDBYNWJGNXlnSStqaDU5a1hIWUNwblgrY3dsQzR1Qi9Gcmx1bWFPTDN6cHE3eWRSR2xzTHpvalV0aStGMEpCTUlIb1lqN2Y3cmtMSjNIa3lCZXBscmNRKzB5dGhxSFpxeFVMS0VrY3hEdW4zeUh4QWRjUTFUNFlLWEgxVG9TSFlEMjZ5c0tZOW9pOTg4NXZzTG0rU3ArMURwMHVzdU5FTTVWQVJ0Q0UyZXRoZGVVbVhKYXYwc1ZkV25VWVpZU0dZQUpwVUpCVlI1N2prR3pUYU5acmRGTnRqWXQyRmg2TDJrMGRPYlZjV2NXNWMyZHg1Tm5uMUdXYkl5dHo5eEVxZ3Brc2RxK3ZyV0grOFdlUlNKVXB2azVpYmZVR1E3R2QvUmhrSU12MXkrOHp3ZGlMZzg5OEZaTXpNNVFuR3BRc3hIcU45aWtJRmNFQ2FrMWpZeE5VOW04Z1pobElwbFBZM0dvT1R2Uk93VUNQUWJ3Vmo4SGk3M083RHNWV2s4VjRrKzVSSGg5dEV4WXFndlVvYkk1UHpjTG15ZTQyVjNEMTNPOVJ6QmRnR0R2YlZDTERUR3ExR3VycnRKYnVHa3JGTWxMSlBQcVIvV2pLRTlzSUZjRUVFb2NWeDJaWkMyd2pWeDVIczFGbk50ZmF1Zk5zVU9HaWhldzZYWGp0QmxaV0tzaGxwKzhZd2pUYVFmNUlkMVBjRDlJcTQ3SG9IV2Y5cjkxeHNMeHlDM3YzSDRYblBmeVRMVFhHYzJkK2lRTXljdDN2SUVpTXlTSk85SWsxK3QvdjBGa3dnYWo3ZHJLRWs2ZmVadUJkeHR5ZVBlaTJwWjM2NFg0Y0JvbnN1bFhWdlZydEppcE1NTXpiN2pnY0gzMG9MWmhBVlBXTnRTdW9OemJoT3pLRzh6Rm1sVlB3ZzRlMWZ0SlVNVGR3dDlCb2RyRzFWY1grL1lmUWdRMXp4TFd2T3hGS0N5YVFKZmtUVS91d1JxdVNLNVRodURFNG5XVis1UjdHY2g2RGxvb2FsOWRBdCt2aThwWHp5R1hTQ0t3VXlUVTYvZllmQjZFbG1KQ2czV29nbTgvanNTOGNSaTQzaDZYRkNucHU5MU9QZlpJV29WWmpDYzJ1anp4cmpWOTUrYzl4NjlZQ1NUZThjNzQrS1VKTXNKNk9QYyttMG5CYUxSaVdqMlRTaGk4RndrOUpNSjN6dGJxaEs1b01scUtxRyt2SVpxVkZTS3hYdUQ3eUVCT01zR3prQzd2UTZpeWdYVnZTTGdzN0h2L1UycWZzSXBUTVpMRldXYUNMWElIVHJUTEdPMEJwSkZ6dVVSQnFnc2xDa0Z4aE54eW5COWZ2ajNwcXQ2dGFyL3cwTUV4ZnAwS3ZMQy96dXJSbko1REpqdEdDaldiWDZvTVFhb0tKSTVUTlRBdkZlZGgyRWk5KzhXdTRlZXM2QzlBZWpkZ25jNU9pc1ZVclM5aXF0L0hTbDc0bTk2QzhheDV1RUQ3M0tBaTNpeHdnb0s3ZVlteC80ZEpwSEQ3OE5BWFhMWXF3bjZSOFpFZzlDcGJsNEltRGgzSDIzZC9SUFZxRFZVemhrU2J1UkVRdzlGZUNsMG96c0dJR3JsNTlIL1hxR2tYMytoKzRDRllzWGsvWE8vcXVqK3JhSW1PN0xsOTNnaTh6ZUN5RWlBZzJnTzhIeUdSS09qYmNvRjdWNm02eXpPUENqSDFjUzliajhTM1VTTTVxdFlGVFowN2k4TkhuMEdZTmNxUlcwdjZCR01uWkZKOEVwaFhEOHNJaVhlU0xTT1FLRkYyN3FDeGZ4ZmpVd1kvbDNFeGF2MnVYcnVDeGZRY3hzWWZ5Uk14a3BhQ0tQQXZxdW5HN0pBNGhOR0tSQlJ0QVNKQXJGN0ZaWGRSOUp6UHBMS3ExcWc2MCsxandtU0hHQXNadUdUaHRSN1d3UkRyOXJ3dDh3K2toSTRKdEk2REFPakUxeXppTTExbWd2bkgxYldRek9TWElSeS9uTjdUdHV1czQ2RFJsNWZpR0x2Wk5KTE44M1hBRzk5dUlYT1J0OU1pbEJGM2FKTnFkR3NNbWt4bWdSNjJzUmRraWhvOHlRUktyYlcxdFViVmYxRzl0ZVdKZUY1cjB6SjZxK1dGRmFMc3A3Z2ZUdE5IcmJOQzlKVmdJcjJOamF4bDdIejlDNlVKMHJIc1R4Ylp0dkh2bVYzaGkzeEVtQ0M3OFhrRmpMb01FRTI2TjJyeUpQd1NSaTd3TDByY2ZTNlR3MXZIZllkZEVHZFBsTXBYK0R2bHk3K21JMHZQVjdkYngrT3crT0w2SHl1SXFkVEJidHhJVVhvV1pYSUtJWUI4Q0dSRkxZV0p5QWtzTDE1Q1c3ZlIwNWZXSG1TSmRFejJ2aVVaMUdhbEVnbkhiWll4UHp1cEtjaVBjb2RkdFJBUzdCenpIeDh6MFB0MkUvZGR2eWNJUTlOdWM3NnhSTXZoM09pMHNYanZQNCtKNDQ3ZS94Qml6VU10T3kxYXZpTkJIRklQZER5SzhwaHh5cW96VnRTV2tVekljVGxZZ21iQjRNZVBBOVd1bk1URytCL0hrbUphSGxxKy9qNG5kaDdTK0dhR1B5SUxkQnpLM2ZtbTV3cStnZzFTbWdIakNSc3h3ZGVIRzh0SloxRFp1d2ZCNnZEK3JuMktqVm9QSll3SWpmQzA1RDBKRXNQdkFaOENlTCs1bVhIVVdOa20yZVBPNjFobXpXUnVOclFabTl4N0U3UHhlV0VFTDFaVXJXTHAxQ2VQbFdScStLUGk2RTVHTGZBQ2tMeXlRd3ZYNkZicEFDNDFHWGJXdXRZMTF2UHpLS3hnYm44Ynh0OTlrRFRLRlBmUDdtSUZhcW4xRitGZEVCUHRJR05TNUVuai93cHVzQmpsWVg5L0UvZ1A3c2NTaStMNTlleG1qRlpFb2p0Rnp0c05hRFhvZ0loZjVrWkN0OW5vb0ZNdmFxdi9Nc1dOWVgxdEJLcFhDOVJzMytBa3k1bkxjaUZ6M1FVU3dqd0dUY2tXNzFhWFZXc2JxK2dvT0hud1pNYnJNeFlWRmtpK0lQc1VISVBwb1BoYVlMZG9HYnQ2NmhWSjVBaHYxVmJUYmJlMTY5UnhQRjNsRXVEZWlHT3dqMFVQU2ptTjU0U3JLcFN5dVhidUtTbVdaMldSZUJ3cVhtRGttODZXUm4xVDRTUkZac0krQVpTV3dzbndEdS9mc3dnMUtGV2txcm9sa0doTVRFeWlYUzZqVzF0VmRScmczSW9JOUNQeDA2clVOeENtd25qdDNIamV1MzhBUC92Ni9ZSkxrS2hhTE9IdjJIT3BiYS9CSGFQdTloNDJJWUErQVpkcW9iaXlqVnE4aVlLelZicmN3Ti9jRnlBcWhFMjhmMXpiRDJUMHpxSzlWWUVaVzdKNklQcFVIZ1FWdDEzSGdlUjNrOGdYODJaLy9COHc5ZmhxMVZvQS8rZGEvdzZVTEozUVVWS1BkUU9FUjNSUDg4MFpFc0FjZ2tISlJvWXozemw5RktWOWszVEdKSTgrL3docWtqMXExcnBNTFYxY3JyRlZPcVZZVzRjT0lYT1FENFBzT1ptY2ZSNFV1OE9UeEUzampqZGRSdWZrK2cvNXJPSFA2bDZpeGJQVG1tOGN4TXpNRFJHSFlQUkhKRlBlRGFXaUhkR056bGQ5Q1IydVNyVzRYaThzMzRia3UwclJtOVZvTmNXYVVYMzNsVDlGMWZOazhEWWhxa1I5QVJMQzdJS3A5enlkWnVpMzB2RGFLcFFMSjQyRnJjd01kYVowbTZWSnhHOWxjWHZ2MFphNnJianJ2QjhpVnAyQW5VblN0RDJPSTNXZ2dpc0VHWU1VUnFXUVNsZVVGcEpNbUNya2NmdjNQdjhHNzV5N0FvZVd5RXpiR3hpWTFMZ3RJTENNVzF6bjcwelBUbUptWVFtbXNnRVp0QlVFeWcwUm1ERG9mUDdKbWtRWHJ3OUN0L2k2OGV3S0hEdTdETC83cDUvamxHNy9DbnRrOWVPTGdVVDZXZ2NOc01tNllwS0ZQa1lMRklVdW1GZlpZNTNiUmJUWnAzZHA0Y3Y5K3pPK2R4d1pkWnlJaDdkTzJacGxoUmtRdzJTQ1VSTGh3N2sxYW9nbjg0QWQvVDFJZDFNblFnV3hhS25NbEJpdUtaTXNaby84VVdQRTRySmlsdDEzWFViZTRYbG5STlpYLzVpLytBcTFXaXdjVmtLUXJEYnp3elFYYlJ1Z0pKcjFlNzU3NURXSU00bi8wNHgvaE85LzlLM0xLUWpxYnBaMWlQQmIwZEo5dHk1WTl0WHNhZDZYVDZYNlJtOVpKTnRZU0JFd0tESkVxZURsMS9MZjQ5bmUraldLWjhWdVFRaXFWMCswRXc0aFF5eFRwZEJLbjMvNEYzRVliUC9tZlA4RmYvL1cvMXpIbTJYeFpyWmNRS01WakxBYjFNcUJPNWxSa01oa2RoU203VDdxK2k1aHRxU0FySDJTQ21hWHNadnVsbDc2Sm4vM3NIN0hCeE1Cd20zMExGbElkTnJRRVMxRmVPSHZtOTBpeG1QMS9YLzhadmtkeWRaa1JKbE5weGxNdEJ2WWRXaStTaUFHK3hGbU8wOVdSbTYxbVMyVUttYjRqUDd2TUxHV2o5NENXcTlraW1aaE51bFQrWC9uYU4vRFRuLzV2ZnNBZUtpdFhrSXduRVVhRWttQlNOMXhadm9WU05vT2YvSy8vZ1cvLzFmZmcweTJtMGhuazgzbVdoenowSmEwQWZzOW5qSlpBcDkxRXZWSHQ3MjNFKzhXYXhVeExwMUszV2cyZHlScWp4S0Z4bVNHak9UMzh5ZGUraGYvNjMvNDdEc3p2eGVWTFp4RzN3emZHUEpReFdGdzJaVis4aU5kLytuOHd2Kzl4WkxNbGtpNmhCTW5rNkFLcG1BcTVwUHpqMGIwVlN5V2R2dE9Tdm5zaEhlTXllWTBFWlkxYXRhYnJjWVZrMGlPV0kwR0ZkREdabGQrbVBzWTY1Y0tOOS9CbmpNbDZWbzRGOUg0c0Z4YUV6b0lsR0V2ZHVua1pDemR2NnJ2UHBBdjlTWmtra3BDbjFlcWdYQzR6TU05UVRNMnE4RnJicXRGcStTUlFWZ044aStTU2dTZENwSHd4cDEwVk1rL003WFI0YkJWYnRTMW1rMjBrVWphU0pGMmo0NkJSYitIbWxRdDgzVFRDaE5BUnpIVTd5Q1FzL1B6Ly94ekhubjVXcHo5YmRseUpGREJvOXhoVHJTNHZxYUFxT21tV2JsTklKUzZ4UzZKWURPU2xGNnpKR014aFJ0bnQra2puTXpvY1JVZ25tMm9aYXVWOEZXVEYwbjN4aFpmeGovL3dENWpldFF2MTZrYW9odEdGaW1BeEs0N045UlZjdVhRSjB4UFRETVlERWloUDkwaEJOTmFQemNRYWlhamFhdFJvaFZwb01QWnFNckIzblVCMU1Na2daU0xtTk5YN1hGYUdWdlNRb2JVcjVBdVE2WFVTeDBuQ0tBUjFYVTgxc3A0Zm8vVXI2aDdobHk2ZVlTS1JRVmdRcmoyN3RSeGs0cTIzMzhLQmcwY2dsYklrQ1dHVFdKWVoxNHNzNU5BUjVxS3Y4bCt4VUNScDBycnRzbVNJN1daZDQ2MFdNOFlFZzMrUkpqWTNObUFuKzZxOXhHTml5WmhXOW11U2pQaTdiaHVIRGgvRjJYTVgrVmhNTTg2d0lFUUVNeWd4YkdKNWVaRW4zTlU0U3NwRFltbEVISlVSNXJLUGRvSTZsMG5keXlBeFpFZTJScjJoV2FXUUo1MUpJMGRsM29wYktsbDB1bTJLc2I2dStsNWJYVk0zS3NlYW9zd2FoZzRXN2pBdUU3SUdKTnhLcFlJU0xkMjFTNmRDMHdFYkdvTEp3Z3paMXZqS3BjdDRjdDkrYWxzU1Q4V1pKZm9xbENaWXBMWkpPQ2tiQlhSdDRrNWxMSk9ZcEZLcGlQRmRVenFWeWVSOUlyb21LY0NLOVpJUFVOUjlWZlhkZnFMZ3NTb2didExSRGVCalNyZzJNOHFaeC9ab1VYMXpZNDNrRG9jdUZoNkM4WXpiMUtnV0ZoWXdNVFVCM1REVTc5Y1pKY0FYdFQ1RmtzbnNDY3Z1dTBpYkpOaTFheHh4SmdXeXFYc3ltYUQ3akd1TUxwYkpaK1lwTVp0MFdnaGhZaVNqTkNrNlhsZjFNeG4xSkR1c3RWZ01sMUpSc1RpTzFUVzZVOXNNelRLMzBMVHJ1Q1JEbTRHNzQ4am1DallzV1pCTmx5aHVUV0lwc1N4VklSZUpKclZ0MldvNXh1TWtTRzlRWUxYdGxMWkh5MjI1THEwNEZoWDhHSi92VXpjVEN4YWo2MHhibVg2MnlXSzRRM2NwajRzbEZDc21GbERjOHpSZmUwUEdEOGdVNnhGSGFDeVlSM2UxWHEwZ3pSS1I3T3BCZHZTdER6UElkcWVKQnJXcmhGcWlCR1dKckphSDF0ZlhhSVVDMWNua3Vqd2pUaXNvemE0SnV0ZGcwTHpqa0x3U2x5VWxHWWdsZE9LMEVGZVNCYzA4QjRWdTBsQ2JGZ3VGQXExYS9iNXpYMGNKb2JCZ2NwSmR2NHVOeWhyR3l5WG8yMllRN3ZQRWQ1eWVabjVweVNhcHpNc05pYUZrVXl1cE1kWXBzb3BQekVud1QvY29BcXpCKzJWK1dKdVpwTnZ0ZDFQSXFDZTVaQ2pPYXFtSWxqS2pSSFhVaWttODFtZzBlRXljbGk0T255VW5jYzJpbDQweVFtSEIrckdRVHhHMGkyeTVpQmdEZWROZzdFVW1pR3NVZFYrYUErVTRJVlVtblVJMm45T1lTOFJVaWJrOGxTQU0xY2EweVpCS3ZUeGZzczFrS3FrV3pOYlhrRktVclVsRm8xbERudFlxUmFLMUtNQ0t2aVlUcUdYREJzTUlSNE5GT0Z5a3hQSU1nTG9hUHpFWVo4UXZGNG1Oc2xMNllReVdUR2ExVUMwMVI3Rk0waWJkYVVzSGhRaWxubXBsa2lWSy8xZUhqNHNibEJIbWNoRkxKREZXb1BWTHFIdE1wbEo4RFZjMXNyenMrc0hmSVdTMExHTWcyb2FqZnljY0xsTC82Mm5KUnl5V0NLQmlaY1JGZW9HSkF1dVJraFhLUEh3TjJrbVVUcU9Md0hHMDJWQmNySkRHVVhKMU5HdnNrU0J1eDJYY0ZaZnVlLzA5OGp4eG1YS3NKQUxKZElMeVJFT1h0NG5VSVYydXNpZVNTN25FaUFXZmVtL3dZVUJJWEtTaGVwZTRQM09ROVFscHhJMkpBQ29FRUNMSlkxSi9GRXNrMWt5elA3UGZleThFTk1takJOMWhQeU50a0VSeERmcGxIeXg1ZlovNm1SZ21FVy9ydFlxT09SY3lpOFFoTGxJMm5XOUxQNWtuallyOWJ0bFJSeWdzbUxUZFNEdXpaSWVOanNjWWl5V2ZWdU4ybDZyamRSQm5EQ1dHU0RhK1NpWFNkSWNCekJRdGwxZ2x1a21mUWJ2RVlWTHNqa2szQmVVTWl5VHB4MjNvMXlnbE1lakpNamFIOFY2ZGxpNmptbGViVms4SzM2WnFiNzVxWURFekhvcWFkMGhrQ2tQZFY0SkJ1TGhBMWJCSUtJZWtFSFhmMHphZGxoSkZwQVZmZDBqemRNR0g5SGpaMGl2RyszdURSc0pFUEtFS1BRYldUclprVmptREx0VHN5Ung5RWpDVjFUaXRMOHo2MnJBWWk1bmE5aVB4bXV2NG1pU01Pa0pCTUltN1pJUFFCTXM3UFYzaFkyaFRvWnh3V1ptZHBDVVRWYjVCOXlXblhJUDlBRXBFY1kyU0hZcXEzOU9OaHdLTnVReHRrL1pWdUpYaXQ4Um5VbDlzT20wOVRySkZqOVpLaUNtL3A5VnVxWXdSMXdRZ29jY2JFY0ZHQkpMYStkU29zbjBCdFM4dnhEVFFGNzFLTXNPRUxPemdiZEdxT3QybXRqZG5zdjIyR3RHcVRGMnl4bXlSVVlYWU55a05KYlRQWGtoSDRsRGJrbmJyUXJHa0ZsRVlLaHRyaVY0bUxwZk9VY1ZWZVVpZXExdjloVUNvQ0VVTUpvRzg3TUpoQjNHVkh6UzROcGxCK3Vqclg3MUF4VSt0RVZGQ0VIbEJTR2dhMUxjMFJtTVJtN2VGb0hKY2owSnNsNjhqVmt5NlhLVnRXcXhUVzdKT3k5U0ZJNktCU1h1UVJ3dG9xS0FhcUJibnNVNHAyeS9IWTlJNlBmb2pCc0pSaXlTQmJGcWJIakxhMXlYS3ZWZ2gxYTA4a1JVc2JkOFI1eWZySWFWRlIxcW5KU2lUWUY1c2xJd1ZNQWNTQm4yZXR1WElYREJ4b1JMMGQyUzhRTUM0cnRQdlpoWFhJUDFqSUcvalprd2xFY2srZFQ4dFd0UmtJdHQvZk1RUm1tSzN0T0o0Zmx3N1R2dnQwSFJhakk5TXYwZjNScjJLUWI3ZmsyblNTVzB3MUlFbW5lNmdwbWpyQWc0TVZoUFo4YmdTTkpzcDhIcE11MTVqTEFGWmZCMkxCUFpZN0pZZWYwOHlUSTMzUEMxQmlmVk1VQitUMzJObituL0hxQ00weFc0aGhzY1RXeXFVYVcxYTJqZXZjeU5FWFNkaFN1TzdsR2d1aWRXaUJWTWlKZU9xNmplclZiV0NFbWZwMmtnZTQzbU82bUFTUzhWcEFWTkpjWG5pVm0xYXdieGF3MzZHMmV2djIwMGllM3hla1NXb2VxMnVyalVNemZtaElWakFFeXlydFNkM1Q2Rkt3a2kzYVY5WURWUUlyVFZxdEM1eDNTUFNrSzRIV2pRUlN1T01zMFMxbDhVYnJ1dHF2MWVIb3FrMDVndkp0RXhreW5ySXBFb1NnZlNEOFhuYU82R2pCS1Q1ME8rWG9QaThpWWx4MUpzc05Vbk1Gd0tFeGtXS3BiR2tFOVV1cVdncWhKR1YzTkx1TEk2czA2Q0xGRW1CcEFzMHdEZjdaU08vMzJQZjdYUjFtclEzRUV5RlZBbnRTbVZXYWZWVWFKVlYzUEtOMWJoTWFwUWlhL0FGSkc2VExGSmtEWmUzYlR1alM5N0NVTzRPMWFJUE81WFJNdEg4M0R5YXJSb2sxTmVGR2lTVVRSZm5randkYWIvUjRuV2djWmxrZm1KOWhGdytGWDlKQlhRQlNPQnBHN1Iyc0lvR1p2amFyS2pacU1SZHJHdXFsb2FZcmk3cThybVRFMU80ZE9WOTdEOXdPRFNqejhPMUxwTFdvMDNyTmJkM0wxWlhLcG9aU216bGlXV2hOQ0Z4a1JTeWZTbm42Qk5NWGRRaGUzQ3JPMlJkMHJDczI0czd4QlZ1eVRySG9MK2VVcGU2MGYwNW5iWjJ2a0xxbEZKcWNqdFlYMXZGNU15a3RtV2JkbmptVklScXdxRllxM3hoSEU1enZiODBMZkExbnBLZ1hNcEFFb3VKMkpwSnBiUzFKMjczKzhpa0F6YXVNb1dsTHRMUUtVMnUxaGZGa3JWY1I4dE0wckVxVm8yT2xrYXMzOExUN1RTMFNwRE41ZEJzTkhIbzhETzY1QzBzQ04zS2JtbFRidEtLdmZTVmwxQW51V1JiUGxtVUFWbmhMZlhHUWVlRVdKNVVoZ3E4eGVBOWFXdjJxSzNTa2tuNm52YVFDYUhpZzFWRDBpc21YUldhclFiOXpnMXAwMmFKVXZlV1BIYnNHS3ExSnNZbXAwTTFLRGlVdzA5RVhyajYzam0wT2x0b056cGFwNVNFVHdKekxmdllNVzIvNmZVTUxXcExnaURmUkZIOVpXTUdmeURRQ2swMDBOY0Nka3o3N1NXMkVsY3FtNWZLaXFMVnlnS21wcVoxN09heDU3N0s3RkVXZW9SbkdGMG94emZKWk9qUytDUUt1U3dXRjI3ZDdsalZRRjUyOXVqNktvd21OR0R2ZDJFSW1aUmNFcHpMZEoxa3NsL0w5UHRTaGRzaHNYU2xVbHlWZlNGbHR5T3UwTVRzRithUnpoZnBKaWNSdG9INm9TU1lkSldPajArZzBRcnc3SFBIY1BIaWVSMDJwOEtyUmQxcjBQN2NvUldTbHA1bXM5RnZsK1oxTzUxRk1wdldlRXdLNHRsY2tkbG5qMWtpM1dZNnFYMzhFbU4xdWpVZFZ2Zk5iLzRwTGwxN0Q4OC8vM1UwMnpXRURhR2RjTmhrL0hYczJKZXd4R3p5eFM5L0dSZk9uMWVMSlVLckpBRFd3RzJLVzVUdUI1bC9IMlAybDJlbTJhTm9LKzA3SFJtbDJldHJiSVZDanZHV2llcm1wbWFYcldZYlgvLzZOM0RpblZONDVhWHZhZDB5ak5zWmhYd0lzSUZzT29lZi83K2ZZbVo2R3FmZk9VMnRhaHJ4UkZxTDNMS01UVDRjaWNORUk3UG8vbVJtbU13V2s2bUhzclpTbWdvdE1rYzJLWlZ5VWJmVm9CVkw0dkNSb3poOTVpU09QdnNpckVSbXNEbURySU1NMTFqemtPOVYxS09ick9FYjMveTN1TFcwaktOSGo2aEt2N1d4cG9GN1hGWjU4NmhrTXFXeFYzVnpIYmR1WHRPZWV1bnNTZWdVSFYvMXRWdzZwVE1uWk4raWc0Y080ZmlKMytQb015K1JwS1VCdVhTb0U4S0dhRTcrQUFVRzRTZVAvd29keGxzSDl1M0YrVXVYVUZsYVJKb1d6b3JKT2tkRHhWT1JLMFRLeUtRemlORnRTbkZjVmhLVlNnWHNmWHdmTmpaWGNQRzlTL2pqYjN5SExsRWFDenVxU3ZTYkM0Vm80ZnBPaDVKZzIrVWhXUXdpRiswTEMvcHR6czNHT2k1ZmZCZDc1bWFSb2N2YnFLeWoycWl5UUY1WC9VcGJlQmlmaVZYTEY3T1lHTitENGxpQmoyL2k0b1dMaUtjU2RJdGYwWFlmeTRoVCtjZWdkdGtubGpsWUFxY0xVVUlRbEkwVXdlN2VzM0g3SkFhRGdiNkNZTkNtSTRxOGxJVGtaNzlMd3RlZjdtQWxkNFB1TUU0M3VHdGlnb0Y5V2x0NlpDMmpyNnV6cmNIS0lRZWJQRzVoY1FFQlNaUExqVk80TFRMdzk3UkFMc2RKaTQ5YzVMcWwvZm45TGc2NUxuK2IzTjRtMmpZSlB5N3hob0dnSTFVcTJ2N0F0eTNVM2ZmN2cxM1E3dDQvU0U3eTluTmlnd1cycVd4QmxmZ2JDeXZhK3B4T01aT2ttd3o0VWc0enhCYUYxdHJXSmd2b2VTUUxNeXBiQ0RGZDMxTjNLakdYTVJndGNPZmZJRC92dEdhZnhKSU5rK1VieVZyazNaWmcrK2Mya2V5NzV0VUhnMDdWYmVKdHUwN1ZGWHI5dmk2ZDUyV1kya0JvM242OStLRGY2L2FoK3J3N2YvK2RaTmkyb3ZjanlDaTZ6ZEJ0NTdkOTh1OTFuNjRjR3NSbUh6clIyd3o2d0YxeVRQKzU5OXBTdVhmUDQrK1BVWXpKb3YwaTc4STJLVDVFbUk5Qm9BZ2ZSclJuZDRRZFJVU3dDRHVLaUdBUmRoUVJ3U0xzS0NLQ1JkaFJSQVNMc0tPSUNCWmhSeEVSTE1LT0lpSlloQjFGUkxBSU80cUlZQkYyRkJIQkl1d29Jb0pGMkZGRUJJdXdveENDWFVPRUNEdURxbWtZeGpWRWlMQURJTGRPbWI3dnY0RUlFWFlBUVJDOGJteHViaFlkeDlsRWhBZ1BHU1RZdkZrcWxhbzBaYjlBaEFnUEVlVFVqNmVucDY5cEZrazMrWjk1UnhVUklqd0VDSmZJcWRma3VoSk1tT1o1M211SUVPRWhnSzd4TmVHVVhMK3RnODNNelB4UUhrQ0VDSjhPcjAxTlRmMXcrOFlIaEZheTdsV2F0citMM0dXRVB4VENtVjZ2OTNlVGs1T3ZmdUQrZXgyOHRMUTBaNXFtSFBnZkVTSENSMENTUkluanQ5M2lCeDU3MEJPRmFIenlYNUpzMytYTlkyUm9FUkVpc1BvakFyMW9xSjFPNTRmejgvUDM5WGovQXFsVTVSaFJNKzhZQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHR5cGUgeyBHaWZ0IGFzIEdpZnREYXRhIH0gZnJvbSAnLi4vcHJvZHVjdCc7XG5pbXBvcnQgbmVja2xlc3MgZnJvbSAnLi4vaWNvbnMvc21hbGwtbmVja2xlc3MucG5nP2lubGluZSc7XG5cbi8qKlxuICogR2lmdC13aXRoLXB1cmNoYXNlIHByb21vIGNhcmQsIGRpcmVjdGx5IHVuZGVyIHRoZSBhZGQtdG8tY2FydCBidXR0b24g4oCUIHNob3duIG9ubHlcbiAqIHdoaWxlIGBxdWFsaWZpZXMoKWAgaG9sZHMuIFJlLWNoZWNrZWQgb24gZXZlcnkgaG9zdCByZS1yZW5kZXIgdmlhIGBzeW5jYCwgc2luY2VcbiAqIHN3aXRjaGluZyB2YXJpYW50cyBjYW4gbW92ZSB0aGUgcHJvZHVjdCdzIHByaWNlIGFjcm9zcyB0aGUgdGhyZXNob2xkLlxuICovXG5leHBvcnQgY29uc3QgR2lmdCA9ICh7IHRpdGxlLCBwcmljZSB9OiBHaWZ0RGF0YSwgcXVhbGlmaWVzOiAoKSA9PiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1naWZ0XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNycy1naWZ0X19yaWJib25cIj5HaWZ0PC9zcGFuPlxuICAgICAgPGltZyBjbGFzcz1cImNycy1naWZ0X19pbWFnZVwiIHNyYz17bmVja2xlc3N9IGFsdD17dGl0bGV9IHdpZHRoPVwiNzJcIiBoZWlnaHQ9XCI3MlwiIGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZ2lmdF9fYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWdpZnRfX2xhYmVsXCI+WW91ciBHaWZ0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZ2lmdF9fdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZ2lmdF9fZGVzY1wiPkdldCB0aGlzIGpld2VscnkgPHNwYW4+d29ydGgge3ByaWNlfTwvc3Bhbj4gZm9yIEZSRUUgd2l0aCB0aGlzIGl0ZW08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNycy1naWZ0X19wcmljZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNycy1naWZ0X19mcmVlXCI+RnJlZTwvc3Bhbj5cbiAgICAgICAgPHMgY2xhc3M9XCJjcnMtZ2lmdF9fd2FzXCI+e3ByaWNlfTwvcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgcm9vdC5oaWRkZW4gPSAhcXVhbGlmaWVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcm9vdCwgc3luYyB9O1xufTtcbiIsImltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5cbmNvbnN0IGZpbGUgPSAoc3JjOiBzdHJpbmcpID0+IHNyYy5zcGxpdCgnLycpLnBvcCgpIS5zcGxpdCgnPycpWzBdO1xuXG4vKiogVGhlIEpTWCBmYWN0b3J5IGNhbGxzIGNyZWF0ZUVsZW1lbnQsIHdoaWNoIGNhbm5vdCBidWlsZCBTVkcgY2hpbGRyZW4g4oCUIHNldCB0aGUgbWFya3VwIGluc3RlYWQuICovXG5jb25zdCBDSEVWUk9OID1cbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMTQgMjZcIiBmaWxsPVwibm9uZVwiPlxuICA8cGF0aCBkPVwiTTEzLjA2MDUgMC41MzAyNzNMMS4wNjA1NSAxMi41MzAzTDEzLjA2MDUgMjQuNTMwM1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLW9wYWNpdHk9XCIwLjE3XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxuPC9zdmc+YDtcblxuLyoqXG4gKiBUaGUgdGhlbWUgcmVuZGVycyBhIHN0YWNrZWQgZGVza3RvcCBnYWxsZXJ5IHdpdGggbm8gdGh1bWJuYWlscyBhdCBhbGwsIGFuZCBhXG4gKiBgc2xpZGVyLS1tb2JpbGVgIGNhcm91c2VsIG9uIG1vYmlsZS4gV2UgYWRkIGEgdGh1bWJuYWlsIHN0cmlwIHRoYXQgZHJpdmVzIHRoZVxuICogZXhpc3Rpbmcgc2xpZGVyLCBhbmQgaG9pc3QgdGhlIHNlbGVjdGVkIG9wdGlvbidzIGltYWdlIHRvIGZpcnN0IHBvc2l0aW9uLlxuICogYGN1cnJlbnRTcmNgIHJlc29sdmVzIHRoZSBpbWFnZSBmb3Igd2hpY2hldmVyIG9wdGlvbiBkcml2ZXMgbWVkaWEgb24gdGhpcyBwcm9kdWN0LlxuICovXG5leHBvcnQgY29uc3QgR2FsbGVyeSA9IChjdXJyZW50U3JjOiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQsIGNyZWF0ZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICBjb25zdCBzdHJpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdHJpcC5jbGFzc05hbWUgPSAnY3JzLXRodW1icyc7XG5cbiAgLy8gT24gZGVza3RvcCB0aGUgZGVzaWduIHB1dHMgXCJUaGlzIFByb2R1Y3QgQ2FuIEJlIENyZWF0ZWQgV2l0aFwiIGJldHdlZW4gdGhlIG1haW5cbiAgLy8gaW1hZ2UgYW5kIHRoZSBncmlkIGJlbG93IGl0LCB3aGljaCBtZWFucyBpbnNpZGUgdGhlIG1lZGlhIGxpc3QuIE9uIG1vYmlsZSBpdCBzaXRzXG4gIC8vIGFib3ZlIHRoZSB3aG9sZSBnYWxsZXJ5LCBvdXRzaWRlIHRoZSBzbGlkZXIuXG4gIGNvbnN0IGNyZWF0ZWRTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY3JlYXRlZFNsb3QuY2xhc3NOYW1lID0gJ2Nycy1jcmVhdGVkLXNsb3QnO1xuICBpZiAoY3JlYXRlZCkgY3JlYXRlZFNsb3QuYXBwZW5kKGNyZWF0ZWQpO1xuXG4gIC8vIFRoZSBtb2JpbGUgZnJhbWUncyBzd2lwZSBhZmZvcmRhbmNlLCBvdmVyIHRoZSB0b3AtcmlnaHQgb2YgdGhlIHNsaWRlci5cbiAgY29uc3QgaGludCA9IChcbiAgICA8c3BhbiBjbGFzcz1cImNycy1nYWxsZXJ5X19oaW50XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICBTd2lwZSDihpJcbiAgICA8L3NwYW4+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3QgbGlzdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJvZHVjdF9fbWVkaWEtbGlzdCcpO1xuICBjb25zdCBzbGlkZXMgPSAoKSA9PlxuICAgIEFycmF5LmZyb20obGlzdCgpPy5jaGlsZHJlbiA/PyBbXSkuZmlsdGVyKChlbCkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucygnY3JzLWNyZWF0ZWQtc2xvdCcpKSBhcyBIVE1MRWxlbWVudFtdO1xuXG4gIC8qKiBXaGF0ZXZlciBzbGlkZSB0aGUgdGh1bWJuYWlscyBhbmQgYXJyb3dzIGFyZSBjdXJyZW50bHkgcG9pbnRpbmcgYXQuICovXG4gIGxldCBjdXJyZW50ID0gMDtcblxuICAvLyBUaGUgbW9iaWxlIGZyYW1lJ3MgcHJldi9uZXh0IGNoZXZyb25zLCBvdmVyIHRoZSBzaWRlcyBvZiB0aGUgc2xpZGVyLlxuICBjb25zdCBhcnJvdyA9IChkaXI6IC0xIHwgMSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9e2BjcnMtZ2FsbGVyeV9fYXJyb3cgY3JzLWdhbGxlcnlfX2Fycm93LS0ke2RpciA8IDAgPyAncHJldicgOiAnbmV4dCd9YH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9e2RpciA8IDAgPyAnUHJldmlvdXMgaW1hZ2UnIDogJ05leHQgaW1hZ2UnfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50ICsgZGlyO1xuICAgICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gc2xpZGVzKCkubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICAgc2VsZWN0KGluZGV4KTtcbiAgICAgICAgICBwdXNoRGF0YSgnZXhwX3BkcF9nYWxsZXJ5X2Fycm93JywgZGlyIDwgMCA/ICdQcmV2JyA6ICdOZXh0JywgJ2NsaWNrJywgJ1BEUCcpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGJ0bi5pbm5lckhUTUwgPSBDSEVWUk9OO1xuICAgIHJldHVybiBidG47XG4gIH07XG5cbiAgY29uc3QgcHJldiA9IGFycm93KC0xKTtcbiAgY29uc3QgbmV4dCA9IGFycm93KDEpO1xuXG4gIGNvbnN0IG1hcmsgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGN1cnJlbnQgPSBpbmRleDtcbiAgICBzdHJpcC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JzLXRodW1iJykuZm9yRWFjaCgoZWwsIGkpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNlbGVjdGVkJywgaSA9PT0gaW5kZXgpKTtcbiAgICBwcmV2LmRpc2FibGVkID0gaW5kZXggPD0gMDtcbiAgICBuZXh0LmRpc2FibGVkID0gaW5kZXggPj0gc2xpZGVzKCkubGVuZ3RoIC0gMTtcbiAgfTtcblxuICAvKiogVGhlIHNsaWRlcyBcInBlZWtcIiwgc28gdGhlIGN1cnJlbnQgb25lIGlzIGZvdW5kIGJ5IG9mZnNldCwgbm90IGJ5IHZpZXdwb3J0IHdpZHRoLiAqL1xuICBjb25zdCBuZWFyZXN0ID0gKHVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzbGlkZXMoKS5tYXAoKGxpKSA9PiBNYXRoLmFicyhsaS5vZmZzZXRMZWZ0IC0gdWwuc2Nyb2xsTGVmdCkpO1xuICAgIHJldHVybiBvZmZzZXRzLmluZGV4T2YoTWF0aC5taW4oLi4ub2Zmc2V0cykpO1xuICB9O1xuXG4gIC8vIGBzZWxlY3RgIHNjcm9sbHMgdGhlIHNsaWRlciBpdHNlbGYsIHdoaWNoIGZpcmVzIHRoZSBzYW1lIHNjcm9sbCBldmVudHMgYSBmaW5nZXJcbiAgLy8gZG9lcy4gVGhpcyBtYXJrcyB0aGF0IHdpbmRvdyBzbyBvdXIgb3duIHNjcm9sbGluZyBpcyBub3QgcmVwb3J0ZWQgYXMgYSBzd2lwZS5cbiAgbGV0IHByb2dyYW1tYXRpYyA9IGZhbHNlO1xuICBsZXQgcHJvZ1RpbWVyID0gMDtcbiAgbGV0IHJlcG9ydGVkID0gMDtcblxuICBjb25zdCBzZWxlY3QgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHNsaWRlcygpW2luZGV4XTtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIHNsaWRlcygpLmZvckVhY2goKGxpKSA9PiBsaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIHByb2dyYW1tYXRpYyA9IHRydWU7XG4gICAgcmVwb3J0ZWQgPSBpbmRleDtcbiAgICBjbGVhclRpbWVvdXQocHJvZ1RpbWVyKTtcbiAgICAvLyBMb25nIGVub3VnaCBmb3IgdGhlIHNtb290aCBzY3JvbGwgdG8gbGFuZDsgYSBzd2lwZSBpbnNpZGUgdGhhdCB3aW5kb3cgaXMgbG9zdCxcbiAgICAvLyB3aGljaCBiZWF0cyByZXBvcnRpbmcgZXZlcnkgdGh1bWJuYWlsIGNsaWNrIGFzIGEgc3dpcGUuXG4gICAgcHJvZ1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gKHByb2dyYW1tYXRpYyA9IGZhbHNlKSwgNjAwKTtcbiAgICAvLyBTY3JvbGwgb25seSB0aGUgc2xpZGVyLCBob3Jpem9udGFsbHkuIGBzY3JvbGxJbnRvVmlld2AgKGV2ZW4gd2l0aFxuICAgIC8vIGBibG9jazogJ25lYXJlc3QnYCkgYWxzbyBzY3JvbGxzIHRoZSAqcGFnZSogdmVydGljYWxseSB3aGVuIHRoZSBnYWxsZXJ5IGlzXG4gICAgLy8gb2ZmLXNjcmVlbiDigJQgd2hpY2ggaXMgZXhhY3RseSB0aGUgY2FzZSB3aGVuIGEgbWF0ZXJpYWwgaXMgcGlja2VkIGZyb20gdGhlXG4gICAgLy8gc3RpY2t5IGJhciwgYW5kIG5vIHdpbmRvdy5zY3JvbGxUbyBzdXBwcmVzc2lvbiBjYW4gY2F0Y2ggaXQuXG4gICAgbGlzdCgpPy5zY3JvbGxUbyh7IGxlZnQ6IHRhcmdldC5vZmZzZXRMZWZ0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgbWFyayhpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRUaHVtYnMgPSAoKSA9PiB7XG4gICAgc3RyaXAudGV4dENvbnRlbnQgPSAnJztcbiAgICBzbGlkZXMoKS5mb3JFYWNoKChsaSwgaSkgPT4ge1xuICAgICAgY29uc3QgaW1nID0gbGkucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICBpZiAoIWltZykgcmV0dXJuO1xuICAgICAgc3RyaXAuYXBwZW5kKFxuICAgICAgICAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJjcnMtdGh1bWJcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgU2hvdyBpbWFnZSAke2kgKyAxfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdChpKTtcbiAgICAgICAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZ2FsbGVyeV90aHVtYicsIGBJbWFnZSAke2kgKyAxfWAsICdjbGljaycsICdQRFAnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZy5jdXJyZW50U3JjIHx8IGltZy5zcmN9IGFsdD1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqIE1vdmUgdGhlIHNlbGVjdGVkIG9wdGlvbidzIGltYWdlIHRvIHRoZSBmcm9udCwgYXMgdGhlIGRlc2lnbiByZXF1aXJlcy4gKi9cbiAgY29uc3QgaG9pc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3JjID0gY3VycmVudFNyYygpO1xuICAgIGNvbnN0IHVsID0gbGlzdCgpO1xuICAgIGlmICghc3JjIHx8ICF1bCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gc2xpZGVzKCkuZmluZCgobGkpID0+IHtcbiAgICAgIGNvbnN0IGltZyA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgcmV0dXJuIGltZyA/IGZpbGUoaW1nLnNyYykuaW5jbHVkZXMoZmlsZShzcmMpKSA6IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSB1bC5maXJzdEVsZW1lbnRDaGlsZCkgdWwucHJlcGVuZCh0YXJnZXQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPbiB2YXJpYW50IGNoYW5nZSBEYXduIGRvZXMgbm90IHJlcGxhY2UgdGhlIG1lZGlhIGxpc3Qg4oCUIGl0IHJlb3JkZXJzIHRoZSBleGlzdGluZ1xuICAgKiBvbmUgaW4gcGxhY2UsIGJ5IGluZGV4LCBhbmQgaXQgZG9lcyBzbyAqYWZ0ZXIqIG91ciBvYnNlcnZlciBoYXMgcnVuLiBPdXIgc2xvdCBpcyBhXG4gICAqIGNoaWxkIG9mIHRoYXQgbGlzdCwgc28gaXQgZ2V0cyBjYXJyaWVkIGFsb25nIGFuZCBlbmRzIHVwIGJlbG93IHRoZSBncmlkLiBIZW5jZSB0aGlzXG4gICAqIHJ1bnMgb24gZXZlcnkgbXV0YXRpb24gdW50aWwgdGhlIHNsb3Qgc2V0dGxlcyBiYWNrIGludG8gcGxhY2UuXG4gICAqXG4gICAqIEV2ZXJ5IGJyYW5jaCBpcyBndWFyZGVkIG9uIHRoZSBub2RlIG5vdCBhbHJlYWR5IGJlaW5nIHdoZXJlIHdlIHdhbnQgaXQ6IGBhZnRlcigpYFxuICAgKiBhbmQgYHByZXBlbmQoKWAgcmUtaW5zZXJ0IGV2ZW4gd2hlbiBub3RoaW5nIG1vdmVzLCBhbmQgZWFjaCBpbnNlcnRpb24gd2FrZXMgdGhlXG4gICAqIG9ic2VydmVyIHRoYXQgY2FsbHMgdXMgYmFjayDigJQgdW5ndWFyZGVkLCB0aGlzIG5ldmVyIHN0b3BzIG11dGF0aW5nLlxuICAgKi9cbiAgY29uc3QgcGxhY2VDcmVhdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHVsID0gbGlzdCgpO1xuICAgIGlmICghY3JlYXRlZCB8fCAhdWwpIHJldHVybjtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc1MHB4KScpLm1hdGNoZXMpIHtcbiAgICAgIC8vIFRoZSBtb2JpbGUgYnJhbmNoIGxpZnRzIGBjcmVhdGVkYCBvdXQgb2YgdGhlIHNsb3QsIHNvIHB1dCBpdCBiYWNrIGZpcnN0LlxuICAgICAgaWYgKGNyZWF0ZWQucGFyZW50RWxlbWVudCAhPT0gY3JlYXRlZFNsb3QpIGNyZWF0ZWRTbG90LmFwcGVuZChjcmVhdGVkKTtcbiAgICAgIGNvbnN0IGZpcnN0ID0gc2xpZGVzKClbMF07XG4gICAgICBpZiAoZmlyc3QgJiYgZmlyc3QubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBjcmVhdGVkU2xvdCkgZmlyc3QuYWZ0ZXIoY3JlYXRlZFNsb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmljZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNycy1wZHAgLmNycy1pbmZvPltpZF49cHJpY2UtXScpO1xuICAgICAgaWYgKCFwcmljZUVsIHx8IHByaWNlRWwubmV4dEVsZW1lbnRTaWJsaW5nID09PSBjcmVhdGVkKSByZXR1cm47XG4gICAgICBjcmVhdGVkU2xvdC5yZW1vdmUoKTtcbiAgICAgIHByaWNlRWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGNyZWF0ZWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogS2VlcCB0aGUgdGh1bWJuYWlscyBpbiBzdGVwIHdoZW4gdGhlIGdhbGxlcnkgaXMgc3dpcGVkLCBhbmQgcmVwb3J0IHRoZSBzd2lwZSBvbmNlXG4gICAqIGl0IHNldHRsZXMuIEJvdW5kIHBlciBtZWRpYSBsaXN0LCBzbyB0aGUgbGlzdGVuZXJzIGdvIHdpdGggdGhlIG5vZGUgRGF3biByZXBsYWNlcy5cbiAgICovXG4gIGNvbnN0IHdhdGNoTGlzdCA9ICh1bDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBsZXQgcXVldWVkID0gZmFsc2U7XG4gICAgbGV0IHNldHRsZSA9IDA7XG5cbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAvLyBBIGZpbmdlciBpcyBmb2xsb3dlZCBsaXZlLCBidXQgb3VyIG93biBzbW9vdGggc2Nyb2xsIGlzIG5vdDogaXQgY3Jvc3NlcyBldmVyeVxuICAgICAgLy8gc2xpZGUgb24gdGhlIHdheSB0byB0aGUgdGFyZ2V0LCBhbmQgc2Nyb2xsIHNuYXBwaW5nIG92ZXJzaG9vdHMgYW5kIGNvbWVzIGJhY2ssXG4gICAgICAvLyBzbyBmb2xsb3dpbmcgaXQgd291bGQgZmxpY2sgdGhlIHNlbGVjdGlvbiB0aHJvdWdoIHNsaWRlcyBub2JvZHkgYXNrZWQgZm9yLlxuICAgICAgLy8gYHNlbGVjdGAgaGFzIGFscmVhZHkgbWFya2VkIHdoZXJlIHdlIGFyZSBnb2luZzsgdGhlIHNldHRsZSBiZWxvdyBjb25maXJtcyBpdC5cbiAgICAgIGlmICghcXVldWVkICYmICFwcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBxdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICBtYXJrKG5lYXJlc3QodWwpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9uZSBzd2lwZSBmaXJlcyBzY3JvbGwgZG96ZW5zIG9mIHRpbWVzOyByZXBvcnQgb25seSB0aGUgc2xpZGUgaXQgbGFuZHMgb24uXG4gICAgICBjbGVhclRpbWVvdXQoc2V0dGxlKTtcbiAgICAgIHNldHRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZWFyZXN0KHVsKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICAvLyBXaGVyZXZlciB0aGUgc2Nyb2xsaW5nIGFjdHVhbGx5IHN0b3BwZWQgd2lucyDigJQgYSBzd2lwZSBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHByb2dyYW1tYXRpYyB3aW5kb3cgd291bGQgb3RoZXJ3aXNlIGxlYXZlIHRoZSB0aHVtYm5haWxzIGJlaGluZC5cbiAgICAgICAgbWFyayhpbmRleCk7XG4gICAgICAgIGlmIChwcm9ncmFtbWF0aWMgfHwgaW5kZXggPT09IHJlcG9ydGVkKSByZXR1cm47XG4gICAgICAgIHJlcG9ydGVkID0gaW5kZXg7XG4gICAgICAgIHB1c2hEYXRhKCdleHBfcGRwX2dhbGxlcnlfc3dpcGUnLCBgSW1hZ2UgJHtpbmRleCArIDF9YCwgJ290aGVyJywgJ1BEUCcpO1xuICAgICAgfSwgMTYwKTtcbiAgICB9KTtcblxuICAgIC8vIEVhY2ggbWVkaWEgaXRlbSBpcyB3cmFwcGVkIGluIHRoZSB0aGVtZSdzIDxtb2RhbC1vcGVuZXI+LCB3aGljaCBvcGVucyBEYXduJ3NcbiAgICAvLyB6b29tIG1vZGFsLiBcIlRoaXMgUHJvZHVjdCBDYW4gQmUgQ3JlYXRlZCBXaXRoXCIgbGl2ZXMgaW4gdGhpcyBsaXN0IHRvbyBvblxuICAgIC8vIGRlc2t0b3AsIHNvIGNsaWNrcyBpbnNpZGUgb3VyIG93biBzbG90IGFyZSBub3QgZ2FsbGVyeSBvcGVucy5cbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0X19tb2RhbC1vcGVuZXInKSB8fCB0YXJnZXQuY2xvc2VzdCgnLmNycy1jcmVhdGVkLXNsb3QnKSkgcmV0dXJuO1xuICAgICAgY29uc3QgaXRlbSA9IHRhcmdldC5jbG9zZXN0PEhUTUxFbGVtZW50PignLnByb2R1Y3RfX21lZGlhLWl0ZW0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbSA/IHNsaWRlcygpLmluZGV4T2YoaXRlbSkgOiAtMTtcbiAgICAgIHB1c2hEYXRhKCdleHBfcGRwX2ltYWdlX29wZW4nLCBgSW1hZ2UgJHtpbmRleCArIDF9YCwgJ2NsaWNrJywgJ1BEUCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxldCBsYXN0TGlzdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgbGV0IGxhc3RTcmM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogT25seSByZWJ1aWxkIHdoZW4gdGhlIGdhbGxlcnkgd2FzIHJlLXJlbmRlcmVkIG9yIHRoZSBpbWFnZSBjaGFuZ2VkIOKAlCByZS1ydW5uaW5nXG4gICAqIG9uIGV2ZXJ5IG11dGF0aW9uIHdvdWxkIGtlZXAgeWFua2luZyB0aGUgc2xpZGVyIGJhY2sgdG8gc2xpZGUgMSBhbmQgbWFrZSB0aGVcbiAgICogbW9iaWxlIGdhbGxlcnkgaW1wb3NzaWJsZSB0byBzd2lwZS5cbiAgICovXG4gIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgY29uc3QgdWwgPSBsaXN0KCk7XG4gICAgaWYgKCF1bCkgcmV0dXJuO1xuXG4gICAgLy8gVW5jb25kaXRpb25hbDogRGF3biByZW9yZGVycyB0aGUgbGlzdCBhZnRlciB3ZSBoYXZlIGFscmVhZHkgcnVuLCBzbyB0aGUgc2xvdCBoYXNcbiAgICAvLyB0byBiZSByZS1jaGVja2VkIG9uIGV2ZXJ5IG11dGF0aW9uLCBub3Qgb25seSB3aGVuIHRoZSBnYWxsZXJ5IGlzIHJlYnVpbHQuXG4gICAgcGxhY2VDcmVhdGVkKCk7XG5cbiAgICBjb25zdCBzcmMgPSBjdXJyZW50U3JjKCk7XG4gICAgaWYgKHVsID09PSBsYXN0TGlzdCAmJiBzcmMgPT09IGxhc3RTcmMpIHJldHVybjtcblxuICAgIGNvbnN0IHJlYnVpbHQgPSB1bCAhPT0gbGFzdExpc3Q7XG4gICAgbGFzdExpc3QgPSB1bDtcbiAgICBsYXN0U3JjID0gc3JjO1xuXG4gICAgaG9pc3QoKTtcbiAgICBidWlsZFRodW1icygpO1xuICAgIHNlbGVjdCgwKTtcbiAgICBpZiAoIWhpbnQuaXNDb25uZWN0ZWQpIHVsLnBhcmVudEVsZW1lbnQ/LmFwcGVuZChoaW50LCBwcmV2LCBuZXh0KTtcbiAgICBpZiAoIXN0cmlwLmlzQ29ubmVjdGVkKSB1bC5wYXJlbnRFbGVtZW50Py5hZnRlcihzdHJpcCk7XG4gICAgaWYgKHJlYnVpbHQpIHdhdGNoTGlzdCh1bCk7XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBsYWNlQ3JlYXRlZCk7XG5cbiAgcmV0dXJuIHsgc3luYyB9O1xufTtcbiIsImltcG9ydCByaW5nIGZyb20gJy4uL2ljb25zL3N0ZXAtcmluZy5zdmc/cmF3JztcbmltcG9ydCBtYWlsIGZyb20gJy4uL2ljb25zL3N0ZXAtbWFpbC5zdmc/cmF3JztcbmltcG9ydCBoYW5kcyBmcm9tICcuLi9pY29ucy9zdGVwLWhhbmRzLnN2Zz9yYXcnO1xuaW1wb3J0IGJveCBmcm9tICcuLi9pY29ucy9zdGVwLWJveC5zdmc/cmF3JztcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pY29ucy9zdGVwLWFycm93LnN2Zz9yYXcnO1xuaW1wb3J0IHsgaW5saW5lU3ZnIH0gZnJvbSAnLi4vc3ZnJztcblxuY29uc3QgSWNvbiA9IChzdmc6IHN0cmluZykgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWwuY2xhc3NOYW1lID0gJ2Nycy1zdGVwX19pY29uJztcbiAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGVsLmlubmVySFRNTCA9IGlubGluZVN2ZyhzdmcpO1xuICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBTdGVwID0gKG46IG51bWJlciwgaWNvbjogc3RyaW5nLCBib2R5OiBOb2RlKSA9PlxuICAoXG4gICAgPGxpIGNsYXNzPVwiY3JzLXN0ZXBcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3JzLXN0ZXBfX251bVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICB7U3RyaW5nKG4pfVxuICAgICAgPC9zcGFuPlxuICAgICAge0ljb24oaWNvbil9XG4gICAgICA8c3BhbiBjbGFzcz1cImNycy1zdGVwX190ZXh0XCI+e2JvZHl9PC9zcGFuPlxuICAgIDwvbGk+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbi8qKiBUaGUgY29ubmVjdG9yIGJldHdlZW4gc3RlcHMg4oCUIHRoZSBkZXNpZ24ncyBvd24gYXJyb3csIG5vdCBhIENTUyBkYXNoZWQgYm9yZGVyLiAqL1xuY29uc3QgQXJyb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbC5jbGFzc05hbWUgPSAnY3JzLXN0ZXBfX2Fycm93JztcbiAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGVsLmlubmVySFRNTCA9IGlubGluZVN2ZyhhcnJvdyk7XG4gIHJldHVybiBlbDtcbn07XG5cbmV4cG9ydCBjb25zdCBIb3dUb09yZGVyID0gKG9uTWFpbGluZzogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBtYWlsaW5nTGluayA9IChcbiAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLWlubGluZS1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uTWFpbGluZ30+XG4gICAgICBtYWlsaW5nIGluc3RydWN0aW9uc1xuICAgIDwvYnV0dG9uPlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHN0ZXAyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBzdGVwMi5hcHBlbmQoJ01haWwgeW91ciBpbmNsdXNpb25zIGFjY29yZGluZyB0byAnLCBtYWlsaW5nTGluayk7XG5cbiAgY29uc3Qgc3RlcHMgPSBbXG4gICAgU3RlcCgxLCByaW5nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUGljayB5b3VyIGpld2VscnkgJiBwbGFjZSBhbiBvcmRlcicpKSxcbiAgICBTdGVwKDIsIG1haWwsIHN0ZXAyKSxcbiAgICBTdGVwKDMsIGhhbmRzLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnV2UgaGFuZGNyYWZ0IHlvdXIgamV3ZWxyeSB3aXRoIHlvdXIgaW5jbHVzaW9ucycpKSxcbiAgICBTdGVwKDQsIGJveCwgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1JlY2VpdmUgeW91ciBqZXdlbHJ5IHRoYXQgbGFzdHMgYSBsaWZldGltZScpKSxcbiAgXTtcbiAgLy8gRXZlcnkgc3RlcCBidXQgdGhlIGZpcnN0IGlzIHByZWNlZGVkIGJ5IGEgY29ubmVjdG9yLlxuICBzdGVwcy5zbGljZSgxKS5mb3JFYWNoKChsaSkgPT4gbGkucHJlcGVuZChBcnJvdygpKSk7XG5cbiAgY29uc3QgbGlzdCA9ICg8b2wgY2xhc3M9XCJjcnMtc3RlcHNcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG4gIGxpc3QuYXBwZW5kKC4uLnN0ZXBzKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY3JzLWhvd3RvXCI+XG4gICAgICA8aDIgY2xhc3M9XCJjcnMtaG93dG9fX3RpdGxlXCI+SG93IHRvIG9yZGVyIHlvdXIgcGllY2Ugd2l0aCBpbmNsdXNpb248L2gyPlxuICAgICAge2xpc3R9XG5cbiAgICAgIHsvKiBXcmFwcGVkIHNvIGFuYWx5dGljcyBjYW4gc2VlIGl0IGluIHRoZSB2aWV3cG9ydCBvbiBpdHMgb3duIOKAlCB0aGUgc3RlcHMgYWJvdmVcbiAgICAgICAgICBhbmQgdGhpcyBibG9jayBzaGFyZSBvbmUgPHNlY3Rpb24+IGJ1dCBhcmUgdHJhY2tlZCBhcyB0d28gc2VwYXJhdGUgdmlld3MuICovfVxuICAgICAgPGRpdiBjbGFzcz1cImNycy1ob3d0b19fbWFkZVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJjcnMtaG93dG9fX3RpdGxlIGNycy1ob3d0b19fdGl0bGUtLW1hZGVcIj5Ib3cgeW91ciBwaWVjZSBpcyBtYWRlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWW91ciBrZWVwc2FrZSBpcyBjcmFmdGVkIGJ5IG9uZSBhcnRpc2FuIGZyb20gc3RhcnQgdG8gZmluaXNoLCBhbmQgdHJhY2tlZCBldmVyeSBzdGVwIG9mXG4gICAgICAgICAgdGhlIHdheS4gQW55IHVudXNlZCBpbmNsdXNpb25zIGFyZSByZXR1cm5lZCB0byB5b3Ugd2l0aCB5b3VyIGZpbmlzaGVkIHBpZWNlIOKAlCBhbmQgZXZlcnlcbiAgICAgICAgICBpdGVtIHBhc3NlcyBhIDQtc3RhZ2UgcXVhbGl0eSBpbnNwZWN0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFR1cm5hcm91bmQgdGltZSBpcyBhcHByb3hpbWF0ZWx5IDbigJM4IHdlZWtzIGFmdGVyIHdlIHJlY2VpdmUgeW91ciBpbmNsdXNpb25zIOKAlCBhIG1lbW9yeVxuICAgICAgICAgIG1hZGUgYnkgaGFuZCwgdG8gb3JkZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcbn07XG4iLCJpbXBvcnQgeyBsb2cgfSBmcm9tICdjcnNkZXZ0b29sJztcbmltcG9ydCB7IEFjY29yZGlvbiwgb3Blbk1vZGFsLCB0eXBlIEFjY29yZEl0ZW0gfSBmcm9tICcuL21vZGFsJztcblxuLyoqIEdBNCBuYW1lcyBmb3IgdGhlIHR3byBkcmF3ZXJzIGJ1aWx0IGhlcmUg4oCUIHRoZSBkcmF3ZXIgaXRzZWxmIGFuZCBpdHMgcm93cyBzaGFyZSB0aGVtLiAqL1xuY29uc3QgTUFJTElOR19MT0MgPSAnTWFpbGluZyBJbnN0cnVjdGlvbnMgUG9wdXAnO1xuY29uc3QgRkFRX0xPQyA9ICdGQVEgUG9wdXAnO1xuXG4vKiogRWFjaCBzdXJmYWNlJ3Mgb3duIGFjY29yZGlvbiBldmVudCwgc28gYnV5LWJveCByb3dzIG5ldmVyIG1peCB3aXRoIGEgZHJhd2VyJ3MuICovXG5jb25zdCBNQUlMSU5HX0FDQ09SRCA9ICdleHBfcGRwX21haWxpbmdfYWNjb3JkaW9uX29wZW4nO1xuY29uc3QgRkFRX0FDQ09SRCA9ICdleHBfcGRwX2ZhcV9hY2NvcmRpb25fb3Blbic7XG5cbi8qKlxuICogQ29udGVudCBpcyBsaWZ0ZWQgZnJvbSB0aGUgbGl2ZSBwYWdlcyBhdCBydW50aW1lIHNvIGl0IGNhbiBuZXZlciBkcmlmdCBmcm9tIHRoZSBzb3VyY2UuXG4gKlxuICogVGhlIHN0b3JlIHJ1bnMgU2hvcGlmeSBNYXJrZXRzLCBzbyB0aGUgcGFnZSBsaXZlcyB1bmRlciBhIGxvY2FsZSBwcmVmaXggaW4gZXZlcnkgbWFya2V0XG4gKiBidXQgdGhlIHByaW1hcnkgb25lIOKAlCBgcm91dGVzLnJvb3RgIGNhcnJpZXMgaXQuIEFueXRoaW5nIHRoYXQgZ29lcyB3cm9uZyBoZXJlIChvZmZsaW5lLFxuICogYSByZWRpcmVjdCB0byBhIHBhZ2Ugd2l0aCBubyBgLnJ0ZWAsIGEgbWFya3VwIGNoYW5nZSkgbXVzdCBsZWF2ZSBhIHJlYWRhYmxlIGRyYXdlciByYXRoZXJcbiAqIHRoYW4gYW4gZW1wdHkgb25lLCBzbyB0aGUgaG9zdCBpcyBvbmx5IGNsZWFyZWQgb25jZSB0aGVyZSBpcyBjb250ZW50IHRvIHB1dCBpbiBpdC5cbiAqL1xuY29uc3QgcmVtb3RlID0gKHBhdGg6IHN0cmluZywgcGFyc2U6IChydGU6IEhUTUxFbGVtZW50KSA9PiBOb2RlKSA9PiB7XG4gIGNvbnN0IGhvc3QgPSAoPGRpdiBjbGFzcz1cImNycy1yZW1vdGVcIj5Mb2FkaW5n4oCmPC9kaXY+KSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3Qgcm9vdCA9ICh3aW5kb3cgYXMgYW55KS5TaG9waWZ5Py5yb3V0ZXM/LnJvb3QgPz8gJy8nO1xuICBjb25zdCB1cmwgPSByb290LnJlcGxhY2UoL1xcLyQvLCAnJykgKyBwYXRoO1xuXG4gIC8qKiBPbmUgcmV0cnksIGJlY2F1c2UgdGhlIG9ic2VydmVkIGZhaWx1cmVzIGFyZSB0cmFuc2llbnQgcmF0aGVyIHRoYW4gc3RydWN0dXJhbC4gKi9cbiAgY29uc3QgbG9hZCA9ICgpOiBQcm9taXNlPE5vZGU+ID0+XG4gICAgZmV0Y2godXJsLCB7IGNhY2hlOiAnbm8tc3RvcmUnIH0pXG4gICAgICAudGhlbigocikgPT4ge1xuICAgICAgICBpZiAoIXIub2spIHRocm93IG5ldyBFcnJvcihgJHt1cmx9IOKGkiBIVFRQICR7ci5zdGF0dXN9YCk7XG4gICAgICAgIHJldHVybiByLnRleHQoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoaHRtbCkgPT4ge1xuICAgICAgICBjb25zdCBydGUgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnJ0ZScpO1xuICAgICAgICBpZiAoIXJ0ZSkgdGhyb3cgbmV3IEVycm9yKGAke3VybH0g4oaSIG5vIC5ydGUgKCR7aHRtbC5sZW5ndGh9IGJ5dGVzKWApO1xuICAgICAgICByZXR1cm4gcGFyc2UocnRlKTtcbiAgICAgIH0pO1xuXG4gIGxvYWQoKVxuICAgIC5jYXRjaCgoZmlyc3QpID0+IHtcbiAgICAgIGxvZyhgUERQIHJlZGVzaWduOiAke2ZpcnN0Lm1lc3NhZ2V9IOKAlCByZXRyeWluZ2AsICd3YXJuJyk7XG4gICAgICByZXR1cm4gbG9hZCgpO1xuICAgIH0pXG4gICAgLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgIGhvc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGhvc3QuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBsb2coYFBEUCByZWRlc2lnbjogJHtlLm1lc3NhZ2V9YCwgJ2Vycm9yJyk7XG4gICAgICBob3N0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICBob3N0LmFwcGVuZChcbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBjb250ZW50IGNvdWxkbid0IGJlIGxvYWRlZC4gPGEgaHJlZj17dXJsfT5PcGVuIGl0IGluIGEgbmV3IHBhZ2U8L2E+LlxuICAgICAgICA8L3A+LFxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gaG9zdDtcbn07XG5cbmNvbnN0IGNsZWFuID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdtZXRhLCBzdHlsZSwgc2NyaXB0JykuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IGlzQmxhbmsgPSAoZWw6IEVsZW1lbnQpID0+ICFlbC50ZXh0Q29udGVudCEucmVwbGFjZSgvXFxzfCAvZywgJycpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogTWFpbGluZyBpbnN0cnVjdGlvbnMg4oCUIC9wYWdlcy9zZW5kaW5nLXlvdXItcGV0YWxzLWNyZW1hdGlvbnMtYnJlYXN0bWlsa1xuICogQSBmbGF0IGxpc3Qgb2YgPHA+OyBlYWNoIHNlY3Rpb24gc3RhcnRzIHdpdGggYSBib2xkIFwiQ3JlbWF0aW9uczpcIiBzdHlsZSBsaW5lLlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IE1BSUxJTkdfU0VDVElPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIENyZW1hdGlvbnM6ICdDcmVtYXRpb25zJyxcbiAgJ0Nsb3RoaW5nL0ZhYnJpYyc6ICdDbG90aGluZy9GYWJyaWMnLFxuICAnRmxvd2Vycy9QZXRhbHMnOiAnRmxvd2Vycy9QZXRhbHMnLFxuICBIYWlyOiAnSGFpci9GdXInLFxuICAnQnJlYXN0IE1pbGsnOiAnQnJlYXN0IE1pbGsnLFxufTtcblxuY29uc3QgcGFyc2VNYWlsaW5nID0gKHJ0ZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaXRlbXM6IHsgdGl0bGU6IHN0cmluZzsgYm9keTogTm9kZSB9W10gPSBbXTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gIGxldCBjdXJyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEFycmF5LmZyb20ocnRlLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCEudHJpbSgpLnJlcGxhY2UoLzokLywgJycpO1xuICAgIGNvbnN0IGxhYmVsID0gTUFJTElOR19TRUNUSU9OU1t0ZXh0XTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3VycmVudC5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gICAgICBpdGVtcy5wdXNoKHsgdGl0bGU6IGxhYmVsLCBib2R5OiBjdXJyZW50IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNCbGFuayhjaGlsZCkpIHJldHVybjtcbiAgICBpZiAoL15PdGhlciBJbmNsdXNpb25zOnxeTWFpbGluZyBtb3JlIHRoYW4gb25lIGluY2x1c2lvbjovaS50ZXN0KHRleHQpKSB7XG4gICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgIGZvb3Rlci5hcHBlbmQoY2xlYW4oY2hpbGQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN1cnJlbnQ/LmFwcGVuZChjbGVhbihjaGlsZC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQpKTtcbiAgfSk7XG5cbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZy5hcHBlbmQoXG4gICAgPGRpdiBjbGFzcz1cImNycy1kcmF3ZXJfX2ludHJvXCI+XG4gICAgICA8cD5cbiAgICAgICAgU2VuZCB1cyBhIHRpbnkgYW1vdW50IG9mIHlvdXIga2VlcHNha2UsIGFuZCB3ZSdsbCBjcmVhdGUgYSBtZW1vcmlhbCBqZXdlbHJ5IHBpZWNlIHRvIGxhc3QgYVxuICAgICAgICBsaWZldGltZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPkxlYXJuIG1vcmUgaW4gdGhlIHRhYnMgYmVsb3cuPC9wPlxuICAgIDwvZGl2PixcbiAgICBBY2NvcmRpb24oaXRlbXMsIE1BSUxJTkdfTE9DLCBNQUlMSU5HX0FDQ09SRCksXG4gICAgZm9vdGVyLFxuICApO1xuICByZXR1cm4gZnJhZztcbn07XG5cbmV4cG9ydCBjb25zdCBtYWlsaW5nSW5zdHJ1Y3Rpb25zID0gKCkgPT5cbiAgcmVtb3RlKCcvcGFnZXMvc2VuZGluZy15b3VyLXBldGFscy1jcmVtYXRpb25zLWJyZWFzdG1pbGsnLCBwYXJzZU1haWxpbmcpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogSG93IHRvIE9yZGVyICYgRkFRIOKAlCAvcGFnZXMvZmFxXG4gKiBGbGF0IHJpY2ggdGV4dDogPGgyPiBpbnRybywgdGhlbiA8aDM+IHF1ZXN0aW9uICsgZm9sbG93aW5nIDxwPiBhbnN3ZXJzLlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IHBhcnNlRmFxID0gKHJ0ZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW50cm8uY2xhc3NOYW1lID0gJ2Nycy1ydGUnO1xuICBjb25zdCBpdGVtczogeyB0aXRsZTogc3RyaW5nOyBib2R5OiBIVE1MRWxlbWVudCB9W10gPSBbXTtcbiAgbGV0IGN1cnJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgQXJyYXkuZnJvbShydGUuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdIMycpIHtcbiAgICAgIGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGN1cnJlbnQuY2xhc3NOYW1lID0gJ2Nycy1ydGUnO1xuICAgICAgaXRlbXMucHVzaCh7IHRpdGxlOiBjaGlsZC50ZXh0Q29udGVudCEudHJpbSgpLCBib2R5OiBjdXJyZW50IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0gyJykgcmV0dXJuO1xuICAgIGlmIChpc0JsYW5rKGNoaWxkKSkgcmV0dXJuO1xuICAgIChjdXJyZW50ID8/IGludHJvKS5hcHBlbmQoY2xlYW4oY2hpbGQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50KSk7XG4gIH0pO1xuXG4gIC8vIFRoZSBsaXZlIHBhZ2UgaGFzIHRoZXNlIHR3byBhbnN3ZXJzIHN3YXBwZWQg4oCUIHRoZSBcIndhdGVycHJvb2ZcIiBxdWVzdGlvbiBpc1xuICAvLyBhbnN3ZXJlZCB3aXRoIHByaWNpbmcgY29weSBhbmQgdmljZSB2ZXJzYS4gQ29ycmVjdGVkIGhlcmU7IGNvbnRyb2wgc3RpbGwgaGFzIGl0LlxuICBjb25zdCB3YXRlcnByb29mID0gaXRlbXMuZmluZCgoaSkgPT4gL3dhdGVycHJvb2YvaS50ZXN0KGkudGl0bGUpKTtcbiAgY29uc3QgY29zdCA9IGl0ZW1zLmZpbmQoKGkpID0+IC9ob3cgbXVjaCBkb2VzL2kudGVzdChpLnRpdGxlKSk7XG4gIGlmICh3YXRlcnByb29mICYmIGNvc3QpIHtcbiAgICBjb25zdCB0bXAgPSB3YXRlcnByb29mLmJvZHk7XG4gICAgd2F0ZXJwcm9vZi5ib2R5ID0gY29zdC5ib2R5O1xuICAgIGNvc3QuYm9keSA9IHRtcDtcbiAgfVxuXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWcuYXBwZW5kKGludHJvLCBBY2NvcmRpb24oaXRlbXMsIEZBUV9MT0MsIEZBUV9BQ0NPUkQpKTtcbiAgcmV0dXJuIGZyYWc7XG59O1xuXG5leHBvcnQgY29uc3QgZmFxQ29udGVudCA9ICgpID0+IHJlbW90ZSgnL3BhZ2VzL2ZhcScsIHBhcnNlRmFxKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIEJvdGggZHJhd2VycyBmZXRjaCB0aGVpciBwYWdlIHdoZW4gb3BlbmVkLCBub3Qgd2hlbiB0aGUgcm93IGlzIGJ1aWx0LiAqL1xuXG5leHBvcnQgY29uc3Qgb3Blbk1haWxpbmdNb2RhbCA9ICgpID0+XG4gIG9wZW5Nb2RhbChcbiAgICAnbWFpbGluZycsXG4gICAgJ0hvdyBUbyBTZW5kIFlvdXIgSW5jbHVzaW9ucycsXG4gICAgbWFpbGluZ0luc3RydWN0aW9ucygpLFxuICAgIE1BSUxJTkdfTE9DLFxuICAgICdNYWlsaW5nIEluc3RydWN0aW9ucycsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBvcGVuRmFxTW9kYWwgPSAoKSA9PlxuICBvcGVuTW9kYWwoJ2ZhcScsICdIb3cgdG8gT3JkZXIgTWVtb3JpYWwgSmV3ZWxyeSAmIEZBUXMnLCBmYXFDb250ZW50KCksIEZBUV9MT0MpO1xuXG4vKiogVGhlIHRocmVlIHJvd3MgYXQgdGhlIGZvb3Qgb2YgdGhlIGJ1eSBib3guIE9ubHkgdGhlIGZpcnN0IGV4cGFuZHMgaW4gcGxhY2UuICovXG5leHBvcnQgY29uc3QgYm90dG9tQWNjb3JkaW9ucyA9IChuYXRpdmU6IHsgdGl0bGU6IHN0cmluZzsgYm9keTogTm9kZSB9W10pID0+IHtcbiAgY29uc3Qgb3JkZXJUb0tlZXBzYWtlID0gbmF0aXZlLmZpbmQoKG4pID0+IC9mcm9tIG9yZGVyIHRvIGtlZXBzYWtlL2kudGVzdChuLnRpdGxlKSk7XG5cbiAgY29uc3QgaXRlbXM6IEFjY29yZEl0ZW1bXSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0Zyb20gT3JkZXIgdG8gS2VlcHNha2UnLFxuICAgICAgYm9keTogb3JkZXJUb0tlZXBzYWtlPy5ib2R5ID8/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSxcbiAgICB9LFxuICAgIHsgdGl0bGU6ICdIb3cgdG8gc2VuZCB5b3VyIGluY2x1c2lvbnMnLCBvcGVuOiBvcGVuTWFpbGluZ01vZGFsIH0sXG4gICAgeyB0aXRsZTogJ0hvdyB0byBPcmRlciBNZW1vcmlhbCBKZXdlbHJ5ICYgRkFRcycsIG9wZW46IG9wZW5GYXFNb2RhbCB9LFxuICBdO1xuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmNsYXNzTmFtZSA9ICdjcnMtYm90dG9tJztcbiAgZWwuYXBwZW5kKEFjY29yZGlvbihpdGVtcywgJ1BEUCcsICdleHBfcGRwX2FjY29yZGlvbl9vcGVuJykpO1xuICByZXR1cm4gZWw7XG59O1xuIiwiLyoqXG4gKiBTU1IgV2luZG93IDUuMC4xXG4gKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAqXG4gKiBDb3B5cmlnaHQgMjAyNSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVuZSAyNywgMjAyNVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7XG4gICAgdGFyZ2V0ID0ge307XG4gIH1cbiAgaWYgKHNyYyA9PT0gdm9pZCAwKSB7XG4gICAgc3JjID0ge307XG4gIH1cbiAgY29uc3Qgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcbiAgT2JqZWN0LmtleXMoc3JjKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICB9XG4gIH0pO1xufVxuY29uc3Qgc3NyRG9jdW1lbnQgPSB7XG4gIGJvZHk6IHt9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgYWN0aXZlRWxlbWVudDoge1xuICAgIGJsdXIoKSB7fSxcbiAgICBub2RlTmFtZTogJydcbiAgfSxcbiAgcXVlcnlTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIGdldEVsZW1lbnRCeUlkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBjcmVhdGVFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEV2ZW50KCkge31cbiAgICB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIHNldEF0dHJpYnV0ZSgpIHt9LFxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50TlMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBpbXBvcnROb2RlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIGhhc2g6ICcnLFxuICAgIGhvc3Q6ICcnLFxuICAgIGhvc3RuYW1lOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBvcmlnaW46ICcnLFxuICAgIHBhdGhuYW1lOiAnJyxcbiAgICBwcm90b2NvbDogJycsXG4gICAgc2VhcmNoOiAnJ1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gIGNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gIHJldHVybiBkb2M7XG59XG5jb25zdCBzc3JXaW5kb3cgPSB7XG4gIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgbmF2aWdhdG9yOiB7XG4gICAgdXNlckFnZW50OiAnJ1xuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIGhhc2g6ICcnLFxuICAgIGhvc3Q6ICcnLFxuICAgIGhvc3RuYW1lOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBvcmlnaW46ICcnLFxuICAgIHBhdGhuYW1lOiAnJyxcbiAgICBwcm90b2NvbDogJycsXG4gICAgc2VhcmNoOiAnJ1xuICB9LFxuICBoaXN0b3J5OiB7XG4gICAgcmVwbGFjZVN0YXRlKCkge30sXG4gICAgcHVzaFN0YXRlKCkge30sXG4gICAgZ28oKSB7fSxcbiAgICBiYWNrKCkge31cbiAgfSxcbiAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIEltYWdlKCkge30sXG4gIERhdGUoKSB7fSxcbiAgc2NyZWVuOiB7fSxcbiAgc2V0VGltZW91dCgpIHt9LFxuICBjbGVhclRpbWVvdXQoKSB7fSxcbiAgbWF0Y2hNZWRpYSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICB9LFxuICBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgZXh0ZW5kKHdpbiwgc3NyV2luZG93KTtcbiAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZ2V0V2luZG93IGFzIGEsIGdldERvY3VtZW50IGFzIGcgfTtcbiIsImltcG9ydCB7IGEgYXMgZ2V0V2luZG93LCBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi9zc3Itd2luZG93LmVzbS5tanMnO1xuXG5mdW5jdGlvbiBjbGFzc2VzVG9Ub2tlbnMoY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9ICcnO1xuICB9XG4gIHJldHVybiBjbGFzc2VzLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihjID0+ICEhYy50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgY29uc3Qgb2JqZWN0ID0gb2JqO1xuICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goa2V5ID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbn1cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgc3R5bGU7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG4gIGlmICghc3R5bGUgJiYgZWwuY3VycmVudFN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5jdXJyZW50U3R5bGU7XG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZWwuc3R5bGU7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsLCBheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gJ3gnO1xuICB9XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgbWF0cml4O1xuICBsZXQgY3VyVHJhbnNmb3JtO1xuICBsZXQgdHJhbnNmb3JtTWF0cml4O1xuICBjb25zdCBjdXJTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoYSA9PiBhLnJlcGxhY2UoJywnLCAnLicpKS5qb2luKCcsICcpO1xuICAgIH1cbiAgICAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgLy8gZW1wdHkgc3RyaW5nIGluc3RlYWQgaW4gdGhpcyBjYXNlXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgfVxuICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTtcbiAgICAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pO1xuICAgIC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG4gIGlmIChheGlzID09PSAneScpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyO1xuICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7XG4gICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gIH1cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jztcbn1cbmZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDExKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcbiAgY29uc3Qgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCAmJiAhaXNOb2RlKG5leHRTb3VyY2UpKSB7XG4gICAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLmZpbHRlcihrZXkgPT4gbm9FeHRlbmQuaW5kZXhPZihrZXkpIDwgMCk7XG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5mdW5jdGlvbiBzZXRDU1NQcm9wZXJ0eShlbCwgdmFyTmFtZSwgdmFyVmFsdWUpIHtcbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFyVmFsdWUpO1xufVxuZnVuY3Rpb24gYW5pbWF0ZUNTU01vZGVTY3JvbGwoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICB0YXJnZXRQb3NpdGlvbixcbiAgICBzaWRlXG4gIH0gPSBfcmVmO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHRpbWU7XG4gIGNvbnN0IGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gIGNvbnN0IGRpciA9IHRhcmdldFBvc2l0aW9uID4gc3RhcnRQb3NpdGlvbiA/ICduZXh0JyA6ICdwcmV2JztcbiAgY29uc3QgaXNPdXRPZkJvdW5kID0gKGN1cnJlbnQsIHRhcmdldCkgPT4ge1xuICAgIHJldHVybiBkaXIgPT09ICduZXh0JyAmJiBjdXJyZW50ID49IHRhcmdldCB8fCBkaXIgPT09ICdwcmV2JyAmJiBjdXJyZW50IDw9IHRhcmdldDtcbiAgfTtcbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICB9XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMSksIDApO1xuICAgIGNvbnN0IGVhc2VQcm9ncmVzcyA9IDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgZWFzZVByb2dyZXNzICogKHRhcmdldFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbik7XG4gICAgaWYgKGlzT3V0T2ZCb3VuZChjdXJyZW50UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKSkge1xuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG4gICAgfVxuICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICB9KTtcbiAgICBpZiAoaXNPdXRPZkJvdW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgICBbc2lkZV06IGN1cnJlbnRQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXBlci5jc3NNb2RlRnJhbWVJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn1cbmZ1bmN0aW9uIGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCkge1xuICByZXR1cm4gc2xpZGVFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXRyYW5zZm9ybScpIHx8IHNsaWRlRWwuc2hhZG93Um9vdCAmJiBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS10cmFuc2Zvcm0nKSB8fCBzbGlkZUVsO1xufVxuZnVuY3Rpb24gZWxlbWVudENoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3IgPSAnJztcbiAgfVxuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4uZWxlbWVudC5jaGlsZHJlbl07XG4gIGlmICh3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQpIHtcbiAgICBjaGlsZHJlbi5wdXNoKC4uLmVsZW1lbnQuYXNzaWduZWRFbGVtZW50cygpKTtcbiAgfVxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoZWwgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHNsb3QpIHtcbiAgLy8gQnJlYWR0aC1maXJzdCBzZWFyY2ggdGhyb3VnaCBhbGwgcGFyZW50J3MgY2hpbGRyZW4gYW5kIGFzc2lnbmVkIGVsZW1lbnRzXG4gIGNvbnN0IGVsZW1lbnRzUXVldWUgPSBbc2xvdF07XG4gIHdoaWxlIChlbGVtZW50c1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbGVtZW50VG9DaGVjayA9IGVsZW1lbnRzUXVldWUuc2hpZnQoKTtcbiAgICBpZiAoZWwgPT09IGVsZW1lbnRUb0NoZWNrKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxlbWVudHNRdWV1ZS5wdXNoKC4uLmVsZW1lbnRUb0NoZWNrLmNoaWxkcmVuLCAuLi4oZWxlbWVudFRvQ2hlY2suc2hhZG93Um9vdCA/IGVsZW1lbnRUb0NoZWNrLnNoYWRvd1Jvb3QuY2hpbGRyZW4gOiBbXSksIC4uLihlbGVtZW50VG9DaGVjay5hc3NpZ25lZEVsZW1lbnRzID8gZWxlbWVudFRvQ2hlY2suYXNzaWduZWRFbGVtZW50cygpIDogW10pKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZihlbCwgcGFyZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgaXNDaGlsZCA9IHBhcmVudC5jb250YWlucyhlbCk7XG4gIGlmICghaXNDaGlsZCAmJiB3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gWy4uLnBhcmVudC5hc3NpZ25lZEVsZW1lbnRzKCldO1xuICAgIGlzQ2hpbGQgPSBjaGlsZHJlbi5pbmNsdWRlcyhlbCk7XG4gICAgaWYgKCFpc0NoaWxkKSB7XG4gICAgICBpc0NoaWxkID0gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHBhcmVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NoaWxkO1xufVxuZnVuY3Rpb24gc2hvd1dhcm5pbmcodGV4dCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGVyclxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9IFtdO1xuICB9XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbC5jbGFzc0xpc3QuYWRkKC4uLihBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXNUb1Rva2VucyhjbGFzc2VzKSkpO1xuICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiBlbGVtZW50T2Zmc2V0KGVsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICBjb25zdCBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gIH07XG59XG5mdW5jdGlvbiBlbGVtZW50UHJldkFsbChlbCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgcHJldkVscyA9IFtdO1xuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAocHJldi5tYXRjaGVzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgZWwgPSBwcmV2O1xuICB9XG4gIHJldHVybiBwcmV2RWxzO1xufVxuZnVuY3Rpb24gZWxlbWVudE5leHRBbGwoZWwsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5leHRFbHMgPSBbXTtcbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgfSBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICBlbCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIG5leHRFbHM7XG59XG5mdW5jdGlvbiBlbGVtZW50U3R5bGUoZWwsIHByb3ApIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRJbmRleChlbCkge1xuICBsZXQgY2hpbGQgPSBlbDtcbiAgbGV0IGk7XG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRQYXJlbnRzKGVsLCBzZWxlY3Rvcikge1xuICBjb25zdCBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgIH1cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIGVsZW1lbnRUcmFuc2l0aW9uRW5kKGVsLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZWwpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKGVsLCBlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudE91dGVyU2l6ZShlbCwgc2l6ZSwgaW5jbHVkZU1hcmdpbnMpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgIHJldHVybiBlbFtzaXplID09PSAnd2lkdGgnID8gJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnXSArIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc2l6ZSA9PT0gJ3dpZHRoJyA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHNpemUgPT09ICd3aWR0aCcgPyAnbWFyZ2luLWxlZnQnIDogJ21hcmdpbi1ib3R0b20nKSk7XG4gIH1cbiAgcmV0dXJuIGVsLm9mZnNldFdpZHRoO1xufVxuZnVuY3Rpb24gbWFrZUVsZW1lbnRzQXJyYXkoZWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KGVsKSA/IGVsIDogW2VsXSkuZmlsdGVyKGUgPT4gISFlKTtcbn1cbmZ1bmN0aW9uIGdldFJvdGF0ZUZpeChzd2lwZXIpIHtcbiAgcmV0dXJuIHYgPT4ge1xuICAgIGlmIChNYXRoLmFicyh2KSA+IDAgJiYgc3dpcGVyLmJyb3dzZXIgJiYgc3dpcGVyLmJyb3dzZXIubmVlZDNkRml4ICYmIE1hdGguYWJzKHYpICUgOTAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ICsgMC4wMDE7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9O1xufVxuZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGVsLCBodG1sKSB7XG4gIGlmIChodG1sID09PSB2b2lkIDApIHtcbiAgICBodG1sID0gJyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnaHRtbCcsIHtcbiAgICAgIGNyZWF0ZUhUTUw6IHMgPT4gc1xuICAgIH0pLmNyZWF0ZUhUTUwoaHRtbCk7XG4gIH0gZWxzZSB7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxufVxuXG5leHBvcnQgeyBzZXRDU1NQcm9wZXJ0eSBhcyBhLCBlbGVtZW50UGFyZW50cyBhcyBiLCBjcmVhdGVFbGVtZW50IGFzIGMsIGVsZW1lbnRPZmZzZXQgYXMgZCwgZWxlbWVudENoaWxkcmVuIGFzIGUsIG5vdyBhcyBmLCBnZXRTbGlkZVRyYW5zZm9ybUVsIGFzIGcsIGVsZW1lbnRPdXRlclNpemUgYXMgaCwgZWxlbWVudEluZGV4IGFzIGksIGNsYXNzZXNUb1Rva2VucyBhcyBqLCBnZXRUcmFuc2xhdGUgYXMgaywgZWxlbWVudFRyYW5zaXRpb25FbmQgYXMgbCwgbWFrZUVsZW1lbnRzQXJyYXkgYXMgbSwgbmV4dFRpY2sgYXMgbiwgaXNPYmplY3QgYXMgbywgZ2V0Um90YXRlRml4IGFzIHAsIGVsZW1lbnRTdHlsZSBhcyBxLCBlbGVtZW50TmV4dEFsbCBhcyByLCBzZXRJbm5lckhUTUwgYXMgcywgZWxlbWVudFByZXZBbGwgYXMgdCwgYW5pbWF0ZUNTU01vZGVTY3JvbGwgYXMgdSwgc2hvd1dhcm5pbmcgYXMgdiwgZWxlbWVudElzQ2hpbGRPZiBhcyB3LCBleHRlbmQgYXMgeCwgZGVsZXRlUHJvcHMgYXMgeSB9O1xuIiwiaW1wb3J0IHsgYSBhcyBnZXRXaW5kb3csIGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBiIGFzIGVsZW1lbnRQYXJlbnRzLCBxIGFzIGVsZW1lbnRTdHlsZSwgZSBhcyBlbGVtZW50Q2hpbGRyZW4sIGEgYXMgc2V0Q1NTUHJvcGVydHksIGggYXMgZWxlbWVudE91dGVyU2l6ZSwgciBhcyBlbGVtZW50TmV4dEFsbCwgdCBhcyBlbGVtZW50UHJldkFsbCwgayBhcyBnZXRUcmFuc2xhdGUsIHUgYXMgYW5pbWF0ZUNTU01vZGVTY3JvbGwsIG4gYXMgbmV4dFRpY2ssIHYgYXMgc2hvd1dhcm5pbmcsIGMgYXMgY3JlYXRlRWxlbWVudCwgdyBhcyBlbGVtZW50SXNDaGlsZE9mLCBmIGFzIG5vdywgeCBhcyBleHRlbmQsIGkgYXMgZWxlbWVudEluZGV4LCB5IGFzIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5sZXQgc3VwcG9ydDtcbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICByZXR1cm4ge1xuICAgIHNtb290aFNjcm9sbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAnc2Nyb2xsQmVoYXZpb3InIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgICB0b3VjaDogISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpXG4gIH07XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuICByZXR1cm4gc3VwcG9ydDtcbn1cblxubGV0IGRldmljZUNhY2hlZDtcbmZ1bmN0aW9uIGNhbGNEZXZpY2UoX3RlbXApIHtcbiAgbGV0IHtcbiAgICB1c2VyQWdlbnRcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBjb25zdCBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICBjb25zdCB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgY29uc3QgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3QgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBsZXQgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XG4gIGNvbnN0IGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICBjb25zdCBpcGhvbmUgPSAhaXBhZCAmJiB1YS5tYXRjaCgvKGlQaG9uZVxcc09TfGlPUylcXHMoW1xcZF9dKykvKTtcbiAgY29uc3Qgd2luZG93cyA9IHBsYXRmb3JtID09PSAnV2luMzInO1xuICBsZXQgbWFjb3MgPSBwbGF0Zm9ybSA9PT0gJ01hY0ludGVsJztcblxuICAvLyBpUGFkT3MgMTMgZml4XG4gIGNvbnN0IGlQYWRTY3JlZW5zID0gWycxMDI0eDEzNjYnLCAnMTM2NngxMDI0JywgJzgzNHgxMTk0JywgJzExOTR4ODM0JywgJzgzNHgxMTEyJywgJzExMTJ4ODM0JywgJzc2OHgxMDI0JywgJzEwMjR4NzY4JywgJzgyMHgxMTgwJywgJzExODB4ODIwJywgJzgxMHgxMDgwJywgJzEwODB4ODEwJ107XG4gIGlmICghaXBhZCAmJiBtYWNvcyAmJiBzdXBwb3J0LnRvdWNoICYmIGlQYWRTY3JlZW5zLmluZGV4T2YoYCR7c2NyZWVuV2lkdGh9eCR7c2NyZWVuSGVpZ2h0fWApID49IDApIHtcbiAgICBpcGFkID0gdWEubWF0Y2goLyhWZXJzaW9uKVxcLyhbXFxkLl0rKS8pO1xuICAgIGlmICghaXBhZCkgaXBhZCA9IFswLCAxLCAnMTNfMF8wJ107XG4gICAgbWFjb3MgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFuZHJvaWRcbiAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICB9XG4gIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgZGV2aWNlLm9zID0gJ2lvcyc7XG4gICAgZGV2aWNlLmlvcyA9IHRydWU7XG4gIH1cblxuICAvLyBFeHBvcnQgb2JqZWN0XG4gIHJldHVybiBkZXZpY2U7XG59XG5mdW5jdGlvbiBnZXREZXZpY2Uob3ZlcnJpZGVzKSB7XG4gIGlmIChvdmVycmlkZXMgPT09IHZvaWQgMCkge1xuICAgIG92ZXJyaWRlcyA9IHt9O1xuICB9XG4gIGlmICghZGV2aWNlQ2FjaGVkKSB7XG4gICAgZGV2aWNlQ2FjaGVkID0gY2FsY0RldmljZShvdmVycmlkZXMpO1xuICB9XG4gIHJldHVybiBkZXZpY2VDYWNoZWQ7XG59XG5cbmxldCBicm93c2VyO1xuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgbGV0IG5lZWRQZXJzcGVjdGl2ZUZpeCA9IGZhbHNlO1xuICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cbiAgaWYgKGlzU2FmYXJpKCkpIHtcbiAgICBjb25zdCB1YSA9IFN0cmluZyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgaWYgKHVhLmluY2x1ZGVzKCdWZXJzaW9uLycpKSB7XG4gICAgICBjb25zdCBbbWFqb3IsIG1pbm9yXSA9IHVhLnNwbGl0KCdWZXJzaW9uLycpWzFdLnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKS5tYXAobnVtID0+IE51bWJlcihudW0pKTtcbiAgICAgIG5lZWRQZXJzcGVjdGl2ZUZpeCA9IG1ham9yIDwgMTYgfHwgbWFqb3IgPT09IDE2ICYmIG1pbm9yIDwgMjtcbiAgICB9XG4gIH1cbiAgY29uc3QgaXNXZWJWaWV3ID0gLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgY29uc3QgaXNTYWZhcmlCcm93c2VyID0gaXNTYWZhcmkoKTtcbiAgY29uc3QgbmVlZDNkRml4ID0gaXNTYWZhcmlCcm93c2VyIHx8IGlzV2ViVmlldyAmJiBkZXZpY2UuaW9zO1xuICByZXR1cm4ge1xuICAgIGlzU2FmYXJpOiBuZWVkUGVyc3BlY3RpdmVGaXggfHwgaXNTYWZhcmlCcm93c2VyLFxuICAgIG5lZWRQZXJzcGVjdGl2ZUZpeCxcbiAgICBuZWVkM2RGaXgsXG4gICAgaXNXZWJWaWV3XG4gIH07XG59XG5mdW5jdGlvbiBnZXRCcm93c2VyKCkge1xuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBicm93c2VyID0gY2FsY0Jyb3dzZXIoKTtcbiAgfVxuICByZXR1cm4gYnJvd3Nlcjtcbn1cblxuZnVuY3Rpb24gUmVzaXplKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgZW1pdFxuICB9ID0gX3JlZjtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBvYnNlcnZlciA9IG51bGw7XG4gIGxldCBhbmltYXRpb25GcmFtZSA9IG51bGw7XG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnYmVmb3JlUmVzaXplJyk7XG4gICAgZW1pdCgncmVzaXplJyk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZU9ic2VydmVyID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gc3dpcGVyO1xuICAgICAgICBsZXQgbmV3V2lkdGggPSB3aWR0aDtcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKF9yZWYyID0+IHtcbiAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgY29udGVudEJveFNpemUsXG4gICAgICAgICAgICBjb250ZW50UmVjdCxcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICAgIH0gPSBfcmVmMjtcbiAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gc3dpcGVyLmVsKSByZXR1cm47XG4gICAgICAgICAgbmV3V2lkdGggPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LndpZHRoIDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5pbmxpbmVTaXplO1xuICAgICAgICAgIG5ld0hlaWdodCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3QuaGVpZ2h0IDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5ibG9ja1NpemU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3V2lkdGggIT09IHdpZHRoIHx8IG5ld0hlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgcmVzaXplSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHN3aXBlci5lbCk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZU9ic2VydmVyID0gKCkgPT4ge1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gICAgaWYgKG9ic2VydmVyICYmIG9ic2VydmVyLnVub2JzZXJ2ZSAmJiBzd2lwZXIuZWwpIHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIGVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gIH07XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnJlc2l6ZU9ic2VydmVyICYmIHR5cGVvZiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjcmVhdGVPYnNlcnZlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIHJlbW92ZU9ic2VydmVyKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBPYnNlcnZlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIGV4dGVuZFBhcmFtcyxcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGF0dGFjaCA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGNvbnN0IE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhtdXRhdGlvbnMgPT4ge1xuICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgLy8gdHJpZ2dlcnMgYXJlIHJlZHVuZGFudCBhbmQgYXJlIHZlcnkgY29zdGx5XG4gICAgICBpZiAoc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18pIHJldHVybjtcbiAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2JzZXJ2ZXJVcGRhdGUgPSBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzZXJ2ZXJVcGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQob2JzZXJ2ZXJVcGRhdGUsIDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZExpc3Q6IHN3aXBlci5pc0VsZW1lbnQgfHwgKHR5cGVvZiBvcHRpb25zLmNoaWxkTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucykuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhXG4gICAgfSk7XG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICB9O1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5vYnNlcnZlcikgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQYXJlbnRzID0gZWxlbWVudFBhcmVudHMoc3dpcGVyLmhvc3RFbCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBPYnNlcnZlIGNvbnRhaW5lclxuICAgIGF0dGFjaChzd2lwZXIuaG9zdEVsLCB7XG4gICAgICBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW5cbiAgICB9KTtcblxuICAgIC8vIE9ic2VydmUgd3JhcHBlclxuICAgIGF0dGFjaChzd2lwZXIud3JhcHBlckVsLCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xuICB9O1xuICBleHRlbmRQYXJhbXMoe1xuICAgIG9ic2VydmVyOiBmYWxzZSxcbiAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IGZhbHNlXG4gIH0pO1xuICBvbignaW5pdCcsIGluaXQpO1xuICBvbignZGVzdHJveScsIGRlc3Ryb3kpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG52YXIgZXZlbnRzRW1pdHRlciA9IHtcbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuICAgICAgaWYgKG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5KSB7XG4gICAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG4gICAgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkgPSBoYW5kbGVyO1xuICAgIHJldHVybiBzZWxmLm9uKGV2ZW50cywgb25jZUhhbmRsZXIsIHByaW9yaXR5KTtcbiAgfSxcbiAgb25BbnkoaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpIDwgMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnNbbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZkFueShoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0FueUxpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgaW5kZXggPSBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChldmVudEhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlciB8fCBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgJiYgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBlbWl0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGxldCBldmVudHM7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGNvbnRleHQ7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICBjb25zdCBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIFtldmVudCwgLi4uZGF0YV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgd2lkdGg7XG4gIGxldCBoZWlnaHQ7XG4gIGNvbnN0IGVsID0gc3dpcGVyLmVsO1xuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbiAgfVxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgfVxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU3VidHJhY3QgcGFkZGluZ3NcbiAgd2lkdGggPSB3aWR0aCAtIHBhcnNlSW50KGVsZW1lbnRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KGVsZW1lbnRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG4gIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KGVsZW1lbnRTdHlsZShlbCwgJ3BhZGRpbmctdG9wJykgfHwgMCwgMTApIC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy1ib3R0b20nKSB8fCAwLCAxMCk7XG4gIGlmIChOdW1iZXIuaXNOYU4od2lkdGgpKSB3aWR0aCA9IDA7XG4gIGlmIChOdW1iZXIuaXNOYU4oaGVpZ2h0KSkgaGVpZ2h0ID0gMDtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgc2l6ZTogc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gd2lkdGggOiBoZWlnaHRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShub2RlLCBsYWJlbCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG5vZGUuZ2V0UHJvcGVydHlWYWx1ZShzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwobGFiZWwpKSB8fCAwKTtcbiAgfVxuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckVsLFxuICAgIHNsaWRlc0VsLFxuICAgIHNpemU6IHN3aXBlclNpemUsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgd3JvbmdSVExcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgcHJldmlvdXNTbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICBjb25zdCBzbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc2xpZGVzLmxlbmd0aDtcbiAgbGV0IHNuYXBHcmlkID0gW107XG4gIGNvbnN0IHNsaWRlc0dyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gIGxldCBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuICBpZiAodHlwZW9mIG9mZnNldEJlZm9yZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUuY2FsbChzd2lwZXIpO1xuICB9XG4gIGxldCBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuICBjb25zdCBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgY29uc3QgcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoID0gc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoO1xuICBsZXQgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgbGV0IHNsaWRlUG9zaXRpb24gPSAtb2Zmc2V0QmVmb3JlO1xuICBsZXQgcHJldlNsaWRlU2l6ZSA9IDA7XG4gIGxldCBpbmRleCA9IDA7XG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJykge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuKTtcbiAgfVxuICBzd2lwZXIudmlydHVhbFNpemUgPSAtc3BhY2VCZXR3ZWVuO1xuXG4gIC8vIHJlc2V0IG1hcmdpbnNcbiAgc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luUmlnaHQgPSAnJztcbiAgICB9XG4gICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnJztcbiAgICBzbGlkZUVsLnN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICB9KTtcblxuICAvLyByZXNldCBjc3NNb2RlIG9mZnNldHNcbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCAnJyk7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgJycpO1xuICB9XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDEgJiYgc3dpcGVyLmdyaWQ7XG4gIGlmIChncmlkRW5hYmxlZCkge1xuICAgIHN3aXBlci5ncmlkLmluaXRTbGlkZXMoc2xpZGVzKTtcbiAgfSBlbHNlIGlmIChzd2lwZXIuZ3JpZCkge1xuICAgIHN3aXBlci5ncmlkLnVuc2V0U2xpZGVzKCk7XG4gIH1cblxuICAvLyBDYWxjIHNsaWRlc1xuICBsZXQgc2xpZGVTaXplO1xuICBjb25zdCBzaG91bGRSZXNldFNsaWRlU2l6ZSA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLmJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKHBhcmFtcy5icmVha3BvaW50cykuZmlsdGVyKGtleSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXJhbXMuYnJlYWtwb2ludHNba2V5XS5zbGlkZXNQZXJWaWV3ICE9PSAndW5kZWZpbmVkJztcbiAgfSkubGVuZ3RoID4gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlU2l6ZSA9IDA7XG4gICAgbGV0IHNsaWRlO1xuICAgIGlmIChzbGlkZXNbaV0pIHNsaWRlID0gc2xpZGVzW2ldO1xuICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmdyaWQudXBkYXRlU2xpZGUoaSwgc2xpZGUsIHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChzbGlkZXNbaV0gJiYgZWxlbWVudFN0eWxlKHNsaWRlLCAnZGlzcGxheScpID09PSAnbm9uZScpIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgaWYgKHNob3VsZFJlc2V0U2xpZGVTaXplKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYGA7XG4gICAgICB9XG4gICAgICBjb25zdCBzbGlkZVN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoc2xpZGUpO1xuICAgICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IHNsaWRlLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0gPSBzbGlkZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBlbGVtZW50T3V0ZXJTaXplKHNsaWRlLCAnd2lkdGgnLCB0cnVlKSA6IGVsZW1lbnRPdXRlclNpemUoc2xpZGUsICdoZWlnaHQnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zdCB3aWR0aCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICd3aWR0aCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5SaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgY29uc3QgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuICAgICAgICBpZiAoYm94U2l6aW5nICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aFxuICAgICAgICAgIH0gPSBzbGlkZTtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0ICsgKG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gY3VycmVudFdlYktpdFRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGAke3NsaWRlU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuICAgIHNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIGluZGV4ICs9IDE7XG4gIH1cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuICBpZiAocnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgIHdyYXBwZXJFbC5zdHlsZS53aWR0aCA9IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHNwYWNlQmV0d2Vlbn1weGA7XG4gIH1cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHdyYXBwZXJFbC5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c3dpcGVyLnZpcnR1YWxTaXplICsgc3BhY2VCZXR3ZWVufXB4YDtcbiAgfVxuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC51cGRhdGVXcmFwcGVyU2l6ZShzbGlkZVNpemUsIHNuYXBHcmlkKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgY29uc3QgbmV3U2xpZGVzR3JpZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc25hcEdyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW2ldO1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICBpZiAoc25hcEdyaWRbaV0gPD0gc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkge1xuICAgICAgICBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgfVxuICB9XG4gIGlmIChpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICBjb25zdCBzaXplID0gc2xpZGVzU2l6ZXNHcmlkWzBdICsgc3BhY2VCZXR3ZWVuO1xuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxKSB7XG4gICAgICBjb25zdCBncm91cHMgPSBNYXRoLmNlaWwoKHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0FmdGVyKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICBjb25zdCBncm91cFNpemUgPSBzaXplICogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cHM7IGkgKz0gMSkge1xuICAgICAgICBzbmFwR3JpZC5wdXNoKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdICsgZ3JvdXBTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmUgKyBzd2lwZXIudmlydHVhbC5zbGlkZXNBZnRlcjsgaSArPSAxKSB7XG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxKSB7XG4gICAgICAgIHNuYXBHcmlkLnB1c2goc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0gKyBzaXplKTtcbiAgICAgIH1cbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gKyBzaXplKTtcbiAgICAgIHN3aXBlci52aXJ0dWFsU2l6ZSArPSBzaXplO1xuICAgIH1cbiAgfVxuICBpZiAoc25hcEdyaWQubGVuZ3RoID09PSAwKSBzbmFwR3JpZCA9IFswXTtcbiAgaWYgKHNwYWNlQmV0d2VlbiAhPT0gMCkge1xuICAgIGNvbnN0IGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpblJpZ2h0Jyk7XG4gICAgc2xpZGVzLmZpbHRlcigoXywgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgaWYgKCFwYXJhbXMuY3NzTW9kZSB8fCBwYXJhbXMubG9vcCkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIHNsaWRlRWwuc3R5bGVba2V5XSA9IGAke3NwYWNlQmV0d2Vlbn1weGA7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICBsZXQgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goc2xpZGVTaXplVmFsdWUgPT4ge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChzcGFjZUJldHdlZW4gfHwgMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBzcGFjZUJldHdlZW47XG4gICAgY29uc3QgbWF4U25hcCA9IGFsbFNsaWRlc1NpemUgPiBzd2lwZXJTaXplID8gYWxsU2xpZGVzU2l6ZSAtIHN3aXBlclNpemUgOiAwO1xuICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKHNuYXAgPT4ge1xuICAgICAgaWYgKHNuYXAgPD0gMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLmNlbnRlckluc3VmZmljaWVudFNsaWRlcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHNwYWNlQmV0d2VlbiB8fCAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHNwYWNlQmV0d2VlbjtcbiAgICBjb25zdCBvZmZzZXRTaXplID0gKHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUgfHwgMCkgKyAocGFyYW1zLnNsaWRlc09mZnNldEFmdGVyIHx8IDApO1xuICAgIGlmIChhbGxTbGlkZXNTaXplICsgb2Zmc2V0U2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIGNvbnN0IGFsbFNsaWRlc09mZnNldCA9IChzd2lwZXJTaXplIC0gYWxsU2xpZGVzU2l6ZSAtIG9mZnNldFNpemUpIC8gMjtcbiAgICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbmFwR3JpZFtzbmFwSW5kZXhdID0gc25hcCAtIGFsbFNsaWRlc09mZnNldDtcbiAgICAgIH0pO1xuICAgICAgc2xpZGVzR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgICAgc2xpZGVzR3JpZFtzbmFwSW5kZXhdID0gc25hcCArIGFsbFNsaWRlc09mZnNldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHNsaWRlcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHNsaWRlc1NpemVzR3JpZFxuICB9KTtcbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY3NzTW9kZSAmJiAhcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsIGAkey1zbmFwR3JpZFswXX1weGApO1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcicsIGAke3N3aXBlci5zaXplIC8gMiAtIHNsaWRlc1NpemVzR3JpZFtzbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMV0gLyAyfXB4YCk7XG4gICAgY29uc3QgYWRkVG9TbmFwR3JpZCA9IC1zd2lwZXIuc25hcEdyaWRbMF07XG4gICAgY29uc3QgYWRkVG9TbGlkZXNHcmlkID0gLXN3aXBlci5zbGlkZXNHcmlkWzBdO1xuICAgIHN3aXBlci5zbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZC5tYXAodiA9PiB2ICsgYWRkVG9TbmFwR3JpZCk7XG4gICAgc3dpcGVyLnNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZC5tYXAodiA9PiB2ICsgYWRkVG9TbGlkZXNHcmlkKTtcbiAgfVxuICBpZiAoc2xpZGVzTGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0xlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuICBpZiAoc2xpZGVzR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzbGlkZXNVcGRhdGVkJyk7XG4gIGlmICghaXNWaXJ0dWFsICYmICFwYXJhbXMuY3NzTW9kZSAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnZmFkZScpKSB7XG4gICAgY29uc3QgYmFja0ZhY2VIaWRkZW5DbGFzcyA9IGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWJhY2tmYWNlLWhpZGRlbmA7XG4gICAgY29uc3QgaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQgPSBzd2lwZXIuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuICAgIGlmIChzbGlkZXNMZW5ndGggPD0gcGFyYW1zLm1heEJhY2tmYWNlSGlkZGVuU2xpZGVzKSB7XG4gICAgICBpZiAoIWhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkKSBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZChiYWNrRmFjZUhpZGRlbkNsYXNzKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkKSB7XG4gICAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZShiYWNrRmFjZUhpZGRlbkNsYXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodChzcGVlZCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGxldCBuZXdIZWlnaHQgPSAwO1xuICBsZXQgaTtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgfVxuICBjb25zdCBnZXRTbGlkZUJ5SW5kZXggPSBpbmRleCA9PiB7XG4gICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgcmV0dXJuIHN3aXBlci5zbGlkZXNbc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEoaW5kZXgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZXNbaW5kZXhdO1xuICB9O1xuICAvLyBGaW5kIHNsaWRlcyBjdXJyZW50bHkgaW4gdmlld1xuICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAoc3dpcGVyLnZpc2libGVTbGlkZXMgfHwgW10pLmZvckVhY2goc2xpZGUgPT4ge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAmJiAhaXNWaXJ0dWFsKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpKTtcbiAgfVxuXG4gIC8vIEZpbmQgbmV3IGhlaWdodCBmcm9tIGhpZ2hlc3Qgc2xpZGUgaW4gdmlld1xuICBmb3IgKGkgPSAwOyBpIDwgYWN0aXZlU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZXNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBIZWlnaHRcbiAgaWYgKG5ld0hlaWdodCB8fCBuZXdIZWlnaHQgPT09IDApIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7bmV3SGVpZ2h0fXB4YDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzT2Zmc2V0KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgbWludXNPZmZzZXQgPSBzd2lwZXIuaXNFbGVtZW50ID8gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc3dpcGVyLndyYXBwZXJFbC5vZmZzZXRMZWZ0IDogc3dpcGVyLndyYXBwZXJFbC5vZmZzZXRUb3AgOiAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHNsaWRlc1tpXS5vZmZzZXRUb3ApIC0gbWludXNPZmZzZXQgLSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gIH1cbn1cblxuY29uc3QgdG9nZ2xlU2xpZGVDbGFzc2VzJDEgPSAoc2xpZGVFbCwgY29uZGl0aW9uLCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKCFjb25kaXRpb24gJiYgc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMgJiYgdGhpcy50cmFuc2xhdGUgfHwgMDtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB7XG4gICAgc2xpZGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHNuYXBHcmlkXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICBsZXQgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcbiAgbGV0IHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHN3aXBlci5zaXplO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4pO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgbGV0IHNsaWRlT2Zmc2V0ID0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgaWYgKHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVPZmZzZXQgLT0gc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgIH1cbiAgICBjb25zdCBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBzcGFjZUJldHdlZW4pO1xuICAgIGNvbnN0IG9yaWdpbmFsU2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgLSBzbmFwR3JpZFswXSArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBzcGFjZUJldHdlZW4pO1xuICAgIGNvbnN0IHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZU9mZnNldCk7XG4gICAgY29uc3Qgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICBjb25zdCBpc0Z1bGx5VmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPD0gc3dpcGVyLnNpemUgLSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEgfHwgc2xpZGVBZnRlciA+IDEgJiYgc2xpZGVBZnRlciA8PSBzd2lwZXIuc2l6ZSB8fCBzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemU7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICB9XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzJDEoc2xpZGUsIGlzVmlzaWJsZSwgcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMkMShzbGlkZSwgaXNGdWxseVZpc2libGUsIHBhcmFtcy5zbGlkZUZ1bGx5VmlzaWJsZUNsYXNzKTtcbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICBzbGlkZS5vcmlnaW5hbFByb2dyZXNzID0gcnRsID8gLW9yaWdpbmFsU2xpZGVQcm9ncmVzcyA6IG9yaWdpbmFsU2xpZGVQcm9ncmVzcztcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgbXVsdGlwbGllciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdHJhbnNsYXRlID0gc3dpcGVyICYmIHN3aXBlci50cmFuc2xhdGUgJiYgc3dpcGVyLnRyYW5zbGF0ZSAqIG11bHRpcGxpZXIgfHwgMDtcbiAgfVxuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgbGV0IHtcbiAgICBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZyxcbiAgICBpc0VuZCxcbiAgICBwcm9ncmVzc0xvb3BcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIGNvbnN0IHdhc0VuZCA9IGlzRW5kO1xuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgY29uc3QgaXNCZWdpbm5pbmdSb3VuZGVkID0gTWF0aC5hYnModHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSA8IDE7XG4gICAgY29uc3QgaXNFbmRSb3VuZGVkID0gTWF0aC5hYnModHJhbnNsYXRlIC0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSA8IDE7XG4gICAgaXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZ1JvdW5kZWQgfHwgcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IGlzRW5kUm91bmRlZCB8fCBwcm9ncmVzcyA+PSAxO1xuICAgIGlmIChpc0JlZ2lubmluZ1JvdW5kZWQpIHByb2dyZXNzID0gMDtcbiAgICBpZiAoaXNFbmRSb3VuZGVkKSBwcm9ncmVzcyA9IDE7XG4gIH1cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEoMCk7XG4gICAgY29uc3QgbGFzdFNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFtmaXJzdFNsaWRlSW5kZXhdO1xuICAgIGNvbnN0IGxhc3RTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2xhc3RTbGlkZUluZGV4XTtcbiAgICBjb25zdCB0cmFuc2xhdGVNYXggPSBzd2lwZXIuc2xpZGVzR3JpZFtzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCB0cmFuc2xhdGVBYnMgPSBNYXRoLmFicyh0cmFuc2xhdGUpO1xuICAgIGlmICh0cmFuc2xhdGVBYnMgPj0gZmlyc3RTbGlkZVRyYW5zbGF0ZSkge1xuICAgICAgcHJvZ3Jlc3NMb29wID0gKHRyYW5zbGF0ZUFicyAtIGZpcnN0U2xpZGVUcmFuc2xhdGUpIC8gdHJhbnNsYXRlTWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzc0xvb3AgPSAodHJhbnNsYXRlQWJzICsgdHJhbnNsYXRlTWF4IC0gbGFzdFNsaWRlVHJhbnNsYXRlKSAvIHRyYW5zbGF0ZU1heDtcbiAgICB9XG4gICAgaWYgKHByb2dyZXNzTG9vcCA+IDEpIHByb2dyZXNzTG9vcCAtPSAxO1xuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgcHJvZ3Jlc3MsXG4gICAgcHJvZ3Jlc3NMb29wLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kXG4gIH0pO1xuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn1cblxuY29uc3QgdG9nZ2xlU2xpZGVDbGFzc2VzID0gKHNsaWRlRWwsIGNvbmRpdGlvbiwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChjb25kaXRpb24gJiYgIXNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIHNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc0NsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsLFxuICAgIGFjdGl2ZUluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGNvbnN0IGdldEZpbHRlcmVkU2xpZGUgPSBzZWxlY3RvciA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSR7c2VsZWN0b3J9LCBzd2lwZXItc2xpZGUke3NlbGVjdG9yfWApWzBdO1xuICB9O1xuICBsZXQgYWN0aXZlU2xpZGU7XG4gIGxldCBwcmV2U2xpZGU7XG4gIGxldCBuZXh0U2xpZGU7XG4gIGlmIChpc1ZpcnR1YWwpIHtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gYWN0aXZlSW5kZXggLSBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoICsgc2xpZGVJbmRleDtcbiAgICAgIGlmIChzbGlkZUluZGV4ID49IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGgpIHNsaWRlSW5kZXggLT0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDtcbiAgICAgIGFjdGl2ZVNsaWRlID0gZ2V0RmlsdGVyZWRTbGlkZShgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZUluZGV4fVwiXWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IGdldEZpbHRlcmVkU2xpZGUoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7YWN0aXZlSW5kZXh9XCJdYCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCk7XG4gICAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCArIDEpO1xuICAgICAgcHJldlNsaWRlID0gc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdO1xuICAgIH1cbiAgfVxuICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICBpZiAoIWdyaWRFbmFibGVkKSB7XG4gICAgICAvLyBOZXh0IFNsaWRlXG4gICAgICBuZXh0U2xpZGUgPSBlbGVtZW50TmV4dEFsbChhY3RpdmVTbGlkZSwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYClbMF07XG4gICAgICBpZiAocGFyYW1zLmxvb3AgJiYgIW5leHRTbGlkZSkge1xuICAgICAgICBuZXh0U2xpZGUgPSBzbGlkZXNbMF07XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXYgU2xpZGVcbiAgICAgIHByZXZTbGlkZSA9IGVsZW1lbnRQcmV2QWxsKGFjdGl2ZVNsaWRlLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKVswXTtcbiAgICAgIGlmIChwYXJhbXMubG9vcCAmJiAhcHJldlNsaWRlID09PSAwKSB7XG4gICAgICAgIHByZXZTbGlkZSA9IHNsaWRlc1tzbGlkZXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyhzbGlkZUVsLCBzbGlkZUVsID09PSBhY3RpdmVTbGlkZSwgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyhzbGlkZUVsLCBzbGlkZUVsID09PSBuZXh0U2xpZGUsIHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IHByZXZTbGlkZSwgcGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgfSk7XG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufVxuXG5jb25zdCBwcm9jZXNzTGF6eVByZWxvYWRlciA9IChzd2lwZXIsIGltYWdlRWwpID0+IHtcbiAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLnBhcmFtcykgcmV0dXJuO1xuICBjb25zdCBzbGlkZVNlbGVjdG9yID0gKCkgPT4gc3dpcGVyLmlzRWxlbWVudCA/IGBzd2lwZXItc2xpZGVgIDogYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gO1xuICBjb25zdCBzbGlkZUVsID0gaW1hZ2VFbC5jbG9zZXN0KHNsaWRlU2VsZWN0b3IoKSk7XG4gIGlmIChzbGlkZUVsKSB7XG4gICAgbGV0IGxhenlFbCA9IHNsaWRlRWwucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgaWYgKCFsYXp5RWwgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgaWYgKHNsaWRlRWwuc2hhZG93Um9vdCkge1xuICAgICAgICBsYXp5RWwgPSBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpbml0IGxhdGVyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHNsaWRlRWwuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgbGF6eUVsID0gc2xpZGVFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC4ke3N3aXBlci5wYXJhbXMubGF6eVByZWxvYWRlckNsYXNzfWApO1xuICAgICAgICAgICAgaWYgKGxhenlFbCkgbGF6eUVsLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXp5RWwpIGxhenlFbC5yZW1vdmUoKTtcbiAgfVxufTtcbmNvbnN0IHVubGF6eSA9IChzd2lwZXIsIGluZGV4KSA9PiB7XG4gIGlmICghc3dpcGVyLnNsaWRlc1tpbmRleF0pIHJldHVybjtcbiAgY29uc3QgaW1hZ2VFbCA9IHN3aXBlci5zbGlkZXNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ1tsb2FkaW5nPVwibGF6eVwiXScpO1xuICBpZiAoaW1hZ2VFbCkgaW1hZ2VFbC5yZW1vdmVBdHRyaWJ1dGUoJ2xvYWRpbmcnKTtcbn07XG5jb25zdCBwcmVsb2FkID0gc3dpcGVyID0+IHtcbiAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLnBhcmFtcykgcmV0dXJuO1xuICBsZXQgYW1vdW50ID0gc3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZFByZXZOZXh0O1xuICBjb25zdCBsZW4gPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgaWYgKCFsZW4gfHwgIWFtb3VudCB8fCBhbW91bnQgPCAwKSByZXR1cm47XG4gIGFtb3VudCA9IE1hdGgubWluKGFtb3VudCwgbGVuKTtcbiAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBNYXRoLmNlaWwoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTtcbiAgY29uc3QgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGlmIChzd2lwZXIucGFyYW1zLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgPiAxKSB7XG4gICAgY29uc3QgYWN0aXZlQ29sdW1uID0gYWN0aXZlSW5kZXg7XG4gICAgY29uc3QgcHJlbG9hZENvbHVtbnMgPSBbYWN0aXZlQ29sdW1uIC0gYW1vdW50XTtcbiAgICBwcmVsb2FkQ29sdW1ucy5wdXNoKC4uLkFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoOiBhbW91bnRcbiAgICB9KS5tYXAoKF8sIGkpID0+IHtcbiAgICAgIHJldHVybiBhY3RpdmVDb2x1bW4gKyBzbGlkZXNQZXJWaWV3ICsgaTtcbiAgICB9KSk7XG4gICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKChzbGlkZUVsLCBpKSA9PiB7XG4gICAgICBpZiAocHJlbG9hZENvbHVtbnMuaW5jbHVkZXMoc2xpZGVFbC5jb2x1bW4pKSB1bmxhenkoc3dpcGVyLCBpKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2xpZGVJbmRleExhc3RJblZpZXcgPSBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXcgLSAxO1xuICBpZiAoc3dpcGVyLnBhcmFtcy5yZXdpbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gYW1vdW50OyBpIDw9IHNsaWRlSW5kZXhMYXN0SW5WaWV3ICsgYW1vdW50OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJlYWxJbmRleCA9IChpICUgbGVuICsgbGVuKSAlIGxlbjtcbiAgICAgIGlmIChyZWFsSW5kZXggPCBhY3RpdmVJbmRleCB8fCByZWFsSW5kZXggPiBzbGlkZUluZGV4TGFzdEluVmlldykgdW5sYXp5KHN3aXBlciwgcmVhbEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IE1hdGgubWF4KGFjdGl2ZUluZGV4IC0gYW1vdW50LCAwKTsgaSA8PSBNYXRoLm1pbihzbGlkZUluZGV4TGFzdEluVmlldyArIGFtb3VudCwgbGVuIC0gMSk7IGkgKz0gMSkge1xuICAgICAgaWYgKGkgIT09IGFjdGl2ZUluZGV4ICYmIChpID4gc2xpZGVJbmRleExhc3RJblZpZXcgfHwgaSA8IGFjdGl2ZUluZGV4KSkge1xuICAgICAgICB1bmxhenkoc3dpcGVyLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUoc3dpcGVyKSB7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXNHcmlkLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgYWN0aXZlSW5kZXg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICB9XG4gIH1cbiAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gIH1cbiAgcmV0dXJuIGFjdGl2ZUluZGV4O1xufVxuZnVuY3Rpb24gdXBkYXRlQWN0aXZlSW5kZXgobmV3QWN0aXZlSW5kZXgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgY29uc3Qge1xuICAgIHNuYXBHcmlkLFxuICAgIHBhcmFtcyxcbiAgICBhY3RpdmVJbmRleDogcHJldmlvdXNJbmRleCxcbiAgICByZWFsSW5kZXg6IHByZXZpb3VzUmVhbEluZGV4LFxuICAgIHNuYXBJbmRleDogcHJldmlvdXNTbmFwSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGFjdGl2ZUluZGV4ID0gbmV3QWN0aXZlSW5kZXg7XG4gIGxldCBzbmFwSW5kZXg7XG4gIGNvbnN0IGdldFZpcnR1YWxSZWFsSW5kZXggPSBhSW5kZXggPT4ge1xuICAgIGxldCByZWFsSW5kZXggPSBhSW5kZXggLSBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgaWYgKHJlYWxJbmRleCA8IDApIHtcbiAgICAgIHJlYWxJbmRleCA9IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggKyByZWFsSW5kZXg7XG4gICAgfVxuICAgIGlmIChyZWFsSW5kZXggPj0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgcmVhbEluZGV4IC09IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiByZWFsSW5kZXg7XG4gIH07XG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYWN0aXZlSW5kZXggPSBnZXRBY3RpdmVJbmRleEJ5VHJhbnNsYXRlKHN3aXBlcik7XG4gIH1cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNraXAgPSBNYXRoLm1pbihwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBhY3RpdmVJbmRleCk7XG4gICAgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGFjdGl2ZUluZGV4IC0gc2tpcCkgLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB9XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXggJiYgIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIGlmIChzbmFwSW5kZXggIT09IHByZXZpb3VzU25hcEluZGV4KSB7XG4gICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4ICYmIHN3aXBlci5wYXJhbXMubG9vcCAmJiBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgIHN3aXBlci5yZWFsSW5kZXggPSBnZXRWaXJ0dWFsUmVhbEluZGV4KGFjdGl2ZUluZGV4KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcblxuICAvLyBHZXQgcmVhbCBpbmRleFxuICBsZXQgcmVhbEluZGV4O1xuICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBwYXJhbXMubG9vcCkge1xuICAgIHJlYWxJbmRleCA9IGdldFZpcnR1YWxSZWFsSW5kZXgoYWN0aXZlSW5kZXgpO1xuICB9IGVsc2UgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluQ29sdW1uID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4KTtcbiAgICBsZXQgYWN0aXZlU2xpZGVJbmRleCA9IHBhcnNlSW50KGZpcnN0U2xpZGVJbkNvbHVtbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKGFjdGl2ZVNsaWRlSW5kZXgpKSB7XG4gICAgICBhY3RpdmVTbGlkZUluZGV4ID0gTWF0aC5tYXgoc3dpcGVyLnNsaWRlcy5pbmRleE9mKGZpcnN0U2xpZGVJbkNvbHVtbiksIDApO1xuICAgIH1cbiAgICByZWFsSW5kZXggPSBNYXRoLmZsb29yKGFjdGl2ZVNsaWRlSW5kZXggLyBwYXJhbXMuZ3JpZC5yb3dzKTtcbiAgfSBlbHNlIGlmIChzd2lwZXIuc2xpZGVzW2FjdGl2ZUluZGV4XSkge1xuICAgIGNvbnN0IHNsaWRlSW5kZXggPSBzd2lwZXIuc2xpZGVzW2FjdGl2ZUluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KHNsaWRlSW5kZXgsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhbEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlYWxJbmRleCA9IGFjdGl2ZUluZGV4O1xuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgcHJldmlvdXNTbmFwSW5kZXgsXG4gICAgc25hcEluZGV4LFxuICAgIHByZXZpb3VzUmVhbEluZGV4LFxuICAgIHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4XG4gIH0pO1xuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSB7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdhY3RpdmVJbmRleENoYW5nZScpO1xuICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZWwsIHBhdGgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgbGV0IHNsaWRlID0gZWwuY2xvc2VzdChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgaWYgKCFzbGlkZSAmJiBzd2lwZXIuaXNFbGVtZW50ICYmIHBhdGggJiYgcGF0aC5sZW5ndGggPiAxICYmIHBhdGguaW5jbHVkZXMoZWwpKSB7XG4gICAgWy4uLnBhdGguc2xpY2UocGF0aC5pbmRleE9mKGVsKSArIDEsIHBhdGgubGVuZ3RoKV0uZm9yRWFjaChwYXRoRWwgPT4ge1xuICAgICAgaWYgKCFzbGlkZSAmJiBwYXRoRWwubWF0Y2hlcyAmJiBwYXRoRWwubWF0Y2hlcyhgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKSkge1xuICAgICAgICBzbGlkZSA9IHBhdGhFbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgc2xpZGVGb3VuZCA9IGZhbHNlO1xuICBsZXQgc2xpZGVJbmRleDtcbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHtcbiAgICAgICAgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBzbGlkZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gdW5kZWZpbmVkO1xuICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgfVxufVxuXG52YXIgdXBkYXRlID0ge1xuICB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXMsXG4gIHVwZGF0ZUF1dG9IZWlnaHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gIHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlXG59O1xuXG5mdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneSc7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB0cmFuc2xhdGUsXG4gICAgd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybiB0cmFuc2xhdGU7XG4gIH1cbiAgbGV0IGN1cnJlbnRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUod3JhcHBlckVsLCBheGlzKTtcbiAgY3VycmVudFRyYW5zbGF0ZSArPSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBwYXJhbXMsXG4gICAgd3JhcHBlckVsLFxuICAgIHByb2dyZXNzXG4gIH0gPSBzd2lwZXI7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBjb25zdCB6ID0gMDtcbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIHggPSBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIHkgPSB0cmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHggLT0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB5IC09IHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgICB9XG4gICAgd3JhcHBlckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gIH1cblxuICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuICBsZXQgbmV3UHJvZ3Jlc3M7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gbWluVHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbMF07XG59XG5cbmZ1bmN0aW9uIG1heFRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgdHJhbnNsYXRlQm91bmRzLCBpbnRlcm5hbCkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSAwO1xuICB9XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtaW5UcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGNvbnN0IG1heFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgbGV0IG5ld1RyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPiBtaW5UcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1pblRyYW5zbGF0ZTtlbHNlIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlIDwgbWF4VHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtYXhUcmFuc2xhdGU7ZWxzZSBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7XG5cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdUcmFuc2xhdGUpO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBjb25zdCBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gLW5ld1RyYW5zbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICAgICAgICAgIHN3aXBlcixcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbjogLW5ld1RyYW5zbGF0ZSxcbiAgICAgICAgICBzaWRlOiBpc0ggPyAnbGVmdCcgOiAndG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgc3dpcGVyLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgdHJhbnNsYXRlID0ge1xuICBnZXRUcmFuc2xhdGU6IGdldFN3aXBlclRyYW5zbGF0ZSxcbiAgc2V0VHJhbnNsYXRlLFxuICBtaW5UcmFuc2xhdGUsXG4gIG1heFRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlVG9cbn07XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xuICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gZHVyYXRpb24gPT09IDAgPyBgMG1zYCA6ICcnO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbWl0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcHJldmlvdXNJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgZGlyID0gZGlyZWN0aW9uO1xuICBpZiAoIWRpcikge1xuICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIGRpciA9ICduZXh0JztlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIGRpciA9ICdwcmV2JztlbHNlIGRpciA9ICdyZXNldCc7XG4gIH1cbiAgc3dpcGVyLmVtaXQoYHRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gIGlmIChydW5DYWxsYmFja3MgJiYgZGlyID09PSAncmVzZXQnKSB7XG4gICAgc3dpcGVyLmVtaXQoYHNsaWRlUmVzZXRUcmFuc2l0aW9uJHtzdGVwfWApO1xuICB9IGVsc2UgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIHN3aXBlci5lbWl0KGBzbGlkZUNoYW5nZVRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVOZXh0VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlUHJldlRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gIH1cbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdTdGFydCdcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICB0cmFuc2l0aW9uRW1pdCh7XG4gICAgc3dpcGVyLFxuICAgIHJ1bkNhbGxiYWNrcyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc3RlcDogJ0VuZCdcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uID0ge1xuICBzZXRUcmFuc2l0aW9uLFxuICB0cmFuc2l0aW9uU3RhcnQsXG4gIHRyYW5zaXRpb25FbmRcbn07XG5cbmZ1bmN0aW9uIHNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsLCBpbml0aWFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICBpbmRleCA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHNsaWRlSW5kZXggPSBpbmRleDtcbiAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgd3JhcHBlckVsLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkICYmICFpbnRlcm5hbCAmJiAhaW5pdGlhbCB8fCBzd2lwZXIuZGVzdHJveWVkIHx8IHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIHNsaWRlSW5kZXgpO1xuICBsZXQgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKHNsaWRlSW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgY29uc3QgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07XG4gIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICBjb25zdCBub3JtYWxpemVkR3JpZCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpXSAqIDEwMCk7XG4gICAgICBjb25zdCBub3JtYWxpemVkR3JpZE5leHQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaSArIDFdICogMTAwKTtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQgLSAobm9ybWFsaXplZEdyaWROZXh0IC0gbm9ybWFsaXplZEdyaWQpIC8gMikge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCkge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgJiYgc2xpZGVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiAocnRsID8gdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoc2xpZGVJbmRleCAhPT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO2Vsc2UgaWYgKHNsaWRlSW5kZXggPCBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ3ByZXYnO2Vsc2UgZGlyZWN0aW9uID0gJ3Jlc2V0JztcblxuICAvLyBpbml0aWFsIHZpcnR1YWxcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IGlzSW5pdGlhbFZpcnR1YWwgPSBpc1ZpcnR1YWwgJiYgaW5pdGlhbDtcbiAgLy8gVXBkYXRlIEluZGV4XG4gIGlmICghaXNJbml0aWFsVmlydHVhbCAmJiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICAgIC8vIFVwZGF0ZSBIZWlnaHRcbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBjb25zdCBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3QgdCA9IHJ0bCA/IHRyYW5zbGF0ZSA6IC10cmFuc2xhdGU7XG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnbm9uZSc7XG4gICAgICAgIHN3aXBlci5faW1tZWRpYXRlVmlydHVhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNWaXJ0dWFsICYmICFzd2lwZXIuX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCAmJiBzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSA+IDApIHtcbiAgICAgICAgc3dpcGVyLl9jc3NNb2RlVmlydHVhbEluaXRpYWxTZXQgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgfVxuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgICAgICBzd2lwZXIuX2ltbWVkaWF0ZVZpcnR1YWwgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc3dpcGVyLnN1cHBvcnQuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgICAgICAgICBzd2lwZXIsXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb246IHQsXG4gICAgICAgICAgc2lkZTogaXNIID8gJ2xlZnQnIDogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogdCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcbiAgY29uc3QgaXNTYWZhcmkgPSBicm93c2VyLmlzU2FmYXJpO1xuICBpZiAoaXNWaXJ0dWFsICYmICFpbml0aWFsICYmIGlzU2FmYXJpICYmIHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIudmlydHVhbC51cGRhdGUoZmFsc2UsIGZhbHNlLCBzbGlkZUluZGV4KTtcbiAgfVxuICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgc3dpcGVyLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2xpZGVUb0xvb3AoaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBpbmRleEFzTnVtYmVyID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgICBpbmRleCA9IGluZGV4QXNOdW1iZXI7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBsZXQgbmV3SW5kZXggPSBpbmRleDtcbiAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGFyZ2V0U2xpZGVJbmRleDtcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gbmV3SW5kZXggKiBzd2lwZXIucGFyYW1zLmdyaWQucm93cztcbiAgICAgICAgdGFyZ2V0U2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gc2xpZGVJbmRleCkuY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0U2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKG5ld0luZGV4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbHMgPSBncmlkRW5hYmxlZCA/IE1hdGguY2VpbChzd2lwZXIuc2xpZGVzLmxlbmd0aCAvIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzKSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjZW50ZXJlZFNsaWRlc1xuICAgICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgICBsZXQgc2xpZGVzUGVyVmlldyA9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldyA9IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKTtcbiAgICAgICAgaWYgKGNlbnRlcmVkU2xpZGVzICYmIHNsaWRlc1BlclZpZXcgJSAyID09PSAwKSB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldyA9IHNsaWRlc1BlclZpZXcgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgbmVlZExvb3BGaXggPSBjb2xzIC0gdGFyZ2V0U2xpZGVJbmRleCA8IHNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgbmVlZExvb3BGaXggPSBuZWVkTG9vcEZpeCB8fCB0YXJnZXRTbGlkZUluZGV4IDwgTWF0aC5jZWlsKHNsaWRlc1BlclZpZXcgLyAyKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcm5hbCAmJiBjZW50ZXJlZFNsaWRlcyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiAhZ3JpZEVuYWJsZWQpIHtcbiAgICAgICAgbmVlZExvb3BGaXggPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTG9vcEZpeCkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBjZW50ZXJlZFNsaWRlcyA/IHRhcmdldFNsaWRlSW5kZXggPCBzd2lwZXIuYWN0aXZlSW5kZXggPyAncHJldicgOiAnbmV4dCcgOiB0YXJnZXRTbGlkZUluZGV4IC0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMSA8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICBzbGlkZVRvOiB0cnVlLFxuICAgICAgICAgIGFjdGl2ZVNsaWRlSW5kZXg6IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gdGFyZ2V0U2xpZGVJbmRleCArIDEgOiB0YXJnZXRTbGlkZUluZGV4IC0gY29scyArIDEsXG4gICAgICAgICAgc2xpZGVSZWFsSW5kZXg6IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gc3dpcGVyLnJlYWxJbmRleCA6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gbmV3SW5kZXggKiBzd2lwZXIucGFyYW1zLmdyaWQucm93cztcbiAgICAgICAgbmV3SW5kZXggPSBzd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSAqIDEgPT09IHNsaWRlSW5kZXgpLmNvbHVtbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0luZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEobmV3SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH0pO1xuICByZXR1cm4gc3dpcGVyO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlTmV4dChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBlbmFibGVkLFxuICAgIHBhcmFtcyxcbiAgICBhbmltYXRpbmdcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybiBzd2lwZXI7XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGxldCBwZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8pIHtcbiAgICBwZXJHcm91cCA9IE1hdGgubWF4KHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygnY3VycmVudCcsIHRydWUpLCAxKTtcbiAgfVxuICBjb25zdCBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBlckdyb3VwO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmICFpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRpbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICBkaXJlY3Rpb246ICduZXh0J1xuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci53cmFwcGVyRWwuY2xpZW50TGVmdDtcbiAgICBpZiAoc3dpcGVyLmFjdGl2ZUluZGV4ID09PSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIGluY3JlbWVudCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzRW5kKSB7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKDAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVQcmV2KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkLFxuICAgIGFuaW1hdGluZ1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuIHN3aXBlcjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiAhaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgZGlyZWN0aW9uOiAncHJldidcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIud3JhcHBlckVsLmNsaWVudExlZnQ7XG4gIH1cbiAgY29uc3QgdHJhbnNsYXRlID0gcnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgY29uc3Qgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKHZhbCA9PiBub3JtYWxpemUodmFsKSk7XG4gIGNvbnN0IGlzRnJlZU1vZGUgPSBwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQ7XG4gIGxldCBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG4gIGlmICh0eXBlb2YgcHJldlNuYXAgPT09ICd1bmRlZmluZWQnICYmIChwYXJhbXMuY3NzTW9kZSB8fCBpc0ZyZWVNb2RlKSkge1xuICAgIGxldCBwcmV2U25hcEluZGV4O1xuICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkge1xuICAgICAgICAvLyBwcmV2U25hcCA9IHNuYXA7XG4gICAgICAgIHByZXZTbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBwcmV2U25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJldlNuYXAgPSBpc0ZyZWVNb2RlID8gc25hcEdyaWRbcHJldlNuYXBJbmRleF0gOiBzbmFwR3JpZFtwcmV2U25hcEluZGV4ID4gMCA/IHByZXZTbmFwSW5kZXggLSAxIDogcHJldlNuYXBJbmRleF07XG4gICAgfVxuICB9XG4gIGxldCBwcmV2SW5kZXggPSAwO1xuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8pIHtcbiAgICAgIHByZXZJbmRleCA9IHByZXZJbmRleCAtIHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygncHJldmlvdXMnLCB0cnVlKSArIDE7XG4gICAgICBwcmV2SW5kZXggPSBNYXRoLm1heChwcmV2SW5kZXgsIDApO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSBzd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIC0gMSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obGFzdEluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLmxvb3AgJiYgc3dpcGVyLmFjdGl2ZUluZGV4ID09PSAwICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVJlc2V0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlVG9DbG9zZXN0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsLCB0aHJlc2hvbGQpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICB0aHJlc2hvbGQgPSAwLjU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgbGV0IGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICBjb25zdCBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KTtcbiAgY29uc3Qgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGNvbnN0IG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgY29uc3QgcHJldlNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4IC0gMV07XG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICBpZiAodHJhbnNsYXRlIC0gcHJldlNuYXAgPD0gKGN1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgbGV0IHNsaWRlVG9JbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4V2hlbkdyaWQoc3dpcGVyLmNsaWNrZWRJbmRleCk7XG4gIGxldCByZWFsSW5kZXg7XG4gIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBzd2lwZXIuaXNFbGVtZW50ID8gYHN3aXBlci1zbGlkZWAgOiBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YDtcbiAgY29uc3QgaXNHcmlkID0gc3dpcGVyLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuY2xpY2tlZFNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChyZWFsSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gKGlzR3JpZCA/IChzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIC8gMiAtIChzd2lwZXIucGFyYW1zLmdyaWQucm93cyAtIDEpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4KGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYCR7c2xpZGVTZWxlY3Rvcn1bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl1gKVswXSk7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufVxuXG52YXIgc2xpZGUgPSB7XG4gIHNsaWRlVG8sXG4gIHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQsXG4gIHNsaWRlUHJldixcbiAgc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3QsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGVcbn07XG5cbmZ1bmN0aW9uIGxvb3BDcmVhdGUoc2xpZGVSZWFsSW5kZXgsIGluaXRpYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIXBhcmFtcy5sb29wIHx8IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gIGNvbnN0IGluaXRTbGlkZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgICBzbGlkZXMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBjbGVhckJsYW5rU2xpZGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YCk7XG4gICAgc2xpZGVzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAocGFyYW1zLmxvb3BBZGRCbGFua1NsaWRlcyAmJiAocGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSB8fCBncmlkRW5hYmxlZCkpIHtcbiAgICBjbGVhckJsYW5rU2xpZGVzKCk7XG4gIH1cbiAgY29uc3Qgc2xpZGVzUGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiAoZ3JpZEVuYWJsZWQgPyBwYXJhbXMuZ3JpZC5yb3dzIDogMSk7XG4gIGNvbnN0IHNob3VsZEZpbGxHcm91cCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoICUgc2xpZGVzUGVyR3JvdXAgIT09IDA7XG4gIGNvbnN0IHNob3VsZEZpbGxHcmlkID0gZ3JpZEVuYWJsZWQgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBwYXJhbXMuZ3JpZC5yb3dzICE9PSAwO1xuICBjb25zdCBhZGRCbGFua1NsaWRlcyA9IGFtb3VudE9mU2xpZGVzID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudE9mU2xpZGVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzd2lwZXIuaXNFbGVtZW50ID8gY3JlYXRlRWxlbWVudCgnc3dpcGVyLXNsaWRlJywgW3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3NdKSA6IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtwYXJhbXMuc2xpZGVDbGFzcywgcGFyYW1zLnNsaWRlQmxhbmtDbGFzc10pO1xuICAgICAgc3dpcGVyLnNsaWRlc0VsLmFwcGVuZChzbGlkZUVsKTtcbiAgICB9XG4gIH07XG4gIGlmIChzaG91bGRGaWxsR3JvdXApIHtcbiAgICBpZiAocGFyYW1zLmxvb3BBZGRCbGFua1NsaWRlcykge1xuICAgICAgY29uc3Qgc2xpZGVzVG9BZGQgPSBzbGlkZXNQZXJHcm91cCAtIHN3aXBlci5zbGlkZXMubGVuZ3RoICUgc2xpZGVzUGVyR3JvdXA7XG4gICAgICBhZGRCbGFua1NsaWRlcyhzbGlkZXNUb0FkZCk7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZXZlbiB0byBzbGlkZXNQZXJHcm91cCwgbG9vcCBtb2RlIG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzLCBvciBlbXB0eSBzbGlkZXMpJyk7XG4gICAgfVxuICAgIGluaXRTbGlkZXMoKTtcbiAgfSBlbHNlIGlmIChzaG91bGRGaWxsR3JpZCkge1xuICAgIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzKSB7XG4gICAgICBjb25zdCBzbGlkZXNUb0FkZCA9IHBhcmFtcy5ncmlkLnJvd3MgLSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5ncmlkLnJvd3M7XG4gICAgICBhZGRCbGFua1NsaWRlcyhzbGlkZXNUb0FkZCk7XG4gICAgICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZXZlbiB0byBncmlkLnJvd3MsIGxvb3AgbW9kZSBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBZb3UgbmVlZCB0byBhZGQgbW9yZSBzbGlkZXMgKG9yIG1ha2UgZHVwbGljYXRlcywgb3IgZW1wdHkgc2xpZGVzKScpO1xuICAgIH1cbiAgICBpbml0U2xpZGVzKCk7XG4gIH0gZWxzZSB7XG4gICAgaW5pdFNsaWRlcygpO1xuICB9XG4gIHN3aXBlci5sb29wRml4KHtcbiAgICBzbGlkZVJlYWxJbmRleCxcbiAgICBkaXJlY3Rpb246IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHVuZGVmaW5lZCA6ICduZXh0JyxcbiAgICBpbml0aWFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb29wRml4KF90ZW1wKSB7XG4gIGxldCB7XG4gICAgc2xpZGVSZWFsSW5kZXgsXG4gICAgc2xpZGVUbyA9IHRydWUsXG4gICAgZGlyZWN0aW9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBhY3RpdmVTbGlkZUluZGV4LFxuICAgIGluaXRpYWwsXG4gICAgYnlDb250cm9sbGVyLFxuICAgIGJ5TW91c2V3aGVlbFxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVMb29wRml4Jyk7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgYWxsb3dTbGlkZVByZXYsXG4gICAgYWxsb3dTbGlkZU5leHQsXG4gICAgc2xpZGVzRWwsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHtcbiAgICBjZW50ZXJlZFNsaWRlcyxcbiAgICBpbml0aWFsU2xpZGVcbiAgfSA9IHBhcmFtcztcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICBpZiAoc2xpZGVUbykge1xuICAgICAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgc3dpcGVyLnNuYXBJbmRleCA9PT0gMCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBzd2lwZXIuc25hcEluZGV4IDwgcGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHN3aXBlci5zbmFwSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnNuYXBJbmRleCA9PT0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICAgIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCk7XG4gIH0gZWxzZSB7XG4gICAgc2xpZGVzUGVyVmlldyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICAgIGlmIChjZW50ZXJlZFNsaWRlcyAmJiBzbGlkZXNQZXJWaWV3ICUgMiA9PT0gMCkge1xuICAgICAgc2xpZGVzUGVyVmlldyA9IHNsaWRlc1BlclZpZXcgKyAxO1xuICAgIH1cbiAgfVxuICBjb25zdCBzbGlkZXNQZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8gPyBzbGlkZXNQZXJWaWV3IDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBsZXQgbG9vcGVkU2xpZGVzID0gY2VudGVyZWRTbGlkZXMgPyBNYXRoLm1heChzbGlkZXNQZXJHcm91cCwgTWF0aC5jZWlsKHNsaWRlc1BlclZpZXcgLyAyKSkgOiBzbGlkZXNQZXJHcm91cDtcbiAgaWYgKGxvb3BlZFNsaWRlcyAlIHNsaWRlc1Blckdyb3VwICE9PSAwKSB7XG4gICAgbG9vcGVkU2xpZGVzICs9IHNsaWRlc1Blckdyb3VwIC0gbG9vcGVkU2xpZGVzICUgc2xpZGVzUGVyR3JvdXA7XG4gIH1cbiAgbG9vcGVkU2xpZGVzICs9IHBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IGxvb3BlZFNsaWRlcztcbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzIHx8IHN3aXBlci5wYXJhbXMuZWZmZWN0ID09PSAnY2FyZHMnICYmIHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzICogMikge1xuICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBUaGUgbnVtYmVyIG9mIHNsaWRlcyBpcyBub3QgZW5vdWdoIGZvciBsb29wIG1vZGUsIGl0IHdpbGwgYmUgZGlzYWJsZWQgb3Igbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBZb3UgbmVlZCB0byBhZGQgbW9yZSBzbGlkZXMgKG9yIG1ha2UgZHVwbGljYXRlcykgb3IgbG93ZXIgdGhlIHZhbHVlcyBvZiBzbGlkZXNQZXJWaWV3IGFuZCBzbGlkZXNQZXJHcm91cCBwYXJhbWV0ZXJzJyk7XG4gIH0gZWxzZSBpZiAoZ3JpZEVuYWJsZWQgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ3JvdycpIHtcbiAgICBzaG93V2FybmluZygnU3dpcGVyIExvb3AgV2FybmluZzogTG9vcCBtb2RlIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggZ3JpZC5maWxsID0gYHJvd2AnKTtcbiAgfVxuICBjb25zdCBwcmVwZW5kU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBjb25zdCBhcHBlbmRTbGlkZXNJbmRleGVzID0gW107XG4gIGNvbnN0IGNvbHMgPSBncmlkRW5hYmxlZCA/IE1hdGguY2VpbChzbGlkZXMubGVuZ3RoIC8gcGFyYW1zLmdyaWQucm93cykgOiBzbGlkZXMubGVuZ3RoO1xuICBjb25zdCBpc0luaXRpYWxPdmVyZmxvdyA9IGluaXRpYWwgJiYgY29scyAtIGluaXRpYWxTbGlkZSA8IHNsaWRlc1BlclZpZXcgJiYgIWNlbnRlcmVkU2xpZGVzO1xuICBsZXQgYWN0aXZlSW5kZXggPSBpc0luaXRpYWxPdmVyZmxvdyA/IGluaXRpYWxTbGlkZSA6IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleChzbGlkZXMuZmluZChlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSk7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4O1xuICB9XG4gIGNvbnN0IGlzTmV4dCA9IGRpcmVjdGlvbiA9PT0gJ25leHQnIHx8ICFkaXJlY3Rpb247XG4gIGNvbnN0IGlzUHJldiA9IGRpcmVjdGlvbiA9PT0gJ3ByZXYnIHx8ICFkaXJlY3Rpb247XG4gIGxldCBzbGlkZXNQcmVwZW5kZWQgPSAwO1xuICBsZXQgc2xpZGVzQXBwZW5kZWQgPSAwO1xuICBjb25zdCBhY3RpdmVDb2xJbmRleCA9IGdyaWRFbmFibGVkID8gc2xpZGVzW2FjdGl2ZVNsaWRlSW5kZXhdLmNvbHVtbiA6IGFjdGl2ZVNsaWRlSW5kZXg7XG4gIGNvbnN0IGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0ID0gYWN0aXZlQ29sSW5kZXggKyAoY2VudGVyZWRTbGlkZXMgJiYgdHlwZW9mIHNldFRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyAtc2xpZGVzUGVyVmlldyAvIDIgKyAwLjUgOiAwKTtcbiAgLy8gcHJlcGVuZCBsYXN0IHNsaWRlcyBiZWZvcmUgc3RhcnRcbiAgaWYgKGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgc2xpZGVzUHJlcGVuZGVkID0gTWF0aC5tYXgobG9vcGVkU2xpZGVzIC0gYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQsIHNsaWRlc1Blckdyb3VwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BlZFNsaWRlcyAtIGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSAtIE1hdGguZmxvb3IoaSAvIGNvbHMpICogY29scztcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBjb2xJbmRleFRvUHJlcGVuZCA9IGNvbHMgLSBpbmRleCAtIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSBzbGlkZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVzW2ldLmNvbHVtbiA9PT0gY29sSW5kZXhUb1ByZXBlbmQpIHByZXBlbmRTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2xpZGVzLmZvckVhY2goKHNsaWRlLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgaWYgKHNsaWRlLmNvbHVtbiA9PT0gY29sSW5kZXhUb1ByZXBlbmQpIHByZXBlbmRTbGlkZXNJbmRleGVzLnB1c2goc2xpZGVJbmRleCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChjb2xzIC0gaW5kZXggLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgKyBzbGlkZXNQZXJWaWV3ID4gY29scyAtIGxvb3BlZFNsaWRlcykge1xuICAgIHNsaWRlc0FwcGVuZGVkID0gTWF0aC5tYXgoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgLSAoY29scyAtIGxvb3BlZFNsaWRlcyAqIDIpLCBzbGlkZXNQZXJHcm91cCk7XG4gICAgaWYgKGlzSW5pdGlhbE92ZXJmbG93KSB7XG4gICAgICBzbGlkZXNBcHBlbmRlZCA9IE1hdGgubWF4KHNsaWRlc0FwcGVuZGVkLCBzbGlkZXNQZXJWaWV3IC0gY29scyArIGluaXRpYWxTbGlkZSArIDEpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0FwcGVuZGVkOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSAtIE1hdGguZmxvb3IoaSAvIGNvbHMpICogY29scztcbiAgICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoc2xpZGUuY29sdW1uID09PSBpbmRleCkgYXBwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKHNsaWRlSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IGZhbHNlO1xuICB9KTtcbiAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ID09PSAnY2FyZHMnICYmIHNsaWRlcy5sZW5ndGggPCBzbGlkZXNQZXJWaWV3ICsgbG9vcGVkU2xpZGVzICogMikge1xuICAgIGlmIChhcHBlbmRTbGlkZXNJbmRleGVzLmluY2x1ZGVzKGFjdGl2ZVNsaWRlSW5kZXgpKSB7XG4gICAgICBhcHBlbmRTbGlkZXNJbmRleGVzLnNwbGljZShhcHBlbmRTbGlkZXNJbmRleGVzLmluZGV4T2YoYWN0aXZlU2xpZGVJbmRleCksIDEpO1xuICAgIH1cbiAgICBpZiAocHJlcGVuZFNsaWRlc0luZGV4ZXMuaW5jbHVkZXMoYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIHByZXBlbmRTbGlkZXNJbmRleGVzLnNwbGljZShwcmVwZW5kU2xpZGVzSW5kZXhlcy5pbmRleE9mKGFjdGl2ZVNsaWRlSW5kZXgpLCAxKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzUHJldikge1xuICAgIHByZXBlbmRTbGlkZXNJbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IHRydWU7XG4gICAgICBzbGlkZXNFbC5wcmVwZW5kKHNsaWRlc1tpbmRleF0pO1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc05leHQpIHtcbiAgICBhcHBlbmRTbGlkZXNJbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IHRydWU7XG4gICAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVzW2luZGV4XSk7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgfSBlbHNlIGlmIChncmlkRW5hYmxlZCAmJiAocHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc1ByZXYgfHwgYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzTmV4dCkpIHtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goKHNsaWRlLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShzbGlkZUluZGV4LCBzbGlkZSwgc3dpcGVyLnNsaWRlcyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG4gIGlmIChzbGlkZVRvKSB7XG4gICAgaWYgKHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNQcmV2KSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlUmVhbEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleF07XG4gICAgICAgIGNvbnN0IG5ld1NsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXggKyBzbGlkZXNQcmVwZW5kZWRdO1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3U2xpZGVUcmFuc2xhdGUgLSBjdXJyZW50U2xpZGVUcmFuc2xhdGU7XG4gICAgICAgIGlmIChieU1vdXNld2hlZWwpIHtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHN3aXBlci50cmFuc2xhdGUgLSBkaWZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCArIE1hdGguY2VpbChzbGlkZXNQcmVwZW5kZWQpLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgICBjb25zdCBzaGlmdCA9IGdyaWRFbmFibGVkID8gcHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoIC8gcGFyYW1zLmdyaWQucm93cyA6IHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBzaGlmdCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFwcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc05leHQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVSZWFsSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleCAtIHNsaWRlc0FwcGVuZGVkXTtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1NsaWRlVHJhbnNsYXRlIC0gY3VycmVudFNsaWRlVHJhbnNsYXRlO1xuICAgICAgICBpZiAoYnlNb3VzZXdoZWVsKSB7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShzd2lwZXIudHJhbnNsYXRlIC0gZGlmZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBzbGlkZXNBcHBlbmRlZCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIGlmIChzZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzaGlmdCA9IGdyaWRFbmFibGVkID8gYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzIDogYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCAtIHNoaWZ0LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgaWYgKHN3aXBlci5jb250cm9sbGVyICYmIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgJiYgIWJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IGxvb3BQYXJhbXMgPSB7XG4gICAgICBzbGlkZVJlYWxJbmRleCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHNldFRyYW5zbGF0ZSxcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBieUNvbnRyb2xsZXI6IHRydWVcbiAgICB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGlmICghYy5kZXN0cm95ZWQgJiYgYy5wYXJhbXMubG9vcCkgYy5sb29wRml4KHtcbiAgICAgICAgICAuLi5sb29wUGFyYW1zLFxuICAgICAgICAgIHNsaWRlVG86IGMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gc2xpZGVUbyA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuY29udHJvbGxlci5jb250cm9sIGluc3RhbmNlb2Ygc3dpcGVyLmNvbnN0cnVjdG9yICYmIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wubG9vcEZpeCh7XG4gICAgICAgIC4uLmxvb3BQYXJhbXMsXG4gICAgICAgIHNsaWRlVG86IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gc2xpZGVUbyA6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbn1cblxuZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFwYXJhbXMubG9vcCB8fCAhc2xpZGVzRWwgfHwgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBjb25zdCBuZXdTbGlkZXNPcmRlciA9IFtdO1xuICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0eXBlb2Ygc2xpZGVFbC5zd2lwZXJTbGlkZUluZGV4ID09PSAndW5kZWZpbmVkJyA/IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA6IHNsaWRlRWwuc3dpcGVyU2xpZGVJbmRleDtcbiAgICBuZXdTbGlkZXNPcmRlcltpbmRleF0gPSBzbGlkZUVsO1xuICB9KTtcbiAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICB9KTtcbiAgbmV3U2xpZGVzT3JkZXIuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBzbGlkZXNFbC5hcHBlbmQoc2xpZGVFbCk7XG4gIH0pO1xuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIHN3aXBlci5zbGlkZVRvKHN3aXBlci5yZWFsSW5kZXgsIDApO1xufVxuXG52YXIgbG9vcCA9IHtcbiAgbG9vcENyZWF0ZSxcbiAgbG9vcEZpeCxcbiAgbG9vcERlc3Ryb3lcbn07XG5cbmZ1bmN0aW9uIHNldEdyYWJDdXJzb3IobW92aW5nKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIGNvbnN0IGVsID0gc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzd2lwZXIuZWwgOiBzd2lwZXIud3JhcHBlckVsO1xuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgfVxuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZycgOiAnZ3JhYic7XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IHRydWU7XG4gIH1cbiAgc3dpcGVyW3N3aXBlci5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gJ2VsJyA6ICd3cmFwcGVyRWwnXS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgZ3JhYkN1cnNvciA9IHtcbiAgc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yXG59O1xuXG4vLyBNb2RpZmllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0NTIwNTU0L2N1c3RvbS1lbGVtZW50LWdldHJvb3Rub2RlLWNsb3Nlc3QtZnVuY3Rpb24tY3Jvc3NpbmctbXVsdGlwbGUtcGFyZW50LXNoYWRvd2RcbmZ1bmN0aW9uIGNsb3Nlc3RFbGVtZW50KHNlbGVjdG9yLCBiYXNlKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBfX2Nsb3Nlc3RGcm9tKGVsKSB7XG4gICAgaWYgKCFlbCB8fCBlbCA9PT0gZ2V0RG9jdW1lbnQoKSB8fCBlbCA9PT0gZ2V0V2luZG93KCkpIHJldHVybiBudWxsO1xuICAgIGlmIChlbC5hc3NpZ25lZFNsb3QpIGVsID0gZWwuYXNzaWduZWRTbG90O1xuICAgIGNvbnN0IGZvdW5kID0gZWwuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgaWYgKCFmb3VuZCAmJiAhZWwuZ2V0Um9vdE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQgfHwgX19jbG9zZXN0RnJvbShlbC5nZXRSb290Tm9kZSgpLmhvc3QpO1xuICB9XG4gIHJldHVybiBfX2Nsb3Nlc3RGcm9tKGJhc2UpO1xufVxuZnVuY3Rpb24gcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGV2ZW50LCBzdGFydFgpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbjtcbiAgY29uc3QgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZDtcbiAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiAmJiAoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZCB8fCBzdGFydFggPj0gd2luZG93LmlubmVyV2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiA9PT0gJ3ByZXZlbnQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBpZiAoZS50eXBlID09PSAncG9pbnRlcmRvd24nKSB7XG4gICAgaWYgKGRhdGEucG9pbnRlcklkICE9PSBudWxsICYmIGRhdGEucG9pbnRlcklkICE9PSBlLnBvaW50ZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhLnBvaW50ZXJJZCA9IGUucG9pbnRlcklkO1xuICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICBkYXRhLnRvdWNoSWQgPSBlLnRhcmdldFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgfVxuICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAvLyBkb24ndCBwcm9jZWVkIHRvdWNoIGV2ZW50XG4gICAgcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGUsIGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXBhcmFtcy5zaW11bGF0ZVRvdWNoICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcEZpeCgpO1xuICB9XG4gIGxldCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICBpZiAocGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnd3JhcHBlcicpIHtcbiAgICBpZiAoIWVsZW1lbnRJc0NoaWxkT2YodGFyZ2V0RWwsIHN3aXBlci53cmFwcGVyRWwpKSByZXR1cm47XG4gIH1cbiAgaWYgKCd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID4gMCkgcmV0dXJuO1xuICBpZiAoZGF0YS5pc1RvdWNoZWQgJiYgZGF0YS5pc01vdmVkKSByZXR1cm47XG5cbiAgLy8gY2hhbmdlIHRhcmdldCBlbCBmb3Igc2hhZG93IHJvb3QgY29tcG9uZW50XG4gIGNvbnN0IHN3aXBpbmdDbGFzc0hhc1ZhbHVlID0gISFwYXJhbXMubm9Td2lwaW5nQ2xhc3MgJiYgcGFyYW1zLm5vU3dpcGluZ0NsYXNzICE9PSAnJztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IGV2ZW50UGF0aCA9IGUuY29tcG9zZWRQYXRoID8gZS5jb21wb3NlZFBhdGgoKSA6IGUucGF0aDtcbiAgaWYgKHN3aXBpbmdDbGFzc0hhc1ZhbHVlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgZXZlbnRQYXRoKSB7XG4gICAgdGFyZ2V0RWwgPSBldmVudFBhdGhbMF07XG4gIH1cbiAgY29uc3Qgbm9Td2lwaW5nU2VsZWN0b3IgPSBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBgLiR7cGFyYW1zLm5vU3dpcGluZ0NsYXNzfWA7XG4gIGNvbnN0IGlzVGFyZ2V0U2hhZG93ID0gISEoZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCk7XG5cbiAgLy8gdXNlIGNsb3Nlc3RFbGVtZW50IGZvciBzaGFkb3cgcm9vdCBlbGVtZW50IHRvIGdldCB0aGUgYWN0dWFsIGNsb3Nlc3QgZm9yIG5lc3RlZCBzaGFkb3cgcm9vdCBlbGVtZW50XG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmIChpc1RhcmdldFNoYWRvdyA/IGNsb3Nlc3RFbGVtZW50KG5vU3dpcGluZ1NlbGVjdG9yLCB0YXJnZXRFbCkgOiB0YXJnZXRFbC5jbG9zZXN0KG5vU3dpcGluZ1NlbGVjdG9yKSkpIHtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCF0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpKSByZXR1cm47XG4gIH1cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUucGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBlLnBhZ2VZO1xuICBjb25zdCBzdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICBjb25zdCBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuXG4gIC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gIGlmICghcHJldmVudEVkZ2VTd2lwZShzd2lwZXIsIGUsIHN0YXJ0WCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcbiAgbGV0IHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgaWYgKHRhcmdldEVsLm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmICh0YXJnZXRFbC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0YXJnZXRFbCAmJiAoZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJyB8fCBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmICF0YXJnZXRFbC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSkge1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG4gIGNvbnN0IHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG4gIGlmICgocGFyYW1zLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KSAmJiAhdGFyZ2V0RWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUgJiYgc3dpcGVyLmFuaW1hdGluZyAmJiAhcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaFN0YXJ0KCk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3RvdWNoU3RhcnQnLCBlKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgaWYgKGUudHlwZSA9PT0gJ3BvaW50ZXJtb3ZlJykge1xuICAgIGlmIChkYXRhLnRvdWNoSWQgIT09IG51bGwpIHJldHVybjsgLy8gcmV0dXJuIGZyb20gcG9pbnRlciBpZiB3ZSB1c2UgdG91Y2hcbiAgICBjb25zdCBpZCA9IGUucG9pbnRlcklkO1xuICAgIGlmIChpZCAhPT0gZGF0YS5wb2ludGVySWQpIHJldHVybjtcbiAgfVxuICBsZXQgdGFyZ2V0VG91Y2g7XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc10uZmluZCh0ID0+IHQuaWRlbnRpZmllciA9PT0gZGF0YS50b3VjaElkKTtcbiAgICBpZiAoIXRhcmdldFRvdWNoIHx8IHRhcmdldFRvdWNoLmlkZW50aWZpZXIgIT09IGRhdGEudG91Y2hJZCkgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFRvdWNoID0gZTtcbiAgfVxuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuc3RhcnRNb3ZpbmcgJiYgZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYWdlWCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICBjb25zdCBwYWdlWSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xuICAgIHRvdWNoZXMuc3RhcnRYID0gcGFnZVg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0b3VjaGVzLCB7XG4gICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgICAgY3VycmVudFk6IHBhZ2VZXG4gICAgICB9KTtcbiAgICAgIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ0bCAmJiAocGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiAtc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiAtc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghcnRsICYmIChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlLnRhcmdldCAmJiBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZS50YXJnZXQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cbiAgdG91Y2hlcy5wcmV2aW91c1ggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICB0b3VjaGVzLnByZXZpb3VzWSA9IHRvdWNoZXMuY3VycmVudFk7XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICBjb25zdCBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgY29uc3QgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRocmVzaG9sZCAmJiBNYXRoLnNxcnQoZGlmZlggKiogMiArIGRpZmZZICoqIDIpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBkYXRhLmlzU2Nyb2xsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCB0b3VjaEFuZ2xlO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRYID09PSB0b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmIChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSA+PSAyNSkge1xuICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogOTAgLSB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBkYXRhLnN0YXJ0TW92aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZGF0YS5wcmV2ZW50VG91Y2hNb3ZlRnJvbVBvaW50ZXJNb3ZlKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gIGlmICghcGFyYW1zLmNzc01vZGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBsZXQgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIGxldCB0b3VjaGVzRGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnByZXZpb3VzWCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnByZXZpb3VzWTtcbiAgaWYgKHBhcmFtcy5vbmVXYXlNb3ZlbWVudCkge1xuICAgIGRpZmYgPSBNYXRoLmFicyhkaWZmKSAqIChydGwgPyAxIDogLTEpO1xuICAgIHRvdWNoZXNEaWZmID0gTWF0aC5hYnModG91Y2hlc0RpZmYpICogKHJ0bCA/IDEgOiAtMSk7XG4gIH1cbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgaWYgKHJ0bCkge1xuICAgIGRpZmYgPSAtZGlmZjtcbiAgICB0b3VjaGVzRGlmZiA9IC10b3VjaGVzRGlmZjtcbiAgfVxuICBjb25zdCBwcmV2VG91Y2hlc0RpcmVjdGlvbiA9IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPSB0b3VjaGVzRGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGNvbnN0IGlzTG9vcCA9IHN3aXBlci5wYXJhbXMubG9vcCAmJiAhcGFyYW1zLmNzc01vZGU7XG4gIGNvbnN0IGFsbG93TG9vcEZpeCA9IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgc3dpcGVyLmFsbG93U2xpZGVOZXh0IHx8IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uID09PSAncHJldicgJiYgc3dpcGVyLmFsbG93U2xpZGVQcmV2O1xuICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgIGRpcmVjdGlvbjogc3dpcGVyLnN3aXBlRGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgY29uc3QgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudCgndHJhbnNpdGlvbmVuZCcsIHtcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgYnlTd2lwZXJUb3VjaE1vdmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7XG4gICAgLy8gR3JhYiBDdXJzb3JcbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlckZpcnN0TW92ZScsIGUpO1xuICB9XG4gIGxldCBsb29wRml4ZWQ7XG4gIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBpZiAocGFyYW1zLl9sb29wU3dhcFJlc2V0ICE9PSBmYWxzZSAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgcHJldlRvdWNoZXNEaXJlY3Rpb24gIT09IHN3aXBlci50b3VjaGVzRGlyZWN0aW9uICYmIGlzTG9vcCAmJiBhbGxvd0xvb3BGaXggJiYgTWF0aC5hYnMoZGlmZikgPj0gMSkge1xuICAgIE9iamVjdC5hc3NpZ24odG91Y2hlcywge1xuICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICBjdXJyZW50WTogcGFnZVksXG4gICAgICBzdGFydFRyYW5zbGF0ZTogZGF0YS5jdXJyZW50VHJhbnNsYXRlXG4gICAgfSk7XG4gICAgZGF0YS5sb29wU3dhcFJlc2V0ID0gdHJ1ZTtcbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICAgIHJldHVybjtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgbGV0IGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICBsZXQgcmVzaXN0YW5jZVJhdGlvID0gcGFyYW1zLnJlc2lzdGFuY2VSYXRpbztcbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgfVxuICBpZiAoZGlmZiA+IDApIHtcbiAgICBpZiAoaXNMb29wICYmIGFsbG93TG9vcEZpeCAmJiAhbG9vcEZpeGVkICYmIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleCArIDFdIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBwYXJhbXMuc2xpZGVzUGVyVmlldyA+PSAyID8gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXggKyAxXSArIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCkgLSBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA6IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiAncHJldicsXG4gICAgICAgIHNldFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkge1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxICsgKC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4ICYmICFsb29wRml4ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLnNsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSArIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBwYXJhbXMuc2xpZGVzUGVyVmlldyA+PSAyID8gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKSA6IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgICAgIHNldFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEgLSAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgIXN3aXBlci5hbGxvd1NsaWRlTmV4dCkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICAvLyBUaHJlc2hvbGRcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG5cbiAgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUgfHwgcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hNb3ZlKCk7XG4gIH1cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xuICAvLyBVcGRhdGUgdHJhbnNsYXRlXG4gIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgbGV0IHRhcmdldFRvdWNoO1xuICBjb25zdCBpc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnO1xuICBpZiAoIWlzVG91Y2hFdmVudCkge1xuICAgIGlmIChkYXRhLnRvdWNoSWQgIT09IG51bGwpIHJldHVybjsgLy8gcmV0dXJuIGZyb20gcG9pbnRlciBpZiB3ZSB1c2UgdG91Y2hcbiAgICBpZiAoZS5wb2ludGVySWQgIT09IGRhdGEucG9pbnRlcklkKSByZXR1cm47XG4gICAgdGFyZ2V0VG91Y2ggPSBlO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFRvdWNoID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdLmZpbmQodCA9PiB0LmlkZW50aWZpZXIgPT09IGRhdGEudG91Y2hJZCk7XG4gICAgaWYgKCF0YXJnZXRUb3VjaCB8fCB0YXJnZXRUb3VjaC5pZGVudGlmaWVyICE9PSBkYXRhLnRvdWNoSWQpIHJldHVybjtcbiAgfVxuICBpZiAoWydwb2ludGVyY2FuY2VsJywgJ3BvaW50ZXJvdXQnLCAncG9pbnRlcmxlYXZlJywgJ2NvbnRleHRtZW51J10uaW5jbHVkZXMoZS50eXBlKSkge1xuICAgIGNvbnN0IHByb2NlZWQgPSBbJ3BvaW50ZXJjYW5jZWwnLCAnY29udGV4dG1lbnUnXS5pbmNsdWRlcyhlLnR5cGUpICYmIChzd2lwZXIuYnJvd3Nlci5pc1NhZmFyaSB8fCBzd2lwZXIuYnJvd3Nlci5pc1dlYlZpZXcpO1xuICAgIGlmICghcHJvY2VlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBkYXRhLnBvaW50ZXJJZCA9IG51bGw7XG4gIGRhdGEudG91Y2hJZCA9IG51bGw7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoRW5kJywgZSk7XG4gIH1cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH1cblxuICAvLyBUaW1lIGRpZmZcbiAgY29uc3QgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIGNvbnN0IHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTtcblxuICAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcbiAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgY29uc3QgcGF0aFRyZWUgPSBlLnBhdGggfHwgZS5jb21wb3NlZFBhdGggJiYgZS5jb21wb3NlZFBhdGgoKTtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKHBhdGhUcmVlICYmIHBhdGhUcmVlWzBdIHx8IGUudGFyZ2V0LCBwYXRoVHJlZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiB0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUgPCAzMDApIHtcbiAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAgZG91YmxlQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gbm93KCk7XG4gIG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCAmJiAhZGF0YS5sb29wU3dhcFJlc2V0IHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSAmJiAhZGF0YS5sb29wU3dhcFJlc2V0KSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gIGxldCBjdXJyZW50UG9zO1xuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaEVuZCh7XG4gICAgICBjdXJyZW50UG9zXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRmluZCBjdXJyZW50IHNsaWRlXG4gIGNvbnN0IHN3aXBlVG9MYXN0ID0gY3VycmVudFBvcyA+PSAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpICYmICFzd2lwZXIucGFyYW1zLmxvb3A7XG4gIGxldCBzdG9wSW5kZXggPSAwO1xuICBsZXQgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChzd2lwZVRvTGFzdCB8fCBjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzd2lwZVRvTGFzdCB8fCBjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgfVxuICB9XG4gIGxldCByZXdpbmRGaXJzdEluZGV4ID0gbnVsbDtcbiAgbGV0IHJld2luZExhc3RJbmRleCA9IG51bGw7XG4gIGlmIChwYXJhbXMucmV3aW5kKSB7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgcmV3aW5kTGFzdEluZGV4ID0gcGFyYW1zLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggLSAxIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICByZXdpbmRGaXJzdEluZGV4ID0gMDtcbiAgICB9XG4gIH1cbiAgLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcbiAgY29uc3QgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gIGNvbnN0IGluY3JlbWVudCA9IHN0b3BJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgIC8vIExvbmcgdG91Y2hlc1xuICAgIGlmICghcGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzRW5kID8gcmV3aW5kRmlyc3RJbmRleCA6IHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGlmIChyYXRpbyA+IDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKHJld2luZExhc3RJbmRleCAhPT0gbnVsbCAmJiByYXRpbyA8IDAgJiYgTWF0aC5hYnMocmF0aW8pID4gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhyZXdpbmRMYXN0SW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzTmF2QnV0dG9uVGFyZ2V0ID0gc3dpcGVyLm5hdmlnYXRpb24gJiYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG4gICAgaWYgKCFpc05hdkJ1dHRvblRhcmdldCkge1xuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZEZpcnN0SW5kZXggIT09IG51bGwgPyByZXdpbmRGaXJzdEluZGV4IDogc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhyZXdpbmRMYXN0SW5kZXggIT09IG51bGwgPyByZXdpbmRMYXN0SW5kZXggOiBzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgZWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47XG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH1cblxuICAvLyBTYXZlIGxvY2tzXG4gIGNvbnN0IHtcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBzbmFwR3JpZFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcblxuICAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGNvbnN0IGlzVmlydHVhbExvb3AgPSBpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3A7XG4gIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmICFpc1ZpcnR1YWxMb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCAmJiAhaXNWaXJ0dWFsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0xvb3Aoc3dpcGVyLnJlYWxJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgaWYgKHN3aXBlci5hdXRvcGxheSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS5yZXNpemVUaW1lb3V0KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5yZXN1bWUoKTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9XG4gIC8vIFJldHVybiBsb2NrcyBhZnRlciByZXNpemVcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gIGlmICghc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJFbCxcbiAgICBydGxUcmFuc2xhdGUsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsVG9wO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBpZiAoc3dpcGVyLnRyYW5zbGF0ZSA9PT0gMCkgc3dpcGVyLnRyYW5zbGF0ZSA9IDA7XG4gIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICBsZXQgbmV3UHJvZ3Jlc3M7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAoc3dpcGVyLnRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIG9uTG9hZChlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgZS50YXJnZXQpO1xuICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlIHx8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmICFzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3dpcGVyLnVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kb2N1bWVudFRvdWNoSGFuZGxlclByb2NlZWRlZCkgcmV0dXJuO1xuICBzd2lwZXIuZG9jdW1lbnRUb3VjaEhhbmRsZXJQcm9jZWVkZWQgPSB0cnVlO1xuICBpZiAoc3dpcGVyLnBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgc3dpcGVyLmVsLnN0eWxlLnRvdWNoQWN0aW9uID0gJ2F1dG8nO1xuICB9XG59XG5cbmNvbnN0IGV2ZW50cyA9IChzd2lwZXIsIG1ldGhvZCkgPT4ge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgZWwsXG4gICAgd3JhcHBlckVsLFxuICAgIGRldmljZVxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkO1xuICBjb25zdCBkb21NZXRob2QgPSBtZXRob2QgPT09ICdvbicgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIGNvbnN0IHN3aXBlck1ldGhvZCA9IG1ldGhvZDtcbiAgaWYgKCFlbCB8fCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSByZXR1cm47XG5cbiAgLy8gVG91Y2ggRXZlbnRzXG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNoc3RhcnQnLCBzd2lwZXIub25Eb2N1bWVudFRvdWNoU3RhcnQsIHtcbiAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICBjYXB0dXJlXG4gIH0pO1xuICBlbFtkb21NZXRob2RdKCd0b3VjaHN0YXJ0Jywgc3dpcGVyLm9uVG91Y2hTdGFydCwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBlbFtkb21NZXRob2RdKCdwb2ludGVyZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIHtcbiAgICBwYXNzaXZlOiBmYWxzZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2htb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCB7XG4gICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgY2FwdHVyZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcm1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIHtcbiAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICBjYXB0dXJlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaGVuZCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcnVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVyY2FuY2VsJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaGNhbmNlbCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcm91dCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcmxlYXZlJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdjb250ZXh0bWVudScsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcblxuICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsW2RvbU1ldGhvZF0oJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtkb21NZXRob2RdKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9XG5cbiAgLy8gUmVzaXplIGhhbmRsZXJcbiAgaWYgKHBhcmFtcy51cGRhdGVPbldpbmRvd1Jlc2l6ZSkge1xuICAgIHN3aXBlcltzd2lwZXJNZXRob2RdKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyW3N3aXBlck1ldGhvZF0oJ29ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9XG5cbiAgLy8gSW1hZ2VzIGxvYWRlclxuICBlbFtkb21NZXRob2RdKCdsb2FkJywgc3dpcGVyLm9uTG9hZCwge1xuICAgIGNhcHR1cmU6IHRydWVcbiAgfSk7XG59O1xuZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIHN3aXBlci5vblRvdWNoU3RhcnQgPSBvblRvdWNoU3RhcnQuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaE1vdmUgPSBvblRvdWNoTW92ZS5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoRW5kID0gb25Ub3VjaEVuZC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vbkRvY3VtZW50VG91Y2hTdGFydCA9IG9uRG9jdW1lbnRUb3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLm9uU2Nyb2xsID0gb25TY3JvbGwuYmluZChzd2lwZXIpO1xuICB9XG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vbkxvYWQgPSBvbkxvYWQuYmluZChzd2lwZXIpO1xuICBldmVudHMoc3dpcGVyLCAnb24nKTtcbn1cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgZXZlbnRzKHN3aXBlciwgJ29mZicpO1xufVxudmFyIGV2ZW50cyQxID0ge1xuICBhdHRhY2hFdmVudHMsXG4gIGRldGFjaEV2ZW50c1xufTtcblxuY29uc3QgaXNHcmlkRW5hYmxlZCA9IChzd2lwZXIsIHBhcmFtcykgPT4ge1xuICByZXR1cm4gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG59O1xuZnVuY3Rpb24gc2V0QnJlYWtwb2ludCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHJlYWxJbmRleCxcbiAgICBpbml0aWFsaXplZCxcbiAgICBwYXJhbXMsXG4gICAgZWxcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBwYXJhbXMuYnJlYWtwb2ludHM7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdy9jb250YWluZXIgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG4gIGNvbnN0IGJyZWFrcG9pbnRzQmFzZSA9IHBhcmFtcy5icmVha3BvaW50c0Jhc2UgPT09ICd3aW5kb3cnIHx8ICFwYXJhbXMuYnJlYWtwb2ludHNCYXNlID8gcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA6ICdjb250YWluZXInO1xuICBjb25zdCBicmVha3BvaW50Q29udGFpbmVyID0gWyd3aW5kb3cnLCAnY29udGFpbmVyJ10uaW5jbHVkZXMocGFyYW1zLmJyZWFrcG9pbnRzQmFzZSkgfHwgIXBhcmFtcy5icmVha3BvaW50c0Jhc2UgPyBzd2lwZXIuZWwgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5icmVha3BvaW50c0Jhc2UpO1xuICBjb25zdCBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJyZWFrcG9pbnRzQmFzZSwgYnJlYWtwb2ludENvbnRhaW5lcik7XG4gIGlmICghYnJlYWtwb2ludCB8fCBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnQpIHJldHVybjtcbiAgY29uc3QgYnJlYWtwb2ludE9ubHlQYXJhbXMgPSBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzID8gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gIGNvbnN0IHdhc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIHBhcmFtcyk7XG4gIGNvbnN0IGlzTXVsdGlSb3cgPSBpc0dyaWRFbmFibGVkKHN3aXBlciwgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGNvbnN0IHdhc0dyYWJDdXJzb3IgPSBzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3I7XG4gIGNvbnN0IGlzR3JhYkN1cnNvciA9IGJyZWFrcG9pbnRQYXJhbXMuZ3JhYkN1cnNvcjtcbiAgY29uc3Qgd2FzRW5hYmxlZCA9IHBhcmFtcy5lbmFibGVkO1xuICBpZiAod2FzTXVsdGlSb3cgJiYgIWlzTXVsdGlSb3cpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWRgLCBgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9IGVsc2UgaWYgKCF3YXNNdWx0aVJvdyAmJiBpc011bHRpUm93KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkYCk7XG4gICAgaWYgKGJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIGJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJyB8fCAhYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZC1jb2x1bW5gKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gIH1cbiAgaWYgKHdhc0dyYWJDdXJzb3IgJiYgIWlzR3JhYkN1cnNvcikge1xuICAgIHN3aXBlci51bnNldEdyYWJDdXJzb3IoKTtcbiAgfSBlbHNlIGlmICghd2FzR3JhYkN1cnNvciAmJiBpc0dyYWJDdXJzb3IpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIG5hdmlnYXRpb24sIHBhZ2luYXRpb24sIHNjcm9sbGJhclxuICBbJ25hdmlnYXRpb24nLCAncGFnaW5hdGlvbicsICdzY3JvbGxiYXInXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGlmICh0eXBlb2YgYnJlYWtwb2ludFBhcmFtc1twcm9wXSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBjb25zdCB3YXNNb2R1bGVFbmFibGVkID0gcGFyYW1zW3Byb3BdICYmIHBhcmFtc1twcm9wXS5lbmFibGVkO1xuICAgIGNvbnN0IGlzTW9kdWxlRW5hYmxlZCA9IGJyZWFrcG9pbnRQYXJhbXNbcHJvcF0gJiYgYnJlYWtwb2ludFBhcmFtc1twcm9wXS5lbmFibGVkO1xuICAgIGlmICh3YXNNb2R1bGVFbmFibGVkICYmICFpc01vZHVsZUVuYWJsZWQpIHtcbiAgICAgIHN3aXBlcltwcm9wXS5kaXNhYmxlKCk7XG4gICAgfVxuICAgIGlmICghd2FzTW9kdWxlRW5hYmxlZCAmJiBpc01vZHVsZUVuYWJsZWQpIHtcbiAgICAgIHN3aXBlcltwcm9wXS5lbmFibGUoKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBkaXJlY3Rpb25DaGFuZ2VkID0gYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gJiYgYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gIT09IHBhcmFtcy5kaXJlY3Rpb247XG4gIGNvbnN0IG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG4gIGNvbnN0IHdhc0xvb3AgPSBwYXJhbXMubG9vcDtcbiAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gIH1cbiAgZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCBpc0VuYWJsZWQgPSBzd2lwZXIucGFyYW1zLmVuYWJsZWQ7XG4gIGNvbnN0IGhhc0xvb3AgPSBzd2lwZXIucGFyYW1zLmxvb3A7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXZcbiAgfSk7XG4gIGlmICh3YXNFbmFibGVkICYmICFpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZGlzYWJsZSgpO1xuICB9IGVsc2UgaWYgKCF3YXNFbmFibGVkICYmIGlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5lbmFibGUoKTtcbiAgfVxuICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbiAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgaWYgKG5lZWRzUmVMb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKHJlYWxJbmRleCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIGlmICghd2FzTG9vcCAmJiBoYXNMb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZShyZWFsSW5kZXgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH0gZWxzZSBpZiAod2FzTG9vcCAmJiAhaGFzTG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UsIGNvbnRhaW5lckVsKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJ3dpbmRvdyc7XG4gIH1cbiAgaWYgKCFicmVha3BvaW50cyB8fCBiYXNlID09PSAnY29udGFpbmVyJyAmJiAhY29udGFpbmVyRWwpIHJldHVybiB1bmRlZmluZWQ7XG4gIGxldCBicmVha3BvaW50ID0gZmFsc2U7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gYmFzZSA9PT0gJ3dpbmRvdycgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBjb250YWluZXJFbC5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5tYXAocG9pbnQgPT4ge1xuICAgIGlmICh0eXBlb2YgcG9pbnQgPT09ICdzdHJpbmcnICYmIHBvaW50LmluZGV4T2YoJ0AnKSA9PT0gMCkge1xuICAgICAgY29uc3QgbWluUmF0aW8gPSBwYXJzZUZsb2F0KHBvaW50LnN1YnN0cigxKSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBwb2ludFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwb2ludCxcbiAgICAgIHBvaW50XG4gICAgfTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhLnZhbHVlLCAxMCkgLSBwYXJzZUludChiLnZhbHVlLCAxMCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBvaW50LFxuICAgICAgdmFsdWVcbiAgICB9ID0gcG9pbnRzW2ldO1xuICAgIGlmIChiYXNlID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3ZhbHVlfXB4KWApLm1hdGNoZXMpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPD0gY29udGFpbmVyRWwuY2xpZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59XG5cbnZhciBicmVha3BvaW50cyA9IHtcbiAgc2V0QnJlYWtwb2ludCxcbiAgZ2V0QnJlYWtwb2ludFxufTtcblxuZnVuY3Rpb24gcHJlcGFyZUNsYXNzZXMoZW50cmllcywgcHJlZml4KSB7XG4gIGNvbnN0IHJlc3VsdENsYXNzZXMgPSBbXTtcbiAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goY2xhc3NOYW1lcyA9PiB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuZnVuY3Rpb24gYWRkQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZXMsXG4gICAgcGFyYW1zLFxuICAgIHJ0bCxcbiAgICBlbCxcbiAgICBkZXZpY2VcbiAgfSA9IHN3aXBlcjtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHN1ZmZpeGVzID0gcHJlcGFyZUNsYXNzZXMoWydpbml0aWFsaXplZCcsIHBhcmFtcy5kaXJlY3Rpb24sIHtcbiAgICAnZnJlZS1tb2RlJzogc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZFxuICB9LCB7XG4gICAgJ2F1dG9oZWlnaHQnOiBwYXJhbXMuYXV0b0hlaWdodFxuICB9LCB7XG4gICAgJ3J0bCc6IHJ0bFxuICB9LCB7XG4gICAgJ2dyaWQnOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMVxuICB9LCB7XG4gICAgJ2dyaWQtY29sdW1uJzogcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDEgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbidcbiAgfSwge1xuICAgICdhbmRyb2lkJzogZGV2aWNlLmFuZHJvaWRcbiAgfSwge1xuICAgICdpb3MnOiBkZXZpY2UuaW9zXG4gIH0sIHtcbiAgICAnY3NzLW1vZGUnOiBwYXJhbXMuY3NzTW9kZVxuICB9LCB7XG4gICAgJ2NlbnRlcmVkJzogcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzXG4gIH0sIHtcbiAgICAnd2F0Y2gtcHJvZ3Jlc3MnOiBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzc1xuICB9XSwgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpO1xuICBjbGFzc05hbWVzLnB1c2goLi4uc3VmZml4ZXMpO1xuICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGVsLFxuICAgIGNsYXNzTmFtZXNcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbCB8fCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSByZXR1cm47XG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcyk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufVxuXG52YXIgY2xhc3NlcyA9IHtcbiAgYWRkQ2xhc3NlcyxcbiAgcmVtb3ZlQ2xhc3Nlc1xufTtcblxuZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGlzTG9ja2VkOiB3YXNMb2NrZWQsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXNPZmZzZXRCZWZvcmVcbiAgfSA9IHBhcmFtcztcbiAgaWYgKHNsaWRlc09mZnNldEJlZm9yZSkge1xuICAgIGNvbnN0IGxhc3RTbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGxhc3RTbGlkZVJpZ2h0RWRnZSA9IHN3aXBlci5zbGlkZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbbGFzdFNsaWRlSW5kZXhdICsgc2xpZGVzT2Zmc2V0QmVmb3JlICogMjtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc2l6ZSA+IGxhc3RTbGlkZVJpZ2h0RWRnZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG4gIGlmIChwYXJhbXMuYWxsb3dTbGlkZU5leHQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICB9XG4gIGlmIChwYXJhbXMuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICB9XG4gIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuaXNFbmQgPSBmYWxzZTtcbiAgfVxuICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG4gIH1cbn1cbnZhciBjaGVja092ZXJmbG93JDEgPSB7XG4gIGNoZWNrT3ZlcmZsb3dcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgaW5pdDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIG9uZVdheU1vdmVtZW50OiBmYWxzZSxcbiAgc3dpcGVyRWxlbWVudE5vZGVOYW1lOiAnU1dJUEVSLUNPTlRBSU5FUicsXG4gIHRvdWNoRXZlbnRzVGFyZ2V0OiAnd3JhcHBlcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogdHJ1ZSxcbiAgbmVzdGVkOiBmYWxzZSxcbiAgY3JlYXRlRWxlbWVudHM6IGZhbHNlLFxuICBldmVudHNQcmVmaXg6ICdzd2lwZXInLFxuICBlbmFibGVkOiB0cnVlLFxuICBmb2N1c2FibGVFbGVtZW50czogJ2lucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8sIGxhYmVsJyxcbiAgLy8gT3ZlcnJpZGVzXG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIC8vXG4gIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG4gIC8vIHNzclxuICB1c2VyQWdlbnQ6IG51bGwsXG4gIHVybDogbnVsbCxcbiAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHApLlxuICBlZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxuICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuXG4gIC8vIEJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gIGJyZWFrcG9pbnRzQmFzZTogJ3dpbmRvdycsXG4gIC8vIFNsaWRlcyBncmlkXG4gIHNwYWNlQmV0d2VlbjogMCxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gIHNsaWRlc1Blckdyb3VwU2tpcDogMCxcbiAgc2xpZGVzUGVyR3JvdXBBdXRvOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICBjZW50ZXJlZFNsaWRlc0JvdW5kczogZmFsc2UsXG4gIHNsaWRlc09mZnNldEJlZm9yZTogMCxcbiAgLy8gaW4gcHhcbiAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsXG4gIC8vIGluIHB4XG4gIG5vcm1hbGl6ZVNsaWRlSW5kZXg6IHRydWUsXG4gIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogZmFsc2UsXG4gIC8vIERpc2FibGUgc3dpcGVyIGFuZCBoaWRlIG5hdmlnYXRpb24gd2hlbiBjb250YWluZXIgbm90IG92ZXJmbG93XG4gIHdhdGNoT3ZlcmZsb3c6IHRydWUsXG4gIC8vIFJvdW5kIGxlbmd0aFxuICByb3VuZExlbmd0aHM6IGZhbHNlLFxuICAvLyBUb3VjaGVzXG4gIHRvdWNoUmF0aW86IDEsXG4gIHRvdWNoQW5nbGU6IDQ1LFxuICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gIGxvbmdTd2lwZXNNczogMzAwLFxuICBmb2xsb3dGaW5nZXI6IHRydWUsXG4gIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICB0aHJlc2hvbGQ6IDUsXG4gIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG4gIC8vIFJlc2lzdGFuY2VcbiAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgcmVzaXN0YW5jZVJhdGlvOiAwLjg1LFxuICAvLyBQcm9ncmVzc1xuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgLy8gQ3Vyc29yXG4gIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAvLyBDbGlja3NcbiAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZEJsYW5rU2xpZGVzOiB0cnVlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcbiAgbG9vcFByZXZlbnRzU2xpZGluZzogdHJ1ZSxcbiAgLy8gcmV3aW5kXG4gIHJld2luZDogZmFsc2UsXG4gIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICBhbGxvd1NsaWRlUHJldjogdHJ1ZSxcbiAgYWxsb3dTbGlkZU5leHQ6IHRydWUsXG4gIHN3aXBlSGFuZGxlcjogbnVsbCxcbiAgLy8gJy5zd2lwZS1oYW5kbGVyJyxcbiAgbm9Td2lwaW5nOiB0cnVlLFxuICBub1N3aXBpbmdDbGFzczogJ3N3aXBlci1uby1zd2lwaW5nJyxcbiAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG4gIC8vIFBhc3NpdmUgTGlzdGVuZXJzXG4gIHBhc3NpdmVMaXN0ZW5lcnM6IHRydWUsXG4gIG1heEJhY2tmYWNlSGlkZGVuU2xpZGVzOiAxMCxcbiAgLy8gTlNcbiAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogJ3N3aXBlci0nLFxuICAvLyBORVdcbiAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXG4gIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1ibGFuaycsXG4gIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gIHNsaWRlRnVsbHlWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZnVsbHktdmlzaWJsZScsXG4gIHNsaWRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLW5leHQnLFxuICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuICBsYXp5UHJlbG9hZGVyQ2xhc3M6ICdzd2lwZXItbGF6eS1wcmVsb2FkZXInLFxuICBsYXp5UHJlbG9hZFByZXZOZXh0OiAwLFxuICAvLyBDYWxsYmFja3NcbiAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlLFxuICAvLyBJbnRlcm5hbHNcbiAgX2VtaXRDbGFzc2VzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gbW9kdWxlRXh0ZW5kUGFyYW1zKHBhcmFtcywgYWxsTW9kdWxlc1BhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24gZXh0ZW5kUGFyYW1zKG9iaikge1xuICAgIGlmIChvYmogPT09IHZvaWQgMCkge1xuICAgICAgb2JqID0ge307XG4gICAgfVxuICAgIGNvbnN0IG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gICAgY29uc3QgbW9kdWxlUGFyYW1zID0gb2JqW21vZHVsZVBhcmFtTmFtZV07XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbCkge1xuICAgICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChtb2R1bGVQYXJhbU5hbWUgPT09ICduYXZpZ2F0aW9uJyAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkICYmICFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5wcmV2RWwgJiYgIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLm5leHRFbCkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uYXV0byA9IHRydWU7XG4gICAgfVxuICAgIGlmIChbJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uaW5kZXhPZihtb2R1bGVQYXJhbU5hbWUpID49IDAgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCAmJiAhcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZWwpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmF1dG8gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIShtb2R1bGVQYXJhbU5hbWUgaW4gcGFyYW1zICYmICdlbmFibGVkJyBpbiBtb2R1bGVQYXJhbXMpKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCcgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH07XG4gICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gIH07XG59XG5cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuY29uc3QgcHJvdG90eXBlcyA9IHtcbiAgZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlLFxuICB0cmFuc2xhdGUsXG4gIHRyYW5zaXRpb24sXG4gIHNsaWRlLFxuICBsb29wLFxuICBncmFiQ3Vyc29yLFxuICBldmVudHM6IGV2ZW50cyQxLFxuICBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyQxLFxuICBjbGFzc2VzXG59O1xuY29uc3QgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuY2xhc3MgU3dpcGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGVsO1xuICAgIGxldCBwYXJhbXM7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnc1swXSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jykge1xuICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgW2VsLCBwYXJhbXNdID0gYXJncztcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMpIHBhcmFtcyA9IHt9O1xuICAgIHBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICBpZiAoZWwgJiYgIXBhcmFtcy5lbCkgcGFyYW1zLmVsID0gZWw7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChwYXJhbXMuZWwgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN3aXBlcnMgPSBbXTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFyYW1zLmVsKS5mb3JFYWNoKGNvbnRhaW5lckVsID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG4gICAgICByZXR1cm4gc3dpcGVycztcbiAgICB9XG5cbiAgICAvLyBTd2lwZXIgSW5zdGFuY2VcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5fX3N3aXBlcl9fID0gdHJ1ZTtcbiAgICBzd2lwZXIuc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gZ2V0RGV2aWNlKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG4gICAgc3dpcGVyLm1vZHVsZXMgPSBbLi4uc3dpcGVyLl9fbW9kdWxlc19fXTtcbiAgICBpZiAocGFyYW1zLm1vZHVsZXMgJiYgQXJyYXkuaXNBcnJheShwYXJhbXMubW9kdWxlcykpIHtcbiAgICAgIHN3aXBlci5tb2R1bGVzLnB1c2goLi4ucGFyYW1zLm1vZHVsZXMpO1xuICAgIH1cbiAgICBjb25zdCBhbGxNb2R1bGVzUGFyYW1zID0ge307XG4gICAgc3dpcGVyLm1vZHVsZXMuZm9yRWFjaChtb2QgPT4ge1xuICAgICAgbW9kKHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBzd2lwZXIsXG4gICAgICAgIGV4dGVuZFBhcmFtczogbW9kdWxlRXh0ZW5kUGFyYW1zKHBhcmFtcywgYWxsTW9kdWxlc1BhcmFtcyksXG4gICAgICAgIG9uOiBzd2lwZXIub24uYmluZChzd2lwZXIpLFxuICAgICAgICBvbmNlOiBzd2lwZXIub25jZS5iaW5kKHN3aXBlciksXG4gICAgICAgIG9mZjogc3dpcGVyLm9mZi5iaW5kKHN3aXBlciksXG4gICAgICAgIGVtaXQ6IHN3aXBlci5lbWl0LmJpbmQoc3dpcGVyKVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuICAgIGNvbnN0IHN3aXBlclBhcmFtcyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMsIGFsbE1vZHVsZXNQYXJhbXMpO1xuXG4gICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuICAgIHN3aXBlci5wYXJhbXMgPSBleHRlbmQoe30sIHN3aXBlclBhcmFtcywgZXh0ZW5kZWREZWZhdWx0cywgcGFyYW1zKTtcbiAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMgPSBleHRlbmQoe30sIHN3aXBlci5wYXJhbXMpO1xuICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbikge1xuICAgICAgT2JqZWN0LmtleXMoc3dpcGVyLnBhcmFtcy5vbikuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICBzd2lwZXIub24oZXZlbnROYW1lLCBzd2lwZXIucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9XG5cbiAgICAvLyBFeHRlbmQgU3dpcGVyXG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICAgIGVuYWJsZWQ6IHN3aXBlci5wYXJhbXMuZW5hYmxlZCxcbiAgICAgIGVsLFxuICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lczogW10sXG4gICAgICAvLyBTbGlkZXNcbiAgICAgIHNsaWRlczogW10sXG4gICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgIHNuYXBHcmlkOiBbXSxcbiAgICAgIHNsaWRlc1NpemVzR3JpZDogW10sXG4gICAgICAvLyBpc0RpcmVjdGlvblxuICAgICAgaXNIb3Jpem9udGFsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIH0sXG4gICAgICBpc1ZlcnRpY2FsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgICB9LFxuICAgICAgLy8gSW5kZXhlc1xuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICByZWFsSW5kZXg6IDAsXG4gICAgICAvL1xuICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICBpc0VuZDogZmFsc2UsXG4gICAgICAvLyBQcm9wc1xuICAgICAgdHJhbnNsYXRlOiAwLFxuICAgICAgcHJldmlvdXNUcmFuc2xhdGU6IDAsXG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgIGNzc092ZXJmbG93QWRqdXN0bWVudCgpIHtcbiAgICAgICAgLy8gUmV0dXJucyAwIHVubGVzcyBgdHJhbnNsYXRlYCBpcyA+IDIqKjIzXG4gICAgICAgIC8vIFNob3VsZCBiZSBzdWJ0cmFjdGVkIGZyb20gY3NzIHZhbHVlcyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKHRoaXMudHJhbnNsYXRlIC8gMiAqKiAyMykgKiAyICoqIDIzO1xuICAgICAgfSxcbiAgICAgIC8vIExvY2tzXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgICAgLy8gVG91Y2ggRXZlbnRzXG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IHtcbiAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdW5kZWZpbmVkLFxuICAgICAgICB0b3VjaFN0YXJ0VGltZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzOiBzd2lwZXIucGFyYW1zLmZvY3VzYWJsZUVsZW1lbnRzLFxuICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgbGFzdENsaWNrVGltZTogMCxcbiAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFZlbG9jaXRpZXNcbiAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgcG9pbnRlcklkOiBudWxsLFxuICAgICAgICB0b3VjaElkOiBudWxsXG4gICAgICB9LFxuICAgICAgLy8gQ2xpY2tzXG4gICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuICAgICAgLy8gVG91Y2hlc1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICB0b3VjaGVzOiB7XG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgIGRpZmY6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJbWFnZXNcbiAgICAgIGltYWdlc1RvTG9hZDogW10sXG4gICAgICBpbWFnZXNMb2FkZWQ6IDBcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3N3aXBlcicpO1xuXG4gICAgLy8gSW5pdFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG4gIGdldERpcmVjdGlvbkxhYmVsKHByb3BlcnR5KSB7XG4gICAgaWYgKHRoaXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6ICdoZWlnaHQnLFxuICAgICAgJ21hcmdpbi10b3AnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgJ21hcmdpbi1ib3R0b20gJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAncGFkZGluZy1yaWdodCc6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAnbWFyZ2luUmlnaHQnOiAnbWFyZ2luQm90dG9tJ1xuICAgIH1bcHJvcGVydHldO1xuICB9XG4gIGdldFNsaWRlSW5kZXgoc2xpZGVFbCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc0VsLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgICBjb25zdCBmaXJzdFNsaWRlSW5kZXggPSBlbGVtZW50SW5kZXgoc2xpZGVzWzBdKTtcbiAgICByZXR1cm4gZWxlbWVudEluZGV4KHNsaWRlRWwpIC0gZmlyc3RTbGlkZUluZGV4O1xuICB9XG4gIGdldFNsaWRlSW5kZXhCeURhdGEoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTbGlkZUluZGV4KHRoaXMuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSAqIDEgPT09IGluZGV4KSk7XG4gIH1cbiAgZ2V0U2xpZGVJbmRleFdoZW5HcmlkKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLnBhcmFtcy5ncmlkICYmIHRoaXMucGFyYW1zLmdyaWQucm93cyA+IDEpIHtcbiAgICAgIGlmICh0aGlzLnBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMucGFyYW1zLmdyaWQucm93cyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLmdyaWQuZmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCAlIE1hdGguY2VpbCh0aGlzLnNsaWRlcy5sZW5ndGggLyB0aGlzLnBhcmFtcy5ncmlkLnJvd3MpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgcmVjYWxjU2xpZGVzKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzRWwsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIHN3aXBlci5zbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICB9XG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnZW5hYmxlJyk7XG4gIH1cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci51bnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2Rpc2FibGUnKTtcbiAgfVxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcywgc3BlZWQpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgocHJvZ3Jlc3MsIDApLCAxKTtcbiAgICBjb25zdCBtaW4gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgY29uc3QgbWF4ID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSAobWF4IC0gbWluKSAqIHByb2dyZXNzICsgbWluO1xuICAgIHN3aXBlci50cmFuc2xhdGVUbyhjdXJyZW50LCB0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnID8gMCA6IHNwZWVkKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG4gIGVtaXRDb250YWluZXJDbGFzc2VzKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgY29uc3QgY2xzID0gc3dpcGVyLmVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihjbGFzc05hbWUgPT4ge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXInKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpID09PSAwO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfY29udGFpbmVyQ2xhc3NlcycsIGNscy5qb2luKCcgJykpO1xuICB9XG4gIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuICcnO1xuICAgIHJldHVybiBzbGlkZUVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihjbGFzc05hbWUgPT4ge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItc2xpZGUnKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpID09PSAwO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuICBlbWl0U2xpZGVzQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gc3dpcGVyLmdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKTtcbiAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgIHNsaWRlRWwsXG4gICAgICAgIGNsYXNzTmFtZXNcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzJywgc2xpZGVFbCwgY2xhc3NOYW1lcyk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzZXMnLCB1cGRhdGVzKTtcbiAgfVxuICBzbGlkZXNQZXJWaWV3RHluYW1pYyh2aWV3LCBleGFjdCkge1xuICAgIGlmICh2aWV3ID09PSB2b2lkIDApIHtcbiAgICAgIHZpZXcgPSAnY3VycmVudCc7XG4gICAgfVxuICAgIGlmIChleGFjdCA9PT0gdm9pZCAwKSB7XG4gICAgICBleGFjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHNsaWRlc0dyaWQsXG4gICAgICBzbGlkZXNTaXplc0dyaWQsXG4gICAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgICAgYWN0aXZlSW5kZXhcbiAgICB9ID0gc3dpcGVyO1xuICAgIGxldCBzcHYgPSAxO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdudW1iZXInKSByZXR1cm4gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbGV0IHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0gPyBNYXRoLmNlaWwoc2xpZGVzW2FjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemUpIDogMDtcbiAgICAgIGxldCBicmVha0xvb3A7XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBNYXRoLmNlaWwoc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSk7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHZpZXcgPT09ICdjdXJyZW50Jykge1xuICAgICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBleGFjdCA/IHNsaWRlc0dyaWRbaV0gKyBzbGlkZXNTaXplc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemUgOiBzbGlkZXNHcmlkW2ldIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplO1xuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwcmV2aW91c1xuICAgICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5WaWV3ID0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gLSBzbGlkZXNHcmlkW2ldIDwgc3dpcGVyU2l6ZTtcbiAgICAgICAgICBpZiAoc2xpZGVJblZpZXcpIHtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3B2O1xuICB9XG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBzbmFwR3JpZCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgLy8gQnJlYWtwb2ludHNcbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cbiAgICBbLi4uc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpXS5mb3JFYWNoKGltYWdlRWwgPT4ge1xuICAgICAgaWYgKGltYWdlRWwuY29tcGxldGUpIHtcbiAgICAgICAgcHJvY2Vzc0xhenlQcmVsb2FkZXIoc3dpcGVyLCBpbWFnZUVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgKiAtMSA6IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVWYWx1ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG4gICAgbGV0IHRyYW5zbGF0ZWQ7XG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiAhcGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMgOiBzd2lwZXIuc2xpZGVzO1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuICBjaGFuZ2VEaXJlY3Rpb24obmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlKSB7XG4gICAgaWYgKG5lZWRVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuICAgIGlmICghbmV3RGlyZWN0aW9uKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT09IGN1cnJlbnREaXJlY3Rpb24gfHwgbmV3RGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgbmV3RGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH1cbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtjdXJyZW50RGlyZWN0aW9ufWApO1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke25ld0RpcmVjdGlvbn1gKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBpZiAobmV3RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgIGlmIChuZWVkVXBkYXRlKSBzd2lwZXIudXBkYXRlKCk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBjaGFuZ2VMYW5ndWFnZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIucnRsICYmIGRpcmVjdGlvbiA9PT0gJ3J0bCcgfHwgIXN3aXBlci5ydGwgJiYgZGlyZWN0aW9uID09PSAnbHRyJykgcmV0dXJuO1xuICAgIHN3aXBlci5ydGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuICAgIHN3aXBlci5ydGxUcmFuc2xhdGUgPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHN3aXBlci5ydGw7XG4gICAgaWYgKHN3aXBlci5ydGwpIHtcbiAgICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ydGxgKTtcbiAgICAgIHN3aXBlci5lbC5kaXIgPSAncnRsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfXJ0bGApO1xuICAgICAgc3dpcGVyLmVsLmRpciA9ICdsdHInO1xuICAgIH1cbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5tb3VudGVkKSByZXR1cm4gdHJ1ZTtcblxuICAgIC8vIEZpbmQgZWxcbiAgICBsZXQgZWwgPSBlbGVtZW50IHx8IHN3aXBlci5wYXJhbXMuZWw7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgfVxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuICAgIGlmIChlbC5wYXJlbnROb2RlICYmIGVsLnBhcmVudE5vZGUuaG9zdCAmJiBlbC5wYXJlbnROb2RlLmhvc3Qubm9kZU5hbWUgPT09IHN3aXBlci5wYXJhbXMuc3dpcGVyRWxlbWVudE5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIHN3aXBlci5pc0VsZW1lbnQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBnZXRXcmFwcGVyU2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gYC4keyhzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyB8fCAnJykudHJpbSgpLnNwbGl0KCcgJykuam9pbignLicpfWA7XG4gICAgfTtcbiAgICBjb25zdCBnZXRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihnZXRXcmFwcGVyU2VsZWN0b3IoKSk7XG4gICAgICAgIC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudENoaWxkcmVuKGVsLCBnZXRXcmFwcGVyU2VsZWN0b3IoKSlbMF07XG4gICAgfTtcbiAgICAvLyBGaW5kIFdyYXBwZXJcbiAgICBsZXQgd3JhcHBlckVsID0gZ2V0V3JhcHBlcigpO1xuICAgIGlmICghd3JhcHBlckVsICYmIHN3aXBlci5wYXJhbXMuY3JlYXRlRWxlbWVudHMpIHtcbiAgICAgIHdyYXBwZXJFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzKTtcbiAgICAgIGVsLmFwcGVuZCh3cmFwcGVyRWwpO1xuICAgICAgZWxlbWVudENoaWxkcmVuKGVsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICAgIHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICAgIGVsLFxuICAgICAgd3JhcHBlckVsLFxuICAgICAgc2xpZGVzRWw6IHN3aXBlci5pc0VsZW1lbnQgJiYgIWVsLnBhcmVudE5vZGUuaG9zdC5zbGlkZVNsb3RzID8gZWwucGFyZW50Tm9kZS5ob3N0IDogd3JhcHBlckVsLFxuICAgICAgaG9zdEVsOiBzd2lwZXIuaXNFbGVtZW50ID8gZWwucGFyZW50Tm9kZS5ob3N0IDogZWwsXG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgICAgLy8gUlRMXG4gICAgICBydGw6IGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCBlbGVtZW50U3R5bGUoZWwsICdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCBlbGVtZW50U3R5bGUoZWwsICdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6IGVsZW1lbnRTdHlsZSh3cmFwcGVyRWwsICdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCdcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpbml0KGVsKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm4gc3dpcGVyO1xuICAgIGNvbnN0IG1vdW50ZWQgPSBzd2lwZXIubW91bnQoZWwpO1xuICAgIGlmIChtb3VudGVkID09PSBmYWxzZSkgcmV0dXJuIHN3aXBlcjtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlSW5pdCcpO1xuXG4gICAgLy8gU2V0IGJyZWFrcG9pbnRcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgQ2xhc3Nlc1xuICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7XG5cbiAgICAvLyBVcGRhdGUgc2l6ZVxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG5cbiAgICAvLyBVcGRhdGUgc2xpZGVzXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IEdyYWIgQ3Vyc29yXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvciAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICAvLyBTbGlkZSBUbyBJbml0aWFsIFNsaWRlXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCAmJiBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsb29wXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBBdHRhY2ggZXZlbnRzXG4gICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpO1xuICAgIGNvbnN0IGxhenlFbGVtZW50cyA9IFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyldO1xuICAgIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgICBsYXp5RWxlbWVudHMucHVzaCguLi5zd2lwZXIuaG9zdEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpKTtcbiAgICB9XG4gICAgbGF6eUVsZW1lbnRzLmZvckVhY2goaW1hZ2VFbCA9PiB7XG4gICAgICBpZiAoaW1hZ2VFbC5jb21wbGV0ZSkge1xuICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGltYWdlRWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgcHJvY2Vzc0xhenlQcmVsb2FkZXIoc3dpcGVyLCBlLnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByZWxvYWQoc3dpcGVyKTtcblxuICAgIC8vIEluaXQgRmxhZ1xuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuXG4gICAgLy8gRW1pdFxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gICAgc3dpcGVyLmVtaXQoJ2FmdGVySW5pdCcpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cbiAgZGVzdHJveShkZWxldGVJbnN0YW5jZSwgY2xlYW5TdHlsZXMpIHtcbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlSW5zdGFuY2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2xlYW5TdHlsZXMgPT09IHZvaWQgMCkge1xuICAgICAgY2xlYW5TdHlsZXMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGVsLFxuICAgICAgd3JhcHBlckVsLFxuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpO1xuXG4gICAgLy8gSW5pdCBGbGFnXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAvLyBEZXRhY2ggZXZlbnRzXG4gICAgc3dpcGVyLmRldGFjaEV2ZW50cygpO1xuXG4gICAgLy8gRGVzdHJveSBsb29wXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhbnVwIHN0eWxlc1xuICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgIGlmIChlbCAmJiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3cmFwcGVyRWwpIHtcbiAgICAgICAgd3JhcHBlckVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgICBzbGlkZUVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVGdWxseVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsIHBhcmFtcy5zbGlkZU5leHRDbGFzcywgcGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICBzbGlkZUVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICBzbGlkZUVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdkZXN0cm95Jyk7XG5cbiAgICAvLyBEZXRhY2ggZW1pdHRlciBldmVudHNcbiAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBzd2lwZXIub2ZmKGV2ZW50TmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgaWYgKHN3aXBlci5lbCAmJiB0eXBlb2Ygc3dpcGVyLmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzd2lwZXIuZWwuc3dpcGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZVByb3BzKHN3aXBlcik7XG4gICAgfVxuICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBleHRlbmREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICAgIGV4dGVuZChleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIH1cbiAgc3RhdGljIGdldCBleHRlbmRlZERlZmF1bHRzKCkge1xuICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIHN0YXRpYyBpbnN0YWxsTW9kdWxlKG1vZCkge1xuICAgIGlmICghU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXykgU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXyA9IFtdO1xuICAgIGNvbnN0IG1vZHVsZXMgPSBTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fO1xuICAgIGlmICh0eXBlb2YgbW9kID09PSAnZnVuY3Rpb24nICYmIG1vZHVsZXMuaW5kZXhPZihtb2QpIDwgMCkge1xuICAgICAgbW9kdWxlcy5wdXNoKG1vZCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyB1c2UobW9kdWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2gobSA9PiBTd2lwZXIuaW5zdGFsbE1vZHVsZShtKSk7XG4gICAgICByZXR1cm4gU3dpcGVyO1xuICAgIH1cbiAgICBTd2lwZXIuaW5zdGFsbE1vZHVsZShtb2R1bGUpO1xuICAgIHJldHVybiBTd2lwZXI7XG4gIH1cbn1cbk9iamVjdC5rZXlzKHByb3RvdHlwZXMpLmZvckVhY2gocHJvdG90eXBlR3JvdXAgPT4ge1xuICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChwcm90b01ldGhvZCA9PiB7XG4gICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gIH0pO1xufSk7XG5Td2lwZXIudXNlKFtSZXNpemUsIE9ic2VydmVyXSk7XG5cbmV4cG9ydCB7IFN3aXBlciBhcyBTLCBkZWZhdWx0cyBhcyBkIH07XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBwdXNoRGF0YSwgd2FpdEVsLCB2aXNpYmlsaXR5T2ZUaW1lIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5pbXBvcnQgcGxheUljb24gZnJvbSAnLi4vaWNvbnMvcmVlbHMtcGxheS5zdmc/cmF3JztcbmltcG9ydCBhcnJvd0ljb24gZnJvbSAnLi4vaWNvbnMvcmVlbHMtYXJyb3cuc3ZnP3Jhdyc7XG5pbXBvcnQgeyBpbmxpbmVTdmcgfSBmcm9tICcuLi9zdmcnO1xuXG5jb25zdCBESVIgPSAnaHR0cHM6Ly9jb252ZXJzaW9ucmF0ZS1zdG9yZS5naXRodWIuaW8vYS1iX2ltYWdlcy9wZXRhbHNhbmRrZWVwc2FrZXMvcmVlbHNfdjInO1xuLyoqIFRoZSB0aHJlZSByZWVscywgaW4gdGhlIG9yZGVyIHRoZSBwcmV2aW91cyB0ZXN0IHNldHRsZWQgb24uICovXG5sZXQgT1JERVIgPSBbMSwgMiwgMywgNF07XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAvLyBUaGUgbW9iaWxlIHRlc3QgaGFkIHRoZSByZWVscyBpbiBhIGRpZmZlcmVudCBvcmRlciwgc28gdGhlIGFuYWx5dGljcyBtYXRjaCB0aGF0LlxuICBPUkRFUiA9IFsyLCAzLCA0LCAxXTtcbn1cbmNvbnN0IENPVU5UID0gT1JERVIubGVuZ3RoO1xuLyoqXG4gKiBTd2lwZXIncyBsb29wIG5lZWRzIG1vcmUgc2xpZGVzIHRoYW4gZml0IG9uIHNjcmVlbiB0byBoYXZlIHNvbWV0aGluZyB0byByb3RhdGUgaW50b1xuICogcGxhY2UsIHNvIHRoZSBzdHJpcCByZXBlYXRzIHRoZSByZWVscyB1cCB0byBhIHdob2xlIG51bWJlciBvZiBwYXNzZXMgYXQgbGVhc3QgbmluZVxuICogc2xpZGVzIGxvbmcuIExvb3AgbW9kZSB0aGVuIG1vdmVzIHRob3NlIG5vZGVzIGFyb3VuZCB0aGUgd3JhcHBlciBhcyB5b3Ugc2Nyb2xsLCB3aGljaFxuICogaXMgd2h5IGV2ZXJ5IGxvb2t1cCBiZWxvdyBnb2VzIHRocm91Z2ggdGhlIERPTSByYXRoZXIgdGhhbiBhIHJlbWVtYmVyZWQgaW5kZXguXG4gKi9cbmNvbnN0IFNMSURFUyA9IE1hdGgubWF4KENPVU5ULCBNYXRoLmNlaWwoOSAvIENPVU5UKSAqIENPVU5UKTtcblxuY29uc3QgRVhQQU5EX0lDT04gPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4nICtcbiAgJzxwYXRoIGQ9XCJNOSA0SDR2NU0yMCA5VjRoLTVNMTUgMjBoNXYtNU00IDE1djVoNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNVwiICcgK1xuICAnc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz4nICtcbiAgJzwvc3ZnPic7XG5cbmNvbnN0IENMT1NFX0lDT04gPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyArXG4gICc8cGF0aCBkPVwiTTEgMSAxMyAxM00xMyAxIDEgMTNcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPicgK1xuICAnPC9zdmc+JztcblxuY29uc3QgQ0hFVlJPTl9JQ09OID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAyOCA0OVwiIGZpbGw9XCJub25lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyArXG4gICc8cGF0aCBkPVwiTTI1LjgzIDEuNDEgMi44MyAyNC40MWwyMyAyM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjRcIiBmaWxsPVwibm9uZVwiIC8+JyArXG4gICc8L3N2Zz4nO1xuXG4vKiogVGhlIEpTWCBmYWN0b3J5IGNhbGxzIGNyZWF0ZUVsZW1lbnQsIHdoaWNoIGNhbm5vdCBidWlsZCBuYW1lc3BhY2VkIFNWRyDigJQgcGFyc2UgaXQgaW5zdGVhZC4gKi9cbmNvbnN0IEljb24gPSAoc3ZnOiBzdHJpbmcsIGNsczogc3RyaW5nLCBuYW1lc3BhY2UgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWwuY2xhc3NOYW1lID0gY2xzO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgZWwuaW5uZXJIVE1MID0gbmFtZXNwYWNlID8gaW5saW5lU3ZnKHN2ZykgOiBzdmc7XG4gIHJldHVybiBlbDtcbn07XG5cbi8qKlxuICogUmVlbHMgd2Ugc3RhcnRlZCBvciBzdG9wcGVkIG91cnNlbHZlcyDigJQgd2hlbiB0aGUgc3RyaXAgc2Nyb2xscywgd2hlbiBhIHNpYmxpbmcgdGFrZXNcbiAqIG92ZXIsIHdoZW4gdGhlIGNhcnQgb3BlbnMuIFRoZSBgcGxheWAvYHBhdXNlYCBldmVudHMgdGhleSByYWlzZSBhcmUgaW5kaXN0aW5ndWlzaGFibGVcbiAqIGZyb20gYSByZWFsIHRhcCBvbiB0aGUgbmF0aXZlIGNvbnRyb2xzLCBzbyB3aXRob3V0IHRoaXMgc2V0IGV2ZXJ5IGhvdXNla2VlcGluZyBwYXVzZVxuICogd291bGQgcmVwb3J0IGl0c2VsZiBhcyB0aGUgdmlzaXRvciBwYXVzaW5nIHRoZSB2aWRlby5cbiAqL1xuY29uc3QgcHJvZ3JhbW1hdGljID0gbmV3IFdlYWtTZXQ8SFRNTFZpZGVvRWxlbWVudD4oKTtcblxuY29uc3Qgc3RhcnRWaWRlbyA9IChlbDogSFRNTFZpZGVvRWxlbWVudCkgPT4ge1xuICBwcm9ncmFtbWF0aWMuYWRkKGVsKTtcbiAgZWwucGxheSgpXG4gICAgLmNhdGNoKCgpID0+IHt9KVxuICAgIC5maW5hbGx5KCgpID0+IHByb2dyYW1tYXRpYy5kZWxldGUoZWwpKTtcbn07XG5cbi8qKiBUaGUgbWF0Y2hpbmcgYHBhdXNlYCBsaXN0ZW5lciBjbGVhcnMgdGhlIGZsYWc7IGl0IGlzIG5vdCBjbGVhcmVkIGhlcmUuICovXG5jb25zdCBzdG9wVmlkZW8gPSAoZWw6IEhUTUxWaWRlb0VsZW1lbnQpID0+IHtcbiAgaWYgKGVsLnBhdXNlZCkgcmV0dXJuO1xuICBwcm9ncmFtbWF0aWMuYWRkKGVsKTtcbiAgZWwucGF1c2UoKTtcbn07XG5cbi8qKiBSZXdpbmRzIGEgc2xpZGUgYmFjayB0byBpdHMgcG9zdGVyLiAqL1xuY29uc3QgcmVzZXQgPSAoc2xpZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gc2xpZGUucXVlcnlTZWxlY3RvcigndmlkZW8nKSE7XG4gIHN0b3BWaWRlbyhlbCk7XG4gIGVsLmN1cnJlbnRUaW1lID0gMDtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKCdjb250cm9scycpO1xuICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1wbGF5aW5nJyk7XG59O1xuXG5jb25zdCBwbGF5aW5nID0gKHJvb3Q6IFBhcmVudE5vZGUpID0+XG4gIEFycmF5LmZyb20ocm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmNycy1yZWVsLmlzLXBsYXlpbmcnKSk7XG5cbi8qKlxuICogVGhlIHJlZWxzIGJsb2NrIGZyb20gdGhlIGRlc2lnbjogYSBTd2lwZXIgc3RyaXAgb2YgbmluZS1ieS1zaXh0ZWVuIHByZXZpZXdzIHRoYXQgcGxheVxuICogaW4gcGxhY2UsIHBsdXMgYSBsaWdodGJveCBmb3Igd2F0Y2hpbmcgb25lIGZ1bGwtc2l6ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IFJlZWxzID0gKCkgPT4ge1xuICBjb25zdCBTbGlkZSA9IChpZDogbnVtYmVyLCBwb3NpdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgc2xpZGUgPSAoXG4gICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlIGNycy1yZWVsXCIgZGF0YS1pbmRleD17U3RyaW5nKGlkKX0gZGF0YS1wb3NpdGlvbj17U3RyaW5nKHBvc2l0aW9uKX0+XG4gICAgICAgIHsvKiBUaGUgR0lGIGlzIGEgbXVsdGktbWVnYWJ5dGUgZmFsbGJhY2s7IGV2ZXJ5IGJyb3dzZXIgdGhhdCBtYXR0ZXJzIHRha2VzIHRoZSBBVklGLiAqL31cbiAgICAgICAgPHBpY3R1cmUgY2xhc3M9XCJjcnMtcmVlbF9fcG9zdGVyXCI+XG4gICAgICAgICAgPHNvdXJjZSBzcmNzZXQ9e2Ake0RJUn0vcHJldmlld18ke2lkfS5hdmlmYH0gdHlwZT1cImltYWdlL2F2aWZcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtESVJ9L3ByZXZpZXdfJHtpZH0uZ2lmYH0gYWx0PVwiXCIgbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIHByZWxvYWQ9XCJtZXRhZGF0YVwiXG4gICAgICAgICAgcGxheXNpbmxpbmVcbiAgICAgICAgICAvLyBEZXNrdG9wIHBsYXlzIGlubGluZSB3aXRoIG5hdGl2ZSBjb250cm9scywgc28gaXRzIG93biBmdWxsc2NyZWVuIGJ1dHRvbiB3b3VsZFxuICAgICAgICAgIC8vIGNvbXBldGUgd2l0aCBvdXJzOyBvbiBtb2JpbGUgdGhlIG5hdGl2ZSBvbmUgaXMgdGhlIGJldHRlciBleHBlcmllbmNlLlxuICAgICAgICAgIGNvbnRyb2xzTGlzdD17YG5vZG93bmxvYWQgbm9yZW1vdGVwbGF5YmFjayBub3BsYXliYWNrcmF0ZSR7XG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NyA/ICcgbm9mdWxsc2NyZWVuJyA6ICcnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmVcbiAgICAgICAgPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPXtgJHtESVJ9L3ZpZGVvXyR7aWR9Lm1wNGB9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLXJlZWxfX3BsYXlcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17YFBsYXkgcmVlbCAke3Bvc2l0aW9ufWB9IC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImNycy1yZWVsX19leHBhbmRcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9e2BXYXRjaCByZWVsICR7cG9zaXRpb259IGZ1bGwgc2l6ZWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgc2xpZGUucXVlcnlTZWxlY3RvcignLmNycy1yZWVsX19wbGF5JykhLmFwcGVuZChJY29uKHBsYXlJY29uLCAnY3JzLXJlZWxfX3BsYXktaWNvbicsIHRydWUpKTtcbiAgICBzbGlkZS5xdWVyeVNlbGVjdG9yKCcuY3JzLXJlZWxfX2V4cGFuZCcpIS5pbm5lckhUTUwgPSBFWFBBTkRfSUNPTjtcblxuICAgIC8vIExvb3AgbW9kZSBtb3ZlcyB0aGVzZSBub2RlcyBiZXR3ZWVuIHRoZSBlbmRzIG9mIHRoZSB3cmFwcGVyLCBzbyB0aGUgbGlzdGVuZXJzIHRoYXRcbiAgICAvLyBtYXR0ZXIgbGl2ZSBvbiB0aGUgbGlzdCBhbmQgbWF0Y2ggYnkgdGFyZ2V0LiBPbmx5IHRoZSBwZXItdmlkZW8gYW5hbHl0aWNzLCB3aGljaFxuICAgIC8vIG11c3Qgc2VlIHRoZSBlbGVtZW50J3Mgb3duIHBsYXkvcGF1c2UgZXZlbnRzLCBhcmUgYm91bmQgaGVyZS5cbiAgICBjb25zdCBlbCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykhO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCAoKSA9PiB7XG4gICAgICBpZiAocHJvZ3JhbW1hdGljLmhhcyhlbCkpIHJldHVybjtcbiAgICAgIHB1c2hEYXRhKCdleHBfcmVlbHNfcGxheScsIGBQbGF5IFZpZGVvIC0gJHtwb3NpdGlvbn1gLCAnY2xpY2snLCAncmVlbHMgc2VjdGlvbicpO1xuICAgIH0pO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgaWYgKHByb2dyYW1tYXRpYy5oYXMoZWwpKSB7XG4gICAgICAgIHByb2dyYW1tYXRpYy5kZWxldGUoZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBBIHJlZWwgdGhhdCByYW4gdG8gdGhlIGVuZCByYWlzZXMgYHBhdXNlYCB0b287IHRoYXQgaXMgbm90IHRoZSB2aXNpdG9yIHN0b3BwaW5nIGl0LlxuICAgICAgaWYgKGVsLmVuZGVkKSByZXR1cm47XG4gICAgICBwdXNoRGF0YSgnZXhwX3JlZWxzX3BhdXNlJywgYFBhdXNlIFZpZGVvIC0gJHtwb3NpdGlvbn1gLCAnY2xpY2snLCAncmVlbHMgc2VjdGlvbicpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNsaWRlO1xuICB9O1xuXG4gIGNvbnN0IGxpc3QgPSAoPGRpdiBjbGFzcz1cInN3aXBlci13cmFwcGVyIGNycy1wZHAtcmVlbHNfX2xpc3RcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG4gIC8vIEFuYWx5dGljcyBjb3VudHMgdGhlIHJlZWwsIG5vdCB0aGUgY29weSBvZiBpdCB0aGF0IGhhcHBlbmVkIHRvIGJlIG9uIHNjcmVlbi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBTTElERVM7IGkrKykge1xuICAgIGNvbnN0IGF0ID0gaSAlIENPVU5UO1xuICAgIGxpc3QuYXBwZW5kKFNsaWRlKE9SREVSW2F0XSwgYXQgKyAxKSk7XG4gIH1cblxuICBjb25zdCBzdHJpcCA9IChcbiAgICA8ZGl2IGNsYXNzPVwic3dpcGVyIGNycy1wZHAtcmVlbHNfX3N0cmlwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkN1c3RvbWVyIHJlZWxzXCI+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCBkb3RzID0gKDxkaXYgY2xhc3M9XCJjcnMtcGRwLXJlZWxzX19kb3RzXCIgLz4pIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBwcmV2ID0gKFxuICAgIDxidXR0b24gY2xhc3M9XCJjcnMtcGRwLXJlZWxzX19hcnJvdyBjcnMtcGRwLXJlZWxzX19hcnJvdy0tcHJldlwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgcmVlbFwiIC8+XG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNvbnN0IG5leHQgPSAoXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX2Fycm93IGNycy1wZHAtcmVlbHNfX2Fycm93LS1uZXh0XCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJOZXh0IHJlZWxcIiAvPlxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBwcmV2LmFwcGVuZChJY29uKGFycm93SWNvbiwgJ2Nycy1wZHAtcmVlbHNfX2Fycm93LWljb24nLCB0cnVlKSk7XG4gIG5leHQuYXBwZW5kKEljb24oYXJyb3dJY29uLCAnY3JzLXBkcC1yZWVsc19fYXJyb3ctaWNvbicsIHRydWUpKTtcblxuICBjb25zdCBuYXYgPSAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX25hdlwiPlxuICAgICAge3ByZXZ9XG4gICAgICB7ZG90c31cbiAgICAgIHtuZXh0fVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHJvb3QgPSAoXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjcnMtcGRwLXJlZWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXBkcC1yZWVsc19faGVhZFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJjcnMtcGRwLXJlZWxzX190aXRsZVwiPlRydXN0ZWQgYnkgMjUsMDAwKyBmYW1pbGllcyB0byBrZWVwIHRoZWlyIGxvdmVkIG9uZXMgY2xvc2U8L2gyPlxuICAgICAgICA8cCBjbGFzcz1cImNycy1wZHAtcmVlbHNfX3N1YnRpdGxlXCI+XG4gICAgICAgICAgUmVhbCBzdG9yaWVzIGZyb20gcGVvcGxlIHdobyBjYXJyeSBzb21lb25lIHRoZXkgbG92ZSDigJQgZXZlcnkgc2luZ2xlIGRheVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdHJpcH1cbiAgICAgIHtuYXZ9XG4gICAgPC9zZWN0aW9uPlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHN0b3BBbGwgPSAoKSA9PiBwbGF5aW5nKGxpc3QpLmZvckVhY2gocmVzZXQpO1xuXG4gIC8qKiBXaGljaCByZWVsIGlzIGNlbnRyZWQg4oCUIHJlYWQgb2ZmIHRoZSBET00sIGJlY2F1c2UgbG9vcCBtb2RlIHJlb3JkZXJzIHRoZSBzbGlkZXMuICovXG4gIGNvbnN0IGFjdGl2ZVBvc2l0aW9uID0gKCkgPT5cbiAgICBsaXN0LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwuc3dpcGVyLXNsaWRlLWFjdGl2ZScpPy5kYXRhc2V0LnBvc2l0aW9uID8/ICcnO1xuXG4gIC8vIFN3aXBlciBtZWFzdXJlcyBzbGlkZSB3aWR0aHMsIHNvIGl0IGNhbiBvbmx5IHJ1biBvbmNlIHRoZSBzdHJpcCBpcyBvbiB0aGUgcGFnZS5cbiAgLy8gYHZpc2liaWxpdHlPZlRpbWVgIHdhaXRzIHdpdGggaXQ6IGl0IHJlc29sdmVzIGl0cyBzZWxlY3RvciBpbW1lZGlhdGVseSBhbmQgZG9lc1xuICAvLyBub3RoaW5nIGF0IGFsbCBpZiB0aGUgc2VjdGlvbiBoYXMgbm90IGJlZW4gYXBwZW5kZWQgeWV0LlxuICB3YWl0RWwoJy5jcnMtcGRwLXJlZWxzX19zdHJpcCAuY3JzLXJlZWxfX3Bvc3RlcicpLnRoZW4oKCkgPT4ge1xuICAgIHZpc2liaWxpdHlPZlRpbWUoJy5jcnMtcGRwLXJlZWxzJywgJ2V4cF9yZWVsc192aXNpYmlsaXR5JywgJ3JlZWxzIHNlY3Rpb24nLCAnUmVlbHMnLCAzMDAwLCAwLjMpO1xuXG4gICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihzdHJpcCwge1xuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgLy8gRmVlZHMgdGhlIGBzd2lwZXItc2xpZGUtdmlzaWJsZWAgY2xhc3MgdGhhdCB0aGUgaGFuZC1vZmYgYmVsb3cgcmVhZHMuXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgbG9uZ1N3aXBlc1JhdGlvOiAwLjEsXG4gICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVlbCBwbGF5aW5nIGluIGEgc2xpZGUgdGhhdCBsb29wIG1vZGUgaGFzIGp1c3QgY2FycmllZCBvZmYtc2NyZWVuIGlzIGhhbmRlZCB0b1xuICAgICAqIHRoZSBvbi1zY3JlZW4gY29weSBvZiB0aGUgc2FtZSByZWVsLCBhdCB0aGUgc2FtZSB0aW1lc3RhbXAg4oCUIHNvIHRoZSBzdG9yeSBrZWVwc1xuICAgICAqIHJ1bm5pbmcgdW5kZXIgdGhlIHZpc2l0b3IncyB0aHVtYiBpbnN0ZWFkIG9mIHN0b3BwaW5nIGRlYWQgbWlkLXNlbnRlbmNlLlxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRPZmYgPSAoKSA9PlxuICAgICAgbGlzdFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbC5pcy1wbGF5aW5nOm5vdCguc3dpcGVyLXNsaWRlLXZpc2libGUpJylcbiAgICAgICAgLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWwgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpITtcbiAgICAgICAgICBjb25zdCBhdCA9IGVsLmN1cnJlbnRUaW1lO1xuICAgICAgICAgIGNvbnN0IHdhc1BhdXNlZCA9IGVsLnBhdXNlZDtcbiAgICAgICAgICBjb25zdCB0d2luID0gbGlzdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcbiAgICAgICAgICAgIGAuY3JzLXJlZWxbZGF0YS1pbmRleD1cIiR7c2xpZGUuZGF0YXNldC5pbmRleH1cIl0uc3dpcGVyLXNsaWRlLXZpc2libGVgLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAodHdpbikge1xuICAgICAgICAgICAgY29uc3QgaGVpciA9IHR3aW4ucXVlcnlTZWxlY3RvcigndmlkZW8nKSE7XG4gICAgICAgICAgICB0d2luLmNsYXNzTGlzdC5hZGQoJ2lzLXBsYXlpbmcnKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NykgaGVpci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG4gICAgICAgICAgICBoZWlyLmN1cnJlbnRUaW1lID0gYXQ7XG4gICAgICAgICAgICBpZiAoIXdhc1BhdXNlZCkgc3RhcnRWaWRlbyhoZWlyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNldChzbGlkZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gT25lIGRvdCBwZXIgcmVlbCwgbm90IHBlciBzbGlkZSDigJQgdGhlIGNvcGllcyBhcmUgdGhlIHNhbWUgdGhyZWUgc3Rvcmllcy5cbiAgICBPUkRFUi5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBjb25zdCBkb3QgPSAoXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjcnMtcGRwLXJlZWxzX19kb3RcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17YEdvIHRvIHJlZWwgJHtpICsgMX1gfSAvPlxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpID09PSAwKSBkb3QuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChpKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICAgICAgcHVzaERhdGEoXG4gICAgICAgICAgICAnZXhwX3JlZWxzX3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgYFBhZ2luYXRpb24gLSAke2FjdGl2ZVBvc2l0aW9uKCl9YCxcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAncmVlbHMgc2VjdGlvbicsXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgZG90cy5hcHBlbmQoZG90KTtcbiAgICB9KTtcblxuICAgIHN3aXBlci5vbignc2xpZGVyTW92ZScsIGhhbmRPZmYpO1xuICAgIHN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJywgaGFuZE9mZik7XG5cbiAgICBzd2lwZXIub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgYXQgPSBzd2lwZXIucmVhbEluZGV4ICUgQ09VTlQ7XG4gICAgICBkb3RzXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JzLXBkcC1yZWVsc19fZG90JylcbiAgICAgICAgLmZvckVhY2goKGVsLCBpKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBpID09PSBhdCkpO1xuICAgICAgLy8gU2Nyb2xsaW5nIGEgcmVlbCBvdXQgb2YgdGhlIG1pZGRsZSBhYmFuZG9ucyBpdDsgaXQgbXVzdCBub3Qga2VlcCB0YWxraW5nIG9mZiB0byB0aGUgc2lkZS5cbiAgICAgIHN0b3BBbGwoKTtcbiAgICB9KTtcblxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgICAgcHVzaERhdGEoJ2V4cF9yZWVsc19uYXZfYXJyb3cnLCBgQXJyb3cgTGVmdCAtICR7YWN0aXZlUG9zaXRpb24oKX1gLCAnY2xpY2snLCAncmVlbHMgc2VjdGlvbicpLFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICAgIHB1c2hEYXRhKCdleHBfcmVlbHNfbmF2X2Fycm93JywgYEFycm93IFJpZ2h0IC0gJHthY3RpdmVQb3NpdGlvbigpfWAsICdjbGljaycsICdyZWVscyBzZWN0aW9uJyksXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQSBmbGljayBvbiBhIG5hcnJvdyBzY3JlZW4gY2FuIGNhcnJ5IHRoZSBsb29wIHNldmVyYWwgc2xpZGVzIGF0IG9uY2UsIHdoaWNoIHJlYWRzIGFzXG4gICAgICogdGhlIHN0cmlwIGx1cmNoaW5nIHBhc3QgdGhlIHN0b3J5IHRoZSB2aXNpdG9yIHdhcyBhaW1pbmcgYXQuIEFueXRoaW5nIGxvbmdlciB0aGFuIG9uZVxuICAgICAqIHNsaWRlIGlzIHB1bGxlZCBiYWNrIHRvIHRoZSBuZWlnaGJvdXIgdGhleSBzd2lwZWQgdG93YXJkcy5cbiAgICAgKi9cbiAgICBsZXQgZnJvbTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgc3dpcGVyLm9uKCd0b3VjaFN0YXJ0JywgKCkgPT4gKGZyb20gPSBzd2lwZXIucmVhbEluZGV4KSk7XG4gICAgc3dpcGVyLm9uKCd0b3VjaEVuZCcsICgpID0+IHtcbiAgICAgIGlmIChmcm9tID09PSBudWxsKSByZXR1cm47XG4gICAgICBjb25zdCB3YXMgPSBmcm9tO1xuICAgICAgZnJvbSA9IG51bGw7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgICAgIGlmIChub3cgPT09IHdhcykgcmV0dXJuO1xuXG4gICAgICAgIHB1c2hEYXRhKCdleHBfcmVlbHNfc3dpcGUnLCBgU3dpcGUgLSAke2FjdGl2ZVBvc2l0aW9uKCl9YCwgJ290aGVyJywgJ3JlZWxzIHNlY3Rpb24nKTtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBsaXN0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgLy8gU2hvcnRlc3Qgc2lnbmVkIGRpc3RhbmNlIGFyb3VuZCB0aGUgbG9vcCwgc28gYSB3cmFwIGNvdW50cyBhcyBvbmUgc3RlcCwgbm90IGVpZ2h0LlxuICAgICAgICBsZXQgZGVsdGEgPSAoKChub3cgLSB3YXMpICUgdG90YWwpICsgdG90YWwpICUgdG90YWw7XG4gICAgICAgIGlmIChkZWx0YSA+IHRvdGFsIC8gMikgZGVsdGEgLT0gdG90YWw7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPD0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHN3aXBlci5zbGlkZVRvTG9vcCgoKCh3YXMgKyBNYXRoLnNpZ24oZGVsdGEpKSAlIHRvdGFsKSArIHRvdGFsKSAlIHRvdGFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0IGV4cGFuZCA9IHRhcmdldC5jbG9zZXN0KCcuY3JzLXJlZWxfX2V4cGFuZCcpO1xuICAgIGlmIChleHBhbmQpIHtcbiAgICAgIGNvbnN0IHNsaWRlID0gZXhwYW5kLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwnKSE7XG4gICAgICBjb25zdCBlbCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykhO1xuICAgICAgcHVzaERhdGEoJ2V4cF9yZWVsc19mdWxsc2NyZWVuJywgJ0Z1bGxzY3JlZW4nLCAnY2xpY2snLCAncmVlbHMgc2VjdGlvbicpO1xuICAgICAgLy8gSGFuZCB0aGUgcmVlbCBvdmVyIHJhdGhlciB0aGFuIGxlYXZpbmcgaXQgcGxheWluZyDigJQgYW5kIGF1ZGlibGUg4oCUIGJlaGluZCB0aGUgc2NyaW0uXG4gICAgICBvcGVuTGlnaHRib3goTnVtYmVyKHNsaWRlLmRhdGFzZXQuaW5kZXgpLCBlbC5jdXJyZW50VGltZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFwcGluZyBhIHBsYXlpbmcgcmVlbCBwYXVzZXMgaXQg4oCUIG9uIG1vYmlsZSB0aGVyZSBhcmUgbm8gbmF0aXZlIGNvbnRyb2xzIHRvIGRvIGl0LlxuICAgIGNvbnN0IHZpZGVvID0gdGFyZ2V0LmNsb3Nlc3QoJ3ZpZGVvJyk7XG4gICAgaWYgKHZpZGVvKSB7XG4gICAgICBpZiAodmlkZW8ucGF1c2VkKSByZXR1cm47XG4gICAgICBjb25zdCBzbGlkZSA9IHZpZGVvLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwnKSE7XG4gICAgICAvLyBSZXBvcnRlZCBoZXJlIHJhdGhlciB0aGFuIGZyb20gdGhlIGBwYXVzZWAgbGlzdGVuZXI6IGByZXNldGAgc3RvcHMgdGhlIHJlZWxcbiAgICAgIC8vIHRocm91Z2ggdGhlIHByb2dyYW1tYXRpYyBmbGFnLCB3aGljaCBpcyBleGFjdGx5IHdoYXQgc2lsZW5jZXMgdGhhdCBsaXN0ZW5lci5cbiAgICAgIC8vIEl0IHN0YXlzIGJvdW5kIGZvciB0aGUgbmF0aXZlIGNvbnRyb2xzLCB3aGljaCBhcmUgdGhlIG90aGVyIHdheSBpbi5cbiAgICAgIHB1c2hEYXRhKFxuICAgICAgICAnZXhwX3JlZWxzX3BhdXNlJyxcbiAgICAgICAgYFBhdXNlIFZpZGVvIC0gJHtzbGlkZS5kYXRhc2V0LnBvc2l0aW9ufWAsXG4gICAgICAgICdjbGljaycsXG4gICAgICAgICdyZWVscyBzZWN0aW9uJyxcbiAgICAgICk7XG4gICAgICByZXNldChzbGlkZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xpY2tpbmcgdGhlIHN0aWxsIHBvc3RlciBpcyB0aGUgc2FtZSBhZmZvcmRhbmNlIGFzIHRoZSBwbGF5IGJ1dHRvbi5cbiAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcuY3JzLXJlZWxfX3Bvc3RlcicpICYmICF0YXJnZXQuY2xvc2VzdCgnLmNycy1yZWVsX19wbGF5JykpIHJldHVybjtcblxuICAgIGNvbnN0IHNsaWRlID0gdGFyZ2V0LmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwnKSE7XG4gICAgY29uc3QgZWwgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpITtcbiAgICBwbGF5aW5nKGxpc3QpLmZvckVhY2goKG90aGVyKSA9PiBvdGhlciAhPT0gc2xpZGUgJiYgcmVzZXQob3RoZXIpKTtcbiAgICBpZiAoZWwucGF1c2VkKSBlbC5jdXJyZW50VGltZSA9IDA7XG4gICAgcHVzaERhdGEoJ2V4cF9yZWVsc19wbGF5JywgYFBsYXkgVmlkZW8gLSAke3NsaWRlLmRhdGFzZXQucG9zaXRpb259YCwgJ2NsaWNrJywgJ3JlZWxzIHNlY3Rpb24nKTtcbiAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdpcy1wbGF5aW5nJyk7XG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIG9ubHkgd2hlcmUgdGhlcmUgaXMgcm9vbSBmb3IgdGhlbTsgdGhlIDE1NXB4IHNsaWRlIGhhcyBub25lLlxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NykgZWwuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpO1xuICAgIHN0YXJ0VmlkZW8oZWwpO1xuICB9KTtcblxuICAvLyBgZW5kZWRgIGRvZXMgbm90IGJ1YmJsZSwgc28gaXQgaXMgY2F1Z2h0IG9uIHRoZSB3YXkgZG93bi5cbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdlbmRlZCcsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ1ZJREVPJykgcmVzZXQoZWwuY2xvc2VzdDxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbCcpISk7XG4gICAgfSxcbiAgICB0cnVlLFxuICApO1xuXG4gIC8vIFJlZWxzIGxlZnQgYmVoaW5kIGJ5IGEgc2Nyb2xsIHNob3VsZCBub3Qga2VlcCBwbGF5aW5nIChhbmQgdGFsa2luZykgb2ZmLXNjcmVlbi5cbiAgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiBlbnRyaWVzLmZvckVhY2goKGUpID0+IGUuaXNJbnRlcnNlY3RpbmcgfHwgc3RvcEFsbCgpKSwge1xuICAgIHRocmVzaG9sZDogMCxcbiAgfSkub2JzZXJ2ZShzdHJpcCk7XG5cbiAgLy8gTm9yIHNob3VsZCBvbmUga2VlcCBydW5uaW5nIGJlaGluZCB0aGUgY2FydCBkcmF3ZXIgdGhlIHZpc2l0b3IganVzdCBvcGVuZWQuXG4gIHdhaXRFbCgnY2FydC1kcmF3ZXInKS50aGVuKChkcmF3ZXIpID0+IHtcbiAgICBsZXQgb3BlbiA9IGRyYXdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IGRyYXdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgaWYgKG5vdyAmJiAhb3Blbikgc3RvcEFsbCgpO1xuICAgICAgb3BlbiA9IG5vdztcbiAgICB9KS5vYnNlcnZlKGRyYXdlciwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG4vKipcbiAqIFRoZSBmdWxsLXNpemUgcGxheWVyLiBOb3QgaW4gdGhlIGRlc2lnbiwgc28gaXQga2VlcHMgdGhlIHByZXZpb3VzIHRlc3QncyBzaGFwZSDigJRcbiAqIHNjcmltLCBjaGV2cm9ucywgY2xvc2Ug4oCUIHJlcGFpbnRlZCBpbiB0aGUgcmVkZXNpZ24ncyBwYWxldHRlLiBCdWlsdCBvbmNlIGFuZCByZXVzZWQ6XG4gKiBzd2FwcGluZyB0aGUgc291cmNlIG9uIG9uZSBlbGVtZW50IGlzIHdoYXQgbGV0cyB0aGUgYXJyb3dzIHN0ZXAgYmV0d2VlbiByZWVscyB3aXRob3V0XG4gKiB0ZWFyaW5nIHRoZSBwbGF5ZXIgZG93biBhbmQgYmFjayB1cC5cbiAqL1xubGV0IGxpZ2h0Ym94OiB7XG4gIHJvb3Q6IEhUTUxFbGVtZW50O1xuICB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcbiAgb3BlbjogKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikgPT4gdm9pZDtcbn0gfCBudWxsID0gbnVsbDtcblxuY29uc3QgYnVpbGRMaWdodGJveCA9ICgpID0+IHtcbiAgbGV0IGlkID0gT1JERVJbMF07XG5cbiAgY29uc3QgZWwgPSAoXG4gICAgPHZpZGVvXG4gICAgICBjb250cm9sc1xuICAgICAgcGxheXNpbmxpbmVcbiAgICAgIHByZWxvYWQ9XCJtZXRhZGF0YVwiXG4gICAgICBjb250cm9sc0xpc3Q9XCJub2Rvd25sb2FkIG5vcmVtb3RlcGxheWJhY2sgbm9wbGF5YmFja3JhdGUgbm9mdWxsc2NyZWVuXCJcbiAgICAgIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlXG4gICAgLz5cbiAgKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIGNvbnN0IHNwaW5uZXIgPSAoPGRpdiBjbGFzcz1cImNycy1saWdodGJveF9fc3Bpbm5lclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+KSBhcyBIVE1MRWxlbWVudDtcbiAgLy8gUmVlbHMgc3RyZWFtIGZyb20gR2l0SHViIFBhZ2VzLCBzbyBhIGNvbGQgc3RhcnQgb24gYSBzbG93IGNvbm5lY3Rpb24gaXMgYSBibGFua1xuICAvLyByZWN0YW5nbGUgZm9yIGEgc2Vjb25kIG9yIHR3byB1bmxlc3MgaXQgaXMgc3BlbGxlZCBvdXQuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsICgpID0+IHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJykpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgKCkgPT4gc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpO1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIHN0b3BWaWRlbyhlbCk7XG4gICAgZWwuY3VycmVudFRpbWUgPSAwO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY3JzLWRyYXdlci1vcGVuJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2Nycy1saWdodGJveC0tb3BlbicpO1xuICB9O1xuXG4gIC8qKiBFc2NhcGUgaXMgbm90IGEgY2xpY2ssIHNvIGl0IGNhcnJpZXMgbm8gZXZlbnQgb2YgaXRzIG93bi4gKi9cbiAgY29uc3QgY2xvc2VXaXRoID0gKGV2ZW50OiBzdHJpbmcsIGRlc2M6IHN0cmluZykgPT4ge1xuICAgIGNsb3NlKCk7XG4gICAgcHVzaERhdGEoZXZlbnQsIGRlc2MsICdjbGljaycsICdyZWVscyBtb2RhbCcpO1xuICB9O1xuXG4gIC8qKiBXYWxrcyB0aGUgcmVlbHMgYnkgaWQsIHRoZSB3YXkgdGhlIHJlZmVyZW5jZSBwbGF5ZXIgZG9lcyDigJQgMSDihpIgMiDihpIgMyDihpIgMS4gKi9cbiAgY29uc3Qgc3RlcCA9IChieTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYXQgPSBpZCArIGJ5O1xuICAgIG9wZW4oYXQgPCAxID8gQ09VTlQgOiBhdCA+IENPVU5UID8gMSA6IGF0LCAwKTtcbiAgICBwdXNoRGF0YShcbiAgICAgICdleHBfcmVlbHNfYXJyb3cnLFxuICAgICAgYnkgPiAwID8gJ0Fycm93IFJpZ2h0JyA6ICdBcnJvdyBMZWZ0JyxcbiAgICAgICdjbGljaycsXG4gICAgICAncmVlbHMgbW9kYWwnLFxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGNsb3NlKCk7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykgc3RlcCgtMSk7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHN0ZXAoMSk7XG4gIH07XG5cbiAgY29uc3QgcHJldiA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1saWdodGJveF9fYXJyb3cgY3JzLWxpZ2h0Ym94X19hcnJvdy0tcHJldlwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyByZWVsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHN0ZXAoLTEpfVxuICAgIC8+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IG5leHQgPSAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJjcnMtbGlnaHRib3hfX2Fycm93IGNycy1saWdodGJveF9fYXJyb3ctLW5leHRcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBhcmlhLWxhYmVsPVwiTmV4dCByZWVsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHN0ZXAoMSl9XG4gICAgLz5cbiAgKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgY2xvc2VCdG4gPSAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJjcnMtbGlnaHRib3hfX2Nsb3NlXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlV2l0aCgnZXhwX3JlZWxzX21vZGFsX2Z1bGxzY3JlZW4nLCAnRnVsbHNjcmVlbiBDbG9zZScpfVxuICAgIC8+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG4gIHByZXYuaW5uZXJIVE1MID0gQ0hFVlJPTl9JQ09OO1xuICBuZXh0LmlubmVySFRNTCA9IENIRVZST05fSUNPTjtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gQ0xPU0VfSUNPTjtcblxuICBjb25zdCByb290ID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtbGlnaHRib3hcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsPVwiQ3VzdG9tZXIgcmVlbFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNycy1saWdodGJveF9fb3ZlcmxheVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlV2l0aCgnZXhwX3JlZWxzX292ZXJsYXknLCAnT3ZlcmxheSBjbG9zZScpfVxuICAgICAgLz5cbiAgICAgIHtwcmV2fVxuICAgICAgPGRpdiBjbGFzcz1cImNycy1saWdodGJveF9fc3RhZ2VcIj5cbiAgICAgICAge2Nsb3NlQnRufVxuICAgICAgICB7c3Bpbm5lcn1cbiAgICAgICAge2VsfVxuICAgICAgPC9kaXY+XG4gICAgICB7bmV4dH1cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCBvcGVuID0gKG5leHQ6IG51bWJlciwgdGltZTogbnVtYmVyKSA9PiB7XG4gICAgLy8gT25seSByZWZldGNoIHdoZW4gdGhlIHJlZWwgYWN0dWFsbHkgY2hhbmdlczsgdGhlIGFycm93cyBzdGVwLCB0aGV5IGRvIG5vdCByZWxvYWQuXG4gICAgaWYgKG5leHQgIT09IGlkIHx8ICFlbC5zcmMpIHtcbiAgICAgIGlkID0gbmV4dDtcbiAgICAgIGVsLnNyYyA9IGAke0RJUn0vdmlkZW9fJHtpZH0ubXA0YDtcbiAgICB9XG4gICAgZWwuY3VycmVudFRpbWUgPSB0aW1lO1xuXG4gICAgLy8gU3RlcHBpbmcgYmV0d2VlbiByZWVscyBnb2VzIHRocm91Z2ggaGVyZSB0b28sIHNvIHRoZSBzY3JpbSBhbmQgdGhlIGtleSBoYW5kbGVyXG4gICAgLy8gYXJlIG9ubHkgc2V0IHVwIG9uIHRoZSB3YXkgaW4uIE9wZW5pbmcgaXRzZWxmIHJhaXNlcyBubyBldmVudCBvZiBpdHMgb3duIOKAlCBpdCBpc1xuICAgIC8vIGFscmVhZHkgY292ZXJlZCBieSB0aGUgYF9mdWxsc2NyZWVuYCBjbGljayB0aGF0IGdvdCB1cyBoZXJlLlxuICAgIGlmICghcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nycy1saWdodGJveC0tb3BlbicpKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjcnMtZHJhd2VyLW9wZW4nKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByb290LmNsYXNzTGlzdC5hZGQoJ2Nycy1saWdodGJveC0tb3BlbicpKTtcbiAgICB9XG4gICAgc3RhcnRWaWRlbyhlbCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG4gIHJldHVybiB7IHJvb3QsIHZpZGVvOiBlbCwgb3BlbiB9O1xufTtcblxuY29uc3Qgb3BlbkxpZ2h0Ym94ID0gKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikgPT4ge1xuICAvLyBFdmVyeSByZWVsIGluIHRoZSBzdHJpcCBzdG9wcyDigJQgdGhlIGxpZ2h0Ym94IHRha2VzIHRoZSBzb3VuZCB3aXRoIGl0LlxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmNycy1yZWVsLmlzLXBsYXlpbmcnKVxuICAgIC5mb3JFYWNoKHJlc2V0KTtcblxuICBsaWdodGJveCA/Pz0gYnVpbGRMaWdodGJveCgpO1xuICBsaWdodGJveC5vcGVuKGlkLCB0aW1lKTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHsgZ2V0U2VsZWN0LCBpc1JlYWxPcHRpb24sIHR5cGUgUHJvZHVjdCB9IGZyb20gJy4uL3Byb2R1Y3QnO1xuaW1wb3J0IHsgdHlwZSBBbmFseXRpY3MsIGJ1aWxkR3VpZGUsIGlzU3dhdGNoT3B0aW9uLCBPcHRpb25CbG9jaywgc3dhdGNoRm9yIH0gZnJvbSAnLi9idXlib3gnO1xuaW1wb3J0IHsgQ0xPU0VfSUNPTiB9IGZyb20gJy4vbW9kYWwnO1xuXG4vKiogRXZlcnl0aGluZyByYWlzZWQgZnJvbSB0aGlzIGJhciDigJQgY2FyZHMsIGd1aWRlIGxpbmtzLCB0aGUgcGlja2VycyB0aGVtc2VsdmVzLiAqL1xuY29uc3QgU1RJQ0tZX0FOQUxZVElDUzogQW5hbHl0aWNzID0geyBwcmVmaXg6ICdleHBfcGRwX3N0aWNreScsIGxvYzogJ1N0aWNreSBCYXInIH07XG5cbi8qKlxuICogU2VsZWN0aW5nIGEgdmFsdWUgZnJvbSBoZXJlIGRyaXZlcyB0aGUgaG9zdCdzIDxzZWxlY3Q+LCBhbmQgdHdvIHVucmVsYXRlZCBiaXRzIG9mXG4gKiBEYXduJ3Mgb3duIHRoZW1lIEpTIHJlYWN0IGJ5IHNjcm9sbGluZyB0aGUgcGFnZSBiYWNrIHVwIHRvIHRoZSBidXkgYm94IOKAlCBoYXJtbGVzc1xuICogd2hlbiBkcml2ZW4gZnJvbSB0aGUgYnV5IGJveCBpdHNlbGYgKGFscmVhZHkgYXQgdGhhdCBzY3JvbGwgcG9zaXRpb24pLCBidXQgZnJvbSB0aGVcbiAqIHN0aWNreSBiYXIgaXQgcmVhZHMgYXMgdGhlIHdob2xlIHBhZ2UganVtcGluZyB0byB0aGUgdG9wOlxuICogIC0gYG1lZGlhLWdhbGxlcnkuanNgIGNhbGxzIGB3aW5kb3cuc2Nyb2xsVG8oe3RvcCwgYmVoYXZpb3I6J3Ntb290aCd9KWAgdG8gYnJpbmcgdGhlXG4gKiAgICBnYWxsZXJ5IGludG8gdmlldyB3aGVuZXZlciB0aGUgdmFyaWFudCdzIGZlYXR1cmVkIGltYWdlIGNoYW5nZXMgKG1hdGVyaWFsIG9ubHkpIOKAlFxuICogICAgYW5kLCBvbiB0aGUgd2F5IHRoZXJlLCBgcHJldmVudFN0aWNreUhlYWRlcigpYCBhbHNvIHRvdWNoZXMgYHdpbmRvdy5zY3JvbGxUb2AsIHNvXG4gKiAgICBhIFwiZGlzYXJtIG9uIGZpcnN0IGNhbGxcIiBpbnRlcmNlcHRvciBnZXRzIHVzZWQgdXAgYmVmb3JlIHRoZSByZWFsIGp1bXAuXG4gKiAgLSBgcHJvZHVjdC1pbmZvLmpzYCBjYWxscyBgLmZvY3VzKClgIOKAlCB3aXRoIG5vIGBwcmV2ZW50U2Nyb2xsYCDigJQgb24gdGhlICh2aXN1YWxseVxuICogICAgaGlkZGVuKSBuYXRpdmUgPHNlbGVjdD4gb25jZSBpdHMgYXN5bmMgcmUtcmVuZGVyIGxhbmRzLCBhbmQgZm9jdXNpbmcgYW5cbiAqICAgIG9mZi1zY3JlZW4gZWxlbWVudCBzY3JvbGxzIGl0IGludG8gdmlldyAoZXZlcnkgb3B0aW9uKS5cbiAqIFNvIGJvdGggYXJlIHN1cHByZXNzZWQgZm9yIGEgZml4ZWQgd2luZG93IGluc3RlYWQgb2YgXCJ1bnRpbCBmaXJzdCB1c2VcIjogbG9uZyBlbm91Z2hcbiAqIHRvIGNvdmVyIERhd24ncyBhc3luYyByZS1yZW5kZXIsIHNob3J0IGVub3VnaCB0aGF0IGl0IGNhbid0IG91dGxpdmUgdGhlIGludGVyYWN0aW9uLlxuICogUmUtZW50cmFudCAocGlja2luZyBhIHNlY29uZCB2YWx1ZSB3aGlsZSB0aGUgZmlyc3QncyB3aW5kb3cgaXMgc3RpbGwgb3BlbiBleHRlbmRzIGl0XG4gKiByYXRoZXIgdGhhbiBjYXB0dXJpbmcgaXRzIG93biBhbHJlYWR5LW92ZXJyaWRkZW4gZnVuY3Rpb25zIGFzIFwib3JpZ2luYWxcIikuXG4gKi9cbmxldCByZXN0b3JlRGF3blNjcm9sbDogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xubGV0IHNjcm9sbFN1cHByZXNzVGltZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuY29uc3Qgc3VwcHJlc3NEYXduU2Nyb2xsSnVtcCA9ICgpID0+IHtcbiAgaWYgKCFyZXN0b3JlRGF3blNjcm9sbCkge1xuICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsVG8gPSB3aW5kb3cuc2Nyb2xsVG8uYmluZCh3aW5kb3cpO1xuICAgIGNvbnN0IG9yaWdpbmFsRm9jdXMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXM7XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8gPSAoKCkgPT4ge30pIGFzIHR5cGVvZiB3aW5kb3cuc2Nyb2xsVG87XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBvcHRzPzogRm9jdXNPcHRpb25zKSB7XG4gICAgICBvcmlnaW5hbEZvY3VzLmNhbGwodGhpcywgeyAuLi5vcHRzLCBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICByZXN0b3JlRGF3blNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyA9IG9yaWdpbmFsU2Nyb2xsVG87XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMgPSBvcmlnaW5hbEZvY3VzO1xuICAgICAgcmVzdG9yZURhd25TY3JvbGwgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxuXG4gIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsU3VwcHJlc3NUaW1lcik7XG4gIHNjcm9sbFN1cHByZXNzVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByZXN0b3JlRGF3blNjcm9sbD8uKCksIDIwMDApO1xufTtcblxuLyoqXG4gKiBOZWl0aGVyIGd1aWRlIGVtaXRzIGFuIG9wZW4vY2xvc2UgZXZlbnQsIHNvIGVhY2ggaXMgcmVhZCBvZmYgdGhlIGZsYWcgaXQgbGVhdmVzIG9uXG4gKiB0aGUgcGFnZS4gVGhleSBhcmUga2VwdCBhcGFydCBvbiBwdXJwb3NlOiBhbiBgaXNPcGVuYCB0aGF0IE9SZWQgdGhlIHR3byB0b2dldGhlclxuICogd291bGQgaG9sZCB0aGUgYmFyIGJhY2sgd2hlbmV2ZXIgKmVpdGhlciogZmxhZyB3YXMgc2V0LCBzbyBhIHN0YWxlIGAuY3VzdF9ub3RpYCBsZWZ0XG4gKiBvbiB0aGUgaGVhZGVyIGJ5IHRoZSB0aGVtZSBpcyBlbm91Z2ggdG8gbWFrZSB0aGUgTWF0ZXJpYWwgR3VpZGUgbmV2ZXIgcmVhZCBhcyBjbG9zZWQuXG4gKi9cbi8qKiBPdXIgb3duIGRyYXdlciwgZnJvbSBgb3Blbk1vZGFsYC4gKi9cbmNvbnN0IG1hdGVyaWFsR3VpZGVJc09wZW4gPSAoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnY3JzLWRyYXdlci1vcGVuJyk7XG5cbi8qKiBUaGUgdGhlbWUncyBSaW5nIFNpemUgR3VpZGUg4oCUIHRoZSBmbGFnIGl0IHNldHMgd2hpbGUgI2N1c3RvbV9ub3RpZmljYXRpb25zIGlzIHVwLiAqL1xuY29uc3Qgc2l6ZUd1aWRlSXNPcGVuID0gKCkgPT4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1oZWFkZXIuY3VzdF9ub3RpJyk7XG5cbi8qKlxuICogVGhlIHRoZW1lJ3MgY2FydCBkcmF3ZXIgKERhd24ncyBgY2FydC1kcmF3ZXIuanNgKSwgd2hpY2ggZmxhZ3MgaXRzZWxmIGBhY3RpdmVgIGEgdGlja1xuICogYWZ0ZXIgb3BlbmluZyBhbmQgZHJvcHMgdGhlIGNsYXNzIG9uIGNsb3NlLiBSZWFkIG9mZiB0aGUgZWxlbWVudCBldmVyeSB0aW1lIHJhdGhlclxuICogdGhhbiBoZWxkOiB0aGUgZHJhd2VyIHJlLXJlbmRlcnMgaXRzIG93biBzZWN0aW9ucyBhZnRlciBldmVyeSBjYXJ0IG11dGF0aW9uLlxuICovXG5jb25zdCBjYXJ0RHJhd2VySXNPcGVuID0gKCkgPT4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYXJ0LWRyYXdlci5hY3RpdmUnKTtcblxuLyoqXG4gKiBSdW5zIGBkb25lYCBvbmNlIHRoZSBndWlkZSBgaXNPcGVuYCBkZXNjcmliZXMsIG9wZW5lZCBqdXN0IG5vdywgaGFzIGNsb3NlZCBhZ2Fpbi5cbiAqIFRoZSBmbGFnIGNhbiBsYW5kIGFzeW5jaHJvbm91c2x5IOKAlCB0aGUgdGhlbWUgcmVidWlsZHMgaXRzIGRyYXdlciBiZWZvcmUgZmxhZ2dpbmcgaXQg4oCUXG4gKiBzbyBcImNsb3NlZFwiIG9ubHkgY291bnRzIGFmdGVyIHRoZSBndWlkZSBoYXMgYmVlbiBzZWVuIG9wZW47IHVudGlsIHRoZW4gYSBmYWxsYmFja1xuICogdGltZXIgY292ZXJzIHRoZSBjYXNlIHdoZXJlIHRoZSBjbGljayBvcGVuZWQgbm90aGluZyBhdCBhbGwsIHdoaWNoIHdvdWxkIG90aGVyd2lzZVxuICogc3RyYW5kIHRoZSBiYXIgb2ZmLXNjcmVlbiBmb3IgdGhlIHJlc3Qgb2YgdGhlIHNlc3Npb24uXG4gKlxuICogV2F0Y2hlZCBmcm9tIHRoZSBkb2N1bWVudCBkb3duIHJhdGhlciB0aGFuIG9uIHRoZSB0d28gZmxhZy1jYXJyeWluZyBub2RlczogdGhlIHRoZW1lXG4gKiByZS1yZW5kZXJzIGl0cyBoZWFkZXIgc2VjdGlvbiwgYW5kIGFuIG9ic2VydmVyIGJvdW5kIHRvIHRoZSBub2RlIHRoYXQgY2FycmllZCB0aGVcbiAqIGZsYWcgYXQgY2xpY2sgdGltZSB3b3VsZCBnbyBkZWFmIHRoZSBtb21lbnQgdGhhdCBub2RlIHdhcyByZXBsYWNlZC4gVGhlIGNhbGxiYWNrIGlzXG4gKiB0d28gY2xhc3MgY2hlY2tzLCBhbmQgdGhlIG9ic2VydmVyIG9ubHkgbGl2ZXMgYXMgbG9uZyBhcyB0aGUgZ3VpZGUgaXMgdXAuXG4gKi9cbmNvbnN0IG9uR3VpZGVDbG9zZWQgPSAoaXNPcGVuOiAoKSA9PiBib29sZWFuLCBkb25lOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGxldCBvcGVuZWQgPSBmYWxzZTtcbiAgbGV0IHRpbWVyOiBudW1iZXI7XG5cbiAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBkb25lKCk7XG4gIH07XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgaWYgKGlzT3BlbigpKSB7XG4gICAgICBvcGVuZWQgPSB0cnVlO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSBlbHNlIGlmIChvcGVuZWQpIHtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuICAgIHN1YnRyZWU6IHRydWUsXG4gIH0pO1xuXG4gIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gb3BlbmVkIHx8IGZpbmlzaCgpLCAxMDAwKTtcbn07XG5cbi8qKlxuICogUmVkZXNpZ25lZCBzdGlja3kgYWRkLXRvLWNhcnQgYmFyLiBSZXBsYWNlcyB0aGUgXCJTdGlja3kgQWRkIFRvIENhcnRcIiBhcHAncyBvd24gYmFyXG4gKiAoI3NhdGNiX2JhciwgaGlkZGVuIGluIENTUykg4oCUIHRoYXQgYXBwIG9ubHkgY2xvbmVzIHRoZSBzdWJtaXQgYnV0dG9uLCB3aXRoIG5vIHdheSB0b1xuICogY2hhbmdlIG1hdGVyaWFsIG9yIHNpemUsIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCB0aGlzIGFkZHMuIE1hdGVyaWFsL3NpemUgcG9wb3ZlcnNcbiAqIHJldXNlIGBPcHRpb25CbG9ja2AsIHNvIGV2ZXJ5IGNhcmQsIHN0YXRlIGFuZCBjbGljayBoYW5kbGVyIGlzIGlkZW50aWNhbCB0byB0aGUgYnV5XG4gKiBib3g7IHRoZSB0d28gc3RheSBpbiBzeW5jIGJlY2F1c2UgYm90aCB1bHRpbWF0ZWx5IGp1c3QgZHJpdmUgdGhlIGhvc3QncyA8c2VsZWN0PnMuXG4gKi9cbmV4cG9ydCBjb25zdCBTdGlja3lCYXIgPSAoXG4gIHByb2R1Y3Q6IFByb2R1Y3QsXG4gIGdldEltYWdlOiAoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG9uTWF0ZXJpYWxHdWlkZTogKGZyb206IEFuYWx5dGljcykgPT4gdm9pZCxcbiAgb25TaXplR3VpZGU6IChmcm9tOiBBbmFseXRpY3MpID0+IHZvaWQsXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4pID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JzLWluZm8gLnByb2R1Y3RfX3RpdGxlIGgxJyk/LnRleHRDb250ZW50Py50cmltKCkgPz8gJyc7XG5cbiAgY29uc3QgdGh1bWIgPSAoPGltZyBjbGFzcz1cImNycy1zdGlja3lfX3RodW1iXCIgYWx0PVwiXCIgLz4pIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIGBnZXRJbWFnZWAgcmVzb2x2ZXMgdGhlIGltYWdlIHRoZSAqc2VsZWN0ZWQgb3B0aW9uKiBkcml2ZXMsIHdoaWNoIGlzIG5vdGhpbmcgb24gYVxuICAgKiBwcm9kdWN0IHdpdGggbm8gb3B0aW9uczogdGhlcmUgaXMgbm8gPHNlbGVjdD4gdG8gcmVhZCBhIHZhbHVlIGZyb20sIGFuZCBpdHMgc2luZ2xlXG4gICAqIHZhcmlhbnQgdXN1YWxseSBjYXJyaWVzIG5vIGBmZWF0dXJlZF9pbWFnZWAgZWl0aGVyLiBUaGUgZ2FsbGVyeSdzIG93biBmaXJzdCBpbWFnZVxuICAgKiBzdGFuZHMgaW4g4oCUIHRoZSBzYW1lIHBpY3R1cmUgdGhlIHBhZ2UgaXMgYWxyZWFkeSBzaG93aW5nLlxuICAgKlxuICAgKiBXcml0dGVuIHRocm91Z2ggYSBndWFyZCBiZWNhdXNlIGFuIGVtcHR5IGBzcmNgIGlzIG5vdCBcIm5vIGltYWdlXCI6IGl0IHJlc29sdmVzXG4gICAqIGFnYWluc3QgdGhlIHBhZ2UgVVJMLCBhbmQgdGhlIGJhciByZW5kZXJzIGEgYnJva2VuLWltYWdlIGljb24gaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgKi9cbiAgY29uc3Qgc2V0VGh1bWIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEltYWdlRWxlbWVudD4oJy5wcm9kdWN0X19tZWRpYS1pdGVtIGltZycpO1xuICAgIGNvbnN0IHNyYyA9IGdldEltYWdlKCkgPz8gKGdhbGxlcnkgPyBnYWxsZXJ5LmN1cnJlbnRTcmMgfHwgZ2FsbGVyeS5zcmMgOiB1bmRlZmluZWQpO1xuICAgIGlmIChzcmMpIHRodW1iLnNyYyA9IHNyYztcbiAgfTtcblxuICBzZXRUaHVtYigpO1xuXG4gIGNvbnN0IHN5bmNzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIC8qKiBgbmFtZWAgZG91YmxlcyBhcyB0aGUgY2xvc2UgZXZlbnQncyBHQTQgbGFiZWwg4oCUIHNhbWUgd29yZGluZyBhcyB0aGUgb3BlbiBldmVudC4gKi9cbiAgdHlwZSBQaWNrZXIgPSB7IHRyaWdnZXI6IEhUTUxFbGVtZW50OyBwb3BvdmVyOiBIVE1MRWxlbWVudDsgbmFtZTogc3RyaW5nIH07XG5cbiAgLy8gT25seSBvbmUgcG9wb3ZlciBvcGVuIGF0IGEgdGltZTsgY2xvc2luZyBpcyBzaGFyZWQgYnkgdGhlIG91dHNpZGUtY2xpY2sgbGlzdGVuZXIsXG4gIC8vIHRoZSB0cmlnZ2VyJ3Mgb3duIHRvZ2dsZSwgc2VsZWN0aW5nIGEgdmFsdWUgaW5zaWRlIHRoZSBwb3BvdmVyLCBhbmQgdGhlIGJhclxuICAvLyBzY3JvbGxpbmcgYXdheS4gYGhhcy1wb3BvdmVyYCBpcyB3aGF0IGRyaXZlcyB0aGUgYmFja2Ryb3AgKGFuZCwgb24gbW9iaWxlLCB0aGVcbiAgLy8gc2Nyb2xsIGxvY2spLlxuICAvL1xuICAvLyBgcmVwb3J0YCBtYXJrcyB0aGUgY2xvc2VzIHRoYXQgYXJlIHRoZSB1c2VyIGRpc21pc3NpbmcgdGhlIHBvcG92ZXIg4oCUIHRoZSB0cmlnZ2VyJ3NcbiAgLy8gb3duIHRvZ2dsZSBhbmQgYSBjbGljay90YXAgb3V0c2lkZSAoaW5jbC4gdGhlIG1vYmlsZSBiYWNrZHJvcCkuIFRoZSBvdGhlciBwYXRoc1xuICAvLyBzdGF5IHNpbGVudDogcGlja2luZyBhIHZhbHVlIGFscmVhZHkgZmlyZXMgaXRzIG93biBzZWxlY3QgZXZlbnQsIHN0ZXBwaW5nIGFzaWRlXG4gIC8vIGZvciBhIGd1aWRlIHJlb3BlbnMgdGhlIHNhbWUgcG9wb3ZlciBhZnRlcndhcmRzLCBhbmQgdGhlIHNjcm9sbC1hd2F5IGNsb3NlIGlzXG4gIC8vIHBhc3NpdmUsIG5vdCBhIGRlY2lzaW9uLlxuICBsZXQgb3BlblBpY2tlcjogUGlja2VyIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3QgY2xvc2VQaWNrZXIgPSAocmVwb3J0ID0gZmFsc2UpID0+IHtcbiAgICBpZiAoIW9wZW5QaWNrZXIpIHJldHVybjtcbiAgICBvcGVuUGlja2VyLnRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgIG9wZW5QaWNrZXIudHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBvcGVuUGlja2VyLnBvcG92ZXIuaGlkZGVuID0gdHJ1ZTtcbiAgICBpZiAocmVwb3J0KVxuICAgICAgcHVzaERhdGEoYCR7U1RJQ0tZX0FOQUxZVElDUy5wcmVmaXh9X3BpY2tlcl9jbG9zZWAsIG9wZW5QaWNrZXIubmFtZSwgJ2NsaWNrJywgU1RJQ0tZX0FOQUxZVElDUy5sb2MpO1xuICAgIG9wZW5QaWNrZXIgPSBudWxsO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXBvcG92ZXInKTtcbiAgfTtcblxuICBjb25zdCBzaG93UGlja2VyID0gKHBpY2tlcjogUGlja2VyKSA9PiB7XG4gICAgcGlja2VyLnRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgIHBpY2tlci50cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgcGlja2VyLnBvcG92ZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgb3BlblBpY2tlciA9IHBpY2tlcjtcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ2hhcy1wb3BvdmVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFueXRoaW5nIHRoYXQgdGFrZXMgb3ZlciB0aGUgc2NyZWVuIHBhcmtzIHRoZSBiYXI6IGl0IGlzIGZpeGVkLCBhbmQgYWJvdmUgdGhlXG4gICAqIHRoZW1lJ3Mgb3duIG92ZXJsYXlzIGluIGl0cyBzdGFja2luZyBjb250ZXh0LCBzbyBpdCB3b3VsZCBvdGhlcndpc2Ugc2l0IG9uIHRvcCBvZlxuICAgKiB0aGVtLiBDb3VudGVkIHJhdGhlciB0aGFuIHRvZ2dsZWQsIGJlY2F1c2UgYGlzLXN1c3BlbmRlZGAgaGFzIHR3byBpbmRlcGVuZGVudFxuICAgKiBvd25lcnMg4oCUIGEgZ3VpZGUgb3BlbmVkIGZyb20gYSBwb3BvdmVyLCBhbmQgdGhlIGNhcnQgZHJhd2VyIOKAlCBhbmQgZWl0aGVyIGNhbiBvcGVuXG4gICAqIG92ZXIgdGhlIG90aGVyICh0aGUgZHJhd2VyIGlzIHJlYWNoYWJsZSBmcm9tIHRoZSBoZWFkZXIgd2hpbGUgYSBndWlkZSBpcyB1cCksIHNvXG4gICAqIHdoaWNoZXZlciBjbG9zZXMgZmlyc3QgbXVzdCBub3QgYnJpbmcgdGhlIGJhciBiYWNrIG92ZXIgdGhlIG9uZSBzdGlsbCBzdGFuZGluZy5cbiAgICpcbiAgICogVGhlIHJldmVhbCBvYnNlcnZlciBpcyBmcm96ZW4gZm9yIHRoZSBkdXJhdGlvbiByYXRoZXIgdGhhbiBjb25zdWx0ZWQgb24gdGhlIHdheVxuICAgKiBiYWNrOiBldmVyeSBvbmUgb2YgdGhlc2Ugb3ZlcmxheXMgbG9ja3MgdGhlIHBhZ2UgYnkgZmxpcHBpbmcgYGJvZHlgIHRvXG4gICAqIGBvdmVyZmxvdzogaGlkZGVuYCwgd2hpY2ggcmUtbGF5cyBvdXQgdGhlIHNjcm9sbGVyIGFuZCBjYW4gZmlyZSB0aGUgb2JzZXJ2ZXIgd2l0aFxuICAgKiB0aGUgYnV5IGJveCBiYWNrIGluIHZpZXcsIHNvIHRoZSBiYXIncyBvd24gYGlzLXZpc2libGVgIGlzIG5vdCB0cnVzdHdvcnRoeSB3aGlsZVxuICAgKiBvbmUgaXMgdXAuIFRoZSBmcmVlemUgY2FuIGxlYXZlIHRoYXQgc3RhdGUgc3RhbGUsIHNvIHRoZSBsYXN0IHJlbGVhc2UgcmUtb2JzZXJ2ZXNcbiAgICogdGhlIHRhcmdldCB0byBmb3JjZSBhIGZyZXNoIHJlYWRpbmcuXG4gICAqL1xuICBsZXQgc3VzcGVuZGVycyA9IDA7XG5cbiAgY29uc3Qgc3VzcGVuZCA9ICgpID0+IHtcbiAgICBzdXNwZW5kZXJzICs9IDE7XG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdpcy1zdXNwZW5kZWQnKTtcbiAgfTtcblxuICBjb25zdCByZXN1bWUgPSAoKSA9PiB7XG4gICAgc3VzcGVuZGVycyA9IE1hdGgubWF4KDAsIHN1c3BlbmRlcnMgLSAxKTtcbiAgICBpZiAoc3VzcGVuZGVycykgcmV0dXJuO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VzcGVuZGVkJyk7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIGd1aWRlIGNvbWVzIGJhY2sgdGhlIHdheSBpdCBsZWZ0LCB3aXRoIHRoZSBzYW1lIHBvcG92ZXIgb3BlbjogY29uc3VsdGluZyB0aGVcbiAgICogZ3VpZGUgaXMgdGhlIG1pZGRsZSBvZiBwaWNraW5nIGEgdmFsdWUsIG5vdCB0aGUgZW5kIG9mIGl0LCBzbyB0aGUgY2FyZHMgaGF2ZSB0byBiZVxuICAgKiB0aGVyZSB0byBwaWNrIGZyb20gb24gdGhlIHdheSBiYWNrLiBUaGUgZnJlc2ggcmVhZGluZyBgcmVzdW1lYCBmb3JjZXMgdGhlbiBjbG9zZXNcbiAgICogdGhlIHBvcG92ZXIgYWdhaW4gaW4gdGhlIG9uZSBjYXNlIHRoYXQgd2FycmFudHMgaXQg4oCUIHRoZSBwYWdlIHJlYWxseSBkaWQgZW5kIHVwXG4gICAqIGJhY2sgYXQgdGhlIGJ1eSBib3gsIHdoZXJlIHRoZSBzYW1lIGNhcmRzIGFyZSBhbHJlYWR5IG9uIHNjcmVlbi5cbiAgICovXG4gIGNvbnN0IHN0ZXBBc2lkZUZvckd1aWRlID0gKGlzT3BlbjogKCkgPT4gYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHJlb3BlbiA9IG9wZW5QaWNrZXI7XG4gICAgY2xvc2VQaWNrZXIoKTtcbiAgICBzdXNwZW5kKCk7XG4gICAgb25HdWlkZUNsb3NlZChpc09wZW4sICgpID0+IHtcbiAgICAgIC8vIERlZmVycmVkIHBhc3QgdGhlIGNsaWNrIHRoYXQgY2xvc2VkIHRoZSBndWlkZS4gT3VyIG93biBkcmF3ZXIgY2xvc2VzXG4gICAgICAvLyBzeW5jaHJvbm91c2x5IGluc2lkZSB0aGF0IGNsaWNrLCBhbmQgTXV0YXRpb25PYnNlcnZlciBjYWxsYmFja3MgbGFuZCBiZXR3ZWVuXG4gICAgICAvLyBsaXN0ZW5lcnMgbWlkLWRpc3BhdGNoIOKAlCBzbyByZW9wZW5pbmcgaGVyZSBhbmQgbGV0dGluZyB0aGUgc2FtZSBjbGljayBidWJibGVcbiAgICAgIC8vIG9uIHRvIHRoZSBkb2N1bWVudCB3b3VsZCBoaXQgdGhlIG91dHNpZGUtY2xpY2sgbGlzdGVuZXIgYW5kIGNsb3NlIHRoZSBwb3BvdmVyXG4gICAgICAvLyByaWdodCBiYWNrLiAoVGhlIHRoZW1lJ3MgZHJhd2VyIGhhcHBlbnMgdG8gZHJvcCBpdHMgZmxhZyBhc3luY2hyb25vdXNseSwgd2hpY2hcbiAgICAgIC8vIGlzIHdoeSBvbmx5IHRoZSBNYXRlcmlhbCBHdWlkZSBwYXRoIGV2ZXIgbG9zdCB0aGUgcmFjZS4pXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChyZW9wZW4pIHNob3dQaWNrZXIocmVvcGVuKTtcbiAgICAgICAgcmVzdW1lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwaWNrZXJzID0gcHJvZHVjdC5vcHRpb25zLmZsYXRNYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAvLyBTaG9waWZ5J3Mgc3ludGhldGljIGBUaXRsZSAvIERlZmF1bHQgVGl0bGVgIG9uIGFuIG9wdGlvbi1sZXNzIHByb2R1Y3Qg4oCUIG5vdGhpbmdcbiAgICAvLyB0byBwaWNrLCBzbyB0aGUgYmFyIGNhcnJpZXMgdGhlIHRpdGxlIGFuZCB0aGUgQ1RBIGFsb25lLiBTZWUgYGlzUmVhbE9wdGlvbmAuXG4gICAgaWYgKCFpc1JlYWxPcHRpb24ob3B0aW9uKSkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3Qgc3dhdGNoZXMgPSBpc1N3YXRjaE9wdGlvbihvcHRpb24ubmFtZSk7XG4gICAgLy8gT25seSB0aGlzIGJhcidzIGNvcHkgb2YgdGhlIGxpbmtzIHN0ZXBzIHRoZSBiYXIgYXNpZGU7IHRoZSBidXkgYm94J3Mgb3duIGd1aWRlXG4gICAgLy8gbGlua3MgZ2V0IHRoZSBjYWxsYmFja3MgdW50b3VjaGVkLlxuICAgIGNvbnN0IGd1aWRlID0gYnVpbGRHdWlkZShcbiAgICAgIG9wdGlvbixcbiAgICAgIChmcm9tKSA9PiB7XG4gICAgICAgIHN0ZXBBc2lkZUZvckd1aWRlKG1hdGVyaWFsR3VpZGVJc09wZW4pO1xuICAgICAgICBvbk1hdGVyaWFsR3VpZGUoZnJvbSk7XG4gICAgICB9LFxuICAgICAgKGZyb20pID0+IHtcbiAgICAgICAgc3RlcEFzaWRlRm9yR3VpZGUoc2l6ZUd1aWRlSXNPcGVuKTtcbiAgICAgICAgb25TaXplR3VpZGUoZnJvbSk7XG4gICAgICB9LFxuICAgICAgU1RJQ0tZX0FOQUxZVElDUyxcbiAgICApO1xuICAgIGNvbnN0IGJsb2NrID0gT3B0aW9uQmxvY2socHJvZHVjdCwgb3B0aW9uLCBpbmRleCwgZ3VpZGUsIFNUSUNLWV9BTkFMWVRJQ1MpO1xuICAgIHN5bmNzLnB1c2goYmxvY2suc3luYyk7XG5cbiAgICAvLyBNb2JpbGUgb25seSAoaGlkZGVuIGluIENTUyBlbHNld2hlcmUpOiB0aGVyZSB0aGUgcG9wb3ZlciBpcyBhIGZ1bGwtd2lkdGggc2hlZXRcbiAgICAvLyBjb3ZlcmluZyB0aGUgcGFnZSwgc28gdGhlIGJhY2tkcm9wIHRoYXQgZGlzbWlzc2VzIGl0IG9uIGRlc2t0b3AgaXMgbW9zdGx5IGJlaGluZFxuICAgIC8vIHRoZSBzaGVldCBpdHNlbGYgYW5kIHJlYWRzIGFzIG5vIHdheSBvdXQuIENvdW50ZWQgYXMgYSBkaXNtaXNzYWwsIHNhbWUgYXMgdGhlXG4gICAgLy8gdHJpZ2dlcidzIG93biB0b2dnbGUsIHNvIGl0IHJlcG9ydHMgdGhlIGNsb3NlLiBJbnNpZGUgYC5jcnMtc3RpY2t5X19waWNrZXJgLCBzb1xuICAgIC8vIHRoZSBvdXRzaWRlLWNsaWNrIGxpc3RlbmVyIGxlYXZlcyB0aGUgY2xpY2sgYWxvbmUuXG4gICAgY29uc3QgY2xvc2VCdG4gPSAoXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLXN0aWNreV9fY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17KCkgPT4gY2xvc2VQaWNrZXIodHJ1ZSl9IC8+XG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9IENMT1NFX0lDT047XG5cbiAgICBjb25zdCBwb3BvdmVyID0gKFxuICAgICAgPGRpdiBjbGFzcz1cImNycy1zdGlja3lfX3BvcG92ZXJcIiBoaWRkZW4+XG4gICAgICAgIHtjbG9zZUJ0bn1cbiAgICAgICAge2Jsb2NrLnJvb3R9XG4gICAgICA8L2Rpdj5cbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gQ2FwdHVyZSBwaGFzZSwgc28gdGhpcyBydW5zIGJlZm9yZSB0aGUgY2FyZCdzIG93biBoYW5kbGVyIChib3VuZCBpblxuICAgIC8vIGBPcHRpb25CbG9ja2ApIGZpcmVzIGBzZXRPcHRpb25gIGFuZCwgdGhyb3VnaCBpdCwgRGF3bidzIGNoYW5nZSBoYW5kbGVyLlxuICAgIHBvcG92ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCdbZGF0YS12YWx1ZV0nKSkgc3VwcHJlc3NEYXduU2Nyb2xsSnVtcCgpO1xuICAgICAgfSxcbiAgICAgIHsgY2FwdHVyZTogdHJ1ZSB9LFxuICAgICk7XG5cbiAgICAvLyBQaWNraW5nIGEgdmFsdWUgY2xvc2VzIHRoZSBwb3BvdmVyIOKAlCB0aGUgdHJpZ2dlcidzIG93biBsYWJlbCByZWZsZWN0cyB0aGUgY2hhbmdlLlxuICAgIHBvcG92ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtdmFsdWVdJykpIGNsb3NlUGlja2VyKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb3QgPSBzd2F0Y2hlcyA/ICgoPHNwYW4gY2xhc3M9XCJjcnMtc3RpY2t5X19kb3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPikgYXMgSFRNTEVsZW1lbnQpIDogbnVsbDtcbiAgICBjb25zdCBsYWJlbCA9ICg8c3BhbiBjbGFzcz1cImNycy1zdGlja3lfX3RyaWdnZXItbGFiZWxcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz17YGNycy1zdGlja3lfX3RyaWdnZXIgJHtzd2F0Y2hlcyA/ICdjcnMtc3RpY2t5X190cmlnZ2VyLS1zd2F0Y2gnIDogJ2Nycy1zdGlja3lfX3RyaWdnZXItLXNpemUnfWB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zdCB3YXNPcGVuID0gb3BlblBpY2tlcj8udHJpZ2dlciA9PT0gdHJpZ2dlcjtcbiAgICAgICAgICAvLyBSZS1jbGlja2luZyB0aGUgdHJpZ2dlciBpcyBhIGRpc21pc3NhbCBhbmQgcmVwb3J0cyB0aGUgY2xvc2U7IHN3aXRjaGluZ1xuICAgICAgICAgIC8vIHRvIHRoZSBvdGhlciBwaWNrZXIgb25seSByZXBvcnRzIHRoYXQgcGlja2VyJ3Mgb3Blbi5cbiAgICAgICAgICBjbG9zZVBpY2tlcih3YXNPcGVuKTtcbiAgICAgICAgICBpZiAod2FzT3BlbikgcmV0dXJuO1xuICAgICAgICAgIHNob3dQaWNrZXIoeyB0cmlnZ2VyLCBwb3BvdmVyLCBuYW1lOiBzd2F0Y2hlcyA/ICdNYXRlcmlhbCcgOiAnU2l6ZScgfSk7XG4gICAgICAgICAgLy8gT25seSB0aGUgb3BlbiBoYWxmIG9mIHRoZSB0b2dnbGUgaXMgcmVwb3J0ZWQg4oCUIHRoZSBtZXRyaWMgaXMgXCJyZWFjaGVkIGZvclxuICAgICAgICAgIC8vIHRoZSBwaWNrZXJcIiwgYW5kIGEgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIHRyaWdnZXIganVzdCBkaXNtaXNzZXMgaXQuXG4gICAgICAgICAgcHVzaERhdGEoXG4gICAgICAgICAgICBgJHtTVElDS1lfQU5BTFlUSUNTLnByZWZpeH1fcGlja2VyYCxcbiAgICAgICAgICAgIHN3YXRjaGVzID8gJ01hdGVyaWFsJyA6ICdTaXplJyxcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBTVElDS1lfQU5BTFlUSUNTLmxvYyxcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZG90ID8/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKX1cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHN5bmNzLnB1c2goKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IGdldFNlbGVjdChvcHRpb24ubmFtZSk/LnZhbHVlID8/ICcnO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjdXJyZW50O1xuICAgICAgaWYgKGRvdCkgZG90LnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWltYWdlJywgc3dhdGNoRm9yKGN1cnJlbnQpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXN0aWNreV9fcGlja2VyXCI+XG4gICAgICAgIHt0cmlnZ2VyfVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvZGl2PlxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIW9wZW5QaWNrZXIgfHwgKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuY3JzLXN0aWNreV9fcGlja2VyJykpIHJldHVybjtcbiAgICBjbG9zZVBpY2tlcih0cnVlKTtcbiAgfSk7XG5cbiAgLy8gVGhlIHJlYWwgc3VibWl0IGJ1dHRvbiBjYXJyaWVzIHRoZSB0aGVtZSdzIG93biBhZGQtdG8tY2FydCBiZWhhdmlvdXIgKGxvYWRpbmdcbiAgLy8gc3RhdGUsIGNhcnQgZHJhd2VyLCBhbmFseXRpY3MpIOKAlCB0aGlzIGp1c3QgcHJveGllcyB0aGUgY2xpY2sgcmF0aGVyIHRoYW5cbiAgLy8gcmVpbXBsZW1lbnRpbmcgYW55IG9mIGl0LiBJdHMgbGFiZWwgKGluY2wuIHByaWNlKSBpcyBtaXJyb3JlZCBpbiBgcHJpY2VJbkJ1dHRvbmAuXG4gIGNvbnN0IGN0YSA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1zdGlja3lfX2N0YVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgLy8gVGhlIHZhcmlhbnQgaXMgd2hhdCBtYWtlcyB0aGlzIGFkZC10by1jYXJ0IHdvcnRoIHNlcGFyYXRpbmcgZnJvbSB0aGUgYnV5XG4gICAgICAgIC8vIGJveCdzIG93biDigJQgaXQgaXMgdGhlIG9uZSByZWFjaGFibGUgd2l0aG91dCBzY3JvbGxpbmcgYmFjayB1cC5cbiAgICAgICAgcHVzaERhdGEoXG4gICAgICAgICAgYCR7U1RJQ0tZX0FOQUxZVElDUy5wcmVmaXh9X2FkZF90b19jYXJ0YCxcbiAgICAgICAgICAnQWRkIHRvIGNhcnQnLFxuICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgU1RJQ0tZX0FOQUxZVElDUy5sb2MsXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcuY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0Jyk/LmNsaWNrKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIEFkZCB0byBjYXJ0XG4gICAgPC9idXR0b24+XG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgY29uc3Qgcm9vdCA9IChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLXN0aWNreVwiPlxuICAgICAgey8qIENvdmVycyB0aGUgcGFnZSB3aGlsZSBhIHBvcG92ZXIgaXMgb3BlbiDigJQgc2VlIGdsb2JhbHMuY3NzLCB3aGVyZSBpdCBpc1xuICAgICAgICAgIHRyYW5zcGFyZW50IG9uIGRlc2t0b3AgYW5kIGEgc2NyaW0gYXQgdGhlIHdpZHRoIHRoZSBwb3BvdmVyIGJlY29tZXMgYSBzaGVldC5cbiAgICAgICAgICBPdXRzaWRlIGAuY3JzLXN0aWNreV9fcGlja2VyYCwgc28gdGhlIG91dHNpZGUtY2xpY2sgbGlzdGVuZXIgY2xvc2VzIG9uIGl0LiAqL31cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X19iYWNrZHJvcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXN0aWNreV9faW5uZXJcIj5cbiAgICAgICAge3RodW1ifVxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLXN0aWNreV9fdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X19jb250cm9sc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X19waWNrZXJzXCI+e3BpY2tlcnN9PC9kaXY+XG4gICAgICAgICAge2N0YX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAvLyBTaG93cyBvbmNlIHRoZSBidXkgYm94J3Mgb3duIG9wdGlvbiBjYXJkcyBoYXZlIHNjcm9sbGVkIHBhc3QgdGhlIHRvcCBvZiB0aGVcbiAgLy8gdmlld3BvcnQsIGFuZCBoaWRlcyBhZ2FpbiBvbmNlIHRoZXkgc2Nyb2xsIGJhY2sgaW50byB2aWV3LiBBbiBvcGVuIHBvcG92ZXIgaXNcbiAgLy8gYW5jaG9yZWQgdG8gdGhlIGJhciwgc28gaXQgZ29lcyB3aXRoIGl0IHJhdGhlciB0aGFuIGJlaW5nIGxlZnQgZmxvYXRpbmcuXG4gIC8vIEZyb3plbiB3aGlsZSBhIGd1aWRlIGlzIHVwIOKAlCBzZWUgYHN0ZXBBc2lkZUZvckd1aWRlYCwgd2hpY2ggb3ducyB0aGUgYmFyIHVudGlsIHRoZVxuICAvLyBndWlkZSBjbG9zZXMgYW5kIHJlLW9ic2VydmVzIHRoZSB0YXJnZXQgdG8gcGljayB0aGlzIGJhY2sgdXAuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChbZW50cnldKSA9PiB7XG4gICAgaWYgKHJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1zdXNwZW5kZWQnKSkgcmV0dXJuO1xuICAgIGNvbnN0IHZpc2libGUgPSAhZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA8IDA7XG4gICAgcm9vdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJywgdmlzaWJsZSk7XG4gICAgaWYgKCF2aXNpYmxlKSBjbG9zZVBpY2tlcigpO1xuICB9KTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuXG4gIC8qKlxuICAgKiBUaGUgY2FydCBkcmF3ZXIgcGFya3MgdGhlIGJhciB0aGUgc2FtZSB3YXkgYSBndWlkZSBkb2VzLCBidXQgaXMgd2F0Y2hlZCBnbG9iYWxseVxuICAgKiBpbnN0ZWFkIG9mIGJlaW5nIGFybWVkIGJ5IGEgY2xpY2s6IG91ciBvd24gQ1RBLCB0aGUgYnV5IGJveCdzIHN1Ym1pdCBhbmQgdGhlXG4gICAqIGhlYWRlcidzIGNhcnQgaWNvbiBhbGwgcmVhY2ggaXQsIGFuZCB0aGUgdGhlbWUgb3BlbnMgaXQgYXN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlXG4gICAqIGFkZC10by1jYXJ0IHJlcXVlc3QgbGFuZHMuIEl0IGFsc28gY29tZXMgYmFjayBwbGFpbiwgd2l0aCBubyBwb3BvdmVyIHJlc3RvcmVkIOKAlFxuICAgKiBhZGRpbmcgdG8gY2FydCBlbmRzIHRoZSBwaWNrIHJhdGhlciB0aGFuIGludGVycnVwdGluZyBpdC5cbiAgICpcbiAgICogV2F0Y2hlZCBmcm9tIHRoZSBkb2N1bWVudCBkb3duLCBmb3IgdGhlIHNhbWUgcmVhc29uIGBvbkd1aWRlQ2xvc2VkYCBpczogdGhlIGRyYXdlclxuICAgKiByZS1yZW5kZXJzIGFmdGVyIGV2ZXJ5IGNhcnQgbXV0YXRpb24sIGFuZCBhbiBvYnNlcnZlciBib3VuZCB0byB0aGUgbm9kZSB0aGF0XG4gICAqIGNhcnJpZWQgdGhlIGZsYWcgd291bGQgZ28gZGVhZiBpZiB0aGF0IG5vZGUgd2VyZSByZXBsYWNlZC4gQ2xhc3MgY2h1cm4gZWxzZXdoZXJlIG9uXG4gICAqIHRoZSBwYWdlIGNvc3RzIG9uZSBgdGFnTmFtZWAgY2hlY2suXG4gICAqL1xuICBsZXQgY2FydE9wZW4gPSBmYWxzZTtcblxuICBjb25zdCBjYXJ0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuICAgIGlmICghcmVjb3Jkcy5zb21lKChyZWNvcmQpID0+IChyZWNvcmQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnQ0FSVC1EUkFXRVInKSkgcmV0dXJuO1xuICAgIGNvbnN0IG9wZW4gPSBjYXJ0RHJhd2VySXNPcGVuKCk7XG4gICAgaWYgKG9wZW4gPT09IGNhcnRPcGVuKSByZXR1cm47XG4gICAgY2FydE9wZW4gPSBvcGVuO1xuICAgIGlmICghb3BlbikgcmV0dXJuIHJlc3VtZSgpO1xuICAgIC8vIFRoZSBiYXIgaXMgb24gaXRzIHdheSBvdXQsIGFuZCBhbiBvcGVuIHBvcG92ZXIgaXMgYW5jaG9yZWQgdG8gaXQuIFNpbGVudDogdGhlXG4gICAgLy8gZHJhd2VyIHRha2luZyBvdmVyIGlzIG5vdCB0aGUgdXNlciBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAgY2xvc2VQaWNrZXIoKTtcbiAgICBzdXNwZW5kKCk7XG4gIH0pO1xuXG4gIGNhcnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICBzZXRUaHVtYigpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcuY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0Jyk7XG4gICAgY3RhLmRpc2FibGVkID0gYnV0dG9uPy5kaXNhYmxlZCA/PyBmYWxzZTtcbiAgICBzeW5jcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcm9vdCwgc3luYyB9O1xufTtcbiIsImltcG9ydCB7IHdhaXRFbCB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHsgc3RyaXBDdXJyZW5jeUNvZGUgfSBmcm9tICcuLi9tb25leSc7XG5cbi8qKlxuICogVGhlIGJvdHRvbSBvZiB0aGUgcGFnZSDigJQgdGhlIEZlcmEgcmV2aWV3cyB3aWRnZXQgYW5kIHRoZSB0aGVtZSdzIFwiWW91IG1heSBhbHNvIGxpa2VcIlxuICogZ3JpZCDigJQgYm90aCBzaXQgaW5zaWRlIDxwcm9kdWN0LXJlY29tbWVuZGF0aW9ucz4sIHdoaWNoIERhd24gZmlsbHMgaW4gb25seSBvbmNlIHRoZVxuICogc2VjdGlvbiBzY3JvbGxzIGludG8gdmlldywgc28gZWFjaCBibG9jayBpcyB3YWl0ZWQgZm9yIG9uIGl0cyBvd24uXG4gKlxuICogQWxtb3N0IGV2ZXJ5dGhpbmcgdGhlIGRlc2lnbiBjaGFuZ2VzIGRvd24gdGhlcmUgaXMgc3R5bGluZywgYW5kIGl0IGhhbmdzIG9mZiB0aGVcbiAqIGAuY3JzLXJlY3NgIGNsYXNzIGFkZGVkIGhlcmUgcmF0aGVyIHRoYW4gb2ZmIGAuY3JzLXBkcGA6IHRoZSB0aGVtZSdzIGNhcmQgY2xhc3Nlc1xuICogKC5wcmljZSwgLmJhZGdlLCAuY2FyZF9fY29udGVudCkgYXJlIG5vdCB1bmlxdWUgdG8gdGhpcyBzZWN0aW9uLiBXaGF0IGlzIGxlZnQgYXJlIHRoZVxuICogdHdvIHN0cmluZ3MgQ1NTIGNhbm5vdCByZWFjaC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRyZXNzUmVjb21tZW5kYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByb290ID0gYXdhaXQgd2FpdEVsPEhUTUxFbGVtZW50PigncHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMnKTtcbiAgcm9vdC5jbGFzc0xpc3QuYWRkKCdjcnMtcmVjcycpO1xuXG4gIGRyZXNzR3JpZCgpO1xuICBkcmVzc1Jldmlld3NIZWFkZXIoKTtcbiAgc3F1YXJlT2ZmUmV2aWV3cygpO1xufTtcblxuLyoqXG4gKiBUaGUgc3RvcmUgcnVucyBTaG9waWZ5IE1hcmtldHMsIHNvIHRoZSB0aGVtZSByZW5kZXJzIHRoZSBjdXJyZW5jeSBjb2RlIGludG8gdGhlIGNhcmRcbiAqIHByaWNlIChcIuKCtDcsNDY4LjAwIFVBSFwiKTsgdGhlIGRlc2lnbiBzaG93cyB0aGUgYW1vdW50IGFsb25lLCBleGFjdGx5IGFzIHRoZSBidXkgYm94XG4gKiBhbHJlYWR5IGRvZXMuIFRoZSBjb2RlIHNpdHMgaW4gdGhlIHRleHQgbm9kZSByYXRoZXIgdGhhbiBpbiBpdHMgb3duIGVsZW1lbnQsIHNvIENTU1xuICogY2FuJ3QgaGlkZSBpdC5cbiAqL1xuY29uc3QgZHJlc3NHcmlkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBncmlkID0gYXdhaXQgd2FpdEVsPEhUTUxFbGVtZW50PignLmNycy1yZWNzIC5wcm9kdWN0LWdyaWQnKTtcbiAgZ3JpZFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnByaWNlLWl0ZW0nKVxuICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnRleHRDb250ZW50ID0gc3RyaXBDdXJyZW5jeUNvZGUoZWwudGV4dENvbnRlbnQhKSkpO1xufTtcblxuLyoqXG4gKiBGZXJhIHByaW50cyBcIig1LDI0NCByZXZpZXdzKVwiIG5leHQgdG8gdGhlIGF2ZXJhZ2U7IHRoZSBkZXNpZ24gc2hvd3MgXCI1LjJLXCIuIEJvdGggdGhlXG4gKiB3aWRlIGFuZCB0aGUgbmFycm93IHZhcmlhbnQgb2YgdGhlIHN0cmluZyBhcmUgcmV3cml0dGVuIOKAlCBGZXJhIHN3YXBzIGJldHdlZW4gdGhlbSBieVxuICogYnJlYWtwb2ludCwgYW5kIHRoZSBkZXNpZ24gaGFzIG9uZSByb3cgZm9yIGJvdGguXG4gKlxuICogTm90IHJlLWFwcGxpZWQgYWZ0ZXIgXCJTaG93IE1vcmVcIjogRmVyYSBhcHBlbmRzIHRvIHRoZSBsaXN0IGFuZCBsZWF2ZXMgdGhlIGhlYWRlciBhbG9uZS5cbiAqL1xuY29uc3QgZHJlc3NSZXZpZXdzSGVhZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IHdhaXRFbDxIVE1MRWxlbWVudD4oJy5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWNvdW50IFtkYXRhLWZlcmEtcmF0aW5nLWNvdW50XScpO1xuICBjb25zdCB0b3RhbCA9IE51bWJlcihjb3VudC5kYXRhc2V0LnZhbHVlKTtcbiAgY29uc3QgbGFiZWwgPSB0b3RhbCA+PSAxMDAwID8gYCR7KHRvdGFsIC8gMTAwMCkudG9GaXhlZCgxKX1LYCA6IFN0cmluZyh0b3RhbCk7XG4gIGNvdW50XG4gICAgLmNsb3Nlc3QoJy5mZXJhLXJldmlld3MtY291bnQnKSFcbiAgICAucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5mZXJhLXJldmlld3MtY291bnQtc3RyJylcbiAgICAuZm9yRWFjaCgoZWwpID0+IChlbC50ZXh0Q29udGVudCA9IGxhYmVsKSk7XG59O1xuXG4vKipcbiAqIGBnbG9iYWxzLmNzc2AgdHVybnMgRmVyYSdzIG1hc29ucnkgaW50byBhIHBsYWluIGdyaWQ7IGEgZ3JpZCwgdW5saWtlIG1hc29ucnksIHJlYWRzIGFzXG4gKiBicm9rZW4gd2hlbiBpdHMgbGFzdCByb3cgaXMgc2hvcnQuIEZlcmEgcGFnZXMgaW4gbmluZXMsIHdoaWNoIGZpbGxzIG5vIHJvdyB3aWR0aCB0aGVcbiAqIGRlc2lnbiB1c2VzLCBzbyB0aGUgcmVtYWluZGVyIGlzIGhpZGRlbiDigJQgOCBjYXJkcyBvbiBkZXNrdG9wLCBhcyBkZXNpZ25lZCwgYW5kIG9uZSBtb3JlXG4gKiBmdWxsIHJvdyBvbiBldmVyeSBcIlNob3cgTW9yZVwiLlxuICpcbiAqIFRoZSBjb2x1bW4gY291bnQgaXMgcmVhZCBiYWNrIG9mZiB0aGUgZ3JpZCByYXRoZXIgdGhhbiByZXBlYXRlZCBoZXJlLCBzbyB0aGUgdHdvXG4gKiBicmVha3BvaW50cyBzdGF5IHdyaXR0ZW4gZG93biBpbiBvbmUgcGxhY2UuIE9ubHkgYGNoaWxkTGlzdGAgaXMgb2JzZXJ2ZWQ6IGhpZGluZyBhIGNhcmRcbiAqIGlzIGFuIGF0dHJpYnV0ZSBjaGFuZ2UsIHdoaWNoIGtlZXBzIHRoaXMgb3V0IG9mIGl0cyBvd24gb2JzZXJ2ZXIuXG4gKi9cbmNvbnN0IHNxdWFyZU9mZlJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgd2FpdEVsPEhUTUxFbGVtZW50PignLmNycy1yZWNzIC5mZXJhLW1hc29ucnktaXRlbXMnKTtcblxuICBjb25zdCBzcXVhcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sdW1ucyA9IGdldENvbXB1dGVkU3R5bGUoaXRlbXMpLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGg7XG4gICAgY29uc3QgY2FyZHMgPSBBcnJheS5mcm9tKGl0ZW1zLmNoaWxkcmVuKTtcbiAgICBjb25zdCBrZWVwID0gTWF0aC5mbG9vcihjYXJkcy5sZW5ndGggLyBjb2x1bW5zKSAqIGNvbHVtbnM7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4gY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjcnMtcmVjcy1vdmVyZmxvdycsIGkgPj0ga2VlcCkpO1xuICB9O1xuXG4gIHNxdWFyZSgpO1xuICBuZXcgTXV0YXRpb25PYnNlcnZlcihzcXVhcmUpLm9ic2VydmUoaXRlbXMsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3F1YXJlKTtcbn07XG4iLCIvKipcbiAqIFRhbGtzIHRvIERhd24ncyBvd24gQWpheCBDYXJ0IEFQSSBhbmQgcHViL3N1YiBidXMgcmF0aGVyIHRoYW4gcmVpbXBsZW1lbnRpbmcgYW55IG9mXG4gKiBpdCDigJQgYGNhcnQtZHJhd2VyYC9gY2FydC1ub3RpZmljYXRpb25gJ3MgYGdldFNlY3Rpb25zVG9SZW5kZXJgL2ByZW5kZXJDb250ZW50c2AsIGFuZFxuICogYHdpbmRvdy5yb3V0ZXMuY2FydF9hZGRfdXJsYCwgYXJlIHRoZSBzYW1lIHRoZW1lLWdsb2JhbCBzdXJmYWNlIGBwcm9kdWN0LWZvcm0uanNgXG4gKiBpdHNlbGYgdXNlcywganVzdCBjYWxsZWQgZnJvbSBvdXIgb3duIGNvZGUgaW5zdGVhZCBvZiBhIGZvcm0gc3VibWl0LlxuICovXG5cbnR5cGUgQ2FydEVsZW1lbnQgPSBIVE1MRWxlbWVudCAmIHtcbiAgZ2V0U2VjdGlvbnNUb1JlbmRlcjogKCkgPT4geyBpZDogc3RyaW5nIH1bXTtcbiAgcmVuZGVyQ29udGVudHM6IChzdGF0ZTogdW5rbm93bikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGNhcnRFbGVtZW50ID0gKCkgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxDYXJ0RWxlbWVudD4oJ2NhcnQtbm90aWZpY2F0aW9uJykgPz8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxDYXJ0RWxlbWVudD4oJ2NhcnQtZHJhd2VyJyk7XG5cbmV4cG9ydCBjb25zdCBjYXJ0SGFzVmFyaWFudCA9IGFzeW5jICh2YXJpYW50SWQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBjYXJ0ID0gYXdhaXQgZmV0Y2goJy9jYXJ0LmpzJykudGhlbigocikgPT4gci5qc29uKCkpO1xuICByZXR1cm4gY2FydC5pdGVtcy5zb21lKChpdGVtOiB7IHZhcmlhbnRfaWQ6IG51bWJlciB9KSA9PiBpdGVtLnZhcmlhbnRfaWQgPT09IHZhcmlhbnRJZCk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSB2YXJpYW50LCBzaWxlbnRseSDigJQgbm8gZHJhd2VyIHJlbmRlciBoZXJlLiBUaGUgY2FsbGVyIGFwcGxpZXMgdGhlIGRpc2NvdW50XG4gKiByaWdodCBhZnRlciBhbmQgcmVuZGVycyBvbmNlIHRoYXQncyBkb25lIHRvbywgc28gdGhlIGRyYXdlciBuZXZlciBoYXMgYSBtb21lbnQgd2hlcmVcbiAqIGl0J3Mgc2hvd2luZyB0aGUgZ2lmdCBsaW5lIGF0IGZ1bGwgcHJpY2UgKHNlZSBgYXBwbHlEaXNjb3VudEFuZFJlZnJlc2hgKS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jICh2YXJpYW50SWQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gIGJvZHkuYXBwZW5kKCdpZCcsIFN0cmluZyh2YXJpYW50SWQpKTtcbiAgYm9keS5hcHBlbmQoJ3F1YW50aXR5JywgJzEnKTtcbiAgYXdhaXQgZmV0Y2goJy9jYXJ0L2FkZC5qcycsIHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sIGJvZHkgfSk7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgYGNvZGVgIHN0cmFpZ2h0IHRvIHRoZSBjYXJ0IHZpYSBgL2NhcnQvdXBkYXRlLmpzYCdzIG93biBgZGlzY291bnRgIGZpZWxkLFxuICogcmF0aGVyIHRoYW4gdGhlIGAvZGlzY291bnQvPGNvZGU+YCBcImRlZXAgbGlua1wiIHRoaXMgdXNlZCBvcmlnaW5hbGx5OiB0aGF0IHJvdXRlIG9ubHlcbiAqIHF1ZXVlcyB0aGUgY29kZSBmb3IgdGhlIG5leHQgQ2hlY2tvdXQgc2Vzc2lvbiwgc28gYC9jYXJ0LmpzYCAoYW5kIHRoZSBkcmF3ZXIpIGtlcHRcbiAqIHNob3dpbmcgdGhlIGdpZnQgYXQgZnVsbCBwcmljZSB1bnRpbCB0aGUgbmV4dCB1bnJlbGF0ZWQgcmUtcmVuZGVyIOKAlCBhIHJlbG9hZCwgb3IgYVxuICogbGF0ZXIgY2FydC11cGRhdGUg4oCUIGNhdWdodCBpdCB1cC4gYC9jYXJ0L3VwZGF0ZS5qc2AgYXBwbGllcyB0aGUgZGlzY291bnQgYW5kIHJldHVybnNcbiAqIGZyZXNobHkgcmVuZGVyZWQgYHNlY3Rpb25zYCBpbiB0aGUgc2FtZSByZXNwb25zZSwgc28gb25lIHJlbmRlciBoZXJlIGlzIGVub3VnaC5cbiAqXG4gKiBgZGlzY291bnRgIHJlcGxhY2VzIHRoZSBjYXJ0J3MgKmVudGlyZSogYWN0aXZlIGNvZGUgc2V0IHJhdGhlciB0aGFuIGFkZGluZyB0byBpdCwgc29cbiAqIHdoYXRldmVyJ3MgYWxyZWFkeSBhcHBsaWNhYmxlIGlzIHJlYWQgZmlyc3QgYW5kIGNhcnJpZWQgZm9yd2FyZCDigJQgb3RoZXJ3aXNlIHRoaXNcbiAqIHdvdWxkIHNpbGVudGx5IGtub2NrIG91dCBhIGRpc2NvdW50IHRoZSBjdXN0b21lciBhcHBsaWVkIHRoZW1zZWx2ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseURpc2NvdW50QW5kUmVmcmVzaCA9IGFzeW5jIChjb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY3VycmVudENhcnQgPSBhd2FpdCBmZXRjaCgnL2NhcnQuanMnKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG4gIGNvbnN0IGNvZGVzID0gW1xuICAgIC4uLihjdXJyZW50Q2FydC5kaXNjb3VudF9jb2RlcyA/PyBbXSlcbiAgICAgIC5maWx0ZXIoKGQ6IHsgYXBwbGljYWJsZTogYm9vbGVhbjsgY29kZTogc3RyaW5nIH0pID0+IGQuYXBwbGljYWJsZSAmJiBkLmNvZGUgIT09IGNvZGUpXG4gICAgICAubWFwKChkOiB7IGNvZGU6IHN0cmluZyB9KSA9PiBkLmNvZGUpLFxuICAgIGNvZGUsXG4gIF0uam9pbignLCcpO1xuXG4gIGNvbnN0IGNhcnQgPSBjYXJ0RWxlbWVudCgpO1xuICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG4gIGJvZHkuYXBwZW5kKCdkaXNjb3VudCcsIGNvZGVzKTtcbiAgaWYgKGNhcnQpIHtcbiAgICBib2R5LmFwcGVuZCgnc2VjdGlvbnMnLCBjYXJ0LmdldFNlY3Rpb25zVG9SZW5kZXIoKS5tYXAoKHMpID0+IHMuaWQpLmpvaW4oJywnKSk7XG4gICAgYm9keS5hcHBlbmQoJ3NlY3Rpb25zX3VybCcsIGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9jYXJ0L3VwZGF0ZS5qcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxuICAgIGJvZHksXG4gIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKTtcblxuICBjYXJ0Py5yZW5kZXJDb250ZW50cyhyZXNwb25zZSk7XG59O1xuXG4vLyBgUFVCX1NVQl9FVkVOVFMuY2FydFVwZGF0ZWAgaW4gdGhlIHRoZW1lJ3Mgb3duIGNvbnN0YW50cy5qcyDigJQgZGVjbGFyZWQgd2l0aCBgY29uc3RgXG4vLyB0aGVyZSwgc28gdW5saWtlIGBzdWJzY3JpYmVgL2BwdWJsaXNoYCAoZnVuY3Rpb24gZGVjbGFyYXRpb25zKSBpdCBuZXZlciBsYW5kcyBvblxuLy8gYHdpbmRvd2AsIGFuZCBoYXMgdG8gYmUgaW5saW5lZCBhcyBhIGxpdGVyYWwgaW5zdGVhZCBvZiByZWFkIG9mZiB0aGUgdGhlbWUuXG5jb25zdCBDQVJUX1VQREFURV9FVkVOVCA9ICdjYXJ0LXVwZGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDYXJ0VXBkYXRlID0gKGhhbmRsZXI6IChldmVudDogeyBzb3VyY2U/OiBzdHJpbmcgfSkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBnbG9iYWxzID0gd2luZG93IGFzIHVua25vd24gYXMge1xuICAgIHN1YnNjcmliZT86IChldmVudDogc3RyaW5nLCBjYjogKGU6IHsgc291cmNlPzogc3RyaW5nIH0pID0+IHZvaWQpID0+IHZvaWQ7XG4gIH07XG4gIGdsb2JhbHMuc3Vic2NyaWJlPy4oQ0FSVF9VUERBVEVfRVZFTlQsIGhhbmRsZXIpO1xufTtcbiIsImltcG9ydCB7IHdhaXRFbCwgcHVzaERhdGEsIHZpc2liaWxpdHlPZlRpbWUsIGxvZyB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2dsb2JhbHMuY3NzP2lubGluZSc7XG5pbXBvcnQgbWF0ZXJpYWxHdWlkZSBmcm9tICcuL2NvbnRlbnQvbWF0ZXJpYWwtZ3VpZGUuaHRtbD9yYXcnO1xuaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0LFxuICBmZXRjaEdpZnQsXG4gIGJhc2VQcmljZUNlbnRzLFxuICBnZXRTZWxlY3QsXG4gIGltYWdlT3B0aW9uSW5kZXgsXG4gIG9wdGlvbkltYWdlcyxcbiAgc2VsZWN0ZWRWYWx1ZXMsXG4gIHNlbGVjdGVkVmFyaWFudCxcbiAgdHlwZSBQcm9kdWN0LFxufSBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHsgZm9ybWF0TGlrZSwgcGFyc2VNb25leSwgc3RyaXBDdXJyZW5jeUNvZGUgfSBmcm9tICcuL21vbmV5JztcbmltcG9ydCB7IGluY2x1c2lvbkNhcHRpb24sIHBhcnNlRGVzY3JpcHRpb24gfSBmcm9tICcuL2Rlc2NyaXB0aW9uJztcbmltcG9ydCBmbGFnVXNhIGZyb20gJy4vaWNvbnMvZmxhZy11c2EucG5nP2lubGluZSc7XG5pbXBvcnQgd2FycmFudHkgZnJvbSAnLi9pY29ucy93YXJyYW50eS5zdmc/cmF3JztcbmltcG9ydCB7IGlubGluZVN2ZyB9IGZyb20gJy4vc3ZnJztcbmltcG9ydCB7IGlzU3dhdGNoT3B0aW9uLCBPcHRpb25zLCBQRFBfQU5BTFlUSUNTLCBzaXplR3VpZGVUcmlnZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1eWJveCc7XG5pbXBvcnQge1xuICBjbG9zZVNpemVHdWlkZU9uQmFja2Ryb3AsXG4gIENMT1NFX0lDT04sXG4gIG9wZW5Nb2RhbCxcbiAgc2luZ2xlT3BlblNpemVHdWlkZSxcbn0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IERldGFpbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvZGV0YWlscyc7XG5pbXBvcnQgeyBHaWZ0IH0gZnJvbSAnLi9jb21wb25lbnRzL2dpZnQnO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5JztcbmltcG9ydCB7IEhvd1RvT3JkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvaG93VG9PcmRlcic7XG5pbXBvcnQgeyBib3R0b21BY2NvcmRpb25zLCBvcGVuTWFpbGluZ01vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IHsgUmVlbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVlbHMnO1xuaW1wb3J0IHsgU3RpY2t5QmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0aWNreUJhcic7XG5pbXBvcnQgeyBkcmVzc1JlY29tbWVuZGF0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNvbW1lbmRhdGlvbnMnO1xuaW1wb3J0IHsgYWRkVG9DYXJ0LCBhcHBseURpc2NvdW50QW5kUmVmcmVzaCwgY2FydEhhc1ZhcmlhbnQsIHN1YnNjcmliZUNhcnRVcGRhdGUgfSBmcm9tICcuL2NhcnQnO1xuXG4vLyBTYW1lIGZyZWUgZ2lmdC13aXRoLXB1cmNoYXNlIG9uIGV2ZXJ5IFBEUCwgc2hvd24gb25seSBvbmNlIHRoZSBzZWxlY3RlZCB2YXJpYW50J3Ncbi8vIG93biBwcmljZSBjbGVhcnMgdGhpcyBiYXIuXG5jb25zdCBHSUZUX0hBTkRMRSA9ICdzbWFsbC1vdmFsLW5lY2tsYWNlJztcbmNvbnN0IEdJRlRfTUlOX1BSSUNFX0NFTlRTID0gNTAwMDA7XG5cbi8vIE11c3QgZXhpc3QgaW4gU2hvcGlmeSBBZG1pbiBhcyBhIGRpc2NvdW50IENPREUgKG5vdCBhbiBhdXRvbWF0aWMgZGlzY291bnQpOiBhXG4vLyBCdXkgWCBHZXQgWSBkaXNjb3VudCwgJDUwMCBtaW5pbXVtIHB1cmNoYXNlIC8gYW55IGl0ZW1zIC0+IHRoZSBnaWZ0IHByb2R1Y3QgZnJlZS4gQVxuLy8gY29kZSwgcmF0aGVyIHRoYW4gYW4gYXV0b21hdGljIGRpc2NvdW50LCBpcyB3aGF0IGtlZXBzIHRoZSBmcmVlIGdpZnQgc2NvcGVkIHRvIHRoaXNcbi8vIGV4cGVyaW1lbnQg4oCUIGl0IG9ubHkgZXZlciBnZXRzIGFwcGxpZWQgYnkgYGFwcGx5RGlzY291bnRBbmRSZWZyZXNoYCBiZWxvdywgbmV2ZXIgYnlcbi8vIFNob3BpZnkgb24gaXRzIG93biwgc28gdGhlIGNvbnRyb2wgdmFyaWFudCAoYW5kIGFueW9uZSBvZmYgdGhpcyBidW5kbGUpIG5ldmVyIHNlZXMgaXRcbi8vIHJlZ2FyZGxlc3Mgb2YgY2FydCB0b3RhbC5cbmNvbnN0IEdJRlRfRElTQ09VTlRfQ09ERSA9ICdQRFAtRVhQLUdJRlQ1MDAnO1xuXG5jbGFzcyBQZHBSZWRlc2lnbiB7XG4gIHByaXZhdGUgc2lkID0gJyc7XG4gIHByaXZhdGUgcHJvZHVjdCE6IFByb2R1Y3Q7XG4gIHByaXZhdGUgaW1hZ2VJbmRleCA9IDA7XG4gIHByaXZhdGUgaW1hZ2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIHByaXZhdGUgZGVzY3JpcHRpb24hOiB7IHNwZWNzOiBzdHJpbmdbXTsgcHJvc2U6IEhUTUxFbGVtZW50W10gfTtcbiAgcHJpdmF0ZSBzeW5jOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcnMtcGRwJykpIHJldHVybjtcblxuICAgIHRoaXMuYWRkU3R5bGVzKCk7XG4gICAgdGhpcy5hZGRGb250cygpO1xuXG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHdhaXRFbDxIVE1MRWxlbWVudD4oJ3Byb2R1Y3QtaW5mbycpO1xuICAgIHRoaXMuc2lkID0gaW5mby5kYXRhc2V0LnNlY3Rpb24hO1xuICAgIC8vIEhvc3QtY2xhc3MgcnVsZXMgKC5wcmljZSwgLnByb2R1Y3QtZm9ybV9fc3VibWl0LCDigKYpIGhhbmcgb2ZmIHRoaXMsIG5vdCBvZmYgYm9keTpcbiAgICAvLyB0aGUgc2FtZSBjbGFzc2VzIGFyZSB1c2VkIGJ5IHRoZSBwcm9kdWN0IGNhcmRzIGluIHRoZSByZWNvbW1lbmRhdGlvbnMgc2VjdGlvbixcbiAgICAvLyB3aGljaCB0aGUgcmVkZXNpZ24gbXVzdCBsZWF2ZSBhbG9uZS5cbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2Nycy1wcm9kdWN0Jyk7XG4gICAgdGhpcy5wcm9kdWN0ID0gYXdhaXQgZmV0Y2hQcm9kdWN0KCk7XG4gICAgdGhpcy5pbWFnZUluZGV4ID0gaW1hZ2VPcHRpb25JbmRleCh0aGlzLnByb2R1Y3QpO1xuICAgIHRoaXMuaW1hZ2VzID0gb3B0aW9uSW1hZ2VzKHRoaXMucHJvZHVjdCwgdGhpcy5pbWFnZUluZGV4KTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY3JzLXBkcCcpO1xuXG4gICAgdGhpcy5idWlsZFV0aWxpdHlCYXIoKTtcbiAgICB0aGlzLmJ1aWxkSW5mb0NvbHVtbigpO1xuICAgIHRoaXMuYnVpbGRNZWRpYUNvbHVtbigpO1xuICAgIGRyZXNzUmVjb21tZW5kYXRpb25zKCk7XG4gICAgdGhpcy5hcHBseSgpO1xuICAgIHNpbmdsZU9wZW5TaXplR3VpZGUoKTtcbiAgICBjbG9zZVNpemVHdWlkZU9uQmFja2Ryb3AoKTtcblxuICAgIC8vIERhd24gc3dhcHMgdGhlIHByaWNlLCB0aGUgdmFyaWFudCBzZWxlY3RzIGFuZCB0aGUgZ2FsbGVyeSB3aG9sZXNhbGUgb24gZXZlcnlcbiAgICAvLyB2YXJpYW50IGNoYW5nZSwgd2hpY2ggZHJvcHMgb3VyIG5vZGVzIGFuZCBkZXN5bmNzIG91ciBjYXJkcy4gT2JzZXJ2aW5nIHRoZVxuICAgIC8vIHJlLXJlbmRlciBpcyBtb3JlIHJlbGlhYmxlIHRoYW4gdGhlIHRoZW1lJ3Mgb3duIGB2YXJpYW50OmNoYW5nZWAgZXZlbnQuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmFwcGx5KCk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGluZm8sIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoaW5mbywgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG5cbiAgICAvLyB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLW9wdGlvbnMnLCAnZXhwX3BkcF92aWV3JywgJ1BEUCcsICdSZWRlc2lnbmVkIFBEUCcsIDEwMDApO1xuICAgIGxvZygnUERQIHJlZGVzaWduIGFwcGxpZWQnLCAnc3VjY2VzcycpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZXMoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZXNpZ24ncyBmYWNlcyAoRm9ydW0sIEpvc3QsIE92ZXJsb2NrKSBhcmUgbm90IG9uIHRoZSBzaXRlIOKAlCBpdCBzaGlwcyBBc3Npc3RhbnQuXG4gICAqIE92ZXJsb2NrIGlzIHVzZWQgb25seSBmb3IgdGhlIHN0ZXAgbnVtYmVycyBpbiB0aGUgSG93LXRvLW9yZGVyIHNlY3Rpb24uXG4gICAqIEluamVjdGVkIGJ5IGhhbmQgcmF0aGVyIHRoYW4gd2l0aCBgbG9hZFNjcmlwdHNPclN0eWxlc2AsIHdoaWNoIHR5cGVzIGEgVVJMIGJ5XG4gICAqIGBzcGxpdCgnLicpLnBvcCgpYCBhbmQgc28gc2lsZW50bHkgaWdub3JlcyBhbnl0aGluZyBub3QgZW5kaW5nIGluIC5qcy8uY3NzLlxuICAgKiBUaGUgdGhlbWUgYWxyZWFkeSBzZXJ2ZXMgQXNzaXN0YW50IGZyb20gR29vZ2xlIEZvbnRzLCBzbyB0aGlzIGFkZHMgbm8gbmV3IGhvc3QuXG4gICAqL1xuICBwcml2YXRlIGFkZEZvbnRzKCkge1xuICAgIGNvbnN0IGhyZWYgPVxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Rm9ydW0mZmFtaWx5PUpvc3Q6d2dodEA0MDA7NTAwJmZhbWlseT1PdmVybG9jayZkaXNwbGF5PXN3YXAnO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2hyZWZ9XCJdYCkpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gaHJlZjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICB9XG5cbiAgLyoqIFJlLXJ1bnMgYWZ0ZXIgZXZlcnkgaG9zdCByZS1yZW5kZXIuIE11c3Qgc3RheSBpZGVtcG90ZW50LiAqL1xuICBwcml2YXRlIGFwcGx5KCkge1xuICAgIHRoaXMuc3luYy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgdGhpcy5zdHJpcEN1cnJlbmN5Q29kZXMoKTtcbiAgICB0aGlzLnByaWNlSW5CdXR0b24oKTtcbiAgICB0aGlzLnNhdmVCYWRnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzdG9yZSBydW5zIFNob3BpZnkgTWFya2V0cywgc28gdGhlIHRoZW1lIHJlbmRlcnMgdGhlIGN1cnJlbmN5IGNvZGUgaW50byB0aGVcbiAgICogcHJpY2UgKFwi4oK0Nyw0NDcuMDAgVUFIXCIpOyB0aGUgZGVzaWduIHNob3dzIHRoZSBhbW91bnQgYWxvbmUuIFRoZSBjb2RlIHNpdHMgaW4gdGhlXG4gICAqIHRleHQgbm9kZSByYXRoZXIgdGhhbiBpbiBpdHMgb3duIGVsZW1lbnQsIHNvIENTUyBjYW4ndCBoaWRlIGl0LiBTdHJpcHBpbmcgaXQgaGVyZSxcbiAgICogYWhlYWQgb2YgdGhlIGJ1dHRvbiBhbmQgdGhlIGJhZGdlLCBrZWVwcyB0aG9zZSB0d28gY2xlYW4gYXMgd2VsbCDigJQgYm90aCByZWFkIHRoZVxuICAgKiB0aGVtZSdzIHJlbmRlcmVkIHN0cmluZy5cbiAgICovXG4gIHByaXZhdGUgc3RyaXBDdXJyZW5jeUNvZGVzKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYCNwcmljZS0ke3RoaXMuc2lkfSAucHJpY2UtaXRlbWApXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChlbC50ZXh0Q29udGVudCA9IHN0cmlwQ3VycmVuY3lDb2RlKGVsLnRleHRDb250ZW50ISkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNhdmUgJDI5XCIgZnJvbSB0aGUgZGVzaWduLCBjb21wdXRlZCBmcm9tIHRoZSBsaXZlIHByaWNlcyBpbnN0ZWFkIG9mIGhhcmRjb2RlZC5cbiAgICogQm90aCBmaWd1cmVzIGFyZSByZWFkIGZyb20gdGhlIHRoZW1lJ3MgcmVuZGVyZWQgbWFya3VwIGFuZCB0aGUgcmVzdWx0IGlzIHdyaXR0ZW5cbiAgICogYmFjayBpbiB0aGUgc2FtZSBmb3JtYXQsIHNvIGl0IHN0YXlzIGNvcnJlY3Qgb24gYW55IHByb2R1Y3QgYW5kIGluIGFueSBtYXJrZXQuXG4gICAqL1xuICBwcml2YXRlIHNhdmVCYWRnZSgpIHtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGAjcHJpY2UtJHt0aGlzLnNpZH1gKTtcbiAgICBjb25zdCBiYWRnZSA9IHByaWNlPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByaWNlX19iYWRnZS1zYWxlJyk7XG4gICAgaWYgKCFwcmljZSB8fCAhYmFkZ2UgfHwgIXByaWNlLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS0tb24tc2FsZScpKSByZXR1cm47XG5cbiAgICBjb25zdCB3YXMgPSBwcmljZS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByaWNlX19zYWxlIHMucHJpY2UtaXRlbS0tcmVndWxhcicpPy50ZXh0Q29udGVudDtcbiAgICBjb25zdCBub3cgPSBwcmljZS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByaWNlX19zYWxlIC5wcmljZS1pdGVtLS1zYWxlJyk/LnRleHRDb250ZW50O1xuICAgIGlmICghd2FzIHx8ICFub3cpIHJldHVybjtcblxuICAgIGNvbnN0IHNhdmVkID0gcGFyc2VNb25leSh3YXMpIC0gcGFyc2VNb25leShub3cpO1xuICAgIGlmICghKHNhdmVkID4gMCkpIHJldHVybjtcblxuICAgIGJhZGdlLnRleHRDb250ZW50ID0gYFNhdmUgJHtmb3JtYXRMaWtlKG5vdy50cmltKCksIHNhdmVkKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiQWRkIHRvIGNhcnQgwrcgJDE5MC4wMFwiIOKAlCB0aGUgcmVuZGVyZWQgcHJpY2UgaXMgcmVhZCBmcm9tIHRoZSB0aGVtZSByYXRoZXIgdGhhblxuICAgKiBmb3JtYXR0ZWQgYnkgdXMsIGJlY2F1c2UgdGhlIHN0b3JlIHJ1bnMgU2hvcGlmeSBNYXJrZXRzIGFuZCB0aGUgY3VycmVuY3kgdmFyaWVzLlxuICAgKiBPbmx5IHRoZSBQRFAgYnV0dG9uOiBhIHN0aWNreS1hZGQtdG8tY2FydCBhcHAgY2xvbmVzIHRoaXMgYnV0dG9uIGludG8gaXRzIG93biBiYXIsXG4gICAqIHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSByZWRlc2lnbiBhbmQgaXMgbGVmdCBleGFjdGx5IGFzIHRoZSB0aGVtZSBoYXMgaXQuXG4gICAqL1xuICBwcml2YXRlIHByaWNlSW5CdXR0b24oKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdwcm9kdWN0LWluZm8nKSE7XG4gICAgY29uc3QgcHJpY2UgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGAjcHJpY2UtJHt0aGlzLnNpZH1gKTtcbiAgICBjb25zdCBidXR0b24gPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJvZHVjdC1mb3JtX19zdWJtaXQnKTtcbiAgICBpZiAoIXByaWNlIHx8ICFidXR0b24pIHJldHVybjtcblxuICAgIGNvbnN0IHNvdXJjZSA9IHByaWNlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgcHJpY2UucXVlcnlTZWxlY3RvcignLnByaWNlLS1vbi1zYWxlJylcbiAgICAgICAgPyAnLnByaWNlX19zYWxlIC5wcmljZS1pdGVtLS1zYWxlJ1xuICAgICAgICA6ICcucHJpY2VfX3JlZ3VsYXIgLnByaWNlLWl0ZW0tLXJlZ3VsYXInLFxuICAgICk7XG4gICAgaWYgKCFzb3VyY2UpIHJldHVybjtcblxuICAgIGxldCBzbG90ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuY3JzLWF0Yy1wcmljZScpO1xuICAgIGlmICghc2xvdCkge1xuICAgICAgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNsb3QuY2xhc3NOYW1lID0gJ2Nycy1hdGMtcHJpY2UnO1xuICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKT8uYWZ0ZXIoc2xvdCk7XG4gICAgfVxuICAgIHNsb3QudGV4dENvbnRlbnQgPSBgwrcgJHtzb3VyY2UudGV4dENvbnRlbnQhLnRyaW0oKX1gO1xuXG4gICAgLy8gRHJvcCBhbnkgY29weSB0aGUgc3RpY2t5IGJhciBjbG9uZWQgb3V0IG9mIG91ciBidXR0b24uXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmNycy1hdGMtcHJpY2UnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiAocm9vdC5jb250YWlucyhlbCkgPyB1bmRlZmluZWQgOiBlbC5yZW1vdmUoKSkpO1xuXG4gICAgLy8gT3VyIG93biBzdGlja3kgYmFyIGhhcyBubyBwcmljZSBvZiBpdHMgb3duIOKAlCBpdCBtaXJyb3JzIHRoaXMgYnV0dG9uJ3MgbGFiZWwgYW5kXG4gICAgLy8gcHJpY2UsIGFscmVhZHkgY29ycmVjdCBhdCB0aGlzIHBvaW50IChjdXJyZW5jeSBzdHJpcHBlZCkuIFRocmVlIHNwYW5zIHJhdGhlclxuICAgIC8vIHRoYW4gb25lIHRleHQgbm9kZTogdGhlIG1vYmlsZSBkZXNpZ24gc3RhY2tzIHRoZSBwcmljZSB1bmRlciB0aGUgbGFiZWwgd2l0aCBub1xuICAgIC8vIHNlcGFyYXRvciwgYW5kIENTUyBjYW4gb25seSByZWFycmFuZ2Ugd2hhdCBoYXMgc3RydWN0dXJlLlxuICAgIGNvbnN0IHN0aWNreSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcuY3JzLXN0aWNreV9fY3RhJyk7XG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgY29uc3Qgc3BhbiA9IChjbGFzc05hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgeyBjbGFzc05hbWUsIHRleHRDb250ZW50OiB0ZXh0IH0pO1xuICAgICAgc3RpY2t5LnJlcGxhY2VDaGlsZHJlbihcbiAgICAgICAgc3BhbignY3JzLXN0aWNreV9fY3RhLWxhYmVsJywgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bm90KC5jcnMtYXRjLXByaWNlKScpIS50ZXh0Q29udGVudCEudHJpbSgpKSxcbiAgICAgICAgc3BhbignY3JzLXN0aWNreV9fY3RhLXNlcCcsICfCtycpLFxuICAgICAgICBzcGFuKCdjcnMtc3RpY2t5X19jdGEtcHJpY2UnLCBzb3VyY2UudGV4dENvbnRlbnQhLnRyaW0oKSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGhlbWUncyBhbm5vdW5jZW1lbnQgYmFyIGNhcnJpZXMgYSBzaW5nbGUgbWVzc2FnZTsgdGhlIGRlc2lnbiBwYWlycyBpdCB3aXRoXG4gICAqIFwiTGlmZXRpbWUgV2FycmFudHlcIiBiZWhpbmQgYSBtaWRkb3QuIFRoZSBleHRyYSBjb3B5IGlzIGFwcGVuZGVkIHRvIHRoZSB0aGVtZSdzXG4gICAqIG93biA8cD4gc28gdGhlIGJhciBrZWVwcyBpdHMgcmVnaW9uL2FyaWEgd2lyaW5nIGFuZCBpdHMgbW9iaWxlIGJlaGF2aW91ci5cbiAgICpcbiAgICogVGhlIGJhciBiZWxvbmdzIHRvIHRoZSBoZWFkZXIgc2VjdGlvbiwgbm90IHRvIHByb2R1Y3QtaW5mbywgc28gaXQgY2FuIHN0aWxsIGJlXG4gICAqIHVucGFyc2VkIG9uY2UgdGhlIHJlc3Qgb2YgdGhlIHJlZGVzaWduIGlzIGFscmVhZHkgcnVubmluZyDigJQgd2FpdGluZyBvbiB0aGUgbWVzc2FnZVxuICAgKiByYXRoZXIgdGhhbiByZWFkaW5nIGl0IHN0cmFpZ2h0IG9mZiB0aGUgZG9jdW1lbnQgaXMgd2hhdCBtYWtlcyB0aGlzIGxhbmQgYXQgYWxsLlxuICAgKiBOb3QgYXdhaXRlZCBieSBpbml0KCk6IG5vdGhpbmcgYmVsb3cgZGVwZW5kcyBvbiB0aGUgYmFyLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBidWlsZFV0aWxpdHlCYXIoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHdhaXRFbDxIVE1MRWxlbWVudD4oJy51dGlsaXR5LWJhciAuYW5ub3VuY2VtZW50LWJhcl9fbWVzc2FnZScpO1xuICAgIGNvbnN0IGJhciA9IG1lc3NhZ2UuY2xvc2VzdCgnLnV0aWxpdHktYmFyJykhO1xuXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2Nycy11dGlsaXR5Jyk7XG4gICAgaWYgKG1lc3NhZ2UucXVlcnlTZWxlY3RvcignLmNycy11dGlsaXR5X193YXJyYW50eScpKSByZXR1cm47XG5cbiAgICBjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VwYXJhdG9yLmNsYXNzTmFtZSA9ICdjcnMtdXRpbGl0eV9fc2VwJztcbiAgICBzZXBhcmF0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgc2VwYXJhdG9yLnRleHRDb250ZW50ID0gJ8K3JztcblxuICAgIGNvbnN0IHdhcnJhbnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdhcnJhbnR5LmNsYXNzTmFtZSA9ICdjcnMtdXRpbGl0eV9fd2FycmFudHknO1xuICAgIHdhcnJhbnR5LnRleHRDb250ZW50ID0gJ0xpZmV0aW1lIFdhcnJhbnR5JztcblxuICAgIG1lc3NhZ2UuYXBwZW5kKHNlcGFyYXRvciwgd2FycmFudHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcmRlcihlbDogRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsIG9yZGVyOiBudW1iZXIpIHtcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgZWwuc3R5bGUub3JkZXIgPSBTdHJpbmcob3JkZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEluZm9Db2x1bW4oKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGAjUHJvZHVjdEluZm8tJHt0aGlzLnNpZH1gKSE7XG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdjcnMtaW5mbycpO1xuXG4gICAgLy8gQm90aCBndWlkZXMgb3BlbiBmcm9tIHRoZSBidXkgYm94IGFuZCBmcm9tIHRoZSBzdGlja3kgYmFyJ3MgcG9wb3ZlcnMsIHNvIGVhY2hcbiAgICAvLyByZXBvcnRzIHVuZGVyIHRoZSBwcmVmaXggYW5kIGxvY2F0aW9uIG9mIHRoZSBzdXJmYWNlIHRoZSBsaW5rIHdhcyBjbGlja2VkIG9uLlxuICAgIGNvbnN0IG9uTWF0ZXJpYWxHdWlkZSA9IChmcm9tID0gUERQX0FOQUxZVElDUykgPT5cbiAgICAgIG9wZW5Nb2RhbChcbiAgICAgICAgJ21hdGVyaWFsJyxcbiAgICAgICAgJ01hdGVyaWFsIEd1aWRlJyxcbiAgICAgICAgdGhpcy5ydGUobWF0ZXJpYWxHdWlkZSksXG4gICAgICAgICdNYXRlcmlhbCBHdWlkZSBQb3B1cCcsXG4gICAgICAgICdNYXRlcmlhbCBHdWlkZScsXG4gICAgICAgIGZyb20sXG4gICAgICApO1xuICAgIC8vIFJldXNlIHRoZSB0aGVtZSdzIG93biBzaXplLWd1aWRlIGRyYXdlciByYXRoZXIgdGhhbiByZWJ1aWxkaW5nIGl0LiBUaGUgdHJpZ2dlciBpc1xuICAgIC8vIHJlc29sdmVkIGhlcmUsIG9uIHRoZSBjbGljaywgbm90IGhlbGQgZnJvbSBidWlsZCB0aW1lIOKAlCBzZWUgYHNpemVHdWlkZVRyaWdnZXJgLlxuICAgIGNvbnN0IG9uU2l6ZUd1aWRlID0gKGZyb20gPSBQRFBfQU5BTFlUSUNTKSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gc2l6ZUd1aWRlVHJpZ2dlcigpO1xuICAgICAgaWYgKCF0cmlnZ2VyKSByZXR1cm47XG4gICAgICB0cmlnZ2VyLmNsaWNrKCk7XG4gICAgICB0aGlzLmRyZXNzR3VpZGVDbG9zZSgpO1xuICAgICAgcHVzaERhdGEoYCR7ZnJvbS5wcmVmaXh9X3NpemVfb3BlbmAsICdSaW5nIFNpemluZyBHdWlkZScsICdjbGljaycsIGZyb20ubG9jKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9wdGlvbnModGhpcy5wcm9kdWN0LCBvbk1hdGVyaWFsR3VpZGUsIG9uU2l6ZUd1aWRlKTtcbiAgICB0aGlzLnN5bmMucHVzaChvcHRpb25zLnN5bmMpO1xuXG4gICAgLy8gQSBwcm9kdWN0IHdpdGggbm8gb3B0aW9ucyByZW5kZXJzIG5vIGNhcmRzIGF0IGFsbCAoc2VlIGBpc1JlYWxPcHRpb25gKSwgYW5kIHRoZVxuICAgIC8vIGVtcHR5IGJsb2NrIHdvdWxkIHN0aWxsIGRyYXcgaXRzIG93biB0b3AgcnVsZSDigJQgc28gaXQgaXMgbGVmdCBvdXQgb2YgdGhlIGNvbHVtblxuICAgIC8vIGVudGlyZWx5LCBhbmQgdGhlIHN0aWNreSBiYXIgcmV2ZWFscyBvZmYgdGhlIGJ1eSBidXR0b24gaW5zdGVhZC5cbiAgICBjb25zdCBoYXNPcHRpb25zID0gb3B0aW9ucy5yb290LmNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbiAgICAvLyBLZWVwIHRoZSB0aGVtZSdzIG93biBhY2NvcmRpb24gY29weSBiZWZvcmUgd2UgZHJvcCB0aGUgaG9zdCBtYXJrdXAuXG4gICAgY29uc3QgbmF0aXZlID0gQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19hY2NvcmRpb24nKSkubWFwKChlbCkgPT4gKHtcbiAgICAgIHRpdGxlOiBlbC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX190aXRsZScpIS50ZXh0Q29udGVudCEudHJpbSgpLFxuICAgICAgYm9keTogZWwucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fY29udGVudCcpIS5jbG9uZU5vZGUodHJ1ZSksXG4gICAgfSkpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByb2R1Y3RfX2Rlc2NyaXB0aW9uJykhO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwYXJzZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5oaWRkZW4gPSB0cnVlO1xuXG4gICAgY29uc3QgdHJ1c3QgPSB0aGlzLnRydXN0Um93KCk7XG4gICAgY29uc3QgaGVscCA9IHRoaXMuaGVscFJvdygpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBEZXRhaWxzKHRoaXMuZGVzY3JpcHRpb24uc3BlY3MsIHRoaXMuZGVzY3JpcHRpb24ucHJvc2UpO1xuICAgIGNvbnN0IGhvd3RvID0gSG93VG9PcmRlcihvcGVuTWFpbGluZ01vZGFsKTtcbiAgICBjb25zdCBhY2NvcmRzID0gYm90dG9tQWNjb3JkaW9ucyhuYXRpdmUpO1xuICAgIGNvbnN0IHJlZWxzID0gUmVlbHMoKTtcblxuICAgIC8vIE9yZGVyaW5nIHZpYSBmbGV4Ym94IHJhdGhlciB0aGFuIG1vdmluZyBob3N0IG5vZGVzIOKAlCBEYXduIHJlcGxhY2VzIHNldmVyYWwgb2ZcbiAgICAvLyB0aGVzZSB3aG9sZXNhbGUsIGFuZCBhIG1vdmVkIG5vZGUgd291bGQgYmUgcmVzdG9yZWQgdG8gaXRzIG9yaWdpbmFsIHNsb3QuXG4gICAgdGhpcy5vcmRlcihyb290LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X190aXRsZScpLCAxKTtcbiAgICB0aGlzLm9yZGVyKHJvb3QucXVlcnlTZWxlY3RvcihgI3ByaWNlLSR7dGhpcy5zaWR9YCksIDIpO1xuICAgIC8vIFNob3AgUGF5IGluc3RhbGxtZW50cyDigJQgbm8gc2xvdCBpbiB0aGUgZGVzaWduLCBidXQga2VwdCBhcyBhIHBheW1lbnQgb3B0aW9uLFxuICAgIC8vIGRpcmVjdGx5IHVuZGVyIHRoZSBwcmljZSBpdCdzIHF1b3RpbmcgYSBwZXItbW9udGggY3V0IG9mLlxuICAgIHRoaXMub3JkZXIocm9vdC5xdWVyeVNlbGVjdG9yKCdbaWRePVwicHJvZHVjdC1mb3JtLWluc3RhbGxtZW50XCJdJyk/LnBhcmVudEVsZW1lbnQsIDMpO1xuICAgIHRoaXMub3JkZXIob3B0aW9ucy5yb290LCA0KTtcbiAgICB0aGlzLm9yZGVyKHJvb3QucXVlcnlTZWxlY3RvcigndmFyaWFudC1zZWxlY3RzJyksIDUpO1xuICAgIHRoaXMub3JkZXIocm9vdC5xdWVyeVNlbGVjdG9yKCdwcm9kdWN0LWZvcm0nKT8ucGFyZW50RWxlbWVudCwgNik7XG4gICAgdGhpcy5vcmRlcih0cnVzdCwgOCk7XG4gICAgdGhpcy5vcmRlcihoZWxwLCA5KTtcbiAgICB0aGlzLm9yZGVyKHJvb3QucXVlcnlTZWxlY3RvcihgI1F1YW50aXR5LUZvcm0tJHt0aGlzLnNpZH1gKSwgMTApO1xuICAgIHRoaXMub3JkZXIoZGV0YWlscywgMTEpO1xuICAgIHRoaXMub3JkZXIocmVlbHMsIDEyKTtcbiAgICB0aGlzLm9yZGVyKGhvd3RvLCAxMyk7XG4gICAgdGhpcy5vcmRlcihhY2NvcmRzLCAxNCk7XG4gICAgdGhpcy5vcmRlcihyb290LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X192aWV3LWRldGFpbHMnKSwgMjApO1xuXG4gICAgLy8gVGhlIHR3byBuYXRpdmUgYWNjb3JkaW9ucyBhcmUgc3VwZXJzZWRlZCBieSB0aGUgdGhyZWUgZnJvbSB0aGUgZGVzaWduLlxuICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2FjY29yZGlvbicpLmZvckVhY2goKGVsKSA9PiBlbC5yZW1vdmUoKSk7XG4gICAgcm9vdC5hcHBlbmQoLi4uKGhhc09wdGlvbnMgPyBbb3B0aW9ucy5yb290XSA6IFtdKSwgdHJ1c3QsIGhlbHAsIGRldGFpbHMsIHJlZWxzLCBob3d0bywgYWNjb3Jkcyk7XG4gICAgdGhpcy5idWlsZEdpZnRSb3cocm9vdCk7XG5cbiAgICAvLyBNdXN0IHJ1biBhZnRlciB0aGUgYXBwZW5kOiBgdmlzaWJpbGl0eU9mVGltZWAgcmVzb2x2ZXMgaXRzIHNlbGVjdG9yIG9uY2UsIG9uIHRoZVxuICAgIC8vIHNwb3QsIGFuZCBzaWxlbnRseSBkb2VzIG5vdGhpbmcgaWYgdGhlIG5vZGUgaXMgbm90IG9uIHRoZSBwYWdlIHlldC5cbiAgICAvLyBUaGUgc3RlcHMgYW5kIFwiSG93IHlvdXIgcGllY2UgaXMgbWFkZVwiIHNpdCBpbiBvbmUgPHNlY3Rpb24+LCBzbyBlYWNoIGlzIG1lYXN1cmVkXG4gICAgLy8gb24gaXRzIG93biB3cmFwcGVyIHJhdGhlciB0aGFuIG9uIGAuY3JzLWhvd3RvYC5cbiAgICAvLyBUaHJlc2hvbGQgMC4zLCBub3QgdGhlIGRlZmF1bHQgMC41OiBleHBhbmRlZCwgdGhlc2UgYmxvY2tzIGFyZSB0YWxsZXIgdGhhbiBhXG4gICAgLy8gcGhvbmUgdmlld3BvcnQsIGFuZCBoYWxmIG9mIHRoZW0gY2FuIG5ldmVyIGJlIG9uIHNjcmVlbiBhdCBvbmNlLlxuICAgIHZpc2liaWxpdHlPZlRpbWUoJy5jcnMtZGV0YWlscycsICdleHBfcGRwX2RldGFpbHNfdmlldycsICdQRFAnLCAnUHJvZHVjdCBkZXRhaWxzJywgMTAwMCwgMC4zKTtcbiAgICB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLXN0ZXBzJywgJ2V4cF9wZHBfaG93dG9fdmlldycsICdQRFAnLCAnSG93IHRvIG9yZGVyJywgMTAwMCwgMC4zKTtcbiAgICB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLWhvd3RvX19tYWRlJywgJ2V4cF9wZHBfbWFkZV92aWV3JywgJ1BEUCcsICdIb3cgeW91ciBwaWVjZSBpcyBtYWRlJywgMTAwMCwgMC4zKTtcblxuICAgIC8vIFNob3dzIG9uY2UgYG9wdGlvbnMucm9vdGAg4oCUIHRoZSBtYXRlcmlhbC9zaXplIGNhcmRzIGp1c3QgYXBwZW5kZWQgYWJvdmUg4oCUXG4gICAgLy8gc2Nyb2xscyBvdXQgb2Ygdmlldywgc28gdGhlIHBpY2tlciBpcyBzdGlsbCByZWFjaGFibGUgZnVydGhlciBkb3duIHRoZSBwYWdlLlxuICAgIC8vIFdpdGggbm8gb3B0aW9ucyB0aGVyZSBhcmUgbm8gY2FyZHMgdG8gbGVhdmUgYmVoaW5kLCBzbyB0aGUgYmFyIHJldmVhbHMgb2ZmIHRoZVxuICAgIC8vIGFkZC10by1jYXJ0IGJ1dHRvbiwgd2hpY2ggaXMgd2hhdCBpdCBpcyBzdGlsbCBjYXJyeWluZyBhIGNvcHkgb2YuXG4gICAgY29uc3Qgc3RpY2t5VGFyZ2V0ID0gaGFzT3B0aW9uc1xuICAgICAgPyBvcHRpb25zLnJvb3RcbiAgICAgIDogcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PigncHJvZHVjdC1mb3JtJyk/LnBhcmVudEVsZW1lbnQgPz8gcm9vdDtcblxuICAgIGNvbnN0IHN0aWNreSA9IFN0aWNreUJhcihcbiAgICAgIHRoaXMucHJvZHVjdCxcbiAgICAgICgpID0+IHRoaXMuaW1hZ2VzW3NlbGVjdGVkVmFsdWVzKHRoaXMucHJvZHVjdClbdGhpcy5pbWFnZUluZGV4XV0sXG4gICAgICBvbk1hdGVyaWFsR3VpZGUsXG4gICAgICBvblNpemVHdWlkZSxcbiAgICAgIHN0aWNreVRhcmdldCxcbiAgICApO1xuICAgIHRoaXMuc3luYy5wdXNoKHN0aWNreS5zeW5jKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGlja3kucm9vdCk7XG5cbiAgICAvLyBBZnRlciB0aGUgYXBwZW5kLCBsaWtlIHRoZSBibG9ja3MgYWJvdmUg4oCUIHRoZSBzZWxlY3RvciBpcyByZXNvbHZlZCBvbiB0aGUgc3BvdC5cbiAgICAvLyBUaGUgYmFyIGlzIHBhcmtlZCBhdCBgYm90dG9tOiAtODFweGAgcmF0aGVyIHRoYW4gaGlkZGVuLCBzbyBpdCBpcyBnZW51aW5lbHkgb2ZmXG4gICAgLy8gdGhlIHZpZXdwb3J0IGZvciB0aGUgb2JzZXJ2ZXIgdW50aWwgaXQgcmV2ZWFsczsgYW5kIGJlaW5nIGZpeGVkLCBvbmNlIHJldmVhbGVkIGl0XG4gICAgLy8gc3RheXMgb24gc2NyZWVuLCBzbyB0aGUgMXMgZHdlbGwgaXMgcmVhbGx5IFwidGhlIGJhciB3YXMgdXAgZm9yIGEgc2Vjb25kXCIuXG4gICAgLy8gVGhlIGJhciBhcHBlYXJpbmcgaXMgYSBQRFAtbGV2ZWwgZXZlbnQg4oCUICdTdGlja3kgQmFyJyBpcyB0aGUgbG9jYXRpb24gZm9yIHRoZVxuICAgIC8vIGludGVyYWN0aW9ucyBpbnNpZGUgaXQsIG5vdCBmb3IgdGhlIGJhciBiZWluZyBzZWVuLlxuICAgIHZpc2liaWxpdHlPZlRpbWUoJy5jcnMtc3RpY2t5JywgJ2V4cF9wZHBfc3RpY2t5X3ZpZXcnLCAnUERQJywgJ1N0aWNreSBCYXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmVlIGdpZnQtd2l0aC1wdXJjaGFzZSBjYXJkLCByaWdodCB1bmRlciB0aGUgYWRkLXRvLWNhcnQgYnV0dG9uLiBGZXRjaGVkIHJhdGhlclxuICAgKiB0aGFuIGhhcmRjb2RlZCwgbGlrZSB0aGUgcmVzdCBvZiB0aGUgcHJvZHVjdCBkYXRhIOKAlCBzZWUgYGZldGNoR2lmdGAuIFNob3duIG9ubHlcbiAgICogb25jZSB0aGUgc2VsZWN0ZWQgdmFyaWFudCdzIG93biBwcmljZSBjbGVhcnMgYEdJRlRfTUlOX1BSSUNFX0NFTlRTYCwgYW5kIGhpZGRlblxuICAgKiBhZ2FpbiBvbmNlIHRoZSBnaWZ0IGlzIGFjdHVhbGx5IGluIHRoZSBjYXJ0IOKAlCB0aGVyZSBpcyBub3RoaW5nIGxlZnQgdG8gZWFybiwgc29cbiAgICogbm90aGluZyBsZWZ0IHRvIGFkdmVydGlzZS4gQm90aCBjb25kaXRpb25zIGNhbiBjaGFuZ2Ugd2l0aG91dCBhIGBwcm9kdWN0LWluZm9gXG4gICAqIHJlLXJlbmRlciAoYSBjYXJ0LXBhZ2UgcmVtb3ZhbCwgc29tZW9uZSBlbHNlJ3MgdGFiKSwgc28gdGhpcyBvd25zIGl0cyBvd25cbiAgICogYGNhcnQtdXBkYXRlYCBzdWJzY3JpcHRpb24gcmF0aGVyIHRoYW4gb25seSByaWRpbmcgYHRoaXMuc3luY2AuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGJ1aWxkR2lmdFJvdyhyb290OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGdpZnQgPSBhd2FpdCBmZXRjaEdpZnQoR0lGVF9IQU5ETEUpO1xuICAgIGxldCBnaWZ0SW5DYXJ0ID0gYXdhaXQgY2FydEhhc1ZhcmlhbnQoZ2lmdC52YXJpYW50SWQpO1xuICAgIGNvbnN0IHNob3duID0gKCkgPT4gdGhpcy5xdWFsaWZpZXNGb3JHaWZ0KCkgJiYgIWdpZnRJbkNhcnQ7XG5cbiAgICBjb25zdCB7IHJvb3Q6IGVsLCBzeW5jIH0gPSBHaWZ0KGdpZnQsIHNob3duKTtcbiAgICBjb25zdCB0cmFja1F1YWxpZmllZCA9IHRoaXMudHJhY2tHaWZ0UXVhbGlmaWVkKCk7XG4gICAgY29uc3QgdHJhY2tWaWV3ID0gdGhpcy50cmFja0dpZnRWaWV3KHNob3duKTtcbiAgICAvLyBBIHNpbmdsZSBlbnRyeSBwb2ludCBmb3IgYm90aCB0cmFja2VycyBhbmQgdGhlIERPTSBzeW5jOiBgZ2lmdEluQ2FydGAgY2FuIGZsaXBcbiAgICAvLyBmcm9tIGEgY2FydC1kcmF3ZXIgYWN0aW9uIHRoYXQgbmV2ZXIgdG91Y2hlcyBgcHJvZHVjdC1pbmZvYCwgc28gdGhlIGNhcnQtdXBkYXRlXG4gICAgLy8gaGFuZGxlciBiZWxvdyBoYXMgdG8gcmVhY2ggdGhlIHRyYWNrZXJzIGRpcmVjdGx5IHJhdGhlciB0aGFuIG9ubHkgdGhyb3VnaFxuICAgIC8vIGB0aGlzLnN5bmNgICh3aGljaCBgYXBwbHkoKWAgb25seSB3YWxrcyBvbiBhIGBwcm9kdWN0LWluZm9gIG11dGF0aW9uKS5cbiAgICBjb25zdCBzeW5jQWxsID0gKCkgPT4ge1xuICAgICAgc3luYygpO1xuICAgICAgdHJhY2tRdWFsaWZpZWQoKTtcbiAgICAgIHRyYWNrVmlldygpO1xuICAgIH07XG5cbiAgICB0aGlzLm9yZGVyKGVsLCA3KTtcbiAgICByb290LmFwcGVuZChlbCk7XG4gICAgdGhpcy5zeW5jLnB1c2goc3luY0FsbCk7XG4gICAgc3luY0FsbCgpO1xuXG4gICAgLy8gTGlzdGVucyBmb3IgZXZlcnkgY2FydC11cGRhdGUsIG5vdCBvbmx5IG91cnM6IGBjYXJ0LWl0ZW1zYCAodGhlIGRyYXdlcidzIG93blxuICAgIC8vIHF1YW50aXR5L3JlbW92ZSBjb250cm9scykgcHVibGlzaGVzIHRoZSBzYW1lIGV2ZW50IG9uIGEgcmVtb3ZhbCwgd2hpY2ggaXMgd2hhdFxuICAgIC8vIGtlZXBzIGBnaWZ0SW5DYXJ0YCDigJQgYW5kIHNvIHRoZSBjYXJkJ3MgdmlzaWJpbGl0eSDigJQgY29ycmVjdCBlaXRoZXIgd2F5LlxuICAgIHN1YnNjcmliZUNhcnRVcGRhdGUoYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuc291cmNlID09PSAncHJvZHVjdC1mb3JtJyAmJiB0aGlzLnF1YWxpZmllc0ZvckdpZnQoKSAmJiAhZ2lmdEluQ2FydCkge1xuICAgICAgICBhd2FpdCBhZGRUb0NhcnQoZ2lmdC52YXJpYW50SWQpO1xuICAgICAgICBhd2FpdCBhcHBseURpc2NvdW50QW5kUmVmcmVzaChHSUZUX0RJU0NPVU5UX0NPREUpO1xuICAgICAgfVxuICAgICAgZ2lmdEluQ2FydCA9IGF3YWl0IGNhcnRIYXNWYXJpYW50KGdpZnQudmFyaWFudElkKTtcbiAgICAgIHN5bmNBbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcXVhbGlmaWVzRm9yR2lmdCgpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gc2VsZWN0ZWRWYXJpYW50KHRoaXMucHJvZHVjdCk7XG4gICAgcmV0dXJuICEhdmFyaWFudCAmJiBiYXNlUHJpY2VDZW50cyh2YXJpYW50LnByaWNlKSA+PSBHSUZUX01JTl9QUklDRV9DRU5UUztcbiAgfVxuXG4gIC8qKiBUaGUgc3dhdGNoLXR5cGUgb3B0aW9uJ3MgY3VycmVudCB2YWx1ZSAoTWF0ZXJpYWwsIE1ldGFsLCDigKYpIOKAlCBzZWUgYGlzU3dhdGNoT3B0aW9uYC4gKi9cbiAgcHJpdmF0ZSBzZWxlY3RlZE1hdGVyaWFsKCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMucHJvZHVjdC5vcHRpb25zLmZpbmQoKG8pID0+IGlzU3dhdGNoT3B0aW9uKG8ubmFtZSkpO1xuICAgIHJldHVybiAob3B0aW9uICYmIGdldFNlbGVjdChvcHRpb24ubmFtZSk/LnZhbHVlKSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvbiBldmVyeSBwaWNrIHRoYXQgbGFuZHMgb24gYSAqbmV3KiBxdWFsaWZ5aW5nIHZhcmlhbnQg4oCUIGluY2x1ZGluZyBzd2l0Y2hpbmdcbiAgICogYmV0d2VlbiB0d28gZGlmZmVyZW50IHF1YWxpZnlpbmcgcGlja3Mg4oCUIGJ1dCBub3Qgb24gcGFnZSBsb2FkIGV2ZW4gaWYgdGhlIGRlZmF1bHRcbiAgICogdmFyaWFudCBhbHJlYWR5IHF1YWxpZmllcywgYW5kIG5vdCBhZ2FpbiBmb3IgdGhlIHNhbWUgdmFyaWFudCBvbiBhbiB1bnJlbGF0ZWRcbiAgICogcmUtcmVuZGVyLiBUcmFja2VkIGJ5IHZhcmlhbnQgaWQgcmF0aGVyIHRoYW4gdGhlIHF1YWxpZmllcyBib29sZWFuOiB0aGF0J3Mgd2hhdFxuICAgKiBtYWtlcyBhIHF1YWxpZnlpbmctdG8tcXVhbGlmeWluZyBzd2l0Y2ggc3RpbGwgY291bnQgYXMgXCJuZXdseSBjaG9zZW5cIiwgYW5kIGRyb3BwaW5nXG4gICAqIG91dCBvZiBxdWFsaWZ5aW5nIHJlc2V0cyBpdCwgc28gY29taW5nIGJhY2sgdG8gdGhhdCBzYW1lIHZhcmlhbnQgbGF0ZXIgZmlyZXMgYWdhaW4uXG4gICAqL1xuICBwcml2YXRlIHRyYWNrR2lmdFF1YWxpZmllZCgpIHtcbiAgICBsZXQgbGFzdFZhcmlhbnRJZCA9IHRoaXMucXVhbGlmaWVzRm9yR2lmdCgpID8gc2VsZWN0ZWRWYXJpYW50KHRoaXMucHJvZHVjdCk/LmlkIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucXVhbGlmaWVzRm9yR2lmdCgpKSB7XG4gICAgICAgIGxhc3RWYXJpYW50SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBzZWxlY3RlZFZhcmlhbnQodGhpcy5wcm9kdWN0KTtcbiAgICAgIGlmICh2YXJpYW50ICYmIHZhcmlhbnQuaWQgIT09IGxhc3RWYXJpYW50SWQpIHtcbiAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZnJlZV9naWZ0X3F1YWxpZmllZCcsICdRdWFsaWZpZWQgZm9yIEZyZWUgR2lmdCcsICdvdGhlcicsIHRoaXMuc2VsZWN0ZWRNYXRlcmlhbCgpKTtcbiAgICAgICAgbGFzdFZhcmlhbnRJZCA9IHZhcmlhbnQuaWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIHRoZSBjYXJkIGFjdHVhbGx5IGFwcGVhcnMg4oCUIGBzaG93bmAgZmxpcHBpbmcgZnJvbSBoaWRkZW4gdG9cbiAgICogdmlzaWJsZSwgbm90IHNjcm9sbCBwb3NpdGlvbiDigJQgaW5jbHVkaW5nIHRoZSBmaXJzdCB0aW1lLCBpZiB0aGUgZGVmYXVsdCB2YXJpYW50XG4gICAqIGFscmVhZHkgcXVhbGlmaWVzLiBOb3QgYHZpc2liaWxpdHlPZlRpbWVgOiB0aGlzIHRyYWNrcyB0aGUgY2FyZCdzIG93biBzaG93L2hpZGVcbiAgICogc3RhdGUgKHF1YWxpZmllcyAqYW5kKiBub3QgYWxyZWFkeSBpbiBjYXJ0KSwgbm90IHZpZXdwb3J0IGR3ZWxsIHRpbWUsIGFuZCBuZWVkc1xuICAgKiBgZXZlbnRfbG9jYCByZWFkIGZyZXNoIGF0IHRoZSBtb21lbnQgaXQgYXBwZWFycyByYXRoZXIgdGhhbiBmaXhlZCBhdCBjYWxsIHRpbWUuXG4gICAqL1xuICBwcml2YXRlIHRyYWNrR2lmdFZpZXcoc2hvd246ICgpID0+IGJvb2xlYW4pIHtcbiAgICBsZXQgd2FzU2hvd24gPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaXNTaG93biA9IHNob3duKCk7XG4gICAgICBpZiAoaXNTaG93biAmJiAhd2FzU2hvd24pIHtcbiAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZnJlZV9naWZ0X3ZpZXcnLCAnRnJlZSBHaWZ0JywgJ3ZpZXcnLCB0aGlzLnNlbGVjdGVkTWF0ZXJpYWwoKSk7XG4gICAgICB9XG4gICAgICB3YXNTaG93biA9IGlzU2hvd247XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRNZWRpYUNvbHVtbigpIHtcbiAgICBjb25zdCBtZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJvZHVjdF9fbWVkaWEtd3JhcHBlcicpITtcbiAgICBtZWRpYS5jbGFzc0xpc3QuYWRkKCdjcnMtbWVkaWEnKTtcblxuICAgIC8vIFwiVGhpcyBQcm9kdWN0IENhbiBCZSBDcmVhdGVkIFdpdGhcIiBtb3ZlcyBvdXQgb2YgdGhlIGluZm8gY29sdW1uIGludG8gdGhlIGdhbGxlcnkuXG4gICAgY29uc3QgY3JlYXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuY3VzdG9tUHJvZHVjdEltYWdlJyk7XG4gICAgY3JlYXRlZD8uY2xhc3NMaXN0LmFkZCgnY3JzLWNyZWF0ZWQnKTtcblxuICAgIC8vIFRoZSBkZXNpZ24gY2xvc2VzIHRoYXQgYmxvY2sgd2l0aCBhIHJ1bGUgYW5kIGEgY2FwdGlvbiwgd2hpY2ggaXMgb25lIG9mIHRoaXNcbiAgICAvLyBwcm9kdWN0J3Mgb3duIHNwZWMgbGluZXMgcmF0aGVyIHRoYW4gZml4ZWQgY29weS5cbiAgICBjb25zdCBjYXB0aW9uID0gaW5jbHVzaW9uQ2FwdGlvbih0aGlzLmRlc2NyaXB0aW9uLnNwZWNzKTtcbiAgICBpZiAoY3JlYXRlZCAmJiBjYXB0aW9uKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9ICdjcnMtY3JlYXRlZF9fY2FwdGlvbic7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGNhcHRpb247XG4gICAgICBjcmVhdGVkLmFwcGVuZChlbCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FsbGVyeSA9IEdhbGxlcnkoXG4gICAgICAoKSA9PiB0aGlzLmltYWdlc1tzZWxlY3RlZFZhbHVlcyh0aGlzLnByb2R1Y3QpW3RoaXMuaW1hZ2VJbmRleF1dLFxuICAgICAgY3JlYXRlZCxcbiAgICApO1xuICAgIHRoaXMuc3luYy5wdXNoKGdhbGxlcnkuc3luYyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRoZW1lIGNsb3NlcyBpdHMgc2l6ZS1ndWlkZSBkcmF3ZXIgd2l0aCBhIEZvbnQgQXdlc29tZSBnbHlwaC4gU3dhcCBpbiB0aGVcbiAgICogc2FtZSBTVkcgdGhlIHJlZGVzaWduJ3Mgb3duIGRyYXdlcnMgdXNlLCBzbyB0aGUgdHdvIHJlYWQgYXMgb25lIGNvbXBvbmVudC5cbiAgICogUnVucyBvbiBldmVyeSBvcGVuOiB0aGUgdGhlbWUgcmVidWlsZHMgdGhlIGRyYXdlcidzIG1hcmt1cCBlYWNoIHRpbWUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGRyZXNzR3VpZGVDbG9zZSgpIHtcbiAgICBjb25zdCBidG4gPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCcjY3VzdG9tX25vdGlmaWNhdGlvbnMgYnV0dG9uLmNsb3NlJyk7XG4gICAgaWYgKCFidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykpIGJ0bi5pbm5lckhUTUwgPSBDTE9TRV9JQ09OO1xuICB9XG5cbiAgcHJpdmF0ZSBydGUoaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcml2YXRlIHRydXN0Um93KCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ2Nycy10cnVzdCc7XG4gICAgZWwuaW5uZXJIVE1MID1cbiAgICAgIGA8c3BhbiBjbGFzcz1cImNycy10cnVzdF9faXRlbVwiPjxpbWcgY2xhc3M9XCJjcnMtdHJ1c3RfX2ljb25cIiBzcmM9XCIke2ZsYWdVc2F9XCIgYWx0PVwiXCIgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCI+SGFuZGNyYWZ0ZWQgaW4gVVNBPC9zcGFuPmAgK1xuICAgICAgYDxzcGFuIGNsYXNzPVwiY3JzLXRydXN0X19pdGVtXCI+PHNwYW4gY2xhc3M9XCJjcnMtdHJ1c3RfX2ljb24gY3JzLXRydXN0X19pY29uLS1zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke2lubGluZVN2Zyh3YXJyYW50eSl9PC9zcGFuPkxpZmV0aW1lIFdhcnJhbnR5PC9zcGFuPmA7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBoZWxwUm93KCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ2Nycy1oZWxwJztcbiAgICBlbC5pbm5lckhUTUwgPSAnTmVlZCBIZWxwPyBDYWxsL1RleHQgPGEgaHJlZj1cInRlbDo2NjI2NjkxNTg2XCI+NjYyLTY2OS0xNTg2PC9hPiDinaTvuI8nO1xuICAgIC8vIGVsLnF1ZXJ5U2VsZWN0b3IoJ2EnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIC8vICAgcHVzaERhdGEoJ2V4cF9wZHBfaGVscF9jYWxsJywgJzY2Mi02NjktMTU4NicsICdjbGljaycsICdQRFAnKSxcbiAgICAvLyApO1xuICAgIHJldHVybiBlbDtcbiAgfVxufVxuXG5uZXcgUGRwUmVkZXNpZ24oKS5pbml0KCk7XG4iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsNywxNiwxNywxOF0sIm1hcHBpbmdzIjoiOzs7O0NBQUEsSUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTztFQUMvQyxPQUFPLFlBQVksT0FBTyxhQUFhLENBQUM7RUFDeEMsT0FBTyxVQUFVLEtBQUs7R0FDcEIsT0FBTztHQUNQLFlBQVk7R0FDWixZQUFZO0dBQ1osWUFBWTtHQUNaLFdBQVc7RUFDYixDQUFDO0VBQ0QsSUFBSSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE9BQU8sU0FBUztDQUM5RDtDQUNBLElBQU0sVUFBVSxhQUFhO0VBQzNCLE9BQU8sSUFBSSxTQUFTLFlBQVk7R0FDOUIsTUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0dBQy9DLElBQUksU0FBUztJQUNYLFFBQVEsT0FBTztJQUNmO0dBQ0Y7R0FDQSxNQUFNLFdBQVcsSUFBSSx1QkFBdUI7SUFDMUMsTUFBTSxXQUFXLFNBQVMsY0FBYyxRQUFRO0lBQ2hELElBQUksVUFBVTtLQUNaLFFBQVEsUUFBUTtLQUNoQixTQUFTLFdBQVc7SUFDdEI7R0FDRixDQUFDO0dBQ0QsU0FBUyxRQUFRLFNBQVMsaUJBQWlCO0lBQ3pDLFdBQVc7SUFDWCxTQUFTO0dBQ1gsQ0FBQztFQUNILENBQUM7Q0FDSDtDQUNBLElBQU0sWUFBWSxFQUFFLE1BQU0sVUFBVTtFQUNsQyxRQUFRLElBQ04sV0FBVyxLQUFLLFNBQVMsSUFBSSxJQUM3QiwwRUFDRjtDQUNGO0NBeUlBLElBQU0sbUJBQW1CLFNBQVM7RUFDaEMsSUFBSSxNQUFNLFlBQVksV0FBVztHQUMvQixJQUFJLE9BQU8sT0FBTyxXQUFXLFlBQVk7SUFDdkMsY0FBYyxHQUFHO0lBQ2pCLE9BQU8sUUFBUSxPQUFPLE1BQU0sV0FBVztHQUN6QztFQUNGLEdBQUcsR0FBRztDQUNSO0NBQ0EsSUFBTSxvQkFBb0IsVUFBVSxXQUFXLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFRO0VBQ3hHLElBQUk7RUFDSixJQUFJO0VBQ0osV0FBVyxJQUFJLHFCQUNiLFNBQVMsU0FBUztHQUNoQixJQUFJLFFBQVEsRUFBRSxDQUFDLG1CQUFtQixNQUNoQyxRQUFRLGlCQUFpQjtJQUN2QixTQUNFLFdBQ0EsUUFBUSxFQUFFLENBQUMsT0FBTyxRQUFRLFdBQVcsZUFBZSxJQUNwRCxRQUNBLFlBQ0Y7SUFDQSxTQUFTLFdBQVc7R0FDdEIsR0FBRyxJQUFJO1FBQ0Y7SUFDTCxJQUFJLGdDQUFnQyxNQUFNO0lBQzFDLGFBQWEsS0FBSztHQUNwQjtFQUNGLEdBQ0EsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQzNCO0VBQ0EsSUFBSSxPQUFPLGFBQWEsVUFBVTtHQUNoQyxNQUFNLFVBQVUsU0FBUyxjQUFjLFFBQVE7R0FDL0MsSUFBSSxTQUNGLFNBQVMsUUFBUSxPQUFPO0VBRTVCLE9BQ0UsU0FBUyxRQUFRLFFBQVE7Q0FFN0I7Q0ErQ0EsSUFBTSxPQUFPLE1BQU0sUUFBUSxXQUFXO0VBQ3BDLElBQUk7RUFDSixRQUFRLE9BQVI7R0FDRSxLQUFLO0lBQ0gsUUFBUTtJQUNSO0dBQ0YsS0FBSztJQUNILFFBQVE7SUFDUjtHQUNGLEtBQUs7SUFDSCxRQUFRO0lBQ1I7R0FDRixLQUFLO0lBQ0gsUUFBUTtJQUNSO0VBQ0o7RUFDQSxRQUFRLElBQUksU0FBUyxRQUFRLEdBQUcsTUFBTSxtQ0FBbUM7Q0FDM0U7Ozs7Ozs7Ozs7OztDRTVRQSxJQUFNLFNBQVM7Q0FTZixJQUFNLGNBQWMsU0FBZ0M7RUFDbEQsTUFBTSxRQUFRLEtBQUssTUFBTSxNQUFNO0VBQy9CLElBQUksQ0FBQyxPQUFPLE9BQU87RUFDbkIsTUFBTSxNQUFNLE1BQU07RUFHbEIsTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLFlBQVksR0FBRyxHQUFHLElBQUksWUFBWSxHQUFHLENBQUM7RUFDL0QsTUFBTSxjQUFjLE1BQU0sTUFBTSxnQkFBZ0IsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0VBQ25FLE1BQU0sVUFBVSxjQUFjLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSTtFQUVsRCxPQUFPO0dBQ0w7R0FDQSxZQUFZLGNBQWMsSUFBSSxPQUFPO0dBQ3JDLFVBQVUsUUFBUSxNQUFNLFNBQVMsQ0FBQyxHQUFHLE1BQU07R0FDM0MsVUFBVSxjQUFjLElBQUksU0FBUyxNQUFNLElBQUk7RUFDakQ7Q0FDRjtDQUVBLElBQWEsY0FBYyxTQUFpQjtFQUMxQyxNQUFNLFNBQVMsV0FBVyxJQUFJO0VBQzlCLElBQUksQ0FBQyxRQUFRLE9BQU87RUFDcEIsTUFBTSxFQUFFLEtBQUssZUFBZTtFQUM1QixNQUFNLE1BQU0sYUFBYSxLQUFLLElBQUksSUFBSSxZQUFZLEdBQUcsR0FBRyxJQUFJLFlBQVksR0FBRyxDQUFDLElBQUk7RUFDaEYsTUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBQSxDQUFLLFFBQVEsT0FBTyxFQUFFO0VBQ3JFLE1BQU0sT0FBTyxNQUFNLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQyxJQUFJO0VBQzdDLE9BQU8sT0FBTyxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUc7Q0FDeEM7Q0FVQSxJQUFhLHFCQUFxQixTQUFpQjtFQUNqRCxNQUFNLFVBQVUsS0FBSyxLQUFLO0VBQzFCLE1BQU0sUUFBUSxRQUFRLE1BQU0scUJBQXFCO0VBQ2pELElBQUksQ0FBQyxPQUFPLE9BQU87RUFDbkIsTUFBTSxHQUFHLGVBQWU7RUFFeEIsT0FEa0IsWUFBWSxLQUFLLFdBQzVCLElBQVksY0FBYztDQUNuQztDQUdBLElBQWEsY0FBYyxVQUFrQixVQUFrQjtFQUM3RCxNQUFNLFNBQVMsV0FBVyxRQUFRO0VBQ2xDLElBQUksQ0FBQyxRQUFRLE9BQU8sT0FBTyxLQUFLO0VBRWhDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsTUFBTSxRQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHO0VBQzVELE1BQU0sVUFBVSxPQUFPLFdBQ25CLElBQUksUUFBUSx5QkFBeUIsT0FBTyxRQUFRLElBQ3BEO0VBRUosT0FBTyxTQUFTLFFBQVEsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLGFBQWEsT0FBTyxPQUFPO0NBQ3pGOzs7O0NDekRBLElBQWEscUJBQ1gsTUFBTSxHQUFHLFNBQVMsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLE1BQU0sRUFBRSxLQUFLLENBQUM7Q0FTdkQsSUFBYSxrQkFBa0IsVUFBa0I7RUFDL0MsTUFBTSxPQUFPLE9BQVEsT0FBcUUsU0FBUyxVQUFVLElBQUk7RUFDakgsT0FBTyxPQUFPLElBQUksUUFBUSxPQUFPO0NBQ25DO0NBYUEsSUFBYSxZQUFZLE9BQU8sV0FBa0M7RUFDaEUsTUFBTSxPQUFPLE1BQU0sTUFBTSxhQUFhLFFBQVEsQ0FBQyxDQUFDLE1BQU0sTUFBTSxFQUFFLEtBQUssQ0FBQztFQUNwRSxNQUFNLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsTUFBTSxXQUFXO0VBRTdELE1BQU0sUUFBUSxJQUFJLGNBQWMsSUFBSSxDQUFDLENBQUUsWUFBYSxLQUFLO0VBRXpELE1BQU0sUUFBUSxJQUFJLGNBQTJCLGtDQUE4QjtFQUMzRSxNQUFNLE1BQU0sTUFBTSxjQUNoQixNQUFNLGNBQWMsaUJBQWlCLElBQUksMEJBQTBCLHNDQUNyRSxDQUFDLENBQUUsWUFBYSxLQUFLO0VBRXJCLE1BQU0sRUFBRSxhQUFhLE1BQU0sTUFBTSxhQUFhLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxNQUFNLEVBQUUsS0FBSyxDQUFDO0VBRS9FLE9BQU87R0FBRTtHQUFPLE9BQU8sa0JBQWtCLEdBQUc7R0FBRyxXQUFXLFNBQVMsRUFBRSxDQUFDO0VBQUc7Q0FDM0U7Q0FPQSxJQUFhLGFBQWEsV0FDeEIsU0FBUyxjQUFpQyx3QkFBd0IsT0FBTyxJQUFJO0NBRS9FLElBQWEsYUFBYSxRQUFnQixVQUFrQjtFQUMxRCxNQUFNLFNBQVMsVUFBVSxNQUFNO0VBQy9CLElBQUksQ0FBQyxVQUFVLE9BQU8sVUFBVSxPQUFPO0VBQ3ZDLE9BQU8sUUFBUTtFQUNmLE9BQU8sY0FBYyxJQUFJLE1BQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxDQUFDLENBQUM7Q0FDN0Q7Q0FFQSxJQUFhLGtCQUFrQixZQUM3QixRQUFRLFFBQVEsS0FBSyxNQUFNLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUU7Q0FRM0QsSUFBYSxtQkFBbUIsWUFBcUI7RUFDbkQsTUFBTSxXQUFXLGVBQWUsT0FBTztFQUN2QyxPQUFPLFFBQVEsU0FBUyxNQUFNLE1BQU0sRUFBRSxRQUFRLE9BQU8sR0FBRyxNQUFNLE1BQU0sU0FBUyxFQUFFLENBQUM7Q0FDbEY7Q0FXQSxJQUFhLGdCQUFnQixXQUMzQixFQUFFLE9BQU8sT0FBTyxXQUFXLEtBQUssT0FBTyxPQUFPLE9BQU87Q0FPdkQsSUFBYSxvQkFBb0IsWUFBcUI7RUFDcEQsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxRQUFRLEtBQUs7R0FDL0MsTUFBTSwwQkFBVSxJQUFJLElBQXlCO0dBQzdDLFFBQVEsU0FBUyxTQUFTLE1BQU07SUFDOUIsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCO0lBQ3ZCLE1BQU0sUUFBUSxFQUFFLFFBQVE7SUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEdBQUcsUUFBUSxJQUFJLHVCQUFPLElBQUksSUFBSSxDQUFDO0lBQ3JELFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBRSxJQUFJLEVBQUUsZUFBZSxHQUFHO0dBQzlDLENBQUM7R0FDRCxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUNuRSxJQUFJLFFBQVEsT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRyxRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsT0FBTztFQUN0RztFQUNBLE9BQU87Q0FDVDtDQU1BLElBQWEsZ0JBQWdCLFNBQWtCLFVBQWtCO0VBQy9ELE1BQU0sTUFBOEIsQ0FBQztFQUNyQyxRQUFRLFNBQVMsU0FBUyxNQUFNO0dBQzlCLE1BQU0sUUFBUSxFQUFFLFFBQVE7R0FDeEIsSUFBSSxFQUFFLGtCQUFrQixDQUFDLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRSxlQUFlO0VBQ3JFLENBQUM7RUFDRCxPQUFPO0NBQ1Q7Q0FHQSxJQUFhLGVBQWUsU0FBa0IsT0FBZSxVQUFrQjtFQUM3RSxNQUFNLFdBQVcsZUFBZSxPQUFPO0VBQ3ZDLE9BQU8sUUFBUSxTQUFTLE1BQ3JCLE1BQ0MsRUFBRSxhQUNGLEVBQUUsUUFBUSxXQUFXLFNBQ3JCLEVBQUUsUUFBUSxPQUFPLEdBQUcsTUFBTSxNQUFNLFNBQVMsTUFBTSxTQUFTLEVBQUUsQ0FDOUQ7Q0FDRjs7OztDQzVJQSxJQUFNLFlBQVksU0FBaUI7RUFDakMsTUFBTSxLQUFLLFNBQVMsY0FBYyxLQUFLO0VBQ3ZDLEdBQUcsWUFBWTtFQUNmLE9BQU8sR0FBRyxZQUFhLFFBQVEsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLO0NBQ2pEO0NBUUEsSUFBYSxvQkFBb0IsZ0JBQTZCO0VBQzVELE1BQU0sY0FBYyxTQUFTLGNBQWMsb0JBQW9CLENBQUMsRUFBRSxhQUFhLEtBQUs7RUFDcEYsTUFBTSxRQUFrQixDQUFDO0VBQ3pCLE1BQU0sUUFBdUIsQ0FBQztFQUU5QixZQUFZLGlCQUE4QixZQUFZLENBQUMsQ0FBQyxTQUFTLE1BQU07R0FHckUsTUFBTSxVQURRLEVBQUUsVUFBVSxNQUFNLGFBQWEsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxPQUNwRCxDQUFBLENBQU0sUUFBUSxTQUFTLEtBQUssV0FBVyxHQUFHLENBQUM7R0FFM0QsSUFBSSxRQUFRLFVBQVUsR0FBRztJQUN2QixNQUFNLEtBQUssR0FBRyxRQUFRLEtBQUssU0FBUyxLQUFLLFFBQVEsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5RDtHQUNGO0dBRUEsSUFBSSxlQUFlLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLGdCQUFnQixFQUFFLE1BQU0sYUFBYTtHQUN0RixJQUFJLEVBQUUsWUFBYSxLQUFLLEdBQUcsTUFBTSxLQUFLLEVBQUUsVUFBVSxJQUFJLENBQWdCO0VBQ3hFLENBQUM7RUFFRCxPQUFPO0dBQUU7R0FBTztFQUFNO0NBQ3hCO0NBT0EsSUFBYSxvQkFBb0IsVUFDL0IsTUFBTSxNQUFNLFNBQVMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLE1BQU0sTUFBTSxTQUFTLGFBQWEsS0FBSyxJQUFJLENBQUM7Ozs7Q0N4QzNGLHVCQUFlOzs7Ozs7OztDQ0FmLElBQUksVUFBVTtDQVFkLElBQWEsYUFBYSxRQUFnQjtFQUN4QyxNQUFNLEtBQUssTUFBTTtFQUNqQixPQUFPLElBQ0osUUFBUSxrQkFBa0IsR0FBRyxPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ3ZELFFBQVEscUJBQXFCLEdBQUcsT0FBTyxRQUFRLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUMzRCxRQUFRLHFCQUFxQixHQUFHLE9BQU8sVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFO0NBQ2pFOzs7O0NDZEEsU0FBUyxlQUFlLFFBQVEsT0FBTztFQUNyQyxJQUFJLFNBQVMsUUFBUSxPQUFPLFVBQVUsV0FBVztFQUNqRCxJQUFJLE1BQU0sUUFBUSxLQUFLLEdBQUc7R0FDeEIsS0FBSyxNQUFNLEtBQUssT0FBTyxlQUFlLFFBQVEsQ0FBQztHQUMvQztFQUNGO0VBQ0EsT0FBTyxZQUFZLGlCQUFpQixPQUFPLFFBQVEsU0FBUyxlQUFlLE9BQU8sS0FBSyxDQUFDLENBQUM7Q0FDM0Y7Q0FDQSxTQUFTLElBQUksTUFBTSxPQUFPLE1BQU07RUFDOUIsSUFBSSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUM7RUFDdkQsTUFBTSxFQUFFLFVBQVUsR0FBRyxlQUFlLFNBQVMsQ0FBQztFQUM5QyxNQUFNLEtBQUssU0FBUyxjQUFjLElBQUk7RUFDdEMsS0FBSyxNQUFNLENBQUMsS0FBSyxVQUFVLE9BQU8sUUFBUSxVQUFVLEdBQ2xELElBQUksSUFBSSxXQUFXLElBQUksS0FBSyxPQUFPLFVBQVUsWUFDM0MsR0FBRyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLO09BQ2hELElBQUksVUFBVSxNQUNuQixHQUFHLGFBQWEsS0FBSyxFQUFFO09BQ2xCLElBQUksVUFBVSxTQUFTLFNBQVMsTUFDckMsR0FBRyxhQUFhLEtBQUssT0FBTyxLQUFLLENBQUM7RUFHdEMsZUFBZSxJQUFJLFFBQVE7RUFDM0IsT0FBTztDQUNUO0NBQ0EsSUFBTSxPQUFPOzs7O0NDaEJiLElBQU0sV0FBK0I7RUFDbkMsQ0FBQyxxQkFBcUIsNkRBQTZEO0VBQ25GLENBQUMsZ0NBQWdDLDZEQUE2RDtFQUM5RixDQUFDLHVCQUF1Qiw2REFBNkQ7Q0FDdkY7Q0FFQSxJQUFhLGFBQWEsVUFDeEIsU0FBUyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLFNBQVMsRUFBRSxDQUFDO0NBRzlELElBQWEsa0JBQWtCLFNBQWlCLGlDQUFpQyxLQUFLLElBQUk7Q0FTMUYsSUFBYSxnQkFBMkI7RUFBRSxRQUFRO0VBQVcsS0FBSztDQUFNO0NBRXhFLElBQU0sYUFBYSxPQUFlLFlBRTlCLG9CQUFDLFVBQUQ7RUFBUSxPQUFNO0VBQWlCLE1BQUs7RUFBa0I7WUFDbkQ7Q0FDSyxDQUFBO0NBVVosSUFBYSx5QkFBeUIsU0FBUyxjQUEyQixhQUFhO0NBUXZGLElBQWEsY0FDWCxRQUNBLGlCQUNBLGFBQ0EsWUFBdUIsa0JBQ3BCO0VBQ0gsSUFBSSxlQUFlLE9BQU8sSUFBSSxHQUFHLE9BQU8sVUFBVSx3QkFBd0IsZ0JBQWdCLFNBQVMsQ0FBQztFQUlwRyxNQUFNLFlBQVksUUFBUSxLQUFLLE9BQU8sSUFBSSxJQUFJLGlCQUFpQixJQUFJO0VBQ25FLE9BQU8sWUFDSCxVQUFVLFVBQVUsWUFBYSxLQUFLLEtBQUssb0JBQW9CLFlBQVksU0FBUyxDQUFDLElBQ3JGO0NBQ047Q0FVQSxJQUFhLGVBQ1gsU0FDQSxRQUNBLE9BQ0EsT0FDQSxZQUF1QixrQkFDcEI7RUFDSCxNQUFNLFdBQVcsZUFBZSxPQUFPLElBQUk7RUFDM0MsTUFBTSxRQUFTLG9CQUFDLFFBQUQsRUFBTSxPQUFNLHNCQUF1QixDQUFBO0VBRWxELE1BQU0sVUFBVSxnQkFFWixvQkFBQyxVQUFEO0dBQ0UsT0FBTyxXQUFXLGVBQWU7R0FDakMsTUFBSztHQUNMLGNBQVk7R0FDWixlQUFlO0lBQ2IsVUFBVSxPQUFPLE1BQU0sV0FBVztJQUNsQyxTQUNFLFdBQVcsR0FBRyxVQUFVLE9BQU8sb0JBQW9CLEdBQUcsVUFBVSxPQUFPLGVBQ3ZFLGFBQ0EsU0FDQSxVQUFVLEdBQ1o7R0FDRjthQUVDLFdBQ0ksQ0FFRyxvQkFBQyxRQUFEO0lBQ0UsT0FBTTtJQUNOLE9BQU8sb0JBQW9CLFVBQVUsV0FBVztJQUNoRCxlQUFZO0dBQ2IsQ0FBQSxHQUVGLG9CQUFDLFFBQUQ7SUFBTSxPQUFNO2NBQXFCO0dBQWtCLENBQUEsQ0FDdEQsSUFDQSxTQUFTLGVBQWUsV0FBVztFQUNqQyxDQUFBO0VBR1osTUFBTSxPQUNKLG9CQUFDLE9BQUQ7R0FBSyxPQUFPLGlCQUFpQixXQUFXLDRCQUE0QjthQUNqRSxPQUFPLE9BQU8sSUFBSSxNQUFNO0VBQ3RCLENBQUE7RUFHUCxNQUFNLE9BQ0oscUJBQUMsT0FBRDtHQUFLLE9BQU07YUFBWCxDQUNFLHFCQUFDLE9BQUQ7SUFBSyxPQUFNO2NBQVgsQ0FDRSxxQkFBQyxRQUFEO0tBQU0sT0FBTTtlQUFaO01BQ0csT0FBTztNQUFLO01BQUU7S0FDWDtRQUNMLFNBQVMsU0FBUyxlQUFlLEVBQUUsQ0FDakM7T0FDSixJQUNFOztFQUdQLElBQUksVUFBVSxLQUFLLE1BQU0sWUFBWSxzQkFBc0IsT0FBTyxPQUFPLE9BQU8sTUFBTSxDQUFDO0VBRXZGLE1BQU0sYUFBYTtHQUNqQixNQUFNLFVBQVUsVUFBVSxPQUFPLElBQUksQ0FBQyxFQUFFO0dBQ3hDLE1BQU0sY0FBYyxVQUFVLElBQUksWUFBWTtHQUM5QyxLQUFLLGlCQUE4QixjQUFjLENBQUMsQ0FBQyxTQUFTLE9BQU87SUFDakUsR0FBRyxVQUFVLE9BQU8sZUFBZSxHQUFHLFFBQVEsVUFBVSxPQUFPO0lBQy9ELEdBQUcsVUFBVSxPQUFPLGtCQUFrQixDQUFDLFlBQVksU0FBUyxPQUFPLEdBQUcsUUFBUSxLQUFNLENBQUM7R0FDdkYsQ0FBQztFQUNIO0VBRUEsT0FBTztHQUFFO0dBQU07RUFBSztDQUN0QjtDQU9BLElBQWEsV0FDWCxTQUNBLGlCQUNBLGdCQUNHO0VBQ0gsTUFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0VBQ3pDLEtBQUssWUFBWTtFQUVqQixNQUFNLFFBQXdCLENBQUM7RUFFL0IsUUFBUSxRQUFRLFNBQVMsUUFBUSxVQUFVO0dBQ3pDLElBQUksQ0FBQyxhQUFhLE1BQU0sR0FBRztHQUMzQixNQUFNLFFBQVEsV0FBVyxRQUFRLGlCQUFpQixXQUFXO0dBQzdELE1BQU0sUUFBUSxZQUFZLFNBQVMsUUFBUSxPQUFPLEtBQUs7R0FDdkQsTUFBTSxLQUFLLE1BQU0sSUFBSTtHQUNyQixLQUFLLE9BQU8sTUFBTSxJQUFJO0VBQ3hCLENBQUM7RUFFRCxPQUFPO0dBQUU7R0FBTSxZQUFZLE1BQU0sU0FBUyxPQUFPLEdBQUcsQ0FBQztFQUFFO0NBQ3pEOzs7Ozs7OztDQ3ZLQSxJQUFNLFdBQVc7Q0FNakIsSUFBYSxlQUNYO0NBYUYsSUFBYSw0QkFBNEI7RUFDdkMsU0FBUyxpQkFBaUIsVUFBVSxNQUFNO0dBRXhDLE1BQU0sUUFEVyxFQUFFLE9BQXVCLFFBQVEsdUNBQ3BDLENBQUEsRUFBUztHQUN2QixJQUFJLENBQUMsT0FBTyxVQUFVLFNBQVMsVUFBVSxHQUFHO0dBRTVDLFNBQVMsaUJBQWlCLDhDQUE4QyxDQUFDLENBQUMsU0FBUyxVQUFVO0lBQzNGLElBQUksVUFBVSxPQUFPLE1BQU0sVUFBVSxRQUFRLFlBQVksV0FBVztHQUN0RSxDQUFDO0VBQ0gsQ0FBQztDQUNIO0NBcUJBLElBQWEsaUNBQWlDO0VBQzVDLFNBQVMsaUJBQWlCLFVBQVUsTUFBTTtHQUN4QyxJQUFJLENBQUUsRUFBRSxPQUF1QixVQUFVLDJCQUEyQixHQUFHO0dBQ3ZFLFNBQVMsY0FBaUMsb0NBQW9DLENBQUMsRUFBRSxNQUFNO0VBQ3pGLENBQUM7Q0FDSDtDQWdCQSxJQUFhLGFBQ1gsTUFDQSxPQUNBLE1BQ0EsS0FDQSxPQUFPLE9BQ1AsT0FBa0Isa0JBQ2Y7RUFDSCxNQUFNLGNBQWM7R0FDbEIsS0FBSyxVQUFVLE9BQU8sa0JBQWtCO0dBQ3hDLFNBQVMsS0FBSyxVQUFVLE9BQU8saUJBQWlCO0dBQ2hELFNBQVMsb0JBQW9CLFdBQVcsS0FBSztHQUM3QyxpQkFBaUIsS0FBSyxPQUFPLEdBQUcsUUFBUTtFQUMxQztFQUdBLE1BQU0sYUFBYSxPQUFlLFNBQWlCO0dBQ2pELE1BQU07R0FDTixTQUFTLE9BQU8sTUFBTSxTQUFTLEdBQUc7RUFDcEM7RUFFQSxNQUFNLFNBQVMsTUFBcUI7R0FDbEMsSUFBSSxFQUFFLFFBQVEsVUFBVSxNQUFNO0VBQ2hDO0VBRUEsTUFBTSxXQUNKLG9CQUFDLFVBQUQ7R0FDRSxPQUFNO0dBQ04sTUFBSztHQUNMLGNBQVc7R0FDWCxlQUFlLFVBQVUsV0FBVyxLQUFLLFNBQVMsT0FBTztFQUMxRCxDQUFBO0VBRUgsU0FBUyxZQUFZO0VBRXJCLE1BQU0sT0FDSixxQkFBQyxPQUFEO0dBQUssT0FBTTtHQUFhLE1BQUs7R0FBUyxjQUFXO0dBQU8sY0FBWTthQUFwRSxDQUNFLG9CQUFDLE9BQUQ7SUFDRSxPQUFNO0lBQ04sZUFBZSxVQUFVLFdBQVcsS0FBSyxZQUFZLFVBQVU7R0FDaEUsQ0FBQSxHQUNELHFCQUFDLE9BQUQ7SUFBSyxPQUFNO2NBQVgsQ0FFRSxxQkFBQyxPQUFEO0tBQUssT0FBTTtlQUFYLENBQ0csVUFDRCxvQkFBQyxNQUFEO01BQUksT0FBTTtnQkFBcUI7S0FBVSxDQUFBLENBQ3RDO1FBQ0wsb0JBQUMsT0FBRDtLQUFLLE9BQU07ZUFBb0I7SUFBVSxDQUFBLENBQ3RDO0tBQ0Y7O0VBR1AsU0FBUyxpQkFBaUIsV0FBVyxLQUFLO0VBQzFDLFNBQVMsS0FBSyxZQUFZLElBQUk7RUFDOUIsU0FBUyxLQUFLLFVBQVUsSUFBSSxpQkFBaUI7RUFDN0MsNEJBQTRCLEtBQUssVUFBVSxJQUFJLGtCQUFrQixDQUFDO0VBQ2xFLEtBQU0sY0FBYyxvQkFBb0IsQ0FBQyxDQUF1QixNQUFNO0VBQ3RFLFNBQVMsR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLFFBQVEsTUFBTSxTQUFTLEtBQUssR0FBRztDQUNqRTtDQXFCQSxJQUFhLGFBQWEsT0FBcUIsS0FBYSxVQUFrQjtFQUU1RSxJQUFJLE9BQXlEO0VBRTdELE9BQ0Usb0JBQUMsT0FBRDtHQUFLLE9BQU07YUFDUixNQUFNLEtBQUssU0FBUztJQUNuQixNQUFNLFNBQVUsb0JBQUMsUUFBRDtLQUFNLE9BQU07S0FBbUIsZUFBWTtJQUFRLENBQUE7SUFDbkUsT0FBTyxZQUFZO0lBRW5CLElBQUksS0FBSyxNQUNQLE9BQ0Usb0JBQUMsT0FBRDtLQUFLLE9BQU07ZUFDVCxxQkFBQyxVQUFEO01BQVEsT0FBTTtNQUFtQixNQUFLO01BQVMsU0FBUyxLQUFLO2dCQUE3RCxDQUNFLG9CQUFDLFFBQUQsRUFBQSxVQUFPLEtBQUssTUFBWSxDQUFBLEdBQ3ZCLE1BQ0s7O0lBQ0wsQ0FBQTtJQUlULE1BQU0sUUFDSixvQkFBQyxPQUFEO0tBQUssT0FBTTtLQUFvQixRQUFBO2VBQzVCLEtBQUs7SUFDSCxDQUFBO0lBR1AsTUFBTSxPQUNKLHFCQUFDLFVBQUQ7S0FDRSxPQUFNO0tBQ04sTUFBSztLQUNMLGlCQUFjO0tBQ2QsZUFBZTtNQUNiLE1BQU0sVUFBVSxLQUFLLGFBQWEsZUFBZSxNQUFNO01BQ3ZELElBQUksUUFBUSxLQUFLLFNBQVMsTUFBTTtPQUM5QixLQUFLLEtBQUssYUFBYSxpQkFBaUIsT0FBTztPQUMvQyxLQUFLLE1BQU0sU0FBUztNQUN0QjtNQUNBLEtBQUssYUFBYSxpQkFBaUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUNuRCxNQUFNLFNBQVM7TUFDZixPQUFPLFVBQVUsT0FBTztPQUFFO09BQU07TUFBTTtNQUN0QyxJQUFJLENBQUMsU0FBUztPQUNaLFNBQVMsT0FBTyxLQUFLLE9BQU8sU0FBUyxHQUFHO09BSXhDLEtBQUssZUFBZTtRQUFFLE9BQU87UUFBVyxVQUFVO09BQVMsQ0FBQztNQUM5RDtLQUNGO2VBcEJGLENBc0JFLG9CQUFDLFFBQUQsRUFBQSxVQUFPLEtBQUssTUFBWSxDQUFBLEdBQ3ZCLE1BQ0s7O0lBR1YsT0FDRSxxQkFBQyxPQUFEO0tBQUssT0FBTTtlQUFYLENBQ0csTUFDQSxLQUNFOztHQUVULENBQUM7RUFDRSxDQUFBO0NBRVQ7Ozs7Q0MxTkEsSUFBTSxVQUFVO0NBTWhCLElBQWEsV0FBVyxPQUFpQixVQUF5QjtFQUNoRSxNQUFNLFVBQVUsTUFBTSxNQUFNLEdBQUcsT0FBTztFQUN0QyxNQUFNLE9BQU8sTUFBTSxNQUFNLE9BQU87RUFHaEMsTUFBTSxZQUFZLE1BQU0sU0FBUyxDQUFDLElBQUksTUFBTSxNQUFNLEdBQUcsQ0FBQztFQUN0RCxNQUFNLGNBQWMsTUFBTSxTQUFTLFFBQVEsTUFBTSxNQUFNLENBQUM7RUFFeEQsTUFBTSxTQUNKLHFCQUFDLE9BQUQ7R0FBSyxPQUFNO0dBQW9CLFFBQUE7YUFBL0IsQ0FDRSxvQkFBQyxNQUFEO0lBQUksT0FBTTtjQUFxQixLQUFLLEtBQUssU0FBVSxvQkFBQyxNQUFELEVBQUEsVUFBSyxLQUFTLENBQUEsQ0FBaUI7R0FBTSxDQUFBLEdBQ3hGLG9CQUFDLE9BQUQ7SUFBSyxPQUFNO2NBQVc7R0FBaUIsQ0FBQSxDQUNwQzs7RUFHUCxNQUFNLFdBQ0osb0JBQUMsVUFBRDtHQUNFLE9BQU07R0FDTixNQUFLO0dBQ0wsZUFBZTtJQUNiLE1BQU0sT0FBTyxDQUFDLE9BQU87SUFDckIsT0FBTyxTQUFTO0lBQ2hCLFNBQVMsY0FBYyxPQUFPLGNBQWM7SUFDNUMsSUFBSSxDQUFDLE1BQU0sU0FBUyx3QkFBd0IsYUFBYSxTQUFTLEtBQUs7R0FDekU7YUFDRDtFQUVPLENBQUE7RUFHVixJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsWUFBWSxRQUFRLFNBQVMsU0FBUztFQUUzRCxNQUFNLFFBQ0oscUJBQUMsT0FBRDtHQUFLLE9BQU07YUFBWDtJQUNFLG9CQUFDLE1BQUQ7S0FBSSxPQUFNO2VBQXFCLFFBQVEsS0FBSyxTQUFVLG9CQUFDLE1BQUQsRUFBQSxVQUFLLEtBQVMsQ0FBQSxDQUFpQjtJQUFNLENBQUE7SUFDM0Ysb0JBQUMsT0FBRDtLQUFLLE9BQU07ZUFBVztJQUFlLENBQUE7SUFDcEM7SUFDQTtHQUNFOztFQUdQLE1BQU0sT0FDSixxQkFBQyxVQUFEO0dBQ0UsT0FBTTtHQUNOLE1BQUs7R0FDTCxpQkFBYztHQUNkLGVBQWU7SUFDYixNQUFNLE9BQU8sS0FBSyxhQUFhLGVBQWUsTUFBTTtJQUNwRCxLQUFLLGFBQWEsaUJBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEQsTUFBTSxTQUFTO0lBR2YsSUFBSSxDQUFDLE1BQU0sU0FBUywwQkFBMEIsbUJBQW1CLFNBQVMsS0FBSztHQUNqRjthQVhGLENBYUUsb0JBQUMsUUFBRCxFQUFBLFVBQU0sa0JBQXFCLENBQUEsR0FDM0Isb0JBQUMsUUFBRDtJQUFNLE9BQU07SUFBbUIsZUFBWTtHQUFRLENBQUEsQ0FDN0M7O0VBR1YsT0FDRSxvQkFBQyxPQUFEO0dBQUssT0FBTTthQUNULHFCQUFDLE9BQUQ7SUFBSyxPQUFNO2NBQVgsQ0FDRyxNQUNBLEtBQ0U7O0VBQ0YsQ0FBQTtDQUVUOzs7O0NDNUVBLDZCQUFlOzs7O0NDUWYsSUFBYSxRQUFRLEVBQUUsT0FBTyxTQUFtQixjQUE2QjtFQUM1RSxNQUFNLE9BQ0oscUJBQUMsT0FBRDtHQUFLLE9BQU07YUFBWDtJQUNFLG9CQUFDLFFBQUQ7S0FBTSxPQUFNO2VBQW1CO0lBQVUsQ0FBQTtJQUN6QyxvQkFBQyxPQUFEO0tBQUssT0FBTTtLQUFrQixLQUFLO0tBQVUsS0FBSztLQUFPLE9BQU07S0FBSyxRQUFPO0tBQUssU0FBUTtJQUFRLENBQUE7SUFDL0YscUJBQUMsT0FBRDtLQUFLLE9BQU07ZUFBWDtNQUNFLG9CQUFDLE9BQUQ7T0FBSyxPQUFNO2lCQUFrQjtNQUFjLENBQUE7TUFDM0Msb0JBQUMsT0FBRDtPQUFLLE9BQU07aUJBQW1CO01BQVcsQ0FBQTtNQUN6QyxxQkFBQyxPQUFEO09BQUssT0FBTTtpQkFBWDtRQUE0QjtRQUFpQixxQkFBQyxRQUFELEVBQUEsVUFBQSxDQUFNLFVBQU8sS0FBWSxFQUFBLENBQUE7UUFBQztPQUE2Qjs7S0FDakc7O0lBQ0wscUJBQUMsT0FBRDtLQUFLLE9BQU07ZUFBWCxDQUNFLG9CQUFDLFFBQUQ7TUFBTSxPQUFNO2dCQUFpQjtLQUFVLENBQUEsR0FDdkMsb0JBQUMsS0FBRDtNQUFHLE9BQU07Z0JBQWlCO0tBQVMsQ0FBQSxDQUNoQzs7R0FDRjs7RUFHUCxNQUFNLGFBQWE7R0FDakIsS0FBSyxTQUFTLENBQUMsVUFBVTtFQUMzQjtFQUVBLE9BQU87R0FBRTtHQUFNO0VBQUs7Q0FDdEI7Ozs7Q0M1QkEsSUFBTSxRQUFRLFFBQWdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0NBRy9ELElBQU0sVUFDSjs7O0NBVUYsSUFBYSxXQUFXLFlBQXNDLFlBQWdDO0VBQzVGLE1BQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztFQUMxQyxNQUFNLFlBQVk7RUFLbEIsTUFBTSxjQUFjLFNBQVMsY0FBYyxJQUFJO0VBQy9DLFlBQVksWUFBWTtFQUN4QixJQUFJLFNBQVMsWUFBWSxPQUFPLE9BQU87RUFHdkMsTUFBTSxPQUNKLG9CQUFDLFFBQUQ7R0FBTSxPQUFNO0dBQW9CLGVBQVk7YUFBTztFQUU3QyxDQUFBO0VBR1IsTUFBTSxhQUFhLFNBQVMsY0FBMkIsc0JBQXNCO0VBQzdFLE1BQU0sZUFDSixNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsT0FBTyxDQUFDLEdBQUcsVUFBVSxTQUFTLGtCQUFrQixDQUFDO0VBRzlGLElBQUksVUFBVTtFQUdkLE1BQU0sU0FBUyxRQUFnQjtHQUM3QixNQUFNLE1BQ0osb0JBQUMsVUFBRDtJQUNFLE9BQU8sMENBQTBDLE1BQU0sSUFBSSxTQUFTO0lBQ3BFLE1BQUs7SUFDTCxjQUFZLE1BQU0sSUFBSSxtQkFBbUI7SUFDekMsZUFBZTtLQUNiLE1BQU0sUUFBUSxVQUFVO0tBQ3hCLElBQUksUUFBUSxLQUFLLFNBQVMsT0FBTyxDQUFDLENBQUMsUUFBUTtLQUMzQyxPQUFPLEtBQUs7S0FDWixTQUFTLHlCQUF5QixNQUFNLElBQUksU0FBUyxRQUFRLFNBQVMsS0FBSztJQUM3RTtHQUNELENBQUE7R0FFSCxJQUFJLFlBQVk7R0FDaEIsT0FBTztFQUNUO0VBRUEsTUFBTSxPQUFPLE1BQU0sRUFBRTtFQUNyQixNQUFNLE9BQU8sTUFBTSxDQUFDO0VBRXBCLE1BQU0sUUFBUSxVQUFrQjtHQUM5QixVQUFVO0dBQ1YsTUFBTSxpQkFBaUIsWUFBWSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sR0FBRyxVQUFVLE9BQU8sZUFBZSxNQUFNLEtBQUssQ0FBQztHQUN2RyxLQUFLLFdBQVcsU0FBUztHQUN6QixLQUFLLFdBQVcsU0FBUyxPQUFPLENBQUMsQ0FBQyxTQUFTO0VBQzdDO0VBR0EsTUFBTSxXQUFXLE9BQW9CO0dBQ25DLE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sS0FBSyxJQUFJLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQztHQUM1RSxPQUFPLFFBQVEsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPLENBQUM7RUFDN0M7RUFJQSxJQUFJLGVBQWU7RUFDbkIsSUFBSSxZQUFZO0VBQ2hCLElBQUksV0FBVztFQUVmLE1BQU0sVUFBVSxVQUFrQjtHQUNoQyxNQUFNLFNBQVMsT0FBTyxDQUFDLENBQUM7R0FDeEIsSUFBSSxDQUFDLFFBQVE7R0FDYixPQUFPLENBQUMsQ0FBQyxTQUFTLE9BQU8sR0FBRyxVQUFVLE9BQU8sV0FBVyxDQUFDO0dBQ3pELE9BQU8sVUFBVSxJQUFJLFdBQVc7R0FDaEMsZUFBZTtHQUNmLFdBQVc7R0FDWCxhQUFhLFNBQVM7R0FHdEIsWUFBWSxPQUFPLGlCQUFrQixlQUFlLE9BQVEsR0FBRztHQUsvRCxLQUFLLENBQUMsRUFBRSxTQUFTO0lBQUUsTUFBTSxPQUFPO0lBQVksVUFBVTtHQUFTLENBQUM7R0FDaEUsS0FBSyxLQUFLO0VBQ1o7RUFFQSxNQUFNLG9CQUFvQjtHQUN4QixNQUFNLGNBQWM7R0FDcEIsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU07SUFDMUIsTUFBTSxNQUFNLEdBQUcsY0FBYyxLQUFLO0lBQ2xDLElBQUksQ0FBQyxLQUFLO0lBQ1YsTUFBTSxPQUVGLG9CQUFDLFVBQUQ7S0FDRSxPQUFNO0tBQ04sTUFBSztLQUNMLGNBQVksY0FBYyxJQUFJO0tBQzlCLGVBQWU7TUFDYixPQUFPLENBQUM7TUFDUixTQUFTLHlCQUF5QixTQUFTLElBQUksS0FBSyxTQUFTLEtBQUs7S0FDcEU7ZUFFQSxvQkFBQyxPQUFEO01BQUssS0FBSyxJQUFJLGNBQWMsSUFBSTtNQUFLLEtBQUk7TUFBRyxTQUFRO0tBQVEsQ0FBQTtJQUN0RCxDQUFBLENBRVo7R0FDRixDQUFDO0VBQ0g7RUFHQSxNQUFNLGNBQWM7R0FDbEIsTUFBTSxNQUFNLFdBQVc7R0FDdkIsTUFBTSxLQUFLLEtBQUs7R0FDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO0dBRWpCLE1BQU0sU0FBUyxPQUFPLENBQUMsQ0FBQyxNQUFNLE9BQU87SUFDbkMsTUFBTSxNQUFNLEdBQUcsY0FBYyxLQUFLO0lBQ2xDLE9BQU8sTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxJQUFJO0dBQ25ELENBQUM7R0FDRCxJQUFJLFVBQVUsV0FBVyxHQUFHLG1CQUFtQixHQUFHLFFBQVEsTUFBTTtFQUNsRTtFQVlBLE1BQU0scUJBQXFCO0dBQ3pCLE1BQU0sS0FBSyxLQUFLO0dBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTtHQUNyQixJQUFJLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVM7SUFFbkQsSUFBSSxRQUFRLGtCQUFrQixhQUFhLFlBQVksT0FBTyxPQUFPO0lBQ3JFLE1BQU0sUUFBUSxPQUFPLENBQUMsQ0FBQztJQUN2QixJQUFJLFNBQVMsTUFBTSx1QkFBdUIsYUFBYSxNQUFNLE1BQU0sV0FBVztHQUNoRixPQUFPO0lBQ0wsTUFBTSxVQUFVLFNBQVMsY0FBYyxpQ0FBaUM7SUFDeEUsSUFBSSxDQUFDLFdBQVcsUUFBUSx1QkFBdUIsU0FBUztJQUN4RCxZQUFZLE9BQU87SUFDbkIsUUFBUSxzQkFBc0IsWUFBWSxPQUFPO0dBQ25EO0VBQ0Y7RUFNQSxNQUFNLGFBQWEsT0FBb0I7R0FDckMsSUFBSSxTQUFTO0dBQ2IsSUFBSSxTQUFTO0dBRWIsR0FBRyxpQkFBaUIsZ0JBQWdCO0lBS2xDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYztLQUM1QixTQUFTO0tBQ1QsNEJBQTRCO01BQzFCLFNBQVM7TUFDVCxLQUFLLFFBQVEsRUFBRSxDQUFDO0tBQ2xCLENBQUM7SUFDSDtJQUdBLGFBQWEsTUFBTTtJQUNuQixTQUFTLE9BQU8saUJBQWlCO0tBQy9CLE1BQU0sUUFBUSxRQUFRLEVBQUU7S0FDeEIsSUFBSSxRQUFRLEdBQUc7S0FHZixLQUFLLEtBQUs7S0FDVixJQUFJLGdCQUFnQixVQUFVLFVBQVU7S0FDeEMsV0FBVztLQUNYLFNBQVMseUJBQXlCLFNBQVMsUUFBUSxLQUFLLFNBQVMsS0FBSztJQUN4RSxHQUFHLEdBQUc7R0FDUixDQUFDO0dBS0QsR0FBRyxpQkFBaUIsVUFBVSxNQUFNO0lBQ2xDLE1BQU0sU0FBUyxFQUFFO0lBQ2pCLElBQUksQ0FBQyxPQUFPLFFBQVEsd0JBQXdCLEtBQUssT0FBTyxRQUFRLG1CQUFtQixHQUFHO0lBQ3RGLE1BQU0sT0FBTyxPQUFPLFFBQXFCLHNCQUFzQjtJQUUvRCxTQUFTLHNCQUFzQixVQURqQixPQUFPLE9BQU8sQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLE1BQ0UsS0FBSyxTQUFTLEtBQUs7R0FDckUsQ0FBQztFQUNIO0VBRUEsSUFBSSxXQUErQjtFQUNuQyxJQUFJO0VBT0osTUFBTSxhQUFhO0dBQ2pCLE1BQU0sS0FBSyxLQUFLO0dBQ2hCLElBQUksQ0FBQyxJQUFJO0dBSVQsYUFBYTtHQUViLE1BQU0sTUFBTSxXQUFXO0dBQ3ZCLElBQUksT0FBTyxZQUFZLFFBQVEsU0FBUztHQUV4QyxNQUFNLFVBQVUsT0FBTztHQUN2QixXQUFXO0dBQ1gsVUFBVTtHQUVWLE1BQU07R0FDTixZQUFZO0dBQ1osT0FBTyxDQUFDO0dBQ1IsSUFBSSxDQUFDLEtBQUssYUFBYSxHQUFHLGVBQWUsT0FBTyxNQUFNLE1BQU0sSUFBSTtHQUNoRSxJQUFJLENBQUMsTUFBTSxhQUFhLEdBQUcsZUFBZSxNQUFNLEtBQUs7R0FDckQsSUFBSSxTQUFTLFVBQVUsRUFBRTtFQUMzQjtFQUVBLE9BQU8saUJBQWlCLFVBQVUsWUFBWTtFQUU5QyxPQUFPLEVBQUUsS0FBSztDQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDN09BLElBQU0sVUFBUSxRQUFnQjtFQUM1QixNQUFNLEtBQUssU0FBUyxjQUFjLE1BQU07RUFDeEMsR0FBRyxZQUFZO0VBQ2YsR0FBRyxhQUFhLGVBQWUsTUFBTTtFQUNyQyxHQUFHLFlBQVksVUFBVSxHQUFHO0VBQzVCLE9BQU87Q0FDVDtDQUVBLElBQU0sUUFBUSxHQUFXLE1BQWMsU0FFbkMscUJBQUMsTUFBRDtFQUFJLE9BQU07WUFBVjtHQUNFLG9CQUFDLFFBQUQ7SUFBTSxPQUFNO0lBQWdCLGVBQVk7Y0FDckMsT0FBTyxDQUFDO0dBQ0wsQ0FBQTtHQUNMLE9BQUssSUFBSTtHQUNWLG9CQUFDLFFBQUQ7SUFBTSxPQUFNO2NBQWtCO0dBQVcsQ0FBQTtFQUN2Qzs7Q0FJUixJQUFNLGNBQWM7RUFDbEIsTUFBTSxLQUFLLFNBQVMsY0FBYyxNQUFNO0VBQ3hDLEdBQUcsWUFBWTtFQUNmLEdBQUcsYUFBYSxlQUFlLE1BQU07RUFDckMsR0FBRyxZQUFZLFVBQVUsa0JBQUs7RUFDOUIsT0FBTztDQUNUO0NBRUEsSUFBYSxjQUFjLGNBQTBCO0VBQ25ELE1BQU0sY0FDSixvQkFBQyxVQUFEO0dBQVEsT0FBTTtHQUFrQixNQUFLO0dBQVMsU0FBUzthQUFXO0VBRTFELENBQUE7RUFHVixNQUFNLFFBQVEsU0FBUyx1QkFBdUI7RUFDOUMsTUFBTSxPQUFPLHNDQUFzQyxXQUFXO0VBRTlELE1BQU0sUUFBUTtHQUNaLEtBQUssR0FBRyxtQkFBTSxTQUFTLGVBQWUsb0NBQW9DLENBQUM7R0FDM0UsS0FBSyxHQUFHLG1CQUFNLEtBQUs7R0FDbkIsS0FBSyxHQUFHLG9CQUFPLFNBQVMsZUFBZSxnREFBZ0QsQ0FBQztHQUN4RixLQUFLLEdBQUcsa0JBQUssU0FBUyxlQUFlLDRDQUE0QyxDQUFDO0VBQ3BGO0VBRUEsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsT0FBTyxHQUFHLFFBQVEsTUFBTSxDQUFDLENBQUM7RUFFbEQsTUFBTSxPQUFRLG9CQUFDLE1BQUQsRUFBSSxPQUFNLFlBQWEsQ0FBQTtFQUNyQyxLQUFLLE9BQU8sR0FBRyxLQUFLO0VBRXBCLE9BQ0UscUJBQUMsV0FBRDtHQUFTLE9BQU07YUFBZjtJQUNFLG9CQUFDLE1BQUQ7S0FBSSxPQUFNO2VBQW1CO0lBQTBDLENBQUE7SUFDdEU7SUFJRCxxQkFBQyxPQUFEO0tBQUssT0FBTTtlQUFYO01BQ0Usb0JBQUMsTUFBRDtPQUFJLE9BQU07aUJBQTBDO01BQTBCLENBQUE7TUFDOUUsb0JBQUMsS0FBRCxFQUFBLFVBQUcsNE5BSUEsQ0FBQTtNQUNILG9CQUFDLEtBQUQsRUFBQSxVQUFHLGlIQUdBLENBQUE7S0FDQTs7R0FDRTs7Q0FFYjs7OztDQzFFQSxJQUFNLGNBQWM7Q0FDcEIsSUFBTSxVQUFVO0NBR2hCLElBQU0saUJBQWlCO0NBQ3ZCLElBQU0sYUFBYTtDQVVuQixJQUFNLFVBQVUsTUFBYyxVQUFzQztFQUNsRSxNQUFNLE9BQVEsb0JBQUMsT0FBRDtHQUFLLE9BQU07YUFBYTtFQUFhLENBQUE7RUFFbkQsTUFBTSxPQURRLE9BQWUsU0FBUyxRQUFRLFFBQVEsSUFDMUMsQ0FBSyxRQUFRLE9BQU8sRUFBRSxJQUFJO0VBR3RDLE1BQU0sYUFDSixNQUFNLEtBQUssRUFBRSxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQzlCLE1BQU0sTUFBTTtHQUNYLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxRQUFRO0dBQ3RELE9BQU8sRUFBRSxLQUFLO0VBQ2hCLENBQUMsQ0FBQyxDQUNELE1BQU0sU0FBUztHQUNkLE1BQU0sTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixNQUFNLFdBQVcsQ0FBQyxDQUFDLGNBQTJCLE1BQU07R0FDaEcsSUFBSSxDQUFDLEtBQUssTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQWMsS0FBSyxPQUFPLFFBQVE7R0FDbkUsT0FBTyxNQUFNLEdBQUc7RUFDbEIsQ0FBQztFQUVMLEtBQUssQ0FBQyxDQUNILE9BQU8sVUFBVTtHQUNoQixJQUFJLGlCQUFpQixNQUFNLFFBQVEsY0FBYyxNQUFNO0dBQ3ZELE9BQU8sS0FBSztFQUNkLENBQUMsQ0FBQyxDQUNELE1BQU0sWUFBWTtHQUNqQixLQUFLLGNBQWM7R0FDbkIsS0FBSyxPQUFPLE9BQU87RUFDckIsQ0FBQyxDQUFDLENBQ0QsT0FBTyxNQUFNO0dBQ1osSUFBSSxpQkFBaUIsRUFBRSxXQUFXLE9BQU87R0FDekMsS0FBSyxjQUFjO0dBQ25CLEtBQUssT0FDSCxxQkFBQyxLQUFELEVBQUEsVUFBQTtJQUFHO0lBQ2dDLG9CQUFDLEtBQUQ7S0FBRyxNQUFNO2VBQUs7SUFBd0IsQ0FBQTtJQUFDO0dBQ3ZFLEVBQUEsQ0FBQSxDQUNMO0VBQ0YsQ0FBQztFQUVILE9BQU87Q0FDVDtDQUVBLElBQU0sU0FBUyxPQUFvQjtFQUNqQyxHQUFHLGlCQUFpQixxQkFBcUIsQ0FBQyxDQUFDLFNBQVMsTUFBTSxFQUFFLE9BQU8sQ0FBQztFQUNwRSxPQUFPO0NBQ1Q7Q0FFQSxJQUFNLFdBQVcsT0FBZ0IsQ0FBQyxHQUFHLFlBQWEsUUFBUSxTQUFTLEVBQUU7Q0FPckUsSUFBTSxtQkFBMkM7RUFDL0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGVBQWU7Q0FDakI7Q0FFQSxJQUFNLGdCQUFnQixRQUFxQjtFQUN6QyxNQUFNLFFBQXlDLENBQUM7RUFDaEQsTUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0VBQzNDLE9BQU8sWUFBWTtFQUNuQixJQUFJLFVBQThCO0VBRWxDLE1BQU0sS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLFNBQVMsVUFBVTtHQUMxQyxNQUFNLE9BQU8sTUFBTSxZQUFhLEtBQUssQ0FBQyxDQUFDLFFBQVEsTUFBTSxFQUFFO0dBQ3ZELE1BQU0sUUFBUSxpQkFBaUI7R0FFL0IsSUFBSSxPQUFPO0lBQ1QsVUFBVSxTQUFTLGNBQWMsS0FBSztJQUN0QyxRQUFRLFlBQVk7SUFDcEIsTUFBTSxLQUFLO0tBQUUsT0FBTztLQUFPLE1BQU07SUFBUSxDQUFDO0lBQzFDO0dBQ0Y7R0FDQSxJQUFJLFFBQVEsS0FBSyxHQUFHO0dBQ3BCLElBQUksd0RBQXdELEtBQUssSUFBSSxHQUFHO0lBQ3RFLFVBQVU7SUFDVixPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsSUFBSSxDQUFnQixDQUFDO0lBQ3pEO0dBQ0Y7R0FDQSxTQUFTLE9BQU8sTUFBTSxNQUFNLFVBQVUsSUFBSSxDQUFnQixDQUFDO0VBQzdELENBQUM7RUFFRCxNQUFNLE9BQU8sU0FBUyx1QkFBdUI7RUFDN0MsS0FBSyxPQUNILHFCQUFDLE9BQUQ7R0FBSyxPQUFNO2FBQVgsQ0FDRSxvQkFBQyxLQUFELEVBQUEsVUFBRyx3R0FHQSxDQUFBLEdBQ0gsb0JBQUMsS0FBRCxFQUFBLFVBQUcsZ0NBQWdDLENBQUEsQ0FDaEM7TUFDTCxVQUFVLE9BQU8sYUFBYSxjQUFjLEdBQzVDLE1BQ0Y7RUFDQSxPQUFPO0NBQ1Q7Q0FFQSxJQUFhLDRCQUNYLE9BQU8sb0RBQW9ELFlBQVk7Q0FPekUsSUFBTSxZQUFZLFFBQXFCO0VBQ3JDLE1BQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztFQUMxQyxNQUFNLFlBQVk7RUFDbEIsTUFBTSxRQUFnRCxDQUFDO0VBQ3ZELElBQUksVUFBOEI7RUFFbEMsTUFBTSxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsU0FBUyxVQUFVO0dBQzFDLElBQUksTUFBTSxZQUFZLE1BQU07SUFDMUIsVUFBVSxTQUFTLGNBQWMsS0FBSztJQUN0QyxRQUFRLFlBQVk7SUFDcEIsTUFBTSxLQUFLO0tBQUUsT0FBTyxNQUFNLFlBQWEsS0FBSztLQUFHLE1BQU07SUFBUSxDQUFDO0lBQzlEO0dBQ0Y7R0FDQSxJQUFJLE1BQU0sWUFBWSxNQUFNO0dBQzVCLElBQUksUUFBUSxLQUFLLEdBQUc7R0FDcEIsQ0FBQyxXQUFXLE1BQUEsQ0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLElBQUksQ0FBZ0IsQ0FBQztFQUN2RSxDQUFDO0VBSUQsTUFBTSxhQUFhLE1BQU0sTUFBTSxNQUFNLGNBQWMsS0FBSyxFQUFFLEtBQUssQ0FBQztFQUNoRSxNQUFNLE9BQU8sTUFBTSxNQUFNLE1BQU0saUJBQWlCLEtBQUssRUFBRSxLQUFLLENBQUM7RUFDN0QsSUFBSSxjQUFjLE1BQU07R0FDdEIsTUFBTSxNQUFNLFdBQVc7R0FDdkIsV0FBVyxPQUFPLEtBQUs7R0FDdkIsS0FBSyxPQUFPO0VBQ2Q7RUFFQSxNQUFNLE9BQU8sU0FBUyx1QkFBdUI7RUFDN0MsS0FBSyxPQUFPLE9BQU8sVUFBVSxPQUFPLFNBQVMsVUFBVSxDQUFDO0VBQ3hELE9BQU87Q0FDVDtDQUVBLElBQWEsbUJBQW1CLE9BQU8sY0FBYyxRQUFRO0NBTTdELElBQWEseUJBQ1gsVUFDRSxXQUNBLCtCQUNBLG9CQUFvQixHQUNwQixhQUNBLHNCQUNGO0NBRUYsSUFBYSxxQkFDWCxVQUFVLE9BQU8sd0NBQXdDLFdBQVcsR0FBRyxPQUFPO0NBR2hGLElBQWEsb0JBQW9CLFdBQTRDO0VBRzNFLE1BQU0sUUFBc0I7R0FDMUI7SUFDRSxPQUFPO0lBQ1AsTUFMb0IsT0FBTyxNQUFNLE1BQU0sMEJBQTBCLEtBQUssRUFBRSxLQUFLLENBS3ZFLENBQUEsRUFBaUIsUUFBUSxTQUFTLGVBQWUsRUFBRTtHQUMzRDtHQUNBO0lBQUUsT0FBTztJQUErQixNQUFNO0dBQWlCO0dBQy9EO0lBQUUsT0FBTztJQUF3QyxNQUFNO0dBQWE7RUFDdEU7RUFFQSxNQUFNLEtBQUssU0FBUyxjQUFjLEtBQUs7RUFDdkMsR0FBRyxZQUFZO0VBQ2YsR0FBRyxPQUFPLFVBQVUsT0FBTyxPQUFPLHdCQUF3QixDQUFDO0VBQzNELE9BQU87Q0FDVDs7OztDQ3ZMQSxTQUFTQSxXQUFTLEtBQUs7RUFDckIsT0FBTyxRQUFRLFFBQVEsT0FBTyxRQUFRLFlBQVksaUJBQWlCLE9BQU8sSUFBSSxnQkFBZ0I7Q0FDaEc7Q0FDQSxTQUFTQyxTQUFPLFFBQVEsS0FBSztFQUMzQixJQUFJLFdBQVcsS0FBSyxHQUNsQixTQUFTLENBQUM7RUFFWixJQUFJLFFBQVEsS0FBSyxHQUNmLE1BQU0sQ0FBQztFQUVULE1BQU0sV0FBVztHQUFDO0dBQWE7R0FBZTtFQUFXO0VBQ3pELE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFPLFFBQU8sU0FBUyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFRLFFBQU87R0FDdkUsSUFBSSxPQUFPLE9BQU8sU0FBUyxhQUFhLE9BQU8sT0FBTyxJQUFJO1FBQVUsSUFBSUQsV0FBUyxJQUFJLElBQUksS0FBS0EsV0FBUyxPQUFPLElBQUksS0FBSyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQ3BKLFNBQU8sT0FBTyxNQUFNLElBQUksSUFBSTtFQUVoQyxDQUFDO0NBQ0g7Q0FDQSxJQUFNLGNBQWM7RUFDbEIsTUFBTSxDQUFDO0VBQ1AsbUJBQW1CLENBQUM7RUFDcEIsc0JBQXNCLENBQUM7RUFDdkIsZUFBZTtHQUNiLE9BQU8sQ0FBQztHQUNSLFVBQVU7RUFDWjtFQUNBLGdCQUFnQjtHQUNkLE9BQU87RUFDVDtFQUNBLG1CQUFtQjtHQUNqQixPQUFPLENBQUM7RUFDVjtFQUNBLGlCQUFpQjtHQUNmLE9BQU87RUFDVDtFQUNBLGNBQWM7R0FDWixPQUFPLEVBQ0wsWUFBWSxDQUFDLEVBQ2Y7RUFDRjtFQUNBLGdCQUFnQjtHQUNkLE9BQU87SUFDTCxVQUFVLENBQUM7SUFDWCxZQUFZLENBQUM7SUFDYixPQUFPLENBQUM7SUFDUixlQUFlLENBQUM7SUFDaEIsdUJBQXVCO0tBQ3JCLE9BQU8sQ0FBQztJQUNWO0dBQ0Y7RUFDRjtFQUNBLGtCQUFrQjtHQUNoQixPQUFPLENBQUM7RUFDVjtFQUNBLGFBQWE7R0FDWCxPQUFPO0VBQ1Q7RUFDQSxVQUFVO0dBQ1IsTUFBTTtHQUNOLE1BQU07R0FDTixVQUFVO0dBQ1YsTUFBTTtHQUNOLFFBQVE7R0FDUixVQUFVO0dBQ1YsVUFBVTtHQUNWLFFBQVE7RUFDVjtDQUNGO0NBQ0EsU0FBUyxjQUFjO0VBQ3JCLE1BQU0sTUFBTSxPQUFPLGFBQWEsY0FBYyxXQUFXLENBQUM7RUFDMUQsU0FBTyxLQUFLLFdBQVc7RUFDdkIsT0FBTztDQUNUO0NBQ0EsSUFBTSxZQUFZO0VBQ2hCLFVBQVU7RUFDVixXQUFXLEVBQ1QsV0FBVyxHQUNiO0VBQ0EsVUFBVTtHQUNSLE1BQU07R0FDTixNQUFNO0dBQ04sVUFBVTtHQUNWLE1BQU07R0FDTixRQUFRO0dBQ1IsVUFBVTtHQUNWLFVBQVU7R0FDVixRQUFRO0VBQ1Y7RUFDQSxTQUFTO0dBQ1AsZUFBZSxDQUFDO0dBQ2hCLFlBQVksQ0FBQztHQUNiLEtBQUssQ0FBQztHQUNOLE9BQU8sQ0FBQztFQUNWO0VBQ0EsYUFBYSxTQUFTLGNBQWM7R0FDbEMsT0FBTztFQUNUO0VBQ0EsbUJBQW1CLENBQUM7RUFDcEIsc0JBQXNCLENBQUM7RUFDdkIsbUJBQW1CO0dBQ2pCLE9BQU8sRUFDTCxtQkFBbUI7SUFDakIsT0FBTztHQUNULEVBQ0Y7RUFDRjtFQUNBLFFBQVEsQ0FBQztFQUNULE9BQU8sQ0FBQztFQUNSLFFBQVEsQ0FBQztFQUNULGFBQWEsQ0FBQztFQUNkLGVBQWUsQ0FBQztFQUNoQixhQUFhO0dBQ1gsT0FBTyxDQUFDO0VBQ1Y7RUFDQSxzQkFBc0IsVUFBVTtHQUM5QixJQUFJLE9BQU8sZUFBZSxhQUFhO0lBQ3JDLFNBQVM7SUFDVCxPQUFPO0dBQ1Q7R0FDQSxPQUFPLFdBQVcsVUFBVSxDQUFDO0VBQy9CO0VBQ0EscUJBQXFCLElBQUk7R0FDdkIsSUFBSSxPQUFPLGVBQWUsYUFDeEI7R0FFRixhQUFhLEVBQUU7RUFDakI7Q0FDRjtDQUNBLFNBQVMsWUFBWTtFQUNuQixNQUFNLE1BQU0sT0FBTyxXQUFXLGNBQWMsU0FBUyxDQUFDO0VBQ3RELFNBQU8sS0FBSyxTQUFTO0VBQ3JCLE9BQU87Q0FDVDs7OztDQzdJQSxTQUFTLGdCQUFnQixTQUFTO0VBQ2hDLElBQUksWUFBWSxLQUFLLEdBQ25CLFVBQVU7RUFFWixPQUFPLFFBQVEsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO0NBQ3pEO0NBRUEsU0FBUyxZQUFZLEtBQUs7RUFDeEIsTUFBTSxTQUFTO0VBQ2YsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLFNBQVEsUUFBTztHQUNqQyxJQUFJO0lBQ0YsT0FBTyxPQUFPO0dBQ2hCLFNBQVMsR0FBRyxDQUVaO0dBQ0EsSUFBSTtJQUNGLE9BQU8sT0FBTztHQUNoQixTQUFTLEdBQUcsQ0FFWjtFQUNGLENBQUM7Q0FDSDtDQUNBLFNBQVMsU0FBUyxVQUFVLE9BQU87RUFDakMsSUFBSSxVQUFVLEtBQUssR0FDakIsUUFBUTtFQUVWLE9BQU8sV0FBVyxVQUFVLEtBQUs7Q0FDbkM7Q0FDQSxTQUFTLE1BQU07RUFDYixPQUFPLEtBQUssSUFBSTtDQUNsQjtDQUNBLFNBQVNFLG1CQUFpQixJQUFJO0VBQzVCLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLElBQUk7RUFDSixJQUFJLE9BQU8sa0JBQ1QsUUFBUSxPQUFPLGlCQUFpQixJQUFJLElBQUk7RUFFMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUNmLFFBQVEsR0FBRztFQUViLElBQUksQ0FBQyxPQUNILFFBQVEsR0FBRztFQUViLE9BQU87Q0FDVDtDQUNBLFNBQVMsYUFBYSxJQUFJLE1BQU07RUFDOUIsSUFBSSxTQUFTLEtBQUssR0FDaEIsT0FBTztFQUVULE1BQU0sU0FBUyxVQUFVO0VBQ3pCLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLE1BQU0sV0FBV0EsbUJBQWlCLEVBQUU7RUFDcEMsSUFBSSxPQUFPLGlCQUFpQjtHQUMxQixlQUFlLFNBQVMsYUFBYSxTQUFTO0dBQzlDLElBQUksYUFBYSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FDbkMsZUFBZSxhQUFhLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSSxNQUFLLEVBQUUsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO0dBSWpGLGtCQUFrQixJQUFJLE9BQU8sZ0JBQWdCLGlCQUFpQixTQUFTLEtBQUssWUFBWTtFQUMxRixPQUFPO0dBQ0wsa0JBQWtCLFNBQVMsZ0JBQWdCLFNBQVMsY0FBYyxTQUFTLGVBQWUsU0FBUyxlQUFlLFNBQVMsYUFBYSxTQUFTLGlCQUFpQixXQUFXLENBQUMsQ0FBQyxRQUFRLGNBQWMsb0JBQW9CO0dBQ3pOLFNBQVMsZ0JBQWdCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRztFQUMvQztFQUNBLElBQUksU0FBUyxLQUVYLElBQUksT0FBTyxpQkFBaUIsZUFBZSxnQkFBZ0I7T0FFdEQsSUFBSSxPQUFPLFdBQVcsSUFBSSxlQUFlLFdBQVcsT0FBTyxHQUFHO09BRTlELGVBQWUsV0FBVyxPQUFPLEVBQUU7RUFFMUMsSUFBSSxTQUFTLEtBRVgsSUFBSSxPQUFPLGlCQUFpQixlQUFlLGdCQUFnQjtPQUV0RCxJQUFJLE9BQU8sV0FBVyxJQUFJLGVBQWUsV0FBVyxPQUFPLEdBQUc7T0FFOUQsZUFBZSxXQUFXLE9BQU8sRUFBRTtFQUUxQyxPQUFPLGdCQUFnQjtDQUN6QjtDQUNBLFNBQVMsU0FBUyxHQUFHO0VBQ25CLE9BQU8sT0FBTyxNQUFNLFlBQVksTUFBTSxRQUFRLEVBQUUsZUFBZSxPQUFPLFVBQVUsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLE1BQU07Q0FDcEg7Q0FDQSxTQUFTLE9BQU8sTUFBTTtFQUVwQixJQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxnQkFBZ0IsYUFDakUsT0FBTyxnQkFBZ0I7RUFFekIsT0FBTyxTQUFTLEtBQUssYUFBYSxLQUFLLEtBQUssYUFBYTtDQUMzRDtDQUNBLFNBQVMsU0FBUztFQUNoQixNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsSUFBSSxTQUFZLFVBQVUsRUFBRTtFQUNsRSxNQUFNLFdBQVc7R0FBQztHQUFhO0dBQWU7RUFBVztFQUN6RCxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUssR0FBRztHQUM1QyxNQUFNLGFBQWEsSUFBSSxLQUFLLFVBQVUsVUFBVSxJQUFJLFNBQVksVUFBVTtHQUMxRSxJQUFJLGVBQWUsVUFBYSxlQUFlLFFBQVEsQ0FBQyxPQUFPLFVBQVUsR0FBRztJQUMxRSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFPLFFBQU8sU0FBUyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pGLEtBQUssSUFBSSxZQUFZLEdBQUcsTUFBTSxVQUFVLFFBQVEsWUFBWSxLQUFLLGFBQWEsR0FBRztLQUMvRSxNQUFNLFVBQVUsVUFBVTtLQUMxQixNQUFNLE9BQU8sT0FBTyx5QkFBeUIsWUFBWSxPQUFPO0tBQ2hFLElBQUksU0FBUyxVQUFhLEtBQUssWUFDN0IsSUFBSSxTQUFTLEdBQUcsUUFBUSxLQUFLLFNBQVMsV0FBVyxRQUFRLEdBQ3ZELElBQUksV0FBVyxRQUFRLENBQUMsWUFDdEIsR0FBRyxXQUFXLFdBQVc7VUFFekIsT0FBTyxHQUFHLFVBQVUsV0FBVyxRQUFRO1VBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxLQUFLLFNBQVMsV0FBVyxRQUFRLEdBQUc7TUFDbEUsR0FBRyxXQUFXLENBQUM7TUFDZixJQUFJLFdBQVcsUUFBUSxDQUFDLFlBQ3RCLEdBQUcsV0FBVyxXQUFXO1dBRXpCLE9BQU8sR0FBRyxVQUFVLFdBQVcsUUFBUTtLQUUzQyxPQUNFLEdBQUcsV0FBVyxXQUFXO0lBRy9CO0dBQ0Y7RUFDRjtFQUNBLE9BQU87Q0FDVDtDQUNBLFNBQVMsZUFBZSxJQUFJLFNBQVMsVUFBVTtFQUM3QyxHQUFHLE1BQU0sWUFBWSxTQUFTLFFBQVE7Q0FDeEM7Q0FDQSxTQUFTLHFCQUFxQixNQUFNO0VBQ2xDLElBQUksRUFDRixRQUNBLGdCQUNBLFNBQ0U7RUFDSixNQUFNLFNBQVMsVUFBVTtFQUN6QixNQUFNLGdCQUFnQixDQUFDLE9BQU87RUFDOUIsSUFBSSxZQUFZO0VBQ2hCLElBQUk7RUFDSixNQUFNLFdBQVcsT0FBTyxPQUFPO0VBQy9CLE9BQU8sVUFBVSxNQUFNLGlCQUFpQjtFQUN4QyxPQUFPLHFCQUFxQixPQUFPLGNBQWM7RUFDakQsTUFBTSxNQUFNLGlCQUFpQixnQkFBZ0IsU0FBUztFQUN0RCxNQUFNLGdCQUFnQixTQUFTLFdBQVc7R0FDeEMsT0FBTyxRQUFRLFVBQVUsV0FBVyxVQUFVLFFBQVEsVUFBVSxXQUFXO0VBQzdFO0VBQ0EsTUFBTSxnQkFBZ0I7R0FDcEIsd0JBQU8sSUFBSSxLQUFLLEVBQUMsQ0FBQyxRQUFRO0dBQzFCLElBQUksY0FBYyxNQUNoQixZQUFZO0dBRWQsTUFBTSxXQUFXLEtBQUssSUFBSSxLQUFLLEtBQUssT0FBTyxhQUFhLFVBQVUsQ0FBQyxHQUFHLENBQUM7R0FDdkUsTUFBTSxlQUFlLEtBQU0sS0FBSyxJQUFJLFdBQVcsS0FBSyxFQUFFLElBQUk7R0FDMUQsSUFBSSxrQkFBa0IsZ0JBQWdCLGdCQUFnQixpQkFBaUI7R0FDdkUsSUFBSSxhQUFhLGlCQUFpQixjQUFjLEdBQzlDLGtCQUFrQjtHQUVwQixPQUFPLFVBQVUsU0FBUyxHQUN2QixPQUFPLGdCQUNWLENBQUM7R0FDRCxJQUFJLGFBQWEsaUJBQWlCLGNBQWMsR0FBRztJQUNqRCxPQUFPLFVBQVUsTUFBTSxXQUFXO0lBQ2xDLE9BQU8sVUFBVSxNQUFNLGlCQUFpQjtJQUN4QyxpQkFBaUI7S0FDZixPQUFPLFVBQVUsTUFBTSxXQUFXO0tBQ2xDLE9BQU8sVUFBVSxTQUFTLEdBQ3ZCLE9BQU8sZ0JBQ1YsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLHFCQUFxQixPQUFPLGNBQWM7SUFDakQ7R0FDRjtHQUNBLE9BQU8saUJBQWlCLE9BQU8sc0JBQXNCLE9BQU87RUFDOUQ7RUFDQSxRQUFRO0NBQ1Y7Q0FJQSxTQUFTLGdCQUFnQixTQUFTLFVBQVU7RUFDMUMsSUFBSSxhQUFhLEtBQUssR0FDcEIsV0FBVztFQUViLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLE1BQU0sV0FBVyxDQUFDLEdBQUcsUUFBUSxRQUFRO0VBQ3JDLElBQUksT0FBTyxtQkFBbUIsbUJBQW1CLGlCQUMvQyxTQUFTLEtBQUssR0FBRyxRQUFRLGlCQUFpQixDQUFDO0VBRTdDLElBQUksQ0FBQyxVQUNILE9BQU87RUFFVCxPQUFPLFNBQVMsUUFBTyxPQUFNLEdBQUcsUUFBUSxRQUFRLENBQUM7Q0FDbkQ7Q0FDQSxTQUFTLHFCQUFxQixJQUFJLE1BQU07RUFFdEMsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJO0VBQzNCLE9BQU8sY0FBYyxTQUFTLEdBQUc7R0FDL0IsTUFBTSxpQkFBaUIsY0FBYyxNQUFNO0dBQzNDLElBQUksT0FBTyxnQkFDVCxPQUFPO0dBRVQsY0FBYyxLQUFLLEdBQUcsZUFBZSxVQUFVLEdBQUksZUFBZSxhQUFhLGVBQWUsV0FBVyxXQUFXLENBQUMsR0FBSSxHQUFJLGVBQWUsbUJBQW1CLGVBQWUsaUJBQWlCLElBQUksQ0FBQyxDQUFFO0VBQ3hNO0NBQ0Y7Q0FDQSxTQUFTLGlCQUFpQixJQUFJLFFBQVE7RUFDcEMsTUFBTSxTQUFTLFVBQVU7RUFDekIsSUFBSSxVQUFVLE9BQU8sU0FBUyxFQUFFO0VBQ2hDLElBQUksQ0FBQyxXQUFXLE9BQU8sbUJBQW1CLGtCQUFrQixpQkFBaUI7R0FFM0UsVUFBVSxDQURRLEdBQUcsT0FBTyxpQkFBaUIsQ0FDNUIsQ0FBQyxDQUFDLFNBQVMsRUFBRTtHQUM5QixJQUFJLENBQUMsU0FDSCxVQUFVLHFCQUFxQixJQUFJLE1BQU07RUFFN0M7RUFDQSxPQUFPO0NBQ1Q7Q0FDQSxTQUFTLFlBQVksTUFBTTtFQUN6QixJQUFJO0dBQ0YsUUFBUSxLQUFLLElBQUk7R0FDakI7RUFDRixTQUFTLEtBQUssQ0FFZDtDQUNGO0NBQ0EsU0FBUyxjQUFjLEtBQUssU0FBUztFQUNuQyxJQUFJLFlBQVksS0FBSyxHQUNuQixVQUFVLENBQUM7RUFFYixNQUFNLEtBQUssU0FBUyxjQUFjLEdBQUc7RUFDckMsR0FBRyxVQUFVLElBQUksR0FBSSxNQUFNLFFBQVEsT0FBTyxJQUFJLFVBQVUsZ0JBQWdCLE9BQU8sQ0FBRTtFQUNqRixPQUFPO0NBQ1Q7Q0FlQSxTQUFTLGVBQWUsSUFBSSxVQUFVO0VBQ3BDLE1BQU0sVUFBVSxDQUFDO0VBQ2pCLE9BQU8sR0FBRyx3QkFBd0I7R0FDaEMsTUFBTSxPQUFPLEdBQUc7R0FDaEIsSUFBSSxVQUNGO1FBQUksS0FBSyxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQUssSUFBSTtHQUFDLE9BQ3pDLFFBQVEsS0FBSyxJQUFJO0dBQ3hCLEtBQUs7RUFDUDtFQUNBLE9BQU87Q0FDVDtDQUNBLFNBQVMsZUFBZSxJQUFJLFVBQVU7RUFDcEMsTUFBTSxVQUFVLENBQUM7RUFDakIsT0FBTyxHQUFHLG9CQUFvQjtHQUM1QixNQUFNLE9BQU8sR0FBRztHQUNoQixJQUFJLFVBQ0Y7UUFBSSxLQUFLLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FBSyxJQUFJO0dBQUMsT0FDekMsUUFBUSxLQUFLLElBQUk7R0FDeEIsS0FBSztFQUNQO0VBQ0EsT0FBTztDQUNUO0NBQ0EsU0FBUyxhQUFhLElBQUksTUFBTTtFQUU5QixPQURlLFVBQ0gsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJO0NBQ2hFO0NBQ0EsU0FBUyxhQUFhLElBQUk7RUFDeEIsSUFBSSxRQUFRO0VBQ1osSUFBSTtFQUNKLElBQUksT0FBTztHQUNULElBQUk7R0FFSixRQUFRLFFBQVEsTUFBTSxxQkFBcUIsTUFDekMsSUFBSSxNQUFNLGFBQWEsR0FBRyxLQUFLO0dBRWpDLE9BQU87RUFDVDtDQUVGO0NBQ0EsU0FBUyxlQUFlLElBQUksVUFBVTtFQUNwQyxNQUFNLFVBQVUsQ0FBQztFQUNqQixJQUFJLFNBQVMsR0FBRztFQUNoQixPQUFPLFFBQVE7R0FDYixJQUFJLFVBQ0Y7UUFBSSxPQUFPLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FBSyxNQUFNO0dBQUMsT0FFbEQsUUFBUSxLQUFLLE1BQU07R0FFckIsU0FBUyxPQUFPO0VBQ2xCO0VBQ0EsT0FBTztDQUNUO0NBV0EsU0FBUyxpQkFBaUIsSUFBSSxNQUFNLGdCQUFnQjtFQUNsRCxNQUFNLFNBQVMsVUFBVTtFQUN6QixJQUFJLGdCQUNGLE9BQU8sR0FBRyxTQUFTLFVBQVUsZ0JBQWdCLGtCQUFrQixXQUFXLE9BQU8saUJBQWlCLElBQUksSUFBSSxDQUFDLENBQUMsaUJBQWlCLFNBQVMsVUFBVSxpQkFBaUIsWUFBWSxDQUFDLElBQUksV0FBVyxPQUFPLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFDLGlCQUFpQixTQUFTLFVBQVUsZ0JBQWdCLGVBQWUsQ0FBQztFQUVyUyxPQUFPLEdBQUc7Q0FDWjs7OztDQzFUQSxJQUFJO0NBQ0osU0FBUyxjQUFjO0VBQ3JCLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLE1BQU0sV0FBVyxZQUFZO0VBQzdCLE9BQU87R0FDTCxjQUFjLFNBQVMsbUJBQW1CLFNBQVMsZ0JBQWdCLFNBQVMsb0JBQW9CLFNBQVMsZ0JBQWdCO0dBQ3pILE9BQU8sQ0FBQyxFQUFFLGtCQUFrQixVQUFVLE9BQU8saUJBQWlCLG9CQUFvQixPQUFPO0VBQzNGO0NBQ0Y7Q0FDQSxTQUFTLGFBQWE7RUFDcEIsSUFBSSxDQUFDLFNBQ0gsVUFBVSxZQUFZO0VBRXhCLE9BQU87Q0FDVDtDQUVBLElBQUk7Q0FDSixTQUFTLFdBQVcsT0FBTztFQUN6QixJQUFJLEVBQ0YsY0FDRSxVQUFVLEtBQUssSUFBSSxDQUFDLElBQUk7RUFDNUIsTUFBTSxVQUFVLFdBQVc7RUFDM0IsTUFBTSxTQUFTLFVBQVU7RUFDekIsTUFBTSxXQUFXLE9BQU8sVUFBVTtFQUNsQyxNQUFNLEtBQUssYUFBYSxPQUFPLFVBQVU7RUFDekMsTUFBTSxTQUFTO0dBQ2IsS0FBSztHQUNMLFNBQVM7RUFDWDtFQUNBLE1BQU0sY0FBYyxPQUFPLE9BQU87RUFDbEMsTUFBTSxlQUFlLE9BQU8sT0FBTztFQUNuQyxNQUFNLFVBQVUsR0FBRyxNQUFNLDZCQUE2QjtFQUN0RCxJQUFJLE9BQU8sR0FBRyxNQUFNLHNCQUFzQjtFQUMxQyxNQUFNLE9BQU8sR0FBRyxNQUFNLHlCQUF5QjtFQUMvQyxNQUFNLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSw0QkFBNEI7RUFDN0QsTUFBTSxVQUFVLGFBQWE7RUFDN0IsSUFBSSxRQUFRLGFBQWE7RUFJekIsSUFBSSxDQUFDLFFBQVEsU0FBUyxRQUFRLFNBQVM7R0FEbEI7R0FBYTtHQUFhO0dBQVk7R0FBWTtHQUFZO0dBQVk7R0FBWTtHQUFZO0dBQVk7R0FBWTtHQUFZO0VBQzFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLGNBQWMsS0FBSyxHQUFHO0dBQ2pHLE9BQU8sR0FBRyxNQUFNLHFCQUFxQjtHQUNyQyxJQUFJLENBQUMsTUFBTSxPQUFPO0lBQUM7SUFBRztJQUFHO0dBQVE7R0FDakMsUUFBUTtFQUNWO0VBR0EsSUFBSSxXQUFXLENBQUMsU0FBUztHQUN2QixPQUFPLEtBQUs7R0FDWixPQUFPLFVBQVU7RUFDbkI7RUFDQSxJQUFJLFFBQVEsVUFBVSxNQUFNO0dBQzFCLE9BQU8sS0FBSztHQUNaLE9BQU8sTUFBTTtFQUNmO0VBR0EsT0FBTztDQUNUO0NBQ0EsU0FBUyxVQUFVLFdBQVc7RUFDNUIsSUFBSSxjQUFjLEtBQUssR0FDckIsWUFBWSxDQUFDO0VBRWYsSUFBSSxDQUFDLGNBQ0gsZUFBZSxXQUFXLFNBQVM7RUFFckMsT0FBTztDQUNUO0NBRUEsSUFBSTtDQUNKLFNBQVMsY0FBYztFQUNyQixNQUFNLFNBQVMsVUFBVTtFQUN6QixNQUFNLFNBQVMsVUFBVTtFQUN6QixJQUFJLHFCQUFxQjtFQUN6QixTQUFTLFdBQVc7R0FDbEIsTUFBTSxLQUFLLE9BQU8sVUFBVSxVQUFVLFlBQVk7R0FDbEQsT0FBTyxHQUFHLFFBQVEsUUFBUSxLQUFLLEtBQUssR0FBRyxRQUFRLFFBQVEsSUFBSSxLQUFLLEdBQUcsUUFBUSxTQUFTLElBQUk7RUFDMUY7RUFDQSxJQUFJLFNBQVMsR0FBRztHQUNkLE1BQU0sS0FBSyxPQUFPLE9BQU8sVUFBVSxTQUFTO0dBQzVDLElBQUksR0FBRyxTQUFTLFVBQVUsR0FBRztJQUMzQixNQUFNLENBQUMsT0FBTyxTQUFTLEdBQUcsTUFBTSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFJLFFBQU8sT0FBTyxHQUFHLENBQUM7SUFDOUYscUJBQXFCLFFBQVEsTUFBTSxVQUFVLE1BQU0sUUFBUTtHQUM3RDtFQUNGO0VBQ0EsTUFBTSxZQUFZLCtDQUErQyxLQUFLLE9BQU8sVUFBVSxTQUFTO0VBQ2hHLE1BQU0sa0JBQWtCLFNBQVM7RUFFakMsT0FBTztHQUNMLFVBQVUsc0JBQXNCO0dBQ2hDO0dBQ0EsV0FKZ0IsbUJBQW1CLGFBQWEsT0FBTztHQUt2RDtFQUNGO0NBQ0Y7Q0FDQSxTQUFTLGFBQWE7RUFDcEIsSUFBSSxDQUFDLFNBQ0gsVUFBVSxZQUFZO0VBRXhCLE9BQU87Q0FDVDtDQUVBLFNBQVMsT0FBTyxNQUFNO0VBQ3BCLElBQUksRUFDRixRQUNBLElBQ0EsU0FDRTtFQUNKLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLElBQUksV0FBVztFQUNmLElBQUksaUJBQWlCO0VBQ3JCLE1BQU0sc0JBQXNCO0dBQzFCLElBQUksQ0FBQyxVQUFVLE9BQU8sYUFBYSxDQUFDLE9BQU8sYUFBYTtHQUN4RCxLQUFLLGNBQWM7R0FDbkIsS0FBSyxRQUFRO0VBQ2Y7RUFDQSxNQUFNLHVCQUF1QjtHQUMzQixJQUFJLENBQUMsVUFBVSxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWE7R0FDeEQsV0FBVyxJQUFJLGdCQUFlLFlBQVc7SUFDdkMsaUJBQWlCLE9BQU8sNEJBQTRCO0tBQ2xELE1BQU0sRUFDSixPQUNBLFdBQ0U7S0FDSixJQUFJLFdBQVc7S0FDZixJQUFJLFlBQVk7S0FDaEIsUUFBUSxTQUFRLFVBQVM7TUFDdkIsSUFBSSxFQUNGLGdCQUNBLGFBQ0EsV0FDRTtNQUNKLElBQUksVUFBVSxXQUFXLE9BQU8sSUFBSTtNQUNwQyxXQUFXLGNBQWMsWUFBWSxTQUFTLGVBQWUsTUFBTSxlQUFjLENBQUU7TUFDbkYsWUFBWSxjQUFjLFlBQVksVUFBVSxlQUFlLE1BQU0sZUFBYyxDQUFFO0tBQ3ZGLENBQUM7S0FDRCxJQUFJLGFBQWEsU0FBUyxjQUFjLFFBQ3RDLGNBQWM7SUFFbEIsQ0FBQztHQUNILENBQUM7R0FDRCxTQUFTLFFBQVEsT0FBTyxFQUFFO0VBQzVCO0VBQ0EsTUFBTSx1QkFBdUI7R0FDM0IsSUFBSSxnQkFDRixPQUFPLHFCQUFxQixjQUFjO0dBRTVDLElBQUksWUFBWSxTQUFTLGFBQWEsT0FBTyxJQUFJO0lBQy9DLFNBQVMsVUFBVSxPQUFPLEVBQUU7SUFDNUIsV0FBVztHQUNiO0VBQ0Y7RUFDQSxNQUFNLGlDQUFpQztHQUNyQyxJQUFJLENBQUMsVUFBVSxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWE7R0FDeEQsS0FBSyxtQkFBbUI7RUFDMUI7RUFDQSxHQUFHLGNBQWM7R0FDZixJQUFJLE9BQU8sT0FBTyxrQkFBa0IsT0FBTyxPQUFPLG1CQUFtQixhQUFhO0lBQ2hGLGVBQWU7SUFDZjtHQUNGO0dBQ0EsT0FBTyxpQkFBaUIsVUFBVSxhQUFhO0dBQy9DLE9BQU8saUJBQWlCLHFCQUFxQix3QkFBd0I7RUFDdkUsQ0FBQztFQUNELEdBQUcsaUJBQWlCO0dBQ2xCLGVBQWU7R0FDZixPQUFPLG9CQUFvQixVQUFVLGFBQWE7R0FDbEQsT0FBTyxvQkFBb0IscUJBQXFCLHdCQUF3QjtFQUMxRSxDQUFDO0NBQ0g7Q0FFQSxTQUFTLFNBQVMsTUFBTTtFQUN0QixJQUFJLEVBQ0YsUUFDQSxjQUNBLElBQ0EsU0FDRTtFQUNKLE1BQU0sWUFBWSxDQUFDO0VBQ25CLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLE1BQU0sU0FBUyxTQUFVLFFBQVEsU0FBUztHQUN4QyxJQUFJLFlBQVksS0FBSyxHQUNuQixVQUFVLENBQUM7R0FHYixNQUFNLFdBQVcsS0FESSxPQUFPLG9CQUFvQixPQUFPLHlCQUNyQixjQUFhO0lBSTdDLElBQUksT0FBTyxxQkFBcUI7SUFDaEMsSUFBSSxVQUFVLFdBQVcsR0FBRztLQUMxQixLQUFLLGtCQUFrQixVQUFVLEVBQUU7S0FDbkM7SUFDRjtJQUNBLE1BQU0saUJBQWlCLFNBQVMsaUJBQWlCO0tBQy9DLEtBQUssa0JBQWtCLFVBQVUsRUFBRTtJQUNyQztJQUNBLElBQUksT0FBTyx1QkFDVCxPQUFPLHNCQUFzQixjQUFjO1NBRTNDLE9BQU8sV0FBVyxnQkFBZ0IsQ0FBQztHQUV2QyxDQUFDO0dBQ0QsU0FBUyxRQUFRLFFBQVE7SUFDdkIsWUFBWSxPQUFPLFFBQVEsZUFBZSxjQUFjLE9BQU8sUUFBUTtJQUN2RSxXQUFXLE9BQU8sY0FBYyxPQUFPLFFBQVEsY0FBYyxjQUFjLE9BQU8sUUFBTyxDQUFFO0lBQzNGLGVBQWUsT0FBTyxRQUFRLGtCQUFrQixjQUFjLE9BQU8sUUFBUTtHQUMvRSxDQUFDO0dBQ0QsVUFBVSxLQUFLLFFBQVE7RUFDekI7RUFDQSxNQUFNLGFBQWE7R0FDakIsSUFBSSxDQUFDLE9BQU8sT0FBTyxVQUFVO0dBQzdCLElBQUksT0FBTyxPQUFPLGdCQUFnQjtJQUNoQyxNQUFNLG1CQUFtQixlQUFlLE9BQU8sTUFBTTtJQUNyRCxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksaUJBQWlCLFFBQVEsS0FBSyxHQUNoRCxPQUFPLGlCQUFpQixFQUFFO0dBRTlCO0dBRUEsT0FBTyxPQUFPLFFBQVEsRUFDcEIsV0FBVyxPQUFPLE9BQU8scUJBQzNCLENBQUM7R0FHRCxPQUFPLE9BQU8sV0FBVyxFQUN2QixZQUFZLE1BQ2QsQ0FBQztFQUNIO0VBQ0EsTUFBTSxnQkFBZ0I7R0FDcEIsVUFBVSxTQUFRLGFBQVk7SUFDNUIsU0FBUyxXQUFXO0dBQ3RCLENBQUM7R0FDRCxVQUFVLE9BQU8sR0FBRyxVQUFVLE1BQU07RUFDdEM7RUFDQSxhQUFhO0dBQ1gsVUFBVTtHQUNWLGdCQUFnQjtHQUNoQixzQkFBc0I7RUFDeEIsQ0FBQztFQUNELEdBQUcsUUFBUSxJQUFJO0VBQ2YsR0FBRyxXQUFXLE9BQU87Q0FDdkI7Q0FJQSxJQUFJLGdCQUFnQjtFQUNsQixHQUFHLFFBQVEsU0FBUyxVQUFVO0dBQzVCLE1BQU0sT0FBTztHQUNiLElBQUksQ0FBQyxLQUFLLG1CQUFtQixLQUFLLFdBQVcsT0FBTztHQUNwRCxJQUFJLE9BQU8sWUFBWSxZQUFZLE9BQU87R0FDMUMsTUFBTSxTQUFTLFdBQVcsWUFBWTtHQUN0QyxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUSxVQUFTO0lBQ2pDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixRQUFRLEtBQUssZ0JBQWdCLFNBQVMsQ0FBQztJQUNqRSxLQUFLLGdCQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87R0FDN0MsQ0FBQztHQUNELE9BQU87RUFDVDtFQUNBLEtBQUssUUFBUSxTQUFTLFVBQVU7R0FDOUIsTUFBTSxPQUFPO0dBQ2IsSUFBSSxDQUFDLEtBQUssbUJBQW1CLEtBQUssV0FBVyxPQUFPO0dBQ3BELElBQUksT0FBTyxZQUFZLFlBQVksT0FBTztHQUMxQyxTQUFTLGNBQWM7SUFDckIsS0FBSyxJQUFJLFFBQVEsV0FBVztJQUM1QixJQUFJLFlBQVksZ0JBQ2QsT0FBTyxZQUFZO0lBRXJCLEtBQUssSUFBSSxPQUFPLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sTUFBTSxRQUMvRSxLQUFLLFFBQVEsVUFBVTtJQUV6QixRQUFRLE1BQU0sTUFBTSxJQUFJO0dBQzFCO0dBQ0EsWUFBWSxpQkFBaUI7R0FDN0IsT0FBTyxLQUFLLEdBQUcsUUFBUSxhQUFhLFFBQVE7RUFDOUM7RUFDQSxNQUFNLFNBQVMsVUFBVTtHQUN2QixNQUFNLE9BQU87R0FDYixJQUFJLENBQUMsS0FBSyxtQkFBbUIsS0FBSyxXQUFXLE9BQU87R0FDcEQsSUFBSSxPQUFPLFlBQVksWUFBWSxPQUFPO0dBQzFDLE1BQU0sU0FBUyxXQUFXLFlBQVk7R0FDdEMsSUFBSSxLQUFLLG1CQUFtQixRQUFRLE9BQU8sSUFBSSxHQUM3QyxLQUFLLG1CQUFtQixPQUFPLENBQUMsT0FBTztHQUV6QyxPQUFPO0VBQ1Q7RUFDQSxPQUFPLFNBQVM7R0FDZCxNQUFNLE9BQU87R0FDYixJQUFJLENBQUMsS0FBSyxtQkFBbUIsS0FBSyxXQUFXLE9BQU87R0FDcEQsSUFBSSxDQUFDLEtBQUssb0JBQW9CLE9BQU87R0FDckMsTUFBTSxRQUFRLEtBQUssbUJBQW1CLFFBQVEsT0FBTztHQUNyRCxJQUFJLFNBQVMsR0FDWCxLQUFLLG1CQUFtQixPQUFPLE9BQU8sQ0FBQztHQUV6QyxPQUFPO0VBQ1Q7RUFDQSxJQUFJLFFBQVEsU0FBUztHQUNuQixNQUFNLE9BQU87R0FDYixJQUFJLENBQUMsS0FBSyxtQkFBbUIsS0FBSyxXQUFXLE9BQU87R0FDcEQsSUFBSSxDQUFDLEtBQUssaUJBQWlCLE9BQU87R0FDbEMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVEsVUFBUztJQUNqQyxJQUFJLE9BQU8sWUFBWSxhQUNyQixLQUFLLGdCQUFnQixTQUFTLENBQUM7U0FDMUIsSUFBSSxLQUFLLGdCQUFnQixRQUM5QixLQUFLLGdCQUFnQixNQUFNLENBQUMsU0FBUyxjQUFjLFVBQVU7S0FDM0QsSUFBSSxpQkFBaUIsV0FBVyxhQUFhLGtCQUFrQixhQUFhLG1CQUFtQixTQUM3RixLQUFLLGdCQUFnQixNQUFNLENBQUMsT0FBTyxPQUFPLENBQUM7SUFFL0MsQ0FBQztHQUVMLENBQUM7R0FDRCxPQUFPO0VBQ1Q7RUFDQSxPQUFPO0dBQ0wsTUFBTSxPQUFPO0dBQ2IsSUFBSSxDQUFDLEtBQUssbUJBQW1CLEtBQUssV0FBVyxPQUFPO0dBQ3BELElBQUksQ0FBQyxLQUFLLGlCQUFpQixPQUFPO0dBQ2xDLElBQUk7R0FDSixJQUFJO0dBQ0osSUFBSTtHQUNKLEtBQUssSUFBSSxRQUFRLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLFFBQVEsT0FBTyxTQUNwRixLQUFLLFNBQVMsVUFBVTtHQUUxQixJQUFJLE9BQU8sS0FBSyxPQUFPLFlBQVksTUFBTSxRQUFRLEtBQUssRUFBRSxHQUFHO0lBQ3pELFNBQVMsS0FBSztJQUNkLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNO0lBQ2hDLFVBQVU7R0FDWixPQUFPO0lBQ0wsU0FBUyxLQUFLLEVBQUUsQ0FBQztJQUNqQixPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2YsVUFBVSxLQUFLLEVBQUUsQ0FBQyxXQUFXO0dBQy9CO0dBQ0EsS0FBSyxRQUFRLE9BQU87R0FFcEIsQ0FEb0IsTUFBTSxRQUFRLE1BQU0sSUFBSSxTQUFTLE9BQU8sTUFBTSxHQUFHLEVBQzFELENBQUMsU0FBUSxVQUFTO0lBQzNCLElBQUksS0FBSyxzQkFBc0IsS0FBSyxtQkFBbUIsUUFDckQsS0FBSyxtQkFBbUIsU0FBUSxpQkFBZ0I7S0FDOUMsYUFBYSxNQUFNLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFSCxJQUFJLEtBQUssbUJBQW1CLEtBQUssZ0JBQWdCLFFBQy9DLEtBQUssZ0JBQWdCLE1BQU0sQ0FBQyxTQUFRLGlCQUFnQjtLQUNsRCxhQUFhLE1BQU0sU0FBUyxJQUFJO0lBQ2xDLENBQUM7R0FFTCxDQUFDO0dBQ0QsT0FBTztFQUNUO0NBQ0Y7Q0FFQSxTQUFTLGFBQWE7RUFDcEIsTUFBTSxTQUFTO0VBQ2YsSUFBSTtFQUNKLElBQUk7RUFDSixNQUFNLEtBQUssT0FBTztFQUNsQixJQUFJLE9BQU8sT0FBTyxPQUFPLFVBQVUsZUFBZSxPQUFPLE9BQU8sVUFBVSxNQUN4RSxRQUFRLE9BQU8sT0FBTztPQUV0QixRQUFRLEdBQUc7RUFFYixJQUFJLE9BQU8sT0FBTyxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sV0FBVyxNQUMxRSxTQUFTLE9BQU8sT0FBTztPQUV2QixTQUFTLEdBQUc7RUFFZCxJQUFJLFVBQVUsS0FBSyxPQUFPLGFBQWEsS0FBSyxXQUFXLEtBQUssT0FBTyxXQUFXLEdBQzVFO0VBSUYsUUFBUSxRQUFRLFNBQVMsYUFBYSxJQUFJLGNBQWMsS0FBSyxHQUFHLEVBQUUsSUFBSSxTQUFTLGFBQWEsSUFBSSxlQUFlLEtBQUssR0FBRyxFQUFFO0VBQ3pILFNBQVMsU0FBUyxTQUFTLGFBQWEsSUFBSSxhQUFhLEtBQUssR0FBRyxFQUFFLElBQUksU0FBUyxhQUFhLElBQUksZ0JBQWdCLEtBQUssR0FBRyxFQUFFO0VBQzNILElBQUksT0FBTyxNQUFNLEtBQUssR0FBRyxRQUFRO0VBQ2pDLElBQUksT0FBTyxNQUFNLE1BQU0sR0FBRyxTQUFTO0VBQ25DLE9BQU8sT0FBTyxRQUFRO0dBQ3BCO0dBQ0E7R0FDQSxNQUFNLE9BQU8sYUFBYSxJQUFJLFFBQVE7RUFDeEMsQ0FBQztDQUNIO0NBRUEsU0FBUyxlQUFlO0VBQ3RCLE1BQU0sU0FBUztFQUNmLFNBQVMsMEJBQTBCLE1BQU0sT0FBTztHQUM5QyxPQUFPLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxrQkFBa0IsS0FBSyxDQUFDLEtBQUssQ0FBQztFQUMvRTtFQUNBLE1BQU0sU0FBUyxPQUFPO0VBQ3RCLE1BQU0sRUFDSixXQUNBLFVBQ0EsTUFBTSxZQUNOLGNBQWMsS0FDZCxhQUNFO0VBQ0osTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFPLFFBQVE7RUFDbkQsTUFBTSx1QkFBdUIsWUFBWSxPQUFPLFFBQVEsT0FBTyxTQUFTLE9BQU8sT0FBTztFQUN0RixNQUFNLFNBQVMsZ0JBQWdCLFVBQVUsSUFBSSxPQUFPLE9BQU8sV0FBVyxlQUFlO0VBQ3JGLE1BQU0sZUFBZSxZQUFZLE9BQU8sUUFBUSxPQUFPLFNBQVMsT0FBTztFQUN2RSxJQUFJLFdBQVcsQ0FBQztFQUNoQixNQUFNLGFBQWEsQ0FBQztFQUNwQixNQUFNLGtCQUFrQixDQUFDO0VBQ3pCLElBQUksZUFBZSxPQUFPO0VBQzFCLElBQUksT0FBTyxpQkFBaUIsWUFDMUIsZUFBZSxPQUFPLG1CQUFtQixLQUFLLE1BQU07RUFFdEQsSUFBSSxjQUFjLE9BQU87RUFDekIsSUFBSSxPQUFPLGdCQUFnQixZQUN6QixjQUFjLE9BQU8sa0JBQWtCLEtBQUssTUFBTTtFQUVwRCxNQUFNLHlCQUF5QixPQUFPLFNBQVM7RUFDL0MsTUFBTSwyQkFBMkIsT0FBTyxXQUFXO0VBQ25ELElBQUksZUFBZSxPQUFPO0VBQzFCLElBQUksZ0JBQWdCLENBQUM7RUFDckIsSUFBSSxnQkFBZ0I7RUFDcEIsSUFBSSxRQUFRO0VBQ1osSUFBSSxPQUFPLGVBQWUsYUFDeEI7RUFFRixJQUFJLE9BQU8saUJBQWlCLFlBQVksYUFBYSxRQUFRLEdBQUcsS0FBSyxHQUNuRSxlQUFlLFdBQVcsYUFBYSxRQUFRLEtBQUssRUFBRSxDQUFDLElBQUksTUFBTTtPQUM1RCxJQUFJLE9BQU8saUJBQWlCLFVBQ2pDLGVBQWUsV0FBVyxZQUFZO0VBRXhDLE9BQU8sY0FBYyxDQUFDO0VBR3RCLE9BQU8sU0FBUSxZQUFXO0dBQ3hCLElBQUksS0FDRixRQUFRLE1BQU0sYUFBYTtRQUUzQixRQUFRLE1BQU0sY0FBYztHQUU5QixRQUFRLE1BQU0sZUFBZTtHQUM3QixRQUFRLE1BQU0sWUFBWTtFQUM1QixDQUFDO0VBR0QsSUFBSSxPQUFPLGtCQUFrQixPQUFPLFNBQVM7R0FDM0MsZUFBZSxXQUFXLG1DQUFtQyxFQUFFO0dBQy9ELGVBQWUsV0FBVyxrQ0FBa0MsRUFBRTtFQUNoRTtFQUNBLE1BQU0sY0FBYyxPQUFPLFFBQVEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPO0VBQ2xFLElBQUksYUFDRixPQUFPLEtBQUssV0FBVyxNQUFNO09BQ3hCLElBQUksT0FBTyxNQUNoQixPQUFPLEtBQUssWUFBWTtFQUkxQixJQUFJO0VBQ0osTUFBTSx1QkFBdUIsT0FBTyxrQkFBa0IsVUFBVSxPQUFPLGVBQWUsT0FBTyxLQUFLLE9BQU8sV0FBVyxDQUFDLENBQUMsUUFBTyxRQUFPO0dBQ2xJLE9BQU8sT0FBTyxPQUFPLFlBQVksSUFBSSxDQUFDLGtCQUFrQjtFQUMxRCxDQUFDLENBQUMsQ0FBQyxTQUFTO0VBQ1osS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLGNBQWMsS0FBSyxHQUFHO0dBQ3hDLFlBQVk7R0FDWixJQUFJO0dBQ0osSUFBSSxPQUFPLElBQUksUUFBUSxPQUFPO0dBQzlCLElBQUksYUFDRixPQUFPLEtBQUssWUFBWSxHQUFHLE9BQU8sTUFBTTtHQUUxQyxJQUFJLE9BQU8sTUFBTSxhQUFhLE9BQU8sU0FBUyxNQUFNLFFBQVE7R0FFNUQsSUFBSSxPQUFPLGtCQUFrQixRQUFRO0lBQ25DLElBQUksc0JBQ0YsT0FBTyxFQUFFLENBQUMsTUFBTSxPQUFPLGtCQUFrQixPQUFPLEtBQUs7SUFFdkQsTUFBTSxjQUFjLGlCQUFpQixLQUFLO0lBQzFDLE1BQU0sbUJBQW1CLE1BQU0sTUFBTTtJQUNyQyxNQUFNLHlCQUF5QixNQUFNLE1BQU07SUFDM0MsSUFBSSxrQkFDRixNQUFNLE1BQU0sWUFBWTtJQUUxQixJQUFJLHdCQUNGLE1BQU0sTUFBTSxrQkFBa0I7SUFFaEMsSUFBSSxPQUFPLGNBQ1QsWUFBWSxPQUFPLGFBQWEsSUFBSSxpQkFBaUIsT0FBTyxTQUFTLElBQUksSUFBSSxpQkFBaUIsT0FBTyxVQUFVLElBQUk7U0FDOUc7S0FFTCxNQUFNLFFBQVEsMEJBQTBCLGFBQWEsT0FBTztLQUM1RCxNQUFNLGNBQWMsMEJBQTBCLGFBQWEsY0FBYztLQUN6RSxNQUFNLGVBQWUsMEJBQTBCLGFBQWEsZUFBZTtLQUMzRSxNQUFNLGFBQWEsMEJBQTBCLGFBQWEsYUFBYTtLQUN2RSxNQUFNLGNBQWMsMEJBQTBCLGFBQWEsY0FBYztLQUN6RSxNQUFNLFlBQVksWUFBWSxpQkFBaUIsWUFBWTtLQUMzRCxJQUFJLGFBQWEsY0FBYyxjQUM3QixZQUFZLFFBQVEsYUFBYTtVQUM1QjtNQUNMLE1BQU0sRUFDSixhQUNBLGdCQUNFO01BQ0osWUFBWSxRQUFRLGNBQWMsZUFBZSxhQUFhLGVBQWUsY0FBYztLQUM3RjtJQUNGO0lBQ0EsSUFBSSxrQkFDRixNQUFNLE1BQU0sWUFBWTtJQUUxQixJQUFJLHdCQUNGLE1BQU0sTUFBTSxrQkFBa0I7SUFFaEMsSUFBSSxPQUFPLGNBQWMsWUFBWSxLQUFLLE1BQU0sU0FBUztHQUMzRCxPQUFPO0lBQ0wsYUFBYSxjQUFjLE9BQU8sZ0JBQWdCLEtBQUssZ0JBQWdCLE9BQU87SUFDOUUsSUFBSSxPQUFPLGNBQWMsWUFBWSxLQUFLLE1BQU0sU0FBUztJQUN6RCxJQUFJLE9BQU8sSUFDVCxPQUFPLEVBQUUsQ0FBQyxNQUFNLE9BQU8sa0JBQWtCLE9BQU8sS0FBSyxHQUFHLFVBQVU7R0FFdEU7R0FDQSxJQUFJLE9BQU8sSUFDVCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0I7R0FFOUIsZ0JBQWdCLEtBQUssU0FBUztHQUM5QixJQUFJLE9BQU8sZ0JBQWdCO0lBQ3pCLGdCQUFnQixnQkFBZ0IsWUFBWSxJQUFJLGdCQUFnQixJQUFJO0lBQ3BFLElBQUksa0JBQWtCLEtBQUssTUFBTSxHQUFHLGdCQUFnQixnQkFBZ0IsYUFBYSxJQUFJO0lBQ3JGLElBQUksTUFBTSxHQUFHLGdCQUFnQixnQkFBZ0IsYUFBYSxJQUFJO0lBQzlELElBQUksS0FBSyxJQUFJLGFBQWEsSUFBSSxJQUFJLEtBQU0sZ0JBQWdCO0lBQ3hELElBQUksT0FBTyxjQUFjLGdCQUFnQixLQUFLLE1BQU0sYUFBYTtJQUNqRSxJQUFJLFFBQVEsT0FBTyxtQkFBbUIsR0FBRyxTQUFTLEtBQUssYUFBYTtJQUNwRSxXQUFXLEtBQUssYUFBYTtHQUMvQixPQUFPO0lBQ0wsSUFBSSxPQUFPLGNBQWMsZ0JBQWdCLEtBQUssTUFBTSxhQUFhO0lBQ2pFLEtBQUssUUFBUSxLQUFLLElBQUksT0FBTyxPQUFPLG9CQUFvQixLQUFLLEtBQUssT0FBTyxPQUFPLG1CQUFtQixHQUFHLFNBQVMsS0FBSyxhQUFhO0lBQ2pJLFdBQVcsS0FBSyxhQUFhO0lBQzdCLGdCQUFnQixnQkFBZ0IsWUFBWTtHQUM5QztHQUNBLE9BQU8sZUFBZSxZQUFZO0dBQ2xDLGdCQUFnQjtHQUNoQixTQUFTO0VBQ1g7RUFDQSxPQUFPLGNBQWMsS0FBSyxJQUFJLE9BQU8sYUFBYSxVQUFVLElBQUk7RUFDaEUsSUFBSSxPQUFPLGFBQWEsT0FBTyxXQUFXLFdBQVcsT0FBTyxXQUFXLGNBQ3JFLFVBQVUsTUFBTSxRQUFRLEdBQUcsT0FBTyxjQUFjLGFBQWE7RUFFL0QsSUFBSSxPQUFPLGdCQUNULFVBQVUsTUFBTSxPQUFPLGtCQUFrQixPQUFPLEtBQUssR0FBRyxPQUFPLGNBQWMsYUFBYTtFQUU1RixJQUFJLGFBQ0YsT0FBTyxLQUFLLGtCQUFrQixXQUFXLFFBQVE7RUFJbkQsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCO0dBQzFCLE1BQU0sZ0JBQWdCLENBQUM7R0FDdkIsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLLEdBQUc7SUFDM0MsSUFBSSxpQkFBaUIsU0FBUztJQUM5QixJQUFJLE9BQU8sY0FBYyxpQkFBaUIsS0FBSyxNQUFNLGNBQWM7SUFDbkUsSUFBSSxTQUFTLE1BQU0sT0FBTyxjQUFjLFlBQ3RDLGNBQWMsS0FBSyxjQUFjO0dBRXJDO0dBQ0EsV0FBVztHQUNYLElBQUksS0FBSyxNQUFNLE9BQU8sY0FBYyxVQUFVLElBQUksS0FBSyxNQUFNLFNBQVMsU0FBUyxTQUFTLEVBQUUsSUFBSSxHQUM1RixTQUFTLEtBQUssT0FBTyxjQUFjLFVBQVU7RUFFakQ7RUFDQSxJQUFJLGFBQWEsT0FBTyxNQUFNO0dBQzVCLE1BQU0sT0FBTyxnQkFBZ0IsS0FBSztHQUNsQyxJQUFJLE9BQU8saUJBQWlCLEdBQUc7SUFDN0IsTUFBTSxTQUFTLEtBQUssTUFBTSxPQUFPLFFBQVEsZUFBZSxPQUFPLFFBQVEsZUFBZSxPQUFPLGNBQWM7SUFDM0csTUFBTSxZQUFZLE9BQU8sT0FBTztJQUNoQyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxLQUFLLEdBQy9CLFNBQVMsS0FBSyxTQUFTLFNBQVMsU0FBUyxLQUFLLFNBQVM7R0FFM0Q7R0FDQSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLGVBQWUsT0FBTyxRQUFRLGFBQWEsS0FBSyxHQUFHO0lBQ3BGLElBQUksT0FBTyxtQkFBbUIsR0FDNUIsU0FBUyxLQUFLLFNBQVMsU0FBUyxTQUFTLEtBQUssSUFBSTtJQUVwRCxXQUFXLEtBQUssV0FBVyxXQUFXLFNBQVMsS0FBSyxJQUFJO0lBQ3hELE9BQU8sZUFBZTtHQUN4QjtFQUNGO0VBQ0EsSUFBSSxTQUFTLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztFQUN4QyxJQUFJLGlCQUFpQixHQUFHO0dBQ3RCLE1BQU0sTUFBTSxPQUFPLGFBQWEsS0FBSyxNQUFNLGVBQWUsT0FBTyxrQkFBa0IsYUFBYTtHQUNoRyxPQUFPLFFBQVEsR0FBRyxlQUFlO0lBQy9CLElBQUksQ0FBQyxPQUFPLFdBQVcsT0FBTyxNQUFNLE9BQU87SUFDM0MsSUFBSSxlQUFlLE9BQU8sU0FBUyxHQUNqQyxPQUFPO0lBRVQsT0FBTztHQUNULENBQUMsQ0FBQyxDQUFDLFNBQVEsWUFBVztJQUNwQixRQUFRLE1BQU0sT0FBTyxHQUFHLGFBQWE7R0FDdkMsQ0FBQztFQUNIO0VBQ0EsSUFBSSxPQUFPLGtCQUFrQixPQUFPLHNCQUFzQjtHQUN4RCxJQUFJLGdCQUFnQjtHQUNwQixnQkFBZ0IsU0FBUSxtQkFBa0I7SUFDeEMsaUJBQWlCLGtCQUFrQixnQkFBZ0I7R0FDckQsQ0FBQztHQUNELGlCQUFpQjtHQUNqQixNQUFNLFVBQVUsZ0JBQWdCLGFBQWEsZ0JBQWdCLGFBQWE7R0FDMUUsV0FBVyxTQUFTLEtBQUksU0FBUTtJQUM5QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDdkIsSUFBSSxPQUFPLFNBQVMsT0FBTyxVQUFVO0lBQ3JDLE9BQU87R0FDVCxDQUFDO0VBQ0g7RUFDQSxJQUFJLE9BQU8sMEJBQTBCO0dBQ25DLElBQUksZ0JBQWdCO0dBQ3BCLGdCQUFnQixTQUFRLG1CQUFrQjtJQUN4QyxpQkFBaUIsa0JBQWtCLGdCQUFnQjtHQUNyRCxDQUFDO0dBQ0QsaUJBQWlCO0dBQ2pCLE1BQU0sY0FBYyxPQUFPLHNCQUFzQixNQUFNLE9BQU8scUJBQXFCO0dBQ25GLElBQUksZ0JBQWdCLGFBQWEsWUFBWTtJQUMzQyxNQUFNLG1CQUFtQixhQUFhLGdCQUFnQixjQUFjO0lBQ3BFLFNBQVMsU0FBUyxNQUFNLGNBQWM7S0FDcEMsU0FBUyxhQUFhLE9BQU87SUFDL0IsQ0FBQztJQUNELFdBQVcsU0FBUyxNQUFNLGNBQWM7S0FDdEMsV0FBVyxhQUFhLE9BQU87SUFDakMsQ0FBQztHQUNIO0VBQ0Y7RUFDQSxPQUFPLE9BQU8sUUFBUTtHQUNwQjtHQUNBO0dBQ0E7R0FDQTtFQUNGLENBQUM7RUFDRCxJQUFJLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxDQUFDLE9BQU8sc0JBQXNCO0dBQzNFLGVBQWUsV0FBVyxtQ0FBbUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHO0dBQ2hGLGVBQWUsV0FBVyxrQ0FBa0MsR0FBRyxPQUFPLE9BQU8sSUFBSSxnQkFBZ0IsZ0JBQWdCLFNBQVMsS0FBSyxFQUFFLEdBQUc7R0FDcEksTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLFNBQVM7R0FDdkMsTUFBTSxrQkFBa0IsQ0FBQyxPQUFPLFdBQVc7R0FDM0MsT0FBTyxXQUFXLE9BQU8sU0FBUyxLQUFJLE1BQUssSUFBSSxhQUFhO0dBQzVELE9BQU8sYUFBYSxPQUFPLFdBQVcsS0FBSSxNQUFLLElBQUksZUFBZTtFQUNwRTtFQUNBLElBQUksaUJBQWlCLHNCQUNuQixPQUFPLEtBQUssb0JBQW9CO0VBRWxDLElBQUksU0FBUyxXQUFXLHdCQUF3QjtHQUM5QyxJQUFJLE9BQU8sT0FBTyxlQUFlLE9BQU8sY0FBYztHQUN0RCxPQUFPLEtBQUssc0JBQXNCO0VBQ3BDO0VBQ0EsSUFBSSxXQUFXLFdBQVcsMEJBQ3hCLE9BQU8sS0FBSyx3QkFBd0I7RUFFdEMsSUFBSSxPQUFPLHFCQUNULE9BQU8sbUJBQW1CO0VBRTVCLE9BQU8sS0FBSyxlQUFlO0VBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxZQUFZLE9BQU8sV0FBVyxXQUFXLE9BQU8sV0FBVyxTQUFTO0dBQzVGLE1BQU0sc0JBQXNCLEdBQUcsT0FBTyx1QkFBdUI7R0FDN0QsTUFBTSw2QkFBNkIsT0FBTyxHQUFHLFVBQVUsU0FBUyxtQkFBbUI7R0FDbkYsSUFBSSxnQkFBZ0IsT0FBTyx5QkFDekI7UUFBSSxDQUFDLDRCQUE0QixPQUFPLEdBQUcsVUFBVSxJQUFJLG1CQUFtQjtHQUFDLE9BQ3hFLElBQUksNEJBQ1QsT0FBTyxHQUFHLFVBQVUsT0FBTyxtQkFBbUI7RUFFbEQ7Q0FDRjtDQUVBLFNBQVMsaUJBQWlCLE9BQU87RUFDL0IsTUFBTSxTQUFTO0VBQ2YsTUFBTSxlQUFlLENBQUM7RUFDdEIsTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUTtFQUMxRCxJQUFJLFlBQVk7RUFDaEIsSUFBSTtFQUNKLElBQUksT0FBTyxVQUFVLFVBQ25CLE9BQU8sY0FBYyxLQUFLO09BQ3JCLElBQUksVUFBVSxNQUNuQixPQUFPLGNBQWMsT0FBTyxPQUFPLEtBQUs7RUFFMUMsTUFBTSxtQkFBa0IsVUFBUztHQUMvQixJQUFJLFdBQ0YsT0FBTyxPQUFPLE9BQU8sT0FBTyxvQkFBb0IsS0FBSztHQUV2RCxPQUFPLE9BQU8sT0FBTztFQUN2QjtFQUVBLElBQUksT0FBTyxPQUFPLGtCQUFrQixVQUFVLE9BQU8sT0FBTyxnQkFBZ0IsR0FDMUUsSUFBSSxPQUFPLE9BQU8sZ0JBQ2hCLENBQUMsT0FBTyxpQkFBaUIsQ0FBQyxFQUFDLENBQUUsU0FBUSxVQUFTO0dBQzVDLGFBQWEsS0FBSyxLQUFLO0VBQ3pCLENBQUM7T0FFRCxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxHQUFHLEtBQUssR0FBRztHQUM5RCxNQUFNLFFBQVEsT0FBTyxjQUFjO0dBQ25DLElBQUksUUFBUSxPQUFPLE9BQU8sVUFBVSxDQUFDLFdBQVc7R0FDaEQsYUFBYSxLQUFLLGdCQUFnQixLQUFLLENBQUM7RUFDMUM7T0FHRixhQUFhLEtBQUssZ0JBQWdCLE9BQU8sV0FBVyxDQUFDO0VBSXZELEtBQUssSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEtBQUssR0FDeEMsSUFBSSxPQUFPLGFBQWEsT0FBTyxhQUFhO0dBQzFDLE1BQU0sU0FBUyxhQUFhLEVBQUUsQ0FBQztHQUMvQixZQUFZLFNBQVMsWUFBWSxTQUFTO0VBQzVDO0VBSUYsSUFBSSxhQUFhLGNBQWMsR0FBRyxPQUFPLFVBQVUsTUFBTSxTQUFTLEdBQUcsVUFBVTtDQUNqRjtDQUVBLFNBQVMscUJBQXFCO0VBQzVCLE1BQU0sU0FBUztFQUNmLE1BQU0sU0FBUyxPQUFPO0VBRXRCLE1BQU0sY0FBYyxPQUFPLFlBQVksT0FBTyxhQUFhLElBQUksT0FBTyxVQUFVLGFBQWEsT0FBTyxVQUFVLFlBQVk7RUFDMUgsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLEdBQ3RDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixPQUFPLGFBQWEsSUFBSSxPQUFPLEVBQUUsQ0FBQyxhQUFhLE9BQU8sRUFBRSxDQUFDLGFBQWEsY0FBYyxPQUFPLHNCQUFzQjtDQUVwSjtDQUVBLElBQU0sd0JBQXdCLFNBQVMsV0FBVyxjQUFjO0VBQzlELElBQUksYUFBYSxDQUFDLFFBQVEsVUFBVSxTQUFTLFNBQVMsR0FDcEQsUUFBUSxVQUFVLElBQUksU0FBUztPQUMxQixJQUFJLENBQUMsYUFBYSxRQUFRLFVBQVUsU0FBUyxTQUFTLEdBQzNELFFBQVEsVUFBVSxPQUFPLFNBQVM7Q0FFdEM7Q0FDQSxTQUFTLHFCQUFxQixXQUFXO0VBQ3ZDLElBQUksY0FBYyxLQUFLLEdBQ3JCLFlBQVksUUFBUSxLQUFLLGFBQWE7RUFFeEMsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTLE9BQU87RUFDdEIsTUFBTSxFQUNKLFFBQ0EsY0FBYyxLQUNkLGFBQ0U7RUFDSixJQUFJLE9BQU8sV0FBVyxHQUFHO0VBQ3pCLElBQUksT0FBTyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsYUFBYSxPQUFPLG1CQUFtQjtFQUNsRixJQUFJLGVBQWUsQ0FBQztFQUNwQixJQUFJLEtBQUssZUFBZTtFQUN4QixPQUFPLHVCQUF1QixDQUFDO0VBQy9CLE9BQU8sZ0JBQWdCLENBQUM7RUFDeEIsSUFBSSxlQUFlLE9BQU87RUFDMUIsSUFBSSxPQUFPLGlCQUFpQixZQUFZLGFBQWEsUUFBUSxHQUFHLEtBQUssR0FDbkUsZUFBZSxXQUFXLGFBQWEsUUFBUSxLQUFLLEVBQUUsQ0FBQyxJQUFJLE1BQU0sT0FBTztPQUNuRSxJQUFJLE9BQU8saUJBQWlCLFVBQ2pDLGVBQWUsV0FBVyxZQUFZO0VBRXhDLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxHQUFHO0dBQ3pDLE1BQU0sUUFBUSxPQUFPO0dBQ3JCLElBQUksY0FBYyxNQUFNO0dBQ3hCLElBQUksT0FBTyxXQUFXLE9BQU8sZ0JBQzNCLGVBQWUsT0FBTyxFQUFFLENBQUM7R0FFM0IsTUFBTSxpQkFBaUIsZ0JBQWdCLE9BQU8saUJBQWlCLE9BQU8sYUFBYSxJQUFJLEtBQUssZ0JBQWdCLE1BQU0sa0JBQWtCO0dBQ3BJLE1BQU0seUJBQXlCLGVBQWUsU0FBUyxNQUFNLE9BQU8saUJBQWlCLE9BQU8sYUFBYSxJQUFJLEtBQUssZ0JBQWdCLE1BQU0sa0JBQWtCO0dBQzFKLE1BQU0sY0FBYyxFQUFFLGVBQWU7R0FDckMsTUFBTSxhQUFhLGNBQWMsT0FBTyxnQkFBZ0I7R0FDeEQsTUFBTSxpQkFBaUIsZUFBZSxLQUFLLGVBQWUsT0FBTyxPQUFPLE9BQU8sZ0JBQWdCO0dBQy9GLE1BQU0sWUFBWSxlQUFlLEtBQUssY0FBYyxPQUFPLE9BQU8sS0FBSyxhQUFhLEtBQUssY0FBYyxPQUFPLFFBQVEsZUFBZSxLQUFLLGNBQWMsT0FBTztHQUMvSixJQUFJLFdBQVc7SUFDYixPQUFPLGNBQWMsS0FBSyxLQUFLO0lBQy9CLE9BQU8scUJBQXFCLEtBQUssQ0FBQztHQUNwQztHQUNBLHFCQUFxQixPQUFPLFdBQVcsT0FBTyxpQkFBaUI7R0FDL0QscUJBQXFCLE9BQU8sZ0JBQWdCLE9BQU8sc0JBQXNCO0dBQ3pFLE1BQU0sV0FBVyxNQUFNLENBQUMsZ0JBQWdCO0dBQ3hDLE1BQU0sbUJBQW1CLE1BQU0sQ0FBQyx3QkFBd0I7RUFDMUQ7Q0FDRjtDQUVBLFNBQVMsZUFBZSxXQUFXO0VBQ2pDLE1BQU0sU0FBUztFQUNmLElBQUksT0FBTyxjQUFjLGFBR3ZCLFlBQVksVUFBVSxPQUFPLGFBQWEsT0FBTyxhQUY5QixPQUFPLGVBQWUsS0FBSyxNQUU2QjtFQUU3RSxNQUFNLFNBQVMsT0FBTztFQUN0QixNQUFNLGlCQUFpQixPQUFPLGFBQWEsSUFBSSxPQUFPLGFBQWE7RUFDbkUsSUFBSSxFQUNGLFVBQ0EsYUFDQSxPQUNBLGlCQUNFO0VBQ0osTUFBTSxlQUFlO0VBQ3JCLE1BQU0sU0FBUztFQUNmLElBQUksbUJBQW1CLEdBQUc7R0FDeEIsV0FBVztHQUNYLGNBQWM7R0FDZCxRQUFRO0VBQ1YsT0FBTztHQUNMLFlBQVksWUFBWSxPQUFPLGFBQWEsS0FBSztHQUNqRCxNQUFNLHFCQUFxQixLQUFLLElBQUksWUFBWSxPQUFPLGFBQWEsQ0FBQyxJQUFJO0dBQ3pFLE1BQU0sZUFBZSxLQUFLLElBQUksWUFBWSxPQUFPLGFBQWEsQ0FBQyxJQUFJO0dBQ25FLGNBQWMsc0JBQXNCLFlBQVk7R0FDaEQsUUFBUSxnQkFBZ0IsWUFBWTtHQUNwQyxJQUFJLG9CQUFvQixXQUFXO0dBQ25DLElBQUksY0FBYyxXQUFXO0VBQy9CO0VBQ0EsSUFBSSxPQUFPLE1BQU07R0FDZixNQUFNLGtCQUFrQixPQUFPLG9CQUFvQixDQUFDO0dBQ3BELE1BQU0saUJBQWlCLE9BQU8sb0JBQW9CLE9BQU8sT0FBTyxTQUFTLENBQUM7R0FDMUUsTUFBTSxzQkFBc0IsT0FBTyxXQUFXO0dBQzlDLE1BQU0scUJBQXFCLE9BQU8sV0FBVztHQUM3QyxNQUFNLGVBQWUsT0FBTyxXQUFXLE9BQU8sV0FBVyxTQUFTO0dBQ2xFLE1BQU0sZUFBZSxLQUFLLElBQUksU0FBUztHQUN2QyxJQUFJLGdCQUFnQixxQkFDbEIsZ0JBQWdCLGVBQWUsdUJBQXVCO1FBRXRELGdCQUFnQixlQUFlLGVBQWUsc0JBQXNCO0dBRXRFLElBQUksZUFBZSxHQUFHLGdCQUFnQjtFQUN4QztFQUNBLE9BQU8sT0FBTyxRQUFRO0dBQ3BCO0dBQ0E7R0FDQTtHQUNBO0VBQ0YsQ0FBQztFQUNELElBQUksT0FBTyx1QkFBdUIsT0FBTyxrQkFBa0IsT0FBTyxZQUFZLE9BQU8scUJBQXFCLFNBQVM7RUFDbkgsSUFBSSxlQUFlLENBQUMsY0FDbEIsT0FBTyxLQUFLLHVCQUF1QjtFQUVyQyxJQUFJLFNBQVMsQ0FBQyxRQUNaLE9BQU8sS0FBSyxpQkFBaUI7RUFFL0IsSUFBSSxnQkFBZ0IsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxPQUM3QyxPQUFPLEtBQUssVUFBVTtFQUV4QixPQUFPLEtBQUssWUFBWSxRQUFRO0NBQ2xDO0NBRUEsSUFBTSxzQkFBc0IsU0FBUyxXQUFXLGNBQWM7RUFDNUQsSUFBSSxhQUFhLENBQUMsUUFBUSxVQUFVLFNBQVMsU0FBUyxHQUNwRCxRQUFRLFVBQVUsSUFBSSxTQUFTO09BQzFCLElBQUksQ0FBQyxhQUFhLFFBQVEsVUFBVSxTQUFTLFNBQVMsR0FDM0QsUUFBUSxVQUFVLE9BQU8sU0FBUztDQUV0QztDQUNBLFNBQVMsc0JBQXNCO0VBQzdCLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixRQUNBLFFBQ0EsVUFDQSxnQkFDRTtFQUNKLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBTyxRQUFRO0VBQ25ELE1BQU0sY0FBYyxPQUFPLFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPO0VBQ3JFLE1BQU0sb0JBQW1CLGFBQVk7R0FDbkMsT0FBTyxnQkFBZ0IsVUFBVSxJQUFJLE9BQU8sYUFBYSxTQUFTLGdCQUFnQixVQUFVLENBQUMsQ0FBQztFQUNoRztFQUNBLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUksV0FDRixJQUFJLE9BQU8sTUFBTTtHQUNmLElBQUksYUFBYSxjQUFjLE9BQU8sUUFBUTtHQUM5QyxJQUFJLGFBQWEsR0FBRyxhQUFhLE9BQU8sUUFBUSxPQUFPLFNBQVM7R0FDaEUsSUFBSSxjQUFjLE9BQU8sUUFBUSxPQUFPLFFBQVEsY0FBYyxPQUFPLFFBQVEsT0FBTztHQUNwRixjQUFjLGlCQUFpQiw2QkFBNkIsV0FBVyxHQUFHO0VBQzVFLE9BQ0UsY0FBYyxpQkFBaUIsNkJBQTZCLFlBQVksR0FBRztPQUc3RSxJQUFJLGFBQWE7R0FDZixjQUFjLE9BQU8sTUFBSyxZQUFXLFFBQVEsV0FBVyxXQUFXO0dBQ25FLFlBQVksT0FBTyxNQUFLLFlBQVcsUUFBUSxXQUFXLGNBQWMsQ0FBQztHQUNyRSxZQUFZLE9BQU8sTUFBSyxZQUFXLFFBQVEsV0FBVyxjQUFjLENBQUM7RUFDdkUsT0FDRSxjQUFjLE9BQU87RUFHekIsSUFBSSxhQUNGO09BQUksQ0FBQyxhQUFhO0lBRWhCLFlBQVksZUFBZSxhQUFhLElBQUksT0FBTyxXQUFXLGVBQWUsQ0FBQyxDQUFDO0lBQy9FLElBQUksT0FBTyxRQUFRLENBQUMsV0FDbEIsWUFBWSxPQUFPO0lBSXJCLFlBQVksZUFBZSxhQUFhLElBQUksT0FBTyxXQUFXLGVBQWUsQ0FBQyxDQUFDO0dBSWpGOztFQUVGLE9BQU8sU0FBUSxZQUFXO0dBQ3hCLG1CQUFtQixTQUFTLFlBQVksYUFBYSxPQUFPLGdCQUFnQjtHQUM1RSxtQkFBbUIsU0FBUyxZQUFZLFdBQVcsT0FBTyxjQUFjO0dBQ3hFLG1CQUFtQixTQUFTLFlBQVksV0FBVyxPQUFPLGNBQWM7RUFDMUUsQ0FBQztFQUNELE9BQU8sa0JBQWtCO0NBQzNCO0NBRUEsSUFBTSx3QkFBd0IsUUFBUSxZQUFZO0VBQ2hELElBQUksQ0FBQyxVQUFVLE9BQU8sYUFBYSxDQUFDLE9BQU8sUUFBUTtFQUNuRCxNQUFNLHNCQUFzQixPQUFPLFlBQVksaUJBQWlCLElBQUksT0FBTyxPQUFPO0VBQ2xGLE1BQU0sVUFBVSxRQUFRLFFBQVEsY0FBYyxDQUFDO0VBQy9DLElBQUksU0FBUztHQUNYLElBQUksU0FBUyxRQUFRLGNBQWMsSUFBSSxPQUFPLE9BQU8sb0JBQW9CO0dBQ3pFLElBQUksQ0FBQyxVQUFVLE9BQU8sV0FDcEIsSUFBSSxRQUFRLFlBQ1YsU0FBUyxRQUFRLFdBQVcsY0FBYyxJQUFJLE9BQU8sT0FBTyxvQkFBb0I7UUFHaEYsNEJBQTRCO0lBQzFCLElBQUksUUFBUSxZQUFZO0tBQ3RCLFNBQVMsUUFBUSxXQUFXLGNBQWMsSUFBSSxPQUFPLE9BQU8sb0JBQW9CO0tBQ2hGLElBQUksUUFBUSxPQUFPLE9BQU87SUFDNUI7R0FDRixDQUFDO0dBR0wsSUFBSSxRQUFRLE9BQU8sT0FBTztFQUM1QjtDQUNGO0NBQ0EsSUFBTSxVQUFVLFFBQVEsVUFBVTtFQUNoQyxJQUFJLENBQUMsT0FBTyxPQUFPLFFBQVE7RUFDM0IsTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLENBQUMsY0FBYyxvQkFBa0I7RUFDckUsSUFBSSxTQUFTLFFBQVEsZ0JBQWdCLFNBQVM7Q0FDaEQ7Q0FDQSxJQUFNLFdBQVUsV0FBVTtFQUN4QixJQUFJLENBQUMsVUFBVSxPQUFPLGFBQWEsQ0FBQyxPQUFPLFFBQVE7RUFDbkQsSUFBSSxTQUFTLE9BQU8sT0FBTztFQUMzQixNQUFNLE1BQU0sT0FBTyxPQUFPO0VBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLEdBQUc7RUFDbkMsU0FBUyxLQUFLLElBQUksUUFBUSxHQUFHO0VBQzdCLE1BQU0sZ0JBQWdCLE9BQU8sT0FBTyxrQkFBa0IsU0FBUyxPQUFPLHFCQUFxQixJQUFJLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYTtFQUNwSSxNQUFNLGNBQWMsT0FBTztFQUMzQixJQUFJLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxLQUFLLE9BQU8sR0FBRztHQUNyRCxNQUFNLGVBQWU7R0FDckIsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLE1BQU07R0FDN0MsZUFBZSxLQUFLLEdBQUcsTUFBTSxLQUFLLEVBQ2hDLFFBQVEsT0FDVixDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTTtJQUNmLE9BQU8sZUFBZSxnQkFBZ0I7R0FDeEMsQ0FBQyxDQUFDO0dBQ0YsT0FBTyxPQUFPLFNBQVMsU0FBUyxNQUFNO0lBQ3BDLElBQUksZUFBZSxTQUFTLFFBQVEsTUFBTSxHQUFHLE9BQU8sUUFBUSxDQUFDO0dBQy9ELENBQUM7R0FDRDtFQUNGO0VBQ0EsTUFBTSx1QkFBdUIsY0FBYyxnQkFBZ0I7RUFDM0QsSUFBSSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFDeEMsS0FBSyxJQUFJLElBQUksY0FBYyxRQUFRLEtBQUssdUJBQXVCLFFBQVEsS0FBSyxHQUFHO0dBQzdFLE1BQU0sYUFBYSxJQUFJLE1BQU0sT0FBTztHQUNwQyxJQUFJLFlBQVksZUFBZSxZQUFZLHNCQUFzQixPQUFPLFFBQVEsU0FBUztFQUMzRjtPQUVBLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxjQUFjLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLHVCQUF1QixRQUFRLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FDMUcsSUFBSSxNQUFNLGdCQUFnQixJQUFJLHdCQUF3QixJQUFJLGNBQ3hELE9BQU8sUUFBUSxDQUFDO0NBSXhCO0NBRUEsU0FBUywwQkFBMEIsUUFBUTtFQUN6QyxNQUFNLEVBQ0osWUFDQSxXQUNFO0VBQ0osTUFBTSxZQUFZLE9BQU8sZUFBZSxPQUFPLFlBQVksQ0FBQyxPQUFPO0VBQ25FLElBQUk7RUFDSixLQUFLLElBQUksSUFBSSxHQUFHLElBQUksV0FBVyxRQUFRLEtBQUssR0FDMUMsSUFBSSxPQUFPLFdBQVcsSUFBSSxPQUFPLGFBQy9CO09BQUksYUFBYSxXQUFXLE1BQU0sWUFBWSxXQUFXLElBQUksTUFBTSxXQUFXLElBQUksS0FBSyxXQUFXLE1BQU0sR0FDdEcsY0FBYztRQUNULElBQUksYUFBYSxXQUFXLE1BQU0sWUFBWSxXQUFXLElBQUksSUFDbEUsY0FBYyxJQUFJO0VBQ3BCLE9BQ0ssSUFBSSxhQUFhLFdBQVcsSUFDakMsY0FBYztFQUlsQixJQUFJLE9BQU8scUJBQ1Q7T0FBSSxjQUFjLEtBQUssT0FBTyxnQkFBZ0IsYUFBYSxjQUFjO0VBQUM7RUFFNUUsT0FBTztDQUNUO0NBQ0EsU0FBUyxrQkFBa0IsZ0JBQWdCO0VBQ3pDLE1BQU0sU0FBUztFQUNmLE1BQU0sWUFBWSxPQUFPLGVBQWUsT0FBTyxZQUFZLENBQUMsT0FBTztFQUNuRSxNQUFNLEVBQ0osVUFDQSxRQUNBLGFBQWEsZUFDYixXQUFXLG1CQUNYLFdBQVcsc0JBQ1Q7RUFDSixJQUFJLGNBQWM7RUFDbEIsSUFBSTtFQUNKLE1BQU0sdUJBQXNCLFdBQVU7R0FDcEMsSUFBSSxZQUFZLFNBQVMsT0FBTyxRQUFRO0dBQ3hDLElBQUksWUFBWSxHQUNkLFlBQVksT0FBTyxRQUFRLE9BQU8sU0FBUztHQUU3QyxJQUFJLGFBQWEsT0FBTyxRQUFRLE9BQU8sUUFDckMsYUFBYSxPQUFPLFFBQVEsT0FBTztHQUVyQyxPQUFPO0VBQ1Q7RUFDQSxJQUFJLE9BQU8sZ0JBQWdCLGFBQ3pCLGNBQWMsMEJBQTBCLE1BQU07RUFFaEQsSUFBSSxTQUFTLFFBQVEsU0FBUyxLQUFLLEdBQ2pDLFlBQVksU0FBUyxRQUFRLFNBQVM7T0FDakM7R0FDTCxNQUFNLE9BQU8sS0FBSyxJQUFJLE9BQU8sb0JBQW9CLFdBQVc7R0FDNUQsWUFBWSxPQUFPLEtBQUssT0FBTyxjQUFjLFFBQVEsT0FBTyxjQUFjO0VBQzVFO0VBQ0EsSUFBSSxhQUFhLFNBQVMsUUFBUSxZQUFZLFNBQVMsU0FBUztFQUNoRSxJQUFJLGdCQUFnQixpQkFBaUIsQ0FBQyxPQUFPLE9BQU8sTUFBTTtHQUN4RCxJQUFJLGNBQWMsbUJBQW1CO0lBQ25DLE9BQU8sWUFBWTtJQUNuQixPQUFPLEtBQUssaUJBQWlCO0dBQy9CO0dBQ0E7RUFDRjtFQUNBLElBQUksZ0JBQWdCLGlCQUFpQixPQUFPLE9BQU8sUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFFBQVEsU0FBUztHQUMxRyxPQUFPLFlBQVksb0JBQW9CLFdBQVc7R0FDbEQ7RUFDRjtFQUNBLE1BQU0sY0FBYyxPQUFPLFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPO0VBR3JFLElBQUk7RUFDSixJQUFJLE9BQU8sV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQ3JELFlBQVksb0JBQW9CLFdBQVc7T0FDdEMsSUFBSSxhQUFhO0dBQ3RCLE1BQU0scUJBQXFCLE9BQU8sT0FBTyxNQUFLLFlBQVcsUUFBUSxXQUFXLFdBQVc7R0FDdkYsSUFBSSxtQkFBbUIsU0FBUyxtQkFBbUIsYUFBYSx5QkFBeUIsR0FBRyxFQUFFO0dBQzlGLElBQUksT0FBTyxNQUFNLGdCQUFnQixHQUMvQixtQkFBbUIsS0FBSyxJQUFJLE9BQU8sT0FBTyxRQUFRLGtCQUFrQixHQUFHLENBQUM7R0FFMUUsWUFBWSxLQUFLLE1BQU0sbUJBQW1CLE9BQU8sS0FBSyxJQUFJO0VBQzVELE9BQU8sSUFBSSxPQUFPLE9BQU8sY0FBYztHQUNyQyxNQUFNLGFBQWEsT0FBTyxPQUFPLFlBQVksQ0FBQyxhQUFhLHlCQUF5QjtHQUNwRixJQUFJLFlBQ0YsWUFBWSxTQUFTLFlBQVksRUFBRTtRQUVuQyxZQUFZO0VBRWhCLE9BQ0UsWUFBWTtFQUVkLE9BQU8sT0FBTyxRQUFRO0dBQ3BCO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtFQUNGLENBQUM7RUFDRCxJQUFJLE9BQU8sYUFDVCxRQUFRLE1BQU07RUFFaEIsT0FBTyxLQUFLLG1CQUFtQjtFQUMvQixPQUFPLEtBQUssaUJBQWlCO0VBQzdCLElBQUksT0FBTyxlQUFlLE9BQU8sT0FBTyxvQkFBb0I7R0FDMUQsSUFBSSxzQkFBc0IsV0FDeEIsT0FBTyxLQUFLLGlCQUFpQjtHQUUvQixPQUFPLEtBQUssYUFBYTtFQUMzQjtDQUNGO0NBRUEsU0FBUyxtQkFBbUIsSUFBSSxNQUFNO0VBQ3BDLE1BQU0sU0FBUztFQUNmLE1BQU0sU0FBUyxPQUFPO0VBQ3RCLElBQUksUUFBUSxHQUFHLFFBQVEsSUFBSSxPQUFPLFdBQVcsZUFBZTtFQUM1RCxJQUFJLENBQUMsU0FBUyxPQUFPLGFBQWEsUUFBUSxLQUFLLFNBQVMsS0FBSyxLQUFLLFNBQVMsRUFBRSxHQUMzRSxDQUFDLEdBQUcsS0FBSyxNQUFNLEtBQUssUUFBUSxFQUFFLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUSxXQUFVO0dBQ25FLElBQUksQ0FBQyxTQUFTLE9BQU8sV0FBVyxPQUFPLFFBQVEsSUFBSSxPQUFPLFdBQVcsZUFBZSxHQUNsRixRQUFRO0VBRVosQ0FBQztFQUVILElBQUksYUFBYTtFQUNqQixJQUFJO0VBQ0osSUFBSSxPQUNGO1FBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLE9BQU8sUUFBUSxLQUFLLEdBQzdDLElBQUksT0FBTyxPQUFPLE9BQU8sT0FBTztJQUM5QixhQUFhO0lBQ2IsYUFBYTtJQUNiO0dBQ0Y7RUFDRjtFQUVGLElBQUksU0FBUyxZQUFZO0dBQ3ZCLE9BQU8sZUFBZTtHQUN0QixJQUFJLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUSxTQUMxQyxPQUFPLGVBQWUsU0FBUyxNQUFNLGFBQWEseUJBQXlCLEdBQUcsRUFBRTtRQUVoRixPQUFPLGVBQWU7RUFFMUIsT0FBTztHQUNMLE9BQU8sZUFBZTtHQUN0QixPQUFPLGVBQWU7R0FDdEI7RUFDRjtFQUNBLElBQUksT0FBTyx1QkFBdUIsT0FBTyxpQkFBaUIsVUFBYSxPQUFPLGlCQUFpQixPQUFPLGFBQ3BHLE9BQU8sb0JBQW9CO0NBRS9CO0NBRUEsSUFBSSxTQUFTO0VBQ1g7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0NBQ0Y7Q0FFQSxTQUFTLG1CQUFtQixNQUFNO0VBQ2hDLElBQUksU0FBUyxLQUFLLEdBQ2hCLE9BQU8sS0FBSyxhQUFhLElBQUksTUFBTTtFQUVyQyxNQUFNLFNBQVM7RUFDZixNQUFNLEVBQ0osUUFDQSxjQUFjLEtBQ2QsV0FDQSxjQUNFO0VBQ0osSUFBSSxPQUFPLGtCQUNULE9BQU8sTUFBTSxDQUFDLFlBQVk7RUFFNUIsSUFBSSxPQUFPLFNBQ1QsT0FBTztFQUVULElBQUksbUJBQW1CLGFBQWEsV0FBVyxJQUFJO0VBQ25ELG9CQUFvQixPQUFPLHNCQUFzQjtFQUNqRCxJQUFJLEtBQUssbUJBQW1CLENBQUM7RUFDN0IsT0FBTyxvQkFBb0I7Q0FDN0I7Q0FFQSxTQUFTLGFBQWEsV0FBVyxjQUFjO0VBQzdDLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixjQUFjLEtBQ2QsUUFDQSxXQUNBLGFBQ0U7RUFDSixJQUFJLElBQUk7RUFDUixJQUFJLElBQUk7RUFDUixNQUFNLElBQUk7RUFDVixJQUFJLE9BQU8sYUFBYSxHQUN0QixJQUFJLE1BQU0sQ0FBQyxZQUFZO09BRXZCLElBQUk7RUFFTixJQUFJLE9BQU8sY0FBYztHQUN2QixJQUFJLEtBQUssTUFBTSxDQUFDO0dBQ2hCLElBQUksS0FBSyxNQUFNLENBQUM7RUFDbEI7RUFDQSxPQUFPLG9CQUFvQixPQUFPO0VBQ2xDLE9BQU8sWUFBWSxPQUFPLGFBQWEsSUFBSSxJQUFJO0VBQy9DLElBQUksT0FBTyxTQUNULFVBQVUsT0FBTyxhQUFhLElBQUksZUFBZSxlQUFlLE9BQU8sYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDO09BQ3pGLElBQUksQ0FBQyxPQUFPLGtCQUFrQjtHQUNuQyxJQUFJLE9BQU8sYUFBYSxHQUN0QixLQUFLLE9BQU8sc0JBQXNCO1FBRWxDLEtBQUssT0FBTyxzQkFBc0I7R0FFcEMsVUFBVSxNQUFNLFlBQVksZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7RUFDL0Q7RUFHQSxJQUFJO0VBQ0osTUFBTSxpQkFBaUIsT0FBTyxhQUFhLElBQUksT0FBTyxhQUFhO0VBQ25FLElBQUksbUJBQW1CLEdBQ3JCLGNBQWM7T0FFZCxlQUFlLFlBQVksT0FBTyxhQUFhLEtBQUs7RUFFdEQsSUFBSSxnQkFBZ0IsVUFDbEIsT0FBTyxlQUFlLFNBQVM7RUFFakMsT0FBTyxLQUFLLGdCQUFnQixPQUFPLFdBQVcsWUFBWTtDQUM1RDtDQUVBLFNBQVMsZUFBZTtFQUN0QixPQUFPLENBQUMsS0FBSyxTQUFTO0NBQ3hCO0NBRUEsU0FBUyxlQUFlO0VBQ3RCLE9BQU8sQ0FBQyxLQUFLLFNBQVMsS0FBSyxTQUFTLFNBQVM7Q0FDL0M7Q0FFQSxTQUFTLFlBQVksV0FBVyxPQUFPLGNBQWMsaUJBQWlCLFVBQVU7RUFDOUUsSUFBSSxjQUFjLEtBQUssR0FDckIsWUFBWTtFQUVkLElBQUksVUFBVSxLQUFLLEdBQ2pCLFFBQVEsS0FBSyxPQUFPO0VBRXRCLElBQUksaUJBQWlCLEtBQUssR0FDeEIsZUFBZTtFQUVqQixJQUFJLG9CQUFvQixLQUFLLEdBQzNCLGtCQUFrQjtFQUVwQixNQUFNLFNBQVM7RUFDZixNQUFNLEVBQ0osUUFDQSxjQUNFO0VBQ0osSUFBSSxPQUFPLGFBQWEsT0FBTyxnQ0FDN0IsT0FBTztFQUVULE1BQU0sZUFBZSxPQUFPLGFBQWE7RUFDekMsTUFBTSxlQUFlLE9BQU8sYUFBYTtFQUN6QyxJQUFJO0VBQ0osSUFBSSxtQkFBbUIsWUFBWSxjQUFjLGVBQWU7T0FBa0IsSUFBSSxtQkFBbUIsWUFBWSxjQUFjLGVBQWU7T0FBa0IsZUFBZTtFQUduTCxPQUFPLGVBQWUsWUFBWTtFQUNsQyxJQUFJLE9BQU8sU0FBUztHQUNsQixNQUFNLE1BQU0sT0FBTyxhQUFhO0dBQ2hDLElBQUksVUFBVSxHQUNaLFVBQVUsTUFBTSxlQUFlLGVBQWUsQ0FBQztRQUMxQztJQUNMLElBQUksQ0FBQyxPQUFPLFFBQVEsY0FBYztLQUNoQyxxQkFBcUI7TUFDbkI7TUFDQSxnQkFBZ0IsQ0FBQztNQUNqQixNQUFNLE1BQU0sU0FBUztLQUN2QixDQUFDO0tBQ0QsT0FBTztJQUNUO0lBQ0EsVUFBVSxTQUFTO01BQ2hCLE1BQU0sU0FBUyxRQUFRLENBQUM7S0FDekIsVUFBVTtJQUNaLENBQUM7R0FDSDtHQUNBLE9BQU87RUFDVDtFQUNBLElBQUksVUFBVSxHQUFHO0dBQ2YsT0FBTyxjQUFjLENBQUM7R0FDdEIsT0FBTyxhQUFhLFlBQVk7R0FDaEMsSUFBSSxjQUFjO0lBQ2hCLE9BQU8sS0FBSyx5QkFBeUIsT0FBTyxRQUFRO0lBQ3BELE9BQU8sS0FBSyxlQUFlO0dBQzdCO0VBQ0YsT0FBTztHQUNMLE9BQU8sY0FBYyxLQUFLO0dBQzFCLE9BQU8sYUFBYSxZQUFZO0dBQ2hDLElBQUksY0FBYztJQUNoQixPQUFPLEtBQUsseUJBQXlCLE9BQU8sUUFBUTtJQUNwRCxPQUFPLEtBQUssaUJBQWlCO0dBQy9CO0dBQ0EsSUFBSSxDQUFDLE9BQU8sV0FBVztJQUNyQixPQUFPLFlBQVk7SUFDbkIsSUFBSSxDQUFDLE9BQU8sbUNBQ1YsT0FBTyxvQ0FBb0MsU0FBUyxjQUFjLEdBQUc7S0FDbkUsSUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXO0tBQ2pDLElBQUksRUFBRSxXQUFXLE1BQU07S0FDdkIsT0FBTyxVQUFVLG9CQUFvQixpQkFBaUIsT0FBTyxpQ0FBaUM7S0FDOUYsT0FBTyxvQ0FBb0M7S0FDM0MsT0FBTyxPQUFPO0tBQ2QsT0FBTyxZQUFZO0tBQ25CLElBQUksY0FDRixPQUFPLEtBQUssZUFBZTtJQUUvQjtJQUVGLE9BQU8sVUFBVSxpQkFBaUIsaUJBQWlCLE9BQU8saUNBQWlDO0dBQzdGO0VBQ0Y7RUFDQSxPQUFPO0NBQ1Q7Q0FFQSxJQUFJLFlBQVk7RUFDZCxjQUFjO0VBQ2Q7RUFDQTtFQUNBO0VBQ0E7Q0FDRjtDQUVBLFNBQVMsY0FBYyxVQUFVLGNBQWM7RUFDN0MsTUFBTSxTQUFTO0VBQ2YsSUFBSSxDQUFDLE9BQU8sT0FBTyxTQUFTO0dBQzFCLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixHQUFHLFNBQVM7R0FDeEQsT0FBTyxVQUFVLE1BQU0sa0JBQWtCLGFBQWEsSUFBSSxRQUFRO0VBQ3BFO0VBQ0EsT0FBTyxLQUFLLGlCQUFpQixVQUFVLFlBQVk7Q0FDckQ7Q0FFQSxTQUFTLGVBQWUsTUFBTTtFQUM1QixJQUFJLEVBQ0YsUUFDQSxjQUNBLFdBQ0EsU0FDRTtFQUNKLE1BQU0sRUFDSixhQUNBLGtCQUNFO0VBQ0osSUFBSSxNQUFNO0VBQ1YsSUFBSSxDQUFDLEtBQ0gsSUFBSSxjQUFjLGVBQWUsTUFBTTtPQUFZLElBQUksY0FBYyxlQUFlLE1BQU07T0FBWSxNQUFNO0VBRTlHLE9BQU8sS0FBSyxhQUFhLE1BQU07RUFDL0IsSUFBSSxnQkFBZ0IsUUFBUSxTQUMxQixPQUFPLEtBQUssdUJBQXVCLE1BQU07T0FDcEMsSUFBSSxnQkFBZ0IsZ0JBQWdCLGVBQWU7R0FDeEQsT0FBTyxLQUFLLHdCQUF3QixNQUFNO0dBQzFDLElBQUksUUFBUSxRQUNWLE9BQU8sS0FBSyxzQkFBc0IsTUFBTTtRQUV4QyxPQUFPLEtBQUssc0JBQXNCLE1BQU07RUFFNUM7Q0FDRjtDQUVBLFNBQVMsZ0JBQWdCLGNBQWMsV0FBVztFQUNoRCxJQUFJLGlCQUFpQixLQUFLLEdBQ3hCLGVBQWU7RUFFakIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLFdBQ0U7RUFDSixJQUFJLE9BQU8sU0FBUztFQUNwQixJQUFJLE9BQU8sWUFDVCxPQUFPLGlCQUFpQjtFQUUxQixlQUFlO0dBQ2I7R0FDQTtHQUNBO0dBQ0EsTUFBTTtFQUNSLENBQUM7Q0FDSDtDQUVBLFNBQVMsY0FBYyxjQUFjLFdBQVc7RUFDOUMsSUFBSSxpQkFBaUIsS0FBSyxHQUN4QixlQUFlO0VBRWpCLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixXQUNFO0VBQ0osT0FBTyxZQUFZO0VBQ25CLElBQUksT0FBTyxTQUFTO0VBQ3BCLE9BQU8sY0FBYyxDQUFDO0VBQ3RCLGVBQWU7R0FDYjtHQUNBO0dBQ0E7R0FDQSxNQUFNO0VBQ1IsQ0FBQztDQUNIO0NBRUEsSUFBSSxhQUFhO0VBQ2Y7RUFDQTtFQUNBO0NBQ0Y7Q0FFQSxTQUFTLFFBQVEsT0FBTyxPQUFPLGNBQWMsVUFBVSxTQUFTO0VBQzlELElBQUksVUFBVSxLQUFLLEdBQ2pCLFFBQVE7RUFFVixJQUFJLGlCQUFpQixLQUFLLEdBQ3hCLGVBQWU7RUFFakIsSUFBSSxPQUFPLFVBQVUsVUFDbkIsUUFBUSxTQUFTLE9BQU8sRUFBRTtFQUU1QixNQUFNLFNBQVM7RUFDZixJQUFJLGFBQWE7RUFDakIsSUFBSSxhQUFhLEdBQUcsYUFBYTtFQUNqQyxNQUFNLEVBQ0osUUFDQSxVQUNBLFlBQ0EsZUFDQSxhQUNBLGNBQWMsS0FDZCxXQUNBLFlBQ0U7RUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLE9BQU8sYUFBYSxPQUFPLGFBQWEsT0FBTyxnQ0FDdEYsT0FBTztFQUVULElBQUksT0FBTyxVQUFVLGFBQ25CLFFBQVEsT0FBTyxPQUFPO0VBRXhCLE1BQU0sT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLG9CQUFvQixVQUFVO0VBQ2xFLElBQUksWUFBWSxPQUFPLEtBQUssT0FBTyxhQUFhLFFBQVEsT0FBTyxPQUFPLGNBQWM7RUFDcEYsSUFBSSxhQUFhLFNBQVMsUUFBUSxZQUFZLFNBQVMsU0FBUztFQUNoRSxNQUFNLFlBQVksQ0FBQyxTQUFTO0VBRTVCLElBQUksT0FBTyxxQkFDVCxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksV0FBVyxRQUFRLEtBQUssR0FBRztHQUM3QyxNQUFNLHNCQUFzQixDQUFDLEtBQUssTUFBTSxZQUFZLEdBQUc7R0FDdkQsTUFBTSxpQkFBaUIsS0FBSyxNQUFNLFdBQVcsS0FBSyxHQUFHO0dBQ3JELE1BQU0scUJBQXFCLEtBQUssTUFBTSxXQUFXLElBQUksS0FBSyxHQUFHO0dBQzdELElBQUksT0FBTyxXQUFXLElBQUksT0FBTyxhQUMvQjtRQUFJLHVCQUF1QixrQkFBa0Isc0JBQXNCLHNCQUFzQixxQkFBcUIsa0JBQWtCLEdBQzlILGFBQWE7U0FDUixJQUFJLHVCQUF1QixrQkFBa0Isc0JBQXNCLG9CQUN4RSxhQUFhLElBQUk7R0FDbkIsT0FDSyxJQUFJLHVCQUF1QixnQkFDaEMsYUFBYTtFQUVqQjtFQUdGLElBQUksT0FBTyxlQUFlLGVBQWUsYUFBYTtHQUNwRCxJQUFJLENBQUMsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLE9BQU8sYUFBYSxZQUFZLE9BQU8sYUFBYSxJQUFJLFlBQVksT0FBTyxhQUFhLFlBQVksT0FBTyxhQUFhLElBQ3ZLLE9BQU87R0FFVCxJQUFJLENBQUMsT0FBTyxrQkFBa0IsWUFBWSxPQUFPLGFBQWEsWUFBWSxPQUFPLGFBQWEsR0FDNUY7U0FBSyxlQUFlLE9BQU8sWUFDekIsT0FBTztHQUNUO0VBRUo7RUFDQSxJQUFJLGdCQUFnQixpQkFBaUIsTUFBTSxjQUN6QyxPQUFPLEtBQUssd0JBQXdCO0VBSXRDLE9BQU8sZUFBZSxTQUFTO0VBQy9CLElBQUk7RUFDSixJQUFJLGFBQWEsYUFBYSxZQUFZO09BQVksSUFBSSxhQUFhLGFBQWEsWUFBWTtPQUFZLFlBQVk7RUFHeEgsTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUTtFQUcxRCxJQUFJLEVBRnFCLGFBQWEsYUFFWixPQUFPLENBQUMsY0FBYyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGNBQWMsT0FBTyxZQUFZO0dBQzNHLE9BQU8sa0JBQWtCLFVBQVU7R0FFbkMsSUFBSSxPQUFPLFlBQ1QsT0FBTyxpQkFBaUI7R0FFMUIsT0FBTyxvQkFBb0I7R0FDM0IsSUFBSSxPQUFPLFdBQVcsU0FDcEIsT0FBTyxhQUFhLFNBQVM7R0FFL0IsSUFBSSxjQUFjLFNBQVM7SUFDekIsT0FBTyxnQkFBZ0IsY0FBYyxTQUFTO0lBQzlDLE9BQU8sY0FBYyxjQUFjLFNBQVM7R0FDOUM7R0FDQSxPQUFPO0VBQ1Q7RUFDQSxJQUFJLE9BQU8sU0FBUztHQUNsQixNQUFNLE1BQU0sT0FBTyxhQUFhO0dBQ2hDLE1BQU0sSUFBSSxNQUFNLFlBQVksQ0FBQztHQUM3QixJQUFJLFVBQVUsR0FBRztJQUNmLElBQUksV0FBVztLQUNiLE9BQU8sVUFBVSxNQUFNLGlCQUFpQjtLQUN4QyxPQUFPLG9CQUFvQjtJQUM3QjtJQUNBLElBQUksYUFBYSxDQUFDLE9BQU8sNkJBQTZCLE9BQU8sT0FBTyxlQUFlLEdBQUc7S0FDcEYsT0FBTyw0QkFBNEI7S0FDbkMsNEJBQTRCO01BQzFCLFVBQVUsTUFBTSxlQUFlLGVBQWU7S0FDaEQsQ0FBQztJQUNILE9BQ0UsVUFBVSxNQUFNLGVBQWUsZUFBZTtJQUVoRCxJQUFJLFdBQ0YsNEJBQTRCO0tBQzFCLE9BQU8sVUFBVSxNQUFNLGlCQUFpQjtLQUN4QyxPQUFPLG9CQUFvQjtJQUM3QixDQUFDO0dBRUwsT0FBTztJQUNMLElBQUksQ0FBQyxPQUFPLFFBQVEsY0FBYztLQUNoQyxxQkFBcUI7TUFDbkI7TUFDQSxnQkFBZ0I7TUFDaEIsTUFBTSxNQUFNLFNBQVM7S0FDdkIsQ0FBQztLQUNELE9BQU87SUFDVDtJQUNBLFVBQVUsU0FBUztNQUNoQixNQUFNLFNBQVMsUUFBUTtLQUN4QixVQUFVO0lBQ1osQ0FBQztHQUNIO0dBQ0EsT0FBTztFQUNUO0VBRUEsTUFBTSxXQURVLFdBQ08sQ0FBQyxDQUFDO0VBQ3pCLElBQUksYUFBYSxDQUFDLFdBQVcsWUFBWSxPQUFPLFdBQzlDLE9BQU8sUUFBUSxPQUFPLE9BQU8sT0FBTyxVQUFVO0VBRWhELE9BQU8sY0FBYyxLQUFLO0VBQzFCLE9BQU8sYUFBYSxTQUFTO0VBQzdCLE9BQU8sa0JBQWtCLFVBQVU7RUFDbkMsT0FBTyxvQkFBb0I7RUFDM0IsT0FBTyxLQUFLLHlCQUF5QixPQUFPLFFBQVE7RUFDcEQsT0FBTyxnQkFBZ0IsY0FBYyxTQUFTO0VBQzlDLElBQUksVUFBVSxHQUNaLE9BQU8sY0FBYyxjQUFjLFNBQVM7T0FDdkMsSUFBSSxDQUFDLE9BQU8sV0FBVztHQUM1QixPQUFPLFlBQVk7R0FDbkIsSUFBSSxDQUFDLE9BQU8sK0JBQ1YsT0FBTyxnQ0FBZ0MsU0FBUyxjQUFjLEdBQUc7SUFDL0QsSUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXO0lBQ2pDLElBQUksRUFBRSxXQUFXLE1BQU07SUFDdkIsT0FBTyxVQUFVLG9CQUFvQixpQkFBaUIsT0FBTyw2QkFBNkI7SUFDMUYsT0FBTyxnQ0FBZ0M7SUFDdkMsT0FBTyxPQUFPO0lBQ2QsT0FBTyxjQUFjLGNBQWMsU0FBUztHQUM5QztHQUVGLE9BQU8sVUFBVSxpQkFBaUIsaUJBQWlCLE9BQU8sNkJBQTZCO0VBQ3pGO0VBQ0EsT0FBTztDQUNUO0NBRUEsU0FBUyxZQUFZLE9BQU8sT0FBTyxjQUFjLFVBQVU7RUFDekQsSUFBSSxVQUFVLEtBQUssR0FDakIsUUFBUTtFQUVWLElBQUksaUJBQWlCLEtBQUssR0FDeEIsZUFBZTtFQUVqQixJQUFJLE9BQU8sVUFBVSxVQUVuQixRQURzQixTQUFTLE9BQU8sRUFDbEI7RUFFdEIsTUFBTSxTQUFTO0VBQ2YsSUFBSSxPQUFPLFdBQVc7RUFDdEIsSUFBSSxPQUFPLFVBQVUsYUFDbkIsUUFBUSxPQUFPLE9BQU87RUFFeEIsTUFBTSxjQUFjLE9BQU8sUUFBUSxPQUFPLE9BQU8sUUFBUSxPQUFPLE9BQU8sS0FBSyxPQUFPO0VBQ25GLElBQUksV0FBVztFQUNmLElBQUksT0FBTyxPQUFPLE1BQ2hCLElBQUksT0FBTyxXQUFXLE9BQU8sT0FBTyxRQUFRLFNBRTFDLFdBQVcsV0FBVyxPQUFPLFFBQVE7T0FDaEM7R0FDTCxJQUFJO0dBQ0osSUFBSSxhQUFhO0lBQ2YsTUFBTSxhQUFhLFdBQVcsT0FBTyxPQUFPLEtBQUs7SUFDakQsbUJBQW1CLE9BQU8sT0FBTyxNQUFLLFlBQVcsUUFBUSxhQUFhLHlCQUF5QixJQUFJLE1BQU0sVUFBVSxDQUFDLENBQUM7R0FDdkgsT0FDRSxtQkFBbUIsT0FBTyxvQkFBb0IsUUFBUTtHQUV4RCxNQUFNLE9BQU8sY0FBYyxLQUFLLEtBQUssT0FBTyxPQUFPLFNBQVMsT0FBTyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sT0FBTztHQUNyRyxNQUFNLEVBQ0osbUJBQ0UsT0FBTztHQUNYLElBQUksZ0JBQWdCLE9BQU8sT0FBTztHQUNsQyxJQUFJLGtCQUFrQixRQUNwQixnQkFBZ0IsT0FBTyxxQkFBcUI7UUFDdkM7SUFDTCxnQkFBZ0IsS0FBSyxLQUFLLFdBQVcsT0FBTyxPQUFPLGVBQWUsRUFBRSxDQUFDO0lBQ3JFLElBQUksa0JBQWtCLGdCQUFnQixNQUFNLEdBQzFDLGdCQUFnQixnQkFBZ0I7R0FFcEM7R0FDQSxJQUFJLGNBQWMsT0FBTyxtQkFBbUI7R0FDNUMsSUFBSSxnQkFDRixjQUFjLGVBQWUsbUJBQW1CLEtBQUssS0FBSyxnQkFBZ0IsQ0FBQztHQUU3RSxJQUFJLFlBQVksa0JBQWtCLE9BQU8sT0FBTyxrQkFBa0IsVUFBVSxDQUFDLGFBQzNFLGNBQWM7R0FFaEIsSUFBSSxhQUFhO0lBQ2YsTUFBTSxZQUFZLGlCQUFpQixtQkFBbUIsT0FBTyxjQUFjLFNBQVMsU0FBUyxtQkFBbUIsT0FBTyxjQUFjLElBQUksT0FBTyxPQUFPLGdCQUFnQixTQUFTO0lBQ2hMLE9BQU8sUUFBUTtLQUNiO0tBQ0EsU0FBUztLQUNULGtCQUFrQixjQUFjLFNBQVMsbUJBQW1CLElBQUksbUJBQW1CLE9BQU87S0FDMUYsZ0JBQWdCLGNBQWMsU0FBUyxPQUFPLFlBQVk7SUFDNUQsQ0FBQztHQUNIO0dBQ0EsSUFBSSxhQUFhO0lBQ2YsTUFBTSxhQUFhLFdBQVcsT0FBTyxPQUFPLEtBQUs7SUFDakQsV0FBVyxPQUFPLE9BQU8sTUFBSyxZQUFXLFFBQVEsYUFBYSx5QkFBeUIsSUFBSSxNQUFNLFVBQVUsQ0FBQyxDQUFDO0dBQy9HLE9BQ0UsV0FBVyxPQUFPLG9CQUFvQixRQUFRO0VBRWxEO0VBRUYsNEJBQTRCO0dBQzFCLE9BQU8sUUFBUSxVQUFVLE9BQU8sY0FBYyxRQUFRO0VBQ3hELENBQUM7RUFDRCxPQUFPO0NBQ1Q7Q0FHQSxTQUFTLFVBQVUsT0FBTyxjQUFjLFVBQVU7RUFDaEQsSUFBSSxpQkFBaUIsS0FBSyxHQUN4QixlQUFlO0VBRWpCLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixTQUNBLFFBQ0EsY0FDRTtFQUNKLElBQUksQ0FBQyxXQUFXLE9BQU8sV0FBVyxPQUFPO0VBQ3pDLElBQUksT0FBTyxVQUFVLGFBQ25CLFFBQVEsT0FBTyxPQUFPO0VBRXhCLElBQUksV0FBVyxPQUFPO0VBQ3RCLElBQUksT0FBTyxrQkFBa0IsVUFBVSxPQUFPLG1CQUFtQixLQUFLLE9BQU8sb0JBQzNFLFdBQVcsS0FBSyxJQUFJLE9BQU8scUJBQXFCLFdBQVcsSUFBSSxHQUFHLENBQUM7RUFFckUsTUFBTSxZQUFZLE9BQU8sY0FBYyxPQUFPLHFCQUFxQixJQUFJO0VBQ3ZFLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBTyxRQUFRO0VBQ25ELElBQUksT0FBTyxNQUFNO0dBQ2YsSUFBSSxhQUFhLENBQUMsYUFBYSxPQUFPLHFCQUFxQixPQUFPO0dBQ2xFLE9BQU8sUUFBUSxFQUNiLFdBQVcsT0FDYixDQUFDO0dBRUQsT0FBTyxjQUFjLE9BQU8sVUFBVTtHQUN0QyxJQUFJLE9BQU8sZ0JBQWdCLE9BQU8sT0FBTyxTQUFTLEtBQUssT0FBTyxTQUFTO0lBQ3JFLDRCQUE0QjtLQUMxQixPQUFPLFFBQVEsT0FBTyxjQUFjLFdBQVcsT0FBTyxjQUFjLFFBQVE7SUFDOUUsQ0FBQztJQUNELE9BQU87R0FDVDtFQUNGO0VBQ0EsSUFBSSxPQUFPLFVBQVUsT0FBTyxPQUMxQixPQUFPLE9BQU8sUUFBUSxHQUFHLE9BQU8sY0FBYyxRQUFRO0VBRXhELE9BQU8sT0FBTyxRQUFRLE9BQU8sY0FBYyxXQUFXLE9BQU8sY0FBYyxRQUFRO0NBQ3JGO0NBR0EsU0FBUyxVQUFVLE9BQU8sY0FBYyxVQUFVO0VBQ2hELElBQUksaUJBQWlCLEtBQUssR0FDeEIsZUFBZTtFQUVqQixNQUFNLFNBQVM7RUFDZixNQUFNLEVBQ0osUUFDQSxVQUNBLFlBQ0EsY0FDQSxTQUNBLGNBQ0U7RUFDSixJQUFJLENBQUMsV0FBVyxPQUFPLFdBQVcsT0FBTztFQUN6QyxJQUFJLE9BQU8sVUFBVSxhQUNuQixRQUFRLE9BQU8sT0FBTztFQUV4QixNQUFNLFlBQVksT0FBTyxXQUFXLE9BQU8sUUFBUTtFQUNuRCxJQUFJLE9BQU8sTUFBTTtHQUNmLElBQUksYUFBYSxDQUFDLGFBQWEsT0FBTyxxQkFBcUIsT0FBTztHQUNsRSxPQUFPLFFBQVEsRUFDYixXQUFXLE9BQ2IsQ0FBQztHQUVELE9BQU8sY0FBYyxPQUFPLFVBQVU7RUFDeEM7RUFDQSxNQUFNLFlBQVksZUFBZSxPQUFPLFlBQVksQ0FBQyxPQUFPO0VBQzVELFNBQVMsVUFBVSxLQUFLO0dBQ3RCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQztHQUM3QyxPQUFPLEtBQUssTUFBTSxHQUFHO0VBQ3ZCO0VBQ0EsTUFBTSxzQkFBc0IsVUFBVSxTQUFTO0VBQy9DLE1BQU0scUJBQXFCLFNBQVMsS0FBSSxRQUFPLFVBQVUsR0FBRyxDQUFDO0VBQzdELE1BQU0sYUFBYSxPQUFPLFlBQVksT0FBTyxTQUFTO0VBQ3RELElBQUksV0FBVyxTQUFTLG1CQUFtQixRQUFRLG1CQUFtQixJQUFJO0VBQzFFLElBQUksT0FBTyxhQUFhLGdCQUFnQixPQUFPLFdBQVcsYUFBYTtHQUNyRSxJQUFJO0dBQ0osU0FBUyxTQUFTLE1BQU0sY0FBYztJQUNwQyxJQUFJLHVCQUF1QixNQUV6QixnQkFBZ0I7R0FFcEIsQ0FBQztHQUNELElBQUksT0FBTyxrQkFBa0IsYUFDM0IsV0FBVyxhQUFhLFNBQVMsaUJBQWlCLFNBQVMsZ0JBQWdCLElBQUksZ0JBQWdCLElBQUk7RUFFdkc7RUFDQSxJQUFJLFlBQVk7RUFDaEIsSUFBSSxPQUFPLGFBQWEsYUFBYTtHQUNuQyxZQUFZLFdBQVcsUUFBUSxRQUFRO0dBQ3ZDLElBQUksWUFBWSxHQUFHLFlBQVksT0FBTyxjQUFjO0dBQ3BELElBQUksT0FBTyxrQkFBa0IsVUFBVSxPQUFPLG1CQUFtQixLQUFLLE9BQU8sb0JBQW9CO0lBQy9GLFlBQVksWUFBWSxPQUFPLHFCQUFxQixZQUFZLElBQUksSUFBSTtJQUN4RSxZQUFZLEtBQUssSUFBSSxXQUFXLENBQUM7R0FDbkM7RUFDRjtFQUNBLElBQUksT0FBTyxVQUFVLE9BQU8sYUFBYTtHQUN2QyxNQUFNLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFFBQVEsV0FBVyxPQUFPLFVBQVUsT0FBTyxRQUFRLE9BQU8sU0FBUyxJQUFJLE9BQU8sT0FBTyxTQUFTO0dBQ3ZKLE9BQU8sT0FBTyxRQUFRLFdBQVcsT0FBTyxjQUFjLFFBQVE7RUFDaEUsT0FBTyxJQUFJLE9BQU8sUUFBUSxPQUFPLGdCQUFnQixLQUFLLE9BQU8sU0FBUztHQUNwRSw0QkFBNEI7SUFDMUIsT0FBTyxRQUFRLFdBQVcsT0FBTyxjQUFjLFFBQVE7R0FDekQsQ0FBQztHQUNELE9BQU87RUFDVDtFQUNBLE9BQU8sT0FBTyxRQUFRLFdBQVcsT0FBTyxjQUFjLFFBQVE7Q0FDaEU7Q0FHQSxTQUFTLFdBQVcsT0FBTyxjQUFjLFVBQVU7RUFDakQsSUFBSSxpQkFBaUIsS0FBSyxHQUN4QixlQUFlO0VBRWpCLE1BQU0sU0FBUztFQUNmLElBQUksT0FBTyxXQUFXO0VBQ3RCLElBQUksT0FBTyxVQUFVLGFBQ25CLFFBQVEsT0FBTyxPQUFPO0VBRXhCLE9BQU8sT0FBTyxRQUFRLE9BQU8sYUFBYSxPQUFPLGNBQWMsUUFBUTtDQUN6RTtDQUdBLFNBQVMsZUFBZSxPQUFPLGNBQWMsVUFBVSxXQUFXO0VBQ2hFLElBQUksaUJBQWlCLEtBQUssR0FDeEIsZUFBZTtFQUVqQixJQUFJLGNBQWMsS0FBSyxHQUNyQixZQUFZO0VBRWQsTUFBTSxTQUFTO0VBQ2YsSUFBSSxPQUFPLFdBQVc7RUFDdEIsSUFBSSxPQUFPLFVBQVUsYUFDbkIsUUFBUSxPQUFPLE9BQU87RUFFeEIsSUFBSSxRQUFRLE9BQU87RUFDbkIsTUFBTSxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sb0JBQW9CLEtBQUs7RUFDN0QsTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFFBQVEsUUFBUSxPQUFPLE9BQU8sY0FBYztFQUNqRixNQUFNLFlBQVksT0FBTyxlQUFlLE9BQU8sWUFBWSxDQUFDLE9BQU87RUFDbkUsSUFBSSxhQUFhLE9BQU8sU0FBUyxZQUFZO0dBRzNDLE1BQU0sY0FBYyxPQUFPLFNBQVM7R0FDcEMsTUFBTSxXQUFXLE9BQU8sU0FBUyxZQUFZO0dBQzdDLElBQUksWUFBWSxlQUFlLFdBQVcsZUFBZSxXQUN2RCxTQUFTLE9BQU8sT0FBTztFQUUzQixPQUFPO0dBR0wsTUFBTSxXQUFXLE9BQU8sU0FBUyxZQUFZO0dBQzdDLE1BQU0sY0FBYyxPQUFPLFNBQVM7R0FDcEMsSUFBSSxZQUFZLGFBQWEsY0FBYyxZQUFZLFdBQ3JELFNBQVMsT0FBTyxPQUFPO0VBRTNCO0VBQ0EsUUFBUSxLQUFLLElBQUksT0FBTyxDQUFDO0VBQ3pCLFFBQVEsS0FBSyxJQUFJLE9BQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQztFQUNwRCxPQUFPLE9BQU8sUUFBUSxPQUFPLE9BQU8sY0FBYyxRQUFRO0NBQzVEO0NBRUEsU0FBUyxzQkFBc0I7RUFDN0IsTUFBTSxTQUFTO0VBQ2YsSUFBSSxPQUFPLFdBQVc7RUFDdEIsTUFBTSxFQUNKLFFBQ0EsYUFDRTtFQUNKLE1BQU0sZ0JBQWdCLE9BQU8sa0JBQWtCLFNBQVMsT0FBTyxxQkFBcUIsSUFBSSxPQUFPO0VBQy9GLElBQUksZUFBZSxPQUFPLHNCQUFzQixPQUFPLFlBQVk7RUFDbkUsSUFBSTtFQUNKLE1BQU0sZ0JBQWdCLE9BQU8sWUFBWSxpQkFBaUIsSUFBSSxPQUFPO0VBQ3JFLE1BQU0sU0FBUyxPQUFPLFFBQVEsT0FBTyxPQUFPLFFBQVEsT0FBTyxPQUFPLEtBQUssT0FBTztFQUM5RSxJQUFJLE9BQU8sTUFBTTtHQUNmLElBQUksT0FBTyxXQUFXO0dBQ3RCLFlBQVksU0FBUyxPQUFPLGFBQWEsYUFBYSx5QkFBeUIsR0FBRyxFQUFFO0dBQ3BGLElBQUksT0FBTyxnQkFDVCxPQUFPLFlBQVksU0FBUztRQUN2QixJQUFJLGdCQUFnQixVQUFVLE9BQU8sT0FBTyxTQUFTLGlCQUFpQixLQUFLLE9BQU8sT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLE9BQU8sU0FBUyxnQkFBZ0I7SUFDdEosT0FBTyxRQUFRO0lBQ2YsZUFBZSxPQUFPLGNBQWMsZ0JBQWdCLFVBQVUsR0FBRyxjQUFjLDRCQUE0QixVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDNUgsZUFBZTtLQUNiLE9BQU8sUUFBUSxZQUFZO0lBQzdCLENBQUM7R0FDSCxPQUNFLE9BQU8sUUFBUSxZQUFZO0VBRS9CLE9BQ0UsT0FBTyxRQUFRLFlBQVk7Q0FFL0I7Q0FFQSxJQUFJLFFBQVE7RUFDVjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtDQUNGO0NBRUEsU0FBUyxXQUFXLGdCQUFnQixTQUFTO0VBQzNDLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixRQUNBLGFBQ0U7RUFDSixJQUFJLENBQUMsT0FBTyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUSxTQUFTO0VBQ3JFLE1BQU0sbUJBQW1CO0dBRXZCLEFBRGUsZ0JBQWdCLFVBQVUsSUFBSSxPQUFPLFdBQVcsZUFDMUQsQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVO0lBQzVCLEdBQUcsYUFBYSwyQkFBMkIsS0FBSztHQUNsRCxDQUFDO0VBQ0g7RUFDQSxNQUFNLHlCQUF5QjtHQUM3QixNQUFNLFNBQVMsZ0JBQWdCLFVBQVUsSUFBSSxPQUFPLGlCQUFpQjtHQUNyRSxPQUFPLFNBQVEsT0FBTTtJQUNuQixHQUFHLE9BQU87R0FDWixDQUFDO0dBQ0QsSUFBSSxPQUFPLFNBQVMsR0FBRztJQUNyQixPQUFPLGFBQWE7SUFDcEIsT0FBTyxhQUFhO0dBQ3RCO0VBQ0Y7RUFDQSxNQUFNLGNBQWMsT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLEtBQUssT0FBTztFQUNyRSxJQUFJLE9BQU8sdUJBQXVCLE9BQU8saUJBQWlCLEtBQUssY0FDN0QsaUJBQWlCO0VBRW5CLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLGNBQWMsT0FBTyxLQUFLLE9BQU87RUFDakYsTUFBTSxrQkFBa0IsT0FBTyxPQUFPLFNBQVMsbUJBQW1CO0VBQ2xFLE1BQU0saUJBQWlCLGVBQWUsT0FBTyxPQUFPLFNBQVMsT0FBTyxLQUFLLFNBQVM7RUFDbEYsTUFBTSxrQkFBaUIsbUJBQWtCO0dBQ3ZDLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsS0FBSyxHQUFHO0lBQzFDLE1BQU0sVUFBVSxPQUFPLFlBQVksY0FBYyxnQkFBZ0IsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLGNBQWMsT0FBTyxDQUFDLE9BQU8sWUFBWSxPQUFPLGVBQWUsQ0FBQztJQUM3SixPQUFPLFNBQVMsT0FBTyxPQUFPO0dBQ2hDO0VBQ0Y7RUFDQSxJQUFJLGlCQUFpQjtHQUNuQixJQUFJLE9BQU8sb0JBQW9CO0lBRTdCLGVBRG9CLGlCQUFpQixPQUFPLE9BQU8sU0FBUyxjQUNsQztJQUMxQixPQUFPLGFBQWE7SUFDcEIsT0FBTyxhQUFhO0dBQ3RCLE9BQ0UsWUFBWSxpTEFBaUw7R0FFL0wsV0FBVztFQUNiLE9BQU8sSUFBSSxnQkFBZ0I7R0FDekIsSUFBSSxPQUFPLG9CQUFvQjtJQUU3QixlQURvQixPQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sU0FBUyxPQUFPLEtBQUssSUFDaEQ7SUFDMUIsT0FBTyxhQUFhO0lBQ3BCLE9BQU8sYUFBYTtHQUN0QixPQUNFLFlBQVksNEtBQTRLO0dBRTFMLFdBQVc7RUFDYixPQUNFLFdBQVc7RUFFYixPQUFPLFFBQVE7R0FDYjtHQUNBLFdBQVcsT0FBTyxpQkFBaUIsU0FBWTtHQUMvQztFQUNGLENBQUM7Q0FDSDtDQUVBLFNBQVMsUUFBUSxPQUFPO0VBQ3RCLElBQUksRUFDRixnQkFDQSxVQUFVLE1BQ1YsV0FDQSxjQUNBLGtCQUNBLFNBQ0EsY0FDQSxpQkFDRSxVQUFVLEtBQUssSUFBSSxDQUFDLElBQUk7RUFDNUIsTUFBTSxTQUFTO0VBQ2YsSUFBSSxDQUFDLE9BQU8sT0FBTyxNQUFNO0VBQ3pCLE9BQU8sS0FBSyxlQUFlO0VBQzNCLE1BQU0sRUFDSixRQUNBLGdCQUNBLGdCQUNBLFVBQ0EsV0FDRTtFQUNKLE1BQU0sRUFDSixnQkFDQSxpQkFDRTtFQUNKLE9BQU8saUJBQWlCO0VBQ3hCLE9BQU8saUJBQWlCO0VBQ3hCLElBQUksT0FBTyxXQUFXLE9BQU8sUUFBUSxTQUFTO0dBQzVDLElBQUksU0FDRjtRQUFJLENBQUMsT0FBTyxrQkFBa0IsT0FBTyxjQUFjLEdBQ2pELE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTyxRQUFRLEdBQUcsT0FBTyxJQUFJO1NBQ3RELElBQUksT0FBTyxrQkFBa0IsT0FBTyxZQUFZLE9BQU8sZUFDNUQsT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLFNBQVMsT0FBTyxXQUFXLEdBQUcsT0FBTyxJQUFJO1NBQ3pFLElBQUksT0FBTyxjQUFjLE9BQU8sU0FBUyxTQUFTLEdBQ3ZELE9BQU8sUUFBUSxPQUFPLFFBQVEsY0FBYyxHQUFHLE9BQU8sSUFBSTtHQUM1RDtHQUVGLE9BQU8saUJBQWlCO0dBQ3hCLE9BQU8saUJBQWlCO0dBQ3hCLE9BQU8sS0FBSyxTQUFTO0dBQ3JCO0VBQ0Y7RUFDQSxJQUFJLGdCQUFnQixPQUFPO0VBQzNCLElBQUksa0JBQWtCLFFBQ3BCLGdCQUFnQixPQUFPLHFCQUFxQjtPQUN2QztHQUNMLGdCQUFnQixLQUFLLEtBQUssV0FBVyxPQUFPLGVBQWUsRUFBRSxDQUFDO0dBQzlELElBQUksa0JBQWtCLGdCQUFnQixNQUFNLEdBQzFDLGdCQUFnQixnQkFBZ0I7RUFFcEM7RUFDQSxNQUFNLGlCQUFpQixPQUFPLHFCQUFxQixnQkFBZ0IsT0FBTztFQUMxRSxJQUFJLGVBQWUsaUJBQWlCLEtBQUssSUFBSSxnQkFBZ0IsS0FBSyxLQUFLLGdCQUFnQixDQUFDLENBQUMsSUFBSTtFQUM3RixJQUFJLGVBQWUsbUJBQW1CLEdBQ3BDLGdCQUFnQixpQkFBaUIsZUFBZTtFQUVsRCxnQkFBZ0IsT0FBTztFQUN2QixPQUFPLGVBQWU7RUFDdEIsTUFBTSxjQUFjLE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTyxLQUFLLE9BQU87RUFDckUsSUFBSSxPQUFPLFNBQVMsZ0JBQWdCLGdCQUFnQixPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sU0FBUyxnQkFBZ0IsZUFBZSxHQUNySSxZQUFZLDBPQUEwTztPQUNqUCxJQUFJLGVBQWUsT0FBTyxLQUFLLFNBQVMsT0FDN0MsWUFBWSx5RUFBeUU7RUFFdkYsTUFBTSx1QkFBdUIsQ0FBQztFQUM5QixNQUFNLHNCQUFzQixDQUFDO0VBQzdCLE1BQU0sT0FBTyxjQUFjLEtBQUssS0FBSyxPQUFPLFNBQVMsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPO0VBQ2hGLE1BQU0sb0JBQW9CLFdBQVcsT0FBTyxlQUFlLGlCQUFpQixDQUFDO0VBQzdFLElBQUksY0FBYyxvQkFBb0IsZUFBZSxPQUFPO0VBQzVELElBQUksT0FBTyxxQkFBcUIsYUFDOUIsbUJBQW1CLE9BQU8sY0FBYyxPQUFPLE1BQUssT0FBTSxHQUFHLFVBQVUsU0FBUyxPQUFPLGdCQUFnQixDQUFDLENBQUM7T0FFekcsY0FBYztFQUVoQixNQUFNLFNBQVMsY0FBYyxVQUFVLENBQUM7RUFDeEMsTUFBTSxTQUFTLGNBQWMsVUFBVSxDQUFDO0VBQ3hDLElBQUksa0JBQWtCO0VBQ3RCLElBQUksaUJBQWlCO0VBRXJCLE1BQU0sMkJBRGlCLGNBQWMsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLHFCQUNyQixrQkFBa0IsT0FBTyxpQkFBaUIsY0FBYyxDQUFDLGdCQUFnQixJQUFJLEtBQU07RUFFckksSUFBSSwwQkFBMEIsY0FBYztHQUMxQyxrQkFBa0IsS0FBSyxJQUFJLGVBQWUseUJBQXlCLGNBQWM7R0FDakYsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLGVBQWUseUJBQXlCLEtBQUssR0FBRztJQUNsRSxNQUFNLFFBQVEsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUk7SUFDekMsSUFBSSxhQUFhO0tBQ2YsTUFBTSxvQkFBb0IsT0FBTyxRQUFRO0tBQ3pDLEtBQUssSUFBSSxJQUFJLE9BQU8sU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQzNDLElBQUksT0FBTyxFQUFFLENBQUMsV0FBVyxtQkFBbUIscUJBQXFCLEtBQUssQ0FBQztJQUszRSxPQUNFLHFCQUFxQixLQUFLLE9BQU8sUUFBUSxDQUFDO0dBRTlDO0VBQ0YsT0FBTyxJQUFJLDBCQUEwQixnQkFBZ0IsT0FBTyxjQUFjO0dBQ3hFLGlCQUFpQixLQUFLLElBQUksMkJBQTJCLE9BQU8sZUFBZSxJQUFJLGNBQWM7R0FDN0YsSUFBSSxtQkFDRixpQkFBaUIsS0FBSyxJQUFJLGdCQUFnQixnQkFBZ0IsT0FBTyxlQUFlLENBQUM7R0FFbkYsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLGdCQUFnQixLQUFLLEdBQUc7SUFDMUMsTUFBTSxRQUFRLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJO0lBQ3pDLElBQUksYUFDRixPQUFPLFNBQVMsT0FBTyxlQUFlO0tBQ3BDLElBQUksTUFBTSxXQUFXLE9BQU8sb0JBQW9CLEtBQUssVUFBVTtJQUNqRSxDQUFDO1NBRUQsb0JBQW9CLEtBQUssS0FBSztHQUVsQztFQUNGO0VBQ0EsT0FBTyxzQkFBc0I7RUFDN0IsNEJBQTRCO0dBQzFCLE9BQU8sc0JBQXNCO0VBQy9CLENBQUM7RUFDRCxJQUFJLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxTQUFTLGdCQUFnQixlQUFlLEdBQUc7R0FDeEYsSUFBSSxvQkFBb0IsU0FBUyxnQkFBZ0IsR0FDL0Msb0JBQW9CLE9BQU8sb0JBQW9CLFFBQVEsZ0JBQWdCLEdBQUcsQ0FBQztHQUU3RSxJQUFJLHFCQUFxQixTQUFTLGdCQUFnQixHQUNoRCxxQkFBcUIsT0FBTyxxQkFBcUIsUUFBUSxnQkFBZ0IsR0FBRyxDQUFDO0VBRWpGO0VBQ0EsSUFBSSxRQUNGLHFCQUFxQixTQUFRLFVBQVM7R0FDcEMsT0FBTyxNQUFNLENBQUMsb0JBQW9CO0dBQ2xDLFNBQVMsUUFBUSxPQUFPLE1BQU07R0FDOUIsT0FBTyxNQUFNLENBQUMsb0JBQW9CO0VBQ3BDLENBQUM7RUFFSCxJQUFJLFFBQ0Ysb0JBQW9CLFNBQVEsVUFBUztHQUNuQyxPQUFPLE1BQU0sQ0FBQyxvQkFBb0I7R0FDbEMsU0FBUyxPQUFPLE9BQU8sTUFBTTtHQUM3QixPQUFPLE1BQU0sQ0FBQyxvQkFBb0I7RUFDcEMsQ0FBQztFQUVILE9BQU8sYUFBYTtFQUNwQixJQUFJLE9BQU8sa0JBQWtCLFFBQzNCLE9BQU8sYUFBYTtPQUNmLElBQUksZ0JBQWdCLHFCQUFxQixTQUFTLEtBQUssVUFBVSxvQkFBb0IsU0FBUyxLQUFLLFNBQ3hHLE9BQU8sT0FBTyxTQUFTLE9BQU8sZUFBZTtHQUMzQyxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sT0FBTyxNQUFNO0VBQzFELENBQUM7RUFFSCxJQUFJLE9BQU8scUJBQ1QsT0FBTyxtQkFBbUI7RUFFNUIsSUFBSSxTQUNGO09BQUkscUJBQXFCLFNBQVMsS0FBSyxRQUNyQztRQUFJLE9BQU8sbUJBQW1CLGFBQWE7S0FDekMsTUFBTSx3QkFBd0IsT0FBTyxXQUFXO0tBRWhELE1BQU0sT0FEb0IsT0FBTyxXQUFXLGNBQWMsbUJBQ3pCO0tBQ2pDLElBQUksY0FDRixPQUFPLGFBQWEsT0FBTyxZQUFZLElBQUk7VUFDdEM7TUFDTCxPQUFPLFFBQVEsY0FBYyxLQUFLLEtBQUssZUFBZSxHQUFHLEdBQUcsT0FBTyxJQUFJO01BQ3ZFLElBQUksY0FBYztPQUNoQixPQUFPLGdCQUFnQixpQkFBaUIsT0FBTyxnQkFBZ0IsaUJBQWlCO09BQ2hGLE9BQU8sZ0JBQWdCLG1CQUFtQixPQUFPLGdCQUFnQixtQkFBbUI7TUFDdEY7S0FDRjtJQUNGLE9BQ0UsSUFBSSxjQUFjO0tBQ2hCLE1BQU0sUUFBUSxjQUFjLHFCQUFxQixTQUFTLE9BQU8sS0FBSyxPQUFPLHFCQUFxQjtLQUNsRyxPQUFPLFFBQVEsT0FBTyxjQUFjLE9BQU8sR0FBRyxPQUFPLElBQUk7S0FDekQsT0FBTyxnQkFBZ0IsbUJBQW1CLE9BQU87SUFDbkQ7R0FDRixPQUNLLElBQUksb0JBQW9CLFNBQVMsS0FBSyxRQUMzQyxJQUFJLE9BQU8sbUJBQW1CLGFBQWE7SUFDekMsTUFBTSx3QkFBd0IsT0FBTyxXQUFXO0lBRWhELE1BQU0sT0FEb0IsT0FBTyxXQUFXLGNBQWMsa0JBQ3pCO0lBQ2pDLElBQUksY0FDRixPQUFPLGFBQWEsT0FBTyxZQUFZLElBQUk7U0FDdEM7S0FDTCxPQUFPLFFBQVEsY0FBYyxnQkFBZ0IsR0FBRyxPQUFPLElBQUk7S0FDM0QsSUFBSSxjQUFjO01BQ2hCLE9BQU8sZ0JBQWdCLGlCQUFpQixPQUFPLGdCQUFnQixpQkFBaUI7TUFDaEYsT0FBTyxnQkFBZ0IsbUJBQW1CLE9BQU8sZ0JBQWdCLG1CQUFtQjtLQUN0RjtJQUNGO0dBQ0YsT0FBTztJQUNMLE1BQU0sUUFBUSxjQUFjLG9CQUFvQixTQUFTLE9BQU8sS0FBSyxPQUFPLG9CQUFvQjtJQUNoRyxPQUFPLFFBQVEsT0FBTyxjQUFjLE9BQU8sR0FBRyxPQUFPLElBQUk7R0FDM0Q7RUFDRjtFQUVGLE9BQU8saUJBQWlCO0VBQ3hCLE9BQU8saUJBQWlCO0VBQ3hCLElBQUksT0FBTyxjQUFjLE9BQU8sV0FBVyxXQUFXLENBQUMsY0FBYztHQUNuRSxNQUFNLGFBQWE7SUFDakI7SUFDQTtJQUNBO0lBQ0E7SUFDQSxjQUFjO0dBQ2hCO0dBQ0EsSUFBSSxNQUFNLFFBQVEsT0FBTyxXQUFXLE9BQU8sR0FDekMsT0FBTyxXQUFXLFFBQVEsU0FBUSxNQUFLO0lBQ3JDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRO0tBQzNDLEdBQUc7S0FDSCxTQUFTLEVBQUUsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsVUFBVTtJQUN2RSxDQUFDO0dBQ0gsQ0FBQztRQUNJLElBQUksT0FBTyxXQUFXLG1CQUFtQixPQUFPLGVBQWUsT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUNyRyxPQUFPLFdBQVcsUUFBUSxRQUFRO0lBQ2hDLEdBQUc7SUFDSCxTQUFTLE9BQU8sV0FBVyxRQUFRLE9BQU8sa0JBQWtCLE9BQU8sZ0JBQWdCLFVBQVU7R0FDL0YsQ0FBQztFQUVMO0VBQ0EsT0FBTyxLQUFLLFNBQVM7Q0FDdkI7Q0FFQSxTQUFTLGNBQWM7RUFDckIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLFFBQ0EsYUFDRTtFQUNKLElBQUksQ0FBQyxPQUFPLFFBQVEsQ0FBQyxZQUFZLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUSxTQUFTO0VBQ2xGLE9BQU8sYUFBYTtFQUNwQixNQUFNLGlCQUFpQixDQUFDO0VBQ3hCLE9BQU8sT0FBTyxTQUFRLFlBQVc7R0FDL0IsTUFBTSxRQUFRLE9BQU8sUUFBUSxxQkFBcUIsY0FBYyxRQUFRLGFBQWEseUJBQXlCLElBQUksSUFBSSxRQUFRO0dBQzlILGVBQWUsU0FBUztFQUMxQixDQUFDO0VBQ0QsT0FBTyxPQUFPLFNBQVEsWUFBVztHQUMvQixRQUFRLGdCQUFnQix5QkFBeUI7RUFDbkQsQ0FBQztFQUNELGVBQWUsU0FBUSxZQUFXO0dBQ2hDLFNBQVMsT0FBTyxPQUFPO0VBQ3pCLENBQUM7RUFDRCxPQUFPLGFBQWE7RUFDcEIsT0FBTyxRQUFRLE9BQU8sV0FBVyxDQUFDO0NBQ3BDO0NBRUEsSUFBSSxPQUFPO0VBQ1Q7RUFDQTtFQUNBO0NBQ0Y7Q0FFQSxTQUFTLGNBQWMsUUFBUTtFQUM3QixNQUFNLFNBQVM7RUFDZixJQUFJLENBQUMsT0FBTyxPQUFPLGlCQUFpQixPQUFPLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxPQUFPLE9BQU8sU0FBUztFQUM3RyxNQUFNLEtBQUssT0FBTyxPQUFPLHNCQUFzQixjQUFjLE9BQU8sS0FBSyxPQUFPO0VBQ2hGLElBQUksT0FBTyxXQUNULE9BQU8sc0JBQXNCO0VBRS9CLEdBQUcsTUFBTSxTQUFTO0VBQ2xCLEdBQUcsTUFBTSxTQUFTLFNBQVMsYUFBYTtFQUN4QyxJQUFJLE9BQU8sV0FDVCw0QkFBNEI7R0FDMUIsT0FBTyxzQkFBc0I7RUFDL0IsQ0FBQztDQUVMO0NBRUEsU0FBUyxrQkFBa0I7RUFDekIsTUFBTSxTQUFTO0VBQ2YsSUFBSSxPQUFPLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxPQUFPLE9BQU8sU0FDbEU7RUFFRixJQUFJLE9BQU8sV0FDVCxPQUFPLHNCQUFzQjtFQUUvQixPQUFPLE9BQU8sT0FBTyxzQkFBc0IsY0FBYyxPQUFPLFlBQVksQ0FBQyxNQUFNLFNBQVM7RUFDNUYsSUFBSSxPQUFPLFdBQ1QsNEJBQTRCO0dBQzFCLE9BQU8sc0JBQXNCO0VBQy9CLENBQUM7Q0FFTDtDQUVBLElBQUksYUFBYTtFQUNmO0VBQ0E7Q0FDRjtDQUdBLFNBQVMsZUFBZSxVQUFVLE1BQU07RUFDdEMsSUFBSSxTQUFTLEtBQUssR0FDaEIsT0FBTztFQUVULFNBQVMsY0FBYyxJQUFJO0dBQ3pCLElBQUksQ0FBQyxNQUFNLE9BQU8sWUFBWSxLQUFLLE9BQU8sVUFBVSxHQUFHLE9BQU87R0FDOUQsSUFBSSxHQUFHLGNBQWMsS0FBSyxHQUFHO0dBQzdCLE1BQU0sUUFBUSxHQUFHLFFBQVEsUUFBUTtHQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFDaEIsT0FBTztHQUVULE9BQU8sU0FBUyxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsSUFBSTtFQUNyRDtFQUNBLE9BQU8sY0FBYyxJQUFJO0NBQzNCO0NBQ0EsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLFFBQVE7RUFDL0MsTUFBTSxTQUFTLFVBQVU7RUFDekIsTUFBTSxFQUNKLFdBQ0U7RUFDSixNQUFNLHFCQUFxQixPQUFPO0VBQ2xDLE1BQU0scUJBQXFCLE9BQU87RUFDbEMsSUFBSSx1QkFBdUIsVUFBVSxzQkFBc0IsVUFBVSxPQUFPLGFBQWEscUJBQXFCO0dBQzVHLElBQUksdUJBQXVCLFdBQVc7SUFDcEMsTUFBTSxlQUFlO0lBQ3JCLE9BQU87R0FDVDtHQUNBLE9BQU87RUFDVDtFQUNBLE9BQU87Q0FDVDtDQUNBLFNBQVMsYUFBYSxPQUFPO0VBQzNCLE1BQU0sU0FBUztFQUNmLE1BQU0sV0FBVyxZQUFZO0VBQzdCLElBQUksSUFBSTtFQUNSLElBQUksRUFBRSxlQUFlLElBQUksRUFBRTtFQUMzQixNQUFNLE9BQU8sT0FBTztFQUNwQixJQUFJLEVBQUUsU0FBUyxlQUFlO0dBQzVCLElBQUksS0FBSyxjQUFjLFFBQVEsS0FBSyxjQUFjLEVBQUUsV0FDbEQ7R0FFRixLQUFLLFlBQVksRUFBRTtFQUNyQixPQUFPLElBQUksRUFBRSxTQUFTLGdCQUFnQixFQUFFLGNBQWMsV0FBVyxHQUMvRCxLQUFLLFVBQVUsRUFBRSxjQUFjLEVBQUUsQ0FBQztFQUVwQyxJQUFJLEVBQUUsU0FBUyxjQUFjO0dBRTNCLGlCQUFpQixRQUFRLEdBQUcsRUFBRSxjQUFjLEVBQUUsQ0FBQyxLQUFLO0dBQ3BEO0VBQ0Y7RUFDQSxNQUFNLEVBQ0osUUFDQSxTQUNBLFlBQ0U7RUFDSixJQUFJLENBQUMsU0FBUztFQUNkLElBQUksQ0FBQyxPQUFPLGlCQUFpQixFQUFFLGdCQUFnQixTQUFTO0VBQ3hELElBQUksT0FBTyxhQUFhLE9BQU8sZ0NBQzdCO0VBRUYsSUFBSSxDQUFDLE9BQU8sYUFBYSxPQUFPLFdBQVcsT0FBTyxNQUNoRCxPQUFPLFFBQVE7RUFFakIsSUFBSSxXQUFXLEVBQUU7RUFDakIsSUFBSSxPQUFPLHNCQUFzQixXQUMvQjtPQUFJLENBQUMsaUJBQWlCLFVBQVUsT0FBTyxTQUFTLEdBQUc7RUFBTTtFQUUzRCxJQUFJLFdBQVcsS0FBSyxFQUFFLFVBQVUsR0FBRztFQUNuQyxJQUFJLFlBQVksS0FBSyxFQUFFLFNBQVMsR0FBRztFQUNuQyxJQUFJLEtBQUssYUFBYSxLQUFLLFNBQVM7RUFHcEMsTUFBTSx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sa0JBQWtCLE9BQU8sbUJBQW1CO0VBRWxGLE1BQU0sWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLElBQUksRUFBRTtFQUN4RCxJQUFJLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxPQUFPLGNBQWMsV0FDN0QsV0FBVyxVQUFVO0VBRXZCLE1BQU0sb0JBQW9CLE9BQU8sb0JBQW9CLE9BQU8sb0JBQW9CLElBQUksT0FBTztFQUkzRixJQUFJLE9BQU8sY0FBYyxDQUhELEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxjQUdMLGVBQWUsbUJBQW1CLFFBQVEsSUFBSSxTQUFTLFFBQVEsaUJBQWlCLElBQUk7R0FDNUgsT0FBTyxhQUFhO0dBQ3BCO0VBQ0Y7RUFDQSxJQUFJLE9BQU8sY0FDVDtPQUFJLENBQUMsU0FBUyxRQUFRLE9BQU8sWUFBWSxHQUFHO0VBQU07RUFFcEQsUUFBUSxXQUFXLEVBQUU7RUFDckIsUUFBUSxXQUFXLEVBQUU7RUFDckIsTUFBTSxTQUFTLFFBQVE7RUFDdkIsTUFBTSxTQUFTLFFBQVE7RUFJdkIsSUFBSSxDQUFDLGlCQUFpQixRQUFRLEdBQUcsTUFBTSxHQUNyQztFQUVGLE9BQU8sT0FBTyxNQUFNO0dBQ2xCLFdBQVc7R0FDWCxTQUFTO0dBQ1QscUJBQXFCO0dBQ3JCLGFBQWE7R0FDYixhQUFhO0VBQ2YsQ0FBQztFQUNELFFBQVEsU0FBUztFQUNqQixRQUFRLFNBQVM7RUFDakIsS0FBSyxpQkFBaUIsSUFBSTtFQUMxQixPQUFPLGFBQWE7RUFDcEIsT0FBTyxXQUFXO0VBQ2xCLE9BQU8saUJBQWlCO0VBQ3hCLElBQUksT0FBTyxZQUFZLEdBQUcsS0FBSyxxQkFBcUI7RUFDcEQsSUFBSSxpQkFBaUI7RUFDckIsSUFBSSxTQUFTLFFBQVEsS0FBSyxpQkFBaUIsR0FBRztHQUM1QyxpQkFBaUI7R0FDakIsSUFBSSxTQUFTLGFBQWEsVUFDeEIsS0FBSyxZQUFZO0VBRXJCO0VBQ0EsSUFBSSxTQUFTLGlCQUFpQixTQUFTLGNBQWMsUUFBUSxLQUFLLGlCQUFpQixLQUFLLFNBQVMsa0JBQWtCLGFBQWEsRUFBRSxnQkFBZ0IsV0FBVyxFQUFFLGdCQUFnQixXQUFXLENBQUMsU0FBUyxRQUFRLEtBQUssaUJBQWlCLElBQ2hPLFNBQVMsY0FBYyxLQUFLO0VBRzlCLEtBQUssT0FBTyxpQ0FEaUIsa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sNkJBQ1QsQ0FBQyxTQUFTLG1CQUM5RSxFQUFFLGVBQWU7RUFFbkIsSUFBSSxPQUFPLFlBQVksT0FBTyxTQUFTLFdBQVcsT0FBTyxZQUFZLE9BQU8sYUFBYSxDQUFDLE9BQU8sU0FDL0YsT0FBTyxTQUFTLGFBQWE7RUFFL0IsT0FBTyxLQUFLLGNBQWMsQ0FBQztDQUM3QjtDQUVBLFNBQVMsWUFBWSxPQUFPO0VBQzFCLE1BQU0sV0FBVyxZQUFZO0VBQzdCLE1BQU0sU0FBUztFQUNmLE1BQU0sT0FBTyxPQUFPO0VBQ3BCLE1BQU0sRUFDSixRQUNBLFNBQ0EsY0FBYyxLQUNkLFlBQ0U7RUFDSixJQUFJLENBQUMsU0FBUztFQUNkLElBQUksQ0FBQyxPQUFPLGlCQUFpQixNQUFNLGdCQUFnQixTQUFTO0VBQzVELElBQUksSUFBSTtFQUNSLElBQUksRUFBRSxlQUFlLElBQUksRUFBRTtFQUMzQixJQUFJLEVBQUUsU0FBUyxlQUFlO0dBQzVCLElBQUksS0FBSyxZQUFZLE1BQU07R0FFM0IsSUFEVyxFQUFFLGNBQ0YsS0FBSyxXQUFXO0VBQzdCO0VBQ0EsSUFBSTtFQUNKLElBQUksRUFBRSxTQUFTLGFBQWE7R0FDMUIsY0FBYyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxNQUFLLE1BQUssRUFBRSxlQUFlLEtBQUssT0FBTztHQUMzRSxJQUFJLENBQUMsZUFBZSxZQUFZLGVBQWUsS0FBSyxTQUFTO0VBQy9ELE9BQ0UsY0FBYztFQUVoQixJQUFJLENBQUMsS0FBSyxXQUFXO0dBQ25CLElBQUksS0FBSyxlQUFlLEtBQUssYUFDM0IsT0FBTyxLQUFLLHFCQUFxQixDQUFDO0dBRXBDO0VBQ0Y7RUFDQSxNQUFNLFFBQVEsWUFBWTtFQUMxQixNQUFNLFFBQVEsWUFBWTtFQUMxQixJQUFJLEVBQUUseUJBQXlCO0dBQzdCLFFBQVEsU0FBUztHQUNqQixRQUFRLFNBQVM7R0FDakI7RUFDRjtFQUNBLElBQUksQ0FBQyxPQUFPLGdCQUFnQjtHQUMxQixJQUFJLENBQUMsRUFBRSxPQUFPLFFBQVEsS0FBSyxpQkFBaUIsR0FDMUMsT0FBTyxhQUFhO0dBRXRCLElBQUksS0FBSyxXQUFXO0lBQ2xCLE9BQU8sT0FBTyxTQUFTO0tBQ3JCLFFBQVE7S0FDUixRQUFRO0tBQ1IsVUFBVTtLQUNWLFVBQVU7SUFDWixDQUFDO0lBQ0QsS0FBSyxpQkFBaUIsSUFBSTtHQUM1QjtHQUNBO0VBQ0Y7RUFDQSxJQUFJLE9BQU8sdUJBQXVCLENBQUMsT0FBTyxNQUN4QztPQUFJLE9BQU8sV0FBVyxHQUVwQjtRQUFJLFFBQVEsUUFBUSxVQUFVLE9BQU8sYUFBYSxPQUFPLGFBQWEsS0FBSyxRQUFRLFFBQVEsVUFBVSxPQUFPLGFBQWEsT0FBTyxhQUFhLEdBQUc7S0FDOUksS0FBSyxZQUFZO0tBQ2pCLEtBQUssVUFBVTtLQUNmO0lBQ0Y7VUFDSyxJQUFJLFFBQVEsUUFBUSxRQUFRLFVBQVUsQ0FBQyxPQUFPLGFBQWEsT0FBTyxhQUFhLEtBQUssUUFBUSxRQUFRLFVBQVUsQ0FBQyxPQUFPLGFBQWEsT0FBTyxhQUFhLElBQzVKO1FBQ0ssSUFBSSxDQUFDLFFBQVEsUUFBUSxRQUFRLFVBQVUsT0FBTyxhQUFhLE9BQU8sYUFBYSxLQUFLLFFBQVEsUUFBUSxVQUFVLE9BQU8sYUFBYSxPQUFPLGFBQWEsSUFDM0o7RUFDRjtFQUVGLElBQUksU0FBUyxpQkFBaUIsU0FBUyxjQUFjLFFBQVEsS0FBSyxpQkFBaUIsS0FBSyxTQUFTLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsU0FDL0ksU0FBUyxjQUFjLEtBQUs7RUFFOUIsSUFBSSxTQUFTLGVBQ1g7T0FBSSxFQUFFLFdBQVcsU0FBUyxpQkFBaUIsRUFBRSxPQUFPLFFBQVEsS0FBSyxpQkFBaUIsR0FBRztJQUNuRixLQUFLLFVBQVU7SUFDZixPQUFPLGFBQWE7SUFDcEI7R0FDRjs7RUFFRixJQUFJLEtBQUsscUJBQ1AsT0FBTyxLQUFLLGFBQWEsQ0FBQztFQUU1QixRQUFRLFlBQVksUUFBUTtFQUM1QixRQUFRLFlBQVksUUFBUTtFQUM1QixRQUFRLFdBQVc7RUFDbkIsUUFBUSxXQUFXO0VBQ25CLE1BQU0sUUFBUSxRQUFRLFdBQVcsUUFBUTtFQUN6QyxNQUFNLFFBQVEsUUFBUSxXQUFXLFFBQVE7RUFDekMsSUFBSSxPQUFPLE9BQU8sYUFBYSxLQUFLLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLE9BQU8sT0FBTyxXQUFXO0VBQzdGLElBQUksT0FBTyxLQUFLLGdCQUFnQixhQUFhO0dBQzNDLElBQUk7R0FDSixJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsYUFBYSxRQUFRLFVBQVUsT0FBTyxXQUFXLEtBQUssUUFBUSxhQUFhLFFBQVEsUUFDdEgsS0FBSyxjQUFjO1FBR25CLElBQUksUUFBUSxRQUFRLFFBQVEsU0FBUyxJQUFJO0lBQ3ZDLGFBQWEsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSztJQUN2RSxLQUFLLGNBQWMsT0FBTyxhQUFhLElBQUksYUFBYSxPQUFPLGFBQWEsS0FBSyxhQUFhLE9BQU87R0FDdkc7RUFFSjtFQUNBLElBQUksS0FBSyxhQUNQLE9BQU8sS0FBSyxxQkFBcUIsQ0FBQztFQUVwQyxJQUFJLE9BQU8sS0FBSyxnQkFBZ0IsYUFDOUI7T0FBSSxRQUFRLGFBQWEsUUFBUSxVQUFVLFFBQVEsYUFBYSxRQUFRLFFBQ3RFLEtBQUssY0FBYztFQUNyQjtFQUVGLElBQUksS0FBSyxlQUFlLEVBQUUsU0FBUyxlQUFlLEtBQUssaUNBQWlDO0dBQ3RGLEtBQUssWUFBWTtHQUNqQjtFQUNGO0VBQ0EsSUFBSSxDQUFDLEtBQUssYUFDUjtFQUVGLE9BQU8sYUFBYTtFQUNwQixJQUFJLENBQUMsT0FBTyxXQUFXLEVBQUUsWUFDdkIsRUFBRSxlQUFlO0VBRW5CLElBQUksT0FBTyw0QkFBNEIsQ0FBQyxPQUFPLFFBQzdDLEVBQUUsZ0JBQWdCO0VBRXBCLElBQUksT0FBTyxPQUFPLGFBQWEsSUFBSSxRQUFRO0VBQzNDLElBQUksY0FBYyxPQUFPLGFBQWEsSUFBSSxRQUFRLFdBQVcsUUFBUSxZQUFZLFFBQVEsV0FBVyxRQUFRO0VBQzVHLElBQUksT0FBTyxnQkFBZ0I7R0FDekIsT0FBTyxLQUFLLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSTtHQUNuQyxjQUFjLEtBQUssSUFBSSxXQUFXLEtBQUssTUFBTSxJQUFJO0VBQ25EO0VBQ0EsUUFBUSxPQUFPO0VBQ2YsUUFBUSxPQUFPO0VBQ2YsSUFBSSxLQUFLO0dBQ1AsT0FBTyxDQUFDO0dBQ1IsY0FBYyxDQUFDO0VBQ2pCO0VBQ0EsTUFBTSx1QkFBdUIsT0FBTztFQUNwQyxPQUFPLGlCQUFpQixPQUFPLElBQUksU0FBUztFQUM1QyxPQUFPLG1CQUFtQixjQUFjLElBQUksU0FBUztFQUNyRCxNQUFNLFNBQVMsT0FBTyxPQUFPLFFBQVEsQ0FBQyxPQUFPO0VBQzdDLE1BQU0sZUFBZSxPQUFPLHFCQUFxQixVQUFVLE9BQU8sa0JBQWtCLE9BQU8scUJBQXFCLFVBQVUsT0FBTztFQUNqSSxJQUFJLENBQUMsS0FBSyxTQUFTO0dBQ2pCLElBQUksVUFBVSxjQUNaLE9BQU8sUUFBUSxFQUNiLFdBQVcsT0FBTyxlQUNwQixDQUFDO0dBRUgsS0FBSyxpQkFBaUIsT0FBTyxhQUFhO0dBQzFDLE9BQU8sY0FBYyxDQUFDO0dBQ3RCLElBQUksT0FBTyxXQUFXO0lBQ3BCLE1BQU0sTUFBTSxJQUFJLE9BQU8sWUFBWSxpQkFBaUI7S0FDbEQsU0FBUztLQUNULFlBQVk7S0FDWixRQUFRLEVBQ04sbUJBQW1CLEtBQ3JCO0lBQ0YsQ0FBQztJQUNELE9BQU8sVUFBVSxjQUFjLEdBQUc7R0FDcEM7R0FDQSxLQUFLLHNCQUFzQjtHQUUzQixJQUFJLE9BQU8sZUFBZSxPQUFPLG1CQUFtQixRQUFRLE9BQU8sbUJBQW1CLE9BQ3BGLE9BQU8sY0FBYyxJQUFJO0dBRTNCLE9BQU8sS0FBSyxtQkFBbUIsQ0FBQztFQUNsQztFQUVBLHFCQUFJLEtBQUssRUFBQyxDQUFDLFFBQVE7RUFDbkIsSUFBSSxPQUFPLG1CQUFtQixTQUFTLEtBQUssV0FBVyxLQUFLLHNCQUFzQix5QkFBeUIsT0FBTyxvQkFBb0IsVUFBVSxnQkFBZ0IsS0FBSyxJQUFJLElBQUksS0FBSyxHQUFHO0dBQ25MLE9BQU8sT0FBTyxTQUFTO0lBQ3JCLFFBQVE7SUFDUixRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0IsS0FBSztHQUN2QixDQUFDO0dBQ0QsS0FBSyxnQkFBZ0I7R0FDckIsS0FBSyxpQkFBaUIsS0FBSztHQUMzQjtFQUNGO0VBQ0EsT0FBTyxLQUFLLGNBQWMsQ0FBQztFQUMzQixLQUFLLFVBQVU7RUFDZixLQUFLLG1CQUFtQixPQUFPLEtBQUs7RUFDcEMsSUFBSSxzQkFBc0I7RUFDMUIsSUFBSSxrQkFBa0IsT0FBTztFQUM3QixJQUFJLE9BQU8scUJBQ1Qsa0JBQWtCO0VBRXBCLElBQUksT0FBTyxHQUFHO0dBQ1osSUFBSSxVQUFVLGdCQUE4QixLQUFLLHNCQUFzQixLQUFLLG9CQUFvQixPQUFPLGlCQUFpQixPQUFPLGFBQWEsSUFBSSxPQUFPLGdCQUFnQixPQUFPLGNBQWMsTUFBTSxPQUFPLGtCQUFrQixVQUFVLE9BQU8sT0FBTyxTQUFTLE9BQU8saUJBQWlCLElBQUksT0FBTyxnQkFBZ0IsT0FBTyxjQUFjLEtBQUssT0FBTyxPQUFPLGVBQWUsS0FBSyxPQUFPLE9BQU8sZUFBZSxPQUFPLGFBQWEsSUFDMVosT0FBTyxRQUFRO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7R0FDcEIsQ0FBQztHQUVILElBQUksS0FBSyxtQkFBbUIsT0FBTyxhQUFhLEdBQUc7SUFDakQsc0JBQXNCO0lBQ3RCLElBQUksT0FBTyxZQUNULEtBQUssbUJBQW1CLE9BQU8sYUFBYSxJQUFJLEtBQUssQ0FBQyxPQUFPLGFBQWEsSUFBSSxLQUFLLGlCQUFpQixTQUFTO0dBRWpIO0VBQ0YsT0FBTyxJQUFJLE9BQU8sR0FBRztHQUNuQixJQUFJLFVBQVUsZ0JBQThCLEtBQUssc0JBQXNCLEtBQUssb0JBQW9CLE9BQU8saUJBQWlCLE9BQU8sYUFBYSxJQUFJLE9BQU8sZ0JBQWdCLE9BQU8sZ0JBQWdCLFNBQVMsS0FBSyxPQUFPLE9BQU8sZ0JBQWdCLE9BQU8sa0JBQWtCLFVBQVUsT0FBTyxPQUFPLFNBQVMsT0FBTyxpQkFBaUIsSUFBSSxPQUFPLGdCQUFnQixPQUFPLGdCQUFnQixTQUFTLEtBQUssT0FBTyxPQUFPLGVBQWUsS0FBSyxPQUFPLGFBQWEsSUFDaGIsT0FBTyxRQUFRO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0IsT0FBTyxPQUFPLFVBQVUsT0FBTyxrQkFBa0IsU0FBUyxPQUFPLHFCQUFxQixJQUFJLEtBQUssS0FBSyxXQUFXLE9BQU8sZUFBZSxFQUFFLENBQUM7R0FDNUosQ0FBQztHQUVILElBQUksS0FBSyxtQkFBbUIsT0FBTyxhQUFhLEdBQUc7SUFDakQsc0JBQXNCO0lBQ3RCLElBQUksT0FBTyxZQUNULEtBQUssbUJBQW1CLE9BQU8sYUFBYSxJQUFJLEtBQUssT0FBTyxhQUFhLElBQUksS0FBSyxpQkFBaUIsU0FBUztHQUVoSDtFQUNGO0VBQ0EsSUFBSSxxQkFDRixFQUFFLDBCQUEwQjtFQUk5QixJQUFJLENBQUMsT0FBTyxrQkFBa0IsT0FBTyxtQkFBbUIsVUFBVSxLQUFLLG1CQUFtQixLQUFLLGdCQUM3RixLQUFLLG1CQUFtQixLQUFLO0VBRS9CLElBQUksQ0FBQyxPQUFPLGtCQUFrQixPQUFPLG1CQUFtQixVQUFVLEtBQUssbUJBQW1CLEtBQUssZ0JBQzdGLEtBQUssbUJBQW1CLEtBQUs7RUFFL0IsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxnQkFDcEMsS0FBSyxtQkFBbUIsS0FBSztFQUkvQixJQUFJLE9BQU8sWUFBWSxHQUNyQixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxhQUFhLEtBQUssb0JBQzVDO09BQUksQ0FBQyxLQUFLLG9CQUFvQjtJQUM1QixLQUFLLHFCQUFxQjtJQUMxQixRQUFRLFNBQVMsUUFBUTtJQUN6QixRQUFRLFNBQVMsUUFBUTtJQUN6QixLQUFLLG1CQUFtQixLQUFLO0lBQzdCLFFBQVEsT0FBTyxPQUFPLGFBQWEsSUFBSSxRQUFRLFdBQVcsUUFBUSxTQUFTLFFBQVEsV0FBVyxRQUFRO0lBQ3RHO0dBQ0Y7U0FDSztHQUNMLEtBQUssbUJBQW1CLEtBQUs7R0FDN0I7RUFDRjtFQUVGLElBQUksQ0FBQyxPQUFPLGdCQUFnQixPQUFPLFNBQVM7RUFHNUMsSUFBSSxPQUFPLFlBQVksT0FBTyxTQUFTLFdBQVcsT0FBTyxZQUFZLE9BQU8scUJBQXFCO0dBQy9GLE9BQU8sa0JBQWtCO0dBQ3pCLE9BQU8sb0JBQW9CO0VBQzdCO0VBQ0EsSUFBSSxPQUFPLFlBQVksT0FBTyxTQUFTLFdBQVcsT0FBTyxVQUN2RCxPQUFPLFNBQVMsWUFBWTtFQUc5QixPQUFPLGVBQWUsS0FBSyxnQkFBZ0I7RUFFM0MsT0FBTyxhQUFhLEtBQUssZ0JBQWdCO0NBQzNDO0NBRUEsU0FBUyxXQUFXLE9BQU87RUFDekIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxPQUFPLE9BQU87RUFDcEIsSUFBSSxJQUFJO0VBQ1IsSUFBSSxFQUFFLGVBQWUsSUFBSSxFQUFFO0VBQzNCLElBQUk7RUFFSixJQUFJLEVBRGlCLEVBQUUsU0FBUyxjQUFjLEVBQUUsU0FBUyxnQkFDdEM7R0FDakIsSUFBSSxLQUFLLFlBQVksTUFBTTtHQUMzQixJQUFJLEVBQUUsY0FBYyxLQUFLLFdBQVc7R0FDcEMsY0FBYztFQUNoQixPQUFPO0dBQ0wsY0FBYyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxNQUFLLE1BQUssRUFBRSxlQUFlLEtBQUssT0FBTztHQUMzRSxJQUFJLENBQUMsZUFBZSxZQUFZLGVBQWUsS0FBSyxTQUFTO0VBQy9EO0VBQ0EsSUFBSTtHQUFDO0dBQWlCO0dBQWM7R0FBZ0I7RUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksR0FFaEY7T0FBSSxFQURZLENBQUMsaUJBQWlCLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sT0FBTyxRQUFRLFlBQVksT0FBTyxRQUFRLGFBRTlHO0VBQ0Y7RUFFRixLQUFLLFlBQVk7RUFDakIsS0FBSyxVQUFVO0VBQ2YsTUFBTSxFQUNKLFFBQ0EsU0FDQSxjQUFjLEtBQ2QsWUFDQSxZQUNFO0VBQ0osSUFBSSxDQUFDLFNBQVM7RUFDZCxJQUFJLENBQUMsT0FBTyxpQkFBaUIsRUFBRSxnQkFBZ0IsU0FBUztFQUN4RCxJQUFJLEtBQUsscUJBQ1AsT0FBTyxLQUFLLFlBQVksQ0FBQztFQUUzQixLQUFLLHNCQUFzQjtFQUMzQixJQUFJLENBQUMsS0FBSyxXQUFXO0dBQ25CLElBQUksS0FBSyxXQUFXLE9BQU8sWUFDekIsT0FBTyxjQUFjLEtBQUs7R0FFNUIsS0FBSyxVQUFVO0dBQ2YsS0FBSyxjQUFjO0dBQ25CO0VBQ0Y7RUFHQSxJQUFJLE9BQU8sY0FBYyxLQUFLLFdBQVcsS0FBSyxjQUFjLE9BQU8sbUJBQW1CLFFBQVEsT0FBTyxtQkFBbUIsT0FDdEgsT0FBTyxjQUFjLEtBQUs7RUFJNUIsTUFBTSxlQUFlLElBQUk7RUFDekIsTUFBTSxXQUFXLGVBQWUsS0FBSztFQUdyQyxJQUFJLE9BQU8sWUFBWTtHQUNyQixNQUFNLFdBQVcsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTtHQUM1RCxPQUFPLG1CQUFtQixZQUFZLFNBQVMsTUFBTSxFQUFFLFFBQVEsUUFBUTtHQUN2RSxPQUFPLEtBQUssYUFBYSxDQUFDO0dBQzFCLElBQUksV0FBVyxPQUFPLGVBQWUsS0FBSyxnQkFBZ0IsS0FDeEQsT0FBTyxLQUFLLHlCQUF5QixDQUFDO0VBRTFDO0VBQ0EsS0FBSyxnQkFBZ0IsSUFBSTtFQUN6QixlQUFlO0dBQ2IsSUFBSSxDQUFDLE9BQU8sV0FBVyxPQUFPLGFBQWE7RUFDN0MsQ0FBQztFQUNELElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxPQUFPLGtCQUFrQixRQUFRLFNBQVMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLEtBQUsscUJBQXFCLEtBQUssa0JBQWtCLENBQUMsS0FBSyxlQUFlO0dBQ25MLEtBQUssWUFBWTtHQUNqQixLQUFLLFVBQVU7R0FDZixLQUFLLGNBQWM7R0FDbkI7RUFDRjtFQUNBLEtBQUssWUFBWTtFQUNqQixLQUFLLFVBQVU7RUFDZixLQUFLLGNBQWM7RUFDbkIsSUFBSTtFQUNKLElBQUksT0FBTyxjQUNULGFBQWEsTUFBTSxPQUFPLFlBQVksQ0FBQyxPQUFPO09BRTlDLGFBQWEsQ0FBQyxLQUFLO0VBRXJCLElBQUksT0FBTyxTQUNUO0VBRUYsSUFBSSxPQUFPLFlBQVksT0FBTyxTQUFTLFNBQVM7R0FDOUMsT0FBTyxTQUFTLFdBQVcsRUFDekIsV0FDRixDQUFDO0dBQ0Q7RUFDRjtFQUdBLE1BQU0sY0FBYyxjQUFjLENBQUMsT0FBTyxhQUFhLEtBQUssQ0FBQyxPQUFPLE9BQU87RUFDM0UsSUFBSSxZQUFZO0VBQ2hCLElBQUksWUFBWSxPQUFPLGdCQUFnQjtFQUN2QyxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksV0FBVyxRQUFRLEtBQUssSUFBSSxPQUFPLHFCQUFxQixJQUFJLE9BQU8sZ0JBQWdCO0dBQ3JHLE1BQU0sWUFBWSxJQUFJLE9BQU8scUJBQXFCLElBQUksSUFBSSxPQUFPO0dBQ2pFLElBQUksT0FBTyxXQUFXLElBQUksZUFBZSxhQUN2QztRQUFJLGVBQWUsY0FBYyxXQUFXLE1BQU0sYUFBYSxXQUFXLElBQUksWUFBWTtLQUN4RixZQUFZO0tBQ1osWUFBWSxXQUFXLElBQUksYUFBYSxXQUFXO0lBQ3JEO1VBQ0ssSUFBSSxlQUFlLGNBQWMsV0FBVyxJQUFJO0lBQ3JELFlBQVk7SUFDWixZQUFZLFdBQVcsV0FBVyxTQUFTLEtBQUssV0FBVyxXQUFXLFNBQVM7R0FDakY7RUFDRjtFQUNBLElBQUksbUJBQW1CO0VBQ3ZCLElBQUksa0JBQWtCO0VBQ3RCLElBQUksT0FBTyxRQUNUO09BQUksT0FBTyxhQUNULGtCQUFrQixPQUFPLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxVQUFVLE9BQU8sUUFBUSxPQUFPLFNBQVMsSUFBSSxPQUFPLE9BQU8sU0FBUztRQUNwSSxJQUFJLE9BQU8sT0FDaEIsbUJBQW1CO0VBQ3JCO0VBR0YsTUFBTSxTQUFTLGFBQWEsV0FBVyxjQUFjO0VBQ3JELE1BQU0sWUFBWSxZQUFZLE9BQU8scUJBQXFCLElBQUksSUFBSSxPQUFPO0VBQ3pFLElBQUksV0FBVyxPQUFPLGNBQWM7R0FFbEMsSUFBSSxDQUFDLE9BQU8sWUFBWTtJQUN0QixPQUFPLFFBQVEsT0FBTyxXQUFXO0lBQ2pDO0dBQ0Y7R0FDQSxJQUFJLE9BQU8sbUJBQW1CLFFBQzVCLElBQUksU0FBUyxPQUFPLGlCQUFpQixPQUFPLFFBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxtQkFBbUIsWUFBWSxTQUFTO1FBQU8sT0FBTyxRQUFRLFNBQVM7R0FFN0osSUFBSSxPQUFPLG1CQUFtQixRQUM1QixJQUFJLFFBQVEsSUFBSSxPQUFPLGlCQUNyQixPQUFPLFFBQVEsWUFBWSxTQUFTO1FBQy9CLElBQUksb0JBQW9CLFFBQVEsUUFBUSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTyxpQkFDM0UsT0FBTyxRQUFRLGVBQWU7UUFFOUIsT0FBTyxRQUFRLFNBQVM7RUFHOUIsT0FBTztHQUVMLElBQUksQ0FBQyxPQUFPLGFBQWE7SUFDdkIsT0FBTyxRQUFRLE9BQU8sV0FBVztJQUNqQztHQUNGO0dBRUEsSUFBSSxFQURzQixPQUFPLGVBQWUsRUFBRSxXQUFXLE9BQU8sV0FBVyxVQUFVLEVBQUUsV0FBVyxPQUFPLFdBQVcsVUFDaEc7SUFDdEIsSUFBSSxPQUFPLG1CQUFtQixRQUM1QixPQUFPLFFBQVEscUJBQXFCLE9BQU8sbUJBQW1CLFlBQVksU0FBUztJQUVyRixJQUFJLE9BQU8sbUJBQW1CLFFBQzVCLE9BQU8sUUFBUSxvQkFBb0IsT0FBTyxrQkFBa0IsU0FBUztHQUV6RSxPQUFPLElBQUksRUFBRSxXQUFXLE9BQU8sV0FBVyxRQUN4QyxPQUFPLFFBQVEsWUFBWSxTQUFTO1FBRXBDLE9BQU8sUUFBUSxTQUFTO0VBRTVCO0NBQ0Y7Q0FFQSxTQUFTLFdBQVc7RUFDbEIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLFFBQ0EsT0FDRTtFQUNKLElBQUksTUFBTSxHQUFHLGdCQUFnQixHQUFHO0VBR2hDLElBQUksT0FBTyxhQUNULE9BQU8sY0FBYztFQUl2QixNQUFNLEVBQ0osZ0JBQ0EsZ0JBQ0EsYUFDRTtFQUNKLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBTyxPQUFPLFFBQVE7RUFHMUQsT0FBTyxpQkFBaUI7RUFDeEIsT0FBTyxpQkFBaUI7RUFDeEIsT0FBTyxXQUFXO0VBQ2xCLE9BQU8sYUFBYTtFQUNwQixPQUFPLG9CQUFvQjtFQUUzQixLQUFLLE9BQU8sa0JBQWtCLFVBQVUsT0FBTyxnQkFBZ0IsTUFBTSxPQUFPLFNBQVMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxPQUFPLE9BQU8sa0JBQWtCLEVBRHZILGFBQWEsT0FBTyxPQUV4QyxPQUFPLFFBQVEsT0FBTyxPQUFPLFNBQVMsR0FBRyxHQUFHLE9BQU8sSUFBSTtPQUV2RCxJQUFJLE9BQU8sT0FBTyxRQUFRLENBQUMsV0FDekIsT0FBTyxZQUFZLE9BQU8sV0FBVyxHQUFHLE9BQU8sSUFBSTtPQUVuRCxPQUFPLFFBQVEsT0FBTyxhQUFhLEdBQUcsT0FBTyxJQUFJO0VBR3JELElBQUksT0FBTyxZQUFZLE9BQU8sU0FBUyxXQUFXLE9BQU8sU0FBUyxRQUFRO0dBQ3hFLGFBQWEsT0FBTyxTQUFTLGFBQWE7R0FDMUMsT0FBTyxTQUFTLGdCQUFnQixpQkFBaUI7SUFDL0MsSUFBSSxPQUFPLFlBQVksT0FBTyxTQUFTLFdBQVcsT0FBTyxTQUFTLFFBQ2hFLE9BQU8sU0FBUyxPQUFPO0dBRTNCLEdBQUcsR0FBRztFQUNSO0VBRUEsT0FBTyxpQkFBaUI7RUFDeEIsT0FBTyxpQkFBaUI7RUFDeEIsSUFBSSxPQUFPLE9BQU8saUJBQWlCLGFBQWEsT0FBTyxVQUNyRCxPQUFPLGNBQWM7Q0FFekI7Q0FFQSxTQUFTLFFBQVEsR0FBRztFQUNsQixNQUFNLFNBQVM7RUFDZixJQUFJLENBQUMsT0FBTyxTQUFTO0VBQ3JCLElBQUksQ0FBQyxPQUFPLFlBQVk7R0FDdEIsSUFBSSxPQUFPLE9BQU8sZUFBZSxFQUFFLGVBQWU7R0FDbEQsSUFBSSxPQUFPLE9BQU8sNEJBQTRCLE9BQU8sV0FBVztJQUM5RCxFQUFFLGdCQUFnQjtJQUNsQixFQUFFLHlCQUF5QjtHQUM3QjtFQUNGO0NBQ0Y7Q0FFQSxTQUFTLFdBQVc7RUFDbEIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLFdBQ0EsY0FDQSxZQUNFO0VBQ0osSUFBSSxDQUFDLFNBQVM7RUFDZCxPQUFPLG9CQUFvQixPQUFPO0VBQ2xDLElBQUksT0FBTyxhQUFhLEdBQ3RCLE9BQU8sWUFBWSxDQUFDLFVBQVU7T0FFOUIsT0FBTyxZQUFZLENBQUMsVUFBVTtFQUdoQyxJQUFJLE9BQU8sY0FBYyxHQUFHLE9BQU8sWUFBWTtFQUMvQyxPQUFPLGtCQUFrQjtFQUN6QixPQUFPLG9CQUFvQjtFQUMzQixJQUFJO0VBQ0osTUFBTSxpQkFBaUIsT0FBTyxhQUFhLElBQUksT0FBTyxhQUFhO0VBQ25FLElBQUksbUJBQW1CLEdBQ3JCLGNBQWM7T0FFZCxlQUFlLE9BQU8sWUFBWSxPQUFPLGFBQWEsS0FBSztFQUU3RCxJQUFJLGdCQUFnQixPQUFPLFVBQ3pCLE9BQU8sZUFBZSxlQUFlLENBQUMsT0FBTyxZQUFZLE9BQU8sU0FBUztFQUUzRSxPQUFPLEtBQUssZ0JBQWdCLE9BQU8sV0FBVyxLQUFLO0NBQ3JEO0NBRUEsU0FBUyxPQUFPLEdBQUc7RUFDakIsTUFBTSxTQUFTO0VBQ2YscUJBQXFCLFFBQVEsRUFBRSxNQUFNO0VBQ3JDLElBQUksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLGtCQUFrQixVQUFVLENBQUMsT0FBTyxPQUFPLFlBQ3BGO0VBRUYsT0FBTyxPQUFPO0NBQ2hCO0NBRUEsU0FBUyx1QkFBdUI7RUFDOUIsTUFBTSxTQUFTO0VBQ2YsSUFBSSxPQUFPLCtCQUErQjtFQUMxQyxPQUFPLGdDQUFnQztFQUN2QyxJQUFJLE9BQU8sT0FBTyxxQkFDaEIsT0FBTyxHQUFHLE1BQU0sY0FBYztDQUVsQztDQUVBLElBQU0sVUFBVSxRQUFRLFdBQVc7RUFDakMsTUFBTSxXQUFXLFlBQVk7RUFDN0IsTUFBTSxFQUNKLFFBQ0EsSUFDQSxXQUNBLFdBQ0U7RUFDSixNQUFNLFVBQVUsQ0FBQyxDQUFDLE9BQU87RUFDekIsTUFBTSxZQUFZLFdBQVcsT0FBTyxxQkFBcUI7RUFDekQsTUFBTSxlQUFlO0VBQ3JCLElBQUksQ0FBQyxNQUFNLE9BQU8sT0FBTyxVQUFVO0VBR25DLFNBQVMsVUFBVSxDQUFDLGNBQWMsT0FBTyxzQkFBc0I7R0FDN0QsU0FBUztHQUNUO0VBQ0YsQ0FBQztFQUNELEdBQUcsVUFBVSxDQUFDLGNBQWMsT0FBTyxjQUFjLEVBQy9DLFNBQVMsTUFDWCxDQUFDO0VBQ0QsR0FBRyxVQUFVLENBQUMsZUFBZSxPQUFPLGNBQWMsRUFDaEQsU0FBUyxNQUNYLENBQUM7RUFDRCxTQUFTLFVBQVUsQ0FBQyxhQUFhLE9BQU8sYUFBYTtHQUNuRCxTQUFTO0dBQ1Q7RUFDRixDQUFDO0VBQ0QsU0FBUyxVQUFVLENBQUMsZUFBZSxPQUFPLGFBQWE7R0FDckQsU0FBUztHQUNUO0VBQ0YsQ0FBQztFQUNELFNBQVMsVUFBVSxDQUFDLFlBQVksT0FBTyxZQUFZLEVBQ2pELFNBQVMsS0FDWCxDQUFDO0VBQ0QsU0FBUyxVQUFVLENBQUMsYUFBYSxPQUFPLFlBQVksRUFDbEQsU0FBUyxLQUNYLENBQUM7RUFDRCxTQUFTLFVBQVUsQ0FBQyxpQkFBaUIsT0FBTyxZQUFZLEVBQ3RELFNBQVMsS0FDWCxDQUFDO0VBQ0QsU0FBUyxVQUFVLENBQUMsZUFBZSxPQUFPLFlBQVksRUFDcEQsU0FBUyxLQUNYLENBQUM7RUFDRCxTQUFTLFVBQVUsQ0FBQyxjQUFjLE9BQU8sWUFBWSxFQUNuRCxTQUFTLEtBQ1gsQ0FBQztFQUNELFNBQVMsVUFBVSxDQUFDLGdCQUFnQixPQUFPLFlBQVksRUFDckQsU0FBUyxLQUNYLENBQUM7RUFDRCxTQUFTLFVBQVUsQ0FBQyxlQUFlLE9BQU8sWUFBWSxFQUNwRCxTQUFTLEtBQ1gsQ0FBQztFQUdELElBQUksT0FBTyxpQkFBaUIsT0FBTywwQkFDakMsR0FBRyxVQUFVLENBQUMsU0FBUyxPQUFPLFNBQVMsSUFBSTtFQUU3QyxJQUFJLE9BQU8sU0FDVCxVQUFVLFVBQVUsQ0FBQyxVQUFVLE9BQU8sUUFBUTtFQUloRCxJQUFJLE9BQU8sc0JBQ1QsT0FBTyxhQUFhLENBQUMsT0FBTyxPQUFPLE9BQU8sVUFBVSw0Q0FBNEMseUJBQXlCLFVBQVUsSUFBSTtPQUV2SSxPQUFPLGFBQWEsQ0FBQyxrQkFBa0IsVUFBVSxJQUFJO0VBSXZELEdBQUcsVUFBVSxDQUFDLFFBQVEsT0FBTyxRQUFRLEVBQ25DLFNBQVMsS0FDWCxDQUFDO0NBQ0g7Q0FDQSxTQUFTLGVBQWU7RUFDdEIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLFdBQ0U7RUFDSixPQUFPLGVBQWUsYUFBYSxLQUFLLE1BQU07RUFDOUMsT0FBTyxjQUFjLFlBQVksS0FBSyxNQUFNO0VBQzVDLE9BQU8sYUFBYSxXQUFXLEtBQUssTUFBTTtFQUMxQyxPQUFPLHVCQUF1QixxQkFBcUIsS0FBSyxNQUFNO0VBQzlELElBQUksT0FBTyxTQUNULE9BQU8sV0FBVyxTQUFTLEtBQUssTUFBTTtFQUV4QyxPQUFPLFVBQVUsUUFBUSxLQUFLLE1BQU07RUFDcEMsT0FBTyxTQUFTLE9BQU8sS0FBSyxNQUFNO0VBQ2xDLE9BQU8sUUFBUSxJQUFJO0NBQ3JCO0NBQ0EsU0FBUyxlQUFlO0VBQ3RCLE1BQU0sU0FBUztFQUNmLE9BQU8sUUFBUSxLQUFLO0NBQ3RCO0NBQ0EsSUFBSSxXQUFXO0VBQ2I7RUFDQTtDQUNGO0NBRUEsSUFBTSxpQkFBaUIsUUFBUSxXQUFXO0VBQ3hDLE9BQU8sT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLEtBQUssT0FBTztDQUMxRDtDQUNBLFNBQVMsZ0JBQWdCO0VBQ3ZCLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixXQUNBLGFBQ0EsUUFDQSxPQUNFO0VBQ0osTUFBTSxjQUFjLE9BQU87RUFDM0IsSUFBSSxDQUFDLGVBQWUsZUFBZSxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHO0VBQzFFLE1BQU0sV0FBVyxZQUFZO0VBRzdCLE1BQU0sa0JBQWtCLE9BQU8sb0JBQW9CLFlBQVksQ0FBQyxPQUFPLGtCQUFrQixPQUFPLGtCQUFrQjtFQUNsSCxNQUFNLHNCQUFzQixDQUFDLFVBQVUsV0FBVyxDQUFDLENBQUMsU0FBUyxPQUFPLGVBQWUsS0FBSyxDQUFDLE9BQU8sa0JBQWtCLE9BQU8sS0FBSyxTQUFTLGNBQWMsT0FBTyxlQUFlO0VBQzNLLE1BQU0sYUFBYSxPQUFPLGNBQWMsYUFBYSxpQkFBaUIsbUJBQW1CO0VBQ3pGLElBQUksQ0FBQyxjQUFjLE9BQU8sc0JBQXNCLFlBQVk7RUFFNUQsTUFBTSxvQkFEdUIsY0FBYyxjQUFjLFlBQVksY0FBYyxXQUNsQyxPQUFPO0VBQ3hELE1BQU0sY0FBYyxjQUFjLFFBQVEsTUFBTTtFQUNoRCxNQUFNLGFBQWEsY0FBYyxRQUFRLGdCQUFnQjtFQUN6RCxNQUFNLGdCQUFnQixPQUFPLE9BQU87RUFDcEMsTUFBTSxlQUFlLGlCQUFpQjtFQUN0QyxNQUFNLGFBQWEsT0FBTztFQUMxQixJQUFJLGVBQWUsQ0FBQyxZQUFZO0dBQzlCLEdBQUcsVUFBVSxPQUFPLEdBQUcsT0FBTyx1QkFBdUIsT0FBTyxHQUFHLE9BQU8sdUJBQXVCLFlBQVk7R0FDekcsT0FBTyxxQkFBcUI7RUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZSxZQUFZO0dBQ3JDLEdBQUcsVUFBVSxJQUFJLEdBQUcsT0FBTyx1QkFBdUIsS0FBSztHQUN2RCxJQUFJLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssU0FBUyxZQUFZLENBQUMsaUJBQWlCLEtBQUssUUFBUSxPQUFPLEtBQUssU0FBUyxVQUMvSCxHQUFHLFVBQVUsSUFBSSxHQUFHLE9BQU8sdUJBQXVCLFlBQVk7R0FFaEUsT0FBTyxxQkFBcUI7RUFDOUI7RUFDQSxJQUFJLGlCQUFpQixDQUFDLGNBQ3BCLE9BQU8sZ0JBQWdCO09BQ2xCLElBQUksQ0FBQyxpQkFBaUIsY0FDM0IsT0FBTyxjQUFjO0VBSXZCO0dBQUM7R0FBYztHQUFjO0VBQVcsQ0FBQyxDQUFDLFNBQVEsU0FBUTtHQUN4RCxJQUFJLE9BQU8saUJBQWlCLFVBQVUsYUFBYTtHQUNuRCxNQUFNLG1CQUFtQixPQUFPLFNBQVMsT0FBTyxLQUFLLENBQUM7R0FDdEQsTUFBTSxrQkFBa0IsaUJBQWlCLFNBQVMsaUJBQWlCLEtBQUssQ0FBQztHQUN6RSxJQUFJLG9CQUFvQixDQUFDLGlCQUN2QixPQUFPLEtBQUssQ0FBQyxRQUFRO0dBRXZCLElBQUksQ0FBQyxvQkFBb0IsaUJBQ3ZCLE9BQU8sS0FBSyxDQUFDLE9BQU87RUFFeEIsQ0FBQztFQUNELE1BQU0sbUJBQW1CLGlCQUFpQixhQUFhLGlCQUFpQixjQUFjLE9BQU87RUFDN0YsTUFBTSxjQUFjLE9BQU8sU0FBUyxpQkFBaUIsa0JBQWtCLE9BQU8saUJBQWlCO0VBQy9GLE1BQU0sVUFBVSxPQUFPO0VBQ3ZCLElBQUksb0JBQW9CLGFBQ3RCLE9BQU8sZ0JBQWdCO0VBRXpCLE9BQU8sT0FBTyxRQUFRLGdCQUFnQjtFQUN0QyxNQUFNLFlBQVksT0FBTyxPQUFPO0VBQ2hDLE1BQU0sVUFBVSxPQUFPLE9BQU87RUFDOUIsT0FBTyxPQUFPLFFBQVE7R0FDcEIsZ0JBQWdCLE9BQU8sT0FBTztHQUM5QixnQkFBZ0IsT0FBTyxPQUFPO0dBQzlCLGdCQUFnQixPQUFPLE9BQU87RUFDaEMsQ0FBQztFQUNELElBQUksY0FBYyxDQUFDLFdBQ2pCLE9BQU8sUUFBUTtPQUNWLElBQUksQ0FBQyxjQUFjLFdBQ3hCLE9BQU8sT0FBTztFQUVoQixPQUFPLG9CQUFvQjtFQUMzQixPQUFPLEtBQUsscUJBQXFCLGdCQUFnQjtFQUNqRCxJQUFJLGFBQ0Y7T0FBSSxhQUFhO0lBQ2YsT0FBTyxZQUFZO0lBQ25CLE9BQU8sV0FBVyxTQUFTO0lBQzNCLE9BQU8sYUFBYTtHQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLFNBQVM7SUFDOUIsT0FBTyxXQUFXLFNBQVM7SUFDM0IsT0FBTyxhQUFhO0dBQ3RCLE9BQU8sSUFBSSxXQUFXLENBQUMsU0FDckIsT0FBTyxZQUFZO0VBQ3JCO0VBRUYsT0FBTyxLQUFLLGNBQWMsZ0JBQWdCO0NBQzVDO0NBRUEsU0FBUyxjQUFjLGFBQWEsTUFBTSxhQUFhO0VBQ3JELElBQUksU0FBUyxLQUFLLEdBQ2hCLE9BQU87RUFFVCxJQUFJLENBQUMsZUFBZSxTQUFTLGVBQWUsQ0FBQyxhQUFhLE9BQU87RUFDakUsSUFBSSxhQUFhO0VBQ2pCLE1BQU0sU0FBUyxVQUFVO0VBQ3pCLE1BQU0sZ0JBQWdCLFNBQVMsV0FBVyxPQUFPLGNBQWMsWUFBWTtFQUMzRSxNQUFNLFNBQVMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLEtBQUksVUFBUztHQUNuRCxJQUFJLE9BQU8sVUFBVSxZQUFZLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRztJQUN6RCxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sQ0FBQyxDQUFDO0lBRTNDLE9BQU87S0FDTCxPQUZZLGdCQUFnQjtLQUc1QjtJQUNGO0dBQ0Y7R0FDQSxPQUFPO0lBQ0wsT0FBTztJQUNQO0dBQ0Y7RUFDRixDQUFDO0VBQ0QsT0FBTyxNQUFNLEdBQUcsTUFBTSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDO0VBQ25FLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxHQUFHO0dBQ3pDLE1BQU0sRUFDSixPQUNBLFVBQ0UsT0FBTztHQUNYLElBQUksU0FBUyxVQUNYO1FBQUksT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLENBQUMsQ0FBQyxTQUMvQyxhQUFhO0dBQ2YsT0FDSyxJQUFJLFNBQVMsWUFBWSxhQUM5QixhQUFhO0VBRWpCO0VBQ0EsT0FBTyxjQUFjO0NBQ3ZCO0NBRUEsSUFBSSxjQUFjO0VBQ2hCO0VBQ0E7Q0FDRjtDQUVBLFNBQVMsZUFBZSxTQUFTLFFBQVE7RUFDdkMsTUFBTSxnQkFBZ0IsQ0FBQztFQUN2QixRQUFRLFNBQVEsU0FBUTtHQUN0QixJQUFJLE9BQU8sU0FBUyxVQUNsQixPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsU0FBUSxlQUFjO0lBQ3RDLElBQUksS0FBSyxhQUNQLGNBQWMsS0FBSyxTQUFTLFVBQVU7R0FFMUMsQ0FBQztRQUNJLElBQUksT0FBTyxTQUFTLFVBQ3pCLGNBQWMsS0FBSyxTQUFTLElBQUk7RUFFcEMsQ0FBQztFQUNELE9BQU87Q0FDVDtDQUNBLFNBQVMsYUFBYTtFQUNwQixNQUFNLFNBQVM7RUFDZixNQUFNLEVBQ0osWUFDQSxRQUNBLEtBQ0EsSUFDQSxXQUNFO0VBRUosTUFBTSxXQUFXLGVBQWU7R0FBQztHQUFlLE9BQU87R0FBVyxFQUNoRSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sU0FBUyxRQUN6RDtHQUFHLEVBQ0QsY0FBYyxPQUFPLFdBQ3ZCO0dBQUcsRUFDRCxPQUFPLElBQ1Q7R0FBRyxFQUNELFFBQVEsT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPLEVBQzVDO0dBQUcsRUFDRCxlQUFlLE9BQU8sUUFBUSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxTQUFTLFNBQzdFO0dBQUcsRUFDRCxXQUFXLE9BQU8sUUFDcEI7R0FBRyxFQUNELE9BQU8sT0FBTyxJQUNoQjtHQUFHLEVBQ0QsWUFBWSxPQUFPLFFBQ3JCO0dBQUcsRUFDRCxZQUFZLE9BQU8sV0FBVyxPQUFPLGVBQ3ZDO0dBQUcsRUFDRCxrQkFBa0IsT0FBTyxvQkFDM0I7RUFBQyxHQUFHLE9BQU8sc0JBQXNCO0VBQ2pDLFdBQVcsS0FBSyxHQUFHLFFBQVE7RUFDM0IsR0FBRyxVQUFVLElBQUksR0FBRyxVQUFVO0VBQzlCLE9BQU8scUJBQXFCO0NBQzlCO0NBRUEsU0FBUyxnQkFBZ0I7RUFDdkIsTUFBTSxTQUFTO0VBQ2YsTUFBTSxFQUNKLElBQ0EsZUFDRTtFQUNKLElBQUksQ0FBQyxNQUFNLE9BQU8sT0FBTyxVQUFVO0VBQ25DLEdBQUcsVUFBVSxPQUFPLEdBQUcsVUFBVTtFQUNqQyxPQUFPLHFCQUFxQjtDQUM5QjtDQUVBLElBQUksVUFBVTtFQUNaO0VBQ0E7Q0FDRjtDQUVBLFNBQVMsZ0JBQWdCO0VBQ3ZCLE1BQU0sU0FBUztFQUNmLE1BQU0sRUFDSixVQUFVLFdBQ1YsV0FDRTtFQUNKLE1BQU0sRUFDSix1QkFDRTtFQUNKLElBQUksb0JBQW9CO0dBQ3RCLE1BQU0saUJBQWlCLE9BQU8sT0FBTyxTQUFTO0dBQzlDLE1BQU0scUJBQXFCLE9BQU8sV0FBVyxrQkFBa0IsT0FBTyxnQkFBZ0Isa0JBQWtCLHFCQUFxQjtHQUM3SCxPQUFPLFdBQVcsT0FBTyxPQUFPO0VBQ2xDLE9BQ0UsT0FBTyxXQUFXLE9BQU8sU0FBUyxXQUFXO0VBRS9DLElBQUksT0FBTyxtQkFBbUIsTUFDNUIsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPO0VBRWxDLElBQUksT0FBTyxtQkFBbUIsTUFDNUIsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPO0VBRWxDLElBQUksYUFBYSxjQUFjLE9BQU8sVUFDcEMsT0FBTyxRQUFRO0VBRWpCLElBQUksY0FBYyxPQUFPLFVBQ3ZCLE9BQU8sS0FBSyxPQUFPLFdBQVcsU0FBUyxRQUFRO0NBRW5EO0NBQ0EsSUFBSSxrQkFBa0IsRUFDcEIsY0FDRjtDQUVBLElBQUksV0FBVztFQUNiLE1BQU07RUFDTixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLE9BQU87RUFDUCxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0VBRW5CLE9BQU87RUFDUCxRQUFRO0VBRVIsZ0NBQWdDO0VBRWhDLFdBQVc7RUFDWCxLQUFLO0VBRUwsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUVwQixZQUFZO0VBRVosZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUVsQixRQUFRO0VBSVIsYUFBYTtFQUNiLGlCQUFpQjtFQUVqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBRXBCLG1CQUFtQjtFQUVuQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBRTFCLGVBQWU7RUFFZixjQUFjO0VBRWQsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUVyQixtQkFBbUI7RUFFbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFFckIsWUFBWTtFQUVaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBRXJCLE1BQU07RUFDTixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUVyQixRQUFRO0VBRVIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBRWQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFFbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUV6Qix3QkFBd0I7RUFFeEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBRXJCLG9CQUFvQjtFQUVwQixjQUFjO0NBQ2hCO0NBRUEsU0FBUyxtQkFBbUIsUUFBUSxrQkFBa0I7RUFDcEQsT0FBTyxTQUFTLGFBQWEsS0FBSztHQUNoQyxJQUFJLFFBQVEsS0FBSyxHQUNmLE1BQU0sQ0FBQztHQUVULE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztHQUN6QyxNQUFNLGVBQWUsSUFBSTtHQUN6QixJQUFJLE9BQU8saUJBQWlCLFlBQVksaUJBQWlCLE1BQU07SUFDN0QsT0FBTyxrQkFBa0IsR0FBRztJQUM1QjtHQUNGO0dBQ0EsSUFBSSxPQUFPLHFCQUFxQixNQUM5QixPQUFPLG1CQUFtQixFQUN4QixTQUFTLEtBQ1g7R0FFRixJQUFJLG9CQUFvQixnQkFBZ0IsT0FBTyxvQkFBb0IsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUNoSyxPQUFPLGdCQUFnQixDQUFDLE9BQU87R0FFakMsSUFBSSxDQUFDLGNBQWMsV0FBVyxDQUFDLENBQUMsUUFBUSxlQUFlLEtBQUssS0FBSyxPQUFPLG9CQUFvQixPQUFPLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLGdCQUFnQixDQUFDLElBQ3RKLE9BQU8sZ0JBQWdCLENBQUMsT0FBTztHQUVqQyxJQUFJLEVBQUUsbUJBQW1CLFVBQVUsYUFBYSxlQUFlO0lBQzdELE9BQU8sa0JBQWtCLEdBQUc7SUFDNUI7R0FDRjtHQUNBLElBQUksT0FBTyxPQUFPLHFCQUFxQixZQUFZLEVBQUUsYUFBYSxPQUFPLG1CQUN2RSxPQUFPLGdCQUFnQixDQUFDLFVBQVU7R0FFcEMsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLE9BQU8sbUJBQW1CLEVBQ3RELFNBQVMsTUFDWDtHQUNBLE9BQU8sa0JBQWtCLEdBQUc7RUFDOUI7Q0FDRjtDQUdBLElBQU0sYUFBYTtFQUNqQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFFBQVE7RUFDUjtFQUNBLGVBQWU7RUFDZjtDQUNGO0NBQ0EsSUFBTSxtQkFBbUIsQ0FBQztDQUMxQixJQUFNLFNBQU4sTUFBTSxPQUFPO0VBQ1gsY0FBYztHQUNaLElBQUk7R0FDSixJQUFJO0dBQ0osS0FBSyxJQUFJLE9BQU8sVUFBVSxRQUFRLE9BQU8sSUFBSSxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLFFBQy9FLEtBQUssUUFBUSxVQUFVO0dBRXpCLElBQUksS0FBSyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUMsZUFBZSxPQUFPLFVBQVUsU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxVQUN2RyxTQUFTLEtBQUs7UUFFZCxDQUFDLElBQUksVUFBVTtHQUVqQixJQUFJLENBQUMsUUFBUSxTQUFTLENBQUM7R0FDdkIsU0FBUyxPQUFPLENBQUMsR0FBRyxNQUFNO0dBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUs7R0FDbEMsTUFBTSxXQUFXLFlBQVk7R0FDN0IsSUFBSSxPQUFPLE1BQU0sT0FBTyxPQUFPLE9BQU8sWUFBWSxTQUFTLGlCQUFpQixPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRztJQUNqRyxNQUFNLFVBQVUsQ0FBQztJQUNqQixTQUFTLGlCQUFpQixPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVEsZ0JBQWU7S0FDMUQsTUFBTSxZQUFZLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFDbkMsSUFBSSxZQUNOLENBQUM7S0FDRCxRQUFRLEtBQUssSUFBSSxPQUFPLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTztHQUNUO0dBR0EsTUFBTSxTQUFTO0dBQ2YsT0FBTyxhQUFhO0dBQ3BCLE9BQU8sVUFBVSxXQUFXO0dBQzVCLE9BQU8sU0FBUyxVQUFVLEVBQ3hCLFdBQVcsT0FBTyxVQUNwQixDQUFDO0dBQ0QsT0FBTyxVQUFVLFdBQVc7R0FDNUIsT0FBTyxrQkFBa0IsQ0FBQztHQUMxQixPQUFPLHFCQUFxQixDQUFDO0dBQzdCLE9BQU8sVUFBVSxDQUFDLEdBQUcsT0FBTyxXQUFXO0dBQ3ZDLElBQUksT0FBTyxXQUFXLE1BQU0sUUFBUSxPQUFPLE9BQU8sR0FDaEQsT0FBTyxRQUFRLEtBQUssR0FBRyxPQUFPLE9BQU87R0FFdkMsTUFBTSxtQkFBbUIsQ0FBQztHQUMxQixPQUFPLFFBQVEsU0FBUSxRQUFPO0lBQzVCLElBQUk7S0FDRjtLQUNBO0tBQ0EsY0FBYyxtQkFBbUIsUUFBUSxnQkFBZ0I7S0FDekQsSUFBSSxPQUFPLEdBQUcsS0FBSyxNQUFNO0tBQ3pCLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTTtLQUM3QixLQUFLLE9BQU8sSUFBSSxLQUFLLE1BQU07S0FDM0IsTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNO0lBQy9CLENBQUM7R0FDSCxDQUFDO0dBTUQsT0FBTyxTQUFTLE9BQU8sQ0FBQyxHQUhILE9BQU8sQ0FBQyxHQUFHLFVBQVUsZ0JBR0osR0FBRyxrQkFBa0IsTUFBTTtHQUNqRSxPQUFPLGlCQUFpQixPQUFPLENBQUMsR0FBRyxPQUFPLE1BQU07R0FDaEQsT0FBTyxlQUFlLE9BQU8sQ0FBQyxHQUFHLE1BQU07R0FHdkMsSUFBSSxPQUFPLFVBQVUsT0FBTyxPQUFPLElBQ2pDLE9BQU8sS0FBSyxPQUFPLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUSxjQUFhO0lBQ2pELE9BQU8sR0FBRyxXQUFXLE9BQU8sT0FBTyxHQUFHLFVBQVU7R0FDbEQsQ0FBQztHQUVILElBQUksT0FBTyxVQUFVLE9BQU8sT0FBTyxPQUNqQyxPQUFPLE1BQU0sT0FBTyxPQUFPLEtBQUs7R0FJbEMsT0FBTyxPQUFPLFFBQVE7SUFDcEIsU0FBUyxPQUFPLE9BQU87SUFDdkI7SUFFQSxZQUFZLENBQUM7SUFFYixRQUFRLENBQUM7SUFDVCxZQUFZLENBQUM7SUFDYixVQUFVLENBQUM7SUFDWCxpQkFBaUIsQ0FBQztJQUVsQixlQUFlO0tBQ2IsT0FBTyxPQUFPLE9BQU8sY0FBYztJQUNyQztJQUNBLGFBQWE7S0FDWCxPQUFPLE9BQU8sT0FBTyxjQUFjO0lBQ3JDO0lBRUEsYUFBYTtJQUNiLFdBQVc7SUFFWCxhQUFhO0lBQ2IsT0FBTztJQUVQLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsd0JBQXdCO0tBR3RCLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxLQUFLLEVBQUUsSUFBSSxLQUFLO0lBQ3JEO0lBRUEsZ0JBQWdCLE9BQU8sT0FBTztJQUM5QixnQkFBZ0IsT0FBTyxPQUFPO0lBRTlCLGlCQUFpQjtLQUNmLFdBQVc7S0FDWCxTQUFTO0tBQ1QscUJBQXFCO0tBQ3JCLGdCQUFnQjtLQUNoQixhQUFhO0tBQ2Isa0JBQWtCO0tBQ2xCLGdCQUFnQjtLQUNoQixvQkFBb0I7S0FFcEIsbUJBQW1CLE9BQU8sT0FBTztLQUVqQyxlQUFlO0tBQ2YsY0FBYztLQUVkLFlBQVksQ0FBQztLQUNiLHFCQUFxQjtLQUNyQixhQUFhO0tBQ2IsV0FBVztLQUNYLFNBQVM7SUFDWDtJQUVBLFlBQVk7SUFFWixnQkFBZ0IsT0FBTyxPQUFPO0lBQzlCLFNBQVM7S0FDUCxRQUFRO0tBQ1IsUUFBUTtLQUNSLFVBQVU7S0FDVixVQUFVO0tBQ1YsTUFBTTtJQUNSO0lBRUEsY0FBYyxDQUFDO0lBQ2YsY0FBYztHQUNoQixDQUFDO0dBQ0QsT0FBTyxLQUFLLFNBQVM7R0FHckIsSUFBSSxPQUFPLE9BQU8sTUFDaEIsT0FBTyxLQUFLO0dBS2QsT0FBTztFQUNUO0VBQ0Esa0JBQWtCLFVBQVU7R0FDMUIsSUFBSSxLQUFLLGFBQWEsR0FDcEIsT0FBTztHQUdULE9BQU87SUFDTCxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtHQUNqQixFQUFFO0VBQ0o7RUFDQSxjQUFjLFNBQVM7R0FDckIsTUFBTSxFQUNKLFVBQ0EsV0FDRTtHQUVKLE1BQU0sa0JBQWtCLGFBRFQsZ0JBQWdCLFVBQVUsSUFBSSxPQUFPLFdBQVcsZUFDckIsQ0FBQyxDQUFDLEVBQUU7R0FDOUMsT0FBTyxhQUFhLE9BQU8sSUFBSTtFQUNqQztFQUNBLG9CQUFvQixPQUFPO0dBQ3pCLE9BQU8sS0FBSyxjQUFjLEtBQUssT0FBTyxNQUFLLFlBQVcsUUFBUSxhQUFhLHlCQUF5QixJQUFJLE1BQU0sS0FBSyxDQUFDO0VBQ3RIO0VBQ0Esc0JBQXNCLE9BQU87R0FDM0IsSUFBSSxLQUFLLFFBQVEsS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEtBQUssT0FBTyxHQUMzRDtRQUFJLEtBQUssT0FBTyxLQUFLLFNBQVMsVUFDNUIsUUFBUSxLQUFLLE1BQU0sUUFBUSxLQUFLLE9BQU8sS0FBSyxJQUFJO1NBQzNDLElBQUksS0FBSyxPQUFPLEtBQUssU0FBUyxPQUNuQyxRQUFRLFFBQVEsS0FBSyxLQUFLLEtBQUssT0FBTyxTQUFTLEtBQUssT0FBTyxLQUFLLElBQUk7R0FDdEU7R0FFRixPQUFPO0VBQ1Q7RUFDQSxlQUFlO0dBQ2IsTUFBTSxTQUFTO0dBQ2YsTUFBTSxFQUNKLFVBQ0EsV0FDRTtHQUNKLE9BQU8sU0FBUyxnQkFBZ0IsVUFBVSxJQUFJLE9BQU8sV0FBVyxlQUFlO0VBQ2pGO0VBQ0EsU0FBUztHQUNQLE1BQU0sU0FBUztHQUNmLElBQUksT0FBTyxTQUFTO0dBQ3BCLE9BQU8sVUFBVTtHQUNqQixJQUFJLE9BQU8sT0FBTyxZQUNoQixPQUFPLGNBQWM7R0FFdkIsT0FBTyxLQUFLLFFBQVE7RUFDdEI7RUFDQSxVQUFVO0dBQ1IsTUFBTSxTQUFTO0dBQ2YsSUFBSSxDQUFDLE9BQU8sU0FBUztHQUNyQixPQUFPLFVBQVU7R0FDakIsSUFBSSxPQUFPLE9BQU8sWUFDaEIsT0FBTyxnQkFBZ0I7R0FFekIsT0FBTyxLQUFLLFNBQVM7RUFDdkI7RUFDQSxZQUFZLFVBQVUsT0FBTztHQUMzQixNQUFNLFNBQVM7R0FDZixXQUFXLEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztHQUM1QyxNQUFNLE1BQU0sT0FBTyxhQUFhO0dBRWhDLE1BQU0sV0FETSxPQUFPLGFBQ0EsSUFBSSxPQUFPLFdBQVc7R0FDekMsT0FBTyxZQUFZLFNBQVMsT0FBTyxVQUFVLGNBQWMsSUFBSSxLQUFLO0dBQ3BFLE9BQU8sa0JBQWtCO0dBQ3pCLE9BQU8sb0JBQW9CO0VBQzdCO0VBQ0EsdUJBQXVCO0dBQ3JCLE1BQU0sU0FBUztHQUNmLElBQUksQ0FBQyxPQUFPLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxJQUFJO0dBQy9DLE1BQU0sTUFBTSxPQUFPLEdBQUcsVUFBVSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQU8sY0FBYTtJQUM3RCxPQUFPLFVBQVUsUUFBUSxRQUFRLE1BQU0sS0FBSyxVQUFVLFFBQVEsT0FBTyxPQUFPLHNCQUFzQixNQUFNO0dBQzFHLENBQUM7R0FDRCxPQUFPLEtBQUsscUJBQXFCLElBQUksS0FBSyxHQUFHLENBQUM7RUFDaEQ7RUFDQSxnQkFBZ0IsU0FBUztHQUN2QixNQUFNLFNBQVM7R0FDZixJQUFJLE9BQU8sV0FBVyxPQUFPO0dBQzdCLE9BQU8sUUFBUSxVQUFVLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBTyxjQUFhO0lBQ3RELE9BQU8sVUFBVSxRQUFRLGNBQWMsTUFBTSxLQUFLLFVBQVUsUUFBUSxPQUFPLE9BQU8sVUFBVSxNQUFNO0dBQ3BHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztFQUNiO0VBQ0Esb0JBQW9CO0dBQ2xCLE1BQU0sU0FBUztHQUNmLElBQUksQ0FBQyxPQUFPLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxJQUFJO0dBQy9DLE1BQU0sVUFBVSxDQUFDO0dBQ2pCLE9BQU8sT0FBTyxTQUFRLFlBQVc7SUFDL0IsTUFBTSxhQUFhLE9BQU8sZ0JBQWdCLE9BQU87SUFDakQsUUFBUSxLQUFLO0tBQ1g7S0FDQTtJQUNGLENBQUM7SUFDRCxPQUFPLEtBQUssZUFBZSxTQUFTLFVBQVU7R0FDaEQsQ0FBQztHQUNELE9BQU8sS0FBSyxpQkFBaUIsT0FBTztFQUN0QztFQUNBLHFCQUFxQixNQUFNLE9BQU87R0FDaEMsSUFBSSxTQUFTLEtBQUssR0FDaEIsT0FBTztHQUVULElBQUksVUFBVSxLQUFLLEdBQ2pCLFFBQVE7R0FHVixNQUFNLEVBQ0osUUFDQSxRQUNBLFlBQ0EsaUJBQ0EsTUFBTSxZQUNOLGdCQUNFO0dBQ0osSUFBSSxNQUFNO0dBQ1YsSUFBSSxPQUFPLE9BQU8sa0JBQWtCLFVBQVUsT0FBTyxPQUFPO0dBQzVELElBQUksT0FBTyxnQkFBZ0I7SUFDekIsSUFBSSxZQUFZLE9BQU8sZUFBZSxLQUFLLEtBQUssT0FBTyxZQUFZLENBQUMsZUFBZSxJQUFJO0lBQ3ZGLElBQUk7SUFDSixLQUFLLElBQUksSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSyxHQUNwRCxJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVc7S0FDM0IsYUFBYSxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUMsZUFBZTtLQUNoRCxPQUFPO0tBQ1AsSUFBSSxZQUFZLFlBQVksWUFBWTtJQUMxQztJQUVGLEtBQUssSUFBSSxJQUFJLGNBQWMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUN6QyxJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVc7S0FDM0IsYUFBYSxPQUFPLEVBQUUsQ0FBQztLQUN2QixPQUFPO0tBQ1AsSUFBSSxZQUFZLFlBQVksWUFBWTtJQUMxQztHQUVKLE9BRUUsSUFBSSxTQUFTLFdBQ1g7U0FBSyxJQUFJLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUssR0FFcEQsSUFEb0IsUUFBUSxXQUFXLEtBQUssZ0JBQWdCLEtBQUssV0FBVyxlQUFlLGFBQWEsV0FBVyxLQUFLLFdBQVcsZUFBZSxZQUVoSixPQUFPO0dBRVgsT0FHQSxLQUFLLElBQUksSUFBSSxjQUFjLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FFekMsSUFEb0IsV0FBVyxlQUFlLFdBQVcsS0FBSyxZQUU1RCxPQUFPO0dBS2YsT0FBTztFQUNUO0VBQ0EsU0FBUztHQUNQLE1BQU0sU0FBUztHQUNmLElBQUksQ0FBQyxVQUFVLE9BQU8sV0FBVztHQUNqQyxNQUFNLEVBQ0osVUFDQSxXQUNFO0dBRUosSUFBSSxPQUFPLGFBQ1QsT0FBTyxjQUFjO0dBRXZCLENBQUMsR0FBRyxPQUFPLEdBQUcsaUJBQWlCLG9CQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFRLFlBQVc7SUFDckUsSUFBSSxRQUFRLFVBQ1YscUJBQXFCLFFBQVEsT0FBTztHQUV4QyxDQUFDO0dBQ0QsT0FBTyxXQUFXO0dBQ2xCLE9BQU8sYUFBYTtHQUNwQixPQUFPLGVBQWU7R0FDdEIsT0FBTyxvQkFBb0I7R0FDM0IsU0FBUyxlQUFlO0lBQ3RCLE1BQU0saUJBQWlCLE9BQU8sZUFBZSxPQUFPLFlBQVksS0FBSyxPQUFPO0lBQzVFLE1BQU0sZUFBZSxLQUFLLElBQUksS0FBSyxJQUFJLGdCQUFnQixPQUFPLGFBQWEsQ0FBQyxHQUFHLE9BQU8sYUFBYSxDQUFDO0lBQ3BHLE9BQU8sYUFBYSxZQUFZO0lBQ2hDLE9BQU8sa0JBQWtCO0lBQ3pCLE9BQU8sb0JBQW9CO0dBQzdCO0dBQ0EsSUFBSTtHQUNKLElBQUksT0FBTyxZQUFZLE9BQU8sU0FBUyxXQUFXLENBQUMsT0FBTyxTQUFTO0lBQ2pFLGFBQWE7SUFDYixJQUFJLE9BQU8sWUFDVCxPQUFPLGlCQUFpQjtHQUU1QixPQUFPO0lBQ0wsS0FBSyxPQUFPLGtCQUFrQixVQUFVLE9BQU8sZ0JBQWdCLE1BQU0sT0FBTyxTQUFTLENBQUMsT0FBTyxnQkFFM0YsYUFBYSxPQUFPLFNBREwsT0FBTyxXQUFXLE9BQU8sUUFBUSxVQUFVLE9BQU8sUUFBUSxTQUFTLE9BQU8sT0FDdkQsQ0FBQyxTQUFTLEdBQUcsR0FBRyxPQUFPLElBQUk7U0FFN0QsYUFBYSxPQUFPLFFBQVEsT0FBTyxhQUFhLEdBQUcsT0FBTyxJQUFJO0lBRWhFLElBQUksQ0FBQyxZQUNILGFBQWE7R0FFakI7R0FDQSxJQUFJLE9BQU8saUJBQWlCLGFBQWEsT0FBTyxVQUM5QyxPQUFPLGNBQWM7R0FFdkIsT0FBTyxLQUFLLFFBQVE7RUFDdEI7RUFDQSxnQkFBZ0IsY0FBYyxZQUFZO0dBQ3hDLElBQUksZUFBZSxLQUFLLEdBQ3RCLGFBQWE7R0FFZixNQUFNLFNBQVM7R0FDZixNQUFNLG1CQUFtQixPQUFPLE9BQU87R0FDdkMsSUFBSSxDQUFDLGNBRUgsZUFBZSxxQkFBcUIsZUFBZSxhQUFhO0dBRWxFLElBQUksaUJBQWlCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixZQUN6RixPQUFPO0dBRVQsT0FBTyxHQUFHLFVBQVUsT0FBTyxHQUFHLE9BQU8sT0FBTyx5QkFBeUIsa0JBQWtCO0dBQ3ZGLE9BQU8sR0FBRyxVQUFVLElBQUksR0FBRyxPQUFPLE9BQU8seUJBQXlCLGNBQWM7R0FDaEYsT0FBTyxxQkFBcUI7R0FDNUIsT0FBTyxPQUFPLFlBQVk7R0FDMUIsT0FBTyxPQUFPLFNBQVEsWUFBVztJQUMvQixJQUFJLGlCQUFpQixZQUNuQixRQUFRLE1BQU0sUUFBUTtTQUV0QixRQUFRLE1BQU0sU0FBUztHQUUzQixDQUFDO0dBQ0QsT0FBTyxLQUFLLGlCQUFpQjtHQUM3QixJQUFJLFlBQVksT0FBTyxPQUFPO0dBQzlCLE9BQU87RUFDVDtFQUNBLHdCQUF3QixXQUFXO0dBQ2pDLE1BQU0sU0FBUztHQUNmLElBQUksT0FBTyxPQUFPLGNBQWMsU0FBUyxDQUFDLE9BQU8sT0FBTyxjQUFjLE9BQU87R0FDN0UsT0FBTyxNQUFNLGNBQWM7R0FDM0IsT0FBTyxlQUFlLE9BQU8sT0FBTyxjQUFjLGdCQUFnQixPQUFPO0dBQ3pFLElBQUksT0FBTyxLQUFLO0lBQ2QsT0FBTyxHQUFHLFVBQVUsSUFBSSxHQUFHLE9BQU8sT0FBTyx1QkFBdUIsSUFBSTtJQUNwRSxPQUFPLEdBQUcsTUFBTTtHQUNsQixPQUFPO0lBQ0wsT0FBTyxHQUFHLFVBQVUsT0FBTyxHQUFHLE9BQU8sT0FBTyx1QkFBdUIsSUFBSTtJQUN2RSxPQUFPLEdBQUcsTUFBTTtHQUNsQjtHQUNBLE9BQU8sT0FBTztFQUNoQjtFQUNBLE1BQU0sU0FBUztHQUNiLE1BQU0sU0FBUztHQUNmLElBQUksT0FBTyxTQUFTLE9BQU87R0FHM0IsSUFBSSxLQUFLLFdBQVcsT0FBTyxPQUFPO0dBQ2xDLElBQUksT0FBTyxPQUFPLFVBQ2hCLEtBQUssU0FBUyxjQUFjLEVBQUU7R0FFaEMsSUFBSSxDQUFDLElBQ0gsT0FBTztHQUVULEdBQUcsU0FBUztHQUNaLElBQUksR0FBRyxjQUFjLEdBQUcsV0FBVyxRQUFRLEdBQUcsV0FBVyxLQUFLLGFBQWEsT0FBTyxPQUFPLHNCQUFzQixZQUFZLEdBQ3pILE9BQU8sWUFBWTtHQUVyQixNQUFNLDJCQUEyQjtJQUMvQixPQUFPLEtBQUssT0FBTyxPQUFPLGdCQUFnQixHQUFFLENBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7R0FDMUU7R0FDQSxNQUFNLG1CQUFtQjtJQUN2QixJQUFJLE1BQU0sR0FBRyxjQUFjLEdBQUcsV0FBVyxlQUd2QyxPQUZZLEdBQUcsV0FBVyxjQUFjLG1CQUFtQixDQUVsRDtJQUVYLE9BQU8sZ0JBQWdCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0dBQ25EO0dBRUEsSUFBSSxZQUFZLFdBQVc7R0FDM0IsSUFBSSxDQUFDLGFBQWEsT0FBTyxPQUFPLGdCQUFnQjtJQUM5QyxZQUFZLGNBQWMsT0FBTyxPQUFPLE9BQU8sWUFBWTtJQUMzRCxHQUFHLE9BQU8sU0FBUztJQUNuQixnQkFBZ0IsSUFBSSxJQUFJLE9BQU8sT0FBTyxZQUFZLENBQUMsQ0FBQyxTQUFRLFlBQVc7S0FDckUsVUFBVSxPQUFPLE9BQU87SUFDMUIsQ0FBQztHQUNIO0dBQ0EsT0FBTyxPQUFPLFFBQVE7SUFDcEI7SUFDQTtJQUNBLFVBQVUsT0FBTyxhQUFhLENBQUMsR0FBRyxXQUFXLEtBQUssYUFBYSxHQUFHLFdBQVcsT0FBTztJQUNwRixRQUFRLE9BQU8sWUFBWSxHQUFHLFdBQVcsT0FBTztJQUNoRCxTQUFTO0lBRVQsS0FBSyxHQUFHLElBQUksWUFBWSxNQUFNLFNBQVMsYUFBYSxJQUFJLFdBQVcsTUFBTTtJQUN6RSxjQUFjLE9BQU8sT0FBTyxjQUFjLGlCQUFpQixHQUFHLElBQUksWUFBWSxNQUFNLFNBQVMsYUFBYSxJQUFJLFdBQVcsTUFBTTtJQUMvSCxVQUFVLGFBQWEsV0FBVyxTQUFTLE1BQU07R0FDbkQsQ0FBQztHQUNELE9BQU87RUFDVDtFQUNBLEtBQUssSUFBSTtHQUNQLE1BQU0sU0FBUztHQUNmLElBQUksT0FBTyxhQUFhLE9BQU87R0FFL0IsSUFEZ0IsT0FBTyxNQUFNLEVBQ25CLE1BQU0sT0FBTyxPQUFPO0dBQzlCLE9BQU8sS0FBSyxZQUFZO0dBR3hCLElBQUksT0FBTyxPQUFPLGFBQ2hCLE9BQU8sY0FBYztHQUl2QixPQUFPLFdBQVc7R0FHbEIsT0FBTyxXQUFXO0dBR2xCLE9BQU8sYUFBYTtHQUNwQixJQUFJLE9BQU8sT0FBTyxlQUNoQixPQUFPLGNBQWM7R0FJdkIsSUFBSSxPQUFPLE9BQU8sY0FBYyxPQUFPLFNBQ3JDLE9BQU8sY0FBYztHQUl2QixJQUFJLE9BQU8sT0FBTyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sUUFBUSxTQUNoRSxPQUFPLFFBQVEsT0FBTyxPQUFPLGVBQWUsT0FBTyxRQUFRLGNBQWMsR0FBRyxPQUFPLE9BQU8sb0JBQW9CLE9BQU8sSUFBSTtRQUV6SCxPQUFPLFFBQVEsT0FBTyxPQUFPLGNBQWMsR0FBRyxPQUFPLE9BQU8sb0JBQW9CLE9BQU8sSUFBSTtHQUk3RixJQUFJLE9BQU8sT0FBTyxNQUNoQixPQUFPLFdBQVcsUUFBVyxJQUFJO0dBSW5DLE9BQU8sYUFBYTtHQUNwQixNQUFNLGVBQWUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxpQkFBaUIsb0JBQWtCLENBQUM7R0FDdkUsSUFBSSxPQUFPLFdBQ1QsYUFBYSxLQUFLLEdBQUcsT0FBTyxPQUFPLGlCQUFpQixvQkFBa0IsQ0FBQztHQUV6RSxhQUFhLFNBQVEsWUFBVztJQUM5QixJQUFJLFFBQVEsVUFDVixxQkFBcUIsUUFBUSxPQUFPO1NBRXBDLFFBQVEsaUJBQWlCLFNBQVEsTUFBSztLQUNwQyxxQkFBcUIsUUFBUSxFQUFFLE1BQU07SUFDdkMsQ0FBQztHQUVMLENBQUM7R0FDRCxRQUFRLE1BQU07R0FHZCxPQUFPLGNBQWM7R0FDckIsUUFBUSxNQUFNO0dBR2QsT0FBTyxLQUFLLE1BQU07R0FDbEIsT0FBTyxLQUFLLFdBQVc7R0FDdkIsT0FBTztFQUNUO0VBQ0EsUUFBUSxnQkFBZ0IsYUFBYTtHQUNuQyxJQUFJLG1CQUFtQixLQUFLLEdBQzFCLGlCQUFpQjtHQUVuQixJQUFJLGdCQUFnQixLQUFLLEdBQ3ZCLGNBQWM7R0FFaEIsTUFBTSxTQUFTO0dBQ2YsTUFBTSxFQUNKLFFBQ0EsSUFDQSxXQUNBLFdBQ0U7R0FDSixJQUFJLE9BQU8sT0FBTyxXQUFXLGVBQWUsT0FBTyxXQUNqRCxPQUFPO0dBRVQsT0FBTyxLQUFLLGVBQWU7R0FHM0IsT0FBTyxjQUFjO0dBR3JCLE9BQU8sYUFBYTtHQUdwQixJQUFJLE9BQU8sTUFDVCxPQUFPLFlBQVk7R0FJckIsSUFBSSxhQUFhO0lBQ2YsT0FBTyxjQUFjO0lBQ3JCLElBQUksTUFBTSxPQUFPLE9BQU8sVUFDdEIsR0FBRyxnQkFBZ0IsT0FBTztJQUU1QixJQUFJLFdBQ0YsVUFBVSxnQkFBZ0IsT0FBTztJQUVuQyxJQUFJLFVBQVUsT0FBTyxRQUNuQixPQUFPLFNBQVEsWUFBVztLQUN4QixRQUFRLFVBQVUsT0FBTyxPQUFPLG1CQUFtQixPQUFPLHdCQUF3QixPQUFPLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGNBQWM7S0FDdkosUUFBUSxnQkFBZ0IsT0FBTztLQUMvQixRQUFRLGdCQUFnQix5QkFBeUI7SUFDbkQsQ0FBQztHQUVMO0dBQ0EsT0FBTyxLQUFLLFNBQVM7R0FHckIsT0FBTyxLQUFLLE9BQU8sZUFBZSxDQUFDLENBQUMsU0FBUSxjQUFhO0lBQ3ZELE9BQU8sSUFBSSxTQUFTO0dBQ3RCLENBQUM7R0FDRCxJQUFJLG1CQUFtQixPQUFPO0lBQzVCLElBQUksT0FBTyxNQUFNLE9BQU8sT0FBTyxPQUFPLFVBQ3BDLE9BQU8sR0FBRyxTQUFTO0lBRXJCLFlBQVksTUFBTTtHQUNwQjtHQUNBLE9BQU8sWUFBWTtHQUNuQixPQUFPO0VBQ1Q7RUFDQSxPQUFPLGVBQWUsYUFBYTtHQUNqQyxPQUFPLGtCQUFrQixXQUFXO0VBQ3RDO0VBQ0EsV0FBVyxtQkFBbUI7R0FDNUIsT0FBTztFQUNUO0VBQ0EsV0FBVyxXQUFXO0dBQ3BCLE9BQU87RUFDVDtFQUNBLE9BQU8sY0FBYyxLQUFLO0dBQ3hCLElBQUksQ0FBQyxPQUFPLFVBQVUsYUFBYSxPQUFPLFVBQVUsY0FBYyxDQUFDO0dBQ25FLE1BQU0sVUFBVSxPQUFPLFVBQVU7R0FDakMsSUFBSSxPQUFPLFFBQVEsY0FBYyxRQUFRLFFBQVEsR0FBRyxJQUFJLEdBQ3RELFFBQVEsS0FBSyxHQUFHO0VBRXBCO0VBQ0EsT0FBTyxJQUFJLFFBQVE7R0FDakIsSUFBSSxNQUFNLFFBQVEsTUFBTSxHQUFHO0lBQ3pCLE9BQU8sU0FBUSxNQUFLLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDM0MsT0FBTztHQUNUO0dBQ0EsT0FBTyxjQUFjLE1BQU07R0FDM0IsT0FBTztFQUNUO0NBQ0Y7Q0FDQSxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsU0FBUSxtQkFBa0I7RUFDaEQsT0FBTyxLQUFLLFdBQVcsZUFBZSxDQUFDLENBQUMsU0FBUSxnQkFBZTtHQUM3RCxPQUFPLFVBQVUsZUFBZSxXQUFXLGVBQWUsQ0FBQztFQUM3RCxDQUFDO0NBQ0gsQ0FBQztDQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Q0N2Mkg3QixJQUFNLE1BQU07Q0FFWixJQUFJLFFBQVE7RUFBQztFQUFHO0VBQUc7RUFBRztDQUFDO0NBRXZCLElBQUksT0FBTyxhQUFhLEtBRXRCLFFBQVE7RUFBQztFQUFHO0VBQUc7RUFBRztDQUFDO0NBRXJCLElBQU0sUUFBUSxNQUFNO0NBT3BCLElBQU0sU0FBUyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSztDQUUzRCxJQUFNLGNBQ0o7Q0FLRixJQUFNLGFBQ0o7Q0FJRixJQUFNLGVBQ0o7Q0FLRixJQUFNLFFBQVEsS0FBYSxLQUFhLFlBQVksVUFBVTtFQUM1RCxNQUFNLEtBQUssU0FBUyxjQUFjLE1BQU07RUFDeEMsR0FBRyxZQUFZO0VBQ2YsR0FBRyxhQUFhLGVBQWUsTUFBTTtFQUNyQyxHQUFHLFlBQVksWUFBWSxVQUFVLEdBQUcsSUFBSTtFQUM1QyxPQUFPO0NBQ1Q7Q0FRQSxJQUFNLCtCQUFlLElBQUksUUFBMEI7Q0FFbkQsSUFBTSxjQUFjLE9BQXlCO0VBQzNDLGFBQWEsSUFBSSxFQUFFO0VBQ25CLEdBQUcsS0FBSyxDQUFDLENBQ04sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNmLGNBQWMsYUFBYSxPQUFPLEVBQUUsQ0FBQztDQUMxQztDQUdBLElBQU0sYUFBYSxPQUF5QjtFQUMxQyxJQUFJLEdBQUcsUUFBUTtFQUNmLGFBQWEsSUFBSSxFQUFFO0VBQ25CLEdBQUcsTUFBTTtDQUNYO0NBR0EsSUFBTSxTQUFTLFVBQXVCO0VBQ3BDLE1BQU0sS0FBSyxNQUFNLGNBQWMsT0FBTztFQUN0QyxVQUFVLEVBQUU7RUFDWixHQUFHLGNBQWM7RUFDakIsR0FBRyxnQkFBZ0IsVUFBVTtFQUM3QixNQUFNLFVBQVUsT0FBTyxZQUFZO0NBQ3JDO0NBRUEsSUFBTSxXQUFXLFNBQ2YsTUFBTSxLQUFLLEtBQUssaUJBQThCLHNCQUFzQixDQUFDO0NBTXZFLElBQWEsY0FBYztFQUN6QixNQUFNLFNBQVMsSUFBWSxhQUFxQjtHQUM5QyxNQUFNLFFBQ0oscUJBQUMsT0FBRDtJQUFLLE9BQU07SUFBd0IsY0FBWSxPQUFPLEVBQUU7SUFBRyxpQkFBZSxPQUFPLFFBQVE7Y0FBekY7S0FFRSxxQkFBQyxXQUFEO01BQVMsT0FBTTtnQkFBZixDQUNFLG9CQUFDLFVBQUQ7T0FBUSxRQUFRLEdBQUcsSUFBSSxXQUFXLEdBQUc7T0FBUSxNQUFLO01BQWMsQ0FBQSxHQUNoRSxvQkFBQyxPQUFEO09BQUssS0FBSyxHQUFHLElBQUksV0FBVyxHQUFHO09BQU8sS0FBSTtPQUFHLFNBQVE7TUFBUSxDQUFBLENBQ3REOztLQUNULG9CQUFDLFNBQUQ7TUFDRSxTQUFRO01BQ1IsYUFBQTtNQUdBLGNBQWMsNkNBQ1osT0FBTyxhQUFhLE1BQU0sa0JBQWtCO01BRTlDLHlCQUFBO2dCQUVBLG9CQUFDLFVBQUQ7T0FBUSxLQUFLLEdBQUcsSUFBSSxTQUFTLEdBQUc7T0FBTyxNQUFLO01BQWEsQ0FBQTtLQUNwRCxDQUFBO0tBQ1Asb0JBQUMsVUFBRDtNQUFRLE9BQU07TUFBaUIsTUFBSztNQUFTLGNBQVksYUFBYTtLQUFhLENBQUE7S0FDbkYsb0JBQUMsVUFBRDtNQUNFLE9BQU07TUFDTixNQUFLO01BQ0wsY0FBWSxjQUFjLFNBQVM7S0FDcEMsQ0FBQTtJQUNFOztHQUdQLE1BQU0sY0FBYyxpQkFBaUIsQ0FBQyxDQUFFLE9BQU8sS0FBSyxvQkFBVSx1QkFBdUIsSUFBSSxDQUFDO0dBQzFGLE1BQU0sY0FBYyxtQkFBbUIsQ0FBQyxDQUFFLFlBQVk7R0FLdEQsTUFBTSxLQUFLLE1BQU0sY0FBYyxPQUFPO0dBQ3RDLEdBQUcsaUJBQWlCLGNBQWM7SUFDaEMsSUFBSSxhQUFhLElBQUksRUFBRSxHQUFHO0lBQzFCLFNBQVMsa0JBQWtCLGdCQUFnQixZQUFZLFNBQVMsZUFBZTtHQUNqRixDQUFDO0dBQ0QsR0FBRyxpQkFBaUIsZUFBZTtJQUNqQyxJQUFJLGFBQWEsSUFBSSxFQUFFLEdBQUc7S0FDeEIsYUFBYSxPQUFPLEVBQUU7S0FDdEI7SUFDRjtJQUVBLElBQUksR0FBRyxPQUFPO0lBQ2QsU0FBUyxtQkFBbUIsaUJBQWlCLFlBQVksU0FBUyxlQUFlO0dBQ25GLENBQUM7R0FFRCxPQUFPO0VBQ1Q7RUFFQSxNQUFNLE9BQVEsb0JBQUMsT0FBRCxFQUFLLE9BQU0scUNBQXNDLENBQUE7RUFFL0QsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSztHQUMvQixNQUFNLEtBQUssSUFBSTtHQUNmLEtBQUssT0FBTyxNQUFNLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQztFQUN0QztFQUVBLE1BQU0sUUFDSixvQkFBQyxPQUFEO0dBQUssT0FBTTtHQUE4QixNQUFLO0dBQVEsY0FBVzthQUM5RDtFQUNFLENBQUE7RUFHUCxNQUFNLE9BQVEsb0JBQUMsT0FBRCxFQUFLLE9BQU0sc0JBQXVCLENBQUE7RUFDaEQsTUFBTSxPQUNKLG9CQUFDLFVBQUQ7R0FBUSxPQUFNO0dBQWtELE1BQUs7R0FBUyxjQUFXO0VBQWlCLENBQUE7RUFFNUcsTUFBTSxPQUNKLG9CQUFDLFVBQUQ7R0FBUSxPQUFNO0dBQWtELE1BQUs7R0FBUyxjQUFXO0VBQWEsQ0FBQTtFQUV4RyxLQUFLLE9BQU8sS0FBSyxxQkFBVyw2QkFBNkIsSUFBSSxDQUFDO0VBQzlELEtBQUssT0FBTyxLQUFLLHFCQUFXLDZCQUE2QixJQUFJLENBQUM7RUFVOUQsTUFBTSxPQUNKLHFCQUFDLFdBQUQ7R0FBUyxPQUFNO2FBQWY7SUFDRSxxQkFBQyxPQUFEO0tBQUssT0FBTTtlQUFYLENBQ0Usb0JBQUMsTUFBRDtNQUFJLE9BQU07Z0JBQXVCO0tBQThELENBQUEsR0FDL0Ysb0JBQUMsS0FBRDtNQUFHLE9BQU07Z0JBQTBCO0tBRWhDLENBQUEsQ0FDQTs7SUFDSjtJQUNBLGdCQWhCSCxLQUFDLE9BQUQ7S0FBSyxPQUFNO2VBQVg7TUFDRztNQUNBO01BQ0E7S0FDRTtLQVlGO0dBQ007O0VBR1gsTUFBTSxnQkFBZ0IsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUs7RUFHakQsTUFBTSx1QkFDSixLQUFLLGNBQTJCLCtCQUErQixDQUFDLEVBQUUsUUFBUSxZQUFZO0VBS3hGLE9BQU8seUNBQXlDLENBQUMsQ0FBQyxXQUFXO0dBQzNELGlCQUFpQixrQkFBa0Isd0JBQXdCLGlCQUFpQixTQUFTLEtBQU0sRUFBRztHQUU5RixNQUFNLFNBQVMsSUFBSSxPQUFPLE9BQU87SUFDL0IsTUFBTTtJQUNOLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0dBQ2YsQ0FBQztHQU9ELE1BQU0sZ0JBQ0osS0FDRyxpQkFBOEIsaURBQWlELENBQUMsQ0FDaEYsU0FBUyxVQUFVO0lBQ2xCLE1BQU0sS0FBSyxNQUFNLGNBQWMsT0FBTztJQUN0QyxNQUFNLEtBQUssR0FBRztJQUNkLE1BQU0sWUFBWSxHQUFHO0lBQ3JCLE1BQU0sT0FBTyxLQUFLLGNBQ2hCLHlCQUF5QixNQUFNLFFBQVEsTUFBTSx3QkFDL0M7SUFFQSxJQUFJLE1BQU07S0FDUixNQUFNLE9BQU8sS0FBSyxjQUFjLE9BQU87S0FDdkMsS0FBSyxVQUFVLElBQUksWUFBWTtLQUMvQixJQUFJLE9BQU8sYUFBYSxLQUFLLEtBQUssYUFBYSxZQUFZLFVBQVU7S0FDckUsS0FBSyxjQUFjO0tBQ25CLElBQUksQ0FBQyxXQUFXLFdBQVcsSUFBSTtJQUNqQztJQUVBLE1BQU0sS0FBSztHQUNiLENBQUM7R0FHTCxNQUFNLFNBQVMsR0FBRyxNQUFNO0lBQ3RCLE1BQU0sTUFDSixvQkFBQyxVQUFEO0tBQVEsT0FBTTtLQUFxQixNQUFLO0tBQVMsY0FBWSxjQUFjLElBQUk7SUFBTSxDQUFBO0lBRXZGLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxJQUFJLFdBQVc7SUFDMUMsSUFBSSxpQkFBaUIsZUFBZTtLQUNsQyxPQUFPLFlBQVksQ0FBQztLQUNwQiw0QkFDRSxTQUNFLHdCQUNBLGdCQUFnQixlQUFlLEtBQy9CLFNBQ0EsZUFDRixDQUNGO0lBQ0YsQ0FBQztJQUNELEtBQUssT0FBTyxHQUFHO0dBQ2pCLENBQUM7R0FFRCxPQUFPLEdBQUcsY0FBYyxPQUFPO0dBQy9CLE9BQU8sR0FBRyw0QkFBNEIsT0FBTztHQUU3QyxPQUFPLEdBQUcscUJBQXFCO0lBQzdCLE1BQU0sS0FBSyxPQUFPLFlBQVk7SUFDOUIsS0FDRyxpQkFBaUIscUJBQXFCLENBQUMsQ0FDdkMsU0FBUyxJQUFJLE1BQU0sR0FBRyxVQUFVLE9BQU8sYUFBYSxNQUFNLEVBQUUsQ0FBQztJQUVoRSxRQUFRO0dBQ1YsQ0FBQztHQUVELEtBQUssaUJBQWlCLGVBQWU7SUFDbkMsT0FBTyxVQUFVO0lBQ2pCLDRCQUNFLFNBQVMsdUJBQXVCLGdCQUFnQixlQUFlLEtBQUssU0FBUyxlQUFlLENBQzlGO0dBQ0YsQ0FBQztHQUNELEtBQUssaUJBQWlCLGVBQWU7SUFDbkMsT0FBTyxVQUFVO0lBQ2pCLDRCQUNFLFNBQVMsdUJBQXVCLGlCQUFpQixlQUFlLEtBQUssU0FBUyxlQUFlLENBQy9GO0dBQ0YsQ0FBQztHQU9ELElBQUksT0FBc0I7R0FDMUIsT0FBTyxHQUFHLG9CQUFxQixPQUFPLE9BQU8sU0FBVTtHQUN2RCxPQUFPLEdBQUcsa0JBQWtCO0lBQzFCLElBQUksU0FBUyxNQUFNO0lBQ25CLE1BQU0sTUFBTTtJQUNaLE9BQU87SUFFUCw0QkFBNEI7S0FDMUIsTUFBTSxNQUFNLE9BQU87S0FDbkIsSUFBSSxRQUFRLEtBQUs7S0FFakIsU0FBUyxtQkFBbUIsV0FBVyxlQUFlLEtBQUssU0FBUyxlQUFlO0tBQ25GLElBQUksT0FBTyxhQUFhLEtBQUs7S0FFN0IsTUFBTSxRQUFRLEtBQUssU0FBUztLQUU1QixJQUFJLFVBQVcsTUFBTSxPQUFPLFFBQVMsU0FBUztLQUM5QyxJQUFJLFFBQVEsUUFBUSxHQUFHLFNBQVM7S0FDaEMsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUc7S0FFMUIsT0FBTyxjQUFlLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxRQUFTLFNBQVMsS0FBSztJQUN6RSxDQUFDO0dBQ0gsQ0FBQztFQUNILENBQUM7RUFFRCxLQUFLLGlCQUFpQixVQUFVLE1BQU07R0FDcEMsTUFBTSxTQUFTLEVBQUU7R0FFakIsTUFBTSxTQUFTLE9BQU8sUUFBUSxtQkFBbUI7R0FDakQsSUFBSSxRQUFRO0lBQ1YsTUFBTSxRQUFRLE9BQU8sUUFBcUIsV0FBVztJQUNyRCxNQUFNLEtBQUssTUFBTSxjQUFjLE9BQU87SUFDdEMsU0FBUyx3QkFBd0IsY0FBYyxTQUFTLGVBQWU7SUFFdkUsYUFBYSxPQUFPLE1BQU0sUUFBUSxLQUFLLEdBQUcsR0FBRyxXQUFXO0lBQ3hEO0dBQ0Y7R0FHQSxNQUFNLFFBQVEsT0FBTyxRQUFRLE9BQU87R0FDcEMsSUFBSSxPQUFPO0lBQ1QsSUFBSSxNQUFNLFFBQVE7SUFDbEIsTUFBTSxRQUFRLE1BQU0sUUFBcUIsV0FBVztJQUlwRCxTQUNFLG1CQUNBLGlCQUFpQixNQUFNLFFBQVEsWUFDL0IsU0FDQSxlQUNGO0lBQ0EsTUFBTSxLQUFLO0lBQ1g7R0FDRjtHQUdBLElBQUksQ0FBQyxPQUFPLFFBQVEsbUJBQW1CLEtBQUssQ0FBQyxPQUFPLFFBQVEsaUJBQWlCLEdBQUc7R0FFaEYsTUFBTSxRQUFRLE9BQU8sUUFBcUIsV0FBVztHQUNyRCxNQUFNLEtBQUssTUFBTSxjQUFjLE9BQU87R0FDdEMsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLFVBQVUsVUFBVSxTQUFTLE1BQU0sS0FBSyxDQUFDO0dBQ2hFLElBQUksR0FBRyxRQUFRLEdBQUcsY0FBYztHQUNoQyxTQUFTLGtCQUFrQixnQkFBZ0IsTUFBTSxRQUFRLFlBQVksU0FBUyxlQUFlO0dBQzdGLE1BQU0sVUFBVSxJQUFJLFlBQVk7R0FFaEMsSUFBSSxPQUFPLGFBQWEsS0FBSyxHQUFHLGFBQWEsWUFBWSxVQUFVO0dBQ25FLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFHRCxLQUFLLGlCQUNILFVBQ0MsTUFBTTtHQUNMLE1BQU0sS0FBSyxFQUFFO0dBQ2IsSUFBSSxHQUFHLFlBQVksU0FBUyxNQUFNLEdBQUcsUUFBcUIsV0FBVyxDQUFFO0VBQ3pFLEdBQ0EsSUFDRjtFQUdBLElBQUksc0JBQXNCLFlBQVksUUFBUSxTQUFTLE1BQU0sRUFBRSxrQkFBa0IsUUFBUSxDQUFDLEdBQUcsRUFDM0YsV0FBVyxFQUNiLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSztFQUdoQixPQUFPLGFBQWEsQ0FBQyxDQUFDLE1BQU0sV0FBVztHQUNyQyxJQUFJLE9BQU8sT0FBTyxVQUFVLFNBQVMsUUFBUTtHQUM3QyxJQUFJLHVCQUF1QjtJQUN6QixNQUFNLE1BQU0sT0FBTyxVQUFVLFNBQVMsUUFBUTtJQUM5QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLFFBQVE7SUFDMUIsT0FBTztHQUNULENBQUMsQ0FBQyxDQUFDLFFBQVEsUUFBUTtJQUFFLFlBQVk7SUFBTSxpQkFBaUIsQ0FBQyxPQUFPO0dBQUUsQ0FBQztFQUNyRSxDQUFDO0VBRUQsT0FBTztDQUNUO0NBUUEsSUFBSSxXQUlPO0NBRVgsSUFBTSxzQkFBc0I7RUFDMUIsSUFBSSxLQUFLLE1BQU07RUFFZixNQUFNLEtBQ0osb0JBQUMsU0FBRDtHQUNFLFVBQUE7R0FDQSxhQUFBO0dBQ0EsU0FBUTtHQUNSLGNBQWE7R0FDYix5QkFBQTtFQUNELENBQUE7RUFHSCxNQUFNLFVBQVcsb0JBQUMsT0FBRDtHQUFLLE9BQU07R0FBd0IsZUFBWTtFQUFRLENBQUE7RUFHeEUsR0FBRyxpQkFBaUIsbUJBQW1CLFFBQVEsVUFBVSxJQUFJLFdBQVcsQ0FBQztFQUN6RSxHQUFHLGlCQUFpQixpQkFBaUIsUUFBUSxVQUFVLElBQUksV0FBVyxDQUFDO0VBQ3ZFLEdBQUcsaUJBQWlCLGlCQUFpQixRQUFRLFVBQVUsT0FBTyxXQUFXLENBQUM7RUFDMUUsR0FBRyxpQkFBaUIsb0JBQW9CLFFBQVEsVUFBVSxPQUFPLFdBQVcsQ0FBQztFQUU3RSxNQUFNLGNBQWM7R0FDbEIsVUFBVSxFQUFFO0dBQ1osR0FBRyxjQUFjO0dBQ2pCLFNBQVMsS0FBSyxVQUFVLE9BQU8saUJBQWlCO0dBQ2hELFNBQVMsb0JBQW9CLFdBQVcsS0FBSztHQUM3QyxLQUFLLFVBQVUsT0FBTyxvQkFBb0I7RUFDNUM7RUFHQSxNQUFNLGFBQWEsT0FBZSxTQUFpQjtHQUNqRCxNQUFNO0dBQ04sU0FBUyxPQUFPLE1BQU0sU0FBUyxhQUFhO0VBQzlDO0VBR0EsTUFBTSxRQUFRLE9BQWU7R0FDM0IsTUFBTSxLQUFLLEtBQUs7R0FDaEIsS0FBSyxLQUFLLElBQUksUUFBUSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUM7R0FDNUMsU0FDRSxtQkFDQSxLQUFLLElBQUksZ0JBQWdCLGNBQ3pCLFNBQ0EsYUFDRjtFQUNGO0VBRUEsTUFBTSxTQUFTLE1BQXFCO0dBQ2xDLElBQUksRUFBRSxRQUFRLFVBQVUsTUFBTTtHQUM5QixJQUFJLEVBQUUsUUFBUSxhQUFhLEtBQUssRUFBRTtHQUNsQyxJQUFJLEVBQUUsUUFBUSxjQUFjLEtBQUssQ0FBQztFQUNwQztFQUVBLE1BQU0sT0FDSixvQkFBQyxVQUFEO0dBQ0UsT0FBTTtHQUNOLE1BQUs7R0FDTCxjQUFXO0dBQ1gsZUFBZSxLQUFLLEVBQUU7RUFDdkIsQ0FBQTtFQUVILE1BQU0sT0FDSixvQkFBQyxVQUFEO0dBQ0UsT0FBTTtHQUNOLE1BQUs7R0FDTCxjQUFXO0dBQ1gsZUFBZSxLQUFLLENBQUM7RUFDdEIsQ0FBQTtFQUVILE1BQU0sV0FDSixvQkFBQyxVQUFEO0dBQ0UsT0FBTTtHQUNOLE1BQUs7R0FDTCxjQUFXO0dBQ1gsZUFBZSxVQUFVLDhCQUE4QixrQkFBa0I7RUFDMUUsQ0FBQTtFQUVILEtBQUssWUFBWTtFQUNqQixLQUFLLFlBQVk7RUFDakIsU0FBUyxZQUFZO0VBRXJCLE1BQU0sT0FDSixxQkFBQyxPQUFEO0dBQUssT0FBTTtHQUFlLE1BQUs7R0FBUyxjQUFXO0dBQU8sY0FBVzthQUFyRTtJQUNFLG9CQUFDLE9BQUQ7S0FDRSxPQUFNO0tBQ04sZUFBZSxVQUFVLHFCQUFxQixlQUFlO0lBQzlELENBQUE7SUFDQTtJQUNELHFCQUFDLE9BQUQ7S0FBSyxPQUFNO2VBQVg7TUFDRztNQUNBO01BQ0E7S0FDRTs7SUFDSjtHQUNFOztFQUdQLE1BQU0sUUFBUSxNQUFjLFNBQWlCO0dBRTNDLElBQUksU0FBUyxNQUFNLENBQUMsR0FBRyxLQUFLO0lBQzFCLEtBQUs7SUFDTCxHQUFHLE1BQU0sR0FBRyxJQUFJLFNBQVMsR0FBRztHQUM5QjtHQUNBLEdBQUcsY0FBYztHQUtqQixJQUFJLENBQUMsS0FBSyxVQUFVLFNBQVMsb0JBQW9CLEdBQUc7SUFDbEQsU0FBUyxpQkFBaUIsV0FBVyxLQUFLO0lBQzFDLFNBQVMsS0FBSyxVQUFVLElBQUksaUJBQWlCO0lBQzdDLDRCQUE0QixLQUFLLFVBQVUsSUFBSSxvQkFBb0IsQ0FBQztHQUN0RTtHQUNBLFdBQVcsRUFBRTtFQUNmO0VBRUEsU0FBUyxLQUFLLE9BQU8sSUFBSTtFQUN6QixPQUFPO0dBQUU7R0FBTSxPQUFPO0dBQUk7RUFBSztDQUNqQztDQUVBLElBQU0sZ0JBQWdCLElBQVksU0FBaUI7RUFFakQsU0FDRyxpQkFBOEIsc0JBQXNCLENBQUMsQ0FDckQsUUFBUSxLQUFLO0VBRWhCLGFBQWEsY0FBYztFQUMzQixTQUFTLEtBQUssSUFBSSxJQUFJO0NBQ3hCOzs7O0NDdGdCQSxJQUFNLG1CQUE4QjtFQUFFLFFBQVE7RUFBa0IsS0FBSztDQUFhO0NBbUJsRixJQUFJO0NBQ0osSUFBSTtDQUVKLElBQU0sK0JBQStCO0VBQ25DLElBQUksQ0FBQyxtQkFBbUI7R0FDdEIsTUFBTSxtQkFBbUIsT0FBTyxTQUFTLEtBQUssTUFBTTtHQUNwRCxNQUFNLGdCQUFnQixZQUFZLFVBQVU7R0FFNUMsT0FBTyxrQkFBa0IsQ0FBQztHQUMxQixZQUFZLFVBQVUsUUFBUSxTQUE2QixNQUFxQjtJQUM5RSxjQUFjLEtBQUssTUFBTTtLQUFFLEdBQUc7S0FBTSxlQUFlO0lBQUssQ0FBQztHQUMzRDtHQUVBLDBCQUEwQjtJQUN4QixPQUFPLFdBQVc7SUFDbEIsWUFBWSxVQUFVLFFBQVE7SUFDOUIsb0JBQW9CO0dBQ3RCO0VBQ0Y7RUFFQSxPQUFPLGFBQWEsbUJBQW1CO0VBQ3ZDLHNCQUFzQixPQUFPLGlCQUFpQixvQkFBb0IsR0FBRyxHQUFJO0NBQzNFO0NBU0EsSUFBTSw0QkFBNEIsU0FBUyxLQUFLLFVBQVUsU0FBUyxpQkFBaUI7Q0FHcEYsSUFBTSx3QkFBd0IsQ0FBQyxDQUFDLFNBQVMsY0FBYywyQkFBMkI7Q0FPbEYsSUFBTSx5QkFBeUIsQ0FBQyxDQUFDLFNBQVMsY0FBYyxvQkFBb0I7Q0FjNUUsSUFBTSxpQkFBaUIsUUFBdUIsU0FBcUI7RUFDakUsSUFBSSxTQUFTO0VBQ2IsSUFBSTtFQUVKLE1BQU0sZUFBZTtHQUNuQixTQUFTLFdBQVc7R0FDcEIsT0FBTyxhQUFhLEtBQUs7R0FDekIsS0FBSztFQUNQO0VBRUEsTUFBTSxXQUFXLElBQUksdUJBQXVCO0dBQzFDLElBQUksT0FBTyxHQUFHO0lBQ1osU0FBUztJQUNULE9BQU8sYUFBYSxLQUFLO0dBQzNCLE9BQU8sSUFBSSxRQUNULE9BQU87RUFFWCxDQUFDO0VBRUQsU0FBUyxRQUFRLFNBQVMsaUJBQWlCO0dBQ3pDLFlBQVk7R0FDWixpQkFBaUIsQ0FBQyxPQUFPO0dBQ3pCLFNBQVM7RUFDWCxDQUFDO0VBRUQsUUFBUSxPQUFPLGlCQUFpQixVQUFVLE9BQU8sR0FBRyxHQUFJO0NBQzFEO0NBU0EsSUFBYSxhQUNYLFNBQ0EsVUFDQSxpQkFDQSxhQUNBLFdBQ0c7RUFDSCxNQUFNLFFBQVEsU0FBUyxjQUFjLDhCQUE4QixDQUFDLEVBQUUsYUFBYSxLQUFLLEtBQUs7RUFFN0YsTUFBTSxRQUFTLG9CQUFDLE9BQUQ7R0FBSyxPQUFNO0dBQW9CLEtBQUk7RUFBSSxDQUFBO0VBV3RELE1BQU0saUJBQWlCO0dBQ3JCLE1BQU0sVUFBVSxTQUFTLGNBQWdDLDBCQUEwQjtHQUNuRixNQUFNLE1BQU0sU0FBUyxNQUFNLFVBQVUsUUFBUSxjQUFjLFFBQVEsTUFBTTtHQUN6RSxJQUFJLEtBQUssTUFBTSxNQUFNO0VBQ3ZCO0VBRUEsU0FBUztFQUVULE1BQU0sUUFBd0IsQ0FBQztFQWUvQixJQUFJLGFBQTRCO0VBRWhDLE1BQU0sZUFBZSxTQUFTLFVBQVU7R0FDdEMsSUFBSSxDQUFDLFlBQVk7R0FDakIsV0FBVyxRQUFRLFVBQVUsT0FBTyxTQUFTO0dBQzdDLFdBQVcsUUFBUSxhQUFhLGlCQUFpQixPQUFPO0dBQ3hELFdBQVcsUUFBUSxTQUFTO0dBQzVCLElBQUksUUFDRixTQUFTLEdBQUcsaUJBQWlCLE9BQU8sZ0JBQWdCLFdBQVcsTUFBTSxTQUFTLGlCQUFpQixHQUFHO0dBQ3BHLGFBQWE7R0FDYixLQUFLLFVBQVUsT0FBTyxhQUFhO0VBQ3JDO0VBRUEsTUFBTSxjQUFjLFdBQW1CO0dBQ3JDLE9BQU8sUUFBUSxVQUFVLElBQUksU0FBUztHQUN0QyxPQUFPLFFBQVEsYUFBYSxpQkFBaUIsTUFBTTtHQUNuRCxPQUFPLFFBQVEsU0FBUztHQUN4QixhQUFhO0dBQ2IsS0FBSyxVQUFVLElBQUksYUFBYTtFQUNsQztFQWlCQSxJQUFJLGFBQWE7RUFFakIsTUFBTSxnQkFBZ0I7R0FDcEIsY0FBYztHQUNkLEtBQUssVUFBVSxJQUFJLGNBQWM7RUFDbkM7RUFFQSxNQUFNLGVBQWU7R0FDbkIsYUFBYSxLQUFLLElBQUksR0FBRyxhQUFhLENBQUM7R0FDdkMsSUFBSSxZQUFZO0dBQ2hCLEtBQUssVUFBVSxPQUFPLGNBQWM7R0FDcEMsU0FBUyxVQUFVLE1BQU07R0FDekIsU0FBUyxRQUFRLE1BQU07RUFDekI7RUFTQSxNQUFNLHFCQUFxQixXQUEwQjtHQUNuRCxNQUFNLFNBQVM7R0FDZixZQUFZO0dBQ1osUUFBUTtHQUNSLGNBQWMsY0FBYztJQU8xQixPQUFPLGlCQUFpQjtLQUN0QixJQUFJLFFBQVEsV0FBVyxNQUFNO0tBQzdCLE9BQU87SUFDVCxDQUFDO0dBQ0gsQ0FBQztFQUNIO0VBRUEsTUFBTSxVQUFVLFFBQVEsUUFBUSxTQUFTLFFBQVEsVUFBVTtHQUd6RCxJQUFJLENBQUMsYUFBYSxNQUFNLEdBQUcsT0FBTyxDQUFDO0dBRW5DLE1BQU0sV0FBVyxlQUFlLE9BQU8sSUFBSTtHQWUzQyxNQUFNLFFBQVEsWUFBWSxTQUFTLFFBQVEsT0FaN0IsV0FDWixTQUNDLFNBQVM7SUFDUixrQkFBa0IsbUJBQW1CO0lBQ3JDLGdCQUFnQixJQUFJO0dBQ3RCLElBQ0MsU0FBUztJQUNSLGtCQUFrQixlQUFlO0lBQ2pDLFlBQVksSUFBSTtHQUNsQixHQUNBLGdCQUVnRCxHQUFPLGdCQUFnQjtHQUN6RSxNQUFNLEtBQUssTUFBTSxJQUFJO0dBT3JCLE1BQU0sV0FDSixvQkFBQyxVQUFEO0lBQVEsT0FBTTtJQUFvQixNQUFLO0lBQVMsY0FBVztJQUFRLGVBQWUsWUFBWSxJQUFJO0dBQUksQ0FBQTtHQUd4RyxTQUFTLFlBQVk7R0FFckIsTUFBTSxVQUNKLHFCQUFDLE9BQUQ7SUFBSyxPQUFNO0lBQXNCLFFBQUE7Y0FBakMsQ0FDRyxVQUNBLE1BQU0sSUFDSjs7R0FLUCxRQUFRLGlCQUNOLFVBQ0MsTUFBTTtJQUNMLElBQUssRUFBRSxPQUF1QixRQUFRLGNBQWMsR0FBRyx1QkFBdUI7R0FDaEYsR0FDQSxFQUFFLFNBQVMsS0FBSyxDQUNsQjtHQUdBLFFBQVEsaUJBQWlCLFVBQVUsTUFBTTtJQUN2QyxJQUFLLEVBQUUsT0FBdUIsUUFBUSxjQUFjLEdBQUcsWUFBWTtHQUNyRSxDQUFDO0dBRUQsTUFBTSxNQUFNLFdBQWEsb0JBQUMsUUFBRDtJQUFNLE9BQU07SUFBa0IsZUFBWTtHQUFRLENBQUEsSUFBcUI7R0FDaEcsTUFBTSxRQUFTLG9CQUFDLFFBQUQsRUFBTSxPQUFNLDRCQUE2QixDQUFBO0dBRXhELE1BQU0sVUFDSixxQkFBQyxVQUFEO0lBQ0UsT0FBTyx1QkFBdUIsV0FBVyxnQ0FBZ0M7SUFDekUsTUFBSztJQUNMLGlCQUFjO0lBQ2QsaUJBQWM7SUFDZCxlQUFlO0tBQ2IsTUFBTSxVQUFVLFlBQVksWUFBWTtLQUd4QyxZQUFZLE9BQU87S0FDbkIsSUFBSSxTQUFTO0tBQ2IsV0FBVztNQUFFO01BQVM7TUFBUyxNQUFNLFdBQVcsYUFBYTtLQUFPLENBQUM7S0FHckUsU0FDRSxHQUFHLGlCQUFpQixPQUFPLFVBQzNCLFdBQVcsYUFBYSxRQUN4QixTQUNBLGlCQUFpQixHQUNuQjtJQUNGO2NBcEJGLENBc0JHLE9BQU8sU0FBUyxlQUFlLEVBQUUsR0FDakMsS0FDSzs7R0FHVixNQUFNLFdBQVc7SUFDZixNQUFNLFVBQVUsVUFBVSxPQUFPLElBQUksQ0FBQyxFQUFFLFNBQVM7SUFDakQsTUFBTSxjQUFjO0lBQ3BCLElBQUksS0FBSyxJQUFJLE1BQU0sWUFBWSxvQkFBb0IsVUFBVSxPQUFPLENBQUM7R0FDdkUsQ0FBQztHQUVELE9BQ0UscUJBQUMsT0FBRDtJQUFLLE9BQU07Y0FBWCxDQUNHLFNBQ0EsT0FDRTs7RUFFVCxDQUFDO0VBRUQsU0FBUyxpQkFBaUIsVUFBVSxNQUFNO0dBQ3hDLElBQUksQ0FBQyxjQUFlLEVBQUUsT0FBdUIsUUFBUSxxQkFBcUIsR0FBRztHQUM3RSxZQUFZLElBQUk7RUFDbEIsQ0FBQztFQUtELE1BQU0sTUFDSixvQkFBQyxVQUFEO0dBQ0UsT0FBTTtHQUNOLE1BQUs7R0FDTCxlQUFlO0lBR2IsU0FDRSxHQUFHLGlCQUFpQixPQUFPLGVBQzNCLGVBQ0EsU0FDQSxpQkFBaUIsR0FDbkI7SUFDQSxTQUFTLGNBQWlDLG9DQUFvQyxDQUFDLEVBQUUsTUFBTTtHQUN6RjthQUNEO0VBRU8sQ0FBQTtFQUdWLE1BQU0sT0FDSixxQkFBQyxPQUFEO0dBQUssT0FBTTthQUFYLENBSUUsb0JBQUMsT0FBRDtJQUFLLE9BQU07SUFBdUIsZUFBWTtHQUFRLENBQUEsR0FDdEQscUJBQUMsT0FBRDtJQUFLLE9BQU07Y0FBWDtLQUNHO0tBQ0Qsb0JBQUMsT0FBRDtNQUFLLE9BQU07Z0JBQXFCO0tBQVcsQ0FBQTtLQUMzQyxxQkFBQyxPQUFEO01BQUssT0FBTTtnQkFBWCxDQUNFLG9CQUFDLE9BQUQ7T0FBSyxPQUFNO2lCQUF1QjtNQUFhLENBQUEsR0FDOUMsR0FDRTs7SUFDRjtLQUNGOztFQVFQLE1BQU0sV0FBVyxJQUFJLHNCQUFzQixDQUFDLFdBQVc7R0FDckQsSUFBSSxLQUFLLFVBQVUsU0FBUyxjQUFjLEdBQUc7R0FDN0MsTUFBTSxVQUFVLENBQUMsTUFBTSxrQkFBa0IsTUFBTSxtQkFBbUIsTUFBTTtHQUN4RSxLQUFLLFVBQVUsT0FBTyxjQUFjLE9BQU87R0FDM0MsSUFBSSxDQUFDLFNBQVMsWUFBWTtFQUM1QixDQUFDO0VBQ0QsU0FBUyxRQUFRLE1BQU07RUFjdkIsSUFBSSxXQUFXO0VBY2YsSUFaeUIsa0JBQWtCLFlBQVk7R0FDckQsSUFBSSxDQUFDLFFBQVEsTUFBTSxXQUFZLE9BQU8sT0FBdUIsWUFBWSxhQUFhLEdBQUc7R0FDekYsTUFBTSxPQUFPLGlCQUFpQjtHQUM5QixJQUFJLFNBQVMsVUFBVTtHQUN2QixXQUFXO0dBQ1gsSUFBSSxDQUFDLE1BQU0sT0FBTyxPQUFPO0dBR3pCLFlBQVk7R0FDWixRQUFRO0VBQ1YsQ0FFQSxDQUFBLENBQWEsUUFBUSxTQUFTLGlCQUFpQjtHQUM3QyxZQUFZO0dBQ1osaUJBQWlCLENBQUMsT0FBTztHQUN6QixTQUFTO0VBQ1gsQ0FBQztFQUVELE1BQU0sYUFBYTtHQUNqQixTQUFTO0dBQ1QsTUFBTSxTQUFTLFNBQVMsY0FBaUMsb0NBQW9DO0dBQzdGLElBQUksV0FBVyxRQUFRLFlBQVk7R0FDbkMsTUFBTSxTQUFTLE9BQU8sR0FBRyxDQUFDO0VBQzVCO0VBRUEsT0FBTztHQUFFO0dBQU07RUFBSztDQUN0Qjs7OztDQ3BhQSxJQUFhLHVCQUF1QixZQUFZO0VBRTlDLE9BRG1CLE9BQW9CLHlCQUF5QixFQUNoRSxDQUFLLFVBQVUsSUFBSSxVQUFVO0VBRTdCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ25CO0NBUUEsSUFBTSxZQUFZLFlBQVk7RUFFNUIsT0FEbUIsT0FBb0IseUJBQXlCLEVBQ2hFLENBQ0csaUJBQThCLGFBQWEsQ0FBQyxDQUM1QyxTQUFTLE9BQVEsR0FBRyxjQUFjLGtCQUFrQixHQUFHLFdBQVksQ0FBRTtDQUMxRTtDQVNBLElBQU0scUJBQXFCLFlBQVk7RUFDckMsTUFBTSxRQUFRLE1BQU0sT0FBb0Isd0RBQXdEO0VBQ2hHLE1BQU0sUUFBUSxPQUFPLE1BQU0sUUFBUSxLQUFLO0VBQ3hDLE1BQU0sUUFBUSxTQUFTLE1BQU8sSUFBSSxRQUFRLElBQUEsQ0FBTSxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sS0FBSztFQUM1RSxNQUNHLFFBQVEscUJBQXFCLENBQUMsQ0FDOUIsaUJBQThCLHlCQUF5QixDQUFDLENBQ3hELFNBQVMsT0FBUSxHQUFHLGNBQWMsS0FBTTtDQUM3QztDQVlBLElBQU0sbUJBQW1CLFlBQVk7RUFDbkMsTUFBTSxRQUFRLE1BQU0sT0FBb0IsK0JBQStCO0VBRXZFLE1BQU0sZUFBZTtHQUNuQixNQUFNLFVBQVUsaUJBQWlCLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQ3ZFLE1BQU0sUUFBUSxNQUFNLEtBQUssTUFBTSxRQUFRO0dBQ3ZDLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLE9BQU8sSUFBSTtHQUNsRCxNQUFNLFNBQVMsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLHFCQUFxQixLQUFLLElBQUksQ0FBQztFQUNsRjtFQUVBLE9BQU87RUFDUCxJQUFJLGlCQUFpQixNQUFNLENBQUMsQ0FBQyxRQUFRLE9BQU8sRUFBRSxXQUFXLEtBQUssQ0FBQztFQUMvRCxPQUFPLGlCQUFpQixVQUFVLE1BQU07Q0FDMUM7Ozs7Q0MvREEsSUFBTSxvQkFDSixTQUFTLGNBQTJCLG1CQUFtQixLQUFLLFNBQVMsY0FBMkIsYUFBYTtDQUUvRyxJQUFhLGlCQUFpQixPQUFPLGNBQXNCO0VBRXpELFFBQU8sTUFEWSxNQUFNLFVBQVUsQ0FBQyxDQUFDLE1BQU0sTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUNsRCxDQUFLLE1BQU0sTUFBTSxTQUFpQyxLQUFLLGVBQWUsU0FBUztDQUN4RjtDQU9BLElBQWEsWUFBWSxPQUFPLGNBQXNCO0VBQ3BELE1BQU0sT0FBTyxJQUFJLFNBQVM7RUFDMUIsS0FBSyxPQUFPLE1BQU0sT0FBTyxTQUFTLENBQUM7RUFDbkMsS0FBSyxPQUFPLFlBQVksR0FBRztFQUMzQixNQUFNLE1BQU0sZ0JBQWdCO0dBQUUsUUFBUTtHQUFRLFNBQVMsRUFBRSxvQkFBb0IsaUJBQWlCO0dBQUc7RUFBSyxDQUFDO0NBQ3pHO0NBY0EsSUFBYSwwQkFBMEIsT0FBTyxTQUFpQjtFQUU3RCxNQUFNLFFBQVEsQ0FDWixLQUFJLE1BRm9CLE1BQU0sVUFBVSxDQUFDLENBQUMsTUFBTSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBRTFELENBQVksa0JBQWtCLENBQUMsRUFBQSxDQUNoQyxRQUFRLE1BQTZDLEVBQUUsY0FBYyxFQUFFLFNBQVMsSUFBSSxDQUFDLENBQ3JGLEtBQUssTUFBd0IsRUFBRSxJQUFJLEdBQ3RDLElBQ0YsQ0FBQyxDQUFDLEtBQUssR0FBRztFQUVWLE1BQU0sT0FBTyxZQUFZO0VBQ3pCLE1BQU0sT0FBTyxJQUFJLFNBQVM7RUFDMUIsS0FBSyxPQUFPLFlBQVksS0FBSztFQUM3QixJQUFJLE1BQU07R0FDUixLQUFLLE9BQU8sWUFBWSxLQUFLLG9CQUFvQixDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7R0FDN0UsS0FBSyxPQUFPLGdCQUFnQixTQUFTLFFBQVE7RUFDL0M7RUFFQSxNQUFNLFdBQVcsTUFBTSxNQUFNLG1CQUFtQjtHQUM5QyxRQUFRO0dBQ1IsU0FBUyxFQUFFLG9CQUFvQixpQkFBaUI7R0FDaEQ7RUFDRixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sRUFBRSxLQUFLLENBQUM7RUFFdkIsTUFBTSxlQUFlLFFBQVE7Q0FDL0I7Q0FLQSxJQUFNLG9CQUFvQjtDQUUxQixJQUFhLHVCQUF1QixZQUFrRDtFQUlwRixPQUFRLFlBQVksbUJBQW1CLE9BQU87Q0FDaEQ7Ozs7Q0MvRUEsU0FBTztFQUFBLE1BQUE7RUFBWSxLQUFBO0NBQUEsQ0FBQTtDQUVuQixnQkFDRSxtQkFFQTs7NEJBNENjOzBCQUVPO3lCQUNxQjtnQkFFVjs7R0FFaEMsS0FBTSxhQUFPO0dBQ1gsS0FBSSxTQUFTLENBQUE7R0FFYixLQUFLLE9BQUEsQ0FBQTs7UUFHTCxPQUFNO0dBQ04sSUFBQSxTQUFXLEtBQUssVUFBUSxTQUFBLFNBQUEsR0FBQTtHQUl4QixLQUFLLFVBQVU7R0FDZixLQUFLLFNBQUE7R0FDTCxNQUFLLE9BQUEsTUFBYSxPQUFBLGNBQXNCO0dBQ3hDLEtBQUssTUFBQSxLQUFTLFFBQUE7R0FFZCxLQUFBLFVBQWMsSUFBQSxhQUFjO0dBRTVCLEtBQUssVUFBQSxNQUFnQixhQUFBO0dBQ3JCLEtBQUssYUFBQSxpQkFBZ0IsS0FBQSxPQUFBO0dBQ3JCLEtBQUssU0FBQSxhQUFpQixLQUFBLFNBQUEsS0FBQSxVQUFBO0dBQ3RCLFNBQUEsS0FBQSxVQUFxQixJQUFBLFNBQUE7R0FDckIsS0FBSyxnQkFBTTtHQUNYLEtBQUEsZ0JBQW9CO0dBQ3BCLEtBQUEsaUJBQUE7R0FLQSxxQkFBcUI7UUFDbkIsTUFBUzt1QkFDRTs0QkFDWTtTQUFFLFdBQVcsSUFBQSx1QkFBQTthQUFNLFdBQVM7SUFBSyxLQUFDLE1BQUE7SUFDMUQsU0FBQSxRQUFBLE1BQUE7S0FDRCxXQUFTO0tBQWdCLFNBQUE7SUFBaUIsQ0FBQTtHQUFjLENBQUM7R0FHekQsU0FBSSxRQUFBLE1BQUE7SUFDTixXQUFBO0lBRVEsU0FBQTtHQUNOLENBQUE7R0FDQSxJQUFHLHdCQUFjLFNBQUE7O0VBRW5CLFlBQUE7Ozs7O2FBZU87R0FDTCxNQUFLLE9BQU87R0FDWixJQUFBLFNBQVMsY0FBaUIsY0FBSSxLQUFBLEdBQUEsR0FBQTtHQUNoQyxNQUFBLE9BQUEsU0FBQSxjQUFBLE1BQUE7O0dBR1EsS0FBQSxPQUFRO0dBQ2QsU0FBSyxLQUFLLFlBQWdCLElBQUk7O1VBR3pCO0dBQ1AsS0FBQSxLQUFBLFNBQUEsT0FBQSxHQUFBLENBQUE7Ozs7Ozs7O2NBeUJRO0dBQ04sTUFBTSxRQUFNLFNBQU0sY0FBMkIsVUFBQSxLQUFBLEtBQUE7R0FDN0MsTUFBSyxRQUFRLE9BQUssY0FBQSxvQkFBQTtHQUVsQixJQUFBLENBQUEsU0FBYyxDQUFBLFNBQUEsQ0FBVyxNQUFHLGNBQWUsaUJBQUcsR0FBQTtHQUM5QyxNQUFNLE1BQUEsTUFBWSxjQUFBLG9DQUFBLENBQUEsRUFBQTtHQUVsQixNQUFNLE1BQUEsTUFBQSxjQUFzQixnQ0FBNEIsQ0FBQSxFQUFBO0dBQzFELElBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQTs7Ozs7a0JBWWlCO0dBRWYsTUFBTSxPQUFBLFNBQWUsY0FDbkIsY0FBTTtHQUlSLE1BQUssUUFBUSxLQUFBLGNBQUEsVUFBQSxLQUFBLEtBQUE7R0FFYixNQUFJLFNBQU8sS0FBTyxjQUEyQix1QkFBZ0I7R0FDN0QsSUFBSSxDQUFDLFNBQU0sQ0FBQSxRQUFBO1NBQ1QsU0FBTyxNQUFTLGNBQWMsTUFBTSxjQUFBLGlCQUFBLElBQUEsbUNBQUEsc0NBQUE7T0FDcEMsQ0FBQSxRQUFLO09BQ0wsT0FBTyxPQUFBLGNBQXVCLGdCQUFVO0dBQzFDLElBQUEsQ0FBQSxNQUFBO0lBQ0EsT0FBSyxTQUFBLGNBQTBCLE1BQUE7SUFHL0IsS0FBQSxZQUNHO0lBT0gsT0FBTSxjQUFTLE1BQVMsQ0FBQSxFQUFBLE1BQUEsSUFBaUM7R0FDekQ7UUFDRSxjQUFjLEtBQUEsT0FBbUIsWUFDeEIsS0FBQTtZQUF5QyxpQkFBQSxnQkFBQSxDQUFBLENBQUEsU0FBQSxPQUFBLEtBQUEsU0FBQSxFQUFBLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQTtTQUFXLFNBQWEsU0FBQSxjQUFBLGtCQUFBO09BQU0sUUFBQTtJQUNoRixNQUFBLFFBQU8sV0FDTCxTQUFLLE9BQUEsT0FBQSxTQUF5QixjQUFPLE1BQWMsR0FBQTtLQUl2RDtLQUNGLGFBQUE7Ozs7O1FBaUJNLGtCQUFRO0dBRVosTUFBTSxVQUFBLE1BQVksT0FBUyx5Q0FBb0I7R0FFL0MsQUFEVSxRQUFBLFFBQVksY0FDdEIsQ0FBQSxDQUFBLFVBQVUsSUFBQSxhQUFhO0dBQ3ZCLElBQUEsUUFBVSxjQUFjLHdCQUFBLEdBQUE7R0FFeEIsTUFBTSxZQUFXLFNBQVMsY0FBYyxNQUFNO0dBQzlDLFVBQVMsWUFBWTtHQUNyQixVQUFTLGFBQWMsZUFBQSxNQUFBO0dBRXZCLFVBQVEsY0FBTztHQUNqQixNQUFBLFdBQUEsU0FBQSxjQUFBLE1BQUE7R0FFUSxTQUFzQyxZQUFlO0dBQzNELFNBQUksY0FBYztHQUNwQixRQUFBLE9BQUEsV0FBQSxRQUFBO0VBRUE7UUFDRSxJQUFNLE9BQU87R0FDYixJQUFBLGNBQWUsYUFBYyxHQUFBLE1BQUEsUUFBQSxPQUFBLEtBQUE7O29CQWV2QjtTQUNKLE9BQU0sU0FBVSxjQUFpQixnQkFBQSxLQUFBLEtBQUE7UUFDN0IsVUFBVSxJQUFBLFVBQUE7U0FDZCxtQkFBYyxPQUFBLGtCQUFBLFVBQUEsWUFBQSxrQkFBQSxLQUFBLElBQUEsc0JBQUEsR0FBQSx3QkFBQSxrQkFBQSxJQUFBO1NBQ1QsZUFBQSxPQUFnQixrQkFBQTtJQUNyQixNQUFBLFVBQVksaUJBQVk7SUFDMUIsSUFBQSxDQUFBLFNBQUE7SUFFQSxRQUFNLE1BQUE7SUFDTixLQUFLLGdCQUFVO0lBS2YsU0FBTSxHQUFBLEtBQUEsT0FBYSxhQUFhLHFCQUFrQixTQUFBLEtBQUEsR0FBQTtHQUdsRDtTQUNFLFVBQVUsUUFBQSxLQUFjLFNBQUEsaUJBQXNCLFdBQWtCO1FBQ2hFLEtBQVMsS0FBQSxRQUFBLElBQWM7R0FDekIsTUFBRSxhQUFBLFFBQUEsS0FBQSxTQUFBLFNBQUE7R0FFRixNQUFNLFNBQUEsTUFBYyxLQUFBLEtBQVMsaUJBQTJCLHFCQUF1QixDQUFBLENBQUEsQ0FBQSxLQUFBLFFBQUE7SUFDL0UsT0FBSyxHQUFBLGNBQWMsbUJBQWlCLENBQUEsQ0FBQSxZQUFXLEtBQUE7SUFDL0MsTUFBQSxHQUFBLGNBQXFCLHFCQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7R0FFckIsRUFBQTtHQUNBLE1BQU0sY0FBWSxTQUFRLGNBQUEsdUJBQUE7R0FDMUIsS0FBQSxjQUFnQixpQkFBYSxXQUFZO0dBQ3pDLFlBQU0sU0FBUTtHQUNkLE1BQU0sUUFBQSxLQUFVLFNBQUE7R0FDaEIsTUFBTSxPQUFBLEtBQVEsUUFBTTtHQUlwQixNQUFLLFVBQVcsUUFBQSxLQUFBLFlBQWMsT0FBaUIsS0FBSSxZQUFBLEtBQUE7R0FDbkQsTUFBSyxRQUFNLFdBQUssZ0JBQXdCO0dBR3hDLE1BQUssVUFBVyxpQkFBYyxNQUFBO0dBQzlCLE1BQUssUUFBTSxNQUFRO0dBQ25CLEtBQUssTUFBTSxLQUFLLGNBQWMsaUJBQWlCLEdBQUcsQ0FBQztHQUNuRCxLQUFLLE1BQU0sS0FBSyxjQUFjLFVBQUEsS0FBZSxLQUFFLEdBQUEsQ0FBQTtHQUMvQyxLQUFLLE1BQU0sS0FBQSxjQUFRLG9DQUFBLENBQUEsRUFBQSxlQUFBLENBQUE7R0FDbkIsS0FBSyxNQUFNLFFBQU8sTUFBQSxDQUFBO0dBQ2xCLEtBQUssTUFBTSxLQUFLLGNBQWMsaUJBQUEsR0FBa0IsQ0FBQTtHQUNoRCxLQUFLLE1BQU0sS0FBQSxjQUFXLGNBQUEsQ0FBQSxFQUFBLGVBQUEsQ0FBQTtHQUN0QixLQUFLLE1BQU0sT0FBTyxDQUFBO0dBQ2xCLEtBQUssTUFBTSxNQUFBLENBQU87R0FDbEIsS0FBSyxNQUFNLEtBQUEsY0FBVyxrQkFBQSxLQUFBLEtBQUEsR0FBQSxFQUFBO0dBQ3RCLEtBQUssTUFBTSxTQUFLLEVBQUE7R0FHaEIsS0FBSyxNQUFBLE9BQUEsRUFBQTtHQUNMLEtBQUssTUFBQSxPQUFXLEVBQUE7R0FDaEIsS0FBSyxNQUFBLFNBQWEsRUFBSTtHQVF0QixLQUFBLE1BQUEsS0FBQSxjQUFpQix3QkFBZ0IsR0FBd0IsRUFBQTtHQUN6RCxLQUFBLGlCQUFpQixxQkFBYyxDQUFBLENBQUEsU0FBc0IsT0FBTyxHQUFBLE9BQUEsQ0FBQTtHQUM1RCxLQUFBLE9BQUEsR0FBQSxhQUFpQixDQUFBLFFBQW9CLElBQUEsSUFBQSxDQUFBLEdBQUEsT0FBQSxNQUFxQixTQUFPLE9BQUEsT0FBQSxPQUEwQjtHQU0zRixLQUFBLGFBQU0sSUFBZTtHQUlyQixpQkFBZSxnQkFDUix3QkFDYSxPQUFBLG1CQUFvQixLQUFTLEVBQUE7R0FLakQsaUJBQWUsY0FBVyxzQkFBQSxPQUFBLGdCQUFBLEtBQUEsRUFBQTtHQUMxQixpQkFBYyxvQkFBa0IscUJBQUEsT0FBQSwwQkFBQSxLQUFBLEVBQUE7R0FRaEMsTUFBQSxlQUFpQixhQUFlLFFBQUEsT0FBQSxLQUFBLGNBQThCLGNBQVksQ0FBQSxFQUFBLGlCQUFBO0dBQzVFLE1BQUEsU0FBQSxVQUFBLEtBQUEsZUFBQSxLQUFBLE9BQUEsZUFBQSxLQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsY0FBQSxpQkFBQSxhQUFBLFlBQUE7Ozs7O1FBZ0JFLGFBQWtCLE1BQUE7R0FDbEIsTUFBTSxPQUFBLE1BQUEsVUFBc0IsV0FBQTtHQUM1QixJQUFBLGFBQU0sTUFBaUIsZUFBYyxLQUFLLFNBQUE7R0FLMUMsTUFBTSxjQUFBLEtBQWdCLGlCQUFBLEtBQUEsQ0FBQTtTQUNmLEVBQUEsTUFBQSxJQUFBLFNBQUEsS0FBQSxNQUFBLEtBQUE7U0FDTCxpQkFBZSxLQUFBLG1CQUFBO1NBQ2YsWUFBVSxLQUFBLGNBQUEsS0FBQTtHQUNaLE1BQUEsZ0JBQUE7SUFFQSxLQUFLO0lBQ0wsZUFBYztJQUNkLFVBQVU7R0FDVjtHQUtBLEtBQUEsTUFBQSxJQUFBLENBQUE7UUFDTSxPQUFNLEVBQUE7UUFDUixLQUFNLEtBQUEsT0FBVTtXQUNWO3VCQUNSLE9BQUEsVUFBQTtJQUNBLElBQUEsTUFBQSxXQUFtQixrQkFBb0IsS0FBQSxpQkFBUyxLQUFBLENBQUEsWUFBQTtLQUNoRCxNQUFBLFVBQVEsS0FBQSxTQUFBO0tBQ1QsTUFBQSx3QkFBQSxrQkFBQTtJQUNIO0lBRVEsYUFBQSxNQUFtQixlQUFBLEtBQUEsU0FBQTtJQUN6QixRQUFNO0dBQ04sQ0FBQTtFQUNGOztHQUdRLE1BQUEsVUFBQSxnQkFBbUIsS0FBQSxPQUFBO0dBQ3pCLE9BQU0sQ0FBQSxDQUFBLFdBQWMsZUFBUSxRQUFjLEtBQU0sS0FBQTs7Ozs7O3VCQWdCNUI7T0FDaEIsZ0JBQUEsS0FBQSxpQkFBQSxJQUFBLGdCQUFBLEtBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtnQkFDRjtJQUNBLElBQUEsQ0FBQSxLQUFNLGlCQUFVLEdBQUE7S0FDaEIsZ0JBQWU7S0FDYjs7SUFFRixNQUFBLFVBQUEsZ0JBQUEsS0FBQSxPQUFBO0lBQ0YsSUFBQSxXQUFBLFFBQUEsT0FBQSxlQUFBO0tBQ0YsU0FBQSwrQkFBQSwyQkFBQSxTQUFBLEtBQUEsaUJBQUEsQ0FBQTs7Ozs7Z0JBYVEsT0FBWTtPQUNkLFdBQVM7Z0JBQ1g7SUFDQSxNQUFBLFVBQVcsTUFBQTtJQUNiLElBQUEsV0FBQSxDQUFBLFVBQ0YsU0FBQSwwQkFBQSxhQUFBLFFBQUEsS0FBQSxpQkFBQSxDQUFBO0lBR0UsV0FBTTtHQUNOOztxQkFJUztHQUtULEFBRE0sU0FBVSxjQUFpQix5QkFDN0IsQ0FBQSxDQUFBLFVBQVcsSUFBQSxXQUFTO1NBQ3RCLFVBQVcsU0FBUyxjQUFpQixxQkFBQTtZQUNsQyxVQUFZLElBQUEsYUFBQTtTQUNaLFVBQUEsaUJBQWMsS0FBQSxZQUFBLEtBQUE7T0FDakIsV0FBUSxTQUFTO0lBQ25CLE1BQUEsS0FBQSxTQUFBLGNBQUEsR0FBQTtJQUVBLEdBQUEsWUFBZ0I7SUFJaEIsR0FBQSxjQUFlO0lBQ2pCLFFBQUEsT0FBQSxFQUFBOzs7OztFQVlBLE1BQVksa0JBQWM7R0FDeEIsTUFBTSxNQUFLLE1BQUEsT0FBUyxvQ0FBbUI7R0FDdkMsSUFBRyxDQUFBLElBQUEsY0FBWSxLQUFBLEdBQUEsSUFBQSxZQUFBOztNQUVmLE1BQU87R0FDVCxNQUFBLEtBQUEsU0FBQSxjQUFBLEtBQUE7R0FFUSxHQUFBLFlBQVc7R0FDakIsR0FBQSxZQUFXO0dBQ1gsT0FBRzs7YUFJSTtHQUNULE1BQUEsS0FBQSxTQUFBLGNBQUEsS0FBQTtHQUVRLEdBQUEsWUFBVTtHQUNoQixHQUFBLFlBQVcsbUVBQTRCLGlCQUFBLCtKQUFBLFVBQUEsZ0JBQUEsRUFBQTtHQUN2QyxPQUFHOztZQUtJO0dBQ1QsTUFBQSxLQUFBLFNBQUEsY0FBQSxLQUFBO0dBQ0YsR0FBQSxZQUFBO0dBRUEsR0FBSSxZQUFhIn0=