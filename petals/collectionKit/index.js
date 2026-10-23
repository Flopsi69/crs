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
	var globals_default = ".crs-pdp{--crs-accent:#a72561;--crs-accent-text:#a33f6e;--crs-accent-soft:#a725610d;--crs-accent-tint:#fdf1f6;--crs-line:#dbdbdb;--crs-ink:#121212;--crs-muted:#191919bf;--crs-head:\"Forum\", Georgia, serif;--crs-body:\"Jost\", \"Assistant\", sans-serif;--crs-num:\"Overlock\", Georgia, serif}@media screen and (width>=990px){.crs-product .page-width{max-width:137.7rem}.crs-product .product.product--large{gap:3.14%}.crs-product .product.product--large .product__media-wrapper{flex:0 0 max(56%,580px);width:max(56%,580px);max-width:none}.crs-product .product.product--large .product__info-wrapper{flex:1 1 0;width:auto;min-width:0;max-width:none;padding-left:0}}@media screen and (width>=990px) and (width<=1279px){.crs-product .page-width{padding-inline:24px}}.crs-pdp section.crs-info.product__info-container{font-family:var(--crs-body);flex-direction:column;gap:0;display:flex}.crs-pdp .crs-info>*,.crs-pdp .crs-info product-form{margin-top:0;margin-bottom:0}.crs-pdp .crs-info>.product__title{flex-direction:column;gap:6px;margin:0;display:flex}.crs-pdp .crs-info>.product__title>h1{order:1}.crs-pdp .crs-info>.product__title>.fera-storeReviewsSummary{order:0;margin:0!important}.crs-pdp .crs-info>[id^=price-]{margin-top:16px}.crs-pdp .crs-info>.crs-options{border-top:1px solid var(--crs-line);margin-top:24px;padding-top:24px}.crs-pdp .crs-info>div:has(>product-form){margin-top:16px}.crs-pdp .crs-info>.crs-gift,.crs-pdp .crs-info>.crs-trust{margin-top:16px}.crs-pdp .crs-info>.crs-help{border-top:1px solid var(--crs-line);margin-top:12px;padding-top:12px}.crs-pdp .crs-info>.crs-details{margin-top:12px}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto,.crs-pdp .crs-info>.crs-bottom{margin-top:24px}.crs-product .product-form .atc_steps,.crs-product .product-form .custom.dwa{display:none}.crs-info variant-selects{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.crs-info .product__title h1{font-family:var(--crs-head);color:var(--crs-ink);margin:0;font-size:40px;line-height:52px}.crs-pdp .crs-utility{--color-background:159, 101, 128;background:#9f6580;border-bottom:1px solid #fdfdfd14}.crs-pdp .crs-utility .utility-bar__grid{justify-content:center}.crs-pdp .crs-utility .announcement-bar__message{font-family:var(--crs-body);letter-spacing:2px;text-transform:uppercase;color:#fdfdfd;flex-wrap:wrap;justify-content:center;align-items:center;gap:4px 16px;padding:10px 0;font-size:13px;font-weight:400;line-height:16.9px;display:flex}.crs-pdp .crs-utility .announcement-bar__message>span{white-space:nowrap}@media screen and (width<=900px){.crs-pdp .crs-utility__sep,.crs-pdp .crs-utility__warranty{display:none}}.crs-info .fera-storeReviewsSummary{font-family:var(--crs-body);margin:0;font-size:14px;line-height:16px}.crs-info .fera-storeReviewsSummary-content{align-items:center;gap:12px;display:flex}.crs-info .fera-storeReviewsSummary-avgRatingWrapper,.crs-info .fera-storeReviewsSummary-wrapper{padding:0}.crs-info .fera-storeReviewsSummary-block{align-items:center;display:flex}.crs-info .fera-storeReviewsSummary-avgRating{color:var(--crs-ink);letter-spacing:.6px;font-size:14px;line-height:16px}.crs-info .fera-storeReviewsSummary-stars,.crs-info .fera-storeReviewsSummary-stars-rating,.crs-info .fera-storeReviewsSummary-stars-bg{letter-spacing:3px;font-size:18px}.crs-info .fera-storeReviewsSummary-stars{margin-right:-3px}.crs-info .fera-storeReviewsSummary-verifiedBadgeWrapper,.crs-info .fera-storeReviewsSummary-verifiedBadge,.crs-info .fera-storeReviewsSummary-verifiedBadge-preTextNumber{font-size:14px}.crs-product .price{font-family:var(--crs-body);align-items:center;gap:12px;display:flex}.crs-product .price--on-sale .price__sale{align-items:center;gap:11px;display:flex}.crs-product .price--on-sale .price__sale .price-item--sale{order:-1}.crs-product .price .price-item--sale,.crs-product .price .price-item--regular{color:var(--crs-accent-text);font-size:20px;font-weight:500}.crs-product .price__sale s.price-item--regular{color:var(--crs-muted);font-size:16px;font-weight:400}.crs-product .price__badge-sale{color:var(--crs-accent-text);font-family:var(--crs-body);letter-spacing:1px;background:#a725611a;border:1px solid #ffffff1a;border-radius:111px;padding:6px 8px;font-size:14px}.crs-options{flex-direction:column;gap:28px;display:flex}.crs-opt{flex-direction:column;gap:16px;display:flex}.crs-opt-head{justify-content:space-between;align-items:center;gap:12px;display:flex}.crs-opt-head__label{letter-spacing:.84px;text-transform:uppercase;color:var(--crs-muted);font-size:14px;font-weight:500}.crs-opt-head__value{color:var(--crs-accent-text);text-transform:none;letter-spacing:.28px}.crs-guide-link{cursor:pointer;font-family:var(--crs-body);letter-spacing:.28px;color:var(--crs-muted);background:0 0;border:0;padding:0;font-size:14px;text-decoration:underline}.crs-guide-link:hover{color:var(--crs-accent)}.crs-opt__list--swatches{grid-template-columns:repeat(6,1fr);gap:10px;display:grid}.crs-opt__list--sizes{flex-wrap:wrap;gap:10px;display:flex}.crs-swatch,.crs-size{cursor:pointer;border:1px solid var(--crs-line);font-family:var(--crs-body);color:var(--crs-ink);background:#fff;border-radius:6px;transition:border-color .15s,background-color .15s,box-shadow .15s}.crs-swatch{flex-direction:column;justify-content:flex-start;align-items:center;gap:8px;padding:12px 4px;display:flex}.crs-swatch__dot{border-radius:50%;width:32px;height:32px}.crs-swatch__label{letter-spacing:.28px;text-align:center;font-size:14px;line-height:20px}.crs-size{box-sizing:border-box;letter-spacing:.28px;flex:0 0 46px;justify-content:center;align-items:center;width:46px;min-width:46px;max-width:46px;height:46px;min-height:46px;padding:0;font-size:14px;display:flex}.crs-swatch:hover,.crs-size:hover{border-color:var(--crs-accent)}.crs-swatch.is-selected,.crs-size.is-selected{border-color:var(--crs-accent);box-shadow:inset 0 0 0 1px var(--crs-accent);background:var(--crs-accent-soft)}.crs-size.is-unavailable{color:#12121259;background:repeating-linear-gradient(-45deg,#fff,#fff 5px,#f4f4f4 5px 6px)}.crs-product .product-form__buttons quantity-input{display:none}.crs-product .product-form__buttons{width:100%;max-width:none;margin:0;display:block}.crs-product .product-form__submit{background:var(--crs-accent);color:#fff;width:100%;min-height:56px;font-family:var(--crs-body);letter-spacing:1.08px;text-transform:uppercase;box-shadow:none;border:0;border-radius:6px;justify-content:center;align-items:center;margin:0;padding:15px 16px;font-size:18px;font-weight:400;line-height:18px;display:flex}.crs-product .product-form__submit:hover:not([disabled]){background:#8e1e53}.crs-product .product-form__submit:after,.crs-product .product-form__submit:before,.crs-atc-price{display:none}.crs-product .crs-atc-price{margin-left:6px;display:inline}.crs-gift{background:#faf4f7;border:1px solid #eddee5;border-radius:8px;align-items:center;gap:14px;padding:15px 22px 15px 14px;display:flex;position:relative;overflow:hidden}.crs-gift[hidden]{display:none}.crs-gift__ribbon{text-align:center;text-transform:uppercase;color:#fff;letter-spacing:.8px;background:#a72561;width:92px;padding:4px 0;font-family:Jost;font-size:10px;font-style:normal;font-weight:500;line-height:9px;position:absolute;top:14px;left:-21px;transform:rotate(-37deg)}.crs-gift__image{object-fit:cover;background:#fff;border-radius:6px;flex:none;width:76px;height:76px}.crs-gift__body{flex:1;min-width:0}.crs-gift__label{color:#8a1538;letter-spacing:1.4px;text-transform:uppercase;font-family:Jost;font-size:12px;font-style:normal;font-weight:500;line-height:20px}.crs-gift__title{color:#1c1b1a;letter-spacing:-.4px;margin-top:2px;font-family:Forum;font-size:20px;font-style:normal;font-weight:400;line-height:26px}.crs-gift__desc{color:#6e6a67;margin-top:4px;font-family:Jost;font-size:12.5px;font-style:normal;font-weight:400;line-height:20px}.crs-gift__price{flex-direction:column;flex:none;align-items:flex-end;gap:3px;display:flex}.crs-gift__free{color:#289160;text-align:right;font-family:Jost;font-size:18px;font-style:normal;font-weight:400;line-height:24px}.crs-gift__was{color:#9a9693;text-align:right;font-family:Jost;font-size:16px;font-style:normal;font-weight:400;line-height:22px;text-decoration-line:line-through}.crs-trust{letter-spacing:.24px;color:var(--crs-ink);justify-content:center;align-items:flex-start;gap:16px;font-size:12px;line-height:30px;display:flex}.crs-trust__item{align-items:center;gap:10px;display:flex}.crs-trust__icon{object-fit:cover;flex:none;width:28px;height:28px;display:block}.crs-trust__icon--svg{width:20px;height:20px}.crs-trust__icon--svg svg{width:100%;height:100%;display:block}.crs-help{text-align:center;color:var(--crs-ink);font-size:15px;line-height:28.8px}.crs-help a{color:inherit;text-decoration:none}.crs-accord__item{border-top:1px solid var(--crs-line)}.crs-accord__item:last-child{border-bottom:1px solid var(--crs-line)}.crs-accord__head{cursor:pointer;width:100%;font-family:var(--crs-head);text-align:left;color:var(--crs-ink);background:0 0;border:0;justify-content:space-between;align-items:center;gap:16px;padding:22px 0;font-size:18px;display:flex}.crs-accord__sign{flex:none;width:14px;height:14px;position:relative}.crs-accord__sign:before,.crs-accord__sign:after{content:\"\";background:var(--crs-ink);height:1.5px;transition:transform .2s;position:absolute;top:50%;left:0;right:0}.crs-accord__sign:after{transform:rotate(90deg)}.crs-accord__sign svg{display:none}.crs-accord__head[aria-expanded=true] .crs-accord__sign:after{transform:rotate(0)}.crs-accord__panel{padding-bottom:24px}.crs-details__list{margin:0;padding:0 0 0 18px;list-style:none}.crs-details__list li{color:var(--crs-muted);font-size:15px;line-height:24px;position:relative}.crs-details__list li:before{content:\"·\";position:absolute;left:-14px}.crs-details__toggle{cursor:pointer;font-family:var(--crs-body);color:var(--crs-accent-text);background:0 0;border:0;margin-top:8px;padding:0;font-size:15px;text-decoration:underline}body.crs-pdp .crs-reels{display:none}.crs-pdp-reels{background:var(--crs-accent-soft);border-radius:8px;flex-direction:column;align-items:center;gap:20px;padding:24px 0;display:flex;overflow:hidden}.crs-pdp-reels__head{flex-direction:column;align-items:center;gap:14px;padding:0 32px;display:flex}.crs-pdp-reels__title{max-width:389px;font-family:var(--crs-head);color:var(--crs-accent);text-align:center;margin:0;font-size:30px;font-weight:400;line-height:34px}.crs-pdp-reels__subtitle{letter-spacing:.32px;max-width:374px;color:var(--crs-ink);text-align:center;margin:0;font-size:16px;line-height:24px}.crs-pdp-reels .swiper{z-index:1;margin-inline:auto;padding:0;list-style:none;display:block;position:relative;overflow:hidden}.crs-pdp-reels .swiper-wrapper{box-sizing:content-box;width:100%;height:100%;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);z-index:1;display:flex;position:relative}.crs-pdp-reels .swiper-slide{flex-shrink:0;transition-property:transform;display:block;position:relative}.crs-pdp-reels__strip{width:100%}.crs-pdp-reels__list{overflow:visible}.crs-pdp-reels .crs-reel{background:#a7256114;border-radius:4px;flex:none;width:155px;height:276px;position:relative;overflow:hidden}.crs-reel__poster,.crs-reel video{object-fit:cover;width:100%;height:100%;display:block}.crs-reel__poster{cursor:pointer}.crs-reel__poster img{object-fit:cover;width:100%;height:100%;display:block}.crs-reel video{display:none}.crs-reel.is-playing video{display:block}.crs-reel.is-playing .crs-reel__poster,.crs-reel.is-playing .crs-reel__play{display:none}.crs-reel video::-webkit-media-controls-panel{overflow:hidden}.crs-reel__play{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);cursor:pointer;background:#fff;border:0;border-radius:50%;width:44px;height:44px;padding:0;line-height:0;transition:transform .2s,opacity .2s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.crs-reel__play svg{width:44px;height:44px;display:block}.crs-reel__play svg path{fill:#191919}@media (hover:hover){.crs-reel__play:hover{opacity:.85;transform:translate(-50%,-50%)scale(1.08)}}.crs-reel__expand{color:#191919;cursor:pointer;z-index:2;background:#fff6;border:0;border-radius:4px;justify-content:center;align-items:center;width:32px;height:32px;padding:0;transition:background-color .2s,opacity .2s;display:flex;position:absolute;top:8px;right:8px}.crs-reel:not(.is-playing) .crs-reel__expand{opacity:0;pointer-events:none}.crs-reel__expand svg{width:100%;height:100%;display:block}.crs-reel__expand svg path{fill:none;stroke:currentColor}@media (hover:hover){.crs-reel__expand:hover{background:#fff}}.crs-pdp-reels__nav{justify-content:center;align-items:center;gap:10px;display:flex}.crs-pdp-reels__arrow{cursor:pointer;background:0 0;border:0;width:24px;height:24px;padding:0;line-height:0;transition:opacity .2s}.crs-pdp-reels__arrow svg{width:24px;height:24px;display:block}.crs-pdp-reels__arrow svg path{fill:none;stroke:#191919}.crs-pdp-reels__arrow--next svg{transform:scaleX(-1)}@media (hover:hover){.crs-pdp-reels__arrow:hover{opacity:.7}}.crs-pdp-reels__dots{align-items:center;gap:10px;display:flex}.crs-pdp-reels__dot{cursor:pointer;background:0 0;border:1px solid #191919;border-radius:50%;width:10px;height:10px;padding:0;transition:background-color .2s}.crs-pdp-reels__dot.is-active{background:#191919}.crs-lightbox{z-index:2147483646;opacity:0;pointer-events:none;justify-content:center;align-items:center;gap:64px;padding:15px;transition:opacity .35s;display:flex;position:fixed;inset:0}.crs-lightbox--open{opacity:1;pointer-events:auto}.crs-lightbox .crs-lightbox__overlay{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background:#0009;display:block;position:absolute;inset:0}.crs-lightbox__stage{line-height:0;position:relative}.crs-lightbox video{border-radius:4px;width:auto;max-width:100%;max-height:90vh;display:block}.crs-lightbox__spinner{z-index:10;border:4px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:60px;height:60px;display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.crs-lightbox__spinner.is-active{animation:.8s linear infinite crs-spin;display:block}@keyframes crs-spin{to{transform:translate(-50%,-50%)rotate(360deg)}}.crs-lightbox__arrow,.crs-lightbox__close{color:#fff;cursor:pointer;background:0 0;border:0;padding:0;line-height:0;transition:opacity .2s;position:relative}.crs-lightbox__arrow{flex:none;width:28px;height:49px}.crs-lightbox__arrow svg{width:28px;height:49px;display:block}.crs-lightbox__arrow--next svg{transform:scaleX(-1)}.crs-lightbox__close{z-index:2;width:24px;height:24px;position:absolute;top:-44px;right:0}.crs-lightbox__close svg{width:24px;height:24px;display:block}.crs-lightbox__arrow svg path,.crs-lightbox__close svg path{fill:none;stroke:currentColor}@media (hover:hover){.crs-lightbox__arrow:hover,.crs-lightbox__close:hover{opacity:.6}}@media screen and (width<=749px){.crs-gift__desc span{display:none}.installment.caption-large{margin-bottom:16px}shopify-payment-terms{text-align:center}.crs-lightbox{gap:0;padding:0}.crs-lightbox__stage{width:100%;height:100%}.crs-lightbox video{object-fit:contain;border-radius:0;width:100%;max-width:none;height:100%;max-height:none}.crs-lightbox__arrow{z-index:2;position:absolute;top:50%;transform:translateY(-50%)}.crs-lightbox__arrow--prev{left:8px}.crs-lightbox__arrow--next{right:8px}.crs-lightbox__close{top:8px;right:8px}}.crs-howto{background:var(--crs-accent-soft);border-radius:6px;padding:24px 32px;position:relative}.crs-howto__title{font-family:var(--crs-head);letter-spacing:normal;color:var(--crs-accent-text);margin:0 0 16px;font-size:24px;font-weight:400;line-height:32px}.crs-howto__made{border-top:1px solid #f1dee7;margin-top:24px;padding-top:24px}.crs-howto p{letter-spacing:.28px;color:#191919;margin:0 0 16px;font-size:14px;line-height:24px}.crs-howto__note .crs-inline-link{color:inherit;text-underline-position:from-font}.crs-step__kit{cursor:pointer;font:inherit;letter-spacing:inherit;color:inherit;text-underline-position:from-font;background:0 0;border:0;padding:0;text-decoration:underline}.crs-step__kit:focus:not(:focus-visible){box-shadow:none;outline:none}.crs-howto p:last-child{margin-bottom:0}.crs-howto .crs-howto__note{letter-spacing:.26px;color:#191919b3;margin:16px 0 0;font-size:13px;line-height:20px}.crs-steps{margin:0;padding:0;list-style:none}.crs-step{align-items:center;gap:16px;padding:4px 0;display:flex}.crs-step+.crs-step{margin-top:16px;position:relative}.crs-step__arrow{width:7px;height:16px;position:absolute;top:-16px;left:16px}.crs-step__arrow svg{display:block}.crs-step__num{width:40px;height:40px;font-family:var(--crs-num);letter-spacing:.6px;color:var(--crs-accent-text);background:#a725611a;border-radius:50%;flex:none;justify-content:center;align-items:center;font-size:24px;line-height:24px;display:flex}.crs-step__icon{flex:none;width:40px;height:40px;margin-left:16px;margin-right:-6px}.crs-step__icon svg{width:100%;height:100%}.crs-step__text{letter-spacing:.28px;color:#191919;font-size:14px;line-height:24px}.crs-step__text strong{font-weight:500}.crs-inline-link{cursor:pointer;font:inherit;color:var(--crs-accent-text);background:0 0;border:0;padding:0;text-decoration:underline}.crs-thumbs{scrollbar-width:none;gap:10px;margin-top:12px;display:none;overflow-x:auto}.crs-created-slot{list-style:none}.crs-pdp .crs-kit{z-index:4;font-family:var(--crs-body);position:absolute;bottom:16px;left:24px;right:24px}@media screen and (width>=750px){.crs-product .product__media-list>li:first-child{position:relative}.crs-product .product-media-container.constrain-height.media-fit-contain{width:100%}.crs-product .product-media-container.constrain-height .media{padding-top:var(--ratio-percent)}}.crs-kit__row{width:100%;height:54px;font:inherit;text-align:left;cursor:pointer;background:#fff;border:1px solid #a725612e;border-radius:6px;align-items:center;gap:12px;padding:6px 14px 6px 6px;display:flex;box-shadow:0 4px 2px #00000017,0 17px 3.5px #00000003}.crs-kit__thumb{background:#a725611a;border-radius:4px;flex:none;justify-content:center;align-items:center;width:40px;height:40px;display:flex}.crs-kit__pack,.crs-kit__chev{line-height:0;display:block}.crs-kit__text{flex-direction:column;flex:1;gap:1px;min-width:0;display:flex}.crs-kit__title{color:#191919;font-size:13px;font-weight:500;line-height:18px}.crs-kit__title b{text-transform:uppercase;color:var(--crs-accent-text);font-weight:600}.crs-kit__sub{color:#191919b3;font-size:12px;line-height:16px}.crs-kit__link{white-space:nowrap;color:var(--crs-accent-text);flex:none;align-items:center;gap:2px;font-size:13px;line-height:18px;display:flex}.crs-kit__link-text{text-underline-position:from-font;text-decoration:underline}.crs-kit__chev-lg{flex:none;line-height:0;display:none}.crs-kit__tip{z-index:5;font-family:var(--crs-body);filter:drop-shadow(0 8px 12px #330d1f29);letter-spacing:-.12px;color:#191919;background:#fff;border:1px solid #19191914;border-radius:8px;width:300px;max-width:100%;padding:14px 14px 14px 16px;font-size:12px;line-height:17px;display:none;position:absolute;bottom:calc(100% + 11px);right:0}.crs-kit__tip.is-open{align-items:flex-start;gap:8px;display:flex}.crs-kit__tip-text{flex:1;min-width:0}.crs-kit__close{cursor:pointer;background:0 0;border:0;flex:none;padding:0;line-height:0;display:none}.crs-kit__tip p{font-size:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0}.crs-kit__tip .crs-kit__tip-note{color:#5e5e5e;margin-top:8px}.crs-kit__tip-note strong{font-weight:500}.crs-kit__tip:after{content:\"\";background:#fff;border-bottom:1px solid #19191914;border-right:1px solid #19191914;width:11.3px;height:11.3px;margin-right:2.35px;position:absolute;bottom:-6px;right:61px;transform:rotate(45deg)}.crs-kit__tip--anchored{right:auto}.crs-kit__tip--anchored:after{right:auto;left:var(--arrow-x);margin:0 0 0 -5.65px}@media screen and (width<=749px){.crs-pdp .crs-kit{left:16px;right:16px}.crs-kit__row{padding:6px;box-shadow:7px 7px 3px #0000000d,3px 3px 2px #00000017}.crs-kit__link{display:none}.crs-kit__chev-lg{display:block}.crs-kit__tip:not(.crs-kit__tip--anchored){width:auto;left:0}.crs-kit__close{display:block}.crs-kit__tip:not(.crs-kit__tip--anchored):after{right:12px}}.crs-gallery__hint{z-index:1;font-family:var(--crs-body);color:#6e4e57;pointer-events:none;background:#faf4f7;border-radius:999px;padding:4px 10px;font-size:12px;display:none;position:absolute;top:12px;right:12px}.crs-gallery__arrow{z-index:3;cursor:pointer;background:0 0;border:0;justify-content:center;align-items:center;width:36px;height:44px;padding:0;line-height:0;transition:opacity .2s;display:none;position:absolute;top:50%;transform:translateY(-50%)}.crs-gallery__arrow--prev{left:0}.crs-gallery__arrow--next{right:0}.crs-gallery__arrow svg{width:14px;height:26px;display:block}.crs-gallery__arrow--next svg{transform:scaleX(-1)}.crs-gallery__arrow:disabled{opacity:.4;cursor:default}@media (hover:hover){.crs-gallery__arrow:not(:disabled):hover{opacity:.7}}@media screen and (width>=990px){.crs-product .product__media-list{gap:10px}.crs-product .product__media-list>li:first-child{flex:0 0 580px;max-width:580px;margin-inline:auto}.crs-product .product__media-list>.crs-created-slot{flex:0 0 520px;max-width:520px;margin-inline:auto}.crs-product .product__media-list>.product__media-item:not(:first-child){max-width:calc(50% - 5px)}}.crs-thumbs::-webkit-scrollbar{display:none}.crs-thumb{border:1px solid var(--crs-line);cursor:pointer;background:#fff;border-radius:6px;flex:none;width:72px;height:72px;padding:0;overflow:hidden}.crs-thumb.is-selected{border:2px solid var(--crs-accent)}.crs-thumb img{object-fit:cover;width:100%;height:100%;display:block}.crs-created{border-radius:6px;flex-direction:column;align-items:center;gap:24px;margin:0;padding:24px 32px;display:flex}.crs-created h3{width:100%;font-family:var(--crs-head);color:var(--crs-accent);text-align:center;margin:0;font-size:24px;line-height:32px}.crs-created .icons_box{justify-content:space-between;gap:0;width:100%;display:flex}.crs-created .cpi_icons{text-align:center;flex-direction:column;align-items:center;gap:4px;display:flex}.crs-created .cpi_icons img{box-sizing:border-box;background:var(--crs-accent-soft);border-radius:50%;width:48px;height:48px;padding:12px}.crs-created .cpi_icons p{font-family:var(--crs-body);color:#191919;white-space:nowrap;margin:0;font-size:14px;line-height:20px}.crs-created__caption{border-top:1px solid var(--crs-line);width:100%;font-family:var(--crs-body);letter-spacing:.84px;text-align:center;text-transform:uppercase;color:#191919;margin:0;padding-top:24px;font-size:14px;line-height:19.5px}body.crs-drawer-open{overflow:hidden}.crs-drawer{z-index:2147483646;font-family:var(--crs-body);position:fixed;inset:0}.crs-drawer .crs-drawer__overlay{background:#00000091;display:block;position:absolute;inset:0}.crs-drawer__dialog{background:#fff;flex-direction:column;gap:16px;width:420px;max-width:100%;height:100%;padding:20px;transition:transform .5s;display:flex;position:absolute;top:0;right:0;overflow-y:auto;transform:translate(100%)}.crs-drawer--open .crs-drawer__dialog{transform:translate(0)}.crs-drawer__head{flex-direction:row-reverse;flex:none;justify-content:space-between;align-items:flex-start;gap:16px;display:flex}.crs-drawer__title{font-family:var(--crs-body);color:var(--crs-ink);margin:15px 0 0;font-size:22px;font-weight:500;line-height:28px}.crs-drawer__close{cursor:pointer;width:25px;height:25px;color:var(--crs-ink);background:0 0;border:0;border-radius:50%;flex:none;justify-content:center;align-items:center;padding:0;display:flex}.crs-drawer__close svg{width:16px;height:16px;display:block}.crs-drawer__close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}.crs-drawer__body,.crs-drawer__body>.crs-rte,.crs-drawer__body>.crs-remote,.crs-drawer__body>.crs-remote>.crs-rte{flex-direction:column;gap:16px;display:flex}.crs-drawer__body>*,.crs-drawer__body>.crs-rte>*,.crs-drawer__body>.crs-remote>*,.crs-drawer__body>.crs-remote>.crs-rte>*{margin:0}.crs-drawer__intro{flex-direction:column;gap:12px;display:flex}.crs-drawer__intro p{color:#121212bf;margin:0;font-size:15px;line-height:24px}.crs-note{background:var(--crs-accent-tint);color:var(--crs-accent-text);border-radius:8px;margin-bottom:20px;padding:16px;font-size:15px;font-style:italic;line-height:22px}.crs-rte h3,.crs-rte__h{font-family:var(--crs-head);color:var(--crs-ink);margin:20px 0 6px;font-size:20px}.crs-rte p,.crs-rte li{color:var(--crs-muted);font-size:15px;line-height:24px}.crs-rte a{color:var(--crs-accent-text)}.crs-drawer .crs-note{color:#a72561;background:#a725610d;margin:0;padding:8px 12px;font-size:14px;line-height:18px}.crs-drawer .crs-rte h3,.crs-drawer .crs-rte__h{font-family:var(--crs-body);color:#000;margin:0;font-size:16px;font-weight:500;line-height:20.8px}.crs-drawer .crs-rte p,.crs-drawer .crs-rte li,.crs-drawer .crs-accord__panel p,.crs-drawer .crs-accord__panel li{color:#121212bf;font-size:15px;line-height:24px}.crs-drawer .crs-accord__item{border-top:1px solid #c2bfbf}.crs-drawer .crs-accord__item:last-child{border-bottom:0}.crs-drawer .crs-accord__sign{color:#000;width:20px;height:20px}.crs-drawer .crs-accord__sign:before,.crs-drawer .crs-accord__sign:after{display:none}.crs-drawer .crs-accord__sign svg{width:20px;height:20px;transition:transform .2s;display:block}.crs-drawer .crs-accord__sign svg path{fill:none;stroke:currentColor}.crs-drawer .crs-accord__head[aria-expanded=true] .crs-accord__sign svg{transform:rotate(180deg)}.crs-drawer .crs-accord__head{font-family:var(--crs-body);color:#000;gap:10px;padding:15px 0;font-size:16px;font-weight:500;line-height:20.8px}body.crs-pdp .section-header.cust_noti{z-index:100}body.crs-pdp:has(.section-header.cust_noti){overflow:hidden}body.crs-pdp #custom_notifications{font-family:var(--crs-body)}body.crs-pdp #custom_notifications .modal-header-amor h3{font-family:var(--crs-body);color:var(--crs-ink);margin:15px 0 16px;font-size:22px;font-weight:500;line-height:28px}body.crs-pdp #custom_notifications .modal-header-amor button.close{width:25px;height:25px;color:var(--crs-ink);background:0 0;border:0;border-radius:50%;justify-content:center;align-items:center;padding:0;display:flex}body.crs-pdp #custom_notifications .modal-header-amor button.close svg{width:16px;height:16px;display:block}body.crs-pdp #custom_notifications .modal-header-amor button.close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}body.crs-pdp #custom_notifications .header-description,body.crs-pdp #custom_notifications .panel-body p.fs14{color:#121212bf;font-size:15px;line-height:24px}body.crs-pdp #custom_notifications .accord{margin-top:16px}body.crs-pdp #custom_notifications .accord-heading{font-family:var(--crs-body);color:#000;font-size:16px;font-weight:500;line-height:20.8px}@media screen and (width<=749px){product-info{padding-top:0!important}.crs-pdp section.crs-info.product__info-container{padding-top:22px}.crs-info .fera-storeReviewsSummary-verifiedBadge-preTextNumber{margin-left:2px}.crs-pdp .crs-info>.product__title{text-align:center;gap:7px}.crs-product .price{justify-content:center;gap:12px}.crs-info .fera-storeReviewsSummary-content{justify-content:center}.crs-info .product__title h1{letter-spacing:normal;font-size:28px;line-height:38px}.crs-pdp .crs-info>[id^=price-]{margin-top:9px;margin-bottom:-5px}.crs-product .price .price-item--sale,.crs-product .price .price-item--regular{letter-spacing:normal;margin-right:0;font-size:18px;line-height:24px}.crs-product .price__sale s.price-item--regular{letter-spacing:normal;font-size:15px;line-height:20px}.crs-product .price__badge-sale{color:#289160;text-align:center;letter-spacing:1px;background:#25a7451a;border:1px solid #ffffff1a;border-radius:111px;font-family:Jost;font-size:12px;font-style:normal;font-weight:400;line-height:13px}.crs-media{flex-direction:column;display:flex}.crs-created{background:var(--crs-accent-tint);background:#ff99c90d;border-top:1px solid #a725611f;border-bottom:1px solid #a725611f;border-radius:0;order:4;gap:12px;padding:14px 16px;margin:0 -1.5rem!important}.crs-created__caption{color:#a72561;letter-spacing:.6px;text-transform:uppercase;border:none;padding-top:0;font-size:10px;font-weight:400;line-height:18px}.crs-created h3{color:#191919;letter-spacing:.72px;text-transform:uppercase;font-family:Jost;font-size:12px;font-weight:400;line-height:19.5px}.crs-created .icons_box{justify-content:space-between;gap:0;padding:0}.crs-created .cpi_icons img{width:42px;height:42px;padding:10px}.crs-created .cpi_icons p{white-space:nowrap;font-size:12px}.crs-media .product__media-list.slider--mobile{padding-inline:0;scroll-padding-left:0}.crs-media .product__media-list.slider--mobile>.product__media-item{width:100%;max-width:100%}.crs-media .product__media-list.slider--mobile .product-media-container.constrain-height{width:100%}.crs-media slider-component{position:relative}.crs-gallery__hint{display:block}.crs-gallery__arrow{display:flex}.crs-thumbs{gap:8px;margin-top:8px;display:flex}.crs-thumb{width:48px;height:48px}.crs-pdp .crs-info>.crs-options{border:none;margin-top:24px;padding-top:0}.crs-options{gap:32px}.crs-opt-head__label{line-height:19.5px}.crs-opt-head__value{letter-spacing:.24px;color:var(--crs-accent);font-size:12px;line-height:20px}.crs-guide-link{letter-spacing:.26px;font-size:13px;line-height:14px}.crs-opt__list--swatches{scrollbar-width:none;gap:8px;margin:0 -1.5rem;padding:2px 1.5rem;display:flex;overflow-x:auto}.crs-opt__list--sizes{scrollbar-width:none;flex-wrap:nowrap;gap:8px;margin:0 -1.5rem;padding:2px 1.5rem;overflow-x:auto}.crs-opt__list--swatches::-webkit-scrollbar{display:none}.crs-opt__list--sizes::-webkit-scrollbar{display:none}.crs-swatch{flex:none;width:78px;padding:12px 4px}.crs-swatch__label{letter-spacing:.24px;font-size:12px;line-height:18px}.crs-accord__item{border-top:0}.crs-gift{padding:15px 14px}.crs-pdp .crs-info>.crs-trust{margin-top:16px}.crs-trust{gap:16px}.crs-trust__icon{width:26px;height:26px}.crs-pdp .crs-info>.crs-help{margin:16px -1.5rem 0;padding:16px 1.5rem 0}.crs-help{color:var(--crs-muted);font-size:14px}.crs-help a{color:#575757}.crs-pdp .crs-info>.crs-details{margin-top:16px}.crs-accord__head{font-family:var(--crs-body);letter-spacing:.3px;padding:18px 0;font-size:15px}.crs-accord__panel{padding-bottom:18px}.crs-details__list li{letter-spacing:normal;color:#6b5f64;font-size:14px;line-height:23.8px}.crs-details__toggle{color:var(--crs-accent);font-size:14px;font-weight:500}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto{margin-inline:-1.5rem}.crs-pdp .crs-info>.crs-pdp-reels,.crs-pdp .crs-info>.crs-howto,.crs-pdp .crs-info>.crs-bottom{margin-top:16px}.crs-pdp-reels,.crs-howto{border-radius:0}.crs-pdp-reels__head{gap:8px;padding:0 1.5rem}.crs-pdp-reels__title{letter-spacing:normal;max-width:none;font-size:24px;line-height:30px}.crs-pdp-reels__subtitle{letter-spacing:.28px;max-width:289px;font-size:14px}.crs-howto{background:#f8f2f5;padding:24px 16px}.crs-howto__title{margin-bottom:20px}.crs-howto__made .crs-howto__title{margin-bottom:16px}.crs-howto .crs-howto__note{letter-spacing:.24px;margin-top:20px;font-size:12px}.crs-howto__made{margin-top:20px;padding-top:20px}.crs-step__icon{margin-left:8px;margin-right:0}body.crs-pdp #custom_notifications{width:100%!important}}#satcb_bar{display:none!important}body:has(.crs-sticky.is-visible:not(.is-suspended)) :is(#chat-button,#mount-floating-engagement-widget){bottom:100px!important}body:has(.crs-sticky.has-popover) :is(#chat-button,#mount-floating-engagement-widget){visibility:hidden!important}@media (width<=768px){body:has(.crs-sticky.is-visible:not(.is-suspended)) :is(#chat-button,#mount-floating-engagement-widget){bottom:90px!important}}@media (width<=380px){.customProductImage .cpi_icons{max-height:initial!important}}.crs-sticky{z-index:2147483620;background:#fff;border-top:1px solid #0000001a;transition:bottom .25s;position:fixed;bottom:-81px;left:0;right:0}.crs-sticky.is-visible{bottom:0}.crs-sticky.is-visible.is-suspended{bottom:-81px}.crs-sticky .crs-sticky__backdrop{display:none;position:fixed;inset:0 0 81px}.crs-sticky.has-popover .crs-sticky__backdrop{display:block}.crs-sticky__inner{align-items:center;gap:12px;max-width:1277px;margin:0 auto;padding:12px 16px;display:flex}.crs-sticky__thumb{object-fit:cover;border-radius:6px;flex:none;width:60px;height:60px}.crs-sticky__title{white-space:nowrap;text-overflow:ellipsis;min-width:0;font-family:var(--crs-head);color:var(--crs-ink);flex:1 0 0;font-size:28px;overflow:hidden}.crs-sticky__controls{flex:2;justify-content:flex-end;align-items:center;gap:12px;display:flex}.crs-sticky__pickers{align-items:center;gap:12px;display:flex}.crs-sticky__picker{position:relative}.crs-sticky__trigger{box-sizing:border-box;border:1px solid var(--crs-line);cursor:pointer;height:56px;font-family:var(--crs-body);letter-spacing:.28px;color:var(--crs-ink);background:#fff;border-radius:6px;justify-content:center;align-items:center;gap:12px;padding:0 12px;font-size:14px;line-height:18px;transition:border-color .15s;display:flex}.crs-sticky__trigger:hover{border-color:var(--crs-accent)}.crs-sticky__trigger.is-open{border-color:var(--crs-accent);box-shadow:inset 0 0 0 1px var(--crs-accent)}.crs-sticky__trigger--swatch{text-align:left;justify-content:flex-start;min-width:120px}.crs-sticky__trigger--size{width:56px;min-width:56px;padding:0}.crs-sticky__dot{border-radius:50%;flex:none;width:32px;height:32px}.crs-sticky__trigger-label{text-overflow:ellipsis;overflow:hidden}.crs-sticky__popover{background:#fff;border:1px solid #0000001a;width:max-content;max-width:min(560px,100vw - 32px);max-height:70vh;padding:16px;position:absolute;bottom:calc(100% + 14px);right:0;box-shadow:0 -8px 24px #0000001f}.crs-sticky__close{display:none}.crs-sticky__cta{background:var(--crs-accent);color:#fff;cursor:pointer;min-width:220px;max-width:470px;height:56px;font-family:var(--crs-body);letter-spacing:1.08px;text-transform:uppercase;white-space:nowrap;border:0;border-radius:6px;flex:1 0 0;justify-content:center;align-items:center;gap:5px;padding:0 24px;font-size:18px;display:flex;overflow:hidden}.crs-sticky__cta:hover:not([disabled]){background:#8e1e53}.crs-sticky__cta[disabled]{opacity:.5;cursor:not-allowed}@media screen and (width<=749px){.crs-sticky__thumb,.crs-sticky__title{display:none}.crs-sticky__inner,.crs-sticky__controls,.crs-sticky__pickers{gap:8px}.crs-sticky__controls{width:100%}.crs-sticky__trigger--swatch{justify-content:center;width:110px;min-width:110px;padding:0 8px}.crs-sticky__dot{width:28px;height:28px}.crs-sticky__cta{letter-spacing:.84px;flex-direction:column;gap:0;min-width:0;padding:0 12px;font-size:14px;line-height:22px}.crs-sticky__cta-sep{display:none}.crs-sticky__popover{border-left:0;border-right:0;border-radius:0;width:100%;max-width:100%;max-height:60vh;padding:8px 1.5rem 20px;position:fixed;bottom:81px;left:0;right:0}.crs-sticky__close{z-index:1;cursor:pointer;color:#fff;background:0 0;border:0;justify-content:center;align-items:center;width:32px;height:32px;margin:0 -8px 0 auto;padding:0;display:flex;position:absolute;bottom:calc(100% + 8px);right:16px}.crs-sticky__close svg{width:14px;height:14px;display:block}.crs-sticky__close svg path{fill:none;stroke:currentColor;stroke-width:1.6px}.crs-sticky .crs-sticky__backdrop{background:#00000091}body.crs-pdp:has(.crs-sticky.has-popover){overflow:hidden}}.installment.caption-large{margin-top:16px}.crs-pdp .crs-recs .fera-reviews-header,.crs-recs .related-products__heading{border-bottom:1px solid #ddd;margin:0 0 32px;padding:0 0 32px}.crs-pdp .crs-recs .fera-reviews-header-title,.crs-recs .related-products__heading{font-family:var(--crs-head);letter-spacing:normal;color:#000;text-align:center;font-size:36px;font-weight:400;line-height:50.4px}.crs-pdp .crs-recs .fera-reviews-header-row2{margin-top:12px}.crs-pdp .crs-recs .fera-reviews-header-row2 .fera-row,.crs-pdp .crs-recs .fera-reviews-header-summary{justify-content:center;align-items:center;display:flex}.crs-pdp .crs-recs .fera-reviews-header-summary{gap:5px}.crs-pdp .crs-recs .fera-reviews-header-summary-rating-container{gap:12px}.crs-pdp .crs-recs .fera-reviews-header .fera-reviews-avgRating-number{font-family:var(--crs-body);letter-spacing:.6px;color:#191919;margin:0;font-size:20px;font-weight:400;line-height:28px}.crs-pdp .crs-recs .fera-reviews-header .fera-stars,.crs-pdp .crs-recs .fera-reviews-header .fera-stars-rating,.crs-pdp .crs-recs .fera-reviews-header .fera-stars-bg{letter-spacing:2.7px;font-size:18px;line-height:18px}.crs-pdp .crs-recs .fera-reviews-header .fera-stars{margin-right:-2.7px}.crs-pdp .crs-recs .fera-reviews-header .fera-reviews-count-str{font-family:var(--crs-body);letter-spacing:.6px;color:#00000080;margin:0;font-size:20px;line-height:16px}.crs-pdp .crs-recs .fera-review-date-val,.crs-pdp .crs-recs .fera-review-heading,.crs-pdp .crs-recs .fera-review-body,.crs-pdp .crs-recs .fera-review-customer-name,.crs-pdp .crs-recs .fera-review-product-link,.crs-pdp .crs-recs .fera-review-product-name,.crs-pdp .crs-recs .fera-reviews-showMore-btn{font-family:var(--crs-body)}.crs-pdp .crs-recs .fera-review-heading{color:#191919;font-size:18px;font-weight:500;line-height:25.2px}.crs-pdp .crs-recs .fera-review-body{color:#6b5f64}.crs-pdp .crs-recs .fera-review-customer-name,.crs-pdp .crs-recs .fera-review-product-text-container .fera-review-product-link{font-weight:500}.crs-pdp .crs-recs .fera-review-product-text-container .fera-review-product-link{line-height:22.4px}.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:minmax(0,1fr);gap:18px;display:grid;height:auto!important}.crs-pdp .crs-recs .fera-masonry-items>.fera-review{flex-direction:column;display:flex;position:static;width:auto!important;transform:none!important}.crs-pdp .crs-recs .fera-review-media{flex:none}.crs-pdp .crs-recs .fera-review-product{margin-top:auto}.crs-pdp .crs-recs .fera-review.crs-recs-overflow{display:none}@media screen and (width>=750px){.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (width>=990px){.crs-pdp .crs-recs .fera-masonry-items{grid-template-columns:repeat(4,minmax(0,1fr))}}@media screen and (width>=750px){.crs-pdp .crs-recs .fera-reviews-footer{margin-top:32px}}.crs-pdp .crs-recs .card__inner{border-radius:12px 12px 0 0;overflow:hidden}.crs-recs .card__inner .card__content{padding:9px}.crs-recs .card__inner .card__badge{grid-row:1;place-self:start end}.crs-recs .badge{color:#fff;font-family:var(--crs-body);letter-spacing:1px;text-transform:uppercase;background:#cb4583c9;border:1px solid #ffffff1a;border-radius:111px;padding:6px 12px;font-size:13px;line-height:13px}.crs-recs .card>.card__content{padding:17px 0 0}.crs-recs .card>.card__content .card__information{padding:0}.crs-recs .card>.card__content .card__heading>a{font-family:var(--crs-head);letter-spacing:.6px;color:var(--crs-ink);font-size:20px;line-height:24px}.crs-recs .price{font-family:var(--crs-body)}.crs-pdp .crs-recs .card-information>.price{margin-top:9px!important}.crs-pdp .crs-recs .price--on-sale .price__sale{align-items:baseline;gap:8px;display:flex}.crs-recs .price__sale>span:has(>s){order:1}.crs-recs .price-item{letter-spacing:normal;color:var(--crs-ink);font-size:16px;line-height:24px}.crs-recs .price__sale s.price-item--regular{color:#121212bf;font-size:13px;line-height:19.5px}@media screen and (width<=749px){.crs-pdp .crs-recs .fera-reviews-header,.crs-recs .related-products__heading{margin-bottom:24px;padding-bottom:24px}.crs-pdp .crs-recs .fera-reviews-header-title,.crs-recs .related-products__heading{font-size:28px;line-height:38px}.crs-recs .card>.card__content .card__heading>a{font-size:18px;line-height:22px}}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) :is(.cart-item__quantity,.cart-item-trash-wrapper,.variant-sale-badge-wrapper,.variant-warranty-message){display:none}cart-drawer .drawer-cart-items{flex-direction:column;display:flex}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]){order:1}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-item-title-wrapper{max-width:181px;font-size:0;line-height:0}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-item-title-wrapper a{font-size:0}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-item-title-wrapper a:before{content:\"Collection kit for sending your inclusions\";font-size:15px;line-height:18px}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-item-title-wrapper a:after{content:\"FREE\";letter-spacing:.6px;vertical-align:1px;color:#fff;background:#2f7d52;border-radius:4px;margin-left:6px;padding:2px 6px;font-size:10px;line-height:normal;display:inline-block}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-variant_details:before{content:\"Ships in the US within 24h\";color:#121212;white-space:nowrap;font-size:12px;line-height:normal}cart-drawer .single-cart-item:has(a[href*=\"/products/collection-kit\"]) .cart-variant_price{font-size:14px;font-weight:700}";

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
	var fetchVariantId = (handle) => fetch(`/products/${handle}.js`).then((r) => r.json()).then((p) => p.variants[0].id);
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
	var flag_usa_default = "data:image/png;base64,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";

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
//#region src/components/cartDrawer.ts
	var STEPS = [
		["Place your order", " and we’ll mail you a free Collection Kit within 24 hours. Outside the US, you’ll receive mailing instructions instead."],
		["Send", " us a small amount of your chosen inclusion or a combination of materials such as ashes, flowers, hair, fur or fabric, using the prepaid return label. Anything unused will be returned to you."],
		["Receive", " your handcrafted memorial jewelry within 6–8 weeks."],
		["Enjoy", " wearing your memorial jewelry, covered by a Lifetime Warranty, knowing you’re among 10,000+ happy customers."]
	];
	var dressCartDrawer = () => {
		const dress = () => {
			const content = document.querySelector("cart-drawer .new-cart-content");
			if (!content || content.dataset.crsKit) return;
			content.dataset.crsKit = "1";
			content.querySelectorAll("p").forEach((p, i) => {
				const [highlight, rest] = STEPS[i];
				p.querySelector(".new-cart-highlight").textContent = highlight;
				p.lastChild.textContent = rest;
			});
		};
		new MutationObserver(dress).observe(document.querySelector("cart-drawer"), {
			childList: true,
			subtree: true
		});
		dress();
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
//#region src/icons/kit-package.svg?raw
	var kit_package_default = "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Frame\">\n<path id=\"Vector\" d=\"M10.0833 19.9192C10.362 20.0801 10.6782 20.1648 11 20.1648C11.3218 20.1648 11.638 20.0801 11.9167 19.9192L18.3333 16.2525C18.6118 16.0918 18.843 15.8606 19.0039 15.5823C19.1648 15.3039 19.2497 14.9882 19.25 14.6667V7.33333C19.2497 7.01184 19.1648 6.69608 19.0039 6.41773C18.843 6.13939 18.6118 5.90825 18.3333 5.7475L11.9167 2.08083C11.638 1.91992 11.3218 1.83521 11 1.83521C10.6782 1.83521 10.362 1.91992 10.0833 2.08083L3.66667 5.7475C3.38824 5.90825 3.15698 6.13939 2.99609 6.41773C2.8352 6.69608 2.75033 7.01184 2.75 7.33333V14.6667C2.75033 14.9882 2.8352 15.3039 2.99609 15.5823C3.15698 15.8606 3.38824 16.0918 3.66667 16.2525L10.0833 19.9192Z\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#A72561\"/>\n<path id=\"Vector_2\" d=\"M11 20.1667V11\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#A72561\"/>\n<path id=\"Vector_3\" d=\"M3.025 6.41667L10.0861 10.7562C10.3641 10.9161 10.6793 11.0002 11 11.0002C11.3207 11.0002 11.6359 10.9161 11.9139 10.7562L18.975 6.41667\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#A72561\"/>\n<path id=\"Vector_4\" d=\"M6.875 3.91417L15.125 8.635\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#A72561\"/>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/kit-chevron.svg?raw
	var kit_chevron_default = "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"13\" height=\"13\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Frame\">\n<path id=\"Vector\" d=\"M4.875 9.75L8.125 6.5L4.875 3.25\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#A72561\"/>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/kit-chevron-lg.svg?raw
	var kit_chevron_lg_default = "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Frame\" opacity=\"0.5\">\n<path id=\"Vector\" d=\"M6 12L10 8L6 4\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#191919\"/>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/kit-close.svg?raw
	var kit_close_default = "<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"Close\" opacity=\"0.6\">\n<path id=\"Vector\" d=\"M12 4L4 12\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#191919\"/>\n<path id=\"Vector_2\" d=\"M4 4L12 12\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#191919\"/>\n</g>\n</svg>\n";

//#endregion
//#region src/components/kit.tsx
	var Icon$2 = (cls, svg) => {
		const el = document.createElement("span");
		el.className = cls;
		el.setAttribute("aria-hidden", "true");
		el.innerHTML = inlineSvg(svg);
		return el;
	};
	var tips = 0;
	var attachKitTip = (trigger, host, anchored = false, onClose) => {
		const id = `crs-kit-tip-${tips++}`;
		const tip = /* @__PURE__ */ jsxs("div", {
			class: `crs-kit__tip${anchored ? " crs-kit__tip--anchored" : ""}`,
			id,
			role: "tooltip",
			children: [/* @__PURE__ */ jsxs("div", {
				class: "crs-kit__tip-text",
				children: [/* @__PURE__ */ jsx("p", { children: "The kit includes everything you need to collect and send us your inclusions (ashes, hair, flowers, and more) to be fused into your jewelry: instructions, packing materials, and a prepaid return label." }), /* @__PURE__ */ jsxs("p", {
					class: "crs-kit__tip-note",
					children: [/* @__PURE__ */ jsx("strong", { children: "Available in the US only." }), " For orders outside the US, we’ll provide mailing instructions instead."]
				})]
			}), /* @__PURE__ */ jsx("button", {
				class: "crs-kit__close",
				type: "button",
				"aria-label": "Close"
			})]
		});
		tip.querySelector(".crs-kit__close").innerHTML = inlineSvg(kit_close_default);
		trigger.setAttribute("aria-expanded", "false");
		trigger.setAttribute("aria-controls", id);
		host.append(tip);
		const place = () => {
			const box = host.getBoundingClientRect();
			const at = trigger.getClientRects()[0];
			const width = Math.min(300, box.width - 32);
			const center = at.left - box.left + at.width / 2;
			const left = Math.min(Math.max(center - width / 2, 16), box.width - width - 16);
			tip.style.width = `${width}px`;
			tip.style.left = `${left}px`;
			tip.style.bottom = `${box.bottom - at.top + 11}px`;
			tip.style.setProperty("--arrow-x", `${center - left}px`);
		};
		const set = (open) => {
			tip.classList.toggle("is-open", open);
			trigger.setAttribute("aria-expanded", String(open));
			if (open && anchored) place();
		};
		tip.querySelector(".crs-kit__close").addEventListener("click", () => {
			set(false);
			onClose?.();
		});
		trigger.addEventListener("click", () => set(!tip.classList.contains("is-open")));
		document.addEventListener("click", (e) => {
			if (!tip.contains(e.target) && !trigger.contains(e.target)) set(false);
		});
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") set(false);
		});
	};
	var KitRow = () => {
		const link = /* @__PURE__ */ jsx("span", {
			class: "crs-kit__link",
			children: /* @__PURE__ */ jsx("span", {
				class: "crs-kit__link-text",
				children: "What is it for?"
			})
		});
		link.append(Icon$2("crs-kit__chev", kit_chevron_default));
		const row = /* @__PURE__ */ jsxs("button", {
			class: "crs-kit__row",
			type: "button",
			children: [/* @__PURE__ */ jsx("span", { class: "crs-kit__thumb" }), /* @__PURE__ */ jsxs("span", {
				class: "crs-kit__text",
				children: [/* @__PURE__ */ jsxs("span", {
					class: "crs-kit__title",
					children: [/* @__PURE__ */ jsx("b", { children: "Free" }), " Collection Kit to send your inclusions"]
				}), /* @__PURE__ */ jsx("span", {
					class: "crs-kit__sub",
					children: "Ships in the US within 24h · Prepaid return label"
				})]
			})]
		});
		row.querySelector(".crs-kit__thumb").append(Icon$2("crs-kit__pack", kit_package_default));
		row.append(link, Icon$2("crs-kit__chev-lg", kit_chevron_lg_default));
		const root = /* @__PURE__ */ jsx("div", { class: "crs-kit" });
		root.append(row);
		attachKitTip(row, root, false, () => pushData("exp_pdp_gallery_kit_close", "Collection kit info box", "click", "Image Gallery"));
		row.addEventListener("click", () => pushData("exp_pdp_gallery_kit_click", "Collection kit info box", "click", "Image Gallery"));
		return root;
	};

//#endregion
//#region src/components/gallery.tsx
	var file = (src) => src.split("/").pop().split("?")[0];
	var CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
  <path d="M13.0605 0.530273L1.06055 12.5303L13.0605 24.5303" stroke="black" stroke-opacity="0.17" stroke-width="1.5"/>
</svg>`;
	var Gallery = (currentSrc, created, showKit) => {
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
		const kit = showKit ? KitRow() : null;
		let kitTracked = false;
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
		const placeKit = () => {
			const ul = list();
			if (!kit || !ul) return;
			const host = window.matchMedia("(min-width: 750px)").matches ? slides()[0] : ul.parentElement;
			if (host && kit.parentElement !== host) host.append(kit);
			if (kit.isConnected && !kitTracked) {
				kitTracked = true;
				visibilityOfTime(".crs-kit", "exp_pdp_gallery_kit_view", "Image Gallery", "Collection kit info box");
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
			placeKit();
			const src = currentSrc();
			if (ul === lastList && src === lastSrc) return;
			const rebuilt = ul !== lastList;
			lastList = ul;
			lastSrc = src;
			hoist();
			placeKit();
			buildThumbs();
			select(0);
			if (!hint.isConnected) ul.parentElement?.append(hint, prev, next);
			if (!strip.isConnected) ul.parentElement?.after(strip);
			if (rebuilt) watchList(ul);
		};
		window.addEventListener("resize", placeCreated);
		window.addEventListener("resize", placeKit);
		return { sync };
	};

//#endregion
//#region src/icons/step-ring.svg?raw
	var step_ring_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"translate(3 3)\">\n<g id=\"diamond-ring.svg\">\n<path id=\"Vector\" d=\"M5.26734 4.88596H6.31477C6.58983 4.88596 6.81278 4.66304 6.81278 4.38792C6.81278 4.1128 6.58983 3.88987 6.31477 3.88987H5.26734C4.99229 3.88987 4.7693 4.1128 4.7693 4.38792C4.7693 4.66304 4.99229 4.88596 5.26734 4.88596Z\" fill=\"black\"/>\n<path id=\"Vector_2\" d=\"M6.7783 6.00046L6.0376 6.74109C5.8431 6.93559 5.8431 7.25098 6.0376 7.44539C6.13482 7.5427 6.26232 7.59132 6.38976 7.59132C6.5172 7.59132 6.6447 7.5427 6.74191 7.44546L7.48258 6.70483C7.67713 6.51033 7.67713 6.19496 7.48258 6.00052C7.28817 5.80602 6.97279 5.80609 6.7783 6.00046Z\" fill=\"black\"/>\n<path id=\"Vector_3\" d=\"M6.77515 2.774C6.87235 2.87122 6.99985 2.91982 7.12728 2.91982C7.25472 2.91982 7.38222 2.87122 7.47946 2.77393C7.67394 2.57942 7.67394 2.26406 7.47946 2.06963L6.73876 1.329C6.54425 1.13456 6.22889 1.13449 6.03445 1.32906C5.83995 1.52357 5.83995 1.83893 6.03445 2.03337L6.77515 2.774Z\" fill=\"black\"/>\n<path id=\"Vector_4\" d=\"M27.1875 4.38794C27.1875 4.66306 27.4104 4.88598 27.6855 4.88598H28.733C29.0081 4.88598 29.231 4.66306 29.231 4.38794C29.231 4.11282 29.0081 3.88989 28.733 3.88989H27.6855C27.4104 3.88989 27.1875 4.11288 27.1875 4.38794Z\" fill=\"black\"/>\n<path id=\"Vector_5\" d=\"M27.2575 7.44551C27.3548 7.54275 27.4823 7.59131 27.6098 7.59131C27.7372 7.59131 27.8647 7.54275 27.962 7.44551C28.1565 7.25097 28.1565 6.93565 27.962 6.74114L27.2214 6.00044C27.0267 5.80601 26.7115 5.80601 26.517 6.00044C26.3225 6.19501 26.3225 6.51031 26.517 6.70481L27.2575 7.44551Z\" fill=\"black\"/>\n<path id=\"Vector_6\" d=\"M26.8728 2.91989C27.0002 2.91989 27.1277 2.87127 27.2249 2.77405L27.9656 2.03342C28.1602 1.83892 28.1602 1.52356 27.9657 1.32912C27.7712 1.13468 27.4558 1.13455 27.2613 1.32905L26.5207 2.06968C26.3261 2.26419 26.3261 2.57955 26.5206 2.77399C26.6179 2.8712 26.7453 2.91989 26.8728 2.91989Z\" fill=\"black\"/>\n<path id=\"Vector_7\" d=\"M16.9995 11.0825C11.4653 11.0825 6.96289 15.5849 6.96289 21.119C6.96289 24.1403 8.30575 26.9722 10.6472 28.8886C10.8601 29.0627 11.1739 29.0315 11.3481 28.8186C11.5222 28.6058 11.4909 28.292 11.2781 28.1178C9.16881 26.3913 7.95902 23.8403 7.95902 21.1189C7.95902 16.134 12.0145 12.0785 16.9995 12.0785C21.9844 12.0785 26.0399 16.134 26.0399 21.1189C26.0399 26.1039 21.9844 30.1595 16.9995 30.1595C15.555 30.1595 14.1731 29.8275 12.8923 29.1729C12.6475 29.0479 12.3474 29.1448 12.2221 29.3898C12.097 29.6347 12.1941 29.9347 12.439 30.06C13.8615 30.787 15.3958 31.1556 16.9995 31.1556C22.5336 31.1556 27.036 26.6532 27.036 21.119C27.036 15.5849 22.5337 11.0825 16.9995 11.0825Z\" fill=\"black\"/>\n<path id=\"Vector_8\" d=\"M20.703 8.78118L24.4534 4.7254C24.455 4.72361 24.4562 4.72155 24.4578 4.71969C24.6092 4.55115 24.624 4.3099 24.5119 4.12728C24.5108 4.12542 24.5101 4.12343 24.5089 4.12157L23.7686 2.94791C23.6218 2.71508 23.3142 2.64562 23.0817 2.79232C22.849 2.93908 22.7793 3.24667 22.9261 3.47929L23.1846 3.88921H20.3567L19.5911 0.996091H21.3595L21.8513 1.77557C21.998 2.00819 22.3057 2.07779 22.5382 1.93103C22.7708 1.78427 22.8405 1.47674 22.6937 1.24405L22.0554 0.232289C21.9642 0.0876561 21.805 0 21.6342 0H18.9441H15.0564H12.3664C12.1953 0 12.0363 0.0876561 11.9451 0.232289L9.4916 4.12151C9.37294 4.30977 9.39245 4.55786 9.54722 4.7254L13.2975 8.78118C7.99403 10.3758 4.11914 15.303 4.11914 21.119C4.11921 28.2215 9.89763 34 17.0002 34C24.1028 34 29.8813 28.2215 29.8813 21.1189C29.8813 15.303 26.0064 10.3758 20.703 8.78118ZM18.9563 8.38617L20.3142 4.88538H22.9487L19.604 8.50252C19.39 8.45838 19.174 8.41942 18.9563 8.38617ZM16.068 8.27125L14.7547 4.88538H19.2459L17.9325 8.27125C17.3191 8.22725 16.6821 8.22718 16.068 8.27125ZM18.5607 0.996091L19.3263 3.88921H14.6743L15.4398 0.996091H18.5607ZM12.641 0.996091H14.4094L13.6439 3.88921H10.8159L12.641 0.996091ZM11.0517 4.88531H13.6862L15.0441 8.3861C14.8264 8.41942 14.6104 8.45832 14.3964 8.50238L11.0517 4.88531ZM17.0002 33.0039C10.4468 33.0039 5.11523 27.6723 5.11523 21.1189C5.11523 14.8369 10.0145 9.67858 16.1927 9.26194C23.1396 8.79832 28.8851 14.3303 28.8851 21.1189C28.8851 27.6723 23.5536 33.0039 17.0002 33.0039Z\" fill=\"black\"/>\n</g>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/step-package.svg?raw
	var step_package_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"translate(4 4)\">\n<g id=\"Frame\">\n<path id=\"Vector\" d=\"M14.6667 28.9733C15.0721 29.2074 15.5319 29.3306 16 29.3306C16.4681 29.3306 16.9279 29.2074 17.3333 28.9733L26.6667 23.64C27.0717 23.4062 27.408 23.07 27.6421 22.6651C27.8761 22.2603 27.9995 21.801 28 21.3333V10.6667C27.9995 10.199 27.8761 9.73975 27.6421 9.33488C27.408 8.93002 27.0717 8.59382 26.6667 8.36L17.3333 3.02667C16.9279 2.79262 16.4681 2.6694 16 2.6694C15.5319 2.6694 15.0721 2.79262 14.6667 3.02667L5.33333 8.36C4.92835 8.59382 4.59197 8.93002 4.35795 9.33488C4.12392 9.73975 4.00048 10.199 4 10.6667V21.3333C4.00048 21.801 4.12392 22.2603 4.35795 22.6651C4.59197 23.07 4.92835 23.4062 5.33333 23.64L14.6667 28.9733Z\" stroke=\"#191919\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path id=\"Vector_2\" d=\"M16 29.3333V16\" stroke=\"#191919\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path id=\"Vector_3\" d=\"M4.4 9.33333L14.6707 15.6453C15.0751 15.8779 15.5335 16.0003 16 16.0003C16.4665 16.0003 16.9249 15.8779 17.3293 15.6453L27.6 9.33333\" stroke=\"#191919\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path id=\"Vector_4\" d=\"M10 5.69333L22 12.56\" stroke=\"#191919\" stroke-width=\"1.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/step-mail.svg?raw
	var step_mail_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"translate(7.03 11.82)\">\n<g id=\"Clip path group\">\n<path id=\"Vector\" d=\"M25.1337 0H1.80243C0.808549 0 0 0.808549 0 1.80235V16.5379C0 17.5318 0.808627 18.3403 1.80243 18.3403H25.1337C26.1275 18.3403 26.9361 17.5317 26.9361 16.5379V1.80251C26.9361 0.808549 26.1274 0 25.1337 0ZM1.80243 1.14886H25.1337C25.4075 1.14886 25.6422 1.31827 25.7392 1.55773L15.6625 9.35914C14.3704 10.3595 12.5655 10.3595 11.2735 9.35914L1.19686 1.5578C1.29388 1.31843 1.52863 1.14886 1.80243 1.14886ZM25.7872 15.3667L19.3456 10.3796C19.0947 10.1854 18.7339 10.2313 18.5396 10.4821C18.3454 10.733 18.3914 11.0938 18.6422 11.2881L25.7391 16.7825C25.6421 17.022 25.4075 17.1915 25.1337 17.1915H1.80243C1.52863 17.1915 1.29388 17.022 1.19686 16.7826L8.29388 11.2882C8.54471 11.0939 8.59067 10.7331 8.39639 10.4822C8.2022 10.2314 7.84141 10.1854 7.59051 10.3797L1.14886 15.3667V2.97373L10.5701 10.2676C11.4232 10.9281 12.4456 11.2584 13.4679 11.2584C14.4903 11.2584 15.5127 10.9281 16.3658 10.2676L25.7872 2.97373V15.3667Z\" fill=\"#191919\"/>\n</g>\n</g>\n<g transform=\"translate(0.5 5)\">\n<path id=\"Vector\" d=\"M4 0.5L4.90741 3.09259L7.5 4L4.90741 4.90741L4 7.5L3.09259 4.90741L0.5 4L3.09259 3.09259L4 0.5Z\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/step-hands.svg?raw
	var step_hands_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"translate(2.31 0.43)\">\n<g id=\"Group\">\n<path id=\"Vector\" d=\"M28.3641 5.69158L24.9577 0.622246C24.6958 0.232596 24.2594 0 23.79 0H11.7855C11.3162 0 10.8797 0.232596 10.6179 0.622169L9.58731 2.15584C9.41054 2.41879 9.4805 2.7751 9.74331 2.95165C10.0064 3.12843 10.3627 3.0584 10.5391 2.7956L11.4368 1.45966L16.3114 5.91959H8.44008L9.14535 4.86993C9.32195 4.60705 9.25199 4.25074 8.9891 4.07411C8.72637 3.89756 8.37003 3.96744 8.19327 4.23032L7.21157 5.69142C6.87812 6.18743 6.89514 6.84202 7.25369 7.31999L16.6622 19.8678C16.9305 20.2256 17.3407 20.4307 17.7878 20.4307C18.235 20.4307 18.6452 20.2255 18.9134 19.8678L28.3218 7.32014C28.6804 6.8421 28.6974 6.18759 28.3641 5.69158ZM27.0784 7.06659L21.0222 15.1435L22.9541 7.06659H27.0784ZM22.7814 1.147L17.7878 5.71582L12.7941 1.147H22.7814ZM24.1385 1.45966L27.1355 5.91959H19.2641L24.1385 1.45966ZM12.6215 7.06659L14.5534 15.1436L8.49718 7.06659H12.6215ZM17.9957 19.1799C17.9278 19.2704 17.8362 19.2839 17.7877 19.2839C17.7391 19.2839 17.6477 19.2704 17.5798 19.1799L16.2602 17.42C16.2602 17.3757 16.2557 17.3309 16.2449 17.286L13.8007 7.06659H21.7749L19.3242 17.3123C19.3149 17.3513 19.3099 17.3902 19.3087 17.4288L17.9957 19.1799Z\" fill=\"#191919\"/>\n<path id=\"Vector_2\" d=\"M14.8709 26.9133L8.91699 23.1995C8.87146 23.171 8.8249 23.1449 8.77818 23.1199L5.54128 14.198C5.09016 12.9547 3.75376 12.3083 2.49934 12.7267C1.24001 13.1465 0.551089 14.5146 0.9636 15.7763C0.976902 15.8169 0.994494 15.8547 1.01536 15.8899C0.718536 16.059 0.468587 16.3023 0.287523 16.6045C0.0039319 17.078 -0.0730723 17.6323 0.0707575 18.1652L1.27067 22.6106C1.35325 22.9164 1.66827 23.0973 1.97374 23.0149C2.27951 22.9322 2.46049 22.6175 2.37799 22.3118L1.17808 17.8664C1.11607 17.6367 1.14925 17.3979 1.27144 17.1939C1.39369 16.9898 1.5886 16.8478 1.82036 16.794C2.248 16.6947 2.68353 16.9315 2.83294 17.3444L5.36917 24.3516C5.20233 24.7613 5.15088 25.2101 5.22435 25.6593C5.33178 26.3156 5.69161 26.886 6.23763 27.2657L10.5034 30.2316C10.7632 30.4122 11.1206 30.348 11.3015 30.088C11.4823 29.8281 11.4181 29.4706 11.158 29.2899L6.89231 26.324C6.60346 26.1231 6.41303 25.8213 6.35621 25.4741C6.2994 25.1269 6.38359 24.7801 6.5935 24.4977C6.99069 23.9628 7.74465 23.8202 8.30984 24.1727L14.2636 27.8865C14.7315 28.1783 15.0109 28.6817 15.0109 29.2332V37.711C15.0109 37.8714 14.8804 38.0018 14.72 38.0018H9.88039C9.71997 38.0018 9.58958 37.8714 9.58958 37.711V34.4464C9.58958 33.6544 9.2466 32.902 8.64865 32.3825L4.37295 28.6673C4.13401 28.4597 3.96411 28.1885 3.88161 27.8829L3.01935 24.6882C2.9367 24.3823 2.62167 24.2013 2.31628 24.2839C2.01051 24.3665 1.82953 24.6812 1.91203 24.987L2.77429 28.1818C2.91643 28.7082 3.2092 29.1755 3.62072 29.5331L7.89639 33.2483C8.24354 33.5498 8.4426 33.9865 8.4426 34.4464V37.711C8.4426 38.5037 9.08763 39.1488 9.88039 39.1488H14.72C15.5127 39.1488 16.1578 38.5037 16.1578 37.711V29.2331C16.1579 28.2831 15.6767 27.4159 14.8709 26.9133ZM6.20535 23.2918L3.91143 16.9541C3.62523 16.1636 2.88807 15.6521 2.08094 15.6261C2.0843 15.5581 2.07612 15.4884 2.05371 15.4198C1.83656 14.7557 2.19914 14.0357 2.86192 13.8148C3.52247 13.5946 4.22561 13.9349 4.46302 14.5892L7.45699 22.8416C7.01043 22.8741 6.57511 23.0276 6.20535 23.2918Z\" fill=\"#191919\"/>\n<path id=\"Vector_3\" d=\"M34.574 15.8965L34.6134 15.7759C35.0259 14.5142 34.3369 13.1462 33.0776 12.7263C31.8228 12.3083 30.4867 12.9543 30.0357 14.1977L26.7989 23.1195C26.7521 23.1445 26.7056 23.1707 26.6601 23.1991L20.7063 26.9128C19.9003 27.4155 19.4191 28.2828 19.4191 29.2327V31.296C19.4191 31.6128 19.6758 31.8695 19.9926 31.8695C20.3093 31.8695 20.566 31.6128 20.566 31.296V29.2327C20.566 28.6812 20.8454 28.1778 21.3133 27.886L27.2671 24.1722C27.8322 23.8197 28.5861 23.9623 28.9834 24.4971C29.1933 24.7796 29.2775 25.1264 29.2207 25.4737C29.1639 25.8208 28.9735 26.1227 28.6846 26.3234L24.4189 29.2893C24.1588 29.4702 24.0946 29.8275 24.2754 30.0875C24.4562 30.3477 24.8136 30.4119 25.0735 30.231L29.3393 27.2651C29.8853 26.8856 30.2451 26.3151 30.3526 25.6588C30.426 25.2097 30.3745 24.7611 30.2077 24.3514L32.744 17.3439C32.8933 16.9311 33.3289 16.6941 33.7565 16.7936C33.9883 16.8473 34.1832 16.9893 34.3054 17.1934C34.4277 17.3974 34.4608 17.6362 34.3988 17.8659L31.6951 27.8823C31.6127 28.188 31.4427 28.4593 31.2038 28.6668L26.9282 32.382C26.3302 32.9016 25.9872 33.6538 25.9872 34.4459V37.7106C25.9872 37.871 25.8568 38.0015 25.6963 38.0015H20.8568C20.6963 38.0015 20.5659 37.871 20.5659 37.7106V33.7954C20.5659 33.4786 20.3092 33.2218 19.9924 33.2218C19.6757 33.2218 19.419 33.4786 19.419 33.7954V37.7106C19.419 38.5034 20.0639 39.1484 20.8568 39.1484H25.6963C26.4891 39.1484 27.1341 38.5034 27.1341 37.7106V34.4461C27.1341 33.9862 27.3333 33.5495 27.6803 33.248L31.956 29.5328C32.3677 29.1752 32.6603 28.708 32.8025 28.1813L35.5061 18.1649C35.65 17.632 35.573 17.0777 35.2894 16.6042C35.1109 16.3062 34.8654 16.0653 34.574 15.8965ZM31.6656 16.9537L29.3717 23.2914C29.002 23.0272 28.5666 22.8737 28.1201 22.8411L31.114 14.5888C31.3513 13.9344 32.0549 13.5942 32.7149 13.8144C33.3778 14.0354 33.7403 14.7554 33.5232 15.4194L33.4553 15.6271C32.6645 15.6688 31.9469 16.1766 31.6656 16.9537Z\" fill=\"#191919\"/>\n</g>\n</g>\n</svg>\n";

//#endregion
//#region src/icons/step-box.svg?raw
	var step_box_default = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"translate(0 0)\">\n<g id=\"diamond_ring_on_box.svg\">\n<path id=\"Vector\" d=\"M36.2312 28.8647C36.2299 28.7781 36.2071 28.6927 36.1692 28.615L31.5006 19.3471L35.4283 7.30157C35.4476 7.24304 35.4559 7.18125 35.4573 7.11953V2.7393C35.4572 1.22883 34.2283 0 32.7179 0H7.28262C5.77222 0 4.54332 1.22883 4.54332 2.7393V7.11961C4.54456 7.18125 4.55285 7.2432 4.57222 7.30164L8.49988 19.3471L3.83129 28.615C3.79082 28.697 3.76925 28.7876 3.76855 28.879V37.2607C3.76855 38.7711 4.99738 40 6.50785 40H26.578C26.9023 40 27.1651 39.7372 27.1651 39.4129C27.1651 39.0886 26.9023 38.8257 26.578 38.8257H6.50785C5.6448 38.8257 4.94269 38.1237 4.94269 37.2606V29.466H10.5038C10.828 29.466 11.0909 29.2032 11.0909 28.8789C11.0909 28.5547 10.828 28.2918 10.5038 28.2918H5.30871L9.49464 19.9821H13.2153C12.1233 21.2517 11.4106 22.7986 11.1586 24.4574H10.3625C10.0382 24.4574 9.77534 24.7203 9.77534 25.0445C9.77534 25.3689 10.0382 25.6317 10.3625 25.6317H29.6381C29.9624 25.6317 30.2252 25.3688 30.2252 25.0445C30.2252 24.7203 29.9624 24.4574 29.6381 24.4574H28.8419C28.5899 22.7986 27.8773 21.2517 26.7852 19.9821H30.5059L34.6919 28.2918H12.8521C12.5279 28.2918 12.2651 28.5547 12.2651 28.8789C12.2651 29.2031 12.5279 29.466 12.8521 29.466H35.0579V37.2606C35.0579 38.1237 34.3558 38.8257 33.4927 38.8257H28.9264C28.602 38.8257 28.3393 39.0887 28.3393 39.4129C28.3393 39.7371 28.602 40 28.9264 40H33.4927C35.0032 40 36.232 38.7711 36.232 37.2607C36.232 37.2607 36.2313 28.8696 36.2312 28.8647ZM26.578 6.5325H5.71746V2.7393C5.71746 1.87633 6.41956 1.17414 7.28262 1.17414H32.7179C33.5808 1.17414 34.2829 1.87625 34.2829 2.7393V6.5325H28.9262C28.6019 6.5325 28.3391 6.79539 28.3391 7.11961C28.3391 7.44383 28.6019 7.70672 28.9262 7.70672H34.0611L30.4412 18.8081H25.5655C24.9132 18.2889 24.1971 17.8671 23.4376 17.551L25.6304 14.1835C25.7507 13.9985 25.7573 13.7617 25.6473 13.5703L23.9401 10.6019C23.8353 10.4197 23.6412 10.3075 23.4312 10.3075H16.5689C16.3589 10.3075 16.1647 10.4197 16.06 10.6019L14.3531 13.5703C14.2429 13.7619 14.2497 13.999 14.3705 14.184L16.5673 17.549C15.8061 17.8654 15.0884 18.2878 14.4349 18.8081H9.55916L5.93933 7.70664H26.578C26.9023 7.70664 27.1651 7.44375 27.1651 7.11953C27.1651 6.79531 26.9022 6.5325 26.578 6.5325ZM17.7162 17.1611L15.9464 14.4502H24.0557L22.2895 17.1626C21.5493 16.9671 20.7807 16.8659 20.0002 16.8659C19.2215 16.8659 18.4547 16.9665 17.7162 17.1611ZM15.8768 13.2759L16.9087 11.4817H23.0917L24.1236 13.2759H15.8768ZM15.0886 24.4575C15.6872 22.283 17.6909 20.715 20.0003 20.715C22.3097 20.715 24.3135 22.283 24.9119 24.4575H15.0886ZM26.1218 24.4575C25.4966 21.621 22.9507 19.5409 20.0003 19.5409C17.0497 19.5409 14.504 21.621 13.8788 24.4575H12.3478C12.6419 22.7829 13.4797 21.2489 14.7472 20.085C16.1834 18.7663 18.049 18.0401 20.0003 18.0401C21.9515 18.0401 23.8172 18.7663 25.2534 20.085C26.521 21.2489 27.3587 22.7829 27.6527 24.4575H26.1218Z\" fill=\"#191919\"/>\n</g>\n</g>\n</svg>\n";

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
	var fragment = (...nodes) => {
		const f = document.createDocumentFragment();
		f.append(...nodes);
		return f;
	};
	var bold = (text) => /* @__PURE__ */ jsx("strong", { children: text });
	var HowToOrder = (onMailing) => {
		const mailingLink = /* @__PURE__ */ jsx("button", {
			class: "crs-inline-link",
			type: "button",
			onClick: onMailing,
			children: "mailing instructions"
		});
		const kitLink = /* @__PURE__ */ jsx("button", {
			class: "crs-step__kit",
			type: "button",
			children: /* @__PURE__ */ jsx("strong", { children: "free collection kit" })
		});
		const steps = [
			Step(1, step_ring_default, document.createTextNode("Pick your jewelry & place an order")),
			Step(2, step_package_default, fragment("We send you a ", kitLink, " within 24 hours")),
			Step(3, step_mail_default, fragment("Send your inclusions back with the ", bold("prepaid return label"))),
			Step(4, step_hands_default, document.createTextNode("We handcraft your jewelry with your inclusions")),
			Step(5, step_box_default, document.createTextNode("Receive your jewelry that lasts a lifetime"))
		];
		steps.slice(1).forEach((li) => li.prepend(Arrow()));
		const list = /* @__PURE__ */ jsx("ol", { class: "crs-steps" });
		list.append(...steps);
		const section = /* @__PURE__ */ jsxs("section", {
			class: "crs-howto",
			children: [
				/* @__PURE__ */ jsx("h2", {
					class: "crs-howto__title",
					children: "How to order your piece with inclusions"
				}),
				list,
				/* @__PURE__ */ jsxs("p", {
					class: "crs-howto__note",
					children: [
						"Outside the US? Follow our ",
						mailingLink,
						" instead."
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					class: "crs-howto__made",
					children: [
						/* @__PURE__ */ jsx("h2", {
							class: "crs-howto__title",
							children: "How your piece is made"
						}),
						/* @__PURE__ */ jsx("p", { children: "Your keepsake is made by one artisan from start to finish, and tracked every step of the way. Whatever we don't use is returned to you with your finished piece — and every order passes a 4-stage quality inspection." }),
						/* @__PURE__ */ jsx("p", { children: "It takes approximately 6–8 weeks to arrive after we receive your inclusions — a memory made by hand, to order." })
					]
				})
			]
		});
		attachKitTip(kitLink, section, true, () => pushData("exp_pdp_howto_kit_close", "Free collection kit", "click", "PDP"));
		kitLink.addEventListener("click", () => pushData("exp_pdp_howto_kit_click", "Free collection kit", "click", "PDP"));
		return section;
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
	var queue = Promise.resolve();
	var inCartQueue = (task) => queue = queue.catch(() => {}).then(task);
	var ICON_BUBBLE = "cart-icon-bubble";
	var send = async (url, fields, sections) => {
		const body = new FormData();
		Object.entries(fields).forEach(([key, value]) => body.append(key, value));
		body.append("sections", sections.join(","));
		body.append("sections_url", location.pathname);
		const response = await fetch(url, {
			method: "POST",
			headers: { "X-Requested-With": "XMLHttpRequest" },
			body
		});
		return response.ok ? response.json() : null;
	};
	var refreshIconBubble = (state) => {
		const html = state.sections?.[ICON_BUBBLE];
		const target = document.getElementById(ICON_BUBBLE);
		if (!html || !target) return;
		target.innerHTML = new DOMParser().parseFromString(html, "text/html").querySelector(".shopify-section").innerHTML;
	};
	var syncCollectionKit = async (kitVariantId, excluded, { added, open }) => {
		const cart = await fetch("/cart.js").then((r) => r.json());
		const kit = cart.items.find((item) => item.variant_id === kitVariantId);
		const hasOthers = cart.items.some((item) => item.variant_id !== kitVariantId && !excluded.includes(item.handle));
		const id = String(kitVariantId);
		const element = cartElement();
		const sections = open && element ? element.getSectionsToRender().map((s) => s.id) : [ICON_BUBBLE];
		let state;
		if (kit && !hasOthers) state = await send("/cart/change.js", {
			id,
			quantity: "0"
		}, sections);
		else if (kit && kit.quantity > 1) state = await send("/cart/change.js", {
			id,
			quantity: "1"
		}, sections);
		else if (!kit && hasOthers && added) state = await send("/cart/add.js", {
			id,
			quantity: "1"
		}, sections);
		if (!state) return;
		if (open) element?.renderContents(state);
		else refreshIconBubble(state);
	};

//#endregion
//#region src/index.ts
	startLog({
		name: "PDP update",
		dev: "OS"
	});
	clarityInterval("exp_pdp_collection_kit");
	var GIFT_HANDLE = "small-oval-necklace";
	var GIFT_MIN_PRICE_CENTS = 5e4;
	var GIFT_DISCOUNT_CODE = "PDP-EXP-GIFT500";
	var KIT_HANDLE = "collection-kit";
	var KIT_EXCLUDED_HANDLES = [
		"funeral-flower-keepsake-ornaments-personalized-angel-wings-ornaments-keepsake-ornaments-keepsake-funeral-wedding-flower-keepsake",
		"ring-sizer",
		"cremation-gemstone"
	];
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
			const href = "https://fonts.googleapis.com/css2?family=Forum&family=Jost:wght@400;500;600&family=Overlock&display=swap";
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
			this.order(howto, 12);
			this.order(reels, 13);
			this.order(accords, 14);
			this.order(root.querySelector(".product__view-details"), 20);
			root.querySelectorAll(".product__accordion").forEach((el) => el.remove());
			root.append(...hasOptions ? [options.root] : [], trust, help, details, howto, reels, accords);
			this.watchCollectionKit();
			dressCartDrawer();
			visibilityOfTime(".crs-details", "exp_pdp_details_view", "PDP", "Product details", 1e3, .3);
			visibilityOfTime(".crs-steps", "exp_pdp_howto_view", "PDP", "How to order", 1e3, .3);
			visibilityOfTime(".crs-howto__made", "exp_pdp_made_view", "PDP", "How your piece is made", 1e3, .3);
			const stickyTarget = hasOptions ? options.root : root.querySelector("product-form")?.parentElement ?? root;
			const sticky = StickyBar(this.product, () => this.images[selectedValues(this.product)[this.imageIndex]], onMaterialGuide, onSizeGuide, stickyTarget);
			this.sync.push(sticky.sync);
			document.body.append(sticky.root);
			visibilityOfTime(".crs-sticky", "exp_pdp_sticky_view", "PDP", "Sticky Bar");
		}
		async watchCollectionKit() {
			const kitVariantId = await fetchVariantId(KIT_HANDLE);
			const qualifies = !KIT_EXCLUDED_HANDLES.includes(this.product.handle);
			subscribeCartUpdate((event) => inCartQueue(() => syncCollectionKit(kitVariantId, KIT_EXCLUDED_HANDLES, {
				added: qualifies && event.source === "product-form",
				open: true
			})));
			inCartQueue(() => syncCollectionKit(kitVariantId, KIT_EXCLUDED_HANDLES, {
				added: false,
				open: false
			}));
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
			subscribeCartUpdate((event) => inCartQueue(async () => {
				if (event.source === "product-form" && this.qualifiesForGift() && !giftInCart) {
					await addToCart(gift.variantId);
					await applyDiscountAndRefresh(GIFT_DISCOUNT_CODE);
				}
				giftInCart = await cartHasVariant(gift.variantId);
				syncAll();
			}));
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
			const gallery = Gallery(() => this.images[selectedValues(this.product)[this.imageIndex]], created, !KIT_EXCLUDED_HANDLES.includes(this.product.handle));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJpc09iamVjdCIsImV4dGVuZCIsImdldENvbXB1dGVkU3R5bGUiXSwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvLnBucG0vY3JzZGV2dG9vbEAxLjEuMF9AdHlwZXMrbm9kZUAyNi4xLjEvbm9kZV9tb2R1bGVzL2Nyc2RldnRvb2wvaW50ZXJuYWwvaW5kZXguanMiLCIuLi9zcmMvZ2xvYmFscy5jc3M/aW5saW5lIiwiLi4vc3JjL21vbmV5LnRzIiwiLi4vc3JjL3Byb2R1Y3QudHMiLCIuLi9zcmMvZGVzY3JpcHRpb24udHMiLCIuLi9zcmMvaWNvbnMvZmxhZy11c2EucG5nP2lubGluZSIsIi4uL3NyYy9zdmcudHMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vY3JzZGV2dG9vbEAxLjEuMF9AdHlwZXMrbm9kZUAyNi4xLjEvbm9kZV9tb2R1bGVzL2Nyc2RldnRvb2wvaW50ZXJuYWwvanN4LXJ1bnRpbWUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9idXlib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvY2FydERyYXdlci50cyIsIi4uL3NyYy9jb21wb25lbnRzL2RldGFpbHMudHN4IiwiLi4vc3JjL2ljb25zL3NtYWxsLW5lY2tsZXNzLnBuZz9pbmxpbmUiLCIuLi9zcmMvY29tcG9uZW50cy9naWZ0LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2tpdC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2hvd1RvT3JkZXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvY29udGVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3dpcGVyQDExLjIuMTAvbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3aXBlckAxMS4yLjEwL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zd2lwZXJAMTEuMi4xMC9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiLCIuLi9zcmMvY29tcG9uZW50cy9yZWVscy50c3giLCIuLi9zcmMvY29tcG9uZW50cy9zdGlja3lCYXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb25zLnRzIiwiLi4vc3JjL2NhcnQudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHVzaERhdGEgPSAobmFtZSwgZGVzYywgdHlwZSwgbG9jID0gXCJcIikgPT4ge1xuICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcbiAgICBldmVudDogXCJldmVudC10by1nYTRcIixcbiAgICBldmVudF9uYW1lOiBuYW1lLFxuICAgIGV2ZW50X2Rlc2M6IGRlc2MsXG4gICAgZXZlbnRfdHlwZTogdHlwZSxcbiAgICBldmVudF9sb2M6IGxvY1xuICB9KTtcbiAgbG9nKGBFdmVudDogJHtuYW1lfSB8ICR7ZGVzY30gfCAke3R5cGV9IHwgJHtsb2N9YCwgXCJzdWNjZXNzXCIpO1xufTtcbmNvbnN0IHdhaXRFbCA9IChzZWxlY3RvcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJlc29sdmUoZWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIGlmIChlbGVtZW50Mikge1xuICAgICAgICByZXNvbHZlKGVsZW1lbnQyKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufTtcbmNvbnN0IHN0YXJ0TG9nID0gKHsgbmFtZSwgZGV2IH0pID0+IHtcbiAgY29uc29sZS5sb2coXG4gICAgYCVjIEVYUDogJHtuYW1lfSAoREVWOiAke2Rldn0pYCxcbiAgICBgYmFja2dyb3VuZDogIzM0OThlYjsgY29sb3I6ICNmY2NmM2E7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7YFxuICApO1xufTtcbmNsYXNzIE5hdGl2ZVF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTmF0aXZlUXVlcnkgPyBlbGVtZW50LmVsZW1lbnRzIDogdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCkpIDogZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBbZWxlbWVudF0gOiBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IEFycmF5LmZyb20oZWxlbWVudCk7XG4gIH1cbiAgb24oZXZlbnRzLCBkZWxlZ2F0ZVNlbGVjdG9yLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZVNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGhhbmRsZXIgPSBkZWxlZ2F0ZVNlbGVjdG9yO1xuICAgICAgZGVsZWdhdGVTZWxlY3RvciA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlU2VsZWN0b3IgIT09IFwiXCIpIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldD8uY2xvc2VzdChcbiAgICAgICAgICAgIGRlbGVnYXRlU2VsZWN0b3JcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVyPy5jYWxsKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlcj8uY2FsbChlbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGVhY2goY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIHRoaXMuZWxlbWVudHMpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBOYXRpdmVRdWVyeShlbGVtZW50KSwgdGhpcy5lbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3R5bGUoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZpbmQoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5hdGl2ZVF1ZXJ5KGVsZW1lbnRzLmZsYXQoKSk7XG4gIH1cbiAgYXR0cihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF0/LmdldEF0dHJpYnV0ZShrZXkpID8/IG51bGw7XG4gICAgfVxuICB9XG4gIHRleHQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF0/LnRleHRDb250ZW50IHx8IFwiXCI7XG4gICAgfVxuICB9XG4gIGh0bWwodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdPy5pbm5lckhUTUwgfHwgXCJcIjtcbiAgICB9XG4gIH1cbn1cbmNvbnN0ICRlbCA9IChlbGVtZW50KSA9PiB7XG4gIHJldHVybiBuZXcgTmF0aXZlUXVlcnkoZWxlbWVudCk7XG59O1xuY29uc3QgbG9hZFNjcmlwdHNPclN0eWxlcyA9IGFzeW5jICh1cmxzKSA9PiB7XG4gIGNvbnN0IGxvYWRTY3JpcHRPclN0eWxlID0gKHVybCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gdXJsLnNwbGl0KFwiLlwiKS5wb3AoKTtcbiAgICAgIGlmICh0eXBlID09PSBcImpzXCIpIHtcbiAgICAgICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuc2NyaXB0cykubWFwKFxuICAgICAgICAgIChzY3JpcHQyKSA9PiBzY3JpcHQyLnNyYy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsb2FkZWRTY3JpcHRzLmluY2x1ZGVzKHVybC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGxvZyhgU2NyaXB0ICR7dXJsfSBhbHJlYWR5IGRvd25sb2FkZWQhYCwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNzc1wiKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlZFN0eWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpLm1hcChcbiAgICAgICAgICAoc3R5bGUyKSA9PiBzdHlsZTIuaHJlZj8udG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgICBpZiAobG9hZGVkU3R5bGVzLmluY2x1ZGVzKHVybC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGxvZyhgU3R5bGUgJHt1cmx9IGFscmVhZHkgZG93bmxvYWRlZCFgLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgc3R5bGUucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIHN0eWxlLmhyZWYgPSB1cmw7XG4gICAgICAgIHN0eWxlLm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHN0eWxlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgbG9nKHVybCk7XG4gICAgYXdhaXQgbG9hZFNjcmlwdE9yU3R5bGUodXJsKTtcbiAgICBsb2coYExvYWRlZCBsaWJyYXJ5ICR7dXJsfWApO1xuICB9XG4gIGxvZyhcIkFsbCBsaWJyYXJpZXMgbG9hZGVkIVwiLCBcInN1Y2Nlc3NcIik7XG59O1xuY29uc3QgY2xhcml0eUludGVydmFsID0gKG5hbWUpID0+IHtcbiAgbGV0IGludCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmNsYXJpdHkgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjbGVhckludGVydmFsKGludCk7XG4gICAgICB3aW5kb3cuY2xhcml0eShcInNldFwiLCBuYW1lLCBcInZhcmlhbnRfMVwiKTtcbiAgICB9XG4gIH0sIDFlMyk7XG59O1xuY29uc3QgdmlzaWJpbGl0eU9mVGltZSA9IChzZWxlY3RvciwgZXZlbnROYW1lLCB2aXNpYmxlUGxhY2UsIGRlc2NyaXB0aW9uLCB0aW1lID0gMWUzLCB0aHJlc2hvbGQgPSAwLjUpID0+IHtcbiAgbGV0IG9ic2VydmVyO1xuICBsZXQgdGltZXI7XG4gIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nID09PSB0cnVlKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcHVzaERhdGEoXG4gICAgICAgICAgICBldmVudE5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzWzBdLnRhcmdldC5kYXRhc2V0LnZpc2libGUgfHwgZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgdmlzaWJsZVBsYWNlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nKFwiRWxlbWVudCBpcyBub3QgZnVsbHkgdmlzaWJsZVwiLCBcIndhcm5cIik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICB7IHRocmVzaG9sZDogW3RocmVzaG9sZF0gfVxuICApO1xuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHNlbGVjdG9yKTtcbiAgfVxufTtcbmNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IChzZWxlY3Rvciwgb2Zmc2V0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIChvZmZzZXQgfHwgMTAwKTtcbiAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufTtcbmNvbnN0IGNoZWNrU2Nyb2xsU3BlZWQgPSAoc2VsZWN0b3IsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGJsb2NrID0gc2VsZWN0b3IgPT09IHdpbmRvdyA/IHdpbmRvdyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAoIWJsb2NrKSByZXR1cm47XG4gIGxldCBsYXN0UG9zLCBuZXdQb3MsIHRpbWVyLCBkZWx0YSwgZGlyZWN0aW9uO1xuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBsYXN0UG9zID0gbnVsbDtcbiAgICBkZWx0YSA9IDA7XG4gIH1cbiAgY2xlYXIoKTtcbiAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgICAgbmV3UG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BvcyA9IGJsb2NrLnNjcm9sbFRvcDtcbiAgICB9XG4gICAgaWYgKCFsYXN0UG9zKSByZXR1cm47XG4gICAgZGlyZWN0aW9uID0gbmV3UG9zID4gbGFzdFBvcyA/IFwiZG93blwiIDogXCJ1cFwiO1xuICAgIGlmIChsYXN0UG9zICE9IG51bGwpIHtcbiAgICAgIGRlbHRhID0gbmV3UG9zIC0gbGFzdFBvcztcbiAgICB9XG4gICAgbGFzdFBvcyA9IG5ld1BvcztcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChjbGVhciwgNTApO1xuICAgIGNhbGxiYWNrKE1hdGguYWJzKGRlbHRhKSwgZGlyZWN0aW9uKTtcbiAgfSk7XG59O1xuY29uc3QgZ2V0Q29va2llcyA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgaWYgKHZhbHVlLmluY2x1ZGVzKGA7ICR7bmFtZX09YCkpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgcmV0dXJuIHBhcnRzLnBvcCgpPy5zcGxpdChcIjtcIikuc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2coXCJObyBjb29raWVcIiwgXCJ3YXJuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuY29uc3QgbG9nID0gKHRleHQsIHN0eWxlID0gXCJpbmZvXCIpID0+IHtcbiAgbGV0IGNvbG9yO1xuICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgY2FzZSBcImluZm9cIjpcbiAgICAgIGNvbG9yID0gXCJjb2xvcjogIzM0OThkYjtcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3YXJuXCI6XG4gICAgICBjb2xvciA9IFwiY29sb3I6ICNmMzljMTI7XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgIGNvbG9yID0gXCJjb2xvcjogI2U3NGMzYztcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICBjb2xvciA9IFwiY29sb3I6ICMyZWNjNzE7XCI7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zb2xlLmxvZyhgJWM+Pj4gJHt0ZXh0fWAsIGAke2NvbG9yfSBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDBgKTtcbn07XG5jb25zdCBzbGlkZXVwID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRpbWUgPSBkdXJhdGlvbiB8fCA1MDA7XG4gIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgJHt0aW1lfW1zYDtcbiAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0sIHRpbWUpO1xufTtcbmNvbnN0IHNsaWRlZG93biA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aW1lID0gZHVyYXRpb24gfHwgNTAwO1xuICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7dGltZX1tc2A7XG4gIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgfSwgMCk7XG59O1xuZXhwb3J0IHtcbiAgJGVsLFxuICBOYXRpdmVRdWVyeSxcbiAgY2hlY2tTY3JvbGxTcGVlZCxcbiAgY2xhcml0eUludGVydmFsLFxuICBnZXRDb29raWVzLFxuICBsb2FkU2NyaXB0c09yU3R5bGVzLFxuICBsb2csXG4gIHB1c2hEYXRhLFxuICBzY3JvbGxUb0VsZW1lbnQsXG4gIHNsaWRlZG93bixcbiAgc2xpZGV1cCxcbiAgc3RhcnRMb2csXG4gIHZpc2liaWxpdHlPZlRpbWUsXG4gIHdhaXRFbFxufTtcbiIsIi5jcnMtcGRwIHtcbiAgLS1jcnMtYWNjZW50OiAjYTcyNTYxO1xuICAtLWNycy1hY2NlbnQtdGV4dDogI2EzM2Y2ZTtcbiAgLS1jcnMtYWNjZW50LXNvZnQ6IHJnYmEoMTY3LCAzNywgOTcsIDAuMDUpO1xuICAtLWNycy1hY2NlbnQtdGludDogI2ZkZjFmNjtcbiAgLS1jcnMtbGluZTogI2RiZGJkYjtcbiAgLS1jcnMtaW5rOiAjMTIxMjEyO1xuICAtLWNycy1tdXRlZDogcmdiYSgyNSwgMjUsIDI1LCAwLjc1KTtcblxuICAtLWNycy1oZWFkOiAnRm9ydW0nLCBHZW9yZ2lhLCBzZXJpZjtcbiAgLS1jcnMtYm9keTogJ0pvc3QnLCAnQXNzaXN0YW50Jywgc2Fucy1zZXJpZjtcblxuICAtLWNycy1udW06ICdPdmVybG9jaycsIEdlb3JnaWEsIHNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAuY3JzLXByb2R1Y3QgLnBhZ2Utd2lkdGgge1xuICAgIG1heC13aWR0aDogMTM3LjdyZW07XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3QucHJvZHVjdC0tbGFyZ2Uge1xuICAgIGdhcDogMy4xNCU7XG4gIH1cblxuICAvKiBUaGUgbWFpbiBpbWFnZSBpcyA1ODBweCBpbiB0aGUgZGVzaWduOyBiZWxvdyB+MTI1MHB4IDU2JSBvZiB0aGUgcm93IGlzIG5hcnJvd2VyIHRoYW5cbiAgICAgdGhhdCwgc28gdGhlIG1lZGlhIGNvbHVtbiBob2xkcyA1ODBweCBhbmQgdGhlIGJ1eSBib3ggdGFrZXMgd2hhdGV2ZXIgaXMgbGVmdC4gKi9cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0LnByb2R1Y3QtLWxhcmdlIC5wcm9kdWN0X19tZWRpYS13cmFwcGVyIHtcbiAgICBmbGV4OiAwIDAgbWF4KDU2JSwgNTgwcHgpO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogbWF4KDU2JSwgNTgwcHgpO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0LnByb2R1Y3QtLWxhcmdlIC5wcm9kdWN0X19pbmZvLXdyYXBwZXIge1xuICAgIGZsZXg6IDEgMSAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cbi8qIFdoZXJlIHRoZSBtZWRpYSBjb2x1bW4gaXMgaGVsZCBhdCA1ODBweCwgdGhlIGJ1eSBib3ggaXMgd2hhdCBnaXZlcyDigJQgZG9uJ3QgYWxzbyBzcGVuZFxuICAgdGhlIHBhZ2UgZ3V0dGVycyAoNTBweCBhIHNpZGUpIG9uIGl0LiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmNycy1wcm9kdWN0IC5wYWdlLXdpZHRoIHtcbiAgICBwYWRkaW5nLWlubGluZTogMjRweDtcbiAgfVxufVxuXG4uY3JzLXBkcCBzZWN0aW9uLmNycy1pbmZvLnByb2R1Y3RfX2luZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+Kixcbi5jcnMtcGRwIC5jcnMtaW5mbyBwcm9kdWN0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LnByb2R1Y3RfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5wcm9kdWN0X190aXRsZT5oMSB7XG4gIG9yZGVyOiAxO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LnByb2R1Y3RfX3RpdGxlPi5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnkge1xuICBvcmRlcjogMDtcblxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPltpZF49J3ByaWNlLSddIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtb3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY3JzLWxpbmUpO1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+ZGl2Omhhcyg+IHByb2R1Y3QtZm9ybSkge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1naWZ0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtdHJ1c3Qge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1oZWxwIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jcnMtbGluZSk7XG59XG5cbi5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1wZHAtcmVlbHMsXG4uY3JzLXBkcCAuY3JzLWluZm8+LmNycy1ob3d0byxcbi5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtIC5hdGNfc3RlcHMsXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybSAuY3VzdG9tLmR3YSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtaW5mbyB2YXJpYW50LXNlbGVjdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY3JzLWluZm8gLnByb2R1Y3RfX3RpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xuICBtYXJnaW46IDA7XG59XG5cbi5jcnMtcGRwIC5jcnMtdXRpbGl0eSB7XG4gIC0tY29sb3ItYmFja2dyb3VuZDogMTU5LCAxMDEsIDEyODtcbiAgYmFja2dyb3VuZDogIzlmNjU4MDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wOCk7XG59XG5cbi5jcnMtcGRwIC5jcnMtdXRpbGl0eSAudXRpbGl0eS1iYXJfX2dyaWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNycy1wZHAgLmNycy11dGlsaXR5IC5hbm5vdW5jZW1lbnQtYmFyX19tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cHggMTZweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNi45cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuXG4uY3JzLXBkcCAuY3JzLXV0aWxpdHkgLmFubm91bmNlbWVudC1iYXJfX21lc3NhZ2U+c3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgLmNycy1wZHAgLmNycy11dGlsaXR5X19zZXAsXG4gIC5jcnMtcGRwIC5jcnMtdXRpbGl0eV9fd2FycmFudHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LWF2Z1JhdGluZ1dyYXBwZXIsXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS13cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1hdmdSYXRpbmcge1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1zdGFycyxcbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LXN0YXJzLXJhdGluZyxcbi5jcnMtaW5mbyAuZmVyYS1zdG9yZVJldmlld3NTdW1tYXJ5LXN0YXJzLWJnIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1zdGFycyB7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbn1cblxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktdmVyaWZpZWRCYWRnZVdyYXBwZXIsXG4uY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS12ZXJpZmllZEJhZGdlLFxuLmNycy1pbmZvIC5mZXJhLXN0b3JlUmV2aWV3c1N1bW1hcnktdmVyaWZpZWRCYWRnZS1wcmVUZXh0TnVtYmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlLS1vbi1zYWxlIC5wcmljZV9fc2FsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTFweDtcbn1cblxuLmNycy1wcm9kdWN0IC5wcmljZS0tb24tc2FsZSAucHJpY2VfX3NhbGUgLnByaWNlLWl0ZW0tLXNhbGUge1xuICBvcmRlcjogLTE7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJpY2UgLnByaWNlLWl0ZW0tLXNhbGUsXG4uY3JzLXByb2R1Y3QgLnByaWNlIC5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY3JzLWFjY2VudC10ZXh0KTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcmljZV9fc2FsZSBzLnByaWNlLWl0ZW0tLXJlZ3VsYXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1jcnMtbXV0ZWQpO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByaWNlX19iYWRnZS1zYWxlIHtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTExcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDM3LCA5NywgMC4xKTtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmNycy1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4uY3JzLW9wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmNycy1vcHQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY3JzLW9wdC1oZWFkX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWNycy1tdXRlZCk7XG59XG5cbi5jcnMtb3B0LWhlYWRfX3ZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xufVxuXG4uY3JzLWd1aWRlLWxpbmsge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jcnMtZ3VpZGUtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbn1cblxuLmNycy1vcHRfX2xpc3QtLXN3YXRjaGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY3JzLW9wdF9fbGlzdC0tc2l6ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLmNycy1zd2F0Y2gsXG4uY3JzLXNpemUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cywgYmFja2dyb3VuZC1jb2xvciAwLjE1cywgYm94LXNoYWRvdyAwLjE1cztcbn1cblxuLmNycy1zd2F0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDRweDtcbn1cblxuLmNycy1zd2F0Y2hfX2RvdCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNycy1zd2F0Y2hfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JzLXNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleDogMCAwIDQ2cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtaW4td2lkdGg6IDQ2cHg7XG4gIG1heC13aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG59XG5cbi5jcnMtc3dhdGNoOmhvdmVyLFxuLmNycy1zaXplOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jcnMtYWNjZW50KTtcbn1cblxuLmNycy1zd2F0Y2guaXMtc2VsZWN0ZWQsXG4uY3JzLXNpemUuaXMtc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tY3JzLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtc29mdCk7XG59XG5cbi5jcnMtc2l6ZS5pcy11bmF2YWlsYWJsZSB7XG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgMTgsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZmZiwgI2ZmZiA1cHgsICNmNGY0ZjQgNXB4LCAjZjRmNGY0IDZweCk7XG59XG5cbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19idXR0b25zIHF1YW50aXR5LWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcm9kdWN0LWZvcm1fX2J1dHRvbnMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWFjY2VudCk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5wcm9kdWN0LWZvcm1fX3N1Ym1pdDpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiAjOGUxZTUzO1xufVxuXG4uY3JzLXByb2R1Y3QgLnByb2R1Y3QtZm9ybV9fc3VibWl0OjphZnRlcixcbi5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19zdWJtaXQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtYXRjLXByaWNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1wcm9kdWN0IC5jcnMtYXRjLXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY3JzLWdpZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTVweCAyMnB4IDE1cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRURERUU1O1xuICBiYWNrZ3JvdW5kOiAjRkFGNEY3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBgZGlzcGxheTogZmxleGAgYWJvdmUgd291bGQgb3RoZXJ3aXNlIG91dHJhbmsgdGhlIFVBIFtoaWRkZW5dIHJ1bGUuICovXG4uY3JzLWdpZnRbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtZ2lmdF9fcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IC0yMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzdkZWcpO1xuICB3aWR0aDogOTJweDtcbiAgYmFja2dyb3VuZDogI0E3MjU2MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA0cHggMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuXG4uY3JzLWdpZnRfX2ltYWdlIHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNzZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNycy1naWZ0X19ib2R5IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uY3JzLWdpZnRfX2xhYmVsIHtcbiAgY29sb3I6ICM4QTE1Mzg7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNycy1naWZ0X190aXRsZSB7XG4gIGNvbG9yOiAjMUMxQjFBO1xuICBmb250LWZhbWlseTogRm9ydW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY3JzLWdpZnRfX2Rlc2Mge1xuICBjb2xvcjogIzZFNkE2NztcbiAgZm9udC1mYW1pbHk6IEpvc3Q7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5jcnMtZ2lmdF9fcHJpY2Uge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogM3B4O1xufVxuXG4uY3JzLWdpZnRfX2ZyZWUge1xuICBjb2xvcjogIzI4OTE2MDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBKb3N0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jcnMtZ2lmdF9fd2FzIHtcbiAgY29sb3I6ICM5QTk2OTM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogSm9zdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufVxuXG4vKiBgZGlzcGxheTogZmxleGAgYWJvdmUgd291bGQgb3RoZXJ3aXNlIG91dHJhbmsgdGhlIFVBIFtoaWRkZW5dIHJ1bGUuICovXG5cbi5jcnMtdHJ1c3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLXRydXN0X19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY3JzLXRydXN0X19pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLXRydXN0X19pY29uLS1zdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY3JzLXRydXN0X19pY29uLS1zdmcgc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jcnMtaGVscCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjguOHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtaGVscCBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNycy1hY2NvcmRfX2l0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY3JzLWxpbmUpO1xufVxuXG4uY3JzLWFjY29yZF9faXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbn1cblxuLmNycy1hY2NvcmRfX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIycHggMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG4uY3JzLWFjY29yZF9fc2lnbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLmNycy1hY2NvcmRfX3NpZ246OmJlZm9yZSxcbi5jcnMtYWNjb3JkX19zaWduOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAxLjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWluayk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uY3JzLWFjY29yZF9fc2lnbjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jcnMtYWNjb3JkX19zaWduIHN2ZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtYWNjb3JkX19oZWFkW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSAuY3JzLWFjY29yZF9fc2lnbjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLmNycy1hY2NvcmRfX3BhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5jcnMtZGV0YWlsc19fbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMThweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNycy1kZXRhaWxzX19saXN0IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLW11dGVkKTtcbn1cblxuLmNycy1kZXRhaWxzX19saXN0IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnwrcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNHB4O1xufVxuXG4uY3JzLWRldGFpbHNfX3RvZ2dsZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5ib2R5LmNycy1wZHAgLmNycy1yZWVscyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtcGRwLXJlZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWFjY2VudC1zb2Z0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNycy1wZHAtcmVlbHNfX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbn1cblxuLmNycy1wZHAtcmVlbHNfX3RpdGxlIHtcbiAgbWF4LXdpZHRoOiAzODlweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWhlYWQpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tY3JzLWFjY2VudCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNycy1wZHAtcmVlbHNfX3N1YnRpdGxlIHtcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNycy1wZHAtcmVlbHMgLnN3aXBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jcnMtcGRwLXJlZWxzIC5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXN3aXBlci13cmFwcGVyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCBpbml0aWFsKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNycy1wZHAtcmVlbHMgLnN3aXBlci1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5jcnMtcGRwLXJlZWxzX19zdHJpcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3JzLXBkcC1yZWVsc19fbGlzdCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY3JzLXBkcC1yZWVscyAuY3JzLXJlZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAxNTVweDtcbiAgaGVpZ2h0OiAyNzZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMzcsIDk3LCAwLjA4KTtcbn1cblxuLmNycy1yZWVsX19wb3N0ZXIsXG4uY3JzLXJlZWwgdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jcnMtcmVlbF9fcG9zdGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JzLXJlZWxfX3Bvc3RlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jcnMtcmVlbCB2aWRlbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtcmVlbC5pcy1wbGF5aW5nIHZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jcnMtcmVlbC5pcy1wbGF5aW5nIC5jcnMtcmVlbF9fcG9zdGVyLFxuLmNycy1yZWVsLmlzLXBsYXlpbmcgLmNycy1yZWVsX19wbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1yZWVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNycy1yZWVsX19wbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzO1xufVxuXG4uY3JzLXJlZWxfX3BsYXkgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5jcnMtcmVlbF9fcGxheSBzdmcgcGF0aCB7XG4gIGZpbGw6ICMxOTE5MTk7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIC5jcnMtcmVlbF9fcGxheTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4wOCk7XG4gICAgb3BhY2l0eTogMC44NTtcbiAgfVxufVxuXG4uY3JzLXJlZWxfX2V4cGFuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIGNvbG9yOiAjMTkxOTE5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgb3BhY2l0eSAwLjJzO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY3JzLXJlZWw6bm90KC5pcy1wbGF5aW5nKSAuY3JzLXJlZWxfX2V4cGFuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3JzLXJlZWxfX2V4cGFuZCBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNycy1yZWVsX19leHBhbmQgc3ZnIHBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLmNycy1yZWVsX19leHBhbmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cblxuLmNycy1wZHAtcmVlbHNfX25hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jcnMtcGRwLXJlZWxzX19hcnJvdyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uY3JzLXBkcC1yZWVsc19fYXJyb3cgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5jcnMtcGRwLXJlZWxzX19hcnJvdyBzdmcgcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzE5MTkxOTtcbn1cblxuLmNycy1wZHAtcmVlbHNfX2Fycm93LS1uZXh0IHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLmNycy1wZHAtcmVlbHNfX2Fycm93OmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuLmNycy1wZHAtcmVlbHNfX2RvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jcnMtcGRwLXJlZWxzX19kb3Qge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTE5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4uY3JzLXBkcC1yZWVsc19fZG90LmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxOTE5MTk7XG59XG5cbi5jcnMtbGlnaHRib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2NHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbn1cblxuLmNycy1saWdodGJveC0tb3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uY3JzLWxpZ2h0Ym94IC5jcnMtbGlnaHRib3hfX292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxuLmNycy1saWdodGJveF9fc3RhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uY3JzLWxpZ2h0Ym94IHZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNycy1saWdodGJveF9fc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNycy1saWdodGJveF9fc3Bpbm5lci5pcy1hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYW5pbWF0aW9uOiBjcnMtc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBjcnMtc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uY3JzLWxpZ2h0Ym94X19hcnJvdyxcbi5jcnMtbGlnaHRib3hfX2Nsb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5jcnMtbGlnaHRib3hfX2Fycm93IHtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogNDlweDtcbn1cblxuLmNycy1saWdodGJveF9fYXJyb3cgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG5cbi5jcnMtbGlnaHRib3hfX2Fycm93LS1uZXh0IHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmNycy1saWdodGJveF9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ0cHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uY3JzLWxpZ2h0Ym94X19jbG9zZSBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmNycy1saWdodGJveF9fYXJyb3cgc3ZnIHBhdGgsXG4uY3JzLWxpZ2h0Ym94X19jbG9zZSBzdmcgcGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuXG4gIC5jcnMtbGlnaHRib3hfX2Fycm93OmhvdmVyLFxuICAuY3JzLWxpZ2h0Ym94X19jbG9zZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0OXB4KSB7XG4gIC5jcnMtZ2lmdF9fZGVzYyBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5pbnN0YWxsbWVudC5jYXB0aW9uLWxhcmdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgc2hvcGlmeS1wYXltZW50LXRlcm1zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94IHtcbiAgICBnYXA6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jcnMtbGlnaHRib3hfX3N0YWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94IHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmNycy1saWdodGJveF9fYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuXG4gIC5jcnMtbGlnaHRib3hfX2Fycm93LS1wcmV2IHtcbiAgICBsZWZ0OiA4cHg7XG4gIH1cblxuICAuY3JzLWxpZ2h0Ym94X19hcnJvdy0tbmV4dCB7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jcnMtbGlnaHRib3hfX2Nsb3NlIHtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogOHB4O1xuICB9XG59XG5cbi5jcnMtaG93dG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jcnMtYWNjZW50LXNvZnQpO1xufVxuXG4uY3JzLWhvd3RvX190aXRsZSB7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50LXRleHQpO1xufVxuXG4uY3JzLWhvd3RvX19tYWRlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFkZWU3O1xufVxuXG4uY3JzLWhvd3RvIHAge1xuICBtYXJnaW46IDAgMCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuLmNycy1ob3d0b19fbm90ZSAuY3JzLWlubGluZS1saW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiBmcm9tLWZvbnQ7XG59XG5cbi5jcnMtc3RlcF9fa2l0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiBmcm9tLWZvbnQ7XG59XG5cbi5jcnMtc3RlcF9fa2l0OmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY3JzLWhvd3RvIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jcnMtaG93dG8gLmNycy1ob3d0b19fbm90ZSB7XG4gIG1hcmdpbjogMTZweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI2cHg7XG4gIGNvbG9yOiByZ2JhKDI1LCAyNSwgMjUsIDAuNyk7XG59XG5cbi5jcnMtc3RlcHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jcnMtc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbi5jcnMtc3RlcCsuY3JzLXN0ZXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jcnMtc3RlcF9fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHRvcDogLTE2cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmNycy1zdGVwX19hcnJvdyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNycy1zdGVwX19udW0ge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMzcsIDk3LCAwLjEpO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLW51bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMtc3RlcF9faWNvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC02cHg7XG59XG5cbi5jcnMtc3RlcF9faWNvbiBzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3JzLXN0ZXBfX3RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuLmNycy1zdGVwX190ZXh0IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcnMtaW5saW5lLWxpbmsge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY3JzLXRodW1icyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuXG4uY3JzLWNyZWF0ZWQtc2xvdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qXG4gKiBcIkZyZWUgQ29sbGVjdGlvbiBLaXRcIiByb3cgb3ZlciB0aGUgYm90dG9tIG9mIHRoZSBtYWluIGltYWdlLiBBYm92ZSB0aGUgdGhlbWUncyB6b29tXG4gKiBvdmVybGF5LCB3aGljaCBwYWludHMgb3ZlciB6LWluZGV4IDEgYW5kIHdvdWxkIHN3YWxsb3cgdGhlIGNsaWNrLlxuICovXG4uY3JzLXBkcCAuY3JzLWtpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgcmlnaHQ6IDI0cHg7XG4gIGJvdHRvbTogMTZweDtcbiAgbGVmdDogMjRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbn1cblxuLyogVGhlIGZpcnN0IHNsaWRlIGlzIHdoYXQgdGhlIHJvdyBpcyBwb3NpdGlvbmVkIGFnYWluc3Qgb24gZGVza3RvcC4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5jcnMtcHJvZHVjdCAucHJvZHVjdF9fbWVkaWEtbGlzdD5saTpmaXJzdC1jaGlsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLyogVGhlIHRoZW1lIHNpemVzIHRoZSBpbWFnZSBvZmYgdGhlIHdpbmRvdyBoZWlnaHQgKG1heCg1MDBweCwgMTAwdmggLSAxNzBweCkpLCBzbyBhXG4gICAgIHNob3J0IHdpbmRvdyBzaHJpbmtzIGl0IGJlbG93IHRoZSBjb2x1bW4uIFRoZSBkZXNpZ24gd2FudHMgaXQgYXMgd2lkZSBhcyB0aGUgY29sdW1uLiAqL1xuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3QtbWVkaWEtY29udGFpbmVyLmNvbnN0cmFpbi1oZWlnaHQubWVkaWEtZml0LWNvbnRhaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0LW1lZGlhLWNvbnRhaW5lci5jb25zdHJhaW4taGVpZ2h0IC5tZWRpYSB7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLXJhdGlvLXBlcmNlbnQpO1xuICB9XG59XG5cbi5jcnMta2l0X19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4IDZweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY3LCAzNywgOTcsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwIDE3cHggMy41cHggcmdiYSgwLCAwLCAwLCAwLjAxKTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JzLWtpdF9fdGh1bWIge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NywgMzcsIDk3LCAwLjEpO1xufVxuXG4uY3JzLWtpdF9fcGFjayxcbi5jcnMta2l0X19jaGV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uY3JzLWtpdF9fdGV4dCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcHg7XG59XG5cbi5jcnMta2l0X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuXG4uY3JzLWtpdF9fdGl0bGUgYiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1jcnMtYWNjZW50LXRleHQpO1xufVxuXG4uY3JzLWtpdF9fc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6IHJnYmEoMjUsIDI1LCAyNSwgMC43KTtcbn1cblxuLmNycy1raXRfX2xpbmsge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMta2l0X19saW5rLXRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IGZyb20tZm9udDtcbn1cblxuLmNycy1raXRfX2NoZXYtbGcge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4OiBub25lO1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmNycy1raXRfX3RpcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgMTFweCk7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4IDE0cHggMTRweCAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1LCAyNSwgMjUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggMTJweCByZ2JhKDUxLCAxMywgMzEsIDAuMTYpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuXG4uY3JzLWtpdF9fdGlwLmlzLW9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jcnMta2l0X190aXAtdGV4dCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLyogT25seSBtb2JpbGUgaGFzIGEgY2xvc2UgYnV0dG9uIOKAlCB0aGVyZSB0aGUgdG9vbHRpcCBoYXMgbm8gbGluayB0byB0b2dnbGUgaXQgZnJvbS4gKi9cbi5jcnMta2l0X19jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXg6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNycy1raXRfX3RpcCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jcnMta2l0X190aXAgLmNycy1raXRfX3RpcC1ub3RlIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzVlNWU1ZTtcbn1cblxuLmNycy1raXRfX3RpcC1ub3RlIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFBvaW50ZXI6IGEgc3F1YXJlIHR1cm5lZCA0NWRlZywgc28gb25seSBpdHMgbG93ZXIgaGFsZiBzaG93cyBiZWxvdyB0aGUgYm9keSDigJQgYW5kIGl0c1xuICAgb3duIHdoaXRlIGZpbGwgaGlkZXMgdGhlIGJvZHkncyBib3JkZXIgd2hlcmUgdGhleSBtZWV0LiBDZW50cmVkIG9uIHRoZSBsaW5rLiAqL1xuLmNycy1raXRfX3RpcDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjFweDtcbiAgYm90dG9tOiAtNnB4O1xuICB3aWR0aDogMTEuM3B4O1xuICBoZWlnaHQ6IDExLjNweDtcbiAgbWFyZ2luLXJpZ2h0OiAyLjM1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjUsIDI1LCAyNSwgMC4wOCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1LCAyNSwgMjUsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi8qIE92ZXIgdGhlIGxpbmsgaW4gdGhlIEhvdy10by1vcmRlciBzdGVwIGluc3RlYWQ6IHBsYWNlZCBieSBzY3JpcHQsIGFycm93IGZvbGxvd3MgaXQuICovXG4uY3JzLWtpdF9fdGlwLS1hbmNob3JlZCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY3JzLWtpdF9fdGlwLS1hbmNob3JlZDo6YWZ0ZXIge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogdmFyKC0tYXJyb3cteCk7XG4gIG1hcmdpbjogMCAwIDAgLTUuNjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcbiAgLmNycy1wZHAgLmNycy1raXQge1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGxlZnQ6IDE2cHg7XG4gIH1cblxuICAuY3JzLWtpdF9fcm93IHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm94LXNoYWRvdzogN3B4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgfVxuXG4gIC5jcnMta2l0X19saW5rIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNycy1raXRfX2NoZXYtbGcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNycy1raXRfX3RpcDpub3QoLmNycy1raXRfX3RpcC0tYW5jaG9yZWQpIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLmNycy1raXRfX2Nsb3NlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jcnMta2l0X190aXA6bm90KC5jcnMta2l0X190aXAtLWFuY2hvcmVkKTo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxMnB4O1xuICB9XG59XG5cbi5jcnMtZ2FsbGVyeV9faGludCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmNGY3O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNmU0ZTU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLypcbiAqIFRoZSB0aGVtZSdzIHpvb20gdHJpZ2dlciBjb3ZlcnMgdGhlIHdob2xlIG1lZGlhIHdpdGggYSB0cmFuc3BhcmVudCBvdmVybGF5IHRoYXRcbiAqIHBhaW50cyBhYm92ZSB6LWluZGV4IDEg4oCUIGFuIGFycm93IGF0IDEgaXMgdmlzaWJsZSBidXQgbmV2ZXIgcmVjZWl2ZXMgdGhlIHRhcC5cbiAqL1xuLmNycy1nYWxsZXJ5X19hcnJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uY3JzLWdhbGxlcnlfX2Fycm93LS1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLmNycy1nYWxsZXJ5X19hcnJvdy0tbmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY3JzLWdhbGxlcnlfX2Fycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuXG4vKiBUaGUgZXhwb3J0ZWQgY2hldnJvbiBwb2ludHMgcmlnaHQsIHNvIG9ubHkgdGhlIGJhY2sgYXJyb3cgaXMgbWlycm9yZWQuICovXG4uY3JzLWdhbGxlcnlfX2Fycm93LS1uZXh0IHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmNycy1nYWxsZXJ5X19hcnJvdzpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAuY3JzLWdhbGxlcnlfX2Fycm93Om5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgLmNycy1wcm9kdWN0IC5wcm9kdWN0X19tZWRpYS1saXN0IHtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3RfX21lZGlhLWxpc3Q+bGk6Zmlyc3QtY2hpbGQge1xuICAgIGZsZXg6IDAgMCA1ODBweDtcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3RfX21lZGlhLWxpc3Q+LmNycy1jcmVhdGVkLXNsb3Qge1xuICAgIGZsZXg6IDAgMCA1MjBweDtcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByb2R1Y3RfX21lZGlhLWxpc3Q+LnByb2R1Y3RfX21lZGlhLWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICB9XG59XG5cbi5jcnMtdGh1bWJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcnMtdGh1bWIge1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jcnMtbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JzLXRodW1iLmlzLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY3JzLWFjY2VudCk7XG59XG5cbi5jcnMtdGh1bWIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLWNyZWF0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jcnMtY3JlYXRlZCBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcnMtY3JlYXRlZCAuaWNvbnNfYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAwO1xufVxuXG4uY3JzLWNyZWF0ZWQgLmNwaV9pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcnMtY3JlYXRlZCAuY3BpX2ljb25zIGltZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWFjY2VudC1zb2Z0KTtcbn1cblxuLmNycy1jcmVhdGVkIC5jcGlfaWNvbnMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMxOTE5MTk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jcnMtY3JlYXRlZF9fY2FwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY3JzLWxpbmUpO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOS41cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjg0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG5cbmJvZHkuY3JzLWRyYXdlci1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNycy1kcmF3ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ2O1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWRyYXdlcl9fb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41Nyk7XG59XG5cbi5jcnMtZHJhd2VyX19kaWFsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cblxuLmNycy1kcmF3ZXItLW9wZW4gLmNycy1kcmF3ZXJfX2RpYWxvZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNycy1kcmF3ZXJfX2hlYWQge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uY3JzLWRyYXdlcl9fdGl0bGUge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtZHJhd2VyX19jbG9zZSB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtZHJhd2VyX19jbG9zZSBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmNycy1kcmF3ZXJfX2Nsb3NlIHN2ZyBwYXRoIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gIHN0cm9rZS13aWR0aDogMS42O1xufVxuXG4uY3JzLWRyYXdlcl9fYm9keSxcbi5jcnMtZHJhd2VyX19ib2R5Pi5jcnMtcnRlLFxuLmNycy1kcmF3ZXJfX2JvZHk+LmNycy1yZW1vdGUsXG4uY3JzLWRyYXdlcl9fYm9keT4uY3JzLXJlbW90ZT4uY3JzLXJ0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmNycy1kcmF3ZXJfX2JvZHk+Kixcbi5jcnMtZHJhd2VyX19ib2R5Pi5jcnMtcnRlPiosXG4uY3JzLWRyYXdlcl9fYm9keT4uY3JzLXJlbW90ZT4qLFxuLmNycy1kcmF3ZXJfX2JvZHk+LmNycy1yZW1vdGU+LmNycy1ydGU+KiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNycy1kcmF3ZXJfX2ludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY3JzLWRyYXdlcl9faW50cm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43NSk7XG59XG5cbi5jcnMtbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3JzLWFjY2VudC10aW50KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWFjY2VudC10ZXh0KTtcbn1cblxuLmNycy1ydGUgaDMsXG4uY3JzLXJ0ZV9faCB7XG4gIG1hcmdpbjogMjBweCAwIDZweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtcnRlIHAsXG4uY3JzLXJ0ZSBsaSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtbXV0ZWQpO1xufVxuXG4uY3JzLXJ0ZSBhIHtcbiAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQtdGV4dCk7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtbm90ZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTY3LCAzNywgOTcsIDAuMDUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI2E3MjU2MTtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1ydGUgaDMsXG4uY3JzLWRyYXdlciAuY3JzLXJ0ZV9faCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjAuOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1ydGUgcCxcbi5jcnMtZHJhd2VyIC5jcnMtcnRlIGxpLFxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX3BhbmVsIHAsXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fcGFuZWwgbGkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAwLjc1KTtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX2l0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MyYmZiZjtcbn1cblxuLmNycy1kcmF3ZXIgLmNycy1hY2NvcmRfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19zaWduIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19zaWduOjpiZWZvcmUsXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fc2lnbjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9fc2lnbiBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19zaWduIHN2ZyBwYXRoIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG59XG5cbi5jcnMtZHJhd2VyIC5jcnMtYWNjb3JkX19oZWFkW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSAuY3JzLWFjY29yZF9fc2lnbiBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY3JzLWRyYXdlciAuY3JzLWFjY29yZF9faGVhZCB7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMC44cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5ib2R5LmNycy1wZHAgLnNlY3Rpb24taGVhZGVyLmN1c3Rfbm90aSB7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuYm9keS5jcnMtcGRwOmhhcyguc2VjdGlvbi1oZWFkZXIuY3VzdF9ub3RpKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMge1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5tb2RhbC1oZWFkZXItYW1vciBoMyB7XG5cbiAgbWFyZ2luOiAxNXB4IDAgMTZweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNycy1pbmspO1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5tb2RhbC1oZWFkZXItYW1vciBidXR0b24uY2xvc2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbn1cblxuYm9keS5jcnMtcGRwICNjdXN0b21fbm90aWZpY2F0aW9ucyAubW9kYWwtaGVhZGVyLWFtb3IgYnV0dG9uLmNsb3NlIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5ib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIC5tb2RhbC1oZWFkZXItYW1vciBidXR0b24uY2xvc2Ugc3ZnIHBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgc3Ryb2tlLXdpZHRoOiAxLjY7XG59XG5cbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMgLmhlYWRlci1kZXNjcmlwdGlvbixcbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMgLnBhbmVsLWJvZHkgcC5mczE0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCAxOCwgMC43NSk7XG59XG5cbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMgLmFjY29yZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbmJvZHkuY3JzLXBkcCAjY3VzdG9tX25vdGlmaWNhdGlvbnMgLmFjY29yZC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjAuOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcbiAgcHJvZHVjdC1pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNycy1wZHAgc2VjdGlvbi5jcnMtaW5mby5wcm9kdWN0X19pbmZvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIycHg7XG4gIH1cblxuICAuY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS12ZXJpZmllZEJhZGdlLXByZVRleHROdW1iZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gIH1cblxuICAuY3JzLXBkcCAuY3JzLWluZm8+LnByb2R1Y3RfX3RpdGxlIHtcbiAgICBnYXA6IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY3JzLXByb2R1Y3QgLnByaWNlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuY3JzLWluZm8gLmZlcmEtc3RvcmVSZXZpZXdzU3VtbWFyeS1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jcnMtaW5mbyAucHJvZHVjdF9fdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPltpZF49J3ByaWNlLSddIHtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgfVxuXG4gIC5jcnMtcHJvZHVjdCAucHJpY2UgLnByaWNlLWl0ZW0tLXNhbGUsXG4gIC5jcnMtcHJvZHVjdCAucHJpY2UgLnByaWNlLWl0ZW0tLXJlZ3VsYXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5jcnMtcHJvZHVjdCAucHJpY2VfX3NhbGUgcy5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgfVxuXG4gIC5jcnMtcHJvZHVjdCAucHJpY2VfX2JhZGdlLXNhbGUge1xuICAgIGNvbG9yOiAjMjg5MTYwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogSm9zdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDE2NywgNjksIDAuMTApO1xuICB9XG5cbiAgLmNycy1tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNycy1jcmVhdGVkIHtcbiAgICBvcmRlcjogNDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luOiAwIC0xLjVyZW0haW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNycy1hY2NlbnQtdGludCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTY3LCAzNywgOTcsIDAuMTIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2NywgMzcsIDk3LCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUzLCAyMDEsIDAuMDUpO1xuICB9XG5cbiAgLmNycy1jcmVhdGVkX19jYXB0aW9uIHtcbiAgICBjb2xvcjogI0E3MjU2MTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuY3JzLWNyZWF0ZWQgaDMge1xuICAgIGNvbG9yOiAjMTkxOTE5O1xuICAgIGZvbnQtZmFtaWx5OiBKb3N0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOS41cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLmNycy1jcmVhdGVkIC5pY29uc19ib3gge1xuICAgIGdhcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jcnMtY3JlYXRlZCAuY3BpX2ljb25zIGltZyB7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuY3JzLWNyZWF0ZWQgLmNwaV9pY29ucyBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5jcnMtbWVkaWEgLnByb2R1Y3RfX21lZGlhLWxpc3Quc2xpZGVyLS1tb2JpbGUge1xuICAgIHBhZGRpbmctaW5saW5lOiAwO1xuICAgIHNjcm9sbC1wYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuY3JzLW1lZGlhIC5wcm9kdWN0X19tZWRpYS1saXN0LnNsaWRlci0tbW9iaWxlPi5wcm9kdWN0X19tZWRpYS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY3JzLW1lZGlhIC5wcm9kdWN0X19tZWRpYS1saXN0LnNsaWRlci0tbW9iaWxlIC5wcm9kdWN0LW1lZGlhLWNvbnRhaW5lci5jb25zdHJhaW4taGVpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jcnMtbWVkaWEgc2xpZGVyLWNvbXBvbmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNycy1nYWxsZXJ5X19oaW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jcnMtZ2FsbGVyeV9fYXJyb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY3JzLXRodW1icyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAuY3JzLXRodW1iIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cblxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy1vcHRpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5jcnMtb3B0aW9ucyB7XG4gICAgZ2FwOiAzMnB4O1xuICB9XG5cbiAgLmNycy1vcHQtaGVhZF9fbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxOS41cHg7XG4gIH1cblxuICAuY3JzLW9wdC1oZWFkX192YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG4gICAgY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICB9XG5cbiAgLmNycy1ndWlkZS1saW5rIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjZweDtcbiAgfVxuXG4gIC5jcnMtb3B0X19saXN0LS1zd2F0Y2hlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW46IDAgLTEuNXJlbTtcbiAgICBwYWRkaW5nOiAycHggMS41cmVtO1xuICB9XG5cbiAgLmNycy1vcHRfX2xpc3QtLXNpemVzIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW46IDAgLTEuNXJlbTtcbiAgICBwYWRkaW5nOiAycHggMS41cmVtO1xuICB9XG5cbiAgLmNycy1vcHRfX2xpc3QtLXN3YXRjaGVzOjotd2Via2l0LXNjcm9sbGJhcixcbiAgLmNycy1vcHRfX2xpc3QtLXNpemVzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jcnMtc3dhdGNoIHtcbiAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIHBhZGRpbmc6IDEycHggNHB4O1xuICB9XG5cbiAgLmNycy1zd2F0Y2hfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbiAgfVxuXG4gIC5jcnMtYWNjb3JkX19pdGVtIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtZ2lmdCB7XG4gICAgLyogb3JkZXI6IDkhaW1wb3J0YW50OyAqL1xuICB9XG5cbiAgLmNycy1naWZ0IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE0cHg7XG4gIH1cblxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy10cnVzdCB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jcnMtdHJ1c3Qge1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5jcnMtdHJ1c3RfX2ljb24ge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWhlbHAge1xuICAgIG1hcmdpbjogMTZweCAtMS41cmVtIDA7XG4gICAgcGFkZGluZzogMTZweCAxLjVyZW0gMDtcbiAgfVxuXG4gIC5jcnMtaGVscCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jcnMtbXV0ZWQpO1xuICB9XG5cbiAgLmNycy1oZWxwIGEge1xuICAgIGNvbG9yOiAjNTc1NzU3O1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5jcnMtYWNjb3JkX19oZWFkIHtcbiAgICBwYWRkaW5nOiAxOHB4IDA7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICB9XG5cbiAgLmNycy1hY2NvcmRfX3BhbmVsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgfVxuXG4gIC5jcnMtZGV0YWlsc19fbGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMy44cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzZiNWY2NDtcbiAgfVxuXG4gIC5jcnMtZGV0YWlsc19fdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tY3JzLWFjY2VudCk7XG4gIH1cblxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy1wZHAtcmVlbHMsXG4gIC5jcnMtcGRwIC5jcnMtaW5mbz4uY3JzLWhvd3RvIHtcbiAgICBtYXJnaW4taW5saW5lOiAtMS41cmVtO1xuICB9XG5cbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtcGRwLXJlZWxzLFxuICAuY3JzLXBkcCAuY3JzLWluZm8+LmNycy1ob3d0byxcbiAgLmNycy1wZHAgLmNycy1pbmZvPi5jcnMtYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNycy1wZHAtcmVlbHMsXG4gIC5jcnMtaG93dG8ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuY3JzLXBkcC1yZWVsc19faGVhZCB7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cblxuICAuY3JzLXBkcC1yZWVsc19fdGl0bGUge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgfVxuXG4gIC5jcnMtcGRwLXJlZWxzX19zdWJ0aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAyODlweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjhweDtcbiAgfVxuXG4gIC5jcnMtaG93dG8ge1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmMmY1O1xuICB9XG5cbiAgLmNycy1ob3d0b19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuY3JzLWhvd3RvX19tYWRlIC5jcnMtaG93dG9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmNycy1ob3d0byAuY3JzLWhvd3RvX19ub3RlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xuICB9XG5cbiAgLmNycy1ob3d0b19fbWFkZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5jcnMtc3RlcF9faWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICBib2R5LmNycy1wZHAgI2N1c3RvbV9ub3RpZmljYXRpb25zIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbiNzYXRjYl9iYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHk6aGFzKC5jcnMtc3RpY2t5LmlzLXZpc2libGU6bm90KC5pcy1zdXNwZW5kZWQpKSA6aXMoI2NoYXQtYnV0dG9uLCAjbW91bnQtZmxvYXRpbmctZW5nYWdlbWVudC13aWRnZXQpIHtcbiAgYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5OmhhcyguY3JzLXN0aWNreS5oYXMtcG9wb3ZlcikgOmlzKCNjaGF0LWJ1dHRvbiwgI21vdW50LWZsb2F0aW5nLWVuZ2FnZW1lbnQtd2lkZ2V0KSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keTpoYXMoLmNycy1zdGlja3kuaXMtdmlzaWJsZTpub3QoLmlzLXN1c3BlbmRlZCkpIDppcygjY2hhdC1idXR0b24sICNtb3VudC1mbG9hdGluZy1lbmdhZ2VtZW50LXdpZGdldCkge1xuICAgIGJvdHRvbTogOTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAuY3VzdG9tUHJvZHVjdEltYWdlIC5jcGlfaWNvbnMge1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWwhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jcnMtc3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtODFweDtcbiAgei1pbmRleDogMjE0NzQ4MzYyMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMjVzIGVhc2U7XG59XG5cbi5jcnMtc3RpY2t5LmlzLXZpc2libGUge1xuICBib3R0b206IDA7XG59XG5cbi5jcnMtc3RpY2t5LmlzLXZpc2libGUuaXMtc3VzcGVuZGVkIHtcbiAgYm90dG9tOiAtODFweDtcbn1cblxuLmNycy1zdGlja3kgLmNycy1zdGlja3lfX2JhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDgxcHg7XG59XG5cbi5jcnMtc3RpY2t5Lmhhcy1wb3BvdmVyIC5jcnMtc3RpY2t5X19iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3JzLXN0aWNreV9faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1heC13aWR0aDogMTI3N3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufVxuXG4uY3JzLXN0aWNreV9fdGh1bWIge1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY3JzLXN0aWNreV9fdGl0bGUge1xuICBmbGV4OiAxIDAgMDtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtc3RpY2t5X19jb250cm9scyB7XG4gIGZsZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmNycy1zdGlja3lfX3BpY2tlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5jcnMtc3RpY2t5X19waWNrZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNycy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI4cHg7XG4gIGNvbG9yOiB2YXIoLS1jcnMtaW5rKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzO1xufVxuXG4uY3JzLXN0aWNreV9fdHJpZ2dlcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY3JzLWFjY2VudCk7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLmlzLW9wZW4ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNycy1hY2NlbnQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tY3JzLWFjY2VudCk7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLS1zd2F0Y2gge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jcnMtc3RpY2t5X190cmlnZ2VyLS1zaXplIHtcbiAgd2lkdGg6IDU2cHg7XG4gIG1pbi13aWR0aDogNTZweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNycy1zdGlja3lfX2RvdCB7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNycy1zdGlja3lfX3RyaWdnZXItbGFiZWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNycy1zdGlja3lfX3BvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGNhbGMoMTAwJSArIDE0cHgpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogbWluKDU2MHB4LCBjYWxjKDEwMHZ3IC0gMzJweCkpO1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAvKiBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47ICovXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAtOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNycy1zdGlja3lfX2Nsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNycy1zdGlja3lfX2N0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZmxleDogMSAwIDA7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jcnMtYWNjZW50KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNycy1zdGlja3lfX2N0YTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiAjOGUxZTUzO1xufVxuXG4uY3JzLXN0aWNreV9fY3RhW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcblxuICAuY3JzLXN0aWNreV9fdGh1bWIsXG4gIC5jcnMtc3RpY2t5X190aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19pbm5lcixcbiAgLmNycy1zdGlja3lfX2NvbnRyb2xzLFxuICAuY3JzLXN0aWNreV9fcGlja2VycyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNycy1zdGlja3lfX3RyaWdnZXItLXN3YXRjaCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fZG90IHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fY3RhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjg0cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG5cbiAgLmNycy1zdGlja3lfX2N0YS1zZXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY3JzLXN0aWNreV9fcG9wb3ZlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiA4MXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDhweCAxLjVyZW0gMjBweDtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAwIC04cHggMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5X19jbG9zZSBzdmcgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgICBzdHJva2Utd2lkdGg6IDEuNjtcbiAgfVxuXG4gIC5jcnMtc3RpY2t5IC5jcnMtc3RpY2t5X19iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU3KTtcbiAgfVxuXG4gIGJvZHkuY3JzLXBkcDpoYXMoLmNycy1zdGlja3kuaGFzLXBvcG92ZXIpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5cbi5pbnN0YWxsbWVudC5jYXB0aW9uLWxhcmdlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLyogQm90dG9tIG9mIHRoZSBwYWdlIOKAlCB0aGUgRmVyYSByZXZpZXdzIHdpZGdldCBhbmQgdGhlIHRoZW1lJ3MgXCJZb3UgbWF5IGFsc28gbGlrZVwiXG4gICBncmlkLCBib3RoIGluc2lkZSA8cHJvZHVjdC1yZWNvbW1lbmRhdGlvbnM+LiBFdmVyeXRoaW5nIGhlcmUgcmVzdHlsZXMgaG9zdCBtYXJrdXAsXG4gICBzbyBpdCBoYW5ncyBvZmYgLmNycy1yZWNzOiAucHJpY2UsIC5iYWRnZSBhbmQgLmNhcmRfX2NvbnRlbnQgYXJlIGFsc28gdGhlIGJ1eSBib3gnc1xuICAgYW5kIHRoZSB0aGVtZSdzIG93biBjbGFzc2VzIGVsc2V3aGVyZSBvbiB0aGUgc2l0ZS4gKi9cblxuLyogRmVyYSB3cml0ZXMgaXRzIG93biBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgYWZ0ZXIgb3VycywgYW5kIHN0eWxlcyB0aGVzZSBlbGVtZW50c1xuICAgd2l0aCBvbmUgY2xhc3Mgb2YgaXRzIG93biAoYC5mZXJhLXJldmlld3MtbWFzb25yeSAuZmVyYS1yZXZpZXctaGVhZGluZ2ApIOKAlCB0aGUgc2FtZVxuICAgc3BlY2lmaWNpdHkgb3VyIGAuY3JzLXJlY3Mg4oCmYCB3b3VsZCBoYXZlLCBzbyBldmVyeSB0aWUgd2VudCB0byBGZXJhLiBgLmNycy1wZHBgIG9uXG4gICA8Ym9keT4gYnJlYWtzIHRoZSB0aWUgZm9yIHRoZSB3aG9sZSB3aWRnZXQgd2l0aG91dCBhbiAhaW1wb3J0YW50LiAqL1xuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXIsXG4uY3JzLXJlY3MgLnJlbGF0ZWQtcHJvZHVjdHNfX2hlYWRpbmcge1xuICBtYXJnaW46IDAgMCAzMnB4O1xuICBwYWRkaW5nOiAwIDAgMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlci10aXRsZSxcbi5jcnMtcmVjcyAucmVsYXRlZC1wcm9kdWN0c19faGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtaGVhZCk7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDUwLjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyLXJvdzIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItcm93MiAuZmVyYS1yb3csXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeSB7XG4gIGdhcDogNXB4O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXItc3VtbWFyeS1yYXRpbmctY29udGFpbmVyIHtcbiAgZ2FwOiAxMnB4O1xufVxuXG4vKiBUd28gbW9yZSBsaW5rcyBpbiB0aGUgY2hhaW4gdGhhbiBlbHNld2hlcmUgaW4gdGhpcyBibG9jazogZm9yIHRoZSByYXRpbmcgcm93IEZlcmFcbiAgIHF1YWxpZmllcyB3aXRoIGAuZmVyYS1yZXZpZXdzLW1hc29ucnkgLmZlcmEtcmV2aWV3cy1oZWFkZXIgLuKApmAg4oCUIHRocmVlIGNsYXNzZXMsIHNvXG4gICBgLmNycy1wZHAgLmNycy1yZWNzIC7igKZgIG9ubHkgdGllZC4gSXRzIGVtLWJhc2VkIG1hcmdpbnMgYXJlIHplcm9lZCBhcyB3ZWxsLCBvciB0aGV5XG4gICB3b3VsZCBzdGFjayBvbiB0b3Agb2YgdGhlIGdhcHMgdGhlIGRlc2lnbiBzZXRzLiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXJldmlld3MtYXZnUmF0aW5nLW51bWJlciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuLyogVGhlIHN0YXJzIGFyZSDimIUgZ2x5cGhzIOKAlCB0aGVpciBzaXplIGlzIGEgZm9udCBzaXplLCBhbmQgdGhlaXIgc3BhY2luZyBhIGxldHRlclxuICAgc3BhY2luZywgd2hpY2ggYWxzbyBsZWF2ZXMgYSB0cmFpbGluZyBnYXAgYWZ0ZXIgdGhlIGxhc3Qgc3RhciB0byBwdWxsIGJhY2suIEZlcmEgc2l6ZXNcbiAgIHRoZSBnb2xkIG92ZXJsYXkgdGhhdCBjbGlwcyB0aGVtIGluIHBpeGVscywgYnV0IGl0IG1lYXN1cmVzIHRoZSByb3cgYWZ0ZXIgdGhpcyBydWxlXG4gICBsYW5kcywgc28gcGFydGlhbCByYXRpbmdzIHN0YXkgaG9uZXN0LiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzLXJhdGluZyxcbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlciAuZmVyYS1zdGFycy1iZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjdweDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtaGVhZGVyIC5mZXJhLXN0YXJzIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMi43cHg7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlciAuZmVyYS1yZXZpZXdzLWNvdW50LXN0ciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1ib2R5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LWRhdGUtdmFsLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1oZWFkaW5nLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1ib2R5LFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1jdXN0b21lci1uYW1lLFxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1wcm9kdWN0LWxpbmssXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3QtbmFtZSxcbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLXNob3dNb3JlLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1jcnMtYm9keSk7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI1LjJweDtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctYm9keSB7XG4gIGNvbG9yOiAjNmI1ZjY0O1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LWN1c3RvbWVyLW5hbWUsXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3QtdGV4dC1jb250YWluZXIgLmZlcmEtcmV2aWV3LXByb2R1Y3QtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXctcHJvZHVjdC10ZXh0LWNvbnRhaW5lciAuZmVyYS1yZXZpZXctcHJvZHVjdC1saW5rIHtcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcbn1cblxuLyogVGhlIGRlc2lnbiBsYXlzIHRoZSByZXZpZXdzIG91dCBhcyBhIHBsYWluIGdyaWQgb2YgZXF1YWwgY2FyZHMsIG5vdCBGZXJhJ3MgbWFzb25yeS5cbiAgIEZlcmEgcG9zaXRpb25zIHRoZSBjYXJkcyBpdHNlbGY6IGBwb3NpdGlvbjogYWJzb2x1dGVgIGNvbWVzIGZyb20gaXRzIHN0eWxlc2hlZXQsIGJ1dFxuICAgdGhlIHBlci1jYXJkIHdpZHRoIGFuZCB0cmFuc2Zvcm0sIGFuZCB0aGUgY29udGFpbmVyJ3MgaGVpZ2h0LCBhcmUgaW5saW5lIHN0eWxlcyBpdFxuICAgcmVjb21wdXRlcyBvbiBldmVyeSByZWxheW91dCDigJQgdGhvc2UgYXJlIHRoZSB0aHJlZSBkZWNsYXJhdGlvbnMgdGhhdCBuZWVkICFpbXBvcnRhbnRcbiAgIHRvIGhvbGQuIEl0cyBjbGFzc2VzIGFyZSBsZWZ0IGFsb25lOiB0aGUgY2FyZCdzIGZyYW1lIGFuZCBzaGFkb3cgaGFuZyBvZmZcbiAgIGAuZmVyYS1yZXZpZXdzLW1hc29ucnlgLiAqL1xuLyogYG1pbm1heCgwLCDigKYpYCwgbm90IGEgYmFyZSBgMWZyYDogdGhlIGZvb3RlciByb3cgaW5zaWRlIGEgY2FyZCBpcyBhIGZsZXggcm93IHdpdGggYVxuICAgNDBweCB0aHVtYm5haWwgYW5kIGEgcHJvZHVjdCBuYW1lLCBhbmQgaXRzIG1pbi1jb250ZW50IHdpZHRoIHdvdWxkIG90aGVyd2lzZSBob2xkIHRoZVxuICAgdHJhY2sgb3BlbiBhbmQgcHVzaCB0aGUgcGFnZSBpbnRvIGEgaG9yaXpvbnRhbCBzY3JvbGwgb24gYSBwaG9uZS4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1tYXNvbnJ5LWl0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgZ2FwOiAxOHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLW1hc29ucnktaXRlbXM+LmZlcmEtcmV2aWV3IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIFJvd3Mgc3RyZXRjaCBldmVyeSBjYXJkIHRvIHRoZSB0YWxsZXN0IGluIHRoZSByb3csIHNvIHRoZSBmb290ZXIgaXMgcHVzaGVkIGRvd24gdG9cbiAgIGtlZXAgdGhlIGJvcmRlcmVkIFwiVmlldyBwcm9kdWN0XCIgc3RyaXAgb24gdGhlIGJvdHRvbSBlZGdlIHdoZXJlIHRoZSBkZXNpZ24gaGFzIGl0LiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy1tZWRpYSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4uY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3LXByb2R1Y3Qge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4vKiBGZXJhJ3MgcGFnZSBzaXplIGlzIDksIHdoaWNoIG5ldmVyIGZpbGxzIGEgcm93IOKAlCB0aGUgcmVtYWluZGVyIGlzIGhpZGRlbiBzbyB0aGUgZ3JpZFxuICAgZW5kcyBzcXVhcmUuIERlc2t0b3Agb3BlbnMgb24gZXhhY3RseSB0aGUgOCBjYXJkcyBvZiB0aGUgZGVzaWduLiAqL1xuLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlldy5jcnMtcmVjcy1vdmVyZmxvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9uZSBjYXJkIGFjcm9zcyBvbiBwaG9uZXMsIGFzIEZlcmEgaXRzZWxmIHJlbmRlcnMgdGhlcmU7IGZvdXIgb24gZGVza3RvcCwgcGVyIHRoZVxuICAgZGVzaWduLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLW1hc29ucnktaXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAuY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtbWFzb25yeS1pdGVtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbi8qIFJldmlld3MgZ3JpZCDihpIgXCJTaG93IE1vcmVcIi4gRGVza3RvcCBvbmx5OyBvbiBwaG9uZXMgRmVyYSdzIG93biAyNHB4IHN0YW5kcywgd2hpY2ggaXNcbiAgIHRoZSBzYW1lIHNwbGl0IHRoZSByZXN0IG9mIHRoaXMgc2VjdGlvbiB1c2VzLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgLmNycy1wZHAgLmNycy1yZWNzIC5mZXJhLXJldmlld3MtZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG59XG5cbi8qIFRoZSB0aGVtZSdzIGNhcmQgc3R5bGVzaGVldHMgYXJlIDxsaW5rPmVkIGluc2lkZSB0aGUgc2VjdGlvbiwgc28gdGhleSBjb21lIGFmdGVyIG91clxuICAgaW5qZWN0ZWQgPHN0eWxlPiDigJQgdGhlIHJ1bGVzIGJlbG93IG1hdGNoIHRoZWlycyBjbGFzcyBmb3IgY2xhc3MgYW5kIHdvdWxkIGxvc2UgdGhlIHRpZS5cbiAgIGAuY3JzLXBkcGAgb24gPGJvZHk+IG91dHdlaWdocyB0aGVtIHdpdGhvdXQgYW4gIWltcG9ydGFudC4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuY2FyZF9faW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAvKiBUaGUgaW1hZ2UgaXRzZWxmIGNhbid0IGNhcnJ5IHRoZSByYWRpdXM6IHRoZSB0aW50ZWQgLmNhcmRfX2lubmVyIGJlaGluZCBpdCB3b3VsZFxuICAgICBzaG93IHRocm91Z2ggdGhlIGN1dCBjb3JuZXJzLiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBUaGUgZGVzaWduIG1vdmVzIHRoZSBTYWxlIHBpbGwgb3V0IG9mIHRoZSB0aGVtZSdzIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiB0aGUgcGhvdG9cbiAgIHRvIHRoZSB0b3AgcmlnaHQuIFRoZSBvdmVybGF5IGlzIHRoZSB0aGVtZSdzIG93biB0aHJlZS1yb3cgZ3JpZCwgc28gdGhlIHBpbGwgaXNcbiAgIG1vdmVkIGJ5IHJlLXBsYWNpbmcgaXQgaW4gdGhhdCBncmlkIHJhdGhlciB0aGFuIGJ5IHRha2luZyBpdCBvdXQgb2YgZmxvdy4gKi9cbi5jcnMtcmVjcyAuY2FyZF9faW5uZXIgLmNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5jcnMtcmVjcyAuY2FyZF9faW5uZXIgLmNhcmRfX2JhZGdlIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmNycy1yZWNzIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDExMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMywgNjksIDEzMSwgMC43OSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY3JzLXJlY3MgLmNhcmQ+LmNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxN3B4IDAgMDtcbn1cblxuLmNycy1yZWNzIC5jYXJkPi5jYXJkX19jb250ZW50IC5jYXJkX19pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jcnMtcmVjcyAuY2FyZD4uY2FyZF9fY29udGVudCAuY2FyZF9faGVhZGluZz5hIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWNycy1oZWFkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtcmVjcyAucHJpY2Uge1xuICBmb250LWZhbWlseTogdmFyKC0tY3JzLWJvZHkpO1xufVxuXG4vKiBUaXRsZSDihpIgcHJpY2UuIFRoZSB0aGVtZSBzcGFjZXMgdGhlIGNhcmQncyByb3dzIHdpdGggYSBgOm5vdCgpYCBjaGFpbiBtb3JlIHNwZWNpZmljXG4gICB0aGFuIGFueSBzYW5lIHNlbGVjdG9yIG9mIG91cnMsIGFuZCBpdCBpcyBsaW5rZWQgYWZ0ZXIgb3VyIHN0eWxlIOKAlCB0aGUgb25lIHJ1bGUgaW5cbiAgIHRoaXMgc2VjdGlvbiB0aGF0IHNwZWNpZmljaXR5IGFsb25lIGNhbid0IHdpbi4gKi9cbi5jcnMtcGRwIC5jcnMtcmVjcyAuY2FyZC1pbmZvcm1hdGlvbj4ucHJpY2Uge1xuICBtYXJnaW4tdG9wOiA5cHggIWltcG9ydGFudDtcbn1cblxuLmNycy1wZHAgLmNycy1yZWNzIC5wcmljZS0tb24tc2FsZSAucHJpY2VfX3NhbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xufVxuXG4vKiBUaGUgZGVzaWduIGxlYWRzIHdpdGggdGhlIHNhbGUgcHJpY2UgYW5kIHRyYWlscyB0aGUgY3Jvc3NlZC1vdXQgb25lOyB0aGUgdGhlbWVcbiAgIHJlbmRlcnMgdGhlIHBhaXIgdGhlIG90aGVyIHdheSByb3VuZC4gKi9cbi5jcnMtcmVjcyAucHJpY2VfX3NhbGU+c3BhbjpoYXMoPiBzKSB7XG4gIG9yZGVyOiAxO1xufVxuXG4uY3JzLXJlY3MgLnByaWNlLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY3JzLWluayk7XG59XG5cbi5jcnMtcmVjcyAucHJpY2VfX3NhbGUgcy5wcmljZS1pdGVtLS1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTkuNXB4O1xuICBjb2xvcjogcmdiYSgxOCwgMTgsIDE4LCAwLjc1KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcblxuICAuY3JzLXBkcCAuY3JzLXJlY3MgLmZlcmEtcmV2aWV3cy1oZWFkZXIsXG4gIC5jcnMtcmVjcyAucmVsYXRlZC1wcm9kdWN0c19faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5jcnMtcGRwIC5jcnMtcmVjcyAuZmVyYS1yZXZpZXdzLWhlYWRlci10aXRsZSxcbiAgLmNycy1yZWNzIC5yZWxhdGVkLXByb2R1Y3RzX19oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIH1cblxuICAuY3JzLXJlY3MgLmNhcmQ+LmNhcmRfX2NvbnRlbnQgLmNhcmRfX2hlYWRpbmc+YSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG59XG5cbi8qXG4gKiBUaGUgZnJlZSBDb2xsZWN0aW9uIEtpdCdzIGxpbmUgaW4gdGhlIGNhcnQgZHJhd2VyOiBubyBxdWFudGl0eSwgcmVtb3ZlLCBwcm9tbyBvclxuICogd2FycmFudHkg4oCUIGl0IGlzIG5vdCBzb21ldGhpbmcgdG8gZWRpdCBvciBzZWxsIOKAlCBhbmQgYSBcIkZSRUVcIiB0YWcgcGx1cyBzaGlwcGluZyBub3RlXG4gKiBpbiB0aGVpciBwbGFjZS4gVGhlIGRyYXdlciBpcyByZS1yZW5kZXJlZCB3aG9sZXNhbGUgYnkgdGhlIHRoZW1lLCBzbyB0aGlzIGlzIGFsbCBDU1NcbiAqIGtleWVkIG9mZiB0aGUgbGluZSdzIG93biBwcm9kdWN0IGxpbmsgcmF0aGVyIHRoYW4gYW55dGhpbmcgd2Ugc2V0IG9uIGl0LlxuICovXG5jYXJ0LWRyYXdlciAuc2luZ2xlLWNhcnQtaXRlbTpoYXMoYVtocmVmKj0nL3Byb2R1Y3RzL2NvbGxlY3Rpb24ta2l0J10pIDppcyhcbiAgLmNhcnQtaXRlbV9fcXVhbnRpdHksXG4gIC5jYXJ0LWl0ZW0tdHJhc2gtd3JhcHBlcixcbiAgLnZhcmlhbnQtc2FsZS1iYWRnZS13cmFwcGVyLFxuICAudmFyaWFudC13YXJyYW50eS1tZXNzYWdlXG4pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogVGhlIGRlc2lnbiBsaXN0cyB0aGUga2l0IGFmdGVyIHRoZSBqZXdlbHJ5OyB0aGUgdGhlbWUgbGlzdHMgdGhlIG5ld2VzdCBsaW5lIGZpcnN0LiAqL1xuY2FydC1kcmF3ZXIgLmRyYXdlci1jYXJ0LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuY2FydC1kcmF3ZXIgLnNpbmdsZS1jYXJ0LWl0ZW06aGFzKGFbaHJlZio9Jy9wcm9kdWN0cy9jb2xsZWN0aW9uLWtpdCddKSB7XG4gIG9yZGVyOiAxO1xufVxuXG4vKiBUaGUgb3JpZ2luYWwgdGl0bGUgdGV4dCBpcyBibGFua2VkIChmb250IHNpemUgemVybyBvbiB0aGUgbGluaywgd2hpY2ggdGhlIHRoZW1lIHNldHNcbiAgIGl0c2VsZiwgYW5kIG9uIGl0cyB3cmFwcGVyIHNvIHRoZSBzdHJ1dCBhZGRzIG5vIGhlaWdodCkgYW5kIHJlcGxhY2VkIGJ5IGA6OmJlZm9yZWAuICovXG5jYXJ0LWRyYXdlciAuc2luZ2xlLWNhcnQtaXRlbTpoYXMoYVtocmVmKj0nL3Byb2R1Y3RzL2NvbGxlY3Rpb24ta2l0J10pIC5jYXJ0LWl0ZW0tdGl0bGUtd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTgxcHg7XG4gIGZvbnQtc2l6ZTogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbmNhcnQtZHJhd2VyIC5zaW5nbGUtY2FydC1pdGVtOmhhcyhhW2hyZWYqPScvcHJvZHVjdHMvY29sbGVjdGlvbi1raXQnXSkgLmNhcnQtaXRlbS10aXRsZS13cmFwcGVyIGEge1xuICBmb250LXNpemU6IDA7XG59XG5cbmNhcnQtZHJhd2VyIC5zaW5nbGUtY2FydC1pdGVtOmhhcyhhW2hyZWYqPScvcHJvZHVjdHMvY29sbGVjdGlvbi1raXQnXSkgLmNhcnQtaXRlbS10aXRsZS13cmFwcGVyIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdDb2xsZWN0aW9uIGtpdCBmb3Igc2VuZGluZyB5b3VyIGluY2x1c2lvbnMnO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5jYXJ0LWRyYXdlciAuc2luZ2xlLWNhcnQtaXRlbTpoYXMoYVtocmVmKj0nL3Byb2R1Y3RzL2NvbGxlY3Rpb24ta2l0J10pIC5jYXJ0LWl0ZW0tdGl0bGUtd3JhcHBlciBhOjphZnRlciB7XG4gIGNvbnRlbnQ6ICdGUkVFJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMyZjdkNTI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogMXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuY2FydC1kcmF3ZXIgLnNpbmdsZS1jYXJ0LWl0ZW06aGFzKGFbaHJlZio9Jy9wcm9kdWN0cy9jb2xsZWN0aW9uLWtpdCddKSAuY2FydC12YXJpYW50X2RldGFpbHM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTaGlwcyBpbiB0aGUgVVMgd2l0aGluIDI0aCc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmNhcnQtZHJhd2VyIC5zaW5nbGUtY2FydC1pdGVtOmhhcyhhW2hyZWYqPScvcHJvZHVjdHMvY29sbGVjdGlvbi1raXQnXSkgLmNhcnQtdmFyaWFudF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiIsIi8qKlxuICogVGhlIHN0b3JlIHJ1bnMgU2hvcGlmeSBNYXJrZXRzLCBzbyB0aGUgcmVuZGVyZWQgcHJpY2UgaXMgdGhlIG9ubHkgcmVsaWFibGUgc291cmNlIG9mXG4gKiBib3RoIHRoZSBhbW91bnQgYW5kIHRoZSBmb3JtYXQg4oCUIGBwcm9kdWN0LmpzYCByZXBvcnRzIGNlbnRzIGluIHRoZSBzaG9wIGN1cnJlbmN5LCB3aGljaFxuICogaXMgbm90IHdoYXQgdGhlIHNob3BwZXIgc2Vlcy4gVGhlc2UgaGVscGVycyByZWFkIHRoZSB0aGVtZSdzIG93biByZW5kZXJlZCBzdHJpbmdzIGFuZFxuICogd3JpdGUgYSBuZXcgYW1vdW50IGJhY2sgaW4gZXhhY3RseSB0aGUgc2FtZSBmb3JtYXQgKFwi4oK0OCw3ODAuMDAgVUFIXCIsIFwiJDI3Ni4wMFwiLCBcIjEuMjM0LDUwIOKCrFwiKS5cbiAqL1xuXG5jb25zdCBOVU1CRVIgPSAvXFxkW1xcZC4swqDigK8gXSpcXGR8XFxkLztcblxudHlwZSBGb3JtYXQgPSB7XG4gIHJhdzogc3RyaW5nO1xuICBkZWNpbWFsU2VwOiBzdHJpbmc7XG4gIGdyb3VwU2VwOiBzdHJpbmc7XG4gIGRlY2ltYWxzOiBudW1iZXI7XG59O1xuXG5jb25zdCByZWFkRm9ybWF0ID0gKHRleHQ6IHN0cmluZyk6IEZvcm1hdCB8IG51bGwgPT4ge1xuICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goTlVNQkVSKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJhdyA9IG1hdGNoWzBdO1xuXG4gIC8vIFRoZSBkZWNpbWFsIHNlcGFyYXRvciBpcyB0aGUgbGFzdCBcIi5cIiBvciBcIixcIiB0aGF0IGlzIGZvbGxvd2VkIGJ5IDEtMiBkaWdpdHMuXG4gIGNvbnN0IGN1dCA9IE1hdGgubWF4KHJhdy5sYXN0SW5kZXhPZignLicpLCByYXcubGFzdEluZGV4T2YoJywnKSk7XG4gIGNvbnN0IGhhc0RlY2ltYWxzID0gY3V0ID4gLTEgJiYgL15bLixdXFxkezEsMn0kLy50ZXN0KHJhdy5zbGljZShjdXQpKTtcbiAgY29uc3QgaW50UGFydCA9IGhhc0RlY2ltYWxzID8gcmF3LnNsaWNlKDAsIGN1dCkgOiByYXc7XG5cbiAgcmV0dXJuIHtcbiAgICByYXcsXG4gICAgZGVjaW1hbFNlcDogaGFzRGVjaW1hbHMgPyByYXdbY3V0XSA6ICcnLFxuICAgIGdyb3VwU2VwOiBpbnRQYXJ0Lm1hdGNoKC9bLizCoOKAryBdLyk/LlswXSA/PyAnJyxcbiAgICBkZWNpbWFsczogaGFzRGVjaW1hbHMgPyByYXcubGVuZ3RoIC0gY3V0IC0gMSA6IDAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VNb25leSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZm9ybWF0ID0gcmVhZEZvcm1hdCh0ZXh0KTtcbiAgaWYgKCFmb3JtYXQpIHJldHVybiBOYU47XG4gIGNvbnN0IHsgcmF3LCBkZWNpbWFsU2VwIH0gPSBmb3JtYXQ7XG4gIGNvbnN0IGN1dCA9IGRlY2ltYWxTZXAgPyBNYXRoLm1heChyYXcubGFzdEluZGV4T2YoJy4nKSwgcmF3Lmxhc3RJbmRleE9mKCcsJykpIDogLTE7XG4gIGNvbnN0IGRpZ2l0cyA9IChjdXQgPiAtMSA/IHJhdy5zbGljZSgwLCBjdXQpIDogcmF3KS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICBjb25zdCBmcmFjID0gY3V0ID4gLTEgPyByYXcuc2xpY2UoY3V0ICsgMSkgOiAnJztcbiAgcmV0dXJuIE51bWJlcihgJHtkaWdpdHN9LiR7ZnJhYyB8fCAwfWApO1xufTtcblxuLyoqXG4gKiBcIuKCtDgsNzg4LjAwIFVBSFwiIOKGkiBcIuKCtDgsNzg4LjAwXCIuIE1hcmtldHMgcmVuZGVycyB0aGUgY29kZSBpbnRvIHRoZSBwcmljZTsgdGhlIGRlc2lnblxuICogc2hvd3MgdGhlIGFtb3VudCBhbG9uZS4gQnV0IHNvbWUgY3VycmVuY2llcyBNYXJrZXRzIHN1cHBvcnRzIGhhdmUgbm8gc3ltYm9sIGF0IGFsbFxuICogKFwiMSwyMzQuMDAgU0VLXCIpLCBzbyB0aGUgY29kZSBpcyB0aGUgb25seSB0aGluZyB0ZWxsaW5nIHRoZSBzaG9wcGVyIHdoYXQgY3VycmVuY3lcbiAqIHRoaXMgaXMg4oCUIHN0cmlwcGluZyBpdCB0aGVyZSB3b3VsZCBsZWF2ZSBhIGJhcmUsIGFtYmlndW91cyBudW1iZXIuIE9ubHkgc3RyaXAgdGhlXG4gKiBjb2RlIHdoZW4gYSBzeW1ib2wgc3Vydml2ZXMgd2l0aG91dCBpdDsgZm9ybWF0cyB3aXRob3V0IGEgdHJhaWxpbmcgY29kZVxuICogKFwiJDI3Ni4wMFwiLCBcIjEuMjM0LDUwIOKCrFwiKSBjb21lIGJhY2sgdW50b3VjaGVkIGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpcEN1cnJlbmN5Q29kZSA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdHJpbW1lZCA9IHRleHQudHJpbSgpO1xuICBjb25zdCBtYXRjaCA9IHRyaW1tZWQubWF0Y2goL14oLipcXFMpXFxzK1tBLVpdezN9JC8pO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gdHJpbW1lZDtcbiAgY29uc3QgWywgd2l0aG91dENvZGVdID0gbWF0Y2g7XG4gIGNvbnN0IGhhc1N5bWJvbCA9IC9bXlxcZFxccy4sXS8udGVzdCh3aXRob3V0Q29kZSk7XG4gIHJldHVybiBoYXNTeW1ib2wgPyB3aXRob3V0Q29kZSA6IHRyaW1tZWQ7XG59O1xuXG4vKiogUmVuZGVyIGB2YWx1ZWAgdXNpbmcgdGhlIGN1cnJlbmN5IHN5bWJvbCwgc2VwYXJhdG9ycyBhbmQgcHJlY2lzaW9uIG9mIGB0ZW1wbGF0ZWAuICovXG5leHBvcnQgY29uc3QgZm9ybWF0TGlrZSA9ICh0ZW1wbGF0ZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGZvcm1hdCA9IHJlYWRGb3JtYXQodGVtcGxhdGUpO1xuICBpZiAoIWZvcm1hdCkgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cbiAgY29uc3QgW2ludCwgZnJhY10gPSB2YWx1ZS50b0ZpeGVkKGZvcm1hdC5kZWNpbWFscykuc3BsaXQoJy4nKTtcbiAgY29uc3QgZ3JvdXBlZCA9IGZvcm1hdC5ncm91cFNlcFxuICAgID8gaW50LnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIGZvcm1hdC5ncm91cFNlcClcbiAgICA6IGludDtcblxuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShmb3JtYXQucmF3LCBmcmFjID8gZ3JvdXBlZCArIGZvcm1hdC5kZWNpbWFsU2VwICsgZnJhYyA6IGdyb3VwZWQpO1xufTtcbiIsImltcG9ydCB7IHN0cmlwQ3VycmVuY3lDb2RlIH0gZnJvbSAnLi9tb25leSc7XG5cbmV4cG9ydCB0eXBlIFZhcmlhbnQgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG9wdGlvbnM6IHN0cmluZ1tdO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG4gIHByaWNlOiBudW1iZXI7XG4gIGZlYXR1cmVkX2ltYWdlOiB7IHNyYzogc3RyaW5nIH0gfCBudWxsO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHtcbiAgaGFuZGxlOiBzdHJpbmc7XG4gIG9wdGlvbnM6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZXM6IHN0cmluZ1tdIH1bXTtcbiAgdmFyaWFudHM6IFZhcmlhbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3QgPSAoKTogUHJvbWlzZTxQcm9kdWN0PiA9PlxuICBmZXRjaChgJHtsb2NhdGlvbi5wYXRobmFtZX0uanNgKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG5cbi8qKlxuICogTWFya2V0cyBvbiB0aGlzIHN0b3JlIHJlc29sdmVzIGJ5IHZpc2l0b3IgSVAsIG5vdCBhIGNvb2tpZSDigJQgYHZhcmlhbnQucHJpY2VgIGluXG4gKiBgLmpzYCBhbHJlYWR5IGNvbWVzIGJhY2sgY29udmVydGVkIHRvIHRoZSBzaG9wcGVyJ3MgYWN0aXZlIGN1cnJlbmN5IChjb25maXJtZWQgbGl2ZTpcbiAqIGEgVk5EIHZpc2l0b3IgZ2V0cyBWTkQgY2VudHMpLiBgU2hvcGlmeS5jdXJyZW5jeS5yYXRlYCwgd2hpY2ggRGF3biBpbmplY3RzIG9uIGV2ZXJ5XG4gKiBwYWdlLCBpcyB0aGF0IHNhbWUgY29udmVyc2lvbiBmYWN0b3IgYmFjayB0byB0aGUgc2hvcCdzIG93biBiYXNlIGN1cnJlbmN5LCBzbyBpdCdzXG4gKiB3aGF0IGxldHMgYSBmaXhlZCB0aHJlc2hvbGQgbGlrZSBgR0lGVF9NSU5fUFJJQ0VfQ0VOVFNgIGhvbGQgYWNyb3NzIGV2ZXJ5IG1hcmtldC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2VQcmljZUNlbnRzID0gKGNlbnRzOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmF0ZSA9IE51bWJlcigod2luZG93IGFzIHVua25vd24gYXMgeyBTaG9waWZ5PzogeyBjdXJyZW5jeT86IHsgcmF0ZT86IHN0cmluZyB9IH0gfSkuU2hvcGlmeT8uY3VycmVuY3k/LnJhdGUpO1xuICByZXR1cm4gcmF0ZSA+IDAgPyBjZW50cyAvIHJhdGUgOiBjZW50cztcbn07XG5cbmV4cG9ydCB0eXBlIEdpZnQgPSB7IHRpdGxlOiBzdHJpbmc7IHByaWNlOiBzdHJpbmc7IHZhcmlhbnRJZDogbnVtYmVyIH07XG5cbi8qKlxuICogUmVhZHMgdGhlIGdpZnQgcHJvZHVjdCdzIHRpdGxlIGFuZCBwcmljZSBvZmYgaXRzIG93biBsaXZlIHBhZ2UgcmF0aGVyIHRoYW5cbiAqIGAvcHJvZHVjdHMvPGhhbmRsZT4uanNgLCBzbyB0aGUgZm9ybWF0IChzeW1ib2wsIHNlcGFyYXRvcnMpIG1hdGNoZXMgdGhlIHByaWNlXG4gKiBlbHNld2hlcmUgb24gdGhlIHBhZ2UgZXhhY3RseSwgdGhlIHNhbWUgd2F5IG1vbmV5LnRzIHJlYWRzIHRoZSBjdXJyZW50IHByb2R1Y3QncyBvd25cbiAqIHByaWNlIG9mZiB0aGUgcmVuZGVyZWQgRE9NLiAoVGhlIGltYWdlIGlzIGEgYnVuZGxlZCBhc3NldCwgbm90IHJlYWQgb2ZmIHRoZSBwYWdlIOKAlFxuICogc2VlIGdpZnQudHN4LikgVGhlIHZhcmlhbnQgaWQgaXMgY3VycmVuY3ktYWdub3N0aWMsIHNvIHRoYXQgb25lIHBpZWNlIGNvbWVzIGZyb20gdGhlXG4gKiBwbGFpbiBgLmpzYCBlbmRwb2ludCDigJQgdGhlIHByb2R1Y3QncyBmaXJzdC9kZWZhdWx0IHZhcmlhbnQsIG1hdGNoaW5nIHdoYXQgdGhlIHByaWNlXG4gKiBhYm92ZSBhbmQgdGhlIGNhcmQgaW4gZ2lmdC50c3ggYm90aCBzaG93LlxuICovXG5leHBvcnQgY29uc3QgZmV0Y2hHaWZ0ID0gYXN5bmMgKGhhbmRsZTogc3RyaW5nKTogUHJvbWlzZTxHaWZ0PiA9PiB7XG4gIGNvbnN0IGh0bWwgPSBhd2FpdCBmZXRjaChgL3Byb2R1Y3RzLyR7aGFuZGxlfWApLnRoZW4oKHIpID0+IHIudGV4dCgpKTtcbiAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcignaDEnKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcblxuICBjb25zdCBwcmljZSA9IGRvYy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2lkXj1cInByaWNlLVwiXVtpZCQ9XCJfX21haW5cIl0nKSE7XG4gIGNvbnN0IHdhcyA9IHByaWNlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgIHByaWNlLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS0tb24tc2FsZScpID8gJ3MucHJpY2UtaXRlbS0tcmVndWxhcicgOiAnLnByaWNlX19yZWd1bGFyIC5wcmljZS1pdGVtLS1yZWd1bGFyJyxcbiAgKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcblxuICBjb25zdCB7IHZhcmlhbnRzIH0gPSBhd2FpdCBmZXRjaChgL3Byb2R1Y3RzLyR7aGFuZGxlfS5qc2ApLnRoZW4oKHIpID0+IHIuanNvbigpKTtcblxuICByZXR1cm4geyB0aXRsZSwgcHJpY2U6IHN0cmlwQ3VycmVuY3lDb2RlKHdhcyksIHZhcmlhbnRJZDogdmFyaWFudHNbMF0uaWQgfTtcbn07XG5cbi8qKiBGaXJzdCB2YXJpYW50J3MgaWQg4oCUIHdoYXQgYC9jYXJ0L2FkZC5qc2AgdGFrZXMuIEN1cnJlbmN5LWFnbm9zdGljLiAqL1xuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFudElkID0gKGhhbmRsZTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+ID0+XG4gIGZldGNoKGAvcHJvZHVjdHMvJHtoYW5kbGV9LmpzYCkudGhlbigocikgPT4gci5qc29uKCkpLnRoZW4oKHApID0+IHAudmFyaWFudHNbMF0uaWQpO1xuXG4vKipcbiAqIFRoZSB0aGVtZSBjb252ZXJ0cyBlYWNoIDxzZWxlY3Q+IGludG8gYSBqUXVlcnkgZ3JpZFBpY2tlciA8dWw+LiBUaGUgPHNlbGVjdD5cbiAqIHN0YXlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGgsIHNvIHdlIGFsd2F5cyByZWFkIGFuZCBkcml2ZSBpdCDigJQgbmV2ZXIgdGhlIDx1bD4uXG4gKiBJdCBpcyByZS1jcmVhdGVkIGJ5IERhd24gb24gZXZlcnkgdmFyaWFudCBjaGFuZ2UsIGhlbmNlIHRoZSBmcmVzaCBxdWVyeS5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdCA9IChvcHRpb246IHN0cmluZykgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oYHNlbGVjdFtuYW1lPVwib3B0aW9uc1ske29wdGlvbn1dXCJdYCk7XG5cbmV4cG9ydCBjb25zdCBzZXRPcHRpb24gPSAob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gZ2V0U2VsZWN0KG9wdGlvbik7XG4gIGlmICghc2VsZWN0IHx8IHNlbGVjdC52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcbiAgc2VsZWN0LnZhbHVlID0gdmFsdWU7XG4gIHNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PlxuICBwcm9kdWN0Lm9wdGlvbnMubWFwKChvKSA9PiBnZXRTZWxlY3Qoby5uYW1lKT8udmFsdWUgPz8gJycpO1xuXG4vKipcbiAqIFRoZSB2YXJpYW50IG1hdGNoaW5nIHRoZSBzZWxlY3RzJyBjdXJyZW50IHN0YXRlLiBgLmpzYCB2YXJpYW50IHByaWNlcyBhcmUgYWx3YXlzIGluXG4gKiB0aGUgc2hvcCdzIG93biBiYXNlIGN1cnJlbmN5IChzZWUgYGZldGNoR2lmdGAgYWJvdmUpLCBub3QgdGhlIHNob3BwZXIncyBsb2NhbGl6ZWRcbiAqIG9uZSDigJQgd2hpY2ggaXMgZXhhY3RseSB3aGF0IG1ha2VzIHRoaXMgc2FmZSB0byBjb21wYXJlIGFnYWluc3QgYSBmaXhlZCAkIHRocmVzaG9sZFxuICogcmVnYXJkbGVzcyBvZiB3aGljaCBNYXJrZXQgdGhlIHBhZ2UgaXMgcmVuZGVyaW5nIGluLlxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZFZhbHVlcyhwcm9kdWN0KTtcbiAgcmV0dXJuIHByb2R1Y3QudmFyaWFudHMuZmluZCgodikgPT4gdi5vcHRpb25zLmV2ZXJ5KChvLCBpKSA9PiBvID09PSBzZWxlY3RlZFtpXSkpO1xufTtcblxuLyoqXG4gKiBBIHByb2R1Y3Qgd2l0aCBubyBvcHRpb25zIHN0aWxsIGNvbWVzIGJhY2sgZnJvbSBgLmpzYCBjYXJyeWluZyBvbmUg4oCUIFNob3BpZnknc1xuICogc3ludGhldGljIGBUaXRsZSAvIERlZmF1bHQgVGl0bGVgLCB3aGljaCB0aGUgdGhlbWUgaXRzZWxmIG5ldmVyIHJlbmRlcnMgYSA8c2VsZWN0PlxuICogZm9yLiBUaGVyZSBpcyBub3RoaW5nIHRvIHBpY2ssIHNvIGl0IG11c3Qgbm90IGJlY29tZSBhIGNhcmQgb3IgYSBzdGlja3ktYmFyIHBpY2tlci5cbiAqXG4gKiBGaWx0ZXJlZCBhdCB0aGUgcmVuZGVyIHNpdGVzIHJhdGhlciB0aGFuIG91dCBvZiBgcHJvZHVjdC5vcHRpb25zYDogZXZlcnkgaW5kZXggaW5cbiAqIGhlcmUgKGBpbWFnZU9wdGlvbkluZGV4YCwgYG9wdGlvbkltYWdlc2AsIGBpc0F2YWlsYWJsZWAsIGBzZWxlY3RlZFZhbHVlc2ApIGluZGV4ZXNcbiAqIGludG8gYHZhcmlhbnQub3B0aW9uc2AsIHdoaWNoIGtlZXBzIHRoZSBzeW50aGV0aWMgZW50cnkgcmVnYXJkbGVzcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzUmVhbE9wdGlvbiA9IChvcHRpb246IHsgbmFtZTogc3RyaW5nOyB2YWx1ZXM6IHN0cmluZ1tdIH0pID0+XG4gICEob3B0aW9uLnZhbHVlcy5sZW5ndGggPT09IDEgJiYgb3B0aW9uLnZhbHVlc1swXSA9PT0gJ0RlZmF1bHQgVGl0bGUnKTtcblxuLyoqXG4gKiBXaGljaCBvcHRpb24gZHJpdmVzIHRoZSBnYWxsZXJ5IGltYWdlIOKAlCBNYXRlcmlhbCBoZXJlLCBidXQgZGVyaXZlZCByYXRoZXIgdGhhblxuICogYXNzdW1lZCBzbyB0aGUgZXhwZXJpbWVudCBob2xkcyBvbiBhbnkgUERQLiBXZSBsb29rIGZvciB0aGUgb3B0aW9uIHdoZXJlIGV2ZXJ5XG4gKiB2YWx1ZSBtYXBzIHRvIGV4YWN0bHkgb25lIGltYWdlIGFuZCB0aGUgaW1hZ2VzIGFjdHVhbGx5IGRpZmZlciBiZXR3ZWVuIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGltYWdlT3B0aW9uSW5kZXggPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ5VmFsdWUgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG4gICAgcHJvZHVjdC52YXJpYW50cy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICBpZiAoIXYuZmVhdHVyZWRfaW1hZ2UpIHJldHVybjtcbiAgICAgIGNvbnN0IHZhbHVlID0gdi5vcHRpb25zW2ldO1xuICAgICAgaWYgKCFieVZhbHVlLmhhcyh2YWx1ZSkpIGJ5VmFsdWUuc2V0KHZhbHVlLCBuZXcgU2V0KCkpO1xuICAgICAgYnlWYWx1ZS5nZXQodmFsdWUpIS5hZGQodi5mZWF0dXJlZF9pbWFnZS5zcmMpO1xuICAgIH0pO1xuICAgIGNvbnN0IGltYWdlcyA9IG5ldyBTZXQoWy4uLmJ5VmFsdWUudmFsdWVzKCldLmZsYXRNYXAoKHMpID0+IFsuLi5zXSkpO1xuICAgIGlmIChieVZhbHVlLnNpemUgPiAxICYmIGltYWdlcy5zaXplID4gMSAmJiBbLi4uYnlWYWx1ZS52YWx1ZXMoKV0uZXZlcnkoKHMpID0+IHMuc2l6ZSA9PT0gMSkpIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuLyoqXG4gKiB2YWx1ZSAtPiBpbWFnZSBmb3IgdGhlIGdpdmVuIG9wdGlvbiwgcmVhZCBmcm9tIHRoZSBsaXZlIHByb2R1Y3QuXG4gKiBWYWx1ZXMgd2hvc2UgdmFyaWFudHMgY2Fycnkgbm8gZmVhdHVyZWRfaW1hZ2Ugc2ltcGx5IGRvIG5vdCBhcHBlYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25JbWFnZXMgPSAocHJvZHVjdDogUHJvZHVjdCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgcHJvZHVjdC52YXJpYW50cy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB2Lm9wdGlvbnNbaW5kZXhdO1xuICAgIGlmICh2LmZlYXR1cmVkX2ltYWdlICYmICFtYXBbdmFsdWVdKSBtYXBbdmFsdWVdID0gdi5mZWF0dXJlZF9pbWFnZS5zcmM7XG4gIH0pO1xuICByZXR1cm4gbWFwO1xufTtcblxuLyoqIElzIGB2YWx1ZWAgZm9yIG9wdGlvbiBgaW5kZXhgIG9yZGVyYWJsZSBnaXZlbiBldmVyeXRoaW5nIGVsc2UgY3VycmVudGx5IHNlbGVjdGVkPyAqL1xuZXhwb3J0IGNvbnN0IGlzQXZhaWxhYmxlID0gKHByb2R1Y3Q6IFByb2R1Y3QsIGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZFZhbHVlcyhwcm9kdWN0KTtcbiAgcmV0dXJuIHByb2R1Y3QudmFyaWFudHMuc29tZShcbiAgICAodikgPT5cbiAgICAgIHYuYXZhaWxhYmxlICYmXG4gICAgICB2Lm9wdGlvbnNbaW5kZXhdID09PSB2YWx1ZSAmJlxuICAgICAgdi5vcHRpb25zLmV2ZXJ5KChvLCBpKSA9PiBpID09PSBpbmRleCB8fCBvID09PSBzZWxlY3RlZFtpXSksXG4gICk7XG59O1xuIiwiY29uc3QgbGluZVRleHQgPSAoaHRtbDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiBlbC50ZXh0Q29udGVudCEucmVwbGFjZSgvIC9nLCAnICcpLnRyaW0oKTtcbn07XG5cbi8qKlxuICogVGhlIGhvc3QgZGVzY3JpcHRpb24gaXMgb25lIFRpbnlNQ0UgYmxvYiB3aG9zZSBzaGFwZSB2YXJpZXMgcGVyIHByb2R1Y3Q6IHRoZVxuICogXCItXCIgcHJlZml4ZWQgc3BlYyBsaW5lcyBtYXkgc2l0IGluIHRoZWlyIG93biA8cD4sIG9yIHNoYXJlIGEgPHA+IHdpdGggdGhlIHByb2R1Y3RcbiAqIG5hbWUuIFBhcnNlZCBsaW5lLWJ5LWxpbmUgc28gaXQgaG9sZHMgb24gYW55IFBEUCwgYW5kIHNvIHRoZSBzYW1lIHNwZWMgbGluZXMgY2FuXG4gKiBmZWVkIGJvdGggdGhlIGRldGFpbHMgYWNjb3JkaW9uIGFuZCB0aGUgZ2FsbGVyeSBjYXB0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VEZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbjogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGl0bGUgaDEnKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcbiAgY29uc3Qgc3BlY3M6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByb3NlOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgZGVzY3JpcHRpb24ucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJzpzY29wZSA+IHAnKS5mb3JFYWNoKChwKSA9PiB7XG4gICAgLy8gVGlueU1DRSBlbWl0cyA8YnIgZGF0YS1tY2UtZnJhZ21lbnQ9XCIxXCI+IGFzIHdlbGwgYXMgYmFyZSA8YnI+LlxuICAgIGNvbnN0IGxpbmVzID0gcC5pbm5lckhUTUwuc3BsaXQoLzxicltePl0qPi9naSkubWFwKGxpbmVUZXh0KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgY29uc3QgYnVsbGV0cyA9IGxpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS5zdGFydHNXaXRoKCctJykpO1xuXG4gICAgaWYgKGJ1bGxldHMubGVuZ3RoID49IDIpIHtcbiAgICAgIHNwZWNzLnB1c2goLi4uYnVsbGV0cy5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgvXi1cXHMqLywgJycpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEEgcGFyYWdyYXBoIHRoYXQgb25seSByZXBlYXRzIHRoZSBwcm9kdWN0IG5hbWUgZHVwbGljYXRlcyB0aGUgPGgxPi5cbiAgICBpZiAocHJvZHVjdE5hbWUgJiYgbGluZVRleHQocC5pbm5lckhUTUwpLnJlcGxhY2UoL1xccypcXCgjXFxkK1xcKSQvLCAnJykgPT09IHByb2R1Y3ROYW1lKSByZXR1cm47XG4gICAgaWYgKHAudGV4dENvbnRlbnQhLnRyaW0oKSkgcHJvc2UucHVzaChwLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHNwZWNzLCBwcm9zZSB9O1xufTtcblxuLyoqXG4gKiBUaGUgY2FwdGlvbiB1bmRlciB0aGUgaW5jbHVzaW9uIGljb25zIGluIHRoZSBkZXNpZ24gcmVhZHMgXCJUaGUgaW5jbHVzaW9ucyBhcmUgZnVzZWRcbiAqIHdpdGhpbiB0aGUgc3RvbmVcIiDigJQgd2hpY2ggaXMgb25lIG9mIHRoaXMgcHJvZHVjdCdzIG93biBzcGVjIGxpbmVzLCBzbyBpdCBpcyB0YWtlblxuICogZnJvbSB0aGUgZGVzY3JpcHRpb24gcmF0aGVyIHRoYW4gaGFyZGNvZGVkLlxuICovXG5leHBvcnQgY29uc3QgaW5jbHVzaW9uQ2FwdGlvbiA9IChzcGVjczogc3RyaW5nW10pID0+XG4gIHNwZWNzLmZpbmQoKGxpbmUpID0+IC9mdXNlZC9pLnRlc3QobGluZSkpID8/IHNwZWNzLmZpbmQoKGxpbmUpID0+IC9pbmNsdXNpb24vaS50ZXN0KGxpbmUpKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEZ0FBQUE0Q0FZQUFBQ29oanNlQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQllUU1VSQlZHaEQ3Wmw1V001cDMvKy93NHdac2xSYUxLMm83TW1XSlV1VDI5NFFJbHhLQ0tta0dJUlJJanVORWRtU2JHbWhkQ2R0S2xsQ3EwcTdwS3Q5MzdPL2ZzZVZtZnUreC95YTMrK1A1M21PNXcrdjR6aVA2eml1N1h1OXYrZDV2ai92ejNrSndsZSs4cFd2Zk9VclgvbktWLzRMZWV6ajB6bmE4YUJTMlBaZlJvWGI3L3JwN2lhSHhjRWJ0NG1DckRhYkIxbmJMd215M2p3cnlIYkwrS0NOMjFTaW82Ty8vZkx6LzJ1SU9IaTJ4NE5kQjdUdjczUmFIcjMxbDRQM04rKzhGbVczUFRacTQ5YThTRXY3MnFpMXRqeXdzQ1hXZkFQM1RkY1RMVnBMNVBJMWhDNjNJRmhrUWFCb1RWM2d5dlVaZDliYkJvWlliZGtTYkxsNVZNTFpzOTk5ZVozL0VVSk9uT2dldldQZmlBY09qc3RpdCswNkVtUHZFQkZyNS9ENmdmWFBQTis0bmN6MW04bFlzWUgwaFN0Sm5XRk0wc1RaeEkrZVJweU9QbytHNlJFN2VEelJBM1dKSERDS3NINDZoRXFHNWxnaXh4Z1FPMnN4ajBYckNGbTZDdDkvekk5eUd6eTQ2NWZYYjBQVGFPZk0wYWFIVHN6YzZHWnc2RUpndHk5Zi8vL0IxOWUzbzZ0bmdQU0d3NzRqUkU2WGw2OXhEVHppczIxZmVKenR6NS9GMkd3ajA4S09UQk1MTW1jdElXUHFQTEtuenVmbDNPWGtMN0dnWUkwZEJkdjNVbkRZalFMUDY3d0tDaUgzbjNmSkNnN2x4WjFRVW03NGszRDJJaytQL3NaRHV4M0VMamJuNFRRakh1dm9FNms1RmcvMTRkV25WWWJKZlBtNzJ1aW1ZN0ZxdXRWdnJITDBZUDdtVTYrWDdUZ2JibWgvNm9SbzUzbExTeGZQK1d2Mlh2NXg0WFlQWGR2OWwzVTNIZktlWkxMejRvOGlSMDhUNjhQZTJ5MzJYVDI5WkpmWDNWVjdyeWViTzE4cjNYREU3K051ajBpTWprVHl6OVU3S1BpSEVSbFQ1MzhXWXloQ3ZOcU9zbjJ1MU53SW9ERXBsZGJxR3Q0Q2I0QVdvQUdvQWNvL3ZLT29xWkdDNmlweVM0ckpMaThsczZhS2pQb2EwaHRxeVd5b0phZThsSmZQRW5oMjZGY3VUUDlKN0tpcUt2Mmx0czhvekJkTlhyRUg2MFBYVVRYNWpZbFdIaHkrSE1iS2ZUNzh0TzBTSzV5dXNINy9OWXgzZUxKNDUyVnNqdDNFeHZVMkN4ejlNWEc1emMzbzV5dzlFTXh3eSt2OGZPNCtIcUZwS0ZuZTRwYWxDNDE3RGxIakgwUmpRZ3B2Nmh0NEQzejhmYndEV290TGFVek5vRHIwSHFWbnZDaHdPa3oycW8ya3pqWWg4Y2Y1UEIwL2kwY2pmeVIyM0F6dTZ4dHlmNll4RHl3Mjh2U3dLMm1Cd1JRVWlkdkUra1pGaWwxZFhkc1JPTlJFSkdpdlI1amtoTmFLVS9SZWRBTDdFMEhvMlhqU2VmWnhEQjF1Y0NrNGpuNW01MUZZN003Ukd3L1k3QjZKdk1rRmhsaDZZK3NlZzY3OUxReWQ3NkpsNlllYWhTODlsMTNsYm5ZdEV2NGxSbHhNUS9RanFzOTRVYlpwRjBYelYvSjYvQnp5aDAwbHQvOVlNdnRxa3lZL2lCVHBBVHlUVWlIdSt6NDgrRmFSYUtFbkVZSTBvVUozN2dyZENCRzZFL3FOSE5FOTFIbXFvODlEY3lzdU8rd1NlM3A2dGlOd2tJbElTbThqSGNidFlxZGJFSXQvOFVZWTRVUlBvNVBzT0JOS255Vm5rSjUzaWgrMytpSTZHRXkzUmVmb3Z1Zzh2OTVLWUk1ak1JSytHeE8zQnVMM0lBZWxWVGRRWGVPRDNCcC9naTZHMG5ydUVtWFdEaFROTStPMTdpeGVEWjVFZnIreDVLdU9JbDkxTksvVXgvSnl3RGp5Qms4aVI4ZUFiRDFEc240U2tXbHFSZHBLSzFMTXJVbGNaYzBUNDVVOG1MNkFtSEhUaWV5dlE0UjBQNks3S1BPd2l3cmgwdjA0cGRCUDdLaXEzWTdBbm9ZaXczVXVXTHBjNVFmOS9YUTNQTTRna1R0S3hxZXcrVFVZK1lXbkVhWWV3M0QzTFd6ZEl2ak8wQjNaSlI0czNoK0t0bzB2Qy9lSE1zVEtIK21sVjFqaEdvTkhlQlpkMWdiaE0zNFoxVXBEZnhjeml2eit1aFFNbTRKNDBqeEtsNjZuY3RjQjZqMXYwQkFVUm1OOE1vMHZDNmd2cjZDMnVZbXFkMjhvYTIybXFMbVJnb1k2OGlvcnlKRXN4L3lYcENVbGtSb2FUdnFsNjZSdDJVM001TG1jVmg0b2R1M1IzaDRjWkN6cXBtZUx5c0lqQ0JQM0lVemF6NW1iOXhtN3dSTkJaeS9qYmE3aWRqT09qclBjRUg0OGdmUFZSOWljamtiUVAwa2YweXZjaU1saXVNMU51aXp5WXVMV1lHWTVSeUJqR1l6ZkpGUHFKODZrZFBrR3FweU9VSC9aajliNFpONlhWZkNwYmZIK216K1dzY1JvNm9IcWxtYks2dW9RVjFUd3FyaUl2T0lpY2txTHlTNHJKVXNpdHJhYVZ5MU5sTHhwNFVWV0Z0ZC9jeE83bXBtMUkxQjd1VWpRdGtRWTRjQzZnLzdNMlhJRnFlbEhrWmwvRXMwVjUxQmRjWUhwMi8yUlgzS2VYc3N1TXM3T2o4R1czaGpzdU0xWXUxdDBYdWpKYVB0QXJrVm5vN3JHRjZrbDExQXc5eWY0Vmh5Zkt2NHE1ZzgrZmZqSSsvSkszcVJuMGhqemlDcnZBSW9QbkNEZnhvRk00MVdremwxS2tzRUNudXJOSnM3QWlNZHpsL0xJeEp3blczYVNkT1lpV1JIUmlJdUt5Q292eFM4aS9HLzJZTi81b2xHTGYwRi8zU21tYnZCZ2l1MGxoTEV1eU13N3lmV3dlSlNYblVjWWM1QVZoMEp3djUySVlPQ0dNUHNNNTBQU1dPQVN4dmNMUEJsbWM0dVZKMktadVAwT2EwODlSbmE1TjNmem0vNHNwcWlFMXJnRTZpOTZVKzNnUXRtaU5SUlBuaytoempUeU5jYVJvNnhEaHNKZ1VtVTBTT3lteHJQT1NqeityamV4MzhnVEpjZ1NJY2dRTGpFWW9RZmhIUldJbGRNa1VXODJUelk1Y0czdmZyRm53TjhJSExsd0Y4dDNYMGJRY1VLWTRJTGpoVEJHcjd0RUQ4T1RxSnQ2TUdmSFRaUkVucWlhZVRGangyM21PZ2JUeWNpRDNxYlg4SDJRaSs2V0lJUVo1MWw4SkJxM081bDBXK2xQOE9WSTNwM3pvdExla1ZJamM0cjFEQ2tjT29YQ0FlTW9WQi96ZWZUVHBhQy9icHZBdkdGVHlCMHpnMnlEQldRdU5DZDkwU3BTakZlUmFHek9reG5HUEJnM2c1amhFNG5zTlpBSXFiN0VmTitIT0NrVkltVUg0TjVMVSt6YXJzbG9tNHFFWVpZSUkzZncwL1pyNkt3Nng0SWROeGk2K2lJZDlJOHhmTjFsVGdVOG84czhkNFJwSjlsODdqNXJUa1NodU9JeW11dDltYnMzakhFL0I3SHJhZ0xxYS8yUkZubWpZQnZHVGIwVjFLdHE4MXB0TklWcVl5anNyNHQ0eUdTS3g4K2h6TWljYW50SDZrOTUwaFFRUWxQVUE1clNNbWdzS2FXdXRwYWExaGJLbTVzb2Fham5kVTAxK1dXbDVMd3VJRE03aTdSSGNUejNEeUR0eEJsU1YyOGtadVNQbkpZSTdOR2pIWUhxeHFJQmM3Y3p3T2d3NW50OE1kcDVBMkhvSHFUbnUzSGxiang5bDU1SG1IUU1rd04zY0xrZWh6RHJOSUxoV2E1RlpiTDRZQVRDdERPTTJSekU4Y0EwaG02OHpaUmRZY2paaEhKemtobE5ZNmRSdm1RZDFWdWRhYmpvVFd2MG83YWwrdW05cE9UL21RK1NXZ2swU3RMTWgvZFV0TFpRVWw5SFFVVUYrVldWNUZWWGtsTlZRWFpORmJuMXRSUklUS2FsaVJjcHo3bDI0SWpZMVd4ZU93SVZERVVHWnM1WUgvSkJHTFVIWWNvaHpGeHVNZERzQW1NdEw2TzgvQUpxcGhmUnNmWm11a01nV2hiZURMZjJRM09kRHdQVytuRElMeGtkdTlzSXN6d3cvKzBoM2c5ZUliWGNsenQrajZDNDVFc2RmK0pqYlIzdkNzUTBQMDJpOXZaZHlzNWU1clhEUHJMTnJIbGhZa0hLZkZQaVp5N21xZEVLbnF4WXl4T0xUY1R2TzhMekcvN2tQSGxHY1ZVVjJWVVYrRWVHaXowREF0b1JLSEhSa1ZZSWVrNW9ySEJIYWNGSmRyamZaYlNsRjRLT0M2T3RyK0VkbVVMSE9hY1I5SDdsZ1BkVE5sOTRpREQ3TEVybTN1eSttb0NPWFNCejkwVXkzRFlJalEwQnlLM3dJYXlnK2M5aXFtcDRrL0NjSnI4Z2FweU9VbUZxUTRuQklzUmpaL0pxeUNSeVZFZVIyV3NvYWJLYUpIWlY1ZW4zZlluN3RoZXhnaHpSZ2d5UkVuTVJlaEFteUJEUnVTOFArZzRuZWRZUzRwME9jUDM0cjM4amNKQ0pxT3NrTzM3UWM4THFTQURXeDI0ampIQ204OXpmY1BLTVFtT2xKM0lMenpEQnpwY05ibEhJbW5naXRlZ2lSLzJURUIyTFJqQTR3L0NOQVFURXZVSnJRd0FxRmplUnR3amtqdThEM2wzem8yYkhmc3BOMWxNeXhZZ2liWDBLTmNaL05oakozdXczbGdKSnNobWdTNjdtZUhLR1R5VnI0aHd5cGh1VE9tTXh5VE1XRXovRG1NZDZzNGdkcGtlMCtrZ2laTlNJK0U2Um1HOTcvVzR5R3JnckRSUzdhazlwUjZEQ2ZORVVVMmUyLytaUGg2a0hrWnAxbkdHclBlaTEySjAxUjRKUldlNkJNTzBFVTdiNHMrVmNMRjBXWEVEV3hBdEQ1MUJHMmdWZ2ZEQ1NrZmEza1Y1K25YbjdvN2o1dUFCWjYxRDg5RXlwVnh2eFdZanFaekhpZ1JNcEhqT0QwdG5McUxMYVR0M2hVOVJmOHFFaExKcUdwNG5VWitkUlcxbEpkWDA5NVhWMUZOZFVVMUJaemt1eG1PenNiREtTVTBpTnVFZnlCUzlTOWh3aXhkaWM2RUhqT1MzZnIvMGs4NE9tc2FpajlucTZUdCtQTVBVUXd1UkRIUFdPWWZaMkh3VGRnd3hhNDhXRjRBUjZMRHFIWUhDU2JSNFAyWHY5S2NMc2M4aXZ1SWJudld3bWJBK2hpOGwxdERZR01XNTdLSUpwSUQ2Nnkya2NyVS9aL0pWVVNSelR6WU9XaVB1OHkzN0pweGFKbmZ3YlNSajRUNU9wNVJNVjc5KzJtY2pydWhwZTFWYVRWMU5GVG5VVjJiWFY1TlRWVU5EY1NFbERIZW1QNHJpNjAwbnNPcThkazNGeGRoRTVPdi9LRXF1VGFCa2RwYlArQVlUSkJ4RDBqeUpNT1ViSE9XNk10cjVCQjBOM2hGbnVxSzIranJMNU5RVEQ4M1F4dW9pVWtRY3FvcXZvclBOaDlyWkFOaHlONUdKZ01pWDNFL2owdXBCUDcvN3FtSC93cWZVTjcwdkthYzNLcGY3K1l5cXUrbE40K0NTNXRqdklYR3RIcXBrVmlVdFdFMisyZ1dmV1czbm00RVRpNlhPa2hVV1FsNUZKU1dNRDJkV1YrRXVTVEh1Ri90ZnpaMFIzSWtMSXkwb2xKeTJWMktnNHJuaEg0T1FhZ1BWZVgxYnU4R2JPUmkrTXQzb2orc1dQWmJ2OHNUNFlqTnVWV0h4RGtyai9LSk5YZWNYVVZOYkNXMG5yK24vblkyMDk3ekp5YUw0ZFN0M3hNMVN1M1V6WlhCRkZFdzBwME5ZbmQ0RHU1NVpKVnBPa3Z5UVpTY3NrU1RMU2hIV1FJMUphblVkYXVqeGZha0hpaVRQY09IdStmWk54TVRZUlhUMTBsR2RKU2VSV1ZTQ3VyNkt5b1lxNnVuS2E2eXRvcVN1bnBiYWNOL1ZWZkdpdTVkUGJSdmdrNmNQL21qSWx6MGlDOC92S0t0NGtwZExrOTA5cTl4Nm53bndUcGRPTUtSbzVEYkhXaEg4bkdmVXhGS2lONGFYNjZEYUIyVm9UeUJpaFQ3cmVYRkwwNXBBd1lYWmIwL3R3K0dSaTFIUzQxMXVMOE01OUNldlFrNWlPaXNSMVVTWlNYb3N6NnNQRnJsUGFNWmx0Z3BUbzVQZnkzQmsrZ1RoTGU1SlBueWNqTElMY3RIUUt4R0xFbFpXVU50UlQwZHhFOVpzV2FscGFxS3VybzdhMGpOcXNYR3BpNDZnSkRLSEsvUkxsVzUwcFdiS1dva2svVVNoeHpOOWpXVnVha1FqU25JQjRoQUhGQnNhVW0yMmtlczh4YXQwdlVYY2prTHFvQjlTbXZxQTZ2NERLaWtwS3k4c1JsNVR3U2l3bU55ZUh6T1FVMHVQaVNQWUxJT0hvQ1pKc3RwRTBiUUZSYWpxYzdxbld2c2s0ZE9zbCtxMkRMTGVFcm9RSjBrUjBWQ0JHdGorUE5jZnliT3cvU0RSWXdQTUZacVFicnlaejBTcXlqRmFTOVk5RlpJMmRRZGJReVdUM0g5c1dsSE9WUnBEWFY1dVhmVWZ3U20wMEJWb1RFSStlUWVtYzVWU3MzMHJ0VWZlMldQWW1OWU1QTlorNy9ULzR6M2JwODduTUo4cmZ2Nlc0cFptQytscGUxdFdRVzFmVFpqQlpra1FqYVpmcWF4R1hsZlA4YmpoZVZ2Wml4L1ptOExDemk4aHI1MjdDRjVzUlBYQXM5NlRWdWRlcE56RWQ1SG5RUVlHSGtuclRxUTlQZjFBaW9Zc0tTVjNWU09uZWoxUlpUVjRvRGlGVFJZY2NyUW5rajUxSjRleGxsTnJzb01iMUxFMWgwYnpOeXVOajY1OGQ4ei81K1BFRDcrdnFhY2w1U2QyVEJNcUR3aWgwOHlCM3B3c1o5cnRJdGQ1S2tvVXRDVFpiaWQrMWwvZ0R4MG04NmszYXcwZms1ZWRUM054RVZsVUZmdUZoN2JkTHg4NmZGL25kaXlRaEw0Y1hxV21raFlhVGV1NFN5UTU3U0Y1clI4cnlkYVFZbVpKbVpFckdralZraVN4NXVkR0J3bjJ1bEhyZG9Db3NtdnI0WkpyRnhieHRiVzJ6KzcvdVR2alEzTUtiN0R5YXdtT29QZWxCeGFaZktERXlwOUJnRVM5SFRpTmJjeHpwU3Rxa3lBMGt2cHNhY1QvMGJidTVNZC9JY1UrUWJVc3dvWkxScVJlUmlnTjVORXFmNStzM2sraDVsUnVYTDdkdk1zNG1KcUlyQncvek5DR2g3VzdrTnRTUjM5eklxNllHWGpmV1U5UlFSMGxkTFdVTjlWUzJORlA5N2cxMXY5Y3JTUmlUekkvRWNpUkxURklRSk9OZFZUV3Q2VmswQm9SUWM5U2RzalgyRk0xZXh1dlIweWtZT0pGODlUSC9PcGZKVXgxRmpzcElzdFJHODJLQUxtbEQ5RWdaK1NNSk92bzhIVEdGUjlxVGlORVlUV1R2d1lUM1VPZnVkNHFFQ3JKRWRaRG5ZUmRsSW5vTnduM2dLTEZqZTNWUVlqSW52cGNqZU9nNEhxM2JST0twczd3SUNTTTNQWjFYcjE5VFdGNUdjWDB0WlUyTmJVWlRKUkZaWDBkMVVUSFYyYmxVUFg1R1pVQUlGUmV1VXJyekFPSmw2M2s5MVloWDJ2cmthNHduWDIzMFp6R1N4d0c2RkF5ZlN1R2tueWhldXA3eW4vZFFlZXcwbFZmOHFBd09wMEt5VFBOZVVscFJTVkZsSmE4cnlubFpWa0pXYmk3cHorSkppWXppMmFVcnhPMXc1cWxvSFU5MVp4RGVkd2h1TWlwaXg3OHptUk1kWmJrcFNIRlhFbWEvVlNCS3VqOFBOTVlRTjJZYThRWkdwQmlaa1dxOHFxMEpmYkZ3SlJrempIa3haam92aGt3aVEzTGtKNW1CdnRwazl4bE9UaDl0OGxSRzhsSnpIQVU2Qm9obkxLSFVmQk9WKzF5cDh3NmdLVG1OdHpXMS8xcktrdkd2ODVqV1ZzckZSWWdUa3NsLytKaWNxQmd5N2thUUhuV2Z0R2Z4cEtXbmtWNWNSRlp6SS9rZjNyYmRnQ1QvUUM2YVdZaGR0ZHRwZUE4Zk9DRHkycjJITUJOejdnM1NKYUpuUHlJNzlTSHFHM21pdjFIZ2ZrZEZIbjdibTdoT2ZYbmFXWmw0S1ZVU3UvVWpXVWFEVklYQnZGRFdJVk1TbEVjYWtEL1RoS0sxbXlrLzdrNWRVR2liZWJ4Nzg2Yk5KZjhRSTFuQ0xjVmwxRVUvcE9MaWRjVE9SOG14Y1NCMThXcWVURFlrYXNnRVFwU0hjVnRSaTVzOSsrSGJRd1VmR1hWOGVtbmdyejZVZjQ3UjU5N3kxVHh6UGt4MjFIMWV2QzdBTHpaSzdOcmVIanpnNkN5NmNTZVl4SW95TWw3bDgveGVGTW5uTDVIb3NJZUV0WFlrTEZ0TDRqd1J5Zk5FbjJkeDZWcXlyTGFTNzNLY3d2TlhLTDBiUVhWeUt2V3Z4YlI4K3RnbVFESTdrdkh1M1R1YU1uS29EZzZqNkxBYnVaWS84MXpTSGVoTUpWSjlCTUZLUS9Edk01QnJ2VFM1MkV0VDBwbHpYSEVBQnhYVTJTdW5pcE9NRXJ0NzlHRjMxOTQ0ZGxiQStYczVEblNRNXJqUW5YTWRlK0l2cjBHZzNpek9MRjBwOW16dlpIdkxEejFGcmdOSEVMTEJsb1JidDBsLzhZS2NtaXJ5MzcraDRPTTd4SHlnNk5NN1NqOTlvQUtvL1AzL0E0blJTSTc0SkhXcm9iV1Z1dUlTcXA4bFVYclZqMWVPQjhrUXJTZHh5ay9FRHA1QXFNb3didlVaekhXbHdYaW9Ec1d0M3pEMnF3OWx0OXFnQmdkbHJmeWYrdzU0YXRlN1g1Q05ndHFwRFhMS085Yko5bDY5V3JxWGFGVjNSWk9WWFdXTnpicklyVFg5b2VlMmxaMWxENXQza1Eyd2tKSi9ZZDJqZDR1anZDcEg1ZFZ4bGxHdWJMZlFiK29pdDhieE94a09DVkpjNkt5QWorb3dRaWJOSU1aMFBVOSsvb1drL2NkSU8zT1JqQXVYeVRydlJmYlpTMlFlT1VuNmx0MmttRmtSUDJjcGovWG1jRjk3TW1GcUk3amRleUErdlRTNXJEU0ljMnBEY2UwM0RDZjF3ZXhVSFNqZXFxSVZ1MFZaNDVTdDhnQkxXeVdOeVN2NzlGY1dLU3BLZmZtYi9sOE1Gb1JPb3U4VjFWZkw5RmxpMzB2dDJxNitHczlPOWhuWTg4djN0V0hmVFU3VFNrck9hNTJVWEtHZGxBS09YUlE0MktrbnJoMWxjTzhveTRYdjVQSHEzSnVyWGZ0eXJhc1NWN3NwY2JtYk1wZTZxK0FocTg1WmhRR2M2cTNGcjBxRDJLOHlpRjBxV2kwT3lnT3p0aWhwQk5rckRkaHZwNlJoc3FHUHhnaXo5dTd3ZndHTzhvTzdPZ3BUL3Y1ZlgyTVptUjZpTGpJenpicks3VnpkVmY3NjJtNktLVlk5ZWhYYXlQU3B0cFB0KzhhK3AvTGJMWExLclp2bFZadnQ1ZFVxN0JUVXMyd1YxS0pzRmRXdWJsUlVQMktqcUc2MXNWZS8yWllLS3YybXFLcis4T1gzLzIva0c0bG9rODQ5K3l6dEpxZXhvbHNmVFZGMytRR20zZVg3cjFaUVVCd3NETzcwNVFlKzhwV3ZmT1VyWC9uS1YvN2IrVDkvcy9CNmdVdFdPd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibGV0IGNvdW50ZXIgPSAwO1xuXG4vKipcbiAqIEZpZ21hIGV4cG9ydHMgZXZlcnkgaWNvbiB3aXRoIHRoZSBzYW1lIGludGVybmFsIGlkcyAoYGNsaXAwXzMzNjlfODJgLCBgbWFzazBf4oCmYCkuXG4gKiBJbmxpbmluZyBtb3JlIHRoYW4gb25lIGludG8gYSBzaW5nbGUgZG9jdW1lbnQgbWFrZXMgdGhlaXIgY2xpcC1wYXRoL21hc2svZmlsbFxuICogcmVmZXJlbmNlcyByZXNvbHZlIHRvIHdoaWNoZXZlciBpY29uIGNhbWUgZmlyc3QsIHNpbGVudGx5IG1hbmdsaW5nIHRoZSByZXN0LlxuICogTmFtZXNwYWNpbmcgZWFjaCBpbnN0YW5jZSBrZWVwcyB0aGVtIGluZGVwZW5kZW50LlxuICovXG5leHBvcnQgY29uc3QgaW5saW5lU3ZnID0gKHN2Zzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG5zID0gYGNycyR7Y291bnRlcisrfWA7XG4gIHJldHVybiBzdmdcbiAgICAucmVwbGFjZSgvaWQ9XCIoW15cIl0rKVwiL2csIChfLCBpZCkgPT4gYGlkPVwiJHtuc30tJHtpZH1cImApXG4gICAgLnJlcGxhY2UoL3VybFxcKCMoW14pXSspXFwpL2csIChfLCBpZCkgPT4gYHVybCgjJHtuc30tJHtpZH0pYClcbiAgICAucmVwbGFjZSgvaHJlZj1cIiMoW15cIl0rKVwiL2csIChfLCBpZCkgPT4gYGhyZWY9XCIjJHtuc30tJHtpZH1cImApO1xufTtcbiIsImZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGQpIHtcbiAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSBcImJvb2xlYW5cIikgcmV0dXJuO1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICBmb3IgKGNvbnN0IGMgb2YgY2hpbGQpIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgYyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCBpbnN0YW5jZW9mIE5vZGUgPyBjaGlsZCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjaGlsZCkpKTtcbn1cbmZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcywgX2tleSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHR5cGUocHJvcHMgPz8ge30pO1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5hdHRyaWJ1dGVzIH0gPSBwcm9wcyA/PyB7fTtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIm9uXCIpICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgXCJcIik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgfVxuICB9XG4gIGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbik7XG4gIHJldHVybiBlbDtcbn1cbmNvbnN0IGpzeHMgPSBqc3g7XG5jb25zdCBqc3hERVYgPSBqc3g7XG5mdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYXBwZW5kQ2hpbGRyZW4oZnJhZ21lbnQsIHByb3BzPy5jaGlsZHJlbik7XG4gIHJldHVybiBmcmFnbWVudDtcbn1cbmV4cG9ydCB7XG4gIEZyYWdtZW50LFxuICBqc3gsXG4gIGpzeERFVixcbiAganN4c1xufTtcbiIsImltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5pbXBvcnQgeyBnZXRTZWxlY3QsIGlzQXZhaWxhYmxlLCBpc1JlYWxPcHRpb24sIHNldE9wdGlvbiwgdHlwZSBQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdCc7XG5cbi8qKlxuICogU3dhdGNoIGZpbGxzIGZyb20gdGhlIGRlc2lnbiwgbWF0Y2hlZCBvbiB0aGUgbWV0YWwgbmFtZWQgaW4gdGhlIG9wdGlvbiB2YWx1ZSBzb1xuICogdGhhdCBtYXRlcmlhbHMgdGhpcyBwcm9kdWN0IGRvZXMgbm90IGNhcnJ5ICh2ZXJtZWlsLCBwbGF0aW51bSwg4oCmKSBzdGlsbCByZW5kZXIuXG4gKiBPcmRlciBtYXR0ZXJzOiBcIlJvc2UgR29sZCBGaWxsZWRcIiBtdXN0IG1hdGNoIHJvc2UgYmVmb3JlIGdvbGQuXG4gKi9cbmNvbnN0IFNXQVRDSEVTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvcm9zZXxwaW5rfGNvcHBlci9pLCAnbGluZWFyLWdyYWRpZW50KDIwNWRlZywgI2U4YzJiZCAxMSUsICNmZmYgMzElLCAjZTFiN2IyIDUwJSknXSxcbiAgWy93aGl0ZXxzaWx2ZXJ8cGxhdGludW18c3RlZWwvaSwgJ2xpbmVhci1ncmFkaWVudCgyMDVkZWcsICNkZWRlZGUgMTElLCAjZmZmIDMxJSwgI2Q4ZDhkOCA1MCUpJ10sXG4gIFsvZ29sZHxicmFzc3x2ZXJtZWlsL2ksICdsaW5lYXItZ3JhZGllbnQoMjA1ZGVnLCAjZWRjZTliIDExJSwgI2ZmZiAzMSUsICNlYWM5OTUgNTAlKSddLFxuXTtcblxuZXhwb3J0IGNvbnN0IHN3YXRjaEZvciA9ICh2YWx1ZTogc3RyaW5nKSA9PlxuICBTV0FUQ0hFUy5maW5kKChbcmVdKSA9PiByZS50ZXN0KHZhbHVlKSk/LlsxXSA/PyBTV0FUQ0hFU1sxXVsxXTtcblxuLyoqIE9wdGlvbnMgd2hvc2UgdmFsdWVzIGFyZSBtZXRhbHMgZ2V0IHN3YXRjaCBjYXJkczsgZXZlcnl0aGluZyBlbHNlIGdldHMgY2hpcHMuICovXG5leHBvcnQgY29uc3QgaXNTd2F0Y2hPcHRpb24gPSAobmFtZTogc3RyaW5nKSA9PiAvbWF0ZXJpYWx8bWV0YWx8Y29sb3U/cnxmaW5pc2gvaS50ZXN0KG5hbWUpO1xuXG4vKipcbiAqIFdoaWNoIHN1cmZhY2UgYW4gaW50ZXJhY3Rpb24gaXMgcmVwb3J0ZWQgZnJvbS4gVGhlIHNhbWUgY29udHJvbHMgcmVuZGVyIGluIHRoZSBidXlcbiAqIGJveCBhbmQgaW4gdGhlIHN0aWNreSBiYXIsIHNvIGV2ZXJ5IGV2ZW50IHRoZXkgcmFpc2UgY2FycmllcyB0aGUgc3VyZmFjZSdzIG93blxuICogcHJlZml4IGFuZCBsb2NhdGlvbiBhbmQgdGhlIHR3byBuZXZlciBtZXJnZSBpbiBHQTQuXG4gKi9cbmV4cG9ydCB0eXBlIEFuYWx5dGljcyA9IHsgcHJlZml4OiBzdHJpbmc7IGxvYzogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBQRFBfQU5BTFlUSUNTOiBBbmFseXRpY3MgPSB7IHByZWZpeDogJ2V4cF9wZHAnLCBsb2M6ICdQRFAnIH07XG5cbmNvbnN0IEd1aWRlTGluayA9IChsYWJlbDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkKSA9PlxuICAoXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNycy1ndWlkZS1saW5rXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4vKipcbiAqIFRoZSB0aGVtZSdzIG93biBSaW5nIFNpemUgR3VpZGUgdHJpZ2dlci4gTG9va2VkIHVwIG9uIGV2ZXJ5IHVzZSByYXRoZXIgdGhhbiBoZWxkOlxuICogaXQgbGl2ZXMgaW5zaWRlIGB2YXJpYW50LXNlbGVjdHNgLCB3aGljaCBEYXduIHJlcGxhY2VzIHdob2xlc2FsZSBvbiBldmVyeSB2YXJpYW50XG4gKiBjaGFuZ2UsIGFuZCB0aGUgdGhlbWUgb3BlbnMgdGhlIGRyYXdlciBmcm9tIGEgaGFuZGxlciBkZWxlZ2F0ZWQgb24gYGRvY3VtZW50YCDigJQgc28gYVxuICogbm9kZSBjYXB0dXJlZCBhdCBidWlsZCB0aW1lIGlzIGRldGFjaGVkLCBpdHMgY2xpY2sgbmV2ZXIgYnViYmxlcyBhbnl3aGVyZSwgYW5kIHRoZVxuICogZ3VpZGUgc2lsZW50bHkgc3RvcHMgb3BlbmluZyBhZnRlciB0aGUgZmlyc3QgbWF0ZXJpYWwvc2l6ZSBjaGFuZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBzaXplR3VpZGVUcmlnZ2VyID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNndWlkZV9kZXNjJyk7XG5cbi8qKlxuICogVGhlIEd1aWRlIGxpbmsgYSBnaXZlbiBvcHRpb24gY2FycmllcywgaWYgYW55IOKAlCBzaGFyZWQgYnkgdGhlIGJ1eSBib3ggYW5kIHRoZVxuICogc3RpY2t5IGJhciBzbyBib3RoIG9wZW4gdGhlIGV4YWN0IHNhbWUgZHJhd2VyLiBgYW5hbHl0aWNzYCBpcyB0aGUgc3VyZmFjZSB0aGUgbGlua1xuICogaXRzZWxmIHNpdHMgb24sIGFuZCBpdCBpcyB3aGF0IHNlcGFyYXRlcyBhIGd1aWRlIG9wZW5lZCBmcm9tIHRoZSBzdGlja3kgYmFyJ3NcbiAqIHBvcG92ZXIgZnJvbSB0aGUgc2FtZSBndWlkZSBvcGVuZWQgaW4gdGhlIGJ1eSBib3guXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZEd1aWRlID0gKFxuICBvcHRpb246IHsgbmFtZTogc3RyaW5nIH0sXG4gIG9uTWF0ZXJpYWxHdWlkZTogKGZyb206IEFuYWx5dGljcykgPT4gdm9pZCxcbiAgb25TaXplR3VpZGU6IChmcm9tOiBBbmFseXRpY3MpID0+IHZvaWQsXG4gIGFuYWx5dGljczogQW5hbHl0aWNzID0gUERQX0FOQUxZVElDUyxcbikgPT4ge1xuICBpZiAoaXNTd2F0Y2hPcHRpb24ob3B0aW9uLm5hbWUpKSByZXR1cm4gR3VpZGVMaW5rKCdNYXRlcmlhbCBHdWlkZScsICgpID0+IG9uTWF0ZXJpYWxHdWlkZShhbmFseXRpY3MpKTtcblxuICAvLyBUaGUgdGhlbWUgc2hpcHMgaXRzIG93biBzaXplLWd1aWRlIGRyYXdlcjsgcmV1c2UgaXQgcmF0aGVyIHRoYW4gcmVidWlsZGluZyBpdC5cbiAgLy8gT25seSBpdHMgbGFiZWwgaXMgcmVhZCBoZXJlIOKAlCB0aGUgdHJpZ2dlciBpdHNlbGYgaXMgcmVzb2x2ZWQgYXQgY2xpY2sgdGltZS5cbiAgY29uc3Qgc2l6ZUd1aWRlID0gL3NpemUvaS50ZXN0KG9wdGlvbi5uYW1lKSA/IHNpemVHdWlkZVRyaWdnZXIoKSA6IG51bGw7XG4gIHJldHVybiBzaXplR3VpZGVcbiAgICA/IEd1aWRlTGluayhzaXplR3VpZGUudGV4dENvbnRlbnQhLnRyaW0oKSB8fCAnU2l6ZSBHdWlkZScsICgpID0+IG9uU2l6ZUd1aWRlKGFuYWx5dGljcykpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBPbmUgb3B0aW9uJ3MgaGVhZGVyICsgdmFsdWUgbGlzdC4gVXNlZCBmb3IgZXZlcnkgb3B0aW9uIGluIHRoZSBidXkgYm94LCBhbmQgcmV1c2VkXG4gKiB1bmNoYW5nZWQgaW5zaWRlIHRoZSBzdGlja3kgYmFyJ3MgcG9wb3ZlcnMgc28gYm90aCBzdGF5IHZpc3VhbGx5IGFuZCBiZWhhdmlvdXJhbGx5XG4gKiBpZGVudGljYWwg4oCUIHNhbWUgY2FyZHMsIHNhbWUgc2VsZWN0ZWQvdW5hdmFpbGFibGUgc3RhdGUsIHNhbWUgY2xpY2stdG8tc2VsZWN0LlxuICpcbiAqIGBhbmFseXRpY3NgIGxldHMgYSBzZWNvbmQgbW91bnRpbmcgb2YgdGhlIHNhbWUgb3B0aW9uICh0aGUgc3RpY2t5IGJhcikgcmVwb3J0IHVuZGVyXG4gKiBpdHMgb3duIGV2ZW50IG5hbWVzL2xvY2F0aW9uIGluc3RlYWQgb2YgY29sbGlkaW5nIHdpdGggdGhlIGJ1eSBib3gncy5cbiAqL1xuZXhwb3J0IGNvbnN0IE9wdGlvbkJsb2NrID0gKFxuICBwcm9kdWN0OiBQcm9kdWN0LFxuICBvcHRpb246IHsgbmFtZTogc3RyaW5nOyB2YWx1ZXM6IHN0cmluZ1tdIH0sXG4gIGluZGV4OiBudW1iZXIsXG4gIGd1aWRlOiBIVE1MRWxlbWVudCB8IG51bGwsXG4gIGFuYWx5dGljczogQW5hbHl0aWNzID0gUERQX0FOQUxZVElDUyxcbikgPT4ge1xuICBjb25zdCBzd2F0Y2hlcyA9IGlzU3dhdGNoT3B0aW9uKG9wdGlvbi5uYW1lKTtcbiAgY29uc3QgdmFsdWUgPSAoPHNwYW4gY2xhc3M9XCJjcnMtb3B0LWhlYWRfX3ZhbHVlXCIgLz4pIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChvcHRpb25WYWx1ZTogc3RyaW5nKSA9PlxuICAgIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9e3N3YXRjaGVzID8gJ2Nycy1zd2F0Y2gnIDogJ2Nycy1zaXplJ31cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtdmFsdWU9e29wdGlvblZhbHVlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3B0aW9uKG9wdGlvbi5uYW1lLCBvcHRpb25WYWx1ZSk7XG4gICAgICAgICAgcHVzaERhdGEoXG4gICAgICAgICAgICBzd2F0Y2hlcyA/IGAke2FuYWx5dGljcy5wcmVmaXh9X21hdGVyaWFsX3NlbGVjdGAgOiBgJHthbmFseXRpY3MucHJlZml4fV9zaXplX3NlbGVjdGAsXG4gICAgICAgICAgICBvcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBhbmFseXRpY3MubG9jLFxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzd2F0Y2hlc1xuICAgICAgICAgID8gKFtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNycy1zd2F0Y2hfX2RvdFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17YGJhY2tncm91bmQtaW1hZ2U6JHtzd2F0Y2hGb3Iob3B0aW9uVmFsdWUpfWB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICg8c3BhbiBjbGFzcz1cImNycy1zd2F0Y2hfX2xhYmVsXCI+e29wdGlvblZhbHVlfTwvc3Bhbj4pIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgXSBhcyB1bmtub3duIGFzIE5vZGUpXG4gICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvcHRpb25WYWx1ZSl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IGxpc3QgPSAoXG4gICAgPGRpdiBjbGFzcz17YGNycy1vcHRfX2xpc3QgJHtzd2F0Y2hlcyA/ICdjcnMtb3B0X19saXN0LS1zd2F0Y2hlcycgOiAnY3JzLW9wdF9fbGlzdC0tc2l6ZXMnfWB9PlxuICAgICAge29wdGlvbi52YWx1ZXMubWFwKGJ1dHRvbil9XG4gICAgPC9kaXY+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3Qgcm9vdCA9IChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLW9wdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNycy1vcHQtaGVhZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNycy1vcHQtaGVhZF9fbGFiZWxcIj5cbiAgICAgICAgICB7b3B0aW9uLm5hbWV9Ont2YWx1ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7Z3VpZGUgPz8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpfVxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoc3dhdGNoZXMpIGxpc3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY3JzLXN3YXRjaC1jb3VudCcsIFN0cmluZyhvcHRpb24udmFsdWVzLmxlbmd0aCkpO1xuXG4gIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IGdldFNlbGVjdChvcHRpb24ubmFtZSk/LnZhbHVlO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gY3VycmVudCA/IGAgJHtjdXJyZW50fWAgOiAnJztcbiAgICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS12YWx1ZV0nKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2VsZWN0ZWQnLCBlbC5kYXRhc2V0LnZhbHVlID09PSBjdXJyZW50KTtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXVuYXZhaWxhYmxlJywgIWlzQXZhaWxhYmxlKHByb2R1Y3QsIGluZGV4LCBlbC5kYXRhc2V0LnZhbHVlISkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHJvb3QsIHN5bmMgfTtcbn07XG5cbi8qKlxuICogQSBtaXJyb3Igb2YgdGhlIGhvc3QncyBuYXRpdmUgPHNlbGVjdD5zLCB3aGljaCBzdGF5IGluIHRoZSBET00gYXMgdGhlIHNvdXJjZSBvZlxuICogdHJ1dGgg4oCUIGNsaWNraW5nIGEgY2FyZCBkcml2ZXMgdGhlIHNlbGVjdCBzbyBEYXduIHJlLXJlbmRlcnMgcHJpY2UsIG1lZGlhIGFuZFxuICogdmFyaWFudCBpZC4gRXZlcnl0aGluZyBpcyByZWFkIGZyb20gdGhlIGxpdmUgcHJvZHVjdCwgc28gdGhpcyBob2xkcyBvbiBhbnkgUERQLlxuICovXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IChcbiAgcHJvZHVjdDogUHJvZHVjdCxcbiAgb25NYXRlcmlhbEd1aWRlOiAoZnJvbTogQW5hbHl0aWNzKSA9PiB2b2lkLFxuICBvblNpemVHdWlkZTogKGZyb206IEFuYWx5dGljcykgPT4gdm9pZCxcbikgPT4ge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2Nycy1vcHRpb25zJztcblxuICBjb25zdCBzeW5jczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBwcm9kdWN0Lm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmICghaXNSZWFsT3B0aW9uKG9wdGlvbikpIHJldHVybjtcbiAgICBjb25zdCBndWlkZSA9IGJ1aWxkR3VpZGUob3B0aW9uLCBvbk1hdGVyaWFsR3VpZGUsIG9uU2l6ZUd1aWRlKTtcbiAgICBjb25zdCBibG9jayA9IE9wdGlvbkJsb2NrKHByb2R1Y3QsIG9wdGlvbiwgaW5kZXgsIGd1aWRlKTtcbiAgICBzeW5jcy5wdXNoKGJsb2NrLnN5bmMpO1xuICAgIHJvb3QuYXBwZW5kKGJsb2NrLnJvb3QpO1xuICB9KTtcblxuICByZXR1cm4geyByb290LCBzeW5jOiAoKSA9PiBzeW5jcy5mb3JFYWNoKChmbikgPT4gZm4oKSkgfTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHsgUERQX0FOQUxZVElDUywgdHlwZSBBbmFseXRpY3MgfSBmcm9tICcuL2J1eWJveCc7XG5pbXBvcnQgY2hldnJvbiBmcm9tICcuLi9pY29ucy9hY2NvcmQtY2hldnJvbi5zdmc/cmF3JztcblxuLyoqIE1hdGNoZXMgdGhlIHRyYW5zaXRpb24gb24gdGhlIHRoZW1lJ3Mgb3duICNjdXN0b21fbm90aWZpY2F0aW9ucyBkcmF3ZXIuICovXG5jb25zdCBTTElERV9NUyA9IDUwMDtcblxuLyoqXG4gKiBUaGUgSlNYIGZhY3RvcnkgY2FsbHMgY3JlYXRlRWxlbWVudCwgd2hpY2ggY2Fubm90IGJ1aWxkIG5hbWVzcGFjZWQgU1ZHIOKAlCBwYXJzZSBpdCBpbnN0ZWFkLlxuICogRXhwb3J0ZWQgc28gdGhlIHRoZW1lJ3Mgb3duIFJpbmcgU2l6ZSBHdWlkZSBkcmF3ZXIgY2FuIHdlYXIgdGhlIHNhbWUgZ2x5cGguXG4gKi9cbmV4cG9ydCBjb25zdCBDTE9TRV9JQ09OID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAxNCAxNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPicgK1xuICAnPHBhdGggZD1cIk0xIDEgMTMgMTNNMTMgMSAxIDEzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS42XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz4nICtcbiAgJzwvc3ZnPic7XG5cbi8qKlxuICogVGhlIHRoZW1lJ3Mgb3duIFJpbmcgU2l6ZSBHdWlkZSBkcmF3ZXIgKCNjdXN0b21fbm90aWZpY2F0aW9ucykgbGV0cyBldmVyeSByb3cgb3BlblxuICogYXQgb25jZSDigJQgaXRzIGNsaWNrIGhhbmRsZXIgb25seSB0b2dnbGVzIGAuYWNjb3JkLXBhbmVsYCBiZXR3ZWVuIGByZXZlYWxlZGAgYW5kXG4gKiBgY29uY2VhbGVkYCwgbm90aGluZyBtb3JlIChjb25maXJtZWQgbGl2ZTogYC5jb25jZWFsZWRgIGNhcnJpZXMgYGhlaWdodDogMCAhaW1wb3J0YW50YCxcbiAqIHNvIGZsaXBwaW5nIHRoZSBjbGFzcyBhbG9uZSBpcyBlbm91Z2ggdG8gY2xvc2UgYSByb3csIG5vIGlubGluZSBoZWlnaHQgdG8gcmVzdG9yZSkuXG4gKiBPbmUgZGVsZWdhdGVkIGxpc3RlbmVyLCBib3VuZCBvbmNlLCBjbG9zZXMgZXZlcnkgb3RoZXIgcmV2ZWFsZWQgcm93IGFmdGVyIHRoZSB0aGVtZSdzXG4gKiBvd24gaGFuZGxlciBvcGVucyBvbmUg4oCUIGRlbGVnYXRpb24gbWVhbnMgaXQga2VlcHMgd29ya2luZyBldmVuIHRob3VnaCB0aGUgdGhlbWVcbiAqIHJlYnVpbGRzIHRoZSBkcmF3ZXIncyBtYXJrdXAgb24gZXZlcnkgb3Blbi5cbiAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZU9wZW5TaXplR3VpZGUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcjY3VzdG9tX25vdGlmaWNhdGlvbnMgLmFjY29yZC1oZWFkaW5nJyk7XG4gICAgY29uc3QgcGFuZWwgPSBoZWFkaW5nPy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKCFwYW5lbD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZlYWxlZCcpKSByZXR1cm47XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3VzdG9tX25vdGlmaWNhdGlvbnMgLmFjY29yZC1wYW5lbC5yZXZlYWxlZCcpLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICBpZiAob3RoZXIgIT09IHBhbmVsKSBvdGhlci5jbGFzc0xpc3QucmVwbGFjZSgncmV2ZWFsZWQnLCAnY29uY2VhbGVkJyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgdGhlbWUncyBvd24gUmluZyBTaXplIEd1aWRlIGFscmVhZHkgZGltcyB0aGUgcGFnZSB3aGlsZSBpdCBpcyB1cCDigJQgdGhlIHNjcmltIGlzIGFcbiAqIGA6OmJlZm9yZWAgb24gYC5zZWN0aW9uLWhlYWRlci5jdXN0X25vdGlgLCBmaXhlZCBvdmVyIHRoZSB2aWV3cG9ydCwgaW4gdGhlIHNhbWVcbiAqIHJnYmEoMCwwLDAsMC41Nykgb3VyIG93biBkcmF3ZXJzIHVzZSDigJQgYnV0IG5vdGhpbmcgbGlzdGVucyBvbiBpdCwgc28gaXRzIGNsb3NlIGJ1dHRvblxuICogaXMgdGhlIG9ubHkgd2F5IG91dC4gT3VyIGRyYXdlcnMgZGlzbWlzcyBvbiB0aGVpciBiYWNrZHJvcDsgdGhpcyBnaXZlcyB0aGUgaG9zdCdzIHRoZVxuICogc2FtZSwgd2l0aG91dCBhZGRpbmcgYSBzZWNvbmQgc2NyaW0gb3ZlciB0aGUgb25lIGFscmVhZHkgdGhlcmUuXG4gKlxuICogQSBwc2V1ZG8tZWxlbWVudCB0YWtlcyBubyBsaXN0ZW5lciBvZiBpdHMgb3duOiBhIGNsaWNrIG9uIGl0IGxhbmRzIG9uIHRoZSBzZWN0aW9uLCBzb1xuICogdGhlIHRhcmdldCBpcyBjb21wYXJlZCB0byB0aGUgc2VjdGlvbiByYXRoZXIgdGhhbiBtYXRjaGVkIHdpdGggYGNsb3Nlc3RgLiBFdmVyeXRoaW5nXG4gKiB0aGUgaGVhZGVyIGFjdHVhbGx5IHJlbmRlcnMgc2l0cyBpbnNpZGUgYDxzdGlja3ktaGVhZGVyPmAsIHNvIGEgY2xpY2sgcmVhZGluZyBhcyB0aGVcbiAqIHNlY3Rpb24gaXRzZWxmIGlzIHRoZSBzY3JpbS5cbiAqXG4gKiBQcmVzc2luZyB0aGUgdGhlbWUncyBvd24gY2xvc2UgYnV0dG9uIHJhdGhlciB0aGFuIGhpZGluZyB0aGUgZHJhd2VyIGJ5IGhhbmQga2VlcHMgdGhlXG4gKiB0aGVtZSdzIGNsb3NlIHBhdGggdGhlIG9ubHkgb25lIHRoZXJlIGlzIOKAlCB0aGUgZmxhZyBkcm9wcywgYW5kIHdpdGggaXQgdGhlIHNjcm9sbCBsb2NrXG4gKiBhbmQgdGhlIHN0aWNreSBiYXIncyBndWlkZSB3YXRjaGVyLCBvbiBleGFjdGx5IHRoZSB0aW1pbmcgdGhleSBhbHdheXMgaGFkLlxuICpcbiAqIERlbGVnYXRlZCBvbiBgZG9jdW1lbnRgIGFuZCBib3VuZCBvbmNlLCBsaWtlIGBzaW5nbGVPcGVuU2l6ZUd1aWRlYDogdGhlIHRoZW1lXG4gKiByZS1yZW5kZXJzIGl0cyBoZWFkZXIgc2VjdGlvbiwgYW5kIHRoaXMgY292ZXJzIGV2ZXJ5IHdheSBpbnRvIHRoZSBkcmF3ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9zZVNpemVHdWlkZU9uQmFja2Ryb3AgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIShlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubWF0Y2hlcz8uKCcuc2VjdGlvbi1oZWFkZXIuY3VzdF9ub3RpJykpIHJldHVybjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI2N1c3RvbV9ub3RpZmljYXRpb25zIGJ1dHRvbi5jbG9zZScpPy5jbGljaygpO1xuICB9KTtcbn07XG5cbi8qKlxuICogT25lIGRyYXdlciB1c2VkIGJ5IE1hdGVyaWFsIEd1aWRlIC8gTWFpbGluZyBJbnN0cnVjdGlvbnMgLyBGQVEuXG4gKiBSZWJ1aWxkcyB0aGUgaG9zdCdzIFJpbmcgU2l6aW5nIEd1aWRlIHBhbmVsICgjY3VzdG9tX25vdGlmaWNhdGlvbnMpIOKAlCByaWdodC1oYW5kXG4gKiBzbGlkZS1pbiwgc2FtZSBoZWFkZXIgYW5kIGNsb3NlIGJ1dHRvbiDigJQgYnV0IGZ1bGx5IG5hbWVzcGFjZWQuXG4gKlxuICogYGxvY2AgaXMgdGhlIGRyYXdlcidzIG5hbWUgYXMgaXQgc2hvdWxkIHJlYWQgaW4gR0E0ICgnTWF0ZXJpYWwgR3VpZGUgUG9wdXAnKS4gSXRcbiAqIGNvdmVycyBldmVyeXRoaW5nIGluc2lkZSB0aGUgZHJhd2VyIOKAlCB0aGUgY2xvc2UgY29udHJvbHMgaGVyZSwgdGhlIGFjY29yZGlvbiByb3dzXG4gKiBpbiBgYm9keWAuIFRoZSBvcGVuIGV2ZW50IGJlbG9uZ3MgdG8gdGhlIHN1cmZhY2UgdGhhdCB3YXMgY2xpY2tlZCBpbnN0ZWFkLCB3aGljaCBpc1xuICogd2hhdCBgZnJvbWAgY2FycmllczogdGhlIGJ1eSBib3ggcmVwb3J0cyAnUERQJywgdGhlIHN0aWNreSBiYXIgaXRzIG93biBwcmVmaXggYW5kXG4gKiBsb2NhdGlvbiwgc28gb25lIGRyYXdlciBvcGVuZWQgZnJvbSB0d28gcGxhY2VzIHN0YXlzIHNlcGFyYWJsZSBpbiBHQTQuXG4gKlxuICogYGRlc2NgIGlzIHRoZSBvcGVuIGV2ZW50J3MgYGV2ZW50X2Rlc2NgLiBJdCBkZWZhdWx0cyB0byBgdGl0bGVgLCBhbmQgaXMgcGFzc2VkXG4gKiBzZXBhcmF0ZWx5IG9ubHkgd2hlcmUgdGhlIGhlYWRpbmcgaXMgdG9vIGxvbmcgdG8gcmVhZCBhcyBhIEdBNCBsYWJlbC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9wZW5Nb2RhbCA9IChcbiAgbmFtZTogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBib2R5OiBOb2RlLFxuICBsb2M6IHN0cmluZyxcbiAgZGVzYyA9IHRpdGxlLFxuICBmcm9tOiBBbmFseXRpY3MgPSBQRFBfQU5BTFlUSUNTLFxuKSA9PiB7XG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3JzLWRyYXdlci0tb3BlbicpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY3JzLWRyYXdlci1vcGVuJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJvb3QucmVtb3ZlKCksIFNMSURFX01TKTtcbiAgfTtcblxuICAvKiogRXNjYXBlIGlzIG5vdCBhIGNsaWNrLCBzbyBpdCBjYXJyaWVzIG5vIGV2ZW50IG9mIGl0cyBvd24uICovXG4gIGNvbnN0IGNsb3NlV2l0aCA9IChldmVudDogc3RyaW5nLCBkZXNjOiBzdHJpbmcpID0+IHtcbiAgICBjbG9zZSgpO1xuICAgIHB1c2hEYXRhKGV2ZW50LCBkZXNjLCAnY2xpY2snLCBsb2MpO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBjbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gKCAgXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJjcnMtZHJhd2VyX19jbG9zZVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZVdpdGgoYGV4cF9wZHBfJHtuYW1lfV9jbG9zZWAsICdDbG9zZScpfVxuICAgIC8+XG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNsb3NlQnRuLmlubmVySFRNTCA9IENMT1NFX0lDT047XG5cbiAgY29uc3Qgcm9vdCA9IChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLWRyYXdlclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWw9e3RpdGxlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjcnMtZHJhd2VyX19vdmVybGF5XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VXaXRoKGBleHBfcGRwXyR7bmFtZX1fYmFja2Ryb3BgLCAnQmFja2Ryb3AnKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLWRyYXdlcl9fZGlhbG9nXCI+XG4gICAgICAgIHsvKiBSZXZlcnNlZCByb3c6IHRoZSBidXR0b24gc2l0cyBmaXJzdCBpbiB0aGUgRE9NIGFuZCByZW5kZXJzIG9uIHRoZSByaWdodC4gKi99XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZHJhd2VyX19oZWFkXCI+XG4gICAgICAgICAge2Nsb3NlQnRufVxuICAgICAgICAgIDxoMyBjbGFzcz1cImNycy1kcmF3ZXJfX3RpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWRyYXdlcl9fYm9keVwiPntib2R5fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjcnMtZHJhd2VyLW9wZW4nKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJvb3QuY2xhc3NMaXN0LmFkZCgnY3JzLWRyYXdlci0tb3BlbicpKTtcbiAgKHJvb3QucXVlcnlTZWxlY3RvcignLmNycy1kcmF3ZXJfX2Nsb3NlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmZvY3VzKCk7XG4gIHB1c2hEYXRhKGAke2Zyb20ucHJlZml4fV8ke25hbWV9X29wZW5gLCBkZXNjLCAnY2xpY2snLCBmcm9tLmxvYyk7XG59O1xuXG4vKipcbiAqIEEgcm93IGVpdGhlciBleHBhbmRzIGl0cyBvd24gYGJvZHlgIGluIHBsYWNlLCBvciDigJQgZ2l2ZW4gYG9wZW5gIGluc3RlYWQg4oCUXG4gKiBhY3RzIGFzIGEgYnV0dG9uIHRoYXQgaGFuZHMgb2ZmIHRvIGEgZHJhd2VyLlxuICovXG5leHBvcnQgdHlwZSBBY2NvcmRJdGVtID1cbiAgfCB7IHRpdGxlOiBzdHJpbmc7IGJvZHk6IE5vZGU7IG9wZW4/OiBuZXZlciB9XG4gIHwgeyB0aXRsZTogc3RyaW5nOyBvcGVuOiAoKSA9PiB2b2lkOyBib2R5PzogbmV2ZXIgfTtcblxuLyoqXG4gKiBDb2xsYXBzaWJsZSByb3dzIHVzZWQgaW5zaWRlIHRoZSBNYWlsaW5nIEluc3RydWN0aW9ucyBhbmQgRkFRIG1vZGFscyxcbiAqIGFuZCBmb3IgdGhlIGFjY29yZGlvbnMgYXQgdGhlIGZvb3Qgb2YgdGhlIGJ1eSBib3guIEV2ZXJ5IHJvdyBzdGFydHMgY2xvc2VkLlxuICogVGhlIG1hcmtlciBjYXJyaWVzIGJvdGggZm9ybXMg4oCUIENTUyBzaG93cyB0aGUgY2hldnJvbiBpbiBhIGRyYXdlciBhbmQgdGhlXG4gKiArLy0gZXZlcnl3aGVyZSBlbHNlLCBzaW5jZSB0aGUgc2FtZSByb3dzIHJlbmRlciBpbiBib3RoIHBsYWNlcy5cbiAqXG4gKiBgbG9jYCBpcyB0aGUgc3VyZmFjZSB0aGUgcm93cyByZW5kZXIgb24sIGFzIGl0IHNob3VsZCByZWFkIGluIEdBNCDigJQgJ1BEUCcgZm9yIHRoZVxuICogYnV5IGJveCwgdGhlIHBvcHVwJ3Mgb3duIG5hbWUgZm9yIHJvd3MgaW5zaWRlIGEgZHJhd2VyLiBgZXZlbnRgIGlzIHRoYXQgc3VyZmFjZSdzXG4gKiBvd24gZXhwYW5kIGV2ZW50LCBzbyBidXktYm94IHJvd3MgYW5kIGVhY2ggZHJhd2VyJ3Mgcm93cyBzdGF5IHNlcGFyYWJsZSBpbiBHQTRcbiAqIHdpdGhvdXQgc2xpY2luZyBieSBgZXZlbnRfbG9jYC5cbiAqL1xuZXhwb3J0IGNvbnN0IEFjY29yZGlvbiA9IChpdGVtczogQWNjb3JkSXRlbVtdLCBsb2M6IHN0cmluZywgZXZlbnQ6IHN0cmluZykgPT4ge1xuICAvKiogT25seSBvbmUgcGFuZWwgb3BlbiBhdCBhIHRpbWUgd2l0aGluIHRoaXMgYWNjb3JkaW9uIGluc3RhbmNlLiAqL1xuICBsZXQgb3BlbjogeyBoZWFkOiBIVE1MRWxlbWVudDsgcGFuZWw6IEhUTUxFbGVtZW50IH0gfCBudWxsID0gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtYWNjb3JkXCI+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9ICg8c3BhbiBjbGFzcz1cImNycy1hY2NvcmRfX3NpZ25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIG1hcmtlci5pbm5lckhUTUwgPSBjaGV2cm9uO1xuXG4gICAgICAgIGlmIChpdGVtLm9wZW4pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNycy1hY2NvcmRfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNycy1hY2NvcmRfX2hlYWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aXRlbS5vcGVufT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAge21hcmtlcn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFuZWwgPSAoXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNycy1hY2NvcmRfX3BhbmVsXCIgaGlkZGVuPlxuICAgICAgICAgICAge2l0ZW0uYm9keX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBjb25zdCBoZWFkID0gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiY3JzLWFjY29yZF9faGVhZFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHdhc09wZW4gPSBoZWFkLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICAgIGlmIChvcGVuICYmIG9wZW4uaGVhZCAhPT0gaGVhZCkge1xuICAgICAgICAgICAgICAgIG9wZW4uaGVhZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBvcGVuLnBhbmVsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGVhZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBTdHJpbmcoIXdhc09wZW4pKTtcbiAgICAgICAgICAgICAgcGFuZWwuaGlkZGVuID0gd2FzT3BlbjtcbiAgICAgICAgICAgICAgb3BlbiA9IHdhc09wZW4gPyBudWxsIDogeyBoZWFkLCBwYW5lbCB9O1xuICAgICAgICAgICAgICBpZiAoIXdhc09wZW4pIHtcbiAgICAgICAgICAgICAgICBwdXNoRGF0YShldmVudCwgaXRlbS50aXRsZSwgJ2NsaWNrJywgbG9jKTtcbiAgICAgICAgICAgICAgICAvLyBDb2xsYXBzaW5nIGEgdGFsbCBwYW5lbCBhYm92ZSB0aGlzIG9uZSBzaGlmdHMgdGhlIHdob2xlIGxpc3QgdXAsIHdoaWNoIGNhblxuICAgICAgICAgICAgICAgIC8vIGNhcnJ5IHRoaXMgcm93J3MgaGVhZCBvZmYgdGhlIHRvcCBvZiB0aGUgZHJhd2VyLiBgbmVhcmVzdGAgb25seSBzdGVwcyBpblxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhhdCBoYXBwZW5zIOKAlCBhIHJvdyBhbHJlYWR5IGluIHZpZXcgaXMgbGVmdCBleGFjdGx5IHdoZXJlIGl0IGlzLlxuICAgICAgICAgICAgICAgIGhlYWQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ25lYXJlc3QnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAge21hcmtlcn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtYWNjb3JkX19pdGVtXCI+XG4gICAgICAgICAgICB7aGVhZH1cbiAgICAgICAgICAgIHtwYW5lbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xufTtcbiIsIi8qKlxuICogVGhlIHRoZW1lJ3Mgb3duIFwiSG93IGl0IHdvcmtzXCIgYmxvY2sgaW4gdGhlIGNhcnQgZHJhd2VyIGRlc2NyaWJlcyB0aGUgb2xkIGZsb3dcbiAqIChcImltbWVkaWF0ZWx5IHJlY2VpdmUgbWFpbGluZyBpbnN0cnVjdGlvbnNcIik7IHdpdGggdGhlIGZyZWUga2l0IGl0IGlzIHRoZSBraXQgdGhhdFxuICogYXJyaXZlcyBmaXJzdC4gT25seSB0aGUgY29weSBjaGFuZ2VzIOKAlCB0aGUgdGhlbWUncyBtYXJrdXAgYW5kIGhpZ2hsaWdodCBzcGFucyBzdGF5LlxuICogVGhlIGRyYXdlciBpcyByZS1yZW5kZXJlZCB3aG9sZXNhbGUsIHNvIGVhY2ggZnJlc2ggYmxvY2sgaXMgcmV3cml0dGVuIG9uY2UuXG4gKi9cbmNvbnN0IFNURVBTOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXG4gIFsnUGxhY2UgeW91ciBvcmRlcicsICcgYW5kIHdl4oCZbGwgbWFpbCB5b3UgYSBmcmVlIENvbGxlY3Rpb24gS2l0IHdpdGhpbiAyNCBob3Vycy4gT3V0c2lkZSB0aGUgVVMsIHlvdeKAmWxsIHJlY2VpdmUgbWFpbGluZyBpbnN0cnVjdGlvbnMgaW5zdGVhZC4nXSxcbiAgWydTZW5kJywgJyB1cyBhIHNtYWxsIGFtb3VudCBvZiB5b3VyIGNob3NlbiBpbmNsdXNpb24gb3IgYSBjb21iaW5hdGlvbiBvZiBtYXRlcmlhbHMgc3VjaCBhcyBhc2hlcywgZmxvd2VycywgaGFpciwgZnVyIG9yIGZhYnJpYywgdXNpbmcgdGhlIHByZXBhaWQgcmV0dXJuIGxhYmVsLiBBbnl0aGluZyB1bnVzZWQgd2lsbCBiZSByZXR1cm5lZCB0byB5b3UuJ10sXG4gIFsnUmVjZWl2ZScsICcgeW91ciBoYW5kY3JhZnRlZCBtZW1vcmlhbCBqZXdlbHJ5IHdpdGhpbiA24oCTOCB3ZWVrcy4nXSxcbiAgWydFbmpveScsICcgd2VhcmluZyB5b3VyIG1lbW9yaWFsIGpld2VscnksIGNvdmVyZWQgYnkgYSBMaWZldGltZSBXYXJyYW50eSwga25vd2luZyB5b3XigJlyZSBhbW9uZyAxMCwwMDArIGhhcHB5IGN1c3RvbWVycy4nXSxcbl07XG5cbmV4cG9ydCBjb25zdCBkcmVzc0NhcnREcmF3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignY2FydC1kcmF3ZXIgLm5ldy1jYXJ0LWNvbnRlbnQnKTtcbiAgICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC5kYXRhc2V0LmNyc0tpdCkgcmV0dXJuO1xuICAgIGNvbnRlbnQuZGF0YXNldC5jcnNLaXQgPSAnMSc7XG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJykuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgY29uc3QgW2hpZ2hsaWdodCwgcmVzdF0gPSBTVEVQU1tpXTtcbiAgICAgIHAucXVlcnlTZWxlY3RvcignLm5ldy1jYXJ0LWhpZ2hsaWdodCcpIS50ZXh0Q29udGVudCA9IGhpZ2hsaWdodDtcbiAgICAgIHAubGFzdENoaWxkIS50ZXh0Q29udGVudCA9IHJlc3Q7XG4gICAgfSk7XG4gIH07XG5cbiAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZHJlc3MpLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FydC1kcmF3ZXInKSEsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICBkcmVzcygpO1xufTtcbiIsImltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5cbmNvbnN0IFZJU0lCTEUgPSA1O1xuXG4vKipcbiAqIFwiUHJvZHVjdCBkZXRhaWxzXCIg4oCUIHRoZSBmaXJzdCBmZXcgc3BlY3Mgb3BlbiBieSBkZWZhdWx0LCBldmVyeXRoaW5nIGVsc2UgYmVoaW5kXG4gKiBcIlNob3cgbW9yZVwiLCBwZXIgdGhlIGRlc2lnbi4gQ29udGVudCBjb21lcyBmcm9tIHRoZSBwYXJzZWQgbGl2ZSBkZXNjcmlwdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IERldGFpbHMgPSAoc3BlY3M6IHN0cmluZ1tdLCBwcm9zZTogSFRNTEVsZW1lbnRbXSkgPT4ge1xuICBjb25zdCB2aXNpYmxlID0gc3BlY3Muc2xpY2UoMCwgVklTSUJMRSk7XG4gIGNvbnN0IHJlc3QgPSBzcGVjcy5zbGljZShWSVNJQkxFKTtcblxuICAvLyBQcm9kdWN0cyB3aXRob3V0IGEgc3BlYyBsaXN0IHN0aWxsIG5lZWQgYSBzZW5zaWJsZSBzcGxpdC5cbiAgY29uc3Qgb3BlblByb3NlID0gc3BlY3MubGVuZ3RoID8gW10gOiBwcm9zZS5zbGljZSgwLCAxKTtcbiAgY29uc3QgaGlkZGVuUHJvc2UgPSBzcGVjcy5sZW5ndGggPyBwcm9zZSA6IHByb3NlLnNsaWNlKDEpO1xuXG4gIGNvbnN0IGhpZGRlbiA9IChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLWRldGFpbHNfX21vcmVcIiBoaWRkZW4+XG4gICAgICA8dWwgY2xhc3M9XCJjcnMtZGV0YWlsc19fbGlzdFwiPntyZXN0Lm1hcCgobGluZSkgPT4gKDxsaT57bGluZX08L2xpPikgYXMgSFRNTEVsZW1lbnQpfTwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXJ0ZVwiPntoaWRkZW5Qcm9zZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCBzaG93TW9yZSA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1kZXRhaWxzX190b2dnbGVcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW4gPSAhaGlkZGVuLmhpZGRlbjtcbiAgICAgICAgaGlkZGVuLmhpZGRlbiA9IG9wZW47XG4gICAgICAgIHNob3dNb3JlLnRleHRDb250ZW50ID0gb3BlbiA/ICdTaG93IG1vcmUnIDogJ1Nob3cgbGVzcyc7XG4gICAgICAgIGlmICghb3BlbikgcHVzaERhdGEoJ2V4cF9wZHBfZGV0YWlsc19tb3JlJywgJ1Nob3cgbW9yZScsICdjbGljaycsICdQRFAnKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgU2hvdyBtb3JlXG4gICAgPC9idXR0b24+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaWYgKCFyZXN0Lmxlbmd0aCAmJiAhaGlkZGVuUHJvc2UubGVuZ3RoKSBzaG93TW9yZS5oaWRkZW4gPSB0cnVlO1xuXG4gIGNvbnN0IHBhbmVsID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtYWNjb3JkX19wYW5lbFwiPlxuICAgICAgPHVsIGNsYXNzPVwiY3JzLWRldGFpbHNfX2xpc3RcIj57dmlzaWJsZS5tYXAoKGxpbmUpID0+ICg8bGk+e2xpbmV9PC9saT4pIGFzIEhUTUxFbGVtZW50KX08L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cImNycy1ydGVcIj57b3BlblByb3NlfTwvZGl2PlxuICAgICAge2hpZGRlbn1cbiAgICAgIHtzaG93TW9yZX1cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCBoZWFkID0gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY3JzLWFjY29yZF9faGVhZFwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbiA9IGhlYWQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgaGVhZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBTdHJpbmcoIW9wZW4pKTtcbiAgICAgICAgcGFuZWwuaGlkZGVuID0gb3BlbjtcbiAgICAgICAgLy8gVGhpcyByb3cgcmVwbGFjZXMgb25lIG9mIHRoZSB0aGVtZSdzIG93biAucHJvZHVjdF9fYWNjb3JkaW9uIGhlYWRlcnMsIHNvIGl0XG4gICAgICAgIC8vIGNhcnJpZXMgdGhlIHNhbWUgZXZlbnQgdGhlIG90aGVyIHJvd3MgZG8gcmF0aGVyIHRoYW4gZ29pbmcgdW50cmFja2VkLlxuICAgICAgICBpZiAoIW9wZW4pIHB1c2hEYXRhKCdleHBfcGRwX2FjY29yZGlvbl9vcGVuJywgJ1Byb2R1Y3QgZGV0YWlscycsICdjbGljaycsICdQRFAnKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNwYW4+UHJvZHVjdCBkZXRhaWxzPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjcnMtYWNjb3JkX19zaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtZGV0YWlscyBjcnMtYWNjb3JkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLWFjY29yZF9faXRlbVwiPlxuICAgICAgICB7aGVhZH1cbiAgICAgICAge3BhbmVsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpnQUFBQ1lDQVlBQUFBWXdpQWhBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQU9kRVZZZEZOdlpuUjNZWEpsQUVacFoyMWhuckdXWXdBQUlpSkpSRUZVZUFIdGZWbVhXK2QxNWI0WEZ4ZnpXTVdhUkphcktKSVNLWktpQnN1eUxDdXg0K1VrVHR0T25OWERXM2YvZ2lTL3dOSnJPdzkrNjdXNkgreUhkcTkrOE9xMlZpZHYzWTVseDdac2lZTklpb01venF3Sk5hRXc0MDdJUGdjb2hxSklTcFpZRW9GN054ZFlHQzVRQmR5Tk0reHp2dk1aZUFDdVhyMWF6R2F6ZjlQcjlmNllsem5lTllmUEVaYVZRS082aEhUYVJHVmxsYmRqR0o5NkVwN3ZZTlJobWNEMUsrZVJTc2VRenhjQk13czdtVU1RK1Bpc1lSaEdsVDlPOGVmcm51ZjliSHA2K3RwOWo3M1huVXRMUzNPeFdPeEhRaXc4WW9qRkxEVHJTeWdYSjNIaHduSE16VDJGd0VxQ256UkdGZkZZRWpkdm5FQW1WY1RZV0I1dE4wRENMc0o3Uk40emlmWmozL2RmdXhmUnpMdnZxRlFxZjBOeW5Yd1V5U1h3K2FGYWRocW5ULzBPaDU1OG11L0FnVG02M0lMWUFOZHRZWEppaXBmZE9IN2lCQW1YaHZzSXZXZHk1VCtacG5seWVYbjViKzkrN0FNV2JHVmw1ZnY4OFNvZWNWaVdoZXJhRFN4Y3Y0emkyQmltcDJjUW1HVytteDRmN1dGMFlDSk9FOUJzTFdDdHNnYUw3ODFNNWpFOXN3K09GL0RrUFhyZkxCTHQxVjI3ZHIxMisvYjJGYkZjR0FKeUNRSnl5UEVjR1BFa3BxYjNvbFpyd2pLMjd1UHdoeGlHZzNydEpuelhRaUtld0hLbGd0azlUL0s5ZTQ4a3VRUkJFTHg2cHlWVGdrbk1oU0VobDhBMFRKSnFBNC90bm9OaFpaRmpQTGE0ZUlQM2p4RERUQk9lMjBHbjBVYTJQSW5aL2M4Z25TK2pWdC9Fby80MkdaTjlmOENwUHNFWWMzMmZmclNJSVlISHpHbDg3REZzclZkZ01laTNrd20wMnk0Sk5qcnUwYVNOYXRTckNBeTVua1NuM1dXUW55VHZodUpMVkpRa1VhNll3alFKMGpCTUlNR0s1Y2RVcm5CYXQzRCtuZDhpazh3aUpybjhpUGhKdWhxVUNydXd0cnFNMnRaMWRKdEwvRExGa0tRME1ReGhwaVNKSW5QUnF4aC9pU0dFNS9zb1R4eENwK3RoOSt3c1d0MEcyZzI2aitINGhuODA2QWY5bm9zZXJYSXlCcXhYMXJGbjkyRzQvdkJZNlhRNi9iY00rczN2WWlqUlF4QXpZSW5sb3B1Y25UdUFhMWZmWTlhVndDakFadnA0NmR4WlBIM3NqeVNtd2RUY1VYUUNFZzRlaGdYOHUvOUlmTW94RENzQ0QrbFVEbWRPbitFSlNlREFnUVBvZHJib0pFME1NMHd6am5hcmlxZWZPWWFWeGV2WXFIV293QXdVKzk1bnI5eC9Va2oxeDZEMk5kU1JzV1NPamZvR1ZwY3Z3KzI0bU5zL1M5Sk53d21vR2hrQmhpL3U1eC9jYXpONzNNRG1WcDNmb1I3bTl4MUdWNldKNGZ2aURQZFhIYUtKOVRCV25zQldvNGFweC9Zdy9zOVJPMXJpSXk3Sk5XenhtRUYzSDhCdDFlQlRWbDFaWGtLQ0dYSmdtRU5ybFllZVlJSnV0NDFrS28ySng1NUF0amlCemVvV1hLZURSMTR3dWd1bUdhUDBzc0RnM3FLMk40L25Ydmc2bGhjWFljWnNEQ3RHZ21BeEZvT0xoVHk2N1lhS3NIWWlBWTlLLzdBUkxNWU1lSE45RTluOE9OOUhnT3JtTW9yRklxM3k4QVQyZDJNa0NDWmhiNEZxZnFPK2lHYnRHbTdkdklwVU1vVmhxMHYyK0MrWEwrTFdqWGZodEZmaDB3clA3SDZjaXI2TFljVklFQ3lRYkRJenhXc1pEZXB6bVR4cTFYWFdKNGNzQnFQVmNwd1dPaDBobEtmOVhqWmxtR0V1NEk4RXdRUys3eUpiR09lcHNQSDAwMSttQWs0TDREWjUwb2JqTFVySmEvblcrOHg4YlJ4NTZubklxY21XeGxnV0cxNzNLQmdaZ2duOFhnRFBpT0gwMmJmdzFGUEhtR0U2UTFJQU4rZ0dXZjRxSkRHLzl5Qk9udncxLy9ZaytzMnF3MzJLTEl3U1dML0xaY3BvNU11NGNQRnRaTk01akUvS1dTcHBkd0lleVJZWEVTQVlmZldxZE9zdE5Hcm5ZS2RzbGxueTJwSTA3QmdwQ3lid2doNVNpVGlxV3pWMW1jMVdGNVpWdzZNS1U0WFZPaE9VSnVNdkI1ZXZYc2FCL1M5UVdCMk5kUVlqUnpEV1ZuVkJ5TDY5UjVET3ppS1ZLcUt5dUl6WUkrb3FBLzVkMTY1ZVFxSDhCZXc5OUFKMlRVeGlhMnNkUm13MGl2WWpSN0NBdGJyUytDVExMTXNVS0gyazZHcTI2ZzJlc0VlMGhrZExsVWpZTUcwYkRxMnQxRlJqdE1BWW5wTGpBekZhTVJpa1ZjeEhlWHlhR2hMVi9HWUYxeGV1SUpOTzBiSWwrV2diajFxL21DeTlxemNiYU5jcXNDMFArVnlXTVZnT2dUdmMyZU0yUnM2Q0NRSytyZkxFRTJpVFpObENrYVdrRHB4T2xkeUs0WkdDSVJGWWdGYWpqWFo5RGV0clZlUUs4eXh3andhNUJDTm53UVE5WnBPbUZhY2x5Tk42eFppUmplUHFsZk00Y1BDTGNCK2g5VjUyTElZenAzNkhGMTU0aFo2U21sMk11cGZoUDVySjdpZkVTRm93Z2FqN3FVUUI3NXc2Z1VLdWpMbTVQV2kzNm8rTThHcWFGcnFkR3A0NjlEUTJOamV3ekJwa0lBWjJ4QllRRDMwLzJJTWczUW5WelFVME4xZmdld0YyNzU2QmtSUzFuMEgwNTJvbVNISy94VGlyaG5iYlFXVjlEUWNPSElQRE15R0xpSWV1eStnQkdGa0xKcEM1RFJPVFg4RG14aWJpTEg2M3ZUajh6aXJ2L3p3MUpoTXgwNk55WDBXejZlRE0rWk1ZSzVmUm8wV1RPbW93WW1ka3BBa202TFJiTEJpekJQUGs4eWlPVGFGUzJVQlBocVdZbjg5YmovSFhOaWloZUk2TjBtUDc4ZkxMMzhLTkcxZVpRZmJYRW96UXlqdkZ5Qk5NM0dRMmwwTzNWWVVSMkVpa2szQ2Q5dWNtVnNpNnh2V05OV1FLTEY5NVBicndUWmEwQ25DQzRXM0plUkJHbm1BUzFJdmw2dFJYVUt0ZFlUWjVHZWxVaHJXL3orZXQ5MlFaYlR5RmpmWHI4RG9iY0xvTnpNNC9BZGZyWWhReDhnU1RCYXpaM0JUYU5CREpSQUxGWW9GRVc5ZU8wYzhhNHYya3U5Nmd1THF5c0FEUGJ5QWVOMG40a3R5TFVjVG9XekRJSWwwWDViRjV5Z0kramg1OWtYSFlDcG5YK2N3bEM0dUIvRnJsdW1hT0wzenBxN3lkUkdsc0x6b2pVdGkrRjBKQk1JSG9ZajdmN3JrTEozSGt5QmVwbHJjUSsweXRocUhacXhVTEtFa2N4RHVuM3lIeEFkY1ExVDRZS1hIMVRvU0hZRDI2eXNLWTlvaTk4ODV2c0xtK1NwKzFEcDB1c3VORU01VkFSdENFMmV0aGRlVW1YSmF2MHNWZFduVVlaWVNHWUFKcFVKQlZSNTdqa0d6VGFOWnJkRk50all0MkZoNkwyazBkT2JWY1djVzVjMmR4NU5ubjFHV2JJeXR6OXhFcWdwa3NkcSt2cldIKzhXZVJTSlVwdms1aWJmVUdRN0dkL1Joa0lNdjF5Kzh6d2RpTGc4OThGWk16TTVRbkdwUXN4SHFOOWlrSUZjRUNhazFqWXhOVTltOGdaaGxJcGxQWTNHb09UdlJPd1VDUFFid1ZqOEhpNzNPN0RzVldrOFY0ays1UkhoOXRFeFlxZ3ZVb2JJNVB6Y0xteWU0MlYzRDEzTzlSekJkZ0dEdmJWQ0xEVEdxMUd1cnJ0SmJ1R2tyRk1sTEpQUHFSL1dqS0U5c0lGY0VFRW9jVngyWlpDMndqVng1SHMxRm5OdGZhdWZOc1VPR2loZXc2WFhqdEJsWldLc2hscCs4WXdqVGFRZjVJZDFQY0Q5SXE0N0hvSFdmOXI5MXhzTHh5QzN2M0g0WG5QZnlUTFRYR2MyZCtpUU15Y3QzdklFaU15U0pPOUlrMSt0L3YwRmt3Z2FqN2RyS0VrNmZlWnVCZHh0eWVQZWkycFozNjRYNGNCb25zdWxYVnZWcnRKaXBNTU16YjdqZ2NIMzBvTFpoQVZQV050U3VvTnpiaE96S0c4ekZtbFZQd2c0ZTFmdEpVTVRkd3Q5Qm9kckcxVmNYKy9ZZlFnUTF6eExXdk94RktDeWFRSmZrVFUvdXdScXVTSzVUaHVERTRuV1YrNVI3R2NoNkRsb29hbDlkQXQrdmk4cFh6eUdYU0NLd1V5VFU2L2ZZZkI2RWxtSkNnM1dvZ204L2pzUzhjUmk0M2g2WEZDbnB1OTFPUGZaSVdvVlpqQ2MydWp6eHJqVjk1K2M5eDY5WUNTVGU4Yzc0K0tVSk1zSjZPUGMrbTBuQmFMUmlXajJUU2hpOEZ3azlKTUozenRicWhLNW9NbHFLcUcrdklacVZGU0t4WHVEN3lFQk9Nc0d6a0M3dlE2aXlnWFZ2U0xnczdIdi9VMnFmc0lwVE1aTEZXV2FDTFhJSFRyVExHTzBCcEpGenVVUkJxZ3NsQ2tGeGhOeHluQjlmdmozcHF0NnRhci93ME1FeGZwMEt2TEMvenVyUm5KNURKanRHQ2pXYlg2b01RYW9LSkk1VE5UQXZGZWRoMkVpOSs4V3U0ZWVzNkM5QWVqZGduYzVPaXNWVXJTOWlxdC9IU2w3NG05NkM4YXg1dUVENzNLQWkzaXh3Z29LN2VZbXgvNGRKcEhENzhOQVhYTFlxd242UjhaRWc5Q3BibDRJbURoM0gyM2QvUlBWcURWVXpoa1NidVJFUXc5RmVDbDBvenNHSUdybDU5SC9YcUdrWDMraCs0Q0ZZc1hrL1hPL3F1aityYUltTzdMbDkzZ2k4emVDeUVpQWcyZ084SHlHUktPamJjb0Y3VjZtNnl6T1BDakgxY1M5Ymo4UzNVU001cXRZRlRaMDdpOE5IbjBHWU5jcVJXMHY2QkdNblpGSjhFcGhYRDhzSWlYZVNMU09RS0ZGMjdxQ3hmeGZqVXdZL2wzRXhhdjJ1WHJ1Q3hmUWN4c1lmeVJNeGtwYUNLUEF2cXVuRzdKQTRoTkdLUkJSdEFTSkFyRjdGWlhkUjlKelBwTEtxMXFnNjArMWp3bVNIR0FzWnVHVGh0UjdXd1JEcjlyd3Q4dytraEk0SnRJNkRBT2pFMXl6aU0xMW1ndm5IMWJXUXpPU1hJUnkvbk43VHR1dXM0NkRSbDVmaUdMdlpOSkxOODNYQUc5OXVJWE9SdDlNaWxCRjNhSk5xZEdzTW1reG1nUjYyc1Jka2lobzh5UVJLcmJXMXRVYlZmMUc5dGVXSmVGNXIweko2cStXRkZhTHNwN2dmVHROSHJiTkM5SlZnSXIyTmpheGw3SHo5QzZVSjBySHNUeGJadHZIdm1WM2hpM3hFbUNDNzhYa0ZqTG9NRUUyNk4ycnlKUHdTUmk3d0wwcmNmUzZUdzF2SGZZZGRFR2RQbE1wWCtEdmx5NyttSTB2UFY3ZGJ4K093K09MNkh5dUlxZFRCYnR4SVVYb1daWElLSVlCOENHUkZMWVdKeUFrc0wxNUNXN2ZSMDVmV0htU0pkRXoydmlVWjFHYWxFZ25IYlpZeFB6dXBLY2lQY29kZHRSQVM3Qnp6SHg4ejBQdDJFL2RkdnljSVE5TnVjNzZ4Uk12aDNPaTBzWGp2UDQrSjQ0N2UveEJpelVNdE95MWF2aU5CSEZJUGREeUs4cGh4eXFvelZ0U1drVXpJY1RsWWdtYkI0TWVQQTlXdW5NVEcrQi9Ia21KYUhscSsvajRuZGg3UytHYUdQeUlMZEJ6SzNmbW01d3ErZ2cxU21nSGpDUnN4d2RlSEc4dEpaMURadXdmQjZ2RCtybjJLalZvUEpZd0lqZkMwNUQwSkVzUHZBWjhDZUwrNW1YSFVXTmttMmVQTzYxaG16V1J1TnJRWm05eDdFN1B4ZVdFRUwxWlVyV0xwMUNlUGxXUnErS1BpNkU1R0xmQUNrTHl5UXd2WDZGYnBBQzQxR1hiV3V0WTExdlB6S0t4Z2JuOGJ4dDk5a0RUS0ZQZlA3bUlGYXFuMUYrRmRFQlB0SUdOUzVFbmovd3B1c0JqbFlYOS9FL2dQN3NjU2krTDU5ZXhtakZaRW9qdEZ6dHNOYURYb2dJaGY1a1pDdDlub29GTXZhcXYvTXNXTllYMXRCS3BYQzlSczMrQWt5NW5MY2lGejNRVVN3andHVGNrVzcxYVhWV3NicStnb09IbndaTWJyTXhZVkZraStJUHNVSElQcG9QaGFZTGRvR2J0NjZoVko1QWh2MVZiVGJiZTE2OVJ4UEYzbEV1RGVpR093ajBVUFNqbU41NFNyS3BTeXVYYnVLU21XWjJXUmVCd3FYbURrbTg2V1JuMVQ0U1JGWnNJK0FaU1d3c253RHUvZnN3ZzFLRldrcXJvbGtHaE1URXlpWFM2alcxdFZkUnJnM0lvSTlDUHgwNnJVTnhDbXduanQzSGpldTM4QVAvdjYvWUpMa0toYUxPSHYySE9wYmEvQkhhUHU5aDQySVlBK0FaZHFvYml5alZxOGlZS3pWYnJjd04vY0Z5QXFoRTI4ZjF6YkQyVDB6cUs5VllFWlc3SjZJUHBVSGdRVnQxM0hnZVIzazhnWDgyWi8vQjh3OWZocTFWb0EvK2RhL3c2VUxKM1FVVktQZFFPRVIzUlA4ODBaRXNBY2drSEpSb1l6M3psOUZLVjlrM1RHSkk4Ky93aHFrajFxMXJwTUxWMWNyckZWT3FWWVc0Y09JWE9RRDRQc09abWNmUjRVdThPVHhFM2pqamRkUnVmaytnLzVyT0hQNmw2aXhiUFRtbThjeE16TURSR0hZUFJISkZQZURhV2lIZEdOemxkOUNSMnVTclc0WGk4czM0Ymt1MHJSbTlWb05jV2FVWDMzbFQ5RjFmTms4RFlocWtSOUFSTEM3SUtwOXp5ZFp1aTMwdkRhS3BRTEo0MkZyY3dNZGFaMG02Vkp4RzlsY1h2djBaYTZyYmpydkI4aVZwMkFuVW5TdEQyT0kzV2dnaXNFR1lNVVJxV1FTbGVVRnBKTW1DcmtjZnYzUHY4Rzc1eTdBb2VXeUV6Ykd4aVkxTGd0SUxDTVcxem43MHpQVG1KbVlRbW1zZ0VadEJVRXlnMFJtRERvZlA3Sm1rUVhydzlDdC9pNjhld0tIRHU3REwvN3A1L2psRzcvQ250azllT0xnVVQ2V2djTnNNbTZZcEtGUGtZTEZJVXVtRmZaWTUzYlJiVFpwM2RwNGN2OSt6TytkeHdaZFp5SWg3ZE8yWnBsaFJrUXcyU0NVUkxodzdrMWFvZ244NEFkL1QxSWQxTW5RZ1d4YUtuTWxCaXVLWk1zWm8vOFVXUEU0ckppbHQxM1hVYmU0WGxuUk5aWC81aS8rQXExV2l3Y1ZrS1FyRGJ6d3pRWGJSdWdKSnIxZTc1NzVEV0lNNG4vMDR4L2hPOS85SzNMS1FqcWJwWjFpUEJiMGRKOXR5NVk5dFhzYWQ2WFQ2WDZSbTlaSk50WVNCRXdLREpFcWVEbDEvTGY0OW5lK2pXS1o4VnVRUWlxVjArMEV3NGhReXhUcGRCS24zLzRGM0VZYlAvbWZQOEZmLy9XLzF6SG0yWHhaclpjUUtNVmpMQWIxTXFCTzVsUmtNaGtkaFNtN1Q3cStpNWh0cVNBckgyU0NtYVhzWnZ1bGw3NkpuLzNzSDdIQnhNQndtMzBMRmxJZE5yUUVTMUZlT0h2bTkwaXhtUDEvWC84WnZrZHlkWmtSSmxOcHhsTXRCdllkV2krU2lBRyt4Rm1PMDlXUm02MW1TMlVLbWI0alA3dk1MR1dqOTRDV3E5a2ltWmhOdWxUK1gvbmFOL0RUbi81dmZzQWVLaXRYa0l3bkVVYUVrbUJTTjF4WnZvVlNOb09mL0svL2dXLy8xZmZnMHkybTBobms4M21XaHp6MEphMEFmczluakpaQXA5MUV2Vkh0NzIzRSs4V2F4VXhMcDFLM1dnMmR5UnFqeEtGeG1TR2pPVDM4eWRlK2hmLzYzLzQ3RHN6dnhlVkxaeEczd3pmR1BKUXhXRncyWlYrOGlOZC8rbjh3dis5eFpMTWxraTZoQk1uazZBS3BtQXE1cFB6ajBiMFZTeVdkdnRPU3Zuc2hIZU15ZVkwRVpZMWF0YWJyY1lWazBpT1dJMEdGZERHWmxkK21Qc1k2NWNLTjkvQm5qTWw2Vm80RjlINHNGeGFFem9JbEdFdmR1bmtaQ3pkdjZydlBwQXY5U1pra2twQ24xZXFnWEM0ek1NOVFUTTJxOEZyYnF0RnErU1JRVmdOOGkrU1NnU2RDcEh3eHAxMFZNay9NN1hSNGJCVmJ0UzFtazIwa1VqYVNKRjJqNDZCUmIrSG1sUXQ4M1RUQ2hOQVJ6SFU3eUNRcy9Qei8veHpIbm41V3B6OWJkbHlKRkRCbzl4aFRyUzR2cWFBcU9tbVdibE5JSlM2eFM2SllET1NsRjZ6SkdNeGhSdG50K2tqbk16b2NSVWdubTJvWmF1VjhGV1RGMG4zeGhaZnhqLy93RDVqZXRRdjE2a2FvaHRHRmltQXhLNDdOOVJWY3VYUUoweFBURE1ZREVpaFA5MGhCTk5hUHpjUWFpYWphYXRSb2hWcG9NUFpxTXJCM25VQjFNTWtnWlNMbU5OWDdYRmFHVnZTUW9iVXI1QXVRNlhVU3gwbkNLQVIxWFU4MXNwNGZvL1VyNmg3aGx5NmVZU0tSUVZnUXJqMjd0UnhrNHEyMzM4S0JnMGNnbGJJa0NXR1RXSllaMTRzczVOQVI1cUt2OGwreFVDUnAwcnJ0c21TSTdXWmQ0NjBXTThZRWczK1JKalkzTm1Bbis2cTl4R05peVpoVzltdVNqUGk3Ymh1SERoL0YyWE1YK1ZoTU04NndJRVFFTXlneGJHSjVlWkVuM05VNFNzcERZbWxFSEpVUjVyS1Bkb0k2bDBuZHl5QXhaRWUyUnIyaFdhV1FKNTFKSTBkbDNvcGJLbGwwdW0yS3NiNnUrbDViWFZNM0tzZWFvc3dhaGc0VzdqQXVFN0lHSk54S3BZSVNMZDIxUzZkQzB3RWJHb0xKd2d6WjF2aktwY3Q0Y3Q5K2Fsc1NUOFdaSmZvcWxDWllwTFpKT0NrYkJYUnQ0azVsTEpPWXBGS3BpUEZkVXpxVnllUjlJcm9tS2NDSzlaSVBVTlI5VmZYZGZxTGdzU29nYnRMUkRlQmpTcmcyTThxWngvWm9VWDF6WTQza0RvY3VGaDZDOFl6YjFLZ1dGaFl3TVRVQjNURFU3OWNaSmNBWHRUNUZrc25zQ2N2dXUwaWJKTmkxYXh4eEpnV3lxWHN5bWFEN2pHdU1McGJKWitZcE1adDBXZ2hoWWlTak5DazZYbGYxTXhuMUpEdXN0VmdNbDFKUnNUaU8xVFc2VTlzTXpUSzMwTFRydUNSRG00Rzc0OGptQ2pZc1daQk5seWh1VFdJcHNTeFZJUmVKSnJWdDJXbzV4dU1rU0c5UVlMWHRsTFpIeTIyNUxxMDRGaFg4R0ovdlV6Y1RDeGFqNjB4Ym1YNjJ5V0s0UTNjcGo0c2xGQ3NtRmxEYzh6UmZlMFBHRDhnVTZ4RkhhQ3lZUjNlMVhxMGd6UktSN09wQmR2U3REelBJZHFlSkJyV3JoRnFpQkdXSnJKYUgxdGZYYUlVQzFjbmt1andqVGlzb3phNEp1dGRnMEx6amtMd1NseVVsR1lnbGRPSzBFRmVTQmMwOEI0VnUwbENiRmd1RkFxMWEvYjV6WDBjSm9iQmdjcEpkdjR1Tnlockd5eVhvMjJZUTd2UEVkNXllWm41cHlTYXB6TXNOaWFGa1V5dXBNZFlwc29wUHpFbndUL2NvQXF6QisyVitXSnVacE52dGQxUElxQ2U1WkNqT2FxbUlsaktqUkhYVWlrbTgxbWcwZUV5Y2xpNE9ueVVuY2MyaWw0MHlRbUhCK3JHUVR4RzBpMnk1aUJnRGVkTmc3RVVtaUdzVWRWK2FBK1U0SVZVbW5VSTJuOU9ZUzhSVWliazhsU0FNMWNhMHlaQkt2VHhmc3Mxa0txa1d6TmJYa0ZLVXJVbEZvMWxEbnRZcVJhSzFLTUNLdmlZVHFHWERCc01JUjRORk9GeWt4UElNZ0xvYVB6RVlaOFF2RjRtTnNsTDZZUXlXVEdhMVVDMDFSN0ZNMGliZGFVc0hoUWlsbm1wbGtpVksvMWVIajRzYmxCSG1jaEZMSkRGV29QVkxxSHRNcGxKOERWYzFzcnpzK3NIZklXUzBMR01nMm9hamZ5Y2NMbEwvNjJuSlJ5eVdDS0JpWmNSRmVvR0pBdXVSa2hYS1BId04ya21VVHFPTHdIRzAyVkJjckpER1VYSjFOR3Zza1NCdXgyWGNGWmZ1ZS8wOThqeHhtWEtzSkFMSmRJTHlSRU9YdDRuVUlWMnVzaWVTUzduRWlBV2ZlbS93WVVCSVhLU2hlcGU0UDNPUTlRbHB4STJKQUNvRUVDTEpZMUovRkVzazFreXpQN1BmZXk4RU5NbWpCTjFoUHlOdGtFUnhEZnBsSHl4NWZaLzZtUmdtRVcvcnRZcU9PUmN5aThRaExsSTJuVzlMUDVrbmpZcjlidGxSUnlnc21MVGRTRHV6WkllTmpzY1lpeVdmVnVOMmw2cmpkUkJuRENXR1NEYStTaVhTZEljQnpCUXRsMWdsdWttZlFidkVZVkxzamtrM0JlVU1peVRweDIzbzF5Z2xNZWpKTWphSDhWNmRsaTZqbWxlYlZrOEszNlpxYjc1cVlERXpIb3FhZDBoa0NrUGRWNEpCdUxoQTFiQklLSWVrRUhYZjB6YWRsaEpGcEFWZmQwanpkTUdIOUhqWjBpdkcrM3VEUnNKRVBLRUtQUWJXVHJaa1ZqbURMdFRzeVJ4OUVqQ1YxVGl0TDh6NjJyQVlpNW5hOWlQeG11djRtaVNNT2tKQk1JbTdaSVBRQk1zN1BWM2hZMmhUb1p4d1dabWRwQ1VUVmI1Qjl5V25YSVA5QUVwRWNZMlNIWXFxMzlPTmh3S051UXh0ay9aVnVKWGl0OFJuVWw5c09tMDlUckpGajlaS2lDbS9wOVZ1cVl3UjF3UWdvY2NiRWNGR0JKTGErZFNvc24wQnRTOHZ4RFRRRjcxS01zT0VMT3pnYmRHcU90Mm10amRuc3YyMkd0R3FURjJ5eG15UlVZWFlOeWtOSmJUUFhraEg0bERia25iclFyR2tGbEVZS2h0cmlWNG1McGZPVWNWVmVVaWVxMXY5aFVDb0NFVU1Kb0c4N01KaEIzR1ZIelM0TnBsQit1anJYNzFBeFUrdEVWRkNFSGxCU0dnYTFMYzBSbU1SbTdlRm9ISmNqMEpzbDY4alZreTZYS1Z0V3F4VFc3Sk95OVNGSTZLQlNYdVFSd3RvcUtBYXFCYm5zVTRwMnkvSFk5STZQZm9qQnNKUml5U0JiRnFiSGpMYTF5WEt2VmdoMWEwOGtSVXNiZDhSNXlmcklhVkZSMXFuSlNpVFlGNXNsSXdWTUFjU0JuMmV0dVhJWERCeG9STDBkMlM4UU1DNHJ0UHZaaFhYSVAxaklHL2paa3dsRWNrK2RUOHRXdFJrSXR0L2ZNUVJtbUszdE9KNGZsdzdUdnZ0MEhSYWpJOU12MGYzUnIyS1FiN2ZrMm5TU1cwdzFJRW1uZTZncG1qckFnNE1WaFBaOGJnU05Kc3A4SHBNdTE1akxBRlpmQjJMQlBaWTdKWWVmMDh5VEkzM1BDMUJpZlZNVUIrVDMyTm4rbi9IcUNNMHhXNGhoc2NUV3lxVWFXMWEyamV2Y3lORVhTZGhTdU83bEdndWlkV2lCVk1pSmVPcTZqZXJWYldDRW1mcDJrZ2U0M21PNm1BU1M4VnBBVk5KY1huaVZtMWF3YnhhdzM2RzJldnYyMDBpZTN4ZWtTV29lcTJ1cmpVTXpmbWhJVmpBRXl5cnRTZDNUNkZLd2tpM2FWOVlEVlFJclRWcXRDNXgzU1BTa0s0SFdqUVJTdU9NczBTMWw4VWJydXRxdjFlSG9xazA1Z3ZKdEV4a3lucklwRW9TZ2ZTRDhYbmFPNkdqQktUNTBPK1hvUGk4aVlseDFKc3NOVW5NRndLRXhrV0twYkdrRTlVdXFXZ3FoSkdWM05MdUxJNnMwNkNMRkVtQnBBczB3RGY3WlNPLzMyUGY3WFIxbXJRM0VFeUZWQW50U21WV2FmVlVhSlZWM1BLTjFiaE1hcFFpYS9BRkpHNlRMRkprRFplM2JUdWpTOTdDVU80TzFhSVBPNVhSTXRIODNEeWFyUm9rMU5lRkdpU1VUUmZua2p3ZGFiL1I0bldnY1psa2ZtSjloRncrRlg5SkJYUUJTT0JwRzdSMnNJb0dadmphcktqWnFNUmRyR3VxbG9hWXJpN3E4cm1URTFPNGRPVjk3RDl3T0RTano4TzFMcExXbzAzck5iZDNMMVpYS3BvWlNtemxpV1doTkNGeGtSU3lmU25uNkJOTVhkUWhlM0NyTzJSZDByQ3MyNHM3eEJWdXlUckhvTCtlVXBlNjBmMDVuYloydmtMcWxGSnFjanRZWDF2RjVNeWt0bVdiZG5qbVZJUnF3cUZZcTN4aEhFNXp2YjgwTGZBMW5wS2dYTXBBRW91SjJKcEpwYlMxSjI3Mys4aWtBemF1TW9XbEx0TFFLVTJ1MWhmRmtyVmNSOHRNMHJFcVZvMk9sa2FzMzhMVDdUUzBTcERONWRCc05ISG84RE82NUMwc0NOM0tibWxUYnRLS3ZmU1ZsMUFudVdSYlBsbVVBVm5oTGZYR1FlZUVXSjVVaGdxOHhlQTlhV3YycUszU2trbjZudmFRQ2FIaWcxVkQwaXNtWFJXYXJRYjl6ZzFwMDJhSlV2ZVdQSGJzR0txMUpzWW1wME0xS0RpVXcwOUVYcmo2M2ptME9sdG9OenBhcDVTRVR3SnpMZnZZTVcyLzZmVU1MV3BMZ2lEZlJGSDlaV01HZnlEUUNrMDAwTmNDZGt6NzdTVzJFbGNxbTVmS2lxTFZ5Z0ttcHFaMTdPYXg1NzdLN0ZFV2VvUm5HRjBveHpmSlpPalMrQ1FLdVN3V0YyN2Q3bGpWUUY1Mjl1ajZLb3dtTkdEdmQyRUltWlJjRXB6TGRKMWtzbC9MOVB0U2hkc2hzWFNsVWx5VmZTRmx0eU91ME1Uc0YrYVJ6aGZwSmljUnRvSDZvU1NZZEpXT2owK2cwUXJ3N0hQSGNQSGllUjAycDhLclJkMXIwUDdjb1JXU2xwNW1zOUZ2bCtaMU81MUZNcHZXZUV3SzR0bGNrZGxuajFraTNXWTZxWDM4RW1OMXVqVWRWdmZOYi80cExsMTdEODgvLzNVMDJ6V0VEYUdkY05oay9IWHMySmV3eEd6eXhTOS9HUmZPbjFlTEpVS3JKQURXd0cyS1c1VHVCNWwvSDJQMmwyZW0yYU5vSyswN0hSbWwyZXRyYklWQ2p2R1dpZXJtcG1hWHJXWWJYLy82TjNEaW5WTjQ1YVh2YWQweWpOc1poWHdJc0lGc09vZWYvNytmWW1aNkdxZmZPVTJ0YWhyeFJGcUwzTEtNVFQ0Y2ljTkVJN1BvL21SbW1Nd1drNm1Ic3JaU21nb3RNa2MyS1pWeVViZlZvQlZMNHZDUm96aDk1aVNPUHZzaXJFUm1zRG1EcklNTTExanprTzlWMUtPYnJPRWIzL3kzdUxXMGpLTkhqNmhLdjdXeHBvRjdYRlo1ODZoa01xV3hWM1Z6SGJkdVh0T2VldW5zU2VnVUhWLzF0Vnc2cFRNblpOK2lnNGNPNGZpSjMrUG9NeStScEtVQnVYU29FOEtHYUU3K0FBVUc0U2VQL3dvZHhsc0g5dTNGK1V1WFVGbGFSSm9Xem9ySk9rZER4Vk9SSzBUS3lLUXppTkZ0U25GY1ZoS1ZTZ1hzZlh3Zk5qWlhjUEc5Uy9qamIzeUhMbEVhQ3p1cVN2U2JDNFZvNGZwT2g1SmcyK1VoV1F3aUYrMExDL3B0enMzR09pNWZmQmQ3NW1hUm9jdmJxS3lqMnFpeVFGNVgvVXBiZUJpZmlWWExGN09ZR04rRDRsaUJqMi9pNG9XTGlLY1NkSXRmMFhZZnk0aFQrY2VnZHRrbmxqbFlBcWNMVVVJUWxJMFV3ZTdlczNIN0pBYURnYjZDWU5DbUk0cThsSVRrWjc5THd0ZWY3bUFsZDRQdU1FNDN1R3RpZ29GOVdsdDZaQzJqcjZ1enJjSEtJUWViUEc1aGNRRUJTWlBMalZPNExUTHc5N1JBTHNkSmk0OWM1THFsL2ZuOUxnNjVMbitiM040bTJqWUpQeTd4aG9HZ0kxVXEydjdBdHkzVTNmZjdnMTNRN3Q0L1NFN3k5bk5pZ3dXMnFXeEJsZmdiQ3l2YStweE9NWk9rbXd6NFVnNHp4QmFGMXRyV0pndm9lU1FMTXlwYkNERmQzMU4zS2pHWE1SZ3RjT2ZmSUQvdnRHYWZ4SklOaytVYnlWcmszWlpnKytjMmtleTc1dFVIZzA3VmJlSnR1MDdWRlhyOXZpNmQ1MldZMmtCbzNuNjkrS0RmNi9haCtydzdmLytkWk5pMm92Y2p5Q2k2emRCdDU3ZDk4dTkxbjY0Y0dzUm1IenJSMnd6NndGMXlUUCs1OTlwU3VYZlA0KytQVVl6Sm92MGk3OEkyS1Q1RW1JOUJvQWdmUnJSbmQ0UWRSVVN3Q0R1S2lHQVJkaFFSd1NMc0tDS0NSZGhSUkFTTHNLT0lDQlpoUnhFUkxNS09JaUpZaEIxRlJMQUlPNHFJWUJGMkZCSEJJdXdvSW9KRjJGRkVCSXV3b3hDQ1hVT0VDRHVEcW1rWXhqVkVpTEFESUxkT21iN3Z2NEVJRVhZQVFSQzhibXh1YmhZZHg5bEVoQWdQR1NUWXZGa3FsYW8wWmI5QWhBZ1BFZVRVajZlbnA2OXBGa2szK1o5NVJ4VVJJandFQ0pmSXFkZmt1aEpNbU9aNTNtdUlFT0VoZ0s3eE5lR1VYTCt0ZzgzTXpQeFFIa0NFQ0o4T3IwMU5UZjF3KzhZSGhGYXk3bFdhdHIrTDNHV0VQeFRDbVY2djkzZVRrNU92ZnVEK2V4Mjh0TFEwWjVxbUhQZ2ZFU0hDUjBDU1JJbmp0OTNpQng1NzBCT0ZhSHp5WDVKczMrWE5ZMlJvRVJFaXNQb2pBcjFvcUoxTzU0Zno4L1AzOVhqL0FxbFU1UmhSTSs4WUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB0eXBlIHsgR2lmdCBhcyBHaWZ0RGF0YSB9IGZyb20gJy4uL3Byb2R1Y3QnO1xuaW1wb3J0IG5lY2tsZXNzIGZyb20gJy4uL2ljb25zL3NtYWxsLW5lY2tsZXNzLnBuZz9pbmxpbmUnO1xuXG4vKipcbiAqIEdpZnQtd2l0aC1wdXJjaGFzZSBwcm9tbyBjYXJkLCBkaXJlY3RseSB1bmRlciB0aGUgYWRkLXRvLWNhcnQgYnV0dG9uIOKAlCBzaG93biBvbmx5XG4gKiB3aGlsZSBgcXVhbGlmaWVzKClgIGhvbGRzLiBSZS1jaGVja2VkIG9uIGV2ZXJ5IGhvc3QgcmUtcmVuZGVyIHZpYSBgc3luY2AsIHNpbmNlXG4gKiBzd2l0Y2hpbmcgdmFyaWFudHMgY2FuIG1vdmUgdGhlIHByb2R1Y3QncyBwcmljZSBhY3Jvc3MgdGhlIHRocmVzaG9sZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEdpZnQgPSAoeyB0aXRsZSwgcHJpY2UgfTogR2lmdERhdGEsIHF1YWxpZmllczogKCkgPT4gYm9vbGVhbikgPT4ge1xuICBjb25zdCByb290ID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtZ2lmdFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjcnMtZ2lmdF9fcmliYm9uXCI+R2lmdDwvc3Bhbj5cbiAgICAgIDxpbWcgY2xhc3M9XCJjcnMtZ2lmdF9faW1hZ2VcIiBzcmM9e25lY2tsZXNzfSBhbHQ9e3RpdGxlfSB3aWR0aD1cIjcyXCIgaGVpZ2h0PVwiNzJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLWdpZnRfX2JvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNycy1naWZ0X19sYWJlbFwiPllvdXIgR2lmdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWdpZnRfX3RpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JzLWdpZnRfX2Rlc2NcIj5HZXQgdGhpcyBqZXdlbHJ5IDxzcGFuPndvcnRoIHtwcmljZX08L3NwYW4+IGZvciBGUkVFIHdpdGggdGhpcyBpdGVtPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtZ2lmdF9fcHJpY2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjcnMtZ2lmdF9fZnJlZVwiPkZyZWU8L3NwYW4+XG4gICAgICAgIDxzIGNsYXNzPVwiY3JzLWdpZnRfX3dhc1wiPntwcmljZX08L3M+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgIHJvb3QuaGlkZGVuID0gIXF1YWxpZmllcygpO1xuICB9O1xuXG4gIHJldHVybiB7IHJvb3QsIHN5bmMgfTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHBhY2sgZnJvbSAnLi4vaWNvbnMva2l0LXBhY2thZ2Uuc3ZnP3Jhdyc7XG5pbXBvcnQgY2hldnJvbiBmcm9tICcuLi9pY29ucy9raXQtY2hldnJvbi5zdmc/cmF3JztcbmltcG9ydCBjaGV2cm9uTGcgZnJvbSAnLi4vaWNvbnMva2l0LWNoZXZyb24tbGcuc3ZnP3Jhdyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi4vaWNvbnMva2l0LWNsb3NlLnN2Zz9yYXcnO1xuaW1wb3J0IHsgaW5saW5lU3ZnIH0gZnJvbSAnLi4vc3ZnJztcblxuLyoqIFRoZSBKU1ggZmFjdG9yeSBjYW5ub3QgYnVpbGQgU1ZHIGNoaWxkcmVuIOKAlCBhbiBpY29uIGlzIGEgc3BhbiB3aG9zZSBtYXJrdXAgaXMgc2V0LiAqL1xuY29uc3QgSWNvbiA9IChjbHM6IHN0cmluZywgc3ZnOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVsLmNsYXNzTmFtZSA9IGNscztcbiAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGVsLmlubmVySFRNTCA9IGlubGluZVN2ZyhzdmcpO1xuICByZXR1cm4gZWw7XG59O1xuXG5sZXQgdGlwcyA9IDA7XG5cbi8qKlxuICogVGhlIGxpZ2h0IFwid2hhdCBpcyB0aGUga2l0IGZvclwiIHRvb2x0aXAsIHNoYXJlZCBieSB0aGUga2l0IHJvdyBvbiB0aGUgbWFpbiBpbWFnZSBhbmRcbiAqIHRoZSBcImZyZWUgY29sbGVjdGlvbiBraXRcIiBsaW5rIGluIHRoZSBIb3ctdG8tb3JkZXIgc3RlcHMuIGB0cmlnZ2VyYCB0b2dnbGVzIGl0OyBpdFxuICogbGl2ZXMgaW4gYGhvc3RgLCBhIHBvc2l0aW9uZWQgZWxlbWVudC4gQnkgZGVmYXVsdCB0aGUgQ1NTIHB1dHMgaXQgYWJvdmUgdGhlIHJpZ2h0IGVuZFxuICogb2YgYGhvc3RgICh0aGUgcm93KTsgYGFuY2hvcmVkYCBpbnN0ZWFkIGNlbnRyZXMgaXQgb3ZlciB0aGUgdHJpZ2dlciwgd2hlcmV2ZXIgdGhhdFxuICogd3JhcHMgdG8sIGFuZCBwb2ludHMgdGhlIGFycm93IGF0IGl0LiBDbG9zZWQgYnkgYSBjbGljayBlbHNld2hlcmUsIEVzY2FwZSwgb3IgaXRzIFhcbiAqIChtb2JpbGUgb25seSk7IGBvbkNsb3NlYCBpcyBmb3IgdGhlIFggYWxvbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRhY2hLaXRUaXAgPSAodHJpZ2dlcjogSFRNTEVsZW1lbnQsIGhvc3Q6IEhUTUxFbGVtZW50LCBhbmNob3JlZCA9IGZhbHNlLCBvbkNsb3NlPzogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBpZCA9IGBjcnMta2l0LXRpcC0ke3RpcHMrK31gO1xuXG4gIGNvbnN0IHRpcCA9IChcbiAgICA8ZGl2IGNsYXNzPXtgY3JzLWtpdF9fdGlwJHthbmNob3JlZCA/ICcgY3JzLWtpdF9fdGlwLS1hbmNob3JlZCcgOiAnJ31gfSBpZD17aWR9IHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLWtpdF9fdGlwLXRleHRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIGtpdCBpbmNsdWRlcyBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIGNvbGxlY3QgYW5kIHNlbmQgdXMgeW91ciBpbmNsdXNpb25zIChhc2hlcywgaGFpciwgZmxvd2VycywgYW5kIG1vcmUpIHRvIGJlIGZ1c2VkIGludG8geW91ciBqZXdlbHJ5OiBpbnN0cnVjdGlvbnMsIHBhY2tpbmcgbWF0ZXJpYWxzLCBhbmQgYSBwcmVwYWlkIHJldHVybiBsYWJlbC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNycy1raXRfX3RpcC1ub3RlXCI+XG4gICAgICAgICAgPHN0cm9uZz5BdmFpbGFibGUgaW4gdGhlIFVTIG9ubHkuPC9zdHJvbmc+IEZvciBvcmRlcnMgb3V0c2lkZSB0aGUgVVMsIHdl4oCZbGwgcHJvdmlkZSBtYWlsaW5nIGluc3RydWN0aW9ucyBpbnN0ZWFkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjcnMta2l0X19jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAvPlxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuICB0aXAucXVlcnlTZWxlY3RvcignLmNycy1raXRfX2Nsb3NlJykhLmlubmVySFRNTCA9IGlubGluZVN2ZyhjbG9zZSk7XG4gIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgaWQpO1xuICBob3N0LmFwcGVuZCh0aXApO1xuXG4gIGNvbnN0IHBsYWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYXQgPSB0cmlnZ2VyLmdldENsaWVudFJlY3RzKClbMF07XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbigzMDAsIGJveC53aWR0aCAtIDMyKTtcbiAgICBjb25zdCBjZW50ZXIgPSBhdC5sZWZ0IC0gYm94LmxlZnQgKyBhdC53aWR0aCAvIDI7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNlbnRlciAtIHdpZHRoIC8gMiwgMTYpLCBib3gud2lkdGggLSB3aWR0aCAtIDE2KTtcbiAgICB0aXAuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGlwLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICB0aXAuc3R5bGUuYm90dG9tID0gYCR7Ym94LmJvdHRvbSAtIGF0LnRvcCArIDExfXB4YDtcbiAgICB0aXAuc3R5bGUuc2V0UHJvcGVydHkoJy0tYXJyb3cteCcsIGAke2NlbnRlciAtIGxlZnR9cHhgKTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIHRpcC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJywgb3Blbik7XG4gICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBTdHJpbmcob3BlbikpO1xuICAgIGlmIChvcGVuICYmIGFuY2hvcmVkKSBwbGFjZSgpO1xuICB9O1xuXG4gIHRpcC5xdWVyeVNlbGVjdG9yKCcuY3JzLWtpdF9fY2xvc2UnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0KGZhbHNlKTtcbiAgICBvbkNsb3NlPy4oKTtcbiAgfSk7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXQoIXRpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCF0aXAuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkgJiYgIXRyaWdnZXIuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHNldChmYWxzZSk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBzZXQoZmFsc2UpO1xuICB9KTtcbn07XG5cbi8qKlxuICogXCJGcmVlIENvbGxlY3Rpb24gS2l0XCIgcm93IHRoYXQgc2l0cyBvdmVyIHRoZSBib3R0b20gb2YgdGhlIG1haW4gcHJvZHVjdCBpbWFnZS5cbiAqIFRoZSB3aG9sZSByb3cgaXMgdGhlIHRyaWdnZXIgKG9uIG1vYmlsZSB0aGUgZGVzaWduIGhhcyBvbmx5IGEgY2hldnJvbiwgbm8gbGluayksIGFuZFxuICogb3BlbnMgdGhlIHRvb2x0aXAgYWJvdmUgaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBLaXRSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSAoXG4gICAgPHNwYW4gY2xhc3M9XCJjcnMta2l0X19saW5rXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNycy1raXRfX2xpbmstdGV4dFwiPldoYXQgaXMgaXQgZm9yPzwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG4gIGxpbmsuYXBwZW5kKEljb24oJ2Nycy1raXRfX2NoZXYnLCBjaGV2cm9uKSk7XG5cbiAgY29uc3Qgcm93ID0gKFxuICAgIDxidXR0b24gY2xhc3M9XCJjcnMta2l0X19yb3dcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNycy1raXRfX3RodW1iXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3JzLWtpdF9fdGV4dFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNycy1raXRfX3RpdGxlXCI+XG4gICAgICAgICAgPGI+RnJlZTwvYj4gQ29sbGVjdGlvbiBLaXQgdG8gc2VuZCB5b3VyIGluY2x1c2lvbnNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNycy1raXRfX3N1YlwiPlNoaXBzIGluIHRoZSBVUyB3aXRoaW4gMjRoIMK3IFByZXBhaWQgcmV0dXJuIGxhYmVsPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICByb3cucXVlcnlTZWxlY3RvcignLmNycy1raXRfX3RodW1iJykhLmFwcGVuZChJY29uKCdjcnMta2l0X19wYWNrJywgcGFjaykpO1xuICByb3cuYXBwZW5kKGxpbmssIEljb24oJ2Nycy1raXRfX2NoZXYtbGcnLCBjaGV2cm9uTGcpKTtcblxuICBjb25zdCByb290ID0gKDxkaXYgY2xhc3M9XCJjcnMta2l0XCIgLz4pIGFzIEhUTUxFbGVtZW50O1xuICByb290LmFwcGVuZChyb3cpO1xuICBhdHRhY2hLaXRUaXAocm93LCByb290LCBmYWxzZSwgKCkgPT5cbiAgICBwdXNoRGF0YSgnZXhwX3BkcF9nYWxsZXJ5X2tpdF9jbG9zZScsICdDb2xsZWN0aW9uIGtpdCBpbmZvIGJveCcsICdjbGljaycsICdJbWFnZSBHYWxsZXJ5JyksXG4gICk7XG4gIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1c2hEYXRhKCdleHBfcGRwX2dhbGxlcnlfa2l0X2NsaWNrJywgJ0NvbGxlY3Rpb24ga2l0IGluZm8gYm94JywgJ2NsaWNrJywgJ0ltYWdlIEdhbGxlcnknKSk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59O1xuIiwiaW1wb3J0IHsgcHVzaERhdGEsIHZpc2liaWxpdHlPZlRpbWUgfSBmcm9tICdjcnNkZXZ0b29sJztcbmltcG9ydCB7IEtpdFJvdyB9IGZyb20gJy4va2l0JztcblxuY29uc3QgZmlsZSA9IChzcmM6IHN0cmluZykgPT4gc3JjLnNwbGl0KCcvJykucG9wKCkhLnNwbGl0KCc/JylbMF07XG5cbi8qKiBUaGUgSlNYIGZhY3RvcnkgY2FsbHMgY3JlYXRlRWxlbWVudCwgd2hpY2ggY2Fubm90IGJ1aWxkIFNWRyBjaGlsZHJlbiDigJQgc2V0IHRoZSBtYXJrdXAgaW5zdGVhZC4gKi9cbmNvbnN0IENIRVZST04gPVxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAxNCAyNlwiIGZpbGw9XCJub25lXCI+XG4gIDxwYXRoIGQ9XCJNMTMuMDYwNSAwLjUzMDI3M0wxLjA2MDU1IDEyLjUzMDNMMTMuMDYwNSAyNC41MzAzXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utb3BhY2l0eT1cIjAuMTdcIiBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XG48L3N2Zz5gO1xuXG4vKipcbiAqIFRoZSB0aGVtZSByZW5kZXJzIGEgc3RhY2tlZCBkZXNrdG9wIGdhbGxlcnkgd2l0aCBubyB0aHVtYm5haWxzIGF0IGFsbCwgYW5kIGFcbiAqIGBzbGlkZXItLW1vYmlsZWAgY2Fyb3VzZWwgb24gbW9iaWxlLiBXZSBhZGQgYSB0aHVtYm5haWwgc3RyaXAgdGhhdCBkcml2ZXMgdGhlXG4gKiBleGlzdGluZyBzbGlkZXIsIGFuZCBob2lzdCB0aGUgc2VsZWN0ZWQgb3B0aW9uJ3MgaW1hZ2UgdG8gZmlyc3QgcG9zaXRpb24uXG4gKiBgY3VycmVudFNyY2AgcmVzb2x2ZXMgdGhlIGltYWdlIGZvciB3aGljaGV2ZXIgb3B0aW9uIGRyaXZlcyBtZWRpYSBvbiB0aGlzIHByb2R1Y3QuXG4gKi9cbmV4cG9ydCBjb25zdCBHYWxsZXJ5ID0gKGN1cnJlbnRTcmM6ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCwgY3JlYXRlZDogSFRNTEVsZW1lbnQgfCBudWxsLCBzaG93S2l0OiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwLmNsYXNzTmFtZSA9ICdjcnMtdGh1bWJzJztcblxuICAvLyBPbiBkZXNrdG9wIHRoZSBkZXNpZ24gcHV0cyBcIlRoaXMgUHJvZHVjdCBDYW4gQmUgQ3JlYXRlZCBXaXRoXCIgYmV0d2VlbiB0aGUgbWFpblxuICAvLyBpbWFnZSBhbmQgdGhlIGdyaWQgYmVsb3cgaXQsIHdoaWNoIG1lYW5zIGluc2lkZSB0aGUgbWVkaWEgbGlzdC4gT24gbW9iaWxlIGl0IHNpdHNcbiAgLy8gYWJvdmUgdGhlIHdob2xlIGdhbGxlcnksIG91dHNpZGUgdGhlIHNsaWRlci5cbiAgY29uc3QgY3JlYXRlZFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjcmVhdGVkU2xvdC5jbGFzc05hbWUgPSAnY3JzLWNyZWF0ZWQtc2xvdCc7XG4gIGlmIChjcmVhdGVkKSBjcmVhdGVkU2xvdC5hcHBlbmQoY3JlYXRlZCk7XG5cbiAgLy8gVGhlIG1vYmlsZSBmcmFtZSdzIHN3aXBlIGFmZm9yZGFuY2UsIG92ZXIgdGhlIHRvcC1yaWdodCBvZiB0aGUgc2xpZGVyLlxuICBjb25zdCBoaW50ID0gKFxuICAgIDxzcGFuIGNsYXNzPVwiY3JzLWdhbGxlcnlfX2hpbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIFN3aXBlIOKGklxuICAgIDwvc3Bhbj5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAvLyBPdmVyIHRoZSBib3R0b20gb2YgdGhlIG1haW4gaW1hZ2Ugb24gZGVza3RvcDsgcGlubmVkIG92ZXIgdGhlIHNsaWRlciBvbiBtb2JpbGUsXG4gIC8vIHNvIGl0IHN0YXlzIHB1dCB3aGlsZSBzd2lwaW5nLlxuICBjb25zdCBraXQgPSBzaG93S2l0ID8gS2l0Um93KCkgOiBudWxsO1xuICBsZXQga2l0VHJhY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxpc3QgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnByb2R1Y3RfX21lZGlhLWxpc3QnKTtcbiAgY29uc3Qgc2xpZGVzID0gKCkgPT5cbiAgICBBcnJheS5mcm9tKGxpc3QoKT8uY2hpbGRyZW4gPz8gW10pLmZpbHRlcigoZWwpID0+ICFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nycy1jcmVhdGVkLXNsb3QnKSkgYXMgSFRNTEVsZW1lbnRbXTtcblxuICAvKiogV2hhdGV2ZXIgc2xpZGUgdGhlIHRodW1ibmFpbHMgYW5kIGFycm93cyBhcmUgY3VycmVudGx5IHBvaW50aW5nIGF0LiAqL1xuICBsZXQgY3VycmVudCA9IDA7XG5cbiAgLy8gVGhlIG1vYmlsZSBmcmFtZSdzIHByZXYvbmV4dCBjaGV2cm9ucywgb3ZlciB0aGUgc2lkZXMgb2YgdGhlIHNsaWRlci5cbiAgY29uc3QgYXJyb3cgPSAoZGlyOiAtMSB8IDEpID0+IHtcbiAgICBjb25zdCBidG4gPSAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPXtgY3JzLWdhbGxlcnlfX2Fycm93IGNycy1nYWxsZXJ5X19hcnJvdy0tJHtkaXIgPCAwID8gJ3ByZXYnIDogJ25leHQnfWB9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPXtkaXIgPCAwID8gJ1ByZXZpb3VzIGltYWdlJyA6ICdOZXh0IGltYWdlJ31cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudCArIGRpcjtcbiAgICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNsaWRlcygpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgIHNlbGVjdChpbmRleCk7XG4gICAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZ2FsbGVyeV9hcnJvdycsIGRpciA8IDAgPyAnUHJldicgOiAnTmV4dCcsICdjbGljaycsICdQRFAnKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBidG4uaW5uZXJIVE1MID0gQ0hFVlJPTjtcbiAgICByZXR1cm4gYnRuO1xuICB9O1xuXG4gIGNvbnN0IHByZXYgPSBhcnJvdygtMSk7XG4gIGNvbnN0IG5leHQgPSBhcnJvdygxKTtcblxuICBjb25zdCBtYXJrID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjdXJyZW50ID0gaW5kZXg7XG4gICAgc3RyaXAucXVlcnlTZWxlY3RvckFsbCgnLmNycy10aHVtYicpLmZvckVhY2goKGVsLCBpKSA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zZWxlY3RlZCcsIGkgPT09IGluZGV4KSk7XG4gICAgcHJldi5kaXNhYmxlZCA9IGluZGV4IDw9IDA7XG4gICAgbmV4dC5kaXNhYmxlZCA9IGluZGV4ID49IHNsaWRlcygpLmxlbmd0aCAtIDE7XG4gIH07XG5cbiAgLyoqIFRoZSBzbGlkZXMgXCJwZWVrXCIsIHNvIHRoZSBjdXJyZW50IG9uZSBpcyBmb3VuZCBieSBvZmZzZXQsIG5vdCBieSB2aWV3cG9ydCB3aWR0aC4gKi9cbiAgY29uc3QgbmVhcmVzdCA9ICh1bDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2xpZGVzKCkubWFwKChsaSkgPT4gTWF0aC5hYnMobGkub2Zmc2V0TGVmdCAtIHVsLnNjcm9sbExlZnQpKTtcbiAgICByZXR1cm4gb2Zmc2V0cy5pbmRleE9mKE1hdGgubWluKC4uLm9mZnNldHMpKTtcbiAgfTtcblxuICAvLyBgc2VsZWN0YCBzY3JvbGxzIHRoZSBzbGlkZXIgaXRzZWxmLCB3aGljaCBmaXJlcyB0aGUgc2FtZSBzY3JvbGwgZXZlbnRzIGEgZmluZ2VyXG4gIC8vIGRvZXMuIFRoaXMgbWFya3MgdGhhdCB3aW5kb3cgc28gb3VyIG93biBzY3JvbGxpbmcgaXMgbm90IHJlcG9ydGVkIGFzIGEgc3dpcGUuXG4gIGxldCBwcm9ncmFtbWF0aWMgPSBmYWxzZTtcbiAgbGV0IHByb2dUaW1lciA9IDA7XG4gIGxldCByZXBvcnRlZCA9IDA7XG5cbiAgY29uc3Qgc2VsZWN0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBzbGlkZXMoKVtpbmRleF07XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBzbGlkZXMoKS5mb3JFYWNoKChsaSkgPT4gbGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBwcm9ncmFtbWF0aWMgPSB0cnVlO1xuICAgIHJlcG9ydGVkID0gaW5kZXg7XG4gICAgY2xlYXJUaW1lb3V0KHByb2dUaW1lcik7XG4gICAgLy8gTG9uZyBlbm91Z2ggZm9yIHRoZSBzbW9vdGggc2Nyb2xsIHRvIGxhbmQ7IGEgc3dpcGUgaW5zaWRlIHRoYXQgd2luZG93IGlzIGxvc3QsXG4gICAgLy8gd2hpY2ggYmVhdHMgcmVwb3J0aW5nIGV2ZXJ5IHRodW1ibmFpbCBjbGljayBhcyBhIHN3aXBlLlxuICAgIHByb2dUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IChwcm9ncmFtbWF0aWMgPSBmYWxzZSksIDYwMCk7XG4gICAgLy8gU2Nyb2xsIG9ubHkgdGhlIHNsaWRlciwgaG9yaXpvbnRhbGx5LiBgc2Nyb2xsSW50b1ZpZXdgIChldmVuIHdpdGhcbiAgICAvLyBgYmxvY2s6ICduZWFyZXN0J2ApIGFsc28gc2Nyb2xscyB0aGUgKnBhZ2UqIHZlcnRpY2FsbHkgd2hlbiB0aGUgZ2FsbGVyeSBpc1xuICAgIC8vIG9mZi1zY3JlZW4g4oCUIHdoaWNoIGlzIGV4YWN0bHkgdGhlIGNhc2Ugd2hlbiBhIG1hdGVyaWFsIGlzIHBpY2tlZCBmcm9tIHRoZVxuICAgIC8vIHN0aWNreSBiYXIsIGFuZCBubyB3aW5kb3cuc2Nyb2xsVG8gc3VwcHJlc3Npb24gY2FuIGNhdGNoIGl0LlxuICAgIGxpc3QoKT8uc2Nyb2xsVG8oeyBsZWZ0OiB0YXJnZXQub2Zmc2V0TGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIG1hcmsoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVGh1bWJzID0gKCkgPT4ge1xuICAgIHN0cmlwLnRleHRDb250ZW50ID0gJyc7XG4gICAgc2xpZGVzKCkuZm9yRWFjaCgobGksIGkpID0+IHtcbiAgICAgIGNvbnN0IGltZyA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgaWYgKCFpbWcpIHJldHVybjtcbiAgICAgIHN0cmlwLmFwcGVuZChcbiAgICAgICAgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiY3JzLXRodW1iXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YFNob3cgaW1hZ2UgJHtpICsgMX1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3QoaSk7XG4gICAgICAgICAgICAgIHB1c2hEYXRhKCdleHBfcGRwX2dhbGxlcnlfdGh1bWInLCBgSW1hZ2UgJHtpICsgMX1gLCAnY2xpY2snLCAnUERQJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWcuY3VycmVudFNyYyB8fCBpbWcuc3JjfSBhbHQ9XCJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKiBNb3ZlIHRoZSBzZWxlY3RlZCBvcHRpb24ncyBpbWFnZSB0byB0aGUgZnJvbnQsIGFzIHRoZSBkZXNpZ24gcmVxdWlyZXMuICovXG4gIGNvbnN0IGhvaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGN1cnJlbnRTcmMoKTtcbiAgICBjb25zdCB1bCA9IGxpc3QoKTtcbiAgICBpZiAoIXNyYyB8fCAhdWwpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldCA9IHNsaWRlcygpLmZpbmQoKGxpKSA9PiB7XG4gICAgICBjb25zdCBpbWcgPSBsaS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgIHJldHVybiBpbWcgPyBmaWxlKGltZy5zcmMpLmluY2x1ZGVzKGZpbGUoc3JjKSkgOiBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gdWwuZmlyc3RFbGVtZW50Q2hpbGQpIHVsLnByZXBlbmQodGFyZ2V0KTtcbiAgfTtcblxuICAvKipcbiAgICogT24gdmFyaWFudCBjaGFuZ2UgRGF3biBkb2VzIG5vdCByZXBsYWNlIHRoZSBtZWRpYSBsaXN0IOKAlCBpdCByZW9yZGVycyB0aGUgZXhpc3RpbmdcbiAgICogb25lIGluIHBsYWNlLCBieSBpbmRleCwgYW5kIGl0IGRvZXMgc28gKmFmdGVyKiBvdXIgb2JzZXJ2ZXIgaGFzIHJ1bi4gT3VyIHNsb3QgaXMgYVxuICAgKiBjaGlsZCBvZiB0aGF0IGxpc3QsIHNvIGl0IGdldHMgY2FycmllZCBhbG9uZyBhbmQgZW5kcyB1cCBiZWxvdyB0aGUgZ3JpZC4gSGVuY2UgdGhpc1xuICAgKiBydW5zIG9uIGV2ZXJ5IG11dGF0aW9uIHVudGlsIHRoZSBzbG90IHNldHRsZXMgYmFjayBpbnRvIHBsYWNlLlxuICAgKlxuICAgKiBFdmVyeSBicmFuY2ggaXMgZ3VhcmRlZCBvbiB0aGUgbm9kZSBub3QgYWxyZWFkeSBiZWluZyB3aGVyZSB3ZSB3YW50IGl0OiBgYWZ0ZXIoKWBcbiAgICogYW5kIGBwcmVwZW5kKClgIHJlLWluc2VydCBldmVuIHdoZW4gbm90aGluZyBtb3ZlcywgYW5kIGVhY2ggaW5zZXJ0aW9uIHdha2VzIHRoZVxuICAgKiBvYnNlcnZlciB0aGF0IGNhbGxzIHVzIGJhY2sg4oCUIHVuZ3VhcmRlZCwgdGhpcyBuZXZlciBzdG9wcyBtdXRhdGluZy5cbiAgICovXG4gIGNvbnN0IHBsYWNlQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB1bCA9IGxpc3QoKTtcbiAgICBpZiAoIWNyZWF0ZWQgfHwgIXVsKSByZXR1cm47XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NTBweCknKS5tYXRjaGVzKSB7XG4gICAgICAvLyBUaGUgbW9iaWxlIGJyYW5jaCBsaWZ0cyBgY3JlYXRlZGAgb3V0IG9mIHRoZSBzbG90LCBzbyBwdXQgaXQgYmFjayBmaXJzdC5cbiAgICAgIGlmIChjcmVhdGVkLnBhcmVudEVsZW1lbnQgIT09IGNyZWF0ZWRTbG90KSBjcmVhdGVkU2xvdC5hcHBlbmQoY3JlYXRlZCk7XG4gICAgICBjb25zdCBmaXJzdCA9IHNsaWRlcygpWzBdO1xuICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0Lm5leHRFbGVtZW50U2libGluZyAhPT0gY3JlYXRlZFNsb3QpIGZpcnN0LmFmdGVyKGNyZWF0ZWRTbG90KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJpY2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcnMtcGRwIC5jcnMtaW5mbz5baWRePXByaWNlLV0nKTtcbiAgICAgIGlmICghcHJpY2VFbCB8fCBwcmljZUVsLm5leHRFbGVtZW50U2libGluZyA9PT0gY3JlYXRlZCkgcmV0dXJuO1xuICAgICAgY3JlYXRlZFNsb3QucmVtb3ZlKCk7XG4gICAgICBwcmljZUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBjcmVhdGVkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIFNhbWUgZ3VhcmQgYXMgYHBsYWNlQ3JlYXRlZGA6IERhd24gcmVvcmRlcnMgdGhlIHNsaWRlcywgYW5kIHRoZSBraXQgbXVzdCBzdGF5IG9uIHRoZSBmaXJzdC4gKi9cbiAgY29uc3QgcGxhY2VLaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdWwgPSBsaXN0KCk7XG4gICAgaWYgKCFraXQgfHwgIXVsKSByZXR1cm47XG4gICAgY29uc3QgaG9zdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NTBweCknKS5tYXRjaGVzID8gc2xpZGVzKClbMF0gOiB1bC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChob3N0ICYmIGtpdC5wYXJlbnRFbGVtZW50ICE9PSBob3N0KSBob3N0LmFwcGVuZChraXQpO1xuXG4gICAgLy8gYHZpc2liaWxpdHlPZlRpbWVgIHJlc29sdmVzIGl0cyBzZWxlY3RvciBvbmNlLCBvbiB0aGUgc3BvdCwgc28gdGhpcyB3YWl0cyBmb3IgdGhlXG4gICAgLy8gZmlyc3QgdGltZSB0aGUgcm93IGlzIGFjdHVhbGx5IG9uIHRoZSBwYWdlLiBUaGUgcm93IGlzIG9uZSBub2RlIHRoYXQgb25seSBjaGFuZ2VzXG4gICAgLy8gcGFyZW50cyBhZnRlcndhcmRzLCBzbyB0aGUgb2JzZXJ2ZXIgaXQgc2V0cyB1cCBrZWVwcyBmb2xsb3dpbmcgaXQuXG4gICAgaWYgKGtpdC5pc0Nvbm5lY3RlZCAmJiAha2l0VHJhY2tlZCkge1xuICAgICAga2l0VHJhY2tlZCA9IHRydWU7XG4gICAgICB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLWtpdCcsICdleHBfcGRwX2dhbGxlcnlfa2l0X3ZpZXcnLCAnSW1hZ2UgR2FsbGVyeScsICdDb2xsZWN0aW9uIGtpdCBpbmZvIGJveCcpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogS2VlcCB0aGUgdGh1bWJuYWlscyBpbiBzdGVwIHdoZW4gdGhlIGdhbGxlcnkgaXMgc3dpcGVkLCBhbmQgcmVwb3J0IHRoZSBzd2lwZSBvbmNlXG4gICAqIGl0IHNldHRsZXMuIEJvdW5kIHBlciBtZWRpYSBsaXN0LCBzbyB0aGUgbGlzdGVuZXJzIGdvIHdpdGggdGhlIG5vZGUgRGF3biByZXBsYWNlcy5cbiAgICovXG4gIGNvbnN0IHdhdGNoTGlzdCA9ICh1bDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBsZXQgcXVldWVkID0gZmFsc2U7XG4gICAgbGV0IHNldHRsZSA9IDA7XG5cbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAvLyBBIGZpbmdlciBpcyBmb2xsb3dlZCBsaXZlLCBidXQgb3VyIG93biBzbW9vdGggc2Nyb2xsIGlzIG5vdDogaXQgY3Jvc3NlcyBldmVyeVxuICAgICAgLy8gc2xpZGUgb24gdGhlIHdheSB0byB0aGUgdGFyZ2V0LCBhbmQgc2Nyb2xsIHNuYXBwaW5nIG92ZXJzaG9vdHMgYW5kIGNvbWVzIGJhY2ssXG4gICAgICAvLyBzbyBmb2xsb3dpbmcgaXQgd291bGQgZmxpY2sgdGhlIHNlbGVjdGlvbiB0aHJvdWdoIHNsaWRlcyBub2JvZHkgYXNrZWQgZm9yLlxuICAgICAgLy8gYHNlbGVjdGAgaGFzIGFscmVhZHkgbWFya2VkIHdoZXJlIHdlIGFyZSBnb2luZzsgdGhlIHNldHRsZSBiZWxvdyBjb25maXJtcyBpdC5cbiAgICAgIGlmICghcXVldWVkICYmICFwcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBxdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICBtYXJrKG5lYXJlc3QodWwpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9uZSBzd2lwZSBmaXJlcyBzY3JvbGwgZG96ZW5zIG9mIHRpbWVzOyByZXBvcnQgb25seSB0aGUgc2xpZGUgaXQgbGFuZHMgb24uXG4gICAgICBjbGVhclRpbWVvdXQoc2V0dGxlKTtcbiAgICAgIHNldHRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZWFyZXN0KHVsKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICAvLyBXaGVyZXZlciB0aGUgc2Nyb2xsaW5nIGFjdHVhbGx5IHN0b3BwZWQgd2lucyDigJQgYSBzd2lwZSBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHByb2dyYW1tYXRpYyB3aW5kb3cgd291bGQgb3RoZXJ3aXNlIGxlYXZlIHRoZSB0aHVtYm5haWxzIGJlaGluZC5cbiAgICAgICAgbWFyayhpbmRleCk7XG4gICAgICAgIGlmIChwcm9ncmFtbWF0aWMgfHwgaW5kZXggPT09IHJlcG9ydGVkKSByZXR1cm47XG4gICAgICAgIHJlcG9ydGVkID0gaW5kZXg7XG4gICAgICAgIHB1c2hEYXRhKCdleHBfcGRwX2dhbGxlcnlfc3dpcGUnLCBgSW1hZ2UgJHtpbmRleCArIDF9YCwgJ290aGVyJywgJ1BEUCcpO1xuICAgICAgfSwgMTYwKTtcbiAgICB9KTtcblxuICAgIC8vIEVhY2ggbWVkaWEgaXRlbSBpcyB3cmFwcGVkIGluIHRoZSB0aGVtZSdzIDxtb2RhbC1vcGVuZXI+LCB3aGljaCBvcGVucyBEYXduJ3NcbiAgICAvLyB6b29tIG1vZGFsLiBcIlRoaXMgUHJvZHVjdCBDYW4gQmUgQ3JlYXRlZCBXaXRoXCIgbGl2ZXMgaW4gdGhpcyBsaXN0IHRvbyBvblxuICAgIC8vIGRlc2t0b3AsIHNvIGNsaWNrcyBpbnNpZGUgb3VyIG93biBzbG90IGFyZSBub3QgZ2FsbGVyeSBvcGVucy5cbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0X19tb2RhbC1vcGVuZXInKSB8fCB0YXJnZXQuY2xvc2VzdCgnLmNycy1jcmVhdGVkLXNsb3QnKSkgcmV0dXJuO1xuICAgICAgY29uc3QgaXRlbSA9IHRhcmdldC5jbG9zZXN0PEhUTUxFbGVtZW50PignLnByb2R1Y3RfX21lZGlhLWl0ZW0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbSA/IHNsaWRlcygpLmluZGV4T2YoaXRlbSkgOiAtMTtcbiAgICAgIHB1c2hEYXRhKCdleHBfcGRwX2ltYWdlX29wZW4nLCBgSW1hZ2UgJHtpbmRleCArIDF9YCwgJ2NsaWNrJywgJ1BEUCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxldCBsYXN0TGlzdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgbGV0IGxhc3RTcmM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogT25seSByZWJ1aWxkIHdoZW4gdGhlIGdhbGxlcnkgd2FzIHJlLXJlbmRlcmVkIG9yIHRoZSBpbWFnZSBjaGFuZ2VkIOKAlCByZS1ydW5uaW5nXG4gICAqIG9uIGV2ZXJ5IG11dGF0aW9uIHdvdWxkIGtlZXAgeWFua2luZyB0aGUgc2xpZGVyIGJhY2sgdG8gc2xpZGUgMSBhbmQgbWFrZSB0aGVcbiAgICogbW9iaWxlIGdhbGxlcnkgaW1wb3NzaWJsZSB0byBzd2lwZS5cbiAgICovXG4gIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgY29uc3QgdWwgPSBsaXN0KCk7XG4gICAgaWYgKCF1bCkgcmV0dXJuO1xuXG4gICAgLy8gVW5jb25kaXRpb25hbDogRGF3biByZW9yZGVycyB0aGUgbGlzdCBhZnRlciB3ZSBoYXZlIGFscmVhZHkgcnVuLCBzbyB0aGUgc2xvdCBoYXNcbiAgICAvLyB0byBiZSByZS1jaGVja2VkIG9uIGV2ZXJ5IG11dGF0aW9uLCBub3Qgb25seSB3aGVuIHRoZSBnYWxsZXJ5IGlzIHJlYnVpbHQuXG4gICAgcGxhY2VDcmVhdGVkKCk7XG4gICAgcGxhY2VLaXQoKTtcblxuICAgIGNvbnN0IHNyYyA9IGN1cnJlbnRTcmMoKTtcbiAgICBpZiAodWwgPT09IGxhc3RMaXN0ICYmIHNyYyA9PT0gbGFzdFNyYykgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVidWlsdCA9IHVsICE9PSBsYXN0TGlzdDtcbiAgICBsYXN0TGlzdCA9IHVsO1xuICAgIGxhc3RTcmMgPSBzcmM7XG5cbiAgICBob2lzdCgpO1xuICAgIHBsYWNlS2l0KCk7XG4gICAgYnVpbGRUaHVtYnMoKTtcbiAgICBzZWxlY3QoMCk7XG4gICAgaWYgKCFoaW50LmlzQ29ubmVjdGVkKSB1bC5wYXJlbnRFbGVtZW50Py5hcHBlbmQoaGludCwgcHJldiwgbmV4dCk7XG4gICAgaWYgKCFzdHJpcC5pc0Nvbm5lY3RlZCkgdWwucGFyZW50RWxlbWVudD8uYWZ0ZXIoc3RyaXApO1xuICAgIGlmIChyZWJ1aWx0KSB3YXRjaExpc3QodWwpO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwbGFjZUNyZWF0ZWQpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGxhY2VLaXQpO1xuXG4gIHJldHVybiB7IHN5bmMgfTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHJpbmcgZnJvbSAnLi4vaWNvbnMvc3RlcC1yaW5nLnN2Zz9yYXcnO1xuaW1wb3J0IHBhY2sgZnJvbSAnLi4vaWNvbnMvc3RlcC1wYWNrYWdlLnN2Zz9yYXcnO1xuaW1wb3J0IG1haWwgZnJvbSAnLi4vaWNvbnMvc3RlcC1tYWlsLnN2Zz9yYXcnO1xuaW1wb3J0IGhhbmRzIGZyb20gJy4uL2ljb25zL3N0ZXAtaGFuZHMuc3ZnP3Jhdyc7XG5pbXBvcnQgYm94IGZyb20gJy4uL2ljb25zL3N0ZXAtYm94LnN2Zz9yYXcnO1xuaW1wb3J0IGFycm93IGZyb20gJy4uL2ljb25zL3N0ZXAtYXJyb3cuc3ZnP3Jhdyc7XG5pbXBvcnQgeyBpbmxpbmVTdmcgfSBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IHsgYXR0YWNoS2l0VGlwIH0gZnJvbSAnLi9raXQnO1xuXG5jb25zdCBJY29uID0gKHN2Zzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbC5jbGFzc05hbWUgPSAnY3JzLXN0ZXBfX2ljb24nO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgZWwuaW5uZXJIVE1MID0gaW5saW5lU3ZnKHN2Zyk7XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IFN0ZXAgPSAobjogbnVtYmVyLCBpY29uOiBzdHJpbmcsIGJvZHk6IE5vZGUpID0+XG4gIChcbiAgICA8bGkgY2xhc3M9XCJjcnMtc3RlcFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjcnMtc3RlcF9fbnVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHtTdHJpbmcobil9XG4gICAgICA8L3NwYW4+XG4gICAgICB7SWNvbihpY29uKX1cbiAgICAgIDxzcGFuIGNsYXNzPVwiY3JzLXN0ZXBfX3RleHRcIj57Ym9keX08L3NwYW4+XG4gICAgPC9saT5cbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuLyoqIFRoZSBjb25uZWN0b3IgYmV0d2VlbiBzdGVwcyDigJQgdGhlIGRlc2lnbidzIG93biBhcnJvdywgbm90IGEgQ1NTIGRhc2hlZCBib3JkZXIuICovXG5jb25zdCBBcnJvdyA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVsLmNsYXNzTmFtZSA9ICdjcnMtc3RlcF9fYXJyb3cnO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgZWwuaW5uZXJIVE1MID0gaW5saW5lU3ZnKGFycm93KTtcbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3QgZnJhZ21lbnQgPSAoLi4ubm9kZXM6IChzdHJpbmcgfCBOb2RlKVtdKSA9PiB7XG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGYuYXBwZW5kKC4uLm5vZGVzKTtcbiAgcmV0dXJuIGY7XG59O1xuXG5jb25zdCBib2xkID0gKHRleHQ6IHN0cmluZykgPT4gKDxzdHJvbmc+e3RleHR9PC9zdHJvbmc+KSBhcyBIVE1MRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IEhvd1RvT3JkZXIgPSAob25NYWlsaW5nOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG1haWxpbmdMaW5rID0gKFxuICAgIDxidXR0b24gY2xhc3M9XCJjcnMtaW5saW5lLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25NYWlsaW5nfT5cbiAgICAgIG1haWxpbmcgaW5zdHJ1Y3Rpb25zXG4gICAgPC9idXR0b24+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3Qga2l0TGluayA9IChcbiAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLXN0ZXBfX2tpdFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgIDxzdHJvbmc+ZnJlZSBjb2xsZWN0aW9uIGtpdDwvc3Ryb25nPlxuICAgIDwvYnV0dG9uPlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IHN0ZXBzID0gW1xuICAgIFN0ZXAoMSwgcmluZywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1BpY2sgeW91ciBqZXdlbHJ5ICYgcGxhY2UgYW4gb3JkZXInKSksXG4gICAgU3RlcCgyLCBwYWNrLCBmcmFnbWVudCgnV2Ugc2VuZCB5b3UgYSAnLCBraXRMaW5rLCAnIHdpdGhpbiAyNCBob3VycycpKSxcbiAgICBTdGVwKFxuICAgICAgMyxcbiAgICAgIG1haWwsXG4gICAgICBmcmFnbWVudCgnU2VuZCB5b3VyIGluY2x1c2lvbnMgYmFjayB3aXRoIHRoZSAnLCBib2xkKCdwcmVwYWlkIHJldHVybiBsYWJlbCcpKSxcbiAgICApLFxuICAgIFN0ZXAoNCwgaGFuZHMsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdXZSBoYW5kY3JhZnQgeW91ciBqZXdlbHJ5IHdpdGggeW91ciBpbmNsdXNpb25zJykpLFxuICAgIFN0ZXAoNSwgYm94LCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUmVjZWl2ZSB5b3VyIGpld2VscnkgdGhhdCBsYXN0cyBhIGxpZmV0aW1lJykpLFxuICBdO1xuICAvLyBFdmVyeSBzdGVwIGJ1dCB0aGUgZmlyc3QgaXMgcHJlY2VkZWQgYnkgYSBjb25uZWN0b3IuXG4gIHN0ZXBzLnNsaWNlKDEpLmZvckVhY2goKGxpKSA9PiBsaS5wcmVwZW5kKEFycm93KCkpKTtcblxuICBjb25zdCBsaXN0ID0gKDxvbCBjbGFzcz1cImNycy1zdGVwc1wiIC8+KSBhcyBIVE1MRWxlbWVudDtcbiAgbGlzdC5hcHBlbmQoLi4uc3RlcHMpO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSAoXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjcnMtaG93dG9cIj5cbiAgICAgIDxoMiBjbGFzcz1cImNycy1ob3d0b19fdGl0bGVcIj5Ib3cgdG8gb3JkZXIgeW91ciBwaWVjZSB3aXRoIGluY2x1c2lvbnM8L2gyPlxuICAgICAge2xpc3R9XG4gICAgICA8cCBjbGFzcz1cImNycy1ob3d0b19fbm90ZVwiPk91dHNpZGUgdGhlIFVTPyBGb2xsb3cgb3VyIHttYWlsaW5nTGlua30gaW5zdGVhZC48L3A+XG5cbiAgICAgIHsvKiBXcmFwcGVkIHNvIGFuYWx5dGljcyBjYW4gc2VlIGl0IGluIHRoZSB2aWV3cG9ydCBvbiBpdHMgb3duIOKAlCB0aGUgc3RlcHMgYWJvdmVcbiAgICAgICAgICBhbmQgdGhpcyBibG9jayBzaGFyZSBvbmUgPHNlY3Rpb24+IGJ1dCBhcmUgdHJhY2tlZCBhcyB0d28gc2VwYXJhdGUgdmlld3MuICovfVxuICAgICAgPGRpdiBjbGFzcz1cImNycy1ob3d0b19fbWFkZVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJjcnMtaG93dG9fX3RpdGxlXCI+SG93IHlvdXIgcGllY2UgaXMgbWFkZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdXIga2VlcHNha2UgaXMgbWFkZSBieSBvbmUgYXJ0aXNhbiBmcm9tIHN0YXJ0IHRvIGZpbmlzaCwgYW5kIHRyYWNrZWQgZXZlcnkgc3RlcCBvZiB0aGVcbiAgICAgICAgICB3YXkuIFdoYXRldmVyIHdlIGRvbid0IHVzZSBpcyByZXR1cm5lZCB0byB5b3Ugd2l0aCB5b3VyIGZpbmlzaGVkIHBpZWNlIOKAlCBhbmQgZXZlcnkgb3JkZXJcbiAgICAgICAgICBwYXNzZXMgYSA0LXN0YWdlIHF1YWxpdHkgaW5zcGVjdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCB0YWtlcyBhcHByb3hpbWF0ZWx5IDbigJM4IHdlZWtzIHRvIGFycml2ZSBhZnRlciB3ZSByZWNlaXZlIHlvdXIgaW5jbHVzaW9ucyDigJQgYSBtZW1vcnlcbiAgICAgICAgICBtYWRlIGJ5IGhhbmQsIHRvIG9yZGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgYXR0YWNoS2l0VGlwKGtpdExpbmssIHNlY3Rpb24sIHRydWUsICgpID0+XG4gICAgcHVzaERhdGEoJ2V4cF9wZHBfaG93dG9fa2l0X2Nsb3NlJywgJ0ZyZWUgY29sbGVjdGlvbiBraXQnLCAnY2xpY2snLCAnUERQJyksXG4gICk7XG4gIGtpdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwdXNoRGF0YSgnZXhwX3BkcF9ob3d0b19raXRfY2xpY2snLCAnRnJlZSBjb2xsZWN0aW9uIGtpdCcsICdjbGljaycsICdQRFAnKSk7XG4gIHJldHVybiBzZWN0aW9uO1xufTtcbiIsImltcG9ydCB7IGxvZyB9IGZyb20gJ2Nyc2RldnRvb2wnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBvcGVuTW9kYWwsIHR5cGUgQWNjb3JkSXRlbSB9IGZyb20gJy4vbW9kYWwnO1xuXG4vKiogR0E0IG5hbWVzIGZvciB0aGUgdHdvIGRyYXdlcnMgYnVpbHQgaGVyZSDigJQgdGhlIGRyYXdlciBpdHNlbGYgYW5kIGl0cyByb3dzIHNoYXJlIHRoZW0uICovXG5jb25zdCBNQUlMSU5HX0xPQyA9ICdNYWlsaW5nIEluc3RydWN0aW9ucyBQb3B1cCc7XG5jb25zdCBGQVFfTE9DID0gJ0ZBUSBQb3B1cCc7XG5cbi8qKiBFYWNoIHN1cmZhY2UncyBvd24gYWNjb3JkaW9uIGV2ZW50LCBzbyBidXktYm94IHJvd3MgbmV2ZXIgbWl4IHdpdGggYSBkcmF3ZXIncy4gKi9cbmNvbnN0IE1BSUxJTkdfQUNDT1JEID0gJ2V4cF9wZHBfbWFpbGluZ19hY2NvcmRpb25fb3Blbic7XG5jb25zdCBGQVFfQUNDT1JEID0gJ2V4cF9wZHBfZmFxX2FjY29yZGlvbl9vcGVuJztcblxuLyoqXG4gKiBDb250ZW50IGlzIGxpZnRlZCBmcm9tIHRoZSBsaXZlIHBhZ2VzIGF0IHJ1bnRpbWUgc28gaXQgY2FuIG5ldmVyIGRyaWZ0IGZyb20gdGhlIHNvdXJjZS5cbiAqXG4gKiBUaGUgc3RvcmUgcnVucyBTaG9waWZ5IE1hcmtldHMsIHNvIHRoZSBwYWdlIGxpdmVzIHVuZGVyIGEgbG9jYWxlIHByZWZpeCBpbiBldmVyeSBtYXJrZXRcbiAqIGJ1dCB0aGUgcHJpbWFyeSBvbmUg4oCUIGByb3V0ZXMucm9vdGAgY2FycmllcyBpdC4gQW55dGhpbmcgdGhhdCBnb2VzIHdyb25nIGhlcmUgKG9mZmxpbmUsXG4gKiBhIHJlZGlyZWN0IHRvIGEgcGFnZSB3aXRoIG5vIGAucnRlYCwgYSBtYXJrdXAgY2hhbmdlKSBtdXN0IGxlYXZlIGEgcmVhZGFibGUgZHJhd2VyIHJhdGhlclxuICogdGhhbiBhbiBlbXB0eSBvbmUsIHNvIHRoZSBob3N0IGlzIG9ubHkgY2xlYXJlZCBvbmNlIHRoZXJlIGlzIGNvbnRlbnQgdG8gcHV0IGluIGl0LlxuICovXG5jb25zdCByZW1vdGUgPSAocGF0aDogc3RyaW5nLCBwYXJzZTogKHJ0ZTogSFRNTEVsZW1lbnQpID0+IE5vZGUpID0+IHtcbiAgY29uc3QgaG9zdCA9ICg8ZGl2IGNsYXNzPVwiY3JzLXJlbW90ZVwiPkxvYWRpbmfigKY8L2Rpdj4pIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCByb290ID0gKHdpbmRvdyBhcyBhbnkpLlNob3BpZnk/LnJvdXRlcz8ucm9vdCA/PyAnLyc7XG4gIGNvbnN0IHVybCA9IHJvb3QucmVwbGFjZSgvXFwvJC8sICcnKSArIHBhdGg7XG5cbiAgLyoqIE9uZSByZXRyeSwgYmVjYXVzZSB0aGUgb2JzZXJ2ZWQgZmFpbHVyZXMgYXJlIHRyYW5zaWVudCByYXRoZXIgdGhhbiBzdHJ1Y3R1cmFsLiAqL1xuICBjb25zdCBsb2FkID0gKCk6IFByb21pc2U8Tm9kZT4gPT5cbiAgICBmZXRjaCh1cmwsIHsgY2FjaGU6ICduby1zdG9yZScgfSlcbiAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgIGlmICghci5vaykgdGhyb3cgbmV3IEVycm9yKGAke3VybH0g4oaSIEhUVFAgJHtyLnN0YXR1c31gKTtcbiAgICAgICAgcmV0dXJuIHIudGV4dCgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChodG1sKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ0ZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucnRlJyk7XG4gICAgICAgIGlmICghcnRlKSB0aHJvdyBuZXcgRXJyb3IoYCR7dXJsfSDihpIgbm8gLnJ0ZSAoJHtodG1sLmxlbmd0aH0gYnl0ZXMpYCk7XG4gICAgICAgIHJldHVybiBwYXJzZShydGUpO1xuICAgICAgfSk7XG5cbiAgbG9hZCgpXG4gICAgLmNhdGNoKChmaXJzdCkgPT4ge1xuICAgICAgbG9nKGBQRFAgcmVkZXNpZ246ICR7Zmlyc3QubWVzc2FnZX0g4oCUIHJldHJ5aW5nYCwgJ3dhcm4nKTtcbiAgICAgIHJldHVybiBsb2FkKCk7XG4gICAgfSlcbiAgICAudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgaG9zdC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgaG9zdC5hcHBlbmQoY29udGVudCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIGxvZyhgUERQIHJlZGVzaWduOiAke2UubWVzc2FnZX1gLCAnZXJyb3InKTtcbiAgICAgIGhvc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGhvc3QuYXBwZW5kKFxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGNvbnRlbnQgY291bGRuJ3QgYmUgbG9hZGVkLiA8YSBocmVmPXt1cmx9Pk9wZW4gaXQgaW4gYSBuZXcgcGFnZTwvYT4uXG4gICAgICAgIDwvcD4sXG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJldHVybiBob3N0O1xufTtcblxuY29uc3QgY2xlYW4gPSAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ21ldGEsIHN0eWxlLCBzY3JpcHQnKS5mb3JFYWNoKChuKSA9PiBuLnJlbW92ZSgpKTtcbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3QgaXNCbGFuayA9IChlbDogRWxlbWVudCkgPT4gIWVsLnRleHRDb250ZW50IS5yZXBsYWNlKC9cXHN8IC9nLCAnJyk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiBNYWlsaW5nIGluc3RydWN0aW9ucyDigJQgL3BhZ2VzL3NlbmRpbmcteW91ci1wZXRhbHMtY3JlbWF0aW9ucy1icmVhc3RtaWxrXG4gKiBBIGZsYXQgbGlzdCBvZiA8cD47IGVhY2ggc2VjdGlvbiBzdGFydHMgd2l0aCBhIGJvbGQgXCJDcmVtYXRpb25zOlwiIHN0eWxlIGxpbmUuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgTUFJTElOR19TRUNUSU9OUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgQ3JlbWF0aW9uczogJ0NyZW1hdGlvbnMnLFxuICAnQ2xvdGhpbmcvRmFicmljJzogJ0Nsb3RoaW5nL0ZhYnJpYycsXG4gICdGbG93ZXJzL1BldGFscyc6ICdGbG93ZXJzL1BldGFscycsXG4gIEhhaXI6ICdIYWlyL0Z1cicsXG4gICdCcmVhc3QgTWlsayc6ICdCcmVhc3QgTWlsaycsXG59O1xuXG5jb25zdCBwYXJzZU1haWxpbmcgPSAocnRlOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBpdGVtczogeyB0aXRsZTogc3RyaW5nOyBib2R5OiBOb2RlIH1bXSA9IFtdO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTmFtZSA9ICdjcnMtcnRlJztcbiAgbGV0IGN1cnJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgQXJyYXkuZnJvbShydGUuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGNoaWxkLnRleHRDb250ZW50IS50cmltKCkucmVwbGFjZSgvOiQvLCAnJyk7XG4gICAgY29uc3QgbGFiZWwgPSBNQUlMSU5HX1NFQ1RJT05TW3RleHRdO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBjdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjdXJyZW50LmNsYXNzTmFtZSA9ICdjcnMtcnRlJztcbiAgICAgIGl0ZW1zLnB1c2goeyB0aXRsZTogbGFiZWwsIGJvZHk6IGN1cnJlbnQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0JsYW5rKGNoaWxkKSkgcmV0dXJuO1xuICAgIGlmICgvXk90aGVyIEluY2x1c2lvbnM6fF5NYWlsaW5nIG1vcmUgdGhhbiBvbmUgaW5jbHVzaW9uOi9pLnRlc3QodGV4dCkpIHtcbiAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgZm9vdGVyLmFwcGVuZChjbGVhbihjaGlsZC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3VycmVudD8uYXBwZW5kKGNsZWFuKGNoaWxkLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudCkpO1xuICB9KTtcblxuICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnLmFwcGVuZChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLWRyYXdlcl9faW50cm9cIj5cbiAgICAgIDxwPlxuICAgICAgICBTZW5kIHVzIGEgdGlueSBhbW91bnQgb2YgeW91ciBrZWVwc2FrZSwgYW5kIHdlJ2xsIGNyZWF0ZSBhIG1lbW9yaWFsIGpld2VscnkgcGllY2UgdG8gbGFzdCBhXG4gICAgICAgIGxpZmV0aW1lLlxuICAgICAgPC9wPlxuICAgICAgPHA+TGVhcm4gbW9yZSBpbiB0aGUgdGFicyBiZWxvdy48L3A+XG4gICAgPC9kaXY+LFxuICAgIEFjY29yZGlvbihpdGVtcywgTUFJTElOR19MT0MsIE1BSUxJTkdfQUNDT1JEKSxcbiAgICBmb290ZXIsXG4gICk7XG4gIHJldHVybiBmcmFnO1xufTtcblxuZXhwb3J0IGNvbnN0IG1haWxpbmdJbnN0cnVjdGlvbnMgPSAoKSA9PlxuICByZW1vdGUoJy9wYWdlcy9zZW5kaW5nLXlvdXItcGV0YWxzLWNyZW1hdGlvbnMtYnJlYXN0bWlsaycsIHBhcnNlTWFpbGluZyk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiBIb3cgdG8gT3JkZXIgJiBGQVEg4oCUIC9wYWdlcy9mYXFcbiAqIEZsYXQgcmljaCB0ZXh0OiA8aDI+IGludHJvLCB0aGVuIDxoMz4gcXVlc3Rpb24gKyBmb2xsb3dpbmcgPHA+IGFuc3dlcnMuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgcGFyc2VGYXEgPSAocnRlOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnRyby5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gIGNvbnN0IGl0ZW1zOiB7IHRpdGxlOiBzdHJpbmc7IGJvZHk6IEhUTUxFbGVtZW50IH1bXSA9IFtdO1xuICBsZXQgY3VycmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBBcnJheS5mcm9tKHJ0ZS5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0gzJykge1xuICAgICAgY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3VycmVudC5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gICAgICBpdGVtcy5wdXNoKHsgdGl0bGU6IGNoaWxkLnRleHRDb250ZW50IS50cmltKCksIGJvZHk6IGN1cnJlbnQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnSDInKSByZXR1cm47XG4gICAgaWYgKGlzQmxhbmsoY2hpbGQpKSByZXR1cm47XG4gICAgKGN1cnJlbnQgPz8gaW50cm8pLmFwcGVuZChjbGVhbihjaGlsZC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQpKTtcbiAgfSk7XG5cbiAgLy8gVGhlIGxpdmUgcGFnZSBoYXMgdGhlc2UgdHdvIGFuc3dlcnMgc3dhcHBlZCDigJQgdGhlIFwid2F0ZXJwcm9vZlwiIHF1ZXN0aW9uIGlzXG4gIC8vIGFuc3dlcmVkIHdpdGggcHJpY2luZyBjb3B5IGFuZCB2aWNlIHZlcnNhLiBDb3JyZWN0ZWQgaGVyZTsgY29udHJvbCBzdGlsbCBoYXMgaXQuXG4gIGNvbnN0IHdhdGVycHJvb2YgPSBpdGVtcy5maW5kKChpKSA9PiAvd2F0ZXJwcm9vZi9pLnRlc3QoaS50aXRsZSkpO1xuICBjb25zdCBjb3N0ID0gaXRlbXMuZmluZCgoaSkgPT4gL2hvdyBtdWNoIGRvZXMvaS50ZXN0KGkudGl0bGUpKTtcbiAgaWYgKHdhdGVycHJvb2YgJiYgY29zdCkge1xuICAgIGNvbnN0IHRtcCA9IHdhdGVycHJvb2YuYm9keTtcbiAgICB3YXRlcnByb29mLmJvZHkgPSBjb3N0LmJvZHk7XG4gICAgY29zdC5ib2R5ID0gdG1wO1xuICB9XG5cbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZy5hcHBlbmQoaW50cm8sIEFjY29yZGlvbihpdGVtcywgRkFRX0xPQywgRkFRX0FDQ09SRCkpO1xuICByZXR1cm4gZnJhZztcbn07XG5cbmV4cG9ydCBjb25zdCBmYXFDb250ZW50ID0gKCkgPT4gcmVtb3RlKCcvcGFnZXMvZmFxJywgcGFyc2VGYXEpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogQm90aCBkcmF3ZXJzIGZldGNoIHRoZWlyIHBhZ2Ugd2hlbiBvcGVuZWQsIG5vdCB3aGVuIHRoZSByb3cgaXMgYnVpbHQuICovXG5cbmV4cG9ydCBjb25zdCBvcGVuTWFpbGluZ01vZGFsID0gKCkgPT5cbiAgb3Blbk1vZGFsKFxuICAgICdtYWlsaW5nJyxcbiAgICAnSG93IFRvIFNlbmQgWW91ciBJbmNsdXNpb25zJyxcbiAgICBtYWlsaW5nSW5zdHJ1Y3Rpb25zKCksXG4gICAgTUFJTElOR19MT0MsXG4gICAgJ01haWxpbmcgSW5zdHJ1Y3Rpb25zJyxcbiAgKTtcblxuZXhwb3J0IGNvbnN0IG9wZW5GYXFNb2RhbCA9ICgpID0+XG4gIG9wZW5Nb2RhbCgnZmFxJywgJ0hvdyB0byBPcmRlciBNZW1vcmlhbCBKZXdlbHJ5ICYgRkFRcycsIGZhcUNvbnRlbnQoKSwgRkFRX0xPQyk7XG5cbi8qKiBUaGUgdGhyZWUgcm93cyBhdCB0aGUgZm9vdCBvZiB0aGUgYnV5IGJveC4gT25seSB0aGUgZmlyc3QgZXhwYW5kcyBpbiBwbGFjZS4gKi9cbmV4cG9ydCBjb25zdCBib3R0b21BY2NvcmRpb25zID0gKG5hdGl2ZTogeyB0aXRsZTogc3RyaW5nOyBib2R5OiBOb2RlIH1bXSkgPT4ge1xuICBjb25zdCBvcmRlclRvS2VlcHNha2UgPSBuYXRpdmUuZmluZCgobikgPT4gL2Zyb20gb3JkZXIgdG8ga2VlcHNha2UvaS50ZXN0KG4udGl0bGUpKTtcblxuICBjb25zdCBpdGVtczogQWNjb3JkSXRlbVtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRnJvbSBPcmRlciB0byBLZWVwc2FrZScsXG4gICAgICBib2R5OiBvcmRlclRvS2VlcHNha2U/LmJvZHkgPz8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpLFxuICAgIH0sXG4gICAgeyB0aXRsZTogJ0hvdyB0byBzZW5kIHlvdXIgaW5jbHVzaW9ucycsIG9wZW46IG9wZW5NYWlsaW5nTW9kYWwgfSxcbiAgICB7IHRpdGxlOiAnSG93IHRvIE9yZGVyIE1lbW9yaWFsIEpld2VscnkgJiBGQVFzJywgb3Blbjogb3BlbkZhcU1vZGFsIH0sXG4gIF07XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuY2xhc3NOYW1lID0gJ2Nycy1ib3R0b20nO1xuICBlbC5hcHBlbmQoQWNjb3JkaW9uKGl0ZW1zLCAnUERQJywgJ2V4cF9wZHBfYWNjb3JkaW9uX29wZW4nKSk7XG4gIHJldHVybiBlbDtcbn07XG4iLCIvKipcbiAqIFNTUiBXaW5kb3cgNS4wLjFcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDI1LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBKdW5lIDI3LCAyMDI1XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAnY29uc3RydWN0b3InIGluIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNyYykge1xuICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICB0YXJnZXQgPSB7fTtcbiAgfVxuICBpZiAoc3JjID09PSB2b2lkIDApIHtcbiAgICBzcmMgPSB7fTtcbiAgfVxuICBjb25zdCBub0V4dGVuZCA9IFsnX19wcm90b19fJywgJ2NvbnN0cnVjdG9yJywgJ3Byb3RvdHlwZSddO1xuICBPYmplY3Qua2V5cyhzcmMpLmZpbHRlcihrZXkgPT4gbm9FeHRlbmQuaW5kZXhPZihrZXkpIDwgMCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO2Vsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJiBpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgT2JqZWN0LmtleXMoc3JjW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgIH1cbiAgfSk7XG59XG5jb25zdCBzc3JEb2N1bWVudCA9IHtcbiAgYm9keToge30sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9LFxuICBhY3RpdmVFbGVtZW50OiB7XG4gICAgYmx1cigpIHt9LFxuICAgIG5vZGVOYW1lOiAnJ1xuICB9LFxuICBxdWVyeVNlbGVjdG9yKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBxdWVyeVNlbGVjdG9yQWxsKCkge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGNyZWF0ZUV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0RXZlbnQoKSB7fVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgICAgc3R5bGU6IHt9LFxuICAgICAgc2V0QXR0cmlidXRlKCkge30sXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnROUygpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGltcG9ydE5vZGUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgaGFzaDogJycsXG4gICAgaG9zdDogJycsXG4gICAgaG9zdG5hbWU6ICcnLFxuICAgIGhyZWY6ICcnLFxuICAgIG9yaWdpbjogJycsXG4gICAgcGF0aG5hbWU6ICcnLFxuICAgIHByb3RvY29sOiAnJyxcbiAgICBzZWFyY2g6ICcnXG4gIH1cbn07XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDoge307XG4gIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgcmV0dXJuIGRvYztcbn1cbmNvbnN0IHNzcldpbmRvdyA9IHtcbiAgZG9jdW1lbnQ6IHNzckRvY3VtZW50LFxuICBuYXZpZ2F0b3I6IHtcbiAgICB1c2VyQWdlbnQ6ICcnXG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgaGFzaDogJycsXG4gICAgaG9zdDogJycsXG4gICAgaG9zdG5hbWU6ICcnLFxuICAgIGhyZWY6ICcnLFxuICAgIG9yaWdpbjogJycsXG4gICAgcGF0aG5hbWU6ICcnLFxuICAgIHByb3RvY29sOiAnJyxcbiAgICBzZWFyY2g6ICcnXG4gIH0sXG4gIGhpc3Rvcnk6IHtcbiAgICByZXBsYWNlU3RhdGUoKSB7fSxcbiAgICBwdXNoU3RhdGUoKSB7fSxcbiAgICBnbygpIHt9LFxuICAgIGJhY2soKSB7fVxuICB9LFxuICBDdXN0b21FdmVudDogZnVuY3Rpb24gQ3VzdG9tRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9LFxuICBnZXRDb21wdXRlZFN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRQcm9wZXJ0eVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgSW1hZ2UoKSB7fSxcbiAgRGF0ZSgpIHt9LFxuICBzY3JlZW46IHt9LFxuICBzZXRUaW1lb3V0KCkge30sXG4gIGNsZWFyVGltZW91dCgpIHt9LFxuICBtYXRjaE1lZGlhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gIH0sXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQoaWQpO1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICBjb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICByZXR1cm4gd2luO1xufVxuXG5leHBvcnQgeyBnZXRXaW5kb3cgYXMgYSwgZ2V0RG9jdW1lbnQgYXMgZyB9O1xuIiwiaW1wb3J0IHsgYSBhcyBnZXRXaW5kb3csIGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5cbmZ1bmN0aW9uIGNsYXNzZXNUb1Rva2VucyhjbGFzc2VzKSB7XG4gIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHtcbiAgICBjbGFzc2VzID0gJyc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzZXMudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKGMgPT4gISFjLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICBjb25zdCBvYmplY3QgPSBvYmo7XG4gIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gbm8gZ2V0dGVyIGZvciBvYmplY3RcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBzb21ldGhpbmcgZ290IHdyb25nXG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSkge1xuICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgIGRlbGF5ID0gMDtcbiAgfVxuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn1cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWwpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBzdHlsZTtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gIH1cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuICBpZiAoIXN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5zdHlsZTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSAneCc7XG4gIH1cbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBtYXRyaXg7XG4gIGxldCBjdXJUcmFuc2Zvcm07XG4gIGxldCB0cmFuc2Zvcm1NYXRyaXg7XG4gIGNvbnN0IGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChhID0+IGEucmVwbGFjZSgnLCcsICcuJykpLmpvaW4oJywgJyk7XG4gICAgfVxuICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG4gIGlmIChheGlzID09PSAneCcpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxO1xuICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7XG4gICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gIH1cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XG4gICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTtcbiAgICAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTtcbiAgfVxuICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG59XG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuZnVuY3Rpb24gaXNOb2RlKG5vZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMTEpO1xufVxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICBjb25zdCB0byA9IE9iamVjdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pO1xuICBjb25zdCBub0V4dGVuZCA9IFsnX19wcm90b19fJywgJ2NvbnN0cnVjdG9yJywgJ3Byb3RvdHlwZSddO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5leHRTb3VyY2UgPSBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV07XG4gICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsICYmICFpc05vZGUobmV4dFNvdXJjZSkpIHtcbiAgICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSkuZmlsdGVyKGtleSA9PiBub0V4dGVuZC5pbmRleE9mKGtleSkgPCAwKTtcbiAgICAgIGZvciAobGV0IG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xuICAgICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cbmZ1bmN0aW9uIHNldENTU1Byb3BlcnR5KGVsLCB2YXJOYW1lLCB2YXJWYWx1ZSkge1xuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YXJWYWx1ZSk7XG59XG5mdW5jdGlvbiBhbmltYXRlQ1NTTW9kZVNjcm9sbChfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIHRhcmdldFBvc2l0aW9uLFxuICAgIHNpZGVcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBzdGFydFBvc2l0aW9uID0gLXN3aXBlci50cmFuc2xhdGU7XG4gIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICBsZXQgdGltZTtcbiAgY29uc3QgZHVyYXRpb24gPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJ25vbmUnO1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgY29uc3QgZGlyID0gdGFyZ2V0UG9zaXRpb24gPiBzdGFydFBvc2l0aW9uID8gJ25leHQnIDogJ3ByZXYnO1xuICBjb25zdCBpc091dE9mQm91bmQgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGRpciA9PT0gJ25leHQnICYmIGN1cnJlbnQgPj0gdGFyZ2V0IHx8IGRpciA9PT0gJ3ByZXYnICYmIGN1cnJlbnQgPD0gdGFyZ2V0O1xuICB9O1xuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgIH1cbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgY29uc3QgZWFzZVByb2dyZXNzID0gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyBlYXNlUHJvZ3Jlc3MgKiAodGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKTtcbiAgICBpZiAoaXNPdXRPZkJvdW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pKSB7XG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcbiAgICB9XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICBbc2lkZV06IGN1cnJlbnRQb3NpdGlvblxuICAgIH0pO1xuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpcGVyLmNzc01vZGVGcmFtZUlEID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfTtcbiAgYW5pbWF0ZSgpO1xufVxuZnVuY3Rpb24gZ2V0U2xpZGVUcmFuc2Zvcm1FbChzbGlkZUVsKSB7XG4gIHJldHVybiBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtdHJhbnNmb3JtJykgfHwgc2xpZGVFbC5zaGFkb3dSb290ICYmIHNsaWRlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXRyYW5zZm9ybScpIHx8IHNsaWRlRWw7XG59XG5mdW5jdGlvbiBlbGVtZW50Q2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvciA9ICcnO1xuICB9XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5lbGVtZW50LmNoaWxkcmVuXTtcbiAgaWYgKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCkge1xuICAgIGNoaWxkcmVuLnB1c2goLi4uZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCkpO1xuICB9XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcihlbCA9PiBlbC5tYXRjaGVzKHNlbGVjdG9yKSk7XG59XG5mdW5jdGlvbiBlbGVtZW50SXNDaGlsZE9mU2xvdChlbCwgc2xvdCkge1xuICAvLyBCcmVhZHRoLWZpcnN0IHNlYXJjaCB0aHJvdWdoIGFsbCBwYXJlbnQncyBjaGlsZHJlbiBhbmQgYXNzaWduZWQgZWxlbWVudHNcbiAgY29uc3QgZWxlbWVudHNRdWV1ZSA9IFtzbG90XTtcbiAgd2hpbGUgKGVsZW1lbnRzUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGVsZW1lbnRUb0NoZWNrID0gZWxlbWVudHNRdWV1ZS5zaGlmdCgpO1xuICAgIGlmIChlbCA9PT0gZWxlbWVudFRvQ2hlY2spIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbGVtZW50c1F1ZXVlLnB1c2goLi4uZWxlbWVudFRvQ2hlY2suY2hpbGRyZW4sIC4uLihlbGVtZW50VG9DaGVjay5zaGFkb3dSb290ID8gZWxlbWVudFRvQ2hlY2suc2hhZG93Um9vdC5jaGlsZHJlbiA6IFtdKSwgLi4uKGVsZW1lbnRUb0NoZWNrLmFzc2lnbmVkRWxlbWVudHMgPyBlbGVtZW50VG9DaGVjay5hc3NpZ25lZEVsZW1lbnRzKCkgOiBbXSkpO1xuICB9XG59XG5mdW5jdGlvbiBlbGVtZW50SXNDaGlsZE9mKGVsLCBwYXJlbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBpc0NoaWxkID0gcGFyZW50LmNvbnRhaW5zKGVsKTtcbiAgaWYgKCFpc0NoaWxkICYmIHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQgJiYgcGFyZW50IGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbLi4ucGFyZW50LmFzc2lnbmVkRWxlbWVudHMoKV07XG4gICAgaXNDaGlsZCA9IGNoaWxkcmVuLmluY2x1ZGVzKGVsKTtcbiAgICBpZiAoIWlzQ2hpbGQpIHtcbiAgICAgIGlzQ2hpbGQgPSBlbGVtZW50SXNDaGlsZE9mU2xvdChlbCwgcGFyZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ2hpbGQ7XG59XG5mdW5jdGlvbiBzaG93V2FybmluZyh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gZXJyXG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc2VzKSB7XG4gIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHtcbiAgICBjbGFzc2VzID0gW107XG4gIH1cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoLi4uKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlc1RvVG9rZW5zKGNsYXNzZXMpKSk7XG4gIHJldHVybiBlbDtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRPZmZzZXQoZWwpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWSA6IGVsLnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gIHJldHVybiB7XG4gICAgdG9wOiBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRQcmV2QWxsKGVsLCBzZWxlY3Rvcikge1xuICBjb25zdCBwcmV2RWxzID0gW107XG4gIHdoaWxlIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgY29uc3QgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChwcmV2Lm1hdGNoZXMoc2VsZWN0b3IpKSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgfSBlbHNlIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICBlbCA9IHByZXY7XG4gIH1cbiAgcmV0dXJuIHByZXZFbHM7XG59XG5mdW5jdGlvbiBlbGVtZW50TmV4dEFsbChlbCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgbmV4dEVscyA9IFtdO1xuICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgY29uc3QgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICB9IGVsc2UgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgIGVsID0gbmV4dDtcbiAgfVxuICByZXR1cm4gbmV4dEVscztcbn1cbmZ1bmN0aW9uIGVsZW1lbnRTdHlsZShlbCwgcHJvcCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xufVxuZnVuY3Rpb24gZWxlbWVudEluZGV4KGVsKSB7XG4gIGxldCBjaGlsZCA9IGVsO1xuICBsZXQgaTtcbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZWxlbWVudFBhcmVudHMoZWwsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBsZXQgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB3aGlsZSAocGFyZW50KSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAocGFyZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufVxuZnVuY3Rpb24gZWxlbWVudFRyYW5zaXRpb25FbmQoZWwsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlbCkgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwoZWwsIGUpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG4gIGlmIChjYWxsYmFjaykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG59XG5mdW5jdGlvbiBlbGVtZW50T3V0ZXJTaXplKGVsLCBzaXplLCBpbmNsdWRlTWFyZ2lucykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgcmV0dXJuIGVsW3NpemUgPT09ICd3aWR0aCcgPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCddICsgcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShzaXplID09PSAnd2lkdGgnID8gJ21hcmdpbi1yaWdodCcgOiAnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc2l6ZSA9PT0gJ3dpZHRoJyA/ICdtYXJnaW4tbGVmdCcgOiAnbWFyZ2luLWJvdHRvbScpKTtcbiAgfVxuICByZXR1cm4gZWwub2Zmc2V0V2lkdGg7XG59XG5mdW5jdGlvbiBtYWtlRWxlbWVudHNBcnJheShlbCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkoZWwpID8gZWwgOiBbZWxdKS5maWx0ZXIoZSA9PiAhIWUpO1xufVxuZnVuY3Rpb24gZ2V0Um90YXRlRml4KHN3aXBlcikge1xuICByZXR1cm4gdiA9PiB7XG4gICAgaWYgKE1hdGguYWJzKHYpID4gMCAmJiBzd2lwZXIuYnJvd3NlciAmJiBzd2lwZXIuYnJvd3Nlci5uZWVkM2RGaXggJiYgTWF0aC5hYnModikgJSA5MCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHYgKyAwLjAwMTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH07XG59XG5mdW5jdGlvbiBzZXRJbm5lckhUTUwoZWwsIGh0bWwpIHtcbiAgaWYgKGh0bWwgPT09IHZvaWQgMCkge1xuICAgIGh0bWwgPSAnJztcbiAgfVxuICBpZiAodHlwZW9mIHRydXN0ZWRUeXBlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbC5pbm5lckhUTUwgPSB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdodG1sJywge1xuICAgICAgY3JlYXRlSFRNTDogcyA9PiBzXG4gICAgfSkuY3JlYXRlSFRNTChodG1sKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB9XG59XG5cbmV4cG9ydCB7IHNldENTU1Byb3BlcnR5IGFzIGEsIGVsZW1lbnRQYXJlbnRzIGFzIGIsIGNyZWF0ZUVsZW1lbnQgYXMgYywgZWxlbWVudE9mZnNldCBhcyBkLCBlbGVtZW50Q2hpbGRyZW4gYXMgZSwgbm93IGFzIGYsIGdldFNsaWRlVHJhbnNmb3JtRWwgYXMgZywgZWxlbWVudE91dGVyU2l6ZSBhcyBoLCBlbGVtZW50SW5kZXggYXMgaSwgY2xhc3Nlc1RvVG9rZW5zIGFzIGosIGdldFRyYW5zbGF0ZSBhcyBrLCBlbGVtZW50VHJhbnNpdGlvbkVuZCBhcyBsLCBtYWtlRWxlbWVudHNBcnJheSBhcyBtLCBuZXh0VGljayBhcyBuLCBpc09iamVjdCBhcyBvLCBnZXRSb3RhdGVGaXggYXMgcCwgZWxlbWVudFN0eWxlIGFzIHEsIGVsZW1lbnROZXh0QWxsIGFzIHIsIHNldElubmVySFRNTCBhcyBzLCBlbGVtZW50UHJldkFsbCBhcyB0LCBhbmltYXRlQ1NTTW9kZVNjcm9sbCBhcyB1LCBzaG93V2FybmluZyBhcyB2LCBlbGVtZW50SXNDaGlsZE9mIGFzIHcsIGV4dGVuZCBhcyB4LCBkZWxldGVQcm9wcyBhcyB5IH07XG4iLCJpbXBvcnQgeyBhIGFzIGdldFdpbmRvdywgZyBhcyBnZXREb2N1bWVudCB9IGZyb20gJy4vc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IGIgYXMgZWxlbWVudFBhcmVudHMsIHEgYXMgZWxlbWVudFN0eWxlLCBlIGFzIGVsZW1lbnRDaGlsZHJlbiwgYSBhcyBzZXRDU1NQcm9wZXJ0eSwgaCBhcyBlbGVtZW50T3V0ZXJTaXplLCByIGFzIGVsZW1lbnROZXh0QWxsLCB0IGFzIGVsZW1lbnRQcmV2QWxsLCBrIGFzIGdldFRyYW5zbGF0ZSwgdSBhcyBhbmltYXRlQ1NTTW9kZVNjcm9sbCwgbiBhcyBuZXh0VGljaywgdiBhcyBzaG93V2FybmluZywgYyBhcyBjcmVhdGVFbGVtZW50LCB3IGFzIGVsZW1lbnRJc0NoaWxkT2YsIGYgYXMgbm93LCB4IGFzIGV4dGVuZCwgaSBhcyBlbGVtZW50SW5kZXgsIHkgYXMgZGVsZXRlUHJvcHMgfSBmcm9tICcuL3V0aWxzLm1qcyc7XG5cbmxldCBzdXBwb3J0O1xuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgc21vb3RoU2Nyb2xsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmICdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICAgIHRvdWNoOiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaClcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gIGlmICghc3VwcG9ydCkge1xuICAgIHN1cHBvcnQgPSBjYWxjU3VwcG9ydCgpO1xuICB9XG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5sZXQgZGV2aWNlQ2FjaGVkO1xuZnVuY3Rpb24gY2FsY0RldmljZShfdGVtcCkge1xuICBsZXQge1xuICAgIHVzZXJBZ2VudFxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGNvbnN0IHN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIGNvbnN0IHVhID0gdXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZVxuICB9O1xuICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGxldCBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgY29uc3QgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIGNvbnN0IGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICBjb25zdCB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIGxldCBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnO1xuXG4gIC8vIGlQYWRPcyAxMyBmaXhcbiAgY29uc3QgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcbiAgaWYgKCFpcGFkICYmIG1hY29zICYmIHN1cHBvcnQudG91Y2ggJiYgaVBhZFNjcmVlbnMuaW5kZXhPZihgJHtzY3JlZW5XaWR0aH14JHtzY3JlZW5IZWlnaHR9YCkgPj0gMCkge1xuICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgaWYgKCFpcGFkKSBpcGFkID0gWzAsIDEsICcxM18wXzAnXTtcbiAgICBtYWNvcyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQW5kcm9pZFxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gIH1cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBvYmplY3RcbiAgcmV0dXJuIGRldmljZTtcbn1cbmZ1bmN0aW9uIGdldERldmljZShvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcyA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnJpZGVzID0ge307XG4gIH1cbiAgaWYgKCFkZXZpY2VDYWNoZWQpIHtcbiAgICBkZXZpY2VDYWNoZWQgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cbiAgcmV0dXJuIGRldmljZUNhY2hlZDtcbn1cblxubGV0IGJyb3dzZXI7XG5mdW5jdGlvbiBjYWxjQnJvd3NlcigpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRldmljZSA9IGdldERldmljZSgpO1xuICBsZXQgbmVlZFBlcnNwZWN0aXZlRml4ID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuICBpZiAoaXNTYWZhcmkoKSkge1xuICAgIGNvbnN0IHVhID0gU3RyaW5nKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBpZiAodWEuaW5jbHVkZXMoJ1ZlcnNpb24vJykpIHtcbiAgICAgIGNvbnN0IFttYWpvciwgbWlub3JdID0gdWEuc3BsaXQoJ1ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpLm1hcChudW0gPT4gTnVtYmVyKG51bSkpO1xuICAgICAgbmVlZFBlcnNwZWN0aXZlRml4ID0gbWFqb3IgPCAxNiB8fCBtYWpvciA9PT0gMTYgJiYgbWlub3IgPCAyO1xuICAgIH1cbiAgfVxuICBjb25zdCBpc1dlYlZpZXcgPSAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBpc1NhZmFyaSgpO1xuICBjb25zdCBuZWVkM2RGaXggPSBpc1NhZmFyaUJyb3dzZXIgfHwgaXNXZWJWaWV3ICYmIGRldmljZS5pb3M7XG4gIHJldHVybiB7XG4gICAgaXNTYWZhcmk6IG5lZWRQZXJzcGVjdGl2ZUZpeCB8fCBpc1NhZmFyaUJyb3dzZXIsXG4gICAgbmVlZFBlcnNwZWN0aXZlRml4LFxuICAgIG5lZWQzZEZpeCxcbiAgICBpc1dlYlZpZXdcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG4gIHJldHVybiBicm93c2VyO1xufVxuXG5mdW5jdGlvbiBSZXNpemUoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IG9ic2VydmVyID0gbnVsbDtcbiAgbGV0IGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICBlbWl0KCdyZXNpemUnKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSBzd2lwZXI7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goX3JlZjIgPT4ge1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICAgIGNvbnRlbnRSZWN0LFxuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSA9IF9yZWYyO1xuICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gd2lkdGggfHwgbmV3SGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICByZXNpemVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIE9ic2VydmVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uLFxuICAgIGVtaXRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG9ic2VydmVycyA9IFtdO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgYXR0YWNoID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKG11dGF0aW9ucyA9PiB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXykgcmV0dXJuO1xuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLmlzRWxlbWVudCB8fCAodHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zKS5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclBhcmVudHMgPSBlbGVtZW50UGFyZW50cyhzd2lwZXIuaG9zdEVsKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgYXR0YWNoKHN3aXBlci5ob3N0RWwsIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pO1xuXG4gICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgYXR0YWNoKHN3aXBlci53cmFwcGVyRWwsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSk7XG4gIG9uKCdpbml0JywgaW5pdCk7XG4gIG9uKCdkZXN0cm95JywgZGVzdHJveSk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbnZhciBldmVudHNFbWl0dGVyID0ge1xuICBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuICBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcikgPCAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVyc1ttZXRob2RdKGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmQW55KGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBpbmRleCA9IHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSAmJiBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIGVtaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgbGV0IGV2ZW50cztcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGV4dDtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgW2V2ZW50LCAuLi5kYXRhXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCB3aWR0aDtcbiAgbGV0IGhlaWdodDtcbiAgY29uc3QgZWwgPSBzd2lwZXIuZWw7XG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gbnVsbCkge1xuICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICB9XG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmICh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTdWJ0cmFjdCBwYWRkaW5nc1xuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKHN3aXBlci5nZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyRWwsXG4gICAgc2xpZGVzRWwsXG4gICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cm9uZ1JUTFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICBsZXQgc25hcEdyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgbGV0IG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cbiAgbGV0IG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChzd2lwZXIpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBsZXQgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIGxldCBwcmV2U2xpZGVTaXplID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgaWYgKHR5cGVvZiBzd2lwZXJTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4pO1xuICB9XG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47XG5cbiAgLy8gcmVzZXQgbWFyZ2luc1xuICBzbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBpZiAocnRsKSB7XG4gICAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5SaWdodCA9ICcnO1xuICAgIH1cbiAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIH0pO1xuXG4gIC8vIHJlc2V0IGNzc01vZGUgb2Zmc2V0c1xuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsICcnKTtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCAnJyk7XG4gIH1cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBzd2lwZXIuZ3JpZDtcbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQuaW5pdFNsaWRlcyhzbGlkZXMpO1xuICB9IGVsc2UgaWYgKHN3aXBlci5ncmlkKSB7XG4gICAgc3dpcGVyLmdyaWQudW5zZXRTbGlkZXMoKTtcbiAgfVxuXG4gIC8vIENhbGMgc2xpZGVzXG4gIGxldCBzbGlkZVNpemU7XG4gIGNvbnN0IHNob3VsZFJlc2V0U2xpZGVTaXplID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMocGFyYW1zLmJyZWFrcG9pbnRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBhcmFtcy5icmVha3BvaW50c1trZXldLnNsaWRlc1BlclZpZXcgIT09ICd1bmRlZmluZWQnO1xuICB9KS5sZW5ndGggPiAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBsZXQgc2xpZGU7XG4gICAgaWYgKHNsaWRlc1tpXSkgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShpLCBzbGlkZSwgc2xpZGVzKTtcbiAgICB9XG4gICAgaWYgKHNsaWRlc1tpXSAmJiBlbGVtZW50U3R5bGUoc2xpZGUsICdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoc2hvdWxkUmVzZXRTbGlkZVNpemUpIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlW3N3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsaWRlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZSk7XG4gICAgICBjb25zdCBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGUuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgY29uc3QgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGVsZW1lbnRPdXRlclNpemUoc2xpZGUsICd3aWR0aCcsIHRydWUpIDogZWxlbWVudE91dGVyU2l6ZShzbGlkZSwgJ2hlaWdodCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3dpZHRoJyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICBjb25zdCBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoXG4gICAgICAgICAgfSA9IHNsaWRlO1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQgKyAob2Zmc2V0V2lkdGggLSBjbGllbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVTaXplID0gKHN3aXBlclNpemUgLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikgLyBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c2xpZGVTaXplfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG4gICAgc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSAvIDIgKyBwcmV2U2xpZGVTaXplIC8gMiArIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChwcmV2U2xpZGVTaXplID09PSAwICYmIGkgIT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoaSA9PT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmIChpbmRleCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKChpbmRleCAtIE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCkpICUgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIH1cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLm1heChzd2lwZXIudmlydHVhbFNpemUsIHN3aXBlclNpemUpICsgb2Zmc2V0QWZ0ZXI7XG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgd3JhcHBlckVsLnN0eWxlLndpZHRoID0gYCR7c3dpcGVyLnZpcnR1YWxTaXplICsgc3BhY2VCZXR3ZWVufXB4YDtcbiAgfVxuICBpZiAocGFyYW1zLnNldFdyYXBwZXJTaXplKSB7XG4gICAgd3JhcHBlckVsLnN0eWxlW3N3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBzcGFjZUJldHdlZW59cHhgO1xuICB9XG4gIGlmIChncmlkRW5hYmxlZCkge1xuICAgIHN3aXBlci5ncmlkLnVwZGF0ZVdyYXBwZXJTaXplKHNsaWRlU2l6ZSwgc25hcEdyaWQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBjb25zdCBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFwR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIGlmIChzbmFwR3JpZFtpXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICBpZiAoTWF0aC5mbG9vcihzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSAtIE1hdGguZmxvb3Ioc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVmlydHVhbCAmJiBwYXJhbXMubG9vcCkge1xuICAgIGNvbnN0IHNpemUgPSBzbGlkZXNTaXplc0dyaWRbMF0gKyBzcGFjZUJldHdlZW47XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IE1hdGguY2VpbCgoc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQWZ0ZXIpIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGNvbnN0IGdyb3VwU2l6ZSA9IHNpemUgKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwczsgaSArPSAxKSB7XG4gICAgICAgIHNuYXBHcmlkLnB1c2goc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0gKyBncm91cFNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0FmdGVyOyBpICs9IDEpIHtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgfVxuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNpemU7XG4gICAgfVxuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuICBpZiAoc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgY29uc3Qga2V5ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHJ0bCA/ICdtYXJnaW5MZWZ0JyA6IHN3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKChfLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlIHx8IHBhcmFtcy5sb29wKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzbGlkZUluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgc2xpZGVFbC5zdHlsZVtrZXldID0gYCR7c3BhY2VCZXR3ZWVufXB4YDtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHNwYWNlQmV0d2VlbiB8fCAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHNwYWNlQmV0d2VlbjtcbiAgICBjb25zdCBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSA+IHN3aXBlclNpemUgPyBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZSA6IDA7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoc25hcCA9PiB7XG4gICAgICBpZiAoc25hcCA8PSAwKSByZXR1cm4gLW9mZnNldEJlZm9yZTtcbiAgICAgIGlmIChzbmFwID4gbWF4U25hcCkgcmV0dXJuIG1heFNuYXAgKyBvZmZzZXRBZnRlcjtcbiAgICAgIHJldHVybiBzbmFwO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAoc3BhY2VCZXR3ZWVuIHx8IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gc3BhY2VCZXR3ZWVuO1xuICAgIGNvbnN0IG9mZnNldFNpemUgPSAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSB8fCAwKSArIChwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgfHwgMCk7XG4gICAgaWYgKGFsbFNsaWRlc1NpemUgKyBvZmZzZXRTaXplIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgY29uc3QgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplIC0gb2Zmc2V0U2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgc2xpZGVzLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkXG4gIH0pO1xuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlJywgYCR7LXNuYXBHcmlkWzBdfXB4YCk7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgYCR7c3dpcGVyLnNpemUgLyAyIC0gc2xpZGVzU2l6ZXNHcmlkW3NsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSAvIDJ9cHhgKTtcbiAgICBjb25zdCBhZGRUb1NuYXBHcmlkID0gLXN3aXBlci5zbmFwR3JpZFswXTtcbiAgICBjb25zdCBhZGRUb1NsaWRlc0dyaWQgPSAtc3dpcGVyLnNsaWRlc0dyaWRbMF07XG4gICAgc3dpcGVyLnNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NuYXBHcmlkKTtcbiAgICBzd2lwZXIuc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NsaWRlc0dyaWQpO1xuICB9XG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU25hcEdyaWRMZW5ndGgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIHN3aXBlci5lbWl0KCdzbmFwR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NsaWRlc1VwZGF0ZWQnKTtcbiAgaWYgKCFpc1ZpcnR1YWwgJiYgIXBhcmFtcy5jc3NNb2RlICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdmYWRlJykpIHtcbiAgICBjb25zdCBiYWNrRmFjZUhpZGRlbkNsYXNzID0gYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9YmFja2ZhY2UtaGlkZGVuYDtcbiAgICBjb25zdCBoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCA9IHN3aXBlci5lbC5jbGFzc0xpc3QuY29udGFpbnMoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgaWYgKHNsaWRlc0xlbmd0aCA8PSBwYXJhbXMubWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMpIHtcbiAgICAgIGlmICghaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQpIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQpIHtcbiAgICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0KHNwZWVkKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGFjdGl2ZVNsaWRlcyA9IFtdO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgbGV0IG5ld0hlaWdodCA9IDA7XG4gIGxldCBpO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9XG4gIGNvbnN0IGdldFNsaWRlQnlJbmRleCA9IGluZGV4ID0+IHtcbiAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnNsaWRlc1tzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShpbmRleCldO1xuICAgIH1cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlc1tpbmRleF07XG4gIH07XG4gIC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIChzd2lwZXIudmlzaWJsZVNsaWRlcyB8fCBbXSkuZm9yRWFjaChzbGlkZSA9PiB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCArIGk7XG4gICAgICAgIGlmIChpbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoICYmICFpc1ZpcnR1YWwpIGJyZWFrO1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoaW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KHN3aXBlci5hY3RpdmVJbmRleCkpO1xuICB9XG5cbiAgLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIEhlaWdodFxuICBpZiAobmV3SGVpZ2h0IHx8IG5ld0hlaWdodCA9PT0gMCkgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBtaW51c09mZnNldCA9IHN3aXBlci5pc0VsZW1lbnQgPyBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzd2lwZXIud3JhcHBlckVsLm9mZnNldExlZnQgOiBzd2lwZXIud3JhcHBlckVsLm9mZnNldFRvcCA6IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gKHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcCkgLSBtaW51c09mZnNldCAtIHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgfVxufVxuXG5jb25zdCB0b2dnbGVTbGlkZUNsYXNzZXMkMSA9IChzbGlkZUVsLCBjb25kaXRpb24sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoY29uZGl0aW9uICYmICFzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAoIWNvbmRpdGlvbiAmJiBzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc25hcEdyaWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIGxldCBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuICBsZXQgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyLnNpemU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICBsZXQgc2xpZGVPZmZzZXQgPSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICBpZiAocGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZU9mZnNldCAtPSBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgb3JpZ2luYWxTbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciAtIHNuYXBHcmlkWzBdICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlT2Zmc2V0KTtcbiAgICBjb25zdCBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgIGNvbnN0IGlzRnVsbHlWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8PSBzd2lwZXIuc2l6ZSAtIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgY29uc3QgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgIH1cbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMkMShzbGlkZSwgaXNWaXNpYmxlLCBwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyQxKHNsaWRlLCBpc0Z1bGx5VmlzaWJsZSwgcGFyYW1zLnNsaWRlRnVsbHlWaXNpYmxlQ2xhc3MpO1xuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICAgIHNsaWRlLm9yaWdpbmFsUHJvZ3Jlc3MgPSBydGwgPyAtb3JpZ2luYWxTbGlkZVByb2dyZXNzIDogb3JpZ2luYWxTbGlkZVByb2dyZXNzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0cmFuc2xhdGUgPSBzd2lwZXIgJiYgc3dpcGVyLnRyYW5zbGF0ZSAmJiBzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllciB8fCAwO1xuICB9XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBsZXQge1xuICAgIHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kLFxuICAgIHByb2dyZXNzTG9vcFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgY29uc3Qgd2FzRW5kID0gaXNFbmQ7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgICBjb25zdCBpc0JlZ2lubmluZ1JvdW5kZWQgPSBNYXRoLmFicyh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIDwgMTtcbiAgICBjb25zdCBpc0VuZFJvdW5kZWQgPSBNYXRoLmFicyh0cmFuc2xhdGUgLSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIDwgMTtcbiAgICBpc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nUm91bmRlZCB8fCBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gaXNFbmRSb3VuZGVkIHx8IHByb2dyZXNzID49IDE7XG4gICAgaWYgKGlzQmVnaW5uaW5nUm91bmRlZCkgcHJvZ3Jlc3MgPSAwO1xuICAgIGlmIChpc0VuZFJvdW5kZWQpIHByb2dyZXNzID0gMTtcbiAgfVxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBjb25zdCBmaXJzdFNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YSgwKTtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgZmlyc3RTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2ZpcnN0U2xpZGVJbmRleF07XG4gICAgY29uc3QgbGFzdFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbbGFzdFNsaWRlSW5kZXhdO1xuICAgIGNvbnN0IHRyYW5zbGF0ZU1heCA9IHN3aXBlci5zbGlkZXNHcmlkW3N3aXBlci5zbGlkZXNHcmlkLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHRyYW5zbGF0ZUFicyA9IE1hdGguYWJzKHRyYW5zbGF0ZSk7XG4gICAgaWYgKHRyYW5zbGF0ZUFicyA+PSBmaXJzdFNsaWRlVHJhbnNsYXRlKSB7XG4gICAgICBwcm9ncmVzc0xvb3AgPSAodHJhbnNsYXRlQWJzIC0gZmlyc3RTbGlkZVRyYW5zbGF0ZSkgLyB0cmFuc2xhdGVNYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzTG9vcCA9ICh0cmFuc2xhdGVBYnMgKyB0cmFuc2xhdGVNYXggLSBsYXN0U2xpZGVUcmFuc2xhdGUpIC8gdHJhbnNsYXRlTWF4O1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3NMb29wID4gMSkgcHJvZ3Jlc3NMb29wIC09IDE7XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBwcm9ncmVzcyxcbiAgICBwcm9ncmVzc0xvb3AsXG4gICAgaXNCZWdpbm5pbmcsXG4gICAgaXNFbmRcbiAgfSk7XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHN3aXBlci51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEVuZCB0b0VkZ2UnKTtcbiAgfVxuICBpZiAod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZyB8fCB3YXNFbmQgJiYgIWlzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2Zyb21FZGdlJyk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufVxuXG5jb25zdCB0b2dnbGVTbGlkZUNsYXNzZXMgPSAoc2xpZGVFbCwgY29uZGl0aW9uLCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKCFjb25kaXRpb24gJiYgc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWwsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgY29uc3QgZ2V0RmlsdGVyZWRTbGlkZSA9IHNlbGVjdG9yID0+IHtcbiAgICByZXR1cm4gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9JHtzZWxlY3Rvcn0sIHN3aXBlci1zbGlkZSR7c2VsZWN0b3J9YClbMF07XG4gIH07XG4gIGxldCBhY3RpdmVTbGlkZTtcbiAgbGV0IHByZXZTbGlkZTtcbiAgbGV0IG5leHRTbGlkZTtcbiAgaWYgKGlzVmlydHVhbCkge1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgbGV0IHNsaWRlSW5kZXggPSBhY3RpdmVJbmRleCAtIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICAgIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggKyBzbGlkZUluZGV4O1xuICAgICAgaWYgKHNsaWRlSW5kZXggPj0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCkgc2xpZGVJbmRleCAtPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoO1xuICAgICAgYWN0aXZlU2xpZGUgPSBnZXRGaWx0ZXJlZFNsaWRlKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlSW5kZXh9XCJdYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gZ2V0RmlsdGVyZWRTbGlkZShgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHthY3RpdmVJbmRleH1cIl1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4KTtcbiAgICAgIG5leHRTbGlkZSA9IHNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICBwcmV2U2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1thY3RpdmVJbmRleF07XG4gICAgfVxuICB9XG4gIGlmIChhY3RpdmVTbGlkZSkge1xuICAgIGlmICghZ3JpZEVuYWJsZWQpIHtcbiAgICAgIC8vIE5leHQgU2xpZGVcbiAgICAgIG5leHRTbGlkZSA9IGVsZW1lbnROZXh0QWxsKGFjdGl2ZVNsaWRlLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKVswXTtcbiAgICAgIGlmIChwYXJhbXMubG9vcCAmJiAhbmV4dFNsaWRlKSB7XG4gICAgICAgIG5leHRTbGlkZSA9IHNsaWRlc1swXTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldiBTbGlkZVxuICAgICAgcHJldlNsaWRlID0gZWxlbWVudFByZXZBbGwoYWN0aXZlU2xpZGUsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApWzBdO1xuICAgICAgaWYgKHBhcmFtcy5sb29wICYmICFwcmV2U2xpZGUgPT09IDApIHtcbiAgICAgICAgcHJldlNsaWRlID0gc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IGFjdGl2ZVNsaWRlLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IG5leHRTbGlkZSwgcGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMoc2xpZGVFbCwgc2xpZGVFbCA9PT0gcHJldlNsaWRlLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICB9KTtcbiAgc3dpcGVyLmVtaXRTbGlkZXNDbGFzc2VzKCk7XG59XG5cbmNvbnN0IHByb2Nlc3NMYXp5UHJlbG9hZGVyID0gKHN3aXBlciwgaW1hZ2VFbCkgPT4ge1xuICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSAoKSA9PiBzd2lwZXIuaXNFbGVtZW50ID8gYHN3aXBlci1zbGlkZWAgOiBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWA7XG4gIGNvbnN0IHNsaWRlRWwgPSBpbWFnZUVsLmNsb3Nlc3Qoc2xpZGVTZWxlY3RvcigpKTtcbiAgaWYgKHNsaWRlRWwpIHtcbiAgICBsZXQgbGF6eUVsID0gc2xpZGVFbC5xdWVyeVNlbGVjdG9yKGAuJHtzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzc31gKTtcbiAgICBpZiAoIWxhenlFbCAmJiBzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgICBpZiAoc2xpZGVFbC5zaGFkb3dSb290KSB7XG4gICAgICAgIGxhenlFbCA9IHNsaWRlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuJHtzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzc31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGluaXQgbGF0ZXJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAoc2xpZGVFbC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBsYXp5RWwgPSBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgICAgICAgICBpZiAobGF6eUVsKSBsYXp5RWwucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhenlFbCkgbGF6eUVsLnJlbW92ZSgpO1xuICB9XG59O1xuY29uc3QgdW5sYXp5ID0gKHN3aXBlciwgaW5kZXgpID0+IHtcbiAgaWYgKCFzd2lwZXIuc2xpZGVzW2luZGV4XSkgcmV0dXJuO1xuICBjb25zdCBpbWFnZUVsID0gc3dpcGVyLnNsaWRlc1tpbmRleF0ucXVlcnlTZWxlY3RvcignW2xvYWRpbmc9XCJsYXp5XCJdJyk7XG4gIGlmIChpbWFnZUVsKSBpbWFnZUVsLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xufTtcbmNvbnN0IHByZWxvYWQgPSBzd2lwZXIgPT4ge1xuICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gIGxldCBhbW91bnQgPSBzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkUHJldk5leHQ7XG4gIGNvbnN0IGxlbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBpZiAoIWxlbiB8fCAhYW1vdW50IHx8IGFtb3VudCA8IDApIHJldHVybjtcbiAgYW1vdW50ID0gTWF0aC5taW4oYW1vdW50LCBsZW4pO1xuICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpO1xuICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgaWYgKHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDEpIHtcbiAgICBjb25zdCBhY3RpdmVDb2x1bW4gPSBhY3RpdmVJbmRleDtcbiAgICBjb25zdCBwcmVsb2FkQ29sdW1ucyA9IFthY3RpdmVDb2x1bW4gLSBhbW91bnRdO1xuICAgIHByZWxvYWRDb2x1bW5zLnB1c2goLi4uQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGFtb3VudFxuICAgIH0pLm1hcCgoXywgaSkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGl2ZUNvbHVtbiArIHNsaWRlc1BlclZpZXcgKyBpO1xuICAgIH0pKTtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goKHNsaWRlRWwsIGkpID0+IHtcbiAgICAgIGlmIChwcmVsb2FkQ29sdW1ucy5pbmNsdWRlcyhzbGlkZUVsLmNvbHVtbikpIHVubGF6eShzd2lwZXIsIGkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzbGlkZUluZGV4TGFzdEluVmlldyA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldyAtIDE7XG4gIGlmIChzd2lwZXIucGFyYW1zLnJld2luZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSBhbW91bnQ7IGkgPD0gc2xpZGVJbmRleExhc3RJblZpZXcgKyBhbW91bnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVhbEluZGV4ID0gKGkgJSBsZW4gKyBsZW4pICUgbGVuO1xuICAgICAgaWYgKHJlYWxJbmRleCA8IGFjdGl2ZUluZGV4IHx8IHJlYWxJbmRleCA+IHNsaWRlSW5kZXhMYXN0SW5WaWV3KSB1bmxhenkoc3dpcGVyLCByZWFsSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gTWF0aC5tYXgoYWN0aXZlSW5kZXggLSBhbW91bnQsIDApOyBpIDw9IE1hdGgubWluKHNsaWRlSW5kZXhMYXN0SW5WaWV3ICsgYW1vdW50LCBsZW4gLSAxKTsgaSArPSAxKSB7XG4gICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXggJiYgKGkgPiBzbGlkZUluZGV4TGFzdEluVmlldyB8fCBpIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIHVubGF6eShzd2lwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlSW5kZXhCeVRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgY29uc3Qge1xuICAgIHNsaWRlc0dyaWQsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGxldCBhY3RpdmVJbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtIChzbGlkZXNHcmlkW2kgKyAxXSAtIHNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgfVxuICByZXR1cm4gYWN0aXZlSW5kZXg7XG59XG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBjb25zdCB7XG4gICAgc25hcEdyaWQsXG4gICAgcGFyYW1zLFxuICAgIGFjdGl2ZUluZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIHJlYWxJbmRleDogcHJldmlvdXNSZWFsSW5kZXgsXG4gICAgc25hcEluZGV4OiBwcmV2aW91c1NuYXBJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgbGV0IHNuYXBJbmRleDtcbiAgY29uc3QgZ2V0VmlydHVhbFJlYWxJbmRleCA9IGFJbmRleCA9PiB7XG4gICAgbGV0IHJlYWxJbmRleCA9IGFJbmRleCAtIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICBpZiAocmVhbEluZGV4IDwgMCkge1xuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHJlYWxJbmRleDtcbiAgICB9XG4gICAgaWYgKHJlYWxJbmRleCA+PSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICByZWFsSW5kZXggLT0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxJbmRleDtcbiAgfTtcbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhY3RpdmVJbmRleCA9IGdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUoc3dpcGVyKTtcbiAgfVxuICBpZiAoc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpID49IDApIHtcbiAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXggJiYgc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgc3dpcGVyLnJlYWxJbmRleCA9IGdldFZpcnR1YWxSZWFsSW5kZXgoYWN0aXZlSW5kZXgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuXG4gIC8vIEdldCByZWFsIGluZGV4XG4gIGxldCByZWFsSW5kZXg7XG4gIGlmIChzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHBhcmFtcy5sb29wKSB7XG4gICAgcmVhbEluZGV4ID0gZ2V0VmlydHVhbFJlYWxJbmRleChhY3RpdmVJbmRleCk7XG4gIH0gZWxzZSBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBjb25zdCBmaXJzdFNsaWRlSW5Db2x1bW4gPSBzd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXgpO1xuICAgIGxldCBhY3RpdmVTbGlkZUluZGV4ID0gcGFyc2VJbnQoZmlyc3RTbGlkZUluQ29sdW1uLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIGlmIChOdW1iZXIuaXNOYU4oYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBNYXRoLm1heChzd2lwZXIuc2xpZGVzLmluZGV4T2YoZmlyc3RTbGlkZUluQ29sdW1uKSwgMCk7XG4gICAgfVxuICAgIHJlYWxJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlU2xpZGVJbmRleCAvIHBhcmFtcy5ncmlkLnJvd3MpO1xuICB9IGVsc2UgaWYgKHN3aXBlci5zbGlkZXNbYWN0aXZlSW5kZXhdKSB7XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXNbYWN0aXZlSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoc2xpZGVJbmRleCwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFsSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVhbEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBwcmV2aW91c1NuYXBJbmRleCxcbiAgICBzbmFwSW5kZXgsXG4gICAgcHJldmlvdXNSZWFsSW5kZXgsXG4gICAgcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSk7XG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlbCwgcGF0aCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBsZXQgc2xpZGUgPSBlbC5jbG9zZXN0KGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICBpZiAoIXNsaWRlICYmIHN3aXBlci5pc0VsZW1lbnQgJiYgcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDEgJiYgcGF0aC5pbmNsdWRlcyhlbCkpIHtcbiAgICBbLi4ucGF0aC5zbGljZShwYXRoLmluZGV4T2YoZWwpICsgMSwgcGF0aC5sZW5ndGgpXS5mb3JFYWNoKHBhdGhFbCA9PiB7XG4gICAgICBpZiAoIXNsaWRlICYmIHBhdGhFbC5tYXRjaGVzICYmIHBhdGhFbC5tYXRjaGVzKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApKSB7XG4gICAgICAgIHNsaWRlID0gcGF0aEVsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIGxldCBzbGlkZUluZGV4O1xuICBpZiAoc2xpZGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2ldID09PSBzbGlkZSkge1xuICAgICAgICBzbGlkZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludChzbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59XG5cbnZhciB1cGRhdGUgPSB7XG4gIHVwZGF0ZVNpemUsXG4gIHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3MsXG4gIHVwZGF0ZVNsaWRlc0NsYXNzZXMsXG4gIHVwZGF0ZUFjdGl2ZUluZGV4LFxuICB1cGRhdGVDbGlja2VkU2xpZGVcbn07XG5cbmZ1bmN0aW9uIGdldFN3aXBlclRyYW5zbGF0ZShheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHRyYW5zbGF0ZSxcbiAgICB3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuICBsZXQgY3VycmVudFRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh3cmFwcGVyRWwsIGF4aXMpO1xuICBjdXJyZW50VHJhbnNsYXRlICs9IHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgaWYgKHJ0bCkgY3VycmVudFRyYW5zbGF0ZSA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICByZXR1cm4gY3VycmVudFRyYW5zbGF0ZSB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHBhcmFtcyxcbiAgICB3cmFwcGVyRWwsXG4gICAgcHJvZ3Jlc3NcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGNvbnN0IHogPSAwO1xuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICB9XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gIHN3aXBlci50cmFuc2xhdGUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB4IDogeTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IC14IDogLXk7XG4gIH0gZWxzZSBpZiAoIXBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgeCAtPSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgLT0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICAgIH1cbiAgICB3cmFwcGVyRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBwcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiBtaW5UcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFswXTtcbn1cblxuZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlVG8odHJhbnNsYXRlLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCB0cmFuc2xhdGVCb3VuZHMsIGludGVybmFsKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IDA7XG4gIH1cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlQm91bmRzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1pblRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgY29uc3QgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICBsZXQgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcblxuICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICAgIFtpc0ggPyAnbGVmdCcgOiAndG9wJ106IC1uZXdUcmFuc2xhdGUsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICBpZiAoIXN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciB0cmFuc2xhdGUgPSB7XG4gIGdldFRyYW5zbGF0ZTogZ2V0U3dpcGVyVHJhbnNsYXRlLFxuICBzZXRUcmFuc2xhdGUsXG4gIG1pblRyYW5zbGF0ZSxcbiAgbWF4VHJhbnNsYXRlLFxuICB0cmFuc2xhdGVUb1xufTtcblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBkdXJhdGlvbiA9PT0gMCA/IGAwbXNgIDogJyc7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVtaXQoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXBcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBwcmV2aW91c0luZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBkaXIgPSBkaXJlY3Rpb247XG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuICBzd2lwZXIuZW1pdChgdHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBkaXIgPT09ICdyZXNldCcpIHtcbiAgICBzd2lwZXIuZW1pdChgc2xpZGVSZXNldFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gIH0gZWxzZSBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoYHNsaWRlQ2hhbmdlVHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZU5leHRUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVQcmV2VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuICB0cmFuc2l0aW9uRW1pdCh7XG4gICAgc3dpcGVyLFxuICAgIHJ1bkNhbGxiYWNrcyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc3RlcDogJ1N0YXJ0J1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnRW5kJ1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZFxufTtcblxuZnVuY3Rpb24gc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIGluaXRpYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIGxldCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICBjb25zdCB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTtcbiAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gLU1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR3JpZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChydGwgPyB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKChhY3RpdmVJbmRleCB8fCAwKSAhPT0gc2xpZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzbGlkZUluZGV4ICE9PSAocHJldmlvdXNJbmRleCB8fCAwKSAmJiBydW5DYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCcpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBsZXQgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnO1xuXG4gIC8vIGluaXRpYWwgdmlydHVhbFxuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgaXNJbml0aWFsVmlydHVhbCA9IGlzVmlydHVhbCAmJiBpbml0aWFsO1xuICAvLyBVcGRhdGUgSW5kZXhcbiAgaWYgKCFpc0luaXRpYWxWaXJ0dWFsICYmIChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSB8fCAhcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBpZiAocGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0ID0gcnRsID8gdHJhbnNsYXRlIDogLXRyYW5zbGF0ZTtcbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgICAgICAgc3dpcGVyLl9pbW1lZGlhdGVWaXJ0dWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ZpcnR1YWwgJiYgIXN3aXBlci5fY3NzTW9kZVZpcnR1YWxJbml0aWFsU2V0ICYmIHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlID4gMCkge1xuICAgICAgICBzd2lwZXIuX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICB9XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICAgIHN3aXBlci5faW1tZWRpYXRlVmlydHVhbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICAgICAgICAgIHN3aXBlcixcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbjogdCxcbiAgICAgICAgICBzaWRlOiBpc0ggPyAnbGVmdCcgOiAndG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiB0LFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICBjb25zdCBpc1NhZmFyaSA9IGJyb3dzZXIuaXNTYWZhcmk7XG4gIGlmIChpc1ZpcnR1YWwgJiYgIWluaXRpYWwgJiYgaXNTYWZhcmkgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZShmYWxzZSwgZmFsc2UsIHNsaWRlSW5kZXgpO1xuICB9XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICB9IGVsc2UgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICBkZWxldGUgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGxldCBuZXdJbmRleCA9IGluZGV4O1xuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXJnZXRTbGlkZUluZGV4O1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBzbGlkZUluZGV4KS5jb2x1bW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEobmV3SW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29scyA9IGdyaWRFbmFibGVkID8gTWF0aC5jZWlsKHN3aXBlci5zbGlkZXMubGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzXG4gICAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIGxldCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICAgICAgICBpZiAoY2VudGVyZWRTbGlkZXMgJiYgc2xpZGVzUGVyVmlldyAlIDIgPT09IDApIHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBuZWVkTG9vcEZpeCA9IGNvbHMgLSB0YXJnZXRTbGlkZUluZGV4IDwgc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IG5lZWRMb29wRml4IHx8IHRhcmdldFNsaWRlSW5kZXggPCBNYXRoLmNlaWwoc2xpZGVzUGVyVmlldyAvIDIpO1xuICAgICAgfVxuICAgICAgaWYgKGludGVybmFsICYmIGNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmICFncmlkRW5hYmxlZCkge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMb29wRml4KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNlbnRlcmVkU2xpZGVzID8gdGFyZ2V0U2xpZGVJbmRleCA8IHN3aXBlci5hY3RpdmVJbmRleCA/ICdwcmV2JyA6ICduZXh0JyA6IHRhcmdldFNsaWRlSW5kZXggLSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxIDwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHNsaWRlVG86IHRydWUsXG4gICAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyB0YXJnZXRTbGlkZUluZGV4ICsgMSA6IHRhcmdldFNsaWRlSW5kZXggLSBjb2xzICsgMSxcbiAgICAgICAgICBzbGlkZVJlYWxJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyBzd2lwZXIucmVhbEluZGV4IDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICBuZXdJbmRleCA9IHN3aXBlci5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gc2xpZGVJbmRleCkuY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShuZXdJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfSk7XG4gIHJldHVybiBzd2lwZXI7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGVuYWJsZWQsXG4gICAgcGFyYW1zLFxuICAgIGFuaW1hdGluZ1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuIHN3aXBlcjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgbGV0IHBlckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgIHBlckdyb3VwID0gTWF0aC5tYXgoc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdjdXJyZW50JywgdHJ1ZSksIDEpO1xuICB9XG4gIGNvbnN0IGluY3JlbWVudCA9IHN3aXBlci5hY3RpdmVJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGVyR3JvdXA7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgIWlzVmlydHVhbCAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGluZykgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgIGRpcmVjdGlvbjogJ25leHQnXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLndyYXBwZXJFbC5jbGllbnRMZWZ0O1xuICAgIGlmIChzd2lwZXIuYWN0aXZlSW5kZXggPT09IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNFbmQpIHtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcnRsVHJhbnNsYXRlLFxuICAgIGVuYWJsZWQsXG4gICAgYW5pbWF0aW5nXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gc3dpcGVyO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmICFpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRpbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICBkaXJlY3Rpb246ICdwcmV2J1xuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci53cmFwcGVyRWwuY2xpZW50TGVmdDtcbiAgfVxuICBjb25zdCB0cmFuc2xhdGUgPSBydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwpIHtcbiAgICBpZiAodmFsIDwgMCkgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCk7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICBjb25zdCBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAodmFsID0+IG5vcm1hbGl6ZSh2YWwpKTtcbiAgY29uc3QgaXNGcmVlTW9kZSA9IHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZDtcbiAgbGV0IHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmFtcy5jc3NNb2RlIHx8IGlzRnJlZU1vZGUpKSB7XG4gICAgbGV0IHByZXZTbmFwSW5kZXg7XG4gICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBzbmFwKSB7XG4gICAgICAgIC8vIHByZXZTbmFwID0gc25hcDtcbiAgICAgICAgcHJldlNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHByZXZTbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcmV2U25hcCA9IGlzRnJlZU1vZGUgPyBzbmFwR3JpZFtwcmV2U25hcEluZGV4XSA6IHNuYXBHcmlkW3ByZXZTbmFwSW5kZXggPiAwID8gcHJldlNuYXBJbmRleCAtIDEgOiBwcmV2U25hcEluZGV4XTtcbiAgICB9XG4gIH1cbiAgbGV0IHByZXZJbmRleCA9IDA7XG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgICAgcHJldkluZGV4ID0gcHJldkluZGV4IC0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdwcmV2aW91cycsIHRydWUpICsgMTtcbiAgICAgIHByZXZJbmRleCA9IE1hdGgubWF4KHByZXZJbmRleCwgMCk7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMucmV3aW5kICYmIHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggLSAxIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhsYXN0SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMubG9vcCAmJiBzd2lwZXIuYWN0aXZlSW5kZXggPT09IDAgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIHRocmVzaG9sZCkge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgIHRocmVzaG9sZCA9IDAuNTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBsZXQgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpO1xuICBjb25zdCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIGNvbnN0IGN1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG4gICAgY29uc3QgbmV4dFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4ICsgMV07XG4gICAgaWYgKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGJlZm9yZSBpdC5cbiAgICBjb25zdCBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoY3VycmVudFNuYXAgLSBwcmV2U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4IC09IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9XG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWxcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICBsZXQgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChzd2lwZXIuY2xpY2tlZEluZGV4KTtcbiAgbGV0IHJlYWxJbmRleDtcbiAgY29uc3Qgc2xpZGVTZWxlY3RvciA9IHN3aXBlci5pc0VsZW1lbnQgPyBgc3dpcGVyLXNsaWRlYCA6IGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gO1xuICBjb25zdCBpc0dyaWQgPSBzd2lwZXIuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5jbGlja2VkU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKHJlYWxJbmRleCk7XG4gICAgfSBlbHNlIGlmIChzbGlkZVRvSW5kZXggPiAoaXNHcmlkID8gKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykgLyAyIC0gKHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzIC0gMSkgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXgoZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgJHtzbGlkZVNlbGVjdG9yfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXWApWzBdKTtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59XG5cbnZhciBzbGlkZSA9IHtcbiAgc2xpZGVUbyxcbiAgc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dCxcbiAgc2xpZGVQcmV2LFxuICBzbGlkZVJlc2V0LFxuICBzbGlkZVRvQ2xvc2VzdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZVxufTtcblxuZnVuY3Rpb24gbG9vcENyZWF0ZShzbGlkZVJlYWxJbmRleCwgaW5pdGlhbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghcGFyYW1zLmxvb3AgfHwgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgY29uc3QgaW5pdFNsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgIHNsaWRlcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBpbmRleCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNsZWFyQmxhbmtTbGlkZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKTtcbiAgICBzbGlkZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBpZiAoc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzICYmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxIHx8IGdyaWRFbmFibGVkKSkge1xuICAgIGNsZWFyQmxhbmtTbGlkZXMoKTtcbiAgfVxuICBjb25zdCBzbGlkZXNQZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIChncmlkRW5hYmxlZCA/IHBhcmFtcy5ncmlkLnJvd3MgOiAxKTtcbiAgY29uc3Qgc2hvdWxkRmlsbEdyb3VwID0gc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBzbGlkZXNQZXJHcm91cCAhPT0gMDtcbiAgY29uc3Qgc2hvdWxkRmlsbEdyaWQgPSBncmlkRW5hYmxlZCAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5ncmlkLnJvd3MgIT09IDA7XG4gIGNvbnN0IGFkZEJsYW5rU2xpZGVzID0gYW1vdW50T2ZTbGlkZXMgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50T2ZTbGlkZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2xpZGVFbCA9IHN3aXBlci5pc0VsZW1lbnQgPyBjcmVhdGVFbGVtZW50KCdzd2lwZXItc2xpZGUnLCBbcGFyYW1zLnNsaWRlQmxhbmtDbGFzc10pIDogY3JlYXRlRWxlbWVudCgnZGl2JywgW3BhcmFtcy5zbGlkZUNsYXNzLCBwYXJhbXMuc2xpZGVCbGFua0NsYXNzXSk7XG4gICAgICBzd2lwZXIuc2xpZGVzRWwuYXBwZW5kKHNsaWRlRWwpO1xuICAgIH1cbiAgfTtcbiAgaWYgKHNob3VsZEZpbGxHcm91cCkge1xuICAgIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzKSB7XG4gICAgICBjb25zdCBzbGlkZXNUb0FkZCA9IHNsaWRlc1Blckdyb3VwIC0gc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBzbGlkZXNQZXJHcm91cDtcbiAgICAgIGFkZEJsYW5rU2xpZGVzKHNsaWRlc1RvQWRkKTtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBldmVuIHRvIHNsaWRlc1Blckdyb3VwLCBsb29wIG1vZGUgbWF5IG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gWW91IG5lZWQgdG8gYWRkIG1vcmUgc2xpZGVzIChvciBtYWtlIGR1cGxpY2F0ZXMsIG9yIGVtcHR5IHNsaWRlcyknKTtcbiAgICB9XG4gICAgaW5pdFNsaWRlcygpO1xuICB9IGVsc2UgaWYgKHNob3VsZEZpbGxHcmlkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wQWRkQmxhbmtTbGlkZXMpIHtcbiAgICAgIGNvbnN0IHNsaWRlc1RvQWRkID0gcGFyYW1zLmdyaWQucm93cyAtIHN3aXBlci5zbGlkZXMubGVuZ3RoICUgcGFyYW1zLmdyaWQucm93cztcbiAgICAgIGFkZEJsYW5rU2xpZGVzKHNsaWRlc1RvQWRkKTtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBldmVuIHRvIGdyaWQucm93cywgbG9vcCBtb2RlIG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzLCBvciBlbXB0eSBzbGlkZXMpJyk7XG4gICAgfVxuICAgIGluaXRTbGlkZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBpbml0U2xpZGVzKCk7XG4gIH1cbiAgc3dpcGVyLmxvb3BGaXgoe1xuICAgIHNsaWRlUmVhbEluZGV4LFxuICAgIGRpcmVjdGlvbjogcGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gdW5kZWZpbmVkIDogJ25leHQnLFxuICAgIGluaXRpYWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BGaXgoX3RlbXApIHtcbiAgbGV0IHtcbiAgICBzbGlkZVJlYWxJbmRleCxcbiAgICBzbGlkZVRvID0gdHJ1ZSxcbiAgICBkaXJlY3Rpb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgaW5pdGlhbCxcbiAgICBieUNvbnRyb2xsZXIsXG4gICAgYnlNb3VzZXdoZWVsXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBzbGlkZXNFbCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIGNlbnRlcmVkU2xpZGVzLFxuICAgIGluaXRpYWxTbGlkZVxuICB9ID0gcGFyYW1zO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgIGlmIChzbGlkZVRvKSB7XG4gICAgICBpZiAoIXBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBzd2lwZXIuc25hcEluZGV4ID09PSAwKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5zbmFwSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyVmlldykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoICsgc3dpcGVyLnNuYXBJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIuc25hcEluZGV4ID09PSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmUsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gICAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgIHNsaWRlc1BlclZpZXcgPSBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKTtcbiAgfSBlbHNlIHtcbiAgICBzbGlkZXNQZXJWaWV3ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gICAgaWYgKGNlbnRlcmVkU2xpZGVzICYmIHNsaWRlc1BlclZpZXcgJSAyID09PSAwKSB7XG4gICAgICBzbGlkZXNQZXJWaWV3ID0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNsaWRlc1Blckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0byA/IHNsaWRlc1BlclZpZXcgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gIGxldCBsb29wZWRTbGlkZXMgPSBjZW50ZXJlZFNsaWRlcyA/IE1hdGgubWF4KHNsaWRlc1Blckdyb3VwLCBNYXRoLmNlaWwoc2xpZGVzUGVyVmlldyAvIDIpKSA6IHNsaWRlc1Blckdyb3VwO1xuICBpZiAobG9vcGVkU2xpZGVzICUgc2xpZGVzUGVyR3JvdXAgIT09IDApIHtcbiAgICBsb29wZWRTbGlkZXMgKz0gc2xpZGVzUGVyR3JvdXAgLSBsb29wZWRTbGlkZXMgJSBzbGlkZXNQZXJHcm91cDtcbiAgfVxuICBsb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gbG9vcGVkU2xpZGVzO1xuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgfHwgc3dpcGVyLnBhcmFtcy5lZmZlY3QgPT09ICdjYXJkcycgJiYgc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBlbm91Z2ggZm9yIGxvb3AgbW9kZSwgaXQgd2lsbCBiZSBkaXNhYmxlZCBvciBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzKSBvciBsb3dlciB0aGUgdmFsdWVzIG9mIHNsaWRlc1BlclZpZXcgYW5kIHNsaWRlc1Blckdyb3VwIHBhcmFtZXRlcnMnKTtcbiAgfSBlbHNlIGlmIChncmlkRW5hYmxlZCAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAncm93Jykge1xuICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBMb29wIG1vZGUgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBncmlkLmZpbGwgPSBgcm93YCcpO1xuICB9XG4gIGNvbnN0IHByZXBlbmRTbGlkZXNJbmRleGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgY29uc3QgY29scyA9IGdyaWRFbmFibGVkID8gTWF0aC5jZWlsKHNsaWRlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzKSA6IHNsaWRlcy5sZW5ndGg7XG4gIGNvbnN0IGlzSW5pdGlhbE92ZXJmbG93ID0gaW5pdGlhbCAmJiBjb2xzIC0gaW5pdGlhbFNsaWRlIDwgc2xpZGVzUGVyVmlldyAmJiAhY2VudGVyZWRTbGlkZXM7XG4gIGxldCBhY3RpdmVJbmRleCA9IGlzSW5pdGlhbE92ZXJmbG93ID8gaW5pdGlhbFNsaWRlIDogc3dpcGVyLmFjdGl2ZUluZGV4O1xuICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYWN0aXZlU2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4KHNsaWRlcy5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXg7XG4gIH1cbiAgY29uc3QgaXNOZXh0ID0gZGlyZWN0aW9uID09PSAnbmV4dCcgfHwgIWRpcmVjdGlvbjtcbiAgY29uc3QgaXNQcmV2ID0gZGlyZWN0aW9uID09PSAncHJldicgfHwgIWRpcmVjdGlvbjtcbiAgbGV0IHNsaWRlc1ByZXBlbmRlZCA9IDA7XG4gIGxldCBzbGlkZXNBcHBlbmRlZCA9IDA7XG4gIGNvbnN0IGFjdGl2ZUNvbEluZGV4ID0gZ3JpZEVuYWJsZWQgPyBzbGlkZXNbYWN0aXZlU2xpZGVJbmRleF0uY29sdW1uIDogYWN0aXZlU2xpZGVJbmRleDtcbiAgY29uc3QgYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgPSBhY3RpdmVDb2xJbmRleCArIChjZW50ZXJlZFNsaWRlcyAmJiB0eXBlb2Ygc2V0VHJhbnNsYXRlID09PSAndW5kZWZpbmVkJyA/IC1zbGlkZXNQZXJWaWV3IC8gMiArIDAuNSA6IDApO1xuICAvLyBwcmVwZW5kIGxhc3Qgc2xpZGVzIGJlZm9yZSBzdGFydFxuICBpZiAoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgPCBsb29wZWRTbGlkZXMpIHtcbiAgICBzbGlkZXNQcmVwZW5kZWQgPSBNYXRoLm1heChsb29wZWRTbGlkZXMgLSBhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCwgc2xpZGVzUGVyR3JvdXApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcGVkU2xpZGVzIC0gYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiBjb2xzO1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGNvbEluZGV4VG9QcmVwZW5kID0gY29scyAtIGluZGV4IC0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHNsaWRlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNbaV0uY29sdW1uID09PSBjb2xJbmRleFRvUHJlcGVuZCkgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgICAgLy8gICBpZiAoc2xpZGUuY29sdW1uID09PSBjb2xJbmRleFRvUHJlcGVuZCkgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKGNvbHMgLSBpbmRleCAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCArIHNsaWRlc1BlclZpZXcgPiBjb2xzIC0gbG9vcGVkU2xpZGVzKSB7XG4gICAgc2xpZGVzQXBwZW5kZWQgPSBNYXRoLm1heChhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCAtIChjb2xzIC0gbG9vcGVkU2xpZGVzICogMiksIHNsaWRlc1Blckdyb3VwKTtcbiAgICBpZiAoaXNJbml0aWFsT3ZlcmZsb3cpIHtcbiAgICAgIHNsaWRlc0FwcGVuZGVkID0gTWF0aC5tYXgoc2xpZGVzQXBwZW5kZWQsIHNsaWRlc1BlclZpZXcgLSBjb2xzICsgaW5pdGlhbFNsaWRlICsgMSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzQXBwZW5kZWQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiBjb2xzO1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChzbGlkZS5jb2x1bW4gPT09IGluZGV4KSBhcHBlbmRTbGlkZXNJbmRleGVzLnB1c2goc2xpZGVJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSB0cnVlO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gZmFsc2U7XG4gIH0pO1xuICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgPT09ICdjYXJkcycgJiYgc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgaWYgKGFwcGVuZFNsaWRlc0luZGV4ZXMuaW5jbHVkZXMoYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMuc3BsaWNlKGFwcGVuZFNsaWRlc0luZGV4ZXMuaW5kZXhPZihhY3RpdmVTbGlkZUluZGV4KSwgMSk7XG4gICAgfVxuICAgIGlmIChwcmVwZW5kU2xpZGVzSW5kZXhlcy5pbmNsdWRlcyhhY3RpdmVTbGlkZUluZGV4KSkge1xuICAgICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMuc3BsaWNlKHByZXBlbmRTbGlkZXNJbmRleGVzLmluZGV4T2YoYWN0aXZlU2xpZGVJbmRleCksIDEpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNQcmV2KSB7XG4gICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gdHJ1ZTtcbiAgICAgIHNsaWRlc0VsLnByZXBlbmQoc2xpZGVzW2luZGV4XSk7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzTmV4dCkge1xuICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gdHJ1ZTtcbiAgICAgIHNsaWRlc0VsLmFwcGVuZChzbGlkZXNbaW5kZXhdKTtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3dpcGVyTG9vcE1vdmVET00gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICB9IGVsc2UgaWYgKGdyaWRFbmFibGVkICYmIChwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzUHJldiB8fCBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNOZXh0KSkge1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgIHN3aXBlci5ncmlkLnVwZGF0ZVNsaWRlKHNsaWRlSW5kZXgsIHNsaWRlLCBzd2lwZXIuc2xpZGVzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIH1cbiAgaWYgKHNsaWRlVG8pIHtcbiAgICBpZiAocHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc1ByZXYpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVSZWFsSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleCArIHNsaWRlc1ByZXBlbmRlZF07XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdTbGlkZVRyYW5zbGF0ZSAtIGN1cnJlbnRTbGlkZVRyYW5zbGF0ZTtcbiAgICAgICAgaWYgKGJ5TW91c2V3aGVlbCkge1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoc3dpcGVyLnRyYW5zbGF0ZSAtIGRpZmYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4ICsgTWF0aC5jZWlsKHNsaWRlc1ByZXBlbmRlZCksIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBpZiAoc2V0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gZ3JpZEVuYWJsZWQgPyBwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzIDogcHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIHNoaWZ0LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzTmV4dCkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZVJlYWxJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdO1xuICAgICAgICBjb25zdCBuZXdTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4IC0gc2xpZGVzQXBwZW5kZWRdO1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3U2xpZGVUcmFuc2xhdGUgLSBjdXJyZW50U2xpZGVUcmFuc2xhdGU7XG4gICAgICAgIGlmIChieU1vdXNld2hlZWwpIHtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHN3aXBlci50cmFuc2xhdGUgLSBkaWZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIHNsaWRlc0FwcGVuZGVkLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gZ3JpZEVuYWJsZWQgPyBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCAvIHBhcmFtcy5ncmlkLnJvd3MgOiBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4IC0gc2hpZnQsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIgJiYgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCAmJiAhYnlDb250cm9sbGVyKSB7XG4gICAgY29uc3QgbG9vcFBhcmFtcyA9IHtcbiAgICAgIHNsaWRlUmVhbEluZGV4LFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgc2V0VHJhbnNsYXRlLFxuICAgICAgYWN0aXZlU2xpZGVJbmRleCxcbiAgICAgIGJ5Q29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wuZm9yRWFjaChjID0+IHtcbiAgICAgICAgaWYgKCFjLmRlc3Ryb3llZCAmJiBjLnBhcmFtcy5sb29wKSBjLmxvb3BGaXgoe1xuICAgICAgICAgIC4uLmxvb3BQYXJhbXMsXG4gICAgICAgICAgc2xpZGVUbzogYy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPyBzbGlkZVRvIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgaW5zdGFuY2VvZiBzd2lwZXIuY29uc3RydWN0b3IgJiYgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5sb29wRml4KHtcbiAgICAgICAgLi4ubG9vcFBhcmFtcyxcbiAgICAgICAgc2xpZGVUbzogc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPyBzbGlkZVRvIDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xufVxuXG5mdW5jdGlvbiBsb29wRGVzdHJveSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIXBhcmFtcy5sb29wIHx8ICFzbGlkZXNFbCB8fCBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIGNvbnN0IG5ld1NsaWRlc09yZGVyID0gW107XG4gIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHR5cGVvZiBzbGlkZUVsLnN3aXBlclNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnID8gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxIDogc2xpZGVFbC5zd2lwZXJTbGlkZUluZGV4O1xuICAgIG5ld1NsaWRlc09yZGVyW2luZGV4XSA9IHNsaWRlRWw7XG4gIH0pO1xuICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gIH0pO1xuICBuZXdTbGlkZXNPcmRlci5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHNsaWRlc0VsLmFwcGVuZChzbGlkZUVsKTtcbiAgfSk7XG4gIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnJlYWxJbmRleCwgMCk7XG59XG5cbnZhciBsb29wID0ge1xuICBsb29wQ3JlYXRlLFxuICBsb29wRml4LFxuICBsb29wRGVzdHJveVxufTtcblxuZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgY29uc3QgZWwgPSBzd2lwZXIucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHN3aXBlci5lbCA6IHN3aXBlci53cmFwcGVyRWw7XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSB0cnVlO1xuICB9XG4gIGVsLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgfVxuICBzd2lwZXJbc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyAnZWwnIDogJ3dyYXBwZXJFbCddLnN0eWxlLmN1cnNvciA9ICcnO1xuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBncmFiQ3Vyc29yID0ge1xuICBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3Jcbn07XG5cbi8vIE1vZGlmaWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTQ1MjA1NTQvY3VzdG9tLWVsZW1lbnQtZ2V0cm9vdG5vZGUtY2xvc2VzdC1mdW5jdGlvbi1jcm9zc2luZy1tdWx0aXBsZS1wYXJlbnQtc2hhZG93ZFxuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnQoc2VsZWN0b3IsIGJhc2UpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIF9fY2xvc2VzdEZyb20oZWwpIHtcbiAgICBpZiAoIWVsIHx8IGVsID09PSBnZXREb2N1bWVudCgpIHx8IGVsID09PSBnZXRXaW5kb3coKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGVsLmFzc2lnbmVkU2xvdCkgZWwgPSBlbC5hc3NpZ25lZFNsb3Q7XG4gICAgY29uc3QgZm91bmQgPSBlbC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICBpZiAoIWZvdW5kICYmICFlbC5nZXRSb290Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZCB8fCBfX2Nsb3Nlc3RGcm9tKGVsLmdldFJvb3ROb2RlKCkuaG9zdCk7XG4gIH1cbiAgcmV0dXJuIF9fY2xvc2VzdEZyb20oYmFzZSk7XG59XG5mdW5jdGlvbiBwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZXZlbnQsIHN0YXJ0WCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uO1xuICBjb25zdCBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkO1xuICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uICYmIChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkIHx8IHN0YXJ0WCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpIHtcbiAgICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uID09PSAncHJldmVudCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGlmIChlLnR5cGUgPT09ICdwb2ludGVyZG93bicpIHtcbiAgICBpZiAoZGF0YS5wb2ludGVySWQgIT09IG51bGwgJiYgZGF0YS5wb2ludGVySWQgIT09IGUucG9pbnRlcklkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGEucG9pbnRlcklkID0gZS5wb2ludGVySWQ7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGRhdGEudG91Y2hJZCA9IGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuICB9XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIC8vIGRvbid0IHByb2NlZWQgdG91Y2ggZXZlbnRcbiAgICBwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZSwgZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRml4KCk7XG4gIH1cbiAgbGV0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghZWxlbWVudElzQ2hpbGRPZih0YXJnZXRFbCwgc3dpcGVyLndyYXBwZXJFbCkpIHJldHVybjtcbiAgfVxuICBpZiAoJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgaWYgKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSByZXR1cm47XG4gIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHJldHVybjtcblxuICAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcbiAgY29uc3Qgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgZXZlbnRQYXRoID0gZS5jb21wb3NlZFBhdGggPyBlLmNvbXBvc2VkUGF0aCgpIDogZS5wYXRoO1xuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudFBhdGgpIHtcbiAgICB0YXJnZXRFbCA9IGV2ZW50UGF0aFswXTtcbiAgfVxuICBjb25zdCBub1N3aXBpbmdTZWxlY3RvciA9IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IGAuJHtwYXJhbXMubm9Td2lwaW5nQ2xhc3N9YDtcbiAgY29uc3QgaXNUYXJnZXRTaGFkb3cgPSAhIShlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290KTtcblxuICAvLyB1c2UgY2xvc2VzdEVsZW1lbnQgZm9yIHNoYWRvdyByb290IGVsZW1lbnQgdG8gZ2V0IHRoZSBhY3R1YWwgY2xvc2VzdCBmb3IgbmVzdGVkIHNoYWRvdyByb290IGVsZW1lbnRcbiAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgKGlzVGFyZ2V0U2hhZG93ID8gY2xvc2VzdEVsZW1lbnQobm9Td2lwaW5nU2VsZWN0b3IsIHRhcmdldEVsKSA6IHRhcmdldEVsLmNsb3Nlc3Qobm9Td2lwaW5nU2VsZWN0b3IpKSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoIXRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcikpIHJldHVybjtcbiAgfVxuICB0b3VjaGVzLmN1cnJlbnRYID0gZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUucGFnZVk7XG4gIGNvbnN0IHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIGNvbnN0IHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG5cbiAgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG5cbiAgaWYgKCFwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZSwgc3RhcnRYKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICBpc1RvdWNoZWQ6IHRydWUsXG4gICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgfSk7XG4gIHRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuICBsZXQgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICBpZiAodGFyZ2V0RWwubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG4gICAgaWYgKHRhcmdldEVsLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsICYmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnIHx8IGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiYgIXRhcmdldEVsLm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbiAgY29uc3Qgc2hvdWxkUHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdCAmJiBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgJiYgcGFyYW1zLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDtcbiAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICF0YXJnZXRFbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSAmJiBzd2lwZXIuYW5pbWF0aW5nICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoU3RhcnQoKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBpZiAoZS50eXBlID09PSAncG9pbnRlcm1vdmUnKSB7XG4gICAgaWYgKGRhdGEudG91Y2hJZCAhPT0gbnVsbCkgcmV0dXJuOyAvLyByZXR1cm4gZnJvbSBwb2ludGVyIGlmIHdlIHVzZSB0b3VjaFxuICAgIGNvbnN0IGlkID0gZS5wb2ludGVySWQ7XG4gICAgaWYgKGlkICE9PSBkYXRhLnBvaW50ZXJJZCkgcmV0dXJuO1xuICB9XG4gIGxldCB0YXJnZXRUb3VjaDtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcbiAgICB0YXJnZXRUb3VjaCA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXS5maW5kKHQgPT4gdC5pZGVudGlmaWVyID09PSBkYXRhLnRvdWNoSWQpO1xuICAgIGlmICghdGFyZ2V0VG91Y2ggfHwgdGFyZ2V0VG91Y2guaWRlbnRpZmllciAhPT0gZGF0YS50b3VjaElkKSByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBlO1xuICB9XG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhZ2VYID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gIGNvbnN0IHBhZ2VZID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1RvdWNoTW92ZSkge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnRsICYmIChwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIC1zd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIC1zd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFydGwgJiYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0ICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScpIHtcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBlLnRhcmdldC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgfVxuICB0b3VjaGVzLnByZXZpb3VzWCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIHRvdWNoZXMucHJldmlvdXNZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gIGNvbnN0IGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICBjb25zdCBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChkaWZmWCAqKiAyICsgZGlmZlkgKiogMikgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHRvdWNoQW5nbGU7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRZID09PSB0b3VjaGVzLnN0YXJ0WSB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSB7XG4gICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZID49IDI1KSB7XG4gICAgICAgIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKGRpZmZZKSwgTWF0aC5hYnMoZGlmZlgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGUgOiA5MCAtIHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBkYXRhLnByZXZlbnRUb3VjaE1vdmVGcm9tUG9pbnRlck1vdmUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgaWYgKCFwYXJhbXMuY3NzTW9kZSAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGxldCBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgbGV0IHRvdWNoZXNEaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMucHJldmlvdXNYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMucHJldmlvdXNZO1xuICBpZiAocGFyYW1zLm9uZVdheU1vdmVtZW50KSB7XG4gICAgZGlmZiA9IE1hdGguYWJzKGRpZmYpICogKHJ0bCA/IDEgOiAtMSk7XG4gICAgdG91Y2hlc0RpZmYgPSBNYXRoLmFicyh0b3VjaGVzRGlmZikgKiAocnRsID8gMSA6IC0xKTtcbiAgfVxuICB0b3VjaGVzLmRpZmYgPSBkaWZmO1xuICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICBpZiAocnRsKSB7XG4gICAgZGlmZiA9IC1kaWZmO1xuICAgIHRvdWNoZXNEaWZmID0gLXRvdWNoZXNEaWZmO1xuICB9XG4gIGNvbnN0IHByZXZUb3VjaGVzRGlyZWN0aW9uID0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb247XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbiA9IHRvdWNoZXNEaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgY29uc3QgaXNMb29wID0gc3dpcGVyLnBhcmFtcy5sb29wICYmICFwYXJhbXMuY3NzTW9kZTtcbiAgY29uc3QgYWxsb3dMb29wRml4ID0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBzd2lwZXIuYWxsb3dTbGlkZU5leHQgfHwgc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBzd2lwZXIuYWxsb3dTbGlkZVByZXY7XG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKGlzTG9vcCAmJiBhbGxvd0xvb3BGaXgpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiBzd2lwZXIuc3dpcGVEaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBjb25zdCBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KCd0cmFuc2l0aW9uZW5kJywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBieVN3aXBlclRvdWNoTW92ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTtcbiAgICAvLyBHcmFiIEN1cnNvclxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cbiAgbGV0IGxvb3BGaXhlZDtcbiAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGlmIChwYXJhbXMuX2xvb3BTd2FwUmVzZXQgIT09IGZhbHNlICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSAmJiBwcmV2VG91Y2hlc0RpcmVjdGlvbiAhPT0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gJiYgaXNMb29wICYmIGFsbG93TG9vcEZpeCAmJiBNYXRoLmFicyhkaWZmKSA+PSAxKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b3VjaGVzLCB7XG4gICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgIGN1cnJlbnRZOiBwYWdlWSxcbiAgICAgIHN0YXJ0VHJhbnNsYXRlOiBkYXRhLmN1cnJlbnRUcmFuc2xhdGVcbiAgICB9KTtcbiAgICBkYXRhLmxvb3BTd2FwUmVzZXQgPSB0cnVlO1xuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBkYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICBsZXQgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIGxldCByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuICBpZiAocGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICByZXNpc3RhbmNlUmF0aW8gPSAwO1xuICB9XG4gIGlmIChkaWZmID4gMCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4ICYmICFsb29wRml4ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4ICsgMV0gLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID49IDIgPyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleCArIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKSAtIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuIDogc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICBkaXJlY3Rpb246ICdwcmV2JyxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICBhY3RpdmVTbGlkZUluZGV4OiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEgKyAoLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmKSAqKiByZXNpc3RhbmNlUmF0aW87XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgaWYgKGlzTG9vcCAmJiBhbGxvd0xvb3BGaXggJiYgIWxvb3BGaXhlZCAmJiBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID49IDIgPyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5zbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMV0gKyBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApIDogc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICBkaXJlY3Rpb246ICduZXh0JyxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICBhY3RpdmVTbGlkZUluZGV4OiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBNYXRoLmNlaWwocGFyc2VGbG9hdChwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIHtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgMSAtIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9XG5cbiAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIC8vIFRocmVzaG9sZFxuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIHtcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBwYXJhbXMudGhyZXNob2xkIHx8IGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICBpZiAoIWRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIgfHwgcGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaE1vdmUoKTtcbiAgfVxuICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG4gIC8vIFVwZGF0ZSB0cmFuc2xhdGVcbiAgc3dpcGVyLnNldFRyYW5zbGF0ZShkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBsZXQgdGFyZ2V0VG91Y2g7XG4gIGNvbnN0IGlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCc7XG4gIGlmICghaXNUb3VjaEV2ZW50KSB7XG4gICAgaWYgKGRhdGEudG91Y2hJZCAhPT0gbnVsbCkgcmV0dXJuOyAvLyByZXR1cm4gZnJvbSBwb2ludGVyIGlmIHdlIHVzZSB0b3VjaFxuICAgIGlmIChlLnBvaW50ZXJJZCAhPT0gZGF0YS5wb2ludGVySWQpIHJldHVybjtcbiAgICB0YXJnZXRUb3VjaCA9IGU7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc10uZmluZCh0ID0+IHQuaWRlbnRpZmllciA9PT0gZGF0YS50b3VjaElkKTtcbiAgICBpZiAoIXRhcmdldFRvdWNoIHx8IHRhcmdldFRvdWNoLmlkZW50aWZpZXIgIT09IGRhdGEudG91Y2hJZCkgcmV0dXJuO1xuICB9XG4gIGlmIChbJ3BvaW50ZXJjYW5jZWwnLCAncG9pbnRlcm91dCcsICdwb2ludGVybGVhdmUnLCAnY29udGV4dG1lbnUnXS5pbmNsdWRlcyhlLnR5cGUpKSB7XG4gICAgY29uc3QgcHJvY2VlZCA9IFsncG9pbnRlcmNhbmNlbCcsICdjb250ZXh0bWVudSddLmluY2x1ZGVzKGUudHlwZSkgJiYgKHN3aXBlci5icm93c2VyLmlzU2FmYXJpIHx8IHN3aXBlci5icm93c2VyLmlzV2ViVmlldyk7XG4gICAgaWYgKCFwcm9jZWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGRhdGEucG9pbnRlcklkID0gbnVsbDtcbiAgZGF0YS50b3VjaElkID0gbnVsbDtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSByZXR1cm47XG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuICBkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJldHVybiBHcmFiIEN1cnNvclxuICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuaXNUb3VjaGVkICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgfVxuXG4gIC8vIFRpbWUgZGlmZlxuICBjb25zdCB0b3VjaEVuZFRpbWUgPSBub3coKTtcbiAgY29uc3QgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lO1xuXG4gIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBjb25zdCBwYXRoVHJlZSA9IGUucGF0aCB8fCBlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpO1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUocGF0aFRyZWUgJiYgcGF0aFRyZWVbMF0gfHwgZS50YXJnZXQsIHBhdGhUcmVlKTtcbiAgICBzd2lwZXIuZW1pdCgndGFwIGNsaWNrJywgZSk7XG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuICBkYXRhLmxhc3RDbGlja1RpbWUgPSBub3coKTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICB9KTtcbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwICYmICFkYXRhLmxvb3BTd2FwUmVzZXQgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlICYmICFkYXRhLmxvb3BTd2FwUmVzZXQpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRQb3M7XG4gIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoRW5kKHtcbiAgICAgIGN1cnJlbnRQb3NcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgY29uc3Qgc3dpcGVUb0xhc3QgPSBjdXJyZW50UG9zID49IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkgJiYgIXN3aXBlci5wYXJhbXMubG9vcDtcbiAgbGV0IHN0b3BJbmRleCA9IDA7XG4gIGxldCBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIGNvbnN0IGluY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHN3aXBlVG9MYXN0IHx8IGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSkge1xuICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN3aXBlVG9MYXN0IHx8IGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICB9XG4gIH1cbiAgbGV0IHJld2luZEZpcnN0SW5kZXggPSBudWxsO1xuICBsZXQgcmV3aW5kTGFzdEluZGV4ID0gbnVsbDtcbiAgaWYgKHBhcmFtcy5yZXdpbmQpIHtcbiAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICByZXdpbmRMYXN0SW5kZXggPSBwYXJhbXMudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCAtIDEgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgIHJld2luZEZpcnN0SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuICAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuICBjb25zdCByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgY29uc3QgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBpZiAodGltZURpZmYgPiBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICBpZiAocmF0aW8gPj0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgc3dpcGVyLnNsaWRlVG8ocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNFbmQgPyByZXdpbmRGaXJzdEluZGV4IDogc3RvcEluZGV4ICsgaW5jcmVtZW50KTtlbHNlIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAocmV3aW5kTGFzdEluZGV4ICE9PSBudWxsICYmIHJhdGlvIDwgMCAmJiBNYXRoLmFicyhyYXRpbykgPiBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcbiAgICBpZiAoIWlzTmF2QnV0dG9uVGFyZ2V0KSB7XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8ocmV3aW5kRmlyc3RJbmRleCAhPT0gbnVsbCA/IHJld2luZEZpcnN0SW5kZXggOiBzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCAhPT0gbnVsbCA/IHJld2luZExhc3RJbmRleCA6IHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBlbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoZWwgJiYgZWwub2Zmc2V0V2lkdGggPT09IDApIHJldHVybjtcblxuICAvLyBCcmVha3BvaW50c1xuICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgfVxuXG4gIC8vIFNhdmUgbG9ja3NcbiAgY29uc3Qge1xuICAgIGFsbG93U2xpZGVOZXh0LFxuICAgIGFsbG93U2xpZGVQcmV2LFxuICAgIHNuYXBHcmlkXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gIC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgY29uc3QgaXNWaXJ0dWFsTG9vcCA9IGlzVmlydHVhbCAmJiBwYXJhbXMubG9vcDtcbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgIWlzVmlydHVhbExvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmICFpc1ZpcnR1YWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChzd2lwZXIucmVhbEluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnJlc2l6ZVRpbWVvdXQpO1xuICAgIHN3aXBlci5hdXRvcGxheS5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnJlc3VtZSgpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cbiAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24gJiYgc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckVsLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAwKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9IChzd2lwZXIudHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gc3dpcGVyLnByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gb25Mb2FkKGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgcHJvY2Vzc0xhenlQcmVsb2FkZXIoc3dpcGVyLCBlLnRhcmdldCk7XG4gIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgIXN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHJldHVybjtcbiAgfVxuICBzd2lwZXIudXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRvY3VtZW50VG91Y2hIYW5kbGVyUHJvY2VlZGVkKSByZXR1cm47XG4gIHN3aXBlci5kb2N1bWVudFRvdWNoSGFuZGxlclByb2NlZWRlZCA9IHRydWU7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICBzd2lwZXIuZWwuc3R5bGUudG91Y2hBY3Rpb24gPSAnYXV0byc7XG4gIH1cbn1cblxuY29uc3QgZXZlbnRzID0gKHN3aXBlciwgbWV0aG9kKSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBlbCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZGV2aWNlXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG4gIGNvbnN0IGRvbU1ldGhvZCA9IG1ldGhvZCA9PT0gJ29uJyA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgY29uc3Qgc3dpcGVyTWV0aG9kID0gbWV0aG9kO1xuICBpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHJldHVybjtcblxuICAvLyBUb3VjaCBFdmVudHNcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hzdGFydCcsIHN3aXBlci5vbkRvY3VtZW50VG91Y2hTdGFydCwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGVsW2RvbU1ldGhvZF0oJ3RvdWNoc3RhcnQnLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2VcbiAgfSk7XG4gIGVsW2RvbU1ldGhvZF0oJ3BvaW50ZXJkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaG1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIHtcbiAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICBjYXB0dXJlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVybW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNoZW5kJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVydXAnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJjYW5jZWwnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNoY2FuY2VsJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVyb3V0Jywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVybGVhdmUnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ2NvbnRleHRtZW51Jywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgZWxbZG9tTWV0aG9kXSgnY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW2RvbU1ldGhvZF0oJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH1cblxuICAvLyBSZXNpemUgaGFuZGxlclxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyW3N3aXBlck1ldGhvZF0oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXSgnb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBJbWFnZXMgbG9hZGVyXG4gIGVsW2RvbU1ldGhvZF0oJ2xvYWQnLCBzd2lwZXIub25Mb2FkLCB7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9KTtcbn07XG5mdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uRG9jdW1lbnRUb3VjaFN0YXJ0ID0gb25Eb2N1bWVudFRvdWNoU3RhcnQuYmluZChzd2lwZXIpO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBvblNjcm9sbC5iaW5kKHN3aXBlcik7XG4gIH1cbiAgc3dpcGVyLm9uQ2xpY2sgPSBvbkNsaWNrLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uTG9hZCA9IG9uTG9hZC5iaW5kKHN3aXBlcik7XG4gIGV2ZW50cyhzd2lwZXIsICdvbicpO1xufVxuZnVuY3Rpb24gZGV0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBldmVudHMoc3dpcGVyLCAnb2ZmJyk7XG59XG52YXIgZXZlbnRzJDEgPSB7XG4gIGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzXG59O1xuXG5jb25zdCBpc0dyaWRFbmFibGVkID0gKHN3aXBlciwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbn07XG5mdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcmVhbEluZGV4LFxuICAgIGluaXRpYWxpemVkLFxuICAgIHBhcmFtcyxcbiAgICBlbFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcblxuICAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93L2NvbnRhaW5lciB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcbiAgY29uc3QgYnJlYWtwb2ludHNCYXNlID0gcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA9PT0gJ3dpbmRvdycgfHwgIXBhcmFtcy5icmVha3BvaW50c0Jhc2UgPyBwYXJhbXMuYnJlYWtwb2ludHNCYXNlIDogJ2NvbnRhaW5lcic7XG4gIGNvbnN0IGJyZWFrcG9pbnRDb250YWluZXIgPSBbJ3dpbmRvdycsICdjb250YWluZXInXS5pbmNsdWRlcyhwYXJhbXMuYnJlYWtwb2ludHNCYXNlKSB8fCAhcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA/IHN3aXBlci5lbCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLmJyZWFrcG9pbnRzQmFzZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYnJlYWtwb2ludHNCYXNlLCBicmVha3BvaW50Q29udGFpbmVyKTtcbiAgaWYgKCFicmVha3BvaW50IHx8IHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludCkgcmV0dXJuO1xuICBjb25zdCBicmVha3BvaW50T25seVBhcmFtcyA9IGJyZWFrcG9pbnQgaW4gYnJlYWtwb2ludHMgPyBicmVha3BvaW50c1ticmVha3BvaW50XSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgYnJlYWtwb2ludFBhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zIHx8IHN3aXBlci5vcmlnaW5hbFBhcmFtcztcbiAgY29uc3Qgd2FzTXVsdGlSb3cgPSBpc0dyaWRFbmFibGVkKHN3aXBlciwgcGFyYW1zKTtcbiAgY29uc3QgaXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBicmVha3BvaW50UGFyYW1zKTtcbiAgY29uc3Qgd2FzR3JhYkN1cnNvciA9IHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcjtcbiAgY29uc3QgaXNHcmFiQ3Vyc29yID0gYnJlYWtwb2ludFBhcmFtcy5ncmFiQ3Vyc29yO1xuICBjb25zdCB3YXNFbmFibGVkID0gcGFyYW1zLmVuYWJsZWQ7XG4gIGlmICh3YXNNdWx0aVJvdyAmJiAhaXNNdWx0aVJvdykge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZGAsIGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQtY29sdW1uYCk7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWRgKTtcbiAgICBpZiAoYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgJiYgYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nIHx8ICFicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJykge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfVxuICBpZiAod2FzR3JhYkN1cnNvciAmJiAhaXNHcmFiQ3Vyc29yKSB7XG4gICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICB9IGVsc2UgaWYgKCF3YXNHcmFiQ3Vyc29yICYmIGlzR3JhYkN1cnNvcikge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gIH1cblxuICAvLyBUb2dnbGUgbmF2aWdhdGlvbiwgcGFnaW5hdGlvbiwgc2Nyb2xsYmFyXG4gIFsnbmF2aWdhdGlvbicsICdwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKHR5cGVvZiBicmVha3BvaW50UGFyYW1zW3Byb3BdID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGNvbnN0IHdhc01vZHVsZUVuYWJsZWQgPSBwYXJhbXNbcHJvcF0gJiYgcGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG4gICAgY29uc3QgaXNNb2R1bGVFbmFibGVkID0gYnJlYWtwb2ludFBhcmFtc1twcm9wXSAmJiBicmVha3BvaW50UGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG4gICAgaWYgKHdhc01vZHVsZUVuYWJsZWQgJiYgIWlzTW9kdWxlRW5hYmxlZCkge1xuICAgICAgc3dpcGVyW3Byb3BdLmRpc2FibGUoKTtcbiAgICB9XG4gICAgaWYgKCF3YXNNb2R1bGVFbmFibGVkICYmIGlzTW9kdWxlRW5hYmxlZCkge1xuICAgICAgc3dpcGVyW3Byb3BdLmVuYWJsZSgpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgY29uc3QgbmVlZHNSZUxvb3AgPSBwYXJhbXMubG9vcCAmJiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBwYXJhbXMuc2xpZGVzUGVyVmlldyB8fCBkaXJlY3Rpb25DaGFuZ2VkKTtcbiAgY29uc3Qgd2FzTG9vcCA9IHBhcmFtcy5sb29wO1xuICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCAmJiBpbml0aWFsaXplZCkge1xuICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgfVxuICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGNvbnN0IGlzRW5hYmxlZCA9IHN3aXBlci5wYXJhbXMuZW5hYmxlZDtcbiAgY29uc3QgaGFzTG9vcCA9IHN3aXBlci5wYXJhbXMubG9vcDtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICB9KTtcbiAgaWYgKHdhc0VuYWJsZWQgJiYgIWlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5kaXNhYmxlKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0VuYWJsZWQgJiYgaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmVuYWJsZSgpO1xuICB9XG4gIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gIHN3aXBlci5lbWl0KCdfYmVmb3JlQnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICBpZiAobmVlZHNSZUxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUocmVhbEluZGV4KTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2UgaWYgKCF3YXNMb29wICYmIGhhc0xvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKHJlYWxJbmRleCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIGlmICh3YXNMb29wICYmICFoYXNMb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYmFzZSwgY29udGFpbmVyRWwpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnd2luZG93JztcbiAgfVxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgbGV0IGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBiYXNlID09PSAnd2luZG93JyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckVsLmNsaWVudEhlaWdodDtcbiAgY29uc3QgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChwb2ludCA9PiB7XG4gICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gJ3N0cmluZycgJiYgcG9pbnQuaW5kZXhPZignQCcpID09PSAwKSB7XG4gICAgICBjb25zdCBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudEhlaWdodCAqIG1pblJhdGlvO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHBvaW50XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEudmFsdWUsIDEwKSAtIHBhcnNlSW50KGIudmFsdWUsIDEwKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9pbnQsXG4gICAgICB2YWx1ZVxuICAgIH0gPSBwb2ludHNbaV07XG4gICAgaWYgKGJhc2UgPT09ICd3aW5kb3cnKSB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7dmFsdWV9cHgpYCkubWF0Y2hlcykge1xuICAgICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8PSBjb250YWluZXJFbC5jbGllbnRXaWR0aCkge1xuICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn1cblxudmFyIGJyZWFrcG9pbnRzID0ge1xuICBzZXRCcmVha3BvaW50LFxuICBnZXRCcmVha3BvaW50XG59O1xuXG5mdW5jdGlvbiBwcmVwYXJlQ2xhc3NlcyhlbnRyaWVzLCBwcmVmaXgpIHtcbiAgY29uc3QgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChjbGFzc05hbWVzID0+IHtcbiAgICAgICAgaWYgKGl0ZW1bY2xhc3NOYW1lc10pIHtcbiAgICAgICAgICByZXN1bHRDbGFzc2VzLnB1c2gocHJlZml4ICsgY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHRDbGFzc2VzLnB1c2gocHJlZml4ICsgaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdENsYXNzZXM7XG59XG5mdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lcyxcbiAgICBwYXJhbXMsXG4gICAgcnRsLFxuICAgIGVsLFxuICAgIGRldmljZVxuICB9ID0gc3dpcGVyO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3Qgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdmcmVlLW1vZGUnOiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnZ3JpZCc6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxXG4gIH0sIHtcbiAgICAnZ3JpZC1jb2x1bW4nOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH0sIHtcbiAgICAnY2VudGVyZWQnOiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNcbiAgfSwge1xuICAgICd3YXRjaC1wcm9ncmVzcyc6IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaCguLi5zdWZmaXhlcyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgZWwsXG4gICAgY2xhc3NOYW1lc1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHJldHVybjtcbiAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59XG5cbnZhciBjbGFzc2VzID0ge1xuICBhZGRDbGFzc2VzLFxuICByZW1vdmVDbGFzc2VzXG59O1xuXG5mdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgaXNMb2NrZWQ6IHdhc0xvY2tlZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIHNsaWRlc09mZnNldEJlZm9yZVxuICB9ID0gcGFyYW1zO1xuICBpZiAoc2xpZGVzT2Zmc2V0QmVmb3JlKSB7XG4gICAgY29uc3QgbGFzdFNsaWRlSW5kZXggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbGFzdFNsaWRlUmlnaHRFZGdlID0gc3dpcGVyLnNsaWRlc0dyaWRbbGFzdFNsaWRlSW5kZXhdICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzbGlkZXNPZmZzZXRCZWZvcmUgKiAyO1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zaXplID4gbGFzdFNsaWRlUmlnaHRFZGdlO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggPT09IDE7XG4gIH1cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICB9XG4gIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcbiAgfVxufVxudmFyIGNoZWNrT3ZlcmZsb3ckMSA9IHtcbiAgY2hlY2tPdmVyZmxvd1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBpbml0OiB0cnVlLFxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgb25lV2F5TW92ZW1lbnQ6IGZhbHNlLFxuICBzd2lwZXJFbGVtZW50Tm9kZU5hbWU6ICdTV0lQRVItQ09OVEFJTkVSJyxcbiAgdG91Y2hFdmVudHNUYXJnZXQ6ICd3cmFwcGVyJyxcbiAgaW5pdGlhbFNsaWRlOiAwLFxuICBzcGVlZDogMzAwLFxuICBjc3NNb2RlOiBmYWxzZSxcbiAgdXBkYXRlT25XaW5kb3dSZXNpemU6IHRydWUsXG4gIHJlc2l6ZU9ic2VydmVyOiB0cnVlLFxuICBuZXN0ZWQ6IGZhbHNlLFxuICBjcmVhdGVFbGVtZW50czogZmFsc2UsXG4gIGV2ZW50c1ByZWZpeDogJ3N3aXBlcicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGZvY3VzYWJsZUVsZW1lbnRzOiAnaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgYnV0dG9uLCB2aWRlbywgbGFiZWwnLFxuICAvLyBPdmVycmlkZXNcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgLy9cbiAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiBmYWxzZSxcbiAgLy8gc3NyXG4gIHVzZXJBZ2VudDogbnVsbCxcbiAgdXJsOiBudWxsLFxuICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCkuXG4gIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gIGVkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gIC8vIEF1dG9oZWlnaHRcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcbiAgLy8gVmlydHVhbCBUcmFuc2xhdGVcbiAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gIC8vIEVmZmVjdHNcbiAgZWZmZWN0OiAnc2xpZGUnLFxuICAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNCYXNlOiAnd2luZG93JyxcbiAgLy8gU2xpZGVzIGdyaWRcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICBzbGlkZXNQZXJHcm91cEF1dG86IGZhbHNlLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBmYWxzZSxcbiAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAvLyBpbiBweFxuICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgLy8gaW4gcHhcbiAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogNSxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBsb29wXG4gIGxvb3A6IGZhbHNlLFxuICBsb29wQWRkQmxhbmtTbGlkZXM6IHRydWUsXG4gIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICBsb29wUHJldmVudHNTbGlkaW5nOiB0cnVlLFxuICAvLyByZXdpbmRcbiAgcmV3aW5kOiBmYWxzZSxcbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLFxuICAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcbiAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgbWF4QmFja2ZhY2VIaWRkZW5TbGlkZXM6IDEwLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLScsXG4gIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWJsYW5rJyxcbiAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgc2xpZGVGdWxseVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS1mdWxseS12aXNpYmxlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gIGxhenlQcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcicsXG4gIGxhenlQcmVsb2FkUHJldk5leHQ6IDAsXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gIC8vIEludGVybmFsc1xuICBfZW1pdENsYXNzZXM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmRQYXJhbXMob2JqKSB7XG4gICAgaWYgKG9iaiA9PT0gdm9pZCAwKSB7XG4gICAgICBvYmogPSB7fTtcbiAgICB9XG4gICAgY29uc3QgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgICBjb25zdCBtb2R1bGVQYXJhbXMgPSBvYmpbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZVBhcmFtTmFtZSA9PT0gJ25hdmlnYXRpb24nICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgJiYgIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLnByZXZFbCAmJiAhcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0ubmV4dEVsKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5hdXRvID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFsncGFnaW5hdGlvbicsICdzY3JvbGxiYXInXS5pbmRleE9mKG1vZHVsZVBhcmFtTmFtZSkgPj0gMCAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkICYmICFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbCkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uYXV0byA9IHRydWU7XG4gICAgfVxuICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHtcbiAgICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgfTtcbn1cblxuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiBcIm9mZlwiICovXG5jb25zdCBwcm90b3R5cGVzID0ge1xuICBldmVudHNFbWl0dGVyLFxuICB1cGRhdGUsXG4gIHRyYW5zbGF0ZSxcbiAgdHJhbnNpdGlvbixcbiAgc2xpZGUsXG4gIGxvb3AsXG4gIGdyYWJDdXJzb3IsXG4gIGV2ZW50czogZXZlbnRzJDEsXG4gIGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93JDEsXG4gIGNsYXNzZXNcbn07XG5jb25zdCBleHRlbmRlZERlZmF1bHRzID0ge307XG5jbGFzcyBTd2lwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHBhcmFtcztcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbZWwsIHBhcmFtc10gPSBhcmdzO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKHBhcmFtcy5lbCAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3dpcGVycyA9IFtdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpLmZvckVhY2goY29udGFpbmVyRWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH1cblxuICAgIC8vIFN3aXBlciBJbnN0YW5jZVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLl9fc3dpcGVyX18gPSB0cnVlO1xuICAgIHN3aXBlci5zdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICAgIHN3aXBlci5kZXZpY2UgPSBnZXREZXZpY2Uoe1xuICAgICAgdXNlckFnZW50OiBwYXJhbXMudXNlckFnZW50XG4gICAgfSk7XG4gICAgc3dpcGVyLmJyb3dzZXIgPSBnZXRCcm93c2VyKCk7XG4gICAgc3dpcGVyLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgIHN3aXBlci5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICBzd2lwZXIubW9kdWxlcyA9IFsuLi5zd2lwZXIuX19tb2R1bGVzX19dO1xuICAgIGlmIChwYXJhbXMubW9kdWxlcyAmJiBBcnJheS5pc0FycmF5KHBhcmFtcy5tb2R1bGVzKSkge1xuICAgICAgc3dpcGVyLm1vZHVsZXMucHVzaCguLi5wYXJhbXMubW9kdWxlcyk7XG4gICAgfVxuICAgIGNvbnN0IGFsbE1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICBzd2lwZXIubW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBtb2Qoe1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHN3aXBlcixcbiAgICAgICAgZXh0ZW5kUGFyYW1zOiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSxcbiAgICAgICAgb246IHN3aXBlci5vbi5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uY2U6IHN3aXBlci5vbmNlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb2ZmOiBzd2lwZXIub2ZmLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZW1pdDogc3dpcGVyLmVtaXQuYmluZChzd2lwZXIpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG4gICAgY29uc3Qgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgYWxsTW9kdWxlc1BhcmFtcyk7XG5cbiAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAgc3dpcGVyLnBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHN3aXBlci5vbihldmVudE5hbWUsIHN3aXBlci5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbkFueSkge1xuICAgICAgc3dpcGVyLm9uQW55KHN3aXBlci5wYXJhbXMub25BbnkpO1xuICAgIH1cblxuICAgIC8vIEV4dGVuZCBTd2lwZXJcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZW5hYmxlZDogc3dpcGVyLnBhcmFtcy5lbmFibGVkLFxuICAgICAgZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiBbXSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgfSxcbiAgICAgIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIH0sXG4gICAgICAvLyBJbmRleGVzXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHJlYWxJbmRleDogMCxcbiAgICAgIC8vXG4gICAgICBpc0JlZ2lubmluZzogdHJ1ZSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCkge1xuICAgICAgICAvLyBSZXR1cm5zIDAgdW5sZXNzIGB0cmFuc2xhdGVgIGlzID4gMioqMjNcbiAgICAgICAgLy8gU2hvdWxkIGJlIHN1YnRyYWN0ZWQgZnJvbSBjc3MgdmFsdWVzIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmModGhpcy50cmFuc2xhdGUgLyAyICoqIDIzKSAqIDIgKiogMjM7XG4gICAgICB9LFxuICAgICAgLy8gTG9ja3NcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAvLyBUb3VjaCBFdmVudHNcbiAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgZm9jdXNhYmxlRWxlbWVudHM6IHN3aXBlci5wYXJhbXMuZm9jdXNhYmxlRWxlbWVudHMsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiAwLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgICBwb2ludGVySWQ6IG51bGwsXG4gICAgICAgIHRvdWNoSWQ6IG51bGxcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc3dpcGVyJyk7XG5cbiAgICAvLyBJbml0XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYXBwIGluc3RhbmNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cbiAgZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAodGhpcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH1cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH1cbiAgZ2V0U2xpZGVJbmRleChzbGlkZUVsKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzRWwsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgIGNvbnN0IGZpcnN0U2xpZGVJbmRleCA9IGVsZW1lbnRJbmRleChzbGlkZXNbMF0pO1xuICAgIHJldHVybiBlbGVtZW50SW5kZXgoc2xpZGVFbCkgLSBmaXJzdFNsaWRlSW5kZXg7XG4gIH1cbiAgZ2V0U2xpZGVJbmRleEJ5RGF0YShpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmdldFNsaWRlSW5kZXgodGhpcy5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gaW5kZXgpKTtcbiAgfVxuICBnZXRTbGlkZUluZGV4V2hlbkdyaWQoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMucGFyYW1zLmdyaWQgJiYgdGhpcy5wYXJhbXMuZ3JpZC5yb3dzID4gMSkge1xuICAgICAgaWYgKHRoaXMucGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5wYXJhbXMuZ3JpZC5yb3dzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMuZ3JpZC5maWxsID09PSAncm93Jykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICUgTWF0aC5jZWlsKHRoaXMuc2xpZGVzLmxlbmd0aCAvIHRoaXMucGFyYW1zLmdyaWQucm93cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICByZWNhbGNTbGlkZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNFbCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgc3dpcGVyLnNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIH1cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSB0cnVlO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdlbmFibGUnKTtcbiAgfVxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnZGlzYWJsZScpO1xuICB9XG4gIHNldFByb2dyZXNzKHByb2dyZXNzLCBzcGVlZCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xuICAgIGNvbnN0IG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBjb25zdCBtYXggPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IChtYXggLSBtaW4pICogcHJvZ3Jlc3MgKyBtaW47XG4gICAgc3dpcGVyLnRyYW5zbGF0ZVRvKGN1cnJlbnQsIHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3BlZWQpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cbiAgZW1pdENvbnRhaW5lckNsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCBjbHMgPSBzd2lwZXIuZWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlcicpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgPT09IDA7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19jb250YWluZXJDbGFzc2VzJywgY2xzLmpvaW4oJyAnKSk7XG4gIH1cbiAgZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1zbGlkZScpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgPT09IDA7XG4gICAgfSkuam9pbignICcpO1xuICB9XG4gIGVtaXRTbGlkZXNDbGFzc2VzKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBzd2lwZXIuZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgc2xpZGVFbCxcbiAgICAgICAgY2xhc3NOYW1lc1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3MnLCBzbGlkZUVsLCBjbGFzc05hbWVzKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3NlcycsIHVwZGF0ZXMpO1xuICB9XG4gIHNsaWRlc1BlclZpZXdEeW5hbWljKHZpZXcsIGV4YWN0KSB7XG4gICAgaWYgKHZpZXcgPT09IHZvaWQgMCkge1xuICAgICAgdmlldyA9ICdjdXJyZW50JztcbiAgICB9XG4gICAgaWYgKGV4YWN0ID09PSB2b2lkIDApIHtcbiAgICAgIGV4YWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc1NpemVzR3JpZCxcbiAgICAgIHNpemU6IHN3aXBlclNpemUsXG4gICAgICBhY3RpdmVJbmRleFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IHNwdiA9IDE7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ251bWJlcicpIHJldHVybiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBsZXQgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XSA/IE1hdGguY2VpbChzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZSkgOiAwO1xuICAgICAgbGV0IGJyZWFrTG9vcDtcbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IE1hdGguY2VpbChzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplKTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAodmlldyA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IGV4YWN0ID8gc2xpZGVzR3JpZFtpXSArIHNsaWRlc1NpemVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSA6IHNsaWRlc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemU7XG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHByZXZpb3VzXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSAtIHNsaWRlc0dyaWRbaV0gPCBzd2lwZXJTaXplO1xuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcHY7XG4gIH1cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuICAgIFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyldLmZvckVhY2goaW1hZ2VFbCA9PiB7XG4gICAgICBpZiAoaW1hZ2VFbC5jb21wbGV0ZSkge1xuICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGltYWdlRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICBsZXQgdHJhbnNsYXRlZDtcbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcyA6IHN3aXBlci5zbGlkZXM7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG4gIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUpIHtcbiAgICBpZiAobmVlZFVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2N1cnJlbnREaXJlY3Rpb259YCk7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7bmV3RGlyZWN0aW9ufWApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5ydGwgJiYgZGlyZWN0aW9uID09PSAncnRsJyB8fCAhc3dpcGVyLnJ0bCAmJiBkaXJlY3Rpb24gPT09ICdsdHInKSByZXR1cm47XG4gICAgc3dpcGVyLnJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gICAgc3dpcGVyLnJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgc3dpcGVyLnJ0bDtcbiAgICBpZiAoc3dpcGVyLnJ0bCkge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfXJ0bGApO1xuICAgICAgc3dpcGVyLmVsLmRpciA9ICdydGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9cnRsYCk7XG4gICAgICBzd2lwZXIuZWwuZGlyID0gJ2x0cic7XG4gICAgfVxuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLm1vdW50ZWQpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gRmluZCBlbFxuICAgIGxldCBlbCA9IGVsZW1lbnQgfHwgc3dpcGVyLnBhcmFtcy5lbDtcbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICB9XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5ob3N0ICYmIGVsLnBhcmVudE5vZGUuaG9zdC5ub2RlTmFtZSA9PT0gc3dpcGVyLnBhcmFtcy5zd2lwZXJFbGVtZW50Tm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgc3dpcGVyLmlzRWxlbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGdldFdyYXBwZXJTZWxlY3RvciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBgLiR7KHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzIHx8ICcnKS50cmltKCkuc3BsaXQoJyAnKS5qb2luKCcuJyl9YDtcbiAgICB9O1xuICAgIGNvbnN0IGdldFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKTtcbiAgICAgICAgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50Q2hpbGRyZW4oZWwsIGdldFdyYXBwZXJTZWxlY3RvcigpKVswXTtcbiAgICB9O1xuICAgIC8vIEZpbmQgV3JhcHBlclxuICAgIGxldCB3cmFwcGVyRWwgPSBnZXRXcmFwcGVyKCk7XG4gICAgaWYgKCF3cmFwcGVyRWwgJiYgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgICAgd3JhcHBlckVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgICAgZWwuYXBwZW5kKHdyYXBwZXJFbCk7XG4gICAgICBlbGVtZW50Q2hpbGRyZW4oZWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgd3JhcHBlckVsLmFwcGVuZChzbGlkZUVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZWwsXG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNFbDogc3dpcGVyLmlzRWxlbWVudCAmJiAhZWwucGFyZW50Tm9kZS5ob3N0LnNsaWRlU2xvdHMgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiB3cmFwcGVyRWwsXG4gICAgICBob3N0RWw6IHN3aXBlci5pc0VsZW1lbnQgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiBlbCxcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAvLyBSVExcbiAgICAgIHJ0bDogZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICB3cm9uZ1JUTDogZWxlbWVudFN0eWxlKHdyYXBwZXJFbCwgJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGluaXQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybiBzd2lwZXI7XG4gICAgY29uc3QgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7XG5cbiAgICAvLyBTZXQgYnJlYWtwb2ludFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBDbGFzc2VzXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTtcblxuICAgIC8vIFVwZGF0ZSBzaXplXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcblxuICAgIC8vIFVwZGF0ZSBzbGlkZXNcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgR3JhYiBDdXJzb3JcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxvb3BcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7XG4gICAgY29uc3QgbGF6eUVsZW1lbnRzID0gWy4uLnN3aXBlci5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKV07XG4gICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGxhenlFbGVtZW50cy5wdXNoKC4uLnN3aXBlci5ob3N0RWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJykpO1xuICAgIH1cbiAgICBsYXp5RWxlbWVudHMuZm9yRWFjaChpbWFnZUVsID0+IHtcbiAgICAgIGlmIChpbWFnZUVsLmNvbXBsZXRlKSB7XG4gICAgICAgIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgaW1hZ2VFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuXG4gICAgLy8gSW5pdCBGbGFnXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG5cbiAgICAvLyBFbWl0XG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBkZXN0cm95KGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjbGVhblN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICBjbGVhblN0eWxlcyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgZWwsXG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7XG5cbiAgICAvLyBJbml0IEZsYWdcbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIC8vIERldGFjaCBldmVudHNcbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7XG5cbiAgICAvLyBEZXN0cm95IGxvb3BcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgaWYgKGVsICYmIHR5cGVvZiBlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgaWYgKHdyYXBwZXJFbCkge1xuICAgICAgICB3cmFwcGVyRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICAgIHNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUZ1bGx5VmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcywgcGFyYW1zLnNsaWRlTmV4dENsYXNzLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgICAgICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgIC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoc3dpcGVyLmVsICYmIHR5cGVvZiBzd2lwZXIuZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXBlci5lbC5zd2lwZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZGVsZXRlUHJvcHMoc3dpcGVyKTtcbiAgICB9XG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gICAgZXh0ZW5kKGV4dGVuZGVkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGV4dGVuZGVkRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIGV4dGVuZGVkRGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIGluc3RhbGxNb2R1bGUobW9kKSB7XG4gICAgaWYgKCFTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fKSBTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fID0gW107XG4gICAgY29uc3QgbW9kdWxlcyA9IFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX187XG4gICAgaWYgKHR5cGVvZiBtb2QgPT09ICdmdW5jdGlvbicgJiYgbW9kdWxlcy5pbmRleE9mKG1vZCkgPCAwKSB7XG4gICAgICBtb2R1bGVzLnB1c2gobW9kKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2R1bGUpKSB7XG4gICAgICBtb2R1bGUuZm9yRWFjaChtID0+IFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pKTtcbiAgICAgIHJldHVybiBTd2lwZXI7XG4gICAgfVxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfVxufVxuT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChwcm90b3R5cGVHcm91cCA9PiB7XG4gIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKHByb3RvTWV0aG9kID0+IHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW1Jlc2l6ZSwgT2JzZXJ2ZXJdKTtcblxuZXhwb3J0IHsgU3dpcGVyIGFzIFMsIGRlZmF1bHRzIGFzIGQgfTtcbiIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IHB1c2hEYXRhLCB3YWl0RWwsIHZpc2liaWxpdHlPZlRpbWUgfSBmcm9tICdjcnNkZXZ0b29sJztcbmltcG9ydCBwbGF5SWNvbiBmcm9tICcuLi9pY29ucy9yZWVscy1wbGF5LnN2Zz9yYXcnO1xuaW1wb3J0IGFycm93SWNvbiBmcm9tICcuLi9pY29ucy9yZWVscy1hcnJvdy5zdmc/cmF3JztcbmltcG9ydCB7IGlubGluZVN2ZyB9IGZyb20gJy4uL3N2Zyc7XG5cbmNvbnN0IERJUiA9ICdodHRwczovL2NvbnZlcnNpb25yYXRlLXN0b3JlLmdpdGh1Yi5pby9hLWJfaW1hZ2VzL3BldGFsc2FuZGtlZXBzYWtlcy9yZWVsc192Mic7XG4vKiogVGhlIHRocmVlIHJlZWxzLCBpbiB0aGUgb3JkZXIgdGhlIHByZXZpb3VzIHRlc3Qgc2V0dGxlZCBvbi4gKi9cbmxldCBPUkRFUiA9IFsxLCAyLCAzLCA0XTtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gIC8vIFRoZSBtb2JpbGUgdGVzdCBoYWQgdGhlIHJlZWxzIGluIGEgZGlmZmVyZW50IG9yZGVyLCBzbyB0aGUgYW5hbHl0aWNzIG1hdGNoIHRoYXQuXG4gIE9SREVSID0gWzIsIDMsIDQsIDFdO1xufVxuY29uc3QgQ09VTlQgPSBPUkRFUi5sZW5ndGg7XG4vKipcbiAqIFN3aXBlcidzIGxvb3AgbmVlZHMgbW9yZSBzbGlkZXMgdGhhbiBmaXQgb24gc2NyZWVuIHRvIGhhdmUgc29tZXRoaW5nIHRvIHJvdGF0ZSBpbnRvXG4gKiBwbGFjZSwgc28gdGhlIHN0cmlwIHJlcGVhdHMgdGhlIHJlZWxzIHVwIHRvIGEgd2hvbGUgbnVtYmVyIG9mIHBhc3NlcyBhdCBsZWFzdCBuaW5lXG4gKiBzbGlkZXMgbG9uZy4gTG9vcCBtb2RlIHRoZW4gbW92ZXMgdGhvc2Ugbm9kZXMgYXJvdW5kIHRoZSB3cmFwcGVyIGFzIHlvdSBzY3JvbGwsIHdoaWNoXG4gKiBpcyB3aHkgZXZlcnkgbG9va3VwIGJlbG93IGdvZXMgdGhyb3VnaCB0aGUgRE9NIHJhdGhlciB0aGFuIGEgcmVtZW1iZXJlZCBpbmRleC5cbiAqL1xuY29uc3QgU0xJREVTID0gTWF0aC5tYXgoQ09VTlQsIE1hdGguY2VpbCg5IC8gQ09VTlQpICogQ09VTlQpO1xuXG5jb25zdCBFWFBBTkRfSUNPTiA9XG4gICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPicgK1xuICAnPHBhdGggZD1cIk05IDRINHY1TTIwIDlWNGgtNU0xNSAyMGg1di01TTQgMTV2NWg1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgJyArXG4gICdzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPicgK1xuICAnPC9zdmc+JztcblxuY29uc3QgQ0xPU0VfSUNPTiA9XG4gICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4nICtcbiAgJzxwYXRoIGQ9XCJNMSAxIDEzIDEzTTEzIDEgMSAxM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIC8+JyArXG4gICc8L3N2Zz4nO1xuXG5jb25zdCBDSEVWUk9OX0lDT04gPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI4IDQ5XCIgZmlsbD1cIm5vbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4nICtcbiAgJzxwYXRoIGQ9XCJNMjUuODMgMS40MSAyLjgzIDI0LjQxbDIzIDIzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIGZpbGw9XCJub25lXCIgLz4nICtcbiAgJzwvc3ZnPic7XG5cbi8qKiBUaGUgSlNYIGZhY3RvcnkgY2FsbHMgY3JlYXRlRWxlbWVudCwgd2hpY2ggY2Fubm90IGJ1aWxkIG5hbWVzcGFjZWQgU1ZHIOKAlCBwYXJzZSBpdCBpbnN0ZWFkLiAqL1xuY29uc3QgSWNvbiA9IChzdmc6IHN0cmluZywgY2xzOiBzdHJpbmcsIG5hbWVzcGFjZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbC5jbGFzc05hbWUgPSBjbHM7XG4gIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBlbC5pbm5lckhUTUwgPSBuYW1lc3BhY2UgPyBpbmxpbmVTdmcoc3ZnKSA6IHN2ZztcbiAgcmV0dXJuIGVsO1xufTtcblxuLyoqXG4gKiBSZWVscyB3ZSBzdGFydGVkIG9yIHN0b3BwZWQgb3Vyc2VsdmVzIOKAlCB3aGVuIHRoZSBzdHJpcCBzY3JvbGxzLCB3aGVuIGEgc2libGluZyB0YWtlc1xuICogb3Zlciwgd2hlbiB0aGUgY2FydCBvcGVucy4gVGhlIGBwbGF5YC9gcGF1c2VgIGV2ZW50cyB0aGV5IHJhaXNlIGFyZSBpbmRpc3Rpbmd1aXNoYWJsZVxuICogZnJvbSBhIHJlYWwgdGFwIG9uIHRoZSBuYXRpdmUgY29udHJvbHMsIHNvIHdpdGhvdXQgdGhpcyBzZXQgZXZlcnkgaG91c2VrZWVwaW5nIHBhdXNlXG4gKiB3b3VsZCByZXBvcnQgaXRzZWxmIGFzIHRoZSB2aXNpdG9yIHBhdXNpbmcgdGhlIHZpZGVvLlxuICovXG5jb25zdCBwcm9ncmFtbWF0aWMgPSBuZXcgV2Vha1NldDxIVE1MVmlkZW9FbGVtZW50PigpO1xuXG5jb25zdCBzdGFydFZpZGVvID0gKGVsOiBIVE1MVmlkZW9FbGVtZW50KSA9PiB7XG4gIHByb2dyYW1tYXRpYy5hZGQoZWwpO1xuICBlbC5wbGF5KClcbiAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgLmZpbmFsbHkoKCkgPT4gcHJvZ3JhbW1hdGljLmRlbGV0ZShlbCkpO1xufTtcblxuLyoqIFRoZSBtYXRjaGluZyBgcGF1c2VgIGxpc3RlbmVyIGNsZWFycyB0aGUgZmxhZzsgaXQgaXMgbm90IGNsZWFyZWQgaGVyZS4gKi9cbmNvbnN0IHN0b3BWaWRlbyA9IChlbDogSFRNTFZpZGVvRWxlbWVudCkgPT4ge1xuICBpZiAoZWwucGF1c2VkKSByZXR1cm47XG4gIHByb2dyYW1tYXRpYy5hZGQoZWwpO1xuICBlbC5wYXVzZSgpO1xufTtcblxuLyoqIFJld2luZHMgYSBzbGlkZSBiYWNrIHRvIGl0cyBwb3N0ZXIuICovXG5jb25zdCByZXNldCA9IChzbGlkZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgZWwgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpITtcbiAgc3RvcFZpZGVvKGVsKTtcbiAgZWwuY3VycmVudFRpbWUgPSAwO1xuICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRyb2xzJyk7XG4gIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXBsYXlpbmcnKTtcbn07XG5cbmNvbnN0IHBsYXlpbmcgPSAocm9vdDogUGFyZW50Tm9kZSkgPT5cbiAgQXJyYXkuZnJvbShyb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwuaXMtcGxheWluZycpKTtcblxuLyoqXG4gKiBUaGUgcmVlbHMgYmxvY2sgZnJvbSB0aGUgZGVzaWduOiBhIFN3aXBlciBzdHJpcCBvZiBuaW5lLWJ5LXNpeHRlZW4gcHJldmlld3MgdGhhdCBwbGF5XG4gKiBpbiBwbGFjZSwgcGx1cyBhIGxpZ2h0Ym94IGZvciB3YXRjaGluZyBvbmUgZnVsbC1zaXplLlxuICovXG5leHBvcnQgY29uc3QgUmVlbHMgPSAoKSA9PiB7XG4gIGNvbnN0IFNsaWRlID0gKGlkOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBzbGlkZSA9IChcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUgY3JzLXJlZWxcIiBkYXRhLWluZGV4PXtTdHJpbmcoaWQpfSBkYXRhLXBvc2l0aW9uPXtTdHJpbmcocG9zaXRpb24pfT5cbiAgICAgICAgey8qIFRoZSBHSUYgaXMgYSBtdWx0aS1tZWdhYnl0ZSBmYWxsYmFjazsgZXZlcnkgYnJvd3NlciB0aGF0IG1hdHRlcnMgdGFrZXMgdGhlIEFWSUYuICovfVxuICAgICAgICA8cGljdHVyZSBjbGFzcz1cImNycy1yZWVsX19wb3N0ZXJcIj5cbiAgICAgICAgICA8c291cmNlIHNyY3NldD17YCR7RElSfS9wcmV2aWV3XyR7aWR9LmF2aWZgfSB0eXBlPVwiaW1hZ2UvYXZpZlwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9e2Ake0RJUn0vcHJldmlld18ke2lkfS5naWZgfSBhbHQ9XCJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgcHJlbG9hZD1cIm1ldGFkYXRhXCJcbiAgICAgICAgICBwbGF5c2lubGluZVxuICAgICAgICAgIC8vIERlc2t0b3AgcGxheXMgaW5saW5lIHdpdGggbmF0aXZlIGNvbnRyb2xzLCBzbyBpdHMgb3duIGZ1bGxzY3JlZW4gYnV0dG9uIHdvdWxkXG4gICAgICAgICAgLy8gY29tcGV0ZSB3aXRoIG91cnM7IG9uIG1vYmlsZSB0aGUgbmF0aXZlIG9uZSBpcyB0aGUgYmV0dGVyIGV4cGVyaWVuY2UuXG4gICAgICAgICAgY29udHJvbHNMaXN0PXtgbm9kb3dubG9hZCBub3JlbW90ZXBsYXliYWNrIG5vcGxheWJhY2tyYXRlJHtcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoID4gNzY3ID8gJyBub2Z1bGxzY3JlZW4nIDogJydcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBkaXNhYmxlUGljdHVyZUluUGljdHVyZVxuICAgICAgICA+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9e2Ake0RJUn0vdmlkZW9fJHtpZH0ubXA0YH0gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgIDwvdmlkZW8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjcnMtcmVlbF9fcGxheVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPXtgUGxheSByZWVsICR7cG9zaXRpb259YH0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiY3JzLXJlZWxfX2V4cGFuZFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbD17YFdhdGNoIHJlZWwgJHtwb3NpdGlvbn0gZnVsbCBzaXplYH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBzbGlkZS5xdWVyeVNlbGVjdG9yKCcuY3JzLXJlZWxfX3BsYXknKSEuYXBwZW5kKEljb24ocGxheUljb24sICdjcnMtcmVlbF9fcGxheS1pY29uJywgdHJ1ZSkpO1xuICAgIHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5jcnMtcmVlbF9fZXhwYW5kJykhLmlubmVySFRNTCA9IEVYUEFORF9JQ09OO1xuXG4gICAgLy8gTG9vcCBtb2RlIG1vdmVzIHRoZXNlIG5vZGVzIGJldHdlZW4gdGhlIGVuZHMgb2YgdGhlIHdyYXBwZXIsIHNvIHRoZSBsaXN0ZW5lcnMgdGhhdFxuICAgIC8vIG1hdHRlciBsaXZlIG9uIHRoZSBsaXN0IGFuZCBtYXRjaCBieSB0YXJnZXQuIE9ubHkgdGhlIHBlci12aWRlbyBhbmFseXRpY3MsIHdoaWNoXG4gICAgLy8gbXVzdCBzZWUgdGhlIGVsZW1lbnQncyBvd24gcGxheS9wYXVzZSBldmVudHMsIGFyZSBib3VuZCBoZXJlLlxuICAgIGNvbnN0IGVsID0gc2xpZGUucXVlcnlTZWxlY3RvcigndmlkZW8nKSE7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsICgpID0+IHtcbiAgICAgIGlmIChwcm9ncmFtbWF0aWMuaGFzKGVsKSkgcmV0dXJuO1xuICAgICAgcHVzaERhdGEoJ2V4cF9yZWVsc19wbGF5JywgYFBsYXkgVmlkZW8gLSAke3Bvc2l0aW9ufWAsICdjbGljaycsICdyZWVscyBzZWN0aW9uJyk7XG4gICAgfSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCAoKSA9PiB7XG4gICAgICBpZiAocHJvZ3JhbW1hdGljLmhhcyhlbCkpIHtcbiAgICAgICAgcHJvZ3JhbW1hdGljLmRlbGV0ZShlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEEgcmVlbCB0aGF0IHJhbiB0byB0aGUgZW5kIHJhaXNlcyBgcGF1c2VgIHRvbzsgdGhhdCBpcyBub3QgdGhlIHZpc2l0b3Igc3RvcHBpbmcgaXQuXG4gICAgICBpZiAoZWwuZW5kZWQpIHJldHVybjtcbiAgICAgIHB1c2hEYXRhKCdleHBfcmVlbHNfcGF1c2UnLCBgUGF1c2UgVmlkZW8gLSAke3Bvc2l0aW9ufWAsICdjbGljaycsICdyZWVscyBzZWN0aW9uJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2xpZGU7XG4gIH07XG5cbiAgY29uc3QgbGlzdCA9ICg8ZGl2IGNsYXNzPVwic3dpcGVyLXdyYXBwZXIgY3JzLXBkcC1yZWVsc19fbGlzdFwiIC8+KSBhcyBIVE1MRWxlbWVudDtcbiAgLy8gQW5hbHl0aWNzIGNvdW50cyB0aGUgcmVlbCwgbm90IHRoZSBjb3B5IG9mIGl0IHRoYXQgaGFwcGVuZWQgdG8gYmUgb24gc2NyZWVuLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IFNMSURFUzsgaSsrKSB7XG4gICAgY29uc3QgYXQgPSBpICUgQ09VTlQ7XG4gICAgbGlzdC5hcHBlbmQoU2xpZGUoT1JERVJbYXRdLCBhdCArIDEpKTtcbiAgfVxuXG4gIGNvbnN0IHN0cmlwID0gKFxuICAgIDxkaXYgY2xhc3M9XCJzd2lwZXIgY3JzLXBkcC1yZWVsc19fc3RyaXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQ3VzdG9tZXIgcmVlbHNcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IGRvdHMgPSAoPGRpdiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX2RvdHNcIiAvPikgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHByZXYgPSAoXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX2Fycm93IGNycy1wZHAtcmVlbHNfX2Fycm93LS1wcmV2XCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJQcmV2aW91cyByZWVsXCIgLz5cbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3QgbmV4dCA9IChcbiAgICA8YnV0dG9uIGNsYXNzPVwiY3JzLXBkcC1yZWVsc19fYXJyb3cgY3JzLXBkcC1yZWVsc19fYXJyb3ctLW5leHRcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIk5leHQgcmVlbFwiIC8+XG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHByZXYuYXBwZW5kKEljb24oYXJyb3dJY29uLCAnY3JzLXBkcC1yZWVsc19fYXJyb3ctaWNvbicsIHRydWUpKTtcbiAgbmV4dC5hcHBlbmQoSWNvbihhcnJvd0ljb24sICdjcnMtcGRwLXJlZWxzX19hcnJvdy1pY29uJywgdHJ1ZSkpO1xuXG4gIGNvbnN0IG5hdiA9IChcbiAgICA8ZGl2IGNsYXNzPVwiY3JzLXBkcC1yZWVsc19fbmF2XCI+XG4gICAgICB7cHJldn1cbiAgICAgIHtkb3RzfVxuICAgICAge25leHR9XG4gICAgPC9kaXY+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3Qgcm9vdCA9IChcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNycy1wZHAtcmVlbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtcGRwLXJlZWxzX19oZWFkXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX3RpdGxlXCI+VHJ1c3RlZCBieSAyNSwwMDArIGZhbWlsaWVzIHRvIGtlZXAgdGhlaXIgbG92ZWQgb25lcyBjbG9zZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiY3JzLXBkcC1yZWVsc19fc3VidGl0bGVcIj5cbiAgICAgICAgICBSZWFsIHN0b3JpZXMgZnJvbSBwZW9wbGUgd2hvIGNhcnJ5IHNvbWVvbmUgdGhleSBsb3ZlIOKAlCBldmVyeSBzaW5nbGUgZGF5XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge3N0cmlwfVxuICAgICAge25hdn1cbiAgICA8L3NlY3Rpb24+XG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3Qgc3RvcEFsbCA9ICgpID0+IHBsYXlpbmcobGlzdCkuZm9yRWFjaChyZXNldCk7XG5cbiAgLyoqIFdoaWNoIHJlZWwgaXMgY2VudHJlZCDigJQgcmVhZCBvZmYgdGhlIERPTSwgYmVjYXVzZSBsb29wIG1vZGUgcmVvcmRlcnMgdGhlIHNsaWRlcy4gKi9cbiAgY29uc3QgYWN0aXZlUG9zaXRpb24gPSAoKSA9PlxuICAgIGxpc3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbC5zd2lwZXItc2xpZGUtYWN0aXZlJyk/LmRhdGFzZXQucG9zaXRpb24gPz8gJyc7XG5cbiAgLy8gU3dpcGVyIG1lYXN1cmVzIHNsaWRlIHdpZHRocywgc28gaXQgY2FuIG9ubHkgcnVuIG9uY2UgdGhlIHN0cmlwIGlzIG9uIHRoZSBwYWdlLlxuICAvLyBgdmlzaWJpbGl0eU9mVGltZWAgd2FpdHMgd2l0aCBpdDogaXQgcmVzb2x2ZXMgaXRzIHNlbGVjdG9yIGltbWVkaWF0ZWx5IGFuZCBkb2VzXG4gIC8vIG5vdGhpbmcgYXQgYWxsIGlmIHRoZSBzZWN0aW9uIGhhcyBub3QgYmVlbiBhcHBlbmRlZCB5ZXQuXG4gIHdhaXRFbCgnLmNycy1wZHAtcmVlbHNfX3N0cmlwIC5jcnMtcmVlbF9fcG9zdGVyJykudGhlbigoKSA9PiB7XG4gICAgdmlzaWJpbGl0eU9mVGltZSgnLmNycy1wZHAtcmVlbHMnLCAnZXhwX3JlZWxzX3Zpc2liaWxpdHknLCAncmVlbHMgc2VjdGlvbicsICdSZWVscycsIDMwMDAsIDAuMyk7XG5cbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHN0cmlwLCB7XG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAvLyBGZWVkcyB0aGUgYHN3aXBlci1zbGlkZS12aXNpYmxlYCBjbGFzcyB0aGF0IHRoZSBoYW5kLW9mZiBiZWxvdyByZWFkcy5cbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICBsb25nU3dpcGVzUmF0aW86IDAuMSxcbiAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgIHNob3J0U3dpcGVzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQSByZWVsIHBsYXlpbmcgaW4gYSBzbGlkZSB0aGF0IGxvb3AgbW9kZSBoYXMganVzdCBjYXJyaWVkIG9mZi1zY3JlZW4gaXMgaGFuZGVkIHRvXG4gICAgICogdGhlIG9uLXNjcmVlbiBjb3B5IG9mIHRoZSBzYW1lIHJlZWwsIGF0IHRoZSBzYW1lIHRpbWVzdGFtcCDigJQgc28gdGhlIHN0b3J5IGtlZXBzXG4gICAgICogcnVubmluZyB1bmRlciB0aGUgdmlzaXRvcidzIHRodW1iIGluc3RlYWQgb2Ygc3RvcHBpbmcgZGVhZCBtaWQtc2VudGVuY2UuXG4gICAgICovXG4gICAgY29uc3QgaGFuZE9mZiA9ICgpID0+XG4gICAgICBsaXN0XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmNycy1yZWVsLmlzLXBsYXlpbmc6bm90KC5zd2lwZXItc2xpZGUtdmlzaWJsZSknKVxuICAgICAgICAuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykhO1xuICAgICAgICAgIGNvbnN0IGF0ID0gZWwuY3VycmVudFRpbWU7XG4gICAgICAgICAgY29uc3Qgd2FzUGF1c2VkID0gZWwucGF1c2VkO1xuICAgICAgICAgIGNvbnN0IHR3aW4gPSBsaXN0LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgICAgYC5jcnMtcmVlbFtkYXRhLWluZGV4PVwiJHtzbGlkZS5kYXRhc2V0LmluZGV4fVwiXS5zd2lwZXItc2xpZGUtdmlzaWJsZWAsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICh0d2luKSB7XG4gICAgICAgICAgICBjb25zdCBoZWlyID0gdHdpbi5xdWVyeVNlbGVjdG9yKCd2aWRlbycpITtcbiAgICAgICAgICAgIHR3aW4uY2xhc3NMaXN0LmFkZCgnaXMtcGxheWluZycpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSBoZWlyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnY29udHJvbHMnKTtcbiAgICAgICAgICAgIGhlaXIuY3VycmVudFRpbWUgPSBhdDtcbiAgICAgICAgICAgIGlmICghd2FzUGF1c2VkKSBzdGFydFZpZGVvKGhlaXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc2V0KHNsaWRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBPbmUgZG90IHBlciByZWVsLCBub3QgcGVyIHNsaWRlIOKAlCB0aGUgY29waWVzIGFyZSB0aGUgc2FtZSB0aHJlZSBzdG9yaWVzLlxuICAgIE9SREVSLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgIGNvbnN0IGRvdCA9IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNycy1wZHAtcmVlbHNfX2RvdFwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPXtgR28gdG8gcmVlbCAke2kgKyAxfWB9IC8+XG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGkgPT09IDApIGRvdC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKGkpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgICAgICBwdXNoRGF0YShcbiAgICAgICAgICAgICdleHBfcmVlbHNfcGFnaW5hdGlvbicsXG4gICAgICAgICAgICBgUGFnaW5hdGlvbiAtICR7YWN0aXZlUG9zaXRpb24oKX1gLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgICdyZWVscyBzZWN0aW9uJyxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBkb3RzLmFwcGVuZChkb3QpO1xuICAgIH0pO1xuXG4gICAgc3dpcGVyLm9uKCdzbGlkZXJNb3ZlJywgaGFuZE9mZik7XG4gICAgc3dpcGVyLm9uKCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLCBoYW5kT2ZmKTtcblxuICAgIHN3aXBlci5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdCA9IHN3aXBlci5yZWFsSW5kZXggJSBDT1VOVDtcbiAgICAgIGRvdHNcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcnMtcGRwLXJlZWxzX19kb3QnKVxuICAgICAgICAuZm9yRWFjaCgoZWwsIGkpID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIGkgPT09IGF0KSk7XG4gICAgICAvLyBTY3JvbGxpbmcgYSByZWVsIG91dCBvZiB0aGUgbWlkZGxlIGFiYW5kb25zIGl0OyBpdCBtdXN0IG5vdCBrZWVwIHRhbGtpbmcgb2ZmIHRvIHRoZSBzaWRlLlxuICAgICAgc3RvcEFsbCgpO1xuICAgIH0pO1xuXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgICBwdXNoRGF0YSgnZXhwX3JlZWxzX25hdl9hcnJvdycsIGBBcnJvdyBMZWZ0IC0gJHthY3RpdmVQb3NpdGlvbigpfWAsICdjbGljaycsICdyZWVscyBzZWN0aW9uJyksXG4gICAgICApO1xuICAgIH0pO1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgICAgcHVzaERhdGEoJ2V4cF9yZWVsc19uYXZfYXJyb3cnLCBgQXJyb3cgUmlnaHQgLSAke2FjdGl2ZVBvc2l0aW9uKCl9YCwgJ2NsaWNrJywgJ3JlZWxzIHNlY3Rpb24nKSxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBIGZsaWNrIG9uIGEgbmFycm93IHNjcmVlbiBjYW4gY2FycnkgdGhlIGxvb3Agc2V2ZXJhbCBzbGlkZXMgYXQgb25jZSwgd2hpY2ggcmVhZHMgYXNcbiAgICAgKiB0aGUgc3RyaXAgbHVyY2hpbmcgcGFzdCB0aGUgc3RvcnkgdGhlIHZpc2l0b3Igd2FzIGFpbWluZyBhdC4gQW55dGhpbmcgbG9uZ2VyIHRoYW4gb25lXG4gICAgICogc2xpZGUgaXMgcHVsbGVkIGJhY2sgdG8gdGhlIG5laWdoYm91ciB0aGV5IHN3aXBlZCB0b3dhcmRzLlxuICAgICAqL1xuICAgIGxldCBmcm9tOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBzd2lwZXIub24oJ3RvdWNoU3RhcnQnLCAoKSA9PiAoZnJvbSA9IHN3aXBlci5yZWFsSW5kZXgpKTtcbiAgICBzd2lwZXIub24oJ3RvdWNoRW5kJywgKCkgPT4ge1xuICAgICAgaWYgKGZyb20gPT09IG51bGwpIHJldHVybjtcbiAgICAgIGNvbnN0IHdhcyA9IGZyb207XG4gICAgICBmcm9tID0gbnVsbDtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgICAgICAgaWYgKG5vdyA9PT0gd2FzKSByZXR1cm47XG5cbiAgICAgICAgcHVzaERhdGEoJ2V4cF9yZWVsc19zd2lwZScsIGBTd2lwZSAtICR7YWN0aXZlUG9zaXRpb24oKX1gLCAnb3RoZXInLCAncmVlbHMgc2VjdGlvbicpO1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0b3RhbCA9IGxpc3QuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAvLyBTaG9ydGVzdCBzaWduZWQgZGlzdGFuY2UgYXJvdW5kIHRoZSBsb29wLCBzbyBhIHdyYXAgY291bnRzIGFzIG9uZSBzdGVwLCBub3QgZWlnaHQuXG4gICAgICAgIGxldCBkZWx0YSA9ICgoKG5vdyAtIHdhcykgJSB0b3RhbCkgKyB0b3RhbCkgJSB0b3RhbDtcbiAgICAgICAgaWYgKGRlbHRhID4gdG90YWwgLyAyKSBkZWx0YSAtPSB0b3RhbDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKCgoKHdhcyArIE1hdGguc2lnbihkZWx0YSkpICUgdG90YWwpICsgdG90YWwpICUgdG90YWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3QgZXhwYW5kID0gdGFyZ2V0LmNsb3Nlc3QoJy5jcnMtcmVlbF9fZXhwYW5kJyk7XG4gICAgaWYgKGV4cGFuZCkge1xuICAgICAgY29uc3Qgc2xpZGUgPSBleHBhbmQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbCcpITtcbiAgICAgIGNvbnN0IGVsID0gc2xpZGUucXVlcnlTZWxlY3RvcigndmlkZW8nKSE7XG4gICAgICBwdXNoRGF0YSgnZXhwX3JlZWxzX2Z1bGxzY3JlZW4nLCAnRnVsbHNjcmVlbicsICdjbGljaycsICdyZWVscyBzZWN0aW9uJyk7XG4gICAgICAvLyBIYW5kIHRoZSByZWVsIG92ZXIgcmF0aGVyIHRoYW4gbGVhdmluZyBpdCBwbGF5aW5nIOKAlCBhbmQgYXVkaWJsZSDigJQgYmVoaW5kIHRoZSBzY3JpbS5cbiAgICAgIG9wZW5MaWdodGJveChOdW1iZXIoc2xpZGUuZGF0YXNldC5pbmRleCksIGVsLmN1cnJlbnRUaW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYXBwaW5nIGEgcGxheWluZyByZWVsIHBhdXNlcyBpdCDigJQgb24gbW9iaWxlIHRoZXJlIGFyZSBubyBuYXRpdmUgY29udHJvbHMgdG8gZG8gaXQuXG4gICAgY29uc3QgdmlkZW8gPSB0YXJnZXQuY2xvc2VzdCgndmlkZW8nKTtcbiAgICBpZiAodmlkZW8pIHtcbiAgICAgIGlmICh2aWRlby5wYXVzZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IHNsaWRlID0gdmlkZW8uY2xvc2VzdDxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbCcpITtcbiAgICAgIC8vIFJlcG9ydGVkIGhlcmUgcmF0aGVyIHRoYW4gZnJvbSB0aGUgYHBhdXNlYCBsaXN0ZW5lcjogYHJlc2V0YCBzdG9wcyB0aGUgcmVlbFxuICAgICAgLy8gdGhyb3VnaCB0aGUgcHJvZ3JhbW1hdGljIGZsYWcsIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCBzaWxlbmNlcyB0aGF0IGxpc3RlbmVyLlxuICAgICAgLy8gSXQgc3RheXMgYm91bmQgZm9yIHRoZSBuYXRpdmUgY29udHJvbHMsIHdoaWNoIGFyZSB0aGUgb3RoZXIgd2F5IGluLlxuICAgICAgcHVzaERhdGEoXG4gICAgICAgICdleHBfcmVlbHNfcGF1c2UnLFxuICAgICAgICBgUGF1c2UgVmlkZW8gLSAke3NsaWRlLmRhdGFzZXQucG9zaXRpb259YCxcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgJ3JlZWxzIHNlY3Rpb24nLFxuICAgICAgKTtcbiAgICAgIHJlc2V0KHNsaWRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGlja2luZyB0aGUgc3RpbGwgcG9zdGVyIGlzIHRoZSBzYW1lIGFmZm9yZGFuY2UgYXMgdGhlIHBsYXkgYnV0dG9uLlxuICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5jcnMtcmVlbF9fcG9zdGVyJykgJiYgIXRhcmdldC5jbG9zZXN0KCcuY3JzLXJlZWxfX3BsYXknKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2xpZGUgPSB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJy5jcnMtcmVlbCcpITtcbiAgICBjb25zdCBlbCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykhO1xuICAgIHBsYXlpbmcobGlzdCkuZm9yRWFjaCgob3RoZXIpID0+IG90aGVyICE9PSBzbGlkZSAmJiByZXNldChvdGhlcikpO1xuICAgIGlmIChlbC5wYXVzZWQpIGVsLmN1cnJlbnRUaW1lID0gMDtcbiAgICBwdXNoRGF0YSgnZXhwX3JlZWxzX3BsYXknLCBgUGxheSBWaWRlbyAtICR7c2xpZGUuZGF0YXNldC5wb3NpdGlvbn1gLCAnY2xpY2snLCAncmVlbHMgc2VjdGlvbicpO1xuICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ2lzLXBsYXlpbmcnKTtcbiAgICAvLyBOYXRpdmUgY29udHJvbHMgb25seSB3aGVyZSB0aGVyZSBpcyByb29tIGZvciB0aGVtOyB0aGUgMTU1cHggc2xpZGUgaGFzIG5vbmUuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSBlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG4gICAgc3RhcnRWaWRlbyhlbCk7XG4gIH0pO1xuXG4gIC8vIGBlbmRlZGAgZG9lcyBub3QgYnViYmxlLCBzbyBpdCBpcyBjYXVnaHQgb24gdGhlIHdheSBkb3duLlxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2VuZGVkJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3QgZWwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbC50YWdOYW1lID09PSAnVklERU8nKSByZXNldChlbC5jbG9zZXN0PEhUTUxFbGVtZW50PignLmNycy1yZWVsJykhKTtcbiAgICB9LFxuICAgIHRydWUsXG4gICk7XG5cbiAgLy8gUmVlbHMgbGVmdCBiZWhpbmQgYnkgYSBzY3JvbGwgc2hvdWxkIG5vdCBrZWVwIHBsYXlpbmcgKGFuZCB0YWxraW5nKSBvZmYtc2NyZWVuLlxuICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IGVudHJpZXMuZm9yRWFjaCgoZSkgPT4gZS5pc0ludGVyc2VjdGluZyB8fCBzdG9wQWxsKCkpLCB7XG4gICAgdGhyZXNob2xkOiAwLFxuICB9KS5vYnNlcnZlKHN0cmlwKTtcblxuICAvLyBOb3Igc2hvdWxkIG9uZSBrZWVwIHJ1bm5pbmcgYmVoaW5kIHRoZSBjYXJ0IGRyYXdlciB0aGUgdmlzaXRvciBqdXN0IG9wZW5lZC5cbiAgd2FpdEVsKCdjYXJ0LWRyYXdlcicpLnRoZW4oKGRyYXdlcikgPT4ge1xuICAgIGxldCBvcGVuID0gZHJhd2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gZHJhd2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICBpZiAobm93ICYmICFvcGVuKSBzdG9wQWxsKCk7XG4gICAgICBvcGVuID0gbm93O1xuICAgIH0pLm9ic2VydmUoZHJhd2VyLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddIH0pO1xuICB9KTtcblxuICByZXR1cm4gcm9vdDtcbn07XG5cbi8qKlxuICogVGhlIGZ1bGwtc2l6ZSBwbGF5ZXIuIE5vdCBpbiB0aGUgZGVzaWduLCBzbyBpdCBrZWVwcyB0aGUgcHJldmlvdXMgdGVzdCdzIHNoYXBlIOKAlFxuICogc2NyaW0sIGNoZXZyb25zLCBjbG9zZSDigJQgcmVwYWludGVkIGluIHRoZSByZWRlc2lnbidzIHBhbGV0dGUuIEJ1aWx0IG9uY2UgYW5kIHJldXNlZDpcbiAqIHN3YXBwaW5nIHRoZSBzb3VyY2Ugb24gb25lIGVsZW1lbnQgaXMgd2hhdCBsZXRzIHRoZSBhcnJvd3Mgc3RlcCBiZXR3ZWVuIHJlZWxzIHdpdGhvdXRcbiAqIHRlYXJpbmcgdGhlIHBsYXllciBkb3duIGFuZCBiYWNrIHVwLlxuICovXG5sZXQgbGlnaHRib3g6IHtcbiAgcm9vdDogSFRNTEVsZW1lbnQ7XG4gIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICBvcGVuOiAoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyKSA9PiB2b2lkO1xufSB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBidWlsZExpZ2h0Ym94ID0gKCkgPT4ge1xuICBsZXQgaWQgPSBPUkRFUlswXTtcblxuICBjb25zdCBlbCA9IChcbiAgICA8dmlkZW9cbiAgICAgIGNvbnRyb2xzXG4gICAgICBwbGF5c2lubGluZVxuICAgICAgcHJlbG9hZD1cIm1ldGFkYXRhXCJcbiAgICAgIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWQgbm9yZW1vdGVwbGF5YmFjayBub3BsYXliYWNrcmF0ZSBub2Z1bGxzY3JlZW5cIlxuICAgICAgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmVcbiAgICAvPlxuICApIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgY29uc3Qgc3Bpbm5lciA9ICg8ZGl2IGNsYXNzPVwiY3JzLWxpZ2h0Ym94X19zcGlubmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4pIGFzIEhUTUxFbGVtZW50O1xuICAvLyBSZWVscyBzdHJlYW0gZnJvbSBHaXRIdWIgUGFnZXMsIHNvIGEgY29sZCBzdGFydCBvbiBhIHNsb3cgY29ubmVjdGlvbiBpcyBhIGJsYW5rXG4gIC8vIHJlY3RhbmdsZSBmb3IgYSBzZWNvbmQgb3IgdHdvIHVubGVzcyBpdCBpcyBzcGVsbGVkIG91dC5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKCkgPT4gc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3dhaXRpbmcnLCAoKSA9PiBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4gc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSk7XG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgc3RvcFZpZGVvKGVsKTtcbiAgICBlbC5jdXJyZW50VGltZSA9IDA7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjcnMtZHJhd2VyLW9wZW4nKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3JzLWxpZ2h0Ym94LS1vcGVuJyk7XG4gIH07XG5cbiAgLyoqIEVzY2FwZSBpcyBub3QgYSBjbGljaywgc28gaXQgY2FycmllcyBubyBldmVudCBvZiBpdHMgb3duLiAqL1xuICBjb25zdCBjbG9zZVdpdGggPSAoZXZlbnQ6IHN0cmluZywgZGVzYzogc3RyaW5nKSA9PiB7XG4gICAgY2xvc2UoKTtcbiAgICBwdXNoRGF0YShldmVudCwgZGVzYywgJ2NsaWNrJywgJ3JlZWxzIG1vZGFsJyk7XG4gIH07XG5cbiAgLyoqIFdhbGtzIHRoZSByZWVscyBieSBpZCwgdGhlIHdheSB0aGUgcmVmZXJlbmNlIHBsYXllciBkb2VzIOKAlCAxIOKGkiAyIOKGkiAzIOKGkiAxLiAqL1xuICBjb25zdCBzdGVwID0gKGJ5OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhdCA9IGlkICsgYnk7XG4gICAgb3BlbihhdCA8IDEgPyBDT1VOVCA6IGF0ID4gQ09VTlQgPyAxIDogYXQsIDApO1xuICAgIHB1c2hEYXRhKFxuICAgICAgJ2V4cF9yZWVsc19hcnJvdycsXG4gICAgICBieSA+IDAgPyAnQXJyb3cgUmlnaHQnIDogJ0Fycm93IExlZnQnLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICdyZWVscyBtb2RhbCcsXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBvbktleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgY2xvc2UoKTtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSBzdGVwKC0xKTtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykgc3RlcCgxKTtcbiAgfTtcblxuICBjb25zdCBwcmV2ID0gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY3JzLWxpZ2h0Ym94X19hcnJvdyBjcnMtbGlnaHRib3hfX2Fycm93LS1wcmV2XCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHJlZWxcIlxuICAgICAgb25DbGljaz17KCkgPT4gc3RlcCgtMSl9XG4gICAgLz5cbiAgKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgbmV4dCA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1saWdodGJveF9fYXJyb3cgY3JzLWxpZ2h0Ym94X19hcnJvdy0tbmV4dFwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHJlZWxcIlxuICAgICAgb25DbGljaz17KCkgPT4gc3RlcCgxKX1cbiAgICAvPlxuICApIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBjbG9zZUJ0biA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImNycy1saWdodGJveF9fY2xvc2VcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VXaXRoKCdleHBfcmVlbHNfbW9kYWxfZnVsbHNjcmVlbicsICdGdWxsc2NyZWVuIENsb3NlJyl9XG4gICAgLz5cbiAgKSBhcyBIVE1MRWxlbWVudDtcbiAgcHJldi5pbm5lckhUTUwgPSBDSEVWUk9OX0lDT047XG4gIG5leHQuaW5uZXJIVE1MID0gQ0hFVlJPTl9JQ09OO1xuICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBDTE9TRV9JQ09OO1xuXG4gIGNvbnN0IHJvb3QgPSAoXG4gICAgPGRpdiBjbGFzcz1cImNycy1saWdodGJveFwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJDdXN0b21lciByZWVsXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY3JzLWxpZ2h0Ym94X19vdmVybGF5XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VXaXRoKCdleHBfcmVlbHNfb3ZlcmxheScsICdPdmVybGF5IGNsb3NlJyl9XG4gICAgICAvPlxuICAgICAge3ByZXZ9XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLWxpZ2h0Ym94X19zdGFnZVwiPlxuICAgICAgICB7Y2xvc2VCdG59XG4gICAgICAgIHtzcGlubmVyfVxuICAgICAgICB7ZWx9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtuZXh0fVxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0IG9wZW4gPSAobmV4dDogbnVtYmVyLCB0aW1lOiBudW1iZXIpID0+IHtcbiAgICAvLyBPbmx5IHJlZmV0Y2ggd2hlbiB0aGUgcmVlbCBhY3R1YWxseSBjaGFuZ2VzOyB0aGUgYXJyb3dzIHN0ZXAsIHRoZXkgZG8gbm90IHJlbG9hZC5cbiAgICBpZiAobmV4dCAhPT0gaWQgfHwgIWVsLnNyYykge1xuICAgICAgaWQgPSBuZXh0O1xuICAgICAgZWwuc3JjID0gYCR7RElSfS92aWRlb18ke2lkfS5tcDRgO1xuICAgIH1cbiAgICBlbC5jdXJyZW50VGltZSA9IHRpbWU7XG5cbiAgICAvLyBTdGVwcGluZyBiZXR3ZWVuIHJlZWxzIGdvZXMgdGhyb3VnaCBoZXJlIHRvbywgc28gdGhlIHNjcmltIGFuZCB0aGUga2V5IGhhbmRsZXJcbiAgICAvLyBhcmUgb25seSBzZXQgdXAgb24gdGhlIHdheSBpbi4gT3BlbmluZyBpdHNlbGYgcmFpc2VzIG5vIGV2ZW50IG9mIGl0cyBvd24g4oCUIGl0IGlzXG4gICAgLy8gYWxyZWFkeSBjb3ZlcmVkIGJ5IHRoZSBgX2Z1bGxzY3JlZW5gIGNsaWNrIHRoYXQgZ290IHVzIGhlcmUuXG4gICAgaWYgKCFyb290LmNsYXNzTGlzdC5jb250YWlucygnY3JzLWxpZ2h0Ym94LS1vcGVuJykpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Nycy1kcmF3ZXItb3BlbicpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJvb3QuY2xhc3NMaXN0LmFkZCgnY3JzLWxpZ2h0Ym94LS1vcGVuJykpO1xuICAgIH1cbiAgICBzdGFydFZpZGVvKGVsKTtcbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcbiAgcmV0dXJuIHsgcm9vdCwgdmlkZW86IGVsLCBvcGVuIH07XG59O1xuXG5jb25zdCBvcGVuTGlnaHRib3ggPSAoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyKSA9PiB7XG4gIC8vIEV2ZXJ5IHJlZWwgaW4gdGhlIHN0cmlwIHN0b3BzIOKAlCB0aGUgbGlnaHRib3ggdGFrZXMgdGhlIHNvdW5kIHdpdGggaXQuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlZWwuaXMtcGxheWluZycpXG4gICAgLmZvckVhY2gocmVzZXQpO1xuXG4gIGxpZ2h0Ym94ID8/PSBidWlsZExpZ2h0Ym94KCk7XG4gIGxpZ2h0Ym94Lm9wZW4oaWQsIHRpbWUpO1xufTtcbiIsImltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5pbXBvcnQgeyBnZXRTZWxlY3QsIGlzUmVhbE9wdGlvbiwgdHlwZSBQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdCc7XG5pbXBvcnQgeyB0eXBlIEFuYWx5dGljcywgYnVpbGRHdWlkZSwgaXNTd2F0Y2hPcHRpb24sIE9wdGlvbkJsb2NrLCBzd2F0Y2hGb3IgfSBmcm9tICcuL2J1eWJveCc7XG5pbXBvcnQgeyBDTE9TRV9JQ09OIH0gZnJvbSAnLi9tb2RhbCc7XG5cbi8qKiBFdmVyeXRoaW5nIHJhaXNlZCBmcm9tIHRoaXMgYmFyIOKAlCBjYXJkcywgZ3VpZGUgbGlua3MsIHRoZSBwaWNrZXJzIHRoZW1zZWx2ZXMuICovXG5jb25zdCBTVElDS1lfQU5BTFlUSUNTOiBBbmFseXRpY3MgPSB7IHByZWZpeDogJ2V4cF9wZHBfc3RpY2t5JywgbG9jOiAnU3RpY2t5IEJhcicgfTtcblxuLyoqXG4gKiBTZWxlY3RpbmcgYSB2YWx1ZSBmcm9tIGhlcmUgZHJpdmVzIHRoZSBob3N0J3MgPHNlbGVjdD4sIGFuZCB0d28gdW5yZWxhdGVkIGJpdHMgb2ZcbiAqIERhd24ncyBvd24gdGhlbWUgSlMgcmVhY3QgYnkgc2Nyb2xsaW5nIHRoZSBwYWdlIGJhY2sgdXAgdG8gdGhlIGJ1eSBib3gg4oCUIGhhcm1sZXNzXG4gKiB3aGVuIGRyaXZlbiBmcm9tIHRoZSBidXkgYm94IGl0c2VsZiAoYWxyZWFkeSBhdCB0aGF0IHNjcm9sbCBwb3NpdGlvbiksIGJ1dCBmcm9tIHRoZVxuICogc3RpY2t5IGJhciBpdCByZWFkcyBhcyB0aGUgd2hvbGUgcGFnZSBqdW1waW5nIHRvIHRoZSB0b3A6XG4gKiAgLSBgbWVkaWEtZ2FsbGVyeS5qc2AgY2FsbHMgYHdpbmRvdy5zY3JvbGxUbyh7dG9wLCBiZWhhdmlvcjonc21vb3RoJ30pYCB0byBicmluZyB0aGVcbiAqICAgIGdhbGxlcnkgaW50byB2aWV3IHdoZW5ldmVyIHRoZSB2YXJpYW50J3MgZmVhdHVyZWQgaW1hZ2UgY2hhbmdlcyAobWF0ZXJpYWwgb25seSkg4oCUXG4gKiAgICBhbmQsIG9uIHRoZSB3YXkgdGhlcmUsIGBwcmV2ZW50U3RpY2t5SGVhZGVyKClgIGFsc28gdG91Y2hlcyBgd2luZG93LnNjcm9sbFRvYCwgc29cbiAqICAgIGEgXCJkaXNhcm0gb24gZmlyc3QgY2FsbFwiIGludGVyY2VwdG9yIGdldHMgdXNlZCB1cCBiZWZvcmUgdGhlIHJlYWwganVtcC5cbiAqICAtIGBwcm9kdWN0LWluZm8uanNgIGNhbGxzIGAuZm9jdXMoKWAg4oCUIHdpdGggbm8gYHByZXZlbnRTY3JvbGxgIOKAlCBvbiB0aGUgKHZpc3VhbGx5XG4gKiAgICBoaWRkZW4pIG5hdGl2ZSA8c2VsZWN0PiBvbmNlIGl0cyBhc3luYyByZS1yZW5kZXIgbGFuZHMsIGFuZCBmb2N1c2luZyBhblxuICogICAgb2ZmLXNjcmVlbiBlbGVtZW50IHNjcm9sbHMgaXQgaW50byB2aWV3IChldmVyeSBvcHRpb24pLlxuICogU28gYm90aCBhcmUgc3VwcHJlc3NlZCBmb3IgYSBmaXhlZCB3aW5kb3cgaW5zdGVhZCBvZiBcInVudGlsIGZpcnN0IHVzZVwiOiBsb25nIGVub3VnaFxuICogdG8gY292ZXIgRGF3bidzIGFzeW5jIHJlLXJlbmRlciwgc2hvcnQgZW5vdWdoIHRoYXQgaXQgY2FuJ3Qgb3V0bGl2ZSB0aGUgaW50ZXJhY3Rpb24uXG4gKiBSZS1lbnRyYW50IChwaWNraW5nIGEgc2Vjb25kIHZhbHVlIHdoaWxlIHRoZSBmaXJzdCdzIHdpbmRvdyBpcyBzdGlsbCBvcGVuIGV4dGVuZHMgaXRcbiAqIHJhdGhlciB0aGFuIGNhcHR1cmluZyBpdHMgb3duIGFscmVhZHktb3ZlcnJpZGRlbiBmdW5jdGlvbnMgYXMgXCJvcmlnaW5hbFwiKS5cbiAqL1xubGV0IHJlc3RvcmVEYXduU2Nyb2xsOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG5sZXQgc2Nyb2xsU3VwcHJlc3NUaW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzdXBwcmVzc0Rhd25TY3JvbGxKdW1wID0gKCkgPT4ge1xuICBpZiAoIXJlc3RvcmVEYXduU2Nyb2xsKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUbyA9IHdpbmRvdy5zY3JvbGxUby5iaW5kKHdpbmRvdyk7XG4gICAgY29uc3Qgb3JpZ2luYWxGb2N1cyA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cztcblxuICAgIHdpbmRvdy5zY3JvbGxUbyA9ICgoKSA9PiB7fSkgYXMgdHlwZW9mIHdpbmRvdy5zY3JvbGxUbztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIG9wdHM/OiBGb2N1c09wdGlvbnMpIHtcbiAgICAgIG9yaWdpbmFsRm9jdXMuY2FsbCh0aGlzLCB7IC4uLm9wdHMsIHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIHJlc3RvcmVEYXduU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbFRvID0gb3JpZ2luYWxTY3JvbGxUbztcbiAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cyA9IG9yaWdpbmFsRm9jdXM7XG4gICAgICByZXN0b3JlRGF3blNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9XG5cbiAgd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxTdXBwcmVzc1RpbWVyKTtcbiAgc2Nyb2xsU3VwcHJlc3NUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHJlc3RvcmVEYXduU2Nyb2xsPy4oKSwgMjAwMCk7XG59O1xuXG4vKipcbiAqIE5laXRoZXIgZ3VpZGUgZW1pdHMgYW4gb3Blbi9jbG9zZSBldmVudCwgc28gZWFjaCBpcyByZWFkIG9mZiB0aGUgZmxhZyBpdCBsZWF2ZXMgb25cbiAqIHRoZSBwYWdlLiBUaGV5IGFyZSBrZXB0IGFwYXJ0IG9uIHB1cnBvc2U6IGFuIGBpc09wZW5gIHRoYXQgT1JlZCB0aGUgdHdvIHRvZ2V0aGVyXG4gKiB3b3VsZCBob2xkIHRoZSBiYXIgYmFjayB3aGVuZXZlciAqZWl0aGVyKiBmbGFnIHdhcyBzZXQsIHNvIGEgc3RhbGUgYC5jdXN0X25vdGlgIGxlZnRcbiAqIG9uIHRoZSBoZWFkZXIgYnkgdGhlIHRoZW1lIGlzIGVub3VnaCB0byBtYWtlIHRoZSBNYXRlcmlhbCBHdWlkZSBuZXZlciByZWFkIGFzIGNsb3NlZC5cbiAqL1xuLyoqIE91ciBvd24gZHJhd2VyLCBmcm9tIGBvcGVuTW9kYWxgLiAqL1xuY29uc3QgbWF0ZXJpYWxHdWlkZUlzT3BlbiA9ICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcnMtZHJhd2VyLW9wZW4nKTtcblxuLyoqIFRoZSB0aGVtZSdzIFJpbmcgU2l6ZSBHdWlkZSDigJQgdGhlIGZsYWcgaXQgc2V0cyB3aGlsZSAjY3VzdG9tX25vdGlmaWNhdGlvbnMgaXMgdXAuICovXG5jb25zdCBzaXplR3VpZGVJc09wZW4gPSAoKSA9PiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWhlYWRlci5jdXN0X25vdGknKTtcblxuLyoqXG4gKiBUaGUgdGhlbWUncyBjYXJ0IGRyYXdlciAoRGF3bidzIGBjYXJ0LWRyYXdlci5qc2ApLCB3aGljaCBmbGFncyBpdHNlbGYgYGFjdGl2ZWAgYSB0aWNrXG4gKiBhZnRlciBvcGVuaW5nIGFuZCBkcm9wcyB0aGUgY2xhc3Mgb24gY2xvc2UuIFJlYWQgb2ZmIHRoZSBlbGVtZW50IGV2ZXJ5IHRpbWUgcmF0aGVyXG4gKiB0aGFuIGhlbGQ6IHRoZSBkcmF3ZXIgcmUtcmVuZGVycyBpdHMgb3duIHNlY3Rpb25zIGFmdGVyIGV2ZXJ5IGNhcnQgbXV0YXRpb24uXG4gKi9cbmNvbnN0IGNhcnREcmF3ZXJJc09wZW4gPSAoKSA9PiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhcnQtZHJhd2VyLmFjdGl2ZScpO1xuXG4vKipcbiAqIFJ1bnMgYGRvbmVgIG9uY2UgdGhlIGd1aWRlIGBpc09wZW5gIGRlc2NyaWJlcywgb3BlbmVkIGp1c3Qgbm93LCBoYXMgY2xvc2VkIGFnYWluLlxuICogVGhlIGZsYWcgY2FuIGxhbmQgYXN5bmNocm9ub3VzbHkg4oCUIHRoZSB0aGVtZSByZWJ1aWxkcyBpdHMgZHJhd2VyIGJlZm9yZSBmbGFnZ2luZyBpdCDigJRcbiAqIHNvIFwiY2xvc2VkXCIgb25seSBjb3VudHMgYWZ0ZXIgdGhlIGd1aWRlIGhhcyBiZWVuIHNlZW4gb3BlbjsgdW50aWwgdGhlbiBhIGZhbGxiYWNrXG4gKiB0aW1lciBjb3ZlcnMgdGhlIGNhc2Ugd2hlcmUgdGhlIGNsaWNrIG9wZW5lZCBub3RoaW5nIGF0IGFsbCwgd2hpY2ggd291bGQgb3RoZXJ3aXNlXG4gKiBzdHJhbmQgdGhlIGJhciBvZmYtc2NyZWVuIGZvciB0aGUgcmVzdCBvZiB0aGUgc2Vzc2lvbi5cbiAqXG4gKiBXYXRjaGVkIGZyb20gdGhlIGRvY3VtZW50IGRvd24gcmF0aGVyIHRoYW4gb24gdGhlIHR3byBmbGFnLWNhcnJ5aW5nIG5vZGVzOiB0aGUgdGhlbWVcbiAqIHJlLXJlbmRlcnMgaXRzIGhlYWRlciBzZWN0aW9uLCBhbmQgYW4gb2JzZXJ2ZXIgYm91bmQgdG8gdGhlIG5vZGUgdGhhdCBjYXJyaWVkIHRoZVxuICogZmxhZyBhdCBjbGljayB0aW1lIHdvdWxkIGdvIGRlYWYgdGhlIG1vbWVudCB0aGF0IG5vZGUgd2FzIHJlcGxhY2VkLiBUaGUgY2FsbGJhY2sgaXNcbiAqIHR3byBjbGFzcyBjaGVja3MsIGFuZCB0aGUgb2JzZXJ2ZXIgb25seSBsaXZlcyBhcyBsb25nIGFzIHRoZSBndWlkZSBpcyB1cC5cbiAqL1xuY29uc3Qgb25HdWlkZUNsb3NlZCA9IChpc09wZW46ICgpID0+IGJvb2xlYW4sIGRvbmU6ICgpID0+IHZvaWQpID0+IHtcbiAgbGV0IG9wZW5lZCA9IGZhbHNlO1xuICBsZXQgdGltZXI6IG51bWJlcjtcblxuICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGRvbmUoKTtcbiAgfTtcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICBpZiAoaXNPcGVuKCkpIHtcbiAgICAgIG9wZW5lZCA9IHRydWU7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9IGVsc2UgaWYgKG9wZW5lZCkge1xuICAgICAgZmluaXNoKCk7XG4gICAgfVxuICB9KTtcblxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgfSk7XG5cbiAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBvcGVuZWQgfHwgZmluaXNoKCksIDEwMDApO1xufTtcblxuLyoqXG4gKiBSZWRlc2lnbmVkIHN0aWNreSBhZGQtdG8tY2FydCBiYXIuIFJlcGxhY2VzIHRoZSBcIlN0aWNreSBBZGQgVG8gQ2FydFwiIGFwcCdzIG93biBiYXJcbiAqICgjc2F0Y2JfYmFyLCBoaWRkZW4gaW4gQ1NTKSDigJQgdGhhdCBhcHAgb25seSBjbG9uZXMgdGhlIHN1Ym1pdCBidXR0b24sIHdpdGggbm8gd2F5IHRvXG4gKiBjaGFuZ2UgbWF0ZXJpYWwgb3Igc2l6ZSwgd2hpY2ggaXMgZXhhY3RseSB3aGF0IHRoaXMgYWRkcy4gTWF0ZXJpYWwvc2l6ZSBwb3BvdmVyc1xuICogcmV1c2UgYE9wdGlvbkJsb2NrYCwgc28gZXZlcnkgY2FyZCwgc3RhdGUgYW5kIGNsaWNrIGhhbmRsZXIgaXMgaWRlbnRpY2FsIHRvIHRoZSBidXlcbiAqIGJveDsgdGhlIHR3byBzdGF5IGluIHN5bmMgYmVjYXVzZSBib3RoIHVsdGltYXRlbHkganVzdCBkcml2ZSB0aGUgaG9zdCdzIDxzZWxlY3Q+cy5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0aWNreUJhciA9IChcbiAgcHJvZHVjdDogUHJvZHVjdCxcbiAgZ2V0SW1hZ2U6ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgb25NYXRlcmlhbEd1aWRlOiAoZnJvbTogQW5hbHl0aWNzKSA9PiB2b2lkLFxuICBvblNpemVHdWlkZTogKGZyb206IEFuYWx5dGljcykgPT4gdm9pZCxcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbikgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcnMtaW5mbyAucHJvZHVjdF9fdGl0bGUgaDEnKT8udGV4dENvbnRlbnQ/LnRyaW0oKSA/PyAnJztcblxuICBjb25zdCB0aHVtYiA9ICg8aW1nIGNsYXNzPVwiY3JzLXN0aWNreV9fdGh1bWJcIiBhbHQ9XCJcIiAvPikgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICAvKipcbiAgICogYGdldEltYWdlYCByZXNvbHZlcyB0aGUgaW1hZ2UgdGhlICpzZWxlY3RlZCBvcHRpb24qIGRyaXZlcywgd2hpY2ggaXMgbm90aGluZyBvbiBhXG4gICAqIHByb2R1Y3Qgd2l0aCBubyBvcHRpb25zOiB0aGVyZSBpcyBubyA8c2VsZWN0PiB0byByZWFkIGEgdmFsdWUgZnJvbSwgYW5kIGl0cyBzaW5nbGVcbiAgICogdmFyaWFudCB1c3VhbGx5IGNhcnJpZXMgbm8gYGZlYXR1cmVkX2ltYWdlYCBlaXRoZXIuIFRoZSBnYWxsZXJ5J3Mgb3duIGZpcnN0IGltYWdlXG4gICAqIHN0YW5kcyBpbiDigJQgdGhlIHNhbWUgcGljdHVyZSB0aGUgcGFnZSBpcyBhbHJlYWR5IHNob3dpbmcuXG4gICAqXG4gICAqIFdyaXR0ZW4gdGhyb3VnaCBhIGd1YXJkIGJlY2F1c2UgYW4gZW1wdHkgYHNyY2AgaXMgbm90IFwibm8gaW1hZ2VcIjogaXQgcmVzb2x2ZXNcbiAgICogYWdhaW5zdCB0aGUgcGFnZSBVUkwsIGFuZCB0aGUgYmFyIHJlbmRlcnMgYSBicm9rZW4taW1hZ2UgaWNvbiBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAqL1xuICBjb25zdCBzZXRUaHVtYiA9ICgpID0+IHtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW1hZ2VFbGVtZW50PignLnByb2R1Y3RfX21lZGlhLWl0ZW0gaW1nJyk7XG4gICAgY29uc3Qgc3JjID0gZ2V0SW1hZ2UoKSA/PyAoZ2FsbGVyeSA/IGdhbGxlcnkuY3VycmVudFNyYyB8fCBnYWxsZXJ5LnNyYyA6IHVuZGVmaW5lZCk7XG4gICAgaWYgKHNyYykgdGh1bWIuc3JjID0gc3JjO1xuICB9O1xuXG4gIHNldFRodW1iKCk7XG5cbiAgY29uc3Qgc3luY3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgLyoqIGBuYW1lYCBkb3VibGVzIGFzIHRoZSBjbG9zZSBldmVudCdzIEdBNCBsYWJlbCDigJQgc2FtZSB3b3JkaW5nIGFzIHRoZSBvcGVuIGV2ZW50LiAqL1xuICB0eXBlIFBpY2tlciA9IHsgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7IHBvcG92ZXI6IEhUTUxFbGVtZW50OyBuYW1lOiBzdHJpbmcgfTtcblxuICAvLyBPbmx5IG9uZSBwb3BvdmVyIG9wZW4gYXQgYSB0aW1lOyBjbG9zaW5nIGlzIHNoYXJlZCBieSB0aGUgb3V0c2lkZS1jbGljayBsaXN0ZW5lcixcbiAgLy8gdGhlIHRyaWdnZXIncyBvd24gdG9nZ2xlLCBzZWxlY3RpbmcgYSB2YWx1ZSBpbnNpZGUgdGhlIHBvcG92ZXIsIGFuZCB0aGUgYmFyXG4gIC8vIHNjcm9sbGluZyBhd2F5LiBgaGFzLXBvcG92ZXJgIGlzIHdoYXQgZHJpdmVzIHRoZSBiYWNrZHJvcCAoYW5kLCBvbiBtb2JpbGUsIHRoZVxuICAvLyBzY3JvbGwgbG9jaykuXG4gIC8vXG4gIC8vIGByZXBvcnRgIG1hcmtzIHRoZSBjbG9zZXMgdGhhdCBhcmUgdGhlIHVzZXIgZGlzbWlzc2luZyB0aGUgcG9wb3ZlciDigJQgdGhlIHRyaWdnZXInc1xuICAvLyBvd24gdG9nZ2xlIGFuZCBhIGNsaWNrL3RhcCBvdXRzaWRlIChpbmNsLiB0aGUgbW9iaWxlIGJhY2tkcm9wKS4gVGhlIG90aGVyIHBhdGhzXG4gIC8vIHN0YXkgc2lsZW50OiBwaWNraW5nIGEgdmFsdWUgYWxyZWFkeSBmaXJlcyBpdHMgb3duIHNlbGVjdCBldmVudCwgc3RlcHBpbmcgYXNpZGVcbiAgLy8gZm9yIGEgZ3VpZGUgcmVvcGVucyB0aGUgc2FtZSBwb3BvdmVyIGFmdGVyd2FyZHMsIGFuZCB0aGUgc2Nyb2xsLWF3YXkgY2xvc2UgaXNcbiAgLy8gcGFzc2l2ZSwgbm90IGEgZGVjaXNpb24uXG4gIGxldCBvcGVuUGlja2VyOiBQaWNrZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdCBjbG9zZVBpY2tlciA9IChyZXBvcnQgPSBmYWxzZSkgPT4ge1xuICAgIGlmICghb3BlblBpY2tlcikgcmV0dXJuO1xuICAgIG9wZW5QaWNrZXIudHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgb3BlblBpY2tlci50cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIG9wZW5QaWNrZXIucG9wb3Zlci5oaWRkZW4gPSB0cnVlO1xuICAgIGlmIChyZXBvcnQpXG4gICAgICBwdXNoRGF0YShgJHtTVElDS1lfQU5BTFlUSUNTLnByZWZpeH1fcGlja2VyX2Nsb3NlYCwgb3BlblBpY2tlci5uYW1lLCAnY2xpY2snLCBTVElDS1lfQU5BTFlUSUNTLmxvYyk7XG4gICAgb3BlblBpY2tlciA9IG51bGw7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtcG9wb3ZlcicpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dQaWNrZXIgPSAocGlja2VyOiBQaWNrZXIpID0+IHtcbiAgICBwaWNrZXIudHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgcGlja2VyLnRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICBwaWNrZXIucG9wb3Zlci5oaWRkZW4gPSBmYWxzZTtcbiAgICBvcGVuUGlja2VyID0gcGlja2VyO1xuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgnaGFzLXBvcG92ZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQW55dGhpbmcgdGhhdCB0YWtlcyBvdmVyIHRoZSBzY3JlZW4gcGFya3MgdGhlIGJhcjogaXQgaXMgZml4ZWQsIGFuZCBhYm92ZSB0aGVcbiAgICogdGhlbWUncyBvd24gb3ZlcmxheXMgaW4gaXRzIHN0YWNraW5nIGNvbnRleHQsIHNvIGl0IHdvdWxkIG90aGVyd2lzZSBzaXQgb24gdG9wIG9mXG4gICAqIHRoZW0uIENvdW50ZWQgcmF0aGVyIHRoYW4gdG9nZ2xlZCwgYmVjYXVzZSBgaXMtc3VzcGVuZGVkYCBoYXMgdHdvIGluZGVwZW5kZW50XG4gICAqIG93bmVycyDigJQgYSBndWlkZSBvcGVuZWQgZnJvbSBhIHBvcG92ZXIsIGFuZCB0aGUgY2FydCBkcmF3ZXIg4oCUIGFuZCBlaXRoZXIgY2FuIG9wZW5cbiAgICogb3ZlciB0aGUgb3RoZXIgKHRoZSBkcmF3ZXIgaXMgcmVhY2hhYmxlIGZyb20gdGhlIGhlYWRlciB3aGlsZSBhIGd1aWRlIGlzIHVwKSwgc29cbiAgICogd2hpY2hldmVyIGNsb3NlcyBmaXJzdCBtdXN0IG5vdCBicmluZyB0aGUgYmFyIGJhY2sgb3ZlciB0aGUgb25lIHN0aWxsIHN0YW5kaW5nLlxuICAgKlxuICAgKiBUaGUgcmV2ZWFsIG9ic2VydmVyIGlzIGZyb3plbiBmb3IgdGhlIGR1cmF0aW9uIHJhdGhlciB0aGFuIGNvbnN1bHRlZCBvbiB0aGUgd2F5XG4gICAqIGJhY2s6IGV2ZXJ5IG9uZSBvZiB0aGVzZSBvdmVybGF5cyBsb2NrcyB0aGUgcGFnZSBieSBmbGlwcGluZyBgYm9keWAgdG9cbiAgICogYG92ZXJmbG93OiBoaWRkZW5gLCB3aGljaCByZS1sYXlzIG91dCB0aGUgc2Nyb2xsZXIgYW5kIGNhbiBmaXJlIHRoZSBvYnNlcnZlciB3aXRoXG4gICAqIHRoZSBidXkgYm94IGJhY2sgaW4gdmlldywgc28gdGhlIGJhcidzIG93biBgaXMtdmlzaWJsZWAgaXMgbm90IHRydXN0d29ydGh5IHdoaWxlXG4gICAqIG9uZSBpcyB1cC4gVGhlIGZyZWV6ZSBjYW4gbGVhdmUgdGhhdCBzdGF0ZSBzdGFsZSwgc28gdGhlIGxhc3QgcmVsZWFzZSByZS1vYnNlcnZlc1xuICAgKiB0aGUgdGFyZ2V0IHRvIGZvcmNlIGEgZnJlc2ggcmVhZGluZy5cbiAgICovXG4gIGxldCBzdXNwZW5kZXJzID0gMDtcblxuICBjb25zdCBzdXNwZW5kID0gKCkgPT4ge1xuICAgIHN1c3BlbmRlcnMgKz0gMTtcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ2lzLXN1c3BlbmRlZCcpO1xuICB9O1xuXG4gIGNvbnN0IHJlc3VtZSA9ICgpID0+IHtcbiAgICBzdXNwZW5kZXJzID0gTWF0aC5tYXgoMCwgc3VzcGVuZGVycyAtIDEpO1xuICAgIGlmIChzdXNwZW5kZXJzKSByZXR1cm47XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdXNwZW5kZWQnKTtcbiAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgZ3VpZGUgY29tZXMgYmFjayB0aGUgd2F5IGl0IGxlZnQsIHdpdGggdGhlIHNhbWUgcG9wb3ZlciBvcGVuOiBjb25zdWx0aW5nIHRoZVxuICAgKiBndWlkZSBpcyB0aGUgbWlkZGxlIG9mIHBpY2tpbmcgYSB2YWx1ZSwgbm90IHRoZSBlbmQgb2YgaXQsIHNvIHRoZSBjYXJkcyBoYXZlIHRvIGJlXG4gICAqIHRoZXJlIHRvIHBpY2sgZnJvbSBvbiB0aGUgd2F5IGJhY2suIFRoZSBmcmVzaCByZWFkaW5nIGByZXN1bWVgIGZvcmNlcyB0aGVuIGNsb3Nlc1xuICAgKiB0aGUgcG9wb3ZlciBhZ2FpbiBpbiB0aGUgb25lIGNhc2UgdGhhdCB3YXJyYW50cyBpdCDigJQgdGhlIHBhZ2UgcmVhbGx5IGRpZCBlbmQgdXBcbiAgICogYmFjayBhdCB0aGUgYnV5IGJveCwgd2hlcmUgdGhlIHNhbWUgY2FyZHMgYXJlIGFscmVhZHkgb24gc2NyZWVuLlxuICAgKi9cbiAgY29uc3Qgc3RlcEFzaWRlRm9yR3VpZGUgPSAoaXNPcGVuOiAoKSA9PiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcmVvcGVuID0gb3BlblBpY2tlcjtcbiAgICBjbG9zZVBpY2tlcigpO1xuICAgIHN1c3BlbmQoKTtcbiAgICBvbkd1aWRlQ2xvc2VkKGlzT3BlbiwgKCkgPT4ge1xuICAgICAgLy8gRGVmZXJyZWQgcGFzdCB0aGUgY2xpY2sgdGhhdCBjbG9zZWQgdGhlIGd1aWRlLiBPdXIgb3duIGRyYXdlciBjbG9zZXNcbiAgICAgIC8vIHN5bmNocm9ub3VzbHkgaW5zaWRlIHRoYXQgY2xpY2ssIGFuZCBNdXRhdGlvbk9ic2VydmVyIGNhbGxiYWNrcyBsYW5kIGJldHdlZW5cbiAgICAgIC8vIGxpc3RlbmVycyBtaWQtZGlzcGF0Y2gg4oCUIHNvIHJlb3BlbmluZyBoZXJlIGFuZCBsZXR0aW5nIHRoZSBzYW1lIGNsaWNrIGJ1YmJsZVxuICAgICAgLy8gb24gdG8gdGhlIGRvY3VtZW50IHdvdWxkIGhpdCB0aGUgb3V0c2lkZS1jbGljayBsaXN0ZW5lciBhbmQgY2xvc2UgdGhlIHBvcG92ZXJcbiAgICAgIC8vIHJpZ2h0IGJhY2suIChUaGUgdGhlbWUncyBkcmF3ZXIgaGFwcGVucyB0byBkcm9wIGl0cyBmbGFnIGFzeW5jaHJvbm91c2x5LCB3aGljaFxuICAgICAgLy8gaXMgd2h5IG9ubHkgdGhlIE1hdGVyaWFsIEd1aWRlIHBhdGggZXZlciBsb3N0IHRoZSByYWNlLilcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHJlb3Blbikgc2hvd1BpY2tlcihyZW9wZW4pO1xuICAgICAgICByZXN1bWUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBpY2tlcnMgPSBwcm9kdWN0Lm9wdGlvbnMuZmxhdE1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIC8vIFNob3BpZnkncyBzeW50aGV0aWMgYFRpdGxlIC8gRGVmYXVsdCBUaXRsZWAgb24gYW4gb3B0aW9uLWxlc3MgcHJvZHVjdCDigJQgbm90aGluZ1xuICAgIC8vIHRvIHBpY2ssIHNvIHRoZSBiYXIgY2FycmllcyB0aGUgdGl0bGUgYW5kIHRoZSBDVEEgYWxvbmUuIFNlZSBgaXNSZWFsT3B0aW9uYC5cbiAgICBpZiAoIWlzUmVhbE9wdGlvbihvcHRpb24pKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBzd2F0Y2hlcyA9IGlzU3dhdGNoT3B0aW9uKG9wdGlvbi5uYW1lKTtcbiAgICAvLyBPbmx5IHRoaXMgYmFyJ3MgY29weSBvZiB0aGUgbGlua3Mgc3RlcHMgdGhlIGJhciBhc2lkZTsgdGhlIGJ1eSBib3gncyBvd24gZ3VpZGVcbiAgICAvLyBsaW5rcyBnZXQgdGhlIGNhbGxiYWNrcyB1bnRvdWNoZWQuXG4gICAgY29uc3QgZ3VpZGUgPSBidWlsZEd1aWRlKFxuICAgICAgb3B0aW9uLFxuICAgICAgKGZyb20pID0+IHtcbiAgICAgICAgc3RlcEFzaWRlRm9yR3VpZGUobWF0ZXJpYWxHdWlkZUlzT3Blbik7XG4gICAgICAgIG9uTWF0ZXJpYWxHdWlkZShmcm9tKTtcbiAgICAgIH0sXG4gICAgICAoZnJvbSkgPT4ge1xuICAgICAgICBzdGVwQXNpZGVGb3JHdWlkZShzaXplR3VpZGVJc09wZW4pO1xuICAgICAgICBvblNpemVHdWlkZShmcm9tKTtcbiAgICAgIH0sXG4gICAgICBTVElDS1lfQU5BTFlUSUNTLFxuICAgICk7XG4gICAgY29uc3QgYmxvY2sgPSBPcHRpb25CbG9jayhwcm9kdWN0LCBvcHRpb24sIGluZGV4LCBndWlkZSwgU1RJQ0tZX0FOQUxZVElDUyk7XG4gICAgc3luY3MucHVzaChibG9jay5zeW5jKTtcblxuICAgIC8vIE1vYmlsZSBvbmx5IChoaWRkZW4gaW4gQ1NTIGVsc2V3aGVyZSk6IHRoZXJlIHRoZSBwb3BvdmVyIGlzIGEgZnVsbC13aWR0aCBzaGVldFxuICAgIC8vIGNvdmVyaW5nIHRoZSBwYWdlLCBzbyB0aGUgYmFja2Ryb3AgdGhhdCBkaXNtaXNzZXMgaXQgb24gZGVza3RvcCBpcyBtb3N0bHkgYmVoaW5kXG4gICAgLy8gdGhlIHNoZWV0IGl0c2VsZiBhbmQgcmVhZHMgYXMgbm8gd2F5IG91dC4gQ291bnRlZCBhcyBhIGRpc21pc3NhbCwgc2FtZSBhcyB0aGVcbiAgICAvLyB0cmlnZ2VyJ3Mgb3duIHRvZ2dsZSwgc28gaXQgcmVwb3J0cyB0aGUgY2xvc2UuIEluc2lkZSBgLmNycy1zdGlja3lfX3BpY2tlcmAsIHNvXG4gICAgLy8gdGhlIG91dHNpZGUtY2xpY2sgbGlzdGVuZXIgbGVhdmVzIHRoZSBjbGljayBhbG9uZS5cbiAgICBjb25zdCBjbG9zZUJ0biA9IChcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjcnMtc3RpY2t5X19jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZVBpY2tlcih0cnVlKX0gLz5cbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gQ0xPU0VfSUNPTjtcblxuICAgIGNvbnN0IHBvcG92ZXIgPSAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JzLXN0aWNreV9fcG9wb3ZlclwiIGhpZGRlbj5cbiAgICAgICAge2Nsb3NlQnRufVxuICAgICAgICB7YmxvY2sucm9vdH1cbiAgICAgIDwvZGl2PlxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBDYXB0dXJlIHBoYXNlLCBzbyB0aGlzIHJ1bnMgYmVmb3JlIHRoZSBjYXJkJ3Mgb3duIGhhbmRsZXIgKGJvdW5kIGluXG4gICAgLy8gYE9wdGlvbkJsb2NrYCkgZmlyZXMgYHNldE9wdGlvbmAgYW5kLCB0aHJvdWdoIGl0LCBEYXduJ3MgY2hhbmdlIGhhbmRsZXIuXG4gICAgcG9wb3Zlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJ1tkYXRhLXZhbHVlXScpKSBzdXBwcmVzc0Rhd25TY3JvbGxKdW1wKCk7XG4gICAgICB9LFxuICAgICAgeyBjYXB0dXJlOiB0cnVlIH0sXG4gICAgKTtcblxuICAgIC8vIFBpY2tpbmcgYSB2YWx1ZSBjbG9zZXMgdGhlIHBvcG92ZXIg4oCUIHRoZSB0cmlnZ2VyJ3Mgb3duIGxhYmVsIHJlZmxlY3RzIHRoZSBjaGFuZ2UuXG4gICAgcG9wb3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCdbZGF0YS12YWx1ZV0nKSkgY2xvc2VQaWNrZXIoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvdCA9IHN3YXRjaGVzID8gKCg8c3BhbiBjbGFzcz1cImNycy1zdGlja3lfX2RvdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+KSBhcyBIVE1MRWxlbWVudCkgOiBudWxsO1xuICAgIGNvbnN0IGxhYmVsID0gKDxzcGFuIGNsYXNzPVwiY3JzLXN0aWNreV9fdHJpZ2dlci1sYWJlbFwiIC8+KSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0IHRyaWdnZXIgPSAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPXtgY3JzLXN0aWNreV9fdHJpZ2dlciAke3N3YXRjaGVzID8gJ2Nycy1zdGlja3lfX3RyaWdnZXItLXN3YXRjaCcgOiAnY3JzLXN0aWNreV9fdHJpZ2dlci0tc2l6ZSd9YH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdhc09wZW4gPSBvcGVuUGlja2VyPy50cmlnZ2VyID09PSB0cmlnZ2VyO1xuICAgICAgICAgIC8vIFJlLWNsaWNraW5nIHRoZSB0cmlnZ2VyIGlzIGEgZGlzbWlzc2FsIGFuZCByZXBvcnRzIHRoZSBjbG9zZTsgc3dpdGNoaW5nXG4gICAgICAgICAgLy8gdG8gdGhlIG90aGVyIHBpY2tlciBvbmx5IHJlcG9ydHMgdGhhdCBwaWNrZXIncyBvcGVuLlxuICAgICAgICAgIGNsb3NlUGlja2VyKHdhc09wZW4pO1xuICAgICAgICAgIGlmICh3YXNPcGVuKSByZXR1cm47XG4gICAgICAgICAgc2hvd1BpY2tlcih7IHRyaWdnZXIsIHBvcG92ZXIsIG5hbWU6IHN3YXRjaGVzID8gJ01hdGVyaWFsJyA6ICdTaXplJyB9KTtcbiAgICAgICAgICAvLyBPbmx5IHRoZSBvcGVuIGhhbGYgb2YgdGhlIHRvZ2dsZSBpcyByZXBvcnRlZCDigJQgdGhlIG1ldHJpYyBpcyBcInJlYWNoZWQgZm9yXG4gICAgICAgICAgLy8gdGhlIHBpY2tlclwiLCBhbmQgYSBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgdHJpZ2dlciBqdXN0IGRpc21pc3NlcyBpdC5cbiAgICAgICAgICBwdXNoRGF0YShcbiAgICAgICAgICAgIGAke1NUSUNLWV9BTkFMWVRJQ1MucHJlZml4fV9waWNrZXJgLFxuICAgICAgICAgICAgc3dhdGNoZXMgPyAnTWF0ZXJpYWwnIDogJ1NpemUnLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIFNUSUNLWV9BTkFMWVRJQ1MubG9jLFxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtkb3QgPz8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpfVxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgc3luY3MucHVzaCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2V0U2VsZWN0KG9wdGlvbi5uYW1lKT8udmFsdWUgPz8gJyc7XG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGN1cnJlbnQ7XG4gICAgICBpZiAoZG90KSBkb3Quc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtaW1hZ2UnLCBzd2F0Y2hGb3IoY3VycmVudCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X19waWNrZXJcIj5cbiAgICAgICAge3RyaWdnZXJ9XG4gICAgICAgIHtwb3BvdmVyfVxuICAgICAgPC9kaXY+XG4gICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghb3BlblBpY2tlciB8fCAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5jcnMtc3RpY2t5X19waWNrZXInKSkgcmV0dXJuO1xuICAgIGNsb3NlUGlja2VyKHRydWUpO1xuICB9KTtcblxuICAvLyBUaGUgcmVhbCBzdWJtaXQgYnV0dG9uIGNhcnJpZXMgdGhlIHRoZW1lJ3Mgb3duIGFkZC10by1jYXJ0IGJlaGF2aW91ciAobG9hZGluZ1xuICAvLyBzdGF0ZSwgY2FydCBkcmF3ZXIsIGFuYWx5dGljcykg4oCUIHRoaXMganVzdCBwcm94aWVzIHRoZSBjbGljayByYXRoZXIgdGhhblxuICAvLyByZWltcGxlbWVudGluZyBhbnkgb2YgaXQuIEl0cyBsYWJlbCAoaW5jbC4gcHJpY2UpIGlzIG1pcnJvcmVkIGluIGBwcmljZUluQnV0dG9uYC5cbiAgY29uc3QgY3RhID0gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY3JzLXN0aWNreV9fY3RhXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAvLyBUaGUgdmFyaWFudCBpcyB3aGF0IG1ha2VzIHRoaXMgYWRkLXRvLWNhcnQgd29ydGggc2VwYXJhdGluZyBmcm9tIHRoZSBidXlcbiAgICAgICAgLy8gYm94J3Mgb3duIOKAlCBpdCBpcyB0aGUgb25lIHJlYWNoYWJsZSB3aXRob3V0IHNjcm9sbGluZyBiYWNrIHVwLlxuICAgICAgICBwdXNoRGF0YShcbiAgICAgICAgICBgJHtTVElDS1lfQU5BTFlUSUNTLnByZWZpeH1fYWRkX3RvX2NhcnRgLFxuICAgICAgICAgICdBZGQgdG8gY2FydCcsXG4gICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICBTVElDS1lfQU5BTFlUSUNTLmxvYyxcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJy5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19zdWJtaXQnKT8uY2xpY2soKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgQWRkIHRvIGNhcnRcbiAgICA8L2J1dHRvbj5cbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBjb25zdCByb290ID0gKFxuICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5XCI+XG4gICAgICB7LyogQ292ZXJzIHRoZSBwYWdlIHdoaWxlIGEgcG9wb3ZlciBpcyBvcGVuIOKAlCBzZWUgZ2xvYmFscy5jc3MsIHdoZXJlIGl0IGlzXG4gICAgICAgICAgdHJhbnNwYXJlbnQgb24gZGVza3RvcCBhbmQgYSBzY3JpbSBhdCB0aGUgd2lkdGggdGhlIHBvcG92ZXIgYmVjb21lcyBhIHNoZWV0LlxuICAgICAgICAgIE91dHNpZGUgYC5jcnMtc3RpY2t5X19waWNrZXJgLCBzbyB0aGUgb3V0c2lkZS1jbGljayBsaXN0ZW5lciBjbG9zZXMgb24gaXQuICovfVxuICAgICAgPGRpdiBjbGFzcz1cImNycy1zdGlja3lfX2JhY2tkcm9wXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X19pbm5lclwiPlxuICAgICAgICB7dGh1bWJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcnMtc3RpY2t5X190aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNycy1zdGlja3lfX2NvbnRyb2xzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNycy1zdGlja3lfX3BpY2tlcnNcIj57cGlja2Vyc308L2Rpdj5cbiAgICAgICAgICB7Y3RhfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIC8vIFNob3dzIG9uY2UgdGhlIGJ1eSBib3gncyBvd24gb3B0aW9uIGNhcmRzIGhhdmUgc2Nyb2xsZWQgcGFzdCB0aGUgdG9wIG9mIHRoZVxuICAvLyB2aWV3cG9ydCwgYW5kIGhpZGVzIGFnYWluIG9uY2UgdGhleSBzY3JvbGwgYmFjayBpbnRvIHZpZXcuIEFuIG9wZW4gcG9wb3ZlciBpc1xuICAvLyBhbmNob3JlZCB0byB0aGUgYmFyLCBzbyBpdCBnb2VzIHdpdGggaXQgcmF0aGVyIHRoYW4gYmVpbmcgbGVmdCBmbG9hdGluZy5cbiAgLy8gRnJvemVuIHdoaWxlIGEgZ3VpZGUgaXMgdXAg4oCUIHNlZSBgc3RlcEFzaWRlRm9yR3VpZGVgLCB3aGljaCBvd25zIHRoZSBiYXIgdW50aWwgdGhlXG4gIC8vIGd1aWRlIGNsb3NlcyBhbmQgcmUtb2JzZXJ2ZXMgdGhlIHRhcmdldCB0byBwaWNrIHRoaXMgYmFjayB1cC5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRyeV0pID0+IHtcbiAgICBpZiAocm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXN1c3BlbmRlZCcpKSByZXR1cm47XG4gICAgY29uc3QgdmlzaWJsZSA9ICFlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QudG9wIDwgMDtcbiAgICByb290LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnLCB2aXNpYmxlKTtcbiAgICBpZiAoIXZpc2libGUpIGNsb3NlUGlja2VyKCk7XG4gIH0pO1xuICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjYXJ0IGRyYXdlciBwYXJrcyB0aGUgYmFyIHRoZSBzYW1lIHdheSBhIGd1aWRlIGRvZXMsIGJ1dCBpcyB3YXRjaGVkIGdsb2JhbGx5XG4gICAqIGluc3RlYWQgb2YgYmVpbmcgYXJtZWQgYnkgYSBjbGljazogb3VyIG93biBDVEEsIHRoZSBidXkgYm94J3Mgc3VibWl0IGFuZCB0aGVcbiAgICogaGVhZGVyJ3MgY2FydCBpY29uIGFsbCByZWFjaCBpdCwgYW5kIHRoZSB0aGVtZSBvcGVucyBpdCBhc3luY2hyb25vdXNseSBhZnRlciB0aGVcbiAgICogYWRkLXRvLWNhcnQgcmVxdWVzdCBsYW5kcy4gSXQgYWxzbyBjb21lcyBiYWNrIHBsYWluLCB3aXRoIG5vIHBvcG92ZXIgcmVzdG9yZWQg4oCUXG4gICAqIGFkZGluZyB0byBjYXJ0IGVuZHMgdGhlIHBpY2sgcmF0aGVyIHRoYW4gaW50ZXJydXB0aW5nIGl0LlxuICAgKlxuICAgKiBXYXRjaGVkIGZyb20gdGhlIGRvY3VtZW50IGRvd24sIGZvciB0aGUgc2FtZSByZWFzb24gYG9uR3VpZGVDbG9zZWRgIGlzOiB0aGUgZHJhd2VyXG4gICAqIHJlLXJlbmRlcnMgYWZ0ZXIgZXZlcnkgY2FydCBtdXRhdGlvbiwgYW5kIGFuIG9ic2VydmVyIGJvdW5kIHRvIHRoZSBub2RlIHRoYXRcbiAgICogY2FycmllZCB0aGUgZmxhZyB3b3VsZCBnbyBkZWFmIGlmIHRoYXQgbm9kZSB3ZXJlIHJlcGxhY2VkLiBDbGFzcyBjaHVybiBlbHNld2hlcmUgb25cbiAgICogdGhlIHBhZ2UgY29zdHMgb25lIGB0YWdOYW1lYCBjaGVjay5cbiAgICovXG4gIGxldCBjYXJ0T3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGNhcnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgaWYgKCFyZWNvcmRzLnNvbWUoKHJlY29yZCkgPT4gKHJlY29yZC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdDQVJULURSQVdFUicpKSByZXR1cm47XG4gICAgY29uc3Qgb3BlbiA9IGNhcnREcmF3ZXJJc09wZW4oKTtcbiAgICBpZiAob3BlbiA9PT0gY2FydE9wZW4pIHJldHVybjtcbiAgICBjYXJ0T3BlbiA9IG9wZW47XG4gICAgaWYgKCFvcGVuKSByZXR1cm4gcmVzdW1lKCk7XG4gICAgLy8gVGhlIGJhciBpcyBvbiBpdHMgd2F5IG91dCwgYW5kIGFuIG9wZW4gcG9wb3ZlciBpcyBhbmNob3JlZCB0byBpdC4gU2lsZW50OiB0aGVcbiAgICAvLyBkcmF3ZXIgdGFraW5nIG92ZXIgaXMgbm90IHRoZSB1c2VyIGRpc21pc3NpbmcgdGhlIHBpY2tlci5cbiAgICBjbG9zZVBpY2tlcigpO1xuICAgIHN1c3BlbmQoKTtcbiAgfSk7XG5cbiAgY2FydE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgIHNldFRodW1iKCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJy5jcnMtcHJvZHVjdCAucHJvZHVjdC1mb3JtX19zdWJtaXQnKTtcbiAgICBjdGEuZGlzYWJsZWQgPSBidXR0b24/LmRpc2FibGVkID8/IGZhbHNlO1xuICAgIHN5bmNzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgfTtcblxuICByZXR1cm4geyByb290LCBzeW5jIH07XG59O1xuIiwiaW1wb3J0IHsgd2FpdEVsIH0gZnJvbSAnY3JzZGV2dG9vbCc7XG5pbXBvcnQgeyBzdHJpcEN1cnJlbmN5Q29kZSB9IGZyb20gJy4uL21vbmV5JztcblxuLyoqXG4gKiBUaGUgYm90dG9tIG9mIHRoZSBwYWdlIOKAlCB0aGUgRmVyYSByZXZpZXdzIHdpZGdldCBhbmQgdGhlIHRoZW1lJ3MgXCJZb3UgbWF5IGFsc28gbGlrZVwiXG4gKiBncmlkIOKAlCBib3RoIHNpdCBpbnNpZGUgPHByb2R1Y3QtcmVjb21tZW5kYXRpb25zPiwgd2hpY2ggRGF3biBmaWxscyBpbiBvbmx5IG9uY2UgdGhlXG4gKiBzZWN0aW9uIHNjcm9sbHMgaW50byB2aWV3LCBzbyBlYWNoIGJsb2NrIGlzIHdhaXRlZCBmb3Igb24gaXRzIG93bi5cbiAqXG4gKiBBbG1vc3QgZXZlcnl0aGluZyB0aGUgZGVzaWduIGNoYW5nZXMgZG93biB0aGVyZSBpcyBzdHlsaW5nLCBhbmQgaXQgaGFuZ3Mgb2ZmIHRoZVxuICogYC5jcnMtcmVjc2AgY2xhc3MgYWRkZWQgaGVyZSByYXRoZXIgdGhhbiBvZmYgYC5jcnMtcGRwYDogdGhlIHRoZW1lJ3MgY2FyZCBjbGFzc2VzXG4gKiAoLnByaWNlLCAuYmFkZ2UsIC5jYXJkX19jb250ZW50KSBhcmUgbm90IHVuaXF1ZSB0byB0aGlzIHNlY3Rpb24uIFdoYXQgaXMgbGVmdCBhcmUgdGhlXG4gKiB0d28gc3RyaW5ncyBDU1MgY2Fubm90IHJlYWNoLlxuICovXG5leHBvcnQgY29uc3QgZHJlc3NSZWNvbW1lbmRhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCdwcm9kdWN0LXJlY29tbWVuZGF0aW9ucycpO1xuICByb290LmNsYXNzTGlzdC5hZGQoJ2Nycy1yZWNzJyk7XG5cbiAgZHJlc3NHcmlkKCk7XG4gIGRyZXNzUmV2aWV3c0hlYWRlcigpO1xuICBzcXVhcmVPZmZSZXZpZXdzKCk7XG59O1xuXG4vKipcbiAqIFRoZSBzdG9yZSBydW5zIFNob3BpZnkgTWFya2V0cywgc28gdGhlIHRoZW1lIHJlbmRlcnMgdGhlIGN1cnJlbmN5IGNvZGUgaW50byB0aGUgY2FyZFxuICogcHJpY2UgKFwi4oK0Nyw0NjguMDAgVUFIXCIpOyB0aGUgZGVzaWduIHNob3dzIHRoZSBhbW91bnQgYWxvbmUsIGV4YWN0bHkgYXMgdGhlIGJ1eSBib3hcbiAqIGFscmVhZHkgZG9lcy4gVGhlIGNvZGUgc2l0cyBpbiB0aGUgdGV4dCBub2RlIHJhdGhlciB0aGFuIGluIGl0cyBvd24gZWxlbWVudCwgc28gQ1NTXG4gKiBjYW4ndCBoaWRlIGl0LlxuICovXG5jb25zdCBkcmVzc0dyaWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlY3MgLnByb2R1Y3QtZ3JpZCcpO1xuICBncmlkXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcucHJpY2UtaXRlbScpXG4gICAgLmZvckVhY2goKGVsKSA9PiAoZWwudGV4dENvbnRlbnQgPSBzdHJpcEN1cnJlbmN5Q29kZShlbC50ZXh0Q29udGVudCEpKSk7XG59O1xuXG4vKipcbiAqIEZlcmEgcHJpbnRzIFwiKDUsMjQ0IHJldmlld3MpXCIgbmV4dCB0byB0aGUgYXZlcmFnZTsgdGhlIGRlc2lnbiBzaG93cyBcIjUuMktcIi4gQm90aCB0aGVcbiAqIHdpZGUgYW5kIHRoZSBuYXJyb3cgdmFyaWFudCBvZiB0aGUgc3RyaW5nIGFyZSByZXdyaXR0ZW4g4oCUIEZlcmEgc3dhcHMgYmV0d2VlbiB0aGVtIGJ5XG4gKiBicmVha3BvaW50LCBhbmQgdGhlIGRlc2lnbiBoYXMgb25lIHJvdyBmb3IgYm90aC5cbiAqXG4gKiBOb3QgcmUtYXBwbGllZCBhZnRlciBcIlNob3cgTW9yZVwiOiBGZXJhIGFwcGVuZHMgdG8gdGhlIGxpc3QgYW5kIGxlYXZlcyB0aGUgaGVhZGVyIGFsb25lLlxuICovXG5jb25zdCBkcmVzc1Jldmlld3NIZWFkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgd2FpdEVsPEhUTUxFbGVtZW50PignLmNycy1yZWNzIC5mZXJhLXJldmlld3MtY291bnQgW2RhdGEtZmVyYS1yYXRpbmctY291bnRdJyk7XG4gIGNvbnN0IHRvdGFsID0gTnVtYmVyKGNvdW50LmRhdGFzZXQudmFsdWUpO1xuICBjb25zdCBsYWJlbCA9IHRvdGFsID49IDEwMDAgPyBgJHsodG90YWwgLyAxMDAwKS50b0ZpeGVkKDEpfUtgIDogU3RyaW5nKHRvdGFsKTtcbiAgY291bnRcbiAgICAuY2xvc2VzdCgnLmZlcmEtcmV2aWV3cy1jb3VudCcpIVxuICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmZlcmEtcmV2aWV3cy1jb3VudC1zdHInKVxuICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnRleHRDb250ZW50ID0gbGFiZWwpKTtcbn07XG5cbi8qKlxuICogYGdsb2JhbHMuY3NzYCB0dXJucyBGZXJhJ3MgbWFzb25yeSBpbnRvIGEgcGxhaW4gZ3JpZDsgYSBncmlkLCB1bmxpa2UgbWFzb25yeSwgcmVhZHMgYXNcbiAqIGJyb2tlbiB3aGVuIGl0cyBsYXN0IHJvdyBpcyBzaG9ydC4gRmVyYSBwYWdlcyBpbiBuaW5lcywgd2hpY2ggZmlsbHMgbm8gcm93IHdpZHRoIHRoZVxuICogZGVzaWduIHVzZXMsIHNvIHRoZSByZW1haW5kZXIgaXMgaGlkZGVuIOKAlCA4IGNhcmRzIG9uIGRlc2t0b3AsIGFzIGRlc2lnbmVkLCBhbmQgb25lIG1vcmVcbiAqIGZ1bGwgcm93IG9uIGV2ZXJ5IFwiU2hvdyBNb3JlXCIuXG4gKlxuICogVGhlIGNvbHVtbiBjb3VudCBpcyByZWFkIGJhY2sgb2ZmIHRoZSBncmlkIHJhdGhlciB0aGFuIHJlcGVhdGVkIGhlcmUsIHNvIHRoZSB0d29cbiAqIGJyZWFrcG9pbnRzIHN0YXkgd3JpdHRlbiBkb3duIGluIG9uZSBwbGFjZS4gT25seSBgY2hpbGRMaXN0YCBpcyBvYnNlcnZlZDogaGlkaW5nIGEgY2FyZFxuICogaXMgYW4gYXR0cmlidXRlIGNoYW5nZSwgd2hpY2gga2VlcHMgdGhpcyBvdXQgb2YgaXRzIG93biBvYnNlcnZlci5cbiAqL1xuY29uc3Qgc3F1YXJlT2ZmUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCcuY3JzLXJlY3MgLmZlcmEtbWFzb25yeS1pdGVtcycpO1xuXG4gIGNvbnN0IHNxdWFyZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtcykuZ3JpZFRlbXBsYXRlQ29sdW1ucy5zcGxpdCgnICcpLmxlbmd0aDtcbiAgICBjb25zdCBjYXJkcyA9IEFycmF5LmZyb20oaXRlbXMuY2hpbGRyZW4pO1xuICAgIGNvbnN0IGtlZXAgPSBNYXRoLmZsb29yKGNhcmRzLmxlbmd0aCAvIGNvbHVtbnMpICogY29sdW1ucztcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2Nycy1yZWNzLW92ZXJmbG93JywgaSA+PSBrZWVwKSk7XG4gIH07XG5cbiAgc3F1YXJlKCk7XG4gIG5ldyBNdXRhdGlvbk9ic2VydmVyKHNxdWFyZSkub2JzZXJ2ZShpdGVtcywgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzcXVhcmUpO1xufTtcbiIsIi8qKlxuICogVGFsa3MgdG8gRGF3bidzIG93biBBamF4IENhcnQgQVBJIGFuZCBwdWIvc3ViIGJ1cyByYXRoZXIgdGhhbiByZWltcGxlbWVudGluZyBhbnkgb2ZcbiAqIGl0IOKAlCBgY2FydC1kcmF3ZXJgL2BjYXJ0LW5vdGlmaWNhdGlvbmAncyBgZ2V0U2VjdGlvbnNUb1JlbmRlcmAvYHJlbmRlckNvbnRlbnRzYCwgYW5kXG4gKiBgd2luZG93LnJvdXRlcy5jYXJ0X2FkZF91cmxgLCBhcmUgdGhlIHNhbWUgdGhlbWUtZ2xvYmFsIHN1cmZhY2UgYHByb2R1Y3QtZm9ybS5qc2BcbiAqIGl0c2VsZiB1c2VzLCBqdXN0IGNhbGxlZCBmcm9tIG91ciBvd24gY29kZSBpbnN0ZWFkIG9mIGEgZm9ybSBzdWJtaXQuXG4gKi9cblxudHlwZSBDYXJ0RWxlbWVudCA9IEhUTUxFbGVtZW50ICYge1xuICBnZXRTZWN0aW9uc1RvUmVuZGVyOiAoKSA9PiB7IGlkOiBzdHJpbmcgfVtdO1xuICByZW5kZXJDb250ZW50czogKHN0YXRlOiB1bmtub3duKSA9PiB2b2lkO1xufTtcblxuY29uc3QgY2FydEVsZW1lbnQgPSAoKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPENhcnRFbGVtZW50PignY2FydC1ub3RpZmljYXRpb24nKSA/PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPENhcnRFbGVtZW50PignY2FydC1kcmF3ZXInKTtcblxuZXhwb3J0IGNvbnN0IGNhcnRIYXNWYXJpYW50ID0gYXN5bmMgKHZhcmlhbnRJZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGNhcnQgPSBhd2FpdCBmZXRjaCgnL2NhcnQuanMnKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG4gIHJldHVybiBjYXJ0Lml0ZW1zLnNvbWUoKGl0ZW06IHsgdmFyaWFudF9pZDogbnVtYmVyIH0pID0+IGl0ZW0udmFyaWFudF9pZCA9PT0gdmFyaWFudElkKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIHZhcmlhbnQsIHNpbGVudGx5IOKAlCBubyBkcmF3ZXIgcmVuZGVyIGhlcmUuIFRoZSBjYWxsZXIgYXBwbGllcyB0aGUgZGlzY291bnRcbiAqIHJpZ2h0IGFmdGVyIGFuZCByZW5kZXJzIG9uY2UgdGhhdCdzIGRvbmUgdG9vLCBzbyB0aGUgZHJhd2VyIG5ldmVyIGhhcyBhIG1vbWVudCB3aGVyZVxuICogaXQncyBzaG93aW5nIHRoZSBnaWZ0IGxpbmUgYXQgZnVsbCBwcmljZSAoc2VlIGBhcHBseURpc2NvdW50QW5kUmVmcmVzaGApLlxuICovXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHZhcmlhbnRJZDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgYm9keS5hcHBlbmQoJ2lkJywgU3RyaW5nKHZhcmlhbnRJZCkpO1xuICBib2R5LmFwcGVuZCgncXVhbnRpdHknLCAnMScpO1xuICBhd2FpdCBmZXRjaCgnL2NhcnQvYWRkLmpzJywgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSwgYm9keSB9KTtcbn07XG5cbi8qKlxuICogQXBwbGllcyBgY29kZWAgc3RyYWlnaHQgdG8gdGhlIGNhcnQgdmlhIGAvY2FydC91cGRhdGUuanNgJ3Mgb3duIGBkaXNjb3VudGAgZmllbGQsXG4gKiByYXRoZXIgdGhhbiB0aGUgYC9kaXNjb3VudC88Y29kZT5gIFwiZGVlcCBsaW5rXCIgdGhpcyB1c2VkIG9yaWdpbmFsbHk6IHRoYXQgcm91dGUgb25seVxuICogcXVldWVzIHRoZSBjb2RlIGZvciB0aGUgbmV4dCBDaGVja291dCBzZXNzaW9uLCBzbyBgL2NhcnQuanNgIChhbmQgdGhlIGRyYXdlcikga2VwdFxuICogc2hvd2luZyB0aGUgZ2lmdCBhdCBmdWxsIHByaWNlIHVudGlsIHRoZSBuZXh0IHVucmVsYXRlZCByZS1yZW5kZXIg4oCUIGEgcmVsb2FkLCBvciBhXG4gKiBsYXRlciBjYXJ0LXVwZGF0ZSDigJQgY2F1Z2h0IGl0IHVwLiBgL2NhcnQvdXBkYXRlLmpzYCBhcHBsaWVzIHRoZSBkaXNjb3VudCBhbmQgcmV0dXJuc1xuICogZnJlc2hseSByZW5kZXJlZCBgc2VjdGlvbnNgIGluIHRoZSBzYW1lIHJlc3BvbnNlLCBzbyBvbmUgcmVuZGVyIGhlcmUgaXMgZW5vdWdoLlxuICpcbiAqIGBkaXNjb3VudGAgcmVwbGFjZXMgdGhlIGNhcnQncyAqZW50aXJlKiBhY3RpdmUgY29kZSBzZXQgcmF0aGVyIHRoYW4gYWRkaW5nIHRvIGl0LCBzb1xuICogd2hhdGV2ZXIncyBhbHJlYWR5IGFwcGxpY2FibGUgaXMgcmVhZCBmaXJzdCBhbmQgY2FycmllZCBmb3J3YXJkIOKAlCBvdGhlcndpc2UgdGhpc1xuICogd291bGQgc2lsZW50bHkga25vY2sgb3V0IGEgZGlzY291bnQgdGhlIGN1c3RvbWVyIGFwcGxpZWQgdGhlbXNlbHZlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5RGlzY291bnRBbmRSZWZyZXNoID0gYXN5bmMgKGNvZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCBjdXJyZW50Q2FydCA9IGF3YWl0IGZldGNoKCcvY2FydC5qcycpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcbiAgY29uc3QgY29kZXMgPSBbXG4gICAgLi4uKGN1cnJlbnRDYXJ0LmRpc2NvdW50X2NvZGVzID8/IFtdKVxuICAgICAgLmZpbHRlcigoZDogeyBhcHBsaWNhYmxlOiBib29sZWFuOyBjb2RlOiBzdHJpbmcgfSkgPT4gZC5hcHBsaWNhYmxlICYmIGQuY29kZSAhPT0gY29kZSlcbiAgICAgIC5tYXAoKGQ6IHsgY29kZTogc3RyaW5nIH0pID0+IGQuY29kZSksXG4gICAgY29kZSxcbiAgXS5qb2luKCcsJyk7XG5cbiAgY29uc3QgY2FydCA9IGNhcnRFbGVtZW50KCk7XG4gIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgYm9keS5hcHBlbmQoJ2Rpc2NvdW50JywgY29kZXMpO1xuICBpZiAoY2FydCkge1xuICAgIGJvZHkuYXBwZW5kKCdzZWN0aW9ucycsIGNhcnQuZ2V0U2VjdGlvbnNUb1JlbmRlcigpLm1hcCgocykgPT4gcy5pZCkuam9pbignLCcpKTtcbiAgICBib2R5LmFwcGVuZCgnc2VjdGlvbnNfdXJsJywgbG9jYXRpb24ucGF0aG5hbWUpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2NhcnQvdXBkYXRlLmpzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXG4gICAgYm9keSxcbiAgfSkudGhlbigocikgPT4gci5qc29uKCkpO1xuXG4gIGNhcnQ/LnJlbmRlckNvbnRlbnRzKHJlc3BvbnNlKTtcbn07XG5cbi8vIGBQVUJfU1VCX0VWRU5UUy5jYXJ0VXBkYXRlYCBpbiB0aGUgdGhlbWUncyBvd24gY29uc3RhbnRzLmpzIOKAlCBkZWNsYXJlZCB3aXRoIGBjb25zdGBcbi8vIHRoZXJlLCBzbyB1bmxpa2UgYHN1YnNjcmliZWAvYHB1Ymxpc2hgIChmdW5jdGlvbiBkZWNsYXJhdGlvbnMpIGl0IG5ldmVyIGxhbmRzIG9uXG4vLyBgd2luZG93YCwgYW5kIGhhcyB0byBiZSBpbmxpbmVkIGFzIGEgbGl0ZXJhbCBpbnN0ZWFkIG9mIHJlYWQgb2ZmIHRoZSB0aGVtZS5cbmNvbnN0IENBUlRfVVBEQVRFX0VWRU5UID0gJ2NhcnQtdXBkYXRlJztcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNhcnRVcGRhdGUgPSAoaGFuZGxlcjogKGV2ZW50OiB7IHNvdXJjZT86IHN0cmluZyB9KSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IGdsb2JhbHMgPSB3aW5kb3cgYXMgdW5rbm93biBhcyB7XG4gICAgc3Vic2NyaWJlPzogKGV2ZW50OiBzdHJpbmcsIGNiOiAoZTogeyBzb3VyY2U/OiBzdHJpbmcgfSkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgfTtcbiAgZ2xvYmFscy5zdWJzY3JpYmU/LihDQVJUX1VQREFURV9FVkVOVCwgaGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEV2ZXJ5IGNhcnQtdXBkYXRlIGhhbmRsZXIgd3JpdGVzIHRvIHRoZSBjYXJ0IGFuZCB0aGVuIHJlbmRlcnMgdGhlIGRyYXdlciBmcm9tIHRoZVxuICogcmVzcG9uc2UsIHNvIHR3byBvZiB0aGVtIHJ1bm5pbmcgYXQgb25jZSAoa2l0IGFuZCBnaWZ0IGJvdGggcmVhY3QgdG8gdGhlIHNhbWUgYWRkKVxuICogY291bGQgZWFjaCByZW5kZXIgYSBjYXJ0IHRoZSBvdGhlciBoYXMgbm90IGZpbmlzaGVkIGNoYW5naW5nLiBPbmUgYXQgYSB0aW1lLCBpbiB0aGVcbiAqIG9yZGVyIHRoZXkgc3Vic2NyaWJlZCwgYW5kIHRoZSBsYXN0IHJlbmRlciBpcyBvZiB0aGUgZmluYWwgY2FydC5cbiAqL1xubGV0IHF1ZXVlOiBQcm9taXNlPHVua25vd24+ID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5leHBvcnQgY29uc3QgaW5DYXJ0UXVldWUgPSAodGFzazogKCkgPT4gUHJvbWlzZTx2b2lkPikgPT4gKHF1ZXVlID0gcXVldWUuY2F0Y2goKCkgPT4ge30pLnRoZW4odGFzaykpO1xuXG5jb25zdCBJQ09OX0JVQkJMRSA9ICdjYXJ0LWljb24tYnViYmxlJztcblxuY29uc3Qgc2VuZCA9IGFzeW5jICh1cmw6IHN0cmluZywgZmllbGRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBzZWN0aW9uczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICBPYmplY3QuZW50cmllcyhmaWVsZHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gYm9keS5hcHBlbmQoa2V5LCB2YWx1ZSkpO1xuICBib2R5LmFwcGVuZCgnc2VjdGlvbnMnLCBzZWN0aW9ucy5qb2luKCcsJykpO1xuICBib2R5LmFwcGVuZCgnc2VjdGlvbnNfdXJsJywgbG9jYXRpb24ucGF0aG5hbWUpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSwgYm9keSB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLm9rID8gcmVzcG9uc2UuanNvbigpIDogbnVsbDtcbn07XG5cbi8qKlxuICogYHJlbmRlckNvbnRlbnRzYCBhbHNvIG9wZW5zIHRoZSBkcmF3ZXIsIHdoaWNoIGlzIHJpZ2h0IGFmdGVyIGFuIGFkZCBvciBhIGRyYXdlclxuICogYWN0aW9uIGJ1dCBub3Qgb24gcGFnZSBsb2FkLiBUaGVyZSBvbmx5IHRoZSBoZWFkZXIncyBpdGVtLWNvdW50IGJ1YmJsZSBpcyByZWZyZXNoZWQsXG4gKiB0aGUgc2FtZSB3YXkgdGhlIHRoZW1lJ3MgYGdldFNlY3Rpb25Jbm5lckhUTUxgIHN3YXBzIGEgc2VjdGlvbidzIG1hcmt1cC5cbiAqL1xuY29uc3QgcmVmcmVzaEljb25CdWJibGUgPSAoc3RhdGU6IHsgc2VjdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH0pID0+IHtcbiAgY29uc3QgaHRtbCA9IHN0YXRlLnNlY3Rpb25zPy5bSUNPTl9CVUJCTEVdO1xuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJQ09OX0JVQkJMRSk7XG4gIGlmICghaHRtbCB8fCAhdGFyZ2V0KSByZXR1cm47XG4gIHRhcmdldC5pbm5lckhUTUwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCcuc2hvcGlmeS1zZWN0aW9uJykhLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogT25lIGZyZWUgQ29sbGVjdGlvbiBLaXQgcGVyIGNhcnQsIHJpZGluZyBvbiB3aGF0ZXZlciBlbHNlIGlzIGluIGl0OlxuICogIC0gYGFkZGVkYCAoYSBwcm9kdWN0IHdhcyBqdXN0IGFkZGVkIGZyb20gYSBwcm9kdWN0IGZvcm0pIGFuZCBubyBraXQgeWV0IC0+IGFkZCAxO1xuICogIC0ga2l0IGlzIGFsbCB0aGF0IGlzIGxlZnQgKGNhcnQgY2xlYXJlZCkgLT4gcmVtb3ZlIGl0O1xuICogIC0ga2l0IHF1YW50aXR5IGFib3ZlIDEgKHN0ZXBwZXIgaW4gdGhlIGRyYXdlcikgLT4gYmFjayB0byAxLlxuICogXCJTb21ldGhpbmcgZWxzZVwiIG1lYW5zIGEgcHJvZHVjdCB0aGF0IHF1YWxpZmllcyBmb3IgYSBraXQg4oCUIHRoZSBoYW5kbGVzIGluIGBleGNsdWRlZGBcbiAqIChyaW5nIHNpemVyIGFuZCB0aGUgbGlrZSkgZG8gbm90IGNvdW50LCBzbyBhIGNhcnQgaG9sZGluZyBvbmx5IHRob3NlIGNhcnJpZXMgbm8ga2l0LlxuICogQSBraXQgdGhlIHNob3BwZXIgcmVtb3ZlZCBieSBoYW5kIGlzIG5vdCBwdXQgYmFjayB1bnRpbCB0aGV5IGFkZCBhbm90aGVyIHByb2R1Y3QuXG4gKi9cbmV4cG9ydCBjb25zdCBzeW5jQ29sbGVjdGlvbktpdCA9IGFzeW5jIChcbiAga2l0VmFyaWFudElkOiBudW1iZXIsXG4gIGV4Y2x1ZGVkOiBzdHJpbmdbXSxcbiAgeyBhZGRlZCwgb3BlbiB9OiB7IGFkZGVkOiBib29sZWFuOyBvcGVuOiBib29sZWFuIH0sXG4pID0+IHtcbiAgY29uc3QgY2FydCA9IGF3YWl0IGZldGNoKCcvY2FydC5qcycpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcbiAgY29uc3Qga2l0ID0gY2FydC5pdGVtcy5maW5kKChpdGVtOiB7IHZhcmlhbnRfaWQ6IG51bWJlciB9KSA9PiBpdGVtLnZhcmlhbnRfaWQgPT09IGtpdFZhcmlhbnRJZCk7XG4gIGNvbnN0IGhhc090aGVycyA9IGNhcnQuaXRlbXMuc29tZShcbiAgICAoaXRlbTogeyB2YXJpYW50X2lkOiBudW1iZXI7IGhhbmRsZTogc3RyaW5nIH0pID0+XG4gICAgICBpdGVtLnZhcmlhbnRfaWQgIT09IGtpdFZhcmlhbnRJZCAmJiAhZXhjbHVkZWQuaW5jbHVkZXMoaXRlbS5oYW5kbGUpLFxuICApO1xuXG4gIGNvbnN0IGlkID0gU3RyaW5nKGtpdFZhcmlhbnRJZCk7XG4gIGNvbnN0IGVsZW1lbnQgPSBjYXJ0RWxlbWVudCgpO1xuICBjb25zdCBzZWN0aW9ucyA9IG9wZW4gJiYgZWxlbWVudCA/IGVsZW1lbnQuZ2V0U2VjdGlvbnNUb1JlbmRlcigpLm1hcCgocykgPT4gcy5pZCkgOiBbSUNPTl9CVUJCTEVdO1xuXG4gIGxldCBzdGF0ZTtcbiAgaWYgKGtpdCAmJiAhaGFzT3RoZXJzKSBzdGF0ZSA9IGF3YWl0IHNlbmQoJy9jYXJ0L2NoYW5nZS5qcycsIHsgaWQsIHF1YW50aXR5OiAnMCcgfSwgc2VjdGlvbnMpO1xuICBlbHNlIGlmIChraXQgJiYga2l0LnF1YW50aXR5ID4gMSkgc3RhdGUgPSBhd2FpdCBzZW5kKCcvY2FydC9jaGFuZ2UuanMnLCB7IGlkLCBxdWFudGl0eTogJzEnIH0sIHNlY3Rpb25zKTtcbiAgZWxzZSBpZiAoIWtpdCAmJiBoYXNPdGhlcnMgJiYgYWRkZWQpIHN0YXRlID0gYXdhaXQgc2VuZCgnL2NhcnQvYWRkLmpzJywgeyBpZCwgcXVhbnRpdHk6ICcxJyB9LCBzZWN0aW9ucyk7XG4gIGlmICghc3RhdGUpIHJldHVybjtcblxuICBpZiAob3BlbikgZWxlbWVudD8ucmVuZGVyQ29udGVudHMoc3RhdGUpO1xuICBlbHNlIHJlZnJlc2hJY29uQnViYmxlKHN0YXRlKTtcbn07XG4iLCJpbXBvcnQgeyB3YWl0RWwsIHB1c2hEYXRhLCB2aXNpYmlsaXR5T2ZUaW1lLCBsb2cgfSBmcm9tICdjcnNkZXZ0b29sJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nbG9iYWxzLmNzcz9pbmxpbmUnO1xuaW1wb3J0IG1hdGVyaWFsR3VpZGUgZnJvbSAnLi9jb250ZW50L21hdGVyaWFsLWd1aWRlLmh0bWw/cmF3JztcbmltcG9ydCB7XG4gIGZldGNoUHJvZHVjdCxcbiAgZmV0Y2hHaWZ0LFxuICBmZXRjaFZhcmlhbnRJZCxcbiAgYmFzZVByaWNlQ2VudHMsXG4gIGdldFNlbGVjdCxcbiAgaW1hZ2VPcHRpb25JbmRleCxcbiAgb3B0aW9uSW1hZ2VzLFxuICBzZWxlY3RlZFZhbHVlcyxcbiAgc2VsZWN0ZWRWYXJpYW50LFxuICB0eXBlIFByb2R1Y3QsXG59IGZyb20gJy4vcHJvZHVjdCc7XG5pbXBvcnQgeyBmb3JtYXRMaWtlLCBwYXJzZU1vbmV5LCBzdHJpcEN1cnJlbmN5Q29kZSB9IGZyb20gJy4vbW9uZXknO1xuaW1wb3J0IHsgaW5jbHVzaW9uQ2FwdGlvbiwgcGFyc2VEZXNjcmlwdGlvbiB9IGZyb20gJy4vZGVzY3JpcHRpb24nO1xuaW1wb3J0IGZsYWdVc2EgZnJvbSAnLi9pY29ucy9mbGFnLXVzYS5wbmc/aW5saW5lJztcbmltcG9ydCB3YXJyYW50eSBmcm9tICcuL2ljb25zL3dhcnJhbnR5LnN2Zz9yYXcnO1xuaW1wb3J0IHsgaW5saW5lU3ZnIH0gZnJvbSAnLi9zdmcnO1xuaW1wb3J0IHsgaXNTd2F0Y2hPcHRpb24sIE9wdGlvbnMsIFBEUF9BTkFMWVRJQ1MsIHNpemVHdWlkZVRyaWdnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV5Ym94JztcbmltcG9ydCB7XG4gIGNsb3NlU2l6ZUd1aWRlT25CYWNrZHJvcCxcbiAgQ0xPU0VfSUNPTixcbiAgb3Blbk1vZGFsLFxuICBzaW5nbGVPcGVuU2l6ZUd1aWRlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHsgZHJlc3NDYXJ0RHJhd2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcnREcmF3ZXInO1xuaW1wb3J0IHsgRGV0YWlscyB9IGZyb20gJy4vY29tcG9uZW50cy9kZXRhaWxzJztcbmltcG9ydCB7IEdpZnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2lmdCc7XG5pbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnknO1xuaW1wb3J0IHsgSG93VG9PcmRlciB9IGZyb20gJy4vY29tcG9uZW50cy9ob3dUb09yZGVyJztcbmltcG9ydCB7IGJvdHRvbUFjY29yZGlvbnMsIG9wZW5NYWlsaW5nTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgeyBSZWVscyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWVscyc7XG5pbXBvcnQgeyBTdGlja3lCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RpY2t5QmFyJztcbmltcG9ydCB7IGRyZXNzUmVjb21tZW5kYXRpb25zIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY29tbWVuZGF0aW9ucyc7XG5pbXBvcnQge1xuICBhZGRUb0NhcnQsXG4gIGFwcGx5RGlzY291bnRBbmRSZWZyZXNoLFxuICBjYXJ0SGFzVmFyaWFudCxcbiAgaW5DYXJ0UXVldWUsXG4gIHN1YnNjcmliZUNhcnRVcGRhdGUsXG4gIHN5bmNDb2xsZWN0aW9uS2l0LFxufSBmcm9tICcuL2NhcnQnO1xuXG4vLyBTYW1lIGZyZWUgZ2lmdC13aXRoLXB1cmNoYXNlIG9uIGV2ZXJ5IFBEUCwgc2hvd24gb25seSBvbmNlIHRoZSBzZWxlY3RlZCB2YXJpYW50J3Ncbi8vIG93biBwcmljZSBjbGVhcnMgdGhpcyBiYXIuXG5jb25zdCBHSUZUX0hBTkRMRSA9ICdzbWFsbC1vdmFsLW5lY2tsYWNlJztcbmNvbnN0IEdJRlRfTUlOX1BSSUNFX0NFTlRTID0gNTAwMDA7XG5cbi8vIE11c3QgZXhpc3QgaW4gU2hvcGlmeSBBZG1pbiBhcyBhIGRpc2NvdW50IENPREUgKG5vdCBhbiBhdXRvbWF0aWMgZGlzY291bnQpOiBhXG4vLyBCdXkgWCBHZXQgWSBkaXNjb3VudCwgJDUwMCBtaW5pbXVtIHB1cmNoYXNlIC8gYW55IGl0ZW1zIC0+IHRoZSBnaWZ0IHByb2R1Y3QgZnJlZS4gQVxuLy8gY29kZSwgcmF0aGVyIHRoYW4gYW4gYXV0b21hdGljIGRpc2NvdW50LCBpcyB3aGF0IGtlZXBzIHRoZSBmcmVlIGdpZnQgc2NvcGVkIHRvIHRoaXNcbi8vIGV4cGVyaW1lbnQg4oCUIGl0IG9ubHkgZXZlciBnZXRzIGFwcGxpZWQgYnkgYGFwcGx5RGlzY291bnRBbmRSZWZyZXNoYCBiZWxvdywgbmV2ZXIgYnlcbi8vIFNob3BpZnkgb24gaXRzIG93biwgc28gdGhlIGNvbnRyb2wgdmFyaWFudCAoYW5kIGFueW9uZSBvZmYgdGhpcyBidW5kbGUpIG5ldmVyIHNlZXMgaXRcbi8vIHJlZ2FyZGxlc3Mgb2YgY2FydCB0b3RhbC5cbmNvbnN0IEdJRlRfRElTQ09VTlRfQ09ERSA9ICdQRFAtRVhQLUdJRlQ1MDAnO1xuXG4vLyBGcmVlICgkMCkgcHJvZHVjdCwgYWRkZWQgb25jZSB0byBhbnkgY2FydCB0aGF0IGhhcyBzb21ldGhpbmcgZWxzZSBpbiBpdC5cbmNvbnN0IEtJVF9IQU5ETEUgPSAnY29sbGVjdGlvbi1raXQnO1xuXG4vLyBQcm9kdWN0cyB0aGF0IG5lZWQgbm8ga2l0OiBubyBiYW5uZXIgb24gdGhlaXIgcGFnZSwgYW5kIG9uIHRoZWlyIG93biB0aGV5IGRvIG5vdCBlYXJuXG4vLyBvbmUgaW4gdGhlIGNhcnQgKGFsb25nc2lkZSBhbnl0aGluZyBlbHNlIHRoYXQgZG9lcywgdGhlIGNhcnQgc3RpbGwgZ2V0cyBpdHMga2l0KS5cbmNvbnN0IEtJVF9FWENMVURFRF9IQU5ETEVTID0gW1xuICAnZnVuZXJhbC1mbG93ZXIta2VlcHNha2Utb3JuYW1lbnRzLXBlcnNvbmFsaXplZC1hbmdlbC13aW5ncy1vcm5hbWVudHMta2VlcHNha2Utb3JuYW1lbnRzLWtlZXBzYWtlLWZ1bmVyYWwtd2VkZGluZy1mbG93ZXIta2VlcHNha2UnLFxuICAncmluZy1zaXplcicsXG4gICdjcmVtYXRpb24tZ2Vtc3RvbmUnLFxuXTtcblxuY2xhc3MgUGRwUmVkZXNpZ24ge1xuICBwcml2YXRlIHNpZCA9ICcnO1xuICBwcml2YXRlIHByb2R1Y3QhOiBQcm9kdWN0O1xuICBwcml2YXRlIGltYWdlSW5kZXggPSAwO1xuICBwcml2YXRlIGltYWdlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBwcml2YXRlIGRlc2NyaXB0aW9uITogeyBzcGVjczogc3RyaW5nW107IHByb3NlOiBIVE1MRWxlbWVudFtdIH07XG4gIHByaXZhdGUgc3luYzogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBhc3luYyBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnY3JzLXBkcCcpKSByZXR1cm47XG5cbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuICAgIHRoaXMuYWRkRm9udHMoKTtcblxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCdwcm9kdWN0LWluZm8nKTtcbiAgICB0aGlzLnNpZCA9IGluZm8uZGF0YXNldC5zZWN0aW9uITtcbiAgICAvLyBIb3N0LWNsYXNzIHJ1bGVzICgucHJpY2UsIC5wcm9kdWN0LWZvcm1fX3N1Ym1pdCwg4oCmKSBoYW5nIG9mZiB0aGlzLCBub3Qgb2ZmIGJvZHk6XG4gICAgLy8gdGhlIHNhbWUgY2xhc3NlcyBhcmUgdXNlZCBieSB0aGUgcHJvZHVjdCBjYXJkcyBpbiB0aGUgcmVjb21tZW5kYXRpb25zIHNlY3Rpb24sXG4gICAgLy8gd2hpY2ggdGhlIHJlZGVzaWduIG11c3QgbGVhdmUgYWxvbmUuXG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdjcnMtcHJvZHVjdCcpO1xuICAgIHRoaXMucHJvZHVjdCA9IGF3YWl0IGZldGNoUHJvZHVjdCgpO1xuICAgIHRoaXMuaW1hZ2VJbmRleCA9IGltYWdlT3B0aW9uSW5kZXgodGhpcy5wcm9kdWN0KTtcbiAgICB0aGlzLmltYWdlcyA9IG9wdGlvbkltYWdlcyh0aGlzLnByb2R1Y3QsIHRoaXMuaW1hZ2VJbmRleCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Nycy1wZHAnKTtcblxuICAgIHRoaXMuYnVpbGRVdGlsaXR5QmFyKCk7XG4gICAgdGhpcy5idWlsZEluZm9Db2x1bW4oKTtcbiAgICB0aGlzLmJ1aWxkTWVkaWFDb2x1bW4oKTtcbiAgICBkcmVzc1JlY29tbWVuZGF0aW9ucygpO1xuICAgIHRoaXMuYXBwbHkoKTtcbiAgICBzaW5nbGVPcGVuU2l6ZUd1aWRlKCk7XG4gICAgY2xvc2VTaXplR3VpZGVPbkJhY2tkcm9wKCk7XG5cbiAgICAvLyBEYXduIHN3YXBzIHRoZSBwcmljZSwgdGhlIHZhcmlhbnQgc2VsZWN0cyBhbmQgdGhlIGdhbGxlcnkgd2hvbGVzYWxlIG9uIGV2ZXJ5XG4gICAgLy8gdmFyaWFudCBjaGFuZ2UsIHdoaWNoIGRyb3BzIG91ciBub2RlcyBhbmQgZGVzeW5jcyBvdXIgY2FyZHMuIE9ic2VydmluZyB0aGVcbiAgICAvLyByZS1yZW5kZXIgaXMgbW9yZSByZWxpYWJsZSB0aGFuIHRoZSB0aGVtZSdzIG93biBgdmFyaWFudDpjaGFuZ2VgIGV2ZW50LlxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5hcHBseSgpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpbmZvLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGluZm8sIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gICAgLy8gdmlzaWJpbGl0eU9mVGltZSgnLmNycy1vcHRpb25zJywgJ2V4cF9wZHBfdmlldycsICdQRFAnLCAnUmVkZXNpZ25lZCBQRFAnLCAxMDAwKTtcbiAgICBsb2coJ1BEUCByZWRlc2lnbiBhcHBsaWVkJywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVzKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBlbC50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVzaWduJ3MgZmFjZXMgKEZvcnVtLCBKb3N0LCBPdmVybG9jaykgYXJlIG5vdCBvbiB0aGUgc2l0ZSDigJQgaXQgc2hpcHMgQXNzaXN0YW50LlxuICAgKiBPdmVybG9jayBpcyB1c2VkIG9ubHkgZm9yIHRoZSBzdGVwIG51bWJlcnMgaW4gdGhlIEhvdy10by1vcmRlciBzZWN0aW9uLlxuICAgKiBJbmplY3RlZCBieSBoYW5kIHJhdGhlciB0aGFuIHdpdGggYGxvYWRTY3JpcHRzT3JTdHlsZXNgLCB3aGljaCB0eXBlcyBhIFVSTCBieVxuICAgKiBgc3BsaXQoJy4nKS5wb3AoKWAgYW5kIHNvIHNpbGVudGx5IGlnbm9yZXMgYW55dGhpbmcgbm90IGVuZGluZyBpbiAuanMvLmNzcy5cbiAgICogVGhlIHRoZW1lIGFscmVhZHkgc2VydmVzIEFzc2lzdGFudCBmcm9tIEdvb2dsZSBGb250cywgc28gdGhpcyBhZGRzIG5vIG5ldyBob3N0LlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRGb250cygpIHtcbiAgICBjb25zdCBocmVmID1cbiAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZvcnVtJmZhbWlseT1Kb3N0OndnaHRANDAwOzUwMDs2MDAmZmFtaWx5PU92ZXJsb2NrJmRpc3BsYXk9c3dhcCc7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbaHJlZj1cIiR7aHJlZn1cIl1gKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gIH1cblxuICAvKiogUmUtcnVucyBhZnRlciBldmVyeSBob3N0IHJlLXJlbmRlci4gTXVzdCBzdGF5IGlkZW1wb3RlbnQuICovXG4gIHByaXZhdGUgYXBwbHkoKSB7XG4gICAgdGhpcy5zeW5jLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgICB0aGlzLnN0cmlwQ3VycmVuY3lDb2RlcygpO1xuICAgIHRoaXMucHJpY2VJbkJ1dHRvbigpO1xuICAgIHRoaXMuc2F2ZUJhZGdlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHN0b3JlIHJ1bnMgU2hvcGlmeSBNYXJrZXRzLCBzbyB0aGUgdGhlbWUgcmVuZGVycyB0aGUgY3VycmVuY3kgY29kZSBpbnRvIHRoZVxuICAgKiBwcmljZSAoXCLigrQ3LDQ0Ny4wMCBVQUhcIik7IHRoZSBkZXNpZ24gc2hvd3MgdGhlIGFtb3VudCBhbG9uZS4gVGhlIGNvZGUgc2l0cyBpbiB0aGVcbiAgICogdGV4dCBub2RlIHJhdGhlciB0aGFuIGluIGl0cyBvd24gZWxlbWVudCwgc28gQ1NTIGNhbid0IGhpZGUgaXQuIFN0cmlwcGluZyBpdCBoZXJlLFxuICAgKiBhaGVhZCBvZiB0aGUgYnV0dG9uIGFuZCB0aGUgYmFkZ2UsIGtlZXBzIHRob3NlIHR3byBjbGVhbiBhcyB3ZWxsIOKAlCBib3RoIHJlYWQgdGhlXG4gICAqIHRoZW1lJ3MgcmVuZGVyZWQgc3RyaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHJpcEN1cnJlbmN5Q29kZXMoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgI3ByaWNlLSR7dGhpcy5zaWR9IC5wcmljZS1pdGVtYClcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4gKGVsLnRleHRDb250ZW50ID0gc3RyaXBDdXJyZW5jeUNvZGUoZWwudGV4dENvbnRlbnQhKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2F2ZSAkMjlcIiBmcm9tIHRoZSBkZXNpZ24sIGNvbXB1dGVkIGZyb20gdGhlIGxpdmUgcHJpY2VzIGluc3RlYWQgb2YgaGFyZGNvZGVkLlxuICAgKiBCb3RoIGZpZ3VyZXMgYXJlIHJlYWQgZnJvbSB0aGUgdGhlbWUncyByZW5kZXJlZCBtYXJrdXAgYW5kIHRoZSByZXN1bHQgaXMgd3JpdHRlblxuICAgKiBiYWNrIGluIHRoZSBzYW1lIGZvcm1hdCwgc28gaXQgc3RheXMgY29ycmVjdCBvbiBhbnkgcHJvZHVjdCBhbmQgaW4gYW55IG1hcmtldC5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUJhZGdlKCkge1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYCNwcmljZS0ke3RoaXMuc2lkfWApO1xuICAgIGNvbnN0IGJhZGdlID0gcHJpY2U/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJpY2VfX2JhZGdlLXNhbGUnKTtcbiAgICBpZiAoIXByaWNlIHx8ICFiYWRnZSB8fCAhcHJpY2UucXVlcnlTZWxlY3RvcignLnByaWNlLS1vbi1zYWxlJykpIHJldHVybjtcblxuICAgIGNvbnN0IHdhcyA9IHByaWNlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJpY2VfX3NhbGUgcy5wcmljZS1pdGVtLS1yZWd1bGFyJyk/LnRleHRDb250ZW50O1xuICAgIGNvbnN0IG5vdyA9IHByaWNlLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJpY2VfX3NhbGUgLnByaWNlLWl0ZW0tLXNhbGUnKT8udGV4dENvbnRlbnQ7XG4gICAgaWYgKCF3YXMgfHwgIW5vdykgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBwYXJzZU1vbmV5KHdhcykgLSBwYXJzZU1vbmV5KG5vdyk7XG4gICAgaWYgKCEoc2F2ZWQgPiAwKSkgcmV0dXJuO1xuXG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSBgU2F2ZSAke2Zvcm1hdExpa2Uobm93LnRyaW0oKSwgc2F2ZWQpfWA7XG4gIH1cblxuICAvKipcbiAgICogXCJBZGQgdG8gY2FydCDCtyAkMTkwLjAwXCIg4oCUIHRoZSByZW5kZXJlZCBwcmljZSBpcyByZWFkIGZyb20gdGhlIHRoZW1lIHJhdGhlciB0aGFuXG4gICAqIGZvcm1hdHRlZCBieSB1cywgYmVjYXVzZSB0aGUgc3RvcmUgcnVucyBTaG9waWZ5IE1hcmtldHMgYW5kIHRoZSBjdXJyZW5jeSB2YXJpZXMuXG4gICAqIE9ubHkgdGhlIFBEUCBidXR0b246IGEgc3RpY2t5LWFkZC10by1jYXJ0IGFwcCBjbG9uZXMgdGhpcyBidXR0b24gaW50byBpdHMgb3duIGJhcixcbiAgICogd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIHJlZGVzaWduIGFuZCBpcyBsZWZ0IGV4YWN0bHkgYXMgdGhlIHRoZW1lIGhhcyBpdC5cbiAgICovXG4gIHByaXZhdGUgcHJpY2VJbkJ1dHRvbigpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ3Byb2R1Y3QtaW5mbycpITtcbiAgICBjb25zdCBwcmljZSA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYCNwcmljZS0ke3RoaXMuc2lkfWApO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5wcm9kdWN0LWZvcm1fX3N1Ym1pdCcpO1xuICAgIGlmICghcHJpY2UgfHwgIWJ1dHRvbikgcmV0dXJuO1xuXG4gICAgY29uc3Qgc291cmNlID0gcHJpY2UucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgICBwcmljZS5xdWVyeVNlbGVjdG9yKCcucHJpY2UtLW9uLXNhbGUnKVxuICAgICAgICA/ICcucHJpY2VfX3NhbGUgLnByaWNlLWl0ZW0tLXNhbGUnXG4gICAgICAgIDogJy5wcmljZV9fcmVndWxhciAucHJpY2UtaXRlbS0tcmVndWxhcicsXG4gICAgKTtcbiAgICBpZiAoIXNvdXJjZSkgcmV0dXJuO1xuXG4gICAgbGV0IHNsb3QgPSBidXR0b24ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5jcnMtYXRjLXByaWNlJyk7XG4gICAgaWYgKCFzbG90KSB7XG4gICAgICBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2xvdC5jbGFzc05hbWUgPSAnY3JzLWF0Yy1wcmljZSc7XG4gICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpPy5hZnRlcihzbG90KTtcbiAgICB9XG4gICAgc2xvdC50ZXh0Q29udGVudCA9IGDCtyAke3NvdXJjZS50ZXh0Q29udGVudCEudHJpbSgpfWA7XG5cbiAgICAvLyBEcm9wIGFueSBjb3B5IHRoZSBzdGlja3kgYmFyIGNsb25lZCBvdXQgb2Ygb3VyIGJ1dHRvbi5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuY3JzLWF0Yy1wcmljZScpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IChyb290LmNvbnRhaW5zKGVsKSA/IHVuZGVmaW5lZCA6IGVsLnJlbW92ZSgpKSk7XG5cbiAgICAvLyBPdXIgb3duIHN0aWNreSBiYXIgaGFzIG5vIHByaWNlIG9mIGl0cyBvd24g4oCUIGl0IG1pcnJvcnMgdGhpcyBidXR0b24ncyBsYWJlbCBhbmRcbiAgICAvLyBwcmljZSwgYWxyZWFkeSBjb3JyZWN0IGF0IHRoaXMgcG9pbnQgKGN1cnJlbmN5IHN0cmlwcGVkKS4gVGhyZWUgc3BhbnMgcmF0aGVyXG4gICAgLy8gdGhhbiBvbmUgdGV4dCBub2RlOiB0aGUgbW9iaWxlIGRlc2lnbiBzdGFja3MgdGhlIHByaWNlIHVuZGVyIHRoZSBsYWJlbCB3aXRoIG5vXG4gICAgLy8gc2VwYXJhdG9yLCBhbmQgQ1NTIGNhbiBvbmx5IHJlYXJyYW5nZSB3aGF0IGhhcyBzdHJ1Y3R1cmUuXG4gICAgY29uc3Qgc3RpY2t5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJy5jcnMtc3RpY2t5X19jdGEnKTtcbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBjb25zdCBzcGFuID0gKGNsYXNzTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCB7IGNsYXNzTmFtZSwgdGV4dENvbnRlbnQ6IHRleHQgfSk7XG4gICAgICBzdGlja3kucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgICBzcGFuKCdjcnMtc3RpY2t5X19jdGEtbGFiZWwnLCBidXR0b24ucXVlcnlTZWxlY3Rvcignc3Bhbjpub3QoLmNycy1hdGMtcHJpY2UpJykhLnRleHRDb250ZW50IS50cmltKCkpLFxuICAgICAgICBzcGFuKCdjcnMtc3RpY2t5X19jdGEtc2VwJywgJ8K3JyksXG4gICAgICAgIHNwYW4oJ2Nycy1zdGlja3lfX2N0YS1wcmljZScsIHNvdXJjZS50ZXh0Q29udGVudCEudHJpbSgpKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSdzIGFubm91bmNlbWVudCBiYXIgY2FycmllcyBhIHNpbmdsZSBtZXNzYWdlOyB0aGUgZGVzaWduIHBhaXJzIGl0IHdpdGhcbiAgICogXCJMaWZldGltZSBXYXJyYW50eVwiIGJlaGluZCBhIG1pZGRvdC4gVGhlIGV4dHJhIGNvcHkgaXMgYXBwZW5kZWQgdG8gdGhlIHRoZW1lJ3NcbiAgICogb3duIDxwPiBzbyB0aGUgYmFyIGtlZXBzIGl0cyByZWdpb24vYXJpYSB3aXJpbmcgYW5kIGl0cyBtb2JpbGUgYmVoYXZpb3VyLlxuICAgKlxuICAgKiBUaGUgYmFyIGJlbG9uZ3MgdG8gdGhlIGhlYWRlciBzZWN0aW9uLCBub3QgdG8gcHJvZHVjdC1pbmZvLCBzbyBpdCBjYW4gc3RpbGwgYmVcbiAgICogdW5wYXJzZWQgb25jZSB0aGUgcmVzdCBvZiB0aGUgcmVkZXNpZ24gaXMgYWxyZWFkeSBydW5uaW5nIOKAlCB3YWl0aW5nIG9uIHRoZSBtZXNzYWdlXG4gICAqIHJhdGhlciB0aGFuIHJlYWRpbmcgaXQgc3RyYWlnaHQgb2ZmIHRoZSBkb2N1bWVudCBpcyB3aGF0IG1ha2VzIHRoaXMgbGFuZCBhdCBhbGwuXG4gICAqIE5vdCBhd2FpdGVkIGJ5IGluaXQoKTogbm90aGluZyBiZWxvdyBkZXBlbmRzIG9uIHRoZSBiYXIuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGJ1aWxkVXRpbGl0eUJhcigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgd2FpdEVsPEhUTUxFbGVtZW50PignLnV0aWxpdHktYmFyIC5hbm5vdW5jZW1lbnQtYmFyX19tZXNzYWdlJyk7XG4gICAgY29uc3QgYmFyID0gbWVzc2FnZS5jbG9zZXN0KCcudXRpbGl0eS1iYXInKSE7XG5cbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnY3JzLXV0aWxpdHknKTtcbiAgICBpZiAobWVzc2FnZS5xdWVyeVNlbGVjdG9yKCcuY3JzLXV0aWxpdHlfX3dhcnJhbnR5JykpIHJldHVybjtcblxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzZXBhcmF0b3IuY2xhc3NOYW1lID0gJ2Nycy11dGlsaXR5X19zZXAnO1xuICAgIHNlcGFyYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBzZXBhcmF0b3IudGV4dENvbnRlbnQgPSAnwrcnO1xuXG4gICAgY29uc3Qgd2FycmFudHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2FycmFudHkuY2xhc3NOYW1lID0gJ2Nycy11dGlsaXR5X193YXJyYW50eSc7XG4gICAgd2FycmFudHkudGV4dENvbnRlbnQgPSAnTGlmZXRpbWUgV2FycmFudHknO1xuXG4gICAgbWVzc2FnZS5hcHBlbmQoc2VwYXJhdG9yLCB3YXJyYW50eSk7XG4gIH1cblxuICBwcml2YXRlIG9yZGVyKGVsOiBFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgb3JkZXI6IG51bWJlcikge1xuICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBlbC5zdHlsZS5vcmRlciA9IFN0cmluZyhvcmRlcik7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkSW5mb0NvbHVtbigpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYCNQcm9kdWN0SW5mby0ke3RoaXMuc2lkfWApITtcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ2Nycy1pbmZvJyk7XG5cbiAgICAvLyBCb3RoIGd1aWRlcyBvcGVuIGZyb20gdGhlIGJ1eSBib3ggYW5kIGZyb20gdGhlIHN0aWNreSBiYXIncyBwb3BvdmVycywgc28gZWFjaFxuICAgIC8vIHJlcG9ydHMgdW5kZXIgdGhlIHByZWZpeCBhbmQgbG9jYXRpb24gb2YgdGhlIHN1cmZhY2UgdGhlIGxpbmsgd2FzIGNsaWNrZWQgb24uXG4gICAgY29uc3Qgb25NYXRlcmlhbEd1aWRlID0gKGZyb20gPSBQRFBfQU5BTFlUSUNTKSA9PlxuICAgICAgb3Blbk1vZGFsKFxuICAgICAgICAnbWF0ZXJpYWwnLFxuICAgICAgICAnTWF0ZXJpYWwgR3VpZGUnLFxuICAgICAgICB0aGlzLnJ0ZShtYXRlcmlhbEd1aWRlKSxcbiAgICAgICAgJ01hdGVyaWFsIEd1aWRlIFBvcHVwJyxcbiAgICAgICAgJ01hdGVyaWFsIEd1aWRlJyxcbiAgICAgICAgZnJvbSxcbiAgICAgICk7XG4gICAgLy8gUmV1c2UgdGhlIHRoZW1lJ3Mgb3duIHNpemUtZ3VpZGUgZHJhd2VyIHJhdGhlciB0aGFuIHJlYnVpbGRpbmcgaXQuIFRoZSB0cmlnZ2VyIGlzXG4gICAgLy8gcmVzb2x2ZWQgaGVyZSwgb24gdGhlIGNsaWNrLCBub3QgaGVsZCBmcm9tIGJ1aWxkIHRpbWUg4oCUIHNlZSBgc2l6ZUd1aWRlVHJpZ2dlcmAuXG4gICAgY29uc3Qgb25TaXplR3VpZGUgPSAoZnJvbSA9IFBEUF9BTkFMWVRJQ1MpID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBzaXplR3VpZGVUcmlnZ2VyKCk7XG4gICAgICBpZiAoIXRyaWdnZXIpIHJldHVybjtcbiAgICAgIHRyaWdnZXIuY2xpY2soKTtcbiAgICAgIHRoaXMuZHJlc3NHdWlkZUNsb3NlKCk7XG4gICAgICBwdXNoRGF0YShgJHtmcm9tLnByZWZpeH1fc2l6ZV9vcGVuYCwgJ1JpbmcgU2l6aW5nIEd1aWRlJywgJ2NsaWNrJywgZnJvbS5sb2MpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb25zID0gT3B0aW9ucyh0aGlzLnByb2R1Y3QsIG9uTWF0ZXJpYWxHdWlkZSwgb25TaXplR3VpZGUpO1xuICAgIHRoaXMuc3luYy5wdXNoKG9wdGlvbnMuc3luYyk7XG5cbiAgICAvLyBBIHByb2R1Y3Qgd2l0aCBubyBvcHRpb25zIHJlbmRlcnMgbm8gY2FyZHMgYXQgYWxsIChzZWUgYGlzUmVhbE9wdGlvbmApLCBhbmQgdGhlXG4gICAgLy8gZW1wdHkgYmxvY2sgd291bGQgc3RpbGwgZHJhdyBpdHMgb3duIHRvcCBydWxlIOKAlCBzbyBpdCBpcyBsZWZ0IG91dCBvZiB0aGUgY29sdW1uXG4gICAgLy8gZW50aXJlbHksIGFuZCB0aGUgc3RpY2t5IGJhciByZXZlYWxzIG9mZiB0aGUgYnV5IGJ1dHRvbiBpbnN0ZWFkLlxuICAgIGNvbnN0IGhhc09wdGlvbnMgPSBvcHRpb25zLnJvb3QuY2hpbGRyZW4ubGVuZ3RoID4gMDtcblxuICAgIC8vIEtlZXAgdGhlIHRoZW1lJ3Mgb3duIGFjY29yZGlvbiBjb3B5IGJlZm9yZSB3ZSBkcm9wIHRoZSBob3N0IG1hcmt1cC5cbiAgICBjb25zdCBuYXRpdmUgPSBBcnJheS5mcm9tKHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2FjY29yZGlvbicpKS5tYXAoKGVsKSA9PiAoe1xuICAgICAgdGl0bGU6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX3RpdGxlJykhLnRleHRDb250ZW50IS50cmltKCksXG4gICAgICBib2R5OiBlbC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19jb250ZW50JykhLmNsb25lTm9kZSh0cnVlKSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJvZHVjdF9fZGVzY3JpcHRpb24nKSE7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBhcnNlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uLmhpZGRlbiA9IHRydWU7XG5cbiAgICBjb25zdCB0cnVzdCA9IHRoaXMudHJ1c3RSb3coKTtcbiAgICBjb25zdCBoZWxwID0gdGhpcy5oZWxwUm93KCk7XG4gICAgY29uc3QgZGV0YWlscyA9IERldGFpbHModGhpcy5kZXNjcmlwdGlvbi5zcGVjcywgdGhpcy5kZXNjcmlwdGlvbi5wcm9zZSk7XG4gICAgY29uc3QgaG93dG8gPSBIb3dUb09yZGVyKG9wZW5NYWlsaW5nTW9kYWwpO1xuICAgIGNvbnN0IGFjY29yZHMgPSBib3R0b21BY2NvcmRpb25zKG5hdGl2ZSk7XG4gICAgY29uc3QgcmVlbHMgPSBSZWVscygpO1xuXG4gICAgLy8gT3JkZXJpbmcgdmlhIGZsZXhib3ggcmF0aGVyIHRoYW4gbW92aW5nIGhvc3Qgbm9kZXMg4oCUIERhd24gcmVwbGFjZXMgc2V2ZXJhbCBvZlxuICAgIC8vIHRoZXNlIHdob2xlc2FsZSwgYW5kIGEgbW92ZWQgbm9kZSB3b3VsZCBiZSByZXN0b3JlZCB0byBpdHMgb3JpZ2luYWwgc2xvdC5cbiAgICB0aGlzLm9yZGVyKHJvb3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RpdGxlJyksIDEpO1xuICAgIHRoaXMub3JkZXIocm9vdC5xdWVyeVNlbGVjdG9yKGAjcHJpY2UtJHt0aGlzLnNpZH1gKSwgMik7XG4gICAgLy8gU2hvcCBQYXkgaW5zdGFsbG1lbnRzIOKAlCBubyBzbG90IGluIHRoZSBkZXNpZ24sIGJ1dCBrZXB0IGFzIGEgcGF5bWVudCBvcHRpb24sXG4gICAgLy8gZGlyZWN0bHkgdW5kZXIgdGhlIHByaWNlIGl0J3MgcXVvdGluZyBhIHBlci1tb250aCBjdXQgb2YuXG4gICAgdGhpcy5vcmRlcihyb290LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJwcm9kdWN0LWZvcm0taW5zdGFsbG1lbnRcIl0nKT8ucGFyZW50RWxlbWVudCwgMyk7XG4gICAgdGhpcy5vcmRlcihvcHRpb25zLnJvb3QsIDQpO1xuICAgIHRoaXMub3JkZXIocm9vdC5xdWVyeVNlbGVjdG9yKCd2YXJpYW50LXNlbGVjdHMnKSwgNSk7XG4gICAgdGhpcy5vcmRlcihyb290LnF1ZXJ5U2VsZWN0b3IoJ3Byb2R1Y3QtZm9ybScpPy5wYXJlbnRFbGVtZW50LCA2KTtcbiAgICB0aGlzLm9yZGVyKHRydXN0LCA4KTtcbiAgICB0aGlzLm9yZGVyKGhlbHAsIDkpO1xuICAgIHRoaXMub3JkZXIocm9vdC5xdWVyeVNlbGVjdG9yKGAjUXVhbnRpdHktRm9ybS0ke3RoaXMuc2lkfWApLCAxMCk7XG4gICAgdGhpcy5vcmRlcihkZXRhaWxzLCAxMSk7XG4gICAgdGhpcy5vcmRlcihob3d0bywgMTIpO1xuICAgIHRoaXMub3JkZXIocmVlbHMsIDEzKTtcbiAgICB0aGlzLm9yZGVyKGFjY29yZHMsIDE0KTtcbiAgICB0aGlzLm9yZGVyKHJvb3QucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3ZpZXctZGV0YWlscycpLCAyMCk7XG5cbiAgICAvLyBUaGUgdHdvIG5hdGl2ZSBhY2NvcmRpb25zIGFyZSBzdXBlcnNlZGVkIGJ5IHRoZSB0aHJlZSBmcm9tIHRoZSBkZXNpZ24uXG4gICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdF9fYWNjb3JkaW9uJykuZm9yRWFjaCgoZWwpID0+IGVsLnJlbW92ZSgpKTtcbiAgICByb290LmFwcGVuZCguLi4oaGFzT3B0aW9ucyA/IFtvcHRpb25zLnJvb3RdIDogW10pLCB0cnVzdCwgaGVscCwgZGV0YWlscywgaG93dG8sIHJlZWxzLCBhY2NvcmRzKTtcbiAgICAvLyBGcmVlLWdpZnQgdHJpZ2dlciDigJQgc3dpdGNoZWQgb2ZmLiBFdmVyeXRoaW5nIGl0IGRyaXZlcyAodGhlIGNhcmQsIHRoZSBjYXJ0IGFkZCwgdGhlXG4gICAgLy8gZGlzY291bnQsIGJvdGggYW5hbHl0aWNzIGV2ZW50cykgaGFuZ3Mgb2ZmIHRoaXMgb25lIGNhbGw7IHVuY29tbWVudCB0byBicmluZyBpdCBiYWNrLlxuICAgIC8vIHRoaXMuYnVpbGRHaWZ0Um93KHJvb3QpO1xuICAgIHRoaXMud2F0Y2hDb2xsZWN0aW9uS2l0KCk7XG4gICAgZHJlc3NDYXJ0RHJhd2VyKCk7XG5cbiAgICAvLyBNdXN0IHJ1biBhZnRlciB0aGUgYXBwZW5kOiBgdmlzaWJpbGl0eU9mVGltZWAgcmVzb2x2ZXMgaXRzIHNlbGVjdG9yIG9uY2UsIG9uIHRoZVxuICAgIC8vIHNwb3QsIGFuZCBzaWxlbnRseSBkb2VzIG5vdGhpbmcgaWYgdGhlIG5vZGUgaXMgbm90IG9uIHRoZSBwYWdlIHlldC5cbiAgICAvLyBUaGUgc3RlcHMgYW5kIFwiSG93IHlvdXIgcGllY2UgaXMgbWFkZVwiIHNpdCBpbiBvbmUgPHNlY3Rpb24+LCBzbyBlYWNoIGlzIG1lYXN1cmVkXG4gICAgLy8gb24gaXRzIG93biB3cmFwcGVyIHJhdGhlciB0aGFuIG9uIGAuY3JzLWhvd3RvYC5cbiAgICAvLyBUaHJlc2hvbGQgMC4zLCBub3QgdGhlIGRlZmF1bHQgMC41OiBleHBhbmRlZCwgdGhlc2UgYmxvY2tzIGFyZSB0YWxsZXIgdGhhbiBhXG4gICAgLy8gcGhvbmUgdmlld3BvcnQsIGFuZCBoYWxmIG9mIHRoZW0gY2FuIG5ldmVyIGJlIG9uIHNjcmVlbiBhdCBvbmNlLlxuICAgIHZpc2liaWxpdHlPZlRpbWUoJy5jcnMtZGV0YWlscycsICdleHBfcGRwX2RldGFpbHNfdmlldycsICdQRFAnLCAnUHJvZHVjdCBkZXRhaWxzJywgMTAwMCwgMC4zKTtcbiAgICB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLXN0ZXBzJywgJ2V4cF9wZHBfaG93dG9fdmlldycsICdQRFAnLCAnSG93IHRvIG9yZGVyJywgMTAwMCwgMC4zKTtcbiAgICB2aXNpYmlsaXR5T2ZUaW1lKCcuY3JzLWhvd3RvX19tYWRlJywgJ2V4cF9wZHBfbWFkZV92aWV3JywgJ1BEUCcsICdIb3cgeW91ciBwaWVjZSBpcyBtYWRlJywgMTAwMCwgMC4zKTtcblxuICAgIC8vIFNob3dzIG9uY2UgYG9wdGlvbnMucm9vdGAg4oCUIHRoZSBtYXRlcmlhbC9zaXplIGNhcmRzIGp1c3QgYXBwZW5kZWQgYWJvdmUg4oCUXG4gICAgLy8gc2Nyb2xscyBvdXQgb2Ygdmlldywgc28gdGhlIHBpY2tlciBpcyBzdGlsbCByZWFjaGFibGUgZnVydGhlciBkb3duIHRoZSBwYWdlLlxuICAgIC8vIFdpdGggbm8gb3B0aW9ucyB0aGVyZSBhcmUgbm8gY2FyZHMgdG8gbGVhdmUgYmVoaW5kLCBzbyB0aGUgYmFyIHJldmVhbHMgb2ZmIHRoZVxuICAgIC8vIGFkZC10by1jYXJ0IGJ1dHRvbiwgd2hpY2ggaXMgd2hhdCBpdCBpcyBzdGlsbCBjYXJyeWluZyBhIGNvcHkgb2YuXG4gICAgY29uc3Qgc3RpY2t5VGFyZ2V0ID0gaGFzT3B0aW9uc1xuICAgICAgPyBvcHRpb25zLnJvb3RcbiAgICAgIDogcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PigncHJvZHVjdC1mb3JtJyk/LnBhcmVudEVsZW1lbnQgPz8gcm9vdDtcblxuICAgIGNvbnN0IHN0aWNreSA9IFN0aWNreUJhcihcbiAgICAgIHRoaXMucHJvZHVjdCxcbiAgICAgICgpID0+IHRoaXMuaW1hZ2VzW3NlbGVjdGVkVmFsdWVzKHRoaXMucHJvZHVjdClbdGhpcy5pbWFnZUluZGV4XV0sXG4gICAgICBvbk1hdGVyaWFsR3VpZGUsXG4gICAgICBvblNpemVHdWlkZSxcbiAgICAgIHN0aWNreVRhcmdldCxcbiAgICApO1xuICAgIHRoaXMuc3luYy5wdXNoKHN0aWNreS5zeW5jKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGlja3kucm9vdCk7XG5cbiAgICAvLyBBZnRlciB0aGUgYXBwZW5kLCBsaWtlIHRoZSBibG9ja3MgYWJvdmUg4oCUIHRoZSBzZWxlY3RvciBpcyByZXNvbHZlZCBvbiB0aGUgc3BvdC5cbiAgICAvLyBUaGUgYmFyIGlzIHBhcmtlZCBhdCBgYm90dG9tOiAtODFweGAgcmF0aGVyIHRoYW4gaGlkZGVuLCBzbyBpdCBpcyBnZW51aW5lbHkgb2ZmXG4gICAgLy8gdGhlIHZpZXdwb3J0IGZvciB0aGUgb2JzZXJ2ZXIgdW50aWwgaXQgcmV2ZWFsczsgYW5kIGJlaW5nIGZpeGVkLCBvbmNlIHJldmVhbGVkIGl0XG4gICAgLy8gc3RheXMgb24gc2NyZWVuLCBzbyB0aGUgMXMgZHdlbGwgaXMgcmVhbGx5IFwidGhlIGJhciB3YXMgdXAgZm9yIGEgc2Vjb25kXCIuXG4gICAgLy8gVGhlIGJhciBhcHBlYXJpbmcgaXMgYSBQRFAtbGV2ZWwgZXZlbnQg4oCUICdTdGlja3kgQmFyJyBpcyB0aGUgbG9jYXRpb24gZm9yIHRoZVxuICAgIC8vIGludGVyYWN0aW9ucyBpbnNpZGUgaXQsIG5vdCBmb3IgdGhlIGJhciBiZWluZyBzZWVuLlxuICAgIHZpc2liaWxpdHlPZlRpbWUoJy5jcnMtc3RpY2t5JywgJ2V4cF9wZHBfc3RpY2t5X3ZpZXcnLCAnUERQJywgJ1N0aWNreSBCYXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZWVwcyBleGFjdGx5IG9uZSBmcmVlIENvbGxlY3Rpb24gS2l0IGluIHRoZSBjYXJ0IGZvciBhcyBsb25nIGFzIGl0IGhvbGRzIGFueXRoaW5nXG4gICAqIGVsc2Ug4oCUIHNlZSBgc3luY0NvbGxlY3Rpb25LaXRgLiBDaGVja2VkIG9uY2Ugb24gbG9hZCB0b28sIHNpbGVudGx5LCBmb3IgYSBjYXJ0IGxlZnRcbiAgICogd2l0aCBvbmx5IHRoZSBraXQgaW4gaXQgKGl0ZW1zIHJlbW92ZWQgb24gdGhlIGNhcnQgcGFnZSwgd2hlcmUgdGhpcyBkb2VzIG5vdCBydW4pLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3YXRjaENvbGxlY3Rpb25LaXQoKSB7XG4gICAgY29uc3Qga2l0VmFyaWFudElkID0gYXdhaXQgZmV0Y2hWYXJpYW50SWQoS0lUX0hBTkRMRSk7XG5cbiAgICAvLyBPbmx5IGFuIGFkZCBmcm9tIGEgcGFnZSB0aGF0IHF1YWxpZmllcyBtYXkgcHV0IHRoZSBraXQgaW47IGV2ZXJ5IHVwZGF0ZSBzdGlsbFxuICAgIC8vIGdvZXMgdGhyb3VnaCwgc28gYSBjYXJ0IGxlZnQgaG9sZGluZyBvbmx5IGV4Y2x1ZGVkIHByb2R1Y3RzIGxvc2VzIGl0cyBraXQuXG4gICAgY29uc3QgcXVhbGlmaWVzID0gIUtJVF9FWENMVURFRF9IQU5ETEVTLmluY2x1ZGVzKHRoaXMucHJvZHVjdC5oYW5kbGUpO1xuXG4gICAgc3Vic2NyaWJlQ2FydFVwZGF0ZSgoZXZlbnQpID0+XG4gICAgICBpbkNhcnRRdWV1ZSgoKSA9PlxuICAgICAgICBzeW5jQ29sbGVjdGlvbktpdChraXRWYXJpYW50SWQsIEtJVF9FWENMVURFRF9IQU5ETEVTLCB7XG4gICAgICAgICAgYWRkZWQ6IHF1YWxpZmllcyAmJiBldmVudC5zb3VyY2UgPT09ICdwcm9kdWN0LWZvcm0nLFxuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApO1xuICAgIGluQ2FydFF1ZXVlKCgpID0+IHN5bmNDb2xsZWN0aW9uS2l0KGtpdFZhcmlhbnRJZCwgS0lUX0VYQ0xVREVEX0hBTkRMRVMsIHsgYWRkZWQ6IGZhbHNlLCBvcGVuOiBmYWxzZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogRnJlZSBnaWZ0LXdpdGgtcHVyY2hhc2UgY2FyZCwgcmlnaHQgdW5kZXIgdGhlIGFkZC10by1jYXJ0IGJ1dHRvbi4gRmV0Y2hlZCByYXRoZXJcbiAgICogdGhhbiBoYXJkY29kZWQsIGxpa2UgdGhlIHJlc3Qgb2YgdGhlIHByb2R1Y3QgZGF0YSDigJQgc2VlIGBmZXRjaEdpZnRgLiBTaG93biBvbmx5XG4gICAqIG9uY2UgdGhlIHNlbGVjdGVkIHZhcmlhbnQncyBvd24gcHJpY2UgY2xlYXJzIGBHSUZUX01JTl9QUklDRV9DRU5UU2AsIGFuZCBoaWRkZW5cbiAgICogYWdhaW4gb25jZSB0aGUgZ2lmdCBpcyBhY3R1YWxseSBpbiB0aGUgY2FydCDigJQgdGhlcmUgaXMgbm90aGluZyBsZWZ0IHRvIGVhcm4sIHNvXG4gICAqIG5vdGhpbmcgbGVmdCB0byBhZHZlcnRpc2UuIEJvdGggY29uZGl0aW9ucyBjYW4gY2hhbmdlIHdpdGhvdXQgYSBgcHJvZHVjdC1pbmZvYFxuICAgKiByZS1yZW5kZXIgKGEgY2FydC1wYWdlIHJlbW92YWwsIHNvbWVvbmUgZWxzZSdzIHRhYiksIHNvIHRoaXMgb3ducyBpdHMgb3duXG4gICAqIGBjYXJ0LXVwZGF0ZWAgc3Vic2NyaXB0aW9uIHJhdGhlciB0aGFuIG9ubHkgcmlkaW5nIGB0aGlzLnN5bmNgLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBidWlsZEdpZnRSb3cocm9vdDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBnaWZ0ID0gYXdhaXQgZmV0Y2hHaWZ0KEdJRlRfSEFORExFKTtcbiAgICBsZXQgZ2lmdEluQ2FydCA9IGF3YWl0IGNhcnRIYXNWYXJpYW50KGdpZnQudmFyaWFudElkKTtcbiAgICBjb25zdCBzaG93biA9ICgpID0+IHRoaXMucXVhbGlmaWVzRm9yR2lmdCgpICYmICFnaWZ0SW5DYXJ0O1xuXG4gICAgY29uc3QgeyByb290OiBlbCwgc3luYyB9ID0gR2lmdChnaWZ0LCBzaG93bik7XG4gICAgY29uc3QgdHJhY2tRdWFsaWZpZWQgPSB0aGlzLnRyYWNrR2lmdFF1YWxpZmllZCgpO1xuICAgIGNvbnN0IHRyYWNrVmlldyA9IHRoaXMudHJhY2tHaWZ0VmlldyhzaG93bik7XG4gICAgLy8gQSBzaW5nbGUgZW50cnkgcG9pbnQgZm9yIGJvdGggdHJhY2tlcnMgYW5kIHRoZSBET00gc3luYzogYGdpZnRJbkNhcnRgIGNhbiBmbGlwXG4gICAgLy8gZnJvbSBhIGNhcnQtZHJhd2VyIGFjdGlvbiB0aGF0IG5ldmVyIHRvdWNoZXMgYHByb2R1Y3QtaW5mb2AsIHNvIHRoZSBjYXJ0LXVwZGF0ZVxuICAgIC8vIGhhbmRsZXIgYmVsb3cgaGFzIHRvIHJlYWNoIHRoZSB0cmFja2VycyBkaXJlY3RseSByYXRoZXIgdGhhbiBvbmx5IHRocm91Z2hcbiAgICAvLyBgdGhpcy5zeW5jYCAod2hpY2ggYGFwcGx5KClgIG9ubHkgd2Fsa3Mgb24gYSBgcHJvZHVjdC1pbmZvYCBtdXRhdGlvbikuXG4gICAgY29uc3Qgc3luY0FsbCA9ICgpID0+IHtcbiAgICAgIHN5bmMoKTtcbiAgICAgIHRyYWNrUXVhbGlmaWVkKCk7XG4gICAgICB0cmFja1ZpZXcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vcmRlcihlbCwgNyk7XG4gICAgcm9vdC5hcHBlbmQoZWwpO1xuICAgIHRoaXMuc3luYy5wdXNoKHN5bmNBbGwpO1xuICAgIHN5bmNBbGwoKTtcblxuICAgIC8vIExpc3RlbnMgZm9yIGV2ZXJ5IGNhcnQtdXBkYXRlLCBub3Qgb25seSBvdXJzOiBgY2FydC1pdGVtc2AgKHRoZSBkcmF3ZXIncyBvd25cbiAgICAvLyBxdWFudGl0eS9yZW1vdmUgY29udHJvbHMpIHB1Ymxpc2hlcyB0aGUgc2FtZSBldmVudCBvbiBhIHJlbW92YWwsIHdoaWNoIGlzIHdoYXRcbiAgICAvLyBrZWVwcyBgZ2lmdEluQ2FydGAg4oCUIGFuZCBzbyB0aGUgY2FyZCdzIHZpc2liaWxpdHkg4oCUIGNvcnJlY3QgZWl0aGVyIHdheS5cbiAgICBzdWJzY3JpYmVDYXJ0VXBkYXRlKChldmVudCkgPT5cbiAgICAgIGluQ2FydFF1ZXVlKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ3Byb2R1Y3QtZm9ybScgJiYgdGhpcy5xdWFsaWZpZXNGb3JHaWZ0KCkgJiYgIWdpZnRJbkNhcnQpIHtcbiAgICAgICAgICBhd2FpdCBhZGRUb0NhcnQoZ2lmdC52YXJpYW50SWQpO1xuICAgICAgICAgIGF3YWl0IGFwcGx5RGlzY291bnRBbmRSZWZyZXNoKEdJRlRfRElTQ09VTlRfQ09ERSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2lmdEluQ2FydCA9IGF3YWl0IGNhcnRIYXNWYXJpYW50KGdpZnQudmFyaWFudElkKTtcbiAgICAgICAgc3luY0FsbCgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcXVhbGlmaWVzRm9yR2lmdCgpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gc2VsZWN0ZWRWYXJpYW50KHRoaXMucHJvZHVjdCk7XG4gICAgcmV0dXJuICEhdmFyaWFudCAmJiBiYXNlUHJpY2VDZW50cyh2YXJpYW50LnByaWNlKSA+PSBHSUZUX01JTl9QUklDRV9DRU5UUztcbiAgfVxuXG4gIC8qKiBUaGUgc3dhdGNoLXR5cGUgb3B0aW9uJ3MgY3VycmVudCB2YWx1ZSAoTWF0ZXJpYWwsIE1ldGFsLCDigKYpIOKAlCBzZWUgYGlzU3dhdGNoT3B0aW9uYC4gKi9cbiAgcHJpdmF0ZSBzZWxlY3RlZE1hdGVyaWFsKCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMucHJvZHVjdC5vcHRpb25zLmZpbmQoKG8pID0+IGlzU3dhdGNoT3B0aW9uKG8ubmFtZSkpO1xuICAgIHJldHVybiAob3B0aW9uICYmIGdldFNlbGVjdChvcHRpb24ubmFtZSk/LnZhbHVlKSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvbiBldmVyeSBwaWNrIHRoYXQgbGFuZHMgb24gYSAqbmV3KiBxdWFsaWZ5aW5nIHZhcmlhbnQg4oCUIGluY2x1ZGluZyBzd2l0Y2hpbmdcbiAgICogYmV0d2VlbiB0d28gZGlmZmVyZW50IHF1YWxpZnlpbmcgcGlja3Mg4oCUIGJ1dCBub3Qgb24gcGFnZSBsb2FkIGV2ZW4gaWYgdGhlIGRlZmF1bHRcbiAgICogdmFyaWFudCBhbHJlYWR5IHF1YWxpZmllcywgYW5kIG5vdCBhZ2FpbiBmb3IgdGhlIHNhbWUgdmFyaWFudCBvbiBhbiB1bnJlbGF0ZWRcbiAgICogcmUtcmVuZGVyLiBUcmFja2VkIGJ5IHZhcmlhbnQgaWQgcmF0aGVyIHRoYW4gdGhlIHF1YWxpZmllcyBib29sZWFuOiB0aGF0J3Mgd2hhdFxuICAgKiBtYWtlcyBhIHF1YWxpZnlpbmctdG8tcXVhbGlmeWluZyBzd2l0Y2ggc3RpbGwgY291bnQgYXMgXCJuZXdseSBjaG9zZW5cIiwgYW5kIGRyb3BwaW5nXG4gICAqIG91dCBvZiBxdWFsaWZ5aW5nIHJlc2V0cyBpdCwgc28gY29taW5nIGJhY2sgdG8gdGhhdCBzYW1lIHZhcmlhbnQgbGF0ZXIgZmlyZXMgYWdhaW4uXG4gICAqL1xuICBwcml2YXRlIHRyYWNrR2lmdFF1YWxpZmllZCgpIHtcbiAgICBsZXQgbGFzdFZhcmlhbnRJZCA9IHRoaXMucXVhbGlmaWVzRm9yR2lmdCgpID8gc2VsZWN0ZWRWYXJpYW50KHRoaXMucHJvZHVjdCk/LmlkIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucXVhbGlmaWVzRm9yR2lmdCgpKSB7XG4gICAgICAgIGxhc3RWYXJpYW50SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBzZWxlY3RlZFZhcmlhbnQodGhpcy5wcm9kdWN0KTtcbiAgICAgIGlmICh2YXJpYW50ICYmIHZhcmlhbnQuaWQgIT09IGxhc3RWYXJpYW50SWQpIHtcbiAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZnJlZV9naWZ0X3F1YWxpZmllZCcsICdRdWFsaWZpZWQgZm9yIEZyZWUgR2lmdCcsICdvdGhlcicsIHRoaXMuc2VsZWN0ZWRNYXRlcmlhbCgpKTtcbiAgICAgICAgbGFzdFZhcmlhbnRJZCA9IHZhcmlhbnQuaWQ7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIHRoZSBjYXJkIGFjdHVhbGx5IGFwcGVhcnMg4oCUIGBzaG93bmAgZmxpcHBpbmcgZnJvbSBoaWRkZW4gdG9cbiAgICogdmlzaWJsZSwgbm90IHNjcm9sbCBwb3NpdGlvbiDigJQgaW5jbHVkaW5nIHRoZSBmaXJzdCB0aW1lLCBpZiB0aGUgZGVmYXVsdCB2YXJpYW50XG4gICAqIGFscmVhZHkgcXVhbGlmaWVzLiBOb3QgYHZpc2liaWxpdHlPZlRpbWVgOiB0aGlzIHRyYWNrcyB0aGUgY2FyZCdzIG93biBzaG93L2hpZGVcbiAgICogc3RhdGUgKHF1YWxpZmllcyAqYW5kKiBub3QgYWxyZWFkeSBpbiBjYXJ0KSwgbm90IHZpZXdwb3J0IGR3ZWxsIHRpbWUsIGFuZCBuZWVkc1xuICAgKiBgZXZlbnRfbG9jYCByZWFkIGZyZXNoIGF0IHRoZSBtb21lbnQgaXQgYXBwZWFycyByYXRoZXIgdGhhbiBmaXhlZCBhdCBjYWxsIHRpbWUuXG4gICAqL1xuICBwcml2YXRlIHRyYWNrR2lmdFZpZXcoc2hvd246ICgpID0+IGJvb2xlYW4pIHtcbiAgICBsZXQgd2FzU2hvd24gPSBmYWxzZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaXNTaG93biA9IHNob3duKCk7XG4gICAgICBpZiAoaXNTaG93biAmJiAhd2FzU2hvd24pIHtcbiAgICAgICAgcHVzaERhdGEoJ2V4cF9wZHBfZnJlZV9naWZ0X3ZpZXcnLCAnRnJlZSBHaWZ0JywgJ3ZpZXcnLCB0aGlzLnNlbGVjdGVkTWF0ZXJpYWwoKSk7XG4gICAgICB9XG4gICAgICB3YXNTaG93biA9IGlzU2hvd247XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRNZWRpYUNvbHVtbigpIHtcbiAgICBjb25zdCBtZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcucHJvZHVjdF9fbWVkaWEtd3JhcHBlcicpITtcbiAgICBtZWRpYS5jbGFzc0xpc3QuYWRkKCdjcnMtbWVkaWEnKTtcblxuICAgIC8vIFwiVGhpcyBQcm9kdWN0IENhbiBCZSBDcmVhdGVkIFdpdGhcIiBtb3ZlcyBvdXQgb2YgdGhlIGluZm8gY29sdW1uIGludG8gdGhlIGdhbGxlcnkuXG4gICAgY29uc3QgY3JlYXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuY3VzdG9tUHJvZHVjdEltYWdlJyk7XG4gICAgY3JlYXRlZD8uY2xhc3NMaXN0LmFkZCgnY3JzLWNyZWF0ZWQnKTtcblxuICAgIC8vIFRoZSBkZXNpZ24gY2xvc2VzIHRoYXQgYmxvY2sgd2l0aCBhIHJ1bGUgYW5kIGEgY2FwdGlvbiwgd2hpY2ggaXMgb25lIG9mIHRoaXNcbiAgICAvLyBwcm9kdWN0J3Mgb3duIHNwZWMgbGluZXMgcmF0aGVyIHRoYW4gZml4ZWQgY29weS5cbiAgICBjb25zdCBjYXB0aW9uID0gaW5jbHVzaW9uQ2FwdGlvbih0aGlzLmRlc2NyaXB0aW9uLnNwZWNzKTtcbiAgICBpZiAoY3JlYXRlZCAmJiBjYXB0aW9uKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9ICdjcnMtY3JlYXRlZF9fY2FwdGlvbic7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGNhcHRpb247XG4gICAgICBjcmVhdGVkLmFwcGVuZChlbCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FsbGVyeSA9IEdhbGxlcnkoXG4gICAgICAoKSA9PiB0aGlzLmltYWdlc1tzZWxlY3RlZFZhbHVlcyh0aGlzLnByb2R1Y3QpW3RoaXMuaW1hZ2VJbmRleF1dLFxuICAgICAgY3JlYXRlZCxcbiAgICAgICFLSVRfRVhDTFVERURfSEFORExFUy5pbmNsdWRlcyh0aGlzLnByb2R1Y3QuaGFuZGxlKSxcbiAgICApO1xuICAgIHRoaXMuc3luYy5wdXNoKGdhbGxlcnkuc3luYyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRoZW1lIGNsb3NlcyBpdHMgc2l6ZS1ndWlkZSBkcmF3ZXIgd2l0aCBhIEZvbnQgQXdlc29tZSBnbHlwaC4gU3dhcCBpbiB0aGVcbiAgICogc2FtZSBTVkcgdGhlIHJlZGVzaWduJ3Mgb3duIGRyYXdlcnMgdXNlLCBzbyB0aGUgdHdvIHJlYWQgYXMgb25lIGNvbXBvbmVudC5cbiAgICogUnVucyBvbiBldmVyeSBvcGVuOiB0aGUgdGhlbWUgcmVidWlsZHMgdGhlIGRyYXdlcidzIG1hcmt1cCBlYWNoIHRpbWUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGRyZXNzR3VpZGVDbG9zZSgpIHtcbiAgICBjb25zdCBidG4gPSBhd2FpdCB3YWl0RWw8SFRNTEVsZW1lbnQ+KCcjY3VzdG9tX25vdGlmaWNhdGlvbnMgYnV0dG9uLmNsb3NlJyk7XG4gICAgaWYgKCFidG4ucXVlcnlTZWxlY3Rvcignc3ZnJykpIGJ0bi5pbm5lckhUTUwgPSBDTE9TRV9JQ09OO1xuICB9XG5cbiAgcHJpdmF0ZSBydGUoaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc05hbWUgPSAnY3JzLXJ0ZSc7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcml2YXRlIHRydXN0Um93KCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ2Nycy10cnVzdCc7XG4gICAgZWwuaW5uZXJIVE1MID1cbiAgICAgIGA8c3BhbiBjbGFzcz1cImNycy10cnVzdF9faXRlbVwiPjxpbWcgY2xhc3M9XCJjcnMtdHJ1c3RfX2ljb25cIiBzcmM9XCIke2ZsYWdVc2F9XCIgYWx0PVwiXCIgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCI+SGFuZGNyYWZ0ZWQgaW4gVVNBPC9zcGFuPmAgK1xuICAgICAgYDxzcGFuIGNsYXNzPVwiY3JzLXRydXN0X19pdGVtXCI+PHNwYW4gY2xhc3M9XCJjcnMtdHJ1c3RfX2ljb24gY3JzLXRydXN0X19pY29uLS1zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke2lubGluZVN2Zyh3YXJyYW50eSl9PC9zcGFuPkxpZmV0aW1lIFdhcnJhbnR5PC9zcGFuPmA7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBoZWxwUm93KCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ2Nycy1oZWxwJztcbiAgICBlbC5pbm5lckhUTUwgPSAnTmVlZCBIZWxwPyBDYWxsL1RleHQgPGEgaHJlZj1cInRlbDo2NjI2NjkxNTg2XCI+NjYyLTY2OS0xNTg2PC9hPiDinaTvuI8nO1xuICAgIC8vIGVsLnF1ZXJ5U2VsZWN0b3IoJ2EnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIC8vICAgcHVzaERhdGEoJ2V4cF9wZHBfaGVscF9jYWxsJywgJzY2Mi02NjktMTU4NicsICdjbGljaycsICdQRFAnKSxcbiAgICAvLyApO1xuICAgIHJldHVybiBlbDtcbiAgfVxufVxuXG5uZXcgUGRwUmVkZXNpZ24oKS5pbml0KCk7XG4iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsNywxOCwxOSwyMF0sIm1hcHBpbmdzIjoiOzs7O0NBQUEsSUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTztFQUMvQyxPQUFPLFlBQVksT0FBTyxhQUFhLENBQUM7RUFDeEMsT0FBTyxVQUFVLEtBQUs7R0FDcEIsT0FBTztHQUNQLFlBQVk7R0FDWixZQUFZO0dBQ1osWUFBWTtHQUNaLFdBQVc7RUFDYixDQUFDO0VBQ0QsSUFBSSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE9BQU8sU0FBUztDQUM5RDtDQUNBLElBQU0sVUFBVSxhQUFhO0VBQzNCLE9BQU8sSUFBSSxTQUFTLFlBQVk7R0FDOUIsTUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0dBQy9DLElBQUksU0FBUztJQUNYLFFBQVEsT0FBTztJQUNmO0dBQ0Y7R0FDQSxNQUFNLFdBQVcsSUFBSSx1QkFBdUI7SUFDMUMsTUFBTSxXQUFXLFNBQVMsY0FBYyxRQUFRO0lBQ2hELElBQUksVUFBVTtLQUNaLFFBQVEsUUFBUTtLQUNoQixTQUFTLFdBQVc7SUFDdEI7R0FDRixDQUFDO0dBQ0QsU0FBUyxRQUFRLFNBQVMs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