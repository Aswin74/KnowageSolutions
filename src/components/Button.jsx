import { Link } from "react-router-dom"
import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ className, to, onClick, children, px, primary }) => {
  const buttonClass = `group/button button h-11 relative inline-flex items-center justify-center text-ks-white bg-ks-secondary border-2 border-ks-secondary rounded-full hover:bg-transparent hover:text-ks-secondary 
  transition-colors hover:text-ks-secondary ${px || "px-5"} ${className || ""} `

  const childrenClass = `relative z-10 ${
    primary && "text-ks-primary group-hover/button:scale-110"
  }`

  const renderButton = () => (
    <button className={buttonClass} onClick={onClick}>
      <span className={childrenClass}>{children}</span>
      {ButtonSvg(primary)}
    </button>
  )

  const renderLink = () => (
    <Link to={to} className={buttonClass}>
      <span className={childrenClass}>{children}</span>
      {/* {ButtonSvg(primary)} */}
    </Link>
  )

  return to ? renderLink() : renderButton()
}

export default Button
