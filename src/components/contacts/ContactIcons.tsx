import {
  FaEnvelope,
  FaPhoneFlip,
  FaLinkedinIn,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6"; 

const socialLinks = [
  {
    icon: <FaEnvelope />,
    link: "mailto:paulin.junior.nzodoum@gmail.com",
    label: "Email",
  },
  {
    icon: <FaPhoneFlip />,
    link: "tel:+237679218039",
    label: "Phone",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https:www.linkedin.com/in/pauluno777",
    label: "LinkedIn",
  },
  {
    icon: <FaDiscord />,
    link: "https://discord.com/users/pauluno_76262", // or custom invite
    label: "Discord",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/@Paulin_NZODOUM",
    label: "Twitter",
  },
];

export const ContactIcons = () => {
  return (
    <div className="contact-icons">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.label}
          className="contact-icon-link"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};