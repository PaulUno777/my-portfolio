import { useState } from "react";
import frontEndIcon from "../../assets/potion-100.png";
import devOpsIcon from "../../assets/cristall-ball-100.png";
import backEndIcon from "../../assets/cauldron-100.png";

import { skillData } from "./data";
import classNames from "classnames";
import "./skill.css";

type MenuItem = 1 | 2 | 3;

export const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1 as MenuItem);

  const handleMenuItemClick = (index: MenuItem) => {
    setActiveMenuItem(index);
  };

  const skills = skillData[activeMenuItem];

  const renderContent = () => {
    return skills.map((item, index) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        <h3>{item.title}</h3>
        <div className="level-container">
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i - 1 < item.level ? "filled" : "unfilled"
              }`}
            ></div>
          ))}
        </div>
      </div>
    ));
  };

  const menuItems = [
    { title: "BACK-END", icon: backEndIcon },
    { title: "FRONT-END", icon: frontEndIcon },
    { title: "DEVOPS", icon: devOpsIcon },
  ];
  const activeMenu = menuItems[activeMenuItem - 1];

  return (
    <div className="skill-menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={classNames("skill-item", {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => handleMenuItemClick((index + 1) as MenuItem)}
        >
          <h2 className="skill-title">{item.title}</h2>
        </div>
      ))}
      <img src={activeMenu.icon} alt="current skill" className="skill-icon" />
      <div className="skill-sub-container">{renderContent()}</div>
    </div>
  );
};
