window.addEventListener("WebComponentsReady", function() {
  var application = document.querySelector("#application");

  page("/", function () {
    application.route = "home";
  });

  page("/projects", function () {
    application.route = "projects";
  });

  page("/projects/:name", function (data) {
    application.route = "project-info";
    application.params = data.params;
  });

  page.start({
    hashbang: true
  });
});
