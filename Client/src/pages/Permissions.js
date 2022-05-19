import { Box, Stack } from "@mui/material";
import Image from "../static/Images/bg3.png";
import InfoCard from "../components/Card";
// import QuestionMark from "../static/Images/question.png";

const Permission = () => {
  return (
    <Box style={{ position: "relative", boxSizing: "border-box" }}>
      <img
        src={Image}
        alt="background"
        style={{ zIndex: "-2", width: "100%" }}
      />
      <Stack
        spacing={5}
        direction="row"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <InfoCard
          title="View Asked Permissions"
          desc="Send your request for asking out permission to the concerned administrative office."
          btnText="View"
          url="/dashboard"
        />
        <InfoCard
          title="View approved Permissions"
          desc="View all your permission requests that have been approved by the college authorities."
          btnText="View"
          url="/dashboard"
        />
        <InfoCard
          title="View Rejected Permissions"
          desc="View all your permission requests that have been rejected by the college authorities."
          btnText="View"
          url="/dashboard"
        />
      </Stack>
    </Box>
  );
};

export default Permission;
