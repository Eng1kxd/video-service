import "./css/main.css";
import React from "react";
import { useState, useEffect } from "react";

const Modal = ({ active, setActive }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [storedName, setStoredName] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setStoredName(data);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName };
    localStorage.setItem("user", JSON.stringify(userData));
    setStoredName(userData);
    setFirstName("");
    setLastName("");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div
        className={active ? "modal__active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <div className="form__title">Вход</div>
            <div className="input__wrapper">
              <input
                className="input"
                type="text"
                placeholder="Логин"
                name="login"
                id="login"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Пароль"
                name="password"
                id="password"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
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
              <button
                type="submit"
                className="header__button__login"
                onClick={handleRefresh}
              >
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
