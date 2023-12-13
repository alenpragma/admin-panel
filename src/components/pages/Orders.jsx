import liked from "../../assets/icon/like.svg";
import deleted from "../../assets/icon/delete.svg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Orders = () => {
  let [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("https://goodmorning-aid-backend.onrender.com/api/v1/order/allorder").then((res) => {
      setAllOrder(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="max-w-container mx-auto mt-16 lg:px-5 px-5">
      <div className="text-center mb-16">
        <h2 className="text-[#5E5E5E] text-[40px] font-normal">
          Pending Orders
        </h2>
      </div>
      {/* Pending Order list */}
      <div className="list-style">
        {/* Product One Start */}
        {allOrder.map((item, index) => (
          <div
            key={index}
            className="bg-[#F0F0F0] w-full p-5 flex flex-col gap-2 rounded-md shadow-sm shadow-[#000000]"
          >
            <h2 className="text-[#5E5E5E] font-semibold text-[14px]">
              Products:
            </h2>
            <div className="flex justify-between">
              <div className="flex justify-start gap-3 w-[60%]">
                {
                  item.orderedProducts.map((item)=>(

                <div className="product-item">
                  <p>
                    {item.name} <br /> {item.quantity} pcs <br />total: {item.totalAmount} taka
                  </p>
                </div>
                  ))

                }
              </div>
              <div className="flex justify-start gap-3">
                <img src={liked} alt="" className="w-[25px]" />
                <img src={deleted} alt="" className="w-[25px]" />
              </div>
            </div>
            <div className="text-[#5E5E5E] text-[14px] font-semibold flex flex-col leading-6 w-[50%]">
              <p>Ordered by: {item.customerName}</p>
              <p>Contact No: {item.customerPhone}</p>
              <p>Email: {item.customerEmail}</p>
              <p>Address: {item.customerAddress}</p>
              <p>
                Delivery:{" "}
                {item.insideCity
                  ? "inside City 50 taka"
                  : "outside City 100 taka"}
              </p>
              <p>
                Total Product Cost Amount:{" "}
                {item.totalAllProductAmount}
              </p>
              <p className="border-b-[1px] border-black">
                Delivery Fee:{" "}
                {item.insideCity
                  ? "inside City 50 taka"
                  : "outside City 100 taka"}
              </p>
              <p>Total Amount: {item.totalAllProductAmount}</p>
            </div>
          </div>
        ))}
        {/* Product One End */}
        {/* Product Two Start */}
      </div>
    </div>
  );
};

export default Orders;
