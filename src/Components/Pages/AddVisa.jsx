import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddVisa = () => {
  const { user } = useContext(AuthContext);

  const [visaData, setVisaData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setVisaData((prevState) => {
        if (checked) {
          return {
            ...prevState,
            requiredDocuments: [...prevState.requiredDocuments, value],
          };
        } else {
          return {
            ...prevState,
            requiredDocuments: prevState.requiredDocuments.filter(
              (item) => item !== value
            ),
          };
        }
      });
    } else {
      setVisaData({ ...visaData, [name]: value });
    }
  };

  const handleAddVisa = (event) => {
    event.preventDefault();

    const finalVisaData = {
      ...visaData,
      userEmail: user?.email,
      createdAt: new Date().toISOString(), // Add current timestamp
    };

    fetch("https://visa-hub-master.vercel.app/addVisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalVisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          setVisaData({
            countryImage: "",
            countryName: "",
            visaType: "",
            processingTime: "",
            requiredDocuments: [],
            description: "",
            ageRestriction: "",
            fee: "",
            validity: "",
            applicationMethod: "",
          });
        } else {
          alert("Failed to add visa.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="bg-[#FAF3F0] p-24">
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl font-extrabold mb-6">Add a Visa</h2>
      <form onSubmit={handleAddVisa}>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">Country Image URL</label>
            <input
              type="url"
              name="countryImage"
              className="input input-bordered w-full"
              value={visaData.countryImage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">Country Name</label>
            <input
              type="text"
              name="countryName"
              className="input input-bordered w-full"
              value={visaData.countryName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-control mb-6">
          <label className="label">Visa Type</label>
          <select
            name="visaType"
            className="select select-bordered w-full"
            value={visaData.visaType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist visa">Tourist visa</option>
            <option value="Student visa">Student visa</option>
            <option value="Official visa">Official visa</option>
          </select>
        </div>

        <div className="form-control mb-6">
          <label className="label">Processing Time (in days)</label>
          <input
            type="number"
            name="processingTime"
            className="input input-bordered w-full"
            value={visaData.processingTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">Required Documents</label>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                value="Valid passport"
                checked={visaData.requiredDocuments.includes("Valid passport")}
                onChange={handleInputChange}
              />
              Valid passport
            </label>
            <label>
              <input
                type="checkbox"
                value="Visa application form"
                checked={visaData.requiredDocuments.includes(
                  "Visa application form"
                )}
                onChange={handleInputChange}
              />
              Visa application form
            </label>
            <label>
              <input
                type="checkbox"
                value="Recent passport-sized photograph"
                checked={visaData.requiredDocuments.includes(
                  "Recent passport-sized photograph"
                )}
                onChange={handleInputChange}
              />
              Recent passport-sized photograph
            </label>
            <label>
              <input
                type="checkbox"
                value="Proof of accommodation"
                checked={visaData.requiredDocuments.includes(
                  "Proof of accommodation"
                )}
                onChange={handleInputChange}
              />
              Proof of accommodation
            </label>
            <label>
              <input
                type="checkbox"
                value="E-visa application form"
                checked={visaData.requiredDocuments.includes(
                  "E-visa application form"
                )}
                onChange={handleInputChange}
              />
              E-visa application form
            </label>
            <label>
              <input
                type="checkbox"
                value="Bank statement"
                checked={visaData.requiredDocuments.includes("Bank statement")}
                onChange={handleInputChange}
              />
              Bank statement
            </label>
          </div>
        </div>

        <div className="form-control mb-6">
          <label className="label">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            value={visaData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-control mb-6">
          <label className="label">Age Restriction (in years)</label>
          <input
            type="number"
            name="ageRestriction"
            className="input input-bordered w-full"
            value={visaData.ageRestriction}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">Visa Fee (in USD)</label>
          <input
            type="number"
            name="fee"
            className="input input-bordered w-full"
            value={visaData.fee}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">Validity (in months)</label>
          <input
            type="number"
            name="validity"
            className="input input-bordered w-full"
            value={visaData.validity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            className="input input-bordered w-full"
            value={visaData.applicationMethod}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full">
            Add Visa
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddVisa;
