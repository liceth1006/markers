import PropTypes from "prop-types";
import toast from "react-hot-toast";

function ShareModal({ setIsOpen, link }) {
  const shareLink = link;

  const close = () => {
    setIsOpen(false);
  };
  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Enlace copiado al portapapeles");
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareLink)}`, "_blank");
  };
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`,
      "_blank"
    );
  };
  const shareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareLink
      )}&text=${encodeURIComponent("¡Mira este enlace!")}`,
      "_blank"
    );
  };

  const shareEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(
        "Mira este enlace"
      )}&body=${encodeURIComponent(shareLink)}`,
      "_self"
    );
  };
  
    
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h3 className="text-lg font-semibold mb-4">Compartir enlace</h3>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <button 
           onClick={shareWhatsApp}
          className="bg-gray-100 p-2 rounded-md text-sm">
            WhatsApp
          </button>
          <button 
           onClick={shareFacebook}
          className="bg-gray-100 p-2 rounded-md text-sm">
            Facebook
          </button>
          <button
           onClick={shareX}
          className="bg-gray-100 p-2 rounded-md text-sm">X</button>
          <button 
           onClick={shareEmail}
          className="bg-gray-100 p-2 rounded-md text-sm col-span-2">
            Correo electrónico
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={shareLink}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={copyLink}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Copiar
          </button>
        </div>
      </div>
    </div>
  );
}
ShareModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

export default ShareModal;
