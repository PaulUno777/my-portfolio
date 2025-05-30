import { useState } from "react";
import personalIcon from "../../assets/mage-100.png";
import { subHeadingData } from "./data.tsx";
import { AboutMenuItem } from "./AboutMenuItem";
import { AboutSubHeading } from "./AboutSubHeading";
import "./About.css";

type MenuItem = 1 | 2 | 3;

export const AboutMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1 as MenuItem);
  const [activeSubHeading, setActiveSubHeading] = useState(1);

  const handleMenuItemClick = (index: MenuItem) => {
    setActiveMenuItem(index);
    setActiveSubHeading(1); // Reset subheading when menu item changes
  };
  const handleSubHeadingClick = (index: number) => {
    setActiveSubHeading(index);
  };

  const menuItems = [
    { title: "PERSONAL", icon: personalIcon },
    { title: "EDUCATION", icon: personalIcon },
    { title: "CAREER", icon: personalIcon },
  ];
  const activeMenu = menuItems[activeMenuItem - 1];
  const subHeadings = subHeadingData[activeMenuItem];

  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item.title}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick((index + 1) as MenuItem)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenu.icon} alt={activeMenu.title} className="icon" />
        </div>
        {subHeadings.map((item, index) => (
          <AboutSubHeading
            key={index}
            title={item.title}
            content={item.content}
            menuItem={activeMenuItem}
            active={activeSubHeading === index + 1}
            onClick={() => handleSubHeadingClick(index + 1)}
          />
        ))}
      </div>
    </>
  );
};
