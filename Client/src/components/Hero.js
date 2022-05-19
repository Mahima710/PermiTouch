import { Box, Typography } from "@mui/material";
import BgImage from "../static/Images/bg2.png";

const Hero = () => {
  return (
    <Box>
      <img
        src={BgImage}
        alt="background"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: "0px",
          zIndex: "-2",
        }}
      />
      <Box
        display="flex"
        style={{
          justifyContent: "Center",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          align="center"
          sx={{
            fontWeight: "500",
            fontSize: "4rem",
            color: "white",
            fontFamily: "Poppins",
          }}
        >
          Permissions Made Easy
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
