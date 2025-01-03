import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiRooster } from "react-icons/gi";
function Footer() {
  const { t } = useTranslation();

 


  return (
    <footer
      className="bg-background-secondary-light dark:bg-background-secondary-dark   transition-all duration-500  rounded-t-xl"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-12 p-12 rounded-2xl">
        <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6  border-b-2 border-gray-200">
         <Link
                  to={"/"}
                  className="text-text-light dark:text-text-dark text-2xl font-semibold flex items-center relative"
                >
                  <GiRooster className="text-4xl absolute top-[-21px] text-[#132452] dark:text-[#e2e2e2]" />
                  <span className="font-bold text-dark">
                    Rooster<span className="text-[#F35B04]">Tools</span>
                  </span>
                </Link>
       
        </div>
        <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6 text-center text-sm pl-5 sm:text-3xl sm:pl-6 md:text-3xl md:pl-10 lg:text-4xl xl:text-5xl xl:pl-2 text-blue-950">
        <motion.section
        className="relative h-30 flex items-center justify-center overflow-hidden bg-gray-100 rounded-xl shadow-lg"
        animate={{
          backgroundColor: [
            "#FF7C03",
            "#03A9F4",
            "#8BC34A",
            "#FFEB3B",
            "#FF7C03",
          ], // Colores a rotar
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-wide text-center "
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 35, 
            repeat: Infinity, 
            ease: "linear", 
          }}
          style={{
            whiteSpace: "nowrap", 
          }}
        >
          {t("footer.copyright")}
        </motion.h1>
      </motion.section>
         
         
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/liceth1006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light dark:text-text-dark hover:text-text-secondary-light  dark:hover:text-text-secondary-dark  transition-colors"
            >
              <FaGithub
                className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                style={{ marginBottom: "10px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/liceth-olmos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light dark:text-text-dark hover:text-text-secondary-light dark:hover:text-text-secondary-dark transition-colors"
            >
              <FaLinkedin className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
