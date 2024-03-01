import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuItems } from "./list-menu";
import { useNavigate, useLocation } from "react-router-dom";

export default function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = React.useState("DashboardActive");
  const [openSettings, setOpenSettings] = React.useState(false);

  const setActiveMenuBasedOnRoute = (currentPath) => {
    for (const menuItem of menuItems) {
      if (currentPath.startsWith(menuItem.path)) {
        setActiveMenu(menuItem.menuName);
        return;
      }
    }
  };

  React.useEffect(() => {
    setActiveMenuBasedOnRoute(location.pathname);
  }, [location.pathname, openSettings]);

  const handlePageChange = (path, menuName) => {
    navigate(path);
    setOpenSettings(false);
    setActiveMenu(menuName);
  };

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };
  return (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handlePageChange(item.path, item.menuName)}
              sx={{
                ":hover": {
                  backgroundColor:
                    activeMenu === item.menuName ? "#005FC3" : "none",
                },
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
                mb: 1.5,
                borderRadius: activeMenu === item.menuName ? "0px" : "none",
                backgroundColor:
                  activeMenu === item.menuName ? "#005FC3" : "none",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    activeMenu === item.menuName ? "#fff" : "var(--color-menu)",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color:
                    activeMenu === item.menuName ? "#fff" : "var(--color-menu)",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
