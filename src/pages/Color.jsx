import ResourceCard from "../components/ResourceCard"

import color from "../services/color.json"

function Color() {
  const handleSave = () => {
    alert("Recurso guardado!");
  };

  return (
     <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-center mb-6">🎨 Explora y Crea Paletas de Colores Perfectas 🌈</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
    
    
            {color.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                imgUrl={resource.imgUrl}
                description={resource.description}
                category={resource.pricing}
                link={resource.link}
                onSave={handleSave}
               
              />
            ))}
          </div>
         
        </div>
  )
}

export default Color