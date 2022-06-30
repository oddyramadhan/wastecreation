import React, { useState } from "react";
import UserBlog from "./user-blog";
import UserVideo from "./user.video";

export default function Tab() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Blog",
      title: "Title 1",
      content: <UserBlog />,
    },
    {
      id: 2,
      tabTitle: "Video",
      title: "Title 2",
      content: <UserVideo />,
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <>
      <div className="flex text-sm font-medium border-b border-current ">
        {tabs.map((tab, i) => (
          <button
            className="p-4 px-8 -mb-px border-b border-current hover:text-cyan-500 disabled:text-cyan-500 disabled:border-b-2"
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </>
  );
}
