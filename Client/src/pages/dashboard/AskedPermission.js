import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PermissionDetail from "../../components/PermissionDetail";
import AllAskedPermissions from "./AllAskedPermissions";

const AskedPermission = () => {
  return (
    <Grid container spacing={3}>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Routes>
          <Route path="permission_detail/:id" element={<PermissionDetail />} />
          <Route path="" element={<AllAskedPermissions />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AskedPermission;
