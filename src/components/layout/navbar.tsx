import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useGlobalStyles } from "../../styles/styles";
import { makeStyles } from "@mui/styles";
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

const useLocalStyles = makeStyles((darkTheme: boolean) => ({
  navbarItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#4A4A4A",
    },
  },
}));

export const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const globalClasses = useGlobalStyles();
  const localClasses = useLocalStyles();

  return (
    <Drawer
      className={globalClasses.drawer}
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
          className={localClasses.navbarItem}
          title="Users"
          onClick={() => alert("Action 1")}
        >
          <ListItemButton className={globalClasses.fullWidth}>
            <ListItemIcon>
              <InboxIcon
                style={{
                  color: isDarkTheme
                    ? DARK_MODE_FONT_COLOR
                    : LIGHT_MODE_FONT_COLOR,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Action 1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          className={localClasses.navbarItem}
          title="Users"
          onClick={() => alert("Action 2")}
        >
          <ListItemButton className={globalClasses.fullWidth}>
            <ListItemIcon>
              <MailIcon
                style={{
                  color: isDarkTheme
                    ? DARK_MODE_FONT_COLOR
                    : LIGHT_MODE_FONT_COLOR,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Action 2" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          className={localClasses.navbarItem}
          title="Users"
          onClick={() => alert("Action 3")}
        >
          <ListItemButton className={globalClasses.fullWidth}>
            <ListItemIcon>
              <GroupIcon
                style={{
                  color: isDarkTheme
                    ? DARK_MODE_FONT_COLOR
                    : LIGHT_MODE_FONT_COLOR,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Action 3" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          className={localClasses.navbarItem}
          title="Users"
          onClick={() => alert("Action 4")}
        >
          <ListItemButton className={globalClasses.fullWidth}>
            <ListItemIcon>
              <LogoutIcon
                style={{
                  color: isDarkTheme
                    ? DARK_MODE_FONT_COLOR
                    : LIGHT_MODE_FONT_COLOR,
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Action 4" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          className={localClasses.navbarItem}
          title="Users"
          onClick={() => toggleTheme()}
        >
          <ListItemButton className={globalClasses.fullWidth}>
            <ListItemIcon>
              {isDarkTheme ? (
                <LightModeIcon
                  style={{
                    color: isDarkTheme
                      ? DARK_MODE_FONT_COLOR
                      : LIGHT_MODE_FONT_COLOR,
                  }}
                />
              ) : (
                <DarkModeIcon
                  style={{
                    color: isDarkTheme
                      ? DARK_MODE_FONT_COLOR
                      : LIGHT_MODE_FONT_COLOR,
                  }}
                />
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
