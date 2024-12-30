import { FaExternalLinkAlt } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";
import PropTypes from "prop-types";

const ResourceCard = ({
  title,
  imgUrl,
  description,
  category,
  link,
  onSave,
  onShare,
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col border border-gray-200">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <img className="w-full" src={imgUrl} alt={title} />
        </a>
        <a href="#!">
        <span className="text-sm absolute top-0 right-0  border-none rounded pl-2 bg-green-100  text-dark ">  {category}</span>
          
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
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="w-full px-5 py-2 flex flex-row items-center justify-between bg-gray-100 border-t-2">
        <button
          onClick={onSave}
          className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center"
        >
          <MdOutlineAddTask className="mr-2" /> Guardar
        </button>
        <button
          onClick={onShare}
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
  );
};

// Validación de props
ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
};

export default ResourceCard;
