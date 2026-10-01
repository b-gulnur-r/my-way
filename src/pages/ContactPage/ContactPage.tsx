import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      {t('ContactPage')}
    </main>
  );
}
export default ContactPage