/*
 * Title:   precise
 * Author:  JRBthemes
 */

(function ($) {
    'use strict';

    var menudesktop = function () {
        $('.menu-primary .menu-item-has-children').each(function () {
            $(this).addClass('parent');
        });
        $('.menu-primary .sub-menu').each(function () {
            $(this).addClass('dropdown dropdown-navbar dropdown-bottom');
        });
        $(".menu-primary .menu-item-has-children").hover(
                function () {
                    $(this).addClass("open");
                }, function () {
            $(this).removeClass("open");
        }
        );
    }
    var preciseFullimage = function () {
        if ($('section').hasClass('full-screen')) {
            var windowsHeight = $(window).height();
            $('.full-screen').css('height', windowsHeight + 'px');
            //when resizing the site, we adjust the heights of the sections
            $(window).resize(function () {
                preciseFullimage();
            });
        }
    };
    var menu_position_hover = function () {
        var windowWidth = $(window).width();
        $(".menu-primary .menu-item-has-children").hover(
                function () {
                    var left = $(this).find('.sub-menu').offset().left;
                    var width = $(this).find('.sub-menu').outerWidth() + 0;
                    var w_l = left + width;
                    if (windowWidth < w_l) {
                        jQuery(this).find('.sub-menu').addClass('menu-psright');
                    }
                    ;
                }, function () {
            jQuery(this).find('.sub-menu').removeClass('menu-psright');
        }
        );
        $(".default-menu .page_item_has_children").hover(
                function () {
                    var left = $(this).find('.children').offset().left;
                    var width = $(this).find('.children').outerWidth() + 0;
                    var w_l = left + width;
                    if (windowWidth < w_l) {
                        jQuery(this).find('.children').addClass('menu-psright');
                    }
                    ;
                }, function () {
            jQuery(this).find('.children').removeClass('menu-psright');
        }
        );
    }
    $(window).resize(function () {
        menu_position_hover();
    });

    var menuMobileList = function () {
        if ($('.menu-item-has-children').length) {
            $('.menu-mobi li.menu-item-has-children').children('a').append(function () {
                return '<button class="dropdown-expander"><i class="fa fa-angle-right"></i></button>';
            });
            $('.menu-mobi .dropdown-expander').on('click', function () {
                $(this).parent().parent().children('.sub-menu').slideToggle();
                $(this).find('i').toggleClass('fa fa-angle-right fa fa-angle-down');
                $(this).parent('a').parent('li').toggleClass('active');
                return false;
            });
        }
    }
    var menuMobileListdf = function () {
        if ($('.page_item_has_children').length) {
            $('.menu-mobi li.page_item_has_children').children('a').append(function () {
                return '<button class="dropdown-expander"><i class="fa fa-angle-right"></i></button>';
            });
            $('.menu-mobi .dropdown-expander').on('click', function () {
                $(this).parent().parent().children('.children').slideToggle();
                $(this).find('i').toggleClass('fa fa-angle-right fa fa-angle-down');
                $(this).parent('a').parent('li').toggleClass('active');
                return false;
            });
        }
    }
    var menuMobile = function () {
        $(".header .menu-bars-mobi").on('click', function () {
            $(this).toggleClass("open");
            $('.menu-mobi').slideToggle();
            return false;
        });
        $("#menu_primary_toggle").on('click', function () {
            $(this).toggleClass("active");
            $('.menu-mobi').slideToggle().toggleClass("active");
            return false;
        });
        $(window).resize(function () {
            jQuery("#menu_primary_toggle").removeClass("active");
            jQuery(".menu-mobi").removeClass("active").hide();
        });
    }

    var Backtotop = function () {
        if ($('.precise-scroll-top').length) {
            var scrollTrigger = 500, // px
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.precise-scroll-top').addClass('show-icon-top');
                        } else {
                            $('.precise-scroll-top').removeClass('show-icon-top');
                        }
                    };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.precise-scroll-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }
    var searchTopBar = function (a) {
        $('.search-custom > a').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mkt-search-form').toggleClass('active');
        });
    }
    jQuery(document).ready(function ($) {
        Backtotop();
        menudesktop();
        menuMobileList();
        menuMobile();
        searchTopBar();
		
        if ($('.slider-data').length) {
            $('.slider-data').owlCarousel({
                center: false,
                items: 1,
                nav: false,
                loop: true,
                margin: 0,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    676: {
                        items: 1,
                    },
                    992: {
                        items: 1
                    }
                }
            });
        }
        if ($('.slider-blog').length) {
            $('.slider-blog').owlCarousel({
                center: false,
                items: 3,
                dots: false,
                nav: true,
                loop: false,
                margin: 0,
                autoplay: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    676: {
                        items: 2,
                        nav: false,
                    },
                    992: {
                        items: 3
                    }
                },
            });
        }
        jQuery(window).scroll(function ($) {
            if (jQuery(window).scrollTop() >= 200) {
                jQuery('.header-v1 .header').addClass('menu-fixed');
                jQuery('.header-v1 .menu-mobi').addClass('fixed-menu-mobile');
            } else {
                jQuery('.header-v1 .header').removeClass('menu-fixed');
                jQuery('.header-v1 .menu-mobi').removeClass('fixed-menu-mobile');
            }
        });
        var myResize = function () {
            var width = $(window).width();
            if (width < 601) {
                $('.links-bt a').text(function (i, oldText) {
                    return oldText === 'See Our Solutions >' ? 'Our Solution' : oldText;
                });
            }
            if (width < 992) {
                $('.content-p').readmore({
                    speed: 300,
                    collapsedHeight: 135,
                    moreLink: '<a href="#" class="rm">Read more</a>',
                    lessLink: '<a href="#" class="rm">Read less</a>',
                    heightMargin: 16
                });
                $('.intsight-content .content-p1').readmore({
                    speed: 300,
                    collapsedHeight: 265,
                    moreLink: '<a href="#" class="rm">Read more</a>',
                    lessLink: '<a href="#" class="rm">Read less</a>',
                    heightMargin: 16 
                });
                $('.section-intsight-is-content .content-p2').readmore({
                    speed: 300,
                    collapsedHeight: 210,
                    moreLink: '<a href="#" class="rm">Read more</a>',
                    lessLink: '<a href="#" class="rm">Read less</a>',
                    heightMargin: 16
                });
                $('.section-news').hide();
            }else{
                return false;
            }
        };
        $(window).resize(myResize);
        $(myResize);
        $('.contact-sc').click(function () {
            $('html, body').animate({
                scrollTop: $(".section-form").offset().top - 120
            }, 1000);
            $('.menu-mobi').hide();
            $('.menu-bars-mobi').toggleClass('open');
        });
		$('.contact-sc1').click(function () {
            $('html, body').animate({
                scrollTop: $(".section-form").offset().top - 120
            }, 1000);
        }); 
        jQuery('.bt-ct').click(function () {
            if (location.hash == "#contact-home") {
                jQuery('html, body').animate({
                    scrollTop: jQuery(".section-form").offset().top - 120
                }, 1000);
            }
        });
    });
})(jQuery);
