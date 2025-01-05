import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Wave from "./Wave";

const CardsSection = () => {
  const { t } = useTranslation();

  const { ref: cardRef1, inView: inView1 } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  const { ref: cardRef2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: cardRef3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: cardRef4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: cardRef5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section>
    <div className="pt-1 sm:pt-3 md:pt-5 lg:pt-8 xl:pt-10 bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="mx-auto px-6 max-w-6xl overflow-hidden">
        <motion.h1
          initial={{ color: "#F35B04" }}
          whileHover={{ color: "#72d86f" }}
          transition={{ duration: 0.3 }}
          className="text-4xl lg:text-6xl font-bold leading-tight text-center"
        >
          {t("cardsSection.title")}
        </motion.h1>
        <p className="text-lg lg:text-xl text-text-light dark:text-text-dark text-center py-5">
          {t("cardsSection.paragraph")}
        </p>
      </div>
  
      <div className="mx-auto px-6 max-w-6xl text-gray-500 overflow-hidden">
        <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
            {/* Componente 1 */}
            <motion.div
              ref={cardRef1}
              className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-3 bg-contain bg-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="size-fit m-auto relative">
                <div className="relative h-24 w-56 flex items-center"></div>
                <h2 className="mt-6 text-center font-semibold bg-primary opacity-75 px-3 rounded-md text-white text-3xl">
                  {t("cardsSection.categories.categoryOne")}
                </h2>
              </div>
            </motion.div>
  
            {/* Componente 2 */}
            <motion.div
              ref={cardRef2}
              className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-4 bg-contain bg-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 100 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="relative h-24 w-56 flex items-center"></div>
                <h2 className="mt-6 text-center font-semibold bg-primary opacity-75 px-3 rounded-md text-white text-3xl">
                  {t("cardsSection.categories.categoryTwo")}
                </h2>
              </div>
            </motion.div>
  
            {/* Componente 3 */}
            <motion.div
              ref={cardRef3}
              className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-5 bg-contain bg-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 100 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="relative h-24 w-56 flex items-center"></div>
                <h2 className="mt-6 text-center font-semibold bg-primary opacity-75 px-3 rounded-md text-white text-3xl">
                  {t("cardsSection.categories.categoryThree")}
                </h2>
              </div>
            </motion.div>
  
            {/* Componente 4 */}
            <motion.div
              ref={cardRef4}
              className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-image-2 bg-contain bg-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="relative h-24 w-56 flex items-center"></div>
                  <h2 className="mt-6 text-center font-semibold bg-primary opacity-75 px-3 rounded-md text-white text-3xl">
                    {t("cardsSection.categories.categoryFour")}
                  </h2>
                </div>
              </div>
            </motion.div>
  
            {/* Componente 5 */}
            <motion.div
              ref={cardRef5}
              className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-image-1 bg-contain bg-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6"></div>
                <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                  <h2 className="mt-6 text-center font-semibold bg-primary opacity-75 px-3 rounded-md text-white text-3xl">
                    {t("cardsSection.categories.categoryFive")}
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Wave
        colorLight="text-background-light"
        colorDark="dark:text-background-dark"
      />
    </div>
  </section>
  
  );
};

export default CardsSection;
