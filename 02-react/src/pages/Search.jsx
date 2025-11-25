import { useState } from "react";
import { Pagination } from "../components/Pagination.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { SearchFormSection } from "../components/SearchFormSection.jsx";

import jobsData from "../data.json";

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const  [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const jobsFilteredByFilters = jobsData.filter( job => {
    return (
      (filters.technology === "" || job.data.technology.toLowerCase() === filters.technology.toLocaleLowerCase()) &&
      (filters.location === "" || job.ubicacion.toLowerCase() === filters.location.toLowerCase()) &&
      (filters.experienceLevel === "" || job.nivelExperiencia.toLowerCase() === filters.experienceLevel.toLowerCase())
    );
  })

  const jobsWithTextFilter = textToFilter === ''
    ? jobsFilteredByFilters
    : jobsFilteredByFilters.filter( job => {
        return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
    });
  
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const handlePageChange = (page) => {
    console.log("Página cambiada a:", page);
    setCurrentPage(page);
  }

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  }


  return (
  <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>
    <section>
      <JobListings jobs={pagedResults}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </section>
  </main>
  )
}

