(function(document) {
  var application = document.querySelector("#application");

  application.displayInstalledToast = function() {
    document.querySelector("#caching-complete").show();
  };

  application.logServiceWorkerError = function(e) {
    console.log(e);
  };
})(document);