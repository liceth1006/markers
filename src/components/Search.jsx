import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";


function Search({setSearchTerm,searchTerm}) {
  const { t } = useTranslation();
  const search = (event) => {
   
    const filter = event.target.value.toLowerCase();
    setSearchTerm(filter);
  };
  return (
    <div className="flex items-center  border w-72 focus-within:border-primary transition duration-300 pr-3 gap-2  border-primary h-[46px] rounded-[5px] overflow-hidden">
    <input
      type="text"
      placeholder={t("actions.search")}
      className="w-full h-full pl-4 outline-none text-text-light dark:text-text-dark placeholder-text-light dark:placeholder-text-dark text-sm bg-background-light dark:bg-background-dark"
      onChange={search}
      value={searchTerm}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="22"
      height="22"
      viewBox="0 0 30 30"
      className="fill-current text-text-light dark:text-text-dark"
  
    >
      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
    </svg>
  </div>
  )
}
// Validación de props
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setFilteredProducts: PropTypes.func.isRequired,
 
};

export default Search