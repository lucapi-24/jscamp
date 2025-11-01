import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { JobListings } from "./components/JobListings.jsx";
import { JobCard } from "./components/JobCard.jsx";

import jobsData from "./data.json";

function JobListing(){
  return (
    <>
      <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
      </div>
    </>
  )
}

function SearchFormSection(){
  return (
    <section className="jobs-search">
    <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>
    <form id="empleos-search-form" role="search">
        <div className="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input name="search" id="empleos-search-input" required type="text"
            placeholder="Buscar trabajos, empresas o habilidades"/>
        </div>

        <div className="search-filters">
          <select name="technology" id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name="location" id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name="experience-level" id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
      <span id="filter-selected-value"></span>
    </section>)
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    console.log("Página cambiada a:", page);
    setCurrentPage(page);
  }
  return (
    <>
    <Header />

  <main>
      <SearchFormSection />
    <section>
      <JobListing jobs={jobsData}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </section>
  </main>

  <Footer />
  </>
  )
}

export default App
