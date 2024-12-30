

function CardSlider() {


  return (
    <section className=" overflow-hidden px-10">
      <div className=" px-8 md:px-12 mx-auto  space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop",
              alt: "Scenic Landscape 1",
              rotate: "rotate-6",
            },
            {
              src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop",
              alt: "Scenic Landscape 2",
              rotate: "-rotate-12",
            },
            {
              src: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop",
              alt: "Scenic Landscape 3",
              rotate: "rotate-6",
            },
            {
              src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop",
              alt: "Scenic Landscape 4",
              rotate: "-rotate-12",
            },
          ].map((image, index) => (
            <a href="#_" key={index} className="group">
              <img
                src={image.src}
                alt={image.alt}
                className={`rounded-xl ${image.rotate} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSlider;
