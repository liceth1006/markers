function Hero() {
  return (
    <div className="flex mt-12 items-center justify-center bg-white">
      <div className="text-center px-6 sm:px-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          🌟{" "}
          <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
            Descubre
          </span>{" "}
          Recursos
          <br />
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">
            Creativos
          </span>{" "}
          ✨
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Simplifica tu día a día con una plataforma innovadora. Encuentra,
          organiza y accede a recursos de manera sencilla y eficiente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="w-[200px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Explorar Recursos 🔍
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
