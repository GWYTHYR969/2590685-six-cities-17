import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites/favorites';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../../routes/private-route';
import Loader from '../loader/loader';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app';
import { fetchFavoriteOffers, fetchOffers } from '../../store/offer/offer-api-actions';
import { checkLoginStatus } from '../../store/user/user-api-actions';
import { getLoginStatus } from '../../store/user/user-selectors';
import { getLoadingStatus } from '../../store/offer/offer-selectors';
import { mockOffers } from '../../mocks/offers';
import { RoutePath } from '../../routes/const';
import { LoginStatus } from '../../const';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadingStatus);
  const loginStatus = useAppSelector(getLoginStatus);

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(fetchFavoriteOffers());
    dispatch(checkLoginStatus());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainPage />} />
            <Route path={RoutePath.Login} element={<LoginPage />} />
            <Route path={RoutePath.Favorites} element={
              <PrivateRoute
                navigatePath={RoutePath.Login}
                isNeedNavigate={loginStatus !== LoginStatus.Auth}
              >
                <FavoritesPage offers={mockOffers}/>
              </PrivateRoute>

            }
            />
            <Route path={RoutePath.Offer} element={<OfferPage />} />
            <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
