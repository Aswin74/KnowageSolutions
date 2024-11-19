import React from "react"

const Tabs = ({ text, ...props }) => {
    return (
        // <button className="p-2" {...props}>
        //     {text}
        // </button>

        <select {...props}>
            <option value="Medical">Medical</option>
            <option value="Paramedical">Paramedical</option>
            <option value="AlliedHealthScience">Allied Health Science</option>
            <option value="AppliedScience">Applied Science</option>
            <option value="Designing">Designing</option>
            <option value="Marine">Marine</option>
            <option value="Management">Management</option>
            <option value="AddOn">Add Ons</option>
        </select>
    )
}

export default Tabs
