import { Box, Typography } from "@mui/material";

const TeamInfo = () => {
  return (
    <Box style={{ marginTop: "7rem", textAlign: "center" }}>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "#f75757",
          marginBottom: "2rem",
          fontFamily: "Poppins",
        }}
      >
        Our Team
      </Typography>
      <Typography variant="h3" gutterBottom style={{ fontFamily: "Poppins" }}>
        Expert Team member to get best service
      </Typography>
    </Box>
  );
};

export default TeamInfo;
