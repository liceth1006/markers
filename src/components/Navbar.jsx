import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegFolderOpen } from "react-icons/fa6";
import LanguageSelector from "./LanguageSelector";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiRooster } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";
import i18n from "../i18n";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]); 
  const location = useLocation();
  const dropdownRef = useRef(null);

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
          setSelectedDepartment(Number(storedDepartment)); // Asignar el departamento guardado
        } else if (deptData.length > 0) {
          setSelectedDepartment(deptData[0].department_id); // Asignar el primer departamento por defecto
        }
  
        // Cargar categorías
        const catUrl = `/locales/${lang}/categories.json`; // Ruta de las categorías
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
  }, [i18n.language]); // Dependiendo del idioma
  
  // Manejo de clics fuera del dropdown para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Función para alternar el menú móvil
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Manejo de cambios en el departamento seleccionado
  const handleDepartmentChange = (event) => {
    const selectedDept = Number(event.target.value);
    setSelectedDepartment(selectedDept);
    localStorage.setItem("selectedDepartment", selectedDept);
  };

  return (
    <div>
      <header className="shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link
            to={"/"}
            className="text-[var(--first-color)] text-2xl font-semibold flex items-center"
          >
            <GiRooster className="text-3xl me-2" />
            <span className="logo-text font-bold text-dark">
              Rooster<span className="text-yellow-600">Tools</span>
            </span>
          </Link>

          <div className="ml-4 flex items-center space-x-4">
            <Link
              to={"/my-bookmarks"}
              className="bg-[var(--background-second-color)] w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 border-gray-500"
            >
              <FaRegFolderOpen className="text-[var(--second-color)] hover:text-[var(--first-color)] hover:scale-125 transition-transform duration-300 w-6 h-6 mr-2" />
              {t("myBookmarks")}
            </Link>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            id="menu-button"
            className="text-indigo-500 focus:outline-none"
          >
            {isOpen ? (
              <MdOutlineClose size={30} style={{ color: "var(--first-color)" }} />
            ) : (
              <IoMdMenu size={30} style={{ color: "var(--first-color)" }} />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between px-5 py-4">
          {departments.length > 0 ? (
            <select
              className="border rounded-md p-2 mb-3 md:mb-0 w-full md:w-auto"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              {departments.map((item) => (
                <option key={item.department_id} value={item.department_id}>
                  {item.department}
                </option>
              ))}
            </select>
          ) : (
            <div>Cargando departamentos...</div>
          )}

          <div className="flex flex-wrap gap-4 md:gap-6">
            {categories
              .filter((item) => item.department_id === selectedDepartment)
              .map((item) => (
                <Link
                  to={item.path}
                  key={item.category_id}
                  className={`${
                    location.pathname === item.path
                      ? "text-[var(--first-color)]"
                      : "hover:text-[var(--first-color)]"
                  } text-sm md:text-base`}
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
