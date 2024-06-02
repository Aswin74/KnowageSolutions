import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClass = `button h-11 relative inline-flex items-center justify-center text-ks-secondary/80 transition-colors hover:text-ks-secondary ${
    px || "px-7"
  } ${className || ""}`;

  const childrenClass = "relative z-10 ";

  const renderButton = () => (
    <button className={buttonClass} onClick={onClick}>
      <span className={childrenClass}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={buttonClass}>
      <span className={childrenClass}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
