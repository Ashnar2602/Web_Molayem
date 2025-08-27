(function ($) {
  var search = "";

  $(function () {
    /* User Guide Search Button Function */
    $(".search-btn").on("click", function () {
      search = $("#user-guide-search").val();
      markdown_listing(1);
    });

    /* User Guide Search Input Function */
    $("#user-guide-search").keypress(function (e) {
      var key = e.which;
      if (key == 13) {
        $(".search-btn").click();
        return false;
      }
    });

    /* User Guide Search On Value Change */
    var user_guide_search = $("#user-guide-search").val();
    $("#user-guide-search").on("keyup", function () {
      if ($(this).val() != user_guide_search) {
        $(".search-btn").show();
        $(".close-btn").hide();
      }
    });

    /* User Guide Search Button Function */
    $(".close-btn").click(function () {
      $("body").addClass("loading");
      $("#user-guide-search").val("");
      var data = {
        action: "close_button_userguide",
      };
      $.post(ajaxurl, data, function (response) {
        $(".markdown-content").html(response);
        $("body").removeClass("loading");
        $(".search-btn").show();
        $(".close-btn").hide();
      });
    });

    /* Generating Nav Tree */
    if ($("#nav-tree").length) {
      window.nav = new NavTree("#nav-tree", {
        searchable: true,
        showEmptyGroups: true,

        groupOpenIconClass: "fas",
        groupOpenIcon: "fa-chevron-down",

        groupCloseIconClass: "fas",
        groupCloseIcon: "fa-chevron-right",

        linkIconClass: "fas",
        linkIcon: "fa-link",

        iconWidth: "25px",

        searchPlaceholderText: "Find",
      });

      /* User Guide Sidebar Icon Change */
      $("#li1 i").addClass("fa-home").removeClass("fa-link");

      /* Close sidebar on mobile */
      var prevWidth = window.innerWidth;
      if (prevWidth <= 1100 && $(".sidebar_post_list").hasClass("toggled")) {
        sidebar_open();
      }

      if (prevWidth >= 1101 && !$(".sidebar_post_list").hasClass("toggled")) {
        sidebar_open();
      }
      window.addEventListener("resize", function () {
        if (window.innerWidth !== prevWidth) {
          prevWidth = window.innerWidth;
          sidebar_open();
        }
      });

      /* Close Nav Tree on Body click */
      $(".page-content").click(function () {
        if (
          window.innerWidth <= 1100 &&
          $(".sidebar_post_list").hasClass("toggled")
        ) {
          $(".sidebar_post_list").removeClass("toggled");
        }
      });

      $(window).trigger("resize");

      /* Mobile view sidebar toggle */
      $("#show-sidebar").click(function () {
        $(".sidebar_post_list").addClass("toggled");
      });

      /* User Guide Sidebar Toggle */
      $("#close-sidebar").click(function () {
        $(".sidebar_post_list").toggleClass("toggled");
      });
    }

    /* Markdown table of contents scrolling */
    $(".table-of-contents a").click(function (e) {
      e.preventDefault();
      target = $(this).attr("href");
      scrollToSection(target);
    });

    /* Nav Tree Custom No Results */
    nav_tree_no_results();

    /* Show active child in nav tree */
    if ($('.single-markdown').length) {

      url = window.location.href;
      var lastPart = "";
      lastPart = url.split('/').filter(e => e).slice(-1);
      lastPart = lastPart[0];
      var current_li = $('li[data-slug=' + lastPart + ']');

      if (current_li.length) { current_li.children('a').addClass('active'); }

      if (current_li.hasClass('first-child-navtree')) {
        current_li.parent().closest('li').children('a')[0].click();
      } else if (current_li.hasClass('last-child-navtree')) {
        current_li.parent().closest('li').parent().closest('li').children('a')[0].click();
        current_li.parent().closest('li').children('a')[0].click();
      }

      if ($(".wp-video-shortcode").length) {
        $(".wp-video-shortcode").attr('playsinline', '');
      }
    }

    /* Login form loader */
    $('.user_login #ta9_custom_loginform #wp-submit').click(function (e) {
      e.preventDefault();
      $('.login-loader').addClass('showloader');
      $("body").addClass("login-loading");
      if(!$('#user_login').val() || !$('#user_pass').val() ) {
        window.location.replace("https://www.t-a9.com/user-guide/?login=failed");
      } else {
        $('#ta9_custom_loginform').submit();
      }
    });

    /* User Guide Search Header Sticky */

    $(window).on('scroll', function () {
      if ( $('.userguide_search_listing').length && $('.markdown-post').length > 2 && $(document).scrollTop() >= 200 && $(window).width() > 580 ) {
        $('.search-field').addClass('sticky-search');
        $('.inner_detail').addClass('sticky-inner-detail');
      } else if ( $('.userguide_search_listing').length && $('.markdown-post').length > 1 && $(document).scrollTop() >= 300 && $(window).width() <= 580 ) {
        $('.search-field').addClass('sticky-search');
        $('.inner_detail').addClass('sticky-inner-detail');
      } 
      else {
        $('.search-field').removeClass('sticky-search');
        $('.inner_detail').removeClass('sticky-inner-detail');
      }
    });
    $(window).scroll();


  });

  /* User Guide Search Results Listing */
  function markdown_listing(page) {
    $("body").addClass("loading");
    search = $("#user-guide-search").val();
    var data = {
      search: search,
      action: "markdown_listing",
      page: page,
    };
    $.post(ajaxurl, data, function (response) {
      $(".markdown-content").html(response);
      if ($('.markdown-content .no-results').length) {
        $('.inner_detail').addClass('no-results-found');
      } else {
        $('.inner_detail').removeClass('no-results-found');
      }
      $("body").removeClass("loading");
      $(".search-btn").hide();
      $(".close-btn").show();
      $(window).scroll();
    });
  }

  /* Sidebar on Mobile */
  function sidebar_open() {
    var ww = document.body.clientWidth;
    if (ww <= 1100) {
      $(".sidebar_post_list").removeClass("toggled");
    } else if (ww >= 1101) {
      $(".sidebar_post_list").addClass("toggled");
    }
  }

  /* Scroll to section, single markdown */
  function scrollToSection(target) {
    var href = target.substring(1);
    var element = document.getElementById(href);
    var headerOffset = 150;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  /* User Guide Search Results Pagination */
  $(document).on(
    "click",
    ".p_pagination_nav .p_pagination li.active",
    function () {
      var page = $(this).attr("p");
      markdown_listing(page);

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    }
  );

  /* Nav tree no results functions */
  function nav_tree_no_results() {
    if ($("#nav-tree li").length === $("#nav-tree li.d-none").length) {
      $(".no-results-tree").show();
    } else {
      $(".no-results-tree").hide();
    }
  }

  $(document).on("keyup blur", "#menu-tree-search", function () {
    nav_tree_no_results();
  });
})(jQuery);