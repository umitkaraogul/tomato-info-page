import React from "react";

const TabContent = ({ content }) => (
  <div
    className="tabs__content visible"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
);
export default TabContent;
