import "./css/main.css";
import { Routes, Route, Link } from "react-router-dom";

const Tv = () => {
  return (
    <>
      <main>
        <section className="tv">
          <div className="tv__channels">
            <div className="tv__channels__logo__wrapper">
              <div className="tv__channels__logo tv__channels__logo-1"></div>
            </div>
            <div className="tv__channels__timetable__wrapper">
              <div className="tv__channels__timetable__channel">
                <h1>Первый канал</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">
                  <ul>
                    <li className="tv__channels__timetable__time__accent">
                      13:00
                    </li>
                    <li>14:00</li>
                    <li>15:00</li>
                  </ul>
                </div>
                <div className="tv__channels__timetable__title">
                  <ul>
                    <li className="tv__channels__timetable__title__accent">
                      Новости (с субтитрами)
                    </li>
                    <li>Давай поженимся</li>
                    <li>Другие новости</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tv__channels">
            <div className="tv__channels__logo__wrapper">
              <div className="tv__channels__logo tv__channels__logo-2"></div>
            </div>
            <div className="tv__channels__timetable__wrapper">
              <div className="tv__channels__timetable__channel">
                <h1>2x2</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">
                  <ul>
                    <li className="tv__channels__timetable__time__accent">
                      13:00
                    </li>
                    <li>14:00</li>
                    <li>15:00</li>
                  </ul>
                </div>
                <div className="tv__channels__timetable__title">
                  <ul>
                    <li className="tv__channels__timetable__title__accent">
                      МУЛЬТ ТВ. Сезон 4, 7 серия
                    </li>
                    <li>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</li>
                    <li>БУРДАШЕВ. Сезон 1, 20 серия</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tv__channels">
            <div className="tv__channels__logo__wrapper">
              <div className="tv__channels__logo tv__channels__logo-3"></div>
            </div>
            <div className="tv__channels__timetable__wrapper">
              <div className="tv__channels__timetable__channel">
                <h1>РБК</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">
                  <ul>
                    <li className="tv__channels__timetable__time__accent">
                      13:00
                    </li>
                    <li>14:00</li>
                    <li>15:00</li>
                  </ul>
                </div>
                <div className="tv__channels__timetable__title">
                  <ul>
                    <li className="tv__channels__timetable__title__accent">
                      ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС
                    </li>
                    <li>ДЕНЬ. Главные темы</li>
                    <li>Главные новости</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tv__channels">
            <div className="tv__channels__logo__wrapper">
              <div className="tv__channels__logo tv__channels__logo-4"></div>
            </div>
            <div className="tv__channels__timetable__wrapper">
              <div className="tv__channels__timetable__channel">
                <h1>AMEDIA PREMIUM</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">
                  <ul>
                    <li className="tv__channels__timetable__time__accent">
                      13:00
                    </li>
                    <li>14:00</li>
                    <li>15:00</li>
                  </ul>
                </div>
                <div className="tv__channels__timetable__title">
                  <ul>
                    <li className="tv__channels__timetable__title__accent">
                      Новости (с субтитрами)
                    </li>
                    <li>Давай поженимся</li>
                    <li>Другие новости</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Tv;
