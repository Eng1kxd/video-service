import "./css/main.css";
import React from "react";

const Modal = ({ active, setActive }) => {
  return (
    <>
      <div
        className={active ? "modal__active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <form action="">
            <div className="form__title">Вход</div>
            <div className="input__wrapper">
              <input
                className="input"
                type="text"
                placeholder="Логин"
                name="login"
                id="login"
              />
              <input
                className="input"
                type="text"
                placeholder="Пароль"
                name="password"
                id="password"
              />
            </div>
            <input
              type="checkbox"
              className="form__checkbox"
              id="form__checkbox"
            />
            <label htmlFor="form__checkbox" className="form__checkbox__label">
              Запомнить
            </label>
            <div className="form__button__wrapper">
              <button type="submit" className="header__button__login">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Modal;
