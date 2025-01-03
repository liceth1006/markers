import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CardsSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section>
        <div className="py-8 px-6  bg-[#F35B04]">
          <div className="mx-auto px-6 max-w-6xl">
          <motion.h1
            initial={{ color: "#080300" }}
            whileHover={{ color: "#93f78f" }}
            transition={{ duration: 0.3 }}
            className="text-4xl lg:text-6xl font-bold leading-tight"
          >
            {t("Descubre tu próximo recurso favorito")}
          </motion.h1>
          <p className="text-lg lg:text-xl text-text-light dark:text-text-dark">
            {t("Más que una herramienta, una fuente de inspiración")}
          </p>
          </div>
         

          <div className="mx-auto px-6 max-w-6xl text-gray-500 ">
            <div className="relative">
              <div className="relative z-10 grid gap-3 grid-cols-6">
                <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-3 bg-contain bg-center">
                  <div className="size-fit m-auto relative">
                    <div className="relative h-24 w-56 flex items-center"></div>
                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                      Componentes web
                    </h2>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-4 bg-contain bg-center">
                  <div>
                    <div className="relative h-24 w-56 flex items-center"></div>
                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                      Colores y tipografías
                    </h2>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-image-5 bg-contain bg-center  ">
                  <div>
                    <div className="relative h-24 w-56 flex items-center"></div>
                    <h2 className="mt-6 text-center font-semibold text-white text-3xl">
                      Fotos y videos
                    </h2>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-image-2 bg-contain bg-center">
                  <div className="grid sm:grid-cols-2">
                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                      <div className="relative h-24 w-56 flex items-center"></div>
                      <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                        Inspiración creativa
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-image-1 bg-contain bg-center">
                  <div className="h-full grid sm:grid-cols-2">
                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6"></div>
                  
                      <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                        <h2 className="mt-6 text-center font-semibold text-white text-3xl">
                          Librerías y APIs
                        </h2>
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4"></div>
    </div>
  );
};

export default CardsSection;
