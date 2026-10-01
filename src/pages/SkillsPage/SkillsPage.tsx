import { useTranslation } from "react-i18next";

export function SkillsPage() {
  const { t } = useTranslation();

  return <main className="home-page">{t("SkillsPage")}</main>;
}

export default SkillsPage;
