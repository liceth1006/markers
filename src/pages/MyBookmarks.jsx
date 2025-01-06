import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";
import toast from "react-hot-toast";
import Search from "../components/Search";
import DownloadPdf from "../components/DownloadPdf";



function MyBookmarks() {
 
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



  return (
    <div className="p-6 bg-background-light py-9 dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark">
      <h1 className="text-4xl  text-text-light dark:text-text-dark font-bold text-center mb-6">
        {t("favorites")}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 my-8 lg:my-16 xl:my-16 ">
        <div className="col-span-1">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </div>
        <div className="flex items-center justify-center lg:justify-end xl:justify-end  md:justify-end">
         <DownloadPdf 
         products={products}/>
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
