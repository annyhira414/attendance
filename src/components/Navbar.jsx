import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import search from "/src/assets/logo/Search.svg";
import Bell from "/src/assets/logo/bell.svg";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Switch from "@mui/material/Switch";
import { VscTriangleDown } from "react-icons/vsc";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 5,
      top: -6,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 3px",
    },
  }));
  const handleLogout = async () => {
    toast.success("You are loggeed out");
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("expires");
    navigate("/login");
  };
  return (
    <div className="fixed w-full bg-[#F9FBFF] border-b border-[#6BA6FF]">
      <div className="flex ml-[64px] h-[112px]">
        <div className="border border-[#6BA6FF] rounded-[6px] bg-[#FFFFFF] mt-[32px] h-[48px] w-[777px] flex">
          <img
            className="mt-[15px] ml-[16px] w-[18px] h-[18px] "
            src={search}
            alt="search"
          />
          <InputBase
            placeholder="Search by Name,Id,Job Title..."
            className="w-[715px] mt-[4px] ml-[8px]"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="border border-[#E6F0FF] rounded-full w-[40px] h-[40px] bg-[#F9FBFF] mt-[36px] ml-[67px]">
          <IconButton className="">
            <img
              className="mt-[2px] ml-[1px] w-[20px] h-[20px]"
              src={Bell}
              alt=""
            />
            <StyledBadge variant="dot" color="error"></StyledBadge>
          </IconButton>
        </div>
        <div className="flex mt-9 ml-10">
          <Avatar
            onClick={handleClick}
            className="cursor-pointer border-2 border-[#E6F0FF]"
            alt="Avatar"
            src="/src/assets/images/avatar.svg"
          />
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <button
                onClick={handleClick}
                size="small"
                className=""
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <VscTriangleDown className="w-5 h-5 ml-1 mt-3" />
              </button>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
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
                  "&:before": {
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
              <div className="flex mt-4">
                <p className="w-[52px] h-[27px] text-lg ml-4 tracking-[1px] text-[#1A1D1F]">
                  Mode
                </p>
                <div className="ml-[72px] mr-4">
                  <Switch {...label} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="ml-6 mt-6 mb-4  rounded text-white tracking-[1.25px] w-[158px] h-9 bg-[#0065FF] "
              >
                Logout
              </button>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
