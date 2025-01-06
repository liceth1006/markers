import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";
import toast from "react-hot-toast";
import Search from "../components/Search";
import { FaFilePdf } from "react-icons/fa6";
import jsPDF from "jspdf";
import "jspdf-autotable";



function MyBookmarks() {
  const doc = new jsPDF();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Cargar los recursos guardados desde localStorage
    const savedResource =
      JSON.parse(localStorage.getItem("savedResources")) || [];
    setProducts(savedResource);
  }, []);

  const handleRemoveProduct = (resourceId, categoryId) => {
    console.log(
      "Eliminando recurso con ID:",
      resourceId,
      "y categoría:",
      categoryId
    );

    const updatedProducts = products.filter(
      (product) =>
        !(
          product.resource_id === resourceId &&
          product.category_id === categoryId
        )
    );
    console.log(updatedProducts);
    setProducts(updatedProducts);
    localStorage.setItem("savedResources", JSON.stringify(updatedProducts));
    toast.success(t("success.deleted"));
  };

  // Filtrar productos
  useEffect(() => {
    const filtered = products.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

const download = ()=>{
  console.log("descargar",products)

 // Título del PDF
 doc.text("Lista de Recursos", 14, 10);

 // Define las columnas y los datos
 const columns = [
   { header: "Categoría", dataKey: "category" },
   { header: "Título", dataKey: "title" },
   { header: "Subcategoría  ", dataKey: "subcategory" },
   { header: "Descripción", dataKey: "description" },
   { header: "Enlace", dataKey: "link" },
   { header: "Precio", dataKey: "pricing" },
 ];

 // Agrega los datos a la tabla
 const data = products.map((product) => ({
   category: product.category,
   title: product.title,
   subcategory: product.subcategory,
   description: product.description,
   link: product.link,
   pricing: product.pricing,
 }));

 // Genera la tabla en el PDF
 doc.autoTable({
   columns,
   body: data,
   startY: 20, // Comienza debajo del título
 });

 // Guarda el PDF
 doc.save("recursos.pdf");
};

  return (
    <div className="p-6 bg-background-light py-9 dark:bg-background-dark min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        {t("🎨 Explora y Crea Paletas de Colores Perfectas 🌈")}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 sm:mb-3">
  <div className="col-span-1">
    <Search
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filteredProducts={filteredProducts}
      setFilteredProducts={setFilteredProducts}
    />
  </div>
  <div className="flex items-center justify-start md:justify-end">
    <button
      onClick={download}
      className="flex items-center justify-center px-6 py-3 font-bold text-text-dark bg-red-700 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 active:scale-95"
    >
      <FaFilePdf className="mr-3" /> Descargar
    </button>
  </div>
</div>


      <div className="relative">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((resource, index) => (
              <ResourceCard
                key={index}
                resource_id={resource.resource_id}
                title={resource.title}
                resource={resource}
                imgUrl={resource.imgUrl}
                description={resource.description}
                category={resource.category}
                category_id={resource.category_id}
                pricing={resource.pricing}
                link={resource.link}
                onDelete={handleRemoveProduct}
              />
            ))}
          </div>
        ) : (
          <NotFoundResource />
        )}
      </div>
    </div>
  );
}

export default MyBookmarks;
