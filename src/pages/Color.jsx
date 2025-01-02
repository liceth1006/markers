import { useState } from "react";
import ResourceCard from "../components/ResourceCard";

import color from "../services/color.json";
import Search from "../components/Search";

function Color() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedResources, setSavedResources] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(color);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        🎨 Explora y Crea Paletas de Colores Perfectas 🌈
      </h1>
     <Search
     searchTerm={searchTerm}
     product={color}
     setSearchTerm={setSearchTerm}
     filteredProducts={filteredProducts}
     setFilteredProducts={setFilteredProducts}
     />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((resource) => (
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
            isSaved={savedResources.some(
              (saved) => saved.resource_id === resource.resource_id
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Color;
