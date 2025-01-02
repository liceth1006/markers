import { useState } from "react";
import ResourceCard from "../components/ResourceCard";

function MyBookmarks() {
  const [savedResources, setSavedResources] = useState([]);
  const savedResource =
    JSON.parse(localStorage.getItem("savedResources")) || [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        🎨 Explora y Crea Paletas de Colores Perfectas 🌈
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedResource.map((resource) => (
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
          />
        ))}
      </div>
    </div>
  );
}

export default MyBookmarks;
