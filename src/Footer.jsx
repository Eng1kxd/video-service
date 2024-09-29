import "./css/main.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__logo-htc"></div>

          <div className="footer__contact">
            <div className="footer__adress">
              <span>
                426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла
                Маркса, 246 (ДК «Металлург»)
              </span>
            </div>
            <div className="footer__phone">
              <p className="footer__phone-1">
                <a href="tel:+7 (3412) 93-88-61" className="footer__phone-1">
                  +7 (3412) 93-88-61
                </a>
                ,
              </p>
              <p className="footer__phone-2">
                <a href="tel:43-29-29" className="footer__phone-2">
                  43-29-29
                </a>
              </p>
            </div>
            <div className="footer__web-site">
              <p>
                <a href="#" className="footer__web-site">
                  htc-cs.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
