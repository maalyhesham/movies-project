import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [mode,] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer >
        <Nav />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/movies/:id"} element={<MovieScreen />} />
        </Routes>
      </MainContainer >
    </ThemeProvider >
  );
}

export default App;
