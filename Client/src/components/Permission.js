import { Paper, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Permission = (props) => {
  let style = { color: "inherit" };

  if (props.type === "rejected") {
    style = { color: "error.main" };
  } else if (props.type === "approved") {
    style = { color: "success.light" };
  } else {
    style = { color: "#242424" };
  }

  return (
    <NavLink
      to={`permission_detail/${props.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          marginBottom: "0.5rem",
          cursor: "pointer",
        }}
      >
        <Grid container>
          <Grid item xs={2}>
            <Typography
              variant="body1"
              style={{ fontWeight: "700" }}
              sx={style}
            >
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="body1"
              style={{ textAlign: "left" }}
              sx={style}
            >
              {props.subject}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="body1"
              style={{ textAlign: "right" }}
              sx={style}
            >
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </NavLink>
  );
};

export default Permission;
