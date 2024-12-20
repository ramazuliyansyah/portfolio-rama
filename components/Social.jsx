import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ramazuliyansyah" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rama-zuliyansyah-32560217b/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/zuliyansyahr/?utm_source=ig_web_button_share_sheet",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
