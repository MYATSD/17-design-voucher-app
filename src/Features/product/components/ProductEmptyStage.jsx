
import React from "react";
import { Link } from "react-router-dom";

const ProductEmptyStage = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
      <td colSpan={6} className="px-6 py-4 text-center">
        There is no Product.  <Link to="/dashboard/product-create" href="" className="underline text-blue-600">Create New</Link>
      </td>
    </tr>
  );
};

export default ProductEmptyStage;
