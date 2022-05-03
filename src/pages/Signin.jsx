import React from 'react';
import "./sign_in.css";

function Signin() {
  return (
    <div>
      <section className="signin__container">
        <header className="signin__logo"></header>
        <div className="signin__form__container">
          <form action="">
            <h3>Sign in</h3>
            <input
              type="text"
              placeholder="Email or phone number"
              class="username first_input"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              class="password first_input"
            />
            <br />
            <input type="submit" value="Sign in" class="sign_in first_input" />
          </form>
          <article className="signin__help">
            <div className="remember">
              <input type="checkbox" />
              Remember me
            </div>
            <p>Need help?</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Signin;
