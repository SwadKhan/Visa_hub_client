import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

import VisaCard from "./VisaCard";

const LatestVisa = () => {
  const visas = useLoaderData();
  const [loadedVisas, setLoadedVisas] = useState(visas);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Latest Visas Available
        </h2>
        <p className="text-gray-600 mt-2">
          Explore the latest visa options available for your desired
          destinations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loadedVisas.map((visa) => (
          <VisaCard
            visa={visa}
            loadedVisas={loadedVisas}
            setLoadedVisas={setLoadedVisas}
            key={visa._id}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/allVisa"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 transition duration-300"
        >
          View All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisa;
