import * as React from "react";

import { useTheme } from "@mui/material/styles";
import {
  Toolbar,
  Typography,
  Divider,
  Tooltip,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import {
  Menu,
  ArrowBack,
  ChevronRight,
  Notifications,
} from "@mui/icons-material";
import { Drawer, DrawerHeader, AppBar } from "../drawer-sidebar/drawerStyle";
import MenuItems from "../menu-items";
import MenuProfile from "./menu-profile";
import ImageAvatar from "@/assets/images/avatar.png";
import { useRef } from "react";

export default function Header() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const openProfile = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setOpen(screenWidth >= 1400);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <Menu sx={{ color: "var(--color-text)" }} />
            </IconButton>
            <Typography
              sx={{
                color: "var(--color-text)",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
              noWrap
              component="div"
            >
              Panel Admin Pro
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Notifications
              sx={{
                color: "var(--color-menu)",
                fontSize: "1.8rem",
                marginRight: "10px",
              }}
            />
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openProfile ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openProfile ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  alt="Avatar"
                  src={ImageAvatar}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ flexDirection: "row-reverse" }}>
          <Box
            sx={{
              paddingY: "13px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ArrowBack sx={{ color: "var(--text-color)" }} />
                ) : (
                  <ChevronRight sx={{ color: "var(--text-color)" }} />
                )}
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "2.2em" }}
                src="https://portal-daftarin.cafstechnology.id/assets/logo-admin-ab0e3670.png"
                alt=""
                loading="lazy"
              />
              <Box>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1em",
                    marginLeft: "10px",
                    color: "var(--text-color)",
                  }}
                >
                  Daftarin.id
                </Typography>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.8em",
                    marginLeft: "10px",
                    color: "var(--color-menu)",
                  }}
                >
                  Panel Admin
                </Typography>
              </Box>
            </Box>
          </Box>
        </DrawerHeader>

        <MenuItems />
      </Drawer>
      <MenuProfile
        handleClose={handleClose}
        openProfile={openProfile}
        anchorEl={anchorEl}
      />
    </div>
  );
}
