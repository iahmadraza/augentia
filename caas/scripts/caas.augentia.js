(function ( $ ) {
	
	/*$( 'body' ).on( 'click', 'a', function ( e ) {
		var gotoben = $('section.benefits').offset().top;
		$( 'html, body' ).animate( { scrollTop : gotoben }, 500, 'linear');
	} );*/

	if ( $( window ).width() <= 600 ) {
		$( 'div.hiw-content .lst-hiw-tabs>li a.tab-item' ).removeClass( 'tab-active' );
	}

	$( 'body' ).on( 'click', 'nav.global-navigation a.nav-item', function ( e ) {
		/*isPagging = false;
		$( 'nav.global-navigation a.nav-item' ).removeClass( 'item-active' );
		$( this ).addClass( 'item-active' );
		var scrollerValue = $( this ).attr( 'id' );
		scrollerValue = scrollerValue.replace('scroll-','');
		$( 'html, body' ).animate( { scrollTop : $( 'section.' + scrollerValue ).offset().top - 100}, 700 );

		setTimeout(function(){
			isPagging = true;
		}, 650);*/
		$( 'nav.global-navigation a.nav-item' ).removeClass( 'item-active' );
		if ( $( this ).attr( 'id' ) == 'scroll-benefits' ) 
			$( '.main' ).moveTo( 2 );
		if ( $( this ).attr( 'id' ) == 'scroll-howitworks' ) 
			$( '.main' ).moveTo( 3 );
		if ( $( this ).attr( 'id' ) == 'scroll-typesofcampaign' ) 
			$( '.main' ).moveTo( 4 );
		if ( $( this ).attr( 'id' ) == 'scroll-startcampaign' ) 
			$( '.main' ).moveTo( 5 );
	});

	/* //go to top */
	$( 'body' ).on( 'click', 'nav.global-navigation a.gotop', function ( e ) {
		$( 'html, body' ).animate( { scrollTop : 0}, 700 );
	});

	$( 'body' ).on( 'click', 'div.extras-startcampaign a.sc-floatbutton ', function ( e ) {
		$( this ).parent( 'div.extras-startcampaign' ).addClass( 'popup-active' );
	});

	$( 'body' ).on( 'click', 'div.extras-startcampaign span ', function ( e ) {
		$( this ).closest( 'div.extras-startcampaign' ).removeClass( 'popup-active' );
	});

	/* ==== On window resize */
	$( window ).on( 'resize', function ( e ) {
		//heroBannerSpacing();
	});


	/* ==== On page scroll */
	$( window ).on( 'scroll', function ( e ) {
		//console.log('scrolling.. = ' + $(window).scrollTop());
		//showSmallHeader();
		//setFirstNavItemActive();
		//startCampaignPop();

		// if (isPagging == true) {
		// 	autoPagging();
		// }
		if ( $( window ).scrollTop() >= $( 'header.global-header' ).outerHeight() ) {
			$( '.global-navigation.sticky-nav' ).addClass( 'mobilefloat' );
		} else {
			$( '.global-navigation.sticky-nav' ).removeClass( 'mobilefloat' );
		}
	});

	//stickGlobalNav();

	$( 'body' ).on( 'click', 'div.hiw-content ul.lst-hiw-tabs.hiw-tabs-lg>li>a.tab-item', function ( e ) {
		if ( ! $( this ).hasClass( 'tab-active' ) ) {
			$( 'div.hiw-content ul.lst-hiw-tabs.hiw-tabs-lg>li>a.tab-item' ).removeClass( 'tab-active' );
			$( 'div.hiw-content ul.lst-hiw-tabs.hiw-tabs-lg>li div.hiw-tab-content' ).hide();
			$( this ).addClass( 'tab-active' );
			$( this ).siblings( 'div.hiw-tab-content' ).fadeIn();
		}
	});

	$( 'body' ).on( 'focus', 'div.subscribe-input>input', function ( e ) {
		$( this ).parent( 'div.subscribe-input' ).addClass( 'input-focused' );
	});

	$( 'body' ).on( 'blur', 'div.subscribe-input>input', function ( e ) {
		$( this ).parent( 'div.subscribe-input' ).removeClass( 'input-focused' );
	});

	$( 'body' ).on( 'click', 'div.header-extras ul.lst-header-extras>li>a.gotosubscribe', function ( e ) {
		/*var gotosubs = $('aside.subscribe').offset().top;
		$( 'html, body' ).animate( { scrollTop : gotosubs }, 500, 'linear' );
		$( 'div.subscribe-input' ).find( 'input' ).focus();*/
		$( '.main' ).moveTo( 6 );
		setTimeout(function(){
			$( 'div.subscribe-input' ).find( 'input' ).focus();
		}, 500);
	});

	//how it works 
	howitworks();

	/*$( 'div.banner-captions' ).removeClass( 'animating' );
	var intervalID = window.setInterval(startBannerCaptionTransition, 6000, function () {
		$( 'div.banner-captions' ).removeClass( 'animating' );
	});*/

	$( window ).on('load', function () {
		fancyme();
	});

	//if ( $( window ).width() >= 800 )
	initializeOnePage();

	$( window ).on( 'resize', function ( e ) {
		//if ( $( window ).width() >= 800 )
		initializeOnePage();
	});

})( jQuery );

