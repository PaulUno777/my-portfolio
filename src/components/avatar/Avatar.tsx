import avatar from "../../assets/avatar.png";
import './avatar.css'

interface AvatarProps {
  page: string;
}

export const Avatar = ({ page }: AvatarProps) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `avatar-overlay-${page}`;

  return (
    <div>
      <span className={spanClass}></span>
      <img src={avatar} className={avatarClass} alt="Avatar" />
    </div>
  );
};
