import React from "react"

const Tabs = ({
    selectedCourse,
    selectedAddOn,
    handleCourses,
    handleAddOn,
    addOn,
    ...props
}) => {
    return (
        <div className={`grid ${addOn ? "grid-cols-2 gap-2" : "grid-cols-1"}`}>
            <select
                className="ks-dropDown"
                value={selectedCourse}
                onChange={handleCourses}
                aria-labelledby="Course Dropdown"
                {...props}
            >
                <option value="Medical">Medical</option>
                <option value="Paramedical">Paramedical</option>
                <option value="Engineering">Engineering</option>
                <option value="AlliedHealthScience">
                    Allied Health Science
                </option>
                <option value="AppliedScience">Applied Science</option>
                <option value="Designing">Designing</option>
                <option value="Marine">Marine</option>
                <option value="Management">Management</option>
                <option value="AddOn">Add Ons</option>
                <option value="Others">Others</option>
            </select>

            {addOn && (
                <select
                    className="ks-dropDown"
                    value={selectedAddOn}
                    onChange={handleAddOn}
                    aria-labelledby="Add On course dropdown"
                    {...props}
                >
                    <option value="Com">Commerce</option>
                    <option value="BA">Bussiness Administration (Dual)</option>
                    <option value="CA">Computer Application (Triple)</option>
                </select>
            )}
        </div>
    )
}

export default Tabs
