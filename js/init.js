(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(
      function (registration) {
        console.log("Service Worker - Registration successful!!!");
      },
      function (error) {
        console.log("Service Worker - Registration Failed", error);
      }
    );
  });
}

$(document).ready(function () {
  $(".modal").modal();
  $(".nav-bar").html(getNavBar());
  $(".page-footer").html(getFooter());

  var payment_id = getParameterByName("payment_id");
});

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getNavBar() {
  return `
  <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo"><img height="60" src="content/logo.png" alt="" srcset="" /></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="index.html">Home</a></li>
        <li><a href="tips.html">Tips</a></li>
        <li><a href="plans.html">Plans</a></li>
        <li><a href="blogs.html">Blogs</a></li>
        <li><a href="appointment.html">Book Appointment</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="contacts.html">Contacts</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="index.html">Home</a></li>
        <li><a href="tips.html">Tips</a></li>
        <li><a href="plans.html">Plans</a></li>
        <li><a href="blogs.html">Blogs</a></li>
        <li><a href="appointment.html">Book Appointment</a></li>
        <li><a href="contacts.html">Contacts</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  `;
}

function getFooter() {
  return `
  <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Diet Plans</h5>
          <p class="grey-text text-lighten-4">
          <ul>
            <li><a class="white-text" href="plans.html">Diabetes Management</a></li>
            <li><a class="white-text" href="plans.html">PCOD/PCOS</a></li>
            <li><a class="white-text" href="plans.html">Thyroid</a></li>
            <li><a class="white-text" href="plans.html">Renal Diesease</a></li>
            <li><a class="white-text" href="plans.html">Liver Diesease</a></li>
            <li><a class="white-text" href="plans.html">Cardiac Diet</a></li>
            <li><a class="white-text" href="plans.html">Weight Management</a></li>
            <li><a class="white-text" href="plans.html">Anti Acidity Diet Plan</a></li>
            <li><a class="white-text" href="plans.html">Pre/Post Pregnancy</a></li>
            <li><a class="white-text" href="plans.html">High Protien</a></li>
            <li><a class="white-text" href="plans.html">Low fat diet</a></li>
            <li><a class="white-text" href="plans.html">Gluten free diet</a></li>
          </ul>
          </p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li>
              <a class="white-text" target="_blank" href="https://www.instagram.com/eat_fit1/">Instgram</a>
            </li>
            <li><a class="white-text" target="_blank" href="https://www.lybrate.com/gurgaon/doctor/jyoti-jangid-para-clinical-expert">Lybrate</a></li>
            <li><a class="white-text" target="_blank" href="https://www.linkedin.com/in/dt-jyoti-jangid/">LinkedIn</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Our Policies</h5>
          <ul>
            <li>
              <a class="white-text" target="_blank" href="terms-conditions.html">Terms and Conditions</a>
            </li>
            <li>
              <a class="white-text" target="_blank" href="faq.html">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        Developed by
          <a
          class="brown-text text-lighten-3"
          >JangirTechnologies</a
        > 
      </div>
    </div>
  `;
}
