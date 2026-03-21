document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const navItems = document.querySelectorAll(".nav-item.dropdown");
  const allLinks = document.querySelectorAll(".nav-link, .submenu-link");

  // Sidebar Overlay setup
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  // Sidebar Toggle
  sidebarToggle.addEventListener("click", function () {

    if (window.innerWidth > 991) {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.remove("mobile-show");
    } else {
      sidebar.classList.remove("collapsed");
      sidebar.classList.toggle("mobile-show");
      overlay.classList.toggle("show");
    }

  });

  // Window resize cleanup
  window.addEventListener("resize", function () {

    if (window.innerWidth > 991) {
      sidebar.classList.remove("mobile-show");
      overlay.classList.remove("show");
    } else {
      sidebar.classList.remove("collapsed");
    }

  });

  // Overlay click close
  overlay.addEventListener("click", function () {

    sidebar.classList.remove("mobile-show");
    overlay.classList.remove("show");

  });

  // Dropdown Handling
navItems.forEach((item) => {

  const link = item.querySelector(".nav-link");

  link.addEventListener("click", function (e) {

    if (sidebar.classList.contains("collapsed")) return;

    e.preventDefault();

    const isOpen = item.classList.contains("open");

    // Close all dropdowns
    navItems.forEach((other) => other.classList.remove("open"));

    // Toggle current
    if (!isOpen) {
      item.classList.add("open");
    }

    // ✅ Re-open dropdown that has active submenu
    const activeSubmenu = document.querySelector(".submenu-link.active");

    if (activeSubmenu) {
      const parent = activeSubmenu.closest(".nav-item.dropdown");
      if (parent) {
        parent.classList.add("open");
      }
    }

  });

});

  // Active Link Handling (Click)
 allLinks.forEach((link) => {

  link.addEventListener("click", function () {

    const isDropdownParent = this.parentElement.classList.contains("dropdown");

    // ❌ Skip highlighting dropdown parent
    if (isDropdownParent && this.classList.contains("nav-link")) return;

    // Remove all active
    allLinks.forEach((l) => l.classList.remove("active"));

    // Add active only to valid links
    this.classList.add("active");

  });

});
  // Keep active menu after refresh
  const currentPath = window.location.pathname.split("/").pop();

  allLinks.forEach((link) => {

    const href = link.getAttribute("href");

    if (href && href.includes(currentPath)) {

      link.classList.add("active");

      const parentDropdown = link.closest(".nav-item.dropdown");

      if (parentDropdown) {
        parentDropdown.classList.add("open");
      }

    }

  });

  // Premium Dashboard Charts
  if (document.getElementById("paymentsChart")) {

    const paymentOptions = {
      series: [{ name: "Payments", data: [30,40,35,50,49,60,70,91,125] }],
      chart: {
        height: 320,
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "Inter, sans-serif"
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3, colors: ["#1F2F97"] },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20,100]
        }
      },
      xaxis: {
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: { labels: { formatter: (val) => "₹" + val } },
      grid: { borderColor: "#f1f1f1", strokeDashArray: 4 },
      tooltip: { theme: "light", x: { show: false } }
    };

    new ApexCharts(document.querySelector("#paymentsChart"), paymentOptions).render();

  }

  if (document.getElementById("transactionsChart")) {

    const transactionOptions = {
      series: [{ name: "Transactions", data: [44,55,41,67,22,43,21,33,45] }],
      chart: {
        height: 320,
        type: "bar",
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif"
      },
      plotOptions: {
        bar: { borderRadius: 8, columnWidth: "35%", distributed: true }
      },
      colors: ["#F59E0B"],
      dataLabels: { enabled: false },
      legend: { show: false },
      xaxis: {
        categories: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue"],
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      grid: { borderColor: "#f1f1f1", strokeDashArray: 4 }
    };

    new ApexCharts(document.querySelector("#transactionsChart"), transactionOptions).render();

  }

  // Toggle Buttons
  const toggleButtons = document.querySelectorAll(".btn-toggle");

  toggleButtons.forEach((btn) => {

    btn.addEventListener("click", function (e) {

      e.preventDefault();

      const isEnable = this.classList.contains("btn-toggle-enable");

      if (isEnable) {
        this.classList.remove("btn-toggle-enable");
        this.classList.add("btn-toggle-disable");
        this.textContent = "Disable";
      } else {
        this.classList.remove("btn-toggle-disable");
        this.classList.add("btn-toggle-enable");
        this.textContent = "Enable";
      }

    });

  });

  // Image Preview
  function handleImagePreview(inputId, previewId) {

    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    if (input && preview) {

      input.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

          const reader = new FileReader();

          reader.onload = function (e) {
            preview.src = e.target.result;
          };

          reader.readAsDataURL(file);

        }

      });

    }

  }

  handleImagePreview("logoInput","logoPreview");
  handleImagePreview("faviconInput","faviconPreview");
  handleImagePreview("gatewayImageInput","gatewayImagePreview");
  handleImagePreview("languageFlagInput","languageFlagPreview");

});


// Copy to Clipboard
function copyToClipboard(elementId) {

  const copyText = document.getElementById(elementId);

  if (copyText) {

    copyText.select();
    copyText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyText.value).then(() => {

      alert("Copied to clipboard: " + copyText.value);

    });

  }

}