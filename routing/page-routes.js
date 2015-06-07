(function() {
  var application = document.querySelector("#application");

  page('/', function () {
    application.route = "home";
  });

  page('/projects', function (data) {
    application.route = "projects";
    application.params = data.params;
  });

  page.start({
    hashbang: true
  });
})();