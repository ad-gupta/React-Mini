import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/menu/Menu";
import Navbar from "./components/main/Navbar";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
`;
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home type= "random"/>} />
                <Route path="trend" element={<Home type= "trend"/>} />
                <Route path="subscription" element={<Home type= "sub"/>} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
                <Route path="/signin" element= {<SignIn/>} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
