import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography,
} from "@mui/material";
import { useGlobalStyles } from "../../styles/styles";
import { makeStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { DRAWER_WIDTH } from "../../styles/consts";

const useLocalStyles = makeStyles((theme: Theme) => ({
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
              <InboxIcon />
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
              <MailIcon />
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
              <GroupIcon />
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
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Action 4" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
