import React, { useState } from "react";
import IntroductionForm from "./IntroductionForm";
import AboutForm from "./AboutForm";
import PreviewCard from "./Preview";


const Tab = () => {

  const [activeTab, setActiveTab] = useState(1);

  const switchTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4">
      <div className="flex">
        <button
          onClick={() => switchTab(1)}
          className={`w-1/2 p-2 ${activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
        >
          Form 1
        </button>
        <button
          onClick={() => switchTab(2)}
          className={`w-1/2 p-2 ${activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
        >
          Form 2
        </button>
        <button
          className={`w-1/2 p-2 ${activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
        >
          Preview
        </button>
      </div>

      {activeTab === 1 && (
        <form className="mt-4">
          <IntroductionForm setActiveTab={setActiveTab}/>
        </form>
      )}

      {activeTab === 2 && (
        <form className="mt-4">
          <AboutForm setActiveTab={setActiveTab}/>
        </form>
      )}

      {activeTab === 3 && (
        <form className="mt-4">
          <PreviewCard />
        </form>
      )}
    </div>
  );
};

export default Tab;
