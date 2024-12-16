import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import VisaCard from "./VisaCard";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../../Provider/AuthProvider";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [loadedVisas, setLoadedVisas] = useState([]);

  const fetchUserVisas = async () => {
    if (user?.email) {
      try {
        const response = await fetch(
          `https://visa-hub-master.vercel.app/myAddedVisa?email=${user.email}`
        );
        const data = await response.json();
        setLoadedVisas(data);
      } catch (error) {
        console.error("Error fetching user's visas:", error);
      }
    }
  };
  useEffect(() => {
    if (user?.email) {
      fetchUserVisas();
    }
  }, [user?.email]);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-2xl p-4 ml-4 font-bold">
        Welcome to VisaHub: {loadedVisas.length} visas added by you.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {loadedVisas.map((visa) => (
          <VisaCard
            visa={visa}
            loadedVisas={loadedVisas}
            setLoadedVisas={setLoadedVisas}
            key={visa._id}
          ></VisaCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyAddedVisa;
