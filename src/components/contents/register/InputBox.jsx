import React from "react"

const InputBox = ({
    label,
    type,
    className,
    multiline,
    dropDown,
    dropData,
    ...props
}) => {
    const renderInput = () => (
        <div className={className}>
            <label className="ks-label">{label}</label>
            {!multiline ? (
                <input
                    className="ks-input"
                    type={type ?? "text"}
                    {...props}
                    required
                />
            ) : (
                <textarea className="ks-input" {...props} required />
            )}
        </div>
    )

    const renderDropDown = () => (
        <div className={className}>
            <label className="ks-label">{label}</label>
            <select className="ks-input" {...props} required>
                <option className="bg-ks-white" value="" disabled>
                    Select
                </option>
                {dropData.map((item, index) => (
                    <option
                        className="text-ks-black bg-ks-gray"
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )

    return dropDown ? renderDropDown() : renderInput()
}

export default InputBox
