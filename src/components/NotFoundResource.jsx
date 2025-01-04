import { useTranslation } from "react-i18next";

const NotFoundResource = () => {
   const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center  text-text-light dark:text-text-dark">
     
      <img 
        src="/taken.svg" 
        alt="Recurso no encontrado" 
        className="w-40 h-40 mb-4" 
      />
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
       {t("error.notFound.title")}
      </h1>
      <p className="text-base sm:text-lg text-center mb-6">
      {t("error.notFound.message")}
      </p>
    </div>
  );
};

export default NotFoundResource;
