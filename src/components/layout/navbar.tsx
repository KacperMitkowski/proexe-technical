import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  DARK_MODE_BACKGROUND_COLOR,
  DARK_MODE_FONT_COLOR,
  DRAWER_WIDTH,
  LIGHT_MODE_BACKGROUND_COLOR,
  LIGHT_MODE_FONT_COLOR,
} from "../../styles/consts";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const themeStyles = {
    color: isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR,
    backgroundColor: isDarkTheme
      ? DARK_MODE_BACKGROUND_COLOR
      : LIGHT_MODE_BACKGROUND_COLOR,
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          borderColor: isDarkTheme
            ? DARK_MODE_FONT_COLOR
            : LIGHT_MODE_FONT_COLOR,
          color: isDarkTheme ? DARK_MODE_FONT_COLOR : LIGHT_MODE_FONT_COLOR,
          backgroundColor: isDarkTheme
            ? DARK_MODE_BACKGROUND_COLOR
            : LIGHT_MODE_BACKGROUND_COLOR,
        },
      }}
    >
      <List disablePadding>
        <ListItem
          disablePadding
          title="About us"
          onClick={() => alert("About us")}
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon style={themeStyles} />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          title="Contact"
          onClick={() => alert("Contact")}
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon style={themeStyles} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding title="Users" onClick={() => alert("Users")}>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={themeStyles} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding title="Logout" onClick={() => alert("Logout")}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon style={themeStyles} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding title="Users" onClick={() => toggleTheme()}>
          <ListItemButton>
            <ListItemIcon>
              {isDarkTheme ? (
                <LightModeIcon style={themeStyles} />
              ) : (
                <DarkModeIcon style={themeStyles} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={isDarkTheme ? "Light theme" : "Dark theme"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
