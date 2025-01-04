import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

function SelectCategory({  selectCategory }) {
  const { t, i18n } = useTranslation();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(t("actions.select"));
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const lang = i18n.language;
      try {
        const response = await fetch(`/locales/${lang}/categories.json`);
        if (!response.ok) throw new Error("Error al cargar las categorías");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };

    fetchCategories();
  }, [i18n.language]);

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

  const handleCategoryChange = (category_id, category_name) => {
    setSelectedCategoryName(category_name);
    setIsOpenDropdown(false);
    localStorage.setItem("category", category_id);
    selectCategory(category_id); 
  };

  return (
    <>
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="text-text-light dark:text-text-dark w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 border-gray-500"
        type="button"
        aria-expanded={isOpenDropdown ? "true" : "false"}
        aria-controls="category-dropdown"
        aria-labelledby="category-selector"
      >
        <span className="flex items-center">
          {selectedCategoryName}
          <IoIosArrowDown className="ml-2 text-3xl" />
        </span>
      </button>
      {isOpenDropdown && (
        <ul
          id="category-dropdown"
          className="absolute top-16 px-5 bg-background-secondary-light dark:bg-background-secondary-dark z-20 shadow-md border rounded mt-2"
          ref={dropdownRef}
        >
          {categories.map((item) => (
            <li
              key={item.category_id}
              onClick={() => handleCategoryChange(item.category_id, item.name)}
              className="text-text-light dark:text-text-dark px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

SelectCategory.propTypes = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      category_id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default SelectCategory;
