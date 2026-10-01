import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Заглушки компонентов — потом заменишь на реальные из components/
const HeroSection = () => (
  <section className="hero">
    <h1>Я фронтендер: от QA‑автоматизации к архитектуре и процессам</h1>
    <p>
      Senior Frontend / Development Teamlead.
    </p>
    <div className="cta-group">
      <Link to="/timeline" className="btn btn-primary">
        Посмотреть путь
      </Link>
      <Link to="/skills" className="btn btn-outline">
        Посмотреть навыки
      </Link>
    </div>
  </section>
);

const FocusCards = () => (
  <section className="focus-cards">
    <h2>Ключевые фокусы</h2>
    <div className="cards-grid">
      {/* Карточка 1: QA → Frontend */}
      <article className="card">
        <h3>QA → Frontend</h3>
        <p>
          Перенос культуры качества и автотестов в разработку: unit‑тесты,
          понимание API, внимание к деталям.
        </p>
      </article>

      {/* Карточка 2: Архитектура */}
      <article className="card">
        <h3>Архитектура</h3>
        <p>
          ........
        </p>
      </article>

      {/* Карточка 3: Процессы и оценка */}
      <article className="card">
        <h3>Процессы и оценка</h3>
        <p>
          Планирование, декомпозиция, code review, унификация терминологии,
          оценка трудозатрат.
        </p>
      </article>
    </div>
  </section>
);

const AboutMeShort = () => (
  <section className="about-me">
    <h2>Коротко обо мне</h2>
    <p>
      Люблю разбирать сложные системы и делать их понятными для команды. В
      работе ценю прозрачность процессов, предсказуемость сроков и качество
      кода. Параллельно учу итальянский, ......
    </p>
  </section>
);

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      <HeroSection />
      <FocusCards />
      <AboutMeShort />
      {t("HomePage")}
      {/* Сюда позже можно добавить блок */}
    </main>
  );
}
