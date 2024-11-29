import { useLocation } from "react-router-dom"
import RegForm from "./RegForm"
import RegisterInfo from "./RegisterInfo"

const Register = () => {
    const location = useLocation()
    const { course } = location.state || {}
    // name,course Dropdown, phone , email, District , State , Address ,Pincode, Highest Qualification

    return (
        <section className="grid lg:grid-cols-2 place-items-center bg-poly-grid bg-cover">
            {/* Info */}
            <div className="pb-20 h-[100dvh] w-full grid grid-cols-1 place-items-center max-md:hidden">
                <RegisterInfo />
            </div>

            {/* Form */}
            <div className="pt-32 pb-20 grid grid-cols-1 h-full">
                <RegForm pCourse={course} />
            </div>
        </section>
    )
}

export default Register
