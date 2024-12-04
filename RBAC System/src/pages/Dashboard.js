import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("users");

  const renderTabButton = (tab, label, activeClass, inactiveClass) => (
    <button
      className={`mx-2 px-6 py-2 font-medium ${
        selectedTab === tab ? activeClass : inactiveClass
      }`}
      onClick={() => setSelectedTab(tab)}
    >
      {label}
    </button>
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header flex justify-center bg-gray-800 py-4">
        {renderTabButton(
          "users",
          "User Management",
          "bg-yellow-500 text-white",
          "bg-gray-200 text-gray-700 hover:bg-gray-300"
        )}
        {renderTabButton(
          "roles",
          "Role Management",
          "bg-green-500 text-white",
          "bg-gray-200 text-gray-700 hover:bg-gray-300"
        )}
      </header>

      <main className="dashboard-main p-6">
        {selectedTab === "users" ? <UserTable /> : <RoleTable />}
      </main>
    </div>
  );
};

export default Dashboard;

