import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="header">
      <div className="container">
        <Link to="/" className="logo">
          {t('common.name')}
        </Link>

        <ul className="nav-links">
          <li><Link to="/timeline">{t('nav.timeline')}</Link></li>
          <li><Link to="/skills">{t('nav.skills')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
        </ul>

        <button
          onClick={toggleLanguage}
          aria-label={`Switch to ${i18n.language === 'ru' ? 'EN' : 'RU'}`}
          className="lang-btn"
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