var bannerCaptions = [
	'Campaign Planning & Execution, On-demand',
	'Dedicated Campaign Manager, On-demand',
	'Latest Marketing Technologies, On-demand', 
	'Campaign Setup to Analytics, On-demand', 
	'Cost-Effective Campaigns, On-demand'
];
var currentCaption = 1;
setInterval(function(){
	if (currentCaption < 5){
		// console.log('currentCaption = ' + currentCaption);
		$( 'div.banner-captions' ).find( 'h3' ).text( bannerCaptions[currentCaption] );	
	} else {
		// console.log('currentCaption = ' + currentCaption);
		currentCaption = 0;
		$( 'div.banner-captions' ).find( 'h3' ).text( bannerCaptions[currentCaption] );
	}
	currentCaption++;
}, 3800);

function startBannerCaptionTransition () {
	$( 'div.banner-captions' ).addClass( 'animating' );
}

function heroBannerSpacing () {
	var topPadding = $( 'header.global-header' ).outerHeight();
	$( 'main.hero' ).css( 'padding-top', topPadding );
};

function showSmallHeader () {
	//header.global-header-sm&.header-sm-showing
	var headerHeight = $( 'header.global-header' ).outerHeight();
	if ( $( window ).scrollTop() >= headerHeight )
		$( 'header.global-header-sm' ).addClass( 'header-sm-showing' );
	else 
		$( 'header.global-header-sm' ).removeClass( 'header-sm-showing' );
};

function stickGlobalNav () {
	var navTop = $( 'nav.global-navigation' ).offset().top - 33;
	//$( 'div.glnav-spacer' ).height($( 'nav.global-navigation' ).outerHeight());
	$( 'div.nav-box' ).height($( 'nav.global-navigation' ).outerHeight());

	$( window ).on( 'scroll', function ( e ) {
		if ( $( window ).scrollTop() > navTop ) {
		//if ( navTop <= $( window ).scrollTop() ) {
			$( 'nav.global-navigation' ).addClass( 'sticky-nav' );
		}
		else {
			$( 'nav.global-navigation' ).removeClass( 'sticky-nav' );
		}
	});
};


function setFirstNavItemActive () {
	var navTop = $( 'nav.global-navigation' ).offset().top - 33;

	if ( $( window ).scrollTop() > navTop ) {
		$( 'nav.global-navigation a.nav-item' ).eq( 0 ).addClass( 'item-active' );
	}
};

function startCampaignPop () {
	if ( $( window ).scrollTop() > 160 ) {
		$( 'div.extras-startcampaign' ).removeClass( 'popup-active' );
	} else {
		$( 'div.extras-startcampaign' ).addClass( 'popup-active' );
	}
};

