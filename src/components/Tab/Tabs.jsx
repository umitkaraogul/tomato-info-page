import React, { useState, useEffect } from "react";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import "./Tabs.scss";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState({ id: 0 });
  useEffect(() => {
    setActiveTab(tabs[0]);
  }, [tabs]);

  return (
    <div className="tabs">
      {tabs &&
        tabs.map((tab) => (
          <TabHeader
            key={tab.id}
            name={tab.name}
            isActiveTab={activeTab.id === tab.id}
            tabClick={() => {
              setActiveTab(tabs[tab.id - 1]);
            }}
          />
        ))}
      {<TabContent content={activeTab.value} />}
    </div>
  );
};
export default Tabs;
