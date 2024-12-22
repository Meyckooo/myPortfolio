<!--?php @session_start();
get_includes('head');
get_includes('header');
get_includes('nav');
get_includes('banner');
?-->
<!--?php if ( is_front_page() ) { get_includes('middle'); }?-->
<!DOCTYPE html>
<!--[if lt IE 10]>      <html class="no-js lt-ie11 lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 10]>         <html class="no-js lt-ie11 lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 11]>         <html class="no-js lt-ie11"> <![endif]-->
<!--[if gt IE 11]><!-->
<html class="no-js" lang="en-US">
<!--<![endif]-->

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

  <title>My Portfolio</title>

  <link rel="stylesheet" type="text/css" href="css/slick.css"/>
  <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>
  <link rel="icon" href="images/favicon.png">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="css/hamburgers.min.css">
  <link rel="stylesheet" href="css/media.css">
  <link rel="stylesheet" href="css/rslides.min.css">
  <link rel="stylesheet" href="css/animate.min.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/skitter.styles.min.css" type="text/css" media="all" />
  <!-- <?php //if ( is_user_logged_in() ) { ?>
		<style>
		@media only screen
		and (max-width : 800px) {
		nav.toggle_right_style{top:32px;}
		}
		@media only screen
		and (max-width : 782px) {
		nav.toggle_right_style{top:46px;}
		}
		</style>
	<?php //}?> -->
  <!--?php wp_head(); ?-->
