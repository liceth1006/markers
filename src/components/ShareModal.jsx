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
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareLink)}`,
      "_blank"
    );
  };
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareLink
      )}`,
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
            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            WhatsApp
          </button>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={shareFacebook}
          >
            Facebook
          </button>
          <button
            onClick={shareX}
             className="text-white bg-gradient-to-r from-gray-500 via-black to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            X
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
