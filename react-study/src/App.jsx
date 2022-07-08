import { Main, MediaDiv } from './styledComponent';

import { GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles';
import { lightTheme } from './styles';
import { useState } from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import ShowPost from './ShowPost';
import WritePost from './WritePost';

function App() {
  const [darkMode, setDarkMode] = useState(true); // 다크모드 ON/OFF를 저장할 변수

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route path="/" element={<ShowPostList />}></Route>
              <Route path="/write" element={<WritePost></WritePost>}></Route>
              <Route
                path="/post/:postID"
                element={<ShowPost></ShowPost>}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
