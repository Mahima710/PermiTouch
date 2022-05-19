import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PermissionDetail from "../../components/PermissionDetail";
import AllRejectedPermissions from "./AllRejectedPermissions";

const RejectedPermission = () => {
  return (
    <Grid container spacing={3}>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Routes>
          <Route path="permission_detail/:id" element={<PermissionDetail />} />
          <Route path="" element={<AllRejectedPermissions />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default RejectedPermission;
