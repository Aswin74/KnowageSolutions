import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, to, onClick, children, px, primary }) => {
  const buttonClass = `group/button button h-11 relative inline-flex items-center justify-center text-ks-secondary/80 
  transition-colors hover:text-ks-secondary ${px || "px-7"} ${
    className || ""
  } `;

  const childrenClass = `relative z-10 ${
    primary && "text-ks-primary group-hover/button:scale-110"
  }`;

  const renderButton = () => (
    <button className={buttonClass} onClick={onClick}>
      <span className={childrenClass}>{children}</span>
      {ButtonSvg(primary)}
    </button>
  );

  const renderLink = () => (
    <Link to={to} className={buttonClass}>
      <span className={childrenClass}>{children}</span>
      {ButtonSvg(primary)}
    </Link>
  );

  return to ? renderLink() : renderButton();
};

export default Button;
