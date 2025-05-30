import classNames from "classnames";
import "./about.css";
import type { JSX } from "react";

type AboutSubHeadingProps = {
  title: string;
  content: JSX.Element;
  active?: boolean;
  menuItem: number;
  onClick?: () => void;
};
export const AboutSubHeading = ({
  title,
  content,
  active,
  onClick,
  menuItem,
}: AboutSubHeadingProps) => {
  const subContainerClass = `sub-container-${menuItem}`;
  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
      onClick={onClick}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};
