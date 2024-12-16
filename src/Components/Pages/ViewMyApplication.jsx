import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import AppliedVisaCard from "./AppliedVisaCard";
import { AuthContext } from "../../Provider/AuthProvider";

const ViewMyApplication = () => {
  const { user } = useContext(AuthContext);
  const [loadedVisas, setLoadedVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserVisas = async () => {
    if (user?.email) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://visa-hub-master.vercel.app/applyVisa?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch visa data.");
        }
        const data = await response.json();
        setLoadedVisas(data);
        setFilteredVisas(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching user's visas:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearch = () => {
    const filtered = loadedVisas.filter(
      (visa) =>
        visa.country_Name &&
        visa.country_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVisas(filtered);
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserVisas();
    }
  }, [user?.email]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  if (loading) {
    return <p className="text-center">Loading visas...</p>;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <h2 className="text-2xl p-4 ml-4 font-bold">
        Welcome to VisaHub:{" "}
        {loadedVisas.length === 0
          ? "You haven't added any visas yet."
          : `${loadedVisas.length} visas added by you.`}
      </h2>

      {error && <p className="text-center text-red-600">Error: {error}</p>}

      {/* Search Section */}
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by Country"
          className="p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Visas */}
      {filteredVisas.length === 0 ? (
        <p className="text-center text-gray-600">
          No visas found for the searched country.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {filteredVisas.map((visa) => (
            <AppliedVisaCard
              visa={visa}
              loadedVisas={loadedVisas}
              setLoadedVisas={setLoadedVisas}
              key={visa._id}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ViewMyApplication;
