import { FaExternalLinkAlt } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";
import PropTypes from "prop-types";
import ShareModal from "./ShareModal";
import { useState } from "react";
import { FaTags } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { t } from "i18next";
const ResourceCard = ({
  title,
  imgUrl,
  description,
  category,
  category_id,
  pricing,
  link,
  resource,
  resource_id,
  setSavedResources,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleSave = (resource) => {
    const storedResources = JSON.parse(localStorage.getItem("savedResources")) || [];
  
    const existingResource = storedResources.find(
      (saved) => saved.resource_id === resource.resource_id
    );
  
    if (!existingResource) {
      // Si el recurso no existe, lo guardamos
      const updatedResources = [...storedResources, resource];
      localStorage.setItem("savedResources", JSON.stringify(updatedResources));
      setSavedResources(updatedResources);
      toast.success(t("success.saved"));
    } else if (existingResource.category !== resource.category) {
      // Si el recurso existe en una categoría diferente, lo agregamos como nuevo recurso
      const updatedResources = [
        ...storedResources,
        resource,  // Agregamos el recurso con la nueva categoría
      ];
      localStorage.setItem("savedResources", JSON.stringify(updatedResources));
      setSavedResources(updatedResources);
      toast.success(t("success.saved"));
    } else {
      // Si el recurso ya está en la misma categoría, mostramos un error
      toast.error(t("error.alreadySaved"));
    }
  };
  

  const handleDelete = () => {
    if (onDelete) {
      onDelete(resource_id, category_id);
    }
  };

  return (
    <>
      <div className="bg-background-secondary-light dark:bg-background-secondary-dark rounded overflow-hidden shadow-lg flex flex-col border border-gray-400 dark:border-gray-200 transition-transform transform hover:scale-105 hover:border-primary">
        <div className="relative">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="w-full" src={imgUrl} alt={title} />
          </a>
          <a href="#!">
            <span className="text-sm absolute top-0 right-0 border-none  rounded p-2 m-2 bg-[#ffe9dd] text-text-light dark:text-text-light">
              {pricing}
            </span>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={`https://www.google.com/s2/favicons?sz=64&domain_url=${link}`}
              alt={`${title} icon`}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="text-lg font-semibold truncate">{title}</h3>
          </div>
          <span className="flex text-primary ">
            <FaTags className="mr-2" /> {category}
          </span>
          <p className="text-text-light dark:text-text-dark ">{description}</p>
        </div>
        <div className="w-full px-5 py-2 flex flex-row items-center justify-between  border-t  border-gray-200 dark:border-gray-200">
          {location.pathname == "/my-bookmarks" ? (
            <button
              className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center"
              onClick={() => handleDelete()}
            >
              <MdDelete className="mr-2" /> {t("actions.delete")}
            </button>
          ) : (
            <button
              onClick={() => handleSave(resource)}
              className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary  font-medium flex items-center"
            >
              <MdOutlineAddTask className="mr-2" /> {t("actions.save")}
            </button>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary  font-medium flex items-center"
          >
            <IoShareSocialSharp className="mr-2" /> {t("actions.share")}
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary font-medium flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" /> {t("actions.openLink")}
          </a>
        </div>
      </div>
      {isOpen && <ShareModal setIsOpen={setIsOpen} link={link} />}
    </>
  );
};

// Validación de props
ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
  pricing: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  resource: PropTypes.object.isRequired,
  resource_id: PropTypes.number.isRequired,
  category_id: PropTypes.number,
  setSavedResources: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ResourceCard;
