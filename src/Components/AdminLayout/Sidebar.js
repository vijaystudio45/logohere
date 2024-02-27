import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = location;

  let topData;
  const { userData } = useSelector((state) => state.authReducer);

  if (userData?.role == 0) {
    topData = [
      {
        title: "Dashboard",
        path: "/dashboard",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
      `,
      },
      {
        title: "Services",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
      `,
      },
      {
        title: "Features",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
        <circle cx="12" cy="12" r="9"></circle>
      `,
      },
      {
        title: "Deliverables",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <polyline points="7 8 3 12 7 16"></polyline>
        <polyline points="17 8 21 12 17 16"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      `,
      },

      {
        title: "Invoices",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>

      `,
      },

      {
        title: "Inventory",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="12 4 4 8 12 12 20 8 12 4" />
        <polyline points="4 12 12 16 20 12" />
        <polyline points="4 16 12 20 20 16" />
      `,
      },
      {
        title: "Settings",
        path: "#",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      `,
      },
    ];

    // User *****************
  } else if (userData?.role == 1) {
    topData = [
      {
        title: "Dashboard",
        path: "/dashboard",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
      `,
      },
      {
        title: "Get Single SMS",
        path: "/singlesms",
        svg: `
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
      `,
      },
    ];

    // Partner *****************
  }
  return (
    <>
      <div class="h-screen bg-[#111111] p-4 sidebar-menu transition-transform">
        <ul class="">
          <li>
            {topData?.map((item) => (
              <Link
                to={item.path}
                className={
                  pathname === item.path
                    ? "sidebarmenu  flex items-center hover:text-white px-4 py-3 rounded-xl text-white bg-[#6662da] my-2 "
                    : "sidebarmenu bg-gray-100 r text-black  flex items-center px-4 py-3 rounded-xl my-2 "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-grid"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                ></svg>
                <span class="text-sm ml-2">{item.title}</span>
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
