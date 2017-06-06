(function ( $ ) {
	
	/*$( 'body' ).on( 'click', 'a', function ( e ) {
		var gotoben = $('section.benefits').offset().top;
		$( 'html, body' ).animate( { scrollTop : gotoben }, 500, 'linear');
	} );*/

	if ( $( window ).width() <= 600 ) {
		$( 'div.hiw-content .lst-hiw-tabs>li a.tab-item' ).removeClass( 'tab-active' );
	}

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

	/* //go to top */
	$( 'body' ).on( 'click', 'nav.global-navigation a.gotop', function ( e ) {
		$( 'html, body' ).animate( { scrollTop : 0}, 700 );
	});

	$( 'body' ).on( 'click', 'div.extras-startcampaign a.sc-floatbutton ', function ( e ) {
		$( this ).parent( 'div.extras-startcampaign' ).addClass( 'popup-active' );
	});

	/* ==== On window resize */
	$( window ).on( 'resize', function ( e ) {
		heroBannerSpacing();
	});


	/* ==== On page scroll */
	$( window ).on( 'scroll', function ( e ) {
		//console.log('scrolling.. = ' + $(window).scrollTop());
		showSmallHeader();
		//setFirstNavItemActive();
		startCampaignPop();

		if (isPagging == true) {
			autoPagging();
		}
	});

	stickGlobalNav();

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
		var gotosubs = $('aside.subscribe').offset().top;
		$( 'html, body' ).animate( { scrollTop : gotosubs }, 500, 'linear' );
		$( 'div.subscribe-input' ).find( 'input' ).focus();
	});

	//how it works 
	howitworks();

	/*$( 'div.banner-captions' ).removeClass( 'animating' );
	var intervalID = window.setInterval(startBannerCaptionTransition, 6000, function () {
		$( 'div.banner-captions' ).removeClass( 'animating' );
	});*/

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
}, 5000);

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

var isPagging = true;
function autoPagging () {
	if ( $( window ).scrollTop() < 640 ) {
		$( 'nav.global-navigation' ).find( '.nav-item' ).removeClass( 'item-active' );
	};

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
		spaceBetween: 10,
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 100,
		centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
};