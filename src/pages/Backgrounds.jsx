import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import i18n from "../i18n";
import Search from "../components/Search";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";


function Backgrounds() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [savedResources, setSavedResources] = useState([]);
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Cargar 
  useEffect(() => {
    const fetchData = async () => {
      const lang = i18n.language;
      try {
        const url = `/locales/${lang}/backgrounds.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al cargar ");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  // Filtrar productos 
  useEffect(() => {
    const filtered = data.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [data, searchTerm]);

  return (
    <div className="p-6 pt-10 bg-background-light py-9 dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <h1 className="text-4xl  text-text-light dark:text-text-dark font-bold text-center mb-6">
        {t("backgrounds")}
      </h1>
      <div className="my-8 lg:my-16 xl:my-16">

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      </div>

<div className="relative">
  {filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((resource) => (
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
      ))}
    </div>
  ) : (
   
    <NotFoundResource />
  )}
</div>
    </div>
  );
}

export default Backgrounds