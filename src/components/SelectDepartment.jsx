import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

function SelectDepartment({ setSelectedDepartment, departments }) {
   const { t } = useTranslation();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState(t("actions.select"));
  const dropdownRef = useRef(null);

  // Manejo de clics fuera del dropdown para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Efecto para actualizar el nombre del departamento seleccionado al cambiar el idioma
  useEffect(() => {
    const storedDepartmentId = localStorage.getItem("selectedDepartment");
    if (storedDepartmentId) {
      const department = departments.find((item) => item.department_id === parseInt(storedDepartmentId, 10));
      if (department) {
        setSelectedDepartmentName(department.department); 
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, departments]);

  // Manejo de cambios en el departamento seleccionado
  const handleDepartmentChange = (department_id, department_name) => {
    setSelectedDepartment(department_id);
    setSelectedDepartmentName(department_name);
    setIsOpenDropdown(false);
    localStorage.setItem("selectedDepartment", department_id);
  };

  return (
    <>
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="text-text-light dark:text-text-dark w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 border-gray-500"
        type="button"
        aria-expanded={isOpenDropdown ? "true" : "false"}
      >
        <span className="flex items-center">
          {selectedDepartmentName}
          <IoIosArrowDown className="ml-2 text-3xl" />
        </span>
      </button>
      {isOpenDropdown && (
        <ul
          className="dropdown-menu absolute top-64 md:top-16 lg:top-16 px-5 bg-background-secondary-light dark:bg-background-secondary-dark z-20 shadow-md border rounded mt-2"
          ref={dropdownRef}
        >
          {departments.map((item) => (
            <li
              key={item.department_id}
              onClick={() => handleDepartmentChange(item.department_id, item.department)}
              className="text-text-light dark:text-text-dark dropdown-item flex items-center px-4 py-2 hover:bg-background-light dark:hover:bg-background-dark cursor-pointer"
            >
              <span>{item.department}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

SelectDepartment.propTypes = {
  setSelectedDepartment: PropTypes.func.isRequired,
  departments: PropTypes.array.isRequired,
};

export default SelectDepartment;
