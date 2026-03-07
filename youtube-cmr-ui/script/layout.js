document.addEventListener("DOMContentLoaded", function () {

  function loadComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error("Error loading component:", error));
  }

  loadComponent("sidebar-container", "../components/sidebar.html");
  loadComponent("header-container", "../components/header.html");

});