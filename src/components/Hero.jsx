function Hero() {
  return (
    <section className="hero-container">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-12 ">
            <h2 className="display-1 ls-1 text-center">
              <span className="fw-bold text-primary"> 🌟 Descubre </span>{" "}
              Recursos <span className="fw-bold">Creativos 🌈</span>
            </h2>
            <p className="fs-4 text-center">
              {" "}
              Una plataforma diseñada para hacer tu vida más fácil. Encuentra,
              organiza y accede a los recursos que necesitas, ¡todo sin
              complicaciones!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <a
                href="#"
                className="btn btn-warning text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Explora Recursos
              </a>
              <a
                href="#"
                className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Añadir a tus Marcadores
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
