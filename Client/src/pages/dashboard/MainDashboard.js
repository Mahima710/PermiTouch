import { Grid, Paper } from "@mui/material";
import CountingPermissions from "../../components/CountingPermissions";
import Orders from "./Orders";

const MainDashboard = () => {
  return (
    <>
      <CountingPermissions />
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default MainDashboard;
