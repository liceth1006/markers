import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import SelectCategory from "../components/SelectCategory";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";
function MyBookmarks() {
  const { t } = useTranslation();
  const [savedResources, setSavedResources] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedResource =
      JSON.parse(localStorage.getItem("savedResources")) || [];
    setSavedResources(savedResource);
    setProducts(savedResource); 
  }, []);

  const selectCategory = (categoryId) => {
    const filteredProducts =
      categoryId === ""
        ? savedResources 
        : savedResources.filter((item) => item.category_id === categoryId);
    setProducts(filteredProducts);
  };

  const handleRemoveProduct = (resourceId) => {
    const updatedProducts = products.filter(
      (product) => product.resource_id !== resourceId
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        {t("🎨 Explora y Crea Paletas de Colores Perfectas 🌈")}
      </h1>

      <SelectCategory
       
        selectCategory={selectCategory}
        
      />

      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length <= 0 ? (
         <NotFoundResource/>
        ) : (
          products.map((resource) => (
            <ResourceCard
              key={resource.resource_id}
              resource_id={resource.resource_id}
              title={resource.title}
              resource={resource}
              imgUrl={resource.imgUrl}
              description={resource.description}
              category={resource.category}
              pricing={resource.pricing}
              link={resource.link}
              savedResources={savedResources}
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
