import React from "react";

const TabHeader = ({ name, isActiveTab, tabClick }) => {
  const className = !isActiveTab ? "tabs__button" : "tabs__button active";
  return (
    <button className={className} onClick={tabClick}>
      {name}
    </button>
  );
};
export default TabHeader;
