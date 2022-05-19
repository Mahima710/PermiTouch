import MainPage from "./pages/MainPage";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Open Sans", "sans-serif"].join(","),
    },
  });
  // const [value, setValue] = useState("");
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignUp />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