</head>

        <!-- <body class="<!?php echo is_front_page() ? "front_page" : "non_home_page" ?>"> -->
        <?php  if(is_front_page()){ ?> <body class="front_page"> <?php } else {?> <body> <?php }?>
        <div class="protect-me">
          <div class="clearfix">

      <!-- Header -->
      <div class="header_fix">
        <div class="header_holder">
          <header>
            <div class="wrapper">
              <div class="header_con">

                <div class="main_logo">
                  <a href="<?php //echo get_home_url(); ?>">
                    <figure><img src="images/main-logo.png" alt="<?php //echo get_bloginfo('name');?>" /></figure>
                  </a>
                </div>

              </div>
              <div class="clearfix"></div>
            </div>
          </header>
          <!-- End Header -->

          <!-- Navigation -->
          <div id="nav_area">
            <div class="nav_toggle_button">
              <div class="logo_wrap"></div>
              <div class="toggle_holder">
                <div class="hamburger hamburger--spin-r">
                  <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                  </div>
                </div>
                <small>Menu</small>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="toggle_right_nav">
              <nav class="page_nav">
                <div class="menu_slide_right">
                  <a href="<?php //echo get_home_url(); ?>" class="logo_slide_right">
                    <figure><img src="images/main-logo.png" alt="<?php //echo get_bloginfo('name');?>" /></figure>
                  </a>
                  <div class="toggle_holder">
                    <div class="hamburger hamburger--spin-r">
                      <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                      </div>
                    </div>
                    <small>Close</small>
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="wrapper">
                  <!--?php wp_nav_menu( array( 'container_class' => 'nav-menu', 'theme_location' => 'primary', 'after' => '<span><i class="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i></span>') ); ?-->
                  <ul>
                    <li class="current_page_item"><a href="index.php">Home</a></li>
                    <li><a href="#banner">About</a></li>
                    <li><a href="#middle">Services</a></li>
                    <li><a href="#bottom1">Works</a></li>
                    <li><a href="#bottom2">Contact</a></li>
                  </ul>
                </div>
              </nav>
              <div class="toggle_nav_close"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Navigation -->

      <!-- Banner -->
      <div id="banner">
        <div class="wrapper">
          <div class="bnr_con">

          <div class="bnr_design">
            <figure><img src="images/file-sharing2.png" alt="file sharing"></figure>
          </div>

            <div class="bnr_info">
              <?php dynamic_sidebar('bnr_info'); ?>

              <h2><small>Hello There! I am a</small> Meycko Jade Anthony Canoy</h2>
              <p>A driven front-end developer with a year's experience creating and deploying user-friendly, responsive websites Skilled in HTML, CSS, JavaScript, and modern frameworks like React, with a strong focus on creating clean, efficient code and visually appealing interfaces.</p>
              <a class="btn-style" href="javascript:;">Download My Resume</a>
            </div>

            <div class="social_media">
              <ul>
                <li><a href="https://www.facebook.com" target="_blank"> <figure><img src="images/icons/fb-icon.png" alt="facebook" /></figure></a></li>
                <li><a href="https://www.twitter.com" target="_blank"> <figure><img src="images/icons/twitter-icon.png" alt="twitter" /></figure></a></li>
                <li><a href="https://www.github.com" target="_blank"> <figure><img src="images/icons/github.png" alt="github" /></figure></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <!-- End Banner -->

      <!-- Middle -->

      <div id="middle">
        <div class="wrapper">
          <div class="middle_con">

            <div class="middle_info">
              <h2 class="h2_title">Services</h2>
            </div>

            <div class="middle_boxes">
              <section class="middle_box1">
                <?php dynamic_sidebar('middle_box1'); ?>
                <h2 class="h2_rep">Deployment</h2>
                <p>I am always available to address any issues or concerns you may have.</p>
              </section>

              <section class="middle_box2">
                <?php dynamic_sidebar('middle_box2'); ?>
                <h2 class="h2_rep">Design</h2>
                <p>Specialized in creating stunning websites that are both visually appealing and user-friendly.</p>
              </section>

              <section class="middle_box3">
                <?php dynamic_sidebar('middle_box3'); ?>
                <h2 class="h2_rep">Developing</h2>
                <p>I offer custom web development services tailored to your specific needs as a solo professional.</p>
              </section>

            </div>

          </div>
        </div>
      </div>

      <!-- End Middle -->

      <!-- Main -->
      <div id="main_area">
        <div class="wrapper">
          <div class="main_con">
            <main>
            </main>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- End Main -->

      <!-- Bottom -->
      <div id="bottom1">
        <div class="wrapper">
          <div class="btm1_con">
            <div class="btm1_info">
              <?php dynamic_sidebar('btm1_info'); ?>
                <h2 class="h2_title">My Works</h2>
            </div>
            
            <div class="btm1_boxes slick-slider">

              <section class="btm1_box1">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#1</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>
              
              <section class="btm1_box2">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#2</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>

              <section class="btm1_box3">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#3</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>

              <section class="btm1_box4">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#4</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>

              <section class="btm1_box5">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#5</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>

              <section class="btm1_box6">
                  <figure><img src="images/bottom/screenshot.jpg" alt=""><figcaption>Work#6</figcaption></figure>
                  <div class="boxes_btn">
                    <a class="btn-style" href="javascript:;">View</a>
                  </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <div class="data-scroll" id="bottom2">
        <div class="wrapper">
          <div class="btm2_con">
            <div class="btm2_form_con">
              <div class="btm2_info">
                <?php dynamic_sidebar('btm2_info'); ?>
                <h2 class="h2_title">Let's Connect!</h2>
              </div>

              <div class="btm2_form_parent">
                <div id="invalid-msg"></div>
                <form action="#bottom2" id="submit_formmessage" method="post">
                  <input type="text" name="Robot" placeholder="Spam" value="<?php echo $_SESSION['Robot']; ?>"
                    style="display:none;">
                  <div class="contactNameTxt">
                    <label for="contactNameTxt">Name: </label>
                    <input type="text" class="form_fullname" name="Full_Name" placeholder="What's Your Name"
                    value="<?php echo $_SESSION['Full_Name']; ?>" required />
                  </div>
                  <div class="email_address">
                    <label for="emailaddress">Email Address:</label>
                    <input type="email" class="form_email" name="Email_Address" placeholder="What's Your Email Address?"
                    value="<?php echo $_SESSION['Email_Address']; ?>" required />
                  </div>
                  <div class="messageTxt">
                    <label for="messageTxt">Message:</label>
                    <textarea name="Question_or_Comment"
                    placeholder="Lets connect!"><?php echo $_SESSION['Question_or_Comment']; ?></textarea>
                  </div>  
                  <button class="form_btn btn-style" name="submit_info" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- End Bottom -->

      <!--Footer -->
      <footer>
        <div class="footer_top">
          <div class="wrapper">
            <div class="footer_top_con">
             
              <div class="footer_logo_holder">
                <div class="footer_logo">
                  <a href="<?php //echo get_home_url(); ?>">
                    <figure><img src="images/footer-logo.png" alt="<?php //echo get_bloginfo('name');?>"></figure>
                  </a>
                </div>
              </div>

              <div class="copyright">
                ❤️ Designed by
                  <?php
              $start_year = '2024';
              $current_year = date('Y');
              $copyright = ($current_year == $start_year) ? $start_year : $current_year;
              echo $copyright;
              ?> <q></q>
                  <!--span class="footer_comp"><!?php //echo get_bloginfo('name');?>CompanyName</span-->
                  <!-- <span class="privacy_policy"><a href="privacy-policy">Privacy Policy</a></span> -->
                  <span class="copyright_text_block">MJAC ❤️</span>
              </div>

              <div class="footer_nav">
                <!--?php wp_nav_menu( array('theme_location' => 'secondary' ) ); ?-->
                <ul>
                  <li class="current_page_item"><a href="index.php">Home</a></li>
                  <li><a href="#banner">About</a></li>
                  <li><a href="#middle">Services</a></li>
                  <li><a href="#bottom1">Works</a></li>
                  <li><a href="#bottom2">Contact</a></li>
                </ul>
              </div>

             

            </div>
          </div>
        </div>

      </footer>

      <span class="back_top"></span>

    </div> <!-- End Clearfix -->
  </div> <!-- End Protect Me -->

  <!--?php get_includes('ie');?-->

  <!--
  Solved HTML5 & CSS IE Issues

  <//?php bloginfo('template_url');?>/

  -->
  <script src="js/modernizr-custom-v2.7.1.min.js"></script>
  <!-- <script src="js/jquery-2.1.1.min.js"></script> -->
  <script src="js/jquery-3.7.1.min.js"></script>

  <!--
  Solved Psuedo Elements IE Issues
  -->
  <script src="js/calcheight.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/jquery.skitter.min.js"></script>
  <script src="js/responsiveslides.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery-migrate-3.5.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
  <script type="text/javascript" src="js/slick.min.js"></script>
  <!-- <script src='https://www.google.com/recaptcha/api.js'></script> -->
   
  <!--?php wp_footer(); ?-->
</body>

</html>
<!-- End Footer -->