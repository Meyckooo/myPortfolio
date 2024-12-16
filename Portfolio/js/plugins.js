$(document).ready(function () {
  // Global Variables

  var toggle_primary_button = $(".nav_toggle_button"),
    toggle_primary_icon = $(".nav_toggle_button i"),
    toggle_secondary_button = $(".page_nav li span"),
    primary_menu = $(".page_nav"),
    secondary_menu = $(".page_nav ul ul"),
    webHeight = $(document).height(),
    window_width = $(window).width();

// Company name and phone number on content area
$("main,aside,#banner,#middle,#bottom1,#bottom2,#bottom3,#bottom4,footer p")
  .not(".woocommerce")
  .each(function () {
    const regex1 =
      /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
    const regex2 =
      /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
    const regex =
      /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
    $(this).html(
      $(this)
        .html()
        .replace(/Company Name/g, "<mark class='comp'>$&</mark>")
        .replace(regex1, "<mark class='main_phone'>$&</mark>")
        .replace(regex2, "<mark class='main_phone'>$&</mark>")
        .replace(regex, "<mark class='main_phone'>$&</mark>")
    );
  });

// Removes the .comp class on the following html attributes to avoid broken links
const attributes = [
  "href",
  "src",
  "action",
  "data",
  "formaction",
  "xlink\\:href",
];

// Iterate over each attribute
attributes.forEach((attr) => {
  // Select elements with the current attribute
  $(`[${attr}]`).each(function () {
    // Get the attribute value
    let value = $(this).attr(attr);

    // Replace <mark class='comp'> and </mark> with an empty string
    if (!value) return;
    if (value && /<mark class='comp'>/.test(value)) {
      value = value
        .replace(/<mark class='comp'>/g, "")
        .replace(/<\/mark>/g, "");
      $(this).attr(attr, value);
    }
  });
});


  $("main a[href]").each(function () {
    var newHref = $(this).attr("href").replace("<mark class='comp'>", "").replace("</mark>", "");
    $(this).attr("href", newHref);
  });

  // Forms on content area
  var form = $("main").find("#myframe");
  if (form.length > 0) {
    document.getElementById("myframe").onload = function () {
      calcHeight();
    };
  }

  // Add class to tab having drop down
  $(".page_nav li:has(ul)").find("span i").addClass("fa-caret-down");

  //Multi-line Tab
  toggle_secondary_button.click(function () {
    $(this)
      .parent("li")
      .siblings("li")
      .children("ul")
      .slideUp(400, function () {
        $(this).removeAttr("style");
      });

    $(this)
      .parent("li")
      .siblings("li")
      .find(".fa")
      .removeClass("fa-caret-up")
      .addClass("fa-caret-down");

    $(this).parent("li").children("ul").slideToggle();
    $(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
  });

  // Basic functionality for nav_toggle

  var hamburger = $(".hamburger");
  // hamburger.each(function(){
  // $(this).click(function(){
  // $(this).toggleClass("is-active");
  // });
  // });

  hamburger.click(function () {
    primary_menu.addClass("toggle_right_style");
    $(".toggle_right_nav").addClass("toggle_right_cont");
    $(".nav_toggle_button").toggleClass("active");
    $(".hamburger").toggleClass("is-active");
    $("body").addClass("active");
  });

  $(".toggle_nav_close, .menu_slide_right .hamburger").click(function () {
    primary_menu.removeClass("toggle_right_style");
    secondary_menu.removeAttr("style");
    toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
    $(".toggle_right_nav").removeClass("toggle_right_cont");
    $(".nav_toggle_button").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("active");
  });

  // Swap Elements

  function swap_this(){
    if(window_width <= 600){
      if ($("body").hasClass("front_page")){
        //home
        // Default
        $('.main_logo').insertAfter('.logo_wrap');
        $('#nav_area').insertBefore('header');
        } else{
        //non home  
        $('.main_logo').insertAfter('.logo_wrap');
        $('#nav_area').insertBefore('header');
        }
      } else if(window_width <= 800){
        $('.main_logo').insertAfter('.logo_wrap');
        $('#nav_area').insertBefore('header');
  
      } else if(window_width > 800 && window_width <= 1000){
        $('.main_logo').insertBefore('.head_info');
        $('#nav_area').insertAfter('header');
      } else {
        $('.main_logo').prependTo('.page_nav .wrapper');
        $('#nav_area').insertAfter('header');
      }
  }

	swap_this();

  // For Dark mode change position
  // (() => {
	// 	$(".dracula-toggle-wrap").appendTo(".dark_mode_toggle");
	//   })();

  const dynamicMinHeight = (targetElement) => {
    const targetElements = [...document.querySelectorAll(targetElement)];
    if (targetElements.length <= 0 || !targetElement) return;
    targetElements.forEach((el) => (el.style.minHeight = "auto"));
    const targetElementsHeight = targetElements.map((el) => el.offsetHeight);
    const heighestHeight = Math.max(...targetElementsHeight);
    targetElements.forEach((el) => (el.style.minHeight = `${heighestHeight}px`));
  };

  dynamicMinHeight(".sample_class");

  // Reset all configs when width > 800
  $(window).resize(function () {
    window_width = $(this).width();

    swap_this();

    dynamicMinHeight(".sample_class");

    if (window_width > 800) {
      $(".nav_toggle_button").removeClass("active");
      $(".hamburger").removeClass("is-active");
      primary_menu.removeClass("toggle_right_style");
      $(".toggle_right_nav").removeClass("toggle_right_cont");
      $("body").removeClass("active");
    } else {
      secondary_menu.removeAttr("style");
      toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });

  $(".rslides").responsiveSlides();
  $(".box_skitter_large").skitter({
    theme: "minimalist",
    numbers_align: "center",
    progressbar: false,
    navigation: false,
    numbers: false,
    dots: false,
    preview: false,
    interval: 4000,
  });

  $(".back_top").click(function () {
    // back to top
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });
  

  $(window).scroll(function () {
    // fade in fade out button
    var windowScroll = $(this).scrollTop();

    $(".dummy_class").css("top", 0 - windowScroll * -0.23 + "px");

    if (windowScroll > webHeight * 0.5 && window_width <= 600) {
      $(".back_top").fadeIn();
    } else {
      $(".back_top").fadeOut();
    }

    if ($("#classname").length >= 1) {
      var fixbtm = $("#classname").offset().top;
      if (fixbtm <= windowScroll && window_width > 1024) {
        $("#classname").css({
          "background-attachment": "fixed",
          "background-position": "center top",
        });
      } else {
        $("#classname").css({
          "background-attachment": "unset",
          "background-position": "center top",
        });
      }
    }

    // For (AddThis) Plugins
    if ($("body #at-share-dock").hasClass("at-share-dock")) {
      $(".back_top").addClass("withAddThis_plugins");
      $(".footer_btm").addClass("withAddThis_ftr_btm");
    } else {
      $(".back_top").removeClass("withAddThis_plugins");
      $(".footer_btm").removeClass("withAddThis_ftr_btm");
    }

    // End (AddThis) Plugins
  });

  // Testimonial
  $("#commentform").click(function () {
    if ($("#author").val() == "") {
      $("#author").addClass("testimonialreq");
    } else {
      $("#author").removeClass("testimonialreq");
    }

    if ($("#email").val() == "") {
      $("#email").addClass("testimonialreq");
    } else {
      $("#email").removeClass("testimonialreq");
    }

    if ($("#comment").val() == "") {
      $("#comment").addClass("testimonialreq");
    } else {
      $("#comment").removeClass("testimonialreq");
    }
  });

  //---------------------- START OF CODE (FORM ACTIVATION) -------------------------------//
  $("#submit_formmessage .form_email").change(function () {
    validateEmail();
  });
  $("#submit_formmessage .form_btn").on("click", function () {
    if ($("#submit_formmessage .form_fullname").val() == "") {
      $("#submit_formmessage .form_fullname").addClass("FormReq");
    } else {
      $("#submit_formmessage .form_fullname").removeClass("FormReq");
    }
    if ($("#submit_formmessage .form_chkbox").not(":checked")) {
      $("#submit_formmessage .form_chkbox").addClass("FormReq");
    } else {
      $("#submit_formmessage .form_chkbox").removeClass("FormReq");
    }
    if ($("#submit_formmessage .form_email").val() == "") {
      $("#submit_formmessage .form_email").addClass("FormReq");
    } else {
      validateEmail();
    }
    if (grecaptcha.getResponse() == "") {
      var $recaptcha = document.querySelector("#g-recaptcha-response");
      $recaptcha.setAttribute("required", "required");
      $(".g-recaptcha iframe").addClass("FormReq").attr("id", "recaptcha");
    }
  });

  // FOR EMAIL VALIDATOR
  function validateEmail() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#submit_formmessage .form_email").val();
    if (!emailReg.test(email)) {
      $("#submit_formmessage .form_email").addClass("FormReq");
      $("#invalid-msg").show();
      $("#invalid-msg").html("Please enter a valid email address.");
    } else {
      $("#submit_formmessage .form_email").removeClass("FormReq");
      $("#invalid-msg").hide();
    }
  }

  // FOR PROMPT POP-UP MESSAGE
  $("#success .close").click(function () {
    $("#success").fadeOut();
    $("#recaptcha-error").fadeOut();
  });

  $(".rclose").click(function () {
    $("#recaptcha-error").fadeOut();
  });

  $("#error-msg .error-close").click(function () {
    $("#error-msg").fadeOut();
  });

  //---------------------- END OF CODE (FORM ACTIVATION -------------------------------//

  new WOW().init();

  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    loop: true,
    margin: 0,
    // navText:["&#x2190;","&#x2192;"],
    responsive: {
      291: {
        items: 1,
      },
      751: {
        items: 2,
      },
      1011: {
        items: 3,
      },
    },
  });


  // Smooth Scroll

  // if ($("body").hasClass("front_page")){

  //   if(window_width > 1024){
  //     const lenis = new Lenis()
    
  //     gsap.ticker.add((time)=>{
  //       lenis.raf(time * 900)
  //     })
    
  //     gsap.ticker.lagSmoothing(0)
  //   }
  // }

  // Darkmode
  
  // (function checkDarkMode() {
  //   const isDarkMode = document
  //     .querySelector(".dracula-toggle")
  //     .classList.contains("mode-dark");
  //   if (isDarkMode) {
  //     document.body.classList.add("dark-mode");
  //   }
  // })();

  // $(".dracula-toggle").click(function () {
  //   document.body.classList.toggle("dark-mode");
  // });

});
