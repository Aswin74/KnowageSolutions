import RegForm from "./RegForm"

const Register = () => {
    // name,course Dropdown, phone , email, District , State , Address ,Pincode, Highest Qualification

    return (
        <section className="grid lg:grid-cols-2 place-items-center bg-poly-grid bg-cover">
            <div className="pt-36 pb-20 h-full w-full grid grid-cols-1 max-md:hidden  ">
                hh
            </div>

            {/* Form */}
            <div className="pt-36 pb-20 grid grid-cols-1 h-full">
                <RegForm />
            </div>
        </section>
    )
}

export default Register
