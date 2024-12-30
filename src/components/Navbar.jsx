import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegFolderOpen } from "react-icons/fa6";
import LanguageSelector from "./LanguageSelector";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiRooster } from "react-icons/gi";
import categories from "../services/categories.json";
import department from "../services/department.json";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(
    department[0]?.department_id
  );
  const location = useLocation();
  const itemNavbar = [
    { name: t("navbar.aboutMe"), path: "/about" },
    { name: t("navbar.projects"), path: "/projects" },
    { name: t("navbar.contact"), path: "/contact" },
    { name: t("navbar.downloadResume"), path: "/download-resume" },
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(Number(event.target.value));
  };

  return (
    <div>
      <header className="shadow-md ">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to={"/"}
            className="text-[var(--first-color)] text-2xl font-semibold flex items-center"
          >
            <GiRooster className="text-3xl me-2" />
            <span className="logo-text font-bold text-dark">
              Rooster<span className="text-yellow-600">Tools</span>
            </span>
          </Link>

          <nav>
            <div className="hidden md:flex space-x-6">
              <form className="w-full flex flex-wrap">
                <div className="flex w-full lg:w-auto mb-3 lg:mb-0">
                  <select
                    className="rounded-l-lg p-2 border w-full lg:w-auto"
                    aria-label="Select category"
                  >
                    {categories.map((item) => (
                      <option key={item.category_id} selected>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    className="form-control rounded-r-lg p-2 border w-full lg:w-auto"
                    placeholder="Search for more than 20,000 products"
                    aria-label="Search"
                  />

                  <button
                    className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg w-full lg:w-auto"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </nav>

          <div className="ml-4 flex items-center space-x-4">
          <Link
                  to={"/my-bookmarks"}
                  className="bg-[var(--background-second-color)] w-auto px-4 py-2 flex items-center justify-center rounded-lg border-2 border-gray-500"
                >
                  <FaRegFolderOpen  className="text-[var(--second-color)] hover:text-[var(--first-color)] hover:scale-125 transition-transform duration-300
          w-6 h-6 mr-2"/>
                  Mis Marcadores
                </Link>
            <LanguageSelector />
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            id="menu-button"
            className="text-indigo-500 focus:outline-none"
          >
            {isOpen ? (
              <MdOutlineClose
                size={30}
                style={{ color: "var(--first-color)" }}
              />
            ) : (
              <IoMdMenu size={30} style={{ color: "var(--first-color)" }} />
            )}
          </button>
        </div>

        {isOpen && (
          <ul
            ref={dropdownRef}
            className="absolute top-[4rem] right-5 bg-[var(--background-second-color)] shadow-md border rounded mt-2 px-3 md:w-auto z-20"
          >
            {itemNavbar.map((item, index) => (
              <li
                key={index}
                className="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link
                  to={item.path}
                  className="hover:text-[var(--first-color)]"
                  onClick={closeDropdown}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between px-5 py-4">
          <select
            className="border rounded-md p-2 mb-3 md:mb-0 w-full md:w-auto"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            {department.map((item) => (
              <option key={item.department_id} value={item.department_id}>
                {item.department}
              </option>
            ))}
          </select>

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
