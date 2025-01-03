import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import i18n from "../i18n";
import Search from "../components/Search";

function Color() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedResources, setSavedResources] = useState([]);
  const [color, setColor] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Cargar los colores
  useEffect(() => {
    const fetchColor = async () => {
      const lang = i18n.language;
      try {
        const url = `/locales/${lang}/color.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al cargar los colores");
        const data = await response.json();
        setColor(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  // Filtrar productos cuando cambian color o searchTerm
  useEffect(() => {
    const filtered = color.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [color, searchTerm]);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        🎨 Explora y Crea Paletas de Colores Perfectas 🌈
      </h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((resource) => (
            <ResourceCard
              key={resource.resource_id}
              resource_id={resource.resource_id}
              title={resource.title}
              resource={resource}
              imgUrl={resource.imgUrl}
              description={resource.description}
              category={resource.subcategory}
              pricing={resource.pricing}
              link={resource.link}
              savedResources={savedResources}
              setSavedResources={setSavedResources}
              isSaved={savedResources.some(
                (saved) => saved.resource_id === resource.resource_id
              )}
            />
          ))
        ) : (
          <p>No se encontraron colores.</p>
        )}
      </div>
    </div>
  );
}

export default Color;
