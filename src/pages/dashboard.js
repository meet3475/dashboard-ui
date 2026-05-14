import { useState } from "react";
import Balance from "../components/Balance/Balance";
import ExpInc from "../components/ExpInc/ExpInc";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SpendCategory from "../components/SpendCategory/SpendCategory";
import StatisticsChart from "../components/StatisticsChart/StatisticsChart";
import Transaction from "../components/Transaction/Transaction";

const DashBoard = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="flex">
            <div className={isSidebarCollapsed ? "w-24" : "w-1/4 xl:w-1/5 "}>
                <Sidebar isCollapsed={isSidebarCollapsed} />
            </div>

            <div className={isSidebarCollapsed ? "w-[calc(100%-5rem)]" : "w-9/12 xl:w-4/5 h-screen"}>
                <Navbar onToggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
                <div className="flex flex-col xl:flex-row p-8 gap-6 bg-[#f6f7f9] max-xl:overflow-y-auto h-[calc(100vh-64px)]">
                    <div className="w-full xl:w-3/4 flex justify-between flex-col gap-6">
                        <StatisticsChart />

                        <ExpInc />

                        <Transaction />
                    </div>

                    <div className="w-full xl:w-1/4 flex justify-between flex-col gap-6">
                        <Balance />

                        <SpendCategory />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;