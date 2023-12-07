import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  // State to manage form input values
  let [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: null,
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for button click
  const handleAddProduct = async () => {
    // Send a POST request to the endpoint with the form data
    await axios
      .post(
        "https://goodmorning-aid-backend.onrender.com/api/v1/products/createproducts",
        formData
      )
      .then((res) => {
        if (res.data.error === "product upload successfully") {
          setError(res.data.error);
          setFormData({
            name: "",
            description: "",
            image: "",
            price: 0,
          });
          setTimeout(() => {
            setError("");
          }, 3000);
        } else {
          setError(res.data.error);
        }

        // Clear the form after successful submission
      });
  };

  return (
    <div className="py-[50px] md:py-[80px]">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-[#5E5E5E] text-4xl font-normal">Products</h2>

        {/* Input components */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[#5E5E5E] text-[17px] font-semibold">
            Add new product
          </h2>
          <div className="py-1">{error}</div>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Product Name"
              onChange={handleInputChange}
              className="input-style w-full md:w-full lg:w-[25%]"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              placeholder="Image URL"
              onChange={handleInputChange}
              className="input-style w-full md:w-full lg:w-[25%]"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Product Description"
              onChange={handleInputChange}
              className="input-style w-full md:w-full lg:w-[50%]"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              placeholder="Price"
              onChange={handleInputChange}
              className="input-style w-full md:w-full lg:w-[10%]"
            />
            <button
              onClick={handleAddProduct}
              className="rounded-full bg-[#8CC84B] hover:bg-[#80b744] text-white text-[14px] w-[115px] h-[45px]"
            >
              Add Product
            </button>
          </div>
        </div>

        
      </div>

      {/* product list */}
      <div className="w-7xl bg-slate-300 h-32 flex justify-between items-center">
          <div className="w-[70%] h-20">sdfasdf</div>
          <div className="w-[20%] h-20">sdfasdfsad</div>
        </div>
    </div>
  );
};

export default AddProduct;
