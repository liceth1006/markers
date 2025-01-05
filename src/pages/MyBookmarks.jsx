import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import SelectCategory from "../components/SelectCategory";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";
import toast from "react-hot-toast";

function MyBookmarks() {
  const { t } = useTranslation();
  const [savedResources, setSavedResources] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Cargar los recursos guardados desde localStorage
    const savedResource = JSON.parse(localStorage.getItem("savedResources")) || [];
    setSavedResources(savedResource);
    setProducts(savedResource); // Inicializamos `products` con `savedResources`
  }, []);

  const selectCategory = (categoryId) => {
    console.log(categoryId);
    // Filtrar productos por categoría
    const filteredProducts =
      categoryId === ""
        ? savedResources // Si no hay categoría seleccionada, mostramos todos los recursos
        : savedResources.filter((item) => item.category_id === categoryId);
    setProducts(filteredProducts); // Actualizar productos con los filtrados
  };

  const handleRemoveProduct = (resourceId, categoryId) => {
    console.log("Eliminando recurso con ID:", resourceId, "y categoría:", categoryId);
    
    const updatedProducts = products.filter(
      (product) => !(product.resource_id === resourceId && product.category_id === categoryId)
    );
  console.log(updatedProducts)
    setProducts(updatedProducts);
    localStorage.setItem("savedResources", JSON.stringify(updatedProducts));
    toast.success(t("success.deleted"));
  };
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        {t("🎨 Explora y Crea Paletas de Colores Perfectas 🌈")}
      </h1>

      <SelectCategory selectCategory={selectCategory} />

      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length <= 0 ? (
          <NotFoundResource />
        ) : (
          products.map((resource,index) => (
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
            setSavedResources={setSavedResources}
            onDelete={handleRemoveProduct}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookmarks;
