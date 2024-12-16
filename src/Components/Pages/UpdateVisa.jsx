import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const UpdateVisa = () => {
  const visa = useLoaderData() || {};

  // State to store form data
  const [formData, setFormData] = useState({
    countryName: visa.countryName || "",
    countryImage: visa.countryImage || "",
    visaType: visa.visaType || "",
    processingTime: visa.processingTime || "",
    fee: visa.fee || "",
    validity: visa.validity || "",
    applicationMethod: visa.applicationMethod || "",
    ageRestriction: visa.ageRestriction || "",
    description: visa.description || "",
    requiredDocuments: visa.requiredDocuments.join(", ") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateVisa = (event) => {
    event.preventDefault();

    // Collecting form data
    const updatedVisa = {
      countryName: formData.countryName,
      countryImage: formData.countryImage,
      visaType: formData.visaType,
      processingTime: formData.processingTime,
      fee: formData.fee,
      validity: formData.validity,
      applicationMethod: formData.applicationMethod,
      ageRestriction: formData.ageRestriction,
      description: formData.description,
      requiredDocuments: formData.requiredDocuments.split(","),
    };

    fetch(`https://visa-hub-master.vercel.app/allVisa/${visa._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Visa updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Clear form state after successful update
          setFormData({
            countryName: "",
            countryImage: "",
            visaType: "",
            processingTime: "",
            fee: "",
            validity: "",
            applicationMethod: "",
            ageRestriction: "",
            description: "",
            requiredDocuments: "",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to update visa. Please try again.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating the visa.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg">
      <Header />
      <Navbar />
      <h2 className="text-2xl font-bold mb-6">
        Update Visa: {formData.countryName}
      </h2>
      <form onSubmit={handleUpdateVisa}>
        {/* Country Name */}
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              placeholder="Country Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <input
              type="text"
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              placeholder="Visa Type"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Processing Time and Fee */}
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time (in days)</span>
            </label>
            <input
              type="number"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              placeholder="Processing Time"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Fee (in USD)</span>
            </label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              placeholder="Fee"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Validity and Application Method */}
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Validity (in months)</span>
            </label>
            <input
              type="number"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              placeholder="Validity"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Application Method</span>
            </label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              placeholder="Application Method"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Age Restriction and Description */}
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Age Restriction</span>
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              placeholder="Age Restriction"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Required Documents */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Required Documents</span>
          </label>
          <input
            type="text"
            name="requiredDocuments"
            value={formData.requiredDocuments}
            onChange={handleChange}
            placeholder="Comma-separated documents"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Country Image */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Country Image URL</span>
          </label>
          <input
            type="url"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleChange}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full mb-8">
            Update Visa
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UpdateVisa;
