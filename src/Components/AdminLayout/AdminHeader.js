import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";
import { LogoutAction } from "../../Redux/actions/AuthAction";
// import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import swal from "sweetalert";

const Header = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.authReducer);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");

    dispatch(LogoutAction());
    navigate("/login");
    swal({
      title: "",
      icon: "/img/1111.png",
      text: "Log out successfully!  ",
      className: "successAlert",
      buttons: false,
      timer: 1000,
      open: true,
    });
  };


  const getUsernameColor = (username) => {
    // You can customize this function to generate colors based on your requirements
    const colors = {
      A: "#ff5733",
      B: "#33ff57",
      C: "#5733ff",
      D: "#ff33a1",
      E: "#33a1ff",
      F: "#ff9933",
      G: "#33ff99",
      H: "#9966ff",
      I: "#ff6699",
      J: "#66ffcc",
      K: "#ffcc66",
      L: "#6699ff",
      M: "#cc66ff",
      N: "#66ccff",
      O: "#cc99ff",
      P: "#99ccff",
      Q: "#ffcc99",
      R: "#99ffcc",
      S: "#ccff99",
      T: "#ff99cc",
      U: "#40418a",
      V: "#9999cc",
      W: "#ccffcc",
      X: "#ffccff",
      Y: "#ccffff",
      Z: "#ffffcc",
    };

    const firstLetter = username?.charAt(0).toUpperCase();
    return colors[firstLetter] || "#999999"; // Default color if letter not in the map
  };

  return (
    <div>
      <div class="py-2 px-6 bg-[#121212] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button
          type="button"
          class="text-lg text-white font-semibold sidebar-toggle"
        >
          <i class="ri-menu-line"></i>
        </button>
        <a href="#" class="flex items-center border-b-gray-800 mt-2">
          <img className="w-[210px]" src="/img/Logo Here.png" />
        </a>
        <ul class="ml-auto flex items-center">
          <li class="dropdown ml-3">
            <button
              onClick={handleClick}
              class="dropdown-toggle flex items-center"
            >
              <div class="flex-shrink-0 w-10 h-10 relative">
                <div class="p-1  rounded-full focus:outline-none focus:ring">
                  {/* {userData?.image ? ( */}
                    <img
                      class="w-8 h-8 rounded-full bg-white"
                      src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                      alt=""
                    />
                  {/* // ) : (
                  //   <Avatar
                  //     sx={{
                  //       width: 40,
                  //       height: 40,
                  //       backgroundColor: getUsernameColor(userData?.username),
                  //     }}
                  //   >
                  //     {userData?.username &&
                  //       userData.username.charAt(0).toUpperCase()}
                  //   </Avatar>
                  // )} */}

                  <div class="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                  <div class="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div class="p-2 md:block text-left">
                <h2 class="text-sm font-semibold text-white capitalize">
                  {userData?.username}
                </h2>
                <p class="text-xs text-white">Administrator</p>
              </div>
            </button> 

   {/*     <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link to="/profile">
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>
                <Link className="flex gap-2 items-center" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>*/}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
