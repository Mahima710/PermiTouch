import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Info from "./Info";
// import TeamInfo from "./Team";
import Permission from "./Permissions";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <Box>
      <NavBar />
      <Hero />
      <Info />
      <Permission />
      {/* <TeamInfo /> */}
      <Footer />
    </Box>
  );
};

export default MainPage;
