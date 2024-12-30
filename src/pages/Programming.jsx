import ResourceCard from "../components/ResourceCard";
function Programming() {
  const handleSave = () => {
    alert("Recurso guardado!");
  };

  const handleShare = () => {
    alert("¡Enlace copiado al portapapeles!");
  };

  const resources = [
    {
      title: "TailwindCSS Docs",
      description: "Documentación oficial de TailwindCSS.",
      category: "Frontend",
      imgUrl:"/images/programming/Tailwind.jpg",
      link: "https://tailwindcss.com/",
    },
    {
      title: "React Docs",
      description: "Documentación oficial de React.",
      category: "Desarrollo",
      imgUrl:"/images/programming/tailwindcss.jpg",
      link: "https://reactjs.org/",
    },
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Recursos Útiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      


        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            imgUrl={resource.imgUrl}
            description={resource.description}
            category={resource.category}
            link={resource.link}
            onSave={handleSave}
            onShare={handleShare}
          />
        ))}
      </div>
    </div>
  );
}

export default Programming;
