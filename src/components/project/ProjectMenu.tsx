import { useState } from "react";
import { projectData } from "./data.tsx";
import classNames from "classnames";
import "./project.css";

type MenuItem = 1 | 2 | 3;

export const ProjectMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1 as MenuItem);

  const handleMenuItemClick = (index: MenuItem) => {
    setActiveMenuItem(index);
  };

  const menuItems = [" PROJECT ONE", " PROJECT TWO", " PROJECT THREE"];

  const projects = projectData[activeMenuItem];

  const renderContent = () => {
    return projects.map((item, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} />
        <div>{item.description}</div>
        <div className="link-container">
          <a href={item.repository} target="_blank" rel="noopener noreferrer">
            REPO
          </a>
          <a href={item.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };
  return (
    <div className="project-menu">
      <div className="project-items-container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("project-item", {
              activeProject: activeMenuItem == index + 1,
            })}
            onClick={() => handleMenuItemClick((index + 1) as MenuItem)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">{renderContent()}</div>
    </div>
  );
};
