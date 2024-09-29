import { Routes, Route, Link } from "react-router-dom";
import "./css/main.css";
import Movies from "./Movies";
import Tv from "./Tv";
import Tabs from "./Tabs";
import Modal from "./Modal";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__row">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div className="header__search__wrapper">
            <div className="header__search__placeholder">
              <input type="text" placeholder="Поиск..." />
              <div className="input__line"></div>
            </div>
            <div className="header__search__button">Найти</div>
          </div>
          <div className="header__button__login">
            <button className="header__button__login">Войти</button>
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