//var isPagging = true;
function autoPagging () {
	if ( $( window ).scrollTop() < 640 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
	};
	//console.log('$(window).scrollTop() = ' + $(window).scrollTop());

	if ( $( window ).scrollTop() >= 640 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
		$( 'nav.global-navigation' ).find( '.col-sm-3' ).eq( 0 ).find( '.nav-item' ).addClass( 'item-active' );
	};

	if ( $( window ).scrollTop() >= 1200 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
		$( 'nav.global-navigation' ).find( '.col-sm-3' ).eq( 1 ).find( '.nav-item' ).addClass( 'item-active' );
	};

	if ( $( window ).scrollTop() >= 1850 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
		$( 'nav.global-navigation' ).find( '.col-sm-3' ).eq( 2 ).find( '.nav-item' ).addClass( 'item-active' );
	};

	if ( $( window ).scrollTop() >= 2500 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
		$( 'nav.global-navigation' ).find( '.col-sm-3' ).eq( 3 ).find( '.nav-item' ).addClass( 'item-active' );
	};

};


function howitworks () {
	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.next-toc',
		prevButton: '.prev-toc',
		pagination: '.swiper-pagination',
        paginationClickable: true,
		spaceBetween: 10, 
		// loop: true
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 100,
		centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.5,
		slideToClickedSlide: true, 
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
};

function fancyme () {
	//$( 'div.extras-startcampaign' ).delay( 3000 ).addClass( 'popup-active' );
	setTimeout(function(){
		$( 'main.hero' ).addClass( 'animating' );
	}, 500);
	setTimeout(function(){
		$( 'div.extras-startcampaign' ).delay( 3000 ).addClass( 'popup-active' );
	}, 2000);
};

function initializeOnePage () {
	if ( $( window ).width() >= 800 ) {
		$( 'html' ).addClass( 'pageOneYes' );
		$(".main").onepage_scroll({
			sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
			easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
											 // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
			pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
			updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
			afterMove: function(index) {setActiveTab(index);},   // This option accepts a callback function. The function will be called after the page moves.
			loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			keyboard: true,                  // You can activate the keyboard controls
			responsiveFallback: false,       // You can fallback to normal page scroll by defining the width of the browser in which
											 // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
											 // the browser's width is less than 600, the fallback will kick in.
			direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
		});

	} else {
		$( 'html' ).removeClass( 'pageOneYes' );
		normalNav();
	}
};

function setActiveTab ( theIndex ) {
	if ( theIndex != 0 ) 
		$( 'div.extras-startcampaign' ).removeClass( 'popup-active' );

	$( 'nav.global-navigation a.nav-item' ).removeClass( 'item-active' );
	if ( theIndex == 2 )
		$( '#scroll-benefits' ).addClass( 'item-active' );
	if ( theIndex == 3 )
		$( '#scroll-howitworks' ).addClass( 'item-active' );
	if ( theIndex == 4 )
		$( '#scroll-typesofcampaign' ).addClass( 'item-active' );
	if ( theIndex == 5 )
		$( '#scroll-startcampaign' ).addClass( 'item-active' );
};

function normalNav () {
	var isPagging = false;
	$( 'body' ).off( 'click', 'nav.global-navigation a.nav-item');
	$( 'body' ).on( 'click', 'nav.global-navigation a.nav-item', function ( e ) {
		isPagging = false;
		$( 'nav.global-navigation a.nav-item' ).removeClass( 'item-active' );
		$( this ).addClass( 'item-active' );
		var scrollerValue = $( this ).attr( 'id' );
		scrollerValue = scrollerValue.replace('scroll-','');
		$( 'html, body' ).animate( { scrollTop : $( 'section.' + scrollerValue ).offset().top - 100}, 700 );

		setTimeout(function(){
			isPagging = true;
		}, 650);
	});
};