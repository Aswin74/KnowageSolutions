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
            <label className="ks-label" htmlFor={props.id}>
                {label}
            </label>
            {!multiline ? (
                <input
                    className="ks-input"
                    type={type ?? "text"}
                    id={props.id}
                    aria-labelledby={props.id}
                    {...props}
                    required
                />
            ) : (
                <textarea
                    className="ks-input"
                    id={props.id}
                    aria-labelledby={props.id}
                    {...props}
                    required
                />
            )}
        </div>
    )

    const renderDropDown = () => (
        <div className={className}>
            <label className="ks-label" htmlFor={props.id}>
                {label}
            </label>
            <select
                className="ks-input"
                id={props.id}
                aria-labelledby={props.id}
                {...props}
                required
            >
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
