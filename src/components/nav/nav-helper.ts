import mageCap from "../../assets/mage-cap-100.png";
import mageStaff from "../../assets/mage-staff-100.png";
import questList from "../../assets/quest-list-100.png";
import spellBook from "../../assets/spell-book-100.png";

export const navItems = {
  "/": { class: "nav-about", image: mageCap, title: "CHARACTER" },
  "/skills": { class: "nav-skills", image: mageStaff, title: "ABILITIES" },
  "/projects": {
    class: "nav-projects",
    image: questList,
    title: "QUESTS",
  },
  "/contacts": {
    class: "nav-contacts",
    image: spellBook,
    title: "CONTACTS",
  },
};

export const getNavItem = (pathname: string) => {
  switch (pathname) {
    case "/":
      return navItems["/"];
    case "/skills":
      return navItems["/skills"];
    case "/projects":
      return navItems["/projects"];
    case "/contacts":
      return navItems["/contacts"];
    default:
      return null;
  }
};
