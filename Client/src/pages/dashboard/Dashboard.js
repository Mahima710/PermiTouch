import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import AskedPermission from "./AskedPermission";
import ApprovedPermission from "./ApprovedPermission";
import RejectedPermission from "./RejectedPermission";
import FormDialog from "../../components/Dialog";
import { Routes, Route } from "react-router-dom";
import FloatingDialog from "../../components/FloatingDialog";
// import { deepOrange, deepPurple } from "@mui/material/colors";
import LetterAvatar from "../../components/Avatar";
import MainDashboard from "./MainDashboard";

const drawerWidth = 240;

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MuiDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const selectedOption = { textDecoration: "none", color: "#1976d2" };
const unselectedOption = { textDecoration: "none", color: "inherit" };

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MuiAppBar
          position="absolute"
          open={open}
          style={{ backgroundColor: "#f75757" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <NavLink
                to=""
                style={{ textDecoration: "none", color: "inherit" }}
                className={(state) =>
                  state.isActive ? setSelected("") : undefined
                }
              >
                Dashboard
              </NavLink>
            </Typography>
            <FormDialog />

            <LetterAvatar />
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </MuiAppBar>
        <MuiDrawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {/* Drawer */}
          <List component="nav">
            <NavLink
              to="/dashboard/asked_permission"
              className={(state) =>
                state.isActive ? setSelected(1) : undefined
              }
              style={({ isActive }) =>
                isActive ? selectedOption : unselectedOption
              }
              // style={selected === 1 ? selectedOption : unselectedOption}
            >
              <ListItemButton>
                <ListItemIcon>
                  <QuestionMarkIcon
                    style={selected === 1 ? selectedOption : unselectedOption}
                  />
                </ListItemIcon>

                <ListItemText primary="Asked Permission" />
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/dashboard/approved_permission"
              className={(state) =>
                state.isActive ? setSelected(2) : undefined
              }
              style={({ isActive }) =>
                isActive ? selectedOption : unselectedOption
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <DoneIcon
                    style={selected === 2 ? selectedOption : unselectedOption}
                  />
                </ListItemIcon>
                <ListItemText primary="Approved Permission" />
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/dashboard/rejected_permission"
              className={(state) =>
                state.isActive ? setSelected(3) : undefined
              }
              style={({ isActive }) =>
                isActive ? selectedOption : unselectedOption
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <CloseIcon
                    style={selected === 3 ? selectedOption : unselectedOption}
                  />
                </ListItemIcon>
                <ListItemText primary="Rejected Permission" />
              </ListItemButton>
            </NavLink>
          </List>
        </MuiDrawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="" element={<MainDashboard />} />
              <Route path="asked_permission/*" element={<AskedPermission />} />
              <Route
                path="approved_permission/*"
                element={<ApprovedPermission />}
              />
              <Route
                path="rejected_permission/*"
                element={<RejectedPermission />}
              />
            </Routes>
            <FloatingDialog />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
