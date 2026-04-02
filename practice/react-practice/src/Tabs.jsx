import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="p-5">
      
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-4 py-2 rounded ${
            activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Tab 1
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-4 py-2 rounded ${
            activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Tab 2
        </button>
      </div>

      {/* Tab Content */}
      <div className="border p-4 rounded">
        {activeTab === "tab1" && <p>This is Tab 1 content</p>}
        {activeTab === "tab2" && <p>Tabs 2 is comming</p>}
      </div>

    </div>
  );
}