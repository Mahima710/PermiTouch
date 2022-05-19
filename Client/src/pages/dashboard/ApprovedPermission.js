import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PermissionDetail from "../../components/PermissionDetail";
import AllApprovedPermissions from "./AllApprovedPermissions";

const ApprovedPermission = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Routes>
          <Route path="permission_detail/:id" element={<PermissionDetail />} />
          <Route path="" element={<AllApprovedPermissions />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default ApprovedPermission;
