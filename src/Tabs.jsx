import { Routes, Route, Link } from "react-router-dom";
import "./css/main.css";
import Movies from "./Movies";
import Tv from "./Tv";


const Tabs = () => {
  return (
    <>
      <div className="tabs">
        <Link to="/">
          <div className="tabs__movies">
            <h1 className="tabs__movies__title">Фильмы</h1>
          </div>
        </Link>
        <Link to="/tv">
          <div className="tabs__tv">
            <h1 className="tabs__tv__title">Телеканалы</h1>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Tabs;
