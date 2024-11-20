import { useState } from "react"
import Button from "../../Button"
import InputBox from "./InputBox"
import { sendEmail } from "../../../constants/functions"

const Register = () => {
    // name,course Dropdown, phone , email, District , State , Address ,Pincode, Highest Qualification
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userDistrict, setUserDistrict] = useState("")
    const [userState, setUserState] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userPincode, setUserPincode] = useState("")
    const [userDOB, setUserDOB] = useState("")
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
        setUserName("")
        setUserEmail("")
        setUserPhone("")
        setUserDistrict("")
        setUserState("")
        setUserAddress("")
        setUserPincode("")
        setUserDOB("")
        setUserGender("")
        setSelectedCourse("")
        setUserComments("")

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

        // sendEmail(inputData)
        console.log("Sending off", inputData)
    }

    return (
        <section className="bg-radial-gradient from-ks-primary/50 to-ks-primary">
            <form onSubmit={handleSubmit} className="pt-44">
                <InputBox
                    label="Name"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />

                <InputBox
                    label="Email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value)
                    }}
                />

                <InputBox
                    label="Phone"
                    value={userPhone}
                    onChange={(e) => {
                        setUserPhone(e.target.value)
                    }}
                />

                <InputBox
                    label="Address"
                    value={userAddress}
                    multiline
                    onChange={(e) => {
                        setUserAddress(e.target.value)
                    }}
                />

                <InputBox
                    label="District"
                    value={userDistrict}
                    onChange={(e) => {
                        setUserDistrict(e.target.value)
                    }}
                />

                <InputBox
                    label="State"
                    value={userState}
                    onChange={(e) => {
                        setUserState(e.target.value)
                    }}
                />

                <InputBox
                    label="Pincode"
                    value={userPincode}
                    onChange={(e) => {
                        setUserPincode(e.target.value)
                    }}
                />

                <InputBox
                    label="DOB"
                    type="date"
                    value={userDOB}
                    onChange={(e) => {
                        setUserDOB(e.target.value)
                    }}
                />

                <InputBox
                    label="Gender"
                    dropDown
                    dropData={["Male", "Female", "Transgender"]}
                    value={userGender}
                    onChange={(e) => {
                        setUserGender(e.target.value)
                    }}
                />

                <InputBox
                    label="Course"
                    value={selectedCourse}
                    onChange={(e) => {
                        setSelectedCourse(e.target.value)
                    }}
                />

                <InputBox
                    label="Comments"
                    value={userComments}
                    multiline
                    onChange={(e) => {
                        setUserComments(e.target.value)
                    }}
                />

                {/* Button */}
                <button
                    type="submit"
                    className="group/button button h-11 relative inline-flex items-center justify-center text-ks-white bg-ks-secondary border-2 border-ks-secondary rounded-full hover:bg-transparent
  transition-colors hover:text-ks-secondary px-5"
                >
                    Apply
                </button>
            </form>
        </section>
    )
}

export default Register
