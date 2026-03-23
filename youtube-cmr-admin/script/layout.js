const sidebarLayout = `
      <div class="sidebar-header text-center position-relative">
        <a
          href="/youtube-cmr-admin/dashboard/dashboard.html"
          class="brand-logo d-flex flex-column align-items-center position-relative"
        >
          <img
            src="/youtube-cmr-ui/assets/images/logo.webp"
            alt="logo"
            class="logo-img mt-4"
          />

          <span class="brand-text"> repligenix </span>
        </a>
      </div>

      <div class="sidebar-menu">
        <ul class="p-0 m-0">
          <!-- Dashboard -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/dashboard/dashboard.html" class="nav-link" data-title="Dashboard">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Dashboard</span>
            </a>
          </li>

          <!-- Channels -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/channels/channels.html" class="nav-link" data-title="Channel">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                ></path>
                <polygon
                  points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                ></polygon>
              </svg>
              <span>My Channel</span>
            </a>
          </li>

          <!-- Videos -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/videos/videos.html" class="nav-link" data-title="Videos">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span>My Videos</span>
            </a>
          </li>

          <!-- Comparative Analysis -->

             <li class="nav-item">
            <a href="/youtube-cmr-admin/comprensive/comprehensive.html" class="nav-link" data-title="Comparative Analysis">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span>Comparative Analysis</span>
            </a>
          </li>

                    <!-- Manage Users Dropdown -->
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-title="Manage Users">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Automation Setting</span>
              <svg
                class="menu-arrow"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
            <ul class="dropdown-menu-list">
              <li>
                <a href="/youtube-cmr-admin/automation/custom-tones.html" class="submenu-link">Custom Tones</a>
              </li>
              <li>
                <a href="/youtube-cmr-admin/automation/set-languages.html" class="submenu-link">Set Languages</a>
              </li>
              <li>
                <a href="/youtube-cmr-admin/automation/video-faqs.html" class="submenu-link">Video FAQs</a>
              </li>
              <li>
                <a href="/youtube-cmr-admin/automation/comment-rules.html" class="submenu-link">Comment Rules</a>
              </li>
            </ul>
          </li>

          <!-- Subscription -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/subscription/subscription.html" class="nav-link" data-title="Subscription Plan">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              <span>Subscription Plans</span>
            </a>
          </li>



          <!-- Payment Dropdown -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/payemnts/payment.html" class="nav-link" data-title="Payment">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path
                  d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                ></path>
              </svg>
              <span>Payment History</span>
            </a>
          </li>

          <!-- Support Ticket -->
          <li class="nav-item">
            <a href="/youtube-cmr-admin/ticket/ticket.html" class="nav-link" data-title="Support Ticket">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
              </svg>
              <span>Support Ticket</span>
            </a>
          </li>
        </ul>
      </div>

`;

const headerLayout = `
          <div class="header-left">
        <button class="btn btn-link link-dark p-0 me-3" id="sidebarToggle">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>


      <div class="header-actions header-right">
         <span class="action-icon d-none d-sm-block">
          <a href="https://repligenix.com/" target="_blank" class="text-decoration-none text-secondary">
            <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            ></path>
          </svg>
          </a>
        </span>
        <div class="position-relative">
          <!-- Bell Icon -->
          <span class="action-icon cursor-pointer" id="notificationBtn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>

            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-0-6"
            >
              9
            </span>
          </span>

          <!-- Notification Box -->
          <div id="notificationBox" class="notification-box d-none">
            <div class="notification-header border-bottom mb-2 pb-2">
              <h6 class="mb-0 fw-600 text-dark">Notification</h6>
              <span class="fs-0-8 text-secondary">You have 9 unread notification</span>
            </div>
            
            <div style="max-height: 280px; overflow-y: auto; overflow-x: hidden; padding-right: 5px;">
              <div class="notification-item">
                A new contact message has been submitted
                <span>3 days ago</span>
              </div>
              <div class="notification-item">
                A new contact message has been submitted
                <span>4 days ago</span>
              </div>
              <div class="notification-item">
                A new contact message has been submitted
                <span>2 weeks ago</span>
              </div>
              <div class="notification-item">
                A new contact message has been submitted
                <span>3 weeks ago</span>
              </div>
              <div class="notification-item">
                A new contact message has been submitted
                <span>1 month ago</span>
              </div>
              <div class="notification-item">
                A new contact message has been submitted
                <span>2 months ago</span>
              </div>
              <div class="notification-item">
                Deposit request from tejasai
                <span>2 months ago</span>
              </div>
              <div class="notification-item">
                New member registered
                <span>2 months ago</span>
              </div>
              <div class="notification-item">
                New member registered
                <span>2 months ago</span>
              </div>
            </div>

            <button class="btn bg-primary text-white w-100 mt-2 rounded-8">
              View all notifications
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="avatar-wrapper dropdown-toggle" data-bs-toggle="dropdown">
            <img
              src="https://ui-avatars.com/api/?name=Bstore&background=1F2F97&color=fff"
              class="avatar"
              alt="User"
            />
            <span class="fw-600 d-none d-md-inline">sai teja</span>
          </div>
          <ul class="dropdown-menu dropdown-menu-end shadow border-0">
            <li><a class="dropdown-item" href="/youtube-cmr-admin/profile/profile.html">Profile Settings</a></li>
            <li><a class="dropdown-item" href="/youtube-cmr-admin/profile/change-password.html">Change Password</a></li>
            <li><a class="dropdown-item text-danger" href="https://repligenix.com/user/login">Logout</a></li>
          </ul>
        </div>
      </div>
`;

document.getElementById("sidebar").innerHTML = sidebarLayout;
document.getElementById("top-header").innerHTML = headerLayout;
