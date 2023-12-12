import liked from "../../assets/icon/like.svg";
import deleted from "../../assets/icon/delete.svg";

const ConfirmOrder = () => {
  return (
    <div className="max-w-container mx-auto mt-16 lg:px-5 px-5">
      <div className="text-center mb-16">
        <h2 className="text-[#5E5E5E] text-[40px] font-normal">
          Confirmed Orders
        </h2>
      </div>
      {/* Pending Order list */}
      <div className="list-style">
        {/* Product One Start */}
        <div className="bg-[#F0F0F0] w-full p-5 flex flex-col gap-2 rounded-md shadow shadow-[#94A3B8]">
          <h2 className="text-[#5E5E5E] font-semibold text-[14px]">
            Products:
          </h2>
          <div className="flex justify-between">
            <div className="flex justify-start gap-3 w-[60%]">
              <div className="product-item">
                <p>
                  First Aid Box <br /> 0.2 pics
                </p>
              </div>
              <div className="product-item">
                <p>
                  Calandula
                  <br /> 0.2 pics
                </p>
              </div>
              <div className="product-item">
                <p>
                  Justilia <br /> 0.2 pics
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-3">
              <img src={liked} alt="" className="w-[25px]" />
              <img src={deleted} alt="" className="w-[25px]" />
            </div>
          </div>
          <div className="text-[#5E5E5E] text-[14px] font-semibold flex flex-col leading-6 w-[50%]">
            <p>Ordered by: Hamza Altamas</p>
            <p>Contact No: 01871212122</p>
            <p>Email: null@gmail.com</p>
            <p>Address: Detailed Address,Area,City,PostCode</p>
            <p>Delivery: Outside Khagrachori</p>
            <p>Total Product Amount: 3000 BDT</p>
            <p className="border-b-[1px] border-black">Delivery Fee: 100 BDT</p>
            <p>Total Amount: 3000 BDT</p>
          </div>
        </div>
        {/* Product One End */}
        {/* Product Two Start */}
        <div className="bg-[#F0F0F0] w-full p-5 flex flex-col gap-2 rounded-md shadow shadow-[#94A3B8]">
          <h2 className="text-[#5E5E5E] font-semibold text-[14px]">
            Products:
          </h2>
          <div className="flex justify-between">
            <div className="flex justify-start gap-3 w-[60%]">
              <div className="product-item">
                <p>
                  First Aid Box <br /> 0.2 pics
                </p>
              </div>
              <div className="product-item">
                <p>
                  Calandula
                  <br /> 0.2 pics
                </p>
              </div>
              <div className="product-item">
                <p>
                  Justilia <br /> 0.2 pics
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-3">
              <img src={liked} alt="" className="w-[25px]" />
              <img src={deleted} alt="" className="w-[25px]" />
            </div>
          </div>
          <div className="text-[#5E5E5E] text-[14px] font-semibold flex flex-col leading-6 lg:w-[50%] w-[70%]">
            <p>Ordered by: Hamza Altamas</p>
            <p>Contact No: 01871212122</p>
            <p>Email: null@gmail.com</p>
            <p>Address: Detailed Address,Area,City,PostCode</p>
            <p>Delivery: Outside Khagrachori</p>
            <p>Total Product Amount: 3000 BDT</p>
            <p className="border-b-[1px] border-black">Delivery Fee: 100 BDT</p>
            <p>Total Amount: 3000 BDT</p>
          </div>
        </div>
        {/* Product Two End */}
      </div>
    </div>
  );
};

export default ConfirmOrder;
