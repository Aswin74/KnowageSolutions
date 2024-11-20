import React from "react"

const InputBox = ({ dropDown, dropData, label, type, multiline, ...props }) => {
    const renderInput = () => (
        <div className="">
            <label className="ks-label">{label}</label>
            {!multiline ? (
                <input
                    className="ks-input"
                    type={type ? type : "text"}
                    {...props}
                    required
                />
            ) : (
                <textarea className="ks-input" {...props} required />
            )}
        </div>
    )

    const renderDropDown = () => (
        <div className="">
            <label className="ks-label">{label}</label>
            <select className="ks-input" {...props} required>
                <option value="" disabled>
                    Select
                </option>
                {dropData.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )

    return dropDown ? renderDropDown() : renderInput()
}

export default InputBox
