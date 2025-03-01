import { useTranslation } from "react-i18next";

function Benefits() {
  const { t } = useTranslation();

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-2 lg:px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                  className="w-24 sm:w-32 md:w-36 lg:w-40 mb-3"
                  alt="Centralization"
                />
              </div>
              <h2 className="title-font font-regular text-lg sm:text-xl md:text-2xl text-text-light dark:text-text-dark">
                {t("benefits.items.centralization")}
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                  className="w-24 sm:w-32 md:w-36 lg:w-40 mb-3"
                  alt="Organization"
                />
              </div>
              <h2 className="title-font font-regular text-lg sm:text-xl md:text-2xl text-text-light dark:text-text-dark">
                {t("benefits.items.organization")}
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                  className="w-24 sm:w-32 md:w-36 lg:w-40 mb-3"
                  alt="Time Saving"
                />
              </div>
              <h2 className="title-font font-regular text-lg sm:text-xl md:text-2xl text-text-light dark:text-text-dark">
                {t("benefits.items.time_saving")}
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img
                  src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                  className="w-24 sm:w-32 md:w-36 lg:w-40 mb-3"
                  alt="Secure Storage"
                />
              </div>
              <h2 className="title-font font-regular text-lg sm:text-xl md:text-2xl text-text-light dark:text-text-dark">
                {t("benefits.items.secure_storage")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
