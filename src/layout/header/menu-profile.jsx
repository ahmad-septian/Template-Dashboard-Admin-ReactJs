import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Divider, Avatar, ListItemIcon } from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import ImageAvatar from "@/assets/images/avatar.png";
import {} from "react-router-dom";

export default function MenuProfile(props) {
  const { handleClose, openProfile, anchorEl } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openProfile}
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
      <MenuItem onClick={handleClose}>
        <Avatar sx={{ width: 60, height: 60 }} alt="Avatar" src={ImageAvatar} />
        Ahmad septian
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
