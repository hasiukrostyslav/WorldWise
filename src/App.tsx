import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import GlobalStyles from './styles/GlobalStyles';
import HomeLayout from './pages/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeErrorPage from './pages/HomeErrorPage';
import AppLayout from './pages/AppLayout';
import CitiesList from './components/CitiesList';
import CountriesList from './components/CountriesList';
import City from './components/City';
import Country from './components/Country';
import Error from './components/Error';
import AddForm from './components/AddForm';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="countries/:countryName" element={<Country />} />
            <Route path="form" element={<AddForm />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
