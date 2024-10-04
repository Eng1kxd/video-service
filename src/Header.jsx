import { Routes, Route, Link } from "react-router-dom";
import "./css/main.css";
import Movies from "./Movies";
import Tv from "./Tv";
import Tabs from "./Tabs";
import Modal from "./Modal";
import UserInput from "./UserInput";
import { useState, useEffect } from "react";

function Header() {
  const [modalActive, setModalActive] = useState(false);

  const [user, setUser] = useState("");
  const [storedName, setStoredName] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setStoredName(data);
    }
  }, []);

  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    setHasData(!!storedData);
  }, []);

  const clearData = () => {
    localStorage.removeItem("user");
    setHasData(false);
  };

  return (
    <>
      <header className="header">
        <Modal active={modalActive} setActive={setModalActive} />
        <div className="header__row">
          <Link to="/">
            <div className="logo"></div>
          </Link>

          <div className="header__search__wrapper">
            <div className="header__search__placeholder">
              <input
                type="text"
                placeholder="Поиск..."
                className="header__search__placeholder"
              />
              <div className="input__line"></div>
            </div>

            <div className="header__search__button">Найти</div>
          </div>
          <div className="header__button__login__wrapper">
            <UserInput />
            {hasData ? (
              <button className="header__button__logout" onClick={clearData}>
                Выйти
              </button>
            ) : (
              <button
                className="header__button__login"
                onClick={() => setModalActive(true)}
              >
                Войти
              </button>
            )}
          </div>
        </div>
      </header>

      <Tabs />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
    </>
  );
}
export default Header;
