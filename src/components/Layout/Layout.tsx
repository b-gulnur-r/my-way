import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="header">
      <div className="container">
        <Link to="/" className="logo">
          {t("common.name")}
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/timeline">{t("nav.timeline")}</Link>
          </li>
          <li>
            <Link to="/skills">{t("nav.skills")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("nav.contact")}</Link>
          </li>
        </ul>

        <button
          onClick={toggleLanguage}
          aria-label={`Switch to ${i18n.language === "ru" ? "EN" : "RU"}`}
          className="lang-btn"
        >
          {i18n.language}
        </button>
      </div>
    </nav>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Portfolio. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export function Layout() {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
