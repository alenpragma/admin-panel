import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let nav = useNavigate();
  useEffect(() => {
    let local = localStorage.getItem("");
    if (localStorage.getItem("login") !== "true") {
      nav("/");
    }
  }, []);

  return (
    <div className="max-w-container mx-auto mt-16 lg:px-5 px-5">
      <div className="text-center mb-16">
        <h2 className="text-[#5E5E5E] text-[40px] font-normal">
          Admin Dashboard
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-10">
        <div className="dashboard-button">
          <p className="text-[20px] font-normal">Pending Orders</p>
          <p className="text-[40px] font-bold">00</p>
        </div>
        <div className="dashboard-button">
          <p className="text-[20px] font-normal">Confirmed Orders</p>
          <p className="text-[40px] font-bold">00</p>
        </div>
        <div className="dashboard-button">
          <p className="text-[20px] font-normal">Total Products</p>
          <p className="text-[40px] font-bold">00</p>
        </div>
        <div className="dashboard-button">
          <p className="text-[20px] font-normal">Total Customers</p>
          <p className="text-[40px] font-bold">00</p>
        </div>
        <div className="dashboard-button">
          <p className="text-[20px] font-normal">Total Earnings</p>
          <p className="text-[40px] font-bold">00</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
