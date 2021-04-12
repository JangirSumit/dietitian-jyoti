(function ($) {
  $(function () {
    $(".parallax").parallax();
    //$(".sidenav").sidenav();
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

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  setTimeout(() => {
    $("#install-banner").show(1000);
  }, 3000);

  document.querySelector("#buttonInstall").addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    document.querySelector("#install-banner").style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });

  document.querySelector("#cancelInstall").addEventListener("click", (e) => {
    $("#install-banner").hide(1000);
  });
});

$(document).ready(function () {
  $(".modal").modal();
  $(".nav-bar").html(getNavBar());
  $(".page-footer").html(getFooter());
  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
  $("#install-banner").hide();

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
      <a id="logo-container" href="index.html" class="brand-logo"><img height="60" src="content/logo.png" alt="dietitian-jyoti-logo" srcset="" /></a>
      <ul class="right hide-on-med-and-down">
        <li><a class="teal-text" href="index.html">Home</a></li>
        <li><a class="teal-text" href="tips.html">Tips</a></li>
        <li><a class="teal-text" href="plans.html">Plans</a></li>
        <li><a class="teal-text" href="blogs.html">Blogs</a></li>
        <li><a class="teal-text" href="appointment.html">Book Appointment</a></li>
        <li><a class="teal-text" href="about.html">About Me</a></li>
        <li><a class="teal-text" href="contacts.html">Contacts</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav teal-text">
        <li><a class="teal-text" href="index.html">Home</a></li>
        <li><a class="teal-text" href="tips.html">Tips</a></li>
        <li><a class="teal-text" href="plans.html">Plans</a></li>
        <li><a class="teal-text" href="blogs.html">Blogs</a></li>
        <li><a class="teal-text" href="appointment.html">Book Appointment</a></li>
        <li><a class="teal-text" href="about.html">About Me</a></li>
        <li><a class="teal-text" href="contacts.html">Contacts</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  `;
}

function getFooter() {
  return `
  <div class="container">
      <div class="row">
        <div class="col l3 s12">
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
          <h5 class="white-text">Links</h5>
          <p class="grey-text text-lighten-4">
          <ul>
          <li><a class="white-text" href="index.html">Home</a></li>
          <li><a class="white-text" href="tips.html">Tips</a></li>
          <li><a class="white-text" href="plans.html">Plans</a></li>
          <li><a class="white-text" href="blogs.html">Blogs</a></li>
          <li><a class="white-text" href="appointment.html">Book Appointment</a></li>
          <li><a class="white-text" href="about.html">About Me</a></li>
          <li><a class="white-text" href="contacts.html">Contacts</a></li>
          </ul>
          </p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li>
              <a class="white-text" target="_blank" href="https://www.instagram.com/eat_fit1/">Instgram</a>
            </li>
            <li><a class="white-text" target="_blank" href="https://www.practo.com/gurgaon/therapist/dt-jyoti-jangid-dietitian-nutritionist">Practo</a></li>
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
              <a class="white-text" target="_blank" href="cancellation.html">Cancellation Policy</a>
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
          >TechJunkies</a
        > 
      </div>
    </div>
  `;
}
