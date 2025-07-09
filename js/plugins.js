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
$("main,aside,#banner,#myservices,#myworks,#myinformation,footer p")
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
        .replace(/MJAC/g, "<mark class='comp'>$&</mark>")
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
  
      } else if(window_width > 800 && window_width <= 1024){
        $('.main_logo').prependTo('.header_con');
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

  $(".back_top").click(function () {
    // back to top
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

// Function to handle smooth scrolling with offset
function enableSmoothScroll(navSelector) {
  const navLinks = document.querySelectorAll(`${navSelector} a`);
  const offset = -120; // Offset value (adjust as needed)

  navLinks.forEach((link, index) => {
    if (index === 0) {
      // Reload the page when the first link (Home) is clicked
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        window.location.reload(); // Reload the page
      });
      return; // Skip the rest of the loop for the first link
    }

    // Add smooth scrolling to other links
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute('href').substring(1); // Remove the leading #
      const targetElement = document.getElementById(targetId); // Get the target element

      if (targetElement) {
        // Calculate the target position with the offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

        // Scroll to the target position with smooth behavior
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      } else {
        window.location.reload(); // Reload the page if the target doesn't exist
      }
    });
  });
}

// Apply smooth scrolling to both navs
enableSmoothScroll('nav'); // Top nav
enableSmoothScroll('.footer_nav'); // Footer nav
  

  $(window).scroll(function () {
    // fade in fade out button
    var windowScroll = $(this).scrollTop();

    if (windowScroll > webHeight * 0.45 && window_width <= 600) {
      $(".back_top").fadeIn();
    } else {
      $(".back_top").fadeOut();
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

// FORM SEND EMAIL

// Bind the submit event to the form, not the button
$("#submit_form").on("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  sendMail();
});

// Function to send email
function sendMail() {
  let params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Ensure proper usage of the promise
  emailjs.send("service_p7wzd2j", "template_us25wty", params)
    .then(function (response) {
      alert("Email Sent!!"); // Show success alert
    })
    .catch(function (error) {
      console.error("Failed to send email:", error); // Log any errors
    });
}

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


  $(document).ready(function(){
    $('.slick-slider').slick({
      dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    });
  });

  // Smooth Scroll

  if ($("body").hasClass("front_page")){

    if(window_width > 1024){
      const lenis = new Lenis()
    
      gsap.ticker.add((time)=>{
        lenis.raf(time * 700)
      })
    
      gsap.ticker.lagSmoothing(0)
    }
  }

    // "Clickable Nav Mobile View"
    // Remove 'active' class from the body
    document.querySelector('body').classList.remove('active');

    // Add click event listener to the main menu
    const mainMenu = document.querySelector('#menu-main-menu');
    if (mainMenu) {
    mainMenu.addEventListener('click', (e) => {
    const target = e.target.closest('a'); // Check if the click is on a link or its child element
    if (!target) return; // Exit if no valid <a> element is found

    // Remove specific classes when a link is clicked
    const pageNav = document.querySelector('.page_nav');
    const toggleRightNav = document.querySelector('.toggle_right_nav');
    const hamburger = document.querySelector('.hamburger');

    if (pageNav) pageNav.classList.remove('toggle_right_style');
    if (toggleRightNav) toggleRightNav.classList.remove('toggle_right_cont');
    if (hamburger) hamburger.classList.remove('is-active');
    document.querySelector('body').classList.remove('active');
  });
}


const boxes = document.querySelectorAll('.mytech_info ul li');

boxes.forEach((box) => {
  const text = box.querySelector('.shadow-text');

  box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position within the box
    const y = e.clientY - rect.top; // Mouse Y position within the box

    // Calculate shadow offsets based on mouse position
    const shadowX = (x / rect.width) * 20 - 10; // Adjust multiplier for intensity
    const shadowY = (y / rect.height) * 20 - 10; // Adjust multiplier for intensity

    // Update the text shadow dynamically
    text.style.textShadow = `${shadowX}px ${shadowY}px 10px #00ff94,
                             ${shadowX * 1.5}px ${shadowY * 1.5}px 20px #00ff94,
                             ${shadowX * 2}px ${shadowY * 2}px 30px #00ff94,
                             ${shadowX * 2.5}px ${shadowY * 2.5}px 40px #00ff94`;
  });

  box.addEventListener('mouseleave', () => {
    // Reset the shadow when the mouse leaves
    text.style.textShadow = 'none';
  });
});

});

