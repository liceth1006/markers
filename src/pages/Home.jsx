import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";

import Wave from "../components/Wave ";
import CardsSection from "../components/CardsSection";
import Benefits from "../components/Benefits";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <Wave
        colorLight="text-background-secondary-light"
        colorDark="dark:text-background-secondary-dark"
      />
      <CardsSection />
      
      <div className="bg-background-light py-9 dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="flex justify-center  my-10 text-6xl font-regular text-primary font-semibold">
        {t("benefits.title")}
      </div>
      <div className="px-16">
        <span
          className="text-3xl text-center leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("section.intro.text") }}
        />
        <Benefits />
      </div>
    </div>
    </div>
  );
}

export default Home;
