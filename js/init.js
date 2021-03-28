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

$(document).ready(function(){
  $('.modal').modal();
});

