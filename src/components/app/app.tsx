import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites/favorites';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../../routes/private-route';
import { Offer } from '../../types';
import { mockOffers } from '../../mocks/offers';
import { RoutePath } from '../../routes/const';
import { LoginStatus } from '../../const';


type AppProps = {
  offers?: Offer[];
}

function App({offers = mockOffers}: AppProps): JSX.Element {
  const userStatus = LoginStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Index}>
          <Route index element={<MainPage offers={offers} />} />
          <Route path={RoutePath.Login} element={<LoginPage />} />
          <Route path={RoutePath.Favorites} element={
            <PrivateRoute
              navigatePath={RoutePath.Login}
              isNeedNavigate={userStatus !== LoginStatus.Auth}
            >
              <FavoritesPage offers={mockOffers}/>
            </PrivateRoute>

          }
          />
          <Route path={RoutePath.Offer} element={<OfferPage offers={mockOffers} authorizationStatus={userStatus} />} />
          <Route path={RoutePath.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
