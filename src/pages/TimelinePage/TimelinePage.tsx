
import { useTranslation } from "react-i18next";

export function TimelinePage() {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      {t('TimelinePage')}
    </main>
  );
}

export default TimelinePage
