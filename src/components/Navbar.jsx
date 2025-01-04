import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegFolderOpen } from "react-icons/fa6";
import LanguageSelector from "./LanguageSelector";

import { IoMdMenu } from "react-icons/io";
import { useEffect,  useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiRooster } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";
import i18n from "../i18n";
import SelectDepartment from "./SelectDepartment";


function Navbar() {
  const { t } = useTranslation();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

 

  useEffect(() => {
    const fetchDepartmentsAndCategories = async () => {
      const lang = i18n.language;
      try {
        // Cargar departamentos
        const deptUrl = `/locales/${lang}/department.json`;
        const deptResponse = await fetch(deptUrl);
        if (!deptResponse.ok) throw new Error("Error al cargar los departamentos");
        const deptData = await deptResponse.json();
        setDepartments(deptData);

        // Recuperar el departamento seleccionado desde localStorage, si existe
        const storedDepartment = localStorage.getItem("selectedDepartment");
        if (storedDepartment) {
          setSelectedDepartment(Number(storedDepartment));
        } else if (deptData.length > 0) {
          setSelectedDepartment(deptData[0].department_id);
        }

        // Cargar categorías
        const catUrl = `/locales/${lang}/categories.json`;
        const catResponse = await fetch(catUrl);
        if (!catResponse.ok) throw new Error("Error al cargar las categorías");
        const catData = await catResponse.json();
        setCategories(catData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchDepartmentsAndCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);



  return (
    <header className="shadow-md bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="hidden md:flex container mx-auto py-4 justify-between items-center">
        <Link
          to={"/"}
          className="text-text-light dark:text-text-dark text-2xl font-semibold flex items-center relative"
        >
          <GiRooster className="text-4xl absolute top-[-21px] text-[#132452] dark:text-[#e2e2e2]" />
          <span className="font-bold text-dark">
            Rooster<span className="text-[#F35B04]">Tools</span>
          </span>
        </Link>

        <div className="ml-4 flex items-center space-x-4">
          <Link
            to={"/my-bookmarks"}
            className={`w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 text-text-light dark:text-text-dark border-gray-500 ${
              location.pathname === "/my-bookmarks"
                ? "bg-primary text-text-dark"
                : "hover:bg-primary  transition-colors duration-300 ease-in-out text-text-light dark:text-text-dark"
            }`}
          >
            <FaRegFolderOpen className="text-[var(--second-color)] hover:text-[var(--first-color)] hover:scale-125 transition-transform duration-300 w-6 h-6 mr-2" />
            {t("myBookmarks")}
          </Link>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between px-5 py-4 relative">
      <SelectDepartment
      setSelectedDepartment={setSelectedDepartment}
      departments={departments}
      />
    
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6">
        <Link
                to="/all"
                className={`text-text-light dark:text-text-dark ${
                  location.pathname === "/all"
                    ? " bg-primary p-3 rounded-md"
                    : "hover:text-primary"
                } text-sm md:text-base`}
              >
                {t("allResources")}
              </Link>
          {categories
            .filter((item) => item.department_id === selectedDepartment)
            .map((item) => (
              <Link
                to={item.path}
                key={item.category_id}
                className={`text-text-light dark:text-text-dark ${
                  location.pathname === item.path
                    ? " bg-primary p-3 rounded-md"
                    : "hover:text-primary"
                } text-sm md:text-base`}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center p-4">
        <LanguageSelector />
        <button
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          id="menu-button"
          className="text-primary focus:outline-none mb-4"
        >
          {isOpenDropdown ? (
            <MdOutlineClose size={30} style={{ color: "var(--first-color)" }} />
          ) : (
            <IoMdMenu size={30} style={{ color: "var(--first-color)" }} />
          )}
        </button>
      </div>

      <div className="md:hidden flex flex-col items-center justify-center px-5 py-4">
        {isOpenDropdown && (
          <div className="flex flex-col items-center justify-center space-y-4 w-full">
            <Link
              to={"/"}
              className="text-text-light dark:text-text-dark text-2xl font-semibold flex items-center relative"
            >
              <GiRooster className="text-4xl absolute top-[-21px] text-[#132452] dark:text-[#e2e2e2]" />
              <span className="font-bold text-dark">
                Rooster<span className="text-[#F35B04]">Tools</span>
              </span>
            </Link>

            <div className="flex flex-col items-center w-full space-y-2">
              <Link
                to={"/my-bookmarks"}
                onClick={() => setIsOpenDropdown(false)} // Cerrar el dropdown al hacer clic
                className={`w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 text-text-light dark:text-text-dark border-gray-500 ${
                  location.pathname === "/my-bookmarks"
                    ? "bg-primary text-text-dark"
                    : "hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out text-text-light dark:text-text-dark"
                }`}
              >
                <FaRegFolderOpen className="hover:scale-125 transition-transform duration-300 w-6 h-6 mr-2" />
                {t("myBookmarks")}
              </Link>
            </div>

            <div className="w-full flex justify-center mt-4">
            <SelectDepartment
      setSelectedDepartment={setSelectedDepartment}
      departments={departments}
      />
            </div>

            <div className="flex flex-col items-center gap-4">
            <Link
                to="/all"
                onClick={() => setIsOpenDropdown(false)} 
                className={`text-text-light dark:text-text-dark ${
                  location.pathname === "/all"
                    ? " bg-primary p-3 rounded-md"
                    : "hover:text-primary"
                } text-sm md:text-base`}
              >
               todos
              </Link>
            {categories
            .filter((item) => item.department_id === selectedDepartment)
            .map((item) => (
              <Link
                to={item.path}
                key={item.category_id}
                onClick={() => setIsOpenDropdown(false)} 
                className={`text-text-light dark:text-text-dark ${
                  location.pathname === item.path
                    ? " bg-primary p-3 rounded-md"
                    : "hover:text-primary"
                } text-sm md:text-base`}
              >
                {item.name}
              </Link>
            ))}

            </div>

            <ThemeToggle className="w-6 h-6" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
