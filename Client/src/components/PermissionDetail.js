import { Grid, Paper } from "@mui/material";

const PermissionDetail = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          ></Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default PermissionDetail;
