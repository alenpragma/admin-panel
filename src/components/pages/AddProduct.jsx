import React, { useEffect, useState } from "react";
import axios from "axios";
import icon1 from "../../assets/admin-icon/eye.svg";
import icon2 from "../../assets/admin-icon/edit.svg";
import icon3 from "../../assets/admin-icon/delete.svg";
import { FaRegTimesCircle } from "react-icons/fa";

const AddProduct = () => {
  // State to manage form input values
  let [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    setEditBtnShow(true);
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
          location.reload();
          setError(res.data.error);
          setFormData({
            name: "",
            description: "",
            image: "",
            price: "",
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

  // gert all product functionality
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Include AM/PM
    };

    // Format the date according to the options
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDate;
  }

  let [allProduct, setAllProduct] = useState([]);

  const headers = {
    Authorization: import.meta.env.VITE_GET_PRODUCT_KEY, // Replace with your actual token
  };

  useEffect(() => {
    axios
      .get(
        "https://goodmorning-aid-backend.onrender.com/api/v1/products/allproducts",
        { headers }
      )
      .then((response) => {
        setAllProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // delete functionality

  let handleDelete = (id) => {
    axios
      .post(
        "https://goodmorning-aid-backend.onrender.com/api/v1/products/deleteproducts",
        { id: id }
      )
      .then((response) => {
        location.reload();
        console.log(response.data);
      });
  };

  // edit functionality start
  let [editBtnShow, setEditBtnShow] = useState(false);
  let [editShow, setEditShow] = useState(false);
  let [editIndex, setEditIndex] = useState();
  let [updateId, setUpdateId] = useState(null);

  let handleUpdate = () => {
    axios
      .post(
        "https://goodmorning-aid-backend.onrender.com/api/v1/products/editproducts",
        {
          id: updateId,
          ...formData,
        }
      )
      .then((response) => {
        location.reload();
        console.log(response.data);
      });
  };
  // show details modal functionality added
  let [modalShow, setModalShow] = useState(false);

  return (
    <div className="max-w-container mx-auto mt-16 lg:px-5 px-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-[#5E5E5E] text-4xl font-normal">Products</h2>

        {/* Input components */}
        <div className="flex flex-col gap-5">
          {editShow ? (
            <h2 className="text-[#5E5E5E] text-[17px] font-semibold">
              Edit Product No. {editIndex + 1}
            </h2>
          ) : (
            <h2 className="text-[#5E5E5E] text-[17px] font-semibold">
              Add new product
            </h2>
          )}
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
            {editShow ? (
              <>
                {editBtnShow && (
                  <button
                    onClick={handleUpdate}
                    className="rounded-full bg-[#8CC84B] hover:bg-[#80b744] text-white text-[14px] py-[10px] px-[20px]"
                  >
                    confirm edit
                  </button>
                )}
                <button
                  onClick={() => setEditShow(false)}
                  className="rounded-full bg-[#8CC84B] hover:bg-[#80b744] text-white text-[14px] py-[10px] px-[20px]"
                >
                  cancel edit
                </button>
              </>
            ) : (
              <button
                onClick={handleAddProduct}
                className="rounded-full bg-[#8CC84B] hover:bg-[#80b744] text-white text-[14px] py-[10px] px-[20px]"
              >
                Add Product
              </button>
            )}
          </div>
        </div>
      </div>

      {/* product list */}
      <div className="list-style">
        {allProduct.length > 0 ? (
          allProduct.map((item, index) => (
            <>
              <div
                key={index}
                className="w-full bg-[#F0F0F0] rounded-full h-auto flex justify-between items-center p-3 shadow shadow-[#94A3B8]"
              >
                <div className="w-[70%] flex items-center justify-start gap-4">
                  {index + 1}
                  <img src={item.image} className="w-14 rounded-3xl" alt="" />
                  <div className="text-[#5E5E5E]">
                    <h2 className="text-[14px] font-semibold">{item.name}</h2>
                    <p className="leading-4 text-[12px]">{item.description}</p>
                    <span className="font-bold">Price : {item.price}</span>{" "}
                    <br />
                    <small>{formatTimestamp(item.createdAt)}</small>
                  </div>
                </div>
                <div className="w-[20%] flex justify-center items-center gap-5">
                  {editShow && index === editIndex ? (
                    "spinner..."
                  ) : (
                    <>
                      <img
                        src={icon1}
                        alt=""
                        className="w-5 cursor-pointer"
                        onClick={() => setModalShow(item)}
                      />
                      <img
                        src={icon2}
                        alt=""
                        className="w-5 cursor-pointer"
                        onClick={() => {
                          setEditShow(true);
                          setEditIndex(index);
                          setUpdateId(item._id);

                          setError("");
                          setFormData({
                            name: item.name,
                            description: item.description,
                            image: item.image,
                            price: item.price,
                          });
                        }}
                      />
                      <img
                        src={icon3}
                        alt=""
                        className="w-5 cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      />
                    </>
                  )}
                </div>
              </div>
              {modalShow && (
                <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center bg-[#00000036] z-[9999999]">
                  <FaRegTimesCircle
                    className="cursor-pointer absolute top-5 right-5 text-[30px] text-white"
                    onClick={() => setModalShow(false)}
                  />
                  {/* modal content start */}
                  <div className="p-4 rounded-lg bg-white flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                    <div className="w-full md:w-[40%]">
                      <img
                        src={modalShow.image}
                        className="w-full h-auto"
                        alt=""
                      />
                    </div>
                    <div className="w-full md:w-[60%] overflow-y-scroll">
                      <h3 className="text-[30px] font-bold">
                        {modalShow.name}
                      </h3>
                      <p className="mb-4">{modalShow.description}</p>
                      <small>{formatTimestamp(modalShow.createdAt)}</small>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))
        ) : (
          <span>No Products to show</span>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
