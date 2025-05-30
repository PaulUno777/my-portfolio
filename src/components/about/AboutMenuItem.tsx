import classNames from "classnames";
import "./about.css";

type AboutMenuItemProps = {
  title: string;
  active: boolean;
  onClick: () => void;
};

export const AboutMenuItem = ({
  title,
  active,
  onClick,
}: AboutMenuItemProps) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};
