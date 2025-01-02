import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/us.svg" },
    { code: "es", name: "Español", flag: "https://flagcdn.com/es.svg" },
  ];

  const dropdownRef = useRef(null);

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-text-light dark:text-text-dark w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 border-gray-500"
        type="button"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <IoLanguageOutline
          className=" hover:scale-125 transition-transform duration-300
          w-6 h-6 mr-2"
        />
        <span>{i18n.language === "en" ? "English" : "Español"}</span>
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu absolute z-20 bg-white shadow-md border rounded mt-2"
          ref={dropdownRef}
        >
          {languages.map((language, index) => (
            <li
              key={index}
              onClick={() => changeLanguage(language.code)}
              className=" text-text-light dark:text-text-dark bg-background-secondary-light dark:bg-background-secondary-dark dropdown-item flex items-center px-4 py-2 hover:bg-background-light  dark:hover:bg-background-dark cursor-pointer"
            >
              <img
                src={language.flag}
                alt={language.name}
                className="w-5 h-5 mr-3"
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
