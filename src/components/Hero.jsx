import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
   const { t } = useTranslation();
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex mt-5 pt-10 items-center justify-center pb-12 ">
      <motion.div
        className="text-center px-6 sm:px-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl font-extrabold tracking-tight text-text-light dark:text-text-dark sm:text-6xl md:text-7xl"
          variants={fadeInUp}
        >
          🌟{" "}
          <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
           {t("hero.title")}
          </span>{" "}
          {t("hero.titletwo")}
          <br />
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">
          {t("hero.titlethree")}
          </span>{" "}
          
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {t("hero.paragraph")}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={fadeInUp}
        >
          <Link
            to={"/all"}
            className="relative inline-block px-6 py-3 font-bold text-text-dark bg-primary rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#009b49] to-[rgb(105,184,141)] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100" />
            <span className="relative z-10">{t("hero.exploreResources")}</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
