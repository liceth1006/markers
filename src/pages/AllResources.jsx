import { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard";
import i18n from "../i18n";
import Search from "../components/Search";
import { useTranslation } from "react-i18next";
import NotFoundResource from "../components/NotFoundResource";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

function AllResources() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [savedResources, setSavedResources] = useState([]);
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Número de cards por página

  const jsonUrls = [
    "/api.json",
    "/audios.json",
    "/background-removers.json",
    "/backgrounds.json",
    "/color.json",
    "/creative-portfolios.json",
    "/design-trends.json",
    "/designTools.json",
    "/frameworks.json",
    "/icons.json",
    "/illustrations.json",
    "/image-compressors.json",
    "/image-generation.json",
    "/libraries.json",
    "/models.json",
    "/photos.json",
    "/resource-optimizers.json",
    "/templates.json",
    "/text-generation.json",
    "/textures.json",
    "/typography.json",
    "/video-generation.json",
    "/video-templates.json",
    "/videos.json",
  ];
  useEffect(() => {
    const fetchResources = async () => {
      const lang = i18n.language;
      try {
        const fetchPromises = jsonUrls.map((url) =>
          fetch(`/locales/${lang}${url}`)
            .then((res) => res.json())
            .catch((err) => {
              console.error(`Error al cargar ${url}:`, err);
              return []; // Devuelve un array vacío si hay un error
            })
        );
        const allData = await Promise.all(fetchPromises);
        const combinedResources = allData
          .flat()
          .filter((resource) => resource.title); // Asegúrate de filtrar elementos sin título
        setResources(combinedResources);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };
    fetchResources();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);
  
  useEffect(() => {
    if (resources.length) {
      const filtered = resources.filter(
        (resource) =>
          resource.title &&
          resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResources(filtered);
      setCurrentPage(1);
    }
  }, [resources, searchTerm]);
  
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  const currentResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const range = [];

    // Calcular el rango visible
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return (
      <div className="flex justify-center mt-6 space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <IoArrowBackSharp />
        </button>
        {startPage > 1 && (
          <>
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}
        {range.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <IoMdArrowForward />
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 pt-10 bg-background-light py-9 dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <h1 className="text-4xl text-text-light dark:text-text-dark font-bold text-center mb-6">
        {t("allresources")}
      </h1>
      <div className="my-8 lg:my-16 xl:my-16">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredProducts={filteredResources}
          setFilteredProducts={setFilteredResources}
        />
      </div>

      <div className="relative">
        {currentResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentResources.map((resource) => (
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
        {renderPagination()}
      </div>
    </div>
  );
}

export default AllResources;
