import liked from "../../assets/icon/like.svg";
import deleted from "../../assets/icon/delete.svg";

const CustomerInfo = () => {
  return (
    <div className="max-w-container mx-auto mt-16 lg:px-5 px-5">
      <div className="text-center mb-16">
        <h2 className="text-[#5E5E5E] text-[40px] font-normal">
        Customers Info
        </h2>
      </div>
      {/* Pending Order list */}
      <div className="list-style">
        {/* Product One Start */}
        <div className="bg-[#F0F0F0] w-full p-5 flex justify-between flex-row-reverse gap-2 rounded-md shadow-sm shadow-[#000000]">
            <div className="pt-8">
              <img src={deleted} alt="" className="w-[25px]" />
            </div>
          <div className="text-[#5E5E5E] text-[14px] font-semibold flex flex-col leading-6 lg:w-[50%] w-[70%]">
            <p>Ordered by: Hamza Altamas</p>
            <p>Contact No: 01871212122</p>
            <p>Email: null@gmail.com</p>
            <p>Address: Detailed Address,Area,City,PostCode</p>
            <p>Delivery: Outside Khagrachori</p>
            <p>Total Product Buying: 3000 BDT</p>
            <p>Total Spends: 3000 BDT</p>
          </div>
        </div>
        {/* Product One End */}
      </div>
    </div>
  );
};

export default CustomerInfo;
