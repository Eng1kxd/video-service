import "./css/main.css";

const Movies = () => {
  return (
    <>
      <main>
        <section className="new">
          <div className="new__title">🔥Новинки</div>

          <div className="new__wrapper">
            <div className="new__card">
              <div className="new__card__img-1"></div>
              <div className="new__card__text bot">
                <h1>Мульт в кино. Выпуск №103. Некогда грустить!</h1>
              </div>
            </div>
            <div className="new__card">
              <div className="new__card__img-2"></div>
              <div className="new__card__text">
                <h1>Новый Бэтмен</h1>
              </div>
            </div>
            <div className="new__card">
              <div className="new__card__img-3">
                <p className="new__card__img__text">
                  Фильм повествует о череде событий, произошедших в Голливуде в
                  1969 году, на закате его «золотого века». Известный актер Рик
                  Далтон и его дублер Клифф Бут пытаются найти свое место в
                  стремительно меняющемся мире киноиндустрии.
                </p>
              </div>
              <div className="new__card__text">
                <h1>Однажды... в Голливуде</h1>
              </div>
            </div>
            <div className="new__card">
              <div className="new__card__img-4"></div>
              <div className="new__card__text">
                <h1>Стриптизёрши</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="genres__title">Жанры</div>

        <section className="genres">
          <div className="genres__wrapper-1 cursor-poiner">
            <div className="genres__smile-1 smile"></div>
            <div className="genres__category">
              <h1 className="genres__category">Комедии</h1>
            </div>
          </div>
          <div className="genres__wrapper-2 cursor-poiner">
            <div className="genres__smile-2 smile"></div>
            <div className="genres__category">
              <h1 className="genres__category">Драмы</h1>
            </div>
          </div>
          <div className="genres__wrapper-3 cursor-poiner">
            <div className="genres__smile-3 smile"></div>
            <div className="genres__category">
              <h1 className="genres__category">Фантастика</h1>
            </div>
          </div>
          <div className="genres__wrapper-4 cursor-poiner">
            <div className="genres__smile-4 smile"></div>
            <div className="genres__category">
              <h1 className="genres__category">Ужасы</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Movies;
