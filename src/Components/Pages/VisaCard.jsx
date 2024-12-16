import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const VisaCard = ({ visa }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;

  //   const handleDelete = (_id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`https://visa-hub-master.vercel.app/visa/${_id}`, {
  //           method: "DELETE",
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.deletedCount > 0) {
  //               Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Visa has been deleted.",
  //                 icon: "success",
  //               });
  //             }
  //           });
  //       }
  //     });
  //   };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-1/3 overflow-hidden h-full">
        <img
          src={countryImage}
          alt={`${countryName}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between w-2/3">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{countryName}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Visa Type:</span> {visaType}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Processing Time:</span>{" "}
          {processingTime} Days
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Fee:$</span> {fee}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Validity:</span> {validity} months
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Application Method:</span>{" "}
          {applicationMethod}
        </p>

        <div className="flex space-x-2 mt-4">
          <Link
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-300"
            to={user?.email ? `/visaDetails/${_id}` : "/auth/login"}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
