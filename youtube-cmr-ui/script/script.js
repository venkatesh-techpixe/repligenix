document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const navItems = document.querySelectorAll(".nav-item.dropdown");

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

  // Handle Window Resize to cleanup states
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      sidebar.classList.remove("mobile-show");
      overlay.classList.remove("show");
    } else {
      sidebar.classList.remove("collapsed");
    }
  });

  // Close sidebar on overlay click
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

      // Close other open dropdowns
      navItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("open");
        }
      });

      // Toggle current
      item.classList.toggle("open");
    });
  });

  // Premium Dashboard Charts Configuration
  if (document.getElementById("paymentsChart")) {
    const paymentOptions = {
      series: [
        { name: "Payments", data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
      ],
      chart: {
        height: 320,
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "Inter, sans-serif",
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3, colors: ["#1F2F97"] },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { labels: { formatter: (val) => "₹" + val } },
      grid: { borderColor: "#f1f1f1", strokeDashArray: 4 },
      tooltip: { theme: "light", x: { show: false } },
    };
    new ApexCharts(
      document.querySelector("#paymentsChart"),
      paymentOptions,
    ).render();
  }

  if (document.getElementById("transactionsChart")) {
    const transactionOptions = {
      series: [
        { name: "Transactions", data: [44, 55, 41, 67, 22, 43, 21, 33, 45] },
      ],
      chart: {
        height: 320,
        type: "bar",
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
      },
      plotOptions: {
        bar: { borderRadius: 8, columnWidth: "35%", distributed: true },
      },
      colors: ["#F59E0B"],
      dataLabels: { enabled: false },
      legend: { show: false },
      xaxis: {
        categories: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      grid: { borderColor: "#f1f1f1", strokeDashArray: 4 },
    };
    new ApexCharts(
      document.querySelector("#transactionsChart"),
      transactionOptions,
    ).render();
  }

  // Handle Active Link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link, .submenu-link").forEach((link) => {
    if (
      link.getAttribute("href") &&
      currentPath.includes(link.getAttribute("href"))
    ) {
      link.classList.add("active");
      // If it's a submenu link, open the parent dropdown
      const parentDropdown = link.closest(".nav-item.dropdown");
      if (parentDropdown) parentDropdown.classList.add("open");
    }
  });
});
