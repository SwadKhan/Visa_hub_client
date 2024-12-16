import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import VisaCard from "./VisaCard";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const AllVisa = () => {
  const visas = useLoaderData(); // Loaded visas data from the backend
  const [loadedVisas, setLoadedVisas] = useState(visas);
  const [filter, setFilter] = useState("all");

  // Handler for filter change
  const handleFilterChange = (event) => {
    const selectedVisaType = event.target.value;
    setFilter(selectedVisaType);

    // Apply filtering logic based on the selected visa type
    if (selectedVisaType === "all") {
      setLoadedVisas(visas); // Reset to all visas
    } else {
      // Convert both visaType and selectedVisaType to lowercase for case-insensitive comparison
      const filteredVisas = visas.filter(
        (visa) => visa.visaType.toLowerCase() === selectedVisaType.toLowerCase()
      );
      setLoadedVisas(filteredVisas);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <h2 className="text-2xl p-4 ml-4 font-bold">
        Welcome to VisaHub: {loadedVisas.length} Visas Available
      </h2>

      {/* Dropdown Filter */}
      <div className="p-4">
        <label htmlFor="visaFilter" className="mr-2 font-semibold">
          Filter by Visa Type:
        </label>
        <select
          id="visaFilter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="Tourist Visa">Tourist visa</option>
          <option value="Business Visa">Business visa</option>
          <option value="Student Visa">Student visa</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {loadedVisas.map((visa) => (
          <VisaCard
            visa={visa}
            loadedVisas={loadedVisas}
            setLoadedVisas={setLoadedVisas}
            key={visa._id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllVisa;
