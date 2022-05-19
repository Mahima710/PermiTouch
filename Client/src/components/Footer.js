import {
  Box,
  Stack,
  Typography,
  ListItemText,
  ListItemButton,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ padding: "100px 150px 10px 150px", backgroundColor: "smokewhite" }}
    >
      <Stack direction="row" style={{ justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              color: "#242424",
              fontWeight: "700",
            }}
          >
            Company
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="Terms & Conditions" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" disableGutters>
                <ListItemText primary="Privacy Policy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="Support" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="FAQ" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              color: "#242424",
              fontWeight: "700",
            }}
          >
            Quick Links
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list" disableGutters>
                <ListItemText primary="My Permissions" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="Team" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              color: "#242424",
              fontWeight: "700",
            }}
          >
            Subscribe Us
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemText
                  sx={{ color: "rgba(0,0,0,0.6)" }}
                  primary="Subscribe to get latest news article and resources"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <TextField
                  id="outlined-basic"
                  label="Subscribe Now"
                  variant="outlined"
                  size="small"
                />
              </ListItemButton>
            </ListItem>
            <Button variant="contained" style={{ backgroundColor: "#f75757" }}>
              Subscribe
            </Button>
          </List>
        </Box>

        <Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            <span style={{ color: "#242424" }}>Permi</span>
            <span style={{ color: "#f75757" }}>Touch</span>
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
                  Support@PermiTouch.com
                </Typography>
              </ListItemButton>
            </ListItem>
            <Typography
              variant="h5"
              sx={{ color: "#f75757", fontWeight: "700" }}
            >
              1800-456-6588
            </Typography>
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
