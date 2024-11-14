import React from "react"

const Tabs = ({ text, ...props }) => {
    return (
        <button className="p-2" {...props}>
            {text}
        </button>
    )
}

export default Tabs
