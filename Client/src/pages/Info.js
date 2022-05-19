import { Stack, Box, Typography, Button } from "@mui/material";
import Image from "../static/Images/image.jpg";

const Info = () => {
  return (
    <Box sx={{ margin: "100px" }}>
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", marginBottom: "6rem" }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              color: "#f75757",
              marginBottom: "1rem",
            }}
          >
            What we are
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
            gutterBottom
          >
            A one stop platform for
            <br />
            all your permissions on
            <br />
            campus
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              marginBottom: "3rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 2,
            }}
            gutterBottom
          >
            Tired of getting offline permissions from administrative offices?
            <br />
            Don't worry PermiTouch got your back.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: 28,
              fontFamily: "Poppins",
              backgroundColor: "#f75757",
              padding: "1rem 3rem",
            }}
            disableRipple
          >
            Get Started
          </Button>
        </Box>
        <img src={Image} alt="graphic" style={{ width: "50%" }} />
      </Stack>

      <Stack direction="row" style={{ justifyContent: "space-between" }}>
        <Box sx={{ maxWidth: "32%" }}>
          <Stack
            direction="row"
            style={{ alignItems: "flex-end", marginBottom: "1rem" }}
          >
            <Typography
              variant="h4"
              compoenent="span"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#f75757",
                marginRight: "0.5rem",
              }}
            >
              01.
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{
                color: "#242424",
                fontFamily: "Poppins",
                fontWeight: "700",
              }}
            >
              Our Mission
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.6)",
              lineHeight: "2rem",
              fontSize: "1.1rem",
            }}
          >
            The main goal of PermiTouch is to rule out the need for multiple
            emails and handwritten applications for permissions, thus preventing
            conflicts caused by human errors.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "32%" }}>
          <Stack
            direction="row"
            style={{ alignItems: "flex-end", marginBottom: "1rem" }}
          >
            <Typography
              variant="h4"
              compoenent="span"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#f75757",
                marginRight: "0.5rem",
              }}
            >
              02.
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{
                color: "#242424",
                fontFamily: "Poppins",
                fontWeight: "700",
              }}
            >
              Our Vision
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.6)",
              lineHeight: "2rem",
              fontSize: "1.1rem",
            }}
          >
            PermiTouch aims at easing and automating the process of permission
            taking and granting.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "32%" }}>
          <Stack
            direction="row"
            style={{ alignItems: "flex-end", marginBottom: "1rem" }}
          >
            <Typography
              variant="h4"
              compoenent="span"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#f75757",
                marginRight: "0.5rem",
              }}
            >
              03.
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{
                color: "#242424",
                fontFamily: "Poppins",
                fontWeight: "700",
              }}
            >
              Our Approach
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.6)",
              lineHeight: "2rem",
              fontSize: "1.1rem",
            }}
          >
            llum similique ducimus accusamus laudantium praesentium, impedit
            quaerat, itaque maxime sunt deleniti voluptas distinctio .
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Info;
