import LogoWTW from '../../components/logo-wtw/logo-wtw';
import {FormEvent, useRef} from 'react';
import {AuthData} from '../../types/auth-data';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';

function SignIn(): JSX.Element {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.current !== null && password.current !== null) {
      onSubmit({
        login: email.current.value,
        password: password.current.value,
      });
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoWTW isLight/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={email} className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={password} className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <LogoWTW isLight={false}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default SignIn;
