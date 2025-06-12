import { Link, useLocation } from "react-router";
import { getNavItem } from "./nav-helper";
import  "./nav.css";

export const Nav = () => {
  const location = useLocation();

  const navPositionClass = getNavItem(location.pathname)?.class || "";

  const isCurrentPage = (className: string) => {
    return navPositionClass === className;
  };

  const renderNavLink = (to: string) => {
    const navItem = getNavItem(to);
    const isActive = isCurrentPage(navItem?.class || "");
    const imgSrc = navItem?.image || "";
    const title = navItem?.title || "";

    const linkClass = isActive ? `nav-link  current` : `nav-link`;

    return (
      <Link to={to} className={linkClass} title={title}>
        <img src={imgSrc} alt={title.toLowerCase()} />
        {isActive && <h1 className="page-title">{title}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/")}
      {renderNavLink("/skills")}
      {renderNavLink("/projects")}
      {renderNavLink("/contacts")}
    </nav>
  );
};
