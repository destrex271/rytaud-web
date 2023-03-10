import "./App.css"
import styled from '@emotion/styled';
import {
  Box, ThemeProvider, createTheme
} from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// Custom Components and Pages
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from "./components/About"; 

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const ParentBox = styled(Box)({
    backgroundColor: "white",
    width: "100%",
    height: "100vh",
    fontFamily: "'Roboto Mono', monospace",
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: '/contact'
    }
  ])
  return(
    <ThemeProvider
      theme={darkTheme}
    >
      <ParentBox>
        <Navbar />
        <RouterProvider router={router} />
      </ParentBox>
    </ThemeProvider>
  );
}

export default App;
