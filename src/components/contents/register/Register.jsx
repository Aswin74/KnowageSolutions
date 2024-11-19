import { useState } from "react"
import Button from "../../Button"
import InputBox from "./InputBox"
import { sendEmail } from "../../../constants/functions"

const Register = () => {
    // name,course Dropdown, phone , email, District , State , Address ,Pincode, Highest Qualification
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setuserPhone] = useState("")
    const [userDistrict, setUserDistrict] = useState("")
    const [userState, setUserState] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userPincode, setUserPincode] = useState("")
    const [userDOB, setuserDOB] = useState("")
    const [userGender, setUserGender] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")
    const [userComments, setUserComments] = useState("")

    const service_id = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
    const template_id = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
    const user_id = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY

    // Sending mail
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserName("")

        const inputData = {
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: {
                userName: userName,
                userEmail: userEmail,
                userPhone: userPhone,
                userDistrict: userDistrict,
                userState: userState,
                userAddress: userAddress,
                userPincode: userPincode,
                userDOB: userDOB,
                userGender: userGender,
                selectedCourse: selectedCourse,
                userComments: userComments,
            },
        }

        sendEmail(inputData)
    }

    return (
        <section className="h-[100dvh] bg-radial-gradient from-ks-primary/50 to-ks-primary">
            <form onSubmit={handleSubmit} className="pt-44">
                <InputBox
                    label="Name"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <button
                    type="submit"
                    className="group/button button h-11 relative inline-flex items-center justify-center text-ks-white bg-ks-secondary border-2 border-ks-secondary rounded-full hover:bg-transparent
  transition-colors hover:text-ks-secondary px-5"
                >
                    Apply
                </button>
                {userName}
            </form>
        </section>
    )
}

export default Register
