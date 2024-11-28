import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Button = ({ className, to, onClick, children, px, ...props }) => {
    const buttonClass = `group/button button h-11 relative inline-flex items-center justify-center text-ks-white bg-ks-secondary border-2 border-ks-secondary rounded-full hover:bg-transparent
  transition-colors hover:text-ks-secondary ${px || "px-5"} ${className || ""} `

    const menuClass = `group/button button h-11 relative inline-flex items-center justify-center rounded-lg  border-2 border-ks-secondary
  transition-colors  ${px || "px-5"} ${className || ""} `
    const childrenClass = "relative z-10"

    const renderButton = () => (
        <button className={menuClass} onClick={onClick} {...props}>
            <span className={childrenClass}>{children}</span>
        </button>
    )

    const renderLink = () => (
        <Link to={to}>
            <motion.button
                whileTap={{ scale: 0.9 }}
                className={buttonClass}
                {...props}
            >
                <span className={childrenClass}>{children}</span>
            </motion.button>
        </Link>
    )

    return to ? renderLink() : renderButton()
}

export default Button
