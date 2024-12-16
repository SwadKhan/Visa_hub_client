import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState(null);
  const { user } = useContext(AuthContext); // Get the logged-in user
  const currentDate = new Date().toLocaleDateString("en-US");

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(
          `https://visa-hub-master.vercel.app/allVisa/${id}`
        );
        const data = await response.json();
        setVisa(data);
      } catch (error) {
        console.error("Error fetching visa details:", error);
      }
    };

    fetchVisaDetails();
  }, [id]);

  if (!visa) {
    return <div>Loading...</div>;
  }

  // Ensure that the user is logged in before rendering the application form
  if (!user) {
    return <div>Please log in to apply for a visa.</div>;
  }

  const handleApplyVisa = async (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + " " + lastName;
    const country_Name = visa.countryName;
    const country_Image = visa.countryImage;
    const visa_Type = visa.visaType;
    const processing_Time = visa.processingTime;
    const Fee = visa.fee;
    const Validity = visa.validity;
    const Application_method = visa.applicationMethod;

    // Collect application data
    const applicationData = {
      email: user.email,
      name,
      country_Name,
      country_Image,
      visa_Type,
      processing_Time,
      Fee,
      Validity,
      Application_method,
      Applied_date: new Date().toISOString(),
    };

    // Sending the data to the backend

    const response = await fetch(
      "https://visa-hub-master.vercel.app/applyVisa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("my_modal_5").close();

        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }

        // Resetting the form and showing feedback
        else {
          alert("Failed to add coffee. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="p-8">
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold mb-4">{visa.countryName}</h2>
      <img
        src={visa.countryImage}
        alt={visa.countryName}
        className="w-full max-w-lg rounded-lg mb-6"
      />
      <p>
        <strong>Visa Type:</strong> {visa.visaType}
      </p>
      <p>
        <strong>Processing Time:</strong> {visa.processingTime} days
      </p>
      <p>
        <strong>Fee:</strong> ${visa.fee}
      </p>
      <p>
        <strong>Validity:</strong> {visa.validity} months
      </p>
      <p>
        <strong>Application Method:</strong> {visa.applicationMethod}
      </p>
      <p>
        <strong>Age Restriction:</strong> {visa.ageRestriction} years
      </p>
      <p>
        <strong>Required Documents:</strong>{" "}
        {visa.requiredDocuments && visa.requiredDocuments.length > 0 ? (
          <ul className="list-disc pl-6">
            {visa.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        ) : (
          "None"
        )}
      </p>
      <p className="mt-4">
        <strong>Description:</strong> {visa.description}
      </p>
      <p>
        <strong>User Email:</strong> {visa.userEmail}
      </p>

      <Link
        to={`/updateVisa/${id}`}
        className="btn px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-300"
      >
        Update
      </Link>

      <button
        className="btn text-white bg-green-700 rounded hover:bg-green-950"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Apply for Visa
      </button>

      {/* Modal for Visa Application */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Visa Application</h3>
          <form onSubmit={handleApplyVisa}>
            <div className="py-2">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={user.email}
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="py-2">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="py-2">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="py-2">
              <label className="block mb-1">Applied Date</label>
              <input
                type="text"
                value={currentDate}
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="py-2">
              <label className="block mb-1">Fee</label>
              <input
                type="text"
                value={`$${visa.fee}`}
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Apply
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <Footer></Footer>
    </div>
  );
};

export default VisaDetails;
