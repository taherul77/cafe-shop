import { Outlet } from "react-router-dom";
import DashboardNav from "../../component/Page/Dashboard/DashoardNav";


const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 bg-white">
            <div className="lg:h-screen lg:bg-gray-100 col-span-12 lg:col-span-2">
                <DashboardNav />
            </div>
            <div className="lg:pt-28 bg-white col-span-12 lg:col-span-10 px-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
