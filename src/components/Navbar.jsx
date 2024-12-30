import { GiRooster } from "react-icons/gi";
import categories from "../services/categories.json";
import department from "../services/department.json";
import { useState } from "react";
function Navbar() {
  const [selectedDepartment, setSelectedDepartment] = useState(
    department[0]?.department_id
  );

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(Number(event.target.value));
  };

  return (
    <header>
      <div className="container-fluid ">
        <div className="row py-3 border-bottom">
          <div className="col-6 col-sm-4 col-lg-3 d-flex justify-content-center justify-content-sm-start align-items-center">
            <a
              href="index.html"
              className="logo-link text-decoration-none d-flex align-items-center"
            >
              <GiRooster className="logo-icon fs-1 text-dark me-2" />
              <span className="logo-text fs-3 fw-bold text-dark">
                RoosterTools
              </span>
            </a>
          </div>

          <div className="col-12 pt-2 col-lg-5 d-flex justify-content-center justify-content-lg-start mt-3 mt-lg-0">
            <form className="w-100">
              <div className="input-group mb-3">
                <select
                  className="form-select rounded-start p-2"
                  aria-label="Select category"
                >
                  {categories.map((item) => (
                    <option key={item.category_id} selected>
                      {item.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  className="form-control rounded-end  p-2"
                  placeholder="Search for more than 20,000 products"
                  aria-label="Search"
                />

                <button className="btn btn-warning" type="submit">
                  buscar
                </button>
              </div>
            </form>
          </div>

          <div className="col-6 col-sm-4 col-lg-4 d-flex justify-content-center justify-content-sm-end align-items-center mt-3 mt-lg-0">
            <ul className="d-flex list-unstyled m-0">
              <li>
                <a
                  href="#"
                  className="btn btn-dark px-4 py-2 text-white text-decoration-none rounded-3 shadow-sm"
                >
                  Mis Marcadores
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
            <nav className="main-menu d-flex navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="offcanvas offcanvas-end"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header justify-content-center">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <div className="offcanvas-body">
                    <select
                      className="filter-categories border-0 mb-0 me-5"
                      value={selectedDepartment} // Establecer el valor del select como el department_id seleccionado
                      onChange={handleDepartmentChange}
                    >
                      {department.map((item) => (
                        <option
                          key={item.department_id}
                          value={item.department_id}
                        >
                          {item.department}
                        </option>
                      ))}
                    </select>
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                      {categories
                        .filter(
                          (item) => item.department_id === selectedDepartment
                        ) // Filtrar las categorías según el department_id seleccionado
                        .map((item) => (
                          <li
                            key={item.category_id}
                            className="nav-item active"
                          >
                            <a href="#women" className="nav-link">
                              {item.name}
                            </a>
                          </li>
                        ))}
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
