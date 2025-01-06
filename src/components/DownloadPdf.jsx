import jsPDF from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa6";

function DownloadPdf({ products }) {
  const { t } = useTranslation();

  // Diccionario de textos
  const dictionary = {
    title: t("title") || "Lista de Recursos",
    columns: {
      category: t("columns.category") || "Categoría",
      title: t("columns.title") || "Título",
      subcategory: t("columns.subcategory") || "Subcategoría",
      description: t("columns.description") || "Descripción",
      link: t("columns.link") || "Enlace",
      pricing: t("columns.pricing") || "Precio"
    },
    toastMessages: {
      success: t("toastMessages.success") || "Recurso descargado con éxito",
      error: t("toastMessages.error") || "Error al descargar el recurso"
    },
    buttonText: t("buttonText") || "Download"
  };

  const doc = new jsPDF();

  const download = () => {
    try {
      // Título del PDF
      doc.text(dictionary.title, 14, 10);

      // Define las columnas y los datos
      const columns = [
        { header: dictionary.columns.category, dataKey: "category" },
        { header: dictionary.columns.title, dataKey: "title" },
        { header: dictionary.columns.subcategory, dataKey: "subcategory" },
        { header: dictionary.columns.description, dataKey: "description" },
        { header: dictionary.columns.link, dataKey: "link" },
        { header: dictionary.columns.pricing, dataKey: "pricing" }
      ];

      const data = products.map((product) => ({
        category: product.category,
        title: product.title,
        subcategory: product.subcategory,
        description: product.description,
        link: product.link,
        pricing: product.pricing
      }));

      // Genera la tabla en el PDF
      doc.autoTable({
        columns,
        body: data,
        startY: 20
      });

      // Guarda el PDF
      doc.save("recursos.pdf");
      toast.success(dictionary.toastMessages.success);
    } catch (error) {
      console.log(error)
      toast.error(dictionary.toastMessages.error);
    }
  };

  return (
    <button
      onClick={download}
      className="flex items-center justify-center px-6 py-3 font-bold text-text-dark bg-red-700 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 active:scale-95"
    >
      <FaFilePdf className="mr-3" /> {dictionary.buttonText}
    </button>
  );
}

// Validación de props
DownloadPdf.propTypes = {
  products: PropTypes.array.isRequired
};

export default DownloadPdf;
