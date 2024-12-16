import React from "react";
import Swal from "sweetalert2";

const AppliedVisaCard = ({ visa, loadedVisas, setLoadedVisas }) => {
  const {
    _id,
    email,
    name,
    country_Name,
    country_Image,
    visa_Type,
    processing_Time,
    Fee,
    Validity,
    Application_method,
    Applied_date,
  } = visa;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-hub-master.vercel.app/applyVisa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Visa has been deleted.",
                icon: "success",
              });
              setLoadedVisas((prevVisas) =>
                prevVisas.filter((visa) => visa._id !== _id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting visa:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete visa. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-1/3 overflow-hidden h-full">
        <img
          src={country_Image}
          alt={`${country_Name}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between w-2/3">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {country_Name}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Visa Type:</span> {visa_Type}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Processing Time:</span>{" "}
          {processing_Time} Days
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Fee:$</span> {Fee}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Validity:</span> {Validity} months
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Application Method:</span>{" "}
          {Application_method}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Application Date:</span>{" "}
          {Applied_date}
        </p>

        <div className="flex space-x-2 mt-4">
          <button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
            onClick={() => handleDelete(_id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedVisaCard;
