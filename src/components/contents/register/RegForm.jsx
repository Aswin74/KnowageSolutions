import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { sendEmail } from "../../../constants/functions"
import Button from "../../Button"
import InputBox from "../../InputBox"
import Heading from "../../Heading"
import { loading } from "../../../assets"

const RegForm = ({ pCourse }) => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userDistrict, setUserDistrict] = useState("")
    const [userState, setUserState] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userPincode, setUserPincode] = useState("")
    const [userDOB, setUserDOB] = useState("")
    const [userGender, setUserGender] = useState("")
    const [courseType, setCourseType] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")
    const [userComments, setUserComments] = useState("")

    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const service_id = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
    const template_id = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
    const user_id = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY

    // Setting selected course via parameter
    useEffect(() => {
        {
            pCourse ? setSelectedCourse(pCourse) : setSelectedCourse("")
        }
    }, [pCourse])

    // Sending mail
    const handleSubmit = async (e) => {
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
        setCourseType("")
        setSelectedCourse("")
        setUserComments("")

        setIsSuccess(false)
        setIsError(false)
        setIsLoading(true)

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
                courseType: courseType,
                selectedCourse: selectedCourse,
                userComments: userComments,
            },
        }

        try {
            await sendEmail(inputData)
            // console.log("Sending off", inputData)
            setIsLoading(true)
            setIsSuccess(true)
            setIsError(false)
            window.scrollTo(0, 0)
        } catch (error) {
            setIsSuccess(false)
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    // Reset
    const handleReset = (e) => {
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
        setCourseType("")
        setSelectedCourse("")
        setUserComments("")
        setIsSuccess(false)
        setIsError(false)
    }

    return (
        <div className="w-[80%] mx-auto rounded-xl border border-ks-gray bg-ks-white ">
            <div className="w-full grid place-items-center mx-auto rounded-t-xl pt-2">
                <Heading
                    title="Register"
                    className="uppercase text-ks-primary mb-0"
                />
            </div>

            {/* form */}
            <form
                onSubmit={handleSubmit}
                onReset={handleReset}
                className="p-6 grid lg:grid-cols-2 gap-2 "
            >
                <InputBox
                    id="name-input"
                    label="Full Name"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />

                <InputBox
                    id="email-input"
                    label="Email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value)
                    }}
                />

                <InputBox
                    id="phone-input"
                    label="Phone"
                    value={userPhone}
                    onChange={(e) => {
                        setUserPhone(e.target.value)
                    }}
                />

                <InputBox
                    id="address-input"
                    label="Address"
                    className="lg:col-span-2"
                    value={userAddress}
                    multiline
                    onChange={(e) => {
                        setUserAddress(e.target.value)
                    }}
                />

                <div className="grid lg:col-span-2 grid-cols-3 gap-2">
                    <InputBox
                        id="district-input"
                        label="District"
                        value={userDistrict}
                        onChange={(e) => {
                            setUserDistrict(e.target.value)
                        }}
                    />

                    <InputBox
                        id="state-input"
                        label="State"
                        value={userState}
                        onChange={(e) => {
                            setUserState(e.target.value)
                        }}
                    />

                    <InputBox
                        id="pincode-input"
                        label="Pincode"
                        value={userPincode}
                        onChange={(e) => {
                            setUserPincode(e.target.value)
                        }}
                    />
                </div>

                <InputBox
                    id="DOB-input"
                    label="DOB"
                    type="date"
                    value={userDOB}
                    onChange={(e) => {
                        setUserDOB(e.target.value)
                    }}
                />

                <InputBox
                    id="gender-input"
                    label="Gender"
                    dropDown
                    dropData={["Male", "Female", "Transgender"]}
                    value={userGender}
                    onChange={(e) => {
                        setUserGender(e.target.value)
                    }}
                />

                <InputBox
                    id="degree-input"
                    label="Degree"
                    dropDown
                    dropData={["PG (Masters)", "UG (Bachelors)"]}
                    value={courseType}
                    onChange={(e) => {
                        setCourseType(e.target.value)
                    }}
                />

                <InputBox
                    id="course-input"
                    label="Course"
                    className=""
                    value={selectedCourse}
                    onChange={(e) => {
                        setSelectedCourse(e.target.value)
                    }}
                />

                <InputBox
                    id="remarks-input"
                    label="Remarks"
                    placeholder="Feel free to share anything you'd like us to know!"
                    className="lg:col-span-2"
                    value={userComments}
                    multiline
                    onChange={(e) => {
                        setUserComments(e.target.value)
                    }}
                />

                {/* Button */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        disabled={isLoading}
                        className={`group/button button h-11 text-base relative inline-flex items-center justify-center ${
                            isLoading
                                ? "disabled:bg-ks-secondary/50"
                                : " bg-ks-secondary/80"
                        } text-ks-white border-2 border-ks-secondary rounded-full hover:bg-ks-secondary mt-4 px-5`}
                        aria-label={isLoading ? "Applying" : "Apply"}
                    >
                        {isLoading ? (
                            <motion.img
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                src={loading}
                                className="h-7"
                                alt="loading"
                            />
                        ) : (
                            "APPLY"
                        )}
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="reset"
                        disabled={isLoading}
                        className={`group/button button h-11 text-base relative inline-flex items-center justify-center ${
                            isLoading ? "opacity-0" : "opacity-100"
                        }  bg-ks-gray/80 text-ks-black rounded-full mt-4 px-5 hover:bg-ks-gray`}
                        aria-label={isLoading ? "" : "Clear Fields"}
                    >
                        CLEAR
                    </motion.button>
                </div>

                {isSuccess && (
                    <div
                        role="status"
                        aria-live="polite"
                        className="lg:col-span-2 bg-ks-primary text-ks-white py-1 px-2 rounded-full font-semibold mx-auto"
                    >
                        <p>Applied Successfully</p>
                    </div>
                )}

                {isError && (
                    <div
                        role="alert"
                        aria-live="assertive"
                        className="lg:col-span-2 bg-red-600 text-ks-white py-1 px-2 rounded-full font-semibold mx-auto"
                    >
                        <p>Failed to Apply</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default RegForm
