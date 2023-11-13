import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import HomeLayout from './pages/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeErrorPage from './pages/HomeErrorPage';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<HomeErrorPage />} />
          </Route>
          <Route path="app" element={<AppLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
