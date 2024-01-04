import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { ScreenSizeProvider } from './context/ScreenSizeContext';

import GlobalStyles from './styles/GlobalStyles';
import HomeLayout from './pages/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeErrorPage from './pages/HomeErrorPage';
import AppLayout from './pages/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import CitiesList from './components/CitiesList';
import City from './components/City';
import CountriesList from './components/CountriesList';
import Country from './components/Country';
import FormNewCity from './components/FormNewCity';
import FormEditCity from './components/FormEditCity';
import Error from './components/Error';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 2 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ScreenSizeProvider>
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
              <Route path="form/new" element={<FormNewCity />} />
              <Route path="form/edit/:id" element={<FormEditCity />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ScreenSizeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        containerStyle={{ top: 50 }}
        toastOptions={{
          style: {
            backgroundColor: 'var(--color-dark--0)',
            color: 'var(--color-light--0)',
            fontSize: '1.8rem',
            padding: '1.4rem',
            textAlign: 'center',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
