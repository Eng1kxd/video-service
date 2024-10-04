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
            <div className="tv__channels__timetable__wrapper ">
              <div className="tv__channels__timetable__channel">
                <h1>Первый канал</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1 tv__channels__timetable__time__accent">
                <div className="tv__channels__timetable__time">13:00</div>
                <div className="tv__channels__timetable__title">
                  Новости (с субтитрами)
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">14:00</div>
                <div className="tv__channels__timetable__title">
                  Давай поженимся
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">15:00</div>
                <div className="tv__channels__timetable__title">
                  Другие новости
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
                <div className="tv__channels__timetable__wrapper-1 tv__channels__timetable__time__accent">
                  <div className="tv__channels__timetable__time">13:00</div>
                  <div className="tv__channels__timetable__title">
                    МУЛЬТ ТВ. Сезон 4, 7 серия
                  </div>
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">14:00</div>
                <div className="tv__channels__timetable__title">
                  ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">15:00</div>
                <div className="tv__channels__timetable__title">
                  БУРДАШЕВ. Сезон 1, 20 серия
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
                <div className="tv__channels__timetable__wrapper-1 tv__channels__timetable__time__accent">
                  <div className="tv__channels__timetable__time">13:00</div>
                  <div className="tv__channels__timetable__title">
                    ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС
                  </div>
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">14:00</div>
                <div className="tv__channels__timetable__title">
                  ДЕНЬ. Главные темы
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">15:00</div>
                <div className="tv__channels__timetable__title">
                  Главные новости
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
                <div className="tv__channels__timetable__wrapper-1 tv__channels__timetable__time__accent">
                  <div className="tv__channels__timetable__time ">13:00</div>
                  <div className="tv__channels__timetable__title">
                    Клиент всегда мёртв
                  </div>
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">14:00</div>
                <div className="tv__channels__timetable__title">
                  Голодные игры: Сойка-пересмешница. Часть I
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">15:00</div>
                <div className="tv__channels__timetable__title">
                  Секс в большом городе
                </div>
              </div>
            </div>
          </div>
          <div className="tv__channels">
            <div className="tv__channels__logo__wrapper">
              <div className="tv__channels__logo tv__channels__logo-1"></div>
            </div>
            <div className="tv__channels__timetable__wrapper">
              <div className="tv__channels__timetable__channel">
                <h1>Первый канал</h1>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__wrapper-1 tv__channels__timetable__time__accent">
                  <div className="tv__channels__timetable__time">13:00</div>
                  <div className="tv__channels__timetable__title">
                    Новости (с субтитрами)
                  </div>
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">14:00</div>
                <div className="tv__channels__timetable__title">
                  Давай поженимся
                </div>
              </div>
              <div className="tv__channels__timetable__wrapper-1">
                <div className="tv__channels__timetable__time">15:00</div>
                <div className="tv__channels__timetable__title">
                  Другие новости
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
