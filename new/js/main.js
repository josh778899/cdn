(function(a){a("#mobile-menu").meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"992"});a(".info-bar").on("click",function(){a(".extra-info").addClass("info-open")});a(".close-icon").on("click",function(){a(".extra-info").removeClass("info-open")});var e=a(window);var d=a("#sticky-header");e.on("scroll",function(){var f=e.scrollTop();if(f<100){d.removeClass("sticky")}else{d.addClass("sticky")}});function c(){var f=a(".slider-active");f.on("init",function(i,j){var h=a(".single-slider:first-child").find("[data-animation]");g(h)});f.on("beforeChange",function(j,l,i,k){var h=a('.single-slider[data-slick-index="'+k+'"]').find("[data-animation]");g(h)});f.slick({autoplay:false,autoplaySpeed:10000,dots:false,fade:true,arrows:false,responsive:[{breakpoint:767,settings:{dots:false,arrows:false}}]});function g(i){var h="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";i.each(function(){var l=a(this);var j=l.data("delay");var k="animated "+l.data("animation");l.css({"animation-delay":j,"-webkit-animation-delay":j});l.addClass(k).one(h,function(){l.removeClass(k)})})}}c();a(".breaking-active").owlCarousel({loop:true,nav:false,dots:false,margin:0,autoplay:true,navText:['<i class="far fa-long-arrow-left"></i>','<i class="far fa-long-arrow-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:1},992:{items:1},1200:{items:1}}});a(".breaking-2-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:true,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:1,nav:false,},992:{items:1,nav:false,},1200:{items:1}}});a(".arrow-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:1},992:{items:1},1200:{items:1}}});a(".news-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:2},992:{items:2},1200:{items:3}}});a(".news-02-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:2},992:{items:2},1200:{items:2}}});a(".news-03-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:2},992:{items:3},1200:{items:4}}});a(".news-04-active").owlCarousel({loop:true,nav:true,dots:false,margin:0,autoplay:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1,nav:false,},576:{items:1,nav:false,},768:{items:2},992:{items:3},1200:{items:5}}});a(".client-03-active").slick({dots:false,arrows:false,infinite:true,centerMode:true,autoplay:true,centerPadding:"0",speed:300,prevArrow:'<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}}]});a(".counter").counterUp({delay:10,time:1000});a(".popup-image").magnificPopup({type:"image",gallery:{enabled:true}});a(".popup-video").magnificPopup({type:"iframe"});a(".grid").imagesLoaded(function(){var f=a(".grid").isotope({itemSelector:".grid-item",percentPosition:true,masonry:{columnWidth:".grid-item",}})});a(".portfolio-menu").on("click","button",function(){var f=a(this).attr("data-filter");$grid.isotope({filter:f})});a(".portfolio-menu button").on("click",function(f){a(this).siblings(".active").removeClass("active");a(this).addClass("active");f.preventDefault()});a.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fas fa-angle-up"></i>',activeOverlay:false,});new WOW().init();function b(){var h={zoom:11,scrollwheel:false,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]};var g=document.getElementById("contact-map");var f=new google.maps.Map(g,h);var i=new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:f,title:"Cryptox"})}if(a("#contact-map").length!=0){google.maps.event.addDomListener(window,"load",b)}if(typeof(a.fn.knob)!="undefined"){a(".knob").each(function(){var f=a(this),g=f.attr("data-rel");f.knob({draw:function(){a(this.i).val(this.cv+"%")}});f.appear(function(){a({value:0}).animate({value:g},{duration:2000,easing:"swing",step:function(){f.val(Math.ceil(this.value)).trigger("change")}})},{accX:0,accY:-150})})}})(jQuery);