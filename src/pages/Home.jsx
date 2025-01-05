import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Wave from "../components/Wave";
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
      <motion.h1
            initial={{ color: "#F35B04" }}
            whileHover={{ color: "#72d86f" }}
            transition={{ duration: 0.3 }}
            className="text-4xl lg:text-6xl font-bold leading-tight text-center"
          >
            {t("benefits.title")}
          </motion.h1>
       
      </div>
      <div className="px-2 lg:px-16 xl:px-16">
      <span
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-relaxed"
  dangerouslySetInnerHTML={{ __html: t("section.intro.text") }}
/>

        <Benefits />
      </div>
    </div>
    </div>
  );
}

export default Home;
