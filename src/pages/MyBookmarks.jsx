import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import SelectCategory from "../components/SelectCategory";

function MyBookmarks() {
  const [savedResources, setSavedResources] = useState([]);
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedResource =
      JSON.parse(localStorage.getItem("savedResources")) || [];
      setSavedResources(savedResource)
    setProducts(savedResource);
  }, []);

  const selectCategory = (event) => {
    const selectedCategory = event.target.value;
    setFilter(selectedCategory);
    console.log("select", selectedCategory);
    const filteredProducts =
      selectedCategory === ""
        ? savedResources
        : savedResources.filter((item) => item.category_id == selectedCategory);
    console.log("filter", savedResources);
    setProducts(filteredProducts);
  };
  const handleRemoveProduct = (resourceId) => {
    // Filtra los productos para eliminar el recurso con el ID especificado
    const updatedProducts = products.filter(
      (product) => product.resource_id !== resourceId
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        🎨 Explora y Crea Paletas de Colores Perfectas 🌈
      </h1>

     <SelectCategory
     filter={filter}
     selectCategory={selectCategory}
     />

      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length <= 0 ?
        <h1>no hay recursos para esta categoria </h1> :
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
      }
      
      </div>
    </div>
  );
}

export default MyBookmarks;
