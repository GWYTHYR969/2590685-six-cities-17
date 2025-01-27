import { Helmet } from 'react-helmet-async';
import { useEffect, ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/header/header';

import { RoutePath } from '../../routes/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { loginAction } from '../../store/user/user-api-actions';
import { getLoginStatus } from '../../store/user/user-selectors';
import { LoginStatus } from '../../const';
import { getCurrentCity } from '../../store/offer/offer-selectors';

function Login(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginStatus = useAppSelector(getLoginStatus);
  const currentCity = useAppSelector(getCurrentCity);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isValidPassword = (pass: string): boolean => {
    const hasLetter = /\w/.test(pass);
    const hasDigit = /\d/.test(pass);
    return hasLetter && hasDigit;
  };

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    if (isValidPassword(password)) {
      dispatch(loginAction({ email, password }));
    }
    event.preventDefault();
  };
  useEffect(() => {
    if (loginStatus === LoginStatus.Auth) {
      navigate(RoutePath.Index);
    }
  }, [loginStatus, navigate]);

  return (
    <>
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input onChange={handleEmailFieldChange} className="login__input form__input" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input onChange={handlePasswordFieldChange} className="login__input form__input" type="password" name="password" placeholder="Password" required />
                </div>
                <button onClick={handleFormSubmit} className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={RoutePath.Index}>
                  <span>{currentCity}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
