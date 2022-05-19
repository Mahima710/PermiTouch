import { Stack, Box, Typography } from "@mui/material";

const CountingPermissions = () => {
  return (
    <Stack
      direction="row"
      style={{ justifyContent: "space-around", marginBottom: "2rem" }}
    >
      <Box
        display="flex"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" style={{ color: "rgba(0,0,0,0.6)" }}>
          01
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "rgba(0,0,0,0.6)" }}
          gutterBottom
        >
          Pending
        </Typography>
      </Box>

      <Box
        display="flex"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ color: "success.light" }}>
          02
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "rgba(0,0,0,0.6)" }}
          gutterBottom
        >
          Approved
        </Typography>
      </Box>

      <Box
        display="flex"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ color: "error.light" }}>
          03
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "rgba(0,0,0,0.6)" }}
          gutterBottom
        >
          Rejected
        </Typography>
      </Box>
    </Stack>
  );
};

export default CountingPermissions;
