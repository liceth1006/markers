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
const ResourceCard = ({
  title,
  imgUrl,
  description,
  category,
  pricing,
  link,
  resource,
  resource_id,
  savedResources,
  setSavedResources,
  onDelete
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();
  
  // Función para guardar el recurso
  const handleSave = (resource) => {
    // Si el recurso no está en los recursos guardados, lo agregamos
  
    if (!savedResources.some((saved) => saved.resource_id === resource.resource_id)) {
      const updatedResources = [...savedResources, resource];
      setSavedResources(updatedResources);
      localStorage.setItem("savedResources", JSON.stringify(updatedResources)); // Guardar en LocalStorage
      toast.success("Recurso guardado!");
    
    } else {
      toast.error("Este recurso ya está guardado!");
    }
  };
  const handleDelete = () => {
    // Obtener los recursos guardados desde localStorage
    const resources = JSON.parse(localStorage.getItem("savedResources")) || [];
  
    // Filtrar los recursos eliminando el recurso con el resource_id correspondiente
    const updatedResources = resources.filter((element) => element.resource_id !== resource_id);
  
    // Si la lista de recursos se actualizó, actualizar el estado y el localStorage
    if (updatedResources.length !== resources.length) {
      setSavedResources(updatedResources);
      localStorage.setItem("savedResources", JSON.stringify(updatedResources)); // Actualizar en LocalStorage
      toast.success("Recurso eliminado!");
      if (onDelete) onDelete(resource_id);
    } else {
      toast.error("Este recurso no se encontraba guardado.");
    }
  };
  

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col border border-gray-200 transition-transform transform hover:scale-105 hover:border-indigo-600">
        <div className="relative">
          <a href="#">
            <img className="w-full" src={imgUrl} alt={title} />
          </a>
          <a href="#!">
            <span className="text-sm absolute top-0 right-0 border-none rounded p-2 m-2 bg-gray-200 text-dark">
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
          <span className="flex text-yellow-900 ">
            <FaTags className="mr-2" /> {category}
          </span>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="w-full px-5 py-2 flex flex-row items-center justify-between bg-gray-100 border-t-2">
          { location.pathname == "/my-bookmarks" ? (
            <button
            
              className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center"
              onClick={() => handleDelete()} 
            >
              <MdDelete className="mr-2" /> Eliminar
            </button>
          ) : (
            <button
              
              onClick={() => handleSave(resource)} 
              className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              <MdOutlineAddTask className="mr-2" /> Guardar
            </button>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <IoShareSocialSharp className="mr-2" /> Compartir
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" /> Abrir
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
  savedResources: PropTypes.array.isRequired,
  setSavedResources: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default ResourceCard;
