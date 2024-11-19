import React from "react"

const InputBox = ({ label, ...props }) => {
    return (
        <div className="">
            <label>{label}</label>
            <input type="text" {...props} />
        </div>
    )
}

export default InputBox
